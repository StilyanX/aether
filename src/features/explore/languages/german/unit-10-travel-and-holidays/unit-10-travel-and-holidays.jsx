import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'tvh',
  source: 'Begegnungen A1+ — Buscha/Szita',
  documentTitle: 'Travel and Holidays: AETHER',
  learning: {
    category: 'Unit 9',
    title: 'Reisen und Urlaub',
    subtitle: 'Travel destinations, transport, seasons, holiday experiences, and the natural world',
    sections: [
      <>
        <div className="lrn-header">
          <h1>Travel and Holidays</h1>
          <p>
            The grammar in this unit: Perfekt (spoken past tense), three ways to give a reason
            (weil, denn, deshalb), commands (Imperativ), polite requests (möchten), and the wo vs.
            wohin distinction.
          </p>
        </div>
      </>,

      <>
        <div id="lrn-section-0">
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You are calling a friend in Berlin. It is sunny where you are but rainy there. What
              German word do you think "rain" is?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                der Regen (rain). The verb phrase is <strong>Es regnet.</strong> (It is raining.)
                The weather pattern is always: es + verb. "Regenwetter" means rainy weather.
              </p>
            </details>
          </div>

          <h2>Kapitel 6: Reisen (Travel)</h2>

          <h3>Weather (das Wetter)</h3>
          <p>
            German names weather with a simple pattern: a noun for the thing (die Sonne, der Regen)
            and an adjective for the condition (sonnig, windig). The verb phrases follow a fixed
            structure: es + verb.
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
                <th>Verb phrase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>die Sonne</td>
                <td>sun</td>
                <td>Die Sonne scheint. (The sun is shining.)</td>
              </tr>
              <tr>
                <td>der Regen</td>
                <td>rain</td>
                <td>Es regnet. (It is raining.)</td>
              </tr>
              <tr>
                <td>der Schnee</td>
                <td>snow</td>
                <td>Es schneit. (It is snowing.)</td>
              </tr>
              <tr>
                <td>der Wind</td>
                <td>wind</td>
                <td>Es ist windig. (It is windy.)</td>
              </tr>
              <tr>
                <td>der Nebel</td>
                <td>fog</td>
                <td>Es ist neblig. (It is foggy.)</td>
              </tr>
              <tr>
                <td>das Gewitter</td>
                <td>thunderstorm</td>
                <td>Es gibt Gewitter. (There is a thunderstorm.)</td>
              </tr>
              <tr>
                <td>der Sturm</td>
                <td>storm</td>
                <td>Es ist stürmisch. (It is stormy.)</td>
              </tr>
              <tr>
                <td>die Wolke</td>
                <td>cloud</td>
                <td>Es ist bewölkt. (It is cloudy.)</td>
              </tr>
              <tr>
                <td>das Wetter</td>
                <td>weather</td>
                <td>Wie ist das Wetter heute? (What is the weather like today?)</td>
              </tr>
              <tr>
                <td>die Temperatur</td>
                <td>temperature</td>
                <td>Wie viel Grad hat es? (How many degrees is it?)</td>
              </tr>
              <tr>
                <td>Grad Celsius</td>
                <td>degrees Celsius</td>
                <td>Es ist 20 Grad. (It is 20 degrees.)</td>
              </tr>
            </tbody>
          </table>
          <p>Temperature adjectives: warm (warm), heiß (hot), kalt (cold), kühl (cool).</p>

          <h3>Seasons and Months (Jahreszeiten und Monate)</h3>
          <p>
            The four seasons are all masculine: der Frühling (spring), der Sommer (summer), der
            Herbst (autumn), der Winter (winter).
          </p>
          <p>
            The twelve months: Januar, Februar, März, April, Mai, Juni, Juli, August, September,
            Oktober, November, Dezember. All months are masculine: der Januar, der Februar, etc.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to say "I am going to the mountains." What case do you think follows "in"?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Akkusativ. "In die Berge" uses Akkusativ because you are moving toward a place
                (Wohin?). If you were already there: "in den Bergen" (Dativ).
              </p>
            </details>
          </div>

          <h3>Travel Destinations (Reiseziele)</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>das Gebirge</td>
                <td>mountains (range)</td>
              </tr>
              <tr>
                <td>das Land</td>
                <td>countryside</td>
              </tr>
              <tr>
                <td>das Ausland</td>
                <td>abroad</td>
              </tr>
              <tr>
                <td>der Urlaub</td>
                <td>holiday/vacation</td>
              </tr>
              <tr>
                <td>im Urlaub</td>
                <td>on holiday</td>
              </tr>
              <tr>
                <td>die Reise</td>
                <td>journey/trip</td>
              </tr>
              <tr>
                <td>reisen</td>
                <td>to travel</td>
              </tr>
              <tr>
                <td>der Tourist / die Touristin</td>
                <td>tourist</td>
              </tr>
              <tr>
                <td>das Hotel</td>
                <td>hotel</td>
              </tr>
              <tr>
                <td>die Unterkunft</td>
                <td>accommodation</td>
              </tr>
              <tr>
                <td>zelten</td>
                <td>to camp</td>
              </tr>
              <tr>
                <td>das Zelt</td>
                <td>tent</td>
              </tr>
              <tr>
                <td>der Campingplatz</td>
                <td>campsite</td>
              </tr>
            </tbody>
          </table>
          <p>
            Natural landscapes as travel destinations (sea, beach, mountains, lake, river, island,
            city) appear with full detail in the Nature and Landscape section below.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>You want to buy a jacket. How do you think you ask for a size in German?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>Ich suche eine Jacke in Größe M.</strong> The noun die Größe means size. You
                follow "in" with the size directly without an article.
              </p>
            </details>
          </div>

          <h3>Clothing (Kleidung)</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>das Hemd</td>
                <td>shirt</td>
              </tr>
              <tr>
                <td>die Bluse</td>
                <td>blouse</td>
              </tr>
              <tr>
                <td>die Hose</td>
                <td>trousers</td>
              </tr>
              <tr>
                <td>der Rock</td>
                <td>skirt</td>
              </tr>
              <tr>
                <td>das Kleid</td>
                <td>dress</td>
              </tr>
              <tr>
                <td>der Anzug</td>
                <td>suit</td>
              </tr>
              <tr>
                <td>die Jacke</td>
                <td>jacket</td>
              </tr>
              <tr>
                <td>der Mantel</td>
                <td>coat</td>
              </tr>
              <tr>
                <td>der Pullover</td>
                <td>pullover/sweater</td>
              </tr>
              <tr>
                <td>die Socken (pl.)</td>
                <td>socks</td>
              </tr>
              <tr>
                <td>der Schuh / die Schuhe</td>
                <td>shoe / shoes</td>
              </tr>
              <tr>
                <td>der Stiefel</td>
                <td>boot</td>
              </tr>
              <tr>
                <td>die Mütze</td>
                <td>hat/cap (knitted)</td>
              </tr>
              <tr>
                <td>der Schal</td>
                <td>scarf</td>
              </tr>
              <tr>
                <td>die Handschuhe (pl.)</td>
                <td>gloves</td>
              </tr>
              <tr>
                <td>die Größe</td>
                <td>size</td>
              </tr>
              <tr>
                <td>die Farbe</td>
                <td>color</td>
              </tr>
            </tbody>
          </table>
          <p>
            Key clothing verbs: anziehen (to put on), ausziehen (to take off), tragen (to wear),
            kaufen (to buy), kosten (to cost).
          </p>

          <h3>Colors (Farben)</h3>
          <p>
            rot (red), blau (blue), grün (green), gelb (yellow), orange (orange), schwarz (black),
            weiß (white), grau (gray), braun (brown), lila / violett (purple/violet), rosa (pink).
          </p>
          <p>
            Add hell- (light) or dunkel- (dark) as a prefix: hellblau (light blue), dunkelrot (dark
            red).
          </p>

          <h3>Transport (Verkehrsmittel)</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>das Flugzeug</td>
                <td>airplane</td>
              </tr>
              <tr>
                <td>fliegen</td>
                <td>to fly</td>
              </tr>
              <tr>
                <td>der Flug</td>
                <td>flight</td>
              </tr>
              <tr>
                <td>das Schiff</td>
                <td>ship</td>
              </tr>
              <tr>
                <td>der Zug</td>
                <td>train</td>
              </tr>
              <tr>
                <td>fahren</td>
                <td>to travel/drive</td>
              </tr>
              <tr>
                <td>der Bus</td>
                <td>bus</td>
              </tr>
              <tr>
                <td>das Auto</td>
                <td>car</td>
              </tr>
              <tr>
                <td>das Fahrrad</td>
                <td>bicycle</td>
              </tr>
              <tr>
                <td>radfahren</td>
                <td>to cycle</td>
              </tr>
              <tr>
                <td>die U-Bahn</td>
                <td>subway</td>
              </tr>
              <tr>
                <td>die Straßenbahn</td>
                <td>tram</td>
              </tr>
              <tr>
                <td>zu Fuß gehen</td>
                <td>to go on foot</td>
              </tr>
              <tr>
                <td>die Fahrkarte</td>
                <td>ticket</td>
              </tr>
              <tr>
                <td>einfach</td>
                <td>single (ticket)</td>
              </tr>
              <tr>
                <td>hin und zurück</td>
                <td>return (ticket)</td>
              </tr>
              <tr>
                <td>der Bahnhof</td>
                <td>train station</td>
              </tr>
              <tr>
                <td>der Flughafen</td>
                <td>airport</td>
              </tr>
              <tr>
                <td>der Hafen</td>
                <td>harbor/port</td>
              </tr>
              <tr>
                <td>abfahren</td>
                <td>to depart</td>
              </tr>
              <tr>
                <td>ankommen</td>
                <td>to arrive</td>
              </tr>
              <tr>
                <td>die Abfahrt</td>
                <td>departure</td>
              </tr>
              <tr>
                <td>die Ankunft</td>
                <td>arrival</td>
              </tr>
              <tr>
                <td>das Gleis</td>
                <td>track/platform</td>
              </tr>
              <tr>
                <td>umsteigen</td>
                <td>to change (transport)</td>
              </tr>
              <tr>
                <td>reservieren</td>
                <td>to reserve</td>
              </tr>
              <tr>
                <td>buchen</td>
                <td>to book</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">einfach</span>
              <p>A single ticket (one direction only).</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">hin und zurück</span>
              <p>A return ticket (there and back).</p>
            </div>
          </div>

          <h3>Holiday Experiences (Urlaubserlebnisse)</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>besuchen</td>
                <td>to visit</td>
              </tr>
              <tr>
                <td>besichtigen</td>
                <td>to sightsee</td>
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
                <td>Ski fahren</td>
                <td>to ski</td>
              </tr>
              <tr>
                <td>spazieren gehen</td>
                <td>to go for a walk</td>
              </tr>
              <tr>
                <td>das Erlebnis</td>
                <td>experience</td>
              </tr>
              <tr>
                <td>erleben</td>
                <td>to experience</td>
              </tr>
              <tr>
                <td>schön</td>
                <td>beautiful/nice</td>
              </tr>
              <tr>
                <td>toll</td>
                <td>great</td>
              </tr>
              <tr>
                <td>interessant</td>
                <td>interesting</td>
              </tr>
              <tr>
                <td>langweilig</td>
                <td>boring</td>
              </tr>
              <tr>
                <td>anstrengend</td>
                <td>exhausting</td>
              </tr>
              <tr>
                <td>entspannend</td>
                <td>relaxing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>,

      <>
        <div id="lrn-section-1">
          <h2>Kapitel 6 Grammar</h2>

          <h3>Giving Reasons: weil, denn, deshalb</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to say "I stay home because it is raining." The German word for "because" is
              weil. Where do you think the verb goes in the "because" part?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The verb goes to the END of the clause. weil is a subordinating conjunction. It
                pushes the verb to the final position: <strong>..., weil es regnet.</strong>
              </p>
            </details>
          </div>

          <p>
            German has three ways to give a reason. They mean similar things but follow different
            word order rules.
          </p>

          <h3>weil (because): subordinating conjunction</h3>
          <p>weil pushes the verb to the end of the clause.</p>
          <ul className="lrn-list">
            <li>
              <strong>Ich fahre in die Berge, weil ich gern wandere.</strong> (I go to the mountains
              because I like hiking.)
            </li>
            <li>
              <strong>Ich bleibe zu Hause, weil es regnet.</strong> (I stay home because it is
              raining.)
            </li>
          </ul>

          <h3>denn (because): coordinating conjunction</h3>
          <p>denn keeps normal word order. The verb stays in position 2.</p>
          <ul className="lrn-list">
            <li>
              <strong>Ich fahre in die Berge, denn ich wandere gern.</strong> (I go to the
              mountains, because I like hiking.)
            </li>
            <li>
              <strong>Ich bleibe zu Hause, denn es regnet.</strong> (I stay home, because it is
              raining.)
            </li>
          </ul>

          <h3>deshalb (therefore/that's why): adverb</h3>
          <p>
            deshalb starts the second sentence. Because it fills position 1, the verb moves before
            the subject.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Es regnet. Deshalb bleibe ich zu Hause.</strong> (It is raining. That's why I
              stay home.)
            </li>
          </ul>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Conjunction</th>
                <th>Structure</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>weil</td>
                <td>..., weil + Subject + ... + Verb(end)</td>
                <td>..., weil es regnet.</td>
              </tr>
              <tr>
                <td>denn</td>
                <td>..., denn + Subject + Verb(2) + ...</td>
                <td>..., denn es regnet.</td>
              </tr>
              <tr>
                <td>deshalb</td>
                <td>Deshalb + Verb + Subject + ...</td>
                <td>Deshalb bleibe ich...</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does deshalb trigger verb-subject inversion?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                German main clauses always have the verb in position 2. deshalb fills position 1, so
                the verb must come next, pushing the subject to position 3. German counts sentence
                positions, not words. Position 1 is always one unit. Position 2 always holds the
                verb. When deshalb jumps to position 1, the verb immediately follows in position 2
                and the subject moves to position 3.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">ELABORATE</span>
            <p>
              Why does German bother having three words for "because" instead of one? Think about
              how each one shapes the sentence flow.
            </p>
            <details className="lrn-elaborate-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each word marks the speaker's focus. weil ties the reason tightly to the main idea
                inside one sentence. denn pauses, then adds a fact as a separate clause. deshalb
                flips the order: cause first, then result, so the result lands with extra weight.
                Native speakers pick by rhythm and emphasis, not by meaning.
              </p>
            </details>
          </div>

          <div className="lrn-transfer">
            <span className="lrn-transfer-label">TRANSFER</span>
            <p>
              You learn that English uses "so" to start a result clause: "It rained, so I stayed
              home." How would you build this in German using deshalb? What changes about the verb
              position compared to English?
            </p>
            <details className="lrn-transfer-reveal">
              <summary>Expert explanation</summary>
              <p>
                Es regnet. Deshalb bleibe ich zu Hause. English keeps subject-verb order ("I
                stayed"). German inverts to verb-subject ("bleibe ich") because deshalb takes
                position 1. The meaning is the same as "so", but German shows the cause-effect link
                with word order, not with a connector word inside one clause.
              </p>
            </details>
          </div>

          <div className="lrn-transfer">
            <span className="lrn-transfer-label">TRANSFER</span>
            <p>
              Apply the weil rule to a new context. Build this sentence in German: "I cannot come,
              because I have a meeting." What goes to the end of the clause?
            </p>
            <details className="lrn-transfer-reveal">
              <summary>Expert explanation</summary>
              <p>
                Ich kann nicht kommen, weil ich ein Meeting habe. The verb habe goes to the very end
                of the weil-clause. Even though "haben" is a normal main verb, the weil rule still
                applies: every conjugated verb in a weil-clause moves to the end.
              </p>
            </details>
          </div>

          <h3>Wo vs. Wohin (Location vs. Direction)</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You ask a friend "Where are you?" versus "Where are you going?" Do you think German
              uses one word or two different words for these?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Two different words: <strong>Wo?</strong> for static position,{' '}
                <strong>Wohin?</strong> for movement toward a destination.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Wo? (static, Dativ)</span>
              <p>Asks where someone or something already is.</p>
              <p>
                <strong>Wo bist du?</strong> (Where are you?)
              </p>
              <p>
                <strong>Wo ist der Bahnhof?</strong> (Where is the train station?)
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Wohin? (movement, Akkusativ)</span>
              <p>Asks about direction or destination.</p>
              <p>
                <strong>Wohin fährst du?</strong> (Where are you going to?)
              </p>
              <p>
                <strong>Wohin fährst du im Urlaub?</strong> (Where are you going on holiday?)
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does German use two different question words for "where"?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                German grammar connects the question word to the case. Wo signals Dativ (position).
                Wohin signals Akkusativ (direction). The question word is a built-in reminder of
                which case to use with two-way prepositions.
              </p>
            </details>
          </div>

          <h3>Modal Verb: möchten (would like to)</h3>
          <p>
            möchten expresses polite desire. Like all modal verbs, it sends the main verb to the end
            of the sentence: <strong>Ich möchte nach Berlin fahren.</strong> It is more polite than
            wollen (to want to): use möchten for requests and offers, wollen for direct intentions.
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Person</th>
                <th>Form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ich</td>
                <td>möchte</td>
              </tr>
              <tr>
                <td>du</td>
                <td>möchtest</td>
              </tr>
              <tr>
                <td>er/sie/es</td>
                <td>möchte</td>
              </tr>
              <tr>
                <td>wir</td>
                <td>möchten</td>
              </tr>
              <tr>
                <td>ihr</td>
                <td>möchtet</td>
              </tr>
              <tr>
                <td>sie/Sie</td>
                <td>möchten</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do ich and er/sie/es share the same form "möchte"?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Modal verbs in German have no ending on ich and er/sie/es. This is the standard
                modal pattern shared by all modals: müssen, können, dürfen, wollen, sollen, möchten.
              </p>
            </details>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Ich möchte an den Strand fahren.</strong> (I would like to go to the beach.)
            </li>
            <li>
              <strong>Er möchte mit dem Zug reisen.</strong> (He would like to travel by train.)
            </li>
          </ul>

          <h3>Imperativ (Commands and Instructions)</h3>
          <p>German has three imperative forms depending on who you are speaking to.</p>
          <ul className="lrn-list">
            <li>
              <strong>du-form:</strong> take the du-Präsens, remove -st and the pronoun. kommen → du
              kommst → <strong>Komm!</strong> Verbs with an e→i stem change keep it: nehmen → du
              nimmst → <strong>Nimm!</strong>
            </li>
            <li>
              <strong>ihr-form:</strong> take the ihr-Präsens, remove the pronoun. kommen → ihr
              kommt → <strong>Kommt!</strong>
            </li>
            <li>
              <strong>Sie-form:</strong> infinitive + Sie (capital S). kommen →{' '}
              <strong>Kommen Sie!</strong>
            </li>
          </ul>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Verb</th>
                <th>du-form</th>
                <th>ihr-form</th>
                <th>Sie-form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>kommen</td>
                <td>Komm!</td>
                <td>Kommt!</td>
                <td>Kommen Sie!</td>
              </tr>
              <tr>
                <td>machen</td>
                <td>Mach!</td>
                <td>Macht!</td>
                <td>Machen Sie!</td>
              </tr>
              <tr>
                <td>nehmen</td>
                <td>Nimm!</td>
                <td>Nehmt!</td>
                <td>Nehmen Sie!</td>
              </tr>
              <tr>
                <td>fahren</td>
                <td>Fahr!</td>
                <td>Fahrt!</td>
                <td>Fahren Sie!</td>
              </tr>
              <tr>
                <td>sein</td>
                <td>Sei!</td>
                <td>Seid!</td>
                <td>Seien Sie!</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does "nehmen" become "Nimm" in the du-form?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Irregular verbs with an e→i stem change keep that change in the du-imperative. The
                pattern is: stem vowel change + no ending. The same change appears in du nimmst in
                Präsens.
              </p>
            </details>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Nehmen Sie einen Regenschirm!</strong> (Take an umbrella!)
            </li>
            <li>
              <strong>Fahr doch mit dem Zug!</strong> (Just take the train!)
            </li>
          </ul>

          <h3>Perfekt (Spoken Past Tense)</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to say "I drove to the sea." In English you just say "drove." How do you
              think German builds a past tense sentence?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                German uses two parts: an auxiliary verb (haben or sein) plus a past participle at
                the end: <strong>Ich bin ans Meer gefahren.</strong>
              </p>
            </details>
          </div>

          <p>
            The Perfekt is the main past tense in spoken German. It uses two parts: an auxiliary
            verb + a past participle (Partizip II).
          </p>
          <p>
            <strong>Structure:</strong> Subject + haben/sein + ... + Partizip II (end of sentence)
          </p>
          <p>
            <strong>Why haben or sein?</strong> Most verbs use haben. Verbs of movement from one
            place to another, and verbs of change of state, use sein. So do bleiben and werden.
          </p>

          <h3>How to Build the Partizip II</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Verb type</th>
                <th>Rule</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Regular</td>
                <td>ge- + stem + -(e)t</td>
                <td>machen → gemacht</td>
              </tr>
              <tr>
                <td>Irregular</td>
                <td>ge- + changed stem + -en</td>
                <td>fahren → gefahren</td>
              </tr>
              <tr>
                <td>Separable regular</td>
                <td>prefix + ge + stem + -(e)t</td>
                <td>aufmachen → aufgemacht</td>
              </tr>
              <tr>
                <td>Separable irregular</td>
                <td>prefix + ge + stem + -en</td>
                <td>abfahren → abgefahren</td>
              </tr>
              <tr>
                <td>Inseparable</td>
                <td>no ge- prefix</td>
                <td>besuchen → besucht</td>
              </tr>
              <tr>
                <td>-ieren verbs</td>
                <td>no ge- prefix, add -t</td>
                <td>telefonieren → telefoniert</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do inseparable verbs and -ieren verbs get no "ge-" prefix?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Inseparable prefixes (be-, ver-, er-, etc.) already carry stress away from the stem.
                -ieren verbs are borrowed from French/Latin and never took the ge- prefix. Both
                groups sound wrong with "ge-" added. The rule: syllables are not doubled.
              </p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>Fill in the blanks.</p>
              <ol className="lrn-list">
                <li>
                  The verb <strong>fahren</strong> takes _____ (auxiliary) because it expresses
                  movement.
                </li>
                <li>
                  The Partizip II of <strong>fahren</strong> is _____ (gefahren).
                </li>
                <li>Full sentence: Ich _____ ans Meer _____ (bin ... gefahren).</li>
              </ol>
            </div>
          </div>

          <h3>Verbs that use sein in Perfekt</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Infinitiv</th>
                <th>Perfekt form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>fahren</td>
                <td>ist gefahren</td>
              </tr>
              <tr>
                <td>fliegen</td>
                <td>ist geflogen</td>
              </tr>
              <tr>
                <td>gehen</td>
                <td>ist gegangen</td>
              </tr>
              <tr>
                <td>kommen</td>
                <td>ist gekommen</td>
              </tr>
              <tr>
                <td>laufen</td>
                <td>ist gelaufen</td>
              </tr>
              <tr>
                <td>reisen</td>
                <td>ist gereist</td>
              </tr>
              <tr>
                <td>schwimmen</td>
                <td>ist geschwommen</td>
              </tr>
              <tr>
                <td>wandern</td>
                <td>ist gewandert</td>
              </tr>
              <tr>
                <td>bleiben</td>
                <td>ist geblieben</td>
              </tr>
              <tr>
                <td>sein</td>
                <td>ist gewesen</td>
              </tr>
              <tr>
                <td>werden</td>
                <td>ist geworden</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do movement verbs and state-change verbs use sein instead of haben?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                fahren, gehen, fliegen, schwimmen all move the subject from one place to another.
                aufwachen, einschlafen, werden all change the subject from one state to another.
                bleiben and sein are exceptions. haben is the default for everything else: actions
                that happen without the subject changing place or state. When in doubt, ask: did the
                subject move from A to B, or change from state A to state B? If yes, use sein.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">haben (default)</span>
              <p>Most verbs. No movement from A to B, no change of state.</p>
              <p>
                <strong>Ich habe ein Hotel reserviert.</strong>
              </p>
              <p>
                <strong>Wir haben viel besichtigt.</strong>
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">sein (movement / change)</span>
              <p>
                <strong>Ich bin ans Meer gefahren.</strong>
              </p>
              <p>
                <strong>Er ist mit dem Flugzeug geflogen.</strong>
              </p>
            </div>
          </div>

          <h3>Dialogue: Am Bahnhof (Buying a Ticket)</h3>
          <div className="lrn-callout">
            <span className="lrn-callout-label">Dialog</span>
            <p>
              <strong>A:</strong> Ich möchte eine Fahrkarte nach Berlin.
            </p>
            <p>
              <strong>B:</strong> Einfach oder hin und zurück?
            </p>
            <p>
              <strong>A:</strong> Hin und zurück, bitte.
            </p>
            <p>
              <strong>A:</strong> Wann fährt der nächste Zug?
            </p>
            <p>
              <strong>B:</strong> Um 14:30 Uhr. Von Gleis 7.
            </p>
            <p>
              <strong>A:</strong> Muss ich umsteigen?
            </p>
            <p>
              <strong>B:</strong> Nein, der Zug ist direkt.
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-2">
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>What German word do you think is used for "mountain"?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The word is <strong>der Berg</strong>.
              </p>
              <p>
                You see it in famous place names: <em>Heidelberg</em>, <em>Salzburg</em>,{' '}
                <em>Freiburg</em>.
              </p>
              <p>
                The plural is <em>die Berge</em>.
              </p>
            </details>
          </div>

          <h2>Nature and Landscape (Natur und Landschaft)</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>Article / Plural</th>
                <th>English</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>der Berg</strong>
                </td>
                <td>der, -e</td>
                <td>mountain</td>
                <td>Die Alpen haben viele Berge.</td>
              </tr>
              <tr>
                <td>
                  <strong>der See</strong>
                </td>
                <td>der, -n</td>
                <td>lake</td>
                <td>Der Bodensee ist sehr groß.</td>
              </tr>
              <tr>
                <td>
                  <strong>die See</strong>
                </td>
                <td>die, -n</td>
                <td>sea</td>
                <td>Die Nordsee liegt im Norden.</td>
              </tr>
              <tr>
                <td>
                  <strong>das Meer</strong>
                </td>
                <td>das, -e</td>
                <td>sea / ocean</td>
                <td>Das Mittelmeer ist sehr warm.</td>
              </tr>
              <tr>
                <td>
                  <strong>der Fluss</strong>
                </td>
                <td>der, -̈e</td>
                <td>river</td>
                <td>Der Rhein ist ein langer Fluss.</td>
              </tr>
              <tr>
                <td>
                  <strong>der Wald</strong>
                </td>
                <td>der, -̈er</td>
                <td>forest / woods</td>
                <td>Der Schwarzwald liegt in Südwestdeutschland.</td>
              </tr>
              <tr>
                <td>
                  <strong>das Tal</strong>
                </td>
                <td>das, -̈er</td>
                <td>valley</td>
                <td>Das Tal liegt zwischen zwei Bergen.</td>
              </tr>
              <tr>
                <td>
                  <strong>die Wiese</strong>
                </td>
                <td>die, -n</td>
                <td>meadow / field</td>
                <td>Die Kühe stehen auf der Wiese.</td>
              </tr>
              <tr>
                <td>
                  <strong>der Strand</strong>
                </td>
                <td>der, -̈e</td>
                <td>beach</td>
                <td>Wir gehen an den Strand.</td>
              </tr>
              <tr>
                <td>
                  <strong>die Küste</strong>
                </td>
                <td>die, -n</td>
                <td>coast</td>
                <td>Die Küste der Nordsee ist flach.</td>
              </tr>
              <tr>
                <td>
                  <strong>die Insel</strong>
                </td>
                <td>die, -n</td>
                <td>island</td>
                <td>Rügen ist eine große Insel.</td>
              </tr>
              <tr>
                <td>
                  <strong>der Hügel</strong>
                </td>
                <td>der, -</td>
                <td>hill</td>
                <td>Das Dorf liegt auf einem Hügel.</td>
              </tr>
              <tr>
                <td>
                  <strong>das Dorf</strong>
                </td>
                <td>das, -̈er</td>
                <td>village</td>
                <td>Das Dorf hat nur 200 Einwohner.</td>
              </tr>
              <tr>
                <td>
                  <strong>die Stadt</strong>
                </td>
                <td>die, -̈e</td>
                <td>city / town</td>
                <td>Berlin ist eine große Stadt.</td>
              </tr>
              <tr>
                <td>
                  <strong>die Landschaft</strong>
                </td>
                <td>die, -en</td>
                <td>landscape / scenery</td>
                <td>Die Landschaft in Bayern ist sehr schön.</td>
              </tr>
              <tr>
                <td>
                  <strong>der Baum</strong>
                </td>
                <td>der, -̈e</td>
                <td>tree</td>
                <td>Im Park stehen viele Bäume.</td>
              </tr>
              <tr>
                <td>
                  <strong>der Stein</strong>
                </td>
                <td>der, -e</td>
                <td>stone / rock</td>
                <td>Am Fluss liegen viele Steine.</td>
              </tr>
              <tr>
                <td>
                  <strong>das Feld</strong>
                </td>
                <td>das, -er</td>
                <td>field (agricultural)</td>
                <td>Die Felder sind im Sommer grün.</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">der See (lake)</span>
              <p>masculine noun</p>
              <p>Der Bodensee ist sehr groß.</p>
              <p>The lake is very big.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">die See (sea)</span>
              <p>feminine noun</p>
              <p>Die Nordsee liegt im Norden.</p>
              <p>The North Sea is in the north.</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does German use compound words like <em>Schwarzwald</em> and <em>Bodensee</em> for
              real geographic places?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                German place names often describe what the place actually is. <em>Schwarzwald</em> ={' '}
                <em>schwarz</em> (black) + <em>Wald</em> (forest) = the Black Forest.
              </p>
              <p>
                <em>Bodensee</em> = <em>Boden</em> (ground/bottom) + <em>See</em> (lake) = lake near
                the town of Bodman.
              </p>
              <p>
                Once you know nature words, you can decode many German place names on a map without
                a dictionary.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              <em>Der See</em> and <em>die See</em> look identical but mean different things.
            </p>
            <p>
              German has several such pairs where the article signals a completely different word
              and meaning.
            </p>
            <p>
              In context, you can always tell them apart: a lake has shores on all sides; a sea is
              open water.
            </p>
            <p>
              Another example: <em>der Band</em> (volume/book) vs. <em>die Band</em> (musical band)
              vs. <em>das Band</em> (ribbon/tape).
            </p>
          </div>

          <h3>Compass Directions (Himmelsrichtungen)</h3>
          <p>
            Use compass directions to describe where regions, countries, and places are located.
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>der Norden</strong>
                </td>
                <td>the north</td>
                <td>Hamburg liegt im Norden.</td>
              </tr>
              <tr>
                <td>
                  <strong>der Süden</strong>
                </td>
                <td>the south</td>
                <td>München liegt im Süden.</td>
              </tr>
              <tr>
                <td>
                  <strong>der Osten</strong>
                </td>
                <td>the east</td>
                <td>Dresden liegt im Osten.</td>
              </tr>
              <tr>
                <td>
                  <strong>der Westen</strong>
                </td>
                <td>the west</td>
                <td>Köln liegt im Westen.</td>
              </tr>
              <tr>
                <td>
                  <strong>nördlich</strong>
                </td>
                <td>northern / to the north</td>
                <td>Berlin liegt nördlich von Leipzig.</td>
              </tr>
              <tr>
                <td>
                  <strong>südlich</strong>
                </td>
                <td>southern / to the south</td>
                <td>Wien liegt südlich von Berlin.</td>
              </tr>
              <tr>
                <td>
                  <strong>östlich</strong>
                </td>
                <td>eastern / to the east</td>
                <td>Polen liegt östlich von Deutschland.</td>
              </tr>
              <tr>
                <td>
                  <strong>westlich</strong>
                </td>
                <td>western / to the west</td>
                <td>Frankreich liegt westlich von Deutschland.</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Grammar note</span>
            <p>
              Use <strong>im</strong> (in dem) with compass direction nouns:{' '}
              <em>im Norden, im Süden</em>.
            </p>
            <p>
              Use the adjective form with <strong>von</strong> to say relative position:{' '}
              <em>nördlich von Berlin</em>.
            </p>
          </div>
        </div>
      </>
    ]
  },

  practice: [
    {
      q: 'What does "Es regnet" mean? What noun goes with it?',
      a: 'It is raining. The noun is der Regen (rain). The verb phrase es regnet follows the pattern es + verb for impersonal weather expressions.'
    },
    {
      q: 'Name the four seasons in German with their articles.',
      a: 'der Frühling (spring), der Sommer (summer), der Herbst (autumn), der Winter (winter). All four seasons are masculine.'
    },
    {
      q: 'What does "im Urlaub" mean?',
      a: 'On holiday / on vacation. Example: Ich bin im Urlaub. (I am on holiday.) im = in dem (dative contraction).'
    },
    {
      q: 'What is the difference between "die Reise" and "der Urlaub"?',
      a: 'Die Reise means a journey or trip (the act of travelling). Der Urlaub means a holiday or vacation (time off). You go on eine Reise, but you have Urlaub.'
    },
    {
      q: 'ELABORATE: Why does German say "in die Berge" but "in den Bergen"?',
      a: 'In die Berge uses Akkusativ because you are moving toward a destination (Wohin?). In den Bergen uses Dativ because you are already there (Wo?). Two-way prepositions like in use Akkusativ for movement and Dativ for location.'
    },
    {
      q: 'What does "weil" do to verb position? Give an example.',
      a: 'weil pushes the verb to the end of the clause. Example: Ich bleibe zu Hause, weil es regnet. (I stay home because it is raining.) The verb regnet moves to the very end.'
    },
    {
      q: 'What is the difference between "weil" and "denn"?',
      a: 'Both mean "because." weil is a subordinating conjunction (verb goes to end): ..., weil es regnet. denn is a coordinating conjunction (verb stays in position 2): ..., denn es regnet. Choose by rhythm and whether you want one sentence or two clauses.'
    },
    {
      q: 'What does "deshalb" mean? What happens to word order after it?',
      a: 'Deshalb means "therefore / that\'s why." It triggers verb-subject inversion because it fills position 1. The verb moves to position 2 and the subject to position 3. Example: Deshalb bleibe ich zu Hause.'
    },
    {
      q: 'TRANSFER: Build the sentence "I fly to Spain because the weather is beautiful." Use weil.',
      a: 'Ich fliege nach Spanien, weil das Wetter schön ist. (The verb ist goes to the end of the weil-clause. fliege uses sein in Perfekt: Ich bin nach Spanien geflogen.)'
    },
    {
      q: 'What is the difference between "Wo?" and "Wohin?"?',
      a: 'Wo asks about a static position (where something is) and takes Dativ. Wohin asks about a destination (where something is going) and takes Akkusativ. Example: Wo bist du? (Where are you?) Wohin fährst du? (Where are you going?)'
    },
    {
      q: 'What does "möchten" mean? How does it differ from "wollen"?',
      a: 'Möchten means "would like to" (polite desire). Wollen means "to want to" (direct intention). Möchten sounds softer and more polite. In shops and requests, use möchten. Both are modal verbs.'
    },
    {
      q: 'What is the Perfekt of "fahren"? Which auxiliary does it use?',
      a: 'Ist gefahren. fahren uses sein because it expresses movement from one place to another. Example: Ich bin ans Meer gefahren. (I drove to the sea.)'
    },
    {
      q: 'What is the Perfekt of "besuchen"? Which auxiliary does it use?',
      a: 'Hat besucht. besuchen is an inseparable verb (be- prefix), so no ge- in the Partizip II. It uses haben because it does not express movement from A to B. Example: Wir haben das Museum besucht.'
    },
    {
      q: 'SELF-EXPLAIN: Why does "telefonieren" have no "ge-" in its Partizip II?',
      a: '-ieren verbs (borrowed from French/Latin) never take the ge- prefix. Partizip II: telefoniert. This applies to all -ieren verbs: reservieren → reserviert, buchen does take ge-: gebucht (regular verb, not -ieren).'
    },
    {
      q: 'What does "der Berg" mean? Use it in a sentence.',
      a: 'Mountain. Example: Die Alpen haben viele Berge. (The Alps have many mountains.) Plural: die Berge.'
    },
    {
      q: 'What is the difference between "der See" and "die See"?',
      a: 'Der See (masculine) = lake. Die See (feminine) = sea. Example: Der Bodensee ist groß. (The Lake Constance is big.) Die Nordsee liegt im Norden. (The North Sea is in the north.)'
    },
    {
      q: 'ELABORATE: Why do "der See" and "die See" have different articles if they look the same?',
      a: 'They are two completely different words that happen to have the same spelling. German grammar signals the difference through the article. The article is not decorative - it carries essential meaning. See also: der Band (volume) vs. die Band (music group) vs. das Band (ribbon).'
    },
    {
      q: 'What does "der Fluss" mean? Name a famous German river.',
      a: 'River. Example: Der Rhein ist ein langer Fluss. (The Rhine is a long river.) Famous German rivers: der Rhein, die Elbe, die Donau.'
    },
    {
      q: 'What does "der Wald" mean? Use it in a sentence.',
      a: 'Forest / woods. Example: Der Schwarzwald liegt in Südwestdeutschland. (The Black Forest is in southwest Germany.)'
    },
    {
      q: 'What does "die Landschaft" mean?',
      a: 'Landscape / scenery. Example: Die Landschaft in Bayern ist sehr schön. (The scenery in Bavaria is very beautiful.)'
    },
    {
      q: 'SELF-EXPLAIN: Why does German say "im Norden" but "nördlich von" when describing location?',
      a: 'Im Norden uses a noun with a preposition: in + dem (contracted to im) + Norden. It means "in the north region." Nördlich von uses an adjective to show relative position: Hamburg liegt nördlich von Berlin means Hamburg is to the north of Berlin. The noun describes a region; the adjective describes a relative direction.'
    },
    {
      q: 'How do you say "Hamburg is in the north" in German?',
      a: 'Hamburg liegt im Norden. (im = in dem, dative contraction)'
    },
    {
      q: 'How do you say "Vienna is to the south of Berlin" in German?',
      a: 'Wien liegt südlich von Berlin. (südlich = adjective form of south, used with von for relative position)'
    },
    {
      q: 'TRANSFER: A friend asks where Switzerland is relative to Germany. Answer in German using a compass direction adjective.',
      a: 'Die Schweiz liegt südlich von Deutschland. (Switzerland is to the south of Germany.) Use südlich + von + country name.'
    },
    {
      q: 'What does "die Insel" mean? Give an example.',
      a: 'Island. Example: Rügen ist eine große Insel. (Rügen is a large island.) Plural: die Inseln.'
    },
    {
      q: 'What does "der Strand" mean?',
      a: 'Beach. Example: Wir gehen an den Strand. (We are going to the beach.) An den Strand uses accusative because it shows destination movement.'
    },
    {
      q: 'What does "das Tal" mean?',
      a: 'Valley. Example: Das Tal liegt zwischen zwei Bergen. (The valley lies between two mountains.) Plural: die Täler.'
    },
    {
      q: 'TRANSFER: Describe a holiday landscape in German: a village on a hill, with a forest behind it and a river in front. Write the full sentence.',
      a: 'Das Dorf liegt auf einem Hügel. Hinter dem Dorf ist ein Wald, und vor dem Dorf fließt ein Fluss. (auf + dative for location; hinter / vor + dative because nothing moves; fließt = flows.)'
    }
  ],

  reference: {
    category: 'Quick Reference',
    title: 'Reisen und Urlaub',
    sections: [
      <>
        <h2>Weather (das Wetter)</h2>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
              <th>Verb phrase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>die Sonne</td>
              <td>sun</td>
              <td>Die Sonne scheint.</td>
            </tr>
            <tr>
              <td>der Regen</td>
              <td>rain</td>
              <td>Es regnet.</td>
            </tr>
            <tr>
              <td>der Schnee</td>
              <td>snow</td>
              <td>Es schneit.</td>
            </tr>
            <tr>
              <td>der Wind</td>
              <td>wind</td>
              <td>Es ist windig.</td>
            </tr>
            <tr>
              <td>der Nebel</td>
              <td>fog</td>
              <td>Es ist neblig.</td>
            </tr>
            <tr>
              <td>das Gewitter</td>
              <td>thunderstorm</td>
              <td>Es gibt Gewitter.</td>
            </tr>
            <tr>
              <td>die Wolke</td>
              <td>cloud</td>
              <td>Es ist bewölkt.</td>
            </tr>
          </tbody>
        </table>

        <h2>Seasons and Months</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Season</th>
              <th>German</th>
              <th>Months</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>spring</td>
              <td>der Frühling</td>
              <td>März, April, Mai</td>
            </tr>
            <tr>
              <td>summer</td>
              <td>der Sommer</td>
              <td>Juni, Juli, August</td>
            </tr>
            <tr>
              <td>autumn</td>
              <td>der Herbst</td>
              <td>September, Oktober, November</td>
            </tr>
            <tr>
              <td>winter</td>
              <td>der Winter</td>
              <td>Dezember, Januar, Februar</td>
            </tr>
          </tbody>
        </table>

        <h2>Giving Reasons</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Word</th>
              <th>Meaning</th>
              <th>Word order</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>weil</td>
              <td>because</td>
              <td>verb to end of clause</td>
              <td>..., weil es regnet.</td>
            </tr>
            <tr>
              <td>denn</td>
              <td>because</td>
              <td>verb stays position 2</td>
              <td>..., denn es regnet.</td>
            </tr>
            <tr>
              <td>deshalb</td>
              <td>therefore</td>
              <td>verb + subject (inversion)</td>
              <td>Deshalb bleibe ich...</td>
            </tr>
          </tbody>
        </table>

        <h2>Perfekt (Spoken Past Tense)</h2>
        <p>
          <strong>Structure:</strong> Subject + haben/sein + ... + Partizip II
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Infinitiv</th>
              <th>Partizip II</th>
              <th>Auxiliary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>fahren</td>
              <td>gefahren</td>
              <td>sein (movement)</td>
            </tr>
            <tr>
              <td>fliegen</td>
              <td>geflogen</td>
              <td>sein (movement)</td>
            </tr>
            <tr>
              <td>gehen</td>
              <td>gegangen</td>
              <td>sein (movement)</td>
            </tr>
            <tr>
              <td>schwimmen</td>
              <td>geschwommen</td>
              <td>sein (movement)</td>
            </tr>
            <tr>
              <td>wandern</td>
              <td>gewandert</td>
              <td>sein (movement)</td>
            </tr>
            <tr>
              <td>bleiben</td>
              <td>geblieben</td>
              <td>sein (exception)</td>
            </tr>
            <tr>
              <td>machen</td>
              <td>gemacht</td>
              <td>haben (default)</td>
            </tr>
            <tr>
              <td>besuchen</td>
              <td>besucht</td>
              <td>haben (inseparable, no ge-)</td>
            </tr>
            <tr>
              <td>reservieren</td>
              <td>reserviert</td>
              <td>haben (-ieren, no ge-)</td>
            </tr>
          </tbody>
        </table>

        <h2>Nature and Landscape</h2>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Article / Plural</th>
              <th>English</th>
              <th>Grammar note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>der Berg</strong>
              </td>
              <td>der, -e</td>
              <td>mountain</td>
              <td>in die Berge (destination)</td>
            </tr>
            <tr>
              <td>
                <strong>der See</strong>
              </td>
              <td>der, -n</td>
              <td>lake</td>
              <td>masc - do not confuse with die See</td>
            </tr>
            <tr>
              <td>
                <strong>die See</strong>
              </td>
              <td>die, -n</td>
              <td>sea</td>
              <td>fem - an die See (to the seaside)</td>
            </tr>
            <tr>
              <td>
                <strong>das Meer</strong>
              </td>
              <td>das, -e</td>
              <td>sea / ocean</td>
              <td>ans Meer (destination)</td>
            </tr>
            <tr>
              <td>
                <strong>der Fluss</strong>
              </td>
              <td>der, -̈e</td>
              <td>river</td>
              <td>am Fluss (location)</td>
            </tr>
            <tr>
              <td>
                <strong>der Wald</strong>
              </td>
              <td>der, -̈er</td>
              <td>forest</td>
              <td>in den Wald (destination)</td>
            </tr>
            <tr>
              <td>
                <strong>das Tal</strong>
              </td>
              <td>das, -̈er</td>
              <td>valley</td>
              <td>im Tal (location)</td>
            </tr>
            <tr>
              <td>
                <strong>die Wiese</strong>
              </td>
              <td>die, -n</td>
              <td>meadow</td>
              <td>auf der Wiese (location)</td>
            </tr>
            <tr>
              <td>
                <strong>der Strand</strong>
              </td>
              <td>der, -̈e</td>
              <td>beach</td>
              <td>an den Strand (destination)</td>
            </tr>
            <tr>
              <td>
                <strong>die Küste</strong>
              </td>
              <td>die, -n</td>
              <td>coast</td>
              <td>an der Küste (location)</td>
            </tr>
            <tr>
              <td>
                <strong>die Insel</strong>
              </td>
              <td>die, -n</td>
              <td>island</td>
              <td>auf der Insel (location)</td>
            </tr>
            <tr>
              <td>
                <strong>der Hügel</strong>
              </td>
              <td>der, -</td>
              <td>hill</td>
              <td>auf dem Hügel (location)</td>
            </tr>
            <tr>
              <td>
                <strong>das Dorf</strong>
              </td>
              <td>das, -̈er</td>
              <td>village</td>
              <td>im Dorf (location)</td>
            </tr>
            <tr>
              <td>
                <strong>die Stadt</strong>
              </td>
              <td>die, -̈e</td>
              <td>city / town</td>
              <td>in die Stadt (destination)</td>
            </tr>
            <tr>
              <td>
                <strong>die Landschaft</strong>
              </td>
              <td>die, -en</td>
              <td>landscape</td>
              <td>descriptive noun, no typical movement prep</td>
            </tr>
            <tr>
              <td>
                <strong>der Baum</strong>
              </td>
              <td>der, -̈e</td>
              <td>tree</td>
              <td>unter dem Baum (location)</td>
            </tr>
            <tr>
              <td>
                <strong>der Stein</strong>
              </td>
              <td>der, -e</td>
              <td>stone / rock</td>
              <td>auf dem Stein (location)</td>
            </tr>
            <tr>
              <td>
                <strong>das Feld</strong>
              </td>
              <td>das, -er</td>
              <td>field</td>
              <td>auf dem Feld (location)</td>
            </tr>
          </tbody>
        </table>

        <h2>Compass Directions</h2>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Noun</th>
              <th>Adjective</th>
              <th>English</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der Norden</td>
              <td>nördlich</td>
              <td>north / northern</td>
              <td>im Norden / nördlich von Berlin</td>
            </tr>
            <tr>
              <td>der Süden</td>
              <td>südlich</td>
              <td>south / southern</td>
              <td>im Süden / südlich von Wien</td>
            </tr>
            <tr>
              <td>der Osten</td>
              <td>östlich</td>
              <td>east / eastern</td>
              <td>im Osten / östlich von Dresden</td>
            </tr>
            <tr>
              <td>der Westen</td>
              <td>westlich</td>
              <td>west / western</td>
              <td>im Westen / westlich von Köln</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Grammar rule</span>
          <p>
            <strong>Noun form:</strong> im + compass noun (dative): <em>im Norden, im Süden</em>
          </p>
          <p>
            <strong>Adjective form:</strong> compass adjective + von: <em>nördlich von Hamburg</em>
          </p>
        </div>
      </>
    ]
  },

  customCss: null
}

export default function TravelAndHolidays() {
  return <LearningTemplate config={config} />
}
