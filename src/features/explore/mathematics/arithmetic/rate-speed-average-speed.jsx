import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './rate-speed-average-speed-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'rsa',
    documentTitle: 'Rate, Speed, Average Speed - AETHER',
    learning: {
      groupTitle: 'Ratio, Proportion, and Rate',
      category: 'Arithmetic',
      title: 'Rate, Speed, Average Speed',
      subtitle:
        'How constant rate makes every speed, flow, and work problem solvable from first principles.',
      sections: [
        // == Section 0: What Rate Means =========================================
        <>
          <h2>What Rate Means</h2>
          <p>
            Rates let you predict the future: how long before the tank is full, when two trains
            meet, or how many workers you need to finish on time. Master this and you can predict
            outcomes the moment you know the rate.
          </p>
          <p>
            A rate is what you get when you divide two quantities of different types. Distance alone
            is just a number of miles. Time alone is just a number of hours. Dividing miles by hours
            gives something new: miles per hour.
          </p>
          <p>
            Use this any time you compare two quantities measured in different units. Speed (miles
            per hour), water flow (gallons per minute), and work rate (area per hour) are all rates.
            The same single rate works for every pair of values only when the motion stays constant.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>A car travels 60 miles. Can you say anything about its speed from this alone?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. Speed requires two quantities: distance and time. Without the time, the rate is
                undefined. You need both number lines identified before division makes sense.
              </p>
            </details>
          </div>
          <p>
            Now add the time. A car goes 60 miles in 2 hours. Divide the miles by the hours:
            {` $60 \\div 2 = 30$`} miles per hour. That single number, 30 mph, is the rate. It pairs
            the two number lines into one new quantity.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Rate</span>
            <div className="lrn-definition-desc">
              <p>{`Rate $= \\dfrac{M}{N}$ where $M$ and $N$ are quantities of different types. You must identify the units on both number lines before dividing.`}</p>
            </div>
          </div>
          <h3>Two Number Lines, One Division</h3>
          <p>
            Place distance values on one number line (miles). Place time values on another (hours).
            The rate is the result of dividing one value from the first line by the matching value
            from the second.
          </p>
          <viz.TwoNumberLines C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why must the two number lines measure different types of quantity? What goes wrong if
              both measure distance?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Dividing two distance values gives a dimensionless ratio, not a rate. A ratio like
                {` $\\frac{30\\,\\text{mi}}{10\\,\\text{mi}} = 3$`} is just a pure number. It tells
                you one distance is 3 times the other. A rate requires different types on each line
                so the division produces a new unit that carries meaning, like miles per hour.
              </p>
            </details>
          </div>
        </>,

        // == Section 1: Constant Rate ===========================================
        <>
          <h2>Constant Rate</h2>
          <p>
            {`A motion has constant speed when the ratio $\\frac{D}{T}$ holds for every time interval, not just one specific interval.`}
          </p>
          <p>
            Use this any time a problem says "at a constant rate", "at a steady speed", or "at a
            uniform rate". This condition is the foundation for all the reasoning that follows.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A faucet flows at a constant rate. In 5 minutes, 10 gallons flow out. In 10 minutes, how many gallons flow out? In 2.5 minutes?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`In 10 minutes: 20 gallons. In 2.5 minutes: 5 gallons. The rate $r = \\frac{10}{5} = 2$ gal/min is constant. Any time interval gives the same quotient.`}
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Constant Rate</span>
            <div className="lrn-definition-desc">
              <p>{`A rate is constant when $\\dfrac{D}{T} = v$ for every time interval $T$, without exception. The position-time graph is a straight line through the origin with slope $v$ (slope is rise over run, which here is exactly the rate).`}</p>
            </div>
          </div>
          <p>
            {`Start with one case. A car holds a steady 30 mph for 2 hours. The distance is $30 \\times 2 = 60$ miles. The same three numbers rearrange three ways.`}
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Distance, Speed, Time</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{distance} = \\text{speed} \\times \\text{time}, \\qquad \\text{speed} = \\frac{\\text{distance}}{\\text{time}}, \\qquad \\text{time} = \\frac{\\text{distance}}{\\text{speed}}$$`}</p>
              <p>
                These are one fact written three ways. Know any two of distance, speed, and time,
                and you can find the third.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Average Rate</span>
            <div className="lrn-definition-desc">
              <p>{`The average rate over a specific interval $t$ is $\\dfrac{w}{t}$, where $w$ is the total output (the distance covered, volume filled, or area done) and $t$ is the duration. When rate is constant, the average equals $v$ for every interval.`}</p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Constant Rate</span>
              <p>{`$\\frac{D}{T} = v$ for every interval $T$. Graph: straight line through origin. Same slope everywhere.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Average Rate</span>
              <p>{`$\\frac{w}{t}$ for one specific interval $t$. Always computable. Does not require constancy.`}</p>
            </div>
          </div>
          <viz.ConstantSpeedPositionTimeGraph C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the position-time graph pass through the origin for constant-speed motion?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`At $T = 0$, the distance covered is $D = v \\times 0 = 0$. Zero time means zero distance. So the graph starts at $(0, 0)$. Motion that begins with a head start in distance does not start from the origin, so it is not this kind of constant-rate motion.`}
              </p>
            </details>
          </div>
          <viz.FaucetAccumulation C={C} />
          <div className="lrn-callout">
            <p>
              The constancy assumption is what makes the proportion in the next section valid.
              Without stating it explicitly, "setting up a proportion" is unjustified. Always name
              the constant rate before using it.
            </p>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
            <p>A runner moves at 6 km/h for 4 km. Find the time in minutes.</p>
            <ol className="lrn-list">
              <li>{`Time $= \\dfrac{D}{v} = \\dfrac{4}{6} = \\dfrac{2}{3}$ hours.`}</li>
              <li>{`Convert: $\\dfrac{2}{3} \\times 60 = 40$ minutes.`}</li>
            </ol>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
            <p>A cyclist moves at 9 km/h for 6 km. Find the time in minutes.</p>
            <ol className="lrn-list">
              <li>{`Time $= \\dfrac{6}{\\underline{\\hspace{1em}}} = \\underline{\\hspace{2em}}$ hours.`}</li>
              <li>{`Convert: $\\underline{\\hspace{2em}} \\times 60 = \\underline{\\hspace{2em}}$ minutes.`}</li>
            </ol>
            <details className="lrn-faded-reveal">
              <summary>Full solution</summary>
              <p>{`Time $= \\dfrac{6}{9} = \\dfrac{2}{3}$ hours $= 40$ minutes.`}</p>
            </details>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>A swimmer moves at 2 km/h for 500 metres. Find the time in minutes.</p>
            <details className="lrn-faded-reveal">
              <summary>Full solution</summary>
              <p>{`Convert: $500\\,\\text{m} = 0.5\\,\\text{km}$. Time $= \\dfrac{0.5}{2} = 0.25$ hours $= 15$ minutes.`}</p>
            </details>
          </div>
        </>,

        // == Section 2: Solving for the Missing Quantity ========================
        <>
          <h2>Solving for the Missing Quantity</h2>
          <p>
            When rate is constant, two different measurements of the same motion both equal the same
            rate.
          </p>
          <p>
            Give two of the three quantities: distance, time, or rate. This method finds the third.
            The proportion you write comes from constancy, not from assumption.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A faucet fills $3\\tfrac{1}{2}$ cubic feet in 25 seconds. If you need $11\\tfrac{1}{2}$ cubic feet, will it take more or less than 82 seconds?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`More. The volume $11\\tfrac{1}{2}$ is about 3.3 times $3\\tfrac{1}{2}$. So the time will be about $3.3 \\times 25 \\approx 82$ seconds. The exact answer is $82\\tfrac{1}{7}$ seconds.`}
              </p>
            </details>
          </div>
          <h3>The Faucet Filling Problem</h3>
          <p>
            {`A faucet at constant rate fills $3\\tfrac{1}{2}$ cubic feet in 25 seconds. How long to fill $11\\tfrac{1}{2}$ cubic feet?`}
          </p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Name the constant rate $r$ (ft³/sec). Since the rate is constant: $r = \\dfrac{3\\tfrac{1}{2}}{25}$.`}</li>
              <li>{`Filling $11\\tfrac{1}{2}$ ft³ in $t$ seconds also gives rate $r$: $r = \\dfrac{11\\tfrac{1}{2}}{t}$.`}</li>
              <li>{`Both expressions equal $r$, so $\\dfrac{11\\tfrac{1}{2}}{t} = \\dfrac{3\\tfrac{1}{2}}{25}$.`}</li>
              <li>{`Cross-multiply: $25 \\times 11\\tfrac{1}{2} = 3\\tfrac{1}{2} \\times t \\Rightarrow \\dfrac{575}{2} = \\dfrac{7t}{2}$.`}</li>
              <li>{`Solve: $t = \\dfrac{575}{7} = 82\\tfrac{1}{7}$ seconds.`}</li>
            </ol>
          </div>
          <viz.FaucetFillingProportion C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does the proportion $\\frac{11\\tfrac{1}{2}}{t} = \\frac{3\\tfrac{1}{2}}{25}$ hold? Where does it come from?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Both sides equal the same constant rate $r$. The left side is $r$ computed from the second scenario. The right side is $r$ computed from the first. If two things both equal $r$, they equal each other (this is transitivity). So the proportion comes from constancy. It is not an assumption.`}
              </p>
            </details>
          </div>
          <h3>A Runner at Constant Speed</h3>
          <p>A man runs at 8 km/h for 5200 metres. How long does he run in minutes?</p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Convert units: $5200\\,\\text{m} = 5.2\\,\\text{km}$.`}</li>
              <li>{`Time $= \\dfrac{D}{v} = \\dfrac{5.2}{8} = 0.65$ hours.`}</li>
              <li>{`Convert to minutes: $0.65 \\times 60 = 39$ minutes.`}</li>
            </ol>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
            <p>{`A pipe fills a tank at constant rate. It fills $4$ litres in $20$ seconds. Find the time to fill $10$ litres.`}</p>
            <ol className="lrn-list">
              <li>{`Rate $r = \\dfrac{4}{20} = 0.2$ L/sec.`}</li>
              <li>{`Set up: $\\dfrac{10}{t} = 0.2$.`}</li>
              <li>{`Solve: $t = \\dfrac{10}{0.2} = 50$ seconds.`}</li>
            </ol>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
            <p>{`A pipe fills a tank at constant rate. It fills $6$ litres in $30$ seconds. Find the time to fill $15$ litres.`}</p>
            <ol className="lrn-list">
              <li>{`Rate $r = \\dfrac{6}{30} = \\underline{\\hspace{2em}}$ L/sec.`}</li>
              <li>{`Set up: $\\dfrac{15}{t} = \\underline{\\hspace{2em}}$.`}</li>
              <li>{`Solve: $t = \\underline{\\hspace{2em}}$ seconds.`}</li>
            </ol>
            <details className="lrn-faded-reveal">
              <summary>Full solution</summary>
              <p>{`$r = 0.2$ L/sec. $\\dfrac{15}{t} = 0.2$, so $t = 75$ seconds.`}</p>
            </details>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>{`A hose fills a pool at constant rate. It fills 120 litres in 8 minutes. How long to fill 300 litres?`}</p>
            <details className="lrn-faded-reveal">
              <summary>Full solution</summary>
              <p>{`Rate $r = \\dfrac{120}{8} = 15$ L/min. Time $= \\dfrac{300}{15} = 20$ minutes.`}</p>
            </details>
          </div>
          <p>
            You can now find any one of distance, time, or rate when a problem gives you the other
            two.
          </p>
        </>,

        // == Section 3: Unit Conversion =========================================
        <>
          <h2>Unit Conversion</h2>
          <p>
            Once you can find a missing quantity, you often need to express the rate in different
            units. The same constant-rate logic applies: when rate is constant, you can compute the
            average rate over any convenient time interval, and that average equals the constant
            rate.
          </p>
          <p>
            Use this when converting a speed from one unit system to another. Choose an interval
            that makes the arithmetic clean, then apply the constant-rate principle.
          </p>
          <p>
            Speed limits in the US use mph. Physics labs use m/s. A driver or scientist crossing
            unit systems needs to convert on the fly. The rate is the same physical quantity,
            expressed differently.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A faucet flows at 5 gallons per minute. Is its rate in quarts per second more or less than 1?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Less than 1. Five gallons is 20 quarts. Twenty quarts in 60 seconds gives $\\frac{20}{60} = \\frac{1}{3}$ quart per second.`}
              </p>
            </details>
          </div>
          <h3>Gallons per Minute to Quarts per Second</h3>
          <p>A faucet flows at 5 gallons per minute. Express this rate in quarts per second.</p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>Use a 1-minute interval: 5 gallons flow out in 60 seconds.</li>
              <li>{`Convert gallons to quarts: $5 \\times 4 = 20$ quarts.`}</li>
              <li>{`Average rate over 60 seconds: $\\dfrac{20\\,\\text{qt}}{60\\,\\text{sec}} = \\dfrac{1}{3}$ qt/sec.`}</li>
              <li>{`Since the rate is constant, $\\dfrac{1}{3}$ qt/sec is the constant rate.`}</li>
            </ol>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does using a 1-minute interval give the correct constant rate in the new units?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Constant rate means $\\frac{w}{t} = r$ for any interval $t$. We chose $t = 60$ seconds. The total output in that interval is 20 quarts. The average rate is $\\frac{20}{60} = \\frac{1}{3}$ qt/sec. Because the rate is constant, this average equals the constant rate in the new unit. We only changed the units on both number lines, not the physical rate.`}
              </p>
            </details>
          </div>
          <h3>Feet per Second to Miles per Hour</h3>
          <p>{`Convert $85\\tfrac{1}{15}$ ft/sec to mph.`}</p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`There are 5280 feet in 1 mile, so you convert feet to miles by dividing by 5280.`}</li>
              <li>{`$85\\tfrac{1}{15}$ ft $= \\dfrac{1276}{15}$ ft. Divide by 5280: $\\dfrac{1276}{15} \\div 5280 = \\dfrac{1276}{15 \\times 5280} = \\dfrac{29}{1800}$ mi.`}</li>
              <li>{`Use a 1-hour interval (3600 seconds): $3600 \\times \\dfrac{29}{1800} = 58\\,\\text{mi}$.`}</li>
              <li>{`Rate $= 58\\,\\text{mph}$.`}</li>
            </ol>
          </div>
          <viz.UnitConversionChain C={C} />
          <h3>Kilometres per Hour to Metres per Second</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Before computing: will 54 km/h expressed in m/s be a number more or less than 20?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Less than 20. One km/h is about 0.278 m/s. So 54 km/h is about 15 m/s, well under
                20.
              </p>
            </details>
          </div>
          <p>Convert 54 km/h to m/s.</p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$54\\,\\text{km/h} = 54{,}000\\,\\text{m/h}$.`}</li>
              <li>{`$= \\dfrac{54{,}000}{3600}\\,\\text{m/s} = 15\\,\\text{m/s}$.`}</li>
            </ol>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Unit conversion is choosing a new pair of number lines. You keep the same physical rate, re-expressed in new units. The quotient $\\frac{M}{N}$ is the same rate. Only the units labelling $M$ and $N$ change. Constancy lets you read the average rate from any interval you like.`}
            </p>
          </div>
          <p>You can now express any constant rate in whatever units a problem asks for.</p>
        </>,

        // == Section 4: Average Speed Over a Whole Journey ======================
        <>
          <h2>Average Speed Over a Whole Journey</h2>
          <p>
            When motion is not constant throughout, you can still compute the average speed for the
            whole trip.
          </p>
          <p>
            Use this for any multi-leg journey where each leg has a different speed. Add the total
            distance and divide by the total time. Never take the arithmetic mean of the two speeds
            directly.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A car drives 60 km at 30 km/h, then 180 km at 160 km/h. Is the average speed closer to
              30 km/h or 160 km/h?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Much closer to 160 km/h. The car spends most of its time at 160 km/h. The short slow
                leg drags the average down only a little. The arithmetic mean 95 km/h is wrong.
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Average Speed</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{avg speed} = \\frac{\\text{total distance}}{\\text{total time}}$$`}</p>
              <p>This is not the arithmetic mean of the individual speeds.</p>
            </div>
          </div>
          <h3>Two-Leg Car Journey</h3>
          <p>A car drives 60 km at 30 km/h then 180 km at 160 km/h. Find the average speed.</p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Time for first leg: $\\dfrac{60}{30} = 2$ hours.`}</li>
              <li>{`Time for second leg: $\\dfrac{180}{160} = 1.125$ hours.`}</li>
              <li>{`Total distance: $60 + 180 = 240$ km. Total time: $2 + 1.125 = 3.125$ hours.`}</li>
              <li>{`Average speed: $\\dfrac{240}{3.125} \\approx 76.8$ km/h.`}</li>
            </ol>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is the average speed not simply $\\frac{30 + 160}{2} = 95$ km/h?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The arithmetic mean $\\frac{30+160}{2}$ weights each speed equally. But the two legs take different amounts of time. The car spends 2 hours at 30 km/h and only 1.125 hours at 160 km/h. Average speed must weight each speed by the time spent at it. That is exactly what $\\frac{\\text{total distance}}{\\text{total time}}$ does.`}
              </p>
            </details>
          </div>
          <viz.AverageSpeedTwoLegs C={C} />
          <h3>Swallow in Flight</h3>
          <p>
            A swallow flies at 50 km/h for 3 hours, then 40 km/h for 2 hours. Find the average speed
            for the whole journey.
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Distance leg 1: $50 \\times 3 = 150$ km. Distance leg 2: $40 \\times 2 = 80$ km.`}</li>
              <li>{`Total distance: $150 + 80 = 230$ km. Total time: $3 + 2 = 5$ hours.`}</li>
              <li>{`Average speed: $\\dfrac{230}{5} = 46$ km/h.`}</li>
            </ol>
          </div>
          <div className="lrn-callout">
            <p>
              The average speed 46 km/h is below both individual speeds. The slower leg dominates
              because it takes a larger fraction of the total time.
            </p>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
            <p>A car goes 80 km at 40 km/h, then 60 km at 30 km/h. Find the average speed.</p>
            <ol className="lrn-list">
              <li>{`Time leg 1: $\\dfrac{80}{40} = 2$ hr. Time leg 2: $\\dfrac{60}{30} = 2$ hr.`}</li>
              <li>{`Total distance: $80 + 60 = 140$ km. Total time: $2 + 2 = 4$ hr.`}</li>
              <li>{`Average speed: $\\dfrac{140}{4} = 35$ km/h.`}</li>
            </ol>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
            <p>A car goes 100 km at 50 km/h, then 120 km at 60 km/h. Find the average speed.</p>
            <ol className="lrn-list">
              <li>{`Time leg 1: $\\dfrac{100}{50} = \\underline{\\hspace{2em}}$ hr. Time leg 2: $\\dfrac{120}{60} = \\underline{\\hspace{2em}}$ hr.`}</li>
              <li>{`Total distance: $\\underline{\\hspace{2em}}$ km. Total time: $\\underline{\\hspace{2em}}$ hr.`}</li>
              <li>{`Average speed: $\\dfrac{\\underline{\\hspace{2em}}}{\\underline{\\hspace{2em}}} = \\underline{\\hspace{2em}}$ km/h.`}</li>
            </ol>
            <details className="lrn-faded-reveal">
              <summary>Full solution</summary>
              <p>{`Time leg 1: 2 hr. Time leg 2: 2 hr. Total: 220 km in 4 hr. Average speed: $\\dfrac{220}{4} = 55$ km/h.`}</p>
            </details>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>A train goes 150 km at 75 km/h, then 200 km at 100 km/h. Find the average speed.</p>
            <details className="lrn-faded-reveal">
              <summary>Full solution</summary>
              <p>{`Time leg 1: $\\dfrac{150}{75} = 2$ hr. Time leg 2: $\\dfrac{200}{100} = 2$ hr. Total: 350 km in 4 hr. Average speed: $\\dfrac{350}{4} = 87.5$ km/h.`}</p>
            </details>
          </div>
        </>,

        // == Section 5: Reduced-Rate Problems ===================================
        <>
          <h2>Reduced-Rate Problems</h2>
          <p>
            When the rate slows down, the same job takes longer. The exact factor depends on how
            much the rate was reduced.
          </p>
          <p>
            Use this when a rate drops by a known percentage. Find the new time to complete the same
            job.
          </p>
          <p>
            Water-saving devices in public buildings cut the faucet flow rate. Time-of-use
            electricity slows appliances at peak hours. Throttled internet caps your download rate.
            All use the same math.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A faucet fills a tub in 15 minutes. The rate is reduced by 15%. Will the new time be closer to 17 minutes or 20 minutes?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Closer to 17 minutes. A 15% reduction means 85% of the original rate. Time increases by a factor of $\\frac{100}{85} \\approx 1.18$. So $15 \\times 1.18 \\approx 17.6$ minutes.`}
              </p>
            </details>
          </div>
          <h3>Deriving the New Time from Constancy</h3>
          <p>
            A faucet fills a tub in 15 minutes. The rate drops by 15%. How long to fill the same
            tub?
          </p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Let $V$ = total volume. Original constant rate $r = \\dfrac{V}{15}$ gal/min.`}</li>
              <li>{`At the reduced rate $(85\\%)r$, the faucet takes $t$ minutes: $\\dfrac{V}{t} = (85\\%)r$.`}</li>
              <li>{`Rearrange: $r = \\dfrac{100}{85} \\times \\dfrac{V}{t}$.`}</li>
              <li>{`Substitute $r = \\dfrac{V}{15}$: $\\dfrac{V}{15} = \\dfrac{100}{85} \\times \\dfrac{V}{t}$.`}</li>
              <li>{`Cancel $V$: $\\dfrac{1}{15} = \\dfrac{100}{85t}$, so $85t = 1500$, giving $t = 17\\tfrac{11}{17}$ minutes.`}</li>
            </ol>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why do we cancel $V$ in step 5? What does this tell you about whether $V$ matters?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Cancelling $V$ shows the answer does not depend on the tub's size. The percentage reduction alone fixes the ratio of old time to new time. The tub size $V$ does not. This is why the general algorithm $t = k \\times \\frac{100}{100-N}$ works for any tub volume.`}
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Reduced-Rate Algorithm</span>
            <div className="lrn-definition-desc">
              <p>{`If the original time is $k$ minutes and the rate drops by $N\\%$:`}</p>
              <p>{`$$t = k \\times \\frac{100}{100 - N}$$`}</p>
              <p>Use this for any constant-rate job where the rate drops by a known percentage.</p>
            </div>
          </div>
          <viz.ReducedRateCurve C={C} />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`A drop of $N\\%$ means the new rate is $\\frac{100-N}{100}$ of the original. Since the job size stays the same, time and rate are inversely related: $\\text{time} = \\frac{\\text{job}}{\\text{rate}}$. Halving the rate doubles the time. If the rate becomes $\\frac{100-N}{100}$ of the original, the time becomes $\\frac{100}{100-N}$ times longer. That is not the same as adding $N\\%$ to the time. It is always more.`}
            </p>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">FADED EXERCISE</span>
            <p>{`A tap fills a tub in 31 minutes. The flow drops by 25%. Find the new time.`}</p>
            <ol className="lrn-list">
              <li>{`$k = 31$, $N = 25$.`}</li>
              <li>{`$t = 31 \\times \\dfrac{100}{100 - \\_\\_\\_} = 31 \\times \\dfrac{100}{\\_\\_\\_} = \\dfrac{3100}{\\_\\_\\_}$ minutes.`}</li>
            </ol>
            <details className="lrn-faded-reveal">
              <summary>Full solution</summary>
              <p>
                {`$t = 31 \\times \\dfrac{100}{75} = \\dfrac{3100}{75} = 41\\tfrac{1}{3}$ minutes.`}
              </p>
            </details>
          </div>
          <div className="lrn-insight">
            <p>
              {`You do not need to memorize this algorithm. If you understand that constant rate means $\\frac{V}{t} = r$ and the new rate is $(1 - N/100) \\times r$, the derivation takes five steps and can be reconstructed any time.`}
            </p>
          </div>
        </>,

        // == Section 6: Cooperative Work ========================================
        <>
          <h2>Cooperative Work</h2>
          <p>
            When two or more people work together on separate parts of the same job, their
            individual constant rates add up.
          </p>
          <p>
            Use this when workers or pipes each run at a constant rate on the same job. They must
            not interfere with each other.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Regina mows a lawn alone in 10 hours. Eric mows the same lawn alone in 12 hours. Together: will they finish in more or less than 5 hours?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`More than 5 hours. Together they are faster than Regina alone, but they cannot finish in half of Regina's time because Eric is slower. The answer is $5\\tfrac{5}{11}$ hours.`}
              </p>
            </details>
          </div>
          <h3>Why Combined Rate Equals R + E</h3>
          <p>
            {`Let the lawn area be $A$ sq ft. Regina's constant rate is $R = \\frac{A}{10}$ sq ft/hr. Eric's constant rate is $E = \\frac{A}{12}$ sq ft/hr.`}
          </p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`In any time interval $t$: Regina mows $Rt$ sq ft and Eric mows $Et$ sq ft.`}</li>
              <li>{`Together they mow $(R + E)t$ sq ft in interval $t$.`}</li>
              <li>{`Average combined rate $= \\dfrac{(R+E)t}{t} = R + E$.`}</li>
              <li>{`This holds for any $t$, so combined rate is constant at $R + E$ sq ft/hr.`}</li>
              <li>{`When the whole lawn $A$ is done in time $T$: $R + E = \\dfrac{A}{T}$, so $T = \\dfrac{A}{R+E}$.`}</li>
            </ol>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Cooperative Work Formula</span>
            <div className="lrn-definition-desc">
              <p>{`$$T = \\frac{A}{R + E} = \\frac{1}{\\dfrac{1}{k_1} + \\dfrac{1}{k_2}}$$`}</p>
              <p>{`where $k_1$ and $k_2$ are the individual times to complete the whole job.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`The sum $R + E$ is constant because each individual rate is constant. Constants add to constants. This is why combining independent workers is always safe to model this way. Suppose you allow interference: two painters paint the same strip at once. Then the individual rates no longer add up to the total area. Then this formula does not apply.`}
            </p>
          </div>
          <h3>Computing the Time for Regina and Eric</h3>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$R = \\dfrac{A}{10}$, $E = \\dfrac{A}{12}$.`}</li>
              <li>{`$T = \\dfrac{A}{\\dfrac{A}{10} + \\dfrac{A}{12}} = \\dfrac{1}{\\dfrac{1}{10} + \\dfrac{1}{12}}$.`}</li>
              <li>{`$\\dfrac{1}{10} + \\dfrac{1}{12} = \\dfrac{6}{60} + \\dfrac{5}{60} = \\dfrac{11}{60}$.`}</li>
              <li>{`$T = \\dfrac{1}{\\,11/60\\,} = \\dfrac{60}{11} = 5\\tfrac{5}{11}$ hours.`}</li>
            </ol>
          </div>
          <viz.ReginaEricAreaModel C={C} />
          <div className="lrn-callout">
            <p>
              {`Pictorial variant: if Eric takes 15 hours instead of 12, then in one hour Regina mows $\\frac{1}{10}$ of the lawn. Eric mows $\\frac{1}{15}$ of the lawn. Together per hour: $\\frac{1}{10} + \\frac{1}{15} = \\frac{3}{30} + \\frac{2}{30} = \\frac{1}{6}$. Six hours of combined work fills the whole lawn, so they finish in 6 hours.`}
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rigorous</span>
              <p>{`Name area $A$. Define $R = A/10$, $E = A/12$. Prove combined rate $R+E$ is constant. This guarantee (not just the number) is what the rigorous method uniquely provides. Derive $T = A/(R+E) = 60/11$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Traditional</span>
              <p>{`State Regina does $\\frac{1}{10}$ job/hr, Eric $\\frac{1}{12}$ job/hr. Together $\\frac{11}{60}$ job/hr. Time $= \\frac{60}{11}$ hr. Correct but skips the constancy proof.`}</p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the traditional method, where does the fraction $\\frac{1}{10}$ come from?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`It is $R/A$: Regina's rate expressed as a fraction of the whole lawn per hour. From the rigorous method, $R = A/10$ sq ft/hr, so $R/A = 1/10$ of the lawn per hour. Constancy means she mows exactly $R \\times 1 = A/10$ sq ft in any 1-hour interval. The traditional shortcut works because it silently uses this constancy.`}
              </p>
            </details>
          </div>
          <h3>Three Painters Working Together</h3>
          <p>
            {`Joshua alone takes 18 hours. Li takes 15 hours. Manfred takes 16 hours. How long together?`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before computing: the fastest painter alone takes 15 hours. Together, will the three
              of them finish in less than 6 hours?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Yes, just under 6 hours. Three workers together finish faster than one alone. The calculation gives $\\frac{720}{133}$ hours, which is about 5 hours and 25 minutes.`}
              </p>
            </details>
          </div>
          <p>
            {`Let $H$ = area of the house. Rates: $J = \\dfrac{H}{18}$, $L = \\dfrac{H}{15}$, $M = \\dfrac{H}{16}$ sq ft/hr.`}
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Combined rate $= J + L + M = \\left(\\dfrac{1}{18} + \\dfrac{1}{15} + \\dfrac{1}{16}\\right)H = \\dfrac{40 + 48 + 45}{720}H = \\dfrac{133}{720} \\times H$ sq ft/hr.`}</li>
              <li>{`Set $\\dfrac{H}{t} = \\dfrac{133}{720} \\times H$. Cancel $H$: $t = \\dfrac{720}{133} \\approx 5.41$ hours, about 5 hours 25 minutes.`}</li>
            </ol>
          </div>
          <viz.TwoTrainsMeetingGraph C={C} />
          <div className="lrn-callout">
            <p>
              {`Two trains moving toward each other follow the same math as two workers: their rates add. Train 1 travels A to B in 6 hours. Train 2 travels B to A in 12 hours. Combined closure rate $= \\frac{1}{6} + \\frac{1}{12} = \\frac{2}{12} + \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4}$ of the distance per hour. They meet after $\\frac{1}{1/4} = 4$ hours.`}
            </p>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
            <p>
              Pipe 1 fills a tank in 8 hours. Pipe 2 fills it in 12 hours. Both running: how long?
            </p>
            <ol className="lrn-list">
              <li>{`Combined rate $= \\dfrac{1}{8} + \\dfrac{1}{12} = \\dfrac{3}{24} + \\dfrac{2}{24} = \\dfrac{5}{24}$ tank/hr.`}</li>
              <li>{`Time $= \\dfrac{1}{5/24} = \\dfrac{24}{5} = 4\\tfrac{4}{5}$ hours.`}</li>
            </ol>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
            <p>
              Pipe A fills a tank in 6 hours. Pipe B fills it in 9 hours. Both running: how long?
            </p>
            <ol className="lrn-list">
              <li>{`Combined rate $= \\dfrac{1}{6} + \\dfrac{1}{9} = \\dfrac{\\underline{\\hspace{1em}}}{18} + \\dfrac{\\underline{\\hspace{1em}}}{18} = \\dfrac{\\underline{\\hspace{1em}}}{18}$ tank/hr.`}</li>
              <li>{`Time $= \\dfrac{1}{\\underline{\\hspace{2em}}/18} = \\dfrac{18}{\\underline{\\hspace{1em}}} = \\underline{\\hspace{2em}}$ hours.`}</li>
            </ol>
            <details className="lrn-faded-reveal">
              <summary>Full solution</summary>
              <p>{`$\\dfrac{1}{6} + \\dfrac{1}{9} = \\dfrac{3}{18} + \\dfrac{2}{18} = \\dfrac{5}{18}$ tank/hr. Time $= \\dfrac{18}{5} = 3\\tfrac{3}{5}$ hours.`}</p>
            </details>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>
              Worker X finishes a job in 10 hours. Worker Y finishes in 15 hours. Together: how
              long?
            </p>
            <details className="lrn-faded-reveal">
              <summary>Full solution</summary>
              <p>{`Combined rate $= \\dfrac{1}{10} + \\dfrac{1}{15} = \\dfrac{3}{30} + \\dfrac{2}{30} = \\dfrac{5}{30} = \\dfrac{1}{6}$ job/hr. Time $= 6$ hours.`}</p>
            </details>
          </div>
          <p>
            You can now add the constant rates of separate workers or pipes and find how long they
            take together.
          </p>
        </>
      ]
    },

    practice: [
      // warm-up: basic D = vT
      {
        q: `Find the time to travel 100 km at 40 km/h.`,
        a: `2.5 hours. $T = \\dfrac{D}{v} = \\dfrac{100}{40} = 2.5$ hr.`
      },
      {
        q: `A car travels at 55 km/h for 2 hours. How far does it travel?`,
        a: `110 km. Distance $= 55 \\times 2 = 110$ km.`
      },
      {
        q: `A car covers 600 km in 8 hours. Find its speed in km/h.`,
        a: `75 km/h. Speed $= \\dfrac{600}{8} = 75$ km/h.`
      },
      // rate definition
      {
        q: `Name two examples of rates that are not speed. For each, identify the two number lines being divided.`,
        a: `(1) Water flow: gallons per minute. Number lines: volume (gallons) and time (minutes). (2) Energy use: kilowatt-hours per day. Number lines: energy (kWh) and time (days).`
      },
      // transfer: rates outside motion
      {
        q: `A person's heart beats 360 times in 5 minutes. A computer downloads 48 MB in 6 seconds. Express both as rates with units. What do they have in common with speed?`,
        a: `Heart rate: $\\dfrac{360}{5} = 72$ beats/min. Download rate: $\\dfrac{48}{6} = 8$ MB/sec. Both divide one quantity by time to get a rate. Same structure as speed: output per unit time. The number lines differ (beats vs. bytes vs. metres) but the division pattern is identical.`
      },
      // constancy vs average
      {
        q: `What is the difference between a constant rate and an average rate? Give a concrete example of each.`,
        a: `A constant rate means $\\frac{D}{T} = v$ for every time interval, without exception. Example: a faucet flowing at exactly 2 gal/min. An average rate is total output divided by duration for one specific interval. Example: a car travels 120 km in 2 hours, giving average speed 60 km/h, but actual speed may have varied.`
      },
      // predict: constancy check
      {
        q: `A car's odometer reads 0 at $t = 0$ hours, 120 at $t = 2$ hours, and 220 at $t = 4$ hours. Is this constant rate? How do you know?`,
        a: `No. From $t = 0$ to $t = 2$: rate $= \\dfrac{120}{2} = 60$ km/h. From $t = 2$ to $t = 4$: rate $= \\dfrac{100}{2} = 50$ km/h. The two intervals give different ratios, so the rate is not constant. For constant rate, $D/T$ must be the same for every interval.`
      },
      // missing quantity
      {
        q: `A man runs at 8 km/h for 5200 metres. How long does he run in minutes?`,
        a: `39 minutes. Convert: $5200\\,\\text{m} = 5.2\\,\\text{km}$. Time $= \\dfrac{5.2}{8} = 0.65$ hours. In minutes: $0.65 \\times 60 = 39$ min.`
      },
      // unit conversion
      {
        q: `A pipe flows at 5 gallons per minute. Express this rate in quarts per second.`,
        a: `$\\dfrac{1}{3}$ qt/sec. Use a 1-minute interval: 5 gallons = 20 quarts in 60 seconds. Average rate $= \\dfrac{20}{60} = \\dfrac{1}{3}$ qt/sec. Since the rate is constant, this equals the constant rate in the new units.`
      },
      // source exercise (moved earlier)
      {
        q: `Two shuttle trains run between cities A and B. Train 1 takes 3 hours from A to B. Train 2 takes 5 hours from B to A. They start at opposite ends at the same time. When do they meet?`,
        a: `After $\\dfrac{15}{8} = 1\\tfrac{7}{8}$ hours. Set A-to-B distance $= 1$. Combined closure rate $= \\dfrac{1}{3} + \\dfrac{1}{5} = \\dfrac{5}{15} + \\dfrac{3}{15} = \\dfrac{8}{15}$ per hour. Time $= \\dfrac{1}{8/15} = \\dfrac{15}{8}$ hours.`
      },
      // predict: proportion direction
      {
        q: `Predict: a faucet at constant rate fills 4 litres in 20 seconds. If you need only 2 litres, will the time be more or less than 10 seconds? Explain before computing.`,
        a: `Less than 10 seconds. You need half the volume, so at the same constant rate you need half the time. Compute: rate $= \\dfrac{4}{20} = 0.2$ L/sec. Time $= \\dfrac{2}{0.2} = 10$ seconds. Exactly 10, confirming the halving relationship.`
      },
      // cooperative work (basic)
      {
        q: `Regina mows a lawn in 10 hours. Eric mows the same lawn in 12 hours. How long do they take together? Show both the rigorous and traditional methods.`,
        a: `$5\\tfrac{5}{11}$ hours. Rigorous: $R = A/10$, $E = A/12$, $T = \\dfrac{A}{A/10 + A/12} = \\dfrac{1}{11/60} = \\dfrac{60}{11}$. Traditional: $\\frac{1}{10} + \\frac{1}{12} = \\frac{11}{60}$ job/hr; time $= \\frac{60}{11} = 5\\tfrac{5}{11}$ hr.`
      },
      // reduced rate (basic)
      {
        q: `A faucet fills a tub in 15 minutes. The rate drops by 15%. How long does it now take?`,
        a: `$17\\tfrac{11}{17}$ minutes. Original rate $r = V/15$. New rate $= 0.85r$. From $V/t = 0.85r$ and $r = V/15$: $85t = 1500$, so $t = 17\\tfrac{11}{17}$ min. Algorithm: $t = 15 \\times \\frac{100}{85} = 17\\tfrac{11}{17}$.`
      },
      // ft/sec to mph
      {
        q: `Explain why $85\\tfrac{1}{15}$ ft/sec equals 58 mph from the definition of average rate.`,
        a: `Convert feet to miles: $85\\tfrac{1}{15}\\,\\text{ft} = \\dfrac{29}{1800}\\,\\text{mi}$. So in 1 second, $\\dfrac{29}{1800}$ miles are covered. In 3600 seconds: $3600 \\times \\dfrac{29}{1800} = 58$ miles. Average rate over 1 hour $= 58$ mph. Since rate is constant, this average equals the constant rate.`
      },
      // average speed find-the-error
      {
        q: `Find the error: "A car travels 60 km at 30 km/h and 180 km at 160 km/h. Average speed $= \\frac{30+160}{2} = 95$ km/h."`,
        a: `The error is taking the arithmetic mean of speeds. This ignores that the two legs take different amounts of time. Correct: total distance $= 240$ km, total time $= 2 + 1.125 = 3.125$ hr, average speed $= \\dfrac{240}{3.125} \\approx 76.8$ km/h.`
      },
      // three painters
      {
        q: `Joshua paints a house in 18 hours, Li in 15 hours, Manfred in 16 hours. How long do they take together?`,
        a: `$\\dfrac{720}{133}$ hours $\\approx 5$ hr 25 min. Combined rate $= \\frac{1}{18} + \\frac{1}{15} + \\frac{1}{16} = \\frac{40 + 48 + 45}{720} = \\frac{133}{720}$ of the house per hour. Set $\\frac{H}{t} = \\frac{133}{720}H$, cancel $H$: $t = \\frac{720}{133} \\approx 5.41$ hr.`
      },
      // km/h to m/s
      {
        q: `Convert 54 km/h to m/s. Show the unit-conversion steps.`,
        a: `15 m/s. $54\\,\\text{km/h} = 54{,}000\\,\\text{m/h} = \\dfrac{54{,}000}{3600}\\,\\text{m/s} = 15\\,\\text{m/s}$.`
      },
      // swallow average speed
      {
        q: `A swallow flies at 50 km/h for 3 hours, then at 40 km/h for 2 hours. Find the average speed for the whole journey.`,
        a: `46 km/h. Distance $= 50 \\times 3 + 40 \\times 2 = 230$ km. Total time $= 5$ hr. Average speed $= \\dfrac{230}{5} = 46$ km/h.`
      },
      // cooperative work elaborate
      {
        q: `Elaborate: Why is $T = \\frac{A}{R+E}$ true? Explain from first principles using constancy.`,
        a: `In any time interval $t$: Regina mows $Rt$ sq ft, Eric mows $Et$ sq ft. Together: $(R+E)t$ sq ft. Average combined rate $= R+E$. This holds for every $t$, so the combined rate is constant. When the whole lawn $A$ is done: $R+E = A/T$, giving $T = A/(R+E)$. Each individual rate's constancy makes the sum also constant.`
      },
      // two pipes (transfer: cooperative)
      {
        q: `Two water pipes fill a tank. Pipe 1 fills it in 10 hours. Pipe 2 fills it in 12 hours. Both running together: how long to fill the tank?`,
        a: `$5\\tfrac{5}{11}$ hours. Combined rate $= \\dfrac{1}{10} + \\dfrac{1}{12} = \\dfrac{11}{60}$ tank/hr. Time $= \\dfrac{1}{11/60} = \\dfrac{60}{11} = 5\\tfrac{5}{11}$ hr.`
      },
      // Eric 1.5x faster
      {
        q: `What if Eric works 1.5 times as fast as Regina? If Regina takes 10 hours alone, find the combined time.`,
        a: `4 hours. Eric takes $10/1.5 = 20/3$ hours alone. $R = A/10$, $E = 3A/20$. Combined rate $= A/10 + 3A/20 = 5A/20 = A/4$. Time $= 4$ hours.`
      },
      // reduced rate (25%)
      {
        q: `It takes 31 minutes to fill a tub. The flow drops by 25%. Find the new time.`,
        a: `$41\\tfrac{1}{3}$ minutes. $t = 31 \\times \\dfrac{100}{75} = \\dfrac{3100}{75} = 41\\tfrac{1}{3}$ min.`
      },
      // source exercise (round trip, moved earlier)
      {
        q: `A driver goes from Town A to Town B at 50 mph, then back from B to A at 60 mph. The round trip takes $14\\tfrac{2}{3}$ hours. How far apart are the towns?`,
        a: `400 miles. Let $D$ = distance one way. Time out $= \\dfrac{D}{50}$ hr. Time back $= \\dfrac{D}{60}$ hr. Total: $\\dfrac{D}{50} + \\dfrac{D}{60} = \\dfrac{6D}{300} + \\dfrac{5D}{300} = \\dfrac{11D}{300} = \\dfrac{44}{3}$. Solve: $D = \\dfrac{44 \\times 300}{3 \\times 11} = 400$ miles.`
      },
      // convert 72 km/h
      {
        q: `Convert 72 km/h to m/s.`,
        a: `20 m/s. $72\\,\\text{km/h} = \\dfrac{72{,}000}{3600}\\,\\text{m/s} = 20\\,\\text{m/s}$.`
      },
      // 1/k1 physical meaning
      {
        q: `In the cooperative work formula, what does $\\frac{1}{k_1}$ represent physically?`,
        a: `$\\dfrac{1}{k_1}$ is the fraction of the job the first worker completes per unit time. It equals $R/A$ where $R = A/k_1$ is the worker's rate. Adding $\\dfrac{1}{k_1} + \\dfrac{1}{k_2}$ gives the combined fraction per unit time. Taking the reciprocal gives the total time.`
      },
      // proportion contrast
      {
        q: `Contrast: is the proportion $\\frac{11\\tfrac{1}{2}}{t} = \\frac{3\\tfrac{1}{2}}{25}$ an assumption or a derived result?`,
        a: `A derived result. Since rate is constant at $r$, both $\\frac{3\\tfrac{1}{2}}{25}$ and $\\frac{11\\tfrac{1}{2}}{t}$ equal $r$. Setting them equal follows from transitivity (if two things both equal $r$, they equal each other). Treating it as an assumption skips the constancy argument.`
      },
      // cyclist average speed
      {
        q: `A cyclist travels 25 km at 20 km/h, then 80 km at 25 km/h. Find the average speed.`,
        a: `$\\approx 23.6$ km/h. Time leg 1: $\\dfrac{25}{20} = 1.25$ hr. Time leg 2: $\\dfrac{80}{25} = 3.2$ hr. Total distance: 105 km. Total time: 4.45 hr. Average speed: $\\dfrac{105}{4.45} \\approx 23.6$ km/h.`
      },
      // understand reduced-rate derivation
      {
        q: `Why does understanding the derivation of the reduced-rate formula make it unnecessary to memorize the formula?`,
        a: `The derivation follows from two facts you already know: constant rate means $V/t = r$, and reducing the rate by $N\\%$ gives a new rate of $(1-N/100) \\times r$. Substituting and solving for $t$ always gives $t = k \\times \\frac{100}{100-N}$. You can re-derive it any time. Memorizing without the derivation is fragile.`
      },
      // predict: cooperative work
      {
        q: `Predict: if Regina's individual time doubles to 20 hours, how does the combined time with Eric change? Will it more than double, less than double, or exactly double?`,
        a: `Less than double. New $T = \\dfrac{1}{1/20 + 1/12} = \\dfrac{1}{8/60} = \\dfrac{60}{8} = 7.5$ hours. The original was $\\dfrac{60}{11} \\approx 5.45$ hr. The ratio is $7.5/5.45 \\approx 1.38$. Eric's contribution limits how much Regina's slowdown matters.`
      },
      // Paul rides (missing quantity)
      {
        q: `Paul rides at constant speed. He takes 25 minutes to go $3\\tfrac{1}{2}$ miles. How long to go $11\\tfrac{1}{2}$ miles?`,
        a: `$82\\tfrac{1}{7}$ minutes. Both distances measure the same constant speed, so $\\frac{11.5}{t} = \\frac{3.5}{25}$, giving $t = \\frac{25 \\times 11.5}{3.5} = 82\\tfrac{1}{7}$ min.`
      },
      // scientific notation
      {
        q: `An object covers $4 \\times 10^4 = 40{,}000$ metres in 100 seconds. Find its speed in m/s.`,
        a: `400 m/s. Speed $= \\dfrac{40{,}000}{100} = 400$ m/s.`
      },
      // predict: rate proportion
      {
        q: `Predict: if you double the flow rate, how does the time to fill the same tub change? Explain without computing.`,
        a: `The time halves. Time and rate are inversely related for a fixed job: $t = V/r$. Double $r$, and $t$ becomes $V/(2r) = (V/r)/2$. The tub fills in half the original time. This is always true for constant-rate jobs with fixed output.`
      },
      // elaborate: unit conversion
      {
        q: `Elaborate: why doesn't multiplying by $\\frac{1\\,\\text{mi}}{5280\\,\\text{ft}}$ change the actual speed?`,
        a: `Because $\\frac{1\\,\\text{mi}}{5280\\,\\text{ft}} = 1$. One mile and 5280 feet are the same physical length. Multiplying by 1 does not change a quantity. It only changes how you write it. You are relabelling the number line from feet to miles, not scaling the physical rate.`
      },
      // elaborate: average speed
      {
        q: `Elaborate: why can't we just average the two speeds when the legs take different times?`,
        a: `The arithmetic mean $\\frac{v_1 + v_2}{2}$ assumes equal time at each speed. When the legs take different times, the fast leg may be very short and the slow leg very long. The slow speed then dominates more of the journey. Total distance divided by total time automatically weights each speed by the time spent at it. That is the correct average.`
      },
      // shuttle trains (10/12)
      {
        q: `Two shuttle trains travel between stations A and B. Train 1 takes 10 hours A to B. Train 2 takes 12 hours B to A. They start simultaneously at opposite ends. When do they meet?`,
        a: `After $\\dfrac{60}{11} = 5\\tfrac{5}{11}$ hours. Set distance A-to-B = 1. Combined closure rate $= \\frac{1}{10} + \\frac{1}{12} = \\frac{11}{60}$ per hour. Time $= \\frac{60}{11}$ hr.`
      },
      // trail round trip
      {
        q: `You walk a 12-mile trail and back. Average speed for the round trip is $3\\tfrac{1}{2}$ mph. Outbound speed was 3 mph. Find the speed on the way back.`,
        a: `$4\\tfrac{1}{5}$ mph. Total distance $= 24$ mi. Total time $= \\dfrac{24}{3.5} = \\dfrac{48}{7}$ hr. Time out $= \\dfrac{12}{3} = 4$ hr. Time back $= \\dfrac{48}{7} - 4 = \\dfrac{20}{7}$ hr. Speed back $= \\dfrac{12}{20/7} = \\dfrac{84}{20} = \\dfrac{21}{5} = 4\\tfrac{1}{5}$ mph.`
      },
      // two walkers
      {
        q: `Two people A and B walk straight towards each other at constant speed. A walks $1\\tfrac{1}{2}$ times as fast as B. They are 2000 feet apart and meet after $2\\tfrac{1}{2}$ minutes. Find each person's speed.`,
        a: `A walks 480 ft/min, B walks 320 ft/min. Let B's speed be $b$. Then A's is $1.5b$. Combined closure rate $= b + 1.5b = 2.5b$ ft/min. In $2.5$ min they close 2000 ft: $2.5b \\times 2.5 = 2000$, so $b = \\dfrac{2000}{6.25} = 320$ ft/min. A's speed: $1.5 \\times 320 = 480$ ft/min.`
      },
      // drought faucet (clarified answer)
      {
        q: `During a drought a faucet was fitted with a device that reduced its flow rate by 40%. Without the device, the faucet fills the tank in 20 minutes. With the device removed, how long does it take now?`,
        a: `12 minutes. The device reduced flow to 60% of full rate. At 60% of full rate, filling took 20 minutes. Full rate fills faster. New time $= 20 \\times \\dfrac{60}{100} = 12$ min. Check: at full rate $r$, time $= V/r$. At reduced rate $0.6r$, time $= V/(0.6r) = 20$ min, so $V/r = 12$ min.`
      },
      // find-the-error: reduced-rate naive-addition
      {
        q: `Find the error: "A tap fills a tub in 12 minutes. The flow is cut by 25%. New time $= 12 + 12 \\times 0.25 = 15$ minutes."`,
        a: `The error is adding 25% of the original time. Reducing the rate by 25% means the new rate is 75% of the original. Time scales by $\\frac{100}{75} = \\frac{4}{3}$, not by $1.25$. Correct: $t = 12 \\times \\frac{100}{75} = 12 \\times \\frac{4}{3} = 16$ minutes, not 15. A 25% rate cut adds $\\frac{1}{3}$ of the original time (33.3%), not 25%.`
      },
      // 250 miles at 80 mph
      {
        q: `Find the time to travel 250 miles at 80 mph.`,
        a: `3.125 hours. $T = \\dfrac{250}{80} = 3.125$ hr.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Rate, Speed, Average Speed',
      sections: [
        <>
          <h2>Core Definitions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Rate</span>
            <div className="lrn-definition-desc">
              <p>{`$\\text{rate} = \\dfrac{M}{N}$ where $M$ and $N$ are quantities of different types (on different number lines).`}</p>
              <p>
                <strong>When to use:</strong> any time you divide two quantities measured in
                different units (distance/time, volume/time, area/time).
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Constant Rate</span>
            <div className="lrn-definition-desc">
              <p>{`$\\dfrac{D}{T} = v$ for every interval $T$. Graph: straight line through origin, slope $= v$.`}</p>
              <p>
                <strong>When to use:</strong> problems that say "constant speed", "constant rate",
                or "uniform rate". Foundation for all proportion reasoning.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Average Rate</span>
            <div className="lrn-definition-desc">
              <p>{`$\\dfrac{w}{t}$ for a specific interval $t$. Equals the constant rate $v$ when rate is constant.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Average Speed (Multi-Leg Journey)</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{avg speed} = \\frac{\\text{total distance}}{\\text{total time}}$$`}</p>
              <p>
                <strong>When to use:</strong> a journey with two or more legs at different speeds.
                Never use the arithmetic mean of the speeds.
              </p>
            </div>
          </div>
        </>,
        <>
          <h2>Key Formulas</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Solving for the Missing Quantity</span>
            <div className="lrn-definition-desc">
              <p>{`State constancy: $r = \\dfrac{D_1}{T_1} = \\dfrac{D_2}{T_2}$. Then cross-multiply.`}</p>
              <p>
                <strong>When to use:</strong> given two of three quantities (rate, distance, time).
                Find the third.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Reduced-Rate Algorithm</span>
            <div className="lrn-definition-desc">
              <p>{`$$t = k \\times \\frac{100}{100 - N}$$`}</p>
              <p>{`$k$ = original time, $N$ = percent reduction in rate.`}</p>
              <p>
                <strong>When to use:</strong> rate drops by a known percentage for the same total
                job.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Cooperative Work Formula</span>
            <div className="lrn-definition-desc">
              <p>{`$$T = \\frac{A}{R + E} = \\frac{1}{\\dfrac{1}{k_1} + \\dfrac{1}{k_2}}$$`}</p>
              <p>{`$k_1, k_2$ = individual times to complete the whole job.`}</p>
              <p>
                <strong>When to use:</strong> two or more workers each at a known constant rate on
                the same job, without interfering.
              </p>
            </div>
          </div>
        </>,
        <>
          <h2>Unit Conversion Pattern</h2>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>Choose a convenient time interval (1 minute or 1 hour).</li>
              <li>Find total output in that interval using the original rate.</li>
              <li>Convert output to the target unit.</li>
              <li>Divide by the interval in the target time unit.</li>
              <li>
                Since rate is constant, this average equals the constant rate in the new units.
              </li>
            </ol>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Example: 5 gal/min to qt/sec</span>
            <div className="lrn-definition-desc">
              <p>1-minute interval: 5 gal = 20 qt in 60 sec.</p>
              <p>{`Rate $= \\dfrac{20}{60} = \\dfrac{1}{3}$ qt/sec.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`Example: $85\\tfrac{1}{15}$ ft/sec to mph`}</span>
            <div className="lrn-definition-desc">
              <p>{`$85\\tfrac{1}{15}\\,\\text{ft} = \\dfrac{29}{1800}\\,\\text{mi}$ in 1 sec.`}</p>
              <p>{`In 1 hr (3600 sec): $3600 \\times \\dfrac{29}{1800} = 58$ mi. Rate $= 58$ mph.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">km/h to m/s</span>
            <div className="lrn-definition-desc">
              <p>{`Multiply by $\\dfrac{5}{18}$. Example: $54 \\times \\dfrac{5}{18} = 15$ m/s.`}</p>
            </div>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function RateSpeedAverageSpeed() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
