import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'wb',
  documentTitle: 'Willkommen und Begrüßungen: AETHER',
  learning: {
    category: 'Unit 1',
    title: 'Willkommen und Begrüßungen',
    subtitle:
      'Language levels, the alphabet, pronunciation, numbers, greetings, farewells, and introducing yourself',
    sections: [
      <div key="lrn-section-0" id="lrn-section-0">
        <h2>Sprachniveaus: Language Levels</h2>
        <p>
          The Common European Framework of Reference (CEFR) organizes language ability into six
          levels. This page is at the first level, A1.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            What do you think "A1" means in language learning? Why might levels be labeled with
            letters and numbers?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Letters mark broad bands (A = beginner, B = intermediate, C = advanced). Numbers split
              each band into two steps. A1 is the very first step. You can use basic phrases and
              understand slow, clear speech.
            </p>
          </details>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Label</th>
              <th>What you can do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A1</td>
              <td>Breakthrough</td>
              <td>
                Use familiar phrases, introduce yourself, answer simple questions about personal
                details
              </td>
            </tr>
            <tr>
              <td>A2</td>
              <td>Waystage</td>
              <td>Describe your background, immediate environment, and basic needs</td>
            </tr>
            <tr>
              <td>B1</td>
              <td>Threshold</td>
              <td>
                Handle most travel situations, produce simple connected text on familiar topics
              </td>
            </tr>
            <tr>
              <td>B2</td>
              <td>Vantage</td>
              <td>Understand hard text, interact fluently with native speakers</td>
            </tr>
            <tr>
              <td>C1</td>
              <td>Advanced</td>
              <td>Express ideas fluently and without planning, without much searching for words</td>
            </tr>
            <tr>
              <td>C2</td>
              <td>Mastery</td>
              <td>Understand almost everything, express yourself clearly in hard situations</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-insight">
          <strong>Where you are now:</strong> A1. You will understand short, simple sentences when
          people speak slowly and clearly.
        </div>
      </div>,

      <div key="lrn-section-1" id="lrn-section-1">
        <h2>Das Alphabet: The German Alphabet</h2>
        <p>
          German uses the same 26 letters as English plus four extra characters: Ä, Ö, Ü, and ß.
          Each example word below starts with a capital letter. That is not a mistake.
        </p>

        <div className="lrn-insight">
          <strong>The most basic rule in German:</strong> Every noun starts with a capital letter,
          always. Names of people, places, and everyday things all get a capital first letter. So
          you write der Apfel (apple), das Buch (book), and die Zeit (time) with big first letters.
          This is true even in the middle of a sentence.
        </div>

        <h2>Der, Die, Das: The Three Words for "The"</h2>
        <p>
          You just saw <strong>der</strong>, <strong>das</strong>, and <strong>die</strong> in front
          of the example words. These are articles. An article is the little word that goes before a
          noun, like the English "the". A noun is a naming word, like apple, book, or time.
        </p>
        <p>
          English has only one word for "the". German has three, and all three mean "the". Which one
          you use depends on the noun's <em>gender</em>. In German, gender means a noun is sorted
          into one of three groups: masculine, feminine, or neuter.
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Article</th>
              <th>Gender</th>
              <th>Means</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der</td>
              <td>masculine</td>
              <td>the</td>
              <td>der Apfel (the apple)</td>
            </tr>
            <tr>
              <td>die</td>
              <td>feminine</td>
              <td>the</td>
              <td>die Zeit (the time)</td>
            </tr>
            <tr>
              <td>das</td>
              <td>neuter</td>
              <td>the</td>
              <td>das Buch (the book)</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-insight">
          <strong>Why you learn the article with the noun:</strong> the gender almost never follows
          a rule you can guess. A book is not "more neuter" than an apple. So you cannot work out
          the article from the meaning. Learn each noun together with its article: not "Buch" but{' '}
          <strong>das Buch</strong>, not "Apfel" but <strong>der Apfel</strong>. In the alphabet
          table below, every example word is shown with its article for this reason.
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Letter</th>
              <th>Name (approx.)</th>
              <th>Example word</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A a</td>
              <td>ah</td>
              <td>der Apfel (apple)</td>
            </tr>
            <tr>
              <td>B b</td>
              <td>beh</td>
              <td>das Buch (book)</td>
            </tr>
            <tr>
              <td>C c</td>
              <td>tseh</td>
              <td>der Computer</td>
            </tr>
            <tr>
              <td>D d</td>
              <td>deh</td>
              <td>die Datei (file)</td>
            </tr>
            <tr>
              <td>E e</td>
              <td>eh</td>
              <td>das Ende (end)</td>
            </tr>
            <tr>
              <td>F f</td>
              <td>eff</td>
              <td>der Film</td>
            </tr>
            <tr>
              <td>G g</td>
              <td>geh</td>
              <td>die Grammatik</td>
            </tr>
            <tr>
              <td>H h</td>
              <td>hah</td>
              <td>das Haus (house)</td>
            </tr>
            <tr>
              <td>I i</td>
              <td>ee</td>
              <td>die Idee (idea)</td>
            </tr>
            <tr>
              <td>J j</td>
              <td>yot</td>
              <td>das Jahr (year)</td>
            </tr>
            <tr>
              <td>K k</td>
              <td>kah</td>
              <td>die Klasse (class)</td>
            </tr>
            <tr>
              <td>L l</td>
              <td>ell</td>
              <td>das Land (country)</td>
            </tr>
            <tr>
              <td>M m</td>
              <td>emm</td>
              <td>der Mensch (person)</td>
            </tr>
            <tr>
              <td>N n</td>
              <td>enn</td>
              <td>der Name</td>
            </tr>
            <tr>
              <td>O o</td>
              <td>oh</td>
              <td>der Ort (place)</td>
            </tr>
            <tr>
              <td>P p</td>
              <td>peh</td>
              <td>die Post (mail)</td>
            </tr>
            <tr>
              <td>Q q</td>
              <td>koo</td>
              <td>die Qualität (quality)</td>
            </tr>
            <tr>
              <td>R r</td>
              <td>err</td>
              <td>das Resultat (result)</td>
            </tr>
            <tr>
              <td>S s</td>
              <td>ess</td>
              <td>die Sprache (language)</td>
            </tr>
            <tr>
              <td>T t</td>
              <td>teh</td>
              <td>der Tisch (table)</td>
            </tr>
            <tr>
              <td>U u</td>
              <td>oo</td>
              <td>der Urlaub (holiday)</td>
            </tr>
            <tr>
              <td>V v</td>
              <td>fow</td>
              <td>das Verb</td>
            </tr>
            <tr>
              <td>W w</td>
              <td>vay</td>
              <td>das Wort (word)</td>
            </tr>
            <tr>
              <td>X x</td>
              <td>iks</td>
              <td>das Xylophon</td>
            </tr>
            <tr>
              <td>Y y</td>
              <td>üpsilon</td>
              <td>das Yoga</td>
            </tr>
            <tr>
              <td>Z z</td>
              <td>tsett</td>
              <td>die Zeit (time)</td>
            </tr>
          </tbody>
        </table>

        <h2>Extra Characters (Umlaute and Eszett)</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Character</th>
              <th>Name</th>
              <th>Sounds like</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ä ä</td>
              <td>A-Umlaut</td>
              <td>the "e" in "bed"</td>
              <td>die Fächer (subjects)</td>
            </tr>
            <tr>
              <td>Ö ö</td>
              <td>O-Umlaut</td>
              <td>say "ay" with rounded lips</td>
              <td>hören (to listen)</td>
            </tr>
            <tr>
              <td>Ü ü</td>
              <td>U-Umlaut</td>
              <td>say "ee" with rounded lips</td>
              <td>die Übung (exercise)</td>
            </tr>
            <tr>
              <td>ß</td>
              <td>Eszett / scharfes S</td>
              <td>a sharp "ss", like in "kiss"</td>
              <td>die Straße (street)</td>
            </tr>
          </tbody>
        </table>

        <p>
          The umlaut is the two dots over a, o, or u. The dots change the sound. The ß never starts
          a word and is always a small letter.
        </p>

        <div className="lrn-tip">
          <strong>Tip:</strong> When you type on a keyboard without umlauts, write ae, oe, ue, and
          ss instead (for example, Mueller for Müller).
        </div>

        <h2>Pronunciation Rules</h2>
        <p>A few letter pairs do not sound the way an English reader expects. Learn these five.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Letters</th>
              <th>Sounds like</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sch</td>
              <td>"sh" as in "ship"</td>
              <td>schön (beautiful)</td>
            </tr>
            <tr>
              <td>sp (start of a word)</td>
              <td>"shp"</td>
              <td>sprechen (to speak)</td>
            </tr>
            <tr>
              <td>st (start of a word)</td>
              <td>"sht"</td>
              <td>die Straße (street)</td>
            </tr>
            <tr>
              <td>ei</td>
              <td>"eye" as in "mine"</td>
              <td>mein (my), heißen (to be called)</td>
            </tr>
            <tr>
              <td>ie</td>
              <td>"ee" as in "see"</td>
              <td>Wien (Vienna), vier (four)</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-insight">
          <strong>Watch the order:</strong> "ei" sounds like "eye", but "ie" sounds like "ee". They
          look almost the same, so read carefully. The "sp" and "st" rule only changes the sound at
          the start of a word.
        </div>
      </div>,

      <div key="lrn-section-10" id="lrn-section-10">
        <h2>Numbers 0–20 (Zahlen)</h2>
        <p>
          German numbers follow clear patterns. Learn the first twenty and you have a strong start.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            English has "thirteen" (3+10), "fourteen" (4+10) etc. Do you think German numbers 13–19
            follow the same pattern?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes: almost. German says the small number first: <strong>dreizehn</strong> = drei +
              zehn (3+10), <strong>vierzehn</strong> = vier + zehn (4+10). The exception:{' '}
              <strong>sechzehn</strong> (not sechszehn) and <strong>siebzehn</strong> (not
              siebenzehn): the endings are shortened.
            </p>
          </details>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>German</th>
              <th>Number</th>
              <th>German</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>null</td>
              <td>10</td>
              <td>zehn</td>
            </tr>
            <tr>
              <td>1</td>
              <td>eins</td>
              <td>11</td>
              <td>elf</td>
            </tr>
            <tr>
              <td>2</td>
              <td>zwei</td>
              <td>12</td>
              <td>zwölf</td>
            </tr>
            <tr>
              <td>3</td>
              <td>drei</td>
              <td>13</td>
              <td>dreizehn</td>
            </tr>
            <tr>
              <td>4</td>
              <td>vier</td>
              <td>14</td>
              <td>vierzehn</td>
            </tr>
            <tr>
              <td>5</td>
              <td>fünf</td>
              <td>15</td>
              <td>fünfzehn</td>
            </tr>
            <tr>
              <td>6</td>
              <td>sechs</td>
              <td>16</td>
              <td>sechzehn</td>
            </tr>
            <tr>
              <td>7</td>
              <td>sieben</td>
              <td>17</td>
              <td>siebzehn</td>
            </tr>
            <tr>
              <td>8</td>
              <td>acht</td>
              <td>18</td>
              <td>achtzehn</td>
            </tr>
            <tr>
              <td>9</td>
              <td>neun</td>
              <td>19</td>
              <td>neunzehn</td>
            </tr>
            <tr>
              <td>10</td>
              <td>zehn</td>
              <td>20</td>
              <td>zwanzig</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-insight">
          <strong>You can now do this:</strong> count from zero to twenty in German and say your age
          and a room or page number. You will use these number words for ages and addresses below.
        </div>
      </div>,

      <div key="lrn-section-5" id="lrn-section-5">
        <h2>Guten Tag!: Greetings and Self-Introduction</h2>
        <p>
          German greetings change with the time of day. Three short phrases let you introduce
          yourself. One distinction, Sie or du, runs through every conversation you will have.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            German has formal and informal ways to address people. What words do you think signal
            this difference?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              German uses <strong>Sie</strong> (formal, uppercase S) and <strong>du</strong>{' '}
              (informal, lowercase). The verb changes with each pronoun (a pronoun is a word like
              ich, du, or Sie that stands in for a person).
            </p>
          </details>
        </div>

        <h2>Greetings (Begrüßungen)</h2>
        <p>German greetings change depending on the time of day.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
              <th>When to use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Guten Morgen!</td>
              <td>Good morning!</td>
              <td>Before midday</td>
            </tr>
            <tr>
              <td>Guten Tag!</td>
              <td>Good day / Hello!</td>
              <td>Midday to late afternoon</td>
            </tr>
            <tr>
              <td>Guten Abend!</td>
              <td>Good evening!</td>
              <td>Evening</td>
            </tr>
            <tr>
              <td>Hallo!</td>
              <td>Hello!</td>
              <td>Informal, any time</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German greetings are time-specific because they literally mean "good morning / good day
            / good evening." They are not vague like the English "hello." Hallo is borrowed and
            works any time, but in formal settings you stick to the time-based form.
          </p>
        </div>

        <h2>Farewells (Verabschiedung)</h2>
        <p>You also need to say goodbye. The word changes with how formal you are.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
              <th>When to use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Auf Wiedersehen!</td>
              <td>Goodbye!</td>
              <td>Formal, with strangers and in business</td>
            </tr>
            <tr>
              <td>Tschüss!</td>
              <td>Bye!</td>
              <td>Informal, with friends</td>
            </tr>
            <tr>
              <td>Bis bald!</td>
              <td>See you soon!</td>
              <td>Informal</td>
            </tr>
            <tr>
              <td>Bis später!</td>
              <td>See you later!</td>
              <td>Informal</td>
            </tr>
            <tr>
              <td>Gute Nacht!</td>
              <td>Good night!</td>
              <td>When leaving at night or going to bed</td>
            </tr>
          </tbody>
        </table>

        <h2>Asking "How are you?" (Wie geht es?)</h2>
        <p>After you greet someone, you often ask how they are. The form depends on Sie or du.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Formal (Sie)</th>
              <th>Informal (du)</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wie geht es Ihnen?</td>
              <td>Wie geht es dir?</td>
              <td>How are you?</td>
            </tr>
            <tr>
              <td>Und Ihnen?</td>
              <td>Und dir?</td>
              <td>And you?</td>
            </tr>
          </tbody>
        </table>

        <p>
          In this phrase the formal "you" is <strong>Ihnen</strong> and the informal "you" is{' '}
          <strong>dir</strong>. Learn them as set phrases for now.
        </p>

        <p>You can reply with one of these:</p>
        <ul className="lrn-list">
          <li>
            <strong>Sehr gut.</strong>: Very good.
          </li>
          <li>
            <strong>Gut, danke.</strong>: Good, thanks.
          </li>
          <li>
            <strong>Es geht.</strong>: So-so.
          </li>
          <li>
            <strong>Nicht so gut.</strong>: Not so good.
          </li>
        </ul>

        <h2>Polite Words (Höfliche Wörter)</h2>
        <p>Three small words make every conversation polite. Learn them now.</p>
        <ul className="lrn-list">
          <li>
            <strong>danke</strong>: thanks. Say <strong>danke schön</strong> for "thank you very
            much."
          </li>
          <li>
            <strong>bitte</strong>: please. The same word also means "you're welcome" when you reply
            to a thank-you. The situation tells you which meaning is right.
          </li>
          <li>
            <strong>Entschuldigung</strong>: excuse me, or sorry.
          </li>
        </ul>

        <h2>A First Look at Verbs and Word Order</h2>
        <p>
          To introduce yourself, you need four verbs. A German verb changes its ending to match who
          is doing the action. Here are the forms you need first.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Verb</th>
              <th>ich (I)</th>
              <th>du (you, informal)</th>
              <th>er/sie/es (he/she/it)</th>
              <th>Sie (you, formal)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sein (to be)</td>
              <td>bin</td>
              <td>bist</td>
              <td>ist</td>
              <td>sind</td>
            </tr>
            <tr>
              <td>heißen (to be called)</td>
              <td>heiße</td>
              <td>heißt</td>
              <td>heißt</td>
              <td>heißen</td>
            </tr>
            <tr>
              <td>kommen (to come)</td>
              <td>komme</td>
              <td>kommst</td>
              <td>kommt</td>
              <td>kommen</td>
            </tr>
            <tr>
              <td>wohnen (to live)</td>
              <td>wohne</td>
              <td>wohnst</td>
              <td>wohnt</td>
              <td>wohnen</td>
            </tr>
          </tbody>
        </table>

        <p>
          Most verbs keep their first part (the stem) and just swap the ending. Take the stem komm-,
          add -e for ich, and you get <strong>komme</strong>. Add -st for du to get{' '}
          <strong>kommst</strong>. For <strong>er</strong> (he), <strong>sie</strong> (she), or{' '}
          <strong>es</strong> (it), add -t: <strong>er kommt</strong>, <strong>sie wohnt</strong>.
          You will use these he/she forms below when you report about another person. The verb sein
          is special: you memorise bin, bist, ist, and sind, because they do not follow this
          pattern.
        </p>

        <div className="lrn-insight">
          <strong>Why heißt, not heißst:</strong> the du form of heißen is <strong>heißt</strong>,
          not heißst. The ß already carries the s-sound, so you do not add a second s before the -t.
          The er/sie/es form is also heißt.
        </div>

        <div className="lrn-insight">
          <strong>Where the verb goes:</strong> In a normal German statement, the verb is the second
          thing in the sentence. You say <strong>Ich heiße Anna</strong> (I am called Anna), with
          the verb heiße right after ich. To ask a question with a question word, put the question
          word first, then the verb: <strong>Wie heißt du?</strong> (What are you called?). For a
          yes-or-no question, the verb comes first: <strong>Kommst du aus Wien?</strong> (Do you
          come from Vienna?).
        </div>

        <h2>Self-Introduction: The Three Core Phrases</h2>
        <p>When you introduce yourself in German, three phrases cover most situations.</p>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Ich heiße …</span>
          <div className="lrn-definition-desc">
            <p>Literally: "I am called …"</p>
            <p>This is the most common way to give your name.</p>
            <p>
              Example: <strong>Ich heiße Franziska.</strong>: My name is Franziska.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Mein Name ist …</span>
          <div className="lrn-definition-desc">
            <p>Literally: "My name is …"</p>
            <p>
              Slightly more formal than <em>Ich heiße</em>.
            </p>
            <p>
              Example: <strong>Mein Name ist Peter Heinemann.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Ich bin …</span>
          <div className="lrn-definition-desc">
            <p>Literally: "I am …"</p>
            <p>Use this to state a profession or status.</p>
            <p>
              Example: <strong>Ich bin Lehrerin.</strong>: I am a teacher. (female)
            </p>
            <p>
              Example: <strong>Ich bin Informatiker.</strong>: I am an IT specialist. (male)
            </p>
            <p>
              The ending <strong>-in</strong> marks a female. A male teacher is{' '}
              <strong>Lehrer</strong>; a female teacher adds -in to become <strong>Lehrerin</strong>
              . The male form drops it.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does "Ich bin Lehrerin" not need an article, while English says "I am a teacher"?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              In German, a noun that names a job or nationality after "to be" drops the little word
              "a". You say <strong>Ich bin Arzt</strong> (I am a doctor), not{' '}
              <strong>Ich bin ein Arzt</strong>.
            </p>
          </details>
        </div>

        <h2>Sample Self-Introductions</h2>
        <p>Three people introduce themselves. Each one gives a name, age, hometown, and job.</p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Franziska Binder</span>
            <p className="lrn-step-content">
              Guten Tag! Ich heiße Franziska Binder. Ich bin 37 Jahre alt. Ich wohne in Wien. Ich
              bin Lehrerin.
            </p>
            <p className="lrn-step-content">
              Hello! My name is Franziska Binder. I am 37 years old. I live in Vienna. I am a
              teacher.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Peter Heinemann</span>
            <p className="lrn-step-content">
              Hallo! Ich heiße Peter Heinemann. Ich bin 35 Jahre alt. Ich wohne in Marburg. Ich bin
              Informatiker.
            </p>
            <p className="lrn-step-content">
              Hello! My name is Peter Heinemann. I am 35 years old. I live in Marburg. I am an IT
              specialist.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Sarah Mounier</span>
            <p className="lrn-step-content">
              Guten Tag! Ich heiße Sarah Mounier. Ich bin 22 Jahre alt. Ich komme aus Frankreich.
              Ich wohne in Berlin.
            </p>
            <p className="lrn-step-content">
              Hello! My name is Sarah Mounier. I am 22 years old. I come from France. I live in
              Berlin.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does Sarah use "Ich komme aus Frankreich" while Franziska uses "Ich wohne in Wien"?
            What is the difference between these two phrases?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              <strong>Ich komme aus …</strong> tells you where someone is originally from (origin).{' '}
              <strong>Ich wohne in …</strong> tells you where someone lives now (residence). These
              are two different facts. A person can come from France but live in Berlin.
            </p>
          </details>
        </div>
      </div>,

      <div key="lrn-section-6" id="lrn-section-6">
        <h2>Personal Questions (Persönliche Fragen)</h2>
        <p>In German, asking about someone depends on whether you use formal Sie or informal du.</p>
        <p>
          Use Sie with strangers, teachers, bosses, and older people. Use du with friends,
          classmates, and children.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            If "Sie" is formal and "du" is informal, what happens to the verb "kommen" (to come)
            with each pronoun?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              With Sie: <strong>Woher kommen Sie?</strong> (verb stays -en). With du:{' '}
              <strong>Woher kommst du?</strong> (verb gets -st). The stem stays the same; only the
              ending changes.
            </p>
          </details>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Question (formal)</th>
              <th>Question (informal)</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wie heißen Sie?</td>
              <td>Wie heißt du?</td>
              <td>What is your name?</td>
            </tr>
            <tr>
              <td>Wie ist Ihr Vorname?</td>
              <td>Wie ist dein Vorname?</td>
              <td>What is your first name?</td>
            </tr>
            <tr>
              <td>Wie ist Ihr Familienname?</td>
              <td>Wie ist dein Familienname?</td>
              <td>What is your surname?</td>
            </tr>
            <tr>
              <td>Wie alt sind Sie?</td>
              <td>Wie alt bist du?</td>
              <td>How old are you?</td>
            </tr>
            <tr>
              <td>Woher kommen Sie?</td>
              <td>Woher kommst du?</td>
              <td>Where do you come from?</td>
            </tr>
            <tr>
              <td>Wo wohnen Sie?</td>
              <td>Wo wohnst du?</td>
              <td>Where do you live?</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German has two words for "you" where English has only one. The formal word{' '}
            <strong>Sie</strong> uses the same verb form as "they". This is why{' '}
            <strong>Woher kommen Sie?</strong> looks like "Where do they come from?" but really
            means "Where do you come from?" in a polite way.
          </p>
        </div>

        <p>
          Two small words above mean "your": <strong>Ihr</strong> is the formal "your" (with Sie),
          and <strong>dein</strong> is the informal "your" (with du). So "Ihr Vorname" and "dein
          Vorname" both mean "your first name".
        </p>

        <p>
          The answers always use <em>ich</em>; the formality is in the question, not the answer.
        </p>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Franziska answers (to Sie questions)</span>
            <p>Ich heiße Franziska Binder.</p>
            <p>Mein Vorname ist Franziska.</p>
            <p>Ich bin 37 Jahre alt.</p>
            <p>Ich komme aus Österreich.</p>
            <p>Ich wohne in Wien.</p>
            <p>Ich bin Lehrerin.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Peter answers (to du questions)</span>
            <p>Ich heiße Peter Heinemann.</p>
            <p>Mein Vorname ist Peter.</p>
            <p>Ich bin 35 Jahre alt.</p>
            <p>Ich komme aus Deutschland.</p>
            <p>Ich wohne in Marburg.</p>
            <p>Ich bin Informatiker.</p>
          </div>
        </div>

        <h2>Partner Interview: Ask Your Neighbour</h2>
        <p>Use this formula to ask about your neighbour and then report to the class.</p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Step 1: Ask</span>
            <p className="lrn-step-content">
              Use the question table above. Example: Wie heißen Sie?: What is your name?
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 2: Report (use mein/meine)</span>
            <p className="lrn-step-content">
              Meine Nachbarin heißt …: My (female) neighbour is called …
            </p>
            <p className="lrn-step-content">
              Mein Nachbar heißt …: My (male) neighbour is called …
            </p>
            <p className="lrn-step-content">Er/Sie kommt aus …: He/She comes from …</p>
            <p className="lrn-step-content">Er/Sie wohnt in …: He/She lives in …</p>
            <p className="lrn-step-content">
              The word for "my" follows the noun's gender: <strong>mein</strong> Nachbar (the
              masculine der Nachbar) and <strong>meine</strong> Nachbarin (the feminine die
              Nachbarin).
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 3: Worked example</span>
            <p className="lrn-step-content">
              You ask Maria: "Wie heißt du? Woher kommst du? Wo wohnst du?" She answers: "Ich heiße
              Maria. Ich komme aus Italien. Ich wohne in Berlin."
            </p>
            <p className="lrn-step-content">
              Now you report to the class: "Meine Nachbarin heißt Maria. Sie kommt aus Italien. Sie
              wohnt in Berlin."
            </p>
          </div>
        </div>

        <div className="lrn-insight">
          <strong>You can now do this:</strong> ask another person for their name, where they are
          from, and where they live, then tell the class about them.
        </div>
      </div>
    ]
  },
  practice: [
    {
      q: 'What does CEFR stand for, and what does it measure?',
      a: 'CEFR stands for Common European Framework of Reference. It measures language ability and sorts it into six levels. They run from A1 (beginner) to C2 (mastery). Each level describes what you can do with the language. You are at A1, the first level.'
    },
    {
      q: 'What article does the German word "Buch" take, and what does it mean?',
      a: "It takes das: das Buch. It means book. In German you learn every noun together with its little word (der, die, or das), because you cannot guess which one a noun takes just from its meaning. That little word is the article, and which one fits depends on the noun's gender (its grouping as masculine, feminine, or neuter)."
    },
    {
      q: 'Why is the German word Buch written with a capital B?',
      a: 'Because it is a noun. In German every noun starts with a capital letter, always, even in the middle of a sentence. So you write das Buch, der Tisch, and die Zeit with big first letters.'
    },
    {
      q: 'Name the four extra characters in the German alphabet that English does not have.',
      a: 'They are Ä (A-Umlaut), Ö (O-Umlaut), Ü (U-Umlaut), and ß (Eszett, also called scharfes S). The ß sounds like a sharp "ss" and never starts a word.'
    },
    {
      q: 'How do you say the letter J and the letter W when you spell a German word aloud?',
      a: 'You say the J as "yot" and the W as "vay". These two trip up English speakers most, so learn them first.'
    },
    {
      q: 'The letters "ei" and "ie" look almost the same. How does each one sound?',
      a: '"ei" sounds like "eye", as in mein (my). "ie" sounds like "ee", as in Wien (Vienna). Read carefully, because the order of the two letters changes the sound.'
    },
    {
      q: 'How does "sch" sound, and how does "sp" sound at the start of a word?',
      a: '"sch" sounds like English "sh", as in schön. At the start of a word, "sp" sounds like "shp", as in sprechen. The same shift makes "st" sound like "sht" at the start of a word.'
    },
    {
      q: 'How do you make the sound for ö and for ü?',
      a: 'For ö, shape your mouth to say "ay" but round your lips. For ü, shape your mouth to say "ee" but round your lips. The two dots are the umlaut, and they change the sound.'
    },
    {
      q: 'How do you type Ü when your keyboard has no German letters?',
      a: 'Type ue instead. The same trick works for the others: ä becomes ae, ö becomes oe, ü becomes ue, and ß becomes ss. So Müller becomes Mueller.'
    },
    {
      q: 'What is the German word for 7, and how does it change in 17?',
      a: 'The German word for 7 is sieben. In 17 it drops the -en, so 17 is siebzehn, not siebenzehn.'
    },
    {
      q: 'How do you build the German numbers 13 through 19?',
      a: 'Add -zehn to the base number word. For example, vier plus zehn gives vierzehn (14). Two numbers shorten: 16 is sechzehn (the -s of sechs drops) and 17 is siebzehn (the -en of sieben drops).'
    },
    {
      q: 'What is the German word for 12, and is it built like 13 to 19?',
      a: 'The German word for 12 is zwölf. It is not built with -zehn. The numbers 11 (elf) and 12 (zwölf) are their own words, so you just memorise them.'
    },
    {
      q: 'What is the difference between Sie and du in German?',
      a: 'Sie is the formal "you". You use it with strangers, teachers, bosses, and older people. du is the informal "you". You use it with friends, family, and children. Sie always starts with a capital S.'
    },
    {
      q: 'Which greeting do you use in the morning, and which one works at any time of day?',
      a: 'In the morning you say Guten Morgen. Hallo works at any time of day, but it is informal. In formal settings you stick to the time-based greeting.'
    },
    {
      q: 'How do you say goodbye to a stranger in a formal setting, and how do you say bye to a friend?',
      a: 'To a stranger you say Auf Wiedersehen, which is formal. To a friend you say Tschüss, which is informal. You can also say Bis bald (see you soon) or Bis später (see you later) to friends.'
    },
    {
      q: 'How do you ask "How are you?" formally and informally, and how can you reply?',
      a: 'Formally you ask Wie geht es Ihnen? Informally you ask Wie geht es dir? You can reply Gut, danke (good, thanks), Sehr gut (very good), Es geht (so-so), or Nicht so gut (not so good). Then ask back with Und Ihnen? or Und dir?'
    },
    {
      q: 'In German, the word bitte has two jobs. What are they?',
      a: 'bitte means "please" when you ask for something. The same word means "you\'re welcome" when you reply to a thank-you. The situation tells you which meaning is right.'
    },
    {
      q: 'Give the forms of sein (to be) for ich, du, and Sie.',
      a: 'They are ich bin, du bist, and Sie sind. The verb sein is special, so you must memorise these forms. They do not follow the normal pattern of swapping endings.'
    },
    {
      q: 'Give the forms of heißen (to be called) for ich, du, and Sie.',
      a: 'They are ich heiße, du heißt, and Sie heißen. The du form is heißt, not heißst. The ß already carries the s sound, so you do not add a second one.'
    },
    {
      q: 'Translate into German: "My name is Anna. I come from Poland. I live in Berlin."',
      a: 'Ich heiße Anna. Ich komme aus Polen. Ich wohne in Berlin. The verb sits in the second spot each time. Use komme aus for where you are from, and wohne in for where you live now.'
    },
    {
      q: 'A friend introduces themselves: "Ich bin Lehrerin." Why is there no word for "a" before Lehrerin?',
      a: 'In German, a job or nationality after "to be" drops the little word "a". So you say Ich bin Lehrerin (I am a teacher), not Ich bin eine Lehrerin. English keeps the "a", but German leaves it out.'
    },
    {
      q: 'How do you ask someone for their name, both formally and informally?',
      a: 'Formally you ask Wie heißen Sie? Informally you ask Wie heißt du? The question word wie comes first, then the verb. The answer always uses ich: Ich heiße ...'
    },
    {
      q: 'In a normal German statement, where does the verb go? Show it with "I come from Vienna."',
      a: 'The verb goes in the second spot. "I come from Vienna" is Ich komme aus Wien, with komme right after ich. For a yes-or-no question the verb leads instead: Kommst du aus Wien?'
    },
    {
      q: 'You learn that Maria is called Maria, comes from Italy, and lives in Berlin. Report this to the class in German.',
      a: 'Meine Nachbarin heißt Maria. Sie kommt aus Italien. Sie wohnt in Berlin. For another person the verbs end in -t: heißt, kommt, wohnt. Use sie (she) for a woman.'
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Willkommen und Begrüßungen',
    sections: [
      <>
        <h2>Sprachniveaus: CEFR Levels</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Label</th>
              <th>What you can do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A1</td>
              <td>Breakthrough</td>
              <td>
                Use familiar phrases, introduce yourself, answer simple questions about personal
                details
              </td>
            </tr>
            <tr>
              <td>A2</td>
              <td>Waystage</td>
              <td>Describe your background, immediate environment, and basic needs</td>
            </tr>
            <tr>
              <td>B1</td>
              <td>Threshold</td>
              <td>
                Handle most travel situations, produce simple connected text on familiar topics
              </td>
            </tr>
            <tr>
              <td>B2</td>
              <td>Vantage</td>
              <td>Understand hard text, interact fluently with native speakers</td>
            </tr>
            <tr>
              <td>C1</td>
              <td>Advanced</td>
              <td>Express ideas fluently and without planning, without much searching for words</td>
            </tr>
            <tr>
              <td>C2</td>
              <td>Mastery</td>
              <td>Understand almost everything, express yourself clearly in hard situations</td>
            </tr>
          </tbody>
        </table>

        <h2>Das Alphabet</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Letter</th>
              <th>Name</th>
              <th>Example</th>
              <th>Letter</th>
              <th>Name</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A a</td>
              <td>ah</td>
              <td>der Apfel</td>
              <td>N n</td>
              <td>enn</td>
              <td>der Name</td>
            </tr>
            <tr>
              <td>B b</td>
              <td>beh</td>
              <td>das Buch</td>
              <td>O o</td>
              <td>oh</td>
              <td>der Ort</td>
            </tr>
            <tr>
              <td>C c</td>
              <td>tseh</td>
              <td>der Computer</td>
              <td>P p</td>
              <td>peh</td>
              <td>die Post</td>
            </tr>
            <tr>
              <td>D d</td>
              <td>deh</td>
              <td>die Datei</td>
              <td>Q q</td>
              <td>koo</td>
              <td>die Qualität</td>
            </tr>
            <tr>
              <td>E e</td>
              <td>eh</td>
              <td>das Ende</td>
              <td>R r</td>
              <td>err</td>
              <td>das Resultat</td>
            </tr>
            <tr>
              <td>F f</td>
              <td>eff</td>
              <td>der Film</td>
              <td>S s</td>
              <td>ess</td>
              <td>die Sprache</td>
            </tr>
            <tr>
              <td>G g</td>
              <td>geh</td>
              <td>die Grammatik</td>
              <td>T t</td>
              <td>teh</td>
              <td>der Tisch</td>
            </tr>
            <tr>
              <td>H h</td>
              <td>hah</td>
              <td>das Haus</td>
              <td>U u</td>
              <td>oo</td>
              <td>der Urlaub</td>
            </tr>
            <tr>
              <td>I i</td>
              <td>ee</td>
              <td>die Idee</td>
              <td>V v</td>
              <td>fow</td>
              <td>das Verb</td>
            </tr>
            <tr>
              <td>J j</td>
              <td>yot</td>
              <td>das Jahr</td>
              <td>W w</td>
              <td>vay</td>
              <td>das Wort</td>
            </tr>
            <tr>
              <td>K k</td>
              <td>kah</td>
              <td>die Klasse</td>
              <td>X x</td>
              <td>iks</td>
              <td>das Xylophon</td>
            </tr>
            <tr>
              <td>L l</td>
              <td>ell</td>
              <td>das Land</td>
              <td>Y y</td>
              <td>üpsilon</td>
              <td>das Yoga</td>
            </tr>
            <tr>
              <td>M m</td>
              <td>emm</td>
              <td>der Mensch</td>
              <td>Z z</td>
              <td>tsett</td>
              <td>die Zeit</td>
            </tr>
          </tbody>
        </table>

        <h3>Extra Characters</h3>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Character</th>
              <th>Name</th>
              <th>Example</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ä ä</td>
              <td>A-Umlaut</td>
              <td>die Fächer</td>
              <td>subjects (plural)</td>
            </tr>
            <tr>
              <td>Ö ö</td>
              <td>O-Umlaut</td>
              <td>hören</td>
              <td>to listen</td>
            </tr>
            <tr>
              <td>Ü ü</td>
              <td>U-Umlaut</td>
              <td>die Übung</td>
              <td>exercise</td>
            </tr>
            <tr>
              <td>ß</td>
              <td>Eszett</td>
              <td>die Straße</td>
              <td>street</td>
            </tr>
          </tbody>
        </table>
        <p>No German keyboard: write ae, oe, ue, ss instead (e.g., Mueller for Müller).</p>

        <h2>Zahlen 0–20</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>German</th>
              <th>Number</th>
              <th>German</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>null</td>
              <td>11</td>
              <td>elf</td>
            </tr>
            <tr>
              <td>1</td>
              <td>eins</td>
              <td>12</td>
              <td>zwölf</td>
            </tr>
            <tr>
              <td>2</td>
              <td>zwei</td>
              <td>13</td>
              <td>dreizehn</td>
            </tr>
            <tr>
              <td>3</td>
              <td>drei</td>
              <td>14</td>
              <td>vierzehn</td>
            </tr>
            <tr>
              <td>4</td>
              <td>vier</td>
              <td>15</td>
              <td>fünfzehn</td>
            </tr>
            <tr>
              <td>5</td>
              <td>fünf</td>
              <td>16</td>
              <td>sechzehn</td>
            </tr>
            <tr>
              <td>6</td>
              <td>sechs</td>
              <td>17</td>
              <td>siebzehn</td>
            </tr>
            <tr>
              <td>7</td>
              <td>sieben</td>
              <td>18</td>
              <td>achtzehn</td>
            </tr>
            <tr>
              <td>8</td>
              <td>acht</td>
              <td>19</td>
              <td>neunzehn</td>
            </tr>
            <tr>
              <td>9</td>
              <td>neun</td>
              <td>20</td>
              <td>zwanzig</td>
            </tr>
            <tr>
              <td>10</td>
              <td>zehn</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p>
          13–19: add -zehn to the base word. Exceptions: sechzehn (not sechszehn), siebzehn (not
          siebenzehn).
        </p>
      </>,
      <>
        <h2>Key Phrases</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
              <th>Formality</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Guten Morgen!</td>
              <td>Good morning!</td>
              <td>Formal / Informal</td>
            </tr>
            <tr>
              <td>Guten Tag!</td>
              <td>Good day!</td>
              <td>Formal / Informal</td>
            </tr>
            <tr>
              <td>Guten Abend!</td>
              <td>Good evening!</td>
              <td>Formal / Informal</td>
            </tr>
            <tr>
              <td>Hallo!</td>
              <td>Hello!</td>
              <td>Informal</td>
            </tr>
            <tr>
              <td>Auf Wiedersehen!</td>
              <td>Goodbye!</td>
              <td>Formal</td>
            </tr>
            <tr>
              <td>Tschüss! / Bis bald! / Bis später!</td>
              <td>Bye! / See you soon! / See you later!</td>
              <td>Informal</td>
            </tr>
            <tr>
              <td>Wie geht es Ihnen? / Wie geht es dir?</td>
              <td>How are you?</td>
              <td>Formal / Informal</td>
            </tr>
            <tr>
              <td>Gut, danke. Und Ihnen? / Und dir?</td>
              <td>Good, thanks. And you?</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>danke / bitte / Entschuldigung</td>
              <td>thanks / please (also you're welcome) / excuse me</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich heiße …</td>
              <td>My name is …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Mein Name ist …</td>
              <td>My name is … (formal)</td>
              <td>Formal</td>
            </tr>
            <tr>
              <td>Ich bin … Jahre alt.</td>
              <td>I am … years old.</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich komme aus …</td>
              <td>I come from …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich wohne in …</td>
              <td>I live in …</td>
              <td>Both</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Questions: Formal vs Informal</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Formal (Sie)</th>
              <th>Informal (du)</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wie heißen Sie?</td>
              <td>Wie heißt du?</td>
              <td>What is your name?</td>
            </tr>
            <tr>
              <td>Wie ist Ihr Vorname?</td>
              <td>Wie ist dein Vorname?</td>
              <td>What is your first name?</td>
            </tr>
            <tr>
              <td>Woher kommen Sie?</td>
              <td>Woher kommst du?</td>
              <td>Where do you come from?</td>
            </tr>
            <tr>
              <td>Wo wohnen Sie?</td>
              <td>Wo wohnst du?</td>
              <td>Where do you live?</td>
            </tr>
            <tr>
              <td>Wie alt sind Sie?</td>
              <td>Wie alt bist du?</td>
              <td>How old are you?</td>
            </tr>
            <tr>
              <td>Wie geht es Ihnen?</td>
              <td>Wie geht es dir?</td>
              <td>How are you?</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Verb Conjugation Reference</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Pronoun</th>
              <th>sein</th>
              <th>heißen</th>
              <th>kommen</th>
              <th>wohnen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>bin</td>
              <td>heiße</td>
              <td>komme</td>
              <td>wohne</td>
            </tr>
            <tr>
              <td>du</td>
              <td>bist</td>
              <td>heißt</td>
              <td>kommst</td>
              <td>wohnst</td>
            </tr>
            <tr>
              <td>er/sie/es</td>
              <td>ist</td>
              <td>heißt</td>
              <td>kommt</td>
              <td>wohnt</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>sind</td>
              <td>heißen</td>
              <td>kommen</td>
              <td>wohnen</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>seid</td>
              <td>heißt</td>
              <td>kommt</td>
              <td>wohnt</td>
            </tr>
            <tr>
              <td>sie/Sie</td>
              <td>sind</td>
              <td>heißen</td>
              <td>kommen</td>
              <td>wohnen</td>
            </tr>
          </tbody>
        </table>
        <p>
          Pronoun key: ich = I, du = you (informal), er/sie/es = he/she/it, wir = we, ihr = you
          (plural), sie/Sie = they / you (formal).
        </p>
      </>,

      <>
        <h2>Sentence Structure Rules</h2>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Sentence type</th>
              <th>Verb position</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Statement</td>
              <td>Verb second</td>
              <td>Ich komme aus Deutschland.</td>
            </tr>
            <tr>
              <td>W-question</td>
              <td>Verb second, after the W-word</td>
              <td>Woher kommen Sie?</td>
            </tr>
            <tr>
              <td>Yes/no question</td>
              <td>Verb first</td>
              <td>Kommen Sie aus Deutschland?</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Personal Information Vocabulary</h2>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der Name</td>
              <td>name</td>
            </tr>
            <tr>
              <td>der Vorname</td>
              <td>first name</td>
            </tr>
            <tr>
              <td>der Familienname</td>
              <td>family name / surname</td>
            </tr>
            <tr>
              <td>das Alter</td>
              <td>age</td>
            </tr>
            <tr>
              <td>die Heimatstadt</td>
              <td>hometown</td>
            </tr>
            <tr>
              <td>der Wohnort</td>
              <td>place where you live</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Pronunciation Summary</h2>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Sound</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sch</td>
              <td>like "sh"</td>
              <td>schön, Englisch</td>
            </tr>
            <tr>
              <td>sp (word start)</td>
              <td>like "shp"</td>
              <td>sprechen, Sprache</td>
            </tr>
            <tr>
              <td>st (word start)</td>
              <td>like "sht"</td>
              <td>Straße</td>
            </tr>
            <tr>
              <td>ei</td>
              <td>like "eye"</td>
              <td>ein, mein, heißen</td>
            </tr>
            <tr>
              <td>ie</td>
              <td>like "ee"</td>
              <td>Wien, vier, Wiedersehen</td>
            </tr>
          </tbody>
        </table>
      </>
    ]
  },
  customCss: null
}

export default function WillkommenUndBegruessungen() {
  return <LearningTemplate config={config} />
}
