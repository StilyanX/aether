import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'faf',
  source: 'Begegnungen A1+ — Buscha/Szita',
  documentTitle: 'Family and Friends: AETHER',
  learning: {
    category: 'Unit 3',
    title: 'Familie und Freunde',
    subtitle: 'Family members, possessive pronouns, marital status, and describing relationships',
    sections: [
      <>
        <div id="lrn-section-0">
          <h2>Family Members</h2>
          <p>
            Most German family words come in male-female pairs. The article tells you which is
            which: <em>der Vater</em> (father) is masculine; <em>die Mutter</em> (mother) is
            feminine. Knowing one pair helps you learn the next.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              German often pairs male and female family members. Given that <em>der Vater</em> means
              "father", what do you think <em>die Mutter</em> means?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                <em>die Mutter</em> means "mother".
              </p>
              <p>Family nouns in German match the biological gender of the person they describe.</p>
            </details>
          </div>
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
                  <td>Vater</td>
                  <td>der</td>
                  <td>father</td>
                  <td>Väter</td>
                </tr>
                <tr>
                  <td>Mutter</td>
                  <td>die</td>
                  <td>mother</td>
                  <td>Mütter</td>
                </tr>
                <tr>
                  <td>Sohn</td>
                  <td>der</td>
                  <td>son</td>
                  <td>Söhne</td>
                </tr>
                <tr>
                  <td>Tochter</td>
                  <td>die</td>
                  <td>daughter</td>
                  <td>Töchter</td>
                </tr>
                <tr>
                  <td>Bruder</td>
                  <td>der</td>
                  <td>brother</td>
                  <td>Brüder</td>
                </tr>
                <tr>
                  <td>Schwester</td>
                  <td>die</td>
                  <td>sister</td>
                  <td>Schwestern</td>
                </tr>
                <tr>
                  <td>Eltern</td>
                  <td>die</td>
                  <td>parents</td>
                  <td>plural only</td>
                </tr>
                <tr>
                  <td>Geschwister</td>
                  <td>die</td>
                  <td>siblings</td>
                  <td>plural only</td>
                </tr>
                <tr>
                  <td>Kind</td>
                  <td>das</td>
                  <td>child</td>
                  <td>Kinder</td>
                </tr>
                <tr>
                  <td>Mann</td>
                  <td>der</td>
                  <td>man / husband</td>
                  <td>Männer</td>
                </tr>
                <tr>
                  <td>Frau</td>
                  <td>die</td>
                  <td>woman / wife</td>
                  <td>Frauen</td>
                </tr>
                <tr>
                  <td>Ehepartner</td>
                  <td>der</td>
                  <td>spouse (male)</td>
                  <td>Ehepartner</td>
                </tr>
                <tr>
                  <td>Ehepartnerin</td>
                  <td>die</td>
                  <td>spouse (female)</td>
                  <td>Ehepartnerinnen</td>
                </tr>
                <tr>
                  <td>Freund</td>
                  <td>der</td>
                  <td>friend (male)</td>
                  <td>Freunde</td>
                </tr>
                <tr>
                  <td>Freundin</td>
                  <td>die</td>
                  <td>friend (female)</td>
                  <td>Freundinnen</td>
                </tr>
                <tr>
                  <td>Nachbar</td>
                  <td>der</td>
                  <td>neighbour (male)</td>
                  <td>Nachbarn</td>
                </tr>
                <tr>
                  <td>Nachbarin</td>
                  <td>die</td>
                  <td>neighbour (female)</td>
                  <td>Nachbarinnen</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Several of these words change their vowel in the plural: a becomes ä, u becomes ü.
              Those two dots are called an umlaut. <em>Vater</em> becomes <em>Väter</em>;{' '}
              <em>Bruder</em> becomes <em>Brüder</em>. In dictionaries, the symbol ² marks this
              pattern.
            </p>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-1">
          <h2>Possessive Pronouns</h2>
          <p>Compare these two sentences:</p>
          <ul className="lrn-list">
            <li>
              <em>Das ist mein Vater.</em> — That is my father.
            </li>
            <li>
              <em>Das ist meine Mutter.</em> — That is my mother.
            </li>
          </ul>
          <p>
            The possessive is "my" in both. In German it changes: <em>mein</em> before a masculine
            noun, <em>meine</em> before a feminine noun. The noun's gender, not the owner's, drives
            the ending.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Every German noun has a grammatical gender. Any word placed before it — including
              possessives — must reflect that gender in its ending. The owner's gender is
              irrelevant; only the noun's gender matters.
            </p>
          </div>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>Owner</th>
                  <th>Before masc./neuter noun</th>
                  <th>Before fem./plural noun</th>
                  <th>English</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ich (I)</td>
                  <td>mein</td>
                  <td>meine</td>
                  <td>my</td>
                </tr>
                <tr>
                  <td>du (you, informal)</td>
                  <td>dein</td>
                  <td>deine</td>
                  <td>your (informal)</td>
                </tr>
                <tr>
                  <td>er (he)</td>
                  <td>sein</td>
                  <td>seine</td>
                  <td>his</td>
                </tr>
                <tr>
                  <td>sie (she)</td>
                  <td>ihr</td>
                  <td>ihre</td>
                  <td>her</td>
                </tr>
                <tr>
                  <td>Sie (you, formal)</td>
                  <td>Ihr</td>
                  <td>Ihre</td>
                  <td>your (formal)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Watch out: ihr vs. Ihr</span>
            <p>
              <strong>ihr</strong> (lowercase) has two jobs: it is the possessive for "her" (
              <em>ihr Vater</em> = her father), and it is the personal pronoun for "you" when
              addressing a group informally (introduced in Unit 2).
            </p>
            <p>
              <strong>Ihr</strong> (capitalised) is the formal "your".
            </p>
            <p>Context and capitalisation distinguish them.</p>
          </div>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Watch out: sein</span>
            <p>
              <strong>sein</strong> is both a possessive pronoun (his) and the infinitive of the
              verb "to be".
            </p>
            <p>Context tells you which meaning applies.</p>
          </div>
          <h3>The Negative Article kein</h3>
          <p>
            <strong>kein / keine</strong> means "no" or "not any". It negates the indefinite article
            and follows the same pattern as <strong>ein / eine</strong>:
          </p>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>With article</th>
                  <th>Negated</th>
                  <th>English</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <em>ein</em> Bruder
                  </td>
                  <td>
                    <em>kein</em> Bruder
                  </td>
                  <td>no brother</td>
                </tr>
                <tr>
                  <td>
                    <em>eine</em> Schwester
                  </td>
                  <td>
                    <em>keine</em> Schwester
                  </td>
                  <td>no sister</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-2">
          <h2>Marital Status</h2>
          <p>
            Three adjectives cover most situations. They do not change their ending regardless of
            who you are describing.
          </p>
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
                  <td>
                    <strong>ledig</strong>
                  </td>
                  <td>single, unmarried</td>
                </tr>
                <tr>
                  <td>
                    <strong>verheiratet</strong>
                  </td>
                  <td>married</td>
                </tr>
                <tr>
                  <td>
                    <strong>geschieden</strong>
                  </td>
                  <td>divorced</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <em>Sind Sie verheiratet?</em> — Are you married? (formal)
          </p>
          <p>
            <em>Bist du verheiratet?</em> — Are you married? (informal)
          </p>
          <p>
            <em>Ich bin ledig.</em> — I am single.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">der Familienstand</span>
            <div className="lrn-definition-desc">
              <p>Marital status / family status. Noun, masculine, no plural.</p>
            </div>
          </div>
        </div>
      </>
    ]
  },
  practice: [
    {
      q: 'What are the three marital status adjectives in German?',
      a: 'ledig (single/unmarried), verheiratet (married), geschieden (divorced). Example: Ich bin verheiratet.'
    },
    {
      q: 'What is the article and plural of "daughter"?',
      a: 'die Tochter, Töchter. Article: die (feminine). Plural adds umlaut: Töchter. The ² symbol in dictionaries signals this umlaut pattern.'
    },
    {
      q: 'What is the possessive pronoun for "his" before a masculine noun?',
      a: 'sein. Example: sein Freund (his male friend). Before a feminine/plural noun it becomes seine: seine Freundin.'
    },
    {
      q: 'Which two German family words exist only in the plural?',
      a: 'die Eltern (parents) and die Geschwister (siblings). Neither has a singular form — you cannot say "eine Elter" or "ein Geschwister" in standard German.'
    },
    {
      q: 'Translate: "This is my wife."',
      a: 'Das ist meine Frau. die Frau means both "woman" and "wife". meine = my (feminine noun: Frau).'
    },
    {
      q: 'What is "kein / keine" and how does it work?',
      a: 'kein/keine = no, not any. It negates a noun with an indefinite article. kein (m/n): kein Freund (no male friend). keine (f/Pl.): keine Freundin (no female friend).'
    },
    {
      q: 'What is the difference between "ihr" (lowercase) and "Ihr" (capitalised)?',
      a: 'ihr (lowercase) = her (possessive, 3rd person singular feminine) OR you (informal plural pronoun). Ihr (capitalised) = your (formal possessive). Context and capitalisation distinguish them.'
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Familie und Freunde',
    sections: [
      <>
        <h2>Family</h2>
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
                <td>Vater</td>
                <td>der</td>
                <td>father</td>
                <td>Väter</td>
              </tr>
              <tr>
                <td>Mutter</td>
                <td>die</td>
                <td>mother</td>
                <td>Mütter</td>
              </tr>
              <tr>
                <td>Sohn</td>
                <td>der</td>
                <td>son</td>
                <td>Söhne</td>
              </tr>
              <tr>
                <td>Tochter</td>
                <td>die</td>
                <td>daughter</td>
                <td>Töchter</td>
              </tr>
              <tr>
                <td>Bruder</td>
                <td>der</td>
                <td>brother</td>
                <td>Brüder</td>
              </tr>
              <tr>
                <td>Schwester</td>
                <td>die</td>
                <td>sister</td>
                <td>Schwestern</td>
              </tr>
              <tr>
                <td>Eltern</td>
                <td>die</td>
                <td>parents</td>
                <td>plural only</td>
              </tr>
              <tr>
                <td>Geschwister</td>
                <td>die</td>
                <td>siblings</td>
                <td>plural only</td>
              </tr>
              <tr>
                <td>Kind</td>
                <td>das</td>
                <td>child</td>
                <td>Kinder</td>
              </tr>
              <tr>
                <td>Mann</td>
                <td>der</td>
                <td>man / husband</td>
                <td>Männer</td>
              </tr>
              <tr>
                <td>Frau</td>
                <td>die</td>
                <td>woman / wife</td>
                <td>Frauen</td>
              </tr>
              <tr>
                <td>Ehepartner</td>
                <td>der</td>
                <td>spouse (m)</td>
                <td>Ehepartner</td>
              </tr>
              <tr>
                <td>Ehepartnerin</td>
                <td>die</td>
                <td>spouse (f)</td>
                <td>Ehepartnerinnen</td>
              </tr>
              <tr>
                <td>Freund</td>
                <td>der</td>
                <td>friend (m)</td>
                <td>Freunde</td>
              </tr>
              <tr>
                <td>Freundin</td>
                <td>die</td>
                <td>friend (f)</td>
                <td>Freundinnen</td>
              </tr>
              <tr>
                <td>Nachbar</td>
                <td>der</td>
                <td>neighbour (m)</td>
                <td>Nachbarn</td>
              </tr>
              <tr>
                <td>Nachbarin</td>
                <td>die</td>
                <td>neighbour (f)</td>
                <td>Nachbarinnen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Possessive Pronouns</h2>
        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Owner</th>
                <th>m/n noun</th>
                <th>f/Pl. noun</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ich</td>
                <td>mein</td>
                <td>meine</td>
                <td>my</td>
              </tr>
              <tr>
                <td>du</td>
                <td>dein</td>
                <td>deine</td>
                <td>your (informal)</td>
              </tr>
              <tr>
                <td>er</td>
                <td>sein</td>
                <td>seine</td>
                <td>his</td>
              </tr>
              <tr>
                <td>sie</td>
                <td>ihr</td>
                <td>ihre</td>
                <td>her</td>
              </tr>
              <tr>
                <td>Sie</td>
                <td>Ihr</td>
                <td>Ihre</td>
                <td>your (formal)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Marital Status</h2>
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
            </tbody>
          </table>
        </div>
      </>
    ]
  },
  customCss: null
}

export default function FamilyAndFriends() {
  return <LearningTemplate config={config} />
}
