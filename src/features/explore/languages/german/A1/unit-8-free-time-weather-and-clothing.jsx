import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'ftw',
  documentTitle: 'Free Time, Weather and Clothing: AETHER',
  learning: {
    category: 'Unit 8',
    title: 'Freizeit, Wetter und Kleidung',
    subtitle: 'Hobbies, music, weather, clothing, forecasts, and travel planning',
    sections: [
      <>
        <div id="lrn-section-0">
          <div className="lrn-header">
            <h2>Why This Unit Matters</h2>
            <p>Weather and clothing are the core of German small talk.</p>
            <p>
              This unit builds vocabulary for weather, seasons, clothing, colours, travel, and free
              time. It also teaches five grammar structures: impersonal constructions with{' '}
              <em>es</em>, dative personal pronouns, separable verbs, the perfect tense for the
              past, and modal verbs.
            </p>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">How to read the verb notes</span>
            <p>Each verb shows the case it takes and how to build its past. Here is the key:</p>
            <p>
              <strong>+A</strong> means the verb takes an accusative object (the object case from
              Unit 5). <strong>+D</strong> means it takes a dative object (the receiver case from
              Unit 6).
            </p>
            <p>
              The square brackets give the perfect-tense form, for example{' '}
              <em>[er hat getragen]</em> or <em>[er ist umgestiegen]</em>. The perfect tense is
              taught in full later in this unit.
            </p>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Informal commands (du)</span>
            <p>
              Some dialogues give a command to one friend, like{' '}
              <em>Nimm deinen Regenschirm mit!</em> or <em>Lass den Regenschirm hier!</em>
            </p>
            <p>
              To command a friend, take the <em>du</em>-form and drop the <em>-st</em> ending:{' '}
              <em>du nimmst</em> → <em>nimm!</em>, <em>du lässt</em> → <em>lass!</em> Verbs that
              change their vowel from <em>e</em> to <em>i</em> keep that change and add no extra{' '}
              <em>-e</em>.
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-1">
          <h2>Weather Phenomena</h2>
          <p>These words describe what the sky and air are doing right now.</p>
          <p>
            Look at <em>Es regnet</em> (It is raining). The subject is <strong>es</strong> (it).
            German weather sentences always start this way: the subject is always <em>es</em>.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before you read on: how do you think German says "It is raining"? Does it use a normal
              subject, or something else?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                German uses the impersonal subject <strong>es</strong>: <em>Es regnet.</em>
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Wetter, -</span>
            <div className="lrn-definition-desc">
              <p>weather (neuter noun, no plural)</p>
              <p>
                Example: <em>Wir haben wunderbares Wetter.</em> - We have beautiful weather.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Regen, -</span>
            <div className="lrn-definition-desc">
              <p>rain (masculine, no plural)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">es regnet [es hat geregnet]</span>
            <div className="lrn-definition-desc">
              <p>it is raining / it rains</p>
              <p>
                The past participle is <em>geregnet</em>. Use <em>haben</em> as the helping verb.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Schnee</span>
            <div className="lrn-definition-desc">
              <p>snow (masculine, no plural)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">es schneit [es hat geschneit]</span>
            <div className="lrn-definition-desc">
              <p>it is snowing / it snows</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Sonne, -n</span>
            <div className="lrn-definition-desc">
              <p>sun (feminine, plural: Sonnen)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">scheinen [hat geschienen]</span>
            <div className="lrn-definition-desc">
              <p>to shine - used for the sun</p>
              <p>
                Example: <em>Die Sonne scheint.</em> - The sun is shining.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">sonnig</span>
            <div className="lrn-definition-desc">
              <p>sunny (adjective)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Nebel, -</span>
            <div className="lrn-definition-desc">
              <p>fog (masculine, no plural change)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">neblig</span>
            <div className="lrn-definition-desc">
              <p>foggy (adjective)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Sturm, Stürme</span>
            <div className="lrn-definition-desc">
              <p>storm (masculine, plural: Stürme)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">stürmisch</span>
            <div className="lrn-definition-desc">
              <p>stormy (adjective)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Wind, -e</span>
            <div className="lrn-definition-desc">
              <p>wind (masculine, plural: Winde)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">windig</span>
            <div className="lrn-definition-desc">
              <p>windy (adjective)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">wehen [hat geweht]</span>
            <div className="lrn-definition-desc">
              <p>to blow - used for wind</p>
              <p>
                Example: <em>Der Wind weht.</em> - The wind is blowing.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Wolke, -n</span>
            <div className="lrn-definition-desc">
              <p>cloud (feminine, plural: Wolken)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Himmel, -</span>
            <div className="lrn-definition-desc">
              <p>sky (masculine, no plural change)</p>
              <p>
                Example: <em>Der Himmel ist teilweise bewölkt.</em> - The sky is partly cloudy.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              German weather verbs use <strong>es</strong> as subject because weather has no real
              actor.
            </p>
            <p>English does the same: "It is raining" - the "it" does not mean anything.</p>
            <p>
              German locks this in as a grammar rule: weather constructions always start with{' '}
              <em>es</em>.
            </p>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Dialogue</span>
            <p>
              <em>- Wie ist das Wetter heute?</em> - What is the weather like today?
            </p>
            <p>
              <em>- Es regnet stark, und der Wind weht. Nimm deinen Regenschirm mit!</em>
            </p>
            <p>- It is raining hard and the wind is blowing. Take your umbrella with you!</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does German say <em>es regnet</em> rather than giving the rain a subject like "der
              Regen regnet"?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                <em>Der Regen regnet</em> would mean "the rain rains", which sounds wrong. The rain
                is not an actor doing something, so <em>es</em> fills the subject slot instead.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-2">
          <h2>Temperature, Intensity and Sky Conditions</h2>
          <p>These words describe how strong, heavy, or extreme the weather feels.</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              German has three words for different degrees of weather intensity: <em>stark</em>,{' '}
              <em>heftig</em>, and <em>leicht</em>. Can you guess which means "light" and which
              means "heavy"?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>leicht</em> means light or mild. <em>stark</em> means strong. <em>heftig</em>{' '}
                means heavy or violent.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Wärme</span>
            <div className="lrn-definition-desc">
              <p>warmth (feminine noun, no plural)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Temperatur, -en</span>
            <div className="lrn-definition-desc">
              <p>temperature (feminine, plural: Temperaturen)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Tageshöchsttemperatur, -en</span>
            <div className="lrn-definition-desc">
              <p>highest daily temperature (feminine) - you see this word in weather forecasts</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">stark</span>
            <div className="lrn-definition-desc">
              <p>strong - used to describe intense rain, wind, or storms</p>
              <p>
                Example: <em>Es regnet stark.</em> - It is raining hard.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">heftig</span>
            <div className="lrn-definition-desc">
              <p>
                heavy, violent - stronger than <em>stark</em>
              </p>
              <p>
                Example: <em>ein heftiger Sturm</em> - a heavy storm
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">leicht</span>
            <div className="lrn-definition-desc">
              <p>light, mild - used for gentle weather</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">teilweise</span>
            <div className="lrn-definition-desc">
              <p>
                partly - used in phrases like <em>teilweise bewölkt</em> (partly cloudy)
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">bewölkt</span>
            <div className="lrn-definition-desc">
              <p>
                cloudy (adjective) - <em>teilweise bewölkt</em> = partly cloudy,{' '}
                <em>leicht bewölkt</em> = somewhat cloudy
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">die Hitze</span>
              <p>heat - extreme high temperature</p>
              <p>
                Example: <em>Ich hasse die Hitze im Sommer.</em>
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">die Kälte</span>
              <p>cold - extreme low temperature</p>
              <p>
                Example: <em>Die Kälte im Winter ist extrem.</em>
              </p>
            </div>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-3">
          <h2>Seasons</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              All four German seasons share the same grammatical gender. Before reading, what gender
              do you think they all are?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                All four seasons are masculine:{' '}
                <em>der Frühling, der Sommer, der Herbst, der Winter</em>.
              </p>
            </details>
          </div>

          <p>
            Since all four seasons are masculine, learning their articles is simple. To say "in
            summer" or "in winter," German uses <em>im</em> + season: <em>im Sommer</em>,{' '}
            <em>im Winter</em>, <em>im Herbst</em>, <em>im Frühling</em>.
          </p>
          <p>
            <em>im</em> is just short for <em>in dem</em> (in the), using the dative case you met in
            Unit 6.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Jahreszeit, -en</span>
            <div className="lrn-definition-desc">
              <p>season (feminine, plural: Jahreszeiten)</p>
              <p>
                <em>Jahreszeit</em> literally means "time of year."
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Herbst, -e</span>
            <div className="lrn-definition-desc">
              <p>autumn / fall (masculine, plural: Herbste)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Sommer, -</span>
            <div className="lrn-definition-desc">
              <p>summer (masculine, no plural change)</p>
              <p>
                Example: <em>Ich hasse den Sommer.</em> - I hate the summer.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Winter, -</span>
            <div className="lrn-definition-desc">
              <p>winter (masculine, no plural change)</p>
              <p>
                Example: <em>Den Winter mag ich überhaupt nicht.</em> - I do not like the winter at
                all.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">überhaupt nicht</span>
            <div className="lrn-definition-desc">
              <p>not at all - a strong negation</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              <em>Überhaupt nicht</em> is stronger than just <em>nicht</em>.
            </p>
            <p>
              <em>Ich mag den Winter nicht</em> means "I don't like winter."
            </p>
            <p>
              <em>Ich mag den Winter überhaupt nicht</em> means "I don't like winter at all."
            </p>
            <p>
              The word <em>überhaupt</em> acts as an intensifier that makes the negation total.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does German use accusative in <em>Den Winter mag ich überhaupt nicht</em> even
              though "winter" comes first?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                German word order is flexible. You can move the object to the front for emphasis.
              </p>
              <p>
                <em>Den Winter</em> is accusative because <em>mögen</em> (to like) takes an
                accusative object.
              </p>
              <p>
                Moving it to the front shows you are contrasting winter with other seasons you might
                like.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-4">
          <h2>Clothing Items</h2>
          <p>You need these words to describe what you or someone else is wearing.</p>
          <p>They also appear when shopping, packing for a trip, or talking about the weather.</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              German has three words related to clothing: <em>die Kleidung</em>,{' '}
              <em>das Kleidungsstück</em>, and <em>das Kleid</em>. Can you guess which one means a
              single dress, which means an item of clothing, and which means clothing in general?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>das Kleid</em> is a dress (one specific garment).
              </p>
              <p>
                <em>das Kleidungsstück</em> is an item of clothing (any one garment).
              </p>
              <p>
                <em>die Kleidung</em> is clothing in general (the whole concept).
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Kleidung, -en</span>
            <div className="lrn-definition-desc">
              <p>clothing, clothes (feminine) - the general concept</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Kleidungsstück, -e</span>
            <div className="lrn-definition-desc">
              <p>item of clothing (neuter, plural: Kleidungsstücke)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Hose, -n</span>
            <div className="lrn-definition-desc">
              <p>
                trousers (feminine, plural: Hosen) - singular in German even though trousers has two
                legs
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Hemd, -en</span>
            <div className="lrn-definition-desc">
              <p>shirt (neuter, plural: Hemden)</p>
              <p>
                Example: <em>ein grünes Hemd tragen</em> - to wear a green shirt
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Jacke, -n</span>
            <div className="lrn-definition-desc">
              <p>jacket (feminine, plural: Jacken)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Regenjacke, -n</span>
            <div className="lrn-definition-desc">
              <p>rain jacket (feminine, plural: Regenjacken)</p>
              <p>
                <em>Regen</em> (rain) + <em>Jacke</em> (jacket). It is feminine because the last
                word, <em>Jacke</em>, is feminine - the compound-gender rule from Unit 5.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Jeans (Pl.)</span>
            <div className="lrn-definition-desc">
              <p>blue jeans - always plural in German</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Kleid, -er</span>
            <div className="lrn-definition-desc">
              <p>dress (neuter, plural: Kleider)</p>
              <p>
                Example: <em>Das Sommerkleid passt mir nicht.</em> - The summer dress does not fit
                me.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Mantel, Mäntel</span>
            <div className="lrn-definition-desc">
              <p>coat (masculine, plural: Mäntel - adds umlaut)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Nachthemd, -en</span>
            <div className="lrn-definition-desc">
              <p>nightdress, nightshirt (neuter, plural: Nachthemden)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Pullover, -</span>
            <div className="lrn-definition-desc">
              <p>pullover, sweater (masculine, no plural change)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Rock, Röcke</span>
            <div className="lrn-definition-desc">
              <p>skirt (masculine, plural: Röcke - adds umlaut)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Schlafanzug, Schlafanzüge</span>
            <div className="lrn-definition-desc">
              <p>pyjamas (masculine, plural: Schlafanzüge)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Schuh, -e</span>
            <div className="lrn-definition-desc">
              <p>shoe (masculine, plural: Schuhe)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Socke, -n</span>
            <div className="lrn-definition-desc">
              <p>sock (feminine, plural: Socken)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Strumpfhose, -n</span>
            <div className="lrn-definition-desc">
              <p>stocking, tights (feminine, plural: Strumpfhosen)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das T-Shirt, -s</span>
            <div className="lrn-definition-desc">
              <p>T-shirt (neuter, plural: T-Shirts)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Turnschuh, -e</span>
            <div className="lrn-definition-desc">
              <p>sport shoe, trainer (masculine, plural: Turnschuhe)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Paar, -e</span>
            <div className="lrn-definition-desc">
              <p>pair (neuter, plural: Paare)</p>
              <p>
                Example: <em>ein Paar Schuhe/Socken</em> - a pair of shoes/socks
              </p>
            </div>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Example Sentences</span>
            <p>
              <em>Ich trage eine Jeans und ein grünes T-Shirt.</em> - I am wearing jeans and a green
              T-shirt.
            </p>
            <p>
              <em>Es regnet - nimm deine Regenjacke!</em> - It is raining - take your rain jacket!
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does German use <em>die Hose</em> (singular) for trousers when trousers refers to
              two legs?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>German treats trousers as one item of clothing, so it uses the singular.</p>
              <p>English does this too - "a pair of trousers" shows we know it has two parts.</p>
              <p>
                In German, you say <em>eine Hose</em> (one pair of trousers), not two unless you
                mean two separate pairs.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-5">
          <h2>Accessories and Related Items</h2>
          <p>These items go with clothing or protect you from the weather.</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Regenschirm, -e</span>
            <div className="lrn-definition-desc">
              <p>umbrella (masculine, plural: Regenschirme)</p>
              <p>
                Example: <em>Lass den Regenschirm hier!</em> - Leave the umbrella here!
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Handtasche, -n</span>
            <div className="lrn-definition-desc">
              <p>handbag (feminine, plural: Handtaschen)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Sonnenbrille, -n</span>
            <div className="lrn-definition-desc">
              <p>sunglasses (feminine, plural: Sonnenbrillen)</p>
              <p>
                Example: <em>Diese Brille steht dir nicht.</em> - These glasses don't suit you.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Sonnencreme, -s</span>
            <div className="lrn-definition-desc">
              <p>sun cream (feminine, plural: Sonnencremes)</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>German builds compound nouns by joining two words together.</p>
            <p>
              <em>Regenschirm</em> = <em>Regen</em> (rain) + <em>Schirm</em> (screen/shield) - a
              rain shield.
            </p>
            <p>
              <em>Sonnenbrille</em> = <em>Sonne</em> (sun) + <em>Brille</em> (glasses) - sun
              glasses.
            </p>
            <p>
              As you learned in Unit 5, the gender always comes from the last word: <em>der</em>{' '}
              Schirm makes <em>der</em> Regenschirm, <em>die</em> Brille makes <em>die</em>{' '}
              Sonnenbrille.
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-6">
          <h2>Colors and Descriptive Adjectives</h2>
          <p>These adjectives describe clothing and the sky.</p>
          <p>
            Look at <em>ein grünes Hemd</em> (a green shirt). The adjective gains the ending{' '}
            <em>-es</em> to match the neuter noun <em>Hemd</em>. As in Unit 5, an adjective before a
            noun takes an ending for the noun's gender, number, and case.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The adjective <em>grün</em> means green. How do you think it changes when you say "a
              green shirt" (<em>ein Hemd</em>, neuter)?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It becomes <em>grünes</em>: <em>ein grünes Hemd</em> - a green shirt.
              </p>
              <p>
                The ending <em>-es</em> matches neuter accusative with an indefinite article.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">grün</span>
            <div className="lrn-definition-desc">
              <p>
                green - example: <em>ein grünes Hemd tragen</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">rot</span>
            <div className="lrn-definition-desc">
              <p>red</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">schwarz</span>
            <div className="lrn-definition-desc">
              <p>black</p>
            </div>
          </div>

          <p>
            These three colors appear in this unit's examples. German has a full set of color words;
            these are the ones you need here.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">wunderbar</span>
            <div className="lrn-definition-desc">
              <p>wonderful, beautiful - general quality</p>
              <p>
                Example: <em>Wir haben wunderbares Wetter.</em> - We have beautiful weather.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">wunderschön</span>
            <div className="lrn-definition-desc">
              <p>magnificent, beautiful - specifically about visual beauty</p>
              <p>
                Example: <em>Die Insel ist wunderschön.</em> - The island is magnificent.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the adjective in <em>wunderbares Wetter</em> end in <em>-es</em> rather than
              just <em>wunderbar</em>?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                When a German adjective comes before a noun, it takes an ending that shows the
                noun's gender, number, and case.
              </p>
              <p>
                <em>das Wetter</em> is neuter. With no article in front, the adjective carries the
                gender signal itself, and the neuter ending is <em>-es</em>.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-7">
          <h2>Verbs for Wearing and Clothing</h2>
          <p>
            These verbs all relate to clothing - how you wear it, whether it fits, how it looks on
            you, and what you do with it.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              German has two clothing verbs: <em>passen</em> and <em>stehen</em>. One means "to fit"
              (size/cut) and one means "to suit" (style/look). Which is which?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>passen</em> means to fit - is the size right?
              </p>
              <p>
                <em>stehen</em> means to suit - does it look good on you?
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">tragen [er trägt, er hat getragen] + A</span>
            <div className="lrn-definition-desc">
              <p>to wear something (accusative) - habitual or current wearing</p>
              <p>
                Example: <em>ein grünes Hemd tragen</em> - to wear a green shirt
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">passen [er hat gepasst] + D</span>
            <div className="lrn-definition-desc">
              <p>to fit someone (dative) - the size or cut is right</p>
              <p>
                Example: <em>Das Sommerkleid passt mir nicht.</em> - The summer dress does not fit
                me.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">stehen [er hat gestanden] + D</span>
            <div className="lrn-definition-desc">
              <p>to suit someone (dative) - the style looks good on you</p>
              <p>
                Example: <em>Diese Brille steht dir nicht.</em> - These glasses don't suit you.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              umtauschen [er tauscht um, er hat umgetauscht] + A
            </span>
            <div className="lrn-definition-desc">
              <p>to exchange something (accusative) - return to the shop for a different item</p>
              <p>
                Example: <em>Das Hemd ist zu klein, ich tausche es um.</em> - The shirt is too
                small, I'll exchange it.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              zurückgeben [er gibt zurück, er hat zurückgegeben] + A
            </span>
            <div className="lrn-definition-desc">
              <p>to return something (accusative) - give it back to the shop</p>
              <p>
                Example: <em>die neuen Schuhe zurückgeben</em> - to return the new shoes
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">passen + D (to fit)</span>
              <p>
                <em>Das Kleid passt mir.</em> - The dress fits me.
              </p>
              <p>Size and cut are correct.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">stehen + D (to suit)</span>
              <p>
                <em>Das Kleid steht mir.</em> - The dress suits me.
              </p>
              <p>The style looks good on me.</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Both <em>passen</em> and <em>stehen</em> take dative objects, not accusative.
            </p>
            <p>
              This is because the person is the one who benefits or is affected. That is the dative
              role.
            </p>
            <p>
              The dress does not act on you (accusative). It relates to you in a beneficial way
              (dative).
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do <em>passen</em> and <em>stehen</em> take dative while <em>tragen</em> takes
              accusative?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                <em>tragen</em> is an action you perform on the clothing, so the clothing is the
                accusative direct object. <em>passen</em> and <em>stehen</em> describe how the
                clothing relates to the person, so the person is the dative receiver.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-8">
          <h2>Dative Personal Pronouns</h2>
          <p>
            You learned the full dative pronoun table in Unit 6. This unit puts it to work, because{' '}
            <em>passen</em>, <em>stehen</em>, <em>helfen</em>, and <em>schmecken</em> all take a
            dative object - the person who receives the effect.
          </p>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Dative pronouns (recap from Unit 6)</span>
            <p>ich → mir | du → dir | er → ihm | sie (sg) → ihr | es → ihm</p>
            <p>wir → uns | ihr → euch | sie (pl) → ihnen | Sie → Ihnen</p>
            <p>
              In use: <em>Das Kleid passt mir.</em> (fits me) · <em>Die Brille steht dir nicht.</em>{' '}
              (suits you)
            </p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">euch</span>
            <div className="lrn-definition-desc">
              <p>
                you all / for you all - dative of <em>ihr</em> (the plural "you")
              </p>
              <p>
                Example: <em>Das Hotel gefällt euch.</em> - You all like the hotel.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Ihnen</span>
            <div className="lrn-definition-desc">
              <p>
                you / for you - dative of the formal <em>Sie</em>. Always capitalized, which is the
                only thing that tells it apart from lowercase <em>ihnen</em> (them).
              </p>
              <p>
                Example: <em>Kann ich Ihnen helfen?</em> - Can I help you?
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">wem?</span>
            <div className="lrn-definition-desc">
              <p>
                to whom? - the dative of <em>wer?</em> (who?). Use it to ask for a dative object:{' '}
                <em>Wem hilfst du?</em>
              </p>
            </div>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-9">
          <h2>Verbs with Dative Objects</h2>
          <p>These verbs always take a dative object - the person who receives the effect.</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">helfen [er hilft, er hat geholfen] + D</span>
            <div className="lrn-definition-desc">
              <p>to help someone (dative)</p>
              <p>
                Example: <em>Kann ich Ihnen helfen?</em> - Can I help you?
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">schmecken [er hat geschmeckt] + D</span>
            <div className="lrn-definition-desc">
              <p>to taste good to someone (dative)</p>
              <p>
                Example: <em>Die Suppe schmeckt mir gut.</em> - I like the soup (the soup tastes
                good to me).
              </p>
            </div>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Transfer: Same dative pattern</span>
            <p>
              <em>Das Buch gefällt mir.</em> - I like the book (the book pleases me).
            </p>
            <p>
              <em>Das Essen schmeckt ihm gut.</em> - He likes the food (the food tastes good to
              him).
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does <em>schmecken</em> use dative? You might expect "I like the soup" to put "I"
              as the subject.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In German, <em>schmecken</em> means "to taste good to someone" - the soup is the
                subject, and the person is the dative receiver.
              </p>
              <p>The German structure is: [soup] + [tastes good] + [to me].</p>
              <p>This is the opposite of the English structure, where "I" is the subject.</p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-10">
          <h2>Separable Verbs</h2>
          <p>
            You met separable verbs in Unit 7: the prefix splits off and jumps to the end of the
            clause, while the verb stem stays in second position.
          </p>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Worked split: mitbringen</span>
            <p>
              Start from the infinitive <em>mitbringen</em> (to bring along).
            </p>
            <p>
              In a sentence the prefix <em>mit</em> breaks off and goes to the end:{' '}
              <em>Ich bringe viele Geschenke mit.</em> - I bring many presents along.
            </p>
            <p>
              The stem <em>bringe</em> stays in position 2; <em>mit</em> closes the sentence.
            </p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              <em>mitbringen</em> means "to bring along" and <em>mitnehmen</em> means "to take
              along." Both use <em>mit-</em>. What is the difference in meaning?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>mitbringen</em> means you bring something toward the destination or speaker (you
                arrive with it).
              </p>
              <p>
                <em>mitnehmen</em> means you take something away with you (you leave with it).
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              mitbringen [er bringt mit, er hat mitgebracht] + A
            </span>
            <div className="lrn-definition-desc">
              <p>to bring something along - toward the speaker or destination</p>
              <p>
                Example: <em>Aus Norwegen bringe ich viele Geschenke mit.</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              mitnehmen [er nimmt mit, er hat mitgenommen] + A
            </span>
            <div className="lrn-definition-desc">
              <p>to take something with you - away from where you are</p>
              <p>
                Example: <em>Ich nehme meine Badesachen in den Urlaub mit.</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              umsteigen [er steigt um, er ist umgestiegen]
            </span>
            <div className="lrn-definition-desc">
              <p>to change trains or transport</p>
              <p>
                Example: <em>In München müssen Sie umsteigen.</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">hingehen [er geht hin, er ist hingegangen]</span>
            <div className="lrn-definition-desc">
              <p>to go there - go to a specific place</p>
              <p>
                Example: <em>Morgen ist ein Konzert, und wir gehen hin.</em>
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              These prefixes are always separable and always stressed:{' '}
              <em>hin-, mit-, um-, zurück-, weg-, ab-, an-, auf-</em>.
            </p>
            <p>
              A few prefixes never split off (be-, ver-, ent-, zer-). You will meet those later.
            </p>
            <p>
              The new part for you here is that <em>um-</em> can mean two different things:{' '}
              <em>umsteigen</em> (change transport, travel) and <em>umtauschen</em> (exchange goods,
              shopping). Same prefix, different context.
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-11">
          <h2>Talking About the Past: The Perfect Tense</h2>
          <p>German uses the perfect tense for most everyday talk about the past.</p>
          <p>It has two parts: a helper verb in position 2, and a past participle at the end.</p>
          <p>
            <em>Es hat geregnet.</em> - It rained. (helper <em>hat</em> + participle{' '}
            <em>geregnet</em>)
          </p>
          <p>
            This is the <em>[hat geregnet]</em> form you have seen in brackets after the verbs in
            this unit.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The verb <em>spielen</em> (to play) is regular. What do you think its past participle
              looks like?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>gespielt</em>: the prefix <em>ge-</em> plus the stem <em>spiel</em> plus the
                ending <em>-t</em>. So: <em>Ich habe Klavier gespielt.</em>
              </p>
            </details>
          </div>

          <h3>How to build a past participle</h3>
          <p>
            Most regular verbs follow one pattern: <strong>ge-</strong> + stem + <strong>-t</strong>
            .
          </p>
          <ul className="lrn-list">
            <li>
              <em>machen</em> → <em>gemacht</em>
            </li>
            <li>
              <em>spielen</em> → <em>gespielt</em>
            </li>
            <li>
              <em>regnen</em> → <em>geregnet</em>
            </li>
          </ul>
          <p>
            Strong (irregular) verbs use <strong>ge-</strong> + stem + <strong>-en</strong>, and
            often change the stem vowel. You learn these one by one.
          </p>
          <ul className="lrn-list">
            <li>
              <em>tragen</em> → <em>getragen</em>
            </li>
            <li>
              <em>schwimmen</em> → <em>geschwommen</em>
            </li>
          </ul>

          <h3>Where does ge- go with prefix verbs?</h3>
          <p>
            With a separable verb, <em>ge-</em> slips in between the prefix and the stem.
          </p>
          <p>
            <em>mitbringen</em> → <em>mitgebracht</em>. <em>umtauschen</em> → <em>umgetauscht</em>.
          </p>
          <p>
            With an inseparable prefix (be-, ver-, ent-, zer-), there is no <em>ge-</em> at all.
          </p>
          <p>
            <em>bestätigen</em> → <em>bestätigt</em> (not <em>gebestätigt</em>). <em>behalten</em> →{' '}
            <em>behalten</em>.
          </p>

          <h3>haben or sein?</h3>
          <p>
            Most verbs take <strong>haben</strong> as the helper: <em>Ich habe gespielt.</em>
          </p>
          <p>
            Verbs of movement or a change of state take <strong>sein</strong> instead.
          </p>
          <ul className="lrn-list">
            <li>
              <em>umsteigen</em> (change trains, a movement) → <em>Ich bin umgestiegen.</em>
            </li>
            <li>
              <em>schwimmen</em> (a movement) → <em>Ich bin geschwommen.</em>
            </li>
            <li>
              <em>fahren</em> (a movement) → <em>Wir sind gefahren.</em>
            </li>
          </ul>
          <p>
            That is why the brackets in this unit show <em>[ist umgestiegen]</em> for travel verbs
            but <em>[hat getragen]</em> for most others.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The helper verb carries the subject ending and tense, so it sits in position 2 like a
              normal verb.
            </p>
            <p>
              The participle holds the real meaning and parks at the end. <em>sein</em> marks verbs
              where the subject itself moves or changes, a leftover from older German grammar that
              the language keeps for these verbs.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the participle of <em>umsteigen</em> built as <em>umgestiegen</em> while{' '}
              <em>bestätigen</em> gives <em>bestätigt</em> with no <em>ge-</em>?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                <em>um-</em> is a separable prefix, so <em>ge-</em> slots in behind it: um + ge +
                stiegen.
              </p>
              <p>
                <em>be-</em> is an inseparable prefix. It already sits tight against the stem and
                takes the spot <em>ge-</em> would fill, so no <em>ge-</em> appears.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-12">
          <h2>Travel and Holiday Vocabulary</h2>
          <p>
            German holiday language covers the whole trip: packing, transport, accommodation, and
            destinations.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Urlaub, -e</span>
            <div className="lrn-definition-desc">
              <p>
                holiday (masculine) - <em>in Urlaub gehen</em> = to go on holiday;{' '}
                <em>im Urlaub sein</em> = to be on holiday
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Urlaubserlebnis, -se</span>
            <div className="lrn-definition-desc">
              <p>holiday experience (neuter, plural: Urlaubserlebnisse)</p>
              <p>
                Example: <em>über Urlaubserlebnisse berichten</em> - to tell about a holiday
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Reise, -n</span>
            <div className="lrn-definition-desc">
              <p>
                journey, trip (feminine) - <em>eine Reise machen</em> = to go on a trip;{' '}
                <em>Gute Reise!</em> = Have a good trip!
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Reiseziel, -e</span>
            <div className="lrn-definition-desc">
              <p>destination (neuter, plural: Reiseziele)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Reisetasche, -n</span>
            <div className="lrn-definition-desc">
              <p>travelling bag (feminine)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Koffer, -</span>
            <div className="lrn-definition-desc">
              <p>suitcase (masculine, no plural change)</p>
              <p>
                Example: <em>den Koffer packen</em> - to pack the suitcase
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Rucksack, Rucksäcke</span>
            <div className="lrn-definition-desc">
              <p>backpack (masculine, plural: Rucksäcke)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">packen [er hat gepackt] + A</span>
            <div className="lrn-definition-desc">
              <p>to pack something (accusative)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Rückfahrkarte, -n</span>
            <div className="lrn-definition-desc">
              <p>return ticket (feminine, plural: Rückfahrkarten)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Rückfahrt, -en</span>
            <div className="lrn-definition-desc">
              <p>the way back, the return journey (feminine)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Hin- und Rückfahrt, -en</span>
            <div className="lrn-definition-desc">
              <p>round trip (feminine)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Haltestelle, -n</span>
            <div className="lrn-definition-desc">
              <p>
                bus or tram stop (feminine) - <em>an der Haltestelle stehen</em> = to wait at the
                stop
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Verspätung, -en</span>
            <div className="lrn-definition-desc">
              <p>
                delay (feminine) - Example: <em>Der Zug hat eine Verspätung von 10 Minuten.</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Verkehrsmittel, -</span>
            <div className="lrn-definition-desc">
              <p>means of transportation (neuter, no plural change)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Strand, Strände</span>
            <div className="lrn-definition-desc">
              <p>
                beach (masculine, plural: Strände) - <em>an den Strand gehen</em> = to go to the
                beach
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">das Meer (neuter)</span>
              <p>the sea, the ocean in general</p>
              <p>
                <em>ans Meer fahren</em> = to go to the seaside
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">die See (feminine)</span>
              <p>a named Northern European sea</p>
              <p>
                <em>die Nordsee</em>, <em>die Ostsee</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Nordsee / die Ostsee</span>
            <div className="lrn-definition-desc">
              <p>the North Sea / the Baltic Sea</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Insel, -n</span>
            <div className="lrn-definition-desc">
              <p>
                island (feminine, plural: Inseln) - <em>auf eine Insel fahren</em> = to travel to an
                island
              </p>
              <p>
                Example: <em>Die Insel ist wunderschön.</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Stau, -s</span>
            <div className="lrn-definition-desc">
              <p>
                traffic jam (masculine) - <em>im Stau stehen</em> = to be stuck in a traffic jam
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Passagier, -e</span>
            <div className="lrn-definition-desc">
              <p>passenger (masculine, plural: Passagiere)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Pass, Pässe</span>
            <div className="lrn-definition-desc">
              <p>passport (masculine, plural: Pässe)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Landung, -en</span>
            <div className="lrn-definition-desc">
              <p>landing (feminine) - used for plane landings</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Postkarte, -n</span>
            <div className="lrn-definition-desc">
              <p>
                postcard (feminine) - Example: <em>eine Postkarte schreiben</em> - to write a
                postcard
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Richtung, -en</span>
            <div className="lrn-definition-desc">
              <p>
                direction (feminine) - Example: <em>In welche Richtung?</em> - In which direction?
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Hafen, Häfen</span>
            <div className="lrn-definition-desc">
              <p>
                harbour, port (masculine, plural: Häfen) - Example:{' '}
                <em>Das Schiff liegt im Hafen.</em> - The ship is at harbour.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Kontinent, -e</span>
            <div className="lrn-definition-desc">
              <p>
                continent (masculine, plural: Kontinente) - Example:{' '}
                <em>auf einem anderen Kontinent</em> - on another continent
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Skandinavien</span>
            <div className="lrn-definition-desc">
              <p>
                Scandinavia - place name, no article: <em>Wir fahren nach Skandinavien.</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Vereinigten Staaten (Pl.)</span>
            <div className="lrn-definition-desc">
              <p>
                the United States - always plural; <em>in die Vereinigten Staaten reisen</em> = to
                travel to the United States
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Übernachtung, -en</span>
            <div className="lrn-definition-desc">
              <p>overnight stay (feminine)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Modegeschäft, -e</span>
            <div className="lrn-definition-desc">
              <p>fashion shop (neuter)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Schaufenster, -</span>
            <div className="lrn-definition-desc">
              <p>shop window (neuter, no plural change)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Sitzplatz, Sitzplätze</span>
            <div className="lrn-definition-desc">
              <p>seat (masculine, plural: Sitzplätze)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Tourist, -en</span>
            <div className="lrn-definition-desc">
              <p>tourist (masculine, plural: Touristen)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Klasse, -n</span>
            <div className="lrn-definition-desc">
              <p>
                class (feminine) - <em>Fahren Sie erste oder zweite Klasse?</em> - Are you
                travelling first or second class?
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">in Urlaub gehen</span>
              <p>
                to go on holiday - movement, departure (accusative after <em>in</em>)
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">im Urlaub sein</span>
              <p>
                to be on holiday - location, state (dative after <em>in</em>)
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">die Rückfahrkarte</span>
              <p>the return ticket - the physical card or booking</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">die Rückfahrt</span>
              <p>the return journey - the actual trip home</p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">der Koffer</span>
              <p>suitcase - large, wheeled or handled</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">der Rucksack / die Reisetasche</span>
              <p>backpack / travelling bag - carried on back or by hand</p>
            </div>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-13">
          <h2>Useful Action Verbs</h2>
          <p>Use these verbs to talk about everyday actions, travel, and what you want to do.</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">hassen [er hat gehasst] + A</span>
            <div className="lrn-definition-desc">
              <p>to hate something/someone (accusative)</p>
              <p>
                Example: <em>Ich hasse den Sommer.</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">lieben [er hat geliebt] + A</span>
            <div className="lrn-definition-desc">
              <p>to love something/someone (accusative)</p>
              <p>
                Example: <em>Ich liebe die Sonne.</em> / <em>Ich liebe dich.</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">am liebsten</span>
            <div className="lrn-definition-desc">
              <p>
                most of all, best - superlative adverb from <em>gern</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">lassen [er lässt, er hat gelassen] + A</span>
            <div className="lrn-definition-desc">
              <p>to leave something/someone somewhere (accusative)</p>
              <p>
                Example: <em>Lass den Regenschirm hier!</em> - Leave the umbrella here!
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">wählen [er hat gewählt] + A</span>
            <div className="lrn-definition-desc">
              <p>to choose something/someone (accusative)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">warten [er wartet, er hat gewartet auf] + A</span>
            <div className="lrn-definition-desc">
              <p>to wait for something/someone (accusative)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">wollen [er will, er hat gewollt]</span>
            <div className="lrn-definition-desc">
              <p>
                to want - a modal verb. Its full paradigm and word order are in the modal-verbs
                section below.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">träumen [er hat geträumt von] + D</span>
            <div className="lrn-definition-desc">
              <p>
                to dream of something/someone (dative with <em>von</em>)
              </p>
              <p>
                Example: <em>Ich träume von Eis und Espresso in Italien.</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">starten [er startet, er hat gestartet] + A</span>
            <div className="lrn-definition-desc">
              <p>to start a device or machine (accusative)</p>
              <p>
                Example: <em>den Computer neu starten</em> - to restart the computer
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">gerade</span>
            <div className="lrn-definition-desc">
              <p>right now, at the moment</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">irgendwo</span>
            <div className="lrn-definition-desc">
              <p>somewhere</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">nächst-</span>
            <div className="lrn-definition-desc">
              <p>
                next - used as an adjective: <em>nächste Woche</em> (next week)
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">sondern</span>
            <div className="lrn-definition-desc">
              <p>
                but - used after a negative to introduce the correct alternative:{' '}
                <em>nicht X, sondern Y</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">womit?</span>
            <div className="lrn-definition-desc">
              <p>how? / by what means? - dative interrogative for means of transport</p>
              <p>
                Example: <em>Womit fahren Sie?</em> - How are you travelling?
              </p>
            </div>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-14">
          <h2>Leisure, Hobbies and Sports</h2>
          <p>These words name free-time activities and the verbs that go with them.</p>
          <p>
            German locks each activity to one fixed verb. You learn the noun and its verb together
            as a set.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>How do you say "to ski" in German? Think of the word for ski and a movement verb.</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>Ski fahren.</strong> <em>fahren</em> (to go by vehicle) pairs with{' '}
                <em>Ski</em> because you move on the skis. You never say "Ski spielen" or "Ski
                machen".
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Freizeit</span>
            <div className="lrn-definition-desc">
              <p>free time (feminine)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Freizeitaktivität, -en</span>
            <div className="lrn-definition-desc">
              <p>free-time activity, leisure activity (feminine)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Hobby, -s</span>
            <div className="lrn-definition-desc">
              <p>
                hobby (neuter, plural: Hobbys) - <em>das Lieblingshobby</em> = favourite hobby
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Schach</span>
            <div className="lrn-definition-desc">
              <p>
                chess (neuter) - you play it with <em>spielen</em>: <em>Schach spielen</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Ski, -er</span>
            <div className="lrn-definition-desc">
              <p>
                ski (masculine) - paired with the movement verb <em>fahren</em>: <em>Ski fahren</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Yoga / die Gymnastik / das Golf</span>
            <div className="lrn-definition-desc">
              <p>yoga / gymnastics / golf - common leisure activities</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Sporthalle, -n</span>
            <div className="lrn-definition-desc">
              <p>sports centre, gym (feminine, plural: Sporthallen)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">schwimmen [ist geschwommen]</span>
            <div className="lrn-definition-desc">
              <p>to swim - takes sein in the perfect because it is a movement verb</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">wandern [ist gewandert]</span>
            <div className="lrn-definition-desc">
              <p>to hike - also a movement verb, so it takes sein</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">tanzen [hat getanzt]</span>
            <div className="lrn-definition-desc">
              <p>
                to dance - <em>Salsa tanzen</em> = to dance salsa
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">surfen [hat gesurft]</span>
            <div className="lrn-definition-desc">
              <p>
                to surf; also to browse the internet - <em>im Internet surfen</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              kochen [hat gekocht] / rauchen [hat geraucht]
            </span>
            <div className="lrn-definition-desc">
              <p>to cook / to smoke - everyday activity verbs</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Sport treiben [er treibt, hat getrieben]</span>
            <div className="lrn-definition-desc">
              <p>
                to do sport - <em>treiben</em> is the fixed verb for sport in general:{' '}
                <em>Ich treibe gern Sport.</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Karten spielen</span>
            <div className="lrn-definition-desc">
              <p>
                to play cards - <em>spielen</em> is the fixed verb for games and instruments
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              German treats the verb as part of the activity name. <em>Sport treiben</em>,{' '}
              <em>Karten spielen</em>, <em>Ski fahren</em> work like fixed expressions.
            </p>
            <p>
              <em>treiben</em> covers sport in general. <em>spielen</em> covers games and
              instruments. <em>fahren</em> covers anything you move on or in: a car, a bicycle,
              skis. So skiing pairs with <em>fahren</em>, not <em>spielen</em>.
            </p>
            <p>Swapping the verb sounds as odd as calling tennis "tennis-ride" in English.</p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-15">
          <h2>Modal Verbs and Their Word Order</h2>
          <p>A modal verb is a helper verb like can, must, or want.</p>
          <p>It pairs with a second verb that gives the real action. Compare these two:</p>
          <p>
            <em>Ich spiele Klavier.</em> - I play the piano. (one verb)
          </p>
          <p>
            <em>Ich kann Klavier spielen.</em> - I can play the piano. (modal + second verb)
          </p>
          <p>
            The modal sits in position 2. The action verb drops to the very end of the clause as an
            infinitive. Together they form a bracket around the rest of the sentence. You met this
            bracket with <em>dürfen</em> in Unit 6.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know <em>spielen</em> means "to play". Where do you think it goes in{' '}
              <em>Er kann gut Klavier ___</em>?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                At the very end: <em>Er kann gut Klavier spielen.</em> The modal <em>kann</em> opens
                the bracket; <em>spielen</em> closes it.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">wollen [ich will, du willst, er will]</span>
            <div className="lrn-definition-desc">
              <p>to want to - full present tense paradigm:</p>
              <p>
                ich <strong>will</strong>, du <strong>willst</strong>, er/sie/es{' '}
                <strong>will</strong>, wir <strong>wollen</strong>, ihr <strong>wollt</strong>,
                sie/Sie <strong>wollen</strong>
              </p>
              <p>
                Example: <em>Ich will nach Italien reisen.</em> - I want to travel to Italy.
              </p>
              <p>
                Notice the singular changes <em>o</em> to <em>i</em>, and ich and er look identical
                (both <em>will</em>). All modals share this pattern.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">können [ich kann, du kannst, er kann]</span>
            <div className="lrn-definition-desc">
              <p>
                to be able to, can - taught in full in Unit 11. Here you just need <em>kann</em> for
                sentences like <em>Er kann gut schwimmen.</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              möchte- [ich möchte, du möchtest, er möchte]
            </span>
            <div className="lrn-definition-desc">
              <p>
                would like to - the polite "want", introduced in Unit 5. Use it for wishes:{' '}
                <em>Ich möchte am Samstag Schach spielen.</em>
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The modal carries the tense and the subject ending, so it must take position 2 like
              any normal verb.
            </p>
            <p>
              The action verb has nothing left to mark, so German parks it at the end in its plain
              infinitive form. The two verbs frame the sentence like brackets: [modal ...
              infinitive].
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-16">
          <h2>Music and Arts</h2>
          <p>These words name instruments, music styles, and the people who perform.</p>
          <p>
            One verb covers all instruments: <em>spielen</em>. You say <em>Klavier spielen</em>,{' '}
            <em>Violine spielen</em>, <em>Saxofon spielen</em>.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>To talk about playing the violin, what verb would you use in German?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>spielen</strong>. All instruments pair with <em>spielen</em>: Violine
                spielen, Klavier spielen, Saxofon spielen.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Instrument, -e</span>
            <div className="lrn-definition-desc">
              <p>instrument (neuter, plural: Instrumente)</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Klavier, -e</span>
            <div className="lrn-definition-desc">
              <p>
                piano (neuter, plural: Klaviere) - <em>Klavier spielen</em> = to play the piano
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Saxofon, -e / die Violine, -n</span>
            <div className="lrn-definition-desc">
              <p>saxophone (neuter) / violin (feminine) - both pair with spielen</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              die Rockmusik / klassische Musik / der Hip-Hop
            </span>
            <div className="lrn-definition-desc">
              <p>rock music / classical music / hip-hop - common music styles</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Walzer / der Tango / die Salsa</span>
            <div className="lrn-definition-desc">
              <p>
                waltz / tango / salsa - dances you pair with <em>tanzen</em>: <em>Salsa tanzen</em>
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">das Orchester, -</span>
            <div className="lrn-definition-desc">
              <p>
                orchestra (neuter, no plural change) - <em>das Universitätsorchester</em> =
                university orchestra
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">der Sänger, - / die Sängerin, -nen</span>
            <div className="lrn-definition-desc">
              <p>singer (masculine) / singer (feminine)</p>
              <p>
                Example: <em>Wir suchen noch eine Sängerin.</em> - We are still looking for a
                singer.
              </p>
            </div>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Worked Example: a modal sentence</span>
            <p>
              Build "He can play the piano well" with the modal verb <em>können</em>:
            </p>
            <p>
              <em>Er kann gut Klavier spielen.</em>
            </p>
            <p>
              The modal <em>kann</em> sits in position 2. It opens the verb bracket. The main verb{' '}
              <em>spielen</em> drops to the end as an infinitive and closes the bracket. Everything
              else (<em>gut</em>, <em>Klavier</em>) sits inside. This is the modal word order you
              met in the modal-verbs section above.
            </p>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Feminine job titles</span>
            <p>
              <em>Sänger</em> becomes <em>Sängerin</em> the same way you turned other job titles
              feminine in Units 1 and 3: add <em>-in</em>, and the plural adds <em>-nen</em>{' '}
              (Sängerinnen).
            </p>
          </div>
        </div>
      </>
    ]
  },

  practice: [
    {
      q: 'Translate: "It is raining." into German.',
      a: 'Es regnet. German weather verbs use the impersonal subject es (it) because weather has no real actor. The verb regnet comes from regnen (to rain). Past tense: Es hat geregnet.'
    },
    {
      q: 'What is the German word for umbrella? What gender is it?',
      a: 'der Regenschirm (masculine, plural: Regenschirme). It is a compound noun: Regen (rain) + Schirm (screen/shield). The gender matches the last word, Schirm, which is masculine.'
    },
    {
      q: 'How do you say "The sun is shining" in German?',
      a: 'Die Sonne scheint. The verb is scheinen (hat geschienen). The sun (die Sonne) is the subject - unlike impersonal weather verbs like es regnet.'
    },
    {
      q: 'What does stürmisch mean? Give the related noun.',
      a: 'stürmisch means stormy (adjective). The related noun is der Sturm (storm, masculine, plural: Stürme). Example: Ein heftiger Sturm - a heavy storm.'
    },
    {
      q: 'ELABORATE: Why do passen and stehen take dative objects, not accusative?',
      a: 'Both verbs describe a relationship between the clothing and the person. The clothing fits or suits the person. The person is the one who receives the effect, not the one performing an action. Dative marks the receiver or beneficiary. Accusative marks the direct object of an action. Since you are not acting on the clothing, you are the dative receiver of the fitting or suiting effect.'
    },
    {
      q: 'Give the German for: "The dress does not fit me." Use the correct dative pronoun.',
      a: 'Das Sommerkleid passt mir nicht. The dative pronoun mir (me, for me) comes from ich. passen + D means to fit someone. The dress is the subject. The person (mir) is the dative object.'
    },
    {
      q: 'What is the difference between stark and heftig when describing weather?',
      a: 'Both describe intensity, but heftig is stronger and more dramatic. Es regnet stark means it is raining hard. Ein heftiger Sturm suggests violent, intense weather. Use stark for heavy rain or wind. Use heftig for something more violent or forceful.'
    },
    {
      q: 'What is the difference between mitbringen and mitnehmen?',
      a: 'mitbringen means to bring something along - you carry it toward the destination or speaker (you arrive with it). mitnehmen means to take something with you - you carry it away from where you are now (you leave with it). Example: Ich bringe Geschenke mit (arriving). Ich nehme meinen Koffer mit (leaving).'
    },
    {
      q: 'Give the German for: "These glasses do not suit you." (informal)',
      a: 'Diese Brille steht dir nicht. stehen + D means to suit someone. dir is the dative of du (informal you). die Brille (glasses) is the subject even though it looks singular - Brille refers to one pair of glasses.'
    },
    {
      q: 'TRANSFER: Apply the passen + D pattern to a new sentence: "The jacket does not fit him."',
      a: 'Die Jacke passt ihm nicht. ihm is the dative of er (he/him). The jacket is the subject (die Jacke). The pattern is identical to Das Kleid passt mir nicht - just swap the noun and pronoun.'
    },
    {
      q: 'How do you say "partly cloudy" in German?',
      a: 'teilweise bewölkt means partly cloudy. teilweise on its own means partly or to some extent. Example: Der Himmel ist teilweise bewölkt - The sky is partly cloudy.'
    },
    {
      q: 'How do separable verbs work in a simple sentence? Give an example with mitbringen.',
      a: 'In a main clause, the separable prefix moves to the end of the sentence. The stem stays in second position. Example: Ich bringe viele Geschenke mit. (mit moves to the end.) In the infinitive, the prefix stays attached: mitbringen.'
    },
    {
      q: 'What is the German word for dress? What is its gender and plural?',
      a: 'das Kleid (neuter, plural: Kleider). Example: Das Sommerkleid passt mir nicht - The summer dress does not fit me. The compound Sommerkleid = Sommer + Kleid.'
    },
    {
      q: 'TRANSFER: Apply the stehen + D pattern to: "Does the pullover suit her?"',
      a: 'Steht ihr der Pullover? ihr is the dative of sie (she/her). The pullover is the subject. In questions, the verb moves to first position. This follows the same dative pattern as steht dir and steht ihm.'
    },
    {
      q: 'What does umsteigen mean? How is it different from umtauschen?',
      a: 'umsteigen means to change trains or transport. umtauschen means to exchange goods at a shop. Both use the prefix um- and are separable. The key difference is context: umsteigen is for travel, umtauschen is for shopping.'
    },
    {
      q: 'Give all the German dative personal pronouns from ich through Sie (formal).',
      a: 'ich - mir | du - dir | er - ihm | sie (sg) - ihr | es - ihm | wir - uns | ihr - euch | sie (pl) - ihnen | Sie (formal) - Ihnen. The capital letter on Ihnen is the only visual difference between formal you and them.'
    },
    {
      q: 'How do you say "The sky is partly cloudy" in German?',
      a: 'Der Himmel ist teilweise bewölkt. der Himmel means sky (masculine). teilweise means partly. bewölkt means cloudy.'
    },
    {
      q: 'SELF-EXPLAIN: Why does tragen take accusative while passen takes dative?',
      a: 'tragen (to wear) describes an action you perform on the clothing. You are wearing it. The clothing is the direct object of your action, so accusative. passen (to fit) describes a relationship where the clothing relates to you. You are the receiver of the fitting effect, so dative.'
    },
    {
      q: 'What is the present tense conjugation of wollen for er/sie/es?',
      a: 'er will (he wants). The infinitive is wollen, but the third person singular changes: wollen - will. This is a modal verb pattern - all German modals have irregular stems in the singular. Conjugation: ich will, du willst, er will, wir wollen, ihr wollt, sie wollen.'
    },
    {
      q: 'Translate: "Can I help you?" (formal) into German.',
      a: 'Kann ich Ihnen helfen? helfen + D means to help someone - the person helped is in the dative. Ihnen is the dative of formal Sie. Word order: modal verb (Kann) first in questions, then subject (ich), then dative object (Ihnen), then infinitive (helfen) at the end.'
    },
    {
      q: 'COMPARE: es regnet vs. es schneit - what do they share and how do they differ?',
      a: 'Both are impersonal weather constructions using es as subject. es regnet means it is raining. es schneit means it is snowing. The structure is identical - only the verb changes. Each has a corresponding noun: der Regen (rain) and der Schnee (snow).'
    },
    {
      q: 'What does womit? mean and when do you use it?',
      a: 'womit? means by what means? or how? - specifically asking about the method or instrument. It combines wo- (what/where) + mit (with). Example: Womit fahren Sie? - How are you travelling? You use it to ask which transport or tool someone is using.'
    },
    {
      q: 'TRANSFER: The verb schmecken (to taste good) takes dative. How would you say "The cake tastes good to me"?',
      a: 'Der Kuchen schmeckt mir gut. mir is the dative of ich. The cake (der Kuchen) is the subject. This follows the same pattern as Die Suppe schmeckt mir gut. The person is always dative with schmecken because they receive the taste experience.'
    },
    {
      q: 'COMPARE: in Urlaub gehen vs. im Urlaub sein - what is the grammatical difference?',
      a: 'in Urlaub gehen uses accusative (in + accusative = direction, movement toward). im Urlaub sein uses dative (in + dative = location, being somewhere). in Urlaub gehen describes leaving for holiday. im Urlaub sein describes being already on holiday.'
    },
    {
      q: 'How do you say "I will exchange the shirt" in German?',
      a: 'Ich tausche das Hemd um. Use umtauschen (separable verb). The prefix um- goes to the end. das Hemd is accusative because umtauschen + A. Full example: Das Hemd ist zu klein, ich tausche es um.'
    },
    {
      q: 'ELABORATE: Why does der Mantel add an umlaut in the plural (Mäntel) while der Koffer does not (Koffer)?',
      a: 'German plurals follow different patterns depending on the word. Some nouns add an umlaut (like Mantel, plural: Mäntel). Some do not change at all (like Koffer, plural: Koffer). There is no rule to predict which pattern a noun takes. You must learn each plural form alongside the noun itself.'
    },
    {
      q: 'COMPARE: wunderbar vs. wunderschön - when do you use each?',
      a: 'wunderbar means wonderful in a general sense - wonderful weather, a wonderful meal, a wonderful time. wunderschön means visually magnificent - a beautiful place, a stunning landscape. Use wunderbar for any quality or experience. Use wunderschön specifically when something is visually beautiful.'
    },
    {
      q: 'PREDICT: In "Ich nehme meinen Rucksack in den Urlaub mit," where does the prefix mit go and why?',
      a: 'The prefix mit goes to the very end of the sentence. This is the rule for separable verbs in main clauses: the finite verb (nehme) stays in second position, and the prefix (mit) moves to the final position.'
    },
    {
      q: 'How do you say "to return the new shoes" in German?',
      a: 'die neuen Schuhe zurückgeben - use zurückgeben (separable verb, zurück- prefix). die neuen Schuhe is accusative plural. The prefix zurück goes to the end: Ich gebe die Schuhe zurück.'
    },
    {
      q: 'How do you say "The train is delayed by 10 minutes" in German?',
      a: 'Der Zug hat eine Verspätung von 10 Minuten. die Verspätung means delay. haben + eine Verspätung = to be delayed (literally: to have a delay). von 10 Minuten = of 10 minutes. This is a set phrase you hear at German train stations.'
    },
    {
      q: 'COMPARE: der Verkäufer vs. die Verkäuferin - how does German create the feminine form?',
      a: 'German adds the suffix -in to a masculine noun to create the feminine form. der Verkäufer - die Verkäuferin. The plural of the feminine is -nen: Verkäuferinnen. This pattern applies to most occupations: der Lehrer - die Lehrerin (teacher).'
    },
    {
      q: 'TRANSFER: Apply the helfen + D pattern to: "Can I help him?" (formal situation)',
      a: 'Kann ich ihm helfen? ihm is the dative of er (he/him). In a question, the modal (Kann) comes first, then the subject (ich), then the dative object (ihm), then the infinitive (helfen). Same structure as Kann ich Ihnen helfen? - just swap Ihnen for ihm.'
    },
    {
      q: 'SELF-EXPLAIN: Why does umsteigen use sein in the past (ist umgestiegen) while umtauschen uses haben (hat umgetauscht)?',
      a: 'German verbs of movement or change of state use sein as the helping verb in the past. umsteigen describes moving from one vehicle to another - a change of location or state, so it takes sein. umtauschen describes an action done to an object with no change of location for the subject, so it takes haben.'
    },
    {
      q: 'What does am liebsten mean? How does it relate to gern and lieber?',
      a: 'am liebsten means most of all or best of all - it is the superlative of the adverb gern (gladly, like to). The progression: gern (like to) - lieber (prefer to, comparative) - am liebsten (like most of all, superlative). This is an irregular adverb series.'
    },
    {
      q: 'Context card: You are at a German clothing shop. The shirt is too small. What do you say to exchange it?',
      a: 'Das Hemd ist zu klein - kann ich es umtauschen? Use umtauschen (to exchange). das Hemd (neuter) becomes es in the pronoun. zu klein = too small. The separable prefix um goes to the end: ich tausche es um.'
    },
    {
      q: 'PREDICT: If lassen means to leave something somewhere and takes accusative, how would you say "Leave the umbrella here!" as a command?',
      a: 'Lass den Regenschirm hier! In an imperative (command) with du, use the stem: lasse - lass. den Regenschirm is accusative (masculine, accusative: der - den). hier means here.'
    },
    {
      q: 'TRANSFER: The prefix be- is inseparable (bestätigen, behalten). How does this affect the past participle?',
      a: 'Inseparable prefixes do not add ge- in the past participle. bestätigen - bestätigt (not gebestätigt). behalten - behalten (not gebehalten). Rule: if the prefix is inseparable (be-, ver-, ent-, zer-), the past participle has no ge-. Compare separable: mitbringen - mitgebracht (ge- appears between prefix and stem).'
    },
    {
      q: 'What does wem? mean and when do you use it?',
      a: 'wem? means to whom? It is the dative of wer? (who?). You use it to ask about the dative object in a sentence. Example: Wem gibst du das Buch? - To whom are you giving the book? Use it when the verb requires a dative object.'
    },
    {
      q: 'ELABORATE: Why does formal Sie always capitalize Ihnen in the dative?',
      a: 'The formal pronoun Sie and all its forms are always capitalized in German to show politeness. This applies to every case: Sie (nominative), Ihnen (dative), Ihr (possessive). The capital also separates Ihnen from lowercase ihnen (dative of sie, they), so it avoids confusion too.'
    },
    {
      q: 'PREDICT: You know that Regen (rain) + Schirm (screen) = Regenschirm. What gender would Stadtplan (city map) be? Hint: die Stadt (city) + der Plan (plan).',
      a: 'der Stadtplan - because the last component is der Plan (masculine). The compound takes the gender of the final word, no matter what the first word is. die Stadt is feminine, but it does not affect the final gender. This is a reliable rule across all German compound nouns.'
    },
    {
      q: 'What does "Sport treiben" mean and why is it not "Sport machen" or "Sport spielen"?',
      a: '"Sport treiben" = to do or play sport. "treiben" is the locked verb that German fixes to "Sport". You cannot swap it for "machen" (to make) or "spielen" (to play), even though English is flexible. Each activity has its own fixed verb in German: "Sport treiben," "Klavier spielen," "Ski fahren". You memorise each pairing as a unit.'
    },
    {
      q: 'Complete the sentence: "Er ___ gut schwimmen." (He can swim well.)',
      a: '"Er kann gut schwimmen." "können" conjugates as "kann" for er/sie/es. Place "kann" in position 2. Keep "gut" in the middle. Send the main verb "schwimmen" to the end as an infinitive. The verb bracket is closed by "schwimmen" at the end.'
    },
    {
      q: '[PREDICT] You see the headline: "Universitätsorchester sucht Sängerin." Translate it and explain each piece.',
      a: '"The university orchestra is looking for a (female) singer." "Universitätsorchester" = university orchestra (compound noun). "sucht" = is looking for (3rd person singular of "suchen"). "Sängerin" = female singer; the -in suffix marks the feminine form, plural "Sängerinnen" with -nen.'
    },
    {
      q: '[TRANSFER] You want to say "I would like to play chess on Saturday." Build the German sentence step by step.',
      a: '"Ich möchte am Samstag Schach spielen." Subject "Ich". Modal verb "möchte" (1st person singular). Time phrase "am Samstag" (on Saturday). Object "Schach" (chess). Main verb "spielen" at the end because the modal pushes it there.'
    }
  ],

  reference: {
    category: 'Quick Reference',
    title: 'Freizeit, Wetter und Kleidung',
    sections: [
      <>
        <h2>Weather Vocabulary</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Article</th>
              <th>English</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wetter</td>
              <td>das</td>
              <td>weather</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Regen</td>
              <td>der</td>
              <td>rain</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Schnee</td>
              <td>der</td>
              <td>snow</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Sonne</td>
              <td>die</td>
              <td>sun</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Nebel</td>
              <td>der</td>
              <td>fog</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Sturm</td>
              <td>der</td>
              <td>storm</td>
              <td>Stürme</td>
            </tr>
            <tr>
              <td>Wind</td>
              <td>der</td>
              <td>wind</td>
              <td>-e</td>
            </tr>
            <tr>
              <td>Wolke</td>
              <td>die</td>
              <td>cloud</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Himmel</td>
              <td>der</td>
              <td>sky</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Kälte</td>
              <td>die</td>
              <td>cold</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Hitze</td>
              <td>die</td>
              <td>heat</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Wärme</td>
              <td>die</td>
              <td>warmth</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Temperatur</td>
              <td>die</td>
              <td>temperature</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Tageshöchsttemperatur</td>
              <td>die</td>
              <td>highest daily temperature</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Jahreszeit</td>
              <td>die</td>
              <td>season</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Herbst</td>
              <td>der</td>
              <td>autumn</td>
              <td>-e</td>
            </tr>
            <tr>
              <td>Sommer</td>
              <td>der</td>
              <td>summer</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Winter</td>
              <td>der</td>
              <td>winter</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h2>Weather Verbs and Adjectives</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>es regnet [hat geregnet]</td>
              <td>it is raining</td>
              <td>impersonal</td>
            </tr>
            <tr>
              <td>es schneit [hat geschneit]</td>
              <td>it is snowing</td>
              <td>impersonal</td>
            </tr>
            <tr>
              <td>scheinen [hat geschienen]</td>
              <td>to shine (sun)</td>
              <td>Die Sonne scheint.</td>
            </tr>
            <tr>
              <td>wehen [hat geweht]</td>
              <td>to blow (wind)</td>
              <td>Der Wind weht.</td>
            </tr>
            <tr>
              <td>sonnig</td>
              <td>sunny</td>
              <td>adjective</td>
            </tr>
            <tr>
              <td>neblig</td>
              <td>foggy</td>
              <td>adjective</td>
            </tr>
            <tr>
              <td>stürmisch</td>
              <td>stormy</td>
              <td>adjective</td>
            </tr>
            <tr>
              <td>windig</td>
              <td>windy</td>
              <td>adjective</td>
            </tr>
            <tr>
              <td>stark</td>
              <td>strong</td>
              <td>intensity modifier</td>
            </tr>
            <tr>
              <td>heftig</td>
              <td>heavy, violent</td>
              <td>stronger than stark</td>
            </tr>
            <tr>
              <td>leicht</td>
              <td>light, mild</td>
              <td>weak intensity</td>
            </tr>
            <tr>
              <td>teilweise bewölkt</td>
              <td>partly cloudy</td>
              <td>weather report phrase</td>
            </tr>
            <tr>
              <td>leicht bewölkt</td>
              <td>somewhat cloudy</td>
              <td>set phrase</td>
            </tr>
          </tbody>
        </table>

        <h2>Clothing Items</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Article</th>
              <th>English</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kleidung</td>
              <td>die</td>
              <td>clothing (general)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Kleidungsstück</td>
              <td>das</td>
              <td>item of clothing</td>
              <td>-e</td>
            </tr>
            <tr>
              <td>Kleid</td>
              <td>das</td>
              <td>dress</td>
              <td>-er</td>
            </tr>
            <tr>
              <td>Hose</td>
              <td>die</td>
              <td>trousers</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Hemd</td>
              <td>das</td>
              <td>shirt</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Jacke</td>
              <td>die</td>
              <td>jacket</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Regenjacke</td>
              <td>die</td>
              <td>rain jacket</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Jeans</td>
              <td>die</td>
              <td>jeans</td>
              <td>Pl. only</td>
            </tr>
            <tr>
              <td>Mantel</td>
              <td>der</td>
              <td>coat</td>
              <td>Mäntel</td>
            </tr>
            <tr>
              <td>Nachthemd</td>
              <td>das</td>
              <td>nightdress</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Pullover</td>
              <td>der</td>
              <td>pullover</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Rock</td>
              <td>der</td>
              <td>skirt</td>
              <td>Röcke</td>
            </tr>
            <tr>
              <td>Schlafanzug</td>
              <td>der</td>
              <td>pyjamas</td>
              <td>Schlafanzüge</td>
            </tr>
            <tr>
              <td>Schuh</td>
              <td>der</td>
              <td>shoe</td>
              <td>-e</td>
            </tr>
            <tr>
              <td>Socke</td>
              <td>die</td>
              <td>sock</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Strumpfhose</td>
              <td>die</td>
              <td>stocking/tights</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>T-Shirt</td>
              <td>das</td>
              <td>T-shirt</td>
              <td>-s</td>
            </tr>
            <tr>
              <td>Turnschuh</td>
              <td>der</td>
              <td>sport shoe</td>
              <td>-e</td>
            </tr>
          </tbody>
        </table>

        <h2>Accessories</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Article</th>
              <th>English</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Regenschirm</td>
              <td>der</td>
              <td>umbrella</td>
              <td>-e</td>
            </tr>
            <tr>
              <td>Handtasche</td>
              <td>die</td>
              <td>handbag</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Sonnenbrille</td>
              <td>die</td>
              <td>sunglasses</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Sonnencreme</td>
              <td>die</td>
              <td>sun cream</td>
              <td>-s</td>
            </tr>
            <tr>
              <td>Paar</td>
              <td>das</td>
              <td>pair</td>
              <td>-e</td>
            </tr>
          </tbody>
        </table>

        <h2>Clothing Verbs</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Verb</th>
              <th>Case</th>
              <th>English</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>tragen [trägt, hat getragen]</td>
              <td>+A</td>
              <td>to wear</td>
              <td>ein grünes Hemd tragen</td>
            </tr>
            <tr>
              <td>passen [hat gepasst]</td>
              <td>+D</td>
              <td>to fit (size)</td>
              <td>Das Kleid passt mir nicht.</td>
            </tr>
            <tr>
              <td>stehen [hat gestanden]</td>
              <td>+D</td>
              <td>to suit (style)</td>
              <td>Diese Brille steht dir nicht.</td>
            </tr>
            <tr>
              <td>umtauschen [tauscht um]</td>
              <td>+A</td>
              <td>to exchange</td>
              <td>Ich tausche das Hemd um.</td>
            </tr>
            <tr>
              <td>zurückgeben [gibt zurück]</td>
              <td>+A</td>
              <td>to return</td>
              <td>die Schuhe zurückgeben</td>
            </tr>
          </tbody>
        </table>

        <h2>Dative Personal Pronouns</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Nominative</th>
              <th>Dative</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>mir</td>
              <td>me</td>
            </tr>
            <tr>
              <td>du</td>
              <td>dir</td>
              <td>you (informal)</td>
            </tr>
            <tr>
              <td>er</td>
              <td>ihm</td>
              <td>him</td>
            </tr>
            <tr>
              <td>sie (sg)</td>
              <td>ihr</td>
              <td>her</td>
            </tr>
            <tr>
              <td>es</td>
              <td>ihm</td>
              <td>it</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>uns</td>
              <td>us</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>euch</td>
              <td>you all</td>
            </tr>
            <tr>
              <td>sie (pl)</td>
              <td>ihnen</td>
              <td>them</td>
            </tr>
            <tr>
              <td>Sie (formal)</td>
              <td>Ihnen</td>
              <td>you (formal)</td>
            </tr>
            <tr>
              <td>wer?</td>
              <td>wem?</td>
              <td>who/whom?</td>
            </tr>
          </tbody>
        </table>

        <h2>Key Dative Verbs</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Verb</th>
              <th>English</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>helfen + D</td>
              <td>to help sb</td>
              <td>Kann ich Ihnen helfen?</td>
            </tr>
            <tr>
              <td>passen + D</td>
              <td>to fit sb</td>
              <td>Das Kleid passt mir nicht.</td>
            </tr>
            <tr>
              <td>stehen + D</td>
              <td>to suit sb</td>
              <td>Diese Brille steht dir nicht.</td>
            </tr>
            <tr>
              <td>schmecken + D</td>
              <td>to taste good to sb</td>
              <td>Die Suppe schmeckt mir gut.</td>
            </tr>
          </tbody>
        </table>

        <h2>Key Separable Verbs</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Verb</th>
              <th>Prefix</th>
              <th>English</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mitbringen</td>
              <td>mit-</td>
              <td>to bring along</td>
              <td>Ich bringe Geschenke mit.</td>
            </tr>
            <tr>
              <td>mitnehmen</td>
              <td>mit-</td>
              <td>to take along</td>
              <td>Ich nehme meinen Koffer mit.</td>
            </tr>
            <tr>
              <td>umsteigen</td>
              <td>um-</td>
              <td>to change transport</td>
              <td>In München umsteigen.</td>
            </tr>
            <tr>
              <td>umtauschen</td>
              <td>um-</td>
              <td>to exchange goods</td>
              <td>Ich tausche das Hemd um.</td>
            </tr>
            <tr>
              <td>zurückgeben</td>
              <td>zurück-</td>
              <td>to return goods</td>
              <td>Ich gebe die Schuhe zurück.</td>
            </tr>
            <tr>
              <td>hingehen</td>
              <td>hin-</td>
              <td>to go there</td>
              <td>Wir gehen hin.</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Separable vs. Inseparable Prefixes</span>
          <p>
            <strong>Separable (stressed, split off):</strong> hin-, mit-, um-, zurück-, weg-, ab-,
            an-, auf-
          </p>
          <p>
            <strong>Inseparable (unstressed, stay attached):</strong> be-, ver-, ent-, zer-, ge-,
            er-
          </p>
        </div>

        <h2>Travel Vocabulary</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Article</th>
              <th>English</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Urlaub</td>
              <td>der</td>
              <td>holiday</td>
              <td>-e</td>
            </tr>
            <tr>
              <td>Urlaubserlebnis</td>
              <td>das</td>
              <td>holiday experience</td>
              <td>-se</td>
            </tr>
            <tr>
              <td>Reise</td>
              <td>die</td>
              <td>journey, trip</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Reisevorbereitung</td>
              <td>die</td>
              <td>journey preparations</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Reiseziel</td>
              <td>das</td>
              <td>destination</td>
              <td>-e</td>
            </tr>
            <tr>
              <td>Reisetasche</td>
              <td>die</td>
              <td>travelling bag</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Koffer</td>
              <td>der</td>
              <td>suitcase</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Rucksack</td>
              <td>der</td>
              <td>backpack</td>
              <td>Rucksäcke</td>
            </tr>
            <tr>
              <td>Rückfahrkarte</td>
              <td>die</td>
              <td>return ticket</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Rückfahrt</td>
              <td>die</td>
              <td>return journey</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Hin- und Rückfahrt</td>
              <td>die</td>
              <td>round trip</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Haltestelle</td>
              <td>die</td>
              <td>bus/tram stop</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Verspätung</td>
              <td>die</td>
              <td>delay</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Verkehrsmittel</td>
              <td>das</td>
              <td>means of transport</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Strand</td>
              <td>der</td>
              <td>beach</td>
              <td>Strände</td>
            </tr>
            <tr>
              <td>Meer</td>
              <td>das</td>
              <td>sea</td>
              <td>-e</td>
            </tr>
            <tr>
              <td>Nordsee</td>
              <td>die</td>
              <td>North Sea</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Ostsee</td>
              <td>die</td>
              <td>Baltic Sea</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Insel</td>
              <td>die</td>
              <td>island</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Stau</td>
              <td>der</td>
              <td>traffic jam</td>
              <td>-s</td>
            </tr>
            <tr>
              <td>Passagier</td>
              <td>der</td>
              <td>passenger</td>
              <td>-e</td>
            </tr>
            <tr>
              <td>Pass</td>
              <td>der</td>
              <td>passport</td>
              <td>Pässe</td>
            </tr>
            <tr>
              <td>Passkontrolle</td>
              <td>die</td>
              <td>passport control</td>
              <td>-n</td>
            </tr>
            <tr>
              <td>Landung</td>
              <td>die</td>
              <td>landing</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Übernachtung</td>
              <td>die</td>
              <td>overnight stay</td>
              <td>-en</td>
            </tr>
            <tr>
              <td>Halbpension</td>
              <td>die</td>
              <td>half board</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Wellnesshotel</td>
              <td>das</td>
              <td>wellness hotel</td>
              <td>-s</td>
            </tr>
            <tr>
              <td>Tourist</td>
              <td>der</td>
              <td>tourist</td>
              <td>-en</td>
            </tr>
          </tbody>
        </table>

        <h2>Survey and Opinion Vocabulary</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ausländisch</td>
              <td>foreign (neutral)</td>
              <td>about things/people</td>
            </tr>
            <tr>
              <td>fremd</td>
              <td>strange, foreign</td>
              <td>emphasises unfamiliarity</td>
            </tr>
            <tr>
              <td>beruflich</td>
              <td>professional</td>
              <td>work-related</td>
            </tr>
            <tr>
              <td>familiär</td>
              <td>family-related</td>
              <td>family context</td>
            </tr>
            <tr>
              <td>finanziell</td>
              <td>financial</td>
              <td>money context</td>
            </tr>
            <tr>
              <td>gesundheitlich</td>
              <td>health-related</td>
              <td>health context</td>
            </tr>
            <tr>
              <td>gleichzeitig</td>
              <td>at the same time</td>
              <td>adverb</td>
            </tr>
            <tr>
              <td>deutlich</td>
              <td>clear, clearly</td>
              <td>adjective/adverb</td>
            </tr>
            <tr>
              <td>höflich</td>
              <td>polite</td>
              <td>adjective</td>
            </tr>
            <tr>
              <td>die Qualität, -en</td>
              <td>quality</td>
              <td>achten auf die Qualität</td>
            </tr>
            <tr>
              <td>die Sauberkeit</td>
              <td>cleanliness</td>
              <td>no plural</td>
            </tr>
            <tr>
              <td>die Ruhe</td>
              <td>calm, quiet</td>
              <td>no plural</td>
            </tr>
            <tr>
              <td>die Kriminalität</td>
              <td>crime</td>
              <td>no plural</td>
            </tr>
            <tr>
              <td>das Resultat, -e</td>
              <td>result</td>
              <td>neuter</td>
            </tr>
            <tr>
              <td>das Interesse, -n</td>
              <td>interest</td>
              <td>Interesse für etw. haben</td>
            </tr>
            <tr>
              <td>der Bundesbürger, -</td>
              <td>German citizen</td>
              <td>masculine</td>
            </tr>
            <tr>
              <td>die Diplomarbeit, -en</td>
              <td>diploma paper</td>
              <td>academic</td>
            </tr>
            <tr>
              <td>die Doktorarbeit, -en</td>
              <td>PhD thesis</td>
              <td>academic</td>
            </tr>
            <tr>
              <td>der Verkäufer, - / die Verkäuferin, -nen</td>
              <td>seller (m/f)</td>
              <td>gendered pair</td>
            </tr>
            <tr>
              <td>befragt-</td>
              <td>interviewed</td>
              <td>die befragten Menschen</td>
            </tr>
          </tbody>
        </table>

        <h2>Hobbies and Sports</h2>
        <p>Each activity pairs with one fixed verb you must learn as a set.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Verb phrase</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sport treiben</td>
              <td>to do or play sport</td>
            </tr>
            <tr>
              <td>Klavier spielen</td>
              <td>to play the piano</td>
            </tr>
            <tr>
              <td>Karten spielen</td>
              <td>to play cards</td>
            </tr>
            <tr>
              <td>Ski fahren</td>
              <td>to ski</td>
            </tr>
            <tr>
              <td>Salsa tanzen</td>
              <td>to dance salsa</td>
            </tr>
            <tr>
              <td>im Internet surfen</td>
              <td>to surf the internet</td>
            </tr>
            <tr>
              <td>Auto fahren</td>
              <td>to drive a car</td>
            </tr>
            <tr>
              <td>schwimmen</td>
              <td>to swim</td>
            </tr>
            <tr>
              <td>wandern</td>
              <td>to hike</td>
            </tr>
            <tr>
              <td>reisen</td>
              <td>to travel</td>
            </tr>
            <tr>
              <td>kochen</td>
              <td>to cook</td>
            </tr>
            <tr>
              <td>tanzen</td>
              <td>to dance</td>
            </tr>
          </tbody>
        </table>

        <h2>Music and Arts</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Article</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Instrument</td>
              <td>das</td>
              <td>instrument</td>
            </tr>
            <tr>
              <td>Klavier</td>
              <td>das</td>
              <td>piano</td>
            </tr>
            <tr>
              <td>Saxofon</td>
              <td>das</td>
              <td>saxophone</td>
            </tr>
            <tr>
              <td>Violine</td>
              <td>die</td>
              <td>violin</td>
            </tr>
            <tr>
              <td>Rockmusik</td>
              <td>die</td>
              <td>rock music</td>
            </tr>
            <tr>
              <td>Hip-Hop</td>
              <td>der</td>
              <td>hip-hop</td>
            </tr>
            <tr>
              <td>klassische Musik</td>
              <td>-</td>
              <td>classical music</td>
            </tr>
            <tr>
              <td>Walzer</td>
              <td>der</td>
              <td>waltz</td>
            </tr>
            <tr>
              <td>Tango</td>
              <td>der</td>
              <td>tango</td>
            </tr>
            <tr>
              <td>Salsa</td>
              <td>die</td>
              <td>salsa</td>
            </tr>
            <tr>
              <td>Orchester</td>
              <td>das</td>
              <td>orchestra</td>
            </tr>
            <tr>
              <td>Universitätsorchester</td>
              <td>das</td>
              <td>university orchestra</td>
            </tr>
            <tr>
              <td>Sängerin</td>
              <td>die</td>
              <td>singer (female)</td>
            </tr>
          </tbody>
        </table>

        <h2>Grammar Summary</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Rule</th>
              <th>Structure</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Impersonal weather</td>
              <td>es + verb</td>
              <td>Es regnet. Es schneit.</td>
            </tr>
            <tr>
              <td>Dative verbs</td>
              <td>verb + D pronoun</td>
              <td>Das Kleid passt mir.</td>
            </tr>
            <tr>
              <td>Separable verbs (main clause)</td>
              <td>verb + ... + prefix (end)</td>
              <td>Ich bringe Geschenke mit.</td>
            </tr>
            <tr>
              <td>überhaupt nicht</td>
              <td>verb + überhaupt nicht</td>
              <td>Den Winter mag ich überhaupt nicht.</td>
            </tr>
            <tr>
              <td>am liebsten</td>
              <td>am liebsten + verb</td>
              <td>Ich spiele am liebsten Tennis.</td>
            </tr>
            <tr>
              <td>Compound gender</td>
              <td>last word = gender</td>
              <td>die Regenjacke (die Jacke)</td>
            </tr>
            <tr>
              <td>Modal wollen</td>
              <td>ich will, er will</td>
              <td>Er will Urlaub machen.</td>
            </tr>
            <tr>
              <td>womit?</td>
              <td>womit + question</td>
              <td>Womit fahren Sie?</td>
            </tr>
            <tr>
              <td>wem?</td>
              <td>wem + dative verb</td>
              <td>Wem gibst du das Buch?</td>
            </tr>
            <tr>
              <td>Activity + fixed verb</td>
              <td>noun + locked verb</td>
              <td>Sport treiben, Ski fahren, Klavier spielen</td>
            </tr>
            <tr>
              <td>Modal + infinitive</td>
              <td>modal (pos. 2) + ... + infinitive (end)</td>
              <td>Er kann gut Klavier spielen.</td>
            </tr>
            <tr>
              <td>-in suffix (feminine)</td>
              <td>noun + -in / plural -nen</td>
              <td>Sänger - Sängerin - Sängerinnen</td>
            </tr>
          </tbody>
        </table>
      </>
    ]
  },
  customCss: null
}

export default function FreeTimeWeatherAndClothing() {
  return <LearningTemplate config={config} />
}
