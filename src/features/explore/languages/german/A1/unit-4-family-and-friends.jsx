import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'faf',
  documentTitle: 'Family and Friends: AETHER',
  learning: {
    category: 'Unit 4',
    title: 'Familie und Freunde',
    subtitle: 'Family members, possessive pronouns, marital status, and describing relationships',
    sections: [
      <>
        <div id="lrn-section-0">
          <h2>Family Members</h2>
          <p>
            Every German noun (a word for a person or thing) has a gender. Gender here is just a
            label, not a statement about the real world. There are three: masculine (<em>der</em>),
            feminine (<em>die</em>), and neuter (<em>das</em>). Plural words almost always use{' '}
            <em>die</em>.
          </p>
          <p>
            Many family words come in male-female pairs, and these often match the person:{' '}
            <em>der Vater</em> (father) is masculine, <em>die Mutter</em> (mother) is feminine. But
            not always. <em>das Kind</em> (the child) is neuter, even though a child is a boy or a
            girl. So learn each word together with its article.
          </p>
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
                <tr>
                  <td>Großvater</td>
                  <td>der</td>
                  <td>grandfather</td>
                  <td>Großväter</td>
                </tr>
                <tr>
                  <td>Großmutter</td>
                  <td>die</td>
                  <td>grandmother</td>
                  <td>Großmütter</td>
                </tr>
                <tr>
                  <td>Onkel</td>
                  <td>der</td>
                  <td>uncle</td>
                  <td>Onkel</td>
                </tr>
                <tr>
                  <td>Tante</td>
                  <td>die</td>
                  <td>aunt</td>
                  <td>Tanten</td>
                </tr>
                <tr>
                  <td>Cousin</td>
                  <td>der</td>
                  <td>cousin (male)</td>
                  <td>Cousins</td>
                </tr>
                <tr>
                  <td>Cousine</td>
                  <td>die</td>
                  <td>cousin (female)</td>
                  <td>Cousinen</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Two words in the table are plural only: <em>die Eltern</em> (parents) and{' '}
            <em>die Geschwister</em> (siblings). They have no singular form. You cannot say "one
            parent" or "one sibling" with these words.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">THE PLURAL UMLAUT</span>
            <p>
              Several of these words change their vowel in the plural: a becomes ä, u becomes ü, o
              becomes ö. Those two dots are called an umlaut. <em>Vater</em> becomes <em>Väter</em>;{' '}
              <em>Bruder</em> becomes <em>Brüder</em>. Dictionaries do not use a special code for
              this. They simply print the full plural with the two dots over the vowel, so you can
              see the change at a glance.
            </p>
          </div>
        </div>
      </>,
      <>
        <div id="lrn-section-1">
          <h2>Possessive Pronouns</h2>
          <p>
            A possessive pronoun is a small word that shows who owns something, like <em>my</em>,{' '}
            <em>your</em>, or <em>his</em>. Watch what happens with family words:
          </p>
          <ul className="lrn-list">
            <li>
              <em>Das ist mein Vater.</em> = That is my father.
            </li>
            <li>
              <em>Das ist meine Mutter.</em> = That is my mother.
            </li>
            <li>
              <em>Das sind meine Eltern.</em> = Those are my parents.
            </li>
          </ul>
          <p>
            The possessive is "my" in all three. In German it changes with the noun: <em>mein</em>{' '}
            before a masculine or neuter noun, <em>meine</em> before a feminine or plural noun. The
            rule is simple: the noun's gender drives the ending, not the owner's. So with family
            words you check the noun first, then pick <em>mein</em> or <em>meine</em>.
          </p>
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
              <em>ihr Vater</em> = her father), and it is the personal pronoun (a word that stands
              in for a person, like <em>I</em> or <em>you</em>) for "you" when addressing a group
              informally.
            </p>
            <p>
              <strong>Ihr</strong> (capitalised) is the formal "your".
            </p>
            <p>Context and capitalisation distinguish them.</p>
          </div>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Watch out: sein</span>
            <p>
              <strong>sein</strong> is both a possessive pronoun (his) and the infinitive (the
              basic, unchanged form) of the verb "to be".
            </p>
            <p>Context tells you which meaning applies.</p>
          </div>
          <h3>The Negative Article kein</h3>
          <p>
            First, a quick recall. <strong>ein / eine</strong> is the indefinite article: the word
            for "a" or "an". You say <em>ein Bruder</em> (a brother) and <em>eine Schwester</em> (a
            sister). German marks gender here too: <em>ein</em> before a masculine or neuter noun,{' '}
            <em>eine</em> before a feminine noun.
          </p>
          <p>
            <strong>kein / keine</strong> means "no" or "not any". It is the "no" form of{' '}
            <strong>ein / eine</strong> (it makes the noun negative) and follows the same pattern:
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
          <p>
            In a full sentence: <em>Das ist kein Bruder.</em> = That is not a brother.
          </p>
        </div>
      </>,
      <>
        <div id="lrn-section-2">
          <h2>Marital Status</h2>
          <p>
            Three adjectives (describing words) cover most situations. They do not change their
            ending, no matter who you describe.
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
            <em>Sind Sie verheiratet?</em> = Are you married? (formal)
          </p>
          <p>
            <em>Bist du verheiratet?</em> = Are you married? (informal)
          </p>
          <p>
            <em>Ich bin ledig.</em> = I am single.
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
      a: 'die Tochter, Töchter. Article: die (feminine). The plural adds an umlaut: the two dots over the vowel. Tochter becomes Töchter.'
    },
    {
      q: 'What is the possessive pronoun for "his" before a masculine noun?',
      a: 'sein. Example: sein Freund (his male friend). Before a feminine/plural noun it becomes seine: seine Freundin.'
    },
    {
      q: 'Which two German family words exist only in the plural?',
      a: 'die Eltern (parents) and die Geschwister (siblings). Neither has a singular form. You cannot say "eine Elter" or "ein Geschwister" in standard German.'
    },
    {
      q: 'Translate: "This is my wife."',
      a: 'Das ist meine Frau. die Frau means both "woman" and "wife". meine = my (feminine noun: Frau).'
    },
    {
      q: 'What is "kein / keine" and how does it work?',
      a: 'kein/keine = no, not any. It is the "no" form of ein/eine, it makes a noun negative. kein before a masculine or neuter noun: kein Freund (no male friend). keine before a feminine or plural noun: keine Freundin (no female friend).'
    },
    {
      q: 'What is the difference between "ihr" (lowercase) and "Ihr" (capitalised)?',
      a: 'ihr (lowercase) = her (the possessive, as in ihr Vater = her father) OR you (when speaking to a group of friends). Ihr (capitalised) = your (formal). Context and capitalisation distinguish them.'
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Familie und Freunde',
    sections: [
      <>
        <h2>Key Pairs and Rules</h2>
        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Quick rule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three genders</td>
                <td>der (m), die (f), das (n). The article is part of the word.</td>
              </tr>
              <tr>
                <td>Plural article</td>
                <td>Almost every plural uses die.</td>
              </tr>
              <tr>
                <td>Umlaut plural</td>
                <td>a → ä, u → ü, o → ö. Vater → Väter, Mutter → Mütter.</td>
              </tr>
              <tr>
                <td>Plural-only words</td>
                <td>die Eltern (parents), die Geschwister (siblings). No singular.</td>
              </tr>
              <tr>
                <td>Possessive</td>
                <td>mein before m/n noun, meine before f/plural noun.</td>
              </tr>
              <tr>
                <td>kein / keine</td>
                <td>The "no" form of ein / eine. kein Bruder, keine Schwester.</td>
              </tr>
              <tr>
                <td>Marital status</td>
                <td>ledig (single), verheiratet (married), geschieden (divorced).</td>
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
