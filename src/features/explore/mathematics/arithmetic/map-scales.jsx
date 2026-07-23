import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './map-scales-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'ms',
    documentTitle: 'Map Scales - AETHER',
    learning: {
      groupTitle: 'Ratio, Proportion, and Rate',
      category: 'Arithmetic',
      title: 'Map Scales',
      subtitle: 'How a 1:N ratio links every centimetre on a map to a real distance on the ground.',
      sections: [
        // Section 0: What a Map Scale Means
        <>
          <h2>What a Map Scale Means</h2>
          <p>
            {`A map shrinks the real world onto paper. You need to know the shrink factor. Map scales answer that with a single ratio: $1:N$.`}
          </p>
          <p>
            {`The notation $1:N$ says: every 1 cm on the map equals $N$ cm on the ground. The scale does not change across the map. Measure any line on the map, multiply by $N$, and you get the real distance in centimetres.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If a map's scale is $1:1\\,000$, how many metres of real road does 1 cm on the map represent?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`1 cm on the map equals 1000 cm on the ground. Convert: $1\\,000 \\div 100 = 10$ metres.`}</p>
            </details>
          </div>
          <div className="lrn-graph">
            <viz.ScaleRatioMeaning C={C} />
          </div>
          <p>
            {`The diagram shows scale $1:50\\,000$. The top bar is 1 cm on the map. The bottom bar represents 50 000 cm on the ground, which equals 500 m. The bars are not drawn to true proportion because 50 000 cm would not fit on screen.`}
          </p>
          <div className="lrn-callout lrn-tip">
            <p>{`Unit conversion chain: $1\\,\\text{km} = 1\\,000\\,\\text{m}$, $1\\,\\text{m} = 100\\,\\text{cm}$, so $1\\,\\text{km} = 100\\,000\\,\\text{cm}$.`}</p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The scale $1:N$ is a ratio: $\\frac{\\text{map distance}}{\\text{land distance}} = \\frac{1}{N}$. Both distances use the same unit, so $N$ is a pure number with no units. That is what lets you multiply or divide by $N$ to move between map and ground.`}</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is the scale written as $1:N$ instead of just writing the number $N$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Writing $1:N$ makes the direction clear. It says "1 unit on map equals $N$ units on land", not the other way around. Writing just $N$ would leave you guessing which quantity is larger and which direction to multiply or divide.`}</p>
            </details>
          </div>
        </>,

        // Section 1: Forward Conversion (Map to Land)
        <>
          <h2>Forward Conversion: Map Distance to Land Distance</h2>
          <p>
            {`You measure a distance on the map and want the real distance on the ground. Multiply the map distance by $N$, then convert centimetres to metres or kilometres.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`At scale $1:5\\,000$, a 5 cm line on the map equals how many metres on the ground?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$5 \\times 5\\,000 = 25\\,000\\,\\text{cm}$. Divide by 100: $25\\,000 \\div 100 = 250\\,\\text{m}$.`}</p>
            </details>
          </div>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{land distance} = \\text{map distance} \\times N$$`}</div>
          <h3>Worked Example</h3>
          <p>
            {`On a hiking map at scale $1:25\\,000$, two trail junctions sit 10 cm apart on the paper. How far apart are they on the ground?`}
          </p>
          <ol className="lrn-list">
            <li>{`Write the scale meaning: $1\\,\\text{cm on map} = 25\\,000\\,\\text{cm on land}$.`}</li>
            <li>{`Multiply: $10 \\times 25\\,000 = 250\\,000\\,\\text{cm on land}$.`}</li>
            <li>{`Convert cm to m: $250\\,000 \\div 100 = 2\\,500\\,\\text{m}$.`}</li>
            <li>{`Convert m to km: $2\\,500 \\div 1\\,000 = 2.5\\,\\text{km}$.`}</li>
          </ol>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do you divide by $100\\,000$ to go from centimetres to kilometres?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`There are 100 centimetres in 1 metre and 1 000 metres in 1 kilometre. So there are $100 \\times 1\\,000 = 100\\,000$ centimetres in 1 kilometre. Dividing by $100\\,000$ converts centimetres to kilometres in one step.`}</p>
            </details>
          </div>
          <div className="lrn-graph">
            <viz.MapScaleConverterForward C={C} />
          </div>
          <p>
            {`Move the slider to change the map distance. The bar grows with the land distance. The formula updates live.`}
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Scale $1:10\\,000$, map distance 10 cm. Find the land distance in kilometres.`}</p>
              <ol className="lrn-list">
                <li>{`Land distance in cm: $10 \\times 10\\,000 = 100\\,000\\,\\text{cm}$.`}</li>
                <li>{`Convert to m: $100\\,000 \\div 100 = 1\\,000\\,\\text{m}$.`}</li>
                <li>{`Convert to km: $1\\,000 \\div 1\\,000 = 1\\,\\text{km}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Scale $1:2\\,000$, map distance 10 cm. Find the land distance in metres.`}</p>
              <ol className="lrn-list">
                <li>{`Land distance in cm: $10 \\times 2\\,000 = 20\\,000\\,\\text{cm}$.`}</li>
                <li>{`Convert to m: $20\\,000 \\div 100 = ?$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Scale $1:25\\,000$, map distance 4 cm. Find the land distance in kilometres.`}</p>
            </div>
          </div>
          <h3>Practice Examples</h3>
          <ul className="lrn-list">
            <li>{`Scale $1:1\\,000$, map distance 20 cm: $20 \\times 1\\,000 = 20\\,000\\,\\text{cm} = 200\\,\\text{m}$.`}</li>
            <li>{`Scale $1:10\\,000$, map distance 5 cm: $5 \\times 10\\,000 = 50\\,000\\,\\text{cm} = 500\\,\\text{m}$.`}</li>
            <li>{`Scale $1:1\\,000$, map distance 6.3 cm: $6.3 \\times 1\\,000 = 6\\,300\\,\\text{cm} = 63\\,\\text{m}$.`}</li>
            <li>{`Scale $1:300\\,000$, map distance 8 cm (Paris to Bonnieres): $8 \\times 300\\,000 = 2\\,400\\,000\\,\\text{cm} = 24\\,\\text{km}$.`}</li>
          </ul>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Multiplying by $N$ is correct because the scale ratio says $\\frac{\\text{map}}{\\text{land}} = \\frac{1}{N}$. Rearranging gives $\\text{land} = \\text{map} \\times N$.`}</p>
          </div>
          <h3>Verbal Scales</h3>
          <p>
            {`Some maps write the scale in words, like "1 cm to 10 m", instead of as $1:N$. Turn the words into a ratio first: put both sides in the same unit. Here $10\\,\\text{m} = 1\\,000\\,\\text{cm}$, so "1 cm to 10 m" is the scale $1:1\\,000$. Then convert exactly as before.`}
          </p>
          <p>
            {`For example, a plan reads "1 cm to 250 m" and a path is 8 cm long on it. First find the scale: $250\\,\\text{m} = 25\\,000\\,\\text{cm}$, so the scale is $1:25\\,000$. Then the real length: $8 \\times 25\\,000 = 200\\,000\\,\\text{cm} = 2\\,\\text{km}$.`}
          </p>
          <p>
            {`Now you can read any distance off a map: measure the line, multiply by $N$, then convert the centimetres to metres or kilometres.`}
          </p>
        </>,

        // Section 2: Reverse Conversion (Land to Map)
        <>
          <h2>Reverse Conversion: Land Distance to Map Distance</h2>
          <p>
            {`You know the real distance and want to find how long it appears on the map. Convert the land distance to centimetres first, then divide by $N$.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A motorway is 30 km long. The map scale is $1:50\\,000$. Predict the length on the map before computing.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$30\\,\\text{km} \\times 100\\,000 = 3\\,000\\,000\\,\\text{cm}$. Divide: $\\frac{3\\,000\\,000}{50\\,000} = 60\\,\\text{cm}$.`}</p>
            </details>
          </div>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{map distance} = \\frac{\\text{land distance in cm}}{N}$$`}</div>
          <h3>Worked Example</h3>
          <p>
            {`You plan to drive 18 km between two towns. The road atlas uses scale $1:50\\,000$. How long will the route appear on the printed page?`}
          </p>
          <ol className="lrn-list">
            <li>{`Convert km to cm: $18\\,\\text{km} \\times 100\\,000 = 1\\,800\\,000\\,\\text{cm}$.`}</li>
            <li>{`Divide by scale: $\\frac{1\\,800\\,000}{50\\,000} = 36\\,\\text{cm}$.`}</li>
          </ol>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do you multiply by $100\\,000$ before dividing by $N$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The scale $1:N$ works in centimetres on both sides. If your land distance is in kilometres, you must convert it to centimetres first. Multiplying by $100\\,000$ does that. Only then can you divide by $N$ to get the map distance in centimetres.`}</p>
            </details>
          </div>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">COMMON ERROR</span>
            <p>{`Dividing land km by $N$ directly. The scale works in cm on both sides. You must convert km to cm first. Skipping this step makes the answer 100 000 times too large.`}</p>
          </div>
          <div className="lrn-graph">
            <viz.MapScaleConverterReverse C={C} />
          </div>
          <p>
            {`Move the slider to set the real-world distance. The bar shows the resulting map length. At 18 km the bar reaches 36 cm, matching the worked example.`}
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Scale $1:50\\,000$, real distance 18 km. Find the map distance in centimetres.`}</p>
              <ol className="lrn-list">
                <li>{`Convert km to cm: $18 \\times 100\\,000 = 1\\,800\\,000\\,\\text{cm}$.`}</li>
                <li>{`Divide by scale: $\\frac{1\\,800\\,000}{50\\,000} = 36\\,\\text{cm}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Scale $1:25\\,000$, real distance 5 km. Find the map distance in centimetres.`}</p>
              <ol className="lrn-list">
                <li>{`Convert km to cm: $5 \\times 100\\,000 = 500\\,000\\,\\text{cm}$.`}</li>
                <li>{`Divide by scale: $\\frac{500\\,000}{25\\,000} = ?$`}</li>
                <li>{`Write the answer in cm.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Scale $1:100\\,000$, real distance 7.5 km. Find the map distance in centimetres.`}</p>
            </div>
          </div>
          <h3>Practice Examples</h3>
          <ul className="lrn-list">
            <li>{`15 km, scale $1:10\\,000$: $15 \\times 100\\,000 = 1\\,500\\,000\\,\\text{cm}$. $1\\,500\\,000 \\div 10\\,000 = 150\\,\\text{cm}$.`}</li>
            <li>{`25 km, scale $1:20\\,000$: $25 \\times 100\\,000 = 2\\,500\\,000\\,\\text{cm}$. $2\\,500\\,000 \\div 20\\,000 = 125\\,\\text{cm}$.`}</li>
            <li>{`2.8 km, scale $1:10\\,000$: $2.8 \\times 100\\,000 = 280\\,000\\,\\text{cm}$. $280\\,000 \\div 10\\,000 = 28\\,\\text{cm}$.`}</li>
            <li>{`5.9 km, scale $1:100\\,000$: $5.9 \\times 100\\,000 = 590\\,000\\,\\text{cm}$. $590\\,000 \\div 100\\,000 = 5.9\\,\\text{cm}$.`}</li>
            <li>{`A short result: 700 m, scale $1:100\\,000$: $700\\,\\text{m} = 70\\,000\\,\\text{cm}$. $70\\,000 \\div 100\\,000 = 0.7\\,\\text{cm}$, less than 1 cm on the page.`}</li>
          </ul>
          <div className="lrn-callout">
            <p>{`Verbal scale in reverse: "1 cm to 10 m" is the scale $1:1\\,000$. A 25 m wall: convert $25\\,\\text{m} = 2\\,500\\,\\text{cm}$, then divide by 1 000: $2\\,500 \\div 1\\,000 = 2.5\\,\\text{cm}$.`}</p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Dividing by $N$ is the inverse of multiplying by $N$. The scale ratio gives $\\text{map} = \\frac{\\text{land}}{N}$. This is why reverse conversion divides where forward conversion multiplies.`}</p>
          </div>
          <p>
            {`Now you can plan in reverse: take any real distance, turn it into centimetres, and divide by $N$ to see how long it will appear on the page.`}
          </p>
        </>,

        // Section 3: Large-Scale vs Small-Scale Maps
        <>
          <h2>Large-Scale vs Small-Scale Maps</h2>
          <p>
            {`A large-scale map has a small $N$. A small-scale map has a large $N$. This sounds backwards, but it follows the maths.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A hiker's map has scale $1:50\\,000$ and an architect's plan has scale $1:1\\,000$. Which shows more detail per centimetre on paper?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The architect's plan ($1:1\\,000$) shows more detail. At $1:1\\,000$ each cm represents 10 m. At $1:50\\,000$ each cm represents 500 m. The smaller the $N$, the more detail.`}</p>
            </details>
          </div>
          <p>
            {`A hiker uses a $1:50\\,000$ map where 1 cm covers 500 m of trail. An architect uses a $1:1\\,000$ plan where 1 cm covers just 10 m of building. The architect's plan shows far more detail per centimetre. That makes $1:1\\,000$ a large-scale map, even though 1 000 is a smaller number than 50 000.`}
          </p>
          <p>
            {`The scale is the fraction $\\frac{1}{N}$, not the number $N$ alone. $\\frac{1}{1\\,000}$ is a larger fraction than $\\frac{1}{300\\,000}$. Larger fraction means more real detail fits per centimetre of paper. "Large-scale" describes the fraction, not the number $N$.`}
          </p>
          <div className="lrn-graph">
            <viz.ScaleComparison C={C} />
          </div>
          <p>
            {`The three bars show what 1 cm on the map equals at three different scales. The bars are squashed to fit on screen, so read the labels rather than comparing bar lengths by eye.`}
          </p>
          <ul className="lrn-list">
            <li>{`$1:1\\,000$ (town plan): 1 cm = 10 m. Good for showing room layouts and street widths.`}</li>
            <li>{`$1:50\\,000$ (regional map): 1 cm = 500 m. Good for hiking, showing footpaths and hills.`}</li>
            <li>{`$1:300\\,000$ (road atlas): 1 cm = 3 km. Good for planning long drives.`}</li>
          </ul>
          <div className="lrn-callout">
            <p>{`Rule of thumb: if the $N$ value is around 1 000 or smaller, the map is large-scale. If $N$ is in the tens of thousands or more, the map is small-scale.`}</p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`"Large-scale" describes the size of the scale fraction $\\frac{1}{N}$, which mapmakers call the representative fraction. When $N$ is small the fraction is close to 1, so a large slice of the real world fits in each cm on the map. The name comes from the fraction, not from how big the paper is.`}</p>
          </div>
        </>
      ]
    },
    practice: [
      // Forward conversion, basic
      {
        q: `A map has scale $1:25\\,000$. Two towns are 6 cm apart on the map. Find the real distance in kilometres.`,
        a: `Multiply: $6 \\times 25\\,000 = 150\\,000\\,\\text{cm}$. Convert: $150\\,000 \\div 100\\,000 = 1.5\\,\\text{km}$.`
      },
      // Reverse conversion, basic
      {
        q: `A road is 12 km long. The map scale is $1:50\\,000$. Find the length on the map in centimetres.`,
        a: `Convert km to cm: $12 \\times 100\\,000 = 1\\,200\\,000\\,\\text{cm}$. Divide by scale: $1\\,200\\,000 \\div 50\\,000 = 24\\,\\text{cm}$.`
      },
      // Conceptual
      {
        q: `A scale is written as $1:10\\,000$. What does this mean in plain language?`,
        a: `Every 1 cm on the map equals $10\\,000$ cm on the ground. That is $10\\,000 \\div 100 = 100\\,\\text{m}$ per centimetre.`
      },
      // Transfer: architect's blueprint
      {
        q: `An architect's blueprint has scale $1:50$. A wall measures 8 cm on the plan. How long is the real wall in metres?`,
        a: `$8 \\times 50 = 400\\,\\text{cm}$. Convert: $400 \\div 100 = 4\\,\\text{m}$.`
      },
      // Reverse conversion
      {
        q: `Scale $1:10\\,000$, real distance 15 km. Find the map distance in centimetres.`,
        a: `Convert: $15 \\times 100\\,000 = 1\\,500\\,000\\,\\text{cm}$. Divide: $1\\,500\\,000 \\div 10\\,000 = 150\\,\\text{cm}$.`
      },
      // Predict
      {
        q: `Predict: at scale $1:5\\,000$, a 4 cm line on the map equals how many metres?`,
        a: `$4 \\times 5\\,000 = 20\\,000\\,\\text{cm}$. Convert: $20\\,000 \\div 100 = 200\\,\\text{m}$.`
      },
      // Forward conversion
      {
        q: `Scale $1:10\\,000$, map distance 5 cm. Find the real distance in metres.`,
        a: `$5 \\times 10\\,000 = 50\\,000\\,\\text{cm}$. Convert: $50\\,000 \\div 100 = 500\\,\\text{m}$.`
      },
      // Error detection: forgetting to convert units
      {
        q: `A student works out: "Scale $1:25\\,000$, map 4 cm, so land distance = $4 \\times 25\\,000 = 100\\,000$. Answer: 100 000 km." Find the error.`,
        a: `The student forgot to convert centimetres. $100\\,000\\,\\text{cm} \\div 100\\,000 = 1\\,\\text{km}$, not 100 000 km. Always convert the centimetre result to a sensible unit.`
      },
      // Reverse conversion
      {
        q: `Scale $1:20\\,000$, real distance 25 km. Find the map distance in centimetres.`,
        a: `Convert: $25 \\times 100\\,000 = 2\\,500\\,000\\,\\text{cm}$. Divide: $2\\,500\\,000 \\div 20\\,000 = 125\\,\\text{cm}$.`
      },
      // Transfer: film set model car
      {
        q: `A film set designer builds a $1:24$ scale model of a real car. The real car is 4.8 metres long. How long should the model be in centimetres?`,
        a: `Convert the real car to centimetres: $4.8\\,\\text{m} = 480\\,\\text{cm}$. Divide by the scale: $\\frac{480}{24} = 20\\,\\text{cm}$. The model should be 20 cm long.`
      },
      // Self-explain: unit chain
      {
        q: `Explain why you multiply by $100\\,000$ when converting kilometres to centimetres.`,
        a: `$1\\,\\text{km} = 1\\,000\\,\\text{m}$ and $1\\,\\text{m} = 100\\,\\text{cm}$. So $1\\,\\text{km} = 1\\,000 \\times 100 = 100\\,000\\,\\text{cm}$. Multiplying by $100\\,000$ applies both conversions at once.`
      },
      // Transfer: model train
      {
        q: `A model train is built at scale $1:87$. The model locomotive is 22 cm long. How long is the real locomotive in metres?`,
        a: `$22 \\times 87 = 1\\,914\\,\\text{cm}$. Convert: $1\\,914 \\div 100 = 19.14\\,\\text{m}$.`
      },
      // Reverse conversion
      {
        q: `Scale $1:10\\,000$, real distance 2.8 km. Find the map distance in centimetres.`,
        a: `Convert: $2.8 \\times 100\\,000 = 280\\,000\\,\\text{cm}$. Divide: $280\\,000 \\div 10\\,000 = 28\\,\\text{cm}$.`
      },
      // Elaborate
      {
        q: `Explain why multiplying by $N$ gives the land distance when you know the map distance.`,
        a: `The scale $1:N$ means $\\frac{\\text{map}}{\\text{land}} = \\frac{1}{N}$. Rearranging: $\\text{land} = \\text{map} \\times N$. Multiplication undoes the ratio the same way multiplying by the denominator undoes a fraction.`
      },
      // Forward conversion
      {
        q: `Scale $1:300\\,000$, map distance 8 cm. Find the real distance in kilometres.`,
        a: `$8 \\times 300\\,000 = 2\\,400\\,000\\,\\text{cm}$. Convert: $2\\,400\\,000 \\div 100\\,000 = 24\\,\\text{km}$.`
      },
      // Error detection: dividing when should multiply
      {
        q: `A student says: "Scale $1:50\\,000$, map 3 cm, land distance = $3 \\div 50\\,000$." Is this right?`,
        a: `No. For forward conversion you multiply, not divide. $3 \\times 50\\,000 = 150\\,000\\,\\text{cm} = 1.5\\,\\text{km}$. Division is used only for the reverse direction.`
      },
      // Reverse conversion
      {
        q: `Scale $1:100\\,000$, real distance 5.9 km. Find the map distance in centimetres.`,
        a: `Convert: $5.9 \\times 100\\,000 = 590\\,000\\,\\text{cm}$. Divide: $590\\,000 \\div 100\\,000 = 5.9\\,\\text{cm}$.`
      },
      // Predict (reverse): hiking trail
      {
        q: `Predict before you compute. On a $1:100\\,000$ hiking map, a 25 km trail is drawn as a single line. Will that line be longer or shorter than 30 cm?`,
        a: `The line will be shorter than 30 cm. Convert: $25\\,\\text{km} = 2\\,500\\,000\\,\\text{cm}$. Divide: $\\frac{2\\,500\\,000}{100\\,000} = 25\\,\\text{cm}$. 25 cm is shorter than 30 cm.`
      },
      // Large vs small scale
      {
        q: `Map A has scale $1:500$ and Map B has scale $1:500\\,000$. Which map shows more detail?`,
        a: `Map A shows more detail. At $1:500$ each cm represents 5 m. At $1:500\\,000$ each cm represents 5 km. The smaller the $N$, the more real-world detail fits per centimetre.`
      },
      // Transfer: video game city map
      {
        q: `A video game prints a paper city guide at scale $1:5\\,000$. Each in-game unit equals 1 metre on the ground. What does 1 cm on the printed guide become in the game's units?`,
        a: `1 cm on the guide equals $5\\,000$ cm on the ground. Convert to metres: $5\\,000\\,\\text{cm} = 50\\,\\text{m} = 50$ in-game units. So 1 cm on the guide equals 50 in-game units.`
      },
      // Transfer: satellite photo
      {
        q: `A satellite photo has scale $1:100\\,000$. A river appears 4.5 cm long. Find the real length in kilometres.`,
        a: `$4.5 \\times 100\\,000 = 450\\,000\\,\\text{cm}$. Convert: $450\\,000 \\div 100\\,000 = 4.5\\,\\text{km}$.`
      },
      // Forward conversion
      {
        q: `Scale $1:25\\,000$, map distance 4 cm. Find the real distance in kilometres.`,
        a: `$4 \\times 25\\,000 = 100\\,000\\,\\text{cm}$. Convert: $100\\,000 \\div 100\\,000 = 1\\,\\text{km}$.`
      },
      // Elaborate: large vs small
      {
        q: `A town planner uses $1:1\\,000$ and a road-trip driver uses $1:300\\,000$. Explain why each picks a different scale.`,
        a: `The planner needs to show building widths and street layouts. At $1:1\\,000$ each cm is 10 m, which gives enough detail. The driver only needs to see distances between cities. At $1:300\\,000$ each cm is 3 km, so the whole route fits on one page.`
      },
      // Elaborate: why convert before dividing
      {
        q: `Explain why you must convert kilometres to centimetres before dividing by the scale, instead of converting after.`,
        a: `The scale $1:N$ states that 1 cm on paper equals $N$ cm on the ground. Both numbers in the ratio are in centimetres. If you divide kilometres by $N$ you are mixing units. You first put the real distance in the same unit as the scale (cm), then divide. After dividing, you can convert back to any unit you like.`
      },
      // Verbal scale: forward
      {
        q: `A plan uses verbal scale "1 cm to 10 m". A room is 6.5 m long. Find the room length in cm on the plan.`,
        a: `Convert verbal scale: 1 cm to 10 m means 1 cm to 1 000 cm, so scale $1:1\\,000$. Convert room: $6.5\\,\\text{m} = 650\\,\\text{cm}$. Divide: $650 \\div 1\\,000 = 0.65\\,\\text{cm}$.`
      },
      // Transfer: garden plan
      {
        q: `A garden plan has verbal scale "1 cm to 2 m". A path is 14 m long. How long does it appear on the plan?`,
        a: `1 cm to 2 m means 1 cm to 200 cm, so scale $1:200$. Convert path: $14\\,\\text{m} = 1\\,400\\,\\text{cm}$. Divide: $1\\,400 \\div 200 = 7\\,\\text{cm}$.`
      },
      // Forward conversion
      {
        q: `Scale $1:10\\,000$, map distance 6 cm. Find the real distance in kilometres.`,
        a: `$6 \\times 10\\,000 = 60\\,000\\,\\text{cm}$. Convert: $60\\,000 \\div 100\\,000 = 0.6\\,\\text{km}$.`
      },
      // Predict
      {
        q: `A map shows a lake that is 3 cm wide. The scale is $1:50\\,000$. Predict whether the real lake is wider or narrower than 1 km, then compute.`,
        a: `It is wider than 1 km. $3 \\times 50\\,000 = 150\\,000\\,\\text{cm} = 1.5\\,\\text{km}$. The lake is 1.5 km wide.`
      },
      // Reverse conversion
      {
        q: `Scale $1:5\\,000$, real distance 5 km. Find the map distance in centimetres.`,
        a: `Convert: $5 \\times 100\\,000 = 500\\,000\\,\\text{cm}$. Divide: $500\\,000 \\div 5\\,000 = 100\\,\\text{cm}$.`
      },
      // Error detection: multiplying when should divide in reverse
      {
        q: `A student says: "The real road is 8 km. Scale $1:25\\,000$. Map distance = $8\\,\\text{km} \\times 25\\,000$." Find two errors.`,
        a: `Error 1: the student multiplied instead of dividing. For reverse conversion you divide by $N$. Error 2: the student did not convert km to cm first. Correct: $8 \\times 100\\,000 = 800\\,000\\,\\text{cm}$. Then $800\\,000 \\div 25\\,000 = 32\\,\\text{cm}$.`
      },
      // Conceptual: forward vs reverse
      {
        q: `You know the map distance and want the land distance. Do you multiply or divide by $N$? Why?`,
        a: `Multiply by $N$. The scale says $\\frac{\\text{map}}{\\text{land}} = \\frac{1}{N}$, so $\\text{land} = \\text{map} \\times N$. Multiplication scales up from the small map measurement to the large real-world measurement.`
      },
      // Reverse conversion
      {
        q: `Scale $1:20\\,000$, real distance 8.4 km. Find the map distance in centimetres.`,
        a: `Convert: $8.4 \\times 100\\,000 = 840\\,000\\,\\text{cm}$. Divide: $840\\,000 \\div 20\\,000 = 42\\,\\text{cm}$.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Map Scales',
      sections: [
        <>
          <h2>Scale Meaning</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Scale $1:N$`}</div>
            <div className="lrn-definition-desc">
              <p>{`1 cm on the map equals $N$ cm on the ground. The ratio holds for any unit, as long as both sides use the same unit.`}</p>
              <p>{`When to use: whenever you see a scale written as a ratio on a map, plan, or diagram.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Verbal scale`}</div>
            <div className="lrn-definition-desc">
              <p>{`"1 cm to $X$ m" is the same as $1:N$ where $N = X \\times 100$. When to use: convert verbal-scale wording to a pure ratio before applying any forward or reverse formula.`}</p>
            </div>
          </div>
        </>,
        <>
          <h2>Forward Conversion: Map to Land</h2>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{land cm} = \\text{map cm} \\times N$$`}</div>
          <div className="lrn-callout lrn-tip">
            <p>{`Unit conversion: divide by 100 to get metres. Divide by $100\\,000$ to get kilometres.`}</p>
            <p>{`When to use: you measured a distance on the map and want the real-world distance.`}</p>
          </div>
        </>,
        <>
          <h2>Reverse Conversion: Land to Map</h2>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{map cm} = \\frac{\\text{land cm}}{N}$$`}</div>
          <div className="lrn-callout lrn-tip">
            <p>{`Convert land distance to cm first: multiply by 100 from metres, multiply by $100\\,000$ from kilometres.`}</p>
            <p>{`When to use: you know the real distance and want to mark it on the map.`}</p>
          </div>
        </>,
        <>
          <h2>Unit Conversion Chain</h2>
          <div className="lrn-callout lrn-tip">
            <p>{`$1\\,\\text{m} = 100\\,\\text{cm}$`}</p>
            <p>{`$1\\,\\text{km} = 1\\,000\\,\\text{m} = 100\\,000\\,\\text{cm}$`}</p>
            <p>{`When to use: every map-scale problem needs at least one unit conversion.`}</p>
          </div>
        </>,
        <>
          <h2>Large-Scale vs Small-Scale</h2>
          <ul className="lrn-list">
            <li>{`Small $N$ (e.g. $1:1\\,000$): large-scale map, high detail, small area covered.`}</li>
            <li>{`Large $N$ (e.g. $1:300\\,000$): small-scale map, low detail, large area covered.`}</li>
          </ul>
          <p>{`When to use: to choose the right map for a task, or to interpret a given scale quickly.`}</p>
        </>
      ]
    },
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function MapScales() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
