import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'mdw',
  source: 'Begegnungen A1+ — Buscha/Szita',
  documentTitle: 'My Day and My Week: AETHER',
  learning: {
    category: 'Unit 6',
    title: 'Mein Tag und meine Woche',
    subtitle: 'Days of the week, daily routines, time expressions, and workplace vocabulary',
    sections: [
      <>
        <div className="lrn-header">
          <div>
            <h1>My Day and My Week</h1>
            <p>
              This unit gives you the German for a working week: days, time words, office equipment,
              and university vocabulary, plus the grammar behind "on Monday" and how compound nouns
              determine their own gender.
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-0">
          <h2>Days of the Week</h2>

          <p>
            Use this section for any sentence that fixes an event to a day. "I work on Monday." "We
            meet at the weekend."
          </p>
          <p>
            German has seven day names. Every single one is masculine. They all take the article{' '}
            <strong>der</strong>.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If every day of the week is masculine, what article do you expect before "Montag"?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>der Montag</strong>. The same pattern holds for all seven days: der
                Dienstag, der Mittwoch, der Donnerstag, der Freitag, der Samstag, der Sonntag.
              </p>
            </details>
          </div>

          <h3>All Seven Days</h3>
          <ul className="lrn-list">
            <li>
              <strong>der Montag</strong>: Monday
            </li>
            <li>
              <strong>der Dienstag</strong>: Tuesday
            </li>
            <li>
              <strong>der Mittwoch</strong>: Wednesday
            </li>
            <li>
              <strong>der Donnerstag</strong>: Thursday
            </li>
            <li>
              <strong>der Freitag</strong>: Friday
            </li>
            <li>
              <strong>der Samstag</strong>: Saturday
            </li>
            <li>
              <strong>der Sonntag</strong>: Sunday
            </li>
          </ul>

          <h3>Worked Example: am Montag</h3>
          <p>
            To say something happens on a day, German uses <strong>am</strong>.
          </p>
          <ol className="lrn-list">
            <li>
              Start with the day: <strong>Montag</strong>.
            </li>
            <li>
              "On" before a day uses <strong>an</strong> plus the dative article{' '}
              <strong>dem</strong> (because Montag is masculine).
            </li>
            <li>
              "an dem" always contracts to <strong>am</strong>.
            </li>
            <li>
              Result: <strong>am Montag</strong> (on Monday).
            </li>
          </ol>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does German use "am" before days and before "Wochenende," instead of another
              preposition?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                <strong>am</strong> is short for "an dem" (at the). "An" is the time preposition.
                "Dem" is the dative article for masculine and neuter nouns. Days are masculine and
                "Wochenende" is neuter, so both contract to "am". You always say{' '}
                <strong>am Montag</strong> and <strong>am Wochenende</strong>. You will never see
                "im Montag" or "an Montag" in real German.
              </p>
            </details>
          </div>

          <h3>Weekend Vocabulary</h3>
          <ul className="lrn-list">
            <li>
              <strong>die Woche, -n</strong>: week
            </li>
            <li>
              <strong>der Wochentag, -e</strong>: weekday
            </li>
            <li>
              <strong>das Wochenende, -n</strong>: weekend
            </li>
          </ul>

          <div className="lrn-insight">
            <p>
              <strong>Worked dialogue:</strong>
            </p>
            <p>
              A: "Was machst du <strong>am Wochenende</strong>?" (What do you do at the weekend?)
            </p>
            <p>
              B: "Ich spiele <strong>am Samstag</strong> Schach." (I play chess on Saturday.)
            </p>
            <p>
              Notice both speakers use <strong>am</strong> before the time word: "am Wochenende" and
              "am Samstag."
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-1">
          <h2>Weekly Life and Time Vocabulary</h2>

          <p>
            Use this section for any sentence about when, how often, or how soon something happens.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If "noch" means "still" and "einmal" means "once," what do you think "noch einmal"
              means?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>One more time.</strong> The combination "noch einmal" adds the idea of
                repetition: "Erklären Sie das <strong>noch einmal</strong>." (Explain it one more
                time.)
              </p>
            </details>
          </div>

          <h3>Time Words</h3>
          <ul className="lrn-list">
            <li>
              <strong>die Zeit, -en</strong>: time
            </li>
            <li>
              <strong>heute</strong>: today
            </li>
            <li>
              <strong>jetzt</strong>: now
            </li>
            <li>
              <strong>immer</strong>: always
            </li>
            <li>
              <strong>oft</strong>: often
            </li>
            <li>
              <strong>noch</strong>: still, yet
            </li>
            <li>
              <strong>einmal</strong>: once
            </li>
            <li>
              <strong>noch einmal</strong>: one more time
            </li>
            <li>
              <strong>jeden Tag</strong>: every day
            </li>
            <li>
              <strong>zuerst</strong>: first
            </li>
            <li>
              <strong>gleich</strong>: immediately, in a second
            </li>
            <li>
              <strong>wieder</strong>: again
            </li>
          </ul>

          <h3>Worked Example: noch vs noch einmal</h3>
          <ol className="lrn-list">
            <li>
              "Ich bin <strong>noch</strong> hier." (I am still here.) Here "noch" means "still".
            </li>
            <li>
              "Erklären Sie das <strong>noch einmal</strong>." (Explain it one more time.) Here
              "noch einmal" means "one more time".
            </li>
            <li>
              The single word "noch" tracks ongoing state. The phrase "noch einmal" tracks
              repetition.
            </li>
          </ol>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does German need both "einmal" and "noch einmal" instead of just one word?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                "einmal" answers "how often?": once. "noch einmal" answers "again?": one more time.
                English often blurs the two with "once" or "again", but German keeps them separate
                so the listener knows whether it is the first time or a repeat.
              </p>
            </details>
          </div>

          <h3>General and Miscellaneous Vocabulary</h3>
          <ul className="lrn-list">
            <li>
              <strong>der Mensch, -en</strong>: person, human being
            </li>
            <li>
              <strong>der Ort, -e</strong>: place
            </li>
            <li>
              <strong>das Zimmer, -</strong>: room
            </li>
            <li>
              <strong>das Foto, -s</strong>: photograph
            </li>
            <li>
              <strong>die Zeitung, -en</strong>: newspaper
            </li>
            <li>
              <strong>die Zigarette, -n</strong>: cigarette
            </li>
            <li>
              <strong>das Bier, -e</strong>: beer
            </li>
            <li>
              <strong>der Kaffee</strong>: coffee
            </li>
            <li>
              <strong>das Fahrrad, -er</strong>: bicycle
            </li>
            <li>
              <strong>das Motorrad, -er</strong>: motorcycle
            </li>
            <li>
              <strong>die Ansichtskarte, -n</strong>: postcard
            </li>
            <li>
              <strong>der Gartenzwerg, -e</strong>: garden gnome
            </li>
            <li>
              <strong>der Geldschein, -e</strong>: banknote
            </li>
            <li>
              <strong>der Käfer, -</strong>: bug
            </li>
            <li>
              <strong>jemand</strong>: someone
            </li>
            <li>
              <strong>man</strong>: one (general subject, impersonal)
            </li>
          </ul>

          <div className="lrn-tip">
            <p>
              <strong>man</strong> is not a personal pronoun. It is an impersonal subject meaning
              "one" or "you" in general statements. "Man lernt Deutsch." (One learns German.)
            </p>
          </div>

          <h3>Useful Filler Words and Particles</h3>
          <ul className="lrn-list">
            <li>
              <strong>ach so</strong>: oh, I see (reaction to new information)
            </li>
            <li>
              <strong>na</strong>: so (introduces casual questions)
            </li>
            <li>
              <strong>mal</strong>: softening particle for requests
            </li>
            <li>
              <strong>ganz</strong>: quite. "ganz einfach" (quite easy).
            </li>
            <li>
              <strong>hoffentlich</strong>: hopefully
            </li>
            <li>
              <strong>natürlich</strong>: naturally, of course
            </li>
            <li>
              <strong>vielleicht</strong>: maybe
            </li>
          </ul>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              German time words do not overlap. "jetzt" is this exact second. "gleich" is a moment
              from now. "heute" covers the whole day. "immer" applies to every occasion. Swapping
              one for another changes the meaning, not just the register.
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-2">
          <h2>Office and Workplace Vocabulary</h2>

          <p>
            Use this section for any conversation about work: colleagues, equipment, and office
            tasks.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>How do you say "The printer is broken" in German?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>"Der Drucker ist kaputt."</strong> "kaputt" is the everyday word for broken.
                It works for machines, devices, and even a broken plate.
              </p>
            </details>
          </div>

          <h3>The Workplace</h3>
          <ul className="lrn-list">
            <li>
              <strong>die Arbeit</strong>: work
            </li>
            <li>
              <strong>der Arbeitsplatz, -e</strong>: workplace
            </li>
            <li>
              <strong>der Arbeitstag, -e</strong>: working day
            </li>
            <li>
              <strong>die Abteilung, -en</strong>: department
            </li>
            <li>
              <strong>das Büro, -s</strong>: office
            </li>
            <li>
              <strong>das Sekretariat, -e</strong>: secretary's office
            </li>
            <li>
              <strong>die Verwaltung, -en</strong>: administration
            </li>
            <li>
              <strong>der Mitarbeiter, -</strong>: staff member
            </li>
            <li>
              <strong>der Kollege, -n</strong>: colleague (male)
            </li>
            <li>
              <strong>die Kollegin, -nen</strong>: colleague (female)
            </li>
            <li>
              <strong>die Cafeteria, -s</strong>: cafeteria
            </li>
            <li>
              <strong>die Kantine, -n</strong>: canteen
            </li>
          </ul>

          <h3>Office Equipment</h3>
          <ul className="lrn-list">
            <li>
              <strong>der Bildschirm, -e</strong>: screen
            </li>
            <li>
              <strong>der Computer, -</strong>: computer
            </li>
            <li>
              <strong>der Computertisch, -e</strong>: computer table
            </li>
            <li>
              <strong>der Drucker, -</strong>: printer
            </li>
            <li>
              <strong>das Faxgerät, -e</strong>: fax machine
            </li>
            <li>
              <strong>das Gerät, -e</strong>: device, machine
            </li>
            <li>
              <strong>das Kopiergerät, -e</strong>: copy machine
            </li>
            <li>
              <strong>die Kaffeemaschine, -n</strong>: coffee machine
            </li>
            <li>
              <strong>die Maus, -e</strong>: mouse (computer)
            </li>
            <li>
              <strong>das Telefon, -e</strong>: telephone
            </li>
            <li>
              <strong>der Termin, -e</strong>: appointment
            </li>
            <li>
              <strong>der Terminkalender, -</strong>: agenda, appointment book
            </li>
          </ul>

          <h3>Office Furniture and Items</h3>
          <ul className="lrn-list">
            <li>
              <strong>die Büroeinrichtung, -en</strong>: office furniture
            </li>
            <li>
              <strong>die Bürolampe, -n</strong>: office lamp
            </li>
            <li>
              <strong>der Bürostuhl, -e</strong>: office chair
            </li>
            <li>
              <strong>der Schreibtisch, -e</strong>: desk
            </li>
            <li>
              <strong>die Schreibtischlampe, -n</strong>: desk lamp
            </li>
            <li>
              <strong>das Bücherregal, -e</strong>: bookshelf
            </li>
            <li>
              <strong>das Regal, -e</strong>: shelf
            </li>
            <li>
              <strong>der Stuhl, -e</strong>: chair
            </li>
            <li>
              <strong>der Tisch, -e</strong>: table
            </li>
            <li>
              <strong>die Lampe, -n</strong>: lamp
            </li>
            <li>
              <strong>der Papierkorb, -e</strong>: waste-paper basket
            </li>
            <li>
              <strong>der Bleistift, -e</strong>: pencil
            </li>
            <li>
              <strong>der Kugelschreiber, -</strong>: pen
            </li>
            <li>
              <strong>das Dokument, -e</strong>: document
            </li>
          </ul>

          <h3>Worked Example: Building "Schreibtischlampe"</h3>
          <ol className="lrn-list">
            <li>
              First word: <strong>Schreibtisch</strong> (desk).
            </li>
            <li>
              Second word: <strong>Lampe</strong> (lamp), feminine (die).
            </li>
            <li>
              Glue them together. The last word in a compound decides the gender of the whole word.
            </li>
            <li>
              Result: <strong>die Schreibtischlampe</strong> (the desk lamp).
            </li>
          </ol>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does "Schreibtischlampe" have the gender "die" and not "der" or "das"?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The compound takes its gender from the last word. "Lampe" is feminine (die Lampe),
                so "Schreibtischlampe" is also feminine. The first part (Schreibtisch) only
                specifies which kind of lamp.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">Kollege (masculine)</p>
              <p>der Kollege, -n</p>
              <p>"Mein Kollege heißt Paul."</p>
            </div>
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">Kollegin (feminine)</p>
              <p>die Kollegin, -nen</p>
              <p>"Meine Kollegin heißt Anna."</p>
            </div>
          </div>

          <h3>Worked Office Dialogue</h3>
          <div className="lrn-insight">
            <p>
              <strong>A:</strong> "Hier ist <strong>kein Drucker</strong>." (There is no printer
              here.)
            </p>
            <p>
              <strong>B:</strong> "Mein <strong>Computer ist kaputt</strong>." (My computer is
              broken.)
            </p>
            <p>
              <strong>A:</strong> "Funktioniert das <strong>Kopiergerät</strong>?" (Does the copy
              machine work?)
            </p>
            <p>
              <strong>B:</strong> "Ja, das geht." (Yes, that works.)
            </p>
          </div>

          <h3>Key Verbs for the Workplace</h3>
          <ul className="lrn-list">
            <li>
              <strong>drucken</strong>: to print
            </li>
            <li>
              <strong>funktionieren</strong>: to function, to work
            </li>
            <li>
              <strong>gehen</strong>: to go; for objects also "to work / function"
            </li>
            <li>
              <strong>telefonieren</strong>: to make a phone call
            </li>
            <li>
              <strong>fotografieren</strong>: to take a photograph
            </li>
            <li>
              <strong>sortieren</strong>: to sort, to arrange
            </li>
          </ul>

          <div className="lrn-tip">
            <p>
              <strong>gehen</strong> means "to go," but for machines and devices it also means "to
              work / function." "Der Drucker geht." (The printer works.) "Der Drucker ist kaputt."
              (The printer is broken.)
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Every German compound noun splits into recognisable pieces. Bürostuhl = Büro + Stuhl.
              Terminkalender = Termin + Kalender. Learn to read the parts and you can decode
              hundreds of new words without a dictionary.
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-3">
          <h2>University and Education Vocabulary</h2>

          <p>Use this section for conversations about studying or university life.</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              What German words describe the times and places related to studying at a university?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Common ones: <strong>die Universität</strong>, <strong>die Bibliothek</strong>,{' '}
                <strong>die Mensa</strong>, <strong>die Lehrveranstaltung</strong> (lecture),{' '}
                <strong>der Sprachkurs</strong> (language course).
              </p>
            </details>
          </div>

          <h3>Places</h3>
          <ul className="lrn-list">
            <li>
              <strong>die Universität, -en</strong>: university
            </li>
            <li>
              <strong>die Bibliothek, -en</strong>: library
            </li>
            <li>
              <strong>die Mensa, -s</strong>: student canteen
            </li>
            <li>
              <strong>das Sprachenzentrum, die Sprachenzentren</strong>: language centre
            </li>
          </ul>

          <h3>Courses and Activities</h3>
          <ul className="lrn-list">
            <li>
              <strong>die Lehrveranstaltung, -en</strong>: lecture (at university)
            </li>
            <li>
              <strong>der Sprachkurs, -e</strong>: language course
            </li>
            <li>
              <strong>die Fremdsprache, -n</strong>: foreign language
            </li>
            <li>
              <strong>die Astronomie</strong>: astronomy
            </li>
            <li>
              <strong>die Literatur</strong>: literature
            </li>
            <li>
              <strong>die Mathematik</strong>: mathematics
            </li>
            <li>
              <strong>die Psychologie</strong>: psychology
            </li>
            <li>
              <strong>Latein</strong>: Latin
            </li>
          </ul>

          <h3>Academic Verbs</h3>
          <ul className="lrn-list">
            <li>
              <strong>besuchen</strong>: to visit a person, or to attend a course
            </li>
          </ul>

          <h3>Worked Example: Two Uses of "besuchen"</h3>
          <ol className="lrn-list">
            <li>
              <strong>besuchen</strong> takes an accusative object. The object decides the meaning.
            </li>
            <li>Object is a person: "Ich besuche einen Freund." (I am visiting a friend.)</li>
            <li>
              Object is a course or lecture: "Ich besuche einen Sprachkurs." (I am taking a language
              course.)
            </li>
            <li>The verb form does not change. Only the object changes.</li>
          </ol>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              How can you tell from context whether "besuchen" means "visit a person" or "take a
              course"?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Look at the object. A person ("einen Freund," "die Großmutter") triggers the "visit"
                reading. A course or lecture ("einen Sprachkurs," "eine Lehrveranstaltung") triggers
                the "attend" reading. The verb itself does not change; the object decides.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              German often re-uses one verb across related actions instead of inventing new words.
              "besuchen" started as "to go and see" (a person), then extended to "going to" a class
              regularly. The two readings live side by side and the object disambiguates them.
            </p>
          </div>
        </div>
      </>
    ]
  },

  practice: [
    {
      q: 'List all seven days of the week in German. What gender are they all? Build a sample "on Monday" phrase.',
      a: 'Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag. They are all masculine (der). Step 1: pick the day, e.g., Montag. Step 2: prepend "am" (the contraction of "an dem") because all days are masculine. Step 3: result is "am Montag" (on Monday). The same pattern works for every day.'
    },
    {
      q: 'Why does German use "am" before days of the week and before "Wochenende"?',
      a: '"am" is a contraction of "an dem" (at the, dative). Step 1: all days of the week are masculine, so the dative article is "dem". Step 2: "an dem Montag" contracts to "am Montag". Step 3: "Wochenende" is neuter, but the neuter dative article is also "dem", so "an dem Wochenende" also contracts to "am Wochenende". Step 4: this is why "am" appears for both days and the weekend with no exceptions.'
    },
    {
      q: 'What is the German word for "printer" and what is its gender?',
      a: 'Der Drucker (masculine). The plural is "die Drucker." Step 1: spot the article "der" in dictionaries to confirm masculine. Step 2: notice the plural drops the change because "Drucker" already ends in "-er". So both singular and plural look identical: der Drucker (one), die Drucker (several).'
    },
    {
      q: 'Fill in the blank: "Hier ist $\\rule{1cm}{0.5pt}$ Drucker." (There is no printer here.)',
      a: '"Hier ist kein Drucker." Step 1: identify the noun, "Drucker". Step 2: check its gender: masculine (der Drucker). Step 3: pick the negator that matches masculine, which is "kein". Step 4: insert it. Feminine nouns ("Lampe") would take "keine" instead.'
    },
    {
      q: 'What does "Der Drucker geht." mean? Why does this verb work for machines?',
      a: '"The printer works." Step 1: "gehen" usually means "to go" for people or movement. Step 2: for machines and devices, German extends the meaning to "to function / to work". Step 3: so "Der Drucker geht" (the printer works) sits next to "Der Drucker ist kaputt" (the printer is broken). Both are normal A1 sentences in any office.'
    },
    {
      q: 'Translate: "Na, wie geht es?"',
      a: '"So, how is it going?" Step 1: "wie geht es?" alone is "how is it going?" (literally: how goes it?). Step 2: "Na" is a casual filler that sets a friendly tone. Step 3: putting them together gives a softer, conversational greeting compared to the bare "Wie geht es?"'
    },
    {
      q: 'What does "besuchen" mean? Why is it potentially confusing? Give two example sentences.',
      a: '"besuchen" has two meanings: (1) to visit a person ("einen Freund besuchen") and (2) to take or attend a course ("einen Sprachkurs besuchen"). Step 1: look at the object. A person triggers the visit reading. Step 2: a course or lecture triggers the attend reading. Step 3: the verb itself never changes form; the object disambiguates. So "Ich besuche einen Freund" = I am visiting a friend, but "Ich besuche einen Sprachkurs" = I am taking a language course.'
    },
    {
      q: 'What is the difference between "Kantine" and "Mensa"?',
      a: 'Both mean canteen, but they apply in different settings. "die Kantine" is a general workplace canteen (in offices, factories, hospitals). "die Mensa" is specifically a student canteen at a university or college. Step 1: ask where the food is being served. Step 2: pick Kantine for workplaces. Step 3: pick Mensa for universities. Both take the article "die" and both appear often in everyday speech.'
    },
    {
      q: 'What is "der Terminkalender" and what related words connect to it?',
      a: '"der Terminkalender" = agenda, appointment book. Step 1: it is a compound noun: Termin (appointment) + Kalender (calendar). Step 2: the compound takes the gender of the last word, "Kalender" (masculine), so the whole compound is "der Terminkalender". Related vocabulary: "der Termin, -e" (appointment), "die Zeit, -en" (time), "der Arbeitstag, -e" (working day). All show up when scheduling meetings.'
    },
    {
      q: '[SELF-EXPLAIN] In "Erklären Sie das noch einmal," what does "noch einmal" mean and why is it different from "einmal"?',
      a: '"noch einmal" = one more time / once again. "einmal" alone = once. Step 1: "noch" adds the meaning of repetition. Step 2: "einmal" by itself answers "how often?" with "once". Step 3: putting them together gives "another time". Step 4: in classroom requests, "Erklären Sie das noch einmal" politely asks the teacher to repeat the explanation.'
    },
    {
      q: '[TRANSFER] You want to say "There is no coffee machine in the office." Build the German sentence.',
      a: '"Im Büro ist keine Kaffeemaschine." Step 1: "Im Büro" = in the office (im = in dem). Step 2: verb "ist". Step 3: identify the noun gender: "Kaffeemaschine" is feminine (die Kaffeemaschine). Step 4: pick the matching negator: feminine takes "keine". Step 5: place it before the noun. Same kein/keine rule, just transferred to a new room and new vocabulary.'
    },
    {
      q: '[PREDICT] How do you say "My telephone number is quite easy" in German? Build it from scratch.',
      a: '"Meine Telefonnummer ist ganz einfach." Step 1: subject "Meine Telefonnummer" (my phone number, feminine, so "meine" with -e). Step 2: linking verb "ist". Step 3: adverb of degree "ganz" (quite) modifies the adjective. Step 4: predicate adjective "einfach" (easy) takes no ending because it sits after "ist".'
    },
    {
      q: 'Translate and explain: "drei Zigaretten pro Tag"',
      a: '"three cigarettes per day." Step 1: "drei" = three. Step 2: "Zigaretten" = cigarettes (plural of die Zigarette). Step 3: "pro" = per (a fixed Latin-origin word). Step 4: "Tag" = day. Pattern: quantity + noun + pro + time unit. Use it for any rate: "zehn Euro pro Stunde" (ten euros per hour).'
    },
    {
      q: '[TRANSFER] You want to say "I would like to play chess on Saturday." Build the German sentence step by step.',
      a: '"Ich möchte am Samstag Schach spielen." Step 1: subject "Ich". Step 2: modal verb "möchte" (1st person singular). Step 3: time phrase "am Samstag" (on Saturday, masculine day, so "an dem" contracts to "am"). Step 4: object "Schach" (chess). Step 5: main verb "spielen" at the end because the modal pushes it there. The order subject + modal + time + object + infinitive is standard.'
    },
    {
      q: 'Translate: "Herzlich willkommen!"',
      a: '"Welcome!" or more literally "A warm welcome!" Step 1: "herzlich" = cordial, warm-hearted. Step 2: "willkommen" = welcome (the noun / interjection). Step 3: together they make a formal greeting used at events, in classes, and at the start of meetings.'
    },
    {
      q: '[PREDICT] You see the headline: "Universitätsorchester sucht Sängerin." Translate it and explain each piece.',
      a: '"The university orchestra is looking for a (female) singer." Step 1: "Universitätsorchester" = university orchestra (compound noun). Step 2: "sucht" = is looking for (3rd person singular of "suchen"). Step 3: "Sängerin" = female singer; the -in suffix marks the feminine form, plural "Sängerinnen" with -nen.'
    },
    {
      q: 'Translate: "Was bedeutet das?"',
      a: '"What does this mean?" Step 1: "Was" = what. Step 2: "bedeutet" = means (3rd person singular of "bedeuten"). Step 3: "das" = this / that. The whole phrase is your go-to question whenever a teacher or text uses an unfamiliar word.'
    },
    {
      q: '[ELABORATE] Why does German use "am" before days of the week and before "Wochenende" but "im" before months and seasons?',
      a: '"am" = an dem (Dativ). Days are masculine and Wochenende is neuter: both share dative article "dem", contracting to "am". "im" = in dem (Dativ). Months and seasons use "in" as the preposition: in dem Januar → im Januar. The preposition itself differs (an vs in), which is why the contraction differs. You never say "am Januar" or "im Montag".'
    },
    {
      q: 'Build a German sentence: Someone would like to travel to Berlin.',
      a: '"Er/Sie möchte nach Berlin reisen." Step 1: subject "Er" or "Sie". Step 2: modal verb "möchte" in position 2. Step 3: directional preposition "nach" before the city name. Step 4: city name "Berlin". Step 5: main verb "reisen" at the end as an infinitive (because "möchte" pushes it there). Result: subject + möchte + nach + city + infinitive.'
    },
    {
      q: 'What does "Sport treiben" mean and why is it not "Sport machen" or "Sport spielen"?',
      a: '"Sport treiben" = to do or play sport. Step 1: "treiben" is the locked verb that German fixes to "Sport". Step 2: you cannot swap it for "machen" (to make) or "spielen" (to play), even though English is flexible. Step 3: each activity has its own fixed verb in German: "Sport treiben," "Klavier spielen," "Ski fahren". You memorise each pairing as a unit.'
    }
  ],

  reference: {
    category: 'Quick Reference',
    title: 'Mein Tag und meine Woche',
    sections: [
      <>
        <h2>Days of the Week</h2>
        <p>
          When to use: any sentence that fixes an event to a day or to the weekend. All days are
          masculine (der). Use "am" for "on Monday," etc.
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
              <th>Usage example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der Montag</td>
              <td>Monday</td>
              <td>am Montag</td>
            </tr>
            <tr>
              <td>der Dienstag</td>
              <td>Tuesday</td>
              <td>am Dienstag</td>
            </tr>
            <tr>
              <td>der Mittwoch</td>
              <td>Wednesday</td>
              <td>am Mittwoch</td>
            </tr>
            <tr>
              <td>der Donnerstag</td>
              <td>Thursday</td>
              <td>am Donnerstag</td>
            </tr>
            <tr>
              <td>der Freitag</td>
              <td>Friday</td>
              <td>am Freitag</td>
            </tr>
            <tr>
              <td>der Samstag</td>
              <td>Saturday</td>
              <td>am Samstag</td>
            </tr>
            <tr>
              <td>der Sonntag</td>
              <td>Sunday</td>
              <td>am Sonntag</td>
            </tr>
            <tr>
              <td>das Wochenende</td>
              <td>weekend</td>
              <td>am Wochenende</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Core Time Expressions</h2>
        <p>When to use: any sentence about frequency, timing, or sequence.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>heute</td>
              <td>today</td>
            </tr>
            <tr>
              <td>jetzt</td>
              <td>now</td>
            </tr>
            <tr>
              <td>gleich</td>
              <td>immediately, in a second</td>
            </tr>
            <tr>
              <td>immer</td>
              <td>always</td>
            </tr>
            <tr>
              <td>oft</td>
              <td>often</td>
            </tr>
            <tr>
              <td>noch</td>
              <td>still, yet</td>
            </tr>
            <tr>
              <td>noch einmal</td>
              <td>one more time</td>
            </tr>
            <tr>
              <td>einmal</td>
              <td>once</td>
            </tr>
            <tr>
              <td>jeden Tag</td>
              <td>every day</td>
            </tr>
            <tr>
              <td>am Wochenende</td>
              <td>at the weekend</td>
            </tr>
            <tr>
              <td>zuerst</td>
              <td>first</td>
            </tr>
            <tr>
              <td>wieder</td>
              <td>again</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Office and Workplace Vocabulary</h2>
        <p>When to use: any conversation about work, colleagues, or office equipment.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Plural</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der Drucker</td>
              <td>die Drucker</td>
              <td>printer</td>
            </tr>
            <tr>
              <td>der Bildschirm</td>
              <td>die Bildschirme</td>
              <td>screen</td>
            </tr>
            <tr>
              <td>der Computer</td>
              <td>die Computer</td>
              <td>computer</td>
            </tr>
            <tr>
              <td>das Faxgerät</td>
              <td>die Faxgeräte</td>
              <td>fax machine</td>
            </tr>
            <tr>
              <td>das Kopiergerät</td>
              <td>die Kopiergeräte</td>
              <td>copy machine</td>
            </tr>
            <tr>
              <td>das Telefon</td>
              <td>die Telefone</td>
              <td>telephone</td>
            </tr>
            <tr>
              <td>die Maus</td>
              <td>die Mäuse</td>
              <td>mouse (computer)</td>
            </tr>
            <tr>
              <td>der Schreibtisch</td>
              <td>die Schreibtische</td>
              <td>desk</td>
            </tr>
            <tr>
              <td>der Bürostuhl</td>
              <td>die Bürostühle</td>
              <td>office chair</td>
            </tr>
            <tr>
              <td>das Bücherregal</td>
              <td>die Bücherregale</td>
              <td>bookshelf</td>
            </tr>
            <tr>
              <td>der Bleistift</td>
              <td>die Bleistifte</td>
              <td>pencil</td>
            </tr>
            <tr>
              <td>der Kugelschreiber</td>
              <td>die Kugelschreiber</td>
              <td>pen</td>
            </tr>
            <tr>
              <td>der Papierkorb</td>
              <td>die Papierkörbe</td>
              <td>waste-paper basket</td>
            </tr>
            <tr>
              <td>der Kollege</td>
              <td>die Kollegen</td>
              <td>colleague (m)</td>
            </tr>
            <tr>
              <td>die Kollegin</td>
              <td>die Kolleginnen</td>
              <td>colleague (f)</td>
            </tr>
            <tr>
              <td>der Terminkalender</td>
              <td>die Terminkalender</td>
              <td>agenda</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Core Dialogue Phrases</h2>
        <p>
          When to use: ready-made everyday phrases for greetings, classroom interaction, and small
          talk.
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German phrase</th>
              <th>English meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wie geht es?</td>
              <td>How is it going?</td>
            </tr>
            <tr>
              <td>Na, wie geht es?</td>
              <td>So, how is it going? (casual)</td>
            </tr>
            <tr>
              <td>Herzlich willkommen!</td>
              <td>Welcome!</td>
            </tr>
            <tr>
              <td>Bis später.</td>
              <td>See you later.</td>
            </tr>
            <tr>
              <td>Vielen Dank.</td>
              <td>Many thanks.</td>
            </tr>
            <tr>
              <td>Bitte sehr.</td>
              <td>You are welcome.</td>
            </tr>
            <tr>
              <td>Was bedeutet das?</td>
              <td>What does this mean?</td>
            </tr>
            <tr>
              <td>Wiederholen Sie bitte.</td>
              <td>Repeat it, please.</td>
            </tr>
            <tr>
              <td>Erklären Sie das noch einmal.</td>
              <td>Explain it one more time.</td>
            </tr>
            <tr>
              <td>Was meinen Sie?</td>
              <td>What do you think?</td>
            </tr>
            <tr>
              <td>Fehlt etwas?</td>
              <td>Is anything missing?</td>
            </tr>
            <tr>
              <td>Alles ist da.</td>
              <td>Everything is here.</td>
            </tr>
            <tr>
              <td>ach so</td>
              <td>Oh, I see.</td>
            </tr>
            <tr>
              <td>Ich frage mal Paul.</td>
              <td>I'll ask Paul. (softened)</td>
            </tr>
          </tbody>
        </table>
      </>
    ]
  },

  customCss: null
}

export default function MyDayAndMyWeek() {
  return <LearningTemplate config={config} />
}
