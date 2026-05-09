import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'fds',
  source: 'Begegnungen A1+ — Buscha/Szita',
  documentTitle: 'Food, Drink and Shopping: AETHER',
  learning: {
    category: 'Unit 5',
    title: 'Essen, Trinken und Einkaufen',
    subtitle: 'Food vocabulary, drink, cooking, shopping, quantities, and restaurant culture',
    sections: [
      <>
        <div className="lrn-header">
          <h1>Essen und Trinken</h1>
          <p>You learn vocabulary for breakfast, shopping, cooking, and eating out.</p>
          <p>
            You also learn key grammar: adjective endings, noun plurals, the verb <em>mögen</em>,
            the imperative, and the simple past of <em>sein</em> and <em>haben</em>.
          </p>
        </div>
      </>,

      <>
        <h2 id="lrn-section-0">Frühstück: Breakfast</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            What do you predict a typical German hotel breakfast includes: hot cooked dishes like in
            England, or mostly bread and cold items?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Hotel buffets are much larger than the home version: ham, cheese, eggs, fruit, and
              yogurt.
            </p>
          </details>
        </div>

        <h3>Getränke (Drinks)</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Article</th>
              <th>Plural</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Orangensaft</td>
              <td>der</td>
              <td>(same)</td>
              <td>orange juice</td>
            </tr>
            <tr>
              <td>Kaffee</td>
              <td>der</td>
              <td>(same)</td>
              <td>coffee</td>
            </tr>
            <tr>
              <td>Tee</td>
              <td>der</td>
              <td>(same)</td>
              <td>tea</td>
            </tr>
            <tr>
              <td>Kräutertee</td>
              <td>der</td>
              <td>(same)</td>
              <td>herbal tea</td>
            </tr>
            <tr>
              <td>Milch</td>
              <td>die</td>
              <td>(same)</td>
              <td>milk</td>
            </tr>
            <tr>
              <td>heiße Schokolade</td>
              <td>die</td>
              <td>(same)</td>
              <td>hot chocolate</td>
            </tr>
          </tbody>
        </table>

        <h3>Brot und Aufschnitt (Bread and Toppings)</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Article</th>
              <th>Plural</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brötchen</td>
              <td>das</td>
              <td>Brötchen</td>
              <td>bread roll</td>
            </tr>
            <tr>
              <td>Vollkornbrot</td>
              <td>das</td>
              <td>(same)</td>
              <td>wholegrain bread</td>
            </tr>
            <tr>
              <td>Weißbrot</td>
              <td>das</td>
              <td>(same)</td>
              <td>white bread</td>
            </tr>
            <tr>
              <td>Toastbrot</td>
              <td>das</td>
              <td>(same)</td>
              <td>toast bread</td>
            </tr>
            <tr>
              <td>Butter</td>
              <td>die</td>
              <td>(same)</td>
              <td>butter</td>
            </tr>
            <tr>
              <td>Margarine</td>
              <td>die</td>
              <td>(same)</td>
              <td>margarine</td>
            </tr>
            <tr>
              <td>Frischkäse</td>
              <td>der</td>
              <td>(same)</td>
              <td>cream cheese</td>
            </tr>
            <tr>
              <td>Marmelade</td>
              <td>die</td>
              <td>(same)</td>
              <td>jam</td>
            </tr>
            <tr>
              <td>Honig</td>
              <td>der</td>
              <td>(same)</td>
              <td>honey</td>
            </tr>
            <tr>
              <td>Schinken</td>
              <td>der</td>
              <td>(same)</td>
              <td>ham</td>
            </tr>
            <tr>
              <td>Salami</td>
              <td>die</td>
              <td>(same)</td>
              <td>salami</td>
            </tr>
            <tr>
              <td>Leberwurst</td>
              <td>die</td>
              <td>(same)</td>
              <td>liver sausage</td>
            </tr>
            <tr>
              <td>Lachs</td>
              <td>der</td>
              <td>(same)</td>
              <td>salmon</td>
            </tr>
          </tbody>
        </table>

        <h3>Milchprodukte und Eier (Dairy and Eggs)</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Article</th>
              <th>Plural</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Joghurt natur</td>
              <td>der / das</td>
              <td>(same)</td>
              <td>plain yogurt</td>
            </tr>
            <tr>
              <td>Joghurt mit Früchten</td>
              <td>der / das</td>
              <td>(same)</td>
              <td>fruit yogurt</td>
            </tr>
            <tr>
              <td>Ei (gekocht)</td>
              <td>das</td>
              <td>Eier</td>
              <td>egg (boiled)</td>
            </tr>
            <tr>
              <td>Rührei</td>
              <td>das</td>
              <td>Rühreier</td>
              <td>scrambled eggs</td>
            </tr>
          </tbody>
        </table>

        <h3>Obst zum Frühstück (Breakfast Fruit)</h3>
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
              <td>Apfel</td>
              <td>der</td>
              <td>apple</td>
            </tr>
            <tr>
              <td>Banane</td>
              <td>die</td>
              <td>banana</td>
            </tr>
            <tr>
              <td>Pflaume</td>
              <td>die</td>
              <td>plum</td>
            </tr>
            <tr>
              <td>Aprikose</td>
              <td>die</td>
              <td>apricot</td>
            </tr>
            <tr>
              <td>Birne</td>
              <td>die</td>
              <td>pear</td>
            </tr>
            <tr>
              <td>Weintrauben</td>
              <td>die (Pl.)</td>
              <td>grapes</td>
            </tr>
          </tbody>
        </table>

        <h3>Maß- und Mengenangaben (Quantities)</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ein Glas Orangensaft / Milch</td>
              <td>a glass of orange juice / milk</td>
            </tr>
            <tr>
              <td>eine Tasse Kaffee / Tee / Kräutertee</td>
              <td>a cup of coffee / tea / herbal tea</td>
            </tr>
            <tr>
              <td>eine Scheibe Brot / Lachs / Salami / Schinken</td>
              <td>a slice of bread / salmon / salami / ham</td>
            </tr>
            <tr>
              <td>zwei Scheiben Brot</td>
              <td>two slices of bread</td>
            </tr>
            <tr>
              <td>ein Ei / zwei Eier / Rühreier</td>
              <td>one egg / two eggs / scrambled eggs</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Culture: Das Frühstücksbüfett</span>
          <p>70% of hotel guests in Germany prefer a buffet-style breakfast.</p>
          <p>This style came from America.</p>
          <p>
            A normal German breakfast at home is simple: coffee or tea, bread rolls, butter, and
            jam.
          </p>
          <p>
            A hotel breakfast costs around 20 euros. At the Hotel Adlon in Berlin, it costs 40
            euros.
          </p>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Order a breakfast item</span>
            <p>Goal: ask for "a glass of orange juice and two bread rolls" in German.</p>
            <p>
              Step 1: pick the polite verb form. Use <em>Ich möchte</em> (I would like).
            </p>
            <p>
              Step 2: build each container phrase. <em>ein Glas Orangensaft</em> = a glass of orange
              juice. <em>zwei Brötchen</em> = two bread rolls.
            </p>
            <p>
              Step 3: connect with <em>und</em> and end with <em>bitte</em>. Result:
              <strong> Ich möchte ein Glas Orangensaft und zwei Brötchen, bitte.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why do you say <em>ein Glas Orangensaft</em> with no preposition between <em>Glas</em>{' '}
            and <em>Orangensaft</em>?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              German places the container word and the contents directly side by side. No word for
              "of" is needed.
            </p>
            <p>
              Compare: English needs "a glass <em>of</em> juice". German just says{' '}
              <em>ein Glas Saft</em>.
            </p>
            <p>
              This is called noun apposition. The two nouns sit together and the meaning is clear
              from context.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German breakfast vocabulary keeps each noun in its grammatical gender (der, die, das).
          </p>
          <p>
            You must learn each item with its article. For example: <em>der Kaffee</em>,{' '}
            <em>die Milch</em>, <em>das Brötchen</em>.
          </p>
          <p>
            This matters later because the article controls adjective endings and pronouns. Saying
            "I drink it" needs the right pronoun: <em>er</em> for masculine drinks, <em>sie</em> for
            feminine drinks, <em>es</em> for neuter drinks.
          </p>
        </div>
      </>,

      <>
        <h2 id="lrn-section-1">Dialog: Frühstück im Hotel</h2>
        <p>Norbert and Peter are hotel guests. A Kellnerin (waitress) takes their orders.</p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            What phrase do you think Peter uses to say "I'll have two boiled eggs"? Does German use
            the verb <em>nehmen</em> (to take) or <em>haben</em> (to have)?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Germans commonly say <strong>Ich nehme …</strong> (I'll take / I'll have) when
              ordering food.
            </p>
            <p>
              The verb <em>nehmen</em> has a stem vowel change:{' '}
              <em>ich nehme, du nimmst, er nimmt</em>.
            </p>
          </details>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Was darf es sein?</td>
              <td>What can I get you?</td>
            </tr>
            <tr>
              <td>Ich nehme zwei Eier und eine Tasse Kaffee.</td>
              <td>I'll have two eggs and a cup of coffee.</td>
            </tr>
            <tr>
              <td>Ich möchte ein Glas Orangensaft, bitte.</td>
              <td>I would like a glass of orange juice, please.</td>
            </tr>
            <tr>
              <td>Und zum Essen?</td>
              <td>And to eat?</td>
            </tr>
            <tr>
              <td>Bitte, sehr schön.</td>
              <td>Here you are.</td>
            </tr>
          </tbody>
        </table>

        <h3>Verb: nehmen (stem-vowel change)</h3>
        <p>
          The verb <em>nehmen</em> changes its stem vowel in the <em>du</em> and <em>er/sie/es</em>{' '}
          forms.
        </p>
        <p>This is called a stem-vowel change: it is common in German irregular verbs.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>nehmen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>nehme</td>
            </tr>
            <tr>
              <td>du</td>
              <td>nimmst</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>nimmt</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>nehmen</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>nehmt</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>nehmen</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does <em>du nimmst</em> have a double <em>m</em> and the vowel change from{' '}
            <em>e</em> to <em>i</em>?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The <em>e → i</em> change is a fixed property of this verb class in German: you
              memorize it per verb.
            </p>
            <p>
              The double <em>m</em> appears because the stem ends in a short vowel sound before a
              single consonant, and the <em>-st</em> ending follows directly.
            </p>
            <p>
              This doubling preserves the short vowel sound: <em>nimmt</em>, not <em>nimt</em>.
            </p>
          </details>
        </div>

        <h3>Verb: essen (stem-vowel change)</h3>
        <p>
          The verb <em>essen</em> also changes its stem vowel in <em>du</em> and <em>er/sie/es</em>.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>essen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>esse</td>
            </tr>
            <tr>
              <td>du</td>
              <td>isst</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>isst</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>essen</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>esst</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>essen</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Both <em>du</em> and <em>er</em> forms of <em>essen</em> are <em>isst</em>.
          </p>
          <p>
            This happens because the verb stem already ends in <em>-s</em>.
          </p>
          <p>
            In German, when the stem ends in <em>-s</em>, the <em>du</em> ending <em>-st</em> drops
            its <em>s</em> and becomes just <em>-t</em>: <em>iss + t = isst</em>.
          </p>
          <p>
            So <em>du isst</em> and <em>er isst</em> look identical: context tells you which person
            is meant.
          </p>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Use nehmen in a real order</span>
            <p>
              Goal: a friend orders for the table. Build the sentence "He takes two boiled eggs and
              a coffee."
            </p>
            <p>
              Step 1: pick the right form of <em>nehmen</em> for <em>er</em>. Apply the stem-vowel
              change <em>e to i</em>: <em>er nimmt</em>.
            </p>
            <p>
              Step 2: add the objects in the correct accusative form. <em>zwei Eier</em> (plural, no
              change) and <em>einen Kaffee</em> (masculine accusative needs <em>einen</em>).
            </p>
            <p>
              Step 3: connect with <em>und</em>. Result:
              <strong> Er nimmt zwei Eier und einen Kaffee.</strong>
            </p>
          </div>
        </div>
      </>,

      <>
        <h2 id="lrn-section-2">Adjektive für Essen: Food Adjectives</h2>
        <p>
          Use food adjectives when describing how something tastes. When an adjective comes before a
          noun with no article, it must carry the gender signal itself.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            When you say "raw ham" in German without using an article (<em>ohne Artikel</em>), what
            ending does the adjective take: <em>roher Schinken</em> or <em>roh Schinken</em>?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The adjective takes a special ending when no article is present:{' '}
              <em>roher Schinken</em>.
            </p>
            <p>Without an article, the adjective must carry the gender information by itself.</p>
            <p>
              The ending <em>-er</em> signals masculine nominative: the same signal the definite
              article <em>der</em> would give.
            </p>
          </details>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kalt</td>
              <td>cold</td>
            </tr>
            <tr>
              <td>hart</td>
              <td>hard</td>
            </tr>
            <tr>
              <td>alt</td>
              <td>old</td>
            </tr>
            <tr>
              <td>süß</td>
              <td>sweet</td>
            </tr>
            <tr>
              <td>weich</td>
              <td>soft</td>
            </tr>
            <tr>
              <td>heiß</td>
              <td>hot</td>
            </tr>
            <tr>
              <td>frisch</td>
              <td>fresh</td>
            </tr>
            <tr>
              <td>gekocht</td>
              <td>cooked / boiled</td>
            </tr>
            <tr>
              <td>sauer</td>
              <td>sour</td>
            </tr>
            <tr>
              <td>salzig</td>
              <td>salty</td>
            </tr>
            <tr>
              <td>scharf</td>
              <td>spicy</td>
            </tr>
            <tr>
              <td>roh</td>
              <td>raw</td>
            </tr>
            <tr>
              <td>warm</td>
              <td>warm</td>
            </tr>
          </tbody>
        </table>

        <h3>Adjektive ohne Artikel (Adjectives without an Article)</h3>
        <p>
          When you use an adjective before a noun and there is no article, the adjective takes a
          strong ending.
        </p>
        <p>The strong ending carries the gender signal that the article would normally give.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Gender</th>
              <th>Nominativ</th>
              <th>Akkusativ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maskulin</td>
              <td>roher Schinken</td>
              <td>rohen Schinken</td>
            </tr>
            <tr>
              <td>Feminin</td>
              <td>kalte Milch</td>
              <td>kalte Milch</td>
            </tr>
            <tr>
              <td>Neutrum</td>
              <td>altes Brot</td>
              <td>altes Brot</td>
            </tr>
            <tr>
              <td>Plural</td>
              <td>gekochte Eier</td>
              <td>gekochte Eier</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Key Pattern</span>
          <p>
            Only masculine nouns change between nominative and accusative:{' '}
            <strong>roher → rohen</strong>.
          </p>
          <p>Feminine, neuter, and plural forms stay the same in both cases.</p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does only the masculine form change from <em>-er</em> to <em>-en</em> in the
            accusative?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              German marks the direct object (accusative) differently from the subject (nominative)
              only for masculine nouns.
            </p>
            <p>
              This is the same system as the definite article: <em>der</em> (nominative) becomes{' '}
              <em>den</em> (accusative) for masculine nouns.
            </p>
            <p>
              All other genders look identical in nominative and accusative, so their adjective
              endings do not change either.
            </p>
          </details>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Nominativ (subject)</span>
            <p>
              <em>Roher Schinken</em> liegt auf dem Teller.
            </p>
            <p>Raw ham is on the plate.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Akkusativ (direct object)</span>
            <p>
              Ich esse <em>rohen Schinken</em>.
            </p>
            <p>I am eating raw ham.</p>
          </div>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Adjective with no article</span>
            <p>
              Goal: say "I drink cold milk" with no article (general statement, not a specific
              glass).
            </p>
            <p>
              Step 1: identify the noun and case. <em>Milch</em> is feminine, accusative (direct
              object of <em>trinke</em>).
            </p>
            <p>
              Step 2: with no article, the adjective must carry the gender signal. Feminine
              accusative ending is <em>-e</em>: <em>kalte</em>.
            </p>
            <p>
              Step 3: build the sentence. Result: <strong>Ich trinke kalte Milch.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German nouns must always show their gender and case. The article (der, ein) usually
            carries this signal.
          </p>
          <p>
            When you remove the article, the signal must move somewhere. It moves to the adjective
            ending.
          </p>
          <p>
            That is why <em>roher Schinken</em> (no article) and <em>der Schinken</em> share the
            same <em>-er</em> ending. Both signal masculine nominative.
          </p>
        </div>
      </>,

      <>
        <h2 id="lrn-section-3">Die Nomengruppe: The Noun Group</h2>
        <p>
          The ending on the adjective changes depending on which article is used and what case the
          noun is in.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            If you say <em>ein roher Schinken</em> (indefinite article), do you think the adjective
            ending is the same as in <em>roher Schinken</em> (no article)?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes: in nominative masculine, both <em>ein roher</em> and <em>roher</em> (no article)
              use the ending <em>-er</em>.
            </p>
            <p>
              This is because <em>ein</em> does not show gender in masculine nominative: it looks
              the same as the neuter nominative form.
            </p>
            <p>
              So the adjective must carry the <em>-er</em> signal to show the noun is masculine.
            </p>
          </details>
        </div>

        <h3>Nominativ und Akkusativ: Full Declension Table</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Artikel</th>
              <th>Maskulin</th>
              <th>Feminin</th>
              <th>Neutrum</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Definiter Artikel (Nom.)</td>
              <td>der rohe Schinken</td>
              <td>die kalte Milch</td>
              <td>das alte Brot</td>
              <td>die gekochten Eier</td>
            </tr>
            <tr>
              <td>Definiter Artikel (Akk.)</td>
              <td>den rohen Schinken</td>
              <td>die kalte Milch</td>
              <td>das alte Brot</td>
              <td>die gekochten Eier</td>
            </tr>
            <tr>
              <td>Indefiniter Artikel (Nom.)</td>
              <td>ein roher Schinken</td>
              <td>eine kalte Milch</td>
              <td>ein altes Brot</td>
              <td>(no article) gekochte Eier</td>
            </tr>
            <tr>
              <td>Indefiniter Artikel (Akk.)</td>
              <td>einen rohen Schinken</td>
              <td>eine kalte Milch</td>
              <td>ein altes Brot</td>
              <td>(no article) gekochte Eier</td>
            </tr>
            <tr>
              <td>Ohne Artikel (Nom.)</td>
              <td>roher Schinken</td>
              <td>kalte Milch</td>
              <td>altes Brot</td>
              <td>gekochte Eier</td>
            </tr>
            <tr>
              <td>Ohne Artikel (Akk.)</td>
              <td>rohen Schinken</td>
              <td>kalte Milch</td>
              <td>altes Brot</td>
              <td>gekochte Eier</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
            <p>
              Fill in the adjective ending for <em>frisch</em> before <em>Brot</em> (das) with a
              definite article in nominative.
            </p>
            <p>Step 1: Check the article: definite article, neuter nominative.</p>
            <p>
              Step 2: With a definite article, the adjective takes a weak ending: <em>-e</em>.
            </p>
            <p>
              Answer: <strong>das frische Brot</strong>.
            </p>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
            <ol className="lrn-list">
              <li>
                Fill in the adjective: <em>ein ___ Kaffee</em> (heiß, masculine, nominative,
                indefinite article).
              </li>
              <li>
                Step 1 given: <em>ein</em> is indefinite, masculine nominative: this form does not
                show gender.
              </li>
              <li>Step 2: your turn: what ending must the adjective take to show masculine?</li>
            </ol>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>
              Fill in: <em>___ rohen Schinken</em> (indefinite article, masculine, accusative). What
              article and ending go in the blank?
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the adjective ending change between <em>der rohe Schinken</em> (definite
            article) and <em>roher Schinken</em> (no article)?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The definite article <em>der</em> already shows masculine nominative. So the adjective
              only needs a weak ending: <em>-e</em>.
            </p>
            <p>
              When the article is missing, the adjective must carry the gender signal itself. So it
              takes the strong ending <em>-er</em>: the same shape as the article it replaces.
            </p>
            <p>
              The principle: gender must be marked exactly once in the noun group. Articles and
              adjectives split the work.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2 id="lrn-section-4">Der Plural der Nomen: Noun Plurals</h2>
        <p>German nouns form their plurals in five different ways.</p>
        <p>You must learn each noun's plural form together with its article.</p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            How many plural groups does German have? Do you think the plural always adds an ending
            like English <em>-s</em>, or can the noun stay the same?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>German has five plural groups.</p>
            <p>
              One group adds no ending at all: the noun looks exactly the same in singular and
              plural.
            </p>
            <p>
              Some groups also change an <em>a</em>, <em>o</em>, or <em>u</em> to an umlaut (ä, ö,
              ü).
            </p>
          </details>
        </div>

        <h3>Gruppe 1: Kein Plural-Endung (No Ending Added)</h3>
        <p>These nouns look the same in singular and plural.</p>
        <p>
          Most are neuter nouns ending in <em>-er</em> or <em>-chen</em>.
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Singular</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>das Messer</td>
              <td>die Messer</td>
            </tr>
            <tr>
              <td>das Zimmer</td>
              <td>die Zimmer</td>
            </tr>
            <tr>
              <td>das Brötchen</td>
              <td>die Brötchen</td>
            </tr>
          </tbody>
        </table>

        <h3>Gruppe 2: Endung -e (Sometimes with Umlaut)</h3>
        <p>
          These nouns add <em>-e</em> in the plural.
        </p>
        <p>
          Masculine and neuter nouns often add just <em>-e</em>.
        </p>
        <p>Some also add an umlaut to the stem vowel.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Singular</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>das Telefon</td>
              <td>die Telefone</td>
            </tr>
            <tr>
              <td>das Gerät</td>
              <td>die Geräte</td>
            </tr>
            <tr>
              <td>der Baum</td>
              <td>die Bäume</td>
            </tr>
          </tbody>
        </table>

        <h3>Gruppe 3: Endung -s</h3>
        <p>
          These nouns add <em>-s</em> in the plural.
        </p>
        <p>This group includes many foreign loanwords and abbreviations.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Singular</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>das Büro</td>
              <td>die Büros</td>
            </tr>
            <tr>
              <td>das Hobby</td>
              <td>die Hobbys</td>
            </tr>
            <tr>
              <td>der Euro</td>
              <td>die Euros</td>
            </tr>
          </tbody>
        </table>

        <h3>Gruppe 4: Endung -er (Often with Umlaut)</h3>
        <p>
          These nouns add <em>-er</em> in the plural.
        </p>
        <p>Many also add an umlaut.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Singular</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>das Glas</td>
              <td>die Gläser</td>
            </tr>
            <tr>
              <td>der Mann</td>
              <td>die Männer</td>
            </tr>
            <tr>
              <td>das Bild</td>
              <td>die Bilder</td>
            </tr>
          </tbody>
        </table>

        <h3>Gruppe 5: Endung -(e)n</h3>
        <p>
          These nouns add <em>-en</em> or <em>-n</em> in the plural.
        </p>
        <p>Most feminine nouns belong to this group.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Singular</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>die Banane</td>
              <td>die Bananen</td>
            </tr>
            <tr>
              <td>der Mensch</td>
              <td>die Menschen</td>
            </tr>
            <tr>
              <td>die Tasse</td>
              <td>die Tassen</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Special Forms</span>
          <p>
            <strong>Museum → Museen</strong> (Latin <em>-um</em> ending becomes <em>-en</em>).
          </p>
          <p>
            Units of measurement often have no plural form: <em>1 Kilo → 3 Kilo</em>,{' '}
            <em>1 Liter → 4 Liter</em>.
          </p>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German has so many plural patterns because the language preserved different historical
            noun classes from Old High German.
          </p>
          <p>Each class had its own plural ending, and those endings survived in modern German.</p>
          <p>
            Unlike English (which standardized to <em>-s</em>), German kept the variety: so gender
            and plural form must be memorized together for each noun.
          </p>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Find the plural group</span>
            <p>Goal: say "I need three glasses" in German.</p>
            <p>
              Step 1: find the singular and gender. <em>das Glas</em> (neuter).
            </p>
            <p>
              Step 2: pick the plural group. <em>Glas</em> belongs to Group 4: add <em>-er</em> with
              umlaut. Result: <em>die Gläser</em>.
            </p>
            <p>
              Step 3: build the sentence with <em>brauchen</em> (to need). Result:
              <strong> Ich brauche drei Gläser.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does <em>das Glas</em> become <em>die Gläser</em>, but <em>das Brötchen</em> stays
            the same in plural?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              <em>Glas</em> belongs to Plural Group 4. Group 4 nouns add <em>-er</em> and often add
              an umlaut.
            </p>
            <p>
              <em>Brötchen</em> ends in the diminutive suffix <em>-chen</em>. All <em>-chen</em>{' '}
              nouns belong to Group 1: no ending change.
            </p>
            <p>
              The article also changes from <em>das</em> to <em>die</em> in plural for both. Only
              the noun ending differs by group.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2 id="lrn-section-5">Geschirr und Besteck: Crockery and Cutlery</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Do you think <em>Gabel</em> (fork), <em>Messer</em> (knife), and <em>Löffel</em> (spoon)
            all have the same grammatical gender in German?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              No: they each have a different gender: <em>die Gabel</em>, <em>das Messer</em>,{' '}
              <em>der Löffel</em>.
            </p>
            <p>
              German gender does not follow a logical pattern for most household items: you must
              memorize each one.
            </p>
          </details>
        </div>

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
              <td>Tasse</td>
              <td>die</td>
              <td>cup</td>
            </tr>
            <tr>
              <td>Serviette</td>
              <td>die</td>
              <td>napkin</td>
            </tr>
            <tr>
              <td>Gabel</td>
              <td>die</td>
              <td>fork</td>
            </tr>
            <tr>
              <td>Kaffeelöffel</td>
              <td>der</td>
              <td>coffee spoon</td>
            </tr>
            <tr>
              <td>Löffel</td>
              <td>der</td>
              <td>spoon</td>
            </tr>
            <tr>
              <td>Suppenteller</td>
              <td>der</td>
              <td>soup plate</td>
            </tr>
            <tr>
              <td>Teller</td>
              <td>der</td>
              <td>plate</td>
            </tr>
            <tr>
              <td>Pfeffer</td>
              <td>der</td>
              <td>pepper</td>
            </tr>
            <tr>
              <td>Topf</td>
              <td>der</td>
              <td>pot</td>
            </tr>
            <tr>
              <td>Salz</td>
              <td>das</td>
              <td>salt</td>
            </tr>
            <tr>
              <td>Wasserglas</td>
              <td>das</td>
              <td>water glass</td>
            </tr>
            <tr>
              <td>Weinglas</td>
              <td>das</td>
              <td>wine glass</td>
            </tr>
            <tr>
              <td>Messer</td>
              <td>das</td>
              <td>knife</td>
            </tr>
            <tr>
              <td>Pfanne</td>
              <td>die</td>
              <td>frying pan</td>
            </tr>
            <tr>
              <td>Schüssel</td>
              <td>die</td>
              <td>bowl</td>
            </tr>
            <tr>
              <td>Kochbuch</td>
              <td>das</td>
              <td>cookbook</td>
            </tr>
            <tr>
              <td>Wischtuch</td>
              <td>das</td>
              <td>dishcloth</td>
            </tr>
            <tr>
              <td>Küchenmesser</td>
              <td>das</td>
              <td>kitchen knife</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Set the table</span>
            <p>Goal: ask the waiter for "a fork, a spoon, and a knife, please."</p>
            <p>
              Step 1: find the gender of each item. <em>die Gabel</em> (f), <em>der Löffel</em> (m),{' '}
              <em>das Messer</em> (n).
            </p>
            <p>
              Step 2: in accusative singular, indefinite article forms are{' '}
              <em>eine Gabel, einen Löffel, ein Messer</em>.
            </p>
            <p>
              Step 3: combine politely. Result:
              <strong> Ich hätte gern eine Gabel, einen Löffel und ein Messer, bitte.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does <em>einen Löffel</em> use the form <em>einen</em>, while <em>eine Gabel</em>{' '}
            uses <em>eine</em>?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              <em>der Löffel</em> is masculine. The masculine accusative form of <em>ein</em> adds{' '}
              <em>-en</em> to become <em>einen</em>.
            </p>
            <p>
              <em>die Gabel</em> is feminine. Feminine forms do not change between nominative and
              accusative: <em>eine</em> stays <em>eine</em>.
            </p>
            <p>
              <em>das Messer</em> is neuter. Neuter forms also do not change: <em>ein</em> stays{' '}
              <em>ein</em>.
            </p>
            <p>
              The masculine accusative is the only form that changes: this is the central rule of
              the German case system.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2 id="lrn-section-6">Einkaufen im Supermarkt: Shopping at the Supermarket</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            In a German supermarket, are <em>Backwaren</em> baked goods or bathroom products? Can
            you guess from the word root <em>backen</em>?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              <em>Backen</em> means to bake, so <em>Backwaren</em> means baked goods: bread, rolls,
              and cakes.
            </p>
            <p>
              German compound nouns work like this: base word + category suffix (<em>-waren</em> =
              goods/wares).
            </p>
          </details>
        </div>

        <h3>Supermarkt-Kategorien (Supermarket Categories)</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Kategorie</th>
              <th>English</th>
              <th>Beispiele</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Milchprodukte</td>
              <td>dairy products</td>
              <td>Joghurt, Gouda, Butter, Schlagsahne, Quark</td>
            </tr>
            <tr>
              <td>Obst und Gemüse</td>
              <td>fruit and vegetables</td>
              <td>Erbsen, Kartoffeln, Bohnen, Zwiebeln</td>
            </tr>
            <tr>
              <td>Fleisch- und Wurstwaren</td>
              <td>meat and sausage products</td>
              <td>Schinken, Salami, Rindfleisch, Hühnerfilet, Schweinslende</td>
            </tr>
            <tr>
              <td>Backwaren</td>
              <td>baked goods</td>
              <td>Weißbrot, Schwarzbrot, Vollkornbrötchen</td>
            </tr>
            <tr>
              <td>Süßigkeiten</td>
              <td>sweets / confectionery</td>
              <td>Schokolade, Pralinen, Goldbären, Pflaumenkuchen</td>
            </tr>
            <tr>
              <td>Getränke</td>
              <td>drinks</td>
              <td>Apfelsaft, Weißbier, Champagner</td>
            </tr>
          </tbody>
        </table>

        <h3>Verpackungen und Maße (Containers and Quantities)</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Article</th>
              <th>English</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Flasche</td>
              <td>die</td>
              <td>bottle</td>
              <td>eine Flasche Wein</td>
            </tr>
            <tr>
              <td>Dose</td>
              <td>die</td>
              <td>can / tin</td>
              <td>eine Dose Erbsen</td>
            </tr>
            <tr>
              <td>Becher</td>
              <td>der</td>
              <td>tub / cup</td>
              <td>ein Becher Joghurt</td>
            </tr>
            <tr>
              <td>Tafel</td>
              <td>die</td>
              <td>bar (of chocolate)</td>
              <td>eine Tafel Schokolade</td>
            </tr>
            <tr>
              <td>Packung</td>
              <td>die</td>
              <td>packet / pack</td>
              <td>eine Packung Kaffee</td>
            </tr>
            <tr>
              <td>Tüte</td>
              <td>die</td>
              <td>bag</td>
              <td>eine Tüte Haribo</td>
            </tr>
            <tr>
              <td>Stück</td>
              <td>das</td>
              <td>piece</td>
              <td>ein Stück Kuchen</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Read a shopping list</span>
            <p>
              Goal: write a shopping list with "one bottle of wine, two cans of peas, and a bar of
              chocolate."
            </p>
            <p>
              Step 1: pick the right container word for each item. <em>Flasche</em> for liquid,{' '}
              <em>Dose</em> for canned food, <em>Tafel</em> for chocolate.
            </p>
            <p>
              Step 2: put the number before each container. Plural of <em>Flasche</em> is{' '}
              <em>Flaschen</em>, plural of <em>Dose</em> is <em>Dosen</em>.
            </p>
            <p>
              Step 3: write the list. Result:
              <strong> eine Flasche Wein, zwei Dosen Erbsen, eine Tafel Schokolade.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why is it <em>zwei Dosen Erbsen</em> and not <em>zwei Dose Erbsen</em>?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Container nouns take the regular plural ending after a number greater than one.{' '}
              <em>die Dose</em> is feminine and belongs to Plural Group 5: add <em>-n</em>.
            </p>
            <p>
              So <em>eine Dose</em> (one can) becomes <em>zwei Dosen</em> (two cans).
            </p>
            <p>
              Note the contrast with measurement units (Kilo, Liter): those stay singular after
              numbers. Container nouns do change.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2 id="lrn-section-7">Obst: Fruit</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Most fruit names you see here end in <em>-en</em> or <em>-er</em> in plural. Do you
            predict that <em>der Apfel</em> follows the same pattern, or does it change differently?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              <em>der Apfel</em> changes to <em>die Äpfel</em>. The plural adds an umlaut but no
              ending.
            </p>
            <p>
              This is Plural Group 1 with an umlaut twist. The shape stays similar to the singular,
              but the vowel changes from <em>a</em> to <em>ä</em>.
            </p>
          </details>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German (Plural)</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kiwis</td>
              <td>kiwis</td>
            </tr>
            <tr>
              <td>Bananen</td>
              <td>bananas</td>
            </tr>
            <tr>
              <td>Melonen</td>
              <td>melons</td>
            </tr>
            <tr>
              <td>Äpfel</td>
              <td>apples</td>
            </tr>
            <tr>
              <td>Ananas</td>
              <td>pineapple</td>
            </tr>
            <tr>
              <td>Erdbeeren</td>
              <td>strawberries</td>
            </tr>
            <tr>
              <td>Weintrauben</td>
              <td>grapes</td>
            </tr>
            <tr>
              <td>Orangen</td>
              <td>oranges</td>
            </tr>
            <tr>
              <td>Kirschen</td>
              <td>cherries</td>
            </tr>
            <tr>
              <td>Pflaumen</td>
              <td>plums</td>
            </tr>
            <tr>
              <td>Birnen</td>
              <td>pears</td>
            </tr>
            <tr>
              <td>Mangos</td>
              <td>mangoes</td>
            </tr>
            <tr>
              <td>Nektarinen</td>
              <td>nectarines</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Top Ten Lieblingsobst der Deutschen</span>
          <p>
            The most popular fruits in Germany are: Bananen (24%), Äpfel (20%), Ananas (12%),
            Erdbeeren (7.3%), Weintrauben (4.3%), Melonen (4.0%), Nektarinen (3.3%),
            Zitronen/Limetten (2.4%), Orangen and Kiwis.
          </p>
        </div>

        <h3>Dialog: Einkaufen beim Gemüsehändler</h3>
        <p>A customer is shopping at a vegetable and fruit market.</p>
        <p>The customer buys Tomaten, Bananen, Orangen, and Mangos.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Was darf es sein?</td>
              <td>What can I get you?</td>
            </tr>
            <tr>
              <td>Ich hätte gern ein Kilo Tomaten.</td>
              <td>I would like a kilo of tomatoes.</td>
            </tr>
            <tr>
              <td>Was kostet das?</td>
              <td>How much does that cost?</td>
            </tr>
            <tr>
              <td>Das macht … Euro.</td>
              <td>That comes to … euros.</td>
            </tr>
            <tr>
              <td>Haben Sie auch Mangos?</td>
              <td>Do you also have mangoes?</td>
            </tr>
            <tr>
              <td>Ja, natürlich.</td>
              <td>Yes, of course.</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Order fruit at the market</span>
            <p>Goal: ask for "two kilos of strawberries and one kilo of apples, please."</p>
            <p>
              Step 1: pick the polite phrase. Use <em>Ich hätte gern</em> at a market.
            </p>
            <p>
              Step 2: build the quantities. <em>zwei Kilo Erdbeeren</em> (kilo has no plural form
              after numbers) and <em>ein Kilo Äpfel</em>.
            </p>
            <p>
              Step 3: combine and end with <em>bitte</em>. Result:
              <strong> Ich hätte gern zwei Kilo Erdbeeren und ein Kilo Äpfel, bitte.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why is it <em>zwei Kilo Erdbeeren</em> and not <em>zwei Kilos Erdbeeren</em>?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Units of measurement in German do not take a plural ending after a number. The unit
              stays singular: <em>1 Kilo, 2 Kilo, 5 Kilo</em>.
            </p>
            <p>
              The fruit itself takes the plural form: <em>Erdbeeren</em> (Group 5, adds <em>-n</em>
              ).
            </p>
            <p>
              Compare: <em>1 Liter Wasser, 4 Liter Wasser</em>. The unit never changes; only the
              counted item does.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Most fruit names in German are feminine and form their plural with <em>-(e)n</em> (Group
            5).
          </p>
          <p>
            Examples: <em>die Banane to die Bananen</em>, <em>die Erdbeere to die Erdbeeren</em>,{' '}
            <em>die Pflaume to die Pflaumen</em>.
          </p>
          <p>
            Exceptions exist: <em>der Apfel to die Äpfel</em> (umlaut only),{' '}
            <em>die Mango to die Mangos</em> (loanword, Group 3).
          </p>
        </div>
      </>,

      <>
        <h2 id="lrn-section-8">Das Modalverb mögen</h2>
        <p>
          Use <em>mögen</em> when expressing a liking, preference, or dislike for something: food,
          people, or activities.
        </p>
        <p>
          Do not confuse <em>mögen</em> with <em>möchten</em>. They do different jobs.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            If <em>Ich mag Schokolade</em> means "I like chocolate," what do you predict{' '}
            <em>Ich mag keine Leberwurst</em> means?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              <em>Ich mag keine Leberwurst</em> means "I don't like liver sausage."
            </p>
            <p>
              <em>Kein</em> is the negative article: it negates the noun directly:{' '}
              <em>keine Leberwurst</em> = no liver sausage / not any liver sausage.
            </p>
          </details>
        </div>

        <h3>Konjugation: mögen</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>mögen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>mag</td>
            </tr>
            <tr>
              <td>du</td>
              <td>magst</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>mag</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>mögen</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>mögt</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>mögen</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            <em>Mögen</em> is a modal verb, and modal verbs in German have identical forms for{' '}
            <em>ich</em> and <em>er/sie/es</em>.
          </p>
          <p>
            This is the opposite of regular verbs, which add <em>-t</em> to the <em>er</em> form:{' '}
            <em>er kocht</em>.
          </p>
          <p>
            All six modal verbs in German follow this same pattern: <em>ich mag / er mag</em>,{' '}
            <em>ich kann / er kann</em>, etc.
          </p>
        </div>

        <h3>Gebrauch (Usage)</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Use</th>
              <th>Example</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sympathie (liking people)</td>
              <td>Ich mag dich.</td>
              <td>I like you.</td>
            </tr>
            <tr>
              <td>Vorliebe (food preference)</td>
              <td>Ich mag Schokolade.</td>
              <td>I like chocolate.</td>
            </tr>
            <tr>
              <td>Abneigung (dislike)</td>
              <td>Ich mag keine Leberwurst.</td>
              <td>I don't like liver sausage.</td>
            </tr>
            <tr>
              <td>Selten: with Infinitiv</td>
              <td>Ich mag heute nicht ins Kino gehen.</td>
              <td>I don't feel like going to the cinema today.</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">mögen (permanent preference)</span>
            <p>
              <em>Ich mag Schokolade.</em>
            </p>
            <p>I like chocolate. (in general, always)</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">möchten (current wish/request)</span>
            <p>
              <em>Ich möchte eine Tasse Kaffee.</em>
            </p>
            <p>I would like a cup of coffee. (right now)</p>
          </div>
        </div>

        <h3>Verneinung (Negation)</h3>
        <p>There are three ways to say you don't want or don't like something.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Negation Type</th>
              <th>Example</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kein + Nomen</td>
              <td>Ich mag keinen Weißwein.</td>
              <td>I don't like white wine. (none of it)</td>
            </tr>
            <tr>
              <td>nie</td>
              <td>Ich trinke nie Weißwein.</td>
              <td>I never drink white wine.</td>
            </tr>
            <tr>
              <td>nicht gern</td>
              <td>Ich trinke nicht gern Weißwein.</td>
              <td>I don't enjoy drinking white wine.</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why do you say <em>Ich mag keinen Fisch</em> with <em>keinen</em> instead of{' '}
            <em>kein</em>?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              <em>Fisch</em> is masculine and is the direct object of <em>mag</em>. So it must take
              accusative case.
            </p>
            <p>
              The negative article <em>kein</em> follows the same endings as <em>ein</em>. Masculine
              accusative of <em>ein</em> is <em>einen</em>: so <em>kein</em> becomes <em>keinen</em>
              .
            </p>
            <p>
              Compare: <em>keine Leberwurst</em> (feminine, no change), <em>kein Bier</em> (neuter,
              no change). Only the masculine accusative changes shape.
            </p>
          </details>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Express likes and dislikes</span>
            <p>Goal: write "I like coffee, but I do not like green beans."</p>
            <p>
              Step 1: pick the right form of <em>mögen</em> for <em>ich</em>: <em>mag</em>. Same for{' '}
              <em>er/sie/es</em>: no <em>-t</em> ending in modal verbs.
            </p>
            <p>
              Step 2: <em>Kaffee</em> is masculine but used here as a general noun, no article
              needed: <em>Ich mag Kaffee</em>.
            </p>
            <p>
              Step 3: negate green beans. <em>grüne Bohnen</em> is plural. Plural negation uses{' '}
              <em>keine</em>: <em>keine grünen Bohnen</em>. Result:
              <strong> Ich mag Kaffee, aber ich mag keine grünen Bohnen.</strong>
            </p>
          </div>
        </div>
      </>,

      <>
        <h2 id="lrn-section-9">Kochen: Cooking</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            In a formal recipe instruction, where does the verb go in German: first or last in the
            sentence?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              In the formal imperative (<em>Imperativ formell</em>), the verb comes first: position
              1.
            </p>
            <p>
              The pronoun <em>Sie</em> comes directly after it: position 2.
            </p>
            <p>
              Example: <strong>Schälen Sie</strong> die Äpfel. (Peel the apples.)
            </p>
          </details>
        </div>

        <h3>Kochvokabular (Cooking Verbs)</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Infinitiv</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>schälen</td>
              <td>to peel</td>
            </tr>
            <tr>
              <td>schneiden</td>
              <td>to cut</td>
            </tr>
            <tr>
              <td>kochen</td>
              <td>to cook / to boil</td>
            </tr>
            <tr>
              <td>braten</td>
              <td>to fry / to roast</td>
            </tr>
            <tr>
              <td>vermengen</td>
              <td>to mix</td>
            </tr>
            <tr>
              <td>pürieren</td>
              <td>to purée</td>
            </tr>
            <tr>
              <td>würzen</td>
              <td>to season</td>
            </tr>
            <tr>
              <td>waschen</td>
              <td>to wash</td>
            </tr>
          </tbody>
        </table>

        <h3>Der Imperativ (formell): Formal Imperative</h3>
        <p>
          Use the formal imperative when giving instructions to someone you address as <em>Sie</em>.
        </p>
        <p>This is the form used in recipes, instructions, and formal requests.</p>
        <p>
          The verb goes to position 1. <em>Sie</em> goes to position 2. The rest of the sentence
          follows.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Imperativ</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Schälen Sie das Obst.</td>
              <td>Peel the fruit.</td>
            </tr>
            <tr>
              <td>Schneiden Sie die Äpfel.</td>
              <td>Cut the apples.</td>
            </tr>
            <tr>
              <td>Kochen Sie die Kartoffeln.</td>
              <td>Boil the potatoes.</td>
            </tr>
            <tr>
              <td>Braten Sie das Fleisch.</td>
              <td>Fry the meat.</td>
            </tr>
            <tr>
              <td>Vermengen Sie alles.</td>
              <td>Mix everything together.</td>
            </tr>
            <tr>
              <td>Würzen Sie mit Salz und Pfeffer.</td>
              <td>Season with salt and pepper.</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the formal imperative look almost identical to the regular <em>Sie</em> present
            tense form?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The formal imperative and the present tense <em>Sie</em> form use the same verb ending
              (<em>-en</em>).
            </p>
            <p>
              The only difference is word order: in a statement, the verb is at position 2 (
              <em>Sie schälen die Äpfel</em>); in the imperative, the verb is at position 1 (
              <em>Schälen Sie die Äpfel</em>).
            </p>
            <p>So the imperative is easy to form: just move the verb to the front.</p>
          </details>
        </div>

        <h3>Rezept: Gemischter Obstsalat mit Schuss</h3>
        <p>Here is a recipe for a mixed fruit salad with a splash of liqueur.</p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Zutaten (Ingredients for 4 people)</span>
            <p className="lrn-step-content">
              2 Äpfel, 2 Bananen, 2 Orangen, 1 Mango, Zitronensaft, Zucker, 50g Haselnüsse, 1
              Gläschen Cointreau.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Schritt 1</span>
            <p className="lrn-step-content">
              Schälen Sie das Obst und schneiden Sie es in kleine Stücke.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Schritt 2</span>
            <p className="lrn-step-content">
              Geben Sie alles in eine Schüssel. Würzen Sie mit Zitronensaft und Zucker.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Schritt 3</span>
            <p className="lrn-step-content">
              Geben Sie einen Schuss Cointreau hinzu und vermengen Sie alles.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2 id="lrn-section-10">Gesunde Ernährung: Healthy Eating</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            German uses adverbs of frequency before nouns: <em>oft</em> (often), <em>selten</em>{' '}
            (rarely), <em>nie</em> (never). Where do you predict the adverb goes in a command:
            before or after the noun?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The adverb goes between the verb and the noun: <em>Essen Sie oft Fisch</em>.
            </p>
            <p>
              German keeps a tight word order around the verb. The adverb of frequency sits right
              after the subject and before the object.
            </p>
          </details>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Essen Sie viel Obst und Gemüse.</td>
              <td>Eat lots of fruit and vegetables.</td>
            </tr>
            <tr>
              <td>Trinken Sie täglich Wasser.</td>
              <td>Drink water every day.</td>
            </tr>
            <tr>
              <td>Kaufen Sie selten Süßigkeiten.</td>
              <td>Buy sweets rarely.</td>
            </tr>
            <tr>
              <td>Essen Sie nie Fast Food.</td>
              <td>Never eat fast food.</td>
            </tr>
            <tr>
              <td>Essen Sie wenig Fleisch.</td>
              <td>Eat little meat.</td>
            </tr>
            <tr>
              <td>Essen Sie oft Fisch.</td>
              <td>Eat fish often.</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Build a health rule</span>
            <p>Goal: tell someone "Drink water every day, but never drink soda."</p>
            <p>
              Step 1: pick the formal command. Verb first, then <em>Sie</em>: <em>Trinken Sie</em>.
            </p>
            <p>
              Step 2: add the frequency adverb after <em>Sie</em>: <em>täglich</em> (daily) for the
              first command, <em>nie</em> (never) for the second.
            </p>
            <p>
              Step 3: connect with <em>aber</em> (but). Result:
              <strong> Trinken Sie täglich Wasser, aber trinken Sie nie Limonade.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does the verb appear twice in the rule above instead of just once?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              German imperatives are independent commands. When you join them with <em>aber</em>,
              each clause keeps its own verb at position 1.
            </p>
            <p>
              You cannot drop the second verb the way English does ("Drink water but never soda").
            </p>
            <p>
              The full structure is needed:{' '}
              <em>Trinken Sie täglich Wasser, aber trinken Sie nie Limonade.</em>
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Recipes, doctor's notes, and public health posters all use the same pattern:
            verb-Sie-instruction.
          </p>
          <p>
            This direct style sounds polite in German because the formal <em>Sie</em> already
            carries the politeness. No softening word is needed.
          </p>
        </div>
      </>,

      <>
        <h2 id="lrn-section-11">Verb-Konjugationstabelle</h2>
        <p>
          Note: <em>essen</em>, <em>nehmen</em>, and <em>braten</em> have stem-vowel changes.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>kochen</th>
              <th>kaufen</th>
              <th>trinken</th>
              <th>essen</th>
              <th>nehmen</th>
              <th>braten</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>koche</td>
              <td>kaufe</td>
              <td>trinke</td>
              <td>esse</td>
              <td>nehme</td>
              <td>brate</td>
            </tr>
            <tr>
              <td>du</td>
              <td>kochst</td>
              <td>kaufst</td>
              <td>trinkst</td>
              <td>isst</td>
              <td>nimmst</td>
              <td>brätst</td>
            </tr>
            <tr>
              <td>er/sie/es</td>
              <td>kocht</td>
              <td>kauft</td>
              <td>trinkt</td>
              <td>isst</td>
              <td>nimmt</td>
              <td>brät</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>kochen</td>
              <td>kaufen</td>
              <td>trinken</td>
              <td>essen</td>
              <td>nehmen</td>
              <td>braten</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>kocht</td>
              <td>kauft</td>
              <td>trinkt</td>
              <td>esst</td>
              <td>nehmt</td>
              <td>bratet</td>
            </tr>
            <tr>
              <td>sie/Sie</td>
              <td>kochen</td>
              <td>kaufen</td>
              <td>trinken</td>
              <td>essen</td>
              <td>nehmen</td>
              <td>braten</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Look at <em>du isst</em> and <em>er isst</em>. Why do they look the same? And do you
            predict <em>du brätst</em> and <em>er brät</em> are also identical?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              <em>essen</em>: stem ends in <em>-s</em>. The <em>du</em> ending <em>-st</em> drops
              the <em>s</em> and becomes just <em>-t</em>. So <em>du isst</em> and <em>er isst</em>{' '}
              look the same.
            </p>
            <p>
              <em>braten</em>: stem ends in <em>-t</em>. The <em>du</em> form keeps full
              <em>-st</em> ending: <em>du brätst</em>. The <em>er</em> form has only one <em>-t</em>
              : <em>er brät</em>. So they differ slightly.
            </p>
          </details>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Pick the right verb form</span>
            <p>Goal: write "She is frying the meat and you are eating it."</p>
            <p>
              Step 1: pick the <em>sie</em> form of <em>braten</em>. Apply the stem-vowel change{' '}
              <em>a to ä</em>: <em>sie brät</em>.
            </p>
            <p>
              Step 2: pick the <em>du</em> form of <em>essen</em>. Apply the stem-vowel change{' '}
              <em>e to i</em>: <em>du isst</em>.
            </p>
            <p>
              Step 3: connect with <em>und</em> and use the accusative pronoun <em>es</em> for{' '}
              <em>das Fleisch</em>. Result:
              <strong> Sie brät das Fleisch und du isst es.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why do regular verbs like <em>kochen</em> not have any stem-vowel change, but{' '}
            <em>essen</em> and <em>nehmen</em> do?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Regular verbs (<em>kochen, kaufen, trinken</em>) keep their stem unchanged across all
              persons. Only the ending changes.
            </p>
            <p>
              Strong verbs (<em>essen, nehmen, braten, fahren</em>) come from old Germanic verb
              classes that mark person changes with vowel shifts.
            </p>
            <p>
              You must memorize which verbs are strong. The change always shows in the <em>du</em>{' '}
              and <em>er/sie/es</em> forms only: never in <em>ich, wir, ihr, sie</em>.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Strong verbs are a leftover from Old Germanic. They use vowel changes to signal grammar,
            like English <em>sing-sang-sung</em>.
          </p>
          <p>
            German kept this system for the present tense in <em>du</em> and <em>er</em> forms. It
            also uses vowel changes for the past tense: <em>nehmen to nahm</em>,{' '}
            <em>essen to aß</em>.
          </p>
          <p>
            Knowing which verbs are strong saves time later because the present-tense vowel change
            often predicts the past-tense vowel change too.
          </p>
        </div>
      </>,

      <>
        <h2 id="lrn-section-12">Esskultur in Deutschland: Eating Culture in Germany</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            In Germany, which meal is traditionally the main hot meal of the day: lunch or dinner?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Lunch (<em>Mittagessen</em>) is traditionally the main hot meal in Germany, eaten
              between 12 and 14 Uhr.
            </p>
            <p>
              The evening meal (<em>Abendbrot</em>) is traditionally cold: bread with cheese or
              sausage.
            </p>
          </details>
        </div>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Frühstück (Breakfast)</span>
            <p className="lrn-step-content">
              Brötchen or bread with butter and jam or cheese, plus coffee or tea.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Mittagessen (Lunch, 12 to 14 Uhr)</span>
            <p className="lrn-step-content">
              The main hot meal. Typically meat, vegetables, and potatoes.
            </p>
            <p className="lrn-step-content">
              Many Germans eat in the workplace <em>Kantine</em> (canteen).
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Abendbrot (Evening Meal)</span>
            <p className="lrn-step-content">Traditionally cold: bread with cheese or sausage.</p>
            <p className="lrn-step-content">
              Many young Germans now prefer fish, meat, pizza, or hamburgers in the evenings.
            </p>
          </div>
        </div>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Getränke in Deutschland</span>
          <p>The most popular drink in Germany is Kaffee.</p>
          <p>Germans also enjoy Bier and Wein.</p>
          <p>
            <em>Weinschorle</em> is wine mixed with water: a popular drink.
          </p>
          <p>
            <em>Apfelwein</em> is a regional specialty in Hessen, Rheinland-Pfalz, and Saarland.
          </p>
          <p>
            <em>Mineralwasser</em> is the top-selling soft drink in Germany.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why is the German evening meal called <em>Abendbrot</em>: literally "evening bread"?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              <em>Abend</em> means evening and <em>Brot</em> means bread. The compound name shows
              what the meal traditionally is.
            </p>
            <p>
              For most of German history, the evening meal was bread with cold cuts, cheese, or
              spread: never a hot meal.
            </p>
            <p>
              The hot main meal was <em>Mittagessen</em> (lunch). The name <em>Abendbrot</em> still
              reflects this old habit, even though many young Germans now eat warm meals at night.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Traditional German meal times match an industrial work schedule. Workers came home at
            midday for a full hot meal, then returned to work.
          </p>
          <p>
            The cold evening meal needed no cooking. It saved time and used up bread baked in the
            morning.
          </p>
          <p>
            Modern offices changed this pattern. Many Germans now eat a quick lunch in the canteen
            and a full warm dinner at home. The vocabulary stayed the same even as habits shifted.
          </p>
        </div>
      </>,

      <>
        <h2 id="lrn-section-13">Im Restaurant: At the Restaurant</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            German has three ways to order food in a restaurant. Which sounds most polite:{' '}
            <em>Ich nehme …</em>, <em>Ich möchte …</em>, or <em>Ich hätte gern …</em>?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              <em>Ich hätte gern …</em> is the most polite: it uses the conditional form (would
              like).
            </p>
            <p>
              <em>Ich möchte …</em> is polite and very common.
            </p>
            <p>
              <em>Ich nehme …</em> is more direct and casual.
            </p>
            <p>All three are acceptable in a German restaurant.</p>
          </details>
        </div>

        <h3>Speisekarte (Restaurant Menu)</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Gericht</th>
              <th>Preis</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3" className="lrn-table-section-header">
                Vorspeisen (Starters)
              </td>
            </tr>
            <tr>
              <td>Tomatensuppe</td>
              <td>3,90 €</td>
              <td>tomato soup</td>
            </tr>
            <tr>
              <td>Italienische Gemüsesuppe</td>
              <td>4,50 €</td>
              <td>Italian vegetable soup</td>
            </tr>
            <tr>
              <td>Gemischter Salat</td>
              <td>3,50 €</td>
              <td>mixed salad</td>
            </tr>
            <tr>
              <td>Roher Schinken mit Melone</td>
              <td>5,50 €</td>
              <td>raw ham with melon</td>
            </tr>
            <tr>
              <td colSpan="3" className="lrn-table-section-header">
                Fleischgerichte (Meat Dishes)
              </td>
            </tr>
            <tr>
              <td>Schweinebraten mit Sauerkraut</td>
              <td>8,75 €</td>
              <td>roast pork with sauerkraut</td>
            </tr>
            <tr>
              <td>Wiener Schnitzel mit Blumenkohl</td>
              <td>12,00 €</td>
              <td>Wiener schnitzel with cauliflower</td>
            </tr>
            <tr>
              <td>Rindergulasch mit grünen Bohnen</td>
              <td>10,50 €</td>
              <td>beef goulash with green beans</td>
            </tr>
            <tr>
              <td colSpan="3" className="lrn-table-section-header">
                Fischgerichte (Fish Dishes)
              </td>
            </tr>
            <tr>
              <td>Forelle in Weißwein</td>
              <td>15,50 €</td>
              <td>trout in white wine</td>
            </tr>
            <tr>
              <td>Steinbutt mit Gemüse</td>
              <td>18,90 €</td>
              <td>turbot with vegetables</td>
            </tr>
            <tr>
              <td>Lachs in Knoblauch</td>
              <td>13,90 €</td>
              <td>salmon in garlic</td>
            </tr>
            <tr>
              <td colSpan="3" className="lrn-table-section-header">
                Nachspeisen (Desserts)
              </td>
            </tr>
            <tr>
              <td>Frischer Obstsalat</td>
              <td>3,90 €</td>
              <td>fresh fruit salad</td>
            </tr>
            <tr>
              <td>Frische Erdbeeren mit Sahne</td>
              <td>4,50 €</td>
              <td>fresh strawberries with cream</td>
            </tr>
            <tr>
              <td>Apfelkuchen</td>
              <td>2,75 €</td>
              <td>apple cake</td>
            </tr>
            <tr>
              <td>Käseauswahl</td>
              <td>3,75 €</td>
              <td>cheese selection</td>
            </tr>
            <tr>
              <td colSpan="3" className="lrn-table-section-header">
                Getränke
              </td>
            </tr>
            <tr>
              <td>Kaffee</td>
              <td>2,50 €</td>
              <td>coffee</td>
            </tr>
            <tr>
              <td>Cappuccino</td>
              <td>2,75 €</td>
              <td>cappuccino</td>
            </tr>
            <tr>
              <td>Espresso</td>
              <td>2,25 €</td>
              <td>espresso</td>
            </tr>
            <tr>
              <td>Tee</td>
              <td>2,25 €</td>
              <td>tea</td>
            </tr>
            <tr>
              <td>Mineralwasser</td>
              <td>1,75 €</td>
              <td>mineral water</td>
            </tr>
            <tr>
              <td>Frischer Orangensaft</td>
              <td>3,25 €</td>
              <td>fresh orange juice</td>
            </tr>
            <tr>
              <td>Cola</td>
              <td>1,75 €</td>
              <td>cola</td>
            </tr>
            <tr>
              <td>Limonade</td>
              <td>1,75 €</td>
              <td>lemonade</td>
            </tr>
          </tbody>
        </table>

        <h3>Wichtige Redewendungen im Restaurant (Key Phrases)</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Guten Appetit!</td>
              <td>Enjoy your meal!</td>
            </tr>
            <tr>
              <td>Prost!</td>
              <td>Cheers! (for beer)</td>
            </tr>
            <tr>
              <td>Zum Wohl!</td>
              <td>Cheers! (for wine, more formal)</td>
            </tr>
            <tr>
              <td>Die Rechnung, bitte.</td>
              <td>The bill, please.</td>
            </tr>
            <tr>
              <td>Ich möchte zahlen / bezahlen.</td>
              <td>I would like to pay.</td>
            </tr>
            <tr>
              <td>Zusammen oder getrennt?</td>
              <td>Together or separate?</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Zum Wohl!</span>
            <p>Wine toast: more formal.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Prost!</span>
            <p>Beer toast: more casual.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Guten Appetit!</span>
            <p>Said before eating, not when drinking.</p>
          </div>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Order a full meal politely</span>
            <p>
              Goal: order tomato soup as a starter and Wiener schnitzel as a main, in the most
              polite form.
            </p>
            <p>
              Step 1: pick the polite phrase. <em>Ich hätte gern</em> is the most polite.
            </p>
            <p>
              Step 2: build each dish. <em>die Tomatensuppe</em> stays as accusative{' '}
              <em>die Tomatensuppe</em> (feminine, no change). <em>das Wiener Schnitzel</em> stays{' '}
              <em>das Wiener Schnitzel</em> (neuter, no change).
            </p>
            <p>
              Step 3: connect with <em>als Vorspeise</em> and <em>als Hauptgericht</em>. Result:
              <strong>
                {' '}
                Ich hätte gern die Tomatensuppe als Vorspeise und das Wiener Schnitzel als
                Hauptgericht.
              </strong>
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the waiter say <em>Zusammen oder getrennt</em> at the end of the meal?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              <em>Zusammen</em> means "together" (one bill) and <em>getrennt</em> means "separate"
              (split bills).
            </p>
            <p>
              In Germany, splitting the bill is normal: each person pays for what they ordered. The
              waiter must ask which option you want.
            </p>
            <p>
              In the United States, the default is one shared bill. In Germany, the default is no
              default: the waiter checks before adding up.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German has three distinct levels of politeness for ordering: <em>Ich hätte gern</em>{' '}
            (most polite), <em>Ich möchte</em> (polite), and <em>Ich nehme</em> (direct).
          </p>
          <p>All three are acceptable. The level changes the social signal but not the meaning.</p>
          <p>
            <em>Hätte</em> is the conditional form of <em>haben</em>. The conditional softens any
            request in German, just as English uses "would" instead of plain "want."
          </p>
        </div>
      </>,

      <>
        <h2 id="lrn-section-14">Geschmack: Taste Expressions</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The sentence is: <em>Wie schmeckt der Lachs?</em>: "How does the salmon taste?" How do
            you predict the answer uses a pronoun instead of repeating <em>der Lachs</em>?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              You replace <em>der Lachs</em> with <em>er</em> (he/it: masculine):{' '}
              <em>Er schmeckt ausgezeichnet.</em>
            </p>
            <p>In German, the pronoun must match the grammatical gender of the noun it replaces.</p>
            <p>
              <em>Lachs</em> is masculine (der), so the pronoun is <em>er</em>.
            </p>
          </details>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Er schmeckt ausgezeichnet.</td>
              <td>It tastes excellent.</td>
            </tr>
            <tr>
              <td>Er schmeckt (sehr) gut.</td>
              <td>It tastes (very) good.</td>
            </tr>
            <tr>
              <td>Ich finde ihn lecker / köstlich.</td>
              <td>I find it tasty / delicious.</td>
            </tr>
            <tr>
              <td>Er schmeckt schrecklich.</td>
              <td>It tastes terrible.</td>
            </tr>
            <tr>
              <td>Er schmeckt nicht gut.</td>
              <td>It doesn't taste good.</td>
            </tr>
            <tr>
              <td>Ich finde ihn ungenießbar.</td>
              <td>I find it inedible.</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Grammar Note: Personalpronomen</span>
          <p>
            <em>Schmeckt er gut?</em>: The pronoun <em>er</em> is nominative (subject of{' '}
            <em>schmeckt</em>).
          </p>
          <p>
            <em>Ich finde ihn lecker.</em>: The pronoun <em>ihn</em> is accusative (direct object of{' '}
            <em>finde</em>).
          </p>
          <p>This is the accusative pronoun system: you learn it in the next section.</p>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Comment on the food</span>
            <p>
              Goal: a friend asks <em>Wie schmeckt der Apfelkuchen</em>. Reply with "It tastes
              excellent. I find it delicious."
            </p>
            <p>
              Step 1: pick the right pronoun for <em>der Apfelkuchen</em> (masculine). Subject
              pronoun is <em>er</em>.
            </p>
            <p>
              Step 2: write the first sentence with the verb <em>schmeckt</em>:{' '}
              <em>Er schmeckt ausgezeichnet.</em>
            </p>
            <p>
              Step 3: in the second sentence, the pronoun is the direct object of <em>finde</em>.
              Use the accusative form <em>ihn</em>. Result:
              <strong> Er schmeckt ausgezeichnet. Ich finde ihn köstlich.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does German use the verb <em>finden</em> (to find) instead of <em>denken</em> (to
            think) when giving a food opinion?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              <em>Ich finde X lecker</em> is the standard idiom for "I think X tastes good."
            </p>
            <p>
              <em>Finden</em> in this context means "to perceive" or "to judge," not "to discover by
              searching."
            </p>
            <p>
              Other languages use the same trick: French <em>trouver</em>, Italian <em>trovare</em>.
              The verb of finding becomes the verb of opinion. <em>Denken</em> is reserved for
              general thoughts, not sensory judgments.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German has two grammatical patterns for talking about taste. The verb <em>schmecken</em>
            uses a nominative pronoun: <em>Er schmeckt gut</em>.
          </p>
          <p>
            The verb <em>finden</em> uses an accusative pronoun: <em>Ich finde ihn lecker</em>.
          </p>
          <p>
            Both patterns appear together in real conversation. Speakers switch between them based
            on whether they want a neutral comment (<em>schmeckt</em>) or a personal opinion (
            <em>finde</em>).
          </p>
        </div>
      </>,

      <>
        <h2 id="lrn-section-15">
          Personalpronomen im Akkusativ: Personal Pronouns in the Accusative
        </h2>
        <p>
          Use accusative pronouns when the pronoun is the direct object of a sentence: the thing
          receiving the action.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You know that <em>ich</em> is the nominative form of the first-person singular. What do
            you predict the accusative form is: <em>ich</em>, <em>mich</em>, or <em>mir</em>?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The accusative form is <em>mich</em>: <em>Er sieht mich.</em> (He sees me.)
            </p>
            <p>
              <em>Mir</em> is the dative form: used for indirect objects.
            </p>
            <p>
              German has three pronoun forms per person: nominative, accusative, and dative: each
              for a different grammatical role.
            </p>
          </details>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Nominativ</th>
              <th>Akkusativ</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>mich</td>
              <td>me</td>
            </tr>
            <tr>
              <td>du</td>
              <td>dich</td>
              <td>you</td>
            </tr>
            <tr>
              <td>er</td>
              <td>ihn</td>
              <td>him / it (m.)</td>
            </tr>
            <tr>
              <td>sie</td>
              <td>sie</td>
              <td>her / it (f.)</td>
            </tr>
            <tr>
              <td>es</td>
              <td>es</td>
              <td>it (n.)</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>uns</td>
              <td>us</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>euch</td>
              <td>you (plural)</td>
            </tr>
            <tr>
              <td>sie</td>
              <td>sie</td>
              <td>them</td>
            </tr>
            <tr>
              <td>Sie</td>
              <td>Sie</td>
              <td>you (formal)</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Only <em>ich → mich</em>, <em>du → dich</em>, <em>er → ihn</em>, <em>wir → uns</em>, and{' '}
            <em>ihr → euch</em> change form in the accusative.
          </p>
          <p>
            The forms <em>sie</em>, <em>es</em>, and <em>Sie</em> look the same in nominative and
            accusative.
          </p>
          <p>
            The one change worth memorizing is <em>er → ihn</em>: the only accusative pronoun that
            looks completely different from its nominative.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does <em>er</em> become <em>ihn</em> in the accusative, but <em>sie</em> stays{' '}
            <em>sie</em>?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              German historically marked the accusative masculine differently, because masculine
              nouns are the only ones that visibly change case with the definite article:{' '}
              <em>der → den</em>.
            </p>
            <p>
              This same masculine case marking shows up in the pronoun: <em>er → ihn</em>.
            </p>
            <p>
              Feminine nouns do not change in the accusative (<em>die → die</em>), so the feminine
              pronoun also stays the same: <em>sie → sie</em>.
            </p>
          </details>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Replace nouns with pronouns</span>
            <p>Goal: rewrite "Ich kaufe den Wein und die Milch" using accusative pronouns.</p>
            <p>
              Step 1: identify gender. <em>der Wein</em> is masculine, <em>die Milch</em> is
              feminine.
            </p>
            <p>
              Step 2: pick accusative pronouns. Masculine: <em>er → ihn</em>. Feminine:{' '}
              <em>sie → sie</em>.
            </p>
            <p>
              Step 3: substitute. Result:
              <strong> Ich kaufe ihn und sie.</strong>
            </p>
            <p>
              In real speech, German often combines them: <em>Ich kaufe sie</em> (referring to both
              as plural).
            </p>
          </div>
        </div>
      </>,

      <>
        <h2 id="lrn-section-16">Präteritum von sein und haben: Simple Past of sein and haben</h2>
        <p>
          Use the simple past forms of <em>sein</em> and <em>haben</em> in both spoken and written
          German.
        </p>
        <p>
          These two verbs are special: all other verbs use the Perfekt (<em>ich habe … gemacht</em>)
          in spoken German, but <em>sein</em> and <em>haben</em> use Präteritum in everyday speech
          too.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You already know the present tense: <em>ich bin</em> (I am) and <em>ich habe</em> (I
            have). What do you predict the simple past forms look like?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Simple past of <em>sein</em>: <em>ich war</em> (I was).
            </p>
            <p>
              Simple past of <em>haben</em>: <em>ich hatte</em> (I had).
            </p>
            <p>
              Both are completely irregular: they do not look like the present tense forms at all.
            </p>
          </details>
        </div>

        <h3>sein (Präteritum)</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>sein (Präteritum)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>war</td>
            </tr>
            <tr>
              <td>du</td>
              <td>warst</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>war</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>waren</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>wart</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>waren</td>
            </tr>
          </tbody>
        </table>

        <h3>haben (Präteritum)</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>haben (Präteritum)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>hatte</td>
            </tr>
            <tr>
              <td>du</td>
              <td>hattest</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>hatte</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>hatten</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>hattet</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>hatten</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">sein: Ortsveränderung / Zustand</span>
            <p>
              <em>Wir waren in Japan.</em>
            </p>
            <p>We were in Japan. (change of location or state)</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">haben: Besitz / anderes</span>
            <p>
              <em>Wir hatten Glück.</em>
            </p>
            <p>We were lucky. (lit. We had luck.)</p>
          </div>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            <em>Sein</em> and <em>haben</em> use Präteritum in spoken German, unlike most other
            verbs.
          </p>
          <p>
            This is because their Präteritum forms are shorter and easier to say than the Perfekt
            equivalents.
          </p>
          <p>
            Compare: <em>ich war</em> (2 syllables) vs. <em>ich bin gewesen</em> (5 syllables).
          </p>
          <p>German speakers naturally prefer the shorter form in conversation.</p>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">WORKED EXAMPLE: Talk about a past meal</span>
            <p>Goal: write "We were in Italy last year and we had good wine."</p>
            <p>
              Step 1: pick the Präteritum forms. <em>Wir waren</em> for "we were" and{' '}
              <em>wir hatten</em> for "we had."
            </p>
            <p>
              Step 2: use <em>letztes Jahr</em> (last year) as the time phrase. It goes after the
              verb in Präteritum.
            </p>
            <p>
              Step 3: connect with <em>und</em>. Result:
              <strong> Wir waren letztes Jahr in Italien und wir hatten guten Wein.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does <em>du hattest</em> need an extra <em>e</em> before the <em>-st</em> ending,
            while <em>du warst</em> does not?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The Präteritum stem of <em>haben</em> is <em>hatte-</em>. Adding <em>-st</em> directly
              would create <em>hattst</em>, which is hard to pronounce.
            </p>
            <p>
              German inserts an <em>e</em> for ease: <em>hatte + st = hattest</em>. Same pattern in{' '}
              <em>ihr hattet</em>.
            </p>
            <p>
              The Präteritum stem of <em>sein</em> is <em>war-</em>. Adding <em>-st</em> gives a
              clean <em>warst</em> with no extra vowel needed.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2 id="lrn-section-17">Die Kartoffel: Cultural Reading</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The German word <em>Kartoffel</em> comes from a foreign root. Do you predict it comes
            from Italian, Spanish, or Native American?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              <em>Kartoffel</em> comes from Italian <em>tartufolo</em> (truffle). Early Germans
              compared the underground potato to truffles.
            </p>
            <p>
              The potato itself came from South America, brought by Spanish sailors in the 16th
              century.
            </p>
            <p>So the food is American but the German name is Italian.</p>
          </details>
        </div>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Die Kartoffel: Geschichte und Fakten</span>
          <p>
            Spanish sailors brought the potato to Europe in the 16th century from South America.
          </p>
          <p>By the 17th century, the potato became the main food of the poor across Europe.</p>
          <p>
            The Dutch painter Van Gogh depicted potato eaters in his painting "Die Kartoffelesser."
          </p>
          <p>
            The most popular way to prepare potatoes in Germany is <em>Salzkartoffeln</em> (boiled
            with salt).
          </p>
          <p>
            <em>Pommes frites</em> come from Belgium and France: sliced and fried potatoes.
          </p>
          <p>
            <em>Kartoffelchips</em> were invented in Ireland.
          </p>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Salzkartoffeln</span>
            <p>German favourite: boiled potatoes with salt.</p>
            <p>Simple and traditional preparation.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Pommes frites</span>
            <p>From Belgium and France: sliced and fried.</p>
            <p>Contains much more fat: a different culinary tradition.</p>
          </div>
        </div>

        <h3>Kartoffelsuppe mit Champignons (Rezept für 4 Personen)</h3>
        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Zutaten</span>
            <p className="lrn-step-content">
              500g Kartoffeln, Porree, Champignons, Gemüsebrühe, Sahne, Salz, Pfeffer.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Zubereitung</span>
            <p className="lrn-step-content">
              Schälen und schneiden Sie die Kartoffeln. Kochen Sie sie mit Gemüsebrühe. Pürieren Sie
              die Suppe. Würzen Sie mit Salz und Pfeffer. Geben Sie Sahne und Champignons hinzu.
            </p>
          </div>
        </div>

        <h3>Kartoffelsalat mit Apfel (Rezept für 4 Personen)</h3>
        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Zutaten</span>
            <p className="lrn-step-content">
              750g Kartoffeln, 1 Zwiebel, 3 Äpfel, Gemüsebrühe, Essig, Öl, Petersilie, Salz,
              Pfeffer.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Zubereitung</span>
            <p className="lrn-step-content">
              Kochen und schälen Sie die Kartoffeln. Schneiden Sie Kartoffeln, Zwiebel, und Äpfel.
              Vermengen Sie alles mit Gemüsebrühe, Essig, und Öl. Würzen Sie mit Petersilie, Salz,
              und Pfeffer.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the recipe instruction switch between <em>schälen Sie</em> and{' '}
            <em>schneiden Sie</em> with the same subject?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Each new instruction starts a new sentence in the formal imperative. The verb leads,{' '}
              <em>Sie</em> follows.
            </p>
            <p>
              You repeat <em>Sie</em> with every new verb because German imperative clauses are
              independent: they cannot share a subject across a period.
            </p>
            <p>
              This pattern feels formal and clear. It also lets the cook pause between steps without
              losing track.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Potatoes are the most popular Beilage (side dish) in Germany. The traditional
            preparation is <em>Salzkartoffeln</em>: peeled, boiled, salted.
          </p>
          <p>
            German food culture pairs almost every hot meal with potatoes. They show up as boiled,
            roasted, fried, or mashed.
          </p>
          <p>
            The potato also appears in everyday compounds: <em>Kartoffelsalat</em> (potato salad),{' '}
            <em>Kartoffelsuppe</em> (potato soup), <em>Kartoffelpuffer</em> (potato pancake). Each
            compound names a specific traditional dish.
          </p>
        </div>
      </>,

      <>
        <div id="lrn-section-18" className="lrn-section">
          <div className="lrn-header">
            <h2>Food and Eating</h2>
          </div>

          <h3>Meals and Eating Occasions</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Look at <strong>das Mittagessen</strong>. You know <em>Mittag</em> = midday.
            </p>
            <p>
              What does <em>essen</em> add to the meaning?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>essen</em> = to eat.
              </p>
              <p>
                So <strong>das Mittagessen</strong> = midday meal = lunch.
              </p>
            </details>
          </div>

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
                <td>das Abendbrot</td>
                <td>dinner (evening bread)</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Mittagessen</td>
                <td>lunch</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Essen</td>
                <td>food, meal</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Mahlzeit</td>
                <td>meal</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>die Hauptmahlzeit</td>
                <td>main meal</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>das Normalfrühstück</td>
                <td>standard breakfast</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Frühstücksangebot</td>
                <td>breakfast menu</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Frühstücksbüfett</td>
                <td>breakfast buffet</td>
                <td>das</td>
                <td>-s</td>
              </tr>
              <tr>
                <td>das Büffet</td>
                <td>buffet</td>
                <td>das</td>
                <td>-s</td>
              </tr>
            </tbody>
          </table>

          <h3>Fruit</h3>
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
                <td>der Apfel</td>
                <td>apple</td>
                <td>der</td>
                <td>-"</td>
              </tr>
              <tr>
                <td>die Ananas</td>
                <td>pineapple</td>
                <td>die</td>
                <td>-se</td>
              </tr>
              <tr>
                <td>die Aprikose</td>
                <td>apricot</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Banane</td>
                <td>banana</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Birne</td>
                <td>pear</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Erdbeere</td>
                <td>strawberry</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Frucht</td>
                <td>fruit (individual)</td>
                <td>die</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>die Haselnuss</td>
                <td>hazelnut</td>
                <td>die</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>die Kirsche</td>
                <td>cherry</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Kiwi</td>
                <td>kiwi</td>
                <td>die</td>
                <td>-s</td>
              </tr>
              <tr>
                <td>die Limette</td>
                <td>lime</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Mango</td>
                <td>mango</td>
                <td>die</td>
                <td>-s</td>
              </tr>
              <tr>
                <td>die Melone</td>
                <td>melon</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Nektarine</td>
                <td>nectarine</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Nuss</td>
                <td>nut</td>
                <td>die</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>das Obst</td>
                <td>fruit (collective)</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Obstsalat</td>
                <td>fruit salad</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Orange</td>
                <td>orange</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Pflaume</td>
                <td>plum</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Traube</td>
                <td>grape</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Weintrauben</td>
                <td>wine grapes</td>
                <td>die</td>
                <td>Pl.</td>
              </tr>
              <tr>
                <td>die Zitrone</td>
                <td>lemon</td>
                <td>die</td>
                <td>-n</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-compare">
            <p>
              <strong>das Obst</strong> vs. <strong>die Frucht</strong>
            </p>
            <ul className="lrn-list">
              <li>
                <strong>das Obst</strong> = fruit as a food category (uncountable, like "fruit" in
                English)
              </li>
              <li>
                <strong>die Frucht</strong> = a single fruit (countable)
              </li>
            </ul>
          </div>

          <h3>Vegetables</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know <strong>das Gemüse</strong> = vegetables. What do you think{' '}
              <strong>der Gemüsehändler</strong> means?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Händler = dealer/seller. So der Gemüsehändler = vegetable seller.</p>
              <p>The article follows Händler (der), not Gemüse (das).</p>
            </details>
          </div>

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
                <td>die Bohnen</td>
                <td>beans</td>
                <td>die</td>
                <td>Pl.</td>
              </tr>
              <tr>
                <td>die Erbse</td>
                <td>pea</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>das Gemüse</td>
                <td>vegetables</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Gemüsehändler</td>
                <td>vegetable seller</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Karotte</td>
                <td>carrot</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>der Knoblauch</td>
                <td>garlic</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Möhre</td>
                <td>carrot</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>der Rotkohl</td>
                <td>red cabbage</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Rotkraut</td>
                <td>red cabbage</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Salzkartoffel</td>
                <td>boiled potato</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Tomate</td>
                <td>tomato</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Zwiebel</td>
                <td>onion</td>
                <td>die</td>
                <td>-n</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-compare">
            <p>
              <strong>die Karotte</strong> vs. <strong>die Möhre</strong>
            </p>
            <ul className="lrn-list">
              <li>Both mean carrot.</li>
              <li>
                <strong>Karotte</strong> is more standard German.
              </li>
              <li>
                <strong>Möhre</strong> is regional (used in northern Germany).
              </li>
            </ul>
          </div>

          <h3>Meat, Fish and Dairy</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know <strong>der Fisch</strong> = fish. What article does{' '}
              <strong>Fischgericht</strong> take?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>Gericht</em> = das Gericht (dish). The last word determines the article.
              </p>
              <p>
                So: <strong>das Fischgericht</strong>.
              </p>
            </details>
          </div>

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
                <td>das Fleisch</td>
                <td>meat</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Fischgericht</td>
                <td>fish dish</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>der Fisch</td>
                <td>fish</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Forelle</td>
                <td>trout</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>das Huhn</td>
                <td>chicken</td>
                <td>das</td>
                <td>-"er</td>
              </tr>
              <tr>
                <td>das Hühnerfilet</td>
                <td>chicken fillet</td>
                <td>das</td>
                <td>-s</td>
              </tr>
              <tr>
                <td>der Lachs</td>
                <td>salmon</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Leberwurst</td>
                <td>liver sausage</td>
                <td>die</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>das Rind</td>
                <td>beef</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>der Rindergulasch</td>
                <td>beef goulash</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Salami</td>
                <td>salami</td>
                <td>die</td>
                <td>-s</td>
              </tr>
              <tr>
                <td>die Sardine</td>
                <td>sardine</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>der Schinken</td>
                <td>ham</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Schnitzel</td>
                <td>cutlet, schnitzel</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Schweinebraten</td>
                <td>roast pork</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Schweinslende</td>
                <td>pork tenderloin</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>das Steak</td>
                <td>steak</td>
                <td>das</td>
                <td>-s</td>
              </tr>
              <tr>
                <td>der Steinbutt</td>
                <td>turbot</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Wurst</td>
                <td>sausage</td>
                <td>die</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>die Wurstware</td>
                <td>sausage goods</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>der Käse</td>
                <td>cheese</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Käseauswahl</td>
                <td>cheese selection</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>der Frischkäse</td>
                <td>fresh cheese</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Schnittkäse</td>
                <td>slicing cheese</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der/das Joghurt</td>
                <td>yoghurt</td>
                <td>der/das</td>
                <td>-(s)</td>
              </tr>
              <tr>
                <td>das Milchprodukt</td>
                <td>dairy product</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Sahne</td>
                <td>cream</td>
                <td>die</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Schlagsahne</td>
                <td>whipped cream</td>
                <td>die</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          <h3>Bread and Baked Goods</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You see <strong>das Vollkornbrot</strong> in a bakery. <em>Voll</em> = full,{' '}
              <em>Korn</em> = grain.
            </p>
            <p>What type of bread is it?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>das Vollkornbrot</strong> = wholemeal bread (bread made from whole grain).
              </p>
              <p>
                German bakeries commonly list Weißbrot, Schwarzbrot, and Vollkornbrot as options.
              </p>
            </details>
          </div>

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
                <td>das Brot</td>
                <td>bread</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Schwarzbrot</td>
                <td>black bread</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Toastbrot</td>
                <td>toast</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Vollkornbrot</td>
                <td>wholemeal bread</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Weißbrot</td>
                <td>white bread</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Backware</td>
                <td>pastries, baked goods</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>der Apfelkuchen</td>
                <td>apple cake</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Kuchen</td>
                <td>cake</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Sahnetorte</td>
                <td>cream cake</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Torte</td>
                <td>gateau, layer cake</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Erdbeersahnetorte</td>
                <td>strawberry cream cake</td>
                <td>die</td>
                <td>-n</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Notice that all bread types above are <strong>das</strong>: das Brot, das Schwarzbrot,
              das Weißbrot, das Vollkornbrot, das Toastbrot.
            </p>
            <p>
              The compound article follows the last word. Brot = das, so all Brot compounds = das.
            </p>
            <p>Cakes are different: Kuchen = der, Torte = die.</p>
          </div>

          <h3>Drinks</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              What do you think <strong>die Weinschorle</strong> is? <em>Wein</em> = wine.{' '}
              <em>Schorle</em> = sparkling mix.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                die Weinschorle = wine mixed with sparkling mineral water. Common in Germany,
                especially in summer.
              </p>
            </details>
          </div>

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
                <td>das Getränk</td>
                <td>drink</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Erfrischungsgetränk</td>
                <td>refreshing drink</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>der Apfelsaft</td>
                <td>apple juice</td>
                <td>der</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>der Apfelwein</td>
                <td>cider</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>der Champagner</td>
                <td>champagne</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Likör</td>
                <td>liqueur</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Mineralwasser</td>
                <td>mineral water</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Rotwein</td>
                <td>red wine</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>der Rum</td>
                <td>rum</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Saft</td>
                <td>juice</td>
                <td>der</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>das Wasser</td>
                <td>water</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Wein</td>
                <td>wine</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Weinschorle</td>
                <td>wine with sparkling water</td>
                <td>die</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Weißwein</td>
                <td>white wine</td>
                <td>der</td>
                <td>-e</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Many drinks above are <strong>der</strong> (Saft, Wein, Apfelsaft, Orangensaft,
              Rotwein, Weißwein). Why?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Der Saft (juice) and der Wein (wine) are both masculine. Compound drinks inherit
                their article from the last word.
              </p>
              <p>
                Apfelsaft = Apfel + Saft (der) = der Apfelsaft. Rotwein = rot + Wein (der) = der
                Rotwein.
              </p>
              <p>Knowing der Saft and der Wein unlocks six more compounds automatically.</p>
            </details>
          </div>

          <h3>Seasonings and Basics</h3>
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
                <td>die Butter</td>
                <td>butter</td>
                <td>die</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Ei</td>
                <td>egg</td>
                <td>das</td>
                <td>-er</td>
              </tr>
              <tr>
                <td>der Essig</td>
                <td>vinegar</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>der Honig</td>
                <td>honey</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Margarine</td>
                <td>margarine</td>
                <td>die</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Marmelade</td>
                <td>marmalade, jam</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>das Öl</td>
                <td>oil</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>der Pfeffer</td>
                <td>pepper</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Quark</td>
                <td>cottage cheese</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Rührei</td>
                <td>scrambled egg</td>
                <td>das</td>
                <td>-er</td>
              </tr>
              <tr>
                <td>das Salz</td>
                <td>salt</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Zucker</td>
                <td>sugar</td>
                <td>der</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          <h3>Restaurant and Ordering</h3>
          <p>
            You use these phrases when you sit down at a restaurant, order food, or pay the bill.
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
                <td>der Appetit</td>
                <td>appetite</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Auswahl</td>
                <td>choice, selection</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>das Gericht</td>
                <td>dish</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Hauptgericht</td>
                <td>main dish</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Nachspeise</td>
                <td>dessert</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Speisekarte</td>
                <td>menu</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Suppe</td>
                <td>soup</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>der Suppenteller</td>
                <td>soup plate</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Tomatensuppe</td>
                <td>tomato soup</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Vorspeise</td>
                <td>starter</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Rechnung</td>
                <td>bill, check</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>der Service</td>
                <td>service</td>
                <td>der</td>
                <td>-s</td>
              </tr>
              <tr>
                <td>die Serviette</td>
                <td>napkin</td>
                <td>die</td>
                <td>-n</td>
              </tr>
            </tbody>
          </table>

          <h3>Cutlery and Tableware</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know <strong>das Glas</strong> = glass. What article does{' '}
              <strong>Wasserglas</strong> take?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The article of a compound follows the last word. Glas = das, so{' '}
                <strong>das Wasserglas</strong>.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              <strong>Compound noun article rule:</strong> the article always follows the last word.
            </p>
            <ul className="lrn-list">
              <li>
                Stadt (die) + Plan (der) = <strong>der</strong> Stadtplan
              </li>
              <li>
                Wasser (das) + Glas (das) = <strong>das</strong> Wasserglas
              </li>
              <li>
                Zimmer (das) + Schlüssel (der) = <strong>der</strong> Zimmerschlüssel
              </li>
            </ul>
            <p>Learn this rule once. It applies to every compound noun in German.</p>
          </div>

          <h3>Quantities and Measurements</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>You are at a market. The seller says: "Das macht zwei Euro, bitte passend."</p>
            <p>
              What does <strong>passend</strong> mean here?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>passend</strong> = exact (money). The seller asks you to pay the exact
                amount.
              </p>
              <p>A useful word when you want to say you do not have change.</p>
            </details>
          </div>

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
                <td>das Gramm</td>
                <td>gram</td>
                <td>200 Gramm Butter</td>
              </tr>
              <tr>
                <td>das Kilo</td>
                <td>kilogram</td>
                <td>ein Kilo Äpfel</td>
              </tr>
              <tr>
                <td>das Pfund</td>
                <td>pound (0.5 kg)</td>
                <td>ein Pfund Butter</td>
              </tr>
              <tr>
                <td>die Menge</td>
                <td>quantity</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Maß</td>
                <td>measure</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Scheibe</td>
                <td>slice</td>
                <td>zwei Scheiben Brot</td>
              </tr>
              <tr>
                <td>die Tube</td>
                <td>tube</td>
                <td>eine Tube Tomatenmark</td>
              </tr>
              <tr>
                <td>das Bund</td>
                <td>bunch</td>
                <td>ein Bund Petersilie</td>
              </tr>
              <tr>
                <td>der Kasten</td>
                <td>crate, box</td>
                <td>ein Kasten Bier</td>
              </tr>
              <tr>
                <td>(ein) paar</td>
                <td>a few</td>
                <td>ein paar Orangen</td>
              </tr>
              <tr>
                <td>das Prozent</td>
                <td>percent</td>
                <td>10 Prozent</td>
              </tr>
            </tbody>
          </table>

          <h3>Shopping Vocabulary</h3>
          <p>
            You use these words when discussing food preferences, reading labels, or talking about
            eating habits with someone.
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
                <td>die Abneigung</td>
                <td>aversion, dislike</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>die Ernährung</td>
                <td>nutrition, diet</td>
                <td>die</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Essgewohnheit</td>
                <td>eating habit</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>das Lebensmittel</td>
                <td>food item</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Nahrungsmittel</td>
                <td>food, aliment</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Verpackung</td>
                <td>packaging, wrapping</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>der Vegetarier</td>
                <td>vegetarian (male)</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Kunde</td>
                <td>customer (male)</td>
                <td>der</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Kundin</td>
                <td>customer (female)</td>
                <td>die</td>
                <td>-nen</td>
              </tr>
              <tr>
                <td>passend</td>
                <td>exact (of money)</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>sonst</td>
                <td>otherwise, anything else</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          <h3>Food Adjectives and Taste</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Which of these tastes is <em>not</em> a basic food taste: salzig, scharf, sauer, süß,
              ruhig?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>ruhig</strong> = calm, peaceful. It is not a taste word at all.
              </p>
              <p>
                The four basic food taste adjectives: salzig (salty), scharf (spicy), sauer (sour),
                süß (sweet).
              </p>
            </details>
          </div>

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
                <td>ausgezeichnet</td>
                <td>excellent</td>
                <td>Die Suppe schmeckt ausgezeichnet.</td>
              </tr>
              <tr>
                <td>beliebt</td>
                <td>popular</td>
                <td>Äpfel sind sehr beliebt.</td>
              </tr>
              <tr>
                <td>fein</td>
                <td>fine, delicate</td>
                <td>feine Erbsen</td>
              </tr>
              <tr>
                <td>fett</td>
                <td>fat, fatty</td>
                <td>fettes Fleisch</td>
              </tr>
              <tr>
                <td>frisch</td>
                <td>fresh</td>
                <td>Das Brot ist frisch.</td>
              </tr>
              <tr>
                <td>gekocht</td>
                <td>boiled, cooked</td>
                <td>gekochtes Ei</td>
              </tr>
              <tr>
                <td>gemischt</td>
                <td>mixed</td>
                <td>gemischter Salat</td>
              </tr>
              <tr>
                <td>gesund</td>
                <td>healthy</td>
                <td>gesunde Ernährung</td>
              </tr>
              <tr>
                <td>gepresst</td>
                <td>pressed</td>
                <td>frisch gepresst</td>
              </tr>
              <tr>
                <td>grün</td>
                <td>green</td>
                <td>grüner Salat</td>
              </tr>
              <tr>
                <td>heiß</td>
                <td>hot</td>
                <td>heißer Tee</td>
              </tr>
              <tr>
                <td>köstlich</td>
                <td>delicious</td>
                <td>Das Essen ist köstlich.</td>
              </tr>
              <tr>
                <td>lecker</td>
                <td>delicious, tasty</td>
                <td>Das schmeckt lecker!</td>
              </tr>
              <tr>
                <td>natur</td>
                <td>plain, natural</td>
                <td>Joghurt natur</td>
              </tr>
              <tr>
                <td>reichhaltig</td>
                <td>rich, substantial</td>
                <td>reichhaltiges Frühstück</td>
              </tr>
              <tr>
                <td>roh</td>
                <td>raw, uncooked</td>
                <td>rohes Gemüse</td>
              </tr>
              <tr>
                <td>salzig</td>
                <td>salty</td>
                <td>salzige Snacks</td>
              </tr>
              <tr>
                <td>sauer</td>
                <td>sour</td>
                <td>Die Milch ist sauer.</td>
              </tr>
              <tr>
                <td>scharf</td>
                <td>spicy, hot</td>
                <td>scharfe Salami</td>
              </tr>
              <tr>
                <td>schrecklich</td>
                <td>terrible, horrible</td>
                <td>Das Essen ist schrecklich.</td>
              </tr>
              <tr>
                <td>süß</td>
                <td>sweet</td>
                <td>süße Pralinen</td>
              </tr>
              <tr>
                <td>toll</td>
                <td>great, fantastic</td>
                <td>ein tolles Büffet</td>
              </tr>
              <tr>
                <td>traditionell</td>
                <td>traditional</td>
                <td>traditionelle Küche</td>
              </tr>
              <tr>
                <td>unfreundlich</td>
                <td>unfriendly</td>
                <td>unfreundlicher Service</td>
              </tr>
              <tr>
                <td>ungenießbar</td>
                <td>inedible, uneatable</td>
                <td>Das ist ungenießbar.</td>
              </tr>
              <tr>
                <td>ungesund</td>
                <td>unhealthy</td>
                <td>ungesunde Ernährung</td>
              </tr>
              <tr>
                <td>vegetarisch</td>
                <td>vegetarian</td>
                <td>vegetarisches Gericht</td>
              </tr>
              <tr>
                <td>warm</td>
                <td>warm</td>
                <td>warmes Frühstück</td>
              </tr>
              <tr>
                <td>zart</td>
                <td>tender, fine</td>
                <td>zarte Pralinen</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-compare">
            <p>
              <strong>lecker</strong> vs. <strong>köstlich</strong>
            </p>
            <ul className="lrn-list">
              <li>
                <strong>lecker</strong> = casual, everyday "tasty". Use it with friends: Das
                schmeckt lecker!
              </li>
              <li>
                <strong>köstlich</strong> = more formal or emphatic "delicious". Use it in a
                restaurant review or formal compliment.
              </li>
            </ul>
          </div>

          <h3>Cooking Verbs</h3>
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
                <td>bestellen</td>
                <td>to order</td>
                <td>im Restaurant</td>
              </tr>
              <tr>
                <td>einkaufen</td>
                <td>to shop, to buy</td>
                <td>Nahrungsmittel einkaufen</td>
              </tr>
              <tr>
                <td>mischen</td>
                <td>to mix</td>
                <td>den Wein mit Wasser mischen</td>
              </tr>
              <tr>
                <td>schmecken</td>
                <td>to taste</td>
                <td>Das schmeckt gut.</td>
              </tr>
              <tr>
                <td>servieren</td>
                <td>to serve</td>
                <td>das Essen servieren</td>
              </tr>
              <tr>
                <td>auswählen</td>
                <td>to choose, to pick</td>
                <td>Wählen Sie aus.</td>
              </tr>
              <tr>
                <td>bestehen aus</td>
                <td>to consist of</td>
                <td>bestehen aus + Dativ</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does <strong>bestehen</strong> take the dative? Think about what the phrase means.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>aus</em> is a preposition that always triggers the dative case in German.
              </p>
              <p>Example: Das Frühstück besteht aus Brot, Marmelade und Butter.</p>
              <p>
                Rule: <em>aus</em> always takes dative.
              </p>
            </details>
          </div>

          <h3>Sweets and Snacks</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know <strong>die Schokolade</strong> = chocolate. What do you think{' '}
              <strong>die Vollmilchschokolade</strong> is?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Vollmilch = whole milk. So die Vollmilchschokolade = milk chocolate.</p>
              <p>
                German chocolate bars often specify: Vollmilch (milk), Zartbitter (dark), or weiß
                (white).
              </p>
            </details>
          </div>

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
                <td>das Goldbärchen</td>
                <td>type of gummy candy</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Nougatpralinen</td>
                <td>nougat pralines</td>
                <td>die</td>
                <td>Pl.</td>
              </tr>
              <tr>
                <td>die Pralinen</td>
                <td>pralines, chocolates</td>
                <td>die</td>
                <td>Pl.</td>
              </tr>
              <tr>
                <td>die Schokolade</td>
                <td>chocolate</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Süßigkeit</td>
                <td>sweet, candy</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>die Vollmilchschokolade</td>
                <td>milk chocolate</td>
                <td>die</td>
                <td>-n</td>
              </tr>
            </tbody>
          </table>

          <h3>Frequency and Eating Habits</h3>
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
                <td>einmal</td>
                <td>once</td>
                <td>einmal pro Woche</td>
              </tr>
              <tr>
                <td>zweimal</td>
                <td>twice</td>
                <td>zweimal täglich</td>
              </tr>
              <tr>
                <td>dreimal</td>
                <td>three times</td>
                <td>dreimal am Tag</td>
              </tr>
              <tr>
                <td>manchmal</td>
                <td>sometimes</td>
                <td>manchmal esse ich Pizza.</td>
              </tr>
              <tr>
                <td>nie</td>
                <td>never</td>
                <td>Ich esse nie Fleisch.</td>
              </tr>
              <tr>
                <td>normalerweise</td>
                <td>normally</td>
                <td>normalerweise esse ich um 12 Uhr.</td>
              </tr>
              <tr>
                <td>selten</td>
                <td>rarely</td>
                <td>Ich trinke selten Alkohol.</td>
              </tr>
              <tr>
                <td>wie oft?</td>
                <td>how often?</td>
                <td>Wie oft essen Sie aus?</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              <strong>Frequency adverbs in German</strong>
            </p>
            <p>
              German forms "X times" by adding <em>-mal</em> to the number.
            </p>
            <ul className="lrn-list">
              <li>ein + mal = einmal (once)</li>
              <li>zwei + mal = zweimal (twice)</li>
              <li>drei + mal = dreimal (three times)</li>
              <li>fünf + mal = fünfmal (five times)</li>
            </ul>
            <p>This pattern is fully regular.</p>
          </div>

          <h3>Other Food and Culture Words</h3>
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
                <td>der Hamburger</td>
                <td>hamburger</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Hunger</td>
                <td>hunger</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Kochen</td>
                <td>cooking (the activity)</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Salat</td>
                <td>salad</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Pizza</td>
                <td>pizza</td>
                <td>die</td>
                <td>-s</td>
              </tr>
              <tr>
                <td>die Pommes frites</td>
                <td>French fries, chips</td>
                <td>die</td>
                <td>Pl.</td>
              </tr>
              <tr>
                <td>die Spaghetti</td>
                <td>spaghetti</td>
                <td>die</td>
                <td>Pl.</td>
              </tr>
              <tr>
                <td>das Tomatenmark</td>
                <td>tomato paste</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Gemeinsamkeit</td>
                <td>similarity</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>der Gegensatz</td>
                <td>contrast</td>
                <td>der</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>die Meinung</td>
                <td>opinion</td>
                <td>die</td>
                <td>-en</td>
              </tr>
              <tr>
                <td>die Sympathie</td>
                <td>sympathy, liking</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>der Unterschied</td>
                <td>difference</td>
                <td>der</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Vorliebe</td>
                <td>preference</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>ursprünglich</td>
                <td>originally</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>wirklich</td>
                <td>really</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>zur Zeit</td>
                <td>at the moment</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>jung</td>
                <td>young</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>besonders</td>
                <td>especially, particularly</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>genug</td>
                <td>enough</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>früher</td>
                <td>in the past, formerly</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>früh</td>
                <td>early</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>richtig</td>
                <td>really, properly</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>ruhig</td>
                <td>calm, peaceful</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>seltsam</td>
                <td>strange, curious</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>schwer</td>
                <td>difficult, heavy</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>ernst</td>
                <td>serious (erst mal = first of all)</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>,

      <>
        <div id="lrn-section-19" className="lrn-section">
          <div className="lrn-header">
            <h2>Extended Food Culture and Cooking</h2>
          </div>

          <h3>Cooking Actions and Methods</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Look at <strong>frittieren</strong>. Does it look like any word in English?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>frittieren</strong> = to fry (in deep fat). It looks like "fritter".
              </p>
              <p>Pommes frittes (French fries) come from this same root.</p>
            </details>
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
                <td>enthalten [er enthält]</td>
                <td>to contain</td>
                <td>irregular; Pommes frites enthalten viel Fett.</td>
              </tr>
              <tr>
                <td>frittieren</td>
                <td>to deep-fry</td>
                <td>Kartoffelscheiben frittieren</td>
              </tr>
              <tr>
                <td>produzieren</td>
                <td>to produce</td>
                <td>Lebensmittel produzieren</td>
              </tr>
              <tr>
                <td>sauber machen</td>
                <td>to clean</td>
                <td>die Champignons sauber machen</td>
              </tr>
            </tbody>
          </table>

          <h3>Ingredients and Cooking Items</h3>
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
                <td>die Brühe</td>
                <td>broth, stock</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>der Champignon</td>
                <td>mushroom</td>
                <td>der</td>
                <td>-s</td>
              </tr>
              <tr>
                <td>der/das Curry</td>
                <td>curry</td>
                <td>der/das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Fett</td>
                <td>fat (noun)</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>die Gans</td>
                <td>goose</td>
                <td>die</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>das Gewürz</td>
                <td>spice</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>das Hauptnahrungsmittel</td>
                <td>staple food</td>
                <td>das</td>
                <td>-</td>
              </tr>
              <tr>
                <td>die Kartoffelchips</td>
                <td>crisps, chips</td>
                <td>die</td>
                <td>Pl.</td>
              </tr>
              <tr>
                <td>die Kartoffelscheibe</td>
                <td>thin potato slice</td>
                <td>die</td>
                <td>-n</td>
              </tr>
              <tr>
                <td>die Petersilie</td>
                <td>parsley</td>
                <td>die</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Porree</td>
                <td>leek</td>
                <td>der</td>
                <td>-s</td>
              </tr>
              <tr>
                <td>der Safran</td>
                <td>saffron</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Streifen</td>
                <td>strip, long slice</td>
                <td>der</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          <h3>Food History and Culture Words</h3>
          <p>Saffron (Safran) followed the spice trade route through Venice (Venedig).</p>
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
                <td>ab</td>
                <td>since (time)</td>
                <td>ab dem 17. Jahrhundert</td>
              </tr>
              <tr>
                <td>die Ahnung</td>
                <td>idea, clue</td>
                <td>Ich habe keine Ahnung. (I have no idea.)</td>
              </tr>
              <tr>
                <td>anders</td>
                <td>differently, in another way</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Argentinien</td>
                <td>Argentina</td>
                <td>proper noun</td>
              </tr>
              <tr>
                <td>arm</td>
                <td>poor</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Asien</td>
                <td>Asia</td>
                <td>proper noun</td>
              </tr>
              <tr>
                <td>danach</td>
                <td>after that, afterwards</td>
                <td>-</td>
              </tr>
              <tr>
                <td>dazu</td>
                <td>to it, in addition</td>
                <td>= hinzu</td>
              </tr>
              <tr>
                <td>dünn</td>
                <td>thin, fine</td>
                <td>dünne Scheiben schneiden</td>
              </tr>
              <tr>
                <td>etwa</td>
                <td>approximately</td>
                <td>etwa 20 Minuten</td>
              </tr>
              <tr>
                <td>Europa</td>
                <td>Europe</td>
                <td>proper noun</td>
              </tr>
              <tr>
                <td>die Form</td>
                <td>form, shape</td>
                <td>in Form von Kartoffelchips</td>
              </tr>
              <tr>
                <td>hinzu</td>
                <td>in addition, to it</td>
                <td>= dazu</td>
              </tr>
              <tr>
                <td>das Kaffeehaus</td>
                <td>cafe</td>
                <td>das Kaffeehaus, -"er</td>
              </tr>
              <tr>
                <td>der Nachteil</td>
                <td>disadvantage</td>
                <td>-</td>
              </tr>
              <tr>
                <td>sauber</td>
                <td>clean, tidy</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Seefahrer</td>
                <td>sailor, seafarer</td>
                <td>der Seefahrer, -</td>
              </tr>
              <tr>
                <td>sondern</td>
                <td>but (after a negative)</td>
                <td>nicht ... sondern ...</td>
              </tr>
              <tr>
                <td>Venedig</td>
                <td>Venice</td>
                <td>proper noun</td>
              </tr>
              <tr>
                <td>verschieden</td>
                <td>various, different</td>
                <td>auf verschiedene Weise</td>
              </tr>
              <tr>
                <td>die Weise</td>
                <td>way, manner</td>
                <td>auf verschiedene Weise</td>
              </tr>
              <tr>
                <td>das Weihnachten</td>
                <td>Christmas</td>
                <td>zu Weihnachten = for Christmas</td>
              </tr>
              <tr>
                <td>weltbekannt</td>
                <td>world-famous</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does German use <strong>ab</strong> to mean "since" when talking about time?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>ab</em> signals the starting point of something that continues.
              </p>
              <p>Example: ab dem 17. Jahrhundert = since the 17th century (and continuing).</p>
              <p>
                It is different from <em>seit</em>, which also means "since" but focuses on
                something still ongoing.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-20">
          <h2>Quantities and Prices</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              How would you say the price of something in German? Try a sentence with "kosten" and
              "Euro".
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>"Das Buch kostet acht Euro."</strong> Pattern: subject + kosten + amount +
                currency. The verb "kosten" gets the -t ending for "es / das".
              </p>
            </details>
          </div>

          <h3>Money and Price Vocabulary</h3>
          <ul className="lrn-list">
            <li>
              <strong>der Euro, -(s)</strong>: euro
            </li>
            <li>
              <strong>der Cent, -s</strong>: cent
            </li>
            <li>
              <strong>die Euromünze, -n</strong>: euro coin
            </li>
            <li>
              <strong>der Geldschein, -e</strong>: banknote
            </li>
            <li>
              <strong>der Preis, -e</strong>: price
            </li>
            <li>
              <strong>die Preisangabe, -n</strong>: price indication
            </li>
            <li>
              <strong>die Rechnung, -en</strong>: invoice, bill
            </li>
            <li>
              <strong>die Million, -en</strong>: million
            </li>
          </ul>

          <h3>Price Adjectives</h3>
          <ul className="lrn-list">
            <li>
              <strong>billig</strong>: cheap
            </li>
            <li>
              <strong>teuer / teur-</strong>: expensive
            </li>
            <li>
              <strong>preiswert</strong>: good value
            </li>
          </ul>

          <h3>Worked Example: "Das Buch kostet acht Euro."</h3>
          <ol className="lrn-list">
            <li>
              Subject: <strong>Das Buch</strong> (the book), neuter.
            </li>
            <li>
              Verb "kosten" conjugates for er/sie/es: <strong>kostet</strong>.
            </li>
            <li>
              Amount: <strong>acht</strong> (eight).
            </li>
            <li>
              Currency: <strong>Euro</strong>.
            </li>
            <li>Final: "Das Buch kostet acht Euro." (The book costs eight euros.)</li>
          </ol>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the verb form "kostet" (not "kosten") appear in this sentence?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                "Das Buch" is third person singular ("es"). The German rule is that "er / sie / es"
                takes the -t ending: ich koste, du kostest, er / sie / es kostet. So the book
                "kostet" eight euros, not "kosten".
              </p>
            </details>
          </div>

          <h3>Worked Example: "drei Scheiben Schinken pro Person"</h3>
          <p>
            The word <strong>pro</strong> means "per". Use it to express rates.
          </p>
          <ol className="lrn-list">
            <li>
              Quantity: <strong>drei</strong> (three).
            </li>
            <li>
              Container/portion noun: <strong>Scheiben</strong> (slices), plural of die Scheibe.
            </li>
            <li>
              Item noun: <strong>Schinken</strong> (ham), no article needed after a quantity.
            </li>
            <li>
              Rate word: <strong>pro</strong> (per).
            </li>
            <li>
              Unit: <strong>Person</strong> (person).
            </li>
            <li>Final: "drei Scheiben Schinken pro Person" (three slices of ham per person).</li>
          </ol>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">billig (cheap)</p>
              <p>"Das Buch ist billig."</p>
            </div>
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">teuer (expensive)</p>
              <p>"Das Buch ist teuer."</p>
            </div>
          </div>

          <p>
            You can ask about prices using <strong>nach den Preisen fragen</strong> (to ask for the
            prices). A direct question is "Was kostet das?" (What does that cost?)
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The "kosten" pattern stays simple because money is one of the few topics where German
              keeps word order familiar to English speakers. Subject, verb, amount, currency. No
              tricky inversions.
            </p>
          </div>
        </div>
      </>
    ]
  },
  practice: [
    {
      q: 'What is the German word for "orange juice"?',
      a: 'der Orangensaft. The article is <em>der</em> because it is masculine. Another example: der Kaffee, der Tee: drinks in German are often masculine.'
    },
    {
      q: 'How do you say "I would like a cup of coffee" in German? Use the polite form.',
      a: '<em>Ich möchte eine Tasse Kaffee, bitte.</em> The rule: <em>möchte</em> is used for current wishes and requests, not for general preferences. Another example: <em>Ich möchte ein Glas Wasser.</em>'
    },
    {
      q: 'Fill in the correct verb form: "Du ___ einen Apfel." (essen)',
      a: '<em>isst</em>. The rule: <em>essen</em> has a stem-vowel change <em>e → i</em> in the <em>du</em> and <em>er/sie/es</em> forms. So: <em>ich esse, du isst, er isst</em>. Another example: <em>Er isst ein Brötchen.</em>'
    },
    {
      q: 'What is the plural of <em>das Glas</em>?',
      a: '<em>die Gläser</em>. The rule: this belongs to Plural Group 4: adds <em>-er</em> ending and adds an umlaut to the stem vowel (a → ä). Another example: <em>der Mann → die Männer</em>.'
    },
    {
      q: 'Translate: "I like chocolate, but I don\'t like liver sausage."',
      a: '<em>Ich mag Schokolade, aber ich mag keine Leberwurst.</em> The rule: <em>mögen</em> expresses permanent preferences. Use <em>kein</em> to negate a noun directly. Another example: <em>Ich mag Kaffee, aber ich mag keinen Tee.</em>'
    },
    {
      q: 'Fill in the correct article and adjective ending: "___ rohen Schinken" (indefinite article, masculine, accusative).',
      a: '<em>einen rohen Schinken</em>. The rule: masculine accusative takes <em>einen</em> for the indefinite article. The adjective takes <em>-en</em> (weak ending after indefinite article in accusative). Another example: <em>Ich esse einen frischen Apfel.</em>'
    },
    {
      q: 'How do you give the formal imperative for "Peel the fruit" in German?',
      a: '<em>Schälen Sie das Obst.</em> The rule: in the formal imperative, the verb comes first (position 1), then <em>Sie</em> (position 2). The verb form looks identical to the regular <em>Sie</em> present tense form. Another example: <em>Kochen Sie die Kartoffeln.</em>'
    },
    {
      q: 'What is the difference between <em>Ich mag Schokolade</em> and <em>Ich möchte eine Tafel Schokolade</em>?',
      a: '<em>Ich mag Schokolade</em> = I like chocolate (permanent preference, general). <em>Ich möchte eine Tafel Schokolade</em> = I would like a bar of chocolate (current wish, specific request). The rule: <em>mögen</em> for general feelings; <em>möchten</em> for immediate requests. Another example: <em>Ich mag Pizza / Ich möchte bitte eine Pizza Margherita.</em>'
    },
    {
      q: 'What is the German word for "a can of peas"?',
      a: '<em>eine Dose Erbsen</em>. The rule: container nouns go directly before the contents: no <em>von</em> (of) is needed. Compare English "a can <em>of</em> peas" vs. German <em>eine Dose Erbsen</em>. Another example: <em>eine Flasche Wasser, ein Becher Joghurt</em>.'
    },
    {
      q: 'Fill in the correct form: "Wo ___ du gestern?" (sein, Präteritum)',
      a: '<em>warst</em>. The rule: <em>sein</em> Präteritum is irregular: <em>ich war, du warst, er war, wir waren</em>. You use Präteritum (not Perfekt) for <em>sein</em> even in spoken German. Another example: <em>Ich war in Berlin. Wir waren im Restaurant.</em>'
    },
    {
      q: 'How do you say "three bottles of beer" in German?',
      a: '<em>drei Flaschen Bier</em>. The rule: the container noun goes into the plural, and the contents follow directly with no preposition. <em>Flasche → Flaschen</em> (Group 5 plural, <em>-n</em> ending). Another example: <em>zwei Tassen Kaffee, vier Gläser Wein</em>.'
    },
    {
      q: 'Replace the noun with the correct accusative pronoun: "Ich esse den Apfel. Ich esse ___."',
      a: '<em>ihn</em>. The rule: <em>der Apfel</em> is masculine, and the masculine accusative pronoun is <em>ihn</em>. This is the one accusative pronoun that changes completely from the nominative: <em>er → ihn</em>. Another example: <em>Ich kaufe den Wein. → Ich kaufe ihn.</em>'
    },
    {
      q: 'What is the plural of <em>die Tasse</em>?',
      a: '<em>die Tassen</em>. The rule: <em>die Tasse</em> belongs to Plural Group 5: adds <em>-n</em> ending. Most feminine nouns belong to this group. Another example: <em>die Banane → die Bananen, die Serviette → die Servietten</em>.'
    },
    {
      q: 'Translate: "We were in Japan and we had luck."',
      a: '<em>Wir waren in Japan und wir hatten Glück.</em> The rule: <em>sein</em> Präteritum: <em>wir waren</em>. <em>haben</em> Präteritum: <em>wir hatten</em>. Use Präteritum for both <em>sein</em> and <em>haben</em> in both spoken and written German. Another example: <em>Ich war in Berlin und hatte ein gutes Hotel.</em>'
    },
    {
      q: 'A waiter asks: "Wie schmeckt der Lachs?" How do you answer using a pronoun?',
      a: '<em>Er schmeckt ausgezeichnet.</em> The rule: replace <em>der Lachs</em> (masculine) with <em>er</em>. The subject pronoun for a masculine noun is <em>er</em>. Another example: <em>Wie schmeckt die Suppe?: Sie schmeckt sehr gut.</em>'
    },
    {
      q: 'What are the three ways to negate a food preference in German? Give one example for each.',
      a: "(1) <em>kein</em>: <em>Ich mag keinen Weißwein.</em> (none / not any). (2) <em>nie</em>: <em>Ich trinke nie Weißwein.</em> (never). (3) <em>nicht gern</em>: <em>Ich trinke nicht gern Weißwein.</em> (don't enjoy). The rule: use <em>kein</em> to negate nouns; <em>nie</em> for absolute negation of frequency; <em>nicht gern</em> for preference without total refusal."
    },
    {
      q: 'TRANSFER: You have learned the formal imperative. Now write a formal instruction telling someone to "Mix the fruit with lemon juice."',
      a: '<em>Vermengen Sie das Obst mit Zitronensaft.</em> The rule: verb at position 1, then <em>Sie</em>, then the rest. Transfer: the same pattern works for any cooking verb: <em>Waschen Sie, Würzen Sie, Braten Sie</em>. Another example: <em>Würzen Sie die Suppe mit Salz.</em>'
    },
    {
      q: 'ELABORATE: Why does German use <em>mögen</em> for preferences but <em>möchten</em> for requests? Explain the difference.',
      a: '<em>Mögen</em> describes a stable feeling or general preference: <em>Ich mag Kaffee</em> = I always like coffee. <em>Möchten</em> is the subjunctive form of <em>mögen</em> and describes a current, specific wish: <em>Ich möchte einen Kaffee</em> = I want a coffee right now. The rule: use <em>mögen</em> to describe how you feel about something in general; use <em>möchten</em> when making a polite request or expressing an immediate desire.'
    },
    {
      q: 'Fill in the correct adjective form: "Ich esse ___ Schinken." (roh, masculine accusative, no article)',
      a: '<em>rohen Schinken</em>. The rule: without an article, masculine accusative adjective takes <em>-en</em> ending. Compare: <em>roher Schinken</em> (nominative, no article) vs. <em>rohen Schinken</em> (accusative, no article). Another example: <em>Ich kaufe frischen Fisch.</em>'
    },
    {
      q: 'PREDICT: What form do you predict <em>braten</em> takes in the <em>er</em> form?',
      a: '<em>er brät</em>. Reasoning: <em>braten</em> has a stem-vowel change <em>a → ä</em> in <em>du</em> and <em>er/sie/es</em>, just like <em>fahren → er fährt</em>. This pattern applies to a class of German verbs. Another example: <em>du brätst, er brät</em>.'
    },
    {
      q: 'How do you say "a packet of coffee" in German?',
      a: '<em>eine Packung Kaffee</em>. The rule: container noun + contents, no preposition. <em>Packung</em> is feminine: <em>die Packung</em>. Another example: <em>eine Tafel Schokolade, eine Tüte Chips</em>.'
    },
    {
      q: 'TRANSFER: You know <em>ich war</em> (I was). Now use the Präteritum of <em>sein</em> to say "Where were you yesterday?" (formal <em>Sie</em>)',
      a: '<em>Wo waren Sie gestern?</em> The rule: formal <em>Sie</em> form of <em>sein</em> Präteritum is <em>waren</em>: the same as <em>wir waren</em>. This applies to all verbs: the <em>sie/Sie</em> form always matches the <em>wir</em> form. Another example: <em>Hatten Sie ein gutes Frühstück?</em>'
    },
    {
      q: 'What does <em>das Abendbrot</em> traditionally consist of in Germany?',
      a: '<em>Abendbrot</em> is traditionally a cold meal: bread with cheese (<em>Käse</em>) or sausage (<em>Wurst</em>). The rule (cultural): <em>Abend</em> = evening + <em>Brot</em> = bread. The word itself tells you it is bread-based. Today, many younger Germans eat warm meals in the evening too.'
    },
    {
      q: 'SELF-EXPLAIN: The sentence is <em>Ich finde ihn lecker</em>. Why is the pronoun <em>ihn</em> and not <em>er</em>?',
      a: '<em>Ihn</em> is the accusative form of <em>er</em>. In this sentence, the pronoun is the direct object of <em>finde</em> (I find <em>it</em> tasty): not the subject. The rule: when a pronoun is a direct object, use the accusative form. <em>Ich finde</em> uses accusative for what is being found. Another example: <em>Ich sehe ihn.</em> (I see him.)'
    },
    {
      q: 'What is the German plural for <em>das Brötchen</em> (bread roll)?',
      a: '<em>die Brötchen</em>: no change. The rule: nouns ending in <em>-chen</em> belong to Plural Group 1 and do not add any ending. This is because <em>-chen</em> is a diminutive suffix, and diminutive nouns in German always form plurals without an ending. Another example: <em>das Mädchen → die Mädchen</em>.'
    },
    {
      q: 'What is the most popular drink in Germany? What is the top-selling soft drink?',
      a: 'The most popular drink overall is <em>Kaffee</em>. The top-selling soft drink is <em>Mineralwasser</em>. Cultural note: Germans also drink a lot of <em>Bier</em> and <em>Wein</em>. A popular mix is <em>Weinschorle</em> (wine with water). <em>Apfelwein</em> is a regional specialty in Hessen, Rheinland-Pfalz, and Saarland.'
    },
    {
      q: 'ERROR DETECTION: Spot the mistake: "Schälen du das Obst."',
      a: 'The mistake: in the formal imperative, you must use <em>Sie</em>, not <em>du</em>. Also, the imperative uses the infinitive stem form. Correct: <em>Schälen Sie das Obst.</em> The rule: formal imperative = verb at position 1 + <em>Sie</em> at position 2. <em>Du</em>-imperative is different: <em>Schäl das Obst!</em>'
    },
    {
      q: 'TRANSFER: You know how to say "I like coffee" (<em>Ich mag Kaffee</em>). Now say "She likes grapes" and "They don\'t like liver sausage."',
      a: '<em>Sie mag Weintrauben.</em> <em>Sie mögen keine Leberwurst.</em> The rule: <em>er/sie/es mag</em> (no ending for modal verbs in third person singular). <em>sie mögen</em> (plural). Negation with <em>kein</em>: <em>keine Leberwurst</em> because <em>Leberwurst</em> is feminine.'
    },
    {
      q: 'How do you ask for the bill at a German restaurant?',
      a: '<em>Die Rechnung, bitte.</em> or <em>Ich möchte zahlen / bezahlen.</em> Cultural note: in German restaurants, you usually ask the waiter directly for the bill: it is not brought automatically. The waiter may ask <em>Zusammen oder getrennt?</em> (Together or separate?).'
    },
    {
      q: 'ELABORATE: Why does German have five different plural groups instead of one regular plural like English "-s"?',
      a: "German preserved multiple noun class systems from Old High German, each with its own plural ending. English standardized to <em>-s</em> over time, but German kept the variety. This means: (1) You must learn each noun's plural with its article as a package: e.g., <em>das Glas, die Gläser</em>. (2) There is no shortcut: even native speakers sometimes make plural mistakes. (3) Some patterns are predictable: feminine nouns usually take <em>-(e)n</em>."
    },
    {
      q: 'Fill in: "Ich habe noch keine ___." (Glas, plural)',
      a: '<em>Ich habe noch keine Gläser.</em> The rule: <em>das Glas → die Gläser</em> (Group 4, adds <em>-er</em> with umlaut). <em>Kein</em> in plural takes the same ending as the definite article: <em>die → keine</em>. Another example: <em>Ich habe keine Messer.</em>'
    },
    {
      q: 'What is the Präteritum of <em>haben</em> for <em>ich</em> and <em>er/sie/es</em>?',
      a: 'Both are <em>hatte</em>: <em>ich hatte, er/sie/es hatte</em>. The rule: like all modal verbs and auxiliaries, the <em>ich</em> and <em>er</em> forms of <em>haben</em> Präteritum are identical. Add the usual endings for other persons: <em>du hattest, wir hatten, ihr hattet, sie hatten</em>.'
    },
    {
      q: 'PREDICT: What plural form do you predict for <em>der Euro</em>?',
      a: '<em>die Euros</em>. Reasoning: <em>Euro</em> is a loanword and belongs to Plural Group 3 (<em>-s</em> ending). Many foreign words in German, especially those ending in a vowel, take the <em>-s</em> plural. Another example: <em>das Büro → die Büros, das Hobby → die Hobbys</em>.'
    },
    {
      q: 'TRANSFER: You know that <em>der Apfel</em> becomes <em>ihn</em> in the accusative pronoun. Now apply this to a meal context: "Ich kaufe den Käse." Replace the noun with the right pronoun.',
      a: '<em>Ich kaufe ihn.</em> Reasoning: <em>der Käse</em> is masculine. The accusative pronoun for masculine nouns is <em>ihn</em>. Transfer: this pattern works for any masculine food noun: <em>Ich nehme den Wein → Ich nehme ihn. Ich esse den Schinken → Ich esse ihn.</em>'
    },
    {
      q: 'TRANSFER: You learned that <em>die Banane</em> becomes <em>die Bananen</em> (Group 5, plural in -n). Apply this rule: what is the plural of <em>die Pflaume</em> and <em>die Tasse</em>?',
      a: '<em>die Pflaumen</em> and <em>die Tassen</em>. Both add <em>-n</em> because they are feminine and end in <em>-e</em>. Most feminine nouns ending in <em>-e</em> belong to Group 5. Another example: <em>die Birne → die Birnen, die Erdbeere → die Erdbeeren</em>.'
    },
    {
      q: 'TRANSFER: You know <em>ich mag Kaffee</em> (general preference). Now turn it into a polite restaurant order using <em>möchten</em>: "I would like a cup of coffee, please."',
      a: '<em>Ich möchte eine Tasse Kaffee, bitte.</em> Transfer: switch from general preference to specific request by changing <em>mag</em> to <em>möchte</em> and adding the container word <em>eine Tasse</em>. The pattern: <em>möchten</em> + container + content + bitte. Another example: <em>Ich möchte ein Glas Wasser, bitte.</em>'
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Essen und Trinken',
    sections: [
      <>
        <h2>Frühstücksvokabular: Breakfast Vocabulary</h2>
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
              <td>Orangensaft</td>
              <td>der</td>
              <td>orange juice</td>
            </tr>
            <tr>
              <td>Kaffee</td>
              <td>der</td>
              <td>coffee</td>
            </tr>
            <tr>
              <td>Tee</td>
              <td>der</td>
              <td>tea</td>
            </tr>
            <tr>
              <td>Kräutertee</td>
              <td>der</td>
              <td>herbal tea</td>
            </tr>
            <tr>
              <td>Milch</td>
              <td>die</td>
              <td>milk</td>
            </tr>
            <tr>
              <td>heiße Schokolade</td>
              <td>die</td>
              <td>hot chocolate</td>
            </tr>
            <tr>
              <td>Brötchen</td>
              <td>das</td>
              <td>bread roll</td>
            </tr>
            <tr>
              <td>Vollkornbrot</td>
              <td>das</td>
              <td>wholegrain bread</td>
            </tr>
            <tr>
              <td>Weißbrot</td>
              <td>das</td>
              <td>white bread</td>
            </tr>
            <tr>
              <td>Toastbrot</td>
              <td>das</td>
              <td>toast bread</td>
            </tr>
            <tr>
              <td>Butter</td>
              <td>die</td>
              <td>butter</td>
            </tr>
            <tr>
              <td>Margarine</td>
              <td>die</td>
              <td>margarine</td>
            </tr>
            <tr>
              <td>Frischkäse</td>
              <td>der</td>
              <td>cream cheese</td>
            </tr>
            <tr>
              <td>Marmelade</td>
              <td>die</td>
              <td>jam</td>
            </tr>
            <tr>
              <td>Honig</td>
              <td>der</td>
              <td>honey</td>
            </tr>
            <tr>
              <td>Schinken</td>
              <td>der</td>
              <td>ham</td>
            </tr>
            <tr>
              <td>Salami</td>
              <td>die</td>
              <td>salami</td>
            </tr>
            <tr>
              <td>Leberwurst</td>
              <td>die</td>
              <td>liver sausage</td>
            </tr>
            <tr>
              <td>Lachs</td>
              <td>der</td>
              <td>salmon</td>
            </tr>
            <tr>
              <td>Joghurt natur</td>
              <td>der / das</td>
              <td>plain yogurt</td>
            </tr>
            <tr>
              <td>Joghurt mit Früchten</td>
              <td>der / das</td>
              <td>fruit yogurt</td>
            </tr>
            <tr>
              <td>Ei (gekocht)</td>
              <td>das</td>
              <td>egg (boiled)</td>
            </tr>
            <tr>
              <td>Rührei</td>
              <td>das</td>
              <td>scrambled eggs</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Geschirr und Besteck: Crockery and Cutlery</h2>
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
              <td>Tasse</td>
              <td>die</td>
              <td>cup</td>
            </tr>
            <tr>
              <td>Serviette</td>
              <td>die</td>
              <td>napkin</td>
            </tr>
            <tr>
              <td>Gabel</td>
              <td>die</td>
              <td>fork</td>
            </tr>
            <tr>
              <td>Pfanne</td>
              <td>die</td>
              <td>frying pan</td>
            </tr>
            <tr>
              <td>Schüssel</td>
              <td>die</td>
              <td>bowl</td>
            </tr>
            <tr>
              <td>Kaffeelöffel</td>
              <td>der</td>
              <td>coffee spoon</td>
            </tr>
            <tr>
              <td>Löffel</td>
              <td>der</td>
              <td>spoon</td>
            </tr>
            <tr>
              <td>Suppenteller</td>
              <td>der</td>
              <td>soup plate</td>
            </tr>
            <tr>
              <td>Teller</td>
              <td>der</td>
              <td>plate</td>
            </tr>
            <tr>
              <td>Pfeffer</td>
              <td>der</td>
              <td>pepper</td>
            </tr>
            <tr>
              <td>Topf</td>
              <td>der</td>
              <td>pot</td>
            </tr>
            <tr>
              <td>Salz</td>
              <td>das</td>
              <td>salt</td>
            </tr>
            <tr>
              <td>Wasserglas</td>
              <td>das</td>
              <td>water glass</td>
            </tr>
            <tr>
              <td>Weinglas</td>
              <td>das</td>
              <td>wine glass</td>
            </tr>
            <tr>
              <td>Messer</td>
              <td>das</td>
              <td>knife</td>
            </tr>
            <tr>
              <td>Kochbuch</td>
              <td>das</td>
              <td>cookbook</td>
            </tr>
            <tr>
              <td>Wischtuch</td>
              <td>das</td>
              <td>dishcloth</td>
            </tr>
            <tr>
              <td>Küchenmesser</td>
              <td>das</td>
              <td>kitchen knife</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Verpackungen: Containers</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Article</th>
              <th>English</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Flasche</td>
              <td>die</td>
              <td>bottle</td>
              <td>eine Flasche Wein</td>
            </tr>
            <tr>
              <td>Dose</td>
              <td>die</td>
              <td>can</td>
              <td>eine Dose Erbsen</td>
            </tr>
            <tr>
              <td>Becher</td>
              <td>der</td>
              <td>tub / cup</td>
              <td>ein Becher Joghurt</td>
            </tr>
            <tr>
              <td>Tafel</td>
              <td>die</td>
              <td>bar (chocolate)</td>
              <td>eine Tafel Schokolade</td>
            </tr>
            <tr>
              <td>Packung</td>
              <td>die</td>
              <td>packet</td>
              <td>eine Packung Kaffee</td>
            </tr>
            <tr>
              <td>Tüte</td>
              <td>die</td>
              <td>bag</td>
              <td>eine Tüte Chips</td>
            </tr>
            <tr>
              <td>Stück</td>
              <td>das</td>
              <td>piece</td>
              <td>ein Stück Kuchen</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Obstsorten: Fruit</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German (Plural)</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kiwis</td>
              <td>kiwis</td>
            </tr>
            <tr>
              <td>Bananen</td>
              <td>bananas</td>
            </tr>
            <tr>
              <td>Melonen</td>
              <td>melons</td>
            </tr>
            <tr>
              <td>Äpfel</td>
              <td>apples</td>
            </tr>
            <tr>
              <td>Ananas</td>
              <td>pineapple</td>
            </tr>
            <tr>
              <td>Erdbeeren</td>
              <td>strawberries</td>
            </tr>
            <tr>
              <td>Weintrauben</td>
              <td>grapes</td>
            </tr>
            <tr>
              <td>Orangen</td>
              <td>oranges</td>
            </tr>
            <tr>
              <td>Kirschen</td>
              <td>cherries</td>
            </tr>
            <tr>
              <td>Pflaumen</td>
              <td>plums</td>
            </tr>
            <tr>
              <td>Birnen</td>
              <td>pears</td>
            </tr>
            <tr>
              <td>Mangos</td>
              <td>mangoes</td>
            </tr>
            <tr>
              <td>Nektarinen</td>
              <td>nectarines</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Kochvokabular: Cooking Verbs</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Infinitiv</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>schälen</td>
              <td>to peel</td>
            </tr>
            <tr>
              <td>schneiden</td>
              <td>to cut</td>
            </tr>
            <tr>
              <td>kochen</td>
              <td>to cook / to boil</td>
            </tr>
            <tr>
              <td>braten</td>
              <td>to fry / to roast</td>
            </tr>
            <tr>
              <td>vermengen</td>
              <td>to mix</td>
            </tr>
            <tr>
              <td>pürieren</td>
              <td>to purée</td>
            </tr>
            <tr>
              <td>würzen</td>
              <td>to season</td>
            </tr>
            <tr>
              <td>waschen</td>
              <td>to wash</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Adjektive ohne Artikel: Declension Table</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Gender</th>
              <th>Nominativ</th>
              <th>Akkusativ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maskulin</td>
              <td>roher Schinken (-er)</td>
              <td>rohen Schinken (-en)</td>
            </tr>
            <tr>
              <td>Feminin</td>
              <td>kalte Milch (-e)</td>
              <td>kalte Milch (-e)</td>
            </tr>
            <tr>
              <td>Neutrum</td>
              <td>altes Brot (-es)</td>
              <td>altes Brot (-es)</td>
            </tr>
            <tr>
              <td>Plural</td>
              <td>gekochte Eier (-e)</td>
              <td>gekochte Eier (-e)</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Nomengruppe: Full Declension</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Artikel</th>
              <th>Maskulin Nom.</th>
              <th>Maskulin Akk.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Definitartikel</td>
              <td>der rohe Schinken</td>
              <td>den rohen Schinken</td>
            </tr>
            <tr>
              <td>Indefinitartikel</td>
              <td>ein roher Schinken</td>
              <td>einen rohen Schinken</td>
            </tr>
            <tr>
              <td>Ohne Artikel</td>
              <td>roher Schinken</td>
              <td>rohen Schinken</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Pluralgruppen: Plural Groups</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Gruppe</th>
              <th>Endung</th>
              <th>Beispiele</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>keine Endung</td>
              <td>Messer → Messer, Brötchen → Brötchen</td>
            </tr>
            <tr>
              <td>2</td>
              <td>-e (oft Umlaut)</td>
              <td>Telefon → Telefone, Baum → Bäume</td>
            </tr>
            <tr>
              <td>3</td>
              <td>-s</td>
              <td>Büro → Büros, Hobby → Hobbys, Euro → Euros</td>
            </tr>
            <tr>
              <td>4</td>
              <td>-er (oft Umlaut)</td>
              <td>Glas → Gläser, Mann → Männer</td>
            </tr>
            <tr>
              <td>5</td>
              <td>-(e)n</td>
              <td>Banane → Bananen, Tasse → Tassen</td>
            </tr>
          </tbody>
        </table>
        <p>
          Special: <em>Museum → Museen</em>. Units of measurement: <em>1 Kilo → 3 Kilo</em>,{' '}
          <em>1 Liter → 4 Liter</em> (no plural form).
        </p>
      </>,
      <>
        <h2>mögen: Konjugation</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>Präsens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>mag</td>
            </tr>
            <tr>
              <td>du</td>
              <td>magst</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>mag</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>mögen</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>mögt</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>mögen</td>
            </tr>
          </tbody>
        </table>
        <h2>Verneinung: Negation</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Form</th>
              <th>Meaning</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kein + Nomen</td>
              <td>not any</td>
              <td>Ich mag keinen Weißwein.</td>
            </tr>
            <tr>
              <td>nie</td>
              <td>never</td>
              <td>Ich trinke nie Weißwein.</td>
            </tr>
            <tr>
              <td>nicht gern</td>
              <td>don't enjoy</td>
              <td>Ich trinke nicht gern Weißwein.</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Imperativ (formell): Formal Imperative</h2>
        <p>
          Verb at position 1. <em>Sie</em> at position 2.
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Imperativ</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Schälen Sie das Obst.</td>
              <td>Peel the fruit.</td>
            </tr>
            <tr>
              <td>Schneiden Sie die Äpfel.</td>
              <td>Cut the apples.</td>
            </tr>
            <tr>
              <td>Kochen Sie die Kartoffeln.</td>
              <td>Boil the potatoes.</td>
            </tr>
            <tr>
              <td>Braten Sie das Fleisch.</td>
              <td>Fry the meat.</td>
            </tr>
            <tr>
              <td>Würzen Sie mit Salz und Pfeffer.</td>
              <td>Season with salt and pepper.</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Präteritum: sein und haben</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>sein</th>
              <th>haben</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>war</td>
              <td>hatte</td>
            </tr>
            <tr>
              <td>du</td>
              <td>warst</td>
              <td>hattest</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>war</td>
              <td>hatte</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>waren</td>
              <td>hatten</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>wart</td>
              <td>hattet</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>waren</td>
              <td>hatten</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Personalpronomen im Akkusativ</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Nominativ</th>
              <th>Akkusativ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>mich</td>
            </tr>
            <tr>
              <td>du</td>
              <td>dich</td>
            </tr>
            <tr>
              <td>er</td>
              <td>ihn</td>
            </tr>
            <tr>
              <td>sie (f.)</td>
              <td>sie</td>
            </tr>
            <tr>
              <td>es</td>
              <td>es</td>
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
              <td>sie (pl.)</td>
              <td>sie</td>
            </tr>
            <tr>
              <td>Sie (formal)</td>
              <td>Sie</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Im Restaurant: Key Phrases</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ich hätte gern …</td>
              <td>I would like … (most polite)</td>
            </tr>
            <tr>
              <td>Ich möchte bitte …</td>
              <td>I would like … please (polite)</td>
            </tr>
            <tr>
              <td>Ich nehme …</td>
              <td>I'll have … (direct)</td>
            </tr>
            <tr>
              <td>Ich esse / trinke …</td>
              <td>I'll eat / drink …</td>
            </tr>
            <tr>
              <td>Was empfehlen Sie?</td>
              <td>What do you recommend?</td>
            </tr>
            <tr>
              <td>Die Rechnung, bitte.</td>
              <td>The bill, please.</td>
            </tr>
            <tr>
              <td>Ich möchte zahlen.</td>
              <td>I would like to pay.</td>
            </tr>
            <tr>
              <td>Zusammen oder getrennt?</td>
              <td>Together or separate?</td>
            </tr>
            <tr>
              <td>Guten Appetit!</td>
              <td>Enjoy your meal!</td>
            </tr>
            <tr>
              <td>Prost!</td>
              <td>Cheers! (beer)</td>
            </tr>
            <tr>
              <td>Zum Wohl!</td>
              <td>Cheers! (wine)</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Geschmacksausdrücke: Taste Expressions</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Er schmeckt ausgezeichnet.</td>
              <td>It tastes excellent.</td>
            </tr>
            <tr>
              <td>Er schmeckt (sehr) gut.</td>
              <td>It tastes (very) good.</td>
            </tr>
            <tr>
              <td>Ich finde ihn lecker / köstlich.</td>
              <td>I find it tasty / delicious.</td>
            </tr>
            <tr>
              <td>Er schmeckt schrecklich.</td>
              <td>It tastes terrible.</td>
            </tr>
            <tr>
              <td>Er schmeckt nicht gut.</td>
              <td>It doesn't taste good.</td>
            </tr>
            <tr>
              <td>Ich finde ihn ungenießbar.</td>
              <td>I find it inedible.</td>
            </tr>
          </tbody>
        </table>
      </>,
      <>
        <h2>Essgewohnheiten: Eating Habits Phrases</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>zum Frühstück</td>
              <td>for breakfast</td>
            </tr>
            <tr>
              <td>zum Mittagessen</td>
              <td>for lunch</td>
            </tr>
            <tr>
              <td>zum Abendbrot</td>
              <td>for the evening meal</td>
            </tr>
            <tr>
              <td>täglich</td>
              <td>daily / every day</td>
            </tr>
            <tr>
              <td>einmal pro Woche</td>
              <td>once a week</td>
            </tr>
            <tr>
              <td>zweimal pro Woche</td>
              <td>twice a week</td>
            </tr>
            <tr>
              <td>gern</td>
              <td>gladly / I like to</td>
            </tr>
            <tr>
              <td>nicht gern</td>
              <td>not gladly / I don't like to</td>
            </tr>
            <tr>
              <td>nie</td>
              <td>never</td>
            </tr>
            <tr>
              <td>selten</td>
              <td>rarely</td>
            </tr>
            <tr>
              <td>oft</td>
              <td>often</td>
            </tr>
          </tbody>
        </table>
      </>
    ]
  },
  customCss: null
}

export default function FoodDrinkAndShopping() {
  return <LearningTemplate config={config} />
}
