import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'gfc',
  source: 'Begegnungen A1+ — Buscha/Szita',
  documentTitle: 'Greetings and First Contacts: AETHER',
  learning: {
    category: 'Unit 1',
    title: 'Begrüßungen und erste Kontakte',
    subtitle:
      'Greetings, self-introduction, the office, university, vocabulary, and first conversations',
    sections: [
      <div id="lrn-section-0">
        <h1>Guten Tag!: Greetings and Self-Introduction</h1>
        <p>
          German greetings change with the time of day. Three short phrases let you introduce
          yourself. One distinction — Sie or du — runs through every conversation you will have.
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
              (informal, lowercase). The verb changes with each pronoun.
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
              In German, a noun that describes the subject after "to be" (called a predicate noun)
              drops the article when it names a profession or nationality. You say{' '}
              <strong>Ich bin Arzt</strong> (I am a doctor), not <strong>Ich bin ein Arzt</strong>.
            </p>
          </details>
        </div>

        <h2>Sample Self-Introductions</h2>
        <p>
          Three people introduce themselves. Each covers name, age, hometown, profession, languages,
          and what they are learning.
        </p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Franziska Binder</span>
            <p className="lrn-step-content">
              Guten Tag! Ich heiße Franziska Binder. Ich bin 37 Jahre alt. Ich wohne in Wien. Ich
              bin Lehrerin. Meine Muttersprache ist Deutsch. Ich lerne jetzt Englisch.
            </p>
            <p className="lrn-step-content">
              Hello! My name is Franziska Binder. I am 37 years old. I live in Vienna. I am a
              teacher. My native language is German. I am currently learning English.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Peter Heinemann</span>
            <p className="lrn-step-content">
              Hallo! Ich heiße Peter Heinemann. Ich bin 35 Jahre alt. Ich wohne in Marburg. Ich bin
              Informatiker. Meine Muttersprache ist Deutsch. Ich lerne jetzt Spanisch.
            </p>
            <p className="lrn-step-content">
              Hello! My name is Peter Heinemann. I am 35 years old. I live in Marburg. I am an IT
              specialist. My native language is German. I am currently learning Spanish.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Sarah Mounier</span>
            <p className="lrn-step-content">
              Guten Tag! Ich heiße Sarah Mounier. Ich bin 22 Jahre alt. Ich komme aus Frankreich.
              Ich studiere Medizin. Meine Muttersprache ist Französisch. Ich lerne jetzt Deutsch.
            </p>
            <p className="lrn-step-content">
              Hello! My name is Sarah Mounier. I am 22 years old. I come from France. I study
              medicine. My native language is French. I am currently learning German.
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
              <strong>Ich wohne in …</strong> tells you where someone currently lives (residence).
              These are two different facts. A person can come from France but live in Berlin.
            </p>
          </details>
        </div>
      </div>,

      <div id="lrn-section-1">
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
            <tr>
              <td>Was sind Sie von Beruf?</td>
              <td>Was bist du von Beruf?</td>
              <td>What is your profession?</td>
            </tr>
            <tr>
              <td>Welche Sprachen sprechen Sie?</td>
              <td>Welche Sprachen sprichst du?</td>
              <td>Which languages do you speak?</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German has two second-person pronouns where English has only "you." This is not unique
            to German: French has tu/vous, Spanish has tú/usted. The formal pronoun{' '}
            <strong>Sie</strong> uses exactly the same verb form as the third-person plural (they).
            This is why <strong>Woher kommen Sie?</strong> looks like "Where do they come from?" but
            means "Where do you come from?" (formal).
          </p>
        </div>

        <p>
          The answers always use <em>ich</em> — the formality is in the question, not the answer.
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
          </div>
        </div>
      </div>,

      <div id="lrn-section-2">
        <h2>Countries, Articles, and Nationalities</h2>
        <p>Most country names in German have no article, but a few always require one.</p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You want to say "I come from Switzerland." Switzerland in German is <em>die Schweiz</em>
            . What preposition fits with the article?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              <strong>Ich komme aus der Schweiz.</strong> The preposition <em>aus</em> takes the
              dative case. The feminine article <em>die</em> changes to <em>der</em> in the dative.
              (The dative is the grammatical form German uses after certain prepositions. You will
              study it fully in a later chapter — for now, learn <em>aus der Schweiz</em> as a fixed
              phrase.)
            </p>
          </details>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Mozart, Freud, and Madame Tussaud are all famous people. Why do their origin sentences
            all use the same verb form (<em>kommt</em>) but different articles in some cases?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The verb form <em>kommt</em> matches the third-person singular subject (Mozart, Freud,
              Madame Tussaud). The preposition <em>aus</em> stays the same for all origins. What
              changes is the article: <em>aus Österreich</em> (no article), <em>aus der Schweiz</em>{' '}
              (feminine article required).
            </p>
          </details>
        </div>

        <div className="lrn-callout lrn-warning">
          <span className="lrn-callout-label">Warning</span>
          <p>
            Three countries take the feminine article <strong>die</strong>:{' '}
            <strong>die Türkei</strong>, <strong>die Ukraine</strong>, <strong>die Schweiz</strong>.
          </p>
          <p>
            Two plural country names take <strong>die</strong>: <strong>die USA</strong>,{' '}
            <strong>die Niederlande</strong>.
          </p>
          <p>
            All other countries: no article. Just say <strong>Deutschland</strong>,{' '}
            <strong>Frankreich</strong>, etc.
          </p>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German nouns have grammatical gender (masculine, feminine, neuter). When a country name
            is actually a common noun: like <em>die Schweiz</em> (the confederacy/union) or{' '}
            <em>die Türkei</em> (the Turkish land): it keeps its article. Most modern country names
            are treated as proper nouns with no article. The USA and Netherlands are plural by
            nature (a union of states/provinces), so they take the plural <em>die</em>.
          </p>
        </div>

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
              <td>Deutschland</td>
              <td>Germany</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Österreich</td>
              <td>Austria</td>
              <td>-</td>
            </tr>
            <tr>
              <td>die Schweiz</td>
              <td>Switzerland</td>
              <td>die</td>
            </tr>
            <tr>
              <td>Frankreich</td>
              <td>France</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Italien</td>
              <td>Italy</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Spanien</td>
              <td>Spain</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Portugal</td>
              <td>Portugal</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Großbritannien</td>
              <td>Great Britain</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Schweden</td>
              <td>Sweden</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Dänemark</td>
              <td>Denmark</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Polen</td>
              <td>Poland</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Russland</td>
              <td>Russia</td>
              <td>-</td>
            </tr>
            <tr>
              <td>die Türkei</td>
              <td>Turkey</td>
              <td>die</td>
            </tr>
            <tr>
              <td>die Ukraine</td>
              <td>Ukraine</td>
              <td>die</td>
            </tr>
            <tr>
              <td>Brasilien</td>
              <td>Brazil</td>
              <td>-</td>
            </tr>
            <tr>
              <td>China</td>
              <td>China</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Japan</td>
              <td>Japan</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Belgien</td>
              <td>Belgium</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Rumänien</td>
              <td>Romania</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Slowenien</td>
              <td>Slovenia</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Indien</td>
              <td>India</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Ungarn</td>
              <td>Hungary</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Irland</td>
              <td>Ireland</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Griechenland</td>
              <td>Greece</td>
              <td>-</td>
            </tr>
            <tr>
              <td>die USA</td>
              <td>USA</td>
              <td>die (plural)</td>
            </tr>
            <tr>
              <td>die Niederlande</td>
              <td>the Netherlands</td>
              <td>die (plural)</td>
            </tr>
          </tbody>
        </table>

        <h2>Famous People and Their Origins</h2>
        <p>Practice the origin pattern with these historical figures.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mozart</td>
              <td>Österreich</td>
            </tr>
            <tr>
              <td>Shakespeare</td>
              <td>England / Großbritannien</td>
            </tr>
            <tr>
              <td>Chopin</td>
              <td>Polen</td>
            </tr>
            <tr>
              <td>Madame Tussaud</td>
              <td>Frankreich</td>
            </tr>
            <tr>
              <td>Sigmund Freud</td>
              <td>Österreich</td>
            </tr>
            <tr>
              <td>Einstein</td>
              <td>Deutschland</td>
            </tr>
            <tr>
              <td>Leonardo da Vinci</td>
              <td>Italien</td>
            </tr>
          </tbody>
        </table>
      </div>,

      <div id="lrn-section-3">
        <h2>The German Alphabet (Das Alphabet)</h2>
        <p>
          The German alphabet has 26 letters plus 4 special characters: ä, ö, ü, and ß. You need
          this to spell names and words aloud.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Letter</th>
              <th>German name</th>
              <th>Letter</th>
              <th>German name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>ah</td>
              <td>N</td>
              <td>en</td>
            </tr>
            <tr>
              <td>B</td>
              <td>beh</td>
              <td>O</td>
              <td>oh</td>
            </tr>
            <tr>
              <td>C</td>
              <td>tseh</td>
              <td>P</td>
              <td>peh</td>
            </tr>
            <tr>
              <td>D</td>
              <td>deh</td>
              <td>Q</td>
              <td>kuh</td>
            </tr>
            <tr>
              <td>E</td>
              <td>eh</td>
              <td>R</td>
              <td>er</td>
            </tr>
            <tr>
              <td>F</td>
              <td>ef</td>
              <td>S</td>
              <td>es</td>
            </tr>
            <tr>
              <td>G</td>
              <td>geh</td>
              <td>T</td>
              <td>teh</td>
            </tr>
            <tr>
              <td>H</td>
              <td>hah</td>
              <td>U</td>
              <td>uh</td>
            </tr>
            <tr>
              <td>I</td>
              <td>ih</td>
              <td>V</td>
              <td>fau</td>
            </tr>
            <tr>
              <td>J</td>
              <td>yot</td>
              <td>W</td>
              <td>veh</td>
            </tr>
            <tr>
              <td>K</td>
              <td>kah</td>
              <td>X</td>
              <td>iks</td>
            </tr>
            <tr>
              <td>L</td>
              <td>el</td>
              <td>Y</td>
              <td>üpsilon</td>
            </tr>
            <tr>
              <td>M</td>
              <td>em</td>
              <td>Z</td>
              <td>tsett</td>
            </tr>
            <tr>
              <td>Ä</td>
              <td>ah-Umlaut</td>
              <td>Ö</td>
              <td>oh-Umlaut</td>
            </tr>
            <tr>
              <td>Ü</td>
              <td>uh-Umlaut</td>
              <td>ß</td>
              <td>Eszett / scharfes S</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            English has 26 letters. German has the same 26 plus four extras (ä, ö, ü, ß). Will the
            26 main letters sound the same in German as in English?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              No. The letter names differ: <strong>J</strong> sounds like "yot," <strong>W</strong>{' '}
              sounds like "veh," <strong>Y</strong> sounds like "üpsilon," and <strong>Z</strong>{' '}
              sounds like "tsett." You must learn the German names to spell out loud correctly.
            </p>
          </details>
        </div>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Tip</span>
          <p>
            The 26 standard letters are counted separately from ä, ö, ü, and ß. In formal contexts
            (dictionaries, sorting rules), the special characters are treated as modified forms of
            a, o, u, and s, not as new letters.
          </p>
        </div>

        <h2>Pronunciation Rules</h2>
        <p>Three pronunciation patterns appear repeatedly in this chapter.</p>

        <div className="lrn-definition">
          <span className="lrn-definition-term">sch [ʃ]</span>
          <div className="lrn-definition-desc">
            <p>Sounds like English "sh" in "ship."</p>
            <p>
              Examples: <strong>Schweden</strong>, <strong>Russisch</strong>,{' '}
              <strong>Englisch</strong>
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">sp [ʃp]</span>
          <div className="lrn-definition-desc">
            <p>At the start of a word or syllable, "sp" sounds like "shp."</p>
            <p>
              Examples: <strong>sprechen</strong>, <strong>Spanisch</strong>,{' '}
              <strong>Sprache</strong>
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">ei [aɪ]</span>
          <div className="lrn-definition-desc">
            <p>The diphthong "ei" sounds like English "eye" or "mine."</p>
            <p>
              Examples: <strong>ein</strong>, <strong>heißen</strong>, <strong>mein</strong>,{' '}
              <strong>dein</strong>
            </p>
          </div>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German spelling is largely phonetic: once you learn the rules, you can read any word
            aloud correctly. The "sp" rule applies only at the beginning of a word or syllable. In
            the middle of a word (like "Wespe": wasp), "sp" is pronounced normally as "sp." The
            diphthong "ei" always sounds like "eye": never like "ee." The reverse, "ie," always
            sounds like "ee" (as in <em>viel</em>: a lot).
          </p>
        </div>

        <h2>Sentence Intonation (Satzmelodie)</h2>
        <p>German intonation follows a simple pattern.</p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does "Sprechen Sie Deutsch?" rise at the end, while "Ich heiße Franziska." falls at
            the end? What signal does this send the listener?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Rising tone signals an open question: the speaker waits for an answer. Falling tone
              signals a closed statement: the speaker has finished a thought. This pattern is shared
              with English. German simply applies it consistently with verb-first yes/no questions.
            </p>
          </details>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Statements (falling)</span>
            <p>Ich heiße Franziska. ↘</p>
            <p>Ich komme aus Wien. ↘</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Yes/No questions (rising)</span>
            <p>Kommen Sie aus Wien? ↗</p>
            <p>Sprechen Sie Deutsch? ↗</p>
          </div>
        </div>
      </div>,

      <div id="lrn-section-4">
        <h2>Languages (Sprachen)</h2>
        <p>
          Like all German nouns, language names are capitalized. Most end in <strong>-isch</strong>.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The <strong>-isch</strong> ending on most German language names mirrors the English
            <em> -ish</em> ending (English, Spanish, Polish). Both come from a shared Indo-European
            suffix that turned a country/people noun into an adjective. So
            <em> Polen</em> (Poland) becomes <em>Polnisch</em> (Polish), exactly parallel to
            English. A handful of exceptions exist (Deutsch, not Deutschisch) because they kept
            older forms.
          </p>
        </div>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            How do you think you say "In Germany, they speak German" using the phrase "In … spricht
            man …"?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              <strong>In Deutschland spricht man Deutsch.</strong> The word <em>man</em> means "one"
              or "they" (the general public). It always takes the third-person singular verb form.
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
              <td>Deutsch</td>
              <td>German</td>
            </tr>
            <tr>
              <td>Englisch</td>
              <td>English</td>
            </tr>
            <tr>
              <td>Französisch</td>
              <td>French</td>
            </tr>
            <tr>
              <td>Spanisch</td>
              <td>Spanish</td>
            </tr>
            <tr>
              <td>Italienisch</td>
              <td>Italian</td>
            </tr>
            <tr>
              <td>Portugiesisch</td>
              <td>Portuguese</td>
            </tr>
            <tr>
              <td>Arabisch</td>
              <td>Arabic</td>
            </tr>
            <tr>
              <td>Russisch</td>
              <td>Russian</td>
            </tr>
            <tr>
              <td>Türkisch</td>
              <td>Turkish</td>
            </tr>
            <tr>
              <td>Rumänisch</td>
              <td>Romanian</td>
            </tr>
            <tr>
              <td>Ungarisch</td>
              <td>Hungarian</td>
            </tr>
            <tr>
              <td>Griechisch</td>
              <td>Greek</td>
            </tr>
            <tr>
              <td>Polnisch</td>
              <td>Polish</td>
            </tr>
            <tr>
              <td>Japanisch</td>
              <td>Japanese</td>
            </tr>
            <tr>
              <td>Tschechisch</td>
              <td>Czech</td>
            </tr>
            <tr>
              <td>Chinesisch</td>
              <td>Chinese</td>
            </tr>
            <tr>
              <td>Schwedisch</td>
              <td>Swedish</td>
            </tr>
          </tbody>
        </table>

        <h3>Talking About Language Skills</h3>
        <p>
          Use <strong>sprechen</strong> (to speak) with a level adverb to describe how well you know
          a language.
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
              <td>Ich spreche sehr gut Deutsch.</td>
              <td>I speak German very well.</td>
            </tr>
            <tr>
              <td>Ich spreche gut Englisch.</td>
              <td>I speak English well.</td>
            </tr>
            <tr>
              <td>Ich spreche ein bisschen Spanisch.</td>
              <td>I speak a little Spanish.</td>
            </tr>
            <tr>
              <td>Sprechen Sie Deutsch?</td>
              <td>Do you speak German? (formal)</td>
            </tr>
            <tr>
              <td>Sprichst du Deutsch?</td>
              <td>Do you speak German? (informal)</td>
            </tr>
            <tr>
              <td>Ja, ich spreche Deutsch.</td>
              <td>Yes, I speak German.</td>
            </tr>
            <tr>
              <td>Nein, leider nicht.</td>
              <td>No, unfortunately not.</td>
            </tr>
            <tr>
              <td>In Deutschland spricht man Deutsch.</td>
              <td>In Germany, they speak German.</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Sprechen becomes "sprichst" with du and "spricht" with er/sie. Why does the vowel change
            from e to i?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              This is a stem-vowel change (Vokalwechsel). Some German verbs change the stem vowel in
              the du and er/sie/es forms. The pattern here is <strong>e → i</strong> (or{' '}
              <strong>e → ie</strong> in some verbs like <em>lesen</em>: lese → liest). This only
              happens in singular second and third person. The infinitive and plural forms keep the
              original vowel.
            </p>
          </details>
        </div>
      </div>,

      <div id="lrn-section-5">
        <h2>Numbers (Zahlen)</h2>
        <p>
          German numbers follow predictable patterns. Learn the base words and every number up to a
          million falls into place.
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
          </tbody>
        </table>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>German</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20</td>
              <td>zwanzig</td>
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
              <td>hundert / einhundert</td>
            </tr>
            <tr>
              <td>1.000</td>
              <td>tausend / eintausend</td>
            </tr>
            <tr>
              <td>10.000</td>
              <td>zehntausend</td>
            </tr>
            <tr>
              <td>1.000.000</td>
              <td>eine Million</td>
            </tr>
            <tr>
              <td>1.000.000.000</td>
              <td>eine Milliarde</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Tip</span>
          <p>
            German uses a period as a thousands separator and a comma as a decimal separator: the
            opposite of English. So 1.000 = one thousand, and 1,5 = one and a half.
          </p>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German says compound numbers "small first, then big": 21 is{' '}
            <strong>einundzwanzig</strong> (one-and-twenty), not "twenty-one." This pattern stayed
            from Old English ("four-and-twenty blackbirds"). Modern English flipped the order.
            German kept it. The word <em>und</em> (and) glues the two parts. You write the whole
            number as a single word with no spaces.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does <em>sechzig</em> (60) drop the <strong>s</strong> from <em>sechs</em> (6) and{' '}
            <em>siebzig</em> (70) drop the <strong>en</strong> from <em>sieben</em> (7)?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              These are pronunciation-driven shortcuts. Saying "sechszig" puts two sibilants
              together (s-z) which slows speech, so German drops the s. Saying "siebenzig" packs
              three syllables before the suffix, so German drops the -en. The same pattern shows up
              in <em>sechzehn</em> (16) and <em>siebzehn</em> (17). You must memorize these two -
              every other tens form follows the regular rule.
            </p>
          </details>
        </div>

        <h3>Arithmetic in German</h3>
        <p>German uses simple words for the four operations.</p>

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
              <td>plus</td>
              <td>plus</td>
              <td>sieben plus drei ist zehn</td>
            </tr>
            <tr>
              <td>minus</td>
              <td>minus</td>
              <td>zehn minus drei ist sieben</td>
            </tr>
            <tr>
              <td>ist gleich</td>
              <td>equals</td>
              <td>sieben plus drei ist gleich zehn</td>
            </tr>
          </tbody>
        </table>

        <h3>Telephone Numbers</h3>
        <p>
          Use <strong>Welche Telefonnummer hat …?</strong> to ask for someone's phone number.
        </p>
        <p>German emergency numbers: Polizei 110, Feuerwehr 112, Notarzt 112, Auskunft 11833.</p>
      </div>,

      <div id="lrn-section-6">
        <h2>Professions (Berufe)</h2>
        <p>German profession nouns have a masculine and a feminine form.</p>
        <p>
          The feminine form usually adds <strong>-in</strong> to the masculine form.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The masculine word for engineer is <em>Ingenieur</em>. What do you think the female form
            is?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              <strong>die Ingenieurin</strong>. Add <em>-in</em> to the masculine form. The article
              also flips: <em>der</em> (masculine) becomes <em>die</em> (feminine).
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Many European languages mark gender on profession nouns. German makes this explicit with
            the <em>-in</em> suffix. The reason is grammatical agreement: every German noun has a
            gender, and the article must match. So a male teacher is <em>der Lehrer</em> and a
            female teacher is <em>die Lehrerin</em>. English dropped most of these distinctions
            (actor/actress is now usually just "actor"), but German keeps them because the article
            system depends on gender.
          </p>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Masculine/Feminine profession pattern</span>
          <div className="lrn-definition-desc">
            <p>
              Pattern: masculine <strong>-er</strong> → feminine <strong>-erin</strong>
            </p>
            <p>
              Example: <strong>Informatiker</strong> (male IT specialist) →{' '}
              <strong>Informatikerin</strong> (female IT specialist)
            </p>
            <p>
              Example: <strong>Lehrer</strong> (male teacher) → <strong>Lehrerin</strong> (female
              teacher)
            </p>
            <p>
              Some professions have irregular feminines: <strong>Arzt</strong> →{' '}
              <strong>Ärztin</strong>.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            When you say "Ich bin Informatiker" (male) vs "Ich bin Informatikerin" (female), only
            the noun changes. Why does the verb "bin" stay the same?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The verb <em>sein</em> (to be) agrees with the subject pronoun <em>ich</em>, not with
              the predicate noun. <em>Ich bin</em> always means "I am" regardless of what follows.
              The noun after <em>bin</em> (called a predicate nominative) simply describes the
              subject: its form changes to match the person's gender, but the verb form stays fixed.
            </p>
          </details>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Masculine</th>
              <th>Feminine</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der Kellner</td>
              <td>die Kellnerin</td>
              <td>waiter / waitress</td>
            </tr>
            <tr>
              <td>der Ingenieur</td>
              <td>die Ingenieurin</td>
              <td>engineer</td>
            </tr>
            <tr>
              <td>der Mathematiker</td>
              <td>die Mathematikerin</td>
              <td>mathematician</td>
            </tr>
            <tr>
              <td>der Manager</td>
              <td>die Managerin</td>
              <td>manager</td>
            </tr>
            <tr>
              <td>der Architekt</td>
              <td>die Architektin</td>
              <td>architect</td>
            </tr>
            <tr>
              <td>der Arzt</td>
              <td>die Ärztin</td>
              <td>doctor</td>
            </tr>
            <tr>
              <td>der Student</td>
              <td>die Studentin</td>
              <td>student</td>
            </tr>
            <tr>
              <td>der Taxifahrer</td>
              <td>die Taxifahrerin</td>
              <td>taxi driver</td>
            </tr>
            <tr>
              <td>der Assistent</td>
              <td>die Assistentin</td>
              <td>assistant</td>
            </tr>
            <tr>
              <td>der Lehrer</td>
              <td>die Lehrerin</td>
              <td>teacher</td>
            </tr>
            <tr>
              <td>der Informatiker</td>
              <td>die Informatikerin</td>
              <td>IT specialist / computer scientist</td>
            </tr>
            <tr>
              <td>der Chemiker</td>
              <td>die Chemikerin</td>
              <td>chemist</td>
            </tr>
            <tr>
              <td>der Musiker</td>
              <td>die Musikerin</td>
              <td>musician</td>
            </tr>
            <tr>
              <td>der Jurist</td>
              <td>die Juristin</td>
              <td>lawyer</td>
            </tr>
            <tr>
              <td>der Physiker</td>
              <td>die Physikerin</td>
              <td>physicist</td>
            </tr>
            <tr>
              <td>der Philosoph</td>
              <td>die Philosophin</td>
              <td>philosopher</td>
            </tr>
            <tr>
              <td>der Maler</td>
              <td>die Malerin</td>
              <td>painter</td>
            </tr>
            <tr>
              <td>der Journalist</td>
              <td>die Journalistin</td>
              <td>journalist</td>
            </tr>
            <tr>
              <td>der Koch</td>
              <td>die Köchin</td>
              <td>cook / chef</td>
            </tr>
            <tr>
              <td>der Kommissar</td>
              <td>die Kommissarin</td>
              <td>police inspector</td>
            </tr>
            <tr>
              <td>der Mechaniker</td>
              <td>die Mechanikerin</td>
              <td>mechanic</td>
            </tr>
          </tbody>
        </table>
      </div>,

      <div id="lrn-section-7">
        <h2>Present Tense Verb Conjugation (Verben im Präsens)</h2>
        <p>
          German verbs change their ending based on the subject pronoun. Regular verbs follow a
          predictable pattern.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German marks the subject on the verb itself. English has lost most of this: only the
            third-person singular adds -s ("he runs"). German still marks every person with a
            different ending. This means German speakers can sometimes drop the subject pronoun in
            informal speech because the verb ending alone tells them who is acting. The cost is more
            memorization for learners, but the benefit is structural redundancy: even if you mishear
            the pronoun, the verb ending often saves the meaning.
          </p>
        </div>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The infinitive of "come" is <em>kommen</em>. The stem is <em>komm-</em>. What ending do
            you think goes with <em>ich</em>?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              <em>Ich komme</em>: the ich form always ends in <strong>-e</strong>. This is true for
              almost all regular verbs.
            </p>
          </details>
        </div>

        <h3>Regular Verb Endings</h3>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">COMPLETE EXAMPLE: kommen (to come)</span>
            <ul className="lrn-list">
              <li>ich komme: I come</li>
              <li>du kommst: you come (informal)</li>
              <li>er / sie / es kommt: he / she / it comes</li>
              <li>man kommt: one comes</li>
              <li>wir kommen: we come</li>
              <li>ihr kommt: you come (plural informal)</li>
              <li>sie kommen: they come</li>
              <li>Sie kommen: you come (formal)</li>
            </ul>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL: wohnen (to live/reside)</span>
            <ul className="lrn-list">
              <li>ich wohne: I live</li>
              <li>du wohn___: you live</li>
              <li>er / sie / es wohn___: he / she / it lives</li>
              <li>wir wohnen: we live</li>
              <li>ihr wohn___: you (plural) live</li>
              <li>sie / Sie wohnen: they / you (formal) live</li>
            </ul>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>
              Conjugate <strong>lernen</strong> (to learn) for all persons: ich, du, er/sie/es, wir,
              ihr, sie/Sie.
            </p>
          </div>
        </div>

        <h3>Standard Endings Table</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Pronoun</th>
              <th>Ending</th>
              <th>Example (kommen)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>-e</td>
              <td>komme</td>
            </tr>
            <tr>
              <td>du</td>
              <td>-st</td>
              <td>kommst</td>
            </tr>
            <tr>
              <td>er / sie / es / man</td>
              <td>-t</td>
              <td>kommt</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>-en</td>
              <td>kommen</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>-t</td>
              <td>kommt</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>-en</td>
              <td>kommen</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-callout lrn-warning">
          <span className="lrn-callout-label">Warning</span>
          <p>
            Verbs whose stem ends in <strong>-t</strong> or <strong>-d</strong> insert an extra{' '}
            <strong>-e-</strong> before the ending in du/er/ihr forms.
          </p>
          <p>
            Example: <strong>arbeiten</strong> → du arbeitest, er arbeitet, ihr arbeitet.
          </p>
          <p>This makes the word easier to pronounce: you cannot easily say "du arbeitst."</p>
        </div>

        <div className="lrn-callout lrn-warning">
          <span className="lrn-callout-label">Warning</span>
          <p>
            Verbs whose stem ends in <strong>-ß</strong> or <strong>-ss</strong>: the du form equals
            the er form.
          </p>
          <p>
            Example: <strong>heißen</strong> → du heißt, er heißt (both identical).
          </p>
          <p>The -ss/ß already ends in a sibilant, so no extra -t is added for du.</p>
        </div>

        <h3>Irregular Verbs: sein (to be)</h3>
        <p>
          The verb <em>sein</em> is highly irregular. You must memorize each form.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Pronoun</th>
              <th>sein</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>bin</td>
            </tr>
            <tr>
              <td>du</td>
              <td>bist</td>
            </tr>
            <tr>
              <td>er / sie / es / man</td>
              <td>ist</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>sind</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>seid</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>sind</td>
            </tr>
          </tbody>
        </table>

        <h3>Irregular Verbs: haben (to have)</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Pronoun</th>
              <th>haben</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>habe</td>
            </tr>
            <tr>
              <td>du</td>
              <td>hast</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>hat</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>haben</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>habt</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>haben</td>
            </tr>
          </tbody>
        </table>

        <h3>Stem-Vowel Changes: sprechen and lesen</h3>
        <p>Some verbs change their stem vowel in the du and er/sie forms.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Pronoun</th>
              <th>sprechen (e→i)</th>
              <th>lesen (e→ie)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>spreche</td>
              <td>lese</td>
            </tr>
            <tr>
              <td>du</td>
              <td>sprichst</td>
              <td>liest</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>spricht</td>
              <td>liest</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>sprechen</td>
              <td>lesen</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>sprecht</td>
              <td>lest</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>sprechen</td>
              <td>lesen</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why do wir/sie/Sie always use the infinitive stem (sprechen, lesen) with no vowel
            change?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The stem-vowel change only affects the singular du and er/sie/es forms. Plural
              subjects always use the infinitive stem. The wir and sie/Sie forms match the
              infinitive exactly: you never have to guess the plural.
            </p>
          </details>
        </div>
      </div>,

      <div id="lrn-section-8">
        <h2>Sentence Structure (Satzbau)</h2>
        <p>German sentences follow strict rules about where the verb goes.</p>
        <p>
          The most important rule:{' '}
          <strong>the verb is always at position II in a statement.</strong>
        </p>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            In English you say "I come from Germany." If you move "from Germany" to the front, what
            happens to the verb?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              In German, moving an element to position I forces the verb to stay at position II -
              and the subject moves to position III. So: <strong>Aus Deutschland komme ich.</strong>{' '}
              The verb always holds position II, no matter what comes first.
            </p>
          </details>
        </div>

        <h3>Declarative Sentences (Aussagesätze)</h3>
        <p>The verb always occupies the second position.</p>
        <p>Position I can be the subject, a time expression, a place, or anything else.</p>

        <div className="lrn-code-block">
          <div className="lrn-code-header">
            <span className="lrn-code-lang">Sentence Structure</span>
          </div>
          <pre className="lrn-code-content">{`Position I        | Position II | Position III+
Ich               | komme       | aus Deutschland.
Aus Deutschland   | komme       | ich.
Jetzt             | lerne       | ich Deutsch.`}</pre>
        </div>

        <h3>Question-Word Questions (W-Fragen)</h3>
        <p>These questions start with a question word (W-word).</p>
        <p>The verb still goes to position II: immediately after the question word.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Question word</th>
              <th>Meaning</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wie</td>
              <td>How / What (name)</td>
              <td>Wie heißen Sie?</td>
            </tr>
            <tr>
              <td>Was</td>
              <td>What</td>
              <td>Was sind Sie von Beruf?</td>
            </tr>
            <tr>
              <td>Wo</td>
              <td>Where (location)</td>
              <td>Wo wohnen Sie?</td>
            </tr>
            <tr>
              <td>Woher</td>
              <td>Where from</td>
              <td>Woher kommen Sie?</td>
            </tr>
            <tr>
              <td>Welche</td>
              <td>Which</td>
              <td>Welche Sprachen sprechen Sie?</td>
            </tr>
            <tr>
              <td>Wie alt</td>
              <td>How old</td>
              <td>Wie alt sind Sie?</td>
            </tr>
          </tbody>
        </table>

        <h3>Yes/No Questions (Ja-Nein-Fragen)</h3>
        <p>The verb moves to position I. There is no question word.</p>

        <div className="lrn-code-block">
          <div className="lrn-code-header">
            <span className="lrn-code-lang">Yes/No Questions</span>
          </div>
          <pre className="lrn-code-content">{`Position I (verb)  | Subject | Rest
Kommen             | Sie     | aus Deutschland?
Sprechen           | Sie     | Deutsch?
Sind               | Sie     | Lehrerin?`}</pre>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German verb-second (V2) word order is a defining feature of Germanic languages. English
            once had V2 too: you can still see it in formal questions: "Never have I seen" = verb
            second after "Never." German kept this rule for all statements. The logic is that the
            verb is the most important structural element of the sentence, so it always anchors
            position II as a reliable landmark for the listener.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            In "Aus Deutschland komme ich." the subject <em>ich</em> is at position III. Why is this
            still grammatically correct?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The German rule is verb-second, not subject-first. Position I can hold any element.
              The verb takes position II. The subject moves to whatever slot is left (often position
              III). This freedom lets German speakers emphasize different elements by fronting them.
              English would say "I come from Germany" only: German lets you front "Aus Deutschland"
              to stress origin.
            </p>
          </details>
        </div>
      </div>,

      <div id="lrn-section-9">
        <h2>The Noun Group: Articles and Possessives</h2>
        <p>
          German nouns have grammatical gender: masculine (<em>der</em>), feminine (<em>die</em>),
          or neuter (<em>das</em>). Learn the article with every noun: it tells you the gender.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            If "der Name" is masculine, what happens to the possessive "mein": does it change to
            match the gender?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. <strong>mein Name</strong> (masculine, no ending). But{' '}
              <strong>meine Mutter</strong> (feminine, adds -e). The possessive article changes its
              ending based on noun gender in the nominative case.
            </p>
          </details>
        </div>

        <h3>Definite Articles (Bestimmter Artikel)</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Gender</th>
              <th>Article</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maskulin</td>
              <td>der</td>
              <td>der Name, der Mann, der Vater</td>
            </tr>
            <tr>
              <td>Feminin</td>
              <td>die</td>
              <td>die Frau, die Mutter, die Tochter</td>
            </tr>
            <tr>
              <td>Neutrum</td>
              <td>das</td>
              <td>das Alter, das Kind</td>
            </tr>
            <tr>
              <td>Plural</td>
              <td>die</td>
              <td>die Kinder, die Eltern</td>
            </tr>
          </tbody>
        </table>

        <h3>Possessive Articles (Possessivartikel)</h3>
        <p>Possessive articles agree with the noun's gender (nominative case shown here).</p>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">COMPLETE EXAMPLE: mein/meine (my)</span>
            <ul className="lrn-list">
              <li>mein Name (maskulin): my name</li>
              <li>mein Vater (maskulin): my father</li>
              <li>meine Mutter (feminin): my mother</li>
              <li>meine Schwester (feminin): my sister</li>
              <li>mein Kind (neutrum): my child</li>
              <li>meine Kinder (plural): my children</li>
            </ul>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL: dein/deine (your, informal)</span>
            <ul className="lrn-list">
              <li>dein Name (maskulin): your name</li>
              <li>dein___ Mutter (feminin): your mother</li>
              <li>dein___ Bruder (maskulin): your brother</li>
              <li>dein___ Kinder (plural): your children</li>
            </ul>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>
              Write the correct form of <strong>sein/seine</strong> (his) for: Vater, Mutter, Kind,
              Kinder.
            </p>
          </div>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Pronoun</th>
              <th>Maskulin / Neutrum</th>
              <th>Feminin / Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich → my</td>
              <td>mein</td>
              <td>meine</td>
            </tr>
            <tr>
              <td>du → your (informal)</td>
              <td>dein</td>
              <td>deine</td>
            </tr>
            <tr>
              <td>er → his</td>
              <td>sein</td>
              <td>seine</td>
            </tr>
            <tr>
              <td>sie → her</td>
              <td>ihr</td>
              <td>ihre</td>
            </tr>
            <tr>
              <td>Sie → your (formal)</td>
              <td>Ihr</td>
              <td>Ihre</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German nouns carry grammatical gender even when no biological sex is involved.{' '}
            <em>Das Mädchen</em> (the girl) is grammatically neuter. <em>Der Tisch</em> (the table)
            is masculine. Gender here is a category of the noun, not the object. This is why you
            must always learn each noun together with its article: the article is the cleanest
            signal of gender, and gender controls the form of every word that agrees with the noun.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            "Mein Vater" has no ending on <em>mein</em>, but "meine Mutter" adds <em>-e</em>. Why
            does the same possessive change shape?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The possessive must agree with the gender of the noun it modifies. Vater is masculine,
              so <em>mein</em> stays bare (no ending). Mutter is feminine, so
              <em> mein</em> takes the feminine nominative ending <em>-e</em>: <em>meine</em>. The
              same rule applies to all <em>ein</em>-words (ein, kein, mein, dein, sein, ihr, unser,
              euer, Ihr).
            </p>
          </details>
        </div>
      </div>,

      <div id="lrn-section-10">
        <h2>Family, Hobbies, and Personal Profiles</h2>
        <p>This section covers family vocabulary, professions, and hobbies.</p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German has a single adverb <em>gern</em> for "like to do." English splits this into
            "like" + verb (I like to play). The German pattern is more compact: verb + gern. This
            works because <em>gern</em> attaches to the verb, not the object. So the same word works
            for "like reading" (lese gern), "like playing" (spiele gern), and "like listening" (höre
            gern). The comparative form <em>lieber</em> means "prefer to": same slot, stronger
            meaning.
          </p>
        </div>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            How do you say "I like playing tennis"? The German word for "gladly / like to" is{' '}
            <em>gern</em>. Where does it go in the sentence?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              <strong>Ich spiele gern Tennis.</strong> The adverb <em>gern</em> comes after the
              verb, before the object. It modifies the verb, not the noun.
            </p>
          </details>
        </div>

        <h3>Family Members</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der Mann</td>
              <td>husband / man</td>
            </tr>
            <tr>
              <td>die Frau</td>
              <td>wife / woman</td>
            </tr>
            <tr>
              <td>der Vater</td>
              <td>father</td>
            </tr>
            <tr>
              <td>die Mutter</td>
              <td>mother</td>
            </tr>
            <tr>
              <td>die Eltern</td>
              <td>parents (always plural)</td>
            </tr>
            <tr>
              <td>der Sohn</td>
              <td>son</td>
            </tr>
            <tr>
              <td>die Tochter</td>
              <td>daughter</td>
            </tr>
            <tr>
              <td>die Kinder</td>
              <td>children (always plural)</td>
            </tr>
            <tr>
              <td>der Bruder</td>
              <td>brother</td>
            </tr>
            <tr>
              <td>die Schwester</td>
              <td>sister</td>
            </tr>
            <tr>
              <td>die Geschwister</td>
              <td>siblings (always plural)</td>
            </tr>
            <tr>
              <td>die Nachbarin / der Nachbar</td>
              <td>female / male neighbour</td>
            </tr>
          </tbody>
        </table>

        <h3>Marital Status</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ledig</td>
              <td>single / unmarried</td>
            </tr>
            <tr>
              <td>verheiratet</td>
              <td>married</td>
            </tr>
            <tr>
              <td>geschieden</td>
              <td>divorced</td>
            </tr>
            <tr>
              <td>der Familienstand</td>
              <td>marital status</td>
            </tr>
          </tbody>
        </table>

        <h3>Hobbies (Hobbys)</h3>
        <p>
          The Behrens family uses five hobbies you need to know before reading the text below:{' '}
          <em>Kriminalromane lesen</em> (read crime novels), <em>Fußball spielen</em> (play
          football), <em>im Chor singen</em> (sing in a choir), <em>Gitarre spielen</em> (play
          guitar), <em>Computerprogramme schreiben</em> (write computer programs). The full hobby
          vocabulary appears in Section 7 (Freizeit).
        </p>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Tip</span>
          <p>
            <strong>lieber</strong> is the comparative form of <em>gern</em>. Use it to express
            preference: <strong>Wir spielen lieber Volleyball.</strong> (We prefer playing
            volleyball.)
          </p>
        </div>

        <h3>The Behrens Family</h3>
        <p>This is a sample text that combines professions, hobbies, and family vocabulary.</p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Hans Behrens</span>
            <p className="lrn-step-content">
              Hans ist Chemiker. Er arbeitet bei BASF in Ludwigshafen.
            </p>
            <p className="lrn-step-content">Hans is a chemist. He works at BASF in Ludwigshafen.</p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Susanne Behrens</span>
            <p className="lrn-step-content">
              Susanne ist Managerin. Sie liest gern Kriminalromane.
            </p>
            <p className="lrn-step-content">
              Susanne is a manager. She likes reading crime novels.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Maximilian (4 years old)</span>
            <p className="lrn-step-content">Maximilian spielt gern Fußball.</p>
            <p className="lrn-step-content">Maximilian likes playing football.</p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Marie (8 years old)</span>
            <p className="lrn-step-content">Marie singt gern im Chor.</p>
            <p className="lrn-step-content">Marie likes singing in the choir.</p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Marta (sister)</span>
            <p className="lrn-step-content">
              Marta ist Mathematiklehrerin. Sie spielt gern Gitarre.
            </p>
            <p className="lrn-step-content">Marta is a maths teacher. She likes playing guitar.</p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Martin (brother)</span>
            <p className="lrn-step-content">
              Martin studiert in Bremen. Er schreibt gern Computerprogramme.
            </p>
            <p className="lrn-step-content">
              Martin studies in Bremen. He likes writing computer programs.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            In "Er arbeitet bei BASF", why is "arbeitet" used instead of "arbeit"? What rule
            explains the extra -e-?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The verb <em>arbeiten</em> has a stem ending in <strong>-t</strong>. German inserts an
              extra -e- before the -t ending in the er/sie/es form to make it pronounceable:{' '}
              <em>arbeit</em> + <em>-et</em> = <em>arbeitet</em>. Without the -e-, you would get
              "arbeitt": impossible to say clearly. This rule applies to all verbs with stems ending
              in -t or -d (also: <em>reden</em> → er redet).
            </p>
          </details>
        </div>
      </div>,

      <div id="lrn-section-11">
        <h2>Sample Dialogue: Conrad and Serena Meet</h2>
        <p>Conrad Kremer meets Serena Rosso for the first time.</p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Conrad and Serena have just met. Will they use <em>du</em> or <em>Sie</em> with each
            other?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              They will use <strong>Sie</strong>. German strangers default to formal Sie. Switching
              to du happens only after one party offers it (often called <em>das Du anbieten</em>).
              Watch the dialogue: every question uses Sie verb forms (heißen Sie, kommen Sie, wohnen
              Sie).
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The Sie/du split protects social distance. Adults who do not know each other use Sie by
            default. This applies in shops, offices, and public spaces. Friends, family, and
            children use du. The split mirrors French (vous/tu) and Spanish (usted/tú). Mixing them
            up is not just a grammar error: it can read as too pushy (du to a stranger) or too cold
            (Sie to a friend). Defaulting to Sie is the safe choice for new contacts.
          </p>
        </div>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Conrad</span>
            <p className="lrn-step-content">
              Guten Tag! Ich heiße Conrad Kremer. Wie heißen Sie?: Hello! My name is Conrad Kremer.
              What is your name?
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Serena</span>
            <p className="lrn-step-content">
              Ich heiße Serena Rosso. Ich komme aus Italien, aus Mailand.: My name is Serena Rosso.
              I come from Italy, from Milan.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Conrad</span>
            <p className="lrn-step-content">Wo wohnen Sie jetzt?: Where do you live now?</p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Serena</span>
            <p className="lrn-step-content">
              Ich wohne in Berlin. Ich studiere Chemie.: I live in Berlin. I study chemistry.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Conrad says "Wo wohnen Sie jetzt?": The verb is at position II and "jetzt" (now) comes
            at the end. What would change if Conrad put "jetzt" at the start?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              In a W-question, the question word must occupy position I. <em>Jetzt</em> cannot also
              take position I, so you cannot front it in a W-question. In a declarative sentence it
              works fine: <strong>Jetzt wohnt sie in Berlin.</strong> (Now she lives in Berlin.) The
              verb always stays at position II, regardless of what moves to position I.
            </p>
          </details>
        </div>

        <h2>Sample Profile: Conrad Müller</h2>
        <p>Conrad Müller introduces himself in a short monologue.</p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Conrad Müller</span>
            <p className="lrn-step-content">
              Ich heiße Conrad Müller. Ich bin 25 Jahre alt. Ich studiere Medizin in Berlin. Ich
              spreche ein bisschen Englisch.
            </p>
            <p className="lrn-step-content">
              My name is Conrad Müller. I am 25 years old. I study medicine in Berlin. I speak a
              little English.
            </p>
          </div>
        </div>

        <h2>Personal Information Form (A40)</h2>
        <p>Use this partner interview checklist to ask about and report on someone's details.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>German phrase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Wie heißen Sie? / Wie heißt du?</td>
            </tr>
            <tr>
              <td>Beruf</td>
              <td>Was sind Sie von Beruf?</td>
            </tr>
            <tr>
              <td>Wohnort</td>
              <td>Wo wohnen Sie?</td>
            </tr>
            <tr>
              <td>Telefonnummer</td>
              <td>Welche Telefonnummer haben Sie?</td>
            </tr>
            <tr>
              <td>E-Mail-Adresse</td>
              <td>Wie ist Ihre E-Mail-Adresse?</td>
            </tr>
            <tr>
              <td>Sprachen</td>
              <td>Welche Sprachen sprechen Sie?</td>
            </tr>
            <tr>
              <td>Hobbys</td>
              <td>Was sind Ihre Hobbys?</td>
            </tr>
            <tr>
              <td>Familienstand</td>
              <td>Sind Sie ledig / verheiratet / geschieden?</td>
            </tr>
            <tr>
              <td>Kinder</td>
              <td>Haben Sie Kinder?</td>
            </tr>
          </tbody>
        </table>
      </div>,

      <div id="lrn-section-12">
        <h2>German-Speaking Countries (B3)</h2>
        <p>
          Three countries are officially German-speaking: Germany, Austria, and Switzerland. Each
          has a different language situation.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You know Germany has 16 Bundesländer. How many do you think Austria has? Switzerland
            uses a different word: what could it be?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Austria has <strong>9 Bundesländer</strong>. Switzerland uses <em>Kantone</em>{' '}
              (cantons) and has <strong>26</strong> of them. Each canton has its own constitution
              and tax laws: Switzerland is more decentralized than Germany or Austria.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Switzerland has four official languages because the country was built from independent
            cantons that already spoke different languages: German, French, Italian, and Romansh.
            Instead of forcing one common language, the Swiss federal system protects all four.
            Austria has one official language (German) but three regional languages (Croatian,
            Slovenian, Hungarian) because of historical Habsburg borders. Germany has one official
            language because the modern German state formed from already German-speaking regions in
            1871.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does Switzerland keep the article <em>die</em> (die Schweiz) but Germany and Austria
            do not have one?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              <em>Schweiz</em> is a feminine common noun meaning "confederacy" or "union." It was a
              real word before it became a country name, so it kept its article.
              <em> Deutschland</em> and <em>Österreich</em> are compound proper nouns built from{' '}
              <em>Land</em> (country) and <em>Reich</em> (realm): they were named as single fixed
              forms and dropped any leading article.
            </p>
          </details>
        </div>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Deutschland (Germany)</span>
            <p className="lrn-step-content">
              82.4 million inhabitants. 16 federal states (Bundesländer). Capital: Berlin. Largest
              cities: Berlin, Hamburg, Munich. Unified as a nation-state in 1871. Reunification in
              1990.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Österreich (Austria)</span>
            <p className="lrn-step-content">
              8.2 million inhabitants. 9 Bundesländer. Capital: Vienna (1.5 million). One official
              language: German. Three regional languages: Croatian, Slovenian, Hungarian. Republic
              since 1918.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">die Schweiz (Switzerland)</span>
            <p className="lrn-step-content">
              Over 800 years old. 26 cantons. 7.5 million inhabitants. Capital: Bern. Four official
              languages: approx. 70% German, 20% French, 10% Italian, 1% Romansh.
            </p>
          </div>
        </div>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Tip</span>
          <p>Germany has 16 Bundesländer. Berlin has approximately 3.5 million inhabitants.</p>
        </div>

        <h2>German Car License Plates</h2>
        <p>The first letters on a German license plate show the city or region.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Letters</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B</td>
              <td>Berlin</td>
            </tr>
            <tr>
              <td>HH</td>
              <td>Hamburg (Hansestadt Hamburg)</td>
            </tr>
            <tr>
              <td>M</td>
              <td>München (Munich)</td>
            </tr>
            <tr>
              <td>L</td>
              <td>Leipzig</td>
            </tr>
            <tr>
              <td>K</td>
              <td>Köln (Cologne)</td>
            </tr>
            <tr>
              <td>F</td>
              <td>Frankfurt</td>
            </tr>
            <tr>
              <td>S</td>
              <td>Stuttgart</td>
            </tr>
            <tr>
              <td>H</td>
              <td>Hannover (Hanover)</td>
            </tr>
            <tr>
              <td>ROK</td>
              <td>Rostock</td>
            </tr>
            <tr>
              <td>BN</td>
              <td>Bonn</td>
            </tr>
            <tr>
              <td>EF</td>
              <td>Erfurt</td>
            </tr>
          </tbody>
        </table>
      </div>,
      <div id="lrn-section-13">
        <h2>Erste Kontakte: First Contacts</h2>
        <p>
          After this chapter you will be able to: name objects in a German office, describe them
          with adjectives, ask about prices, report broken equipment, say what you can and cannot
          do, describe parts of a university campus, talk about hobbies and weekly plans, and use
          the modal verb können in real conversations.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            German nouns have three genders: masculine (der), feminine (die), and neuter (das). When
            you learn a new noun, what do you think is the safest strategy?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Always learn the noun together with its article. Never learn just the word alone. The
              article is part of the noun, not an optional extra.
            </p>
          </details>
        </div>
      </div>,

      <div id="lrn-section-14">
        <h2>Im Büro: In the Office</h2>
        <p>
          When you start a new job in Germany, you need to name and describe the objects around you.
          This section gives you the vocabulary for a typical German office.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            German has many compound nouns like Bürostuhl (office chair) and Schreibtisch (desk).
            What do you think determines the article (der/die/das) of a compound noun?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The last part of the compound determines the article. der Stuhl makes der Bürostuhl.
              der Tisch makes der Schreibtisch. Always look at the final word to find the gender.
            </p>
          </details>
        </div>

        <h3>Office Objects (Bürogegenstände)</h3>
        <p>
          The dialogue opens with Frau Herzberg welcoming Herr Heinemann: "Herzlich willkommen! Hier
          ist Ihr Büro." She shows him the room and offers coffee later. These are the objects in a
          typical German office.
        </p>

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
              <td>Telefon</td>
              <td>das</td>
              <td>telephone</td>
            </tr>
            <tr>
              <td>Regal</td>
              <td>das</td>
              <td>shelf / bookcase</td>
            </tr>
            <tr>
              <td>Lampe</td>
              <td>die</td>
              <td>lamp</td>
            </tr>
            <tr>
              <td>Drucker</td>
              <td>der</td>
              <td>printer</td>
            </tr>
            <tr>
              <td>Stuhl</td>
              <td>der</td>
              <td>chair</td>
            </tr>
            <tr>
              <td>Schreibtisch</td>
              <td>der</td>
              <td>desk</td>
            </tr>
            <tr>
              <td>Computer</td>
              <td>der</td>
              <td>computer</td>
            </tr>
            <tr>
              <td>Maus</td>
              <td>die</td>
              <td>mouse (computer)</td>
            </tr>
            <tr>
              <td>Wörterbuch</td>
              <td>das</td>
              <td>dictionary</td>
            </tr>
            <tr>
              <td>Buch</td>
              <td>das</td>
              <td>book</td>
            </tr>
            <tr>
              <td>Brille</td>
              <td>die</td>
              <td>glasses / spectacles</td>
            </tr>
            <tr>
              <td>Terminkalender</td>
              <td>der</td>
              <td>planner / appointments calendar</td>
            </tr>
            <tr>
              <td>Bleistift</td>
              <td>der</td>
              <td>pencil</td>
            </tr>
            <tr>
              <td>Kugelschreiber</td>
              <td>der</td>
              <td>ballpoint pen</td>
            </tr>
            <tr>
              <td>Kaffeemaschine</td>
              <td>die</td>
              <td>coffee machine</td>
            </tr>
            <tr>
              <td>Kopierer / Kopiergerät</td>
              <td>der / das</td>
              <td>photocopier</td>
            </tr>
            <tr>
              <td>Faxgerät</td>
              <td>das</td>
              <td>fax machine</td>
            </tr>
            <tr>
              <td>Fotos</td>
              <td>die (pl.)</td>
              <td>photos</td>
            </tr>
            <tr>
              <td>Dokumente</td>
              <td>die (pl.)</td>
              <td>documents</td>
            </tr>
            <tr>
              <td>Bildschirm</td>
              <td>der</td>
              <td>screen / monitor</td>
            </tr>
            <tr>
              <td>Bürolampe</td>
              <td>die</td>
              <td>office lamp</td>
            </tr>
            <tr>
              <td>Laptop</td>
              <td>der</td>
              <td>laptop</td>
            </tr>
            <tr>
              <td>Computertisch</td>
              <td>der</td>
              <td>computer desk</td>
            </tr>
            <tr>
              <td>Bürostuhl</td>
              <td>der</td>
              <td>office chair</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Many compound nouns (Komposita) in German get their article from the last part of the
            word. <strong>der Stuhl</strong> (chair) + <strong>Büro-</strong> ={' '}
            <strong>der Bürostuhl</strong>. The first part tells you what kind; the last part gives
            the gender.
          </p>
        </div>
      </div>,

      <div id="lrn-section-15">
        <h2>Die Nomengruppe: The Noun Group</h2>
        <p>
          Every German noun travels with an article. The article changes depending on gender and
          grammatical situation. This section covers the three article types you need right now:
          definite (the), indefinite (a/an), and negative (no/not a).
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            English has one word for "a" (a/an). German has three. What do you think determines
            which form to use?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The grammatical gender of the noun determines the form. Masculine nouns use
              <strong> ein</strong>, feminine nouns use <strong>eine</strong>, and neuter nouns use{' '}
              <strong>ein</strong> again. Plural nouns use no article with ein(e), but use
              <strong> keine</strong> for negation.
            </p>
          </details>
        </div>

        <h3>The Definite Article (der bestimmte Artikel)</h3>
        <p>
          The definite article means "the." In German it changes with gender. In the nominative case
          (subject position), you use der, die, or das.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Gender</th>
              <th>Article</th>
              <th>Example</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>maskulin</td>
              <td>der</td>
              <td>der Computer</td>
              <td>the computer</td>
            </tr>
            <tr>
              <td>feminin</td>
              <td>die</td>
              <td>die Lampe</td>
              <td>the lamp</td>
            </tr>
            <tr>
              <td>neutrum</td>
              <td>das</td>
              <td>das Telefon</td>
              <td>the telephone</td>
            </tr>
            <tr>
              <td>Plural</td>
              <td>die</td>
              <td>die Bücher</td>
              <td>the books</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does plural always use <em>die</em>, regardless of gender?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              German neutralises gender in the plural. Once a noun becomes plural, its original
              gender no longer matters for the article. All plurals take <strong>die</strong>.
            </p>
          </details>
        </div>

        <h3>Gender Recognition Rules</h3>
        <p>
          You cannot always guess the gender of a noun, but some word endings are reliable signals.
        </p>
        <ul className="lrn-list">
          <li>
            Words ending in <strong>-ung</strong> are always feminine (die): die Zeitung, die
            Verwaltung.
          </li>
          <li>
            Many words ending in <strong>-e</strong> are feminine (die): die Kantine, die
            Sporthalle.
          </li>
          <li>All other nouns: memorise the article as part of the word.</li>
        </ul>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The <strong>-ung</strong> rule works because this suffix creates abstract nouns from
            verbs in a systematic way. German borrowed the pattern from Old High German, and it has
            been consistent ever since. If a word ends in -ung, it is <em>always</em> die. No
            exceptions.
          </p>
        </div>

        <h3>The ein(e) / kein(e) / mein(e) Paradigm</h3>
        <p>
          The indefinite article (ein/eine), the negative article (kein/keine), and possessive
          articles (mein/deine etc.) all share the same endings. Learn the pattern once and it works
          for all three.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>maskulin</th>
              <th>feminin</th>
              <th>neutrum</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Indefinit (a/an)</td>
              <td>ein</td>
              <td>eine</td>
              <td>ein</td>
              <td>none</td>
            </tr>
            <tr>
              <td>Negativ (no/not a)</td>
              <td>kein</td>
              <td>keine</td>
              <td>kein</td>
              <td>keine</td>
            </tr>
            <tr>
              <td>Possessiv (my)</td>
              <td>mein</td>
              <td>meine</td>
              <td>mein</td>
              <td>meine</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            The masculine and neuter forms look the same (ein / kein / mein). Why does the feminine
            form add an -e?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Germanic languages historically marked feminine nouns with a distinct ending. The -e
              on <em>eine / keine / meine</em> is the surviving trace of that feminine marker.
              Masculine and neuter collapsed to the same form in the nominative, but feminine kept
              its own shape.
            </p>
          </details>
        </div>

        <p>
          Examples in context: "Hier ist <strong>ein</strong> Drucker." (There is a printer here.)
          "Hier ist <strong>kein</strong> Drucker." (There is no printer here.) "Das ist
          <strong> mein</strong> Terminkalender." (That is my planner.)
        </p>
      </div>,

      <div id="lrn-section-16">
        <h2>Adjectives: Describing Objects</h2>
        <p>
          German adjectives describe nouns. Where you place the adjective in a sentence changes its
          form. This section shows you both positions.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            In English, "The printer is new" and "a new printer" both use the same adjective. What
            do you think happens to adjectives in German in these two positions?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              In German, the adjective after the verb (predicate position) stays unchanged. The
              adjective before the noun (attributive position) adds an ending that signals the
              noun's gender.
            </p>
          </details>
        </div>

        <h3>Adjective Vocabulary</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
              <th>Opposite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>teuer</td>
              <td>expensive</td>
              <td>billig (cheap)</td>
            </tr>
            <tr>
              <td>preiswert</td>
              <td>good value</td>
              <td>none</td>
            </tr>
            <tr>
              <td>schön</td>
              <td>beautiful / nice</td>
              <td>hässlich (ugly)</td>
            </tr>
            <tr>
              <td>modern</td>
              <td>modern</td>
              <td>unmodern (old-fashioned)</td>
            </tr>
            <tr>
              <td>praktisch</td>
              <td>practical</td>
              <td>unpraktisch (impractical)</td>
            </tr>
            <tr>
              <td>neu</td>
              <td>new</td>
              <td>alt (old)</td>
            </tr>
            <tr>
              <td>klein</td>
              <td>small</td>
              <td>groß (large / big)</td>
            </tr>
            <tr>
              <td>bequem</td>
              <td>comfortable</td>
              <td>unbequem (uncomfortable)</td>
            </tr>
            <tr>
              <td>hell</td>
              <td>bright / light</td>
              <td>dunkel (dark)</td>
            </tr>
            <tr>
              <td>interessant</td>
              <td>interesting</td>
              <td>langweilig (boring)</td>
            </tr>
          </tbody>
        </table>

        <h3>Predicate vs. Attributive Position</h3>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Predicate (after verb)</span>
            <p>
              The adjective comes <strong>after</strong> the verb. No ending added.
            </p>
            <p>
              Der Drucker ist <strong>neu</strong>.
            </p>
            <p>
              Die Lampe ist <strong>alt</strong>.
            </p>
            <p>
              Das Telefon ist <strong>teuer</strong>.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Attributive (before noun)</span>
            <p>
              The adjective comes <strong>before</strong> the noun. An ending is added.
            </p>
            <p>
              Das ist ein <strong>neuer</strong> Drucker. (-er for maskulin)
            </p>
            <p>
              Es ist eine <strong>alte</strong> Lampe. (-e for feminin)
            </p>
            <p>
              Das ist ein <strong>teures</strong> Telefon. (-es for neutrum)
            </p>
          </div>
        </div>

        <h3>Adjective Endings after ein(e): Nominative</h3>
        <p>
          When an adjective follows ein(e) or kein(e) and comes before the noun, it takes one of
          these endings in the nominative case.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Gender</th>
              <th>Article + Adjective + Noun</th>
              <th>Ending</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>maskulin</td>
              <td>
                ein <strong>neuer</strong> Drucker
              </td>
              <td>-er</td>
            </tr>
            <tr>
              <td>feminin</td>
              <td>
                eine <strong>neue</strong> Lampe
              </td>
              <td>-e</td>
            </tr>
            <tr>
              <td>neutrum</td>
              <td>
                ein <strong>neues</strong> Telefon
              </td>
              <td>-es</td>
            </tr>
            <tr>
              <td>Plural</td>
              <td>
                keine <strong>neuen</strong> Bücher
              </td>
              <td>-en</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The noun group must always show gender somewhere. The definite article (der/die/das)
            already shows gender clearly, so adjectives after it take a weak ending (-e or -en). The
            indefinite article ein gives no signal in masculine and neuter, so the adjective steps
            in and carries the gender marker itself. These are called strong endings: -er for
            masculine, -es for neuter. German calls this rule Monoflexion: only one element in the
            noun group carries the gender signal at a time.
          </p>
        </div>

        <h3>Probleme im Büro: Problems in the Office</h3>
        <p>
          In the second dialogue, Herr Heinemann reports that his printer is broken. Frau Herzberg
          responds and goes to find help. These phrases cover common office problems.
        </p>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Mein Drucker ist kaputt.</span>
          <div className="lrn-definition-desc">
            <p>My printer is broken.</p>
            <p>
              Use this pattern: <strong>Mein/Meine + noun + ist kaputt.</strong>
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Das funktioniert nicht. / Das geht nicht.</span>
          <div className="lrn-definition-desc">
            <p>It doesn't work.</p>
            <p>Use either phrase to report that something has stopped working.</p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Ich kann nicht drucken.</span>
          <div className="lrn-definition-desc">
            <p>I cannot print.</p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Was kostet …?</span>
          <div className="lrn-definition-desc">
            <p>How much does … cost?</p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Das ist billig. / Das ist teuer.</span>
          <div className="lrn-definition-desc">
            <p>That is cheap. / That is expensive.</p>
          </div>
        </div>
      </div>,

      <div id="lrn-section-17">
        <h2>Die Negation: Saying No</h2>
        <p>
          German has two main tools for negation. Which one you use depends on what you are
          negating. This is one of the most important rules in the chapter.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You want to say "There is no printer here" and "I do not sing." Do you think German uses
            the same word for both?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              No. German uses <strong>kein/keine</strong> to negate nouns (replacing ein/eine). It
              uses <strong>nicht</strong> to negate verbs and adjectives.
            </p>
          </details>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">kein/keine: negates nouns</span>
            <p>Replaces ein/eine. Follows the same endings as ein.</p>
            <p>
              Hier ist <strong>kein</strong> Drucker. (no printer)
            </p>
            <p>
              Das ist <strong>keine</strong> Lampe. (not a lamp)
            </p>
            <p>
              <strong>Keine</strong> Bücher hier. (no books)
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">nicht: negates verbs and adjectives</span>
            <p>Placed before adjectives. Placed at or near the end with verbs.</p>
            <p>
              Ich singe <strong>nicht</strong>. (I don't sing)
            </p>
            <p>
              Ich kann <strong>nicht</strong> singen. (I cannot sing)
            </p>
            <p>
              Der Stuhl ist <strong>nicht</strong> bequem. (not comfortable)
            </p>
          </div>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            <strong>kein</strong> is the negative form of <strong>ein</strong>. Just as English says
            "a printer" but "no printer" (not "not a printer"), German says <em>ein Drucker</em>
            but <em>kein Drucker</em>. The word <strong>nicht</strong> works like English "not" and
            attaches to verbs and adjectives. The two systems never mix: you never say "kein singe"
            or "nicht Drucker."
          </p>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>What to negate</th>
              <th>Tool</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Noun (with ein/eine)</td>
              <td>kein / keine</td>
              <td>kein Drucker, keine Lampe</td>
            </tr>
            <tr>
              <td>Verb</td>
              <td>nicht</td>
              <td>Ich drucke nicht. / Ich kann nicht drucken.</td>
            </tr>
            <tr>
              <td>Adjective</td>
              <td>nicht</td>
              <td>nicht gut singen, nicht bequem</td>
            </tr>
          </tbody>
        </table>
      </div>,

      <div id="lrn-section-18">
        <h2>Das Modalverb können: The Modal Verb Can</h2>
        <p>
          The modal verb <strong>können</strong> expresses ability or possibility. It is one of the
          most useful verbs in German. Its special feature is the "sentence bracket" (Satzklammer):
          können sits in position II and the main verb goes to the very end.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            In English, "I can swim" and "Here you can read books" both put "can" right before the
            main verb. What might German do differently with word order?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              German puts <strong>können</strong> in the second position in the sentence. The main
              verb (infinitive) moves to the very end. The rest of the sentence fills the space in
              between. This creates a "bracket" around the middle of the sentence.
            </p>
          </details>
        </div>

        <h3>Conjugation of können</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>können</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>kann</td>
            </tr>
            <tr>
              <td>du</td>
              <td>kannst</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>kann</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>können</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>könnt</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>können</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Ich and er/sie/es both use <strong>kann</strong> (no ending). Why might modal verbs
            behave differently from regular verbs?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Modal verbs in German (können, müssen, dürfen, sollen, wollen, mögen) historically had
              different origins. In the singular, they lost their personal endings, leaving the bare
              stem. So ich <em>kann</em> = er <em>kann</em>, with no -e or -t added. This is a
              regular pattern across all German modal verbs.
            </p>
          </details>
        </div>

        <h3>The Sentence Bracket (Satzklammer)</h3>
        <p>
          With <strong>können</strong>, the conjugated verb locks into position II. The infinitive
          moves to the very end of the clause. Everything else fills the middle.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Position I</th>
              <th>Position II (kann)</th>
              <th>Middle</th>
              <th>End (infinitive)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ich</td>
              <td>kann</td>
              <td>sehr gut</td>
              <td>schwimmen.</td>
            </tr>
            <tr>
              <td>Hier</td>
              <td>kann</td>
              <td>man Bücher</td>
              <td>lesen.</td>
            </tr>
            <tr>
              <td>Ich</td>
              <td>kann</td>
              <td>nicht</td>
              <td>drucken.</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German is a "verb-second" language. The finite (conjugated) verb must always sit in
            position II. When you add a modal, it takes that position and the main verb cannot also
            sit there. German solves this by pushing the main verb to the very end. This creates the
            bracket structure: <em>kann ... schwimmen</em>, <em>kann ... lesen</em>.
          </p>
        </div>

        <h3>Classroom Language (Fragen im Sprachkurs)</h3>
        <p>
          These three phrases use <strong>können</strong>. You will hear them in every German class.
        </p>

        <ul className="lrn-list">
          <li>
            <strong>Können Sie das bitte wiederholen?</strong>: Can you please repeat that?
          </li>
          <li>
            <strong>Können Sie das bitte noch einmal erklären?</strong>: Can you please explain that
            again?
          </li>
          <li>
            <strong>Was bedeutet das</strong>: What does that mean?
          </li>
        </ul>
      </div>,

      <div id="lrn-section-19">
        <h2>An der Universität: At the University</h2>
        <p>
          This section covers the departments of a German university campus. You learn to say what
          you can do in each place. This section also covers how stress falls in German words and
          compounds.
        </p>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">When to use this</span>
          <p>
            Use this vocabulary when asking for directions on a German campus, when explaining where
            you work or study, and when telling someone what activities a place offers.
          </p>
        </div>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Many of these university words end in -ung, -e, or -ik (Verwaltung, Mensa, Bibliothek).
            What pattern do you think the article follows?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Most are feminine (die). The endings -ung, -e, and -ik nearly always signal feminine
              gender. Sekretariat and Sprachenzentrum are neuter (das) because of their -at and
              -zentrum endings.
            </p>
          </details>
        </div>

        <h3>University Departments (Abteilungen)</h3>

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
              <td>Verwaltung</td>
              <td>die</td>
              <td>administration</td>
            </tr>
            <tr>
              <td>Kantine</td>
              <td>die</td>
              <td>canteen (for staff)</td>
            </tr>
            <tr>
              <td>Mensa</td>
              <td>die</td>
              <td>student cafeteria</td>
            </tr>
            <tr>
              <td>Cafeteria</td>
              <td>die</td>
              <td>cafeteria</td>
            </tr>
            <tr>
              <td>Bibliothek</td>
              <td>die</td>
              <td>library</td>
            </tr>
            <tr>
              <td>Sekretariat</td>
              <td>das</td>
              <td>secretary's office</td>
            </tr>
            <tr>
              <td>Sporthalle</td>
              <td>die</td>
              <td>sports hall / gymnasium</td>
            </tr>
            <tr>
              <td>Sprachenzentrum</td>
              <td>das</td>
              <td>language centre</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Culture Note</span>
          <p>
            German universities have both a <strong>Mensa</strong> (subsidised cafeteria for
            students) and a <strong>Kantine</strong> (staff canteen). These are separate. Students
            eat in the Mensa; staff eat in the Kantine.
          </p>
        </div>

        <h3>Saying What You Can Do in Each Place</h3>
        <p>
          Combine the university vocabulary with <strong>können</strong> and <strong>man</strong>
          (one / you in general) to describe what activities are available.
        </p>

        <ul className="lrn-list">
          <li>
            Das ist die Bibliothek. Hier <strong>kann man</strong> Bücher <strong>lesen</strong>.
          </li>
          <li>
            Das ist die Mensa. Hier <strong>können</strong> Studenten etwas <strong>essen</strong>.
          </li>
          <li>
            Das ist das Sekretariat. Hier <strong>kann man</strong> Informationen{' '}
            <strong>bekommen</strong>.
          </li>
        </ul>

        <h3>Word Stress (Wortakzent)</h3>
        <p>
          German word stress follows clear rules. These rules also tell you how to say compound
          nouns correctly.
        </p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Basic Rule (Grundregel)</span>
            <p className="lrn-step-content">
              Stress the first syllable. KAF-fee, WÖR-ter-buch, AR-beits-tag.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Compound Nouns (Komposita)</span>
            <p className="lrn-step-content">
              Stress the first part of the compound. BÜ-ro-stuhl (not büro-STUHL), SPORT-halle,
              SPRACHEN-zentrum.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Foreign Words (Fremdwörter)</span>
            <p className="lrn-step-content">
              Stress often falls on the last syllable. Tele-FON, Kom-pu-TER, Uni-ver-si-TÄT.
            </p>
          </div>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Native German words follow a strong-first stress pattern that goes back to the oldest
            Germanic languages. Foreign words keep the stress they had in their source language:
            Telefon comes from Greek with stress on the last syllable, Computer from English with a
            shifted stress. Compound nouns join two native words and keep the first-stress rule on
            the leading element.
          </p>
        </div>
      </div>,

      <div id="lrn-section-20">
        <h2>Freizeit: Free Time and Hobbies</h2>
        <p>
          Section 3 introduced hobbies through the Behrens family. This section goes wider: the full
          survey of German leisure activities. It adds two tools: <strong>gern</strong> to say you
          like doing something, and <strong>fahren</strong> to talk about travel and sport. You also
          see how <strong>können</strong> connects to hobbies.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            German surveys show that visiting friends is the top German hobby. What other activities
            do you think appear in the top twelve?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The twelve most popular German hobbies are: visiting friends, driving, learning
              foreign languages, hiking, cooking, surfing the internet, reading, drinking beer,
              listening to music, playing football, taking photos, and collecting euro coins.
            </p>
          </details>
        </div>

        <h3>Hobby Vocabulary</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German phrase</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Freunde besuchen</td>
              <td>visit friends</td>
            </tr>
            <tr>
              <td>Auto fahren</td>
              <td>drive / go by car</td>
            </tr>
            <tr>
              <td>Fremdsprachen lernen</td>
              <td>learn foreign languages</td>
            </tr>
            <tr>
              <td>wandern</td>
              <td>hike</td>
            </tr>
            <tr>
              <td>kochen</td>
              <td>cook</td>
            </tr>
            <tr>
              <td>im Internet surfen</td>
              <td>surf the internet</td>
            </tr>
            <tr>
              <td>lesen</td>
              <td>read</td>
            </tr>
            <tr>
              <td>Bier trinken</td>
              <td>drink beer</td>
            </tr>
            <tr>
              <td>Musik hören</td>
              <td>listen to music</td>
            </tr>
            <tr>
              <td>Fußball spielen</td>
              <td>play football</td>
            </tr>
            <tr>
              <td>fotografieren</td>
              <td>take photos</td>
            </tr>
            <tr>
              <td>Euromünzen sammeln</td>
              <td>collect euro coins</td>
            </tr>
            <tr>
              <td>Gitarre spielen</td>
              <td>play guitar</td>
            </tr>
            <tr>
              <td>Klavier spielen</td>
              <td>play piano</td>
            </tr>
            <tr>
              <td>Volleyball spielen</td>
              <td>play volleyball</td>
            </tr>
            <tr>
              <td>singen</td>
              <td>sing</td>
            </tr>
            <tr>
              <td>rauchen</td>
              <td>smoke</td>
            </tr>
            <tr>
              <td>Englisch sprechen</td>
              <td>speak English</td>
            </tr>
            <tr>
              <td>Spanisch sprechen</td>
              <td>speak Spanish</td>
            </tr>
            <tr>
              <td>reisen</td>
              <td>travel</td>
            </tr>
            <tr>
              <td>tanzen</td>
              <td>dance</td>
            </tr>
            <tr>
              <td>Salsa tanzen</td>
              <td>dance salsa</td>
            </tr>
            <tr>
              <td>Tango tanzen</td>
              <td>dance tango</td>
            </tr>
            <tr>
              <td>Briefmarken sammeln</td>
              <td>collect stamps</td>
            </tr>
            <tr>
              <td>Saxofon spielen</td>
              <td>play saxophone</td>
            </tr>
            <tr>
              <td>Trompete spielen</td>
              <td>play trumpet</td>
            </tr>
            <tr>
              <td>Schach spielen</td>
              <td>play chess</td>
            </tr>
            <tr>
              <td>Motorrad fahren</td>
              <td>ride a motorbike</td>
            </tr>
            <tr>
              <td>Ski fahren</td>
              <td>ski</td>
            </tr>
            <tr>
              <td>Golf spielen</td>
              <td>play golf</td>
            </tr>
            <tr>
              <td>Tennis spielen</td>
              <td>play tennis</td>
            </tr>
          </tbody>
        </table>

        <h3>gern and lieber: Expressing Preference</h3>
        <p>These two adverbs attach to verbs to show how much you like an activity.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Word</th>
              <th>Meaning</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>gern</td>
              <td>like to / gladly</td>
              <td>Ich fahre gern Auto. (I like driving.)</td>
            </tr>
            <tr>
              <td>nicht gern</td>
              <td>don't like to</td>
              <td>Ich fahre nicht gern Auto. (I don't like driving.)</td>
            </tr>
            <tr>
              <td>lieber</td>
              <td>prefer to / rather</td>
              <td>Ich spiele lieber Tennis. (I prefer to play tennis.)</td>
            </tr>
          </tbody>
        </table>

        <h3>The Verb fahren: An Irregular Stem-Changing Verb</h3>
        <p>
          <strong>fahren</strong> (to drive / travel) is irregular. In the <em>du</em> and
          <em> er/sie/es</em> forms, the vowel changes from a to ä. This vowel change happens in
          several common German verbs.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>fahren</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>fahre</td>
              <td>regular</td>
            </tr>
            <tr>
              <td>du</td>
              <td>fährst</td>
              <td>a → ä (irregular)</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>fährt</td>
              <td>a → ä (irregular)</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>fahren</td>
              <td>regular</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>fahrt</td>
              <td>regular</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>fahren</td>
              <td>regular</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>The stem change only happens in the du and er/sie/es forms. Why not in wir or ihr?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Stem-changing verbs in German only change in the second person singular (du) and third
              person singular (er/sie/es). The plural forms and the infinitive keep the original
              stem. This is a systematic pattern shared by many common German verbs: lesen (liest),
              sehen (sieht), geben (gibt), nehmen (nimmt), schlafen (schläft).
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The vowel shift (a to ä, e to i, e to ie) is a leftover from Old High German. The sounds
            in du and er/sie/es endings pulled the stem vowel forward in the mouth, causing umlaut.
            The plural endings did not have this effect, so plural forms kept the original vowel.
            Modern German still follows this thousand-year-old pattern.
          </p>
        </div>

        <h3>Extended Conjugation Table</h3>
        <p>
          These verbs from the chapter all follow regular or stem-changing patterns. Study the full
          conjugation for each.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>fahren</th>
              <th>tanzen</th>
              <th>lesen</th>
              <th>sammeln</th>
              <th>wandern</th>
              <th>fotografieren</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>fahre</td>
              <td>tanze</td>
              <td>lese</td>
              <td>sammle</td>
              <td>wandere</td>
              <td>fotografiere</td>
            </tr>
            <tr>
              <td>du</td>
              <td>fährst</td>
              <td>tanzt</td>
              <td>liest</td>
              <td>sammelst</td>
              <td>wanderst</td>
              <td>fotografierst</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>fährt</td>
              <td>tanzt</td>
              <td>liest</td>
              <td>sammelt</td>
              <td>wandert</td>
              <td>fotografiert</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>fahren</td>
              <td>tanzen</td>
              <td>lesen</td>
              <td>sammeln</td>
              <td>wandern</td>
              <td>fotografieren</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>fahrt</td>
              <td>tanzt</td>
              <td>lest</td>
              <td>sammelt</td>
              <td>wandert</td>
              <td>fotografiert</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>fahren</td>
              <td>tanzen</td>
              <td>lesen</td>
              <td>sammeln</td>
              <td>wandern</td>
              <td>fotografieren</td>
            </tr>
          </tbody>
        </table>

        <h3>In der Cafeteria: Dialogue Summary</h3>
        <p>
          Herr Heinemann and Frau Herzberg meet for coffee. They discuss the city of Marburg (Herr
          Heinemann calls it "eine schöne Stadt"). He travels to Munich on weekends to play in the
          university orchestra. He plays piano. Frau Herzberg plays a bit of guitar and can sing.
          She plays volleyball; Herr Heinemann plays football. He does not smoke: he is a
          non-smoker. Her husband is from England.
        </p>

        <ul className="lrn-list">
          <li>
            <strong>Wie finden Sie …</strong>: What do you think of …?
          </li>
          <li>
            <strong>Das finde ich auch</strong>: I think so too.
          </li>
          <li>
            <strong>Am Wochenende fahre ich nach …</strong>: At the weekend I travel to …
          </li>
          <li>
            <strong>Ich spiele ein bisschen …</strong>: I play a little …
          </li>
          <li>
            <strong>Ich bin Nichtraucher</strong>: I am a non-smoker.
          </li>
          <li>
            <strong>Ich kann leider nicht …</strong>: Unfortunately I cannot …
          </li>
        </ul>
      </div>,

      <div id="lrn-section-21">
        <h2>Personalpronomen und Possessivartikel: Pronouns and Possessives</h2>
        <p>
          Pronouns replace nouns so you do not have to repeat the same word. Possessive articles
          (my, your, his, etc.) tell you who owns something. German has a full set for every person
          and gender.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            English has one word for "your" regardless of whether you speak to one person or many.
            How many forms of "your" do you think German has?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              German has three: <strong>dein</strong> (informal singular), <strong>euer</strong>
              (informal plural), and <strong>Ihr</strong> (formal, always capitalised). Each one
              changes its ending to match the gender of the noun it describes.
            </p>
          </details>
        </div>

        <h3>Full Possessive Article Table</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>Maskulin</th>
              <th>Feminin</th>
              <th>Neutrum</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich (my)</td>
              <td>mein</td>
              <td>meine</td>
              <td>mein</td>
              <td>meine</td>
            </tr>
            <tr>
              <td>du (your, informal sg.)</td>
              <td>dein</td>
              <td>deine</td>
              <td>dein</td>
              <td>deine</td>
            </tr>
            <tr>
              <td>er (his)</td>
              <td>sein</td>
              <td>seine</td>
              <td>sein</td>
              <td>seine</td>
            </tr>
            <tr>
              <td>sie (her)</td>
              <td>ihr</td>
              <td>ihre</td>
              <td>ihr</td>
              <td>ihre</td>
            </tr>
            <tr>
              <td>wir (our)</td>
              <td>unser</td>
              <td>unsere</td>
              <td>unser</td>
              <td>unsere</td>
            </tr>
            <tr>
              <td>ihr (your, informal pl.)</td>
              <td>euer</td>
              <td>eure</td>
              <td>euer</td>
              <td>eure</td>
            </tr>
            <tr>
              <td>sie (their)</td>
              <td>ihr</td>
              <td>ihre</td>
              <td>ihr</td>
              <td>ihre</td>
            </tr>
            <tr>
              <td>Sie (your, formal)</td>
              <td>Ihr</td>
              <td>Ihre</td>
              <td>Ihr</td>
              <td>Ihre</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-callout lrn-warning">
          <span className="lrn-callout-label">Watch out</span>
          <p>
            <strong>ihr</strong> (lowercase) = her / their possessive. <strong>Ihr</strong>
            (uppercase) = your formal possessive. They look the same when written at the start of a
            sentence. Context tells you which one is meant.
          </p>
        </div>

        <h3>Pronouns Replacing Nouns (er / sie / es)</h3>
        <p>
          When you refer back to a noun you already mentioned, replace it with a pronoun. The
          pronoun matches the gender of the noun, not the biological sex of any person.
        </p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Noun</th>
              <th>Article</th>
              <th>Pronoun</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Drucker</td>
              <td>der</td>
              <td>er</td>
              <td>Mein Drucker ist kaputt. Er ist neu.</td>
            </tr>
            <tr>
              <td>Lampe</td>
              <td>die</td>
              <td>sie</td>
              <td>Die Lampe ist schön. Sie ist modern.</td>
            </tr>
            <tr>
              <td>Telefon</td>
              <td>das</td>
              <td>es</td>
              <td>Das Telefon ist kaputt. Es funktioniert nicht.</td>
            </tr>
            <tr>
              <td>Bücher</td>
              <td>die (pl.)</td>
              <td>sie</td>
              <td>Die Bücher sind interessant. Sie sind neu.</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does a lamp (die Lampe) become <em>sie</em> (she), even though it is not a person?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              In German, grammatical gender is a property of the word, not the object. Die Lampe is
              grammatically feminine, so the pronoun <em>sie</em> (which covers both "she" and
              "it-feminine") applies. English lost grammatical gender centuries ago, so everything
              non-human becomes "it." German kept the gender system, so every noun gets er, sie, or
              es based on its article.
            </p>
          </details>
        </div>
      </div>,

      <div id="lrn-section-22">
        <h2>Lokale Präpositionen: Local Prepositions</h2>
        <p>
          German uses different prepositions depending on whether you say where you come from, where
          you are, or where you are going. The three questions Woher? / Wo? / Wohin? each have their
          own prepositions.
        </p>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">When to use this</span>
          <p>
            Use these prepositions whenever you talk about origin (where someone is from), location
            (where someone lives or works), and destination (where someone is going).
          </p>
        </div>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            English uses "from," "in," and "to" for these three relations. How many prepositions do
            you think German uses, and how does it pair them with the questions Woher? / Wo? /
            Wohin?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              German uses one preposition for origin (aus), one main preposition for destination
              (nach), but several for location (in, an, bei). Each question word locks in a fixed
              preposition: Woher? takes aus, Wohin? takes nach, Wo? takes in/an/bei.
            </p>
          </details>
        </div>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Preposition(s)</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Woher? (from where)</td>
              <td>aus</td>
              <td>Ich komme aus Italien. / Er kommt aus Deutschland.</td>
            </tr>
            <tr>
              <td>Wo? (where)</td>
              <td>in / an / bei</td>
              <td>Ich wohne in Berlin. / Sie arbeitet an der Universität.</td>
            </tr>
            <tr>
              <td>Wohin? (where to)</td>
              <td>nach</td>
              <td>Ich fahre nach München. / Am Wochenende fahre ich nach Berlin.</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            These three question words map onto three distinct spatial concepts: starting point,
            current position, and endpoint. German marks all three with different prepositions so
            the relationship between subject and place is always clear. English uses "from," "in,"
            and "to," which is the same logic: German just distributes the work across a slightly
            different set of words.
          </p>
        </div>
      </div>,

      <div id="lrn-section-23">
        <h2>Die Wochentage: Days of the Week</h2>
        <p>
          All seven days of the week are masculine in German (der). You say "on Monday" using
          <strong> am</strong> + the day. The verb then moves to position II as usual.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            In English, you say "on Monday." What small German word do you think appears in front of
            the day to mean the same thing?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The word is <strong>am</strong>. It is short for <em>an dem</em>. You say "Am Montag
              arbeite ich." for "On Monday I work." The verb still goes to position II.
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
              <td>der Montag</td>
              <td>Monday</td>
            </tr>
            <tr>
              <td>der Dienstag</td>
              <td>Tuesday</td>
            </tr>
            <tr>
              <td>der Mittwoch</td>
              <td>Wednesday</td>
            </tr>
            <tr>
              <td>der Donnerstag</td>
              <td>Thursday</td>
            </tr>
            <tr>
              <td>der Freitag</td>
              <td>Friday</td>
            </tr>
            <tr>
              <td>der Samstag / der Sonnabend</td>
              <td>Saturday</td>
            </tr>
            <tr>
              <td>der Sonntag</td>
              <td>Sunday</td>
            </tr>
            <tr>
              <td>das Wochenende</td>
              <td>the weekend</td>
            </tr>
            <tr>
              <td>die Arbeitstage</td>
              <td>the working days</td>
            </tr>
          </tbody>
        </table>

        <p>
          Examples with <strong>am</strong>: "Am Montag arbeite ich.": On Monday I work. "Am
          Dienstag lerne ich Deutsch.": On Tuesday I learn German. "Am Wochenende fahre ich nach
          Berlin.": At the weekend I travel to Berlin.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            <strong>am</strong> is a contraction of <em>an + dem</em>. German uses the dative case
            for time expressions with <em>an</em>. You do not need to understand dative fully yet.
            Just memorise <em>am</em> + day as a fixed phrase. You will see why it works when you
            study cases in later chapters.
          </p>
        </div>
      </div>,

      <div id="lrn-section-24">
        <h2>Wissenswertes: German Collecting Culture</h2>
        <p>
          More Germans collect things than you might expect. The data below comes from a national
          survey.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The phrase "Briefmarken sammeln" puts the collected object first. Why do you think it
            works that way in German hobby phrases?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Hobby phrases in German name the activity by leading with what it involves:
              Briefmarken sammeln, Musik hören, Auto fahren. The verb comes last in the infinitive
              phrase. You will also see this word order with modal verbs: Ich kann Briefmarken
              sammeln.
            </p>
          </details>
        </div>

        <h3>Was kann man sammeln?: Things to Collect</h3>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Briefmarken</td>
              <td>stamps</td>
            </tr>
            <tr>
              <td>alte Autos</td>
              <td>old cars</td>
            </tr>
            <tr>
              <td>Muscheln</td>
              <td>shells</td>
            </tr>
            <tr>
              <td>alte Bücher</td>
              <td>old books</td>
            </tr>
            <tr>
              <td>Zinnsoldaten</td>
              <td>tin soldiers</td>
            </tr>
            <tr>
              <td>alte Radios</td>
              <td>old radios</td>
            </tr>
            <tr>
              <td>Gläser</td>
              <td>glasses / glassware</td>
            </tr>
            <tr>
              <td>Gartenzwerge</td>
              <td>garden gnomes</td>
            </tr>
            <tr>
              <td>Münzen</td>
              <td>coins</td>
            </tr>
            <tr>
              <td>Ansichtskarten</td>
              <td>postcards</td>
            </tr>
            <tr>
              <td>Kunstwerke</td>
              <td>artworks</td>
            </tr>
            <tr>
              <td>Wandteller</td>
              <td>decorative wall plates</td>
            </tr>
            <tr>
              <td>Steine</td>
              <td>stones / rocks</td>
            </tr>
            <tr>
              <td>Käfer</td>
              <td>beetles</td>
            </tr>
            <tr>
              <td>Matchboxautos</td>
              <td>matchbox cars</td>
            </tr>
          </tbody>
        </table>

        <h3>German Collecting Statistics</h3>
        <p>Most popular collectibles, by percentage of collectors:</p>

        <ul className="lrn-list">
          <li>Bücher (books): 36%</li>
          <li>CDs: 30%</li>
          <li>Münzen (coins): 18%</li>
          <li>Geschirr / Kristall / Glas (crockery / crystal / glass): 16%</li>
          <li>Figuren (figurines): 15%</li>
          <li>Stofftiere / Puppen (stuffed animals / dolls): 12%</li>
          <li>Porzellan (porcelain): 11%</li>
          <li>Antiquitäten (antiques): 11%</li>
          <li>Briefmarken (stamps): 10%</li>
        </ul>

        <p>
          You can describe these statistics with: "36 Prozent sammeln Bücher.": 36 percent collect
          books.
        </p>
      </div>,

      <div id="lrn-section-25">
        <h2>Wichtige Redemittel: Key Phrases</h2>
        <p>
          These phrases do not belong to a single grammar topic. Word order, articles, and verb
          tense are fixed in each one: learn them as complete units.
        </p>

        <ul className="lrn-list">
          <li>
            <strong>Herzlich willkommen</strong>: Welcome!
          </li>
          <li>
            <strong>Hier ist Ihr Büro</strong>: Here is your office.
          </li>
          <li>
            <strong>Fehlt etwas</strong>: Is anything missing?
          </li>
          <li>
            <strong>Hoffentlich ist alles da</strong>: Hopefully everything is here.
          </li>
          <li>
            <strong>Vielleicht können wir später zusammen Kaffee trinken</strong>: Perhaps we can
            have coffee together later.
          </li>
          <li>
            <strong>Gerne</strong>: With pleasure.
          </li>
          <li>
            <strong>Bis später</strong>: See you later.
          </li>
          <li>
            <strong>Wie geht es</strong>: How are you?
          </li>
          <li>
            <strong>Ich denke, …</strong>: I think, …
          </li>
        </ul>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            German fixed phrases often skip the article or pronoun that English keeps. "Bis später"
            has no subject and no verb. "Gerne" stands alone as a full reply. These shortcuts work
            because German speakers fill in the missing parts from context. Memorise the form
            exactly as you see it: do not translate word for word from English.
          </p>
        </div>
      </div>
    ]
  },
  practice: [
    {
      q: 'Translate: "My name is Anna. I come from Poland. I live in Berlin."',
      a: '(1) Ich heiße Anna. Ich komme aus Polen. Ich wohne in Berlin. (2) Pattern: Ich heiße + name, Ich komme aus + country (no article for Polen), Ich wohne in + city. (3) These three phrases are the core self-introduction. "Aus" goes with "kommen" (origin), "in" goes with "wohnen" (residence).'
    },
    {
      q: 'What is the verb form of "sein" for "du"?',
      a: '(1) du bist. (2) Sein is irregular: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. (3) "Bist" is completely different from the infinitive "sein": you must memorize it, not derive it.'
    },
    {
      q: 'PREDICT: You want to ask "Where do you come from?" formally. What German question do you use?',
      a: '(1) Woher kommen Sie? (2) W-word + verb + Sie. The verb stays at position II after the question word. (3) Compare informal: Woher kommst du?: the verb form changes but the word order stays the same.'
    },
    {
      q: 'What is the feminine form of "der Ingenieur"?',
      a: '(1) die Ingenieurin. (2) Pattern: add -in to the masculine form. (3) This is the standard rule for most professions in German. The article changes from der (masculine) to die (feminine).'
    },
    {
      q: 'TRANSFER: A new student says "Ich bin Student." Is this correct? What if the student is female?',
      a: '(1) "Ich bin Student" is correct for a male student. For a female student: "Ich bin Studentin." (2) Rule: German professions after sein drop the article and match the speaker\'s gender. (3) In German, the profession noun encodes gender information: there are two separate words, not just one universal form.'
    },
    {
      q: 'Say in German: "I speak a little Spanish."',
      a: '(1) Ich spreche ein bisschen Spanisch. (2) Pattern: Ich spreche + level + language. Levels: sehr gut (very well), gut (well), ein bisschen (a little). (3) The language name comes last, after the adverb. No article before the language name.'
    },
    {
      q: 'Which countries in German ALWAYS need the article "die"? Name three.',
      a: '(1) die Türkei, die Ukraine, die Schweiz. Also die USA and die Niederlande (plural). (2) Rule: countries that are actually noun phrases (Turkish land, Swiss confederation) keep their article. Most country names are bare proper nouns with no article. (3) A useful memory trick: if the English name starts with "the" (the Netherlands, the USA), so does the German.'
    },
    {
      q: 'Conjugate "arbeiten" for: du, er, ihr.',
      a: '(1) du arbeitest, er arbeitet, ihr arbeitet. (2) Rule: when the stem ends in -t or -d, insert an extra -e- before the ending (-st, -t) for easier pronunciation. (3) Compare: du kommst (no extra e: stem "komm" ends in a consonant cluster that is pronounceable).'
    },
    {
      q: 'ELABORATE: Why does German need two different words: gern and lieber: where English uses "like" and "prefer"?',
      a: '(1) Gern = "like to do X." Lieber = "prefer to do X (over something else)." (2) Gern is an adverb placed after the verb. Lieber is its comparative form. (3) English "prefer" is a separate verb. German builds the comparison morphologically: by changing the adverb\'s form. This is the same mechanism as "good / better" in English adjectives.'
    },
    {
      q: 'What is the German word for 16? Why is it not "sechszehn"?',
      a: '(1) sechzehn. (2) The "s" at the end of "sechs" is dropped before "-zehn" to make pronunciation smoother. (3) Similarly, "sieben" becomes "siebzehn" (not "siebenzehn"): the "-en" ending of "sieben" is dropped. These are fixed phonetic shortcuts in standard German.'
    },
    {
      q: 'Translate: "Hans works at BASF in Ludwigshafen."',
      a: '(1) Hans arbeitet bei BASF in Ludwigshafen. (2) Pattern: Ich arbeite als [job] bei [company] in [city]. The preposition "bei" (at) is used with company names. (3) Note "arbeitet": stem "arbeit" ends in -t, so the er-form adds -et not just -t.'
    },
    {
      q: 'PREDICT: If "sprichst" is the du-form of "sprechen," what is the du-form of "lesen"?',
      a: '(1) du liest. (2) "Lesen" has the vowel change e → ie (not e → i). So: ich lese, du liest, er liest. (3) The pattern for these strong verbs is: infinitive vowel in ich/wir/sie, changed vowel only in du and er/sie/es. You must learn which change each verb uses.'
    },
    {
      q: 'Form a W-question: turn "Sie kommen aus Spanien" into a question asking where.',
      a: '(1) Woher kommen Sie? (2) Step 1: identify the W-word for origin = Woher. Step 2: move verb to position II (immediately after Woher). Step 3: subject Sie follows. (3) The answer to "Woher kommen Sie?" is "Ich komme aus Spanien."'
    },
    {
      q: 'TRANSFER: A friend says "Ich spiele gern Volleyball, aber meine Schwester spielt lieber Tennis." What does this mean?',
      a: '(1) "I like playing volleyball, but my sister prefers playing tennis." (2) gern = like to, lieber = prefer to (comparative of gern). "Aber" = but. "Meine Schwester" = my sister (feminin, so meine). (3) Note "spielt": she/er/es takes the -t ending. The subject changes from ich (spiele) to sie/meine Schwester (spielt).'
    },
    {
      q: 'What is the difference between "Woher kommen Sie?" and "Wo wohnen Sie?"',
      a: '(1) Woher kommen Sie? = Where do you come from? (origin/birthplace/nationality). Wo wohnen Sie? = Where do you live? (current place of residence). (2) "Woher" (where-from) + kommen (to come). "Wo" (where) + wohnen (to live). (3) These are two different facts. You can come from Spain but live in Berlin.'
    },
    {
      q: 'Conjugate "singen" for all persons (ich through Sie).',
      a: '(1) ich singe, du singst, er/sie/es singt, wir singen, ihr singt, sie/Sie singen. (2) Singen is regular: stem "sing-" + standard endings (-e, -st, -t, -en, -t, -en). (3) No stem-vowel change: singen is a regular strong verb in the present tense (it does have changes in past tense, but not in the present).'
    },
    {
      q: 'ELABORATE: Why is "sie" (she/they) the same word as "Sie" (formal you) in German? How do you tell them apart?',
      a: '(1) They are historically the same word: formal Sie developed from the 3rd-person plural by treating the addressee with honorific distance. (2) Capitalization: Sie (formal, uppercase) vs sie (she/they, lowercase). (3) In speech, context distinguishes them: and the verb form also helps: "Kommen Sie aus Wien?" is clearly a formal address, not "Do they come from Vienna?" because of the question word order and conversational context.'
    },
    {
      q: 'Translate: "My father is a doctor. He works in Munich."',
      a: '(1) Mein Vater ist Arzt. Er arbeitet in München. (2) "Mein": Vater is masculine, so no -e ending on the possessive. "Arzt": no article after ist for professions. "arbeitet": stem ends in -t, so -et ending. (3) Note that München is the German name for Munich: use the German city name in German sentences.'
    },
    {
      q: 'TRANSFER: You need to report about your neighbour to the class. She is called Maria, comes from Romania, and lives in Hamburg. Form three sentences.',
      a: '(1) Meine Nachbarin heißt Maria. Sie kommt aus Rumänien. Sie wohnt in Hamburg. (2) Use "Meine Nachbarin" (feminine). Verb forms: heißt (she), kommt (she), wohnt (she): all third-person singular -t. (3) Country: Rumänien: no article needed (it is not one of the three article-taking countries).'
    },
    {
      q: 'What is the possessive for "your" (formal) in German? How does it differ from "her"?',
      a: '(1) Formal your: Ihr/Ihre. Her: ihr/ihre. (2) They are spelled identically except for capitalization. Ihr (capital I) = formal your. ihr (small i) = her. (3) In written German, capitalization is the only signal. In spoken German, context makes the difference clear.'
    },
    {
      q: 'Say in German: "In Switzerland, they speak German, French, Italian, and Romansh."',
      a: '(1) In der Schweiz spricht man Deutsch, Französisch, Italienisch und Rätoromanisch. (2) "In der Schweiz": die Schweiz takes the dative "der" after "in." But at A1 level: "In der Schweiz" is the standard form. "Man spricht" = one speaks / they speak (impersonal). (3) Switzerland is the only country in this chapter with four official languages.'
    },
    {
      q: 'SELF-EXPLAIN: "Heißen" takes the form "du heißt" (not "du heißst"). Why?',
      a: '(1) du heißt: correct. The stem already ends in -ß (a sibilant). Adding -st would produce "heißst": the double sibilant is reduced to one. (2) Rule: verbs with stems ending in -ß, -ss, -s, or -z: the du form equals the er form. (3) Same reason: du sitzt (not du sitzt + st), er sitzt. The sibilant absorbs the -t of the -st ending.'
    },
    {
      q: 'How do you write 2,350,000 in German words?',
      a: '(1) zwei Millionen dreihundertfünfzigtausend. (2) Rule: Millionen (plural of Million) for numbers above one million. Then hundred-groups then thousand-groups then units: just like English but written as one compound word. (3) Note: eine Million but zwei/drei/vier Millionen: the plural form.'
    },
    {
      q: 'PREDICT: The verb "sammeln" (to collect) ends in -eln. How do you form "ich sammle"?',
      a: '(1) ich sammle: the -e from the stem drops. (2) Verbs ending in -eln drop the -e from the stem in the ich form. So "sammel-n" → ich sammle (not ich sammele). (3) Full conjugation: ich sammle, du sammelst, er sammelt, wir sammeln, ihr sammelt, sie sammeln.'
    },
    {
      q: 'Form a yes/no question: "Conrad studies medicine in Berlin."',
      a: '(1) Studiert Conrad Medizin in Berlin? (2) Step: move the verb to position I. Subject follows at position II. (3) The answer is either "Ja, er studiert Medizin in Berlin" or "Nein, er studiert nicht Medizin in Berlin." For yes/no questions, the verb always leads.'
    },
    {
      q: 'TRANSFER: Franz is a student of journalism in Berlin. He speaks German, French, and English. He plays tennis and reads novels. Write three German sentences describing him.',
      a: '(1) Franz studiert Journalistik in Berlin. Er spricht Deutsch, Französisch und Englisch. Er spielt gern Tennis und liest gern Romane. (2) "Studiert": regular -t ending. "Spricht": stem-vowel change e→i (sprechen). "Spielt" and "liest": er-form. (3) "Liest" shows the e→ie change of lesen. "Romane" = novels (general plural, no specific type needed).'
    },
    {
      q: 'What is the capital of Switzerland? How many official languages does it have?',
      a: '(1) Capital: Bern. Four official languages: German, French, Italian, Romansh. (2) Switzerland has 26 cantons and 7.5 million inhabitants. (3) Important: the capital is Bern, not Zurich (which is larger but not the capital).'
    },
    {
      q: 'ELABORATE: The German word order rule says "verb at position II." What counts as "position I"?',
      a: '(1) Position I is whatever element starts the sentence. It can be the subject, a time adverb (jetzt, heute), a place phrase (in Berlin), or any other element. (2) Examples: "Jetzt lerne ich Deutsch" (now = pos I), "In Berlin studiert er Chemie" (place = pos I). (3) The rule is not "subject first": it is "verb second." English mostly uses subject-verb-object, but German allows anything at position I as long as the verb stays at II.'
    },
    // Interleaved across topics: vocab, articles, adjectives, negation, modal, fahren,
    // possessives, pronouns, prepositions, days, cultural, stress.
    {
      q: 'What is "der Drucker" in English?',
      a: 'The printer. In German, Drucker is masculine (der). Drucken means "to print," so der Drucker is literally "the printing device."'
    },
    {
      q: 'What is the definite article for Telefon, Lampe, and Computer?',
      a: 'das Telefon (neuter), die Lampe (feminine), der Computer (masculine). Always learn the article with the noun.'
    },
    {
      q: 'What is the difference between "Der Stuhl ist bequem" and "Das ist ein bequemer Stuhl"?',
      a: 'Both mean "The chair is comfortable" and "That is a comfortable chair." In the first sentence, bequem is in predicate position after the verb: no ending. In the second, bequem is before the noun (attributive position) and gets the ending -er for masculine nouns.'
    },
    {
      q: 'Choose kein or nicht: "Ich singe ___."',
      a: 'nicht. Full sentence: "Ich singe nicht." (I do not sing.) nicht negates verbs. kein only negates nouns.'
    },
    {
      q: 'Conjugate können: ich, du, er, wir, ihr, sie/Sie',
      a: 'ich kann, du kannst, er/sie/es kann, wir können, ihr könnt, sie/Sie können. Note: ich and er/sie/es both use kann with no personal ending.'
    },
    {
      q: 'What is irregular about fahren in the du and er forms?',
      a: 'The vowel changes from a to ä: du fährst, er fährt. The other forms keep the original a: ich fahre, wir fahren, ihr fahrt, sie fahren.'
    },
    {
      q: 'Fill in the possessive: "___ Drucker ist kaputt." (my, masculine noun)',
      a: 'Mein. Full sentence: "Mein Drucker ist kaputt." mein is the masculine form of the possessive for ich.'
    },
    {
      q: 'Replace "die Kaffeemaschine" with the correct pronoun: "Die Kaffeemaschine ist neu. ___ ist teuer."',
      a: 'Sie. Die Kaffeemaschine is feminine (die), so the pronoun is sie. Full sentence: "Die Kaffeemaschine ist neu. Sie ist teuer."'
    },
    {
      q: 'Which preposition answers Woher?: aus, nach, or in?',
      a: 'aus. Woher? (from where) takes aus. Example: "Ich komme aus Deutschland." nach answers Wohin? (where to). in answers Wo? (where).'
    },
    {
      q: 'What preposition do you use with days of the week? Give an example.',
      a: 'am. Example: "Am Montag lerne ich Deutsch." am is a contraction of an + dem. All days are masculine (der), so am is always correct.'
    },
    {
      q: 'Translate: "Das Telefon ist kaputt. Es funktioniert nicht."',
      a: '"The telephone is broken. It does not work." Das Telefon is neuter (das), so the pronoun is es.'
    },
    {
      q: 'Predict: The word "Zeitung" (newspaper) ends in -ung. What is its article?',
      a: 'die Zeitung. All words ending in -ung are always feminine in German. No exceptions.'
    },
    {
      q: 'Fill in the correct adjective ending: "Das ist eine ___ Lampe." (alt: old)',
      a: 'alte. Full sentence: "Das ist eine alte Lampe." Lampe is feminine. After eine, the feminine attributive adjective takes the ending -e.'
    },
    {
      q: 'Choose kein or nicht: "Hier ist ___ Bildschirm."',
      a: 'kein. Full sentence: "Hier ist kein Bildschirm." (There is no monitor here.) kein negates the noun Bildschirm (masculine). It replaces ein.'
    },
    {
      q: 'Build a sentence: "Here you can read books." Use hier, man, lesen.',
      a: '"Hier kann man Bücher lesen." kann sits in position II. lesen goes to the very end. This is the Satzklammer (sentence bracket) structure.'
    },
    {
      q: 'Fill in the blank: "Fährt dein Vater gern Auto?"',
      a: 'This sentence is already complete. It means: "Does your father like driving?" fährt is the er/sie/es form of fahren (stem change a to ä). gern signals liking the activity.'
    },
    {
      q: 'What is the formal possessive for "your printer" (Sie-form)?',
      a: '"Ihr Drucker." Ihr (capitalised) is the formal possessive. It follows the same endings as ihr (their) but always starts with a capital letter.'
    },
    {
      q: 'Replace "das Wörterbuch" with the correct pronoun: "Das Wörterbuch ist interessant. ___ ist auch praktisch."',
      a: 'Es. Das Wörterbuch is neuter (das), so the pronoun is es. Full sentence: "Das Wörterbuch ist interessant. Es ist auch praktisch."'
    },
    {
      q: 'Fill in the preposition: "Am Wochenende fahre ich ___ München."',
      a: 'nach. Wohin? (where to) takes nach. Full sentence: "Am Wochenende fahre ich nach München." (At the weekend I travel to Munich.)'
    },
    {
      q: 'What percentage of Germans collect books, according to the chapter survey?',
      a: '36 percent. Bücher (books) are the most popular collectible. Second is CDs at 30%, then Münzen (coins) at 18%.'
    },
    {
      q: 'Transfer: A colleague tells you the coffee machine is broken. Write two German sentences reporting this.',
      a: 'Die Kaffeemaschine ist kaputt. Sie funktioniert nicht. (die Kaffeemaschine is feminine, so the pronoun is sie.)'
    },
    {
      q: 'Transfer: Write a sentence using the indefinite article for "a printer," "a lamp," and "a telephone."',
      a: '"Hier ist ein Drucker, eine Lampe und ein Telefon." Drucker is masculine (ein), Lampe is feminine (eine), Telefon is neuter (ein). The article must match the gender of each noun.'
    },
    {
      q: 'Fill in the blank: "Das ist ___ Kugelschreiber." (a ballpoint pen)',
      a: 'ein. Full sentence: "Das ist ein Kugelschreiber." Kugelschreiber is masculine (der), and ein is used for masculine nouns.'
    },
    {
      q: 'Transfer: You see a new dictionary on the desk. How do you say "That is a new dictionary." in German?',
      a: '"Das ist ein neues Wörterbuch." Wörterbuch is neuter (das). After ein, the neuter adjective takes the ending -es. neu becomes neues before the noun.'
    },
    {
      q: 'Transfer: Negate the sentence "Ich kann gut tanzen" using nicht.',
      a: '"Ich kann nicht gut tanzen." (I cannot dance well.) nicht goes before the adjective gut. The modal verb kann stays in position II and tanzen stays at the end.'
    },
    {
      q: 'Transfer: Write a sentence saying "On Saturday I can play tennis."',
      a: '"Am Samstag kann ich Tennis spielen." am Samstag is in position I. kann moves to position II. spielen goes to the end.'
    },
    {
      q: 'Transfer: Write a sentence using fahren in the du-form to ask a friend if they like riding a motorbike.',
      a: '"Fährst du gern Motorrad?" fährst is the du-form of fahren (stem change a to ä). gern signals that you enjoy the activity.'
    },
    {
      q: 'Self-explain: ihr (lowercase) and Ihr (uppercase) look identical at the start of a sentence. How do you tell them apart?',
      a: 'Context tells you. If you are speaking formally to one person (using Sie), then Ihr is the formal possessive. If you are talking about a woman or a group, ihr is her/their possessive. The surrounding sentence makes it clear.'
    },
    {
      q: 'Transfer: Write three sentences about yourself using aus, in, and nach.',
      a: 'Example: "Ich komme aus Bulgarien. Ich wohne in Deutschland. Am Wochenende fahre ich nach Berlin." aus = origin, in = current location, nach = destination.'
    },
    {
      q: 'Fill in the correct adjective ending: "Das ist ein ___ Telefon." (neu: new)',
      a: 'neues. Full sentence: "Das ist ein neues Telefon." Telefon is neuter. After ein, the neuter attributive adjective takes the ending -es.'
    },
    {
      q: 'Predict: How would you say "On Sundays I play tennis"?',
      a: '"Am Sonntag spiele ich Tennis." am Sonntag is in position I. spiele is the conjugated verb in position II. Tennis spielen: Tennis stays as the object.'
    },
    {
      q: 'Self-explain: Why does the masculine adjective after ein take the ending -er?',
      a: 'The article ein does not show masculine gender by itself. The adjective steps in and signals the gender with -er. This is called a "strong" ending: the adjective carries the gender signal when the article cannot.'
    },
    {
      q: 'Transfer: A friend says they have no books in the office. Write the German sentence.',
      a: '"Ich habe keine Bücher im Büro." keine is the plural negative form. It replaces the missing plural ein, which does not exist as a word.'
    },
    {
      q: 'Predict: How would you say "Can she swim well?" in German?',
      a: '"Kann sie gut schwimmen?" In a question, the verb moves to position I. The subject (sie) comes after. schwimmen goes to the end.'
    },
    {
      q: 'Transfer: You see an expensive computer. How do you say "That is an expensive computer." in German?',
      a: '"Das ist ein teurer Computer." Computer is masculine (der). After ein, the masculine adjective takes the ending -er. teuer drops one e and becomes teurer before the noun.'
    },
    {
      q: 'Translate: "Ich sammle gern Briefmarken."',
      a: '"I like collecting stamps." sammle is the ich-form of sammeln. gern signals liking the activity. Briefmarken = stamps.'
    },
    {
      q: 'Fill in the blank: "Hier ist ___ Drucker." (no printer)',
      a: 'kein. The full sentence: "Hier ist kein Drucker." kein is used because Drucker is a noun. kein replaces ein for masculine nouns in negation.'
    },
    {
      q: 'What is the difference between die Mensa and die Kantine?',
      a: 'die Mensa is the student cafeteria: subsidised food for students. die Kantine is the staff canteen: for university employees. They are separate facilities.'
    },
    {
      q: 'Translate: "Das ist das Sprachenzentrum. Hier kann man Fremdsprachen lernen."',
      a: '"That is the language centre. Here you can learn foreign languages." Sprachenzentrum is neuter (das). kann man + infinitive at the end = sentence bracket.'
    },
    {
      q: 'Give the opposite of each: teuer, schön, modern, neu, bequem.',
      a: 'teuer: billig (cheap). schön: hässlich (ugly). modern: unmodern (old-fashioned). neu: alt (old). bequem: unbequem (uncomfortable).'
    },
    {
      q: 'Herr Heinemann wants to report a broken printer to Frau Herzberg. Write 3 German sentences.',
      a: '"Mein Drucker ist kaputt. Ich kann nicht drucken. Das funktioniert nicht." These three sentences cover: stating the problem (kaputt), the consequence (kann nicht drucken), and the general description (funktioniert nicht).'
    },
    {
      q: 'Transfer: You are in the university library. Write two German sentences about what you can do there.',
      a: '"Das ist die Bibliothek. Hier kann man Bücher lesen." Or: "Hier kann man auch Zeitungen lesen." Use hier kann man + infinitive at the end.'
    },
    {
      q: 'Where does stress fall in Bürostuhl, Kaffeemaschine, and Telefon?',
      a: 'BÜrostuhl (stress on first part of compound). KAFfeemaschine (stress on first syllable). TeleFON (foreign word, stress on final syllable).'
    },
    {
      q: 'Elaborate: Why do compound nouns in German get their article from the last element?',
      a: 'The last element of a German compound is the "head" of the word. It determines the core meaning and the grammatical properties including gender. Everything before it modifies it. So der Stuhl + Büro- = der Bürostuhl, because Stuhl is the head and it is masculine.'
    },
    {
      q: 'Elaborate: Why do you use kein for nouns and nicht for verbs? Explain in your own words.',
      a: 'kein is the negative counterpart of ein. Just as ein signals "one of something," kein signals "none of that thing." nicht works like the English word "not" and attaches to actions and qualities. Mixing them: saying "nicht Drucker" or "kein drucken": would be ungrammatical in German.'
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Begrüßungen und erste Kontakte',
    sections: [
      <>
        <h2>Key Phrases</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
              <th>Register</th>
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
              <td>Ich wohne in …</td>
              <td>I live in …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich komme aus …</td>
              <td>I come from …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich bin [Beruf].</td>
              <td>I am a [profession].</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Meine Muttersprache ist …</td>
              <td>My native language is …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich lerne jetzt …</td>
              <td>I am currently learning …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich arbeite als … bei …</td>
              <td>I work as … at …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich spreche sehr gut / gut / ein bisschen …</td>
              <td>I speak … very well / well / a little</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Nein, leider nicht.</td>
              <td>No, unfortunately not.</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich bin ledig / verheiratet / geschieden.</td>
              <td>I am single / married / divorced.</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich habe (zwei/keine) Kinder.</td>
              <td>I have (two/no) children.</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich spiele gern …</td>
              <td>I like playing …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich lese gern …</td>
              <td>I like reading …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Ich höre gern …</td>
              <td>I like listening to …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Wir spielen lieber …</td>
              <td>We prefer playing …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>In … spricht man …</td>
              <td>In …, they speak …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Das Flugzeug kommt aus …</td>
              <td>The plane comes from …</td>
              <td>Both</td>
            </tr>
            <tr>
              <td>Meine Nachbarin / Mein Nachbar heißt …</td>
              <td>My (female/male) neighbour is called …</td>
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
              <td>Was sind Sie von Beruf?</td>
              <td>Was bist du von Beruf?</td>
              <td>What is your profession?</td>
            </tr>
            <tr>
              <td>Welche Sprachen sprechen Sie?</td>
              <td>Welche Sprachen sprichst du?</td>
              <td>Which languages do you speak?</td>
            </tr>
            <tr>
              <td>Sprechen Sie Deutsch?</td>
              <td>Sprichst du Deutsch?</td>
              <td>Do you speak German?</td>
            </tr>
            <tr>
              <td>Was sind Ihre Hobbys?</td>
              <td>Was sind deine Hobbys?</td>
              <td>What are your hobbies?</td>
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
              <th>kommen</th>
              <th>wohnen</th>
              <th>arbeiten</th>
              <th>heißen</th>
              <th>sein</th>
              <th>haben</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>komme</td>
              <td>wohne</td>
              <td>arbeite</td>
              <td>heiße</td>
              <td>bin</td>
              <td>habe</td>
            </tr>
            <tr>
              <td>du</td>
              <td>kommst</td>
              <td>wohnst</td>
              <td>arbeitest</td>
              <td>heißt</td>
              <td>bist</td>
              <td>hast</td>
            </tr>
            <tr>
              <td>er/sie/es</td>
              <td>kommt</td>
              <td>wohnt</td>
              <td>arbeitet</td>
              <td>heißt</td>
              <td>ist</td>
              <td>hat</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>kommen</td>
              <td>wohnen</td>
              <td>arbeiten</td>
              <td>heißen</td>
              <td>sind</td>
              <td>haben</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>kommt</td>
              <td>wohnt</td>
              <td>arbeitet</td>
              <td>heißt</td>
              <td>seid</td>
              <td>habt</td>
            </tr>
            <tr>
              <td>sie/Sie</td>
              <td>kommen</td>
              <td>wohnen</td>
              <td>arbeiten</td>
              <td>heißen</td>
              <td>sind</td>
              <td>haben</td>
            </tr>
          </tbody>
        </table>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Pronoun</th>
              <th>sprechen (e→i)</th>
              <th>lesen (e→ie)</th>
              <th>singen</th>
              <th>spielen</th>
              <th>lernen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>spreche</td>
              <td>lese</td>
              <td>singe</td>
              <td>spiele</td>
              <td>lerne</td>
            </tr>
            <tr>
              <td>du</td>
              <td>sprichst</td>
              <td>liest</td>
              <td>singst</td>
              <td>spielst</td>
              <td>lernst</td>
            </tr>
            <tr>
              <td>er/sie/es</td>
              <td>spricht</td>
              <td>liest</td>
              <td>singt</td>
              <td>spielt</td>
              <td>lernt</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>sprechen</td>
              <td>lesen</td>
              <td>singen</td>
              <td>spielen</td>
              <td>lernen</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>sprecht</td>
              <td>lest</td>
              <td>singt</td>
              <td>spielt</td>
              <td>lernt</td>
            </tr>
            <tr>
              <td>sie/Sie</td>
              <td>sprechen</td>
              <td>lesen</td>
              <td>singen</td>
              <td>spielen</td>
              <td>lernen</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Full Verb Dictionary (Kleines Wörterbuch der Verben)</h2>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Verb</th>
              <th>Meaning</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sein</td>
              <td>to be</td>
              <td>irregular: bin/bist/ist/sind/seid/sind</td>
            </tr>
            <tr>
              <td>haben</td>
              <td>to have</td>
              <td>irregular du/er: hast/hat</td>
            </tr>
            <tr>
              <td>heißen</td>
              <td>to be called</td>
              <td>du heißt = er heißt (sibilant rule)</td>
            </tr>
            <tr>
              <td>kommen</td>
              <td>to come</td>
              <td>regular</td>
            </tr>
            <tr>
              <td>wohnen</td>
              <td>to live/reside</td>
              <td>regular</td>
            </tr>
            <tr>
              <td>arbeiten</td>
              <td>to work</td>
              <td>stem -t: insert -e- (du arbeitest)</td>
            </tr>
            <tr>
              <td>lernen</td>
              <td>to learn</td>
              <td>regular</td>
            </tr>
            <tr>
              <td>studieren</td>
              <td>to study (at university)</td>
              <td>regular (-ieren verbs)</td>
            </tr>
            <tr>
              <td>sprechen</td>
              <td>to speak</td>
              <td>e→i: du sprichst, er spricht</td>
            </tr>
            <tr>
              <td>lesen</td>
              <td>to read</td>
              <td>e→ie: du liest, er liest</td>
            </tr>
            <tr>
              <td>schreiben</td>
              <td>to write</td>
              <td>regular</td>
            </tr>
            <tr>
              <td>hören</td>
              <td>to hear/listen</td>
              <td>regular</td>
            </tr>
            <tr>
              <td>spielen</td>
              <td>to play</td>
              <td>regular</td>
            </tr>
            <tr>
              <td>singen</td>
              <td>to sing</td>
              <td>regular (present)</td>
            </tr>
            <tr>
              <td>sammeln</td>
              <td>to collect</td>
              <td>-eln verb: ich sammle</td>
            </tr>
            <tr>
              <td>denken</td>
              <td>to think</td>
              <td>regular</td>
            </tr>
            <tr>
              <td>glauben</td>
              <td>to believe</td>
              <td>regular</td>
            </tr>
          </tbody>
        </table>
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
              <td>Aussagesatz (statement)</td>
              <td>Position II</td>
              <td>Ich komme aus Deutschland.</td>
            </tr>
            <tr>
              <td>Aussagesatz (inverted)</td>
              <td>Position II</td>
              <td>Aus Deutschland komme ich.</td>
            </tr>
            <tr>
              <td>W-Frage (W-question)</td>
              <td>Position II (after W-word)</td>
              <td>Woher kommen Sie?</td>
            </tr>
            <tr>
              <td>Ja-Nein-Frage (yes/no question)</td>
              <td>Position I</td>
              <td>Kommen Sie aus Deutschland?</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Articles and Possessives</h2>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>Gender</th>
              <th>Definite article</th>
              <th>mein-</th>
              <th>dein-</th>
              <th>sein-</th>
              <th>ihr-</th>
              <th>Ihr-</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maskulin</td>
              <td>der</td>
              <td>mein</td>
              <td>dein</td>
              <td>sein</td>
              <td>ihr</td>
              <td>Ihr</td>
            </tr>
            <tr>
              <td>Feminin</td>
              <td>die</td>
              <td>meine</td>
              <td>deine</td>
              <td>seine</td>
              <td>ihre</td>
              <td>Ihre</td>
            </tr>
            <tr>
              <td>Neutrum</td>
              <td>das</td>
              <td>mein</td>
              <td>dein</td>
              <td>sein</td>
              <td>ihr</td>
              <td>Ihr</td>
            </tr>
            <tr>
              <td>Plural</td>
              <td>die</td>
              <td>meine</td>
              <td>deine</td>
              <td>seine</td>
              <td>ihre</td>
              <td>Ihre</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Numbers 0–100</h2>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>0–10</th>
              <th>German</th>
              <th>11–20</th>
              <th>German</th>
              <th>Tens</th>
              <th>German</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>null</td>
              <td>11</td>
              <td>elf</td>
              <td>20</td>
              <td>zwanzig</td>
            </tr>
            <tr>
              <td>1</td>
              <td>eins</td>
              <td>12</td>
              <td>zwölf</td>
              <td>30</td>
              <td>dreißig</td>
            </tr>
            <tr>
              <td>2</td>
              <td>zwei</td>
              <td>13</td>
              <td>dreizehn</td>
              <td>40</td>
              <td>vierzig</td>
            </tr>
            <tr>
              <td>3</td>
              <td>drei</td>
              <td>14</td>
              <td>vierzehn</td>
              <td>50</td>
              <td>fünfzig</td>
            </tr>
            <tr>
              <td>4</td>
              <td>vier</td>
              <td>15</td>
              <td>fünfzehn</td>
              <td>60</td>
              <td>sechzig</td>
            </tr>
            <tr>
              <td>5</td>
              <td>fünf</td>
              <td>16</td>
              <td>sechzehn</td>
              <td>70</td>
              <td>siebzig</td>
            </tr>
            <tr>
              <td>6</td>
              <td>sechs</td>
              <td>17</td>
              <td>siebzehn</td>
              <td>80</td>
              <td>achtzig</td>
            </tr>
            <tr>
              <td>7</td>
              <td>sieben</td>
              <td>18</td>
              <td>achtzehn</td>
              <td>90</td>
              <td>neunzig</td>
            </tr>
            <tr>
              <td>8</td>
              <td>acht</td>
              <td>19</td>
              <td>neunzehn</td>
              <td>100</td>
              <td>hundert</td>
            </tr>
            <tr>
              <td>9</td>
              <td>neun</td>
              <td></td>
              <td></td>
              <td>1.000</td>
              <td>tausend</td>
            </tr>
            <tr>
              <td>10</td>
              <td>zehn</td>
              <td></td>
              <td></td>
              <td>1.000.000</td>
              <td>eine Million</td>
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
              <td>die Muttersprache</td>
              <td>native language</td>
            </tr>
            <tr>
              <td>die Heimatstadt</td>
              <td>hometown</td>
            </tr>
            <tr>
              <td>die Telefonnummer</td>
              <td>telephone number</td>
            </tr>
            <tr>
              <td>die E-Mail-Adresse</td>
              <td>email address</td>
            </tr>
            <tr>
              <td>der Wohnort</td>
              <td>place of residence</td>
            </tr>
            <tr>
              <td>der Familienstand</td>
              <td>marital status</td>
            </tr>
            <tr>
              <td>verheiratet</td>
              <td>married</td>
            </tr>
            <tr>
              <td>ledig</td>
              <td>single</td>
            </tr>
            <tr>
              <td>geschieden</td>
              <td>divorced</td>
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
              <td>[ʃ] like "sh"</td>
              <td>Schweden, Russisch, Englisch</td>
            </tr>
            <tr>
              <td>sp (word start)</td>
              <td>[ʃp] like "shp"</td>
              <td>sprechen, Spanisch, Sprache</td>
            </tr>
            <tr>
              <td>ei</td>
              <td>[aɪ] like "eye"</td>
              <td>ein, heißen, mein, dein</td>
            </tr>
            <tr>
              <td>ie</td>
              <td>[iː] like "ee"</td>
              <td>viel, liest, Wiedersehen</td>
            </tr>
          </tbody>
        </table>
      </>,
      <div id="lrn-section-13">
        <h2>Office Vocabulary (Bürogegenstände)</h2>
        <p>When to use: when you name objects in a German workplace.</p>
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
              <td>Telefon</td>
              <td>das</td>
              <td>telephone</td>
            </tr>
            <tr>
              <td>Regal</td>
              <td>das</td>
              <td>shelf / bookcase</td>
            </tr>
            <tr>
              <td>Lampe</td>
              <td>die</td>
              <td>lamp</td>
            </tr>
            <tr>
              <td>Drucker</td>
              <td>der</td>
              <td>printer</td>
            </tr>
            <tr>
              <td>Stuhl</td>
              <td>der</td>
              <td>chair</td>
            </tr>
            <tr>
              <td>Schreibtisch</td>
              <td>der</td>
              <td>desk</td>
            </tr>
            <tr>
              <td>Computer</td>
              <td>der</td>
              <td>computer</td>
            </tr>
            <tr>
              <td>Maus</td>
              <td>die</td>
              <td>mouse (computer)</td>
            </tr>
            <tr>
              <td>Wörterbuch</td>
              <td>das</td>
              <td>dictionary</td>
            </tr>
            <tr>
              <td>Buch</td>
              <td>das</td>
              <td>book</td>
            </tr>
            <tr>
              <td>Brille</td>
              <td>die</td>
              <td>glasses</td>
            </tr>
            <tr>
              <td>Terminkalender</td>
              <td>der</td>
              <td>planner</td>
            </tr>
            <tr>
              <td>Bleistift</td>
              <td>der</td>
              <td>pencil</td>
            </tr>
            <tr>
              <td>Kugelschreiber</td>
              <td>der</td>
              <td>ballpoint pen</td>
            </tr>
            <tr>
              <td>Kaffeemaschine</td>
              <td>die</td>
              <td>coffee machine</td>
            </tr>
            <tr>
              <td>Kopierer / Kopiergerät</td>
              <td>der / das</td>
              <td>photocopier</td>
            </tr>
            <tr>
              <td>Faxgerät</td>
              <td>das</td>
              <td>fax machine</td>
            </tr>
            <tr>
              <td>Bildschirm</td>
              <td>der</td>
              <td>screen / monitor</td>
            </tr>
            <tr>
              <td>Bürolampe</td>
              <td>die</td>
              <td>office lamp</td>
            </tr>
            <tr>
              <td>Laptop</td>
              <td>der</td>
              <td>laptop</td>
            </tr>
            <tr>
              <td>Computertisch</td>
              <td>der</td>
              <td>computer desk</td>
            </tr>
            <tr>
              <td>Bürostuhl</td>
              <td>der</td>
              <td>office chair</td>
            </tr>
          </tbody>
        </table>

        <h2>Adjectives</h2>
        <p>When to use: when you describe objects, places, or people.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
              <th>Opposite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>teuer</td>
              <td>expensive</td>
              <td>billig</td>
            </tr>
            <tr>
              <td>preiswert</td>
              <td>good value</td>
              <td>none</td>
            </tr>
            <tr>
              <td>schön</td>
              <td>beautiful / nice</td>
              <td>hässlich</td>
            </tr>
            <tr>
              <td>modern</td>
              <td>modern</td>
              <td>unmodern</td>
            </tr>
            <tr>
              <td>praktisch</td>
              <td>practical</td>
              <td>unpraktisch</td>
            </tr>
            <tr>
              <td>neu</td>
              <td>new</td>
              <td>alt</td>
            </tr>
            <tr>
              <td>klein</td>
              <td>small</td>
              <td>groß</td>
            </tr>
            <tr>
              <td>bequem</td>
              <td>comfortable</td>
              <td>unbequem</td>
            </tr>
            <tr>
              <td>hell</td>
              <td>bright / light</td>
              <td>dunkel</td>
            </tr>
            <tr>
              <td>interessant</td>
              <td>interesting</td>
              <td>langweilig</td>
            </tr>
          </tbody>
        </table>

        <h2>University Departments</h2>
        <p>When to use: when you ask for or give directions on a German campus.</p>
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
              <td>Verwaltung</td>
              <td>die</td>
              <td>administration</td>
            </tr>
            <tr>
              <td>Kantine</td>
              <td>die</td>
              <td>canteen (staff)</td>
            </tr>
            <tr>
              <td>Mensa</td>
              <td>die</td>
              <td>student cafeteria</td>
            </tr>
            <tr>
              <td>Cafeteria</td>
              <td>die</td>
              <td>cafeteria</td>
            </tr>
            <tr>
              <td>Bibliothek</td>
              <td>die</td>
              <td>library</td>
            </tr>
            <tr>
              <td>Sekretariat</td>
              <td>das</td>
              <td>secretary's office</td>
            </tr>
            <tr>
              <td>Sporthalle</td>
              <td>die</td>
              <td>sports hall</td>
            </tr>
            <tr>
              <td>Sprachenzentrum</td>
              <td>das</td>
              <td>language centre</td>
            </tr>
          </tbody>
        </table>

        <h2>Hobbies</h2>
        <p>When to use: when you talk about free time, weekends, and personal interests.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Freunde besuchen</td>
              <td>visit friends</td>
            </tr>
            <tr>
              <td>Auto / Motorrad / Ski fahren</td>
              <td>drive / ride a motorbike / ski</td>
            </tr>
            <tr>
              <td>Fremdsprachen lernen</td>
              <td>learn foreign languages</td>
            </tr>
            <tr>
              <td>wandern</td>
              <td>hike</td>
            </tr>
            <tr>
              <td>kochen</td>
              <td>cook</td>
            </tr>
            <tr>
              <td>im Internet surfen</td>
              <td>surf the internet</td>
            </tr>
            <tr>
              <td>lesen</td>
              <td>read</td>
            </tr>
            <tr>
              <td>Musik hören</td>
              <td>listen to music</td>
            </tr>
            <tr>
              <td>Fußball / Tennis / Golf / Volleyball / Schach spielen</td>
              <td>play football / tennis / golf / volleyball / chess</td>
            </tr>
            <tr>
              <td>fotografieren</td>
              <td>take photos</td>
            </tr>
            <tr>
              <td>Münzen / Briefmarken sammeln</td>
              <td>collect coins / stamps</td>
            </tr>
            <tr>
              <td>Gitarre / Klavier / Saxofon / Trompete spielen</td>
              <td>play guitar / piano / saxophone / trumpet</td>
            </tr>
            <tr>
              <td>singen</td>
              <td>sing</td>
            </tr>
            <tr>
              <td>tanzen / Salsa / Tango tanzen</td>
              <td>dance / dance salsa / tango</td>
            </tr>
            <tr>
              <td>reisen</td>
              <td>travel</td>
            </tr>
            <tr>
              <td>Englisch / Spanisch sprechen</td>
              <td>speak English / Spanish</td>
            </tr>
          </tbody>
        </table>

        <h2>Days of the Week</h2>
        <p>When to use: when you make plans, describe schedules, or talk about routines.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der Montag</td>
              <td>Monday</td>
            </tr>
            <tr>
              <td>der Dienstag</td>
              <td>Tuesday</td>
            </tr>
            <tr>
              <td>der Mittwoch</td>
              <td>Wednesday</td>
            </tr>
            <tr>
              <td>der Donnerstag</td>
              <td>Thursday</td>
            </tr>
            <tr>
              <td>der Freitag</td>
              <td>Friday</td>
            </tr>
            <tr>
              <td>der Samstag / der Sonnabend</td>
              <td>Saturday</td>
            </tr>
            <tr>
              <td>der Sonntag</td>
              <td>Sunday</td>
            </tr>
            <tr>
              <td>das Wochenende</td>
              <td>the weekend</td>
            </tr>
          </tbody>
        </table>

        <h2>Collectibles (Was kann man sammeln?)</h2>
        <p>When to use: when you talk about hobbies that involve collecting items.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Briefmarken</td>
              <td>stamps</td>
            </tr>
            <tr>
              <td>alte Autos</td>
              <td>old cars</td>
            </tr>
            <tr>
              <td>Muscheln</td>
              <td>shells</td>
            </tr>
            <tr>
              <td>alte Bücher</td>
              <td>old books</td>
            </tr>
            <tr>
              <td>Zinnsoldaten</td>
              <td>tin soldiers</td>
            </tr>
            <tr>
              <td>alte Radios</td>
              <td>old radios</td>
            </tr>
            <tr>
              <td>Gläser</td>
              <td>glassware</td>
            </tr>
            <tr>
              <td>Gartenzwerge</td>
              <td>garden gnomes</td>
            </tr>
            <tr>
              <td>Münzen</td>
              <td>coins</td>
            </tr>
            <tr>
              <td>Ansichtskarten</td>
              <td>postcards</td>
            </tr>
            <tr>
              <td>Kunstwerke</td>
              <td>artworks</td>
            </tr>
            <tr>
              <td>Wandteller</td>
              <td>decorative wall plates</td>
            </tr>
            <tr>
              <td>Steine</td>
              <td>stones</td>
            </tr>
            <tr>
              <td>Käfer</td>
              <td>beetles</td>
            </tr>
            <tr>
              <td>Matchboxautos</td>
              <td>matchbox cars</td>
            </tr>
          </tbody>
        </table>
      </div>,

      <div id="lrn-section-14">
        <h2>Grammar Tables</h2>

        <h3>Definite Article (der bestimmte Artikel)</h3>
        <p>When to use: use der/die/das when you refer to a specific, known noun.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>maskulin</th>
              <th>feminin</th>
              <th>neutrum</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der</td>
              <td>die</td>
              <td>das</td>
              <td>die</td>
            </tr>
          </tbody>
        </table>

        <h3>Indefinite / Negative / Possessive Articles</h3>
        <p>When to use: ein/eine for "a/an," kein/keine to negate a noun, mein/meine for "my."</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>maskulin</th>
              <th>feminin</th>
              <th>neutrum</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ein (a/an)</td>
              <td>ein</td>
              <td>eine</td>
              <td>ein</td>
              <td>none</td>
            </tr>
            <tr>
              <td>kein (no)</td>
              <td>kein</td>
              <td>keine</td>
              <td>kein</td>
              <td>keine</td>
            </tr>
            <tr>
              <td>mein (my)</td>
              <td>mein</td>
              <td>meine</td>
              <td>mein</td>
              <td>meine</td>
            </tr>
          </tbody>
        </table>

        <h3>Adjective Endings after ein(e): Nominative</h3>
        <p>When to use: when an adjective comes before the noun after ein/eine/kein/keine.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Gender</th>
              <th>Ending</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>maskulin</td>
              <td>-er</td>
              <td>ein neuer Drucker</td>
            </tr>
            <tr>
              <td>feminin</td>
              <td>-e</td>
              <td>eine neue Lampe</td>
            </tr>
            <tr>
              <td>neutrum</td>
              <td>-es</td>
              <td>ein neues Telefon</td>
            </tr>
            <tr>
              <td>Plural</td>
              <td>-en</td>
              <td>keine neuen Bücher</td>
            </tr>
          </tbody>
        </table>

        <h3>können: conjugation</h3>
        <p>When to use: to express ability ("I can") or general possibility ("Here you can").</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>können</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>kann</td>
            </tr>
            <tr>
              <td>du</td>
              <td>kannst</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>kann</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>können</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>könnt</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>können</td>
            </tr>
          </tbody>
        </table>
        <p>
          Sentence bracket: kann (pos. II) ... infinitive (end). Example: "Ich kann Tennis spielen."
        </p>

        <h3>fahren: stem-changing conjugation</h3>
        <p>When to use: to say you drive, travel by car, ride a motorbike, or ski.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>fahren</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>fahre</td>
            </tr>
            <tr>
              <td>du</td>
              <td>fährst (a to ä)</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>fährt (a to ä)</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>fahren</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>fahrt</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>fahren</td>
            </tr>
          </tbody>
        </table>

        <h3>Extended Verb Conjugation Table</h3>
        <p>When to use: reference for fahren, tanzen, lesen, sammeln, wandern, fotografieren.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>fahren</th>
              <th>tanzen</th>
              <th>lesen</th>
              <th>sammeln</th>
              <th>wandern</th>
              <th>fotografieren</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>fahre</td>
              <td>tanze</td>
              <td>lese</td>
              <td>sammle</td>
              <td>wandere</td>
              <td>fotografiere</td>
            </tr>
            <tr>
              <td>du</td>
              <td>fährst</td>
              <td>tanzt</td>
              <td>liest</td>
              <td>sammelst</td>
              <td>wanderst</td>
              <td>fotografierst</td>
            </tr>
            <tr>
              <td>er/sie/es</td>
              <td>fährt</td>
              <td>tanzt</td>
              <td>liest</td>
              <td>sammelt</td>
              <td>wandert</td>
              <td>fotografiert</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>fahren</td>
              <td>tanzen</td>
              <td>lesen</td>
              <td>sammeln</td>
              <td>wandern</td>
              <td>fotografieren</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>fahrt</td>
              <td>tanzt</td>
              <td>lest</td>
              <td>sammelt</td>
              <td>wandert</td>
              <td>fotografiert</td>
            </tr>
            <tr>
              <td>sie/Sie</td>
              <td>fahren</td>
              <td>tanzen</td>
              <td>lesen</td>
              <td>sammeln</td>
              <td>wandern</td>
              <td>fotografieren</td>
            </tr>
          </tbody>
        </table>

        <h3>Possessive Articles: Full Table</h3>
        <p>When to use: to say whose something is (my, your, his, her, our, your, their).</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>maskulin</th>
              <th>feminin</th>
              <th>neutrum</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>mein</td>
              <td>meine</td>
              <td>mein</td>
              <td>meine</td>
            </tr>
            <tr>
              <td>du</td>
              <td>dein</td>
              <td>deine</td>
              <td>dein</td>
              <td>deine</td>
            </tr>
            <tr>
              <td>er</td>
              <td>sein</td>
              <td>seine</td>
              <td>sein</td>
              <td>seine</td>
            </tr>
            <tr>
              <td>sie</td>
              <td>ihr</td>
              <td>ihre</td>
              <td>ihr</td>
              <td>ihre</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>unser</td>
              <td>unsere</td>
              <td>unser</td>
              <td>unsere</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>euer</td>
              <td>eure</td>
              <td>euer</td>
              <td>eure</td>
            </tr>
            <tr>
              <td>sie / Sie</td>
              <td>ihr / Ihr</td>
              <td>ihre / Ihre</td>
              <td>ihr / Ihr</td>
              <td>ihre / Ihre</td>
            </tr>
          </tbody>
        </table>

        <h3>Pronoun Substitution</h3>
        <p>When to use: to replace a noun you already mentioned to avoid repetition.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Noun article</th>
              <th>Pronoun</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der (maskulin)</td>
              <td>er</td>
              <td>der Computer: er</td>
            </tr>
            <tr>
              <td>die (feminin)</td>
              <td>sie</td>
              <td>die Lampe: sie</td>
            </tr>
            <tr>
              <td>das (neutrum)</td>
              <td>es</td>
              <td>das Telefon: es</td>
            </tr>
            <tr>
              <td>die (Plural)</td>
              <td>sie</td>
              <td>die Bücher: sie</td>
            </tr>
          </tbody>
        </table>

        <h3>Negation Summary</h3>
        <p>When to use: kein for nouns, nicht for verbs and adjectives.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Negate</th>
              <th>Word</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>noun (replaces ein)</td>
              <td>kein / keine</td>
              <td>kein Drucker, keine Lampe</td>
            </tr>
            <tr>
              <td>verb</td>
              <td>nicht</td>
              <td>Ich singe nicht. / Ich kann nicht singen.</td>
            </tr>
            <tr>
              <td>adjective</td>
              <td>nicht</td>
              <td>nicht bequem, nicht gut</td>
            </tr>
          </tbody>
        </table>

        <h3>Local Prepositions</h3>
        <p>When to use: Woher? takes aus. Wo? takes in / an / bei. Wohin? takes nach.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Preposition</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Woher? (from where)</td>
              <td>aus</td>
              <td>Ich komme aus Italien.</td>
            </tr>
            <tr>
              <td>Wo? (where)</td>
              <td>in / an / bei</td>
              <td>Ich wohne in Berlin.</td>
            </tr>
            <tr>
              <td>Wohin? (where to)</td>
              <td>nach</td>
              <td>Ich fahre nach München.</td>
            </tr>
          </tbody>
        </table>

        <h3>Question Words</h3>
        <p>When to use: when you ask open questions about people, places, things, and reasons.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>wie</td>
              <td>how</td>
            </tr>
            <tr>
              <td>was</td>
              <td>what</td>
            </tr>
            <tr>
              <td>wo</td>
              <td>where</td>
            </tr>
            <tr>
              <td>woher</td>
              <td>where from</td>
            </tr>
            <tr>
              <td>welche/r/s</td>
              <td>which</td>
            </tr>
          </tbody>
        </table>

        <h3>Word Stress Rules</h3>
        <p>When to use: when you pronounce native, compound, and foreign words.</p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Rule</th>
              <th>Pattern</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic rule</td>
              <td>stress first syllable</td>
              <td>KAFfee, TERminkalender</td>
            </tr>
            <tr>
              <td>Compound nouns</td>
              <td>stress first part</td>
              <td>BÜROstuhl, SPORThalle</td>
            </tr>
            <tr>
              <td>Foreign words</td>
              <td>stress last syllable</td>
              <td>TeleFON, KomPUter</td>
            </tr>
          </tbody>
        </table>
      </div>,

      <div id="lrn-section-15">
        <h2>Key Phrases (Wichtige Redemittel)</h2>
        <p>When to use: ready-made phrases for everyday situations covered in Kapitel 2.</p>

        <h3>Everyday Communication</h3>
        <ul className="lrn-list">
          <li>Herzlich willkommen!: Welcome!</li>
          <li>Hier ist Ihr Büro.: Here is your office.</li>
          <li>Fehlt etwas?: Is anything missing?</li>
          <li>Hoffentlich ist alles da.: Hopefully everything is here.</li>
          <li>Gerne.: With pleasure.</li>
          <li>Bis später.: See you later.</li>
          <li>Wie geht es?: How are you?</li>
        </ul>

        <h3>Problems at Work</h3>
        <ul className="lrn-list">
          <li>Das funktioniert nicht. / Das geht nicht.: It doesn't work.</li>
          <li>Das ist kaputt.: It is broken.</li>
          <li>Ich kann nicht drucken.: I cannot print.</li>
          <li>Was kostet …?: How much does … cost?</li>
          <li>Das ist billig / teuer!: That is cheap / expensive!</li>
        </ul>

        <h3>Classroom Language</h3>
        <ul className="lrn-list">
          <li>Können Sie das bitte wiederholen?: Can you please repeat that?</li>
          <li>Können Sie das bitte noch einmal erklären?: Can you please explain that again?</li>
          <li>Was bedeutet das?: What does that mean?</li>
        </ul>

        <h3>Free Time</h3>
        <ul className="lrn-list">
          <li>Ich fahre gern …: I like to drive / travel …</li>
          <li>Wie finden Sie …?: What do you think of …?</li>
          <li>Das finde ich auch.: I think so too.</li>
          <li>Am Wochenende fahre ich nach …: At the weekend I travel to …</li>
          <li>Ich spiele ein bisschen …: I play a little …</li>
          <li>Ich bin Nichtraucher.: I am a non-smoker.</li>
          <li>Ich kann leider nicht …: Unfortunately I cannot …</li>
        </ul>
      </div>
    ]
  },
  customCss: null
}

export default function GreetingsAndFirstContacts() {
  return <LearningTemplate config={config} />
}
