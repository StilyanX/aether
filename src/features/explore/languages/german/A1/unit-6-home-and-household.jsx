import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'hah',
  documentTitle: 'Home and Household: AETHER',
  learning: {
    category: 'Unit 6',
    title: 'Zuhause und Haushalt',
    subtitle: 'Apartments, furniture, household vocabulary, location prepositions, and city life',
    sections: [
      <>
        <h2>Why This Unit Matters</h2>
        <p>
          You will learn apartment and house vocabulary, furniture, location prepositions, house
          rules, and city life phrases.
        </p>
      </>,

      <>
        <div id="lrn-section-0" className="lrn-section">
          <h2>Wohnen (Living)</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You are describing where your sofa is. It stands in front of the window. The German
              word for "in front of" is "vor." When you describe a fixed position, do you think the
              word for "the window" stays the same or changes form?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It changes. A fixed position uses a case called the Dativ (you will learn it fully
                in the grammar section). The article shifts:{' '}
                <strong>Das Sofa steht vor dem Fenster.</strong>
              </p>
            </details>
          </div>

          <h3>Apartment and House (Wohnung und Haus)</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>die Wohnung</td>
                <td>apartment</td>
              </tr>
              <tr>
                <td>das Haus</td>
                <td>house</td>
              </tr>
              <tr>
                <td>das Zimmer</td>
                <td>room</td>
              </tr>
              <tr>
                <td>das Schlafzimmer</td>
                <td>bedroom</td>
              </tr>
              <tr>
                <td>das Wohnzimmer</td>
                <td>living room</td>
              </tr>
              <tr>
                <td>das Badezimmer</td>
                <td>bathroom</td>
              </tr>
              <tr>
                <td>die Küche</td>
                <td>kitchen</td>
              </tr>
              <tr>
                <td>das Esszimmer</td>
                <td>dining room</td>
              </tr>
              <tr>
                <td>das Arbeitszimmer</td>
                <td>study/home office</td>
              </tr>
              <tr>
                <td>das Kinderzimmer</td>
                <td>children's room</td>
              </tr>
              <tr>
                <td>die Toilette / das WC</td>
                <td>toilet</td>
              </tr>
              <tr>
                <td>der Balkon</td>
                <td>balcony</td>
              </tr>
              <tr>
                <td>der Keller</td>
                <td>cellar/basement</td>
              </tr>
              <tr>
                <td>der Dachboden</td>
                <td>attic</td>
              </tr>
              <tr>
                <td>der Garten</td>
                <td>garden</td>
              </tr>
              <tr>
                <td>der Flur / der Gang</td>
                <td>hallway</td>
              </tr>
              <tr>
                <td>die Etage / das Stockwerk</td>
                <td>floor/storey</td>
              </tr>
              <tr>
                <td>das Erdgeschoss</td>
                <td>ground floor</td>
              </tr>
              <tr>
                <td>der erste Stock</td>
                <td>first floor</td>
              </tr>
              <tr>
                <td>oben</td>
                <td>upstairs/above</td>
              </tr>
              <tr>
                <td>unten</td>
                <td>downstairs/below</td>
              </tr>
            </tbody>
          </table>

          <h3>Location and Surroundings (Wohnlage und Umgebung)</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>die Lage</td>
                <td>location</td>
              </tr>
              <tr>
                <td>zentral</td>
                <td>central</td>
              </tr>
              <tr>
                <td>ruhig</td>
                <td>quiet</td>
              </tr>
              <tr>
                <td>laut</td>
                <td>noisy</td>
              </tr>
              <tr>
                <td>hell</td>
                <td>bright</td>
              </tr>
              <tr>
                <td>dunkel</td>
                <td>dark</td>
              </tr>
              <tr>
                <td>groß</td>
                <td>big</td>
              </tr>
              <tr>
                <td>klein</td>
                <td>small</td>
              </tr>
              <tr>
                <td>modern</td>
                <td>modern</td>
              </tr>
              <tr>
                <td>alt</td>
                <td>old</td>
              </tr>
              <tr>
                <td>die Nachbarschaft</td>
                <td>neighborhood</td>
              </tr>
              <tr>
                <td>der Nachbar / die Nachbarin</td>
                <td>neighbor</td>
              </tr>
              <tr>
                <td>in der Nähe von</td>
                <td>near/close to</td>
              </tr>
              <tr>
                <td>weit von</td>
                <td>far from</td>
              </tr>
              <tr>
                <td>der Park</td>
                <td>park</td>
              </tr>
              <tr>
                <td>die Schule</td>
                <td>school</td>
              </tr>
              <tr>
                <td>der Kindergarten</td>
                <td>kindergarten</td>
              </tr>
              <tr>
                <td>die Haltestelle</td>
                <td>bus/tram stop</td>
              </tr>
              <tr>
                <td>der Parkplatz</td>
                <td>parking space</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-callout">
            <span className="lrn-callout-label">In der Nähe von</span>
            <p>
              "in der Nähe von" (near / close to) always takes the Dativ case. You learn the Dativ
              in full in the grammar section; for now, notice how the article shifts.
            </p>
            <ul className="lrn-list">
              <li>
                in der Nähe von dem Supermarkt → <strong>in der Nähe vom Supermarkt.</strong> German
                shortens "von dem" to <strong>vom</strong> (a fixed contraction).
              </li>
              <li>
                <strong>in der Nähe von der Schule</strong> (Dativ feminine).
              </li>
            </ul>
            <p>
              Compare: <strong>zu Hause</strong> (at home, static) vs. <strong>nach Hause</strong>{' '}
              (going home, directional: no article needed).
            </p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You see an ad: "3 Zi., 75 m², KM 800 €, NK inklusive." What do you think KM and NK
              stand for?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                KM = Kaltmiete (base rent without utilities). NK = Nebenkosten (additional costs:
                water, heating, building maintenance). Always ask:{' '}
                <strong>Sind die Nebenkosten inklusive?</strong>
              </p>
            </details>
          </div>

          <h3>Apartment Search (Wohnungssuche)</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>suchen</td>
                <td>to look for</td>
              </tr>
              <tr>
                <td>finden</td>
                <td>to find</td>
              </tr>
              <tr>
                <td>die Anzeige</td>
                <td>advertisement</td>
              </tr>
              <tr>
                <td>inserieren</td>
                <td>to advertise</td>
              </tr>
              <tr>
                <td>vermieten</td>
                <td>to rent out</td>
              </tr>
              <tr>
                <td>mieten</td>
                <td>to rent</td>
              </tr>
              <tr>
                <td>der Vermieter / die Vermieterin</td>
                <td>landlord / landlady</td>
              </tr>
              <tr>
                <td>der Mieter / die Mieterin</td>
                <td>tenant</td>
              </tr>
              <tr>
                <td>der Makler / die Maklerin</td>
                <td>real estate agent</td>
              </tr>
              <tr>
                <td>die Miete</td>
                <td>rent</td>
              </tr>
              <tr>
                <td>die Nebenkosten</td>
                <td>additional costs/utilities</td>
              </tr>
              <tr>
                <td>die Kaution</td>
                <td>deposit</td>
              </tr>
              <tr>
                <td>der Mietvertrag</td>
                <td>rental contract</td>
              </tr>
              <tr>
                <td>besichtigen</td>
                <td>to view (a property)</td>
              </tr>
              <tr>
                <td>die Besichtigung</td>
                <td>viewing</td>
              </tr>
              <tr>
                <td>frei ab</td>
                <td>available from</td>
              </tr>
              <tr>
                <td>möbliert</td>
                <td>furnished</td>
              </tr>
              <tr>
                <td>unmöbliert</td>
                <td>unfurnished</td>
              </tr>
              <tr>
                <td>die Quadratmeter (m²)</td>
                <td>square meters</td>
              </tr>
              <tr>
                <td>das Zimmer (Anz.)</td>
                <td>number of rooms</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">vermieten (landlord rents out)</span>
              <p>
                The landlord performs this action. <strong>der Vermieter</strong> receives payment
                for their property.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">mieten (tenant rents in)</span>
              <p>
                The tenant performs this action. <strong>der Mieter</strong> pays to use someone's
                property.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">die Miete</span>
              <p>The base rent. The fixed monthly amount.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">die Nebenkosten</span>
              <p>Additional costs: water, heating, and building maintenance.</p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">möbliert</span>
              <p>The apartment comes with furniture. You bring nothing.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">unmöbliert</span>
              <p>You must bring your own furniture. It matters a lot for new arrivals.</p>
            </div>
          </div>

          <h3>Furniture (Möbel)</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>das Bett</td>
                <td>bed</td>
              </tr>
              <tr>
                <td>der Schrank</td>
                <td>wardrobe/cupboard</td>
              </tr>
              <tr>
                <td>der Kleiderschrank</td>
                <td>wardrobe</td>
              </tr>
              <tr>
                <td>der Tisch</td>
                <td>table</td>
              </tr>
              <tr>
                <td>der Stuhl</td>
                <td>chair</td>
              </tr>
              <tr>
                <td>der Sessel</td>
                <td>armchair</td>
              </tr>
              <tr>
                <td>das Sofa / die Couch</td>
                <td>sofa/couch</td>
              </tr>
              <tr>
                <td>das Regal</td>
                <td>shelf</td>
              </tr>
              <tr>
                <td>der Schreibtisch</td>
                <td>desk</td>
              </tr>
              <tr>
                <td>die Lampe</td>
                <td>lamp</td>
              </tr>
              <tr>
                <td>der Teppich</td>
                <td>carpet/rug</td>
              </tr>
              <tr>
                <td>der Vorhang</td>
                <td>curtain</td>
              </tr>
              <tr>
                <td>das Bild / das Poster</td>
                <td>picture/poster</td>
              </tr>
              <tr>
                <td>die Waschmaschine</td>
                <td>washing machine</td>
              </tr>
              <tr>
                <td>der Kühlschrank</td>
                <td>refrigerator</td>
              </tr>
              <tr>
                <td>der Herd</td>
                <td>stove/cooker</td>
              </tr>
              <tr>
                <td>die Spülmaschine</td>
                <td>dishwasher</td>
              </tr>
              <tr>
                <td>die Badewanne</td>
                <td>bathtub</td>
              </tr>
              <tr>
                <td>die Dusche</td>
                <td>shower</td>
              </tr>
              <tr>
                <td>das Waschbecken</td>
                <td>sink/washbasin</td>
              </tr>
            </tbody>
          </table>

          <h3>House Rules (Hausordnung)</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>die Hausordnung</td>
                <td>house rules</td>
              </tr>
              <tr>
                <td>dürfen</td>
                <td>to be allowed to</td>
              </tr>
              <tr>
                <td>verboten</td>
                <td>forbidden</td>
              </tr>
              <tr>
                <td>erlaubt</td>
                <td>allowed</td>
              </tr>
              <tr>
                <td>der Lärm</td>
                <td>noise</td>
              </tr>
              <tr>
                <td>die Ruhezeit</td>
                <td>quiet hours</td>
              </tr>
              <tr>
                <td>der Müll</td>
                <td>garbage/rubbish</td>
              </tr>
              <tr>
                <td>der Müllcontainer</td>
                <td>garbage bin</td>
              </tr>
              <tr>
                <td>das Haustier</td>
                <td>pet</td>
              </tr>
              <tr>
                <td>rauchen</td>
                <td>to smoke</td>
              </tr>
              <tr>
                <td>das Treppenhaus</td>
                <td>stairwell</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>,

      <>
        <div id="lrn-section-1" className="lrn-section">
          <h2>Grammar: Cases and Prepositions</h2>

          <h3>What a Case Is, and Meeting the Dativ</h3>
          <p>
            German nouns change form depending on their job in the sentence. This is called case.
            German has four cases. You already met the Akkusativ in Unit 5: it marks the direct
            object, the thing an action lands on (Ich kaufe den Tisch).
          </p>
          <p>
            This unit teaches a new case: the <strong>Dativ</strong>. Look at one example first:
          </p>
          <div className="lrn-callout">
            <span className="lrn-callout-label">Worked example</span>
            <p>
              <strong>Ich fahre mit dem Bus.</strong> (I travel by bus.)
            </p>
            <p>
              "der Bus" is masculine. But after <em>mit</em> it becomes <strong>dem Bus</strong>.
              That changed article, <em>dem</em>, is the Dativ. The Dativ is the case German uses
              for a fixed location and for certain prepositions and verbs.
            </p>
          </div>

          <h3>Dative Articles (learn these first)</h3>
          <p>
            Before you can use the Dativ, you need its article forms. Compare them to the normal
            (Nominativ) articles der/die/das/die.
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Article type</th>
                <th>Maskulin</th>
                <th>Feminin</th>
                <th>Neutrum</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>definite (the)</td>
                <td>dem</td>
                <td>der</td>
                <td>dem</td>
                <td>den</td>
              </tr>
              <tr>
                <td>indefinite (a)</td>
                <td>einem</td>
                <td>einer</td>
                <td>einem</td>
                <td>-</td>
              </tr>
              <tr>
                <td>negative (no/not a)</td>
                <td>keinem</td>
                <td>keiner</td>
                <td>keinem</td>
                <td>keinen</td>
              </tr>
            </tbody>
          </table>
          <p>
            Worked walk: das Fenster is neuter. After a Dativ preposition the article becomes{' '}
            <em>dem</em>: <strong>vor dem Fenster</strong> (in front of the window).
          </p>
          <p>
            Note: plural Dativ nouns add -n to the noun itself. The exception is nouns whose plural
            already ends in -n or -s. Examples: den Zimmern, den Häusern.
          </p>

          <h3>Dative Pronouns</h3>
          <p>The person-words also change in the Dativ. You will use these constantly:</p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Subject (Nominativ)</th>
                <th>Dativ form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ich</td>
                <td>mir</td>
              </tr>
              <tr>
                <td>du</td>
                <td>dir</td>
              </tr>
              <tr>
                <td>er / es</td>
                <td>ihm</td>
              </tr>
              <tr>
                <td>sie (she)</td>
                <td>ihr</td>
              </tr>
              <tr>
                <td>wir</td>
                <td>uns</td>
              </tr>
              <tr>
                <td>ihr</td>
                <td>euch</td>
              </tr>
              <tr>
                <td>sie (they)</td>
                <td>ihnen</td>
              </tr>
              <tr>
                <td>Sie (formal)</td>
                <td>Ihnen</td>
              </tr>
            </tbody>
          </table>
          <p>
            Possessive words take the same Dativ endings: <strong>in meinem Zimmer</strong> (neuter
            → meinem), <strong>bei meiner Mutter</strong> (feminine → meiner).
          </p>

          <h3>Preposition + Article Contractions</h3>
          <p>
            German shortens a Dativ preposition plus <em>dem</em> or <em>der</em> into one word. Use
            these short forms by default:
          </p>
          <ul className="lrn-list">
            <li>
              an dem → <strong>am</strong>
            </li>
            <li>
              in dem → <strong>im</strong>
            </li>
            <li>
              von dem → <strong>vom</strong>
            </li>
            <li>
              zu dem → <strong>zum</strong>
            </li>
            <li>
              zu der → <strong>zur</strong>
            </li>
            <li>
              bei dem → <strong>beim</strong>
            </li>
          </ul>

          <h3>Dative Prepositions (always Dativ)</h3>
          <p>
            Start with the example, then the list. <strong>Ich fahre mit dem Bus.</strong> Here{' '}
            <em>mit</em> forces Dativ on "der Bus" → dem Bus. These prepositions always take the
            Dativ, every time:
          </p>
          <p>
            <strong>aus, bei, mit, nach, seit, von, zu, gegenüber.</strong> Memorize them as a
            group.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Ich komme aus der Türkei.</strong> (I come from Turkey.)
            </li>
            <li>
              <strong>Er wohnt bei seiner Mutter.</strong> (He lives with his mother.)
            </li>
          </ul>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do some prepositions always take Dativ?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                German assigned each preposition to a fixed case centuries ago. The assignment does
                not change. You do not need to understand why. Learn the two groups, Dativ and
                Akkusativ, and apply them.
              </p>
            </details>
          </div>

          <h3>Accusative Prepositions (always Akkusativ)</h3>
          <p>
            As a quick contrast to the Dativ group: a few prepositions always take the Akkusativ
            (the Unit 5 case). Example first: <strong>Ich gehe durch den Park.</strong> The list is{' '}
            <strong>durch, für, gegen, ohne, um.</strong>
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Das Zimmer ist für den Gast.</strong> (The room is for the guest.)
            </li>
          </ul>

          <h3>Two-Way Prepositions (Wechselpräpositionen)</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to say "The book is on the table" (static) and then "I am putting the book on
              the table" (action). Do you think the same German preposition word can take two
              different cases?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. These are the Wechselpräpositionen. The same preposition takes Dativ for static
                position and Akkusativ for movement toward a place.
              </p>
            </details>
          </div>

          <p>
            A two-way preposition is one that can take two different cases. These nine can take
            either Dativ or Akkusativ: an, auf, hinter, in, neben, über, unter, vor, zwischen.
          </p>
          <p>
            <strong>
              The rule: Wo? (Where?) = Dativ (static location). Wohin? (Where to?) = Akkusativ
              (direction/movement).
            </strong>
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Case</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wo? (static)</td>
                <td>Dativ</td>
                <td>Das Buch liegt auf dem Tisch. (The book is lying on the table.)</td>
              </tr>
              <tr>
                <td>Wohin? (direction)</td>
                <td>Akkusativ</td>
                <td>Ich lege das Buch auf den Tisch. (I put the book on the table.)</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Wo? (Dativ): already there</span>
              <p>The thing is in a fixed position.</p>
              <p>
                <strong>Das Sofa steht vor dem Fenster.</strong>
              </p>
              <p>
                <strong>Das Bild hängt über dem Schreibtisch.</strong>
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Wohin? (Akkusativ): moving there</span>
              <p>You are moving something to that place.</p>
              <p>
                <strong>Ich stelle das Sofa vor das Fenster.</strong>
              </p>
              <p>
                <strong>Ich stelle das Bücherregal an die Wand.</strong>
              </p>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>Fill in the correct case for each blank, then check.</p>
              <ol className="lrn-list">
                <li>Das Sofa steht vor _____ (dem/den?) Fenster: static position, so use _____.</li>
                <li>Ich stelle das Sofa vor _____ (dem/das?) Fenster: movement, so use _____.</li>
              </ol>
              <details className="lrn-faded-reveal">
                <summary>Check your answers</summary>
                <p>
                  1. <strong>Das Sofa steht vor dem Fenster.</strong> The sofa is not moving (Wo?),
                  so use Dativ: <strong>dem</strong> Fenster.
                </p>
                <p>
                  2. <strong>Ich stelle das Sofa vor das Fenster.</strong> You move the sofa
                  (Wohin?), so use Akkusativ: <strong>das</strong> Fenster.
                </p>
              </details>
            </div>
          </div>
          <p>
            You can now place any object and pick the right case by asking yourself one question:
            Wo? (it stays put → Dativ) or Wohin? (it moves there → Akkusativ).
          </p>

          <h3>Placement Verbs vs. Position Verbs</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Action (Wohin? Akkusativ)</th>
                <th>Position (Wo? Dativ)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>stellen (to put upright)</td>
                <td>stehen (to stand)</td>
              </tr>
              <tr>
                <td>legen (to place flat)</td>
                <td>liegen (to lie)</td>
              </tr>
              <tr>
                <td>hängen (transitive, you hang something up)</td>
                <td>hängen (intransitive, it hangs)</td>
              </tr>
              <tr>
                <td>setzen (to seat)</td>
                <td>sitzen (to sit)</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What pattern do you notice with stellen/stehen, legen/liegen, hängen/hängen?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The placement verb (stellen, legen, transitive hängen) describes an action moving
                something to a place. That motion triggers Akkusativ (Wohin?). The position verb
                (stehen, liegen, intransitive hängen) describes where something already is. That
                stillness triggers Dativ (Wo?). Every pair follows the same logic: action =
                Akkusativ, position = Dativ.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">ELABORATE</span>
            <p>
              Why does German split placement and position into separate verbs? English uses "put"
              and "is" for both. What does German gain by forcing this distinction?
            </p>
            <details className="lrn-elaborate-reveal">
              <summary>Expert explanation</summary>
              <p>
                German encodes the action-versus-state contrast directly into the verb. "Ich stelle"
                forces you to think about an active placement; "es steht" forces you to think about
                a static state. This locks the case (Akkusativ for action, Dativ for state) into the
                verb choice, so the grammar self-checks. You cannot confuse motion with location
                once you pick the right verb pair.
              </p>
            </details>
          </div>

          <h3>Saying What You Like: gefallen and passen</h3>
          <p>
            A few verbs send their person into the Dativ instead of treating them as the subject.
            For talking about an apartment, two matter most: <strong>gefallen</strong> (to please /
            to like) and <strong>passen</strong> (to suit).
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Das Zimmer gefällt mir.</strong> (I like the room.)
            </li>
            <li>
              <strong>Die Wohnung passt uns.</strong> (The apartment suits us.)
            </li>
          </ul>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does "gefallen" use Dativ instead of Akkusativ?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In English, "I like the room" makes "I" the subject. In German, the room is the
                subject and "me" is the Dativ object: <strong>Das Zimmer gefällt mir.</strong> The
                room pleases me. The verb describes an effect on the person, not an action by the
                person.
              </p>
            </details>
          </div>

          <h3>Modal Verb: dürfen (may / allowed to)</h3>
          <p>
            A modal verb sets the mood of another verb. dürfen is the "may / allowed to" modal; you
            use it for house rules and permission. It follows the standard modal pattern: no ending
            on ich and er/sie/es.
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
                <td>darf</td>
              </tr>
              <tr>
                <td>du</td>
                <td>darfst</td>
              </tr>
              <tr>
                <td>er/sie/es</td>
                <td>darf</td>
              </tr>
              <tr>
                <td>wir</td>
                <td>dürfen</td>
              </tr>
              <tr>
                <td>ihr</td>
                <td>dürft</td>
              </tr>
              <tr>
                <td>sie/Sie</td>
                <td>dürfen</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>man</strong> means "one" or "you" in a general rule. Use it when a rule applies
            to everyone, not just one person.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Darf ich hier rauchen?</strong> (May I smoke here?)
            </li>
            <li>
              <strong>Hier darf man keine Haustiere haben.</strong> (You are not allowed to have
              pets here.)
            </li>
          </ul>
          <div className="lrn-insight">
            <p>
              <strong>Word order:</strong> the modal (darf) sits in second position. The main verb
              (rauchen, haben) drops to the end of the clause as an infinitive. See it in "Hier darf
              man keine Haustiere <em>haben</em>." You can now ask for and state permission with any
              house rule.
            </p>
          </div>

          <h3>Dialogue: Wohnungsbesichtigung (Apartment Viewing)</h3>
          <div className="lrn-callout">
            <span className="lrn-callout-label">Dialog</span>
            <p>
              <strong>A:</strong> Guten Tag. Ich möchte die Wohnung besichtigen.
            </p>
            <p>
              <strong>B:</strong> Natürlich. Die Wohnung hat drei Zimmer.
            </p>
            <p>
              <strong>A:</strong> Wie hoch ist die Miete?
            </p>
            <p>
              <strong>B:</strong> 900 Euro kalt. Die Nebenkosten sind 150 Euro extra.
            </p>
            <p>
              <strong>A:</strong> Ist die Wohnung möbliert?
            </p>
            <p>
              <strong>B:</strong> Nein, sie ist unmöbliert.
            </p>
            <p>
              <strong>A:</strong> Wann ist sie frei?
            </p>
            <p>
              <strong>B:</strong> Frei ab dem ersten August.
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-2" className="lrn-section">
          <div className="lrn-header">
            <h2>City, Travel and Daily Life</h2>
          </div>
          <p>
            Use these words when asking for directions, booking accommodation, or describing your
            day.
          </p>

          <h3>Time and Scheduling</h3>
          <p>
            Renting and city life run on the clock. You set a viewing time, you ask when the
            apartment is free, you agree quiet hours. First learn to tell the time, then the words
            that schedule your day.
          </p>

          <h4>Telling the Time</h4>
          <p>
            You ask <strong>Wie spät ist es?</strong> (What time is it?). You answer with{' '}
            <strong>Es ist ... Uhr.</strong>
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Es ist zehn Uhr.</strong> (It is ten o'clock.)
            </li>
            <li>
              <strong>Viertel nach zehn</strong> = quarter past ten (10:15).
            </li>
            <li>
              <strong>Viertel vor elf</strong> = quarter to eleven (10:45).
            </li>
            <li>
              <strong>halb elf</strong> = half past ten (10:30).
            </li>
          </ul>
          <div className="lrn-warning">
            <span className="lrn-warning-label">Watch out</span>
            <p>
              German counts <strong>halb</strong> toward the next hour. So <strong>halb elf</strong>{' '}
              is 10:30, not 11:30. Read it as "half on the way to eleven."
            </p>
          </div>
          <p>
            To set a time for an event, use <strong>um</strong>:{' '}
            <strong>Die Besichtigung ist um zehn Uhr.</strong> (The viewing is at ten o'clock.) You
            can now ask the time, answer it, and book an appointment.
          </p>

          <h4>Time Vocabulary</h4>
          <p>
            <strong>die Uhrzeit</strong> joins <em>Uhr</em> (clock) and <em>Zeit</em> (time): the
            time as shown on a clock. Use the table below to talk about parts of the day and how
            often something happens.
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
                <th>Artikel</th>
                <th>Plural</th>
                <th>Hinweis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>die Stunde</td>
                <td>hour</td>
                <td>die</td>
                <td>-n</td>
                <td>60 minutes</td>
              </tr>
              <tr>
                <td>die Tageszeit</td>
                <td>time of day</td>
                <td>die</td>
                <td>-en</td>
                <td>morning, afternoon, evening</td>
              </tr>
              <tr>
                <td>die Uhr</td>
                <td>clock, hour, o'clock</td>
                <td>die</td>
                <td>-en</td>
                <td>Um 10 Uhr = at 10 o'clock</td>
              </tr>
              <tr>
                <td>die Uhrzeit</td>
                <td>time (on clock)</td>
                <td>die</td>
                <td>-en</td>
                <td>What time is it?</td>
              </tr>
              <tr>
                <td>der Vormittag</td>
                <td>morning, forenoon</td>
                <td>der</td>
                <td>-e</td>
                <td>before midday</td>
              </tr>
              <tr>
                <td>der Wecker</td>
                <td>alarm clock</td>
                <td>der</td>
                <td>-</td>
                <td>plural unchanged</td>
              </tr>
              <tr>
                <td>täglich</td>
                <td>daily</td>
                <td>-</td>
                <td>-</td>
                <td>adjective/adverb</td>
              </tr>
              <tr>
                <td>tagsüber</td>
                <td>during the day</td>
                <td>-</td>
                <td>-</td>
                <td>adverb</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-definition">
            <span className="lrn-definition-term">übermorgen</span>
            <div className="lrn-definition-desc">
              <p>day after tomorrow</p>
              <p>
                Compare: <strong>morgen</strong> = tomorrow, <strong>übermorgen</strong> = day after
                tomorrow, <strong>vorgestern</strong> = day before yesterday.
              </p>
            </div>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
                <th>Notiz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>wann?</td>
                <td>when?</td>
                <td>question word</td>
              </tr>
              <tr>
                <td>wie lange?</td>
                <td>how long?</td>
                <td>Wie lange möchten Sie bleiben?</td>
              </tr>
              <tr>
                <td>von ... bis ...</td>
                <td>from ... to ...</td>
                <td>von Montag bis Freitag</td>
              </tr>
              <tr>
                <td>um</td>
                <td>at (time)</td>
                <td>um 10 Uhr</td>
              </tr>
              <tr>
                <td>unterwegs</td>
                <td>on the way</td>
                <td>adverb</td>
              </tr>
            </tbody>
          </table>

          <h3>City Places and Transport</h3>
          <p>
            Now you can place these landmarks with the two-way prepositions you learned. A fixed
            location answers Wo? and takes Dativ:{' '}
            <strong>Der Supermarkt ist neben dem Theater.</strong> (The supermarket is next to the
            theatre.)
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
                <th>Artikel</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>der Stadtplan</td>
                <td>city map</td>
                <td>der</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>das Stadtzentrum</td>
                <td>city centre</td>
                <td>das</td>
                <td>die Stadtzentren</td>
              </tr>
              <tr>
                <td>die Straße</td>
                <td>street</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>der Supermarkt</td>
                <td>supermarket</td>
                <td>der</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>das Theater</td>
                <td>theatre</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Theaterstück</td>
                <td>theatre play</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Tiefgarage</td>
                <td>underground garage</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Touristeninformation</td>
                <td>tourist information centre</td>
                <td>die</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Zug</td>
                <td>train</td>
                <td>der</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>das Zentrum</td>
                <td>centre</td>
                <td>das</td>
                <td>die Zentren</td>
              </tr>
            </tbody>
          </table>

          <h3>Accommodation and Hotel</h3>
          <p>You use these words when checking into a hotel or describing a room.</p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
                <th>Artikel</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>die Zimmeranzahl</td>
                <td>number of rooms</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>die Zimmerausstattung</td>
                <td>room equipment</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>die Zimmernummer</td>
                <td>room number</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>der Zimmersafe</td>
                <td>room safe</td>
                <td>der</td>
                <td>-s</td>
              </tr>
              <tr>
                <td>der Zimmerschlüssel</td>
                <td>room key</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das WC</td>
                <td>toilet</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Toilettenpapier</td>
                <td>toilet paper</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>voll</td>
                <td>full</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>unbedingt</td>
                <td>absolutely</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-definition">
            <span className="lrn-definition-term">übernachten [er übernachtet]</span>
            <div className="lrn-definition-desc">
              <p>to stay overnight</p>
              <p>Example: Er übernachtet im Hotel. (He is staying in a hotel.)</p>
            </div>
          </div>

          <h3>Tickets and Passes</h3>
          <p>
            You use these words when buying transport tickets or museum entry at the box office.
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
                <th>Artikel</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>die Studentenkarte</td>
                <td>student card</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Tageskarte</td>
                <td>day ticket</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Eintrittskarte</td>
                <td>admission ticket</td>
                <td>die</td>
                <td>-n</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">ELABORATE</span>
            <p>
              <strong>die Eintrittskarte</strong> breaks into: Eintritt (entry) + Karte (card).
            </p>
            <p>
              As you saw in Unit 5, a German compound noun takes the article of its last word. Karte
              = die, so die Eintrittskarte.
            </p>
            <p>Example: Wie viel kostet eine Eintrittskarte? (How much is the admission fee?)</p>
          </div>

          <div className="lrn-insight">
            <p>
              <strong>Gender heuristic:</strong> nouns ending in <em>-e</em>, <em>-heit</em>,{' '}
              <em>-keit</em>, or <em>-ung</em> are almost always feminine (die). The <em>-ung</em>{' '}
              ending is the most reliable: die Wohnung, die Verabschiedung, die Zimmerausstattung.
            </p>
          </div>

          <h3>Useful Verbs and Phrases (City Life)</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>unternehmen [er unternimmt]</td>
                <td>to undertake, to do something</td>
                <td>Ich möchte etwas unternehmen.</td>
              </tr>
              <tr>
                <td>unterschreiben</td>
                <td>to sign something</td>
                <td>ein Formular unterschreiben</td>
              </tr>
              <tr>
                <td>zeigen</td>
                <td>to show something</td>
                <td>Zeigen Sie mir den Weg.</td>
              </tr>
              <tr>
                <td>zahlen</td>
                <td>to pay</td>
                <td>Ich möchte zahlen.</td>
              </tr>
              <tr>
                <td>wünschen</td>
                <td>to wish</td>
                <td>Sie wünschen? (What would you like?)</td>
              </tr>
              <tr>
                <td>weg</td>
                <td>gone</td>
                <td>Der Schlüssel ist weg.</td>
              </tr>
            </tbody>
          </table>

          <h3>Useful Words (Descriptions and Adjectives)</h3>
          <p>
            You hear these words in everyday situations: describing hotel conditions, asking about
            prices, or expressing opinions about a city.
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>stabil</td>
                <td>stable</td>
                <td>Die Verbindung ist stabil.</td>
              </tr>
              <tr>
                <td>technisch</td>
                <td>technical</td>
                <td>Das Problem ist technisch.</td>
              </tr>
              <tr>
                <td>uninteressant</td>
                <td>uninteresting</td>
                <td>Das Programm ist uninteressant.</td>
              </tr>
              <tr>
                <td>unwichtig</td>
                <td>unimportant</td>
                <td>Das ist unwichtig.</td>
              </tr>
              <tr>
                <td>weich</td>
                <td>soft</td>
                <td>Das Bett ist weich.</td>
              </tr>
              <tr>
                <td>wenig</td>
                <td>little, a few</td>
                <td>wenig Zeit haben</td>
              </tr>
              <tr>
                <td>wenn</td>
                <td>if, when</td>
                <td>Wenn Sie möchten...</td>
              </tr>
            </tbody>
          </table>

          <h3>Greetings and Farewells</h3>
          <p>
            You met the greeting words in Unit 1. Here they apply to host families and hotels:
            tschüss stays informal, Auf Wiedersehen stays formal.
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
                <th>Register</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tschüss / tschüs</td>
                <td>bye, goodbye</td>
                <td>informal</td>
              </tr>
              <tr>
                <td>das Wiedersehen</td>
                <td>goodbye (Auf Wiedersehen!)</td>
                <td>formal</td>
              </tr>
              <tr>
                <td>die Verabschiedung</td>
                <td>farewell, leave-taking</td>
                <td>noun</td>
              </tr>
              <tr>
                <td>die Gastfamilie</td>
                <td>host family</td>
                <td>Ich wohne bei meiner Gastfamilie.</td>
              </tr>
            </tbody>
          </table>

          <h3>Other City Vocabulary</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
                <th>Artikel</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>die Technik</td>
                <td>technology, technics</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>die Tür</td>
                <td>door</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>die Unterschrift</td>
                <td>signature</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>der Wunsch</td>
                <td>wish, desire</td>
                <td>der</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>wie viel?</td>
                <td>how much?</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>bald</td>
                <td>soon</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>weitergehen</td>
                <td>to walk on, carry on</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>wen?</td>
                <td>whom? (accusative)</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Apply the gender heuristic: why do <strong>die Stunde</strong>,{' '}
              <strong>die Tageszeit</strong>, and <strong>die Uhrzeit</strong> all use <em>die</em>?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>Stunde</em> ends in <em>-e</em>, so it is feminine. <em>Tageszeit</em> and{' '}
                <em>Uhrzeit</em> end in <em>-zeit</em>; Zeit is the last word and it is feminine, so
                the compound is feminine too.
              </p>
            </details>
          </div>
        </div>
      </>
    ]
  },

  practice: [
    {
      q: 'What is the difference between "mieten" and "vermieten"? Give one sentence for each.',
      a: '"mieten" = the tenant rents (pays to use). "vermieten" = the landlord rents out (receives payment). Ich miete eine Wohnung. (I am renting an apartment.) Er vermietet das Zimmer. (He is renting out the room.) The prefix "ver-" marks the other side of the transaction.'
    },
    {
      q: 'Translate to German: "The sofa is standing in front of the window." Use the correct case.',
      a: 'Das Sofa steht vor dem Fenster. "stehen" is the position verb for upright objects. "vor" is a two-way preposition. The sofa is in a fixed position (Wo?), so use Dativ: dem Fenster (neuter Dativ).'
    },
    {
      q: 'Translate to German: "I am putting the sofa in front of the window." Use the correct case.',
      a: 'Ich stelle das Sofa vor das Fenster. "stellen" is the placement verb for upright objects. "vor" is a two-way preposition. The action moves the sofa (Wohin?), so use Akkusativ: das Fenster (neuter Akkusativ).'
    },
    {
      q: 'What is the difference between "stehen" and "stellen"? Give an example sentence for each.',
      a: '"stehen" describes a static upright position (Wo?): Das Regal steht an der Wand. (The shelf is standing against the wall.) "stellen" describes the action of placing upright (Wohin?): Ich stelle das Regal an die Wand. (I am putting the shelf against the wall.) stehen = Dativ. stellen = Akkusativ.'
    },
    {
      q: 'What is the difference between "liegen" and "legen"? Give an example for each.',
      a: '"liegen" = to lie (static, Wo?, Dativ): Das Buch liegt auf dem Tisch. "legen" = to lay flat (action, Wohin?, Akkusativ): Ich lege das Buch auf den Tisch. The same Wo/Wohin logic as stehen/stellen.'
    },
    {
      q: 'Name the nine two-way prepositions in German.',
      a: 'an, auf, hinter, in, neben, über, unter, vor, zwischen. They all take Dativ for static position (Wo?) and Akkusativ for movement (Wohin?).'
    },
    {
      q: 'Translate: "I like the apartment." Use gefallen.',
      a: 'Die Wohnung gefällt mir. With gefallen, the thing you like is the SUBJECT (die Wohnung). The person is the Dativ object (mir). Never say "Ich gefalle die Wohnung".'
    },
    {
      q: 'Translate: "The apartment suits us."',
      a: 'Die Wohnung passt uns. "passen" takes a Dativ object. "uns" is the Dativ form of "wir".'
    },
    {
      q: 'Give the Dativ form of these pronouns: ich, du, wir, Sie (formal).',
      a: 'ich → mir, du → dir, wir → uns, Sie → Ihnen. These are the person-forms you use after a Dativ preposition (mit mir, bei dir) or a Dativ verb (Das gefällt mir).'
    },
    {
      q: 'It is 10:30. How do you say the time in German, and why is the hour word "elf"?',
      a: 'Es ist halb elf. German counts halb toward the NEXT hour, so half past ten is "halb elf" (half on the way to eleven). Warning: halb elf is 10:30, not 11:30.'
    },
    {
      q: 'What do KM and NK stand for in a German apartment advertisement?',
      a: 'KM = Kaltmiete (cold rent, base rent without utilities). NK = Nebenkosten (additional costs: water, heating, building maintenance). Always ask: Sind die Nebenkosten inklusive?'
    },
    {
      q: 'Translate: "Are the utilities included?"',
      a: 'Sind die Nebenkosten inklusive? die Nebenkosten is always plural in German. inklusive stays unchanged.'
    },
    {
      q: 'What is the conjugation of dürfen for all six persons?',
      a: 'ich darf, du darfst, er/sie/es darf, wir dürfen, ihr dürft, sie/Sie dürfen. Like all modal verbs, ich and er/sie/es share the same form (darf) with no personal ending.'
    },
    {
      q: 'Translate: "You are not allowed to smoke here."',
      a: 'Hier darf man nicht rauchen. Use man (one/you in general) for a general rule. darf = er/sie/es form of dürfen. nicht rauchen goes to the end as the infinitive after the modal.'
    },
    {
      q: 'Which dative prepositions never change case? List all eight.',
      a: 'aus, bei, mit, nach, seit, von, zu, gegenüber. Memory phrase: "Aus bei mit nach seit von zu" plus gegenüber. All eight always trigger Dativ.'
    },
    {
      q: 'Which accusative prepositions never change case? List all five.',
      a: 'durch, für, gegen, ohne, um. Memory: "durch für gegen ohne um". All five always trigger Akkusativ.'
    },
    {
      q: 'Translate: "I walk through the park."',
      a: 'Ich gehe durch den Park. "durch" always takes Akkusativ. der Park is masculine, Akkusativ = den.'
    },
    {
      q: 'What is "in der Nähe von" and what case does it require?',
      a: '"in der Nähe von" = near/close to. It always requires Dativ. Example: in der Nähe vom Supermarkt (vom = von dem, contracted).'
    },
    {
      q: 'Translate: "The apartment is available from the first of March."',
      a: 'Die Wohnung ist frei ab dem ersten März. "frei ab" = available from. "dem ersten März" uses Dativ because "ab" is a Dativ preposition.'
    },
    {
      q: 'What is the difference between "zu Hause" and "nach Hause"?',
      a: '"zu Hause" = at home (static, Wo?): Ich bin zu Hause. "nach Hause" = going home (direction, Wohin?): Ich fahre nach Hause. "nach Hause" is a fixed phrase. Use it after movement verbs.'
    },
    {
      q: 'How do you say "The book belongs to the teacher" in German?',
      a: 'Das Buch gehört dem Lehrer. "gehören" takes a Dativ object. dem Lehrer = Dativ masculine definite article. The thing owned is the subject.'
    },
    {
      q: 'What does "übernachten" mean? Give an example sentence.',
      a: '"übernachten" = to stay overnight. Er übernachtet im Hotel. (He is staying in a hotel.) "im" = in dem (Dativ, static location).'
    },
    {
      q: 'How do you say "The room is for the guest" in German?',
      a: 'Das Zimmer ist für den Gast. "für" always takes Akkusativ. der Gast is masculine, Akkusativ = den Gast.'
    },
    {
      q: 'Translate: "How much does the admission ticket cost?"',
      a: 'Wie viel kostet eine Eintrittskarte? "kosten" conjugates as "kostet" for er/sie/es. die Eintrittskarte is feminine, indefinite Akkusativ = eine Eintrittskarte.'
    },
    {
      q: 'TRANSFER: You learned "Das Sofa steht vor dem Fenster" (stehen, static, Dativ). Now say "The wardrobe is standing next to the desk."',
      a: 'Der Kleiderschrank steht neben dem Schreibtisch. Same logic: neben is a two-way preposition. The wardrobe is in a static position (Wo?), so use Dativ: dem Schreibtisch (masculine Dativ).'
    },
    {
      q: 'TRANSFER: You learned "Ich stelle das Sofa vor das Fenster" (stellen, action, Akkusativ). Now say "I am putting the lamp on the table."',
      a: 'Ich stelle die Lampe auf den Tisch. "stellen" = placement verb for upright objects. "auf" is two-way. Movement (Wohin?) = Akkusativ: den Tisch (masculine Akkusativ). If the lamp is flat, use "legen" instead.'
    }
  ],

  reference: {
    category: 'Quick Reference',
    title: 'Zuhause und Haushalt',
    sections: [
      <>
        <h2>Two-Way Prepositions: Wo? vs Wohin?</h2>
        <p>
          When to use: every time you place something or describe where something is. Wo? (static
          location) = Dativ. Wohin? (direction/movement) = Akkusativ.
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Preposition</th>
              <th>Wo? (Dativ) example</th>
              <th>Wohin? (Akkusativ) example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>vor</td>
              <td>Das Sofa steht vor dem Fenster.</td>
              <td>Ich stelle das Sofa vor das Fenster.</td>
            </tr>
            <tr>
              <td>auf</td>
              <td>Das Buch liegt auf dem Tisch.</td>
              <td>Ich lege das Buch auf den Tisch.</td>
            </tr>
            <tr>
              <td>neben</td>
              <td>Der Schrank steht neben dem Bett.</td>
              <td>Ich stelle den Schrank neben das Bett.</td>
            </tr>
            <tr>
              <td>an</td>
              <td>Das Bild hängt an der Wand.</td>
              <td>Ich hänge das Bild an die Wand.</td>
            </tr>
            <tr>
              <td>in</td>
              <td>Ich bin in der Küche.</td>
              <td>Ich gehe in die Küche.</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Placement vs. Position Verb Pairs</h2>
        <p>
          When to use: choose the verb before choosing the case. Action verb = Akkusativ. Position
          verb = Dativ.
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Action (Wohin? Akkusativ)</th>
              <th>Position (Wo? Dativ)</th>
              <th>Object type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>stellen</td>
              <td>stehen</td>
              <td>upright objects</td>
            </tr>
            <tr>
              <td>legen</td>
              <td>liegen</td>
              <td>flat objects</td>
            </tr>
            <tr>
              <td>hängen (transitive)</td>
              <td>hängen (intransitive)</td>
              <td>hung objects</td>
            </tr>
            <tr>
              <td>setzen</td>
              <td>sitzen</td>
              <td>persons/seated objects</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Dative Case of Articles</h2>
        <p>
          When to use: after Dativ prepositions and with Dativ verbs (helfen, gefallen, passen,
          gehören).
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Article type</th>
              <th>Maskulin</th>
              <th>Feminin</th>
              <th>Neutrum</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>definite (the)</td>
              <td>dem</td>
              <td>der</td>
              <td>dem</td>
              <td>den</td>
            </tr>
            <tr>
              <td>indefinite (a)</td>
              <td>einem</td>
              <td>einer</td>
              <td>einem</td>
              <td>-</td>
            </tr>
            <tr>
              <td>negative (no)</td>
              <td>keinem</td>
              <td>keiner</td>
              <td>keinem</td>
              <td>keinen</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Apartment Vocabulary: Key Terms</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>die Kaltmiete (KM)</td>
              <td>base rent (without utilities)</td>
            </tr>
            <tr>
              <td>die Nebenkosten (NK)</td>
              <td>additional costs / utilities</td>
            </tr>
            <tr>
              <td>die Kaution</td>
              <td>deposit</td>
            </tr>
            <tr>
              <td>frei ab</td>
              <td>available from</td>
            </tr>
            <tr>
              <td>möbliert</td>
              <td>furnished</td>
            </tr>
            <tr>
              <td>unmöbliert</td>
              <td>unfurnished</td>
            </tr>
            <tr>
              <td>die Besichtigung</td>
              <td>viewing</td>
            </tr>
            <tr>
              <td>der Mietvertrag</td>
              <td>rental contract</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Rooms and Furniture</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>das Wohnzimmer</td>
              <td>living room</td>
            </tr>
            <tr>
              <td>das Schlafzimmer</td>
              <td>bedroom</td>
            </tr>
            <tr>
              <td>die Küche</td>
              <td>kitchen</td>
            </tr>
            <tr>
              <td>das Badezimmer</td>
              <td>bathroom</td>
            </tr>
            <tr>
              <td>das Arbeitszimmer</td>
              <td>study/home office</td>
            </tr>
            <tr>
              <td>der Flur / der Gang</td>
              <td>hallway</td>
            </tr>
            <tr>
              <td>der Keller</td>
              <td>cellar/basement</td>
            </tr>
            <tr>
              <td>der Dachboden</td>
              <td>attic</td>
            </tr>
            <tr>
              <td>das Sofa / die Couch</td>
              <td>sofa/couch</td>
            </tr>
            <tr>
              <td>der Schreibtisch</td>
              <td>desk</td>
            </tr>
            <tr>
              <td>der Kleiderschrank</td>
              <td>wardrobe</td>
            </tr>
            <tr>
              <td>die Waschmaschine</td>
              <td>washing machine</td>
            </tr>
            <tr>
              <td>der Kühlschrank</td>
              <td>refrigerator</td>
            </tr>
            <tr>
              <td>der Herd</td>
              <td>stove/cooker</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Dative Personal Pronouns</h2>
        <p>
          When to use: as the person after a Dativ preposition or a Dativ verb (gefallen, passen).
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Subject (Nominativ)</th>
              <th>Dativ form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>mir</td>
            </tr>
            <tr>
              <td>du</td>
              <td>dir</td>
            </tr>
            <tr>
              <td>er / es</td>
              <td>ihm</td>
            </tr>
            <tr>
              <td>sie (she)</td>
              <td>ihr</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>uns</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>euch</td>
            </tr>
            <tr>
              <td>sie (they)</td>
              <td>ihnen</td>
            </tr>
            <tr>
              <td>Sie (formal)</td>
              <td>Ihnen</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Preposition + Article Contractions</h2>
        <p>When to use: these short forms are the normal everyday choice. Use them by default.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Full form</th>
              <th>Contraction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>an dem</td>
              <td>am</td>
            </tr>
            <tr>
              <td>in dem</td>
              <td>im</td>
            </tr>
            <tr>
              <td>von dem</td>
              <td>vom</td>
            </tr>
            <tr>
              <td>zu dem</td>
              <td>zum</td>
            </tr>
            <tr>
              <td>zu der</td>
              <td>zur</td>
            </tr>
            <tr>
              <td>bei dem</td>
              <td>beim</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Modal Verb: dürfen (may / allowed to)</h2>
        <p>
          When to use: to ask for or state permission. The modal stays in second position; the main
          verb moves to the end as an infinitive.
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
              <td>darf</td>
            </tr>
            <tr>
              <td>du</td>
              <td>darfst</td>
            </tr>
            <tr>
              <td>er/sie/es</td>
              <td>darf</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>dürfen</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>dürft</td>
            </tr>
            <tr>
              <td>sie/Sie</td>
              <td>dürfen</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Plural Formation Patterns</h2>
        <p>
          When to use: A1 nouns fall into a few common plural patterns. Learn the pattern with each
          noun.
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>add -e</td>
              <td>der Tisch → die Tische</td>
            </tr>
            <tr>
              <td>add -e + umlaut</td>
              <td>der Stuhl → die Stühle</td>
            </tr>
            <tr>
              <td>add -n / -en</td>
              <td>die Lampe → die Lampen</td>
            </tr>
            <tr>
              <td>add -er + umlaut</td>
              <td>das Haus → die Häuser</td>
            </tr>
            <tr>
              <td>no change</td>
              <td>das Zimmer → die Zimmer</td>
            </tr>
            <tr>
              <td>add -s</td>
              <td>das Sofa → die Sofas</td>
            </tr>
          </tbody>
        </table>
        <p>
          Dativ plural adds -n to the noun unless the plural already ends in -n or -s: den Zimmern,
          den Häusern.
        </p>
      </>,

      <>
        <h2>Telling the Time</h2>
        <p>When to use: to ask and answer what time it is, or to set a time for an event.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wie spät ist es?</td>
              <td>What time is it?</td>
            </tr>
            <tr>
              <td>Es ist zehn Uhr.</td>
              <td>It is ten o'clock.</td>
            </tr>
            <tr>
              <td>Viertel nach zehn</td>
              <td>quarter past ten (10:15)</td>
            </tr>
            <tr>
              <td>halb elf</td>
              <td>half past ten (10:30)</td>
            </tr>
            <tr>
              <td>Viertel vor elf</td>
              <td>quarter to eleven (10:45)</td>
            </tr>
            <tr>
              <td>um zehn Uhr</td>
              <td>at ten o'clock</td>
            </tr>
          </tbody>
        </table>
        <p>Warning: halb counts toward the next hour. halb elf is 10:30, not 11:30.</p>
      </>
    ]
  },

  customCss: null
}

export default function HomeAndHousehold() {
  return <LearningTemplate config={config} />
}
