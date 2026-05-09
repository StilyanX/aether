import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'pcp',
  source: 'Begegnungen A1+ — Buscha/Szita',
  documentTitle: 'People, Countries and Professions: AETHER',
  learning: {
    category: 'Unit 2',
    title: 'Menschen, Länder und Berufe',
    subtitle: 'Personal pronouns, professions, countries, numbers, geography, and key phrases',
    sections: [
      <>
        <div id="lrn-section-0">
          <h1>People, Countries and Professions</h1>
          <p>
            German assigns every noun a gender, pairs every profession noun with a male and female
            form, and uses three separate words for "you" depending on who you are speaking to. This
            chapter gives you the vocabulary for people, jobs, countries, and languages.
          </p>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">How to use this chapter</span>
            <p>Use the Learning tab to study first principles and patterns.</p>
            <p>Use the Practice tab to test yourself with flashcards.</p>
            <p>Use the Reference tab to scan vocabulary tables quickly.</p>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-1">
          <h2>Personal Pronouns</h2>
          <p>
            The biggest surprise for English speakers: German has three words for "you". Which one
            you use depends on formality and whether you are speaking to one person or several.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>German keeps a formal/informal distinction that English lost centuries ago.</p>
            <p>
              You use <strong>Sie</strong> with strangers, teachers, and people you address by
              surname.
            </p>
            <p>
              You use <strong>du</strong> with friends, family, and children.
            </p>
          </div>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>German</th>
                  <th>English</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ich</td>
                  <td>I</td>
                  <td>1st person singular</td>
                </tr>
                <tr>
                  <td>du</td>
                  <td>you (informal, singular)</td>
                  <td>use with friends and family</td>
                </tr>
                <tr>
                  <td>er</td>
                  <td>he</td>
                  <td>masculine nouns</td>
                </tr>
                <tr>
                  <td>sie</td>
                  <td>she / they</td>
                  <td>she (singular) or they (plural)</td>
                </tr>
                <tr>
                  <td>es</td>
                  <td>it</td>
                  <td>neuter nouns</td>
                </tr>
                <tr>
                  <td>wir</td>
                  <td>we</td>
                  <td>1st person plural</td>
                </tr>
                <tr>
                  <td>ihr</td>
                  <td>you (informal, plural)</td>
                  <td>talking to a group of friends</td>
                </tr>
                <tr>
                  <td>Sie</td>
                  <td>you (formal)</td>
                  <td>always capitalised; singular and plural</td>
                </tr>
              </tbody>
            </table>
          </div>
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
            The Verb <em>sein</em> (to be)
          </h2>
          <p>
            Use <strong>sein</strong> to say who you are, what your job is, and where you are from.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">sein</span>
            <div className="lrn-definition-desc">
              <p>To be. Irregular — the forms do not follow a single pattern.</p>
            </div>
          </div>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>Pronoun</th>
                  <th>Form</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ich</td>
                  <td>bin</td>
                  <td>Ich bin Lehrerin. (I am a teacher.)</td>
                </tr>
                <tr>
                  <td>du</td>
                  <td>bist</td>
                  <td>Du bist Student. (You are a student.)</td>
                </tr>
                <tr>
                  <td>er / sie</td>
                  <td>ist</td>
                  <td>Er ist 16. (He is 16.)</td>
                </tr>
                <tr>
                  <td>wir</td>
                  <td>sind</td>
                  <td>Wir sind aus Deutschland. (We are from Germany.)</td>
                </tr>
                <tr>
                  <td>ihr</td>
                  <td>seid</td>
                  <td>Ihr seid Ingenieure. (You are engineers.)</td>
                </tr>
                <tr>
                  <td>Sie</td>
                  <td>sind</td>
                  <td>Sind Sie verheiratet? (Are you married?)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Key phrase</span>
            <p>
              In German, you say <strong>Ich bin Ingenieur</strong> without an article.
            </p>
            <p>
              You do NOT say <em>Ich bin ein Ingenieur</em> when stating your profession.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do you drop the article when you say your profession in German?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                After <strong>sein</strong>, the profession describes a category, not a specific
                person. Articles point to specific individual things. Since no specific individual
                is meant, the article is dropped.
              </p>
              <p>
                You only add an article when you modify the noun:{' '}
                <em>Ich bin ein guter Ingenieur.</em> (I am a good engineer.)
              </p>
            </details>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-3">
          <h2>Professions: Male and Female Forms</h2>
          <p>German professions come in male and female pairs.</p>
          <p>
            The female form usually adds <strong>-in</strong> to the male form.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>German nouns have grammatical gender: masculine, feminine, or neuter.</p>
            <p>
              When a noun describes a person, the grammatical gender matches the person's gender.
            </p>
            <p>
              The suffix <strong>-in</strong> marks the feminine form of most profession nouns. Male
              professions take <strong>der</strong>; female professions take <strong>die</strong>.
            </p>
            <p>
              The plural of feminine <strong>-in</strong> nouns always ends in <strong>-nen</strong>
              .
            </p>
            <p>
              A small number of professions don't follow the <strong>-in</strong> pattern and must
              be learned separately.
            </p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If <em>der Lehrer</em> means "teacher (male)", what do you think <em>die Lehrerin</em>{' '}
              means?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>die Lehrerin</em> means "teacher (female)".
              </p>
              <p>
                The pattern <strong>-in</strong> reliably marks the feminine form of a profession
                noun.
              </p>
            </details>
          </div>

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
          <h2>Key Question Words</h2>
          <p>Six question words cover almost every conversation you will have at this level.</p>
          <div className="lrn-table">
            <table>
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
                    <strong>wie?</strong>
                  </td>
                  <td>how? / what?</td>
                  <td>
                    Wie heißen Sie? (What is your name?) / Wie alt sind Sie? (How old are you?)
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>was?</strong>
                  </td>
                  <td>what?</td>
                  <td>Was sind Sie von Beruf? (What is your profession?)</td>
                </tr>
                <tr>
                  <td>
                    <strong>wo?</strong>
                  </td>
                  <td>where?</td>
                  <td>Wo wohnen Sie? (Where do you live?)</td>
                </tr>
                <tr>
                  <td>
                    <strong>woher?</strong>
                  </td>
                  <td>from where?</td>
                  <td>Woher kommen Sie? (Where do you come from?)</td>
                </tr>
                <tr>
                  <td>
                    <strong>welcher? / welche? / welches?</strong>
                  </td>
                  <td>which?</td>
                  <td>
                    Welche Sprachen sprechen Sie? (Which languages do you speak?) — welcher for
                    masculine nouns, welche for feminine or plural, welches for neuter
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>wie viel?</strong>
                  </td>
                  <td>how much? / how many?</td>
                  <td>Wie viel kostet das? (How much does that cost?)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Tip: wie vs. was</span>
            <p>
              <strong>Wie heißen Sie?</strong> literally means "How are you called?" but translates
              as "What is your name?"
            </p>
            <p>
              Use <strong>wie</strong> when asking about names and descriptions.
            </p>
            <p>
              Use <strong>was</strong> when asking about things or facts.
            </p>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-5">
          <h2>Introducing Yourself: Key Phrases</h2>
          <p>Use these phrases to give basic personal information.</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Name</span>
              <p className="lrn-step-content">
                Ich heiße Anna. / Mein Name ist Anna. (My name is Anna.)
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Profession</span>
              <p className="lrn-step-content">
                Ich bin Lehrerin. (I am a teacher. Note: no article.)
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Origin</span>
              <p className="lrn-step-content">
                Ich komme aus Deutschland. / Ich bin aus Deutschland. (I am from Germany.)
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Where you live</span>
              <p className="lrn-step-content">Ich wohne in Berlin. (I live in Berlin.)</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Introducing others</span>
              <p className="lrn-step-content">
                Das ist Herr Meyer. / Das ist Frau Schmidt. (This is Mr. Meyer. / This is Mrs.
                Schmidt.)
              </p>
            </div>
          </div>

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

          <h3>The verb vorstellen (to introduce)</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">sich vorstellen</span>
            <div className="lrn-definition-desc">
              <p>To introduce oneself (reflexive use).</p>
              <p>
                Example: <em>Ich stelle mich vor.</em> (I introduce myself.)
              </p>
            </div>
          </div>
          <p>
            To introduce someone else, say: <em>Das ist mein Freund Tom.</em> (This is my friend
            Tom.)
          </p>
        </div>
      </>,
      <>
        <div id="lrn-section-6">
          <h2>Countries and Nationalities</h2>
          <p>German country names usually have no article.</p>
          <p>
            A few countries are exceptions and do take an article: <strong>die Schweiz</strong>{' '}
            (Switzerland), <strong>die Türkei</strong> (Turkey), <strong>die Ukraine</strong>{' '}
            (Ukraine), <strong>die Niederlande</strong> (Netherlands, plural).
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Country names are grammatically neuter by default. Neuter nouns take no article when
              used alone — so <em>Deutschland</em> and <em>Frankreich</em> stand without one.
            </p>
            <p>
              Countries with a feminine grammatical gender (die Schweiz, die Türkei, die Ukraine)
              always carry their article. The Netherlands is plural, so it takes <em>die</em> for
              that reason.
            </p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If <em>Deutschland</em> means "Germany", what do you think <em>Österreich</em> and{' '}
              <em>die Schweiz</em> refer to?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>Österreich</em> = Austria.
              </p>
              <p>
                <em>die Schweiz</em> = Switzerland. Note the article <em>die</em> (it is one of the
                exceptions).
              </p>
            </details>
          </div>

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
                  <td>Switzerland; 4 official languages</td>
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
                  <td>Griechenland</td>
                  <td>Griechisch</td>
                </tr>
                <tr>
                  <td>Polen</td>
                  <td>Polnisch</td>
                </tr>
                <tr>
                  <td>Rumänien</td>
                  <td>Rumänisch</td>
                </tr>
                <tr>
                  <td>Russland</td>
                  <td>Russisch</td>
                </tr>
                <tr>
                  <td>Schweden</td>
                  <td>Schwedisch</td>
                </tr>
                <tr>
                  <td>Ungarn</td>
                  <td>Ungarisch</td>
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
                  <td>Niederländisch / Holländisch</td>
                </tr>
                <tr>
                  <td>die Türkei</td>
                  <td>Türkisch</td>
                </tr>
                <tr>
                  <td>die Ukraine</td>
                  <td>Ukrainisch</td>
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
                  <td>Japan</td>
                  <td>Japanisch</td>
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
          <h2>Numbers 0 to 1000</h2>
          <p>Two patterns build almost every number from 13 to 99.</p>
          <p>
            <strong>13–19:</strong> root + zehn. dreizehn = drei + zehn. sechzehn drops the trailing
            -s (sechs → sechzehn); siebzehn drops the -en (sieben → siebzehn).
          </p>
          <p>
            <strong>21–99:</strong> German reverses the English order. Ones come first, joined by{' '}
            <em>und</em>, then tens — written as one word. einundzwanzig = eins + und + zwanzig
            (one-and-twenty). This is genuinely backwards for English speakers and takes practice.
          </p>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>German</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>null</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>eins</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>zwei</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>drei</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>vier</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>fünf</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>sechs</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>sieben</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>acht</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>neun</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>zehn</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>elf</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>zwölf</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>dreizehn</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>vierzehn</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>fünfzehn</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>sechzehn</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>siebzehn</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>achtzehn</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>neunzehn</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>zwanzig</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>einundzwanzig</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>dreißig</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>vierzig</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>fünfzig</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>sechzig</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>siebzig</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>achtzig</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>neunzig</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>hundert</td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>tausend</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">die Zahl, -en</span>
            <div className="lrn-definition-desc">
              <p>Number (noun, feminine, plural -en).</p>
              <p>
                Also: <strong>die Nummer, -n</strong> = number (in a series, e.g. phone number).
              </p>
            </div>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-8">
          <h2>Hobbies and Leisure</h2>
          <p>
            Use <strong>gern(e)</strong> after a verb to say you like doing something.
          </p>
          <p>
            Use <strong>lieber</strong> to say you prefer something.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">gern(e): like to</span>
              <p>Ich lese gerne Romane. (I like reading novels.)</p>
              <p>Er hat viele Hobbys. (He has many hobbies.)</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">lieber: prefer to / rather</span>
              <p>Ich spiele lieber Tennis. (I prefer to play tennis.)</p>
              <p>Ich spiele nicht so gut Tennis. (I do not play tennis very well.)</p>
            </div>
          </div>
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
                  <td>lesen [er liest]</td>
                  <td>-</td>
                  <td>to read</td>
                  <td>irregular: er liest</td>
                </tr>
                <tr>
                  <td>sammeln</td>
                  <td>-</td>
                  <td>to collect</td>
                  <td>stem-changing: ich sammle</td>
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
            The verb <strong>studieren</strong> means "to study at university".
          </p>
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
            This is the vocabulary you need to read about German-speaking countries in numbers and
            geography.
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
                  <td>die Alpen (Pl.)</td>
                  <td>die</td>
                  <td>Alps</td>
                  <td>plural only</td>
                </tr>
                <tr>
                  <td>die Amtssprache, -n</td>
                  <td>die</td>
                  <td>official language</td>
                  <td>plural -n</td>
                </tr>
                <tr>
                  <td>bevölkerungsreich</td>
                  <td>-</td>
                  <td>populous, heavily populated</td>
                  <td>adjective</td>
                </tr>
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
                  <td>die Millionenstadt, ²e</td>
                  <td>die</td>
                  <td>city with over a million people</td>
                  <td>plural ²e</td>
                </tr>
                <tr>
                  <td>die Milliarde, -n</td>
                  <td>die</td>
                  <td>billion</td>
                  <td>plural -n</td>
                </tr>
                <tr>
                  <td>die Million, -en</td>
                  <td>die</td>
                  <td>million</td>
                  <td>plural -en</td>
                </tr>
                <tr>
                  <td>das Prozent, -e</td>
                  <td>das</td>
                  <td>per cent</td>
                  <td>plural -e</td>
                </tr>
                <tr>
                  <td>die Republik, -en</td>
                  <td>die</td>
                  <td>republic</td>
                  <td>plural -en</td>
                </tr>
                <tr>
                  <td>der Nationalstaat, -en</td>
                  <td>der</td>
                  <td>nation-state</td>
                  <td>plural -en</td>
                </tr>
                <tr>
                  <td>die Statistik, -en</td>
                  <td>die</td>
                  <td>statistics</td>
                  <td>plural -en</td>
                </tr>
                <tr>
                  <td>die Regionalsprache, -n</td>
                  <td>die</td>
                  <td>regional language</td>
                  <td>plural -n</td>
                </tr>
                <tr>
                  <td>die Deutschlandkarte, -n</td>
                  <td>die</td>
                  <td>map of Germany</td>
                  <td>plural -n</td>
                </tr>
                <tr>
                  <td>offiziell</td>
                  <td>-</td>
                  <td>official</td>
                  <td>adjective</td>
                </tr>
                <tr>
                  <td>Rätoromanisch</td>
                  <td>-</td>
                  <td>Rhaeto-Romanic</td>
                  <td>one of Switzerland's official languages</td>
                </tr>
                <tr>
                  <td>seit (1871)</td>
                  <td>-</td>
                  <td>since (1871)</td>
                  <td>preposition</td>
                </tr>
                <tr>
                  <td>über (800 Jahre)</td>
                  <td>-</td>
                  <td>over (800 years)</td>
                  <td>preposition with numbers</td>
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
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The German word for north is <em>Norden</em>. Before looking at the table, can you
              guess what south, east, and west might be?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                der Süden (south), der Osten (east), der Westen (west). All four take{' '}
                <strong>der</strong>.
              </p>
            </details>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
                <th>Artikel</th>
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

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Memory tip</span>
            <p>
              All compass directions take <strong>der</strong> in German.
            </p>
            <p>North = Norden, South = Süden, East = Osten, West = Westen.</p>
            <p>Compound directions combine two words: Nord + Osten = Nordosten.</p>
          </div>

          <h3>Describing Cities and Regions</h3>
          <p>
            Germany has 16 states (Bundesländer), each with its own capital city. You will see these
            words in factual texts about German cities.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">die Landeshauptstadt, -"e</span>
            <div className="lrn-definition-desc">
              <p>The capital city of a German federal state (Bundesland).</p>
            </div>
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
                <td>die Landeshauptstadt</td>
                <td>regional capital</td>
                <td>die</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>das Bundesland</td>
                <td>federal state</td>
                <td>das</td>
                <td>-"er</td>
              </tr>
              <tr>
                <td>der Platz</td>
                <td>place, square</td>
                <td>der</td>
                <td>-"e</td>
              </tr>
              <tr>
                <td>die Firma</td>
                <td>company, firm</td>
                <td>die</td>
                <td>die Firmen</td>
              </tr>
              <tr>
                <td>der Hersteller</td>
                <td>producer, manufacturer</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Besucher</td>
                <td>visitor</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Einwohner</td>
                <td>inhabitant</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>das Wirthaus</td>
                <td>inn</td>
                <td>das</td>
                <td>-"er</td>
              </tr>
              <tr>
                <td>das Elektrogerät</td>
                <td>electrical device</td>
                <td>das</td>
                <td>-e</td>
              </tr>
              <tr>
                <td>der Lastkraftwagen</td>
                <td>truck</td>
                <td>der</td>
                <td>-</td>
              </tr>
              <tr>
                <td>der Liter</td>
                <td>litre</td>
                <td>der</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          <h3>Superlatives for Describing Cities</h3>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              To form a superlative, add <strong>-st-</strong> to the adjective stem, then add the
              normal gender ending. The stem alone (bekanntst-, berühmtst-) is not a usable form —
              it always needs an ending.
            </p>
            <p>
              bekannt (well-known) → bekanntest- → die bekannteste Stadt (the most well-known city)
            </p>
            <p>berühmt (famous) → berühmtest- → das berühmteste Museum (the most famous museum)</p>
          </div>

          <h3>Useful Adverbs and Adjectives (Geography)</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>insgesamt</td>
                <td>in total</td>
              </tr>
              <tr>
                <td>international</td>
                <td>international</td>
              </tr>
              <tr>
                <td>historisch</td>
                <td>historical</td>
              </tr>
              <tr>
                <td>europäisch</td>
                <td>European</td>
              </tr>
              <tr>
                <td>romantisch</td>
                <td>romantic</td>
              </tr>
              <tr>
                <td>mehr</td>
                <td>more</td>
              </tr>
            </tbody>
          </table>

          <h3>Useful Verbs (Geography)</h3>
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
                <td>interessieren</td>
                <td>to interest someone</td>
                <td>Welche Stadt interessiert Sie?</td>
              </tr>
              <tr>
                <td>belegen</td>
                <td>to occupy, to be in (a place)</td>
                <td>Den ersten Platz belegt Berlin.</td>
              </tr>
              <tr>
                <td>umfassen</td>
                <td>to comprise, include</td>
                <td>Die Sammlung umfasst 900 Bilder.</td>
              </tr>
              <tr>
                <td>raten [er rät]</td>
                <td>to guess</td>
                <td>Raten Sie!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ]
  },
  practice: [
    {
      q: 'Translate: "What is your name?" (formal)',
      a: 'Wie heißen Sie? Use Sie (capitalised) for formal address. Wie heißen Sie? is the standard formal greeting question.'
    },
    {
      q: 'What is the German word for "engineer" (male)? Give the article and plural.',
      a: 'der Ingenieur, -e. Article: der (masculine). Plural: Ingenieure. Female form: die Ingenieurin, -nen.'
    },
    {
      q: 'Translate: "I am a journalist." (female speaker)',
      a: 'Ich bin Journalistin. No article before the profession noun. Female form of Journalist adds -in: die Journalistin.'
    },
    {
      q: 'Translate: "Where do you come from?" (formal)',
      a: 'Woher kommen Sie? woher = from where. kommen = to come. Sie = you (formal).'
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
      q: 'Translate: "I live in London." ',
      a: 'Ich wohne in London. wohnen = to live (somewhere). Use in + city name with no article.'
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
      a: 'Ich stelle mich vor. vorstellen is a separable verb. The prefix vor- moves to the end of the clause. sich vorstellen = to introduce oneself (reflexive).'
    },
    {
      q: 'Give the numbers 1, 2, 3, 10, 20, 100 in German.',
      a: 'eins, zwei, drei, zehn, zwanzig, hundert.'
    },
    {
      q: 'What does "woher?" mean and how is it used?',
      a: 'woher = from where. Use it in questions about origin: Woher kommen Sie? (Where do you come from?). It combines wo (where) + her (from here, direction toward speaker).'
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
        <h2>Personal Pronouns</h2>
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
                <td>ich</td>
                <td>I</td>
              </tr>
              <tr>
                <td>du</td>
                <td>you (informal, sg)</td>
              </tr>
              <tr>
                <td>er / sie / es</td>
                <td>he / she / it</td>
              </tr>
              <tr>
                <td>wir</td>
                <td>we</td>
              </tr>
              <tr>
                <td>ihr</td>
                <td>you (informal, pl)</td>
              </tr>
              <tr>
                <td>Sie</td>
                <td>you (formal)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Key Phrases</h2>
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
                <td>Wie heißen Sie?</td>
                <td>What is your name? (formal)</td>
              </tr>
              <tr>
                <td>Was sind Sie von Beruf?</td>
                <td>What is your profession? (formal)</td>
              </tr>
              <tr>
                <td>Wie alt sind Sie?</td>
                <td>How old are you? (formal)</td>
              </tr>
              <tr>
                <td>Woher kommen Sie?</td>
                <td>Where do you come from? (formal)</td>
              </tr>
              <tr>
                <td>Wo wohnen Sie?</td>
                <td>Where do you live? (formal)</td>
              </tr>
              <tr>
                <td>Wie ist Ihre Telefonnummer?</td>
                <td>What is your telephone number? (formal)</td>
              </tr>
              <tr>
                <td>Welche Sprachen sprechen Sie?</td>
                <td>Which languages do you speak? (formal)</td>
              </tr>
              <tr>
                <td>Ich bin Ingenieur.</td>
                <td>I am an engineer. (no article!)</td>
              </tr>
              <tr>
                <td>Guten Tag!</td>
                <td>Good day.</td>
              </tr>
              <tr>
                <td>Guten Morgen!</td>
                <td>Good morning.</td>
              </tr>
              <tr>
                <td>Hallo!</td>
                <td>Hello! / Hi!</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Professions (Selected)</h2>
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
                <td>der Lehrer, -</td>
                <td>die Lehrerin, -nen</td>
                <td>teacher</td>
              </tr>
              <tr>
                <td>der Student, -en</td>
                <td>die Studentin, -nen</td>
                <td>student</td>
              </tr>
              <tr>
                <td>der Ingenieur, -e</td>
                <td>die Ingenieurin, -nen</td>
                <td>engineer</td>
              </tr>
              <tr>
                <td>der Informatiker, -</td>
                <td>die Informatikerin, -nen</td>
                <td>computer scientist</td>
              </tr>
              <tr>
                <td>der Journalist, -en</td>
                <td>die Journalistin, -nen</td>
                <td>journalist</td>
              </tr>
              <tr>
                <td>der Jurist, -en</td>
                <td>die Juristin, -nen</td>
                <td>lawyer / legal expert</td>
              </tr>
              <tr>
                <td>der Mathematiker, -</td>
                <td>die Mathematikerin, -nen</td>
                <td>mathematician</td>
              </tr>
              <tr>
                <td>der Physiker, -</td>
                <td>die Physikerin, -nen</td>
                <td>physicist</td>
              </tr>
              <tr>
                <td>der Philosoph, -en</td>
                <td>die Philosophin, -nen</td>
                <td>philosopher</td>
              </tr>
              <tr>
                <td>der Maler, -</td>
                <td>die Malerin, -nen</td>
                <td>painter</td>
              </tr>
              <tr>
                <td>der Musiker, -</td>
                <td>die Musikerin, -nen</td>
                <td>musician</td>
              </tr>
              <tr>
                <td>der Manager, -</td>
                <td>die Managerin, -nen</td>
                <td>manager</td>
              </tr>
              <tr>
                <td>der Kellner, -</td>
                <td>die Kellnerin, -nen</td>
                <td>waiter / waitress</td>
              </tr>
              <tr>
                <td>der Mechaniker, -</td>
                <td>die Mechanikerin, -nen</td>
                <td>mechanic</td>
              </tr>
              <tr>
                <td>der Taxifahrer, -</td>
                <td>die Taxifahrerin, -nen</td>
                <td>taxi driver</td>
              </tr>
              <tr>
                <td>der Sekretär, -e</td>
                <td>die Sekretärin, -nen</td>
                <td>secretary</td>
              </tr>
              <tr>
                <td>der Kommissar, -e</td>
                <td>die Kommissarin, -nen</td>
                <td>inspector</td>
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

        <h2>Numbers</h2>
        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>German</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>null</td>
              </tr>
              <tr>
                <td>1</td>
                <td>eins</td>
              </tr>
              <tr>
                <td>2</td>
                <td>zwei</td>
              </tr>
              <tr>
                <td>3</td>
                <td>drei</td>
              </tr>
              <tr>
                <td>4</td>
                <td>vier</td>
              </tr>
              <tr>
                <td>5</td>
                <td>fünf</td>
              </tr>
              <tr>
                <td>6</td>
                <td>sechs</td>
              </tr>
              <tr>
                <td>7</td>
                <td>sieben</td>
              </tr>
              <tr>
                <td>8</td>
                <td>acht</td>
              </tr>
              <tr>
                <td>9</td>
                <td>neun</td>
              </tr>
              <tr>
                <td>10</td>
                <td>zehn</td>
              </tr>
              <tr>
                <td>11</td>
                <td>elf</td>
              </tr>
              <tr>
                <td>12</td>
                <td>zwölf</td>
              </tr>
              <tr>
                <td>20</td>
                <td>zwanzig</td>
              </tr>
              <tr>
                <td>30</td>
                <td>dreißig</td>
              </tr>
              <tr>
                <td>100</td>
                <td>hundert</td>
              </tr>
              <tr>
                <td>1000</td>
                <td>tausend</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Countries and Languages (Selected)</h2>
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
                <td>Deutschland</td>
                <td>Deutsch</td>
              </tr>
              <tr>
                <td>Österreich</td>
                <td>Deutsch</td>
              </tr>
              <tr>
                <td>die Schweiz</td>
                <td>Deutsch / Französisch / Italienisch / Rätoromanisch</td>
              </tr>
              <tr>
                <td>England / Großbritannien</td>
                <td>Englisch</td>
              </tr>
              <tr>
                <td>Frankreich</td>
                <td>Französisch</td>
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
                <td>Russland</td>
                <td>Russisch</td>
              </tr>
              <tr>
                <td>Polen</td>
                <td>Polnisch</td>
              </tr>
              <tr>
                <td>die Türkei</td>
                <td>Türkisch</td>
              </tr>
              <tr>
                <td>Japan</td>
                <td>Japanisch</td>
              </tr>
              <tr>
                <td>Kanada</td>
                <td>Englisch / Französisch</td>
              </tr>
              <tr>
                <td>die USA (Pl.)</td>
                <td>Englisch</td>
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
                <td>die Mathematik</td>
                <td>die</td>
                <td>mathematics</td>
              </tr>
              <tr>
                <td>die Physik</td>
                <td>die</td>
                <td>physics</td>
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
            </tbody>
          </table>
        </div>

        <h2>Geography (Part B)</h2>
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
                <td>die Alpen (Pl.)</td>
                <td>die</td>
                <td>Alps</td>
              </tr>
              <tr>
                <td>die Amtssprache, -n</td>
                <td>die</td>
                <td>official language</td>
              </tr>
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
                <td>die Millionenstadt, ²e</td>
                <td>die</td>
                <td>city with over a million people</td>
              </tr>
              <tr>
                <td>die Milliarde, -n</td>
                <td>die</td>
                <td>billion</td>
              </tr>
              <tr>
                <td>die Million, -en</td>
                <td>die</td>
                <td>million</td>
              </tr>
              <tr>
                <td>das Prozent, -e</td>
                <td>das</td>
                <td>per cent</td>
              </tr>
              <tr>
                <td>die Statistik, -en</td>
                <td>die</td>
                <td>statistics</td>
              </tr>
              <tr>
                <td>die Regionalsprache, -n</td>
                <td>die</td>
                <td>regional language</td>
              </tr>
              <tr>
                <td>offiziell</td>
                <td>-</td>
                <td>official</td>
              </tr>
              <tr>
                <td>bevölkerungsreich</td>
                <td>-</td>
                <td>populous, heavily populated</td>
              </tr>
              <tr>
                <td>Rätoromanisch</td>
                <td>-</td>
                <td>Rhaeto-Romanic</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Compass Directions</h2>
        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>Englisch</th>
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
                <td>der Nordosten</td>
                <td>north-east</td>
              </tr>
              <tr>
                <td>der Nordwesten</td>
                <td>north-west</td>
              </tr>
              <tr>
                <td>der Südosten</td>
                <td>south-east</td>
              </tr>
              <tr>
                <td>der Südwesten</td>
                <td>south-west</td>
              </tr>
              <tr>
                <td>die Mitte</td>
                <td>middle, centre</td>
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
