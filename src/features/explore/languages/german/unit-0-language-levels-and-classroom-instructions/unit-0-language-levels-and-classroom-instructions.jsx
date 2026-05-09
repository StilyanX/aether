import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'k0',
  source: 'Begegnungen A1+ — Buscha/Szita',
  documentTitle: 'Willkommen: Language Levels and Classroom Instructions: AETHER',
  learning: {
    category: 'Kapitel 0',
    title: 'Willkommen',
    subtitle: 'Language levels, the alphabet, numbers, and classroom vocabulary',
    sections: [
      <div id="lrn-section-0">
        <h1>Sprachniveaus: Language Levels</h1>
        <p>
          The Common European Framework of Reference (CEFR) organizes language ability into six
          levels. Begegnungen A1+ targets the first level.
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
              <td>Understand complex text, interact fluently with native speakers</td>
            </tr>
            <tr>
              <td>C1</td>
              <td>Advanced</td>
              <td>Express ideas fluently and spontaneously without much searching for words</td>
            </tr>
            <tr>
              <td>C2</td>
              <td>Mastery</td>
              <td>
                Understand virtually everything, express yourself precisely in complex situations
              </td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-insight">
          <strong>Where you are now:</strong> A1. You will understand short, simple sentences when
          people speak slowly and clearly.
        </div>
      </div>,

      <div id="lrn-section-1">
        <h1>Das Alphabet: The German Alphabet</h1>
        <p>
          German uses the same 26 letters as English plus four extra characters: Ä, Ö, Ü, and ß.
          Each example word below includes an article (der, die, or das) that marks its grammatical
          gender. Gender is explained fully in the Course Materials section.
        </p>

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
              <td>veh</td>
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
              <td>tset</td>
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
              <th>Example</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ä ä</td>
              <td>A-Umlaut</td>
              <td>das Fach → die Fächer</td>
              <td>subject (plural)</td>
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
              <td>Eszett / scharfes S</td>
              <td>die Straße</td>
              <td>street</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-tip">
          <strong>Tip:</strong> When you type on a keyboard without umlauts, write ae, oe, ue, and
          ss instead (e.g., Mueller for Müller).
        </div>
      </div>,

      <div id="lrn-section-2">
        <h1>Zahlen 0–20: Numbers 0–20</h1>
        <p>
          Learn these numbers by heart. You will use them for addresses, phone numbers, and ages.
        </p>

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

        <div className="lrn-insight">
          <strong>Pattern:</strong> 13 to 19 are built by adding -zehn to the matching base word:
          vier + zehn = vierzehn. Two exceptions: sechzehn drops the -s (not sechszehn), and
          siebzehn drops the -en (not siebenzehn).
        </div>
      </div>,

      <div id="lrn-section-3">
        <h1>Im Kursraum: Classroom Instructions</h1>
        <p>
          Your teacher will use these phrases every lesson. Recognize them before your first class
          and you can follow instruction in German from the start.
        </p>

        <h2>Teacher Instructions (Lehreranweisungen)</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Öffnen Sie das Buch auf Seite …</td>
              <td>Open the book to page …</td>
            </tr>
            <tr>
              <td>Schließen Sie das Buch.</td>
              <td>Close the book.</td>
            </tr>
            <tr>
              <td>Hören Sie zu.</td>
              <td>Listen.</td>
            </tr>
            <tr>
              <td>Lesen Sie den Text.</td>
              <td>Read the text.</td>
            </tr>
            <tr>
              <td>Schreiben Sie.</td>
              <td>Write.</td>
            </tr>
            <tr>
              <td>Wiederholen Sie.</td>
              <td>Repeat.</td>
            </tr>
            <tr>
              <td>Sprechen Sie nach.</td>
              <td>Repeat after me.</td>
            </tr>
            <tr>
              <td>Arbeiten Sie zu zweit.</td>
              <td>Work in pairs.</td>
            </tr>
            <tr>
              <td>Arbeiten Sie in Gruppen.</td>
              <td>Work in groups.</td>
            </tr>
            <tr>
              <td>Schauen Sie an die Tafel.</td>
              <td>Look at the board.</td>
            </tr>
            <tr>
              <td>Machen Sie eine Pause.</td>
              <td>Take a break.</td>
            </tr>
          </tbody>
        </table>

        <h2>Student Phrases (Schülerphrasen)</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Können Sie das bitte wiederholen?</td>
              <td>Can you please repeat that?</td>
            </tr>
            <tr>
              <td>Können Sie das bitte langsamer sagen?</td>
              <td>Can you please say that more slowly?</td>
            </tr>
            <tr>
              <td>Was bedeutet …?</td>
              <td>What does … mean?</td>
            </tr>
            <tr>
              <td>Wie schreibt man …?</td>
              <td>How do you spell …?</td>
            </tr>
            <tr>
              <td>Ich verstehe das nicht.</td>
              <td>I do not understand that.</td>
            </tr>
            <tr>
              <td>Entschuldigung, ich habe eine Frage.</td>
              <td>Excuse me, I have a question.</td>
            </tr>
            <tr>
              <td>Auf Seite wie viel?</td>
              <td>On which page?</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-tip">
          <strong>Sie vs. du:</strong> German has two words for "you". Du is informal (for friends,
          family, and children). Sie is formal (for teachers, strangers, and authority figures).
          Every phrase above uses Sie. In a German classroom, students always address the teacher
          with Sie, never du.
        </div>
      </div>,

      <div id="lrn-section-4">
        <h1>Kursmaterialien: Course Materials</h1>
        <p>Know the names of the things on your desk.</p>

        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Gender</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>das Buch</td>
              <td>neuter</td>
              <td>book</td>
            </tr>
            <tr>
              <td>das Arbeitsbuch</td>
              <td>neuter</td>
              <td>workbook</td>
            </tr>
            <tr>
              <td>das Heft</td>
              <td>neuter</td>
              <td>notebook</td>
            </tr>
            <tr>
              <td>der Stift</td>
              <td>masculine</td>
              <td>pen / pencil</td>
            </tr>
            <tr>
              <td>das Papier</td>
              <td>neuter</td>
              <td>paper</td>
            </tr>
            <tr>
              <td>die Tasche</td>
              <td>feminine</td>
              <td>bag</td>
            </tr>
            <tr>
              <td>das Wörterbuch</td>
              <td>neuter</td>
              <td>dictionary</td>
            </tr>
            <tr>
              <td>der Computer</td>
              <td>masculine</td>
              <td>computer</td>
            </tr>
            <tr>
              <td>das Handy</td>
              <td>neuter</td>
              <td>mobile phone</td>
            </tr>
            <tr>
              <td>die Tafel</td>
              <td>feminine</td>
              <td>blackboard / whiteboard</td>
            </tr>
          </tbody>
        </table>

        <div className="lrn-insight">
          <strong>Gender rule:</strong> Every German noun has a gender (der, die, das). You cannot
          predict gender from the word's meaning. Learn each noun together with its article.
        </div>
      </div>
    ]
  },
  practice: [
    {
      q: 'What does CEFR stand for, and what does it measure?',
      a: 'CEFR stands for Common European Framework of Reference. It measures language ability and organizes it into six levels from A1 (beginner) to C2 (mastery). Every level describes what you can do with the language, not just what you have studied.'
    },
    {
      q: 'What is the German word for the number 7?',
      a: 'The German word for 7 is sieben. Remember it for 17 too: siebzehn drops the -en, so it is siebzehn, not siebenzehn.'
    },
    {
      q: 'Your teacher says "Öffnen Sie das Buch auf Seite 12." What should you do?',
      a: 'Open your book to page 12. Öffnen means "open", Buch means "book", and Seite means "page". The number that follows tells you which page.'
    },
    {
      q: 'At which CEFR level can you handle most travel situations?',
      a: 'B1 (Threshold). At B1 you can manage routine travel situations and produce simple connected text on familiar topics. That is a step above A2 and two steps above A1.'
    },
    {
      q: 'What article does "Stift" take, and what does it mean?',
      a: 'Stift takes the masculine article: der Stift. It means pen or pencil. In German, you must learn every noun together with its article because you cannot predict gender from the word alone.'
    },
    {
      q: 'How do you build the German numbers 13 through 19?',
      a: 'Add -zehn to the base number word. For example, vier + zehn = vierzehn (14). Two exceptions: sechzehn drops the -s from sechs, and siebzehn drops the -en from sieben.'
    },
    {
      q: 'A classmate asks "Was bedeutet Arbeitsbuch?" What does this sentence mean, and what is the answer?',
      a: '"Was bedeutet …?" means "What does … mean?" The student is asking for the meaning of Arbeitsbuch. The answer is: das Arbeitsbuch is the workbook (a neuter noun).'
    },
    {
      q: 'How do you type Ü on a keyboard that has no German characters?',
      a: 'Type ue instead. The rule applies to all three umlauts: ä becomes ae, ö becomes oe, and ü becomes ue. For ß, write ss. So Müller becomes Mueller.'
    },
    {
      q: 'What is the difference between Sie and du in German?',
      a: 'Sie is the formal "you" used with teachers, strangers, and authority figures. Du is the informal "you" used with friends, family, and children. In a German classroom, students always address the teacher with Sie.'
    },
    {
      q: 'What is the German word for 12, and how is it different from 13–19?',
      a: 'The German word for 12 is zwölf. It does not follow the -zehn pattern. Numbers 13 to 19 are built by adding -zehn to the base word, but 11 (elf) and 12 (zwölf) are unique words you must memorize.'
    },
    {
      q: 'Your teacher says "Arbeiten Sie zu zweit." What does this mean?',
      a: 'Work in pairs. Zu zweit means "in twos". If the teacher says "Arbeiten Sie in Gruppen", that means work in groups instead.'
    },
    {
      q: 'Name the four extra characters in the German alphabet that English does not have.',
      a: 'Ä (A-Umlaut), Ö (O-Umlaut), Ü (U-Umlaut), and ß (Eszett or scharfes S). These appear in common words like hören (to listen), die Übung (exercise), and die Straße (street).'
    },
    {
      q: 'What can you do at CEFR level C2?',
      a: 'At C2 (Mastery) you understand virtually everything you hear and read. You can express yourself precisely in complex situations. This is the highest level and represents near-native fluency.'
    },
    {
      q: 'How do you say "Excuse me, I have a question" in German?',
      a: 'Entschuldigung, ich habe eine Frage. Entschuldigung means "excuse me", ich habe means "I have", and eine Frage means "a question". Use this any time you want to ask the teacher something.'
    },
    {
      q: 'What article does "Tasche" take, and what does it mean?',
      a: 'Tasche takes the feminine article: die Tasche. It means bag. Along with die Tafel (blackboard), it is one of only two feminine nouns in the Kursmaterialien vocabulary list.'
    },
    {
      q: 'What is the German word for 16, and why is it spelled that way?',
      a: 'The German word for 16 is sechzehn, not sechszehn. The -s is dropped from sechs to make it easier to say. This is one of two exceptions to the regular -zehn pattern (the other is siebzehn).'
    },
    {
      q: 'How do you ask a teacher to speak more slowly in German?',
      a: 'Say "Können Sie das bitte langsamer sagen?" This means "Can you please say that more slowly?" Langsamer means "more slowly". Use this when you understand some words but need more time to process them.'
    },
    {
      q: 'A student is at A1 level. What can they realistically do in German?',
      a: 'An A1 learner can use familiar phrases and basic expressions. They can introduce themselves, ask and answer simple questions about personal details such as name, age, and where they live. They understand short, simple sentences when people speak slowly and clearly.'
    },
    {
      q: 'What does "Sprechen Sie nach" mean?',
      a: '"Sprechen Sie nach" means "Repeat after me." The teacher says something and expects you to say it back. Sprechen means "to speak" and nach means "after" in this context.'
    },
    {
      q: 'What is the gender rule for German nouns, and why does it matter?',
      a: 'Every German noun has one of three genders: masculine (der), feminine (die), or neuter (das). You cannot predict gender from the meaning of the word. It matters because the article changes depending on how the noun is used in a sentence, so you must learn each word together with its article.'
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Willkommen',
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
              <td>Understand complex text, interact fluently with native speakers</td>
            </tr>
            <tr>
              <td>C1</td>
              <td>Advanced</td>
              <td>Express ideas fluently and spontaneously without much searching for words</td>
            </tr>
            <tr>
              <td>C2</td>
              <td>Mastery</td>
              <td>
                Understand virtually everything, express yourself precisely in complex situations
              </td>
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
              <td>veh</td>
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
              <td>tset</td>
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

        <h2>Im Kursraum: Teacher Instructions</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Öffnen Sie das Buch auf Seite …</td>
              <td>Open the book to page …</td>
            </tr>
            <tr>
              <td>Schließen Sie das Buch.</td>
              <td>Close the book.</td>
            </tr>
            <tr>
              <td>Hören Sie zu.</td>
              <td>Listen.</td>
            </tr>
            <tr>
              <td>Lesen Sie den Text.</td>
              <td>Read the text.</td>
            </tr>
            <tr>
              <td>Schreiben Sie.</td>
              <td>Write.</td>
            </tr>
            <tr>
              <td>Wiederholen Sie.</td>
              <td>Repeat.</td>
            </tr>
            <tr>
              <td>Sprechen Sie nach.</td>
              <td>Repeat after me.</td>
            </tr>
            <tr>
              <td>Arbeiten Sie zu zweit.</td>
              <td>Work in pairs.</td>
            </tr>
            <tr>
              <td>Arbeiten Sie in Gruppen.</td>
              <td>Work in groups.</td>
            </tr>
            <tr>
              <td>Schauen Sie an die Tafel.</td>
              <td>Look at the board.</td>
            </tr>
            <tr>
              <td>Machen Sie eine Pause.</td>
              <td>Take a break.</td>
            </tr>
          </tbody>
        </table>

        <h2>Im Kursraum: Student Phrases</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Können Sie das bitte wiederholen?</td>
              <td>Can you please repeat that?</td>
            </tr>
            <tr>
              <td>Können Sie das bitte langsamer sagen?</td>
              <td>Can you please say that more slowly?</td>
            </tr>
            <tr>
              <td>Was bedeutet …?</td>
              <td>What does … mean?</td>
            </tr>
            <tr>
              <td>Wie schreibt man …?</td>
              <td>How do you spell …?</td>
            </tr>
            <tr>
              <td>Ich verstehe das nicht.</td>
              <td>I do not understand that.</td>
            </tr>
            <tr>
              <td>Entschuldigung, ich habe eine Frage.</td>
              <td>Excuse me, I have a question.</td>
            </tr>
            <tr>
              <td>Auf Seite wie viel?</td>
              <td>On which page?</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Sie vs. du:</strong> Use Sie with teachers and strangers. Use du with friends and
          family.
        </p>

        <h2>Kursmaterialien: Course Materials</h2>
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
              <td>das Buch</td>
              <td>das</td>
              <td>book</td>
            </tr>
            <tr>
              <td>das Arbeitsbuch</td>
              <td>das</td>
              <td>workbook</td>
            </tr>
            <tr>
              <td>das Heft</td>
              <td>das</td>
              <td>notebook</td>
            </tr>
            <tr>
              <td>der Stift</td>
              <td>der</td>
              <td>pen / pencil</td>
            </tr>
            <tr>
              <td>das Papier</td>
              <td>das</td>
              <td>paper</td>
            </tr>
            <tr>
              <td>die Tasche</td>
              <td>die</td>
              <td>bag</td>
            </tr>
            <tr>
              <td>das Wörterbuch</td>
              <td>das</td>
              <td>dictionary</td>
            </tr>
            <tr>
              <td>der Computer</td>
              <td>der</td>
              <td>computer</td>
            </tr>
            <tr>
              <td>das Handy</td>
              <td>das</td>
              <td>mobile phone</td>
            </tr>
            <tr>
              <td>die Tafel</td>
              <td>die</td>
              <td>blackboard / whiteboard</td>
            </tr>
          </tbody>
        </table>
        <p>
          Every German noun has a gender. Learn each word together with its article (der / die /
          das).
        </p>
      </>
    ]
  },
  customCss: null
}

export default function LanguageLevelsContent() {
  return <LearningTemplate config={config} />
}
