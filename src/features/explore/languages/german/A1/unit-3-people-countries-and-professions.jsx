import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'pcp',
  documentTitle: 'People, Countries and Professions: AETHER',
  learning: {
    category: 'Unit 3',
    title: 'Menschen, Länder und Berufe',
    subtitle: 'Titles, professions, countries, university subjects, geography, and key phrases',
    sections: [
      <>
        <h2>Why This Unit Matters</h2>
        <div id="lrn-section-0">
          <p>
            This unit builds on Unit 1. You learn the words for people, jobs, countries, and
            languages.
          </p>
          <p>You also learn titles, how to introduce people, and university subjects.</p>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">How to use this unit</span>
            <p>Use the Learning tab to study first principles and patterns.</p>
            <p>Use the Practice tab to test yourself with flashcards.</p>
            <p>Use the Reference tab to scan vocabulary tables quickly.</p>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-gender">
          <h2>The Three Genders: der, die, das</h2>
          <p>
            Every German noun has a gender. There are three: <strong>masculine</strong>,{' '}
            <strong>feminine</strong>, and <strong>neuter</strong>. The gender shows in the word for
            "the".
          </p>
          <ul className="lrn-list">
            <li>
              <strong>der</strong> = the (masculine): der Lehrer (the teacher), der Tag (the day).
            </li>
            <li>
              <strong>die</strong> = the (feminine): die Lehrerin (the teacher), die Stadt (the
              city).
            </li>
            <li>
              <strong>das</strong> = the (neuter): das Land (the country), das Hobby (the hobby).
            </li>
          </ul>
          <p>
            You cannot guess the gender from the meaning. You learn each noun together with its
            article (the small word for "the" or "a"). That is why every table in this unit shows
            der, die, or das next to the word.
          </p>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">der die das = masculine, feminine, neuter</span>
            <p>When you see "neuter", it just means the das group. It is not male or female.</p>
          </div>

          <h3>"A" and "An": ein and eine</h3>
          <p>German also has a word for "a" or "an". It follows the same gender:</p>
          <ul className="lrn-list">
            <li>
              <strong>ein</strong> for masculine and neuter: ein Lehrer (a teacher), ein Land (a
              country).
            </li>
            <li>
              <strong>eine</strong> for feminine: eine Lehrerin (a teacher), eine Stadt (a city).
            </li>
          </ul>
          <p>
            One exception comes up soon: you drop this "a" when you state a job. A later section
            explains why.
          </p>

          <h3>Reading the Plural Marks</h3>
          <p>Each table shows a short mark for the plural. Here is what each mark means.</p>
          <ul className="lrn-list">
            <li>
              <strong>-e</strong>: add e. der Tag → die Tage.
            </li>
            <li>
              <strong>-n / -en</strong>: add n or en. die Sprache → die Sprachen.
            </li>
            <li>
              <strong>-nen</strong>: add nen. die Lehrerin → die Lehrerinnen.
            </li>
            <li>
              <strong>-s</strong>: add s. das Hobby → die Hobbys.
            </li>
            <li>
              <strong>-</strong> (just a dash): no change. der Lehrer → die Lehrer.
            </li>
            <li>
              <strong>²e</strong>: add e and put two dots (an umlaut) on the vowel. der Koch → die
              Köche.
            </li>
            <li>
              <strong>²er</strong>: add er and an umlaut. das Land → die Länder.
            </li>
          </ul>
        </div>
      </>,
      <>
        <div id="lrn-section-1">
          <h2>Personal Pronouns (the short words for people)</h2>
          <p className="lrn-insight">
            A pronoun is the short word that stands in for a person: I, you, he, and so on. Unit 1
            already teaches <strong>ich</strong> (I), <strong>du</strong> (you, one friend), and{' '}
            <strong>Sie</strong> (you, formal).
          </p>
          <p>Here are the rest, so you can talk about other people too:</p>
          <ul className="lrn-list">
            <li>
              <strong>er</strong> = he, <strong>sie</strong> = she, <strong>es</strong> = it
            </li>
            <li>
              <strong>wir</strong> = we
            </li>
            <li>
              <strong>ihr</strong> = you (a group of friends)
            </li>
          </ul>
          <p>
            So German has three words for "you": <strong>du</strong> for one friend,{' '}
            <strong>ihr</strong> for a group of friends, and <strong>Sie</strong> for formal
            address. You use <strong>ihr</strong> when you speak to more than one person you know
            well: <em>Woher kommt ihr?</em> (Where do you all come from?)
          </p>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Tip: sie vs. Sie</span>
            <p>
              <strong>sie</strong> (lowercase) means "she" or "they".
            </p>
            <p>
              <strong>Sie</strong> (capitalised) means "you" (formal).
            </p>
            <p>Context and capitalisation tell you which one it is.</p>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-2">
          <h2>
            Saying Your Job with <em>sein</em>
          </h2>
          <p className="lrn-insight">
            You already know how to conjugate <strong>sein</strong> (change the verb to match who is
            doing it: ich bin, du bist, er ist…) from Unit 1. Here you use it to state your job.
            German has one special rule for that.
          </p>
          <p>
            When you say your profession, you drop the article: <strong>Ich bin Ingenieur.</strong>{' '}
            You do NOT say <em>Ich bin ein Ingenieur</em>.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do you drop the article when you say your profession in German?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                After <strong>sein</strong>, the profession describes a category, not a specific
                person. Articles point to specific individual things. You mean no specific person,
                so German drops the article.
              </p>
              <p>
                You only add an article when you describe the noun:{' '}
                <em>Ich bin ein guter Ingenieur.</em> (I am a good engineer.) The ending on{' '}
                <em>guter</em> changes to fit the noun; you learn those endings later.
              </p>
            </details>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-3">
          <h2>Professions: Male and Female Forms</h2>
          <p>
            German jobs have a male form and a female form. Start with the male form. To make the
            female form, you add <strong>-in</strong> to the end.
          </p>
          <div className="lrn-eq">der Lehrer → die Lehrerin (teacher)</div>
          <p>
            The male form takes <strong>der</strong>. The female form takes <strong>die</strong>.
            That fits the genders you just learned: a male teacher is masculine, a female teacher is
            feminine.
          </p>
          <p>
            Now you can talk about other people's jobs. Use <strong>er</strong> (he) or{' '}
            <strong>sie</strong> (she) with <em>ist</em>: <em>Er ist Lehrer.</em> (He is a teacher.){' '}
            <em>Sie ist Ärztin.</em> (She is a doctor.) You still drop the article after{' '}
            <em>ist</em>.
          </p>
          <p>
            For more than one woman, the plural adds <strong>-nen</strong>: die Lehrerin → die
            Lehrerinnen. That is why every female job below shows the mark <strong>-nen</strong>.
          </p>
          <p>
            A few jobs change a little more. <em>der Koch</em> (cook) becomes <em>die Köchin</em>,
            and <em>der Arzt</em> (doctor) becomes <em>die Ärztin</em>: the vowel gets an umlaut.
            You still hear the -in ending. Now read the job words below. Each one follows this
            pattern.
          </p>

          <h3>Teaching and Academia</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Male form</span>
              <p>
                <strong>der Lehrer, -</strong>: teacher
              </p>
              <p>
                <strong>der Student, -en</strong>: student
              </p>
              <p>
                <strong>der Mathematiker, -</strong>: mathematician
              </p>
              <p>
                <strong>der Physiker, -</strong>: physicist
              </p>
              <p>
                <strong>der Philosoph, -en</strong>: philosopher
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Female form</span>
              <p>
                <strong>die Lehrerin, -nen</strong>: teacher
              </p>
              <p>
                <strong>die Studentin, -nen</strong>: student
              </p>
              <p>
                <strong>die Mathematikerin, -nen</strong>: mathematician
              </p>
              <p>
                <strong>die Physikerin, -nen</strong>: physicist
              </p>
              <p>
                <strong>die Philosophin, -nen</strong>: philosopher
              </p>
            </div>
          </div>

          <h3>Engineering and Technology</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Male form</span>
              <p>
                <strong>der Ingenieur, -e</strong>: engineer
              </p>
              <p>
                <strong>der Elektronikingenieur, -e</strong>: electronics engineer
              </p>
              <p>
                <strong>der Informatiker, -</strong>: computer scientist
              </p>
              <p>
                <strong>der Mechaniker, -</strong>: mechanic
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Female form</span>
              <p>
                <strong>die Ingenieurin, -nen</strong>: engineer
              </p>
              <p>(no female form in this unit)</p>
              <p>
                <strong>die Informatikerin, -nen</strong>: computer scientist
              </p>
              <p>
                <strong>die Mechanikerin, -nen</strong>: mechanic
              </p>
            </div>
          </div>

          <h3>Arts, Media and Law</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Male form</span>
              <p>
                <strong>der Journalist, -en</strong>: journalist
              </p>
              <p>
                <strong>der Jurist, -en</strong>: lawyer / legal expert
              </p>
              <p>
                <strong>der Maler, -</strong>: painter
              </p>
              <p>
                <strong>der Musiker, -</strong>: musician
              </p>
              <p>
                <strong>der Manager, -</strong>: manager
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Female form</span>
              <p>
                <strong>die Journalistin, -nen</strong>: journalist
              </p>
              <p>
                <strong>die Juristin, -nen</strong>: lawyer / legal expert
              </p>
              <p>
                <strong>die Malerin, -nen</strong>: painter
              </p>
              <p>
                <strong>die Musikerin, -nen</strong>: musician
              </p>
              <p>
                <strong>die Managerin, -nen</strong>: manager
              </p>
            </div>
          </div>

          <h3>Service and Other Professions</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Male form</span>
              <p>
                <strong>der Kellner, -</strong>: waiter
              </p>
              <p>
                <strong>der Koch, ²e</strong>: cook
              </p>
              <p>
                <strong>der Taxifahrer, -</strong>: taxi driver
              </p>
              <p>
                <strong>der Sekretär, -e</strong>: secretary
              </p>
              <p>
                <strong>der Kommissar, -e</strong>: inspector
              </p>
              <p>
                <strong>der Kriminalkommissar, -e</strong>: police inspector
              </p>
              <p>
                <strong>der Notarzt, ²e</strong>: emergency doctor
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Female form</span>
              <p>
                <strong>die Kellnerin, -nen</strong>: waitress
              </p>
              <p>(no female form in this unit)</p>
              <p>
                <strong>die Taxifahrerin, -nen</strong>: taxi driver
              </p>
              <p>
                <strong>die Sekretärin, -nen</strong>: secretary
              </p>
              <p>
                <strong>die Kommissarin, -nen</strong>: inspector
              </p>
              <p>(no female form in this unit)</p>
              <p>(no female form in this unit)</p>
            </div>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-4">
          <h2>More Question Words</h2>
          <p className="lrn-insight">
            Unit 1 already teaches the question words wie (how), wo (where), and woher (from where).
            One more basic one: <strong>was</strong> means "what". You ask <em>Was ist das?</em>{' '}
            (What is that?). This page then adds two harder ones: welcher and wie viel.
          </p>

          <h3>welcher / welche / welches (which?)</h3>
          <p>
            Start with one example: <em>Welcher Tag ist heute?</em> (Which day is today?). Here{' '}
            <strong>welcher</strong> ends in -er because <em>der Tag</em> is masculine.
          </p>
          <p>
            The ending of "which" changes to match the noun's gender. Use <strong>welcher</strong>{' '}
            for masculine, <strong>welche</strong> for feminine or plural, and{' '}
            <strong>welches</strong> for neuter.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Examples</span>
              <p>
                <em>Welcher Tag ist heute?</em> (Which day?). der Tag is masculine.
              </p>
              <p>
                <em>Welche Stadt?</em> (Which city?). die Stadt is feminine.
              </p>
              <p>
                <em>Welche Sprachen sprechen Sie?</em> (Which languages do you speak?). This is
                plural.
              </p>
              <p>
                <em>Welches Land?</em> (Which country?). das Land is neuter.
              </p>
            </div>
          </div>

          <h3>wie viel? (how much? / how many?)</h3>
          <p>
            Use <strong>wie viel</strong> to ask about amount or quantity.
          </p>
          <p>
            Example: <em>Wie viel kostet das?</em> (How much does that cost?)
          </p>
        </div>
      </>,
      <>
        <div id="lrn-section-5">
          <h2>Introducing Yourself and Others</h2>
          <p className="lrn-insight">
            In Unit 1 you learned to give your name (Ich heiße…), origin (Ich komme aus…), and where
            you live (Ich wohne in…). This page adds titles, how to introduce other people, and the
            verb for introducing yourself.
          </p>
          <p>
            To introduce someone else, say <strong>Das ist…</strong>: <em>Das ist Herr Meyer.</em>{' '}
            (This is Mr. Meyer.) <em>Das ist Frau Schmidt.</em> (This is Mrs. Schmidt.)
          </p>

          <h3>Asking about a job: von Beruf</h3>
          <p>
            To ask someone's job, German uses the fixed phrase <strong>von Beruf</strong> (by
            profession). You attach it to the verb <em>sein</em>.
          </p>
          <div className="lrn-eq">Was sind Sie von Beruf? (What is your profession?)</div>
          <p>
            To answer, name your job and add <strong>von Beruf</strong>. You still drop the article
            before the job, just like before.
          </p>
          <div className="lrn-eq">Ich bin Lehrer von Beruf. (I am a teacher by profession.)</div>
          <p>
            You can also drop <em>von Beruf</em> and just say <em>Ich bin Lehrer.</em> Both are
            correct. The phrase <strong>von Beruf</strong> simply makes the question about work
            clear.
          </p>

          <h3>Titles: Herr and Frau</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">der Herr, -en</span>
              <p>Mr., gentleman</p>
              <p>
                Example: <em>Herr Meyer</em> = Mr. Meyer
              </p>
              <p>Used before a surname to address men formally.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">die Frau, -en</span>
              <p>woman / wife / Mrs.</p>
              <p>
                Example: <em>Frau Schmidt</em> = Mrs. Schmidt
              </p>
              <p>Frau also means "woman" and "wife" outside of titles.</p>
            </div>
          </div>

          <h3>The verb sich vorstellen (to introduce yourself)</h3>
          <p>Here is the sentence you are building toward:</p>
          <div className="lrn-eq">Ich stelle mich vor. (I introduce myself.)</div>
          <p>That short sentence has three moving parts. Watch how it is built, step by step.</p>
          <ul className="lrn-list">
            <li>
              Start with the subject and the verb: <em>Ich stelle…</em> (I … place).
            </li>
            <li>
              Add <strong>mich</strong> (myself): <em>Ich stelle mich…</em>
            </li>
            <li>
              Send the front part <strong>vor-</strong> to the very end:{' '}
              <em>Ich stelle mich vor.</em>
            </li>
          </ul>
          <p>Two rules are at work here. Learn them one at a time.</p>
          <p>
            <strong>First, the reflexive part.</strong> The dictionary form shows{' '}
            <strong>sich</strong>, which means "oneself". It is a placeholder. When <em>I</em> do
            the action, "oneself" becomes "myself", so <strong>sich</strong> turns into{' '}
            <strong>mich</strong>. That is why you say <em>mich</em> and not <em>sich</em> here.
          </p>
          <p>
            <strong>Second, the split.</strong> The verb is <em>vorstellen</em>. The front part{' '}
            <strong>vor-</strong> breaks off and jumps to the end of the sentence. The rest,{' '}
            <strong>stelle</strong>, stays in second place after <em>ich</em>.
          </p>
          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Payoff</span>
            <p>
              You can now introduce yourself in German: <em>Ich stelle mich vor.</em> Then give your
              name, job, and where you come from.
            </p>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-6">
          <h2>Countries and Nationalities</h2>
          <p>
            Most country names take <strong>no article</strong>. You just say the name.
          </p>
          <div className="lrn-eq">Ich komme aus Deutschland. (I come from Germany.)</div>
          <p>
            You met <strong>aus</strong> (from) and <strong>in</strong> (in) in Unit 1. Use{' '}
            <strong>aus</strong> for where you come from, and <strong>in</strong> for where you
            live. With most countries you add no article after them: <em>aus Deutschland</em>,{' '}
            <em>in Italien</em>.
          </p>
          <p>
            A small group of countries always carries an article. You must learn these by heart:
          </p>
          <ul className="lrn-list">
            <li>
              <strong>die Schweiz</strong> (Switzerland)
            </li>
            <li>
              <strong>die Türkei</strong> (Turkey)
            </li>
            <li>
              <strong>die Ukraine</strong> (Ukraine)
            </li>
            <li>
              <strong>die Niederlande</strong> (the Netherlands, always plural)
            </li>
            <li>
              <strong>die USA</strong> (the USA, always plural)
            </li>
          </ul>
          <p>
            With these, the article changes after <em>aus</em>: you say{' '}
            <em>Ich komme aus der Schweiz</em>. For now, just remember that these few countries keep
            their article.
          </p>

          <h3>Nationalities and Languages</h3>
          <p>
            The name of the language and the adjective often end in <strong>-isch</strong>:
            Deutschland → Deutsch, Italien → Italienisch, Spanien → Spanisch. The tables below give
            you the country and its main language together.
          </p>

          <h3>German-speaking countries</h3>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Language/Nationality</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Deutschland</td>
                  <td>Deutsch</td>
                  <td>Germany; German</td>
                </tr>
                <tr>
                  <td>Österreich</td>
                  <td>Deutsch</td>
                  <td>Austria; German spoken</td>
                </tr>
                <tr>
                  <td>die Schweiz</td>
                  <td>Deutsch / Französisch / Italienisch / Rätoromanisch</td>
                  <td>Switzerland</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>European countries</h3>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Language / Adjective</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>England / Großbritannien</td>
                  <td>Englisch</td>
                </tr>
                <tr>
                  <td>Frankreich</td>
                  <td>Französisch</td>
                </tr>
                <tr>
                  <td>Irland</td>
                  <td>Englisch / Irisch</td>
                </tr>
                <tr>
                  <td>Italien</td>
                  <td>Italienisch</td>
                </tr>
                <tr>
                  <td>Spanien</td>
                  <td>Spanisch</td>
                </tr>
                <tr>
                  <td>Portugal</td>
                  <td>Portugiesisch</td>
                </tr>
                <tr>
                  <td>Polen</td>
                  <td>Polnisch</td>
                </tr>
                <tr>
                  <td>Russland</td>
                  <td>Russisch</td>
                </tr>
                <tr>
                  <td>Tschechien</td>
                  <td>Tschechisch</td>
                </tr>
                <tr>
                  <td>Slowenien</td>
                  <td>Slowenisch</td>
                </tr>
                <tr>
                  <td>Kroatien</td>
                  <td>Kroatisch</td>
                </tr>
                <tr>
                  <td>die Niederlande (Pl.)</td>
                  <td>Niederländisch</td>
                </tr>
                <tr>
                  <td>die Türkei</td>
                  <td>Türkisch</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Countries outside Europe</h3>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Language / Adjective</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kanada</td>
                  <td>Englisch / Französisch</td>
                </tr>
                <tr>
                  <td>die USA (Pl.)</td>
                  <td>Englisch</td>
                </tr>
                <tr>
                  <td>Mexiko</td>
                  <td>Spanisch</td>
                </tr>
                <tr>
                  <td>Indien</td>
                  <td>Hindi / Englisch</td>
                </tr>
                <tr>
                  <td>Tunesien</td>
                  <td>Arabisch / Französisch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-7">
          <h2>Numbers 21 to 99</h2>
          <p className="lrn-insight">
            Unit 1 teaches the numbers up to 20. Here you learn how to build the numbers from 21 to
            99. You need them for your age, phone number, and the year.
          </p>
          <p>First, the round tens. Each one has its own word.</p>
          <ul className="lrn-list">
            <li>20 = zwanzig</li>
            <li>30 = dreißig</li>
            <li>40 = vierzig</li>
            <li>50 = fünfzig</li>
            <li>60 = sechzig (the -s of sechs drops)</li>
            <li>70 = siebzig (the -en of sieben drops)</li>
            <li>80 = achtzig</li>
            <li>90 = neunzig</li>
          </ul>
          <h3>The reversed pattern</h3>
          <p>
            German says the small digit first, then the ten. You glue them together with{' '}
            <strong>und</strong> (and). It all becomes one word.
          </p>
          <div className="lrn-eq">21 = ein + und + zwanzig = einundzwanzig</div>
          <p>
            Read it as "one-and-twenty". The 1 comes first, then "and", then "twenty". German keeps
            this order for every number from 21 to 99.
          </p>
          <ul className="lrn-list">
            <li>22 = zweiundzwanzig (two-and-twenty)</li>
            <li>34 = vierunddreißig (four-and-thirty)</li>
            <li>57 = siebenundfünfzig (seven-and-fifty)</li>
            <li>99 = neunundneunzig (nine-and-ninety)</li>
          </ul>
          <p>
            Note: for 21, 31, 41 and so on, you write <strong>ein</strong>, not eins. So 21 is{' '}
            <em>einundzwanzig</em>, not einsundzwanzig.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">die Zahl, -en</span>
            <div className="lrn-definition-desc">
              <p>Number (feminine, plural -en).</p>
              <p>
                Also: <strong>die Nummer, -n</strong> = number in a series, like a phone number.
              </p>
            </div>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-8">
          <h2>Hobbies and Leisure</h2>
          <p className="lrn-insight">
            To talk about hobbies, you need two little words: <strong>gern(e)</strong> and{' '}
            <strong>lieber</strong>. You also need the verb <strong>haben</strong> (to have).
          </p>

          <h3>Saying what you like: gern(e) and lieber</h3>
          <p>
            <strong>gern</strong> (also written <strong>gerne</strong>) means "like to". You add it
            after the verb to show you enjoy doing something.
          </p>
          <div className="lrn-eq">Ich spiele gern Fußball. (I like playing football.)</div>
          <p>
            The verb stays in second place. The word <strong>gern</strong> comes right after it.
            Look: <em>spiele</em> is the verb, <em>gern</em> follows it, then the activity.
          </p>
          <p>
            <strong>lieber</strong> means "prefer to". It is the stronger version of gern. Use it
            when you like one thing more than another.
          </p>
          <div className="lrn-eq">Ich spiele gern Fußball, aber ich spiele lieber Tischtennis.</div>
          <p>
            That means: "I like playing football, but I prefer playing table tennis." Both{' '}
            <strong>gern</strong> and <strong>lieber</strong> sit right after the verb.
          </p>

          <h3>The verb haben (to have)</h3>
          <p>
            You use <strong>haben</strong> to say what someone has. It is a little irregular, so
            learn these forms by heart.
          </p>
          <ul className="lrn-list">
            <li>ich habe (I have)</li>
            <li>du hast (you have)</li>
            <li>er / sie / es hat (he / she / it has)</li>
            <li>wir haben (we have)</li>
            <li>ihr habt (you have, group)</li>
            <li>sie / Sie haben (they / you have)</li>
          </ul>
          <p>
            Example: <em>Er hat viele Hobbys.</em> (He has many hobbies.) Notice the short form{' '}
            <strong>hat</strong> for "he has".
          </p>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>German</th>
                  <th>Article</th>
                  <th>English</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>das Hobby, -s</td>
                  <td>das</td>
                  <td>hobby</td>
                  <td>plural -s</td>
                </tr>
                <tr>
                  <td>der Sport</td>
                  <td>der</td>
                  <td>sport</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>der Fußball</td>
                  <td>der</td>
                  <td>football</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>das Tennis</td>
                  <td>das</td>
                  <td>tennis</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>das Tischtennis</td>
                  <td>das</td>
                  <td>table tennis</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>das Hockey</td>
                  <td>das</td>
                  <td>hockey</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>der Volleyball</td>
                  <td>der</td>
                  <td>volleyball</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>die Gitarre, -n</td>
                  <td>die</td>
                  <td>guitar</td>
                  <td>plural -n</td>
                </tr>
                <tr>
                  <td>die Trompete, -n</td>
                  <td>die</td>
                  <td>trumpet</td>
                  <td>plural -n</td>
                </tr>
                <tr>
                  <td>die Musik</td>
                  <td>die</td>
                  <td>music</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>die Jazz-Musik</td>
                  <td>die</td>
                  <td>jazz</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>die Popmusik</td>
                  <td>die</td>
                  <td>pop music</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>singen</td>
                  <td>-</td>
                  <td>to sing</td>
                  <td>verb</td>
                </tr>
                <tr>
                  <td>spielen</td>
                  <td>-</td>
                  <td>to play</td>
                  <td>Fußball spielen, Gitarre spielen</td>
                </tr>
                <tr>
                  <td>lesen</td>
                  <td>-</td>
                  <td>to read</td>
                  <td>irregular: er liest (e becomes ie)</td>
                </tr>
                <tr>
                  <td>sammeln</td>
                  <td>-</td>
                  <td>to collect</td>
                  <td>verb</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>Types of reading</h3>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>German</th>
                  <th>Article</th>
                  <th>English</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>der Roman, -e</td>
                  <td>der</td>
                  <td>novel</td>
                </tr>
                <tr>
                  <td>der Liebesroman, -e</td>
                  <td>der</td>
                  <td>romance novel</td>
                </tr>
                <tr>
                  <td>der Kriminalroman, -e</td>
                  <td>der</td>
                  <td>crime novel</td>
                </tr>
                <tr>
                  <td>der Geschichtsroman, -e</td>
                  <td>der</td>
                  <td>historical novel</td>
                </tr>
                <tr>
                  <td>das Gedicht, -e</td>
                  <td>das</td>
                  <td>poem</td>
                </tr>
                <tr>
                  <td>das Kochbuch, ²er</td>
                  <td>das</td>
                  <td>cookbook</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-9">
          <h2>Academic Subjects</h2>
          <p>These nouns name fields of study at university.</p>
          <p>
            The verb <strong>studieren</strong> means "to study at university". It is a regular
            verb. You already know how regular verbs work from Unit 1: keep the stem (
            <em>studier-</em>) and swap the ending.
          </p>
          <ul className="lrn-list">
            <li>ich studiere (I study)</li>
            <li>du studierst (you study)</li>
            <li>er / sie studiert (he / she studies)</li>
            <li>wir / sie / Sie studieren (we / they / you study)</li>
          </ul>
          <p>
            Example: <em>Ich studiere Jura.</em> (I study law.)
          </p>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>German</th>
                  <th>Article</th>
                  <th>English</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jura (Pl.)</td>
                  <td>-</td>
                  <td>law</td>
                  <td>plural only; used without article</td>
                </tr>
                <tr>
                  <td>die Medizin</td>
                  <td>die</td>
                  <td>medicine</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>die Informatik</td>
                  <td>die</td>
                  <td>computer science</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>die Mathematik</td>
                  <td>die</td>
                  <td>mathematics</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>die Physik</td>
                  <td>die</td>
                  <td>physics</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>die Philosophie, -n</td>
                  <td>die</td>
                  <td>philosophy</td>
                  <td>plural -n</td>
                </tr>
                <tr>
                  <td>das Ingenieurwesen</td>
                  <td>das</td>
                  <td>engineering</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>die Elektronik</td>
                  <td>die</td>
                  <td>electronics</td>
                  <td>no plural</td>
                </tr>
                <tr>
                  <td>die Universität, -en</td>
                  <td>die</td>
                  <td>university</td>
                  <td>plural -en</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-10">
          <h2>Vocabulary: People, Names, and Places</h2>
          <p>These nouns appear constantly in personal introductions and basic conversation.</p>
          <div className="lrn-table">
            <table>
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
                  <td>die Person, -en</td>
                  <td>die</td>
                  <td>person</td>
                  <td>-en</td>
                </tr>
                <tr>
                  <td>der Mensch, -en</td>
                  <td>der</td>
                  <td>person, human being</td>
                  <td>-en</td>
                </tr>
                <tr>
                  <td>die Leute (Pl.)</td>
                  <td>die</td>
                  <td>people</td>
                  <td>plural only</td>
                </tr>
                <tr>
                  <td>der Name, -n</td>
                  <td>der</td>
                  <td>name</td>
                  <td>-n</td>
                </tr>
                <tr>
                  <td>der Vorname, -n</td>
                  <td>der</td>
                  <td>first name</td>
                  <td>-n</td>
                </tr>
                <tr>
                  <td>der Familienname, -n</td>
                  <td>der</td>
                  <td>family name</td>
                  <td>-n</td>
                </tr>
                <tr>
                  <td>die Familie, -n</td>
                  <td>die</td>
                  <td>family</td>
                  <td>-n</td>
                </tr>
                <tr>
                  <td>der Wohnort, -e</td>
                  <td>der</td>
                  <td>place of residence</td>
                  <td>-e</td>
                </tr>
                <tr>
                  <td>die Stadt, ²e</td>
                  <td>die</td>
                  <td>city, town</td>
                  <td>²e (umlaut)</td>
                </tr>
                <tr>
                  <td>die Hauptstadt, ²e</td>
                  <td>die</td>
                  <td>capital city</td>
                  <td>²e (umlaut)</td>
                </tr>
                <tr>
                  <td>die Heimatstadt, ²e</td>
                  <td>die</td>
                  <td>home town</td>
                  <td>²e (umlaut)</td>
                </tr>
                <tr>
                  <td>das Land, ²er</td>
                  <td>das</td>
                  <td>country</td>
                  <td>²er (umlaut)</td>
                </tr>
                <tr>
                  <td>die Muttersprache, -n</td>
                  <td>die</td>
                  <td>mother tongue</td>
                  <td>-n</td>
                </tr>
                <tr>
                  <td>die Sprache, -n</td>
                  <td>die</td>
                  <td>language</td>
                  <td>-n</td>
                </tr>
                <tr>
                  <td>die Telefonnummer, -n</td>
                  <td>die</td>
                  <td>telephone number</td>
                  <td>-n</td>
                </tr>
                <tr>
                  <td>die Handynummer, -n</td>
                  <td>die</td>
                  <td>mobile phone number</td>
                  <td>-n</td>
                </tr>
                <tr>
                  <td>die E-Mail, -s</td>
                  <td>die</td>
                  <td>email</td>
                  <td>-s</td>
                </tr>
                <tr>
                  <td>die Tätigkeit, -en</td>
                  <td>die</td>
                  <td>activity</td>
                  <td>-en</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Time</h3>
          <div className="lrn-table">
            <table>
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
                  <td>das Jahr, -e</td>
                  <td>das</td>
                  <td>year</td>
                  <td>-e</td>
                </tr>
                <tr>
                  <td>die Minute, -n</td>
                  <td>die</td>
                  <td>minute</td>
                  <td>-n</td>
                </tr>
                <tr>
                  <td>der Tag, -e</td>
                  <td>der</td>
                  <td>day</td>
                  <td>-e</td>
                </tr>
                <tr>
                  <td>der Morgen, -</td>
                  <td>der</td>
                  <td>morning</td>
                  <td>unchanged</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-11">
          <h2>Germany, Austria and Switzerland</h2>
          <p>
            Germany and Austria split into regions called Bundesländer. Switzerland uses Kantone.
          </p>
          <p>
            Switzerland has four official languages: Deutsch, Französisch, Italienisch, and
            Rätoromanisch.
          </p>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>German</th>
                  <th>Article</th>
                  <th>English</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>das Bundesland, ²er</td>
                  <td>das</td>
                  <td>region (Germany/Austria)</td>
                  <td>plural ²er</td>
                </tr>
                <tr>
                  <td>der Kanton, -e</td>
                  <td>der</td>
                  <td>canton (Switzerland)</td>
                  <td>plural -e</td>
                </tr>
                <tr>
                  <td>die Amtssprache, -n</td>
                  <td>die</td>
                  <td>official language</td>
                  <td>plural -n</td>
                </tr>
                <tr>
                  <td>die Millionenstadt, ²e</td>
                  <td>die</td>
                  <td>city with over a million people</td>
                  <td>plural ²e</td>
                </tr>
                <tr>
                  <td>die Alpen (Pl.)</td>
                  <td>die</td>
                  <td>Alps</td>
                  <td>plural only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-12" className="lrn-section">
          <h2>Geography and Compass Directions</h2>
          <p>
            You use these words to talk about German cities, regions, and their positions on a map.
          </p>

          <h3>Compass Points</h3>
          <p>
            All four main directions take <strong>der</strong>. Compounds combine two words: Nord +
            Osten = Nordosten.
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
                <th>Article</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>der Norden</td>
                <td>north</td>
                <td>der</td>
              </tr>
              <tr>
                <td>der Süden</td>
                <td>south</td>
                <td>der</td>
              </tr>
              <tr>
                <td>der Osten</td>
                <td>east</td>
                <td>der</td>
              </tr>
              <tr>
                <td>der Westen</td>
                <td>west</td>
                <td>der</td>
              </tr>
              <tr>
                <td>der Nordosten</td>
                <td>north-east</td>
                <td>der</td>
              </tr>
              <tr>
                <td>der Nordwesten</td>
                <td>north-west</td>
                <td>der</td>
              </tr>
              <tr>
                <td>der Südosten</td>
                <td>south-east</td>
                <td>der</td>
              </tr>
              <tr>
                <td>der Südwesten</td>
                <td>south-west</td>
                <td>der</td>
              </tr>
              <tr>
                <td>die Mitte</td>
                <td>middle, centre</td>
                <td>die</td>
              </tr>
            </tbody>
          </table>

          <h3>Describing Cities and Regions</h3>
          <p>
            Germany has 16 states (Bundesländer), each with its own capital city. These words help
            you describe where a place is and what it is.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Landeshauptstadt, ²e</span>
            <div className="lrn-definition-desc">
              <p>The capital city of a German federal state (Bundesland).</p>
            </div>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
                <th>Article</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>die Landeshauptstadt</td>
                <td>regional capital</td>
                <td>die</td>
                <td>²e</td>
              </tr>
              <tr>
                <td>der Platz</td>
                <td>place, square</td>
                <td>der</td>
                <td>²e</td>
              </tr>
              <tr>
                <td>der Einwohner</td>
                <td>inhabitant</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Wirtshaus</td>
                <td>inn</td>
                <td>das</td>
                <td>²er</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ]
  },
  practice: [
    {
      q: 'Translate: "This is Mr. Meyer." (introducing someone else)',
      a: 'Das ist Herr Meyer. Use Das ist… to introduce another person. der Herr (Mr.) goes before the surname for formal address.'
    },
    {
      q: 'Which form of "which" do you use with das Land: welcher, welche, or welches?',
      a: 'welches. das Land is neuter, so use welches: Welches Land? Use welcher for masculine, welche for feminine or plural, welches for neuter.'
    },
    {
      q: 'Translate: "I am a journalist." (female speaker)',
      a: 'Ich bin Journalistin. No article before the profession noun. Female form of Journalist adds -in: die Journalistin.'
    },
    {
      q: 'Translate: "She is a doctor." (use the female form)',
      a: 'Sie ist Ärztin. The female form of der Arzt is die Ärztin (the vowel gets an umlaut, then -in). Drop the article after sein: Sie ist Ärztin, not Sie ist eine Ärztin.'
    },
    {
      q: 'Translate: "He is 16 years old."',
      a: 'Er ist 16. Use sein (to be): er ist. No need to say "Jahre alt" in simple statements.'
    },
    {
      q: 'What is the female form of "der Lehrer" (teacher)?',
      a: 'die Lehrerin, -nen. Add -in to form the female version. All female -in nouns take -nen in the plural.'
    },
    {
      q: 'Translate: "My home town is Vienna." (use die Heimatstadt)',
      a: 'Meine Heimatstadt ist Wien. die Heimatstadt = home town (feminine). Wien is the German name for Vienna, the capital of Österreich (Austria).'
    },
    {
      q: 'What does "gern(e)" mean and how do you use it?',
      a: 'gern(e) = like to / enjoy doing. Place it after the verb: Ich lese gerne Romane. (I like reading novels.)'
    },
    {
      q: 'How do you say "I study law" in German?',
      a: 'Ich studiere Jura. Jura is a plural-only noun used without an article. studieren = to study (at university).'
    },
    {
      q: 'Translate: "What is your profession?" (formal)',
      a: 'Was sind Sie von Beruf? von Beruf = by profession. Use sein + von Beruf to ask or state a profession.'
    },
    {
      q: 'What four languages are official in Switzerland?',
      a: 'Deutsch, Französisch, Italienisch, and Rätoromanisch. Most Swiss people speak Deutsch.'
    },
    {
      q: 'Translate: "I am from Germany."',
      a: 'Ich komme aus Deutschland. OR Ich bin aus Deutschland. Both are correct. aus + country name (no article for most countries).'
    },
    {
      q: 'What is the difference between "du", "ihr", and "Sie"?',
      a: 'du = you (informal singular, one person you know well). ihr = you (informal plural, a group you know well). Sie = you (formal, always capitalised, any number of people).'
    },
    {
      q: 'Give the male and female forms of "computer scientist" in German.',
      a: 'Male: der Informatiker, - (plural unchanged). Female: die Informatikerin, -nen.'
    },
    {
      q: 'How do you say "I prefer to play tennis" in German?',
      a: 'Ich spiele lieber Tennis. lieber = rather / prefer to. Place lieber after the verb.'
    },
    {
      q: 'What is the German word for "capital city"? Give article and plural.',
      a: 'die Hauptstadt, Hauptstädte. Article: die (feminine). Plural: umlaut + e (²e pattern).'
    },
    {
      q: 'Translate: "Which languages do you speak?" (formal)',
      a: 'Welche Sprachen sprechen Sie? welche = which (plural). sprechen = to speak. Sie = you (formal).'
    },
    {
      q: 'Why does German not use an article when stating a profession after "sein"?',
      a: 'After sein, the profession describes a category, not a specific person. That is why German drops the article. You only add an article when you modify the noun: Ich bin ein guter Ingenieur. (I am a good engineer.)'
    },
    {
      q: 'Translate: "I introduce myself."',
      a: 'Ich stelle mich vor. The verb vorstellen splits: the front part vor- jumps to the end of the sentence. sich means the action points back at you, so you add mich (myself).'
    },
    {
      q: 'Write 21 and 34 in German. Explain the pattern.',
      a: '21 = einundzwanzig. 34 = vierunddreißig. German says the small digit first, then und, then the ten, all as one word. For 21 you write ein, not eins.'
    },
    {
      q: 'Answer in German: "Woher kommen Sie?" Say you come from Switzerland.',
      a: 'Ich komme aus der Schweiz. die Schweiz is one of the few countries that keep their article. After aus, die Schweiz becomes der Schweiz.'
    },
    {
      q: 'Translate: "He has many hobbies."',
      a: 'Er hat viele Hobbys. haben = to have; er hat = he has. Hobbys is the plural of das Hobby (-s plural).'
    },
    {
      q: 'What region unit does Germany use vs. Switzerland?',
      a: 'Germany (and Austria) use das Bundesland, ²er (federal state/region). Switzerland uses der Kanton, -e (canton).'
    },
    {
      q: 'Translate: "I like reading novels."',
      a: 'Ich lese gerne Romane. lesen = to read (irregular: er liest). gerne = like to. der Roman, -e = novel.'
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Menschen, Länder und Berufe',
    sections: [
      <>
        <p className="lrn-insight">This reference lists only what is new to Unit 3.</p>

        <h2>New Professions</h2>
        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Male</th>
                <th>Female</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>der Sekretär, -e</td>
                <td>die Sekretärin, -nen</td>
                <td>secretary</td>
              </tr>
              <tr>
                <td>der Kriminalkommissar, -e</td>
                <td>-</td>
                <td>police inspector</td>
              </tr>
              <tr>
                <td>der Notarzt, ²e</td>
                <td>-</td>
                <td>emergency doctor</td>
              </tr>
              <tr>
                <td>der Elektronikingenieur, -e</td>
                <td>-</td>
                <td>electronics engineer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Academic Subjects</h2>
        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>German</th>
                <th>Article</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jura (Pl.)</td>
                <td>-</td>
                <td>law</td>
              </tr>
              <tr>
                <td>die Medizin</td>
                <td>die</td>
                <td>medicine</td>
              </tr>
              <tr>
                <td>die Informatik</td>
                <td>die</td>
                <td>computer science</td>
              </tr>
              <tr>
                <td>die Philosophie, -n</td>
                <td>die</td>
                <td>philosophy</td>
              </tr>
              <tr>
                <td>das Ingenieurwesen</td>
                <td>das</td>
                <td>engineering</td>
              </tr>
              <tr>
                <td>die Universität, -en</td>
                <td>die</td>
                <td>university</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Geography and Admin</h2>
        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>German</th>
                <th>Article</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>das Bundesland, ²er</td>
                <td>das</td>
                <td>region (Germany/Austria)</td>
              </tr>
              <tr>
                <td>der Kanton, -e</td>
                <td>der</td>
                <td>canton (Switzerland)</td>
              </tr>
              <tr>
                <td>die Amtssprache, -n</td>
                <td>die</td>
                <td>official language</td>
              </tr>
              <tr>
                <td>die Millionenstadt, ²e</td>
                <td>die</td>
                <td>city over a million people</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Compass Directions (all der)</h2>
        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>der Norden</td>
                <td>north</td>
              </tr>
              <tr>
                <td>der Süden</td>
                <td>south</td>
              </tr>
              <tr>
                <td>der Osten</td>
                <td>east</td>
              </tr>
              <tr>
                <td>der Westen</td>
                <td>west</td>
              </tr>
              <tr>
                <td>der Nordosten / Südwesten …</td>
                <td>compounds: Nord + Osten</td>
              </tr>
              <tr>
                <td>die Mitte</td>
                <td>middle, centre</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>New Phrases</h2>
        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Das ist Herr Meyer.</td>
                <td>This is Mr. Meyer. (introducing others)</td>
              </tr>
              <tr>
                <td>Ich stelle mich vor.</td>
                <td>I introduce myself.</td>
              </tr>
              <tr>
                <td>Ich studiere Jura.</td>
                <td>I study law.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ]
  },
  customCss: null
}

export default function PeopleCountriesAndProfessions() {
  return <LearningTemplate config={config} />
}
