import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  MaxwellBoltzmannViz,
  ReactionEnergyViz,
  CatalystEnergyViz,
  RateTangentViz,
  IntegratedRateLawsViz,
  OrderDiagnosisViz,
  ArrheniusViz,
  TwoStepRDSViz,
  HalfLifeOrderViz
} from '../../../../../components/viz'

export default function ChemicalKineticsAndRateLaws() {
  const config = {
    cssPrefix: 'chem-kinetics',
    documentTitle: 'Chemical Kinetics and Rate Laws - AETHER',
    customCss: null,
    learning: {
      category: 'Unit 4',
      groupTitle: 'Kinetics',
      title: 'Chemical Kinetics and Rate Laws',
      subtitle:
        'From measuring how fast reactions go to the rate laws, energy barriers, mechanisms, and catalysts that explain why.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>Measuring How Fast a Reaction Goes</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You add a dye to bleach and watch it fade. How would you measure the rate of the
              reaction? What would you actually track over time?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You would track the absorbance of the solution over time using a spectrophotometer.
                Absorbance is proportional to concentration (Beer-Lambert law), so falling
                absorbance means falling dye concentration, that gives you the rate directly.
              </p>
            </details>
          </div>
          <p>
            The <strong>reaction rate</strong> tells you how fast concentrations change with time.
            Use this idea whenever you need one single number for how fast a reaction goes, no
            matter which species you watch. We write the concentration of A as {`$[\\text{A}]$`}, in
            moles per litre (M). For the reaction {`$a\\text{A} \\rightarrow b\\text{B}$`}, the rate
            is:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$v = \\frac{-1}{a}\\frac{d[\\text{A}]}{dt} = \\frac{1}{b}\\frac{d[\\text{B}]}{dt}$$`}</p>
          <p>
            The negative sign for reactants makes {`$v$`} a positive number. The stoichiometric
            coefficients {`$a$`} and {`$b$`} normalize the rate so you get the same {`$v$`} no
            matter which species you track.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Suppose a reaction makes 2 moles of product for every mole of reactant used up.
              Without dividing by the coefficient, you would read two different rates for the same
              reaction. The number you get would depend on which species you watch. Dividing fixes
              one unique rate per reaction.
            </p>
          </div>
          <h3>Measuring Concentrations in the Lab</h3>
          <p>
            You can measure concentrations several ways. For colored species, spectrophotometry
            works: absorbance is proportional to concentration (Beer-Lambert law). In plain words,
            the more dye in the solution, the more light it absorbs, in direct proportion. For
            reactions involving ions, you can track electrical conductance. For gas-phase reactions,
            you track total pressure.
          </p>
          <p>
            The key distinction is between <strong>average rate</strong> and{' '}
            <strong>instantaneous rate</strong>. The average rate over a time interval is{' '}
            {`$\\frac{-\\Delta[\\text{A}]}{a \\cdot \\Delta t}$`}. The instantaneous rate uses the
            derivative at a single moment. Rates usually slow down as reactants are consumed, so the
            instantaneous rate at {`$t=0$`} (the <strong>initial rate</strong>) is especially
            useful.
          </p>
          <RateTangentViz />
          <h3>Worked Example: Calculating Reaction Rate from Concentration Data</h3>
          <p>
            In the reaction {`$2\\text{N}_2\\text{O}_5 \\rightarrow 4\\text{NO}_2 + \\text{O}_2$`},
            the concentration of {`$\\text{N}_2\\text{O}_5$`} drops from 0.0165 M to 0.0124 M over
            100 s.
          </p>
          <p>The average rate of consumption of {`$\\text{N}_2\\text{O}_5$`} is:</p>
          <p className="lrn-eq">{`$$\\frac{-\\Delta[\\text{N}_2\\text{O}_5]}{\\Delta t} = \\frac{-(0.0124 - 0.0165)}{100} = 4.1 \\times 10^{-5}\\ \\frac{\\text{mol}}{\\text{L·s}}$$`}</p>
          <p>Normalize by stoichiometry to get {`$v$`}:</p>
          <p className="lrn-eq">{`$$v = \\frac{1}{2} \\times 4.1 \\times 10^{-5} = 2.05 \\times 10^{-5}\\ \\frac{\\text{mol}}{\\text{L·s}}$$`}</p>
          <p>
            The rate of formation of {`$\\text{NO}_2$`} is{' '}
            {`$4 \\times v = 8.2 \\times 10^{-5}\\ \\frac{\\text{mol}}{\\text{L·s}}$`}. The rate of
            formation of {`$\\text{O}_2$`} is{' '}
            {`$v = 2.05 \\times 10^{-5}\\ \\frac{\\text{mol}}{\\text{L·s}}$`}.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do we divide the consumption rate by 2 to get {`$v$`}?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because the stoichiometry says 2 moles of {`$\\text{N}_2\\text{O}_5$`} react per
                "event." Without dividing, you would be counting each event twice.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Rate Laws and Reaction Order</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You double the concentration of reactant A in a reaction. The rate quadruples. What
              does that tell you about how the rate depends on {`$[\\text{A}]$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Doubling {`$[\\text{A}]$`} quadruples the rate means rate{' '}
                {`$\\propto [\\text{A}]^2$`}. The order with respect to A is 2.
              </p>
            </details>
          </div>
          <p>
            The <strong>rate law</strong> links the reaction rate to concentrations. Use it when you
            need to predict how speeding up or diluting a reactant will change the rate:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$v = k[\\text{A}]^m[\\text{B}]^n$$`}</p>
          <p>
            The <strong>rate constant</strong> {`$k$`} depends on temperature but not on
            concentration. The <strong>order</strong> with respect to A is {`$m$`}; the order with
            respect to B is {`$n$`}. The <strong>overall order</strong> is {`$m + n$`}.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              You cannot read the rate law from the balanced equation. The exponents come from
              experiment, not from the coefficients. The mechanisms section later explains why.
            </p>
          </div>
          <h3>Reaction Orders</h3>
          <ul className="lrn-list">
            <li>
              A <strong>zero-order</strong> reaction has {`$v = k$`}. Rate does not depend on
              concentration at all.
            </li>
            <li>
              A <strong>first-order</strong> reaction has {`$v = k[\\text{A}]$`}. Rate doubles when
              you double {`$[\\text{A}]$`}.
            </li>
            <li>
              A <strong>second-order</strong> reaction has {`$v = k[\\text{A}]^2$`} or{' '}
              {`$v = k[\\text{A}][\\text{B}]$`}. Rate quadruples when you double {`$[\\text{A}]$`}{' '}
              (for {`$v = k[\\text{A}]^2$`}).
            </li>
          </ul>
          <p>
            The units of {`$k$`} change with order. For an {`$n^{\\text{th}}$`}-order reaction, the
            units are {`$\\frac{1}{\\text{M}^{n-1}\\cdot\\text{s}}$`}.
          </p>
          <h3>The Method of Initial Rates</h3>
          <p>
            To find {`$m$`} and {`$n$`} experimentally, you measure the initial rate at several
            different starting concentrations. You compare two experiments where one concentration
            changes while the other stays fixed.
          </p>
          <h3>Worked Example: Method of Initial Rates</h3>
          <p>Given the data for {`$\\text{A} + \\text{B} \\rightarrow \\text{P}$`}:</p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Exp</th>
                <th>{`$[\\text{A}]_0$`} (M)</th>
                <th>{`$[\\text{B}]_0$`} (M)</th>
                <th>{`$v_0$`} (M/s)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>0.10</td>
                <td>0.10</td>
                <td>{`$1.2 \\times 10^{-3}$`}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>0.20</td>
                <td>0.10</td>
                <td>{`$2.4 \\times 10^{-3}$`}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>0.10</td>
                <td>0.20</td>
                <td>{`$4.8 \\times 10^{-3}$`}</td>
              </tr>
            </tbody>
          </table>
          <p>
            Find {`$m$`}: compare Exp 1 and Exp 2 (only {`$[\\text{A}]$`} changes):
          </p>
          <p className="lrn-eq">{`$$\\frac{v_2}{v_1} = \\frac{2.4 \\times 10^{-3}}{1.2 \\times 10^{-3}} = 2 = \\left(\\frac{0.20}{0.10}\\right)^m = 2^m \\implies m = 1$$`}</p>
          <p>
            Find {`$n$`}: compare Exp 1 and Exp 3 (only {`$[\\text{B}]$`} changes):
          </p>
          <p className="lrn-eq">{`$$\\frac{v_3}{v_1} = \\frac{4.8 \\times 10^{-3}}{1.2 \\times 10^{-3}} = 4 = \\left(\\frac{0.20}{0.10}\\right)^n = 2^n \\implies n = 2$$`}</p>
          <p>Find {`$k$`} using Exp 1:</p>
          <p className="lrn-eq">{`$$k = \\frac{v_0}{[\\text{A}]^1[\\text{B}]^2} = \\frac{1.2 \\times 10^{-3}}{(0.10)(0.10)^2} = 1.2\\ \\frac{1}{\\text{M}^2\\cdot\\text{s}}$$`}</p>
          <p>
            The rate law is{' '}
            {`$v = 1.2[\\text{A}][\\text{B}]^2\\ \\frac{1}{\\text{M}^2\\cdot\\text{s}}$`}. Overall
            order = 3.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is it safe to compare only two experiments at a time?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because you hold all variables constant except one. Then the ratio of rates gives
                the ratio of only one concentration raised to its order, which you can solve
                algebraically.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Zero-order</span>
              <p>
                Same rate regardless of how much reactant is left. Plot {`$[\\text{A}]$`} vs {`$t$`}
                : straight line.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">First-order</span>
              <p>
                Rate increases linearly with concentration. Plot {`$[\\text{A}]$`} vs {`$t$`}: a
                curve. Plot {`$\\ln[\\text{A}]$`} vs {`$t$`}: straight line.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Integrated Rate Laws</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know a reaction is first-order with {`$k = 0.015\\ \\text{s}^{-1}$`} and you start
              with {`$[\\text{A}]_0 = 0.50$`} M. Without a plot, how would you find{' '}
              {`$[\\text{A}]$`} at {`$t = 30$`} s?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Use{' '}
                {`$[\\text{A}] = [\\text{A}]_0 e^{-kt} = 0.50 \\times e^{-(0.015)(30)} = 0.50 \\times e^{-0.45} \\approx 0.318$`}{' '}
                M.
              </p>
            </details>
          </div>
          <p>
            <strong>Integrated rate laws</strong> give {`$[\\text{A}]$`} directly as a function of
            time. Use them when you need the concentration at a specific time. Use them also to find
            the reaction order: try each plot and see which one comes out straight.
          </p>
          <IntegratedRateLawsViz />
          <div className="lrn-tip">
            <p>
              Two math tools show up below. First, {`$\\ln$`} (the natural log) undoes {`$e^x$`}. So{' '}
              {`$\\ln(e^{-kt}) = -kt$`}. That is the only log fact you need here.
            </p>
            <p>
              Second, a straight line has the form {`$y = mx + c$`}. The slope is {`$m$`}; the{' '}
              y-intercept is {`$c$`}. So if you plot the right transform of {`$[\\text{A}]$`}{' '}
              against {`$t$`} and get a line, its slope hands you {`$k$`} directly.
            </p>
          </div>
          <h3>Zero-Order</h3>
          <p className="lrn-eq lrn-eq-hero">{`$$[\\text{A}] = [\\text{A}]_0 - kt$$`}</p>
          <p>
            A plot of {`$[\\text{A}]$`} vs {`$t$`} is a straight line with slope {`$-k$`}. Units of{' '}
            {`$k$`}: {`$\\frac{\\text{mol}}{\\text{L·s}}$`}.
          </p>
          <h3>First-Order</h3>
          <p className="lrn-eq lrn-eq-hero">{`$$[\\text{A}] = [\\text{A}]_0 e^{-kt} \\qquad \\text{or equivalently} \\qquad \\ln[\\text{A}] = \\ln[\\text{A}]_0 - kt$$`}</p>
          <p>
            A plot of {`$\\ln[\\text{A}]$`} vs {`$t$`} is a straight line with slope {`$-k$`}. Units
            of {`$k$`}: {`$\\frac{1}{\\text{s}}$`}.
          </p>
          <h3>Second-Order (One Reactant)</h3>
          <p className="lrn-eq lrn-eq-hero">{`$$\\frac{1}{[\\text{A}]} = \\frac{1}{[\\text{A}]_0} + kt$$`}</p>
          <p>
            A plot of {`$\\frac{1}{[\\text{A}]}$`} vs {`$t$`} is a straight line with slope {`$k$`}.
            Units of {`$k$`}: {`$\\frac{1}{\\text{M·s}}$`}.
          </p>
          <h3>Second-Order (Two Different Reactants)</h3>
          <p>
            For {`$\\text{A} + \\text{B} \\rightarrow \\text{P}$`} with{' '}
            {`$[\\text{A}]_0 \\neq [\\text{B}]_0$`}:
          </p>
          <p className="lrn-eq">{`$$\\frac{1}{[\\text{B}]_0 - [\\text{A}]_0}\\ln\\frac{[\\text{B}][\\text{A}]_0}{[\\text{A}][\\text{B}]_0} = kt$$`}</p>
          <h3>nth-Order (General)</h3>
          <p>For any order {`$n \\neq 1$`}:</p>
          <p className="lrn-eq">{`$$[\\text{A}]^{1-n} = [\\text{A}]_0^{1-n} + (n-1)kt$$`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Each order produces a different kind of straight-line plot because when you rearrange
              each integrated rate law, one side is always a function of {`$[\\text{A}]$`} and the
              other is linear in {`$t$`}. The function of {`$[\\text{A}]$`} changes with order: it
              is {`$[\\text{A}]$`} itself for zero-order, {`$\\ln[\\text{A}]$`} for first-order, and{' '}
              {`$\\frac{1}{[\\text{A}]}$`} for second-order.
            </p>
          </div>
          <OrderDiagnosisViz />
          <h3>Worked Example: First-Order Integrated Rate Law</h3>
          <p>
            A first-order reaction has {`$k = 6.7 \\times 10^{-4}\\ \\text{s}^{-1}$`} and{' '}
            {`$[\\text{A}]_0 = 0.100$`} M. Find {`$[\\text{A}]$`} at {`$t = 500$`} s.
          </p>
          <p className="lrn-eq">{`$$[\\text{A}] = [\\text{A}]_0 e^{-kt} = 0.100 \\times e^{-(6.7 \\times 10^{-4})(500)}$$`}</p>
          <p className="lrn-eq">{`$$[\\text{A}] = 0.100 \\times e^{-0.335} = 0.100 \\times 0.715 = 0.0715\\ \\text{M}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do we use {`$e^{-kt}$`} and not subtract {`$kt$`} directly?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The first-order differential equation {`$\\frac{d[\\text{A}]}{dt} = -k[\\text{A}]$`}{' '}
                has an exponential solution because the rate of change of {`$[\\text{A}]$`} is
                proportional to {`$[\\text{A}]$`} itself, a hallmark of exponential decay.
              </p>
            </details>
          </div>
          <h3>Worked Example: Second-Order Integrated Rate Law</h3>
          <p>
            A second-order reaction ({`$v = k[\\text{A}]^2$`}) has{' '}
            {`$k = 0.50\\ \\frac{1}{\\text{M·s}}$`} and {`$[\\text{A}]_0 = 0.200$`} M. Find{' '}
            {`$[\\text{A}]$`} at {`$t = 5.0$`} s.
          </p>
          <p className="lrn-eq">{`$$\\frac{1}{[\\text{A}]} = \\frac{1}{[\\text{A}]_0} + kt = \\frac{1}{0.200} + (0.50)(5.0) = 5.0 + 2.5 = 7.5\\ \\text{M}^{-1}$$`}</p>
          <p className="lrn-eq">{`$$[\\text{A}] = \\frac{1}{7.5} = 0.133\\ \\text{M}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              For second-order, why does {`$[\\text{A}]$`} fall more slowly later in the reaction?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                As {`$[\\text{A}]$`} drops, the rate {`$k[\\text{A}]^2$`} drops much faster (as the
                square), so the reaction decelerates sharply.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">First-order</span>
              <p>
                A constant fraction of the reactant converts per unit time. Exponential
                concentration decay.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Second-order</span>
              <p>
                The absolute rate falls much faster as reactant is consumed. Concentration falls as
                a reciprocal, not an exponential.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Half-Lives</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A drug is eliminated from your body by a first-order process with{' '}
              {`$k = 0.0462\\ \\text{h}^{-1}$`}. Without calculating, would you expect the half-life
              to change as the drug concentration drops?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. For first-order reactions, {`$t_{1/2} = \\frac{\\ln 2}{k}$`} depends only on{' '}
                {`$k$`}, not on {`$[\\text{A}]_0$`}. The half-life stays constant.
              </p>
            </details>
          </div>
          <p>
            The <strong>half-life</strong> {`$t_{1/2}$`} is the time for {`$[\\text{A}]$`} to fall
            to half its current value. Use it as a quick handle on reaction speed, and use how it
            changes with concentration to tell the reaction order apart.
          </p>
          <HalfLifeOrderViz />
          <h3>First-Order Half-Life</h3>
          <p className="lrn-eq lrn-eq-hero">{`$$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$$`}</p>
          <p>
            For first-order reactions, the half-life is <strong>constant</strong>, it does not
            depend on {`$[\\text{A}]_0$`}. Each successive half-life removes half of whatever is
            left.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Because the rate {`$v = k[\\text{A}]$`} is always a fixed fraction {`$k$`} of whatever{' '}
              {`$[\\text{A}]$`} is. The time to halve any amount is therefore always the same. This
              is the same mathematics as radioactive decay.
            </p>
          </div>
          <h3>Second-Order Half-Life</h3>
          <p className="lrn-eq lrn-eq-hero">{`$$t_{1/2} = \\frac{1}{k[\\text{A}]_0}$$`}</p>
          <p>
            The half-life <strong>gets longer</strong> as {`$[\\text{A}]_0$`} decreases. Successive
            half-lives double each time.
          </p>
          <h3>Zero-Order Half-Life</h3>
          <p className="lrn-eq lrn-eq-hero">{`$$t_{1/2} = \\frac{[\\text{A}]_0}{2k}$$`}</p>
          <p>
            The half-life <strong>gets shorter</strong> as {`$[\\text{A}]_0$`} decreases. The
            reaction ends at a finite time.
          </p>
          <h3>Worked Example: First-Order Half-Life</h3>
          <p>
            A first-order reaction has {`$k = 5.36 \\times 10^{-4}\\ \\text{s}^{-1}$`}. Find the
            half-life.
          </p>
          <p className="lrn-eq">{`$$t_{1/2} = \\frac{0.693}{5.36 \\times 10^{-4}\\ \\text{s}^{-1}} = 1290\\ \\text{s} \\approx 21.5\\ \\text{min}$$`}</p>
          <p>
            After 21.5 min, half the reactant remains. After another 21.5 min, one-quarter remains.
            The half-life never changes.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why can we say "after 3 half-lives, one-eighth remains" without any calculation?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because each half-life multiplies the remaining amount by {`$\\frac{1}{2}$`}. After{' '}
                {`$n$`} half-lives:{' '}
                {`$[\\text{A}] = [\\text{A}]_0 \\times \\left(\\frac{1}{2}\\right)^n$`}.
              </p>
            </details>
          </div>
          <h3>Worked Example: Determining Order from Half-Lives</h3>
          <p>
            You measure {`$t_{1/2}$`} at two starting concentrations. When{' '}
            {`$[\\text{A}]_0 = 0.100$`} M, {`$t_{1/2} = 500$`} s. When {`$[\\text{A}]_0 = 0.200$`}{' '}
            M, {`$t_{1/2} = 250$`} s. Doubling {`$[\\text{A}]_0$`} halves {`$t_{1/2}$`}. This fits{' '}
            {`$t_{1/2} = \\frac{1}{k[\\text{A}]_0}$`}, which means the reaction is{' '}
            <strong>second-order</strong>.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does halving {`$t_{1/2}$`} when you double {`$[\\text{A}]_0$`} rule out
              first-order?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A first-order half-life is {`$t_{1/2} = \\frac{\\ln 2}{k}$`}, which has no{' '}
                {`$[\\text{A}]_0$`} in it. So changing the starting concentration cannot change it.
                Here the half-life did change, so the reaction cannot be first-order.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">First-order {`$t_{1/2}$`}</span>
              <p>
                Constant regardless of concentration. Measure {`$t_{1/2}$`} at two different{' '}
                {`$[\\text{A}]_0$`} values, if it doesn't change, the reaction is first-order.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Second-order {`$t_{1/2}$`}</span>
              <p>
                Inversely proportional to the starting concentration. Halves when you double{' '}
                {`$[\\text{A}]_0$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Temperature and the Arrhenius Equation</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You raise the temperature of a reaction from 300 K to 310 K. The rate constant
              doubles. If {`$R = 8.314\\ \\frac{\\text{J}}{\\text{mol·K}}$`}, what is the activation
              energy?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Use the two-temperature form:{' '}
                {`$\\ln(2) = \\frac{E_a}{R}\\left(\\frac{1}{300} - \\frac{1}{310}\\right)$`}.
                Solving gives {`$E_a \\approx 53\\ \\frac{\\text{kJ}}{\\text{mol}}$`}.
              </p>
            </details>
          </div>
          <p>
            The <strong>Arrhenius equation</strong> describes how {`$k$`} depends on temperature.
            Use it when you need a rate at a new temperature. Use it also to find the activation
            energy from rate constants measured at two or more temperatures:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$k = A e^{-E_a/RT}$$`}</p>
          <p>
            {`$A$`} is the <strong>pre-exponential factor</strong> (related to collision frequency
            and geometry). {`$E_a$`} is the <strong>activation energy</strong> in{' '}
            {`$\\frac{\\text{J}}{\\text{mol}}$`}. {`$R = 8.314\\ \\frac{\\text{J}}{\\text{mol·K}}$`}
            . {`$T$`} is in Kelvin.
          </p>
          <p>Taking the natural log:</p>
          <p className="lrn-eq">{`$$\\ln k = \\ln A - \\frac{E_a}{RT}$$`}</p>
          <p>
            A plot of {`$\\ln k$`} vs {`$\\frac{1}{T}$`} gives a straight line with slope{' '}
            {`$-\\frac{E_a}{R}$`}.
          </p>
          <ArrheniusViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A higher {`$E_a$`} makes the rate more temperature-sensitive. The factor{' '}
              {`$e^{-E_a/RT}$`} shows that a fixed {`$\\Delta T$`} changes {`$\\frac{E_a}{RT}$`} by
              a larger absolute amount when {`$E_a$`} is large. So reactions with large {`$E_a$`}{' '}
              benefit more from heating.
            </p>
            <p>
              But where does {`$e^{-E_a/RT}$`} come from? It is the fraction of molecules that
              already have enough energy to clear the barrier. The next idea shows why.
            </p>
          </div>
          <h3>Why Heat Speeds Reactions: The Maxwell-Boltzmann Distribution</h3>
          <p>
            In any sample, molecules do not all carry the same energy. A few crawl, most sit near
            the middle, and a few race. The <strong>Maxwell-Boltzmann distribution</strong> is the
            curve that shows how the molecules spread across energies.
          </p>
          <p>
            A reaction only happens when a molecule has at least the activation energy {`$E_a$`}. So
            the molecules that can react are the ones in the tail past {`$E_a$`}. The area under
            that tail is the fraction that can react. That area is exactly {`$e^{-E_a/RT}$`}.
          </p>
          <p>
            Now raise the temperature. The whole curve shifts toward higher energy and flattens out.
            The total number of molecules does not change, so the area under the whole curve stays
            the same. But the tail past {`$E_a$`} grows a lot. Many more molecules can now react, so
            the rate jumps.
          </p>
          <MaxwellBoltzmannViz />
          <div className="lrn-insight">
            <p>
              A small rise in temperature gives a large rise in rate. Heating barely moves the
              average energy, but it fattens the high-energy tail. That tail is where reactions
              happen.
            </p>
          </div>
          <h3>The Reaction-Energy Diagram</h3>
          <p>
            You can picture the barrier with a <strong>reaction-energy diagram</strong>. The
            sideways axis tracks the reaction from start to finish. The up axis is energy. The
            reactants climb to a peak, called the <strong>transition state</strong>, then drop down
            to the products.
          </p>
          <p>
            The height from the reactants up to the peak is the activation energy {`$E_a$`}. The
            molecules need that much energy just to reach the top. The drop from reactants to
            products tells you if the reaction gives off heat or takes it in.
          </p>
          <ReactionEnergyViz />
          <h3>Two-Temperature Form</h3>
          <p>
            To compare rate constants at two temperatures {`$T_1$`} and {`$T_2$`}:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$`}</p>
          <h3>Worked Example: Activation Energy from Two Temperatures</h3>
          <p>
            A reaction has {`$k_1 = 2.0 \\times 10^{-4}\\ \\text{s}^{-1}$`} at {`$T_1 = 300$`} K and{' '}
            {`$k_2 = 8.0 \\times 10^{-4}\\ \\text{s}^{-1}$`} at {`$T_2 = 320$`} K. Find {`$E_a$`}.
          </p>
          <p className="lrn-eq">{`$$\\ln\\frac{k_2}{k_1} = \\ln\\frac{8.0 \\times 10^{-4}}{2.0 \\times 10^{-4}} = \\ln 4 = 1.386$$`}</p>
          <p className="lrn-eq">{`$$\\frac{1}{300} - \\frac{1}{320} = \\frac{320-300}{300 \\times 320} = \\frac{20}{96000} = 2.083 \\times 10^{-4}\\ \\text{K}^{-1}$$`}</p>
          <p className="lrn-eq">{`$$E_a = \\frac{R \\ln(k_2/k_1)}{\\frac{1}{T_1} - \\frac{1}{T_2}} = \\frac{8.314 \\times 1.386}{2.083 \\times 10^{-4}} = 55.3\\ \\frac{\\text{kJ}}{\\text{mol}}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the formula use {`$\\frac{1}{T_1} - \\frac{1}{T_2}$`} rather than{' '}
              {`$T_2 - T_1$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because the Arrhenius equation is {`$k \\propto e^{-E_a/RT}$`}. Taking the ratio of
                two Arrhenius equations and solving for {`$E_a$`} naturally produces differences in{' '}
                {`$\\frac{1}{T}$`}, not differences in {`$T$`} itself.
              </p>
            </details>
          </div>
          <h3>Worked Example: Activation Energy from Arrhenius Plot</h3>
          <p>
            From a {`$\\ln k$`} vs {`$\\frac{1}{T}$`} plot, the slope is {`$-6650$`} K. Find{' '}
            {`$E_a$`}.
          </p>
          <p className="lrn-eq">{`$$E_a = -R \\times \\text{slope} = -(8.314)(-6650) = 55.3\\ \\frac{\\text{kJ}}{\\text{mol}}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does {`$E_a$`} equal {`$-R \\times \\text{slope}$`}, not just the slope itself?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because the Arrhenius equation gives slope {`$= -E_a/R$`}. Multiplying both sides by{' '}
                {`$-R$`} isolates {`$E_a$`}. The negative sign flips the negative slope into a
                positive activation energy. Skipping the sign gives a negative {`$E_a$`}, which is
                physically wrong for a normal reaction.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Collision Theory</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two molecules bump into each other with plenty of energy. The rate is still very low.
              What second thing might be going wrong with the collisions?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The molecules may hit in the wrong orientation. The reactive parts must line up.
                Most random collisions point the wrong way, so few of them lead to reaction.
              </p>
            </details>
          </div>
          <p>
            <strong>Collision theory</strong> says a reaction needs molecules to collide. But not
            every collision works. A collision leads to reaction only when two things are both true.
          </p>
          <ol className="lrn-list">
            <li>
              The molecules have <strong>enough energy</strong>. They must meet or beat the
              activation energy {`$E_a$`}.
            </li>
            <li>
              The molecules hit in the <strong>right orientation</strong>. The reactive parts must
              line up so the new bonds can form.
            </li>
          </ol>
          <p>
            This explains the two pieces of the Arrhenius equation. The factor {`$e^{-E_a/RT}$`} is
            the fraction of collisions with enough energy. The factor {`$A$`} folds in how often
            molecules collide and how often they line up correctly.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Picture two cars trying to link bumpers. They must be moving fast enough to lock, and
              they must be facing the right way. A fast crash from the side does nothing. A gentle
              touch head-on does nothing. You need both: enough energy and the right line-up.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does a big, floppy molecule often react more slowly than a small one?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A big molecule has only a small reactive patch. Most collisions hit the wrong part.
                So fewer collisions have the right orientation, and the rate drops.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Reaction Mechanisms and Elementary Steps</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A balanced equation says {`$2\\text{A} + \\text{B} \\rightarrow \\text{C}$`}, but the
              rate law is {`$v = k[\\text{A}][\\text{B}]$`}, not {`$v = k[\\text{A}]^2[\\text{B}]$`}
              . How is that possible?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The rate law reflects the mechanism, not the stoichiometry. The slow step in the
                mechanism involves only one A and one B, so the rate law is first-order in each.
              </p>
            </details>
          </div>
          <p>
            A <strong>reaction mechanism</strong> is the sequence of elementary steps by which
            reactants become products. Use a mechanism when the measured rate law does not match the
            balanced equation and you need to explain why. An <strong>elementary step</strong> is a
            single molecular event. Its <strong>molecularity</strong> directly gives its rate law:
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Molecularity</th>
                <th>Example</th>
                <th>Rate law</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unimolecular</td>
                <td>{`$\\text{A} \\rightarrow \\text{P}$`}</td>
                <td>{`$v = k[\\text{A}]$`}</td>
              </tr>
              <tr>
                <td>Bimolecular</td>
                <td>{`$\\text{A} + \\text{B} \\rightarrow \\text{P}$`}</td>
                <td>{`$v = k[\\text{A}][\\text{B}]$`}</td>
              </tr>
              <tr>
                <td>Termolecular</td>
                <td>{`$\\text{A} + \\text{B} + \\text{C} \\rightarrow \\text{P}$`}</td>
                <td>{`$v = k[\\text{A}][\\text{B}][\\text{C}]$`}</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Termolecular steps are rare. Three molecules must meet at the same time, all with the
              right energy and the right line-up. That almost never happens. So most three-body
              steps are really two two-body steps, one after the other.
            </p>
          </div>
          <p>
            A valid mechanism must satisfy two conditions: (1) the elementary steps add up to the
            overall stoichiometry, and (2) the rate law derived from the mechanism matches the
            experimentally measured rate law.
          </p>
          <p>
            An <strong>intermediate</strong> is a species produced in one step and consumed in
            another. It does not appear in the overall equation.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Rate-Determining Step</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A two-step mechanism has {`$k_1 = 10^{-3}\\ \\text{s}^{-1}$`} for step 1 and{' '}
              {`$k_2 = 10^6\\ \\text{s}^{-1}$`} for step 2. Which step controls the overall rate?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Step 1 controls the rate because it is much slower. The fast step 2 does not limit
                the overall throughput.
              </p>
            </details>
          </div>
          <p>
            In a multi-step mechanism, the <strong>rate-determining step (RDS)</strong> is the
            slowest step. The overall rate equals the rate of the RDS. Use the RDS shortcut when one
            step is far slower than the rest, so you can build the rate law from that step alone.
          </p>
          <TwoStepRDSViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Think of water flowing through pipes of different widths. The narrowest pipe sets the
              flow, no matter how wide the others are. The slow step is the narrow pipe. Speeding up
              a fast step that comes after it cannot help, because the molecules are already waiting
              in line at the slow step.
            </p>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">The rate-constant ratio in a fast step</span>
            <p>
              A reversible step runs both ways at once. We show this with a double arrow,{' '}
              {`$\\rightleftharpoons$`}. The forward way has rate constant {`$k_1$`}. The reverse
              way has rate constant {`$k_{-1}$`}.
            </p>
            <p>
              When the forward and reverse rates become equal, the rates balance. For{' '}
              {`$2\\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2$`} this means{' '}
              {`$k_1[\\text{NO}]^2 = k_{-1}[\\text{N}_2\\text{O}_2]$`}. Rearrange, and the ratio of
              concentrations equals the ratio of rate constants {`$k_1/k_{-1}$`}. Call this ratio{' '}
              {`$K$`}:
            </p>
            <p className="lrn-eq">{`$$K = \\frac{[\\text{N}_2\\text{O}_2]}{[\\text{NO}]^2} = \\frac{k_1}{k_{-1}} = \\frac{k_\\text{forward}}{k_\\text{reverse}}$$`}</p>
            <p>
              You need this ratio when a fast reversible step sits in front of the slow step. It
              lets you swap a hidden intermediate for things you can measure. The full treatment of
              this ratio as the equilibrium constant K, and what it tells you about how far a
              reaction goes, is in the Chemical Equilibrium topic.
            </p>
          </div>
          <h3>Worked Example: Rate Law from Mechanism via RDS</h3>
          <p>Proposed mechanism for {`$2\\text{NO} + \\text{O}_2 \\rightarrow 2\\text{NO}_2$`}:</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1 (fast equilibrium)</span>
              <p className="lrn-step-content">
                {`$2\\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2 \\quad K = \\frac{k_1}{k_{-1}}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2 (slow)</span>
              <p className="lrn-step-content">
                {`$\\text{N}_2\\text{O}_2 + \\text{O}_2 \\xrightarrow{k_2} 2\\text{NO}_2$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Derivation</span>
              <p className="lrn-step-content">
                Rate {`$= k_2[\\text{N}_2\\text{O}_2][\\text{O}_2]$`}. Eliminate the intermediate
                using the fast equilibrium:{' '}
                {`$K = \\frac{[\\text{N}_2\\text{O}_2]}{[\\text{NO}]^2}$`}, so{' '}
                {`$[\\text{N}_2\\text{O}_2] = K[\\text{NO}]^2$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">{`$$v = k_2 K[\\text{NO}]^2[\\text{O}_2]$$`}</p>
              <p className="lrn-step-content">This matches the observed third-order rate law.</p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why can't we just read the rate law from the slow step?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The slow step involves the intermediate {`$\\text{N}_2\\text{O}_2$`}, which is not a
                reactant you control. You must express {`$[\\text{N}_2\\text{O}_2]$`} in terms of
                observable species ({`$[\\text{NO}]$`}) before you have a useful rate law.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>How Catalysts Work</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A catalyst lowers the activation energy of a reaction by 10 kJ/mol at 298 K. By
              roughly what factor does the rate increase?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Factor{' '}
                {`$\\approx e^{\\Delta E_a/RT} = e^{10000/(8.314 \\times 298)} = e^{4.04} \\approx 57$`}
                . Lowering {`$E_a$`} by 10 kJ/mol at room temperature speeds the reaction by roughly
                50-fold.
              </p>
            </details>
          </div>
          <p>
            A <strong>catalyst</strong> increases the rate of a reaction by providing a different
            pathway with lower activation energy. Reach for a catalyst when a reaction is too slow
            but you cannot raise the temperature or change the products.
          </p>
          <ul className="lrn-list">
            <li>A catalyst appears in the rate law but not in the overall stoichiometry.</li>
            <li>A catalyst lowers {`$E_a$`} for both the forward and reverse reactions equally.</li>
            <li>
              A catalyst does not shift the equilibrium position, it helps the system reach
              equilibrium faster.
            </li>
            <li>A catalyst is regenerated at the end of each catalytic cycle.</li>
          </ul>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The rate-constant ratio {`$K = \\frac{k_f}{k_r}$`} stays fixed. A catalyst lowers{' '}
              {`$E_a$`} for both directions by the same amount, so it multiplies both {`$k_f$`} and{' '}
              {`$k_r$`} by the same Boltzmann factor. The ratio is unchanged. (The Chemical
              Equilibrium topic gives the matching thermodynamic reason: a catalyst leaves{' '}
              {`$\\Delta_r G^\\circ$`} untouched, so it cannot change K.)
            </p>
          </div>
          <p>
            On a reaction-energy diagram, the catalyst gives a new path with a lower hump. The
            reactants and products sit at the same heights as before. Only the barrier between them
            drops. So the energy released or taken in does not change, but the reaction is much
            faster.
          </p>
          <CatalystEnergyViz />
          <p>
            <strong>Catalyst efficiency</strong> is measured by:
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Turnover number (TON)</strong>: total moles of product per mole of catalyst
              before the catalyst dies.
            </li>
            <li>
              <strong>Turnover frequency (TOF)</strong>: TON per unit time (moles of product per
              mole of catalyst per second).
            </li>
          </ul>
        </>,

        <>
          <div className="lrn-header">
            <h2>Industrial Catalysis: The Haber Process</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Haber process for making ammonia uses an iron catalyst. Why do you think the
              temperature chosen is a compromise rather than the lowest possible temperature?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The reaction is exothermic, so thermodynamics favors low temperature. But at low
                temperature the rate is too slow to be industrially viable. The chosen temperature
                (400–500°C) balances acceptable rate against acceptable equilibrium yield.
              </p>
            </details>
          </div>
          <p>
            The <strong>Haber process</strong> makes ammonia:{' '}
            {`$\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$`}. It uses an iron
            catalyst at 400–500°C and high pressure.
          </p>
          <p>
            Here we care about the kinetics: the rate. At room temperature the reaction is far too
            slow to be useful. Engineers raise the temperature to 400–500°C to speed it up, and the
            iron catalyst lowers the activation energy so the reaction reaches equilibrium in
            practical time.
          </p>
          <div className="lrn-insight">
            <p>
              But raising the temperature lowers the yield, because the reaction gives off heat.
              That yield-versus-temperature tradeoff, and the choice of high pressure, is a
              thermodynamics question. The full analysis of yield, pressure, and temperature for the
              Haber process lives in the Chemical Equilibrium topic.
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `Define the reaction rate $v$ for $a\\text{A} \\rightarrow b\\text{B}$. Why do you divide by the stoichiometric coefficient?`,
        a: `(1) Result: $v = \\frac{-1}{a}\\frac{d[\\text{A}]}{dt} = \\frac{1}{b}\\frac{d[\\text{B}]}{dt}$. (2) Steps: the rate of disappearance of A is $-\\frac{d[\\text{A}]}{dt}$; dividing by $a$ normalizes per "event." (3) Why: without the division, tracking A vs B would give different numbers for the same reaction. Stoichiometric normalization makes $v$ unique.`
      },
      {
        q: `For $2\\text{N}_2\\text{O}_5 \\rightarrow 4\\text{NO}_2 + \\text{O}_2$, if $[\\text{N}_2\\text{O}_5]$ drops from 0.0200 M to 0.0140 M in 50 s, what is the rate $v$ and the rate of formation of $\\text{NO}_2$?`,
        a: `(1) Result: $v = 6.0 \\times 10^{-5}\\ \\frac{\\text{M}}{\\text{s}}$; $\\frac{d[\\text{NO}_2]}{dt} = 2.4 \\times 10^{-4}\\ \\frac{\\text{M}}{\\text{s}}$. (2) Steps: average consumption rate $= \\frac{0.0200-0.0140}{50} = 1.2 \\times 10^{-4}\\ \\frac{\\text{M}}{\\text{s}}$; divide by 2: $v = 6.0 \\times 10^{-5}$; multiply by 4 for $\\text{NO}_2$: $2.4 \\times 10^{-4}$. (3) Why: stoichiometry says $\\text{NO}_2$ forms 4x faster per event than $\\text{N}_2\\text{O}_5$ disappears at the normalized rate.`
      },
      {
        q: `What is the rate law for $\\text{A} + \\text{B} \\rightarrow \\text{P}$ given: doubling $[\\text{A}]$ at fixed $[\\text{B}]$ doubles the rate; doubling $[\\text{B}]$ at fixed $[\\text{A}]$ quadruples the rate? Find the rate law and overall order.`,
        a: `(1) Result: $v = k[\\text{A}][\\text{B}]^2$; overall order = 3. (2) Steps: doubling $[\\text{A}]$ doubles rate means $m = 1$; doubling $[\\text{B}]$ quadruples rate means $4 = 2^n$, so $n = 2$. (3) Why: for each reactant, the ratio of rates equals the ratio of concentrations raised to the order. The two exponents add to give the overall order.`
      },
      {
        q: `In the method of initial rates, you have: Exp 1 ($[\\text{A}]_0=0.15$, $[\\text{B}]_0=0.15$, $v_0=2.0\\times10^{-3}$ M/s), Exp 2 ($[\\text{A}]_0=0.30$, $[\\text{B}]_0=0.15$, $v_0=4.0\\times10^{-3}$ M/s), Exp 3 ($[\\text{A}]_0=0.15$, $[\\text{B}]_0=0.30$, $v_0=8.0\\times10^{-3}$ M/s). Find $m$, $n$, and $k$.`,
        a: `(1) Result: $m=1$, $n=2$, $k\\approx0.59\\ \\frac{1}{\\text{M}^2\\cdot\\text{s}}$. (2) Steps: compare Exp 1 and 2 ($[\\text{B}]$ fixed): $\\frac{4.0}{2.0}=2=2^m \\Rightarrow m=1$; compare Exp 1 and 3 ($[\\text{A}]$ fixed): $\\frac{8.0}{2.0}=4=2^n \\Rightarrow n=2$; $k = \\frac{2.0\\times10^{-3}}{(0.15)(0.15)^2}=\\frac{2.0\\times10^{-3}}{3.375\\times10^{-3}}\\approx0.59\\ \\frac{1}{\\text{M}^2\\cdot\\text{s}}$. (3) Why: holding one concentration constant isolates the dependence on the other.`
      },
      {
        q: `A first-order reaction has $k=1.2\\times10^{-3}\\ \\text{s}^{-1}$ and $[\\text{A}]_0=0.250$ M. Find $[\\text{A}]$ at $t=400$ s.`,
        a: `(1) Result: $[\\text{A}] = 0.155$ M. (2) Steps: use $[\\text{A}] = [\\text{A}]_0 e^{-kt} = 0.250 \\times e^{-(1.2\\times10^{-3})(400)} = 0.250 \\times e^{-0.48} = 0.250 \\times 0.619$. (3) Why: the first-order rate equation integrates to an exponential because the rate is proportional to the remaining concentration.`
      },
      {
        q: `A second-order reaction ($v=k[\\text{A}]^2$) has $k=0.40\\ \\frac{1}{\\text{M·s}}$ and $[\\text{A}]_0=0.100$ M. Find $[\\text{A}]$ at $t=10.0$ s.`,
        a: `(1) Result: $[\\text{A}] = 0.071$ M. (2) Steps: use $\\frac{1}{[\\text{A}]} = \\frac{1}{[\\text{A}]_0} + kt = \\frac{1}{0.100} + (0.40)(10.0) = 10.0 + 4.0 = 14.0\\ \\text{M}^{-1}$; $[\\text{A}] = \\frac{1}{14.0} = 0.071$ M. (3) Why: integrating $-\\frac{d[\\text{A}]}{[\\text{A}]^2} = k\\,dt$ gives a reciprocal form.`
      },
      {
        q: `A first-order reaction has $k=2.31\\times10^{-3}\\ \\text{s}^{-1}$. What is the half-life?`,
        a: `(1) Result: $t_{1/2} = 300$ s $= 5.0$ min. (2) Steps: $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{2.31\\times10^{-3}} = 300$ s. (3) Why: for first-order reactions, the half-life is constant, it does not depend on $[\\text{A}]_0$.`
      },
      {
        q: `You measure $t_{1/2}=400$ s at $[\\text{A}]_0=0.050$ M and $t_{1/2}=200$ s at $[\\text{A}]_0=0.100$ M. What is the reaction order?`,
        a: `(1) Result: second-order. (2) Steps: doubling $[\\text{A}]_0$ halves $t_{1/2}$; this matches $t_{1/2} = \\frac{1}{k[\\text{A}]_0}$ (second-order). First-order $t_{1/2}$ is independent of $[\\text{A}]_0$, not observed here. Zero-order $t_{1/2}$ would double when $[\\text{A}]_0$ doubles, opposite of what is observed. (3) Why: the relationship between $t_{1/2}$ and $[\\text{A}]_0$ is unique for each order.`
      },
      {
        q: `A reaction has $k_1=1.0\\times10^{-3}\\ \\text{s}^{-1}$ at 290 K and $k_2=4.0\\times10^{-3}\\ \\text{s}^{-1}$ at 310 K. Find $E_a$.`,
        a: `(1) Result: $E_a = 51.8\\ \\frac{\\text{kJ}}{\\text{mol}}$. (2) Steps: $\\ln\\frac{k_2}{k_1}=\\ln 4=1.386$; $\\frac{1}{T_1}-\\frac{1}{T_2}=\\frac{1}{290}-\\frac{1}{310}=\\frac{20}{89900}=2.225\\times10^{-4}\\ \\text{K}^{-1}$; $E_a=\\frac{R\\times1.386}{2.225\\times10^{-4}}=51.8\\ \\frac{\\text{kJ}}{\\text{mol}}$. (3) Why: the Arrhenius equation makes $\\ln k$ linear in $\\frac{1}{T}$; the two-temperature form eliminates $A$ directly.`
      },
      {
        q: `From an Arrhenius plot, the slope is $-5000$ K. Find $E_a$.`,
        a: `(1) Result: $E_a = 41.6\\ \\frac{\\text{kJ}}{\\text{mol}}$. (2) Steps: slope of $\\ln k$ vs $\\frac{1}{T}$ is $-\\frac{E_a}{R}$; so $E_a = -R \\times \\text{slope} = -(8.314)(-5000) = 41.6 \\times 10^3\\ \\frac{\\text{J}}{\\text{mol}}$. (3) Why: taking $\\ln$ of the Arrhenius equation gives a straight line in $\\frac{1}{T}$, and the slope directly encodes $E_a$ divided by the gas constant.`
      },
      {
        q: `Propose a mechanism for $2\\text{NO}+\\text{Br}_2\\rightarrow2\\text{NOBr}$ that gives the observed rate law $v=k[\\text{NO}]^2[\\text{Br}_2]$. Show the derivation using the RDS.`,
        a: `(1) Result: rate law $v = k_2 K[\\text{NO}]^2[\\text{Br}_2]$ matches observation. (2) Steps: Step 1 (fast equilibrium): $2\\text{NO}\\rightleftharpoons\\text{N}_2\\text{O}_2$, $K=k_1/k_{-1}$; Step 2 (slow): $\\text{N}_2\\text{O}_2+\\text{Br}_2\\xrightarrow{k_2}2\\text{NOBr}$. Rate $= k_2[\\text{N}_2\\text{O}_2][\\text{Br}_2]$. Eliminate: $[\\text{N}_2\\text{O}_2]=K[\\text{NO}]^2$; therefore $v=k_2 K[\\text{NO}]^2[\\text{Br}_2]$. (3) Why: you cannot use $[\\text{N}_2\\text{O}_2]$ (an intermediate) in the final rate law. Substitute it using the fast equilibrium.`
      },
      {
        q: `Why does a catalyst not shift the equilibrium constant even though it speeds up the reaction?`,
        a: `(1) Result: $K$ is unchanged because the catalyst lowers $E_a$ equally for both forward and reverse reactions. (2) Steps: $K=\\frac{k_f}{k_r}$; a catalyst multiplies both $k_f$ and $k_r$ by the same factor $e^{\\Delta E_a/RT}$; the ratio $K$ is unchanged. (3) Why: equilibrium is determined by the difference in Gibbs energy between reactants and products ($\\Delta_r G^\\circ = -RT\\ln K$). A catalyst does not change the energy of products or reactants, only the energy of the path between them.`
      },
      {
        q: `Why does a first-order reaction have a constant half-life while a second-order reaction has a concentration-dependent half-life?`,
        a: `(1) Result: first-order $t_{1/2}=\\frac{\\ln 2}{k}$ (constant); second-order $t_{1/2}=\\frac{1}{k[\\text{A}]_0}$ (decreases as reaction proceeds). (2) Steps: for first-order, the rate is always a fixed fraction $k$ of whatever $[\\text{A}]$ is. For second-order, the rate is $k[\\text{A}]^2$; as $[\\text{A}]$ falls, the rate falls quadratically, so it takes progressively longer to remove another half. (3) Why: the first-order integrated law is exponential, which has a constant time ratio. The second-order law is a reciprocal, which has a progressively longer time per half-life step.`
      },
      {
        q: `Explain from first principles why increasing temperature speeds up most reactions.`,
        a: `(1) Result: higher $T$ increases the fraction of molecules with energy exceeding $E_a$. (2) Steps: the Boltzmann factor $e^{-E_a/RT}$ gives the fraction of collisions with energy $\\geq E_a$; raising $T$ makes this fraction larger; the Maxwell-Boltzmann distribution shifts to higher energies. (3) Why: for a 10 K rise near 300 K, $\\frac{1}{T}$ changes by about 0.1%, but because it appears in the exponent $-E_a/RT$, even a 0.1% change multiplies $k$ by $e^{0.1\\% \\times E_a/R}$; for $E_a=50\\ \\frac{\\text{kJ}}{\\text{mol}}$ this roughly doubles $k$.`
      },
      {
        q: `You measure the rate of a reaction at different $[\\text{A}]$ and find it does not change. What is the rate law? What integrated form tracks $[\\text{A}]$ over time?`,
        a: `(1) Result: zero-order; $v=k$; integrated form: $[\\text{A}]=[\\text{A}]_0-kt$. (2) Steps: rate independent of $[\\text{A}]$ means $m=0$; integrating $\\frac{-d[\\text{A}]}{dt}=k$ gives $[\\text{A}]=[\\text{A}]_0-kt$; a plot of $[\\text{A}]$ vs $t$ is a straight line with slope $-k$. (3) Why: zero-order kinetics arise when the reaction rate is limited by something other than reactant concentration, e.g., a saturated enzyme or a fully covered surface.`
      },
      {
        q: `A drug is eliminated by first-order kinetics with $t_{1/2}=8.0$ h. Initial plasma concentration is 200 mg/L. How long until it falls to 12.5 mg/L?`,
        a: `(1) Result: 32 h (4 half-lives). (2) Steps: count successive halvings: $200\\rightarrow100\\rightarrow50\\rightarrow25\\rightarrow12.5$. That is 4 halvings, each taking 8.0 h. Total time $= 4\\times8.0=32$ h. Alternatively: $(\\frac{1}{2})^n=\\frac{12.5}{200}=0.0625=2^{-4}$, so $n=4$ half-lives. (3) Why: first-order decay multiplies the concentration by $\\frac{1}{2}$ for each half-life elapsed.`
      },
      {
        q: `In the Arrhenius equation, why does $\\ln k$ vs $\\frac{1}{T}$ give a straight line rather than $\\ln k$ vs $T$?`,
        a: `(1) Result: because the Arrhenius equation is $k=Ae^{-E_a/RT}$, which makes $\\ln k = \\ln A - \\frac{E_a}{R}\\times\\frac{1}{T}$, linear in $\\frac{1}{T}$, not in $T$. (2) Steps: taking the natural log: $\\ln k = \\ln A - \\frac{E_a}{RT}$; identifying $y=\\ln k$, $x=\\frac{1}{T}$, slope $=-\\frac{E_a}{R}$, intercept $=\\ln A$. (3) Why: the Boltzmann factor $e^{-E_a/RT}$ is exponential in $\\frac{1}{T}$.`
      },
      {
        q: `A reaction $\\text{A}\\rightarrow\\text{P}$ is found to have $\\ln[\\text{A}]$ vs $t$ giving a straight line. What order is it? What does the slope equal?`,
        a: `(1) Result: first-order; slope $= -k$. (2) Steps: the integrated first-order law is $\\ln[\\text{A}]=\\ln[\\text{A}]_0-kt$; this is $y=b+mx$ with slope $m=-k$; a straight line on this plot confirms first-order. If you tried $[\\text{A}]$ vs $t$ (would curve) or $\\frac{1}{[\\text{A}]}$ vs $t$ (also curved for first-order) they would not linearize. (3) Why: each integrated rate law linearizes data in a different way. The correct order gives a straight line in its characteristic plot.`
      },
      {
        q: `Predict what happens to the half-life of a zero-order reaction as the reaction proceeds and $[\\text{A}]$ falls.`,
        a: `(1) Result: the half-life decreases proportionally to $[\\text{A}]$. (2) Steps: $t_{1/2}=\\frac{[\\text{A}]}{2k}$; as $[\\text{A}]$ falls, $t_{1/2}$ falls; when $[\\text{A}]$ reaches $[\\text{A}]_0/2$, the half-life is also halved; the reaction ends in finite time. (3) Why: the zero-order reaction removes a constant amount of reactant per unit time, not a constant fraction. So it takes proportionally less time to remove half of a smaller amount.`
      },
      {
        q: `Predict the rate law if a mechanism has a fast first step $\\text{A}\\rightleftharpoons\\text{B}$ followed by a slow step $\\text{B}+\\text{C}\\rightarrow\\text{P}$.`,
        a: `(1) Result: $v=k_2 K[\\text{A}][\\text{C}]$ where $K=k_1/k_{-1}$. (2) Steps: RDS is step 2: $v=k_2[\\text{B}][\\text{C}]$; eliminate $[\\text{B}]$ using the fast equilibrium: $K=\\frac{[\\text{B}]}{[\\text{A}]}$, so $[\\text{B}]=K[\\text{A}]$; substitute: $v=k_2 K[\\text{A}][\\text{C}]$. (3) Why: the fast equilibrium sets a fixed ratio of B to A; any change in $[\\text{A}]$ propagates into $[\\text{B}]$ and then into the rate.`
      },
      {
        q: `A student plots $[\\text{A}]$ vs $t$ and gets a straight line. They conclude the reaction is first-order because "concentration decreases linearly." What is the error?`,
        a: `(1) Error: a straight line in $[\\text{A}]$ vs $t$ means zero-order, not first-order. (2) Steps: first-order gives $\\ln[\\text{A}]$ vs $t$ linear (exponential concentration decay); zero-order gives $[\\text{A}]$ vs $t$ linear (constant rate of decrease). To confirm first-order, the student should plot $\\ln[\\text{A}]$ vs $t$ and look for a straight line there. (3) Why: each integrated rate law predicts linearity in a different variable. Confusing the plots is the most common diagnostic error in kinetics.`
      },
      {
        q: `A student calculates $E_a = 55\\ \\frac{\\text{kJ}}{\\text{mol}}$ using $T_1=300$ K and $T_2=310$ K. A second student uses $T_1=300$ K and $T_2=600$ K with the same rate constants. Who gets the more reliable $E_a$?`,
        a: `(1) Result: the 300–600 K pair gives a more reliable $E_a$. (2) Steps: $E_a\\propto\\frac{\\ln(k_2/k_1)}{\\frac{1}{T_1}-\\frac{1}{T_2}}$; with a small temperature range, $\\frac{1}{T_1}-\\frac{1}{T_2}$ is small, amplifying errors in the numerator; a wider temperature range gives a more robust estimate. (3) Why: using widely separated temperatures reduces the relative error in $E_a$, but you must check that $A$ and $E_a$ are themselves temperature-independent over that range.`
      },
      {
        q: `The rate law for a reaction is $v=k[\\text{A}]^{1/2}$. What plot gives a straight line? What is the half-life?`,
        a: `(1) Result: a plot of $[\\text{A}]^{1/2}$ vs $t$ is linear; $t_{1/2}=\\frac{(2-\\sqrt{2})[\\text{A}]_0^{1/2}}{k}$. (2) Steps: use the general nth-order integrated law with $n=1/2$: $[\\text{A}]^{1/2}=[\\text{A}]_0^{1/2}-\\frac{k}{2}t$; slope $=-\\frac{k}{2}$. (3) Why: the general nth-order law works for any order, not just whole numbers. Plug in $n=1/2$ and the same algebra gives the matching straight-line plot and half-life.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Chemical Kinetics and Rate Laws',
      sections: [
        {
          title: 'Reaction Rate Definitions',
          items: [
            {
              type: 'formula',
              name: 'Stoichiometric reaction rate',
              formula: `$$v = \\frac{-1}{a}\\frac{d[\\text{A}]}{dt} = \\frac{1}{b}\\frac{d[\\text{B}]}{dt}\\text{ for }a\\text{A} \\rightarrow b\\text{B}$$`,
              desc: 'When to use: converting the rate of change of any individual species into the unique, stoichiometry-normalized reaction rate.'
            }
          ]
        },
        {
          title: 'Rate Laws',
          items: [
            {
              type: 'formula',
              name: 'General rate law',
              formula: `$$v = k[\\text{A}]^m[\\text{B}]^n$$`,
              desc: 'When to use: expressing how the reaction rate depends on reactant concentrations; $m+n$ is the overall order.'
            },
            {
              type: 'formula',
              name: 'Units of rate constant',
              formula: `$$k\\text{ has units }\\frac{1}{\\text{M}^{n-1}\\cdot\\text{s}}\\text{ where }n\\text{ is the overall order}$$`,
              desc: 'When to use: checking dimensional consistency of a rate expression.'
            }
          ]
        },
        {
          title: 'Integrated Rate Laws',
          items: [
            {
              type: 'table',
              headers: [
                'Order',
                'Rate law',
                'Integrated form',
                'Half-life',
                'Linear plot',
                'Units of k'
              ],
              rows: [
                [
                  'Zero',
                  '$v=k$',
                  '$[\\text{A}]=[\\text{A}]_0-kt$',
                  '$t_{1/2}=\\frac{[\\text{A}]_0}{2k}$',
                  '$[\\text{A}]$ vs $t$',
                  'mol/(L s)'
                ],
                [
                  'First',
                  '$v=k[\\text{A}]$',
                  '$[\\text{A}]=[\\text{A}]_0 e^{-kt}$; $\\ln[\\text{A}]=\\ln[\\text{A}]_0-kt$',
                  '$t_{1/2}=\\frac{\\ln 2}{k}=\\frac{0.693}{k}$ (constant)',
                  '$\\ln[\\text{A}]$ vs $t$',
                  '1/s'
                ],
                [
                  'Second (one)',
                  '$v=k[\\text{A}]^2$',
                  '$\\frac{1}{[\\text{A}]}=\\frac{1}{[\\text{A}]_0}+kt$',
                  '$t_{1/2}=\\frac{1}{k[\\text{A}]_0}$',
                  '$\\frac{1}{[\\text{A}]}$ vs $t$',
                  '1/(M s)'
                ]
              ]
            },
            {
              type: 'formula',
              name: 'Second-order, two unequal reactants',
              formula: `$$\\frac{1}{[\\text{B}]_0-[\\text{A}]_0}\\ln\\frac{[\\text{B}][\\text{A}]_0}{[\\text{A}][\\text{B}]_0}=kt$$`,
              desc: `When to use: second-order reaction $\\text{A}+\\text{B}\\rightarrow\\text{P}$ when $[\\text{A}]_0\\neq[\\text{B}]_0$.`
            },
            {
              type: 'formula',
              name: 'nth-order integrated law',
              formula: `$$[\\text{A}]^{1-n}=[\\text{A}]_0^{1-n}+(n-1)kt$$`,
              desc: 'When to use: any reaction order $n\\neq1$; reduces to the zero-order and second-order forms as special cases.'
            }
          ]
        },
        {
          title: 'Arrhenius Equation and Temperature Dependence',
          items: [
            {
              type: 'formula',
              name: 'Arrhenius equation',
              formula: `$$k=Ae^{-E_a/RT}$$`,
              desc: `When to use: predicting how the rate constant changes with temperature; $A$ is the pre-exponential factor, $E_a$ is activation energy, $R=8.314\\ \\frac{\\text{J}}{\\text{mol·K}}$.`
            },
            {
              type: 'formula',
              name: 'Arrhenius linearized',
              formula: `$$\\ln k=\\ln A-\\frac{E_a}{RT}$$`,
              desc: `When to use: extracting $E_a$ from the slope of a $\\ln k$ vs $\\frac{1}{T}$ plot; slope $=-\\frac{E_a}{R}$.`
            },
            {
              type: 'formula',
              name: 'Two-temperature Arrhenius',
              formula: `$$\\ln\\frac{k_2}{k_1}=\\frac{E_a}{R}\\left(\\frac{1}{T_1}-\\frac{1}{T_2}\\right)$$`,
              desc: 'When to use: calculating $E_a$ from rate constants measured at exactly two temperatures $T_1$ and $T_2$.'
            }
          ]
        },
        {
          title: 'Reaction Mechanisms',
          items: [
            {
              type: 'formula',
              name: 'Rate via RDS',
              formula: `$$v=k_2[\\text{I}];\\text{ eliminate }[\\text{I}]\\text{ using fast equilibrium}$$`,
              desc: 'When to use: deriving the overall rate law when one step is much slower than all others and an intermediate must be eliminated.'
            },
            {
              type: 'formula',
              name: 'Fast pre-equilibrium step',
              formula: `$$v=k_2 K[\\text{A}][\\text{B}];\\quad K=k_1/k_{-1}$$`,
              desc: 'When to use: a fast reversible first step ($k_{-1}\\gg k_2$) sits before a slow step; use $K$ to swap out the intermediate.'
            }
          ]
        }
      ]
    }
  }

  return <LearningTemplate config={config} />
}
