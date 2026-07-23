import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'mdw',
  documentTitle: 'My Day and My Week: AETHER',
  learning: {
    category: 'Unit 7',
    title: 'Mein Tag und meine Woche',
    subtitle:
      'Days of the week, separable and reflexive verbs, parts of the day, word order, and workplace vocabulary',
    sections: [
      <>
        <h2>Why This Unit Matters</h2>
        <p>
          This unit gives you the German to describe a real day and week. You learn the days, the
          verbs for a daily routine, the parts of the day, and the word order to string them
          together. You also pick up office and university vocabulary along the way.
        </p>
      </>,

      <>
        <div id="lrn-section-0">
          <h2>Days of the Week</h2>

          <p>
            Every German sentence that pins an event to a day starts here. "I work on Monday." "We
            meet at the weekend."
          </p>
          <p>
            Look at the first day: <strong>der Montag</strong> (Monday). It takes{' '}
            <strong>der</strong>. So do all the others. Every single day name in German is
            masculine.
          </p>

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
              <strong>dem</strong>. (Dative is the case for certain time and place words. You met it
              in Unit 6.)
            </li>
            <li>
              "an dem" always contracts to <strong>am</strong> (this is the same am = an dem from
              Unit 6).
            </li>
            <li>
              Result: <strong>am Montag</strong> (on Monday).
            </li>
          </ol>
          <p>
            The same "am" works for the weekend, because "das Wochenende" is neuter and the neuter
            dative article is also "dem": <strong>am Wochenende</strong>. You never say "im Montag"
            or "an Montag".
          </p>

          <h3>Weekend Vocabulary</h3>
          <div className="lrn-tip">
            <p>
              <strong>Reading the plural marks:</strong> the short ending after each noun shows how
              to build its plural. "die Woche, -n" means the plural adds -n (die Wochen). "-e" adds
              -e (der Tag → die Tage). "-er" adds -er with an umlaut (das Fahrrad → die Fahrräder).
              "-nen" adds -nen (die Kollegin → die Kolleginnen). A bare "-" means no change (das
              Zimmer → die Zimmer).
            </p>
          </div>
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
        <div id="lrn-section-daily-routine">
          <h2>Describing Your Day</h2>

          <p>
            Now you can name the days. Next you learn the verbs that fill them. To describe a real
            day in German you need three new tools: separable verbs, reflexive verbs, and the words
            for parts of the day.
          </p>

          <h3>Separable Verbs</h3>
          <p>
            A separable verb is a verb with a small prefix that breaks off in a sentence. The prefix
            jumps to the very end. The main part of the verb stays in second place and takes its
            normal ending.
          </p>
          <p>
            Take <strong>aufstehen</strong> (to get up). It splits into <strong>auf</strong> +{' '}
            <strong>stehen</strong>.
          </p>

          <h4>Worked Example: aufstehen</h4>
          <ol className="lrn-list">
            <li>
              Start with the dictionary form: <strong>aufstehen</strong>.
            </li>
            <li>
              Split off the prefix <strong>auf</strong>. The main verb is <strong>stehen</strong>.
            </li>
            <li>
              Conjugate <strong>stehen</strong> for "ich": <strong>stehe</strong>. Put it in second
              place.
            </li>
            <li>
              Send the prefix <strong>auf</strong> to the end.
            </li>
            <li>
              Result: <strong>Ich stehe auf.</strong> (I get up.)
            </li>
          </ol>

          <p>The same split works across the day:</p>
          <ul className="lrn-list">
            <li>
              <strong>aufwachen</strong> (to wake up) → Ich wache auf.
            </li>
            <li>
              <strong>anfangen</strong> (to begin) → Die Arbeit fängt an. (Work begins.)
            </li>
            <li>
              <strong>einkaufen</strong> (to shop) → Ich kaufe ein.
            </li>
          </ul>

          <div className="lrn-tip">
            <p>
              <strong>anfangen</strong> is a strong verb. Its stem vowel changes in the du and
              er/sie forms: <strong>du fängst an</strong>, <strong>er fängt an</strong>. The prefix
              "an" still goes to the end.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>In "Ich stehe auf," why is "auf" sitting at the end and not next to "Ich"?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The conjugated verb must stand in second position in a German main sentence. Only
                the stem part ("stehe") can carry the ending, so it takes that slot. The prefix
                ("auf") has no ending to carry, so German parks it at the end of the sentence. You
                will see the same pattern with every separable verb.
              </p>
            </details>
          </div>

          <h3>Reflexive Verbs</h3>
          <p>
            A reflexive verb is one where the action loops back on the doer. You do it to yourself.
            German marks this with a reflexive pronoun: <strong>mich</strong> (myself),{' '}
            <strong>dich</strong> (yourself), <strong>sich</strong> (himself/herself),{' '}
            <strong>uns</strong> (ourselves), <strong>euch</strong> (yourselves),{' '}
            <strong>sich</strong> (themselves).
          </p>

          <h4>Worked Example: sich waschen</h4>
          <ol className="lrn-list">
            <li>
              Dictionary form: <strong>sich waschen</strong> (to wash up).
            </li>
            <li>
              Conjugate <strong>waschen</strong> for "ich": <strong>wasche</strong>.
            </li>
            <li>
              Add the reflexive pronoun for "ich": <strong>mich</strong>. It comes right after the
              verb.
            </li>
            <li>
              Result: <strong>Ich wasche mich.</strong> (I wash up.)
            </li>
          </ol>

          <p>
            One verb is both reflexive and separable: <strong>sich anziehen</strong> (to get
            dressed). The pronoun comes first, the prefix goes last:
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Ich ziehe mich an.</strong> (I get dressed.)
            </li>
          </ul>

          <h3>Parts of the Day</h3>
          <p>
            To say when in the day something happens, German has a noun and an adverb for each part.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">Nouns (use "am")</p>
              <p>der Morgen (morning)</p>
              <p>der Vormittag (late morning)</p>
              <p>der Mittag (midday)</p>
              <p>der Nachmittag (afternoon)</p>
              <p>der Abend (evening)</p>
              <p>die Nacht (night)</p>
            </div>
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">Adverbs</p>
              <p>morgens (in the morning)</p>
              <p>vormittags (in the late morning)</p>
              <p>mittags (at midday)</p>
              <p>nachmittags (in the afternoon)</p>
              <p>abends (in the evening)</p>
              <p>nachts (at night)</p>
            </div>
          </div>
          <div className="lrn-tip">
            <p>
              Use <strong>am</strong> for most parts: am Morgen, am Abend. The one exception is
              night: you say <strong>in der Nacht</strong>, because "die Nacht" is feminine and uses
              the preposition "in".
            </p>
          </div>

          <h3>Word Order: Time-Manner-Place</h3>
          <p>
            When a sentence has several details, German lines them up in a fixed order: Time (when),
            then Manner (how), then Place (where).
          </p>

          <h4>Worked Example: Building One Sentence</h4>
          <ol className="lrn-list">
            <li>
              Verb in second place: <strong>Ich gehe …</strong> (I go).
            </li>
            <li>
              Time first: <strong>am Montag</strong> (on Monday).
            </li>
            <li>
              Place last: <strong>zur Arbeit</strong> (to work). Here "zur" = "zu der" (Arbeit is
              feminine).
            </li>
            <li>
              Result: <strong>Ich gehe am Montag zur Arbeit.</strong> (I go to work on Monday.)
            </li>
          </ol>
          <p>
            Add a manner detail and it slots between time and place:{' '}
            <strong>Ich fahre morgens mit dem Bus zur Arbeit.</strong> (I go to work by bus in the
            morning.)
          </p>

          <div className="lrn-insight">
            <p>
              <strong>Clock time from Unit 6.</strong> You already know "um … Uhr" for telling the
              time. Drop it into the time slot to fix an event to an hour:{' '}
              <strong>Ich stehe um sieben Uhr auf.</strong> (I get up at seven o'clock.) Notice the
              separable prefix "auf" still goes to the very end.
            </p>
          </div>

          <h3>The Payoff: A Whole Day in German</h3>
          <p>
            Now stitch the tools together. Here is a short narrated day. Every sentence uses a tool
            from this section.
          </p>
          <div className="lrn-insight">
            <p>
              <strong>Ich wache um sieben Uhr auf.</strong> (I wake up at seven o'clock.)
            </p>
            <p>
              <strong>Dann wasche ich mich und ziehe mich an.</strong> (Then I wash up and get
              dressed.)
            </p>
            <p>
              <strong>Am Morgen fahre ich mit dem Bus zur Arbeit.</strong> (In the morning I go to
              work by bus.)
            </p>
            <p>
              <strong>Die Arbeit fängt um acht Uhr an.</strong> (Work begins at eight o'clock.)
            </p>
            <p>
              <strong>Am Nachmittag kaufe ich ein.</strong> (In the afternoon I do the shopping.)
            </p>
            <p>
              <strong>Am Abend bin ich zu Hause.</strong> (In the evening I am at home.)
            </p>
          </div>
          <p>
            Read it once more and spot each tool: separable verbs (wache … auf, fängt … an, kaufe …
            ein), a reflexive verb (wasche mich), parts of the day (am Morgen, am Nachmittag, am
            Abend), and clock time (um sieben Uhr). That is a full day described in German.
          </p>
        </div>
      </>,

      <>
        <div id="lrn-section-1">
          <h2>Weekly Life and Time Vocabulary</h2>

          <p>
            These words tell your listener when, how often, or how soon something happens. They sit
            in the time slot of your daily-routine sentences.
          </p>

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
              <strong>jeden Tag</strong>: every day (learn it as a fixed phrase)
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

          <h3>General Day-to-Day Vocabulary</h3>
          <ul className="lrn-list">
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
              <strong>der Kaffee</strong>: coffee
            </li>
            <li>
              <strong>das Fahrrad, -er</strong>: bicycle
            </li>
            <li>
              <strong>das Motorrad, -er</strong>: motorcycle
            </li>
            <li>
              <strong>jemand</strong>: someone
            </li>
            <li>
              <strong>man</strong>: one (the impersonal subject from Unit 6)
            </li>
          </ul>

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
              one for another changes the meaning, not just how formal it sounds.
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-2">
          <h2>Office and Workplace Vocabulary</h2>

          <p>
            Many people spend the weekday at work. These words name the colleagues, equipment, and
            tasks that fill an office day.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              German names many office machines with compound nouns. What two words do you think
              make up "Kaffeemaschine"?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <strong>Kaffee</strong> (coffee) + <strong>Maschine</strong> (machine). The last
                word "Maschine" is feminine, so the whole word is "die Kaffeemaschine".
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
              Glue them together. The compound takes the gender of its last word (this is the
              compound-gender rule from Unit 5).
            </li>
            <li>
              Result: <strong>die Schreibtischlampe</strong> (the desk lamp), because "Lampe" is
              feminine.
            </li>
          </ol>
          <p>
            The same rule decodes more office words: Bürostuhl = Büro + Stuhl (der Stuhl → der
            Bürostuhl); Terminkalender = Termin + Kalender (der Kalender → der Terminkalender).
          </p>

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
          <p>
            The <strong>-in</strong> ending makes a feminine job or role word from the male form
            (Kollege → Kollegin, from Units 1 and 3). The plural of an -in word adds -nen
            (Kolleginnen).
          </p>

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
          <p>
            "kein Drucker" means "no printer". You met kein/keine in Unit 4: use{' '}
            <strong>kein</strong> for masculine and neuter nouns, <strong>keine</strong> for
            feminine and plural.
          </p>

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
        </div>
      </>,

      <>
        <div id="lrn-section-3">
          <h2>University and Education Vocabulary</h2>

          <p>
            If your week is built around studying, these words describe it: the places you go and
            the courses you attend.
          </p>

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
              <strong>das Sprachenzentrum, die Sprachenzentren</strong>: language centre (words
              ending in -um swap it for -en in the plural)
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
          </ul>
          <p>
            School subject names (Mathematik, Literatur, and so on) come from Unit 3. Here you only
            need the schedule words above.
          </p>

          <h3>Academic Verbs</h3>
          <ul className="lrn-list">
            <li>
              <strong>besuchen</strong>: to visit a person, or to attend a course
            </li>
          </ul>

          <h3>Worked Example: Two Uses of "besuchen"</h3>
          <ol className="lrn-list">
            <li>
              <strong>besuchen</strong> takes an accusative object. (Accusative is the case for the
              direct object, the thing the action lands on, which you met in Unit 5.) The object
              decides the meaning.
            </li>
            <li>Object is a person: "Ich besuche einen Freund." (I am visiting a friend.)</li>
            <li>
              Object is a course or lecture: "Ich besuche einen Sprachkurs." (I am taking a language
              course.)
            </li>
            <li>The verb form does not change. Only the object changes.</li>
          </ol>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              German often re-uses one verb across related actions instead of inventing new words.
              "besuchen" started as "to go and see" (a person), then extended to "going to" a class
              regularly. The two readings live side by side and the object makes the meaning clear.
            </p>
          </div>
        </div>
      </>
    ]
  },

  practice: [
    {
      q: 'List all seven days of the week in German. What gender are they all? Build a sample "on Monday" phrase.',
      a: 'Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag. They are all masculine (der). Step 1: pick the day, e.g., Montag. Step 2: prepend "am" (the contraction of "an dem", which you know from Unit 6) because all days are masculine. Step 3: result is "am Montag" (on Monday). The same pattern works for every day.'
    },
    {
      q: 'Conjugate the separable verb "aufstehen" for ich, and say "I get up." Where does the prefix go?',
      a: '"Ich stehe auf." Step 1: the verb is auf + stehen. Step 2: in a sentence the prefix "auf" splits off and jumps to the end. Step 3: the main part "stehe" takes the normal ich ending and sits in second position. Result: "Ich stehe auf" (I get up).'
    },
    {
      q: 'Build the German for "I get up at seven o\'clock." Use the separable verb plus clock time.',
      a: '"Ich stehe um sieben Uhr auf." Step 1: separable verb aufstehen → stehe ... auf. Step 2: clock time "um sieben Uhr" (at seven o\'clock, the "um ... Uhr" pattern from Unit 6). Step 3: the prefix "auf" still goes last, after the time phrase. So the time slots in before the prefix.'
    },
    {
      q: 'Reflexive verbs: build "I wash up" and "I get dressed." Where does the reflexive pronoun go?',
      a: '"Ich wasche mich." and "Ich ziehe mich an." Step 1: the reflexive pronoun for ich is "mich". Step 2: it follows right after the conjugated verb. Step 3: sich anziehen is also separable, so the prefix "an" goes to the very end: "Ich ziehe mich an." Pronoun first, prefix last.'
    },
    {
      q: 'You are describing your day. Build: "In the morning I get dressed." Use a time-of-day adverb.',
      a: '"Morgens ziehe ich mich an." Step 1: time-of-day adverb "morgens" (in the morning). Step 2: starting with the time pushes the verb into second position, so "ziehe" comes next. Step 3: subject "ich". Step 4: reflexive pronoun "mich". Step 5: separable prefix "an" at the end. You could also say "Ich ziehe mich morgens an."'
    },
    {
      q: '[TRANSFER] Order the pieces correctly: ich gehe / zur Arbeit / am Montag. State the rule you used.',
      a: '"Ich gehe am Montag zur Arbeit." Step 1: German orders extra details Time → Manner → Place. Step 2: "am Montag" is time, so it comes first. Step 3: "zur Arbeit" is place, so it comes last. Note: zur Arbeit = zu der Arbeit (Arbeit is feminine, so zu + der → zur).'
    },
    {
      q: 'Why does German use "am" before days of the week and parts of the day, but "in der Nacht" for night?',
      a: '"am" = an dem (the dative contraction from Unit 6). Step 1: days are masculine and most day-parts are masculine (der Morgen, der Abend), so an + dem → am: am Montag, am Morgen, am Abend. Step 2: "die Nacht" is feminine and uses the preposition "in", so you say "in der Nacht" instead of "am". Step 3: match the article and preposition to the noun.'
    },
    {
      q: 'What is the German word for "printer" and what is its gender?',
      a: 'Der Drucker (masculine). The plural is "die Drucker." Step 1: the article "der" confirms it is masculine. Step 2: the plural keeps the same form because "Drucker" already ends in "-er". So both singular and plural look identical: der Drucker (one), die Drucker (several).'
    },
    {
      q: 'Fill in the blank: "Hier ist $\\rule{1cm}{0.5pt}$ Drucker." (There is no printer here.)',
      a: '"Hier ist kein Drucker." Step 1: identify the noun, "Drucker". Step 2: check its gender: masculine (der Drucker). Step 3: pick the negative word that matches masculine, which is "kein" (this is the kein/keine pattern from Unit 4). Step 4: insert it. Feminine nouns ("Lampe") would take "keine" instead.'
    },
    {
      q: 'What does "Der Drucker geht." mean? Why does this verb work for machines?',
      a: '"The printer works." Step 1: "gehen" usually means "to go" for people or movement. Step 2: for machines and devices, German extends the meaning to "to function / to work". Step 3: so "Der Drucker geht" (the printer works) sits next to "Der Drucker ist kaputt" (the printer is broken). Both are normal A1 sentences in any office.'
    },
    {
      q: 'What does "besuchen" mean? Why can it confuse you? Give two example sentences.',
      a: '"besuchen" has two meanings: (1) to visit a person ("einen Freund besuchen") and (2) to take or attend a course ("einen Sprachkurs besuchen"). It takes an accusative object (the direct object, the case from Unit 5). Step 1: look at the object. A person gives the visit reading. Step 2: a course or lecture gives the attend reading. Step 3: the verb never changes form; the object makes the meaning clear. So "Ich besuche einen Freund" = I am visiting a friend, but "Ich besuche einen Sprachkurs" = I am taking a language course.'
    },
    {
      q: 'What is the difference between "Kantine" and "Mensa"?',
      a: 'Both mean canteen, but they apply in different settings. "die Kantine" is a general workplace canteen (in offices, factories, hospitals). "die Mensa" is specifically a student canteen at a university or college. Step 1: ask where the food is served. Step 2: pick Kantine for workplaces. Step 3: pick Mensa for universities. Both take the article "die".'
    },
    {
      q: 'What is "der Terminkalender" and what related words connect to it?',
      a: '"der Terminkalender" = agenda, appointment book. Step 1: it is a compound noun: Termin (appointment) + Kalender (calendar). Step 2: the compound takes the gender of the last word, "Kalender" (masculine), so it is "der Terminkalender" (compound gender is set by the last word, from Unit 5). Related words: "der Termin, -e" (appointment), "die Zeit, -en" (time), "der Arbeitstag, -e" (working day).'
    },
    {
      q: '[TRANSFER] You want to say "There is no coffee machine in the office." Build the German sentence.',
      a: '"Im Büro ist keine Kaffeemaschine." Step 1: "Im Büro" = in the office (im = in dem). Step 2: verb "ist". Step 3: identify the noun gender: "Kaffeemaschine" is feminine (die Kaffeemaschine). Step 4: pick the matching negative word: feminine takes "keine". Step 5: place it before the noun. Same kein/keine rule, just moved to a new room and new vocabulary.'
    },
    {
      q: '[ELABORATE] Why does German use "am" before days of the week and "Wochenende" but "im" before months and seasons?',
      a: '"am" = an dem. Days are masculine and Wochenende is neuter: both share the dative article "dem", so they contract to "am". "im" = in dem. Months and seasons use "in" as the preposition: in dem Januar → im Januar. The preposition itself differs (an vs in), which is why the contraction differs. You never say "am Januar" or "im Montag".'
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
        <h2>Separable Verbs (Daily Routine)</h2>
        <p>
          When to use: any action whose prefix jumps to the end of the sentence. The prefix splits
          off; the rest of the verb takes the normal endings.
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Verb</th>
              <th>ich form</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>aufstehen</td>
              <td>ich stehe auf</td>
              <td>to get up</td>
            </tr>
            <tr>
              <td>aufwachen</td>
              <td>ich wache auf</td>
              <td>to wake up</td>
            </tr>
            <tr>
              <td>anfangen</td>
              <td>ich fange an</td>
              <td>to begin</td>
            </tr>
            <tr>
              <td>einkaufen</td>
              <td>ich kaufe ein</td>
              <td>to shop</td>
            </tr>
          </tbody>
        </table>
        <p>
          Strong verb note: anfangen changes the stem in du/er forms (du fängst an, er fängt an).
        </p>
      </>,

      <>
        <h2>Reflexive Verbs (Daily Routine)</h2>
        <p>
          When to use: the action loops back on the doer. The pronoun follows the conjugated verb:
          mich, dich, sich, uns, euch, sich.
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Verb</th>
              <th>ich form</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sich waschen</td>
              <td>ich wasche mich</td>
              <td>to wash up</td>
            </tr>
            <tr>
              <td>sich anziehen</td>
              <td>ich ziehe mich an</td>
              <td>to get dressed</td>
            </tr>
          </tbody>
        </table>
        <p>
          sich anziehen is both reflexive and separable: the pronoun (mich) comes first, the prefix
          (an) goes last.
        </p>
      </>,

      <>
        <h2>Times of Day</h2>
        <p>When to use: to mark which part of the day an action happens in.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Noun</th>
              <th>Adverb</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der Morgen</td>
              <td>morgens</td>
              <td>morning / in the morning</td>
            </tr>
            <tr>
              <td>der Vormittag</td>
              <td>vormittags</td>
              <td>late morning</td>
            </tr>
            <tr>
              <td>der Mittag</td>
              <td>mittags</td>
              <td>midday / at noon</td>
            </tr>
            <tr>
              <td>der Nachmittag</td>
              <td>nachmittags</td>
              <td>afternoon</td>
            </tr>
            <tr>
              <td>der Abend</td>
              <td>abends</td>
              <td>evening</td>
            </tr>
            <tr>
              <td>die Nacht</td>
              <td>nachts</td>
              <td>night</td>
            </tr>
          </tbody>
        </table>
        <p>
          Use "am" for most parts of the day (am Morgen, am Abend), but "in der Nacht" for night.
        </p>
      </>,

      <>
        <h2>Word Order: Time-Manner-Place</h2>
        <p>
          When to use: when one sentence has time, manner, and place details. German orders them
          Time → Manner → Place.
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
              <td>Time + Place</td>
              <td>Ich gehe am Montag zur Arbeit.</td>
            </tr>
            <tr>
              <td>Time + Manner + Place</td>
              <td>Ich fahre morgens mit dem Bus zur Arbeit.</td>
            </tr>
            <tr>
              <td>Separable verb + time</td>
              <td>Ich stehe um sieben Uhr auf.</td>
            </tr>
          </tbody>
        </table>
        <p>zur Arbeit = zu der Arbeit (Arbeit is feminine, so zu + der contracts to zur).</p>
      </>
    ]
  },

  customCss: null
}

export default function MyDayAndMyWeek() {
  return <LearningTemplate config={config} />
}
