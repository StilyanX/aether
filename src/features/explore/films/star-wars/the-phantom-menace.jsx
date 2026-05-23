import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './the-phantom-menace-viz'

function ChapterDivider({ children }) {
  return (
    <div className="lrn-header lrn-chapter-divider">
      <div className="lrn-header-text">{children}</div>
    </div>
  )
}

function tradeFederationAttackContent(C) {
  return {
    sections: [
      <ChapterDivider key="div-tradeFederationAttackContent">
        <h2>Act I: Trade Federation Attack</h2>
        <p>The Jedi board the cruiser. The Federation invades.</p>
      </ChapterDivider>,
      <>
        <div className="lrn-header">
          <div className="lrn-header-text">
            <h2>Why This Scene Matters</h2>
            <p>
              The Phantom Menace opens not with a battle, but with a trade dispute. This choice
              tells you the film is about how democracies are pressured slowly, through
              manipulation, not overnight coups.
            </p>
          </div>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">Why this matters</span>
          <p>
            Lucas opens with the Senate, the Chancellor, blockades, and Ambassadors. He wants you to
            see exactly what kind of galaxy existed before it all went wrong. To feel the loss, you
            need to see what was lost: a working Republic with institutions, diplomacy, and Jedi who
            serve as peacekeepers.
          </p>
        </div>
        <p>
          In these first 18 minutes you will follow two Jedi Knights who board a hostile battleship
          expecting negotiation. They encounter gas, droids, blast doors, and a hidden invasion
          army. The scene moves fast and every beat raises the stakes.
        </p>
        <p>
          Watch for three things: how the Federation talks versus how it acts, how the Jedi use the
          Force to survive rather than just to fight, and what the caged birds near the conference
          room door quietly tell you about Naboo.
        </p>
      </>,

      <>
        <h2>The Opening Crawl and the Approach</h2>
        <p>
          The crawl text sets the problem in two sentences. The Trade Federation has stopped all
          shipping to Naboo. The Senate debates endlessly. The Chancellor acts in secret, sending
          two Jedi Knights as Ambassadors.
        </p>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The entire Republic is in conflict, but the Chancellor sends only two people. Why would
            two negotiators be enough for a blockade of hundreds of warships?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Jedi are not ordinary diplomats. They are Force-sensitive, trained in combat, and
              carry authority the Republic trusts absolutely. Two Jedi represent more leverage than
              an army of conventional envoys. The Chancellor also sends them in secret, suggesting
              political reasons for not using official channels.
            </p>
          </details>
        </div>
        <p>
          The camera pans down from stars to a small Republic cruiser dwarfed by hundreds of
          Federation battleships. The planet Naboo hangs below, green and beautiful. The visual says
          everything: one small vessel, surrounded, heading toward something much larger.
        </p>
        <p>
          Nute Gunray accepts the boarding request on the viewscreen: "we would be happy to receive
          the Ambassador, Happy to." He repeats "Happy to." That repetition is not warmth. It is a
          man reassuring himself in public.
        </p>
        <viz.TfaTimelineSvg C={C} />
        <div className="lrn-definition">
          <span className="lrn-definition-term">TRADE FEDERATION</span>
          <div className="lrn-definition-desc">
            <p>
              A commerce guild that controls major trade routes. It runs a private droid army and
              has placed a blockade around Naboo over a tax dispute. Its leaders are Neimoidian
              merchants who panicked their way into committing war crimes.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">NABOO</span>
          <div className="lrn-definition-desc">
            <p>
              A small, peaceful planet. Its surface is green and lush. The Federation has surrounded
              it with warships and cut off all trade. The planet cannot import or export anything.
              Naboo is the victim at the center of this political crisis.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">SUPREME CHANCELLOR VALORUM</span>
          <div className="lrn-definition-desc">
            <p>
              The head of the Galactic Republic. He dispatches the two Jedi secretly, without Senate
              approval. His authority is real but politically weakened. He acts through back
              channels because the Senate moves too slowly.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">QUI-GON JINN</span>
          <div className="lrn-definition-desc">
            <p>
              Senior Jedi Knight, sixty years old. He has long white hair in a ponytail and blue
              eyes. Calm, confident, attuned to the present moment. He commands the mission and
              predicts the negotiations will be short, correctly, though not in the way he expects.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">OBI-WAN KENOBI</span>
          <div className="lrn-definition-desc">
            <p>
              Junior Jedi Knight, twenty-five years old. Short brown hair, pale skin, blue eyes. He
              is Qui-Gon's Padawan, an apprentice still in training. He senses things elsewhere,
              beyond the immediate mission. He voices concern, defers to his Master, and gets the
              last word in the scene.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>TC-14 and the Docking Bay</h2>
        <p>
          Two worker droids watch as TC-14 greets the robed Jedi in the docking bay. PK-4 dismisses
          TC-14 as a "useless protocol gearhead." EG-9 spots the Republic cruiser and calls it
          trouble. PK-4 responds with a line that lands harder than it sounds:
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"I'm not made to think." PK-4, worker droid</p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">EXPLAIN IT</span>
          <p>
            In your own words: what does PK-4's line tell you about how the Federation built its
            systems?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Sample explanation</summary>
            <p>
              The Federation designed its droids not to assess situations, but to follow orders.
              PK-4 is not broken, it works exactly as intended. The Federation built an army that
              cannot adapt. The Jedi survive precisely because they can think, sense, and improvise.
              The comedy of PK-4's line underlines the Federation's deepest weakness: its weapons
              cannot reason.
            </p>
          </details>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">TC-14</span>
          <div className="lrn-definition-desc">
            <p>
              A Federation protocol droid. Greets the Jedi with formal courtesy, seats them in the
              conference room, and promises the Viceroy will arrive shortly. TC-14 later walks out
              of a gas-filled room carrying a drinks tray, oblivious to the violence around it. Its
              programming cannot process the situation it is in.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>The Conference Room: A Bad Feeling</h2>
        <p>
          TC-14 seats the Jedi, bows, and leaves. The two Jedi lower their hoods and look out at
          Naboo. Caged birds sing near the conference room door, a small detail Lucas placed
          deliberately. The birds are ornamental, trapped inside an armed military vessel. Naboo is
          trapped outside one.
        </p>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Qui-Gon says "these Federation types are cowards, the negotiations will be short." Is he
            right? And if so, is it a good outcome?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              He is right and wrong at once. The negotiations are extremely short, they never happen
              at all. The Federation tries to gas the Jedi before any talks begin. Qui-Gon predicted
              the Federation's character accurately but misjudged what "short" would mean. Obi-Wan's
              closing callback is the scene's darkest joke.
            </p>
          </details>
        </div>
        <p>
          Obi-Wan delivers the franchise's signature phrase: "I have a bad feeling about this." But
          he immediately corrects himself. It is not about the mission. It is something
          "elsewhere...elusive." That qualification matters.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Insight</span>
          <p>
            Here it points to something larger. Obi-Wan cannot name what he feels. It is the hidden
            hand behind the entire crisis, Darth Sidious, whom no one in this scene mentions and who
            never appears on screen. The "bad feeling" is about the phantom menace, not the
            Federation.
          </p>
        </div>
        <p>
          Qui-Gon responds with a Force philosophy lesson. He tells Obi-Wan not to center on
          anxiety, to keep concentration in the present moment. Obi-Wan counters that Master Yoda
          teaches him to be mindful of the future. Qui-Gon's answer: both are true, but not at the
          expense of the moment.
        </p>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <h4>Qui-Gon: Living Force</h4>
            <p>
              Stay in the present moment. The Force flows through living things right now. Anxiety
              about the future cuts you off from what is happening. Act from presence, not fear.
            </p>
          </div>
          <div className="lrn-compare-col">
            <h4>Obi-Wan: Future Mindfulness</h4>
            <p>
              Yoda teaches awareness of what comes next. A Jedi should read the path ahead.
              Obi-Wan's sensitivity to "elsewhere" is not anxiety, it is a genuine Force perception
              that something larger is in motion.
            </p>
          </div>
        </div>
        <viz.TfaRelationshipSvg C={C} />
      </>,

      <>
        <h2>Nute Learns the Truth: The Gas Attack</h2>
        <p>
          TC-14 enters the bridge. Nute and Daultay Dofine stand stunned as TC-14 delivers the news:
          "The Ambassadors are Jedi Knights, I believe." Dofine breaks first: "We're done for!" Nute
          does not wait. He seals the conference room and orders the Jedi killed via hologram.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "They must be dead by now. Blast, what's left of them." Nute Gunray, speaking before he
            has any confirmation
          </p>
        </div>
        <p>
          Toxic gas floods the conference room through the ventilation system. Battle droids cock
          their weapons outside the door. Then a figure stumbles out of the deadly green fog. It is
          TC-14, carrying the silver drinks tray, saying: "Oh, excuse me, so sorry."
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">EXPLAIN IT</span>
          <p>
            In your own words: why is TC-14 walking out with the drinks tray so dramatically
            effective?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Sample explanation</summary>
            <p>
              The battle droids expected to see Jedi or bodies. Instead they see a protocol droid
              serving refreshments. TC-14's programming has no category for "ambush in progress." It
              just follows its last instruction. The absurdity of the tray in that moment, followed
              immediately by two lightsabers flashing out of the fog, makes the Jedi's survival feel
              both inevitable and shocking.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-tip">
          <span className="lrn-tip-label">Tip</span>
          <p>
            Lucas never shows the Jedi fighting directly in the fog. You hear droids falling and see
            lightsabers flash. This restraint makes the Jedi feel more dangerous, not less. You fill
            in the action yourself, and your imagination makes it larger than any camera angle
            could.
          </p>
        </div>
        <viz.TfaShipLayoutSvg C={C} />
      </>,

      <>
        <h2>The Bridge Door: Impossible!</h2>
        <p>
          Qui-Gon cuts through battle droids in the hallway, sending metal and sparks in every
          direction. Obi-Wan throws several droids into the wall with a Force push. They fight their
          way to the bridge door and Qui-Gon starts cutting through it with his lightsaber.
        </p>
        <p>
          On the bridge, the crew watches the sparks erupt around the door. Nute orders the blast
          doors closed. Three enormous doors slam shut in sequence. A red circle appears in the
          center of the final door as molten metal starts to drop away.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"Impossible!! This is impossible!!" Nute Gunray</p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">Why this matters</span>
          <p>
            Nute has never seen a Jedi in action. He designed his strategy around systems, sealed
            doors, droids, gas, because systems are what he understands. A single person cutting
            through three blast doors with a glowing weapon is outside his entire frame of
            reference. He calls it impossible because he genuinely cannot process it. This is the
            Federation's core weakness: it cannot plan for capabilities it has never encountered.
          </p>
        </div>
        <p>
          Obi-Wan gets the next line: "Offhand, I'd say this mission is past the negotiation stage."
        </p>
      </>,

      <>
        <h2>Destroyer Droids: A Standoff</h2>
        <p>
          Ten wheel droids roll down the hallway at full speed. Just before they reach the bridge
          area, they stop and transform, shifting from rolling spheres into upright battle stance.
          Qui-Gon cannot see them but senses their presence: "Destroyer droids!"
        </p>
        <p>
          P-59 leads the droids in from three hallways at once, forming a semi-circle. The droids
          blast. When the smoke clears, the Jedi are gone. P-59 switches to bio-sensors: "There they
          are!" The Jedi appear at the far end of the hallway, running.
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">EXPLAIN IT</span>
          <p>
            In your own words: why do the Jedi retreat instead of fighting the destroyer droids?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Sample explanation</summary>
            <p>
              The droids have shield generators active. The Jedi cannot deflect blaster fire through
              an active shield and their lightsabers cannot reach the droids directly. Fighting
              would be suicide. Retreating is the only logical move. Qui-Gon names the situation
              exactly: "It's a standoff. Let's go." He does not hesitate or panic. He reads the
              situation in the present moment and acts. This is the living Force philosophy in
              action.
            </p>
          </details>
        </div>
        <p>
          The Jedi escape into the ventilation shaft. On the bridge, Rune tells Nute they are "no
          match for destroyer droids." Tey How reports the Jedi have gone up the ventilation shaft.
          Nute relaxes too soon.
        </p>
      </>,

      <>
        <h2>The Hidden Army and Dark Irony</h2>
        <p>
          Qui-Gon and Obi-Wan emerge from a vent in the main hangar bay. They keep low. What they
          see stops them both: thousands of battle droids loading onto landing craft, row after row,
          an army large enough to occupy an entire planet.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"It's an invisible army." Obi-Wan Kenobi</p>
        </div>
        <p>
          Qui-Gon names the shift: "It's an odd play for the Trade Federation." This was never a
          blockade tactic. It is an invasion force. The Republic thought it was negotiating a trade
          dispute. The Federation was building for war. Qui-Gon tells Obi-Wan to split up, stow away
          on separate ships, and warn Naboo and Chancellor Valorum.
        </p>
        <p>
          Obi-Wan gets the closing line of the scene, exactly twelve words: "You were right about
          one thing, Master. The negotiations were short." The scene ends on that dark callback.
          Qui-Gon predicted short negotiations. He was right. He was also completely wrong about
          what that would mean.
        </p>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            At the end of this scene, who actually holds power, the Jedi, the Federation, Queen
            Amidala, or someone else entirely?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              None of the visible characters hold real power. Darth Sidious, who never appears in
              this scene, orchestrated the entire situation. He wants the blockade, he wants the
              Jedi to come, and he wants the chaos that follows. The characters who appear to be the
              antagonists are tools. The real power is the one Obi-Wan could feel but not name:
              "elsewhere...elusive."
            </p>
          </details>
        </div>
        <p>
          Back on the bridge, Tey How receives a transmission from Naboo. Queen Amidala appears in
          her throne room: formal headdress, white face paint, surrounded by her Governing Council
          and four handmaidens. She confronts Nute directly.
        </p>
        <p>
          Amidala tells Nute the trade boycott has ended. She knows the Senate is voting. She knows
          the Ambassadors are aboard. Nute lies to her face: "I know nothing about any Ambassadors,
          you must be mistaken." She warns him. He dismisses her. After she signs off, Nute turns to
          Rune: "It's too late now."
        </p>
        <viz.TfaThemeMapSvg C={C} />
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Insight</span>
          <p>
            Darth Sidious never appears in this scene, yet he is the source of Obi-Wan's "elusive"
            bad feeling. The phantom menace of the title is not the Trade Federation, they are
            visible, panicking, and incompetent. The real threat is the hidden figure manipulating
            them. Everything in this scene moves according to a plan none of the characters on
            screen fully understand.
          </p>
        </div>
      </>
    ],
    practice: [
      {
        id: 'tfa-001',
        q: 'What has the Trade Federation done to Naboo before the film begins?',
        a: 'It placed a blockade of warships around the planet, stopping all trade and shipping.'
      },
      {
        id: 'tfa-002',
        q: 'Who are the two Jedi the Chancellor sends as Ambassadors?',
        a: 'Qui-Gon Jinn (the senior Knight) and Obi-Wan Kenobi (his Padawan apprentice).'
      },
      {
        id: 'tfa-003',
        q: 'How does Nute Gunray greet the Ambassadors on the viewscreen?',
        a: 'He says he would be happy to receive them, "Happy to." His false courtesy hides panic.'
      },
      {
        id: 'tfa-004',
        q: 'What does worker droid PK-4 say when EG-9 calls the Republic cruiser trouble?',
        a: '"I\'m not made to think." It follows orders and cannot assess situations.'
      },
      {
        id: 'tfa-005',
        q: 'What does Obi-Wan say his "bad feeling" is actually about?',
        a: 'Not the mission itself, something "elsewhere...elusive." He senses a larger, hidden threat.'
      },
      {
        id: 'tfa-006',
        q: 'What is the living Force, according to Qui-Gon?',
        a: 'Attunement to the present moment. You must not let anxiety about the future cut you off from now.'
      },
      {
        id: 'tfa-007',
        q: 'What does Qui-Gon predict about the negotiations?',
        a: 'He says the Federation are cowards and the negotiations will be short. He is right, they never happen.'
      },
      {
        id: 'tfa-008',
        q: 'What order does Nute give after learning the Ambassadors are Jedi?',
        a: 'He orders toxic gas pumped into the conference room to kill them both.'
      },
      {
        id: 'tfa-009',
        q: 'What emerges from the gas-filled conference room before the Jedi attack?',
        a: 'TC-14, the protocol droid, walks out carrying the drinks tray and saying "so sorry."'
      },
      {
        id: 'tfa-010',
        q: 'What happens to battle droid OWO-1 while reporting to the bridge?',
        a: 'It is cut in half mid-sentence on the viewscreen as the Jedi fight through the hallway.'
      },
      {
        id: 'tfa-011',
        q: 'What does Qui-Gon do to the bridge blast door?',
        a: 'He cuts a glowing red circle into it with his lightsaber, melting through the metal.'
      },
      {
        id: 'tfa-012',
        q: 'What does Nute shout when Qui-Gon cuts through the blast door?',
        a: '"Impossible!! This is impossible!!" He has never seen a Jedi in action before.'
      },
      {
        id: 'tfa-013',
        q: 'What are destroyer droids also called, and what makes them special?',
        a: 'Droidekas or wheel droids. They roll in sphere form, then transform. They have shield generators.'
      },
      {
        id: 'tfa-014',
        q: 'Why can the Jedi not defeat the destroyer droids directly?',
        a: "The droids' active shields block lightsaber attacks. The Jedi cannot reach them through the shields."
      },
      {
        id: 'tfa-015',
        q: 'How do the Jedi escape the destroyer droids?',
        a: 'They run to a doorway and escape into the ventilation shaft above.'
      },
      {
        id: 'tfa-016',
        q: 'What do Qui-Gon and Obi-Wan find in the main hangar bay?',
        a: 'Thousands of battle droids loading onto landing craft, a hidden invasion army.'
      },
      {
        id: 'tfa-017',
        q: 'How does Obi-Wan describe what they see in the hangar?',
        a: '"It\'s an invisible army." The Republic thought it was a blockade; it was an invasion force.'
      },
      {
        id: 'tfa-018',
        q: "What is Obi-Wan's final line in the scene, and why is it ironic?",
        a: '"The negotiations were short." Qui-Gon predicted short talks, he got no talks at all.'
      },
      {
        id: 'tfa-019',
        q: 'What does Amidala accuse Nute of during her holographic transmission?',
        a: 'She says the Senate is voting on the blockade and that she knows the Ambassadors are aboard.'
      },
      {
        id: 'tfa-020',
        q: 'What lie does Nute tell Queen Amidala?',
        a: '"I know nothing about any Ambassadors, you must be mistaken." He lies to her face.'
      },
      {
        id: 'tfa-021',
        q: 'What does Nute say to Rune after Amidala signs off?',
        a: '"It\'s too late now." The invasion is already in motion and cannot be stopped by diplomacy.'
      },
      {
        id: 'tfa-022',
        q: 'Which character calls the Federation "cowards" in this scene?',
        a: 'Qui-Gon Jinn, while waiting in the conference room. He turns out to be correct about their character.'
      },
      {
        id: 'tfa-023',
        q: 'What does the visual contrast between the Republic cruiser and the Federation fleet show?',
        a: 'One small ship against hundreds of warships. The Jedi enter vastly outgunned in every measurable way.'
      },
      {
        id: 'tfa-024',
        q: "What detail near the conference room door quietly represents Naboo's situation?",
        a: 'Caged birds singing inside an armed warship. Beautiful, living, and trapped, like Naboo itself.'
      },
      {
        id: 'tfa-025',
        q: 'Why does Lucas not show the Jedi fighting directly in the gas cloud?',
        a: 'Restraint makes the Jedi feel more dangerous. The audience imagines the action larger than any shot could.'
      },
      {
        id: 'tfa-026',
        q: 'How does The Phantom Menace subvert the classic "bad feeling" line?',
        a: 'Obi-Wan says it but clarifies it is not about the mission, it points to something larger and unnamed.'
      },
      {
        id: 'tfa-027',
        q: 'Name the three Federation bridge characters who appear in this scene.',
        a: 'Nute Gunray (Viceroy), Daultay Dofine (officer), and Rune Haako (second-in-command).'
      },
      {
        id: 'tfa-028',
        q: 'What plan do the Jedi make after seeing the hidden army?',
        a: 'They split up and stow away on separate landing craft to warn Naboo and the Chancellor.'
      },
      {
        id: 'tfa-029',
        q: 'Why does Obi-Wan retreat rather than trying to force past the destroyer droids?',
        a: 'Their shields make direct attack impossible. He reads the tactical situation and acts on it immediately.'
      },
      {
        id: 'tfa-030',
        q: "What does Nute's behavior throughout the scene reveal about how the Federation operates?",
        a: 'Its leaders hide behind systems, blast doors, droids, gas, rather than act directly. Structural cowardice.'
      }
    ],
    referenceSections: [
      <>
        <h2>Character Roster</h2>
        <p>
          One reference covering every character across the film. Each entry walks the character
          from first appearance to last beat.
        </p>

        <h3>Jedi</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">QUI-GON JINN</span>
          <div className="lrn-definition-desc">
            <p>
              Senior Jedi Knight, sixty, long white hair, blue-eyed. Commands the diplomatic mission
              and practices the "living Force," acting on the present moment. Aboard the Federation
              cruiser he predicts short negotiations and proves right. On Naboo he rescues Jar Jar
              (creating a life-debt), mind-tricks Boss Nass, and engineers the hangar escape. On
              Tatooine his tools fail against Watto, but he recognizes Anakin's potential
              immediately, secretly samples his blood for a midi-chlorian count, and Force-fixes a
              chance cube to win the boy his freedom. He defies the Jedi Council by declaring Anakin
              his Padawan. On Naboo's return he charges Darth Maul alone, is run through, and uses
              his dying words to transfer the boy to Obi-Wan: "Promise me you'll train him."
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">OBI-WAN KENOBI</span>
          <div className="lrn-definition-desc">
            <p>
              Junior Jedi, twenty-five, brown hair, blue-eyed. Qui-Gon's Padawan and practical foil.
              In Act I he senses an "elusive" threat and closes with the scene's ironic last line.
              On Naboo his lightsaber shorts in water (a discipline lesson) and he argues the
              symbiont case to Boss Nass. He stays aboard during the Boonta Eve race and reads off
              the midi-chlorian count that confirms Anakin's power. On Coruscant he disagrees with
              Qui-Gon about training the boy and claims readiness for the trials, only to be
              deflated by Yoda. In the final duel he is cut off from Qui-Gon by an energy gate,
              watches his master die, and reverses on Maul with rage. Knighted at the funeral, he
              honors the deathbed promise: "Qui-Gon believed in him. I believe in Qui-Gon."
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">YODA</span>
          <div className="lrn-definition-desc">
            <p>
              Head of the Jedi Council. Sees through Anakin's denial, names the fear chain ("fear
              leads to anger, anger leads to hate, hate leads to suffering"), and refuses to train
              him while acknowledging his strength in the Force. On Naboo he knights Obi-Wan,
              consents to Anakin's training, and closes the film with "Always two there are. No
              more, no less. A master and an apprentice."
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">MACE WINDU</span>
          <div className="lrn-definition-desc">
            <p>
              Leads Council questioning with Yoda. Confirms the midi-chlorian reading. Delivers the
              refusal ("He will not be trained"). At the parade asks the film's last unanswered
              question: "But which one was destroyed, the master or the apprentice?"
            </p>
          </div>
        </div>

        <h3>Sith</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DARTH SIDIOUS</span>
          <div className="lrn-definition-desc">
            <p>
              Sith master. Appears only as a hologram. Architect of the blockade, the invasion, the
              order to kill the Queen, and the deployment of Maul. Calls Amidala naive. Never seen
              on Naboo. The film does not name him with his other identity, but the two figures are
              played by the same actor and the visual cue is deliberate.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DARTH MAUL</span>
          <div className="lrn-definition-desc">
            <p>
              Sith apprentice. Introduced behind Sidious as a hooded silhouette. On Tatooine he
              deploys probe droids from a desert mesa and attacks Qui-Gon at the boarding ramp. On
              Naboo he duels Qui-Gon and Obi-Wan in the power generator. Wordless throughout; the
              threat is measured by Nute's fear and by his red double-bladed lightsaber. Cut in half
              by Obi-Wan; falls into the melting pit.
            </p>
          </div>
        </div>

        <h3>Royal Naboo</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">QUEEN AMIDALA / PADME / SABE</span>
          <div className="lrn-definition-desc">
            <p>
              Fourteen-year-old elected Queen of Naboo. Uses a body-double, Sabe, as decoy: in
              elaborate headdress and white face paint, Sabe sits the throne while Amidala walks
              with her handmaidens dressed as one of them under the name "Padme." She refuses to
              sign the Trade Federation treaty, escapes Naboo with the Jedi, joins the shore party
              on Tatooine, and meets Anakin in Watto's shop while in handmaiden disguise. On
              Coruscant she addresses the Senate, calls the no-confidence vote against Valorum, and
              chooses to return to her people. Back on Naboo she kneels before Boss Nass to forge
              the Gungan alliance and reveals herself as Queen mid-throne-room ruse to capture Nute.
              Her composure is the moral spine of the film.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">CAPTAIN PANAKA</span>
          <div className="lrn-definition-desc">
            <p>
              Head of Naboo security. Warns Amidala her volunteers cannot match a battle-hardened
              droid army. Directs the hangar escape, relays Amidala's command to take Padme to
              Tatooine, and leads the throne-room assault on Nute.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">GOVERNOR SIO BIBBLE</span>
          <div className="lrn-definition-desc">
            <p>
              Naboo's senior politician. Reads the communications blackout as invasion ("A
              communications disruption can only mean one thing"). Stays behind under occupation,
              refuses Nute's death threats, and appears in a hologram trick designed to lure Amidala
              back. Unbroken throughout.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">EIRTAE, YANE, RABE, SACHE</span>
          <div className="lrn-definition-desc">
            <p>
              Amidala's four handmaidens. Stand beside her in formal scenes and travel with her in
              disguise. Eirtae and Rabe are named in dialogue; the others stay silent.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">RIC OLIE</span>
          <div className="lrn-definition-desc">
            <p>
              Lead pilot on the Queen's royal starship. Reports the leaking hyperdrive that forces
              the landing on Tatooine. Flies the Naboo fighters in the final space battle.
            </p>
          </div>
        </div>

        <h3>Trade Federation</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">NUTE GUNRAY</span>
          <div className="lrn-definition-desc">
            <p>
              Neimoidian Viceroy. Public face of the Federation throughout. Orders the Jedi killed
              in gas. Hides behind blast doors. Lies to Amidala's face. Completes the invasion and
              demands she sign the treaty. Loses control of his own plan when Sidious reveals Maul.
              Captured in the throne room and led away with Rune at the end. A coward who stumbled
              into war crimes.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">RUNE HAAKO</span>
          <div className="lrn-definition-desc">
            <p>
              Federation second-in-command. More measured than Nute. Asks the question no one can
              answer: "What will happen when the Jedi become aware of these Sith Lords?"
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DAULTAY DOFINE</span>
          <div className="lrn-definition-desc">
            <p>
              Federation officer. First to panic at the news the Ambassadors are Jedi. Sidious calls
              him a "stunted slime" and orders him out of sight.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">OOM-9</span>
          <div className="lrn-definition-desc">
            <p>
              Battle-droid commander on Naboo. Reports invasion progress to Nute. Leads the army
              onto the Grass Plains in the final battle. Shuts down with all other droids when the
              control ship is destroyed.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">FEDERATION DROIDS</span>
          <div className="lrn-definition-desc">
            <p>
              <strong>TC-14:</strong> Protocol droid who greets the Jedi and walks out of the gas
              ambush with a drinks tray. <strong>Battle droids:</strong> Standard infantry.
              <strong> Destroyer droids (droidekas):</strong> Roll into position, transform, and
              raise shields that lightsabers cannot break directly. <strong>OWO-1:</strong> Bridge
              droid cut in half mid-sentence on a viewscreen. <strong>P-59:</strong> Droideka unit
              leader. <strong>Tey How:</strong> Bridge crew member receiving transmissions.
              <strong> PK-4 and EG-9:</strong> Worker droids in the docking bay; PK-4's "I'm not
              made to think" captures Federation operations in five words.
            </p>
          </div>
        </div>

        <h3>Senate and Republic</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">SENATOR PALPATINE</span>
          <div className="lrn-definition-desc">
            <p>
              Senator of Naboo. Briefs Amidala on Coruscant about Senate corruption and a weak
              Valorum. Stages the no-confidence crisis that puts him forward as Chancellor
              candidate. Mask slips once, a self-satisfied smile after Amidala leaves the office. By
              the end of the film the audience has watched him engineer the very crisis he is now
              Chancellor for resolving.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">SUPREME CHANCELLOR VALORUM</span>
          <div className="lrn-definition-desc">
            <p>
              Sitting Chancellor of the Republic. Sends Qui-Gon and Obi-Wan as Ambassadors. Folds
              under procedural pressure when Amidala calls the no-confidence vote. Confronts
              Palpatine and receives only silence. Stripped of power in a single Senate session.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">LOTT DOD</span>
          <div className="lrn-definition-desc">
            <p>
              Trade Federation Senator. Objects to Amidala's address, demands a commission, and
              tries to send the vote to a procedures committee. Every obstruction in the Senate
              passes through him.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">BAIL ORGANA</span>
          <div className="lrn-definition-desc">
            <p>Senator of Alderaan. Seconds the no-confidence motion. Demands no delays.</p>
          </div>
        </div>

        <h3>Gungans</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">JAR JAR BINKS</span>
          <div className="lrn-definition-desc">
            <p>
              Banished Gungan. Clumsy and fearful. Saved by Qui-Gon in the swamp; the rescue creates
              a life-debt that binds him to the group. His panic creates crises the Jedi must solve.
              On Tatooine his frog theft triggers the Sebulba confrontation that brings Anakin into
              contact with the group. On Coruscant his accidental disclosure of the Gungan army
              gives Amidala her alliance. In the final battle he stumbles his way to accidental
              tactical victories. Promoted to General by Boss Nass.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">BOSS NASS</span>
          <div className="lrn-definition-desc">
            <p>
              Head of the Gungan government. Proud, isolationist, hostile toward Naboo. Yields the
              Jedi a sub under Qui-Gon's mind trick. Rejects Amidala as Queen for "feeling
              superior." Accepts Padme as a friend when she kneels and asks for help. Holds the
              Globe of Peace aloft at the parade.
            </p>
          </div>
        </div>

        <h3>Tatooine</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">ANAKIN SKYWALKER</span>
          <div className="lrn-definition-desc">
            <p>
              Nine-year-old slave. Builds machines from scrap and Pods in secret. Volunteers
              everything without being asked. First line to Padme: "Are you an angel?" First act of
              self-definition: "I am a person! My name is Anakin." Diagnoses fear in Jar Jar at the
              market. Builds C-3PO to help his mother. Wins the Boonta Eve podrace and earns his
              freedom. Says goodbye to Shmi without being allowed to look back. On Coruscant he is
              tested by the Council, denies fear while Yoda reads it, and is refused training. On
              Naboo he hides in a Naboo fighter's cockpit by Qui-Gon's instruction, accidentally
              launches into the space battle, and accidentally destroys the droid control ship.
              Knighted's apprentice-to-be by the film's end.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">SHMI SKYWALKER</span>
          <div className="lrn-definition-desc">
            <p>
              Anakin's mother. Slave of forty. Warm, precise, clear-eyed. Feeds strangers without
              complaint, explains slavery without softening it ("The Republic doesn't exist out
              here"), and consents to the race because she believes Anakin is "meant to help" the
              group. At farewell tells him not to look back. Stays enslaved so he can be free. Never
              repaid.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">WATTO</span>
          <div className="lrn-definition-desc">
            <p>
              Toydarian junk dealer. Owns Anakin and Shmi. Immune to Force mind manipulation, the
              one moment that blocks Qui-Gon's usual Jedi path. Holds the only T-14 hyperdrive on
              Tatooine. Loses Anakin to a side-wager on the podrace. His greed is the trap that
              closes around him.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">SEBULBA</span>
          <div className="lrn-definition-desc">
            <p>
              Dug. Reigning podrace champion. Threatens Anakin at the market and at the starting
              grid. Sabotages rivals with side-exhaust and mid-race cheating. Crashes when his own
              hook-lock trap backfires.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">JABBA THE HUTT</span>
          <div className="lrn-definition-desc">
            <p>
              Crime lord. Hosts the Boonta Eve Classic from the Royal Box. Starts the race by biting
              the head off a frog and spitting it at a gong.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">KITSTER</span>
          <div className="lrn-definition-desc">
            <p>
              Anakin's best friend and pit crew. Unconditional believer. Contrast with Seek, Wald,
              and Amee, peers who mock Anakin's chances at the race.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">JIRA</span>
          <div className="lrn-definition-desc">
            <p>
              Old fruit vendor in Mos Espa. Anakin promises her a cooling unit. At farewell he gives
              her his last coins. His first instinct with any resource is to give it away.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">FODE / BEED</span>
          <div className="lrn-definition-desc">
            <p>
              Two-headed Troig race announcer. Calls the Boonta Eve Classic in two languages.
              Introduces every pilot. Voices the crowd.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">C-3PO (THREEPIO)</span>
          <div className="lrn-definition-desc">
            <p>
              Protocol droid Anakin built from scrap to help Shmi. First seen half-finished on the
              workbench, one eye in the socket, no outer covering. Introduces himself formally to
              Padme and complains to R2-D2 about being naked. Left behind unfinished when Anakin
              departs.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">R2-D2</span>
          <div className="lrn-definition-desc">
            <p>
              Astromech droid aboard the Queen's starship. Saves the ship during the blockade escape
              by patching a damaged shield generator. Named and assigned to Padme by Amidala in one
              exchange. Travels with the group through every act.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Ships, Droids and Technology</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">REPUBLIC CRUISER</span>
          <div className="lrn-definition-desc">
            <p>
              The small diplomatic vessel carrying Qui-Gon and Obi-Wan. Dwarfed by the Federation
              fleet surrounding Naboo. Its smallness against the battleships establishes the scene's
              central power imbalance immediately.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">TRADE FEDERATION DROID CONTROL SHIP</span>
          <div className="lrn-definition-desc">
            <p>
              The enormous battleship where all interior action takes place. It has a docking bay,
              conference room, hallways, a bridge with blast doors, a ventilation shaft, and a main
              hangar. Its architecture determines every tactical decision the Jedi make.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">TC-14'S DRINKS TRAY</span>
          <div className="lrn-definition-desc">
            <p>
              The silver tray TC-14 carries out of the gas ambush. It marks TC-14 as the sole
              survivor visible to the Federation crew. The tray signals to the bridge that the
              protocol droid emerged from the room, not the Jedi, creating maximum dramatic irony
              before the lightsabers flash.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">BATTLE DROIDS</span>
          <div className="lrn-definition-desc">
            <p>
              The Federation's standard infantry. Armed with blasters, deployed in large numbers.
              They follow orders without thinking or adapting. The Jedi cut through them throughout
              the scene. Thousands more load onto landing craft in the hidden hangar.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DESTROYER DROIDS (DROIDEKAS)</span>
          <div className="lrn-definition-desc">
            <p>
              Roll in sphere form, then transform into tripodal battle stance. Armed with twin
              blaster cannons and equipped with shield generators. The shields create a standoff the
              Jedi cannot break directly.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">TOXIC GAS</span>
          <div className="lrn-definition-desc">
            <p>
              Deployed through the ventilation system into the sealed conference room. Intended to
              kill the Jedi. It fails, the Jedi sense its deployment and escape before it
              concentrates. The green cloud becomes the visual backdrop for their counterattack.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">HOLOGRAPHIC COMMUNICATION</span>
          <div className="lrn-definition-desc">
            <p>
              Used twice in this scene. Nute appears as a hologram in the hallway to order the Jedi
              killed. Queen Amidala appears as a hologram on the bridge to confront Nute. Both
              instances involve deception: Nute orders murder remotely, then lies to Amidala's face.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">LANDING CRAFT</span>
          <div className="lrn-definition-desc">
            <p>
              The vessels in the main hangar bay loading battle droids for the Naboo invasion. Their
              presence reveals the Federation's true plan. The blockade was cover for an invasion
              force. Qui-Gon calls it "an odd play", an understatement.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Scene Index</h2>
        <ol className="lrn-list">
          <li>
            Opening crawl, the title card and crawl establish the Trade Federation blockade of Naboo
            and the Chancellor's secret Jedi dispatch.
          </li>
          <li>
            Space, the small Republic cruiser approaches Naboo, dwarfed by hundreds of Federation
            battleships surrounding the green planet.
          </li>
          <li>
            Republic cruiser cockpit, Qui-Gon orders the Captain to request boarding; Nute accepts
            with false courtesy on the viewscreen.
          </li>
          <li>
            Federation battleship docking bay (exterior), the Republic cruiser docks in the enormous
            main bay of the warship.
          </li>
          <li>
            Federation battleship docking bay (interior), TC-14 greets the robed Jedi; worker droids
            PK-4 and EG-9 exchange skeptical dialogue.
          </li>
          <li>
            Federation battleship conference room, Obi-Wan and Qui-Gon remove hoods, observe Naboo,
            and debate the living Force in the pivotal "bad feeling" exchange.
          </li>
          <li>
            Federation battleship bridge, TC-14 tells Nute and Dofine the Ambassadors are Jedi
            Knights; both panic.
          </li>
          <li>
            Federation battleship hallway, Nute orders the kill via hologram; toxic gas floods the
            conference room; TC-14 exits with the drinks tray; lightsabers flash.
          </li>
          <li>
            Federation battleship bridge, OWO-1 reports mid-sentence and is cut in half; Nute orders
            the bridge sealed and destroyer droids deployed.
          </li>
          <li>
            Federation battleship hallway outside the bridge, Qui-Gon cuts through battle droids and
            begins melting through the blast door; Nute shouts "Impossible!!"
          </li>
          <li>
            Federation battleship hallway, destroyer droids transform and rush from three hallways;
            the Jedi discover the droids have shields and escape into the ventilation shaft.
          </li>
          <li>
            Federation battleship bridge, Rune tells Nute the Jedi are "no match" for destroyer
            droids; Tey How reports they have gone up the ventilation shaft.
          </li>
          <li>
            Federation battleship main hangar bay, Qui-Gon and Obi-Wan see thousands of battle
            droids loading onto landing craft; they split up to warn Naboo and the Chancellor.
          </li>
          <li>
            Federation battleship bridge, Queen Amidala's holographic transmission confronts Nute;
            he lies; after she signs off, Nute says "It's too late now" and orders communications
            disrupted.
          </li>
        </ol>
      </>
    ]
  }
}

function nabooInvasionAndEscapeContent() {
  return {
    sections: [
      <ChapterDivider key="div-nabooInvasionAndEscapeContent">
        <h2>Act I: Naboo Invasion and Escape</h2>
        <p>Two Jedi cross the planet core and rescue the Queen.</p>
      </ChapterDivider>,
      <>
        <h2>What This Module Covers</h2>
        <p>
          Act I of The Phantom Menace takes Qui-Gon Jinn, Obi-Wan Kenobi, and a reluctant Gungan
          named Jar Jar through eleven scenes of escalating danger.
        </p>
        <p>
          Start from scratch. The Phantom Menace is a 1999 science-fiction film directed by George
          Lucas. The story opens with a political dispute that has already turned violent. A trade
          group called the Federation has blockaded a peaceful planet named Naboo. The Senate sends
          two Jedi negotiators to settle it. The Federation tries to kill the Jedi, then invades the
          planet. This module covers what happens next.
        </p>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Before reading the scenes, predict: when a peaceful government first learns it is under
            attack, what is the most common first response in stories like this?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Denial. Leaders trained in diplomacy reach first for the tool they trust. They doubt
              the evidence, look for a procedural fix, and resist the conclusion that negotiation
              has already ended. The Phantom Menace uses this pattern as its opening engine.
            </p>
          </details>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            These scenes do three things at once. They establish the invasion as real and immediate.
            They introduce the main characters through action, not description. They plant every
            major theme, denial vs. reality, isolation as vulnerability, power behind the curtain,
            before the story moves to Coruscant.
          </p>
          <p>
            Watch what characters refuse to believe. Amidala denies the invasion until droids
            surround her throne. Boss Nass refuses to help Naboo until a Jedi tricks him. Nute
            Gunray conceals the missing Jedi from Sidious. Denial is the engine of this act.
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the film cover so many locations, swamp, underwater city, planet core, estuary,
            plaza, hangar, in a single act? Form your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Each location forces a different test on the same trio. Swamp tests survival.
              Underwater city tests negotiation. Planet core tests composure. Plaza tests combat.
              Hangar tests decision-making. Lucas uses geography as character pressure. Each new
              place is a new question put to Qui-Gon, Obi-Wan, and Jar Jar.
            </p>
          </details>
        </div>
        <p>
          The module moves through five locations: swamp, underwater city, planet core, city
          streets, and hangar. Each location is harder to cross than the last. This is the threshold
          structure, a classic storytelling device.
        </p>
      </>,

      <>
        <h2>The Invasion Begins</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Queen Amidala knows the Federation has jammed communications. What do you think she will
            do, fight, flee, or keep negotiating?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              She keeps negotiating. Her opening line is "I will not condone a course of action that
              will lead us to war." She trusts institutions even after the signal cuts out. This
              refusal is her governing philosophy, and it immediately collides with reality.
            </p>
          </details>
        </div>
        <p>
          The scene opens in Amidala's throne room. A hologram from Senator Palpatine on Coruscant
          sputters and dies. Governor Bibble reads the silence instantly.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"A communications disruption can only mean one thing. Invasion." (Governor Bibble)</p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does Amidala's line "I will not condone a course of action that will lead us to war"
            create dramatic tension? Form your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The audience already knows the Federation has landed troops. Amidala does not yet. Her
              principled refusal sounds noble in isolation but becomes tragic in context, she is
              defending a diplomatic posture that the Federation has already abandoned. This is
              dramatic irony: the audience knows something the character does not, which makes every
              word she speaks carry double weight.
            </p>
          </details>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Amidala, Institutional trust</span>
            <p>
              She counsels patience. Negotiation must be exhausted before any other course of
              action. She is right about method but wrong about the situation.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Bibble, Immediate alarm</span>
            <p>
              He demands action the moment the signal cuts. He is right about the threat but lacks
              the authority to act alone. He stays behind while others flee.
            </p>
          </div>
        </div>
        <p>
          Cut to space. Six Federation landing craft descend through a twilight swamp. MTT troop
          transports roll out. Droid commander OOM-9 reports to Nute via hologram: no Jedi found, no
          resistance, marching on the cities.
        </p>
        <p>
          The invasion is no longer political. It is physical. Thousands of droids move through
          Naboo's forest toward inhabited settlements.
        </p>
        <p>
          See the theatrical poster on{' '}
          <a
            href="https://en.wikipedia.org/wiki/Star_Wars:_Episode_I_%E2%80%93_The_Phantom_Menace"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia: The Phantom Menace (1999)
          </a>
          .
        </p>
        <p>
          Qui-Gon Jinn and Obi-Wan Kenobi emerge from hiding in the swamp mud as the invasion force
          passes overhead. They are cut off from their mission entirely. Running through the forest,
          Qui-Gon nearly crushes a Gungan under his feet.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "The ability to speak does not make you intelligent. Now get outta here!" (Qui-Gon Jinn)
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does Qui-Gon's blunt dismissal of Jar Jar, a character he just saved, create comedy
            rather than coldness? Think about what the line reveals before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Qui-Gon is a Jedi who values the Force over social niceties. He saved Jar Jar
              instinctively but has no time for gratitude rituals while an army marches overhead.
              The gap between Jar Jar's effusive thanks and Qui-Gon's flat dismissal is the joke. It
              also immediately establishes both characters: one is warm and chaotic, the other is
              precise and present-focused.
            </p>
          </details>
        </div>
        <p>
          Jar Jar is a banished Gungan foraging in the swamp. He refuses to guide the Jedi to Otoh
          Gunga. Obi-Wan supplies the threat that changes his mind.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "When they find us, they will crush us, grind us into little pieces, then blast us into
            oblivion!" (Obi-Wan Kenobi)
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Obi-Wan's line is the first use of the "refusal of the call reversed" structure. Jar Jar
            does not want to help. He is pressured by external threat, not by a change of heart.
          </p>
          <p>
            This is realistic for crisis conditions. People rarely act heroically because they
            suddenly become brave. They act because the cost of inaction becomes higher than the
            cost of action.
          </p>
        </div>
      </>,

      <>
        <h2>The Gungan Underworld</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The Jedi need transport from Boss Nass, the Gungan leader who hates Naboo humans. How do
            you think Qui-Gon gets what he needs from someone who refuses to help?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Qui-Gon uses a Jedi mind trick. He does not persuade Boss Nass with logic or charm. He
              bypasses his will entirely. This is consistent with his "living Force" philosophy , he
              reads the situation, identifies the fastest path through it, and acts without moral
              hesitation in a crisis.
            </p>
          </details>
        </div>
        <p>
          Jar Jar leads the Jedi into a murky lake. They pull on breathing masks and follow him down
          into the dark water toward the Gungan city.
        </p>
        <p>
          Otoh Gunga sits on the lake floor, a cluster of glowing bubble structures. It is beautiful
          and completely hidden from the surface world. Guards arrest the trio immediately and drag
          them before Boss Nass.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Wesa no like da Naboo! Un dey no like uss-ens. Da Naboo tink day so smarty den us-ens."
            (Boss Nass)
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Boss Nass's speech does something important in very few words. It establishes centuries
            of mutual contempt between two civilizations sharing the same planet.
          </p>
          <p>
            Neither the Gungans nor the Naboo have ever needed each other, until now. Obi-Wan names
            the theme directly.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "You and the Naboo form a symbiont circle. What happens to one of you will affect the
            other." (Obi-Wan Kenobi)
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does Obi-Wan's symbiont argument fail to persuade Boss Nass, even though it is
            logically correct? Consider what Boss Nass actually responds to.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Boss Nass is not acting on logic, he is acting on pride and centuries of cultural
              resentment. A factually correct argument about interdependence cannot undo that
              emotional history. Qui-Gon recognizes this and bypasses argument entirely with a Force
              trick. The scene quietly argues that some political deadlocks cannot be solved by
              reason alone.
            </p>
          </details>
        </div>
        <p>
          Qui-Gon also invokes Gungan law: Jar Jar owes him a life-debt. This binds Jar Jar to the
          Jedi as their navigator through the planet core. Jar Jar has no choice, and no desire ,
          but goes anyway.
        </p>
        <div className="lrn-definition">
          <span className="lrn-definition-term">LIFE-DEBT</span>
          <div className="lrn-definition-desc">
            <p>
              A Gungan legal obligation. When someone saves your life, you owe them a binding
              service. Qui-Gon saves Jar Jar in the swamp. This creates a claim that overrides Jar
              Jar's personal fear. Debt and obligation is a major theme in this module.
            </p>
          </div>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "What's a bongo?" (Qui-Gon Jinn) / "A transport, I hope." (Obi-Wan Kenobi). Qui-Gon
            improvises the negotiation without knowing what he just asked for. Comic beat that also
            reveals how Jedi operate by intuition over preparation.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Pounded unto death." (Boss Nass). The sentence Jar Jar faces for returning to Otoh
            Gunga. Dark humor that confirms the stakes of the life-debt rescue.
          </p>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Gungans, Isolationist</span>
            <p>
              They live underwater, hidden. They feel contempt for Naboo humans. Boss Nass rules
              with pride and resentment. He yields only when forced.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Naboo, Arrogant</span>
            <p>
              From the Gungans' view, Naboo humans consider themselves superior. This perception ,
              whether fair or not, has kept the two peoples separated for generations.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Through the Planet Core</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The bongo sub travels through the planet core with three passengers: a calm Jedi master,
            his practical apprentice, and a terrified Gungan. What kind of danger do you think the
            film will use in this underwater passage?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Sea monsters, and not just one. The film uses an escalating series: each predator is
              bigger than the last, and each crisis resolves itself because a larger predator eats
              the smaller one. The rule of three applies: Opee Sea Killer, then Sando Aqua Monster,
              then Colo Claw Fish. Skill alone does not save the sub, scale does.
            </p>
          </details>
        </div>
        <p>
          The bongo sub pushes into the planet core, a dark, bioluminescent world of massive
          creatures. Jar Jar reveals he was banished from Otoh Gunga for clumsiness. The sub enters
          a narrow passage.
        </p>
        <p>
          An Opee Sea Killer latches onto the sub. Before it can crush them, the enormous Sando Aqua
          Monster swallows the Opee whole. The sub escapes. Qui-Gon's response is one of the most
          quoted lines in the film.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"There's always a bigger fish." (Qui-Gon Jinn)</p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does "There's always a bigger fish" work as both comedy and character revelation?
            What does it tell you about Qui-Gon that he says this in that moment?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The line is deadpan observation in the face of something that just tried to eat them.
              Qui-Gon does not celebrate survival or express relief. He simply names a pattern he
              observed. This is the living Force philosophy in action: he is so present in the
              moment that crisis registers as data, not trauma. The gap between the terror of the
              situation and the calm of his response is what makes it funny. It also tells you: this
              man is not shaken by anything.
            </p>
          </details>
        </div>
        <p>
          The film cuts away from the sub entirely. This is parallel cutting, the screenplay's most
          significant structural technique in this sequence.
        </p>
        <div className="lrn-definition">
          <span className="lrn-definition-term">PARALLEL CUTTING</span>
          <div className="lrn-definition-desc">
            <p>
              Cutting between two simultaneous events in different locations. It creates the
              impression that both things are happening at the same time. In film analysis, it is
              used to compare two situations or reveal ironic contrasts.
            </p>
          </div>
        </div>
        <p>
          On the Federation battleship bridge, Nute and Rune report to Darth Sidious via hologram.
          Sidious confirms he is manipulating the Senate. He calls Amidala "young and naive." Nute
          quietly omits the missing Jedi from his report.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Queen Amidala is young and naive. You will find controlling her will not be difficult."
            (Darth Sidious)
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            This is dramatic irony placed deliberately. Lucas puts this line here, not at the end of
            the film, so the audience can watch Amidala prove it wrong in real time.
          </p>
          <p>
            Every choice she makes from this point forward is implicitly a response to Sidious's
            prediction. She is not naive. She is not controllable. Sidious, the most powerful figure
            in the film, is entirely wrong about her.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "No need to report that to him, until we have something to report." (Nute Gunray)
            (aside, about the missing Jedi)
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Nute conceals the missing Jedi from Darth Sidious. Why is this small act significant?
            What does it reveal about the Sidious and Nute relationship?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Nute is supposed to be Sidious's instrument. But here he manages information flowing
              to his master rather than reporting honestly. This is self-protection: he knows
              Sidious will be angry and he needs time to solve the problem first. It shows that even
              the master and tool relationship involves small acts of deception. The cost of those
              small deceptions accumulates inside the film.
            </p>
          </details>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Darth Sidious, Hidden master</span>
            <p>
              Never on screen on Naboo. Appears only as a hologram. Controls every action in the
              film through Nute. He is the invisible hand behind the entire invasion.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Nute Gunray, Visible face</span>
            <p>
              Presented as the film's villain. Actually a tool. His concealment of the Jedi is a
              small act of self-interest within a relationship of total control.
            </p>
          </div>
        </div>
        <p>
          Back in the core, the sub loses power. Sparks and leaks fill the cabin. The Colo Claw Fish
          returns. Qui-Gon calms Jar Jar with a touch, overdoes it, knocking him unconscious. The
          Sando Aqua Monster devours the Colo Claw Fish. The sub escapes.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Monstairs out dare! Leak'n in here, all'n sink'n, and nooooo power! WHEN YOUSA TINK
            WESA IN TROUBLE?!!!?" (Jar Jar Binks). Peak Jar Jar comedy. Contrasts Qui-Gon's total
            composure with Jar Jar's runaway terror.
          </p>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Jar Jar, Panicking</span>
            <p>
              Amplifies every danger. His fear is genuine and his reactions are outsized. He
              reverses the sub into a monster's mouth. His clumsiness creates the crises.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Qui-Gon, Calm</span>
            <p>
              Diminishes every danger. His stillness is not indifference, it is practiced presence.
              The bongo crossing plays these two against each other for both comedy and tension.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Surface and City</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The sub surfaces in a beautiful estuary. The Jedi are back on land. What do you think
            they will find when they reach Theed, Naboo's capital city?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The city is already occupied. The Federation moved fast. Queen Amidala and her court
              are surrounded by battle droids in the palace. The Jedi arrive too late to prevent the
              occupation but in time to rescue the Queen before she is processed to Camp Four.
            </p>
          </details>
        </div>
        <p>
          The sub surfaces in a paradise estuary, green, sunlit, and beautiful. But it drifts toward
          a waterfall. Obi-Wan fights the engine. Qui-Gon fires a cable to the shore. All three
          climb out just before the sub falls. A single battle droid confronts them. Qui-Gon cuts it
          down without breaking stride.
        </p>
        <p>
          In the throne room, Amidala sits surrounded by droids. Nute Gunray stands before her. He
          demands she sign a treaty legitimizing the occupation. She refuses with three blunt words.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"I will not co-operate." (Queen Amidala)</p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Craft note</span>
          <p>
            This is Amidala's first direct test. She was in denial at the start of the film. Now she
            faces the Federation in person, with no institutional protection left, and she still
            will not sign. Her refusal here, under maximum pressure, is what makes her credible as a
            leader for the rest of the film.
          </p>
        </div>
        <p>
          OOM-9 orders the Queen and her court processed to Camp Four. The escort moves through
          Theed Plaza. Then, from a balcony above, Qui-Gon, Obi-Wan, and Jar Jar drop into the
          square and cut down the escort droids. First meeting: the Queen and the Jedi.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Your negotiations seem to have failed, Ambassador." (Sio Bibble) / "The negotiations
            never took place." (Qui-Gon Jinn). Ironic exchange that reframes Jedi failure and
            reveals the Federation's ambush had been the plan all along.
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the plaza rescue happen this way, from above, fast, without announcement ,
            rather than a planned assault? What screenwriting choice does this reflect?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Speed and surprise are the only advantages the Jedi have. They cannot fight fifty
              droids in a pitched battle. A vertical ambush, dropping from above, eliminates the
              escort before it can respond. Screenwriting-wise, it also makes the Jedi feel capable
              without being godlike: they pick the right moment, not just the right weapons. The
              suddenness of the rescue mirrors how Qui-Gon operates throughout the module, he acts
              from the present moment, not from plans.
            </p>
          </details>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The throne-room and plaza scenes are paired by design. In the throne room, Amidala has
            no power and still refuses. In the plaza, the Jedi appear and turn refusal into rescue.
            Lucas places the captive scene first so the audience experiences her defiance before her
            freedom. The order matters: it tells you her character is not created by the rescue, it
            is revealed by the refusal that preceded it.
          </p>
          <p>
            From first principles, this is how character is built under occupation: not by what a
            leader does when free, but by what they refuse when caged. Sidious's line about "young
            and naive" is already failing here, three scenes before he hears the news.
          </p>
        </div>
      </>,

      <>
        <h2>The Decision and Escape</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Amidala must choose: stay on Naboo and resist the occupation, or flee to Coruscant and
            plead before the Senate. What do you predict she decides, and what persuades her?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              She flees to Coruscant. Qui-Gon senses the Sith's hand behind the invasion and tells
              her there is no logic in the Federation's move, her life is at risk. Bibble urges her
              toward the Senate. Her own moment of visible doubt, "Either choice presents a great
              risk", shows this is not a confident choice. It is the least bad option.
            </p>
          </details>
        </div>
        <p>
          The group reaches the main hangar. Panaka spots a Naboo spacecraft. Qui-Gon urges Amidala
          to flee to Coruscant. She resists, then weighs the arguments out loud.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "The situation here is not what it seems. There is something else behind all this, Your
            Highness. There is no logic in the Federation's move here. My feelings tell me they will
            destroy you." (Qui-Gon Jinn)
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Qui-Gon uses the word "feelings" deliberately. He is not reporting a fact, he is sharing
            a Force perception. This is his instinct over logic, which is a Jedi leitmotif: the
            Force as a sense that runs deeper than evidence.
          </p>
          <p>
            He names the Sith's presence without naming the Sith. He knows something is wrong at a
            level that cannot be articulated as an argument.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Please, Your Highness, reconsider. Our only hope is for the Senate to side with us...
            Senator Palpatine will need your help." (Governor Bibble)
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Bibble says "Senator Palpatine will need your help." Why is this line significant for
            the rest of the story, beyond this scene?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Bibble, a loyal advisor, is unknowingly steering Amidala into the hands of the man
              orchestrating her suffering. The line is a foreshadowing trap, it sounds like good
              advice. Bibble is not corrupt, just deceived. His most well-meaning counsel
              accelerates the galaxy's fall.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"Either choice presents a great risk...to all of us..." (Queen Amidala)</p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            This is the rare moment where Amidala drops the composed facade she projects. She has
            been certain and controlled through everything, the throne room, the escort, the hangar.
          </p>
          <p>
            Here, for the first time, she admits doubt. It is a small crack in a character built on
            composure. It makes her human and makes the decision feel real.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "We are brave, Your Highness." (Padme). A handmaiden speaks the consent of the court to
            the dangerous escape plan. The line later carries extra weight: Padme is Amidala in
            disguise, voting on her own choice.
          </p>
        </div>
        <p>
          Amidala decides: she will plead before the Senate. Obi-Wan frees the captured Naboo
          pilots. The group fights through fifty battle droids. The chrome Naboo ship launches under
          fire. Hangar alarms sound. The occupation of Naboo is complete. The protagonists are
          off-planet.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Craft note</span>
          <p>
            The decision to flee is framed as courageous, not cowardly. Amidala does not run from
            the fight, she redirects it to a higher arena. The hangar escape is not retreat. It is
            the next threshold in the module's journey structure.
          </p>
        </div>
      </>,

      <>
        <h2>Themes and Craft</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Before reading the formal theme list, try this: name two themes from this module that
            would still apply if you stripped away the spaceships and swapped Naboo for a
            non-science-fiction setting. What does the film argue that transcends its genre?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Denial vs. reality and isolation as vulnerability both transcend the genre. A
              politician refusing to believe an obvious threat works in any setting. Two communities
              sharing one geography but refusing to recognize each other is a story older than
              science fiction. The genre dresses the themes but does not generate them.
            </p>
          </details>
        </div>
        <p>
          This section groups the analytical tools the module provides. Use it when writing about
          storytelling technique, theme, or character in The Phantom Menace.
        </p>
        <h3>Core Themes</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DENIAL VS. REALITY</span>
          <div className="lrn-definition-desc">
            <p>
              Amidala denies the invasion until droids surround her. Nute denies the threat the Jedi
              represent until Qui-Gon cuts his blast door. Both pay for it. Denial is the module's
              central dramatic engine.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">NEGOTIATION'S LIMITS</span>
          <div className="lrn-definition-desc">
            <p>
              Every character who advocates for negotiation, Amidala, Bibble, is rendered helpless
              by force. The film collapses the diplomatic path completely in its opening scenes.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">ISOLATION AS VULNERABILITY</span>
          <div className="lrn-definition-desc">
            <p>
              Boss Nass's refusal to engage with Naboo is shown immediately to be dangerous.
              Obi-Wan's symbiont argument names it directly: what happens to one affects the other.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">CALM UNDER CHAOS</span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon's stillness is the correct response to escalating danger. Jar Jar's panic is
              the comic inverse. The bongo sequence plays these two characters against each other
              throughout.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">POWER BEHIND THE CURTAIN</span>
          <div className="lrn-definition-desc">
            <p>
              Darth Sidious is never on screen on Naboo. He appears only as a hologram on a
              Federation ship. Every action in the film flows from his instructions. He is
              invisible. He is the phantom menace of the title.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DEBT AND OBLIGATION</span>
          <div className="lrn-definition-desc">
            <p>
              The life-debt mechanic binds Jar Jar to the Jedi. Saving a life creates a binding
              claim in Gungan law. Obligation structures the moral economy of the underwater
              sequence.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">COURAGE VS. FEAR</span>
          <div className="lrn-definition-desc">
            <p>
              Jar Jar faces terror and acts anyway. Amidala's decision to flee is framed as
              courageous, she redirects the fight, not abandons it. Fear is present throughout; what
              differs is the response.
            </p>
          </div>
        </div>

        <h3>Dramatic Techniques</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">PARALLEL CUTTING</span>
          <div className="lrn-definition-desc">
            <p>
              The planet core crossing is intercut with the Darth Sidious scene on the Federation
              battleship. Physical danger juxtaposes with political scheming. The film's scope
              expands while the sub travels.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">ESCALATING THREAT SERIES</span>
          <div className="lrn-definition-desc">
            <p>
              The sea-monster encounters follow a strict rule of three. Opee Sea Killer → Sando
              devours it → Colo Claw Fish → Sando devours that too. Each predator is bigger. The
              final escape requires not skill but the monsters eating each other.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">COMIC RELIEF AS PLOT MECHANISM</span>
          <div className="lrn-definition-desc">
            <p>
              Jar Jar's clumsiness drives actual plot events. His panic is not decorative, it
              creates crises the Jedi must solve. Comedy and danger share the same source.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DRAMATIC IRONY</span>
          <div className="lrn-definition-desc">
            <p>
              Sidious calls Amidala "naive" and "not difficult to control." The audience will watch
              her outsmart everyone in the Senate arc. The line is placed here to be proven wrong.
              The audience knows more than the character.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">FORCE AS RESTRAINT</span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon's Force use is almost entirely subtle: a mind trick on Boss Nass, a calming
              hand on Jar Jar's shoulder, and instinct. He uses his lightsaber only when necessary.
              Power through economy.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">MINIMALIST WORLD-BUILDING</span>
          <div className="lrn-definition-desc">
            <p>
              Boss Nass's dialogue, "da nocombackie law," "liveplay," "pounded unto death" , conveys
              an entire Gungan legal and social system in four exchanges. World-building through
              idiom, not description.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">THRESHOLD STRUCTURE</span>
          <div className="lrn-definition-desc">
            <p>
              The module is built as a sequence of thresholds: Palace → Swamp → Underwater → Planet
              Core → Surface → City → Hangar → Space. Each threshold is harder to cross than the
              last.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">REFUSAL OF THE CALL REVERSED</span>
          <div className="lrn-definition-desc">
            <p>
              Jar Jar refuses to guide the Jedi, then is pressured by threat. Amidala refuses to
              flee, then is persuaded by reason. Both refusals are overcome by external pressure,
              not internal change, realistic for crisis conditions.
            </p>
          </div>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does Lucas place so many themes, denial, isolation, debt, calm, courage, hidden
            power, in a single act rather than spreading them across the film? What does the
            concentration achieve?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Act I has to do all the work of establishing the rules of the story. By stacking
              themes now, Lucas frees later acts to develop them in motion rather than introducing
              them cold. The audience leaves Naboo holding all the questions the rest of the film
              will answer. Concentration of theme is a cost-of-attention strategy, expensive once,
              cheap for the next two hours.
            </p>
          </details>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            From first principles, every craft technique listed above serves the same purpose:
            compressing maximum meaning into minimum screen time. Parallel cutting buys scope for
            free. Escalating threat buys tension without new characters. Comic relief that causes
            crises buys two tones from one source. Minimalist world-building buys a culture from a
            few lines. The act is dense because it cannot afford to be sparse.
          </p>
          <p>
            These techniques are not decoration. They are the only way a 2-hour film can stage an
            invasion, introduce a dozen characters, and seed three further acts in a single hour of
            screen time.
          </p>
        </div>
      </>
    ],
    practice: [
      {
        id: 'nie-001',
        q: 'What does Governor Bibble conclude when Naboo loses contact with Senator Palpatine?',
        a: 'He says a communications disruption can only mean one thing: invasion. He reads the silence as a hostile act, not a technical failure. This sets the dramatic clock running before anyone else accepts it.'
      },
      {
        id: 'nie-011',
        q: 'What famous line does Qui-Gon say after the Sando Aqua Monster saves them from the Opee Sea Killer?',
        a: '"There\'s always a bigger fish." He observes the survival pattern without relief or celebration. It reveals his total calm, crisis registers as information, not trauma. The line also seeds the political theme: every power in this story is eaten by a larger one.'
      },
      {
        id: 'nie-007',
        q: 'What is the life-debt, and why is it important to the story?',
        a: "In Gungan law, saving someone's life creates a binding obligation. Qui-Gon saved Jar Jar, so Jar Jar must serve him. Without this legal mechanism, Jar Jar would never help them at all, and the Jedi would never reach Otoh Gunga. The life-debt is the screenplay's tool for binding a reluctant character to the main party."
      },
      {
        id: 'nie-013',
        q: 'What does Darth Sidious say about Queen Amidala, and why is this dramatic irony?',
        a: 'He calls her "young and naive" and says controlling her will not be difficult. It is dramatic irony because the audience will watch her outsmart everyone in the Senate arc. The line is placed here to be proven wrong: Sidious, the most powerful figure in the film, is already wrong about the person he thinks he controls.'
      },
      {
        id: 'nie-018',
        q: 'What does Nute demand from Amidala in the occupied throne room, and how does she respond?',
        a: 'He demands she sign a treaty legitimizing the occupation. She refuses with three words: "I will not co-operate." OOM-9 then orders her processed to Camp Four. Her refusal under maximum pressure is what makes her credible as a leader for the rest of the film.'
      },
      {
        id: 'nie-004',
        q: 'How does Qui-Gon rescue Jar Jar from the invasion force in the swamp?',
        a: 'Qui-Gon pulls Jar Jar out of the path of an MTT (Multi-Troop Transport) that would have crushed him. This creates the life-debt that binds Jar Jar to them. The rescue is instinctive, not planned, which characterizes Qui-Gon as a "living Force" Jedi who acts from the present moment.'
      },
      {
        id: 'nie-021',
        q: "What does Bibble say to Amidala that foreshadows Palpatine's manipulation?",
        a: '"Senator Palpatine will need your help." He steers Amidala toward Coruscant, unknowingly directing her into the hands of the man behind the invasion. Bibble is not corrupt, just deceived. His most well-meaning counsel accelerates the galaxy\'s fall.'
      },
      {
        id: 'nie-008',
        q: 'What does Boss Nass say about the relationship between Gungans and Naboo?',
        a: '"Wesa no like da Naboo." He explains mutual contempt: Naboo thinks it is smarter; Gungans want nothing to do with them. This isolationism is what Obi-Wan\'s symbiont argument challenges, and what Qui-Gon ultimately bypasses with a Force trick instead of debate.'
      },
      {
        id: 'nie-015',
        q: 'How do the three sea monsters in the planet core follow the escalating threat structure?',
        a: "Each predator is bigger than the last: Opee Sea Killer → Sando Aqua Monster eats it → Colo Claw Fish → Sando eats that too. The final escape requires not skill but scale, monsters eating each other. The structure also mirrors the film's political hierarchy: Nute < Sidious."
      },
      {
        id: 'nie-022',
        q: "What is Amidala's exact line when she admits doubt in the hangar, and why does it matter?",
        a: '"Either choice presents a great risk...to all of us..." It is a rare crack in her composed facade. She projects certainty throughout the film; this moment makes her human and makes the decision feel real, not procedural.'
      },
      {
        id: 'nie-005',
        q: 'What famous line does Qui-Gon deliver to Jar Jar after rescuing him, and what does it reveal?',
        a: '"The ability to speak does not make you intelligent." It reveals Qui-Gon\'s bluntness and his focus on the present. He has no time for Jar Jar\'s chatter while an army marches overhead. The line also establishes Jar Jar as a comic liability the Jedi initially try to reject.'
      },
      {
        id: 'nie-012',
        q: 'What is parallel cutting, and how does Lucas use it in the planet core sequence?',
        a: 'Parallel cutting shows two simultaneous events in different locations. Lucas cuts from the sub in the core to the Sidious hologram scene on the Federation battleship. Physical danger is juxtaposed with political scheming. The cutting expands narrative scope while the sub physically travels through one space.'
      },
      {
        id: 'nie-026',
        q: 'Transfer: Choose a film or book you know. Identify one moment where a character refuses a call to action and is then forced into it by external pressure. How does that compare to Jar Jar or Amidala?',
        a: "Look for a character who says no and then acts anyway, but not because they changed internally. The external force (threat, consequence, circumstance) must be what moves them. Compare the mechanism: is it a legal obligation like the life-debt, a threat like Obi-Wan's warning, or a reasoned argument like Qui-Gon's? The mechanism tells you what the story values. If the cause is internal growth, it is a different pattern entirely."
      },
      {
        id: 'nie-009',
        q: 'What is the symbiont circle argument, and why does it fail to persuade Boss Nass?',
        a: 'Obi-Wan argues that what happens to Naboo will affect the Gungans, because they share the same planet. It fails because Boss Nass acts on pride and resentment, not logic. Argument cannot undo centuries of cultural contempt. The scene quietly argues that some political deadlocks cannot be solved by reason alone.'
      },
      {
        id: 'nie-017',
        q: 'How do the Jedi escape the waterfall after surfacing in the Theed estuary?',
        a: "Obi-Wan fights the engine while Qui-Gon fires a cable to the shore. All three climb out just before the sub goes over. It shows the Jedi's practical teamwork under pressure: division of labor, no panic, action timed to the second."
      },
      {
        id: 'nie-024',
        q: "What is the 'refusal of the call reversed' technique, and which two characters demonstrate it?",
        a: 'Both Jar Jar and Amidala refuse before agreeing. Jar Jar refuses to guide the Jedi, then is pressured by threat. Amidala refuses to flee, then is persuaded by reason. External pressure overcomes both refusals, not internal change. This is realistic for crisis conditions: people rarely act heroically because they suddenly become brave.'
      },
      {
        id: 'nie-002',
        q: "What is Amidala's response to Bibble's warning about invasion?",
        a: 'She refuses to believe the Federation would dare. She says she will not condone any action leading to war. Her trust in institutions overrides the evidence. The line collides instantly with dramatic irony, since the audience has already seen the landing craft descend.'
      },
      {
        id: 'nie-014',
        q: 'What does Nute conceal from Darth Sidious, and what does this reveal?',
        a: "He hides the fact that the Jedi are missing. He says there is no need to report it until he has something to report. This reveals that even a tool tries to manage information flowing to its master. The deception plants a seed for Nute's later downfall: managing Sidious will cost him."
      },
      {
        id: 'nie-019',
        q: 'How do the Jedi rescue Amidala in Theed Plaza?',
        a: 'They drop from a balcony above the plaza onto the droid escort. Speed and surprise eliminate the guards before they can respond. First meeting between Amidala and the Jedi. Bibble then says "Your negotiations seem to have failed, Ambassador," and Qui-Gon replies "The negotiations never took place," reframing the entire mission.'
      },
      {
        id: 'nie-030',
        q: "Self-explain: Why does Obi-Wan's symbiont argument fail even though it is factually correct?",
        a: 'Correct information does not change minds shaped by resentment. Boss Nass does not dispute that the Gungans and Naboo are connected. He simply does not care. His identity and pride are built on separation. A logical argument cannot compete with a centuries-old emotional stance. This is why Qui-Gon bypasses argument entirely. He reads the situation correctly and uses the one tool that works on a closed mind: a Force suggestion that overrides will.'
      },
      {
        id: 'nie-006',
        q: 'What threat finally convinces Jar Jar to guide the Jedi to Otoh Gunga?',
        a: 'Obi-Wan describes what will happen if the Federation finds them: crush, grind, blast into oblivion. The cost of refusing becomes higher than the cost of leading them. The shift is external, not internal. Jar Jar does not become brave; he becomes more afraid of staying than of moving.'
      },
      {
        id: 'nie-016',
        q: "What happens when the sub loses power in the core, and how does Qui-Gon handle Jar Jar's panic?",
        a: "Qui-Gon calms Jar Jar with a hand on his shoulder, but overdoes it and knocks him unconscious. Comedy and danger share the same source: Jar Jar's uncontrollable fear. The Force is used here not as a weapon but as a calming tool, an example of restraint in Jedi power."
      },
      {
        id: 'nie-023',
        q: 'What is the threshold structure, and how does it apply to this module?',
        a: 'A sequence of progressively harder boundaries the protagonist must cross. Here: Palace → Swamp → Underwater → Planet Core → Surface → City → Hangar → Space. Each threshold is harder than the last. The structure is borrowed from older quest narratives and applied to a single act of a single film.'
      },
      {
        id: 'nie-010',
        q: 'How does Qui-Gon actually get what he needs from Boss Nass?',
        a: "He uses a Jedi mind trick. He bypasses the Gungan leader's will entirely rather than persuading him. He gets a bongo submarine and Jar Jar's custody. The exchange is also comic: Qui-Gon does not know what a bongo is until Obi-Wan calls it a transport, which means he improvised the request without preparation."
      },
      {
        id: 'nie-027',
        q: 'Transfer: Name a film where parallel cutting is used to compare two simultaneous events. What contrast does the cutting create, and how does it compare to the Sidious scene cutting against the planet core?',
        a: 'Any film using parallel editing works: crosscuts in action films, intercut conversations in thrillers, simultaneous events in heist films. The key question is what contrast the cuts create. Lucas cuts from physical survival to political manipulation, danger vs. scheming. The contrast expands scope and reveals that the true threat is not the monster but the man on the hologram. Compare to your film: is the contrast between two physical actions, two emotional registers, or one act and its political consequence?'
      },
      {
        id: 'nie-003',
        q: 'Who commands the Federation ground forces on Naboo, and what does he report?',
        a: 'Droid commander OOM-9. He reports to Nute via hologram: no Jedi found, no resistance, troops marching on the cities. The report establishes how completely the invasion is succeeding while the protagonists remain hidden in the swamp.'
      },
      {
        id: 'nie-020',
        q: 'What does Qui-Gon tell Amidala about the situation in Theed when he urges her to flee?',
        a: '"The situation here is not what it seems. There is no logic in the Federation\'s move here. My feelings tell me they will destroy you." He names the Sith\'s hidden hand through Force instinct without naming the Sith. The word "feelings" is deliberate: he is sharing a Force perception, not reporting a fact.'
      },
      {
        id: 'nie-025',
        q: 'How does Jar Jar function as comic relief and plot mechanism at the same time?',
        a: "His clumsiness creates actual crises, he reverses the sub into a monster's mouth, faints twice. His panic is not decorative. The Jedi must solve problems Jar Jar creates. Comedy and danger share the same source. Without Jar Jar's mistakes, the planet-core sequence would have no internal pressure beyond the monsters."
      },
      {
        id: 'nie-028',
        q: "Elaborate: Why is Darth Sidious's absence from Naboo, appearing only as a hologram, more effective than showing him in person?",
        a: "Physical presence limits a character to one location and makes their power feel bounded. A hologram figure who controls events without ever arriving makes the power feel unlimited and everywhere. The audience cannot point to Sidious on a map and say 'there he is.' He is wherever the hologram reaches. Invisibility amplifies threat, the unknown is always larger than the known. This is also why he is the phantom menace of the title: present in influence, absent in body."
      },
      {
        id: 'nie-029',
        q: 'Predict: If Amidala had signed the treaty Nute demanded, what would have happened to the story?',
        a: "The Federation would have gained legal legitimacy for the occupation. Coruscant would have had less reason to act. Palpatine could not have used her as his instrument to call for a vote of no confidence in Valorum. The entire Senate arc depends on her refusal. Her no is the plot's hinge. Ironically, her refusal accidentally serves Sidious's larger plan: by fleeing to Coruscant, she becomes his tool against the sitting Chancellor."
      }
    ],
    referenceSections: [
      <>
        <h2>Scene Index</h2>
        <ol className="lrn-list">
          <li>
            <strong>Throne Room, Communications Disrupted:</strong> Hologram from Palpatine sputters
            out. Bibble reads it as invasion. Amidala refuses to believe.
          </li>
          <li>
            <strong>Space / Swamp, Landing Craft Arrive:</strong> Six Federation ships descend. MTTs
            roll out. OOM-9 reports to Nute: no Jedi, no resistance.
          </li>
          <li>
            <strong>Naboo Swamp, Qui-Gon Meets Jar Jar:</strong> Qui-Gon saves Jar Jar from an MTT.
            Recruits him via life-debt threat and Obi-Wan's grim warning.
          </li>
          <li>
            <strong>Swamp Lake, Diving Underwater:</strong> Jar Jar leads the Jedi into the lake
            with breathing masks toward Otoh Gunga.
          </li>
          <li>
            <strong>Otoh Gunga, Audience with Boss Nass:</strong> Guards arrest the trio. Boss Nass
            refuses help. Obi-Wan argues symbiosis. Qui-Gon mind-tricks a bongo sub. Jar Jar
            released into Qui-Gon's custody.
          </li>
          <li>
            <strong>Planet Core, Underwater Journey / Sea Monsters:</strong> Jar Jar reveals his
            banishment. Three sea monsters attack in sequence. Each is eaten by the next larger
            predator.
          </li>
          <li>
            <strong>Federation Battleship Bridge, Darth Sidious Hologram:</strong> Sidious confirms
            Senate manipulation. Calls Amidala naive. Nute conceals the missing Jedi.
          </li>
          <li>
            <strong>Planet Core, Sub Loses Power:</strong> Leaks and sparks. Colo Claw Fish returns.
            Qui-Gon calms Jar Jar unconscious. Sando devours the Colo. Sub escapes.
          </li>
          <li>
            <strong>Theed Estuary, Surface Arrival / Waterfall Escape:</strong> Sub surfaces. Drifts
            toward waterfall. Qui-Gon fires cable. All three climb out. Battle droid cut down.
          </li>
          <li>
            <strong>Theed Palace Throne Room, Occupation / Rescue:</strong> Nute demands Amidala
            sign treaty. She refuses. Droids move escort to Camp Four. Jedi drop from balcony,
            rescue the group.
          </li>
          <li>
            <strong>Central Hangar, Escape from Theed:</strong> Hangar debate. Amidala decides to
            plead before Senate. Pilots freed. Fifty droids fought. Chrome ship launches. Occupation
            complete.
          </li>
        </ol>
      </>,

      <>
        <h2>Key Dialogue</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "A communications disruption can only mean one thing. Invasion."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Bibble, throne room. Sets the invasion in motion. Stark certainty against Amidala's
              denial.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "I will not condone a course of action that will lead us to war."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Amidala, throne room. Her governing philosophy. The invasion will force her to abandon
              it.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "The ability to speak does not make you intelligent. Now get outta here!"
          </span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon, swamp. Famous line. Establishes his bluntness and Jar Jar's comic status
              simultaneously.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "When they find us, they will crush us, grind us into little pieces, then blast us into
            oblivion!"
          </span>
          <div className="lrn-definition-desc">
            <p>
              Obi-Wan, swamp. Dark comedy. The threat that finally convinces Jar Jar to guide them
              underground.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Wesa no like da Naboo! Un dey no like uss-ens."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Boss Nass, Otoh Gunga. Captures centuries of Gungan and Naboo contempt in one speech.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "You and the Naboo form a symbiont circle. What happens to one of you will affect the
            other."
          </span>
          <div className="lrn-definition-desc">
            <p>Obi-Wan, Otoh Gunga. The ecological and political thesis of the Naboo arc.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"There's always a bigger fish."</span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon, planet core. Deadpan observation after a monster devours their predator.
              Characterizes his unshakeable calm.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Queen Amidala is young and naive. You will find controlling her will not be difficult."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Darth Sidious, Federation battleship. Placed here to be proven wrong. Classic dramatic
              irony.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "No need to report that to him, until we have something to report."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Nute, aside about the missing Jedi. Reveals his self-protective management of Sidious.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "The situation here is not what it seems. There is no logic in the Federation's move
            here. My feelings tell me they will destroy you."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon, hangar. He names the Sith's hand without naming the Sith. Instinct over logic
              as a Jedi leitmotif.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Please, Your Highness, reconsider. Our only hope is for the Senate to side with us...
            Senator Palpatine will need your help."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Bibble, hangar. Foreshadows the Senate arc and Palpatine's manipulation. Well-meaning
              counsel with catastrophic long-term consequences.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Either choice presents a great risk...to all of us..."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Amidala, hangar. Rare visible doubt from a character who projects certainty. The human
              crack in the composed facade.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Dramatic Techniques, Quick Reference</h2>
        <ul className="lrn-list">
          <li>
            <strong>Parallel cutting</strong>, Intercuts the core journey with the Sidious hologram
            scene. Physical danger vs. political scheming. Expands narrative scope simultaneously.
          </li>
          <li>
            <strong>Escalating threat series</strong>, Rule of three sea monsters, each bigger than
            the last. Final escape requires scale (monster eating monster), not skill.
          </li>
          <li>
            <strong>Comic relief as plot mechanism</strong>, Jar Jar's clumsiness creates actual
            crises. Comedy and danger share the same source.
          </li>
          <li>
            <strong>Dramatic irony</strong>, Sidious calls Amidala naive; she will prove him wrong.
            Audience knows more than the character on screen.
          </li>
          <li>
            <strong>Force as restraint</strong>, Qui-Gon uses the Force subtly: mind trick, calming
            touch, instinct. Lightsaber only when necessary.
          </li>
          <li>
            <strong>Minimalist world-building</strong>, Gungan idiom ("da nocombackie law") conveys
            an entire legal system in four exchanges.
          </li>
          <li>
            <strong>Threshold structure</strong>, Palace → Swamp → Underwater → Core → Surface →
            City → Hangar → Space. Each threshold harder than the last.
          </li>
          <li>
            <strong>Refusal of the call reversed</strong>, Both Jar Jar and Amidala refuse, then
            act. External pressure, not internal change, moves them.
          </li>
        </ul>
      </>
    ]
  }
}

function strandedOnTatooineContent() {
  return {
    sections: [
      <ChapterDivider key="div-strandedOnTatooineContent">
        <h2>Act II: Stranded on Tatooine</h2>
        <p>Hyperdrive failure forces a desert detour.</p>
      </ChapterDivider>,
      <>
        <h2>What This Module Covers</h2>
        <p>
          Act II begins with a broken ship. The hyperdrive fails after escaping Naboo, and the group
          lands on Tatooine, a remote desert planet far outside Republic law. This is where the
          film's central character enters.
        </p>
        <p>
          Anakin Skywalker is nine years old. He is a slave. He builds machines from scrap and races
          Pods at speeds no human can survive. In eight scenes, the film moves from a junk shop to a
          dinner table. By the end, a nine-year-old slave has offered to save everyone.
        </p>
        <p>
          Children in stories of this kind carry symbolic weight: innocence at risk, potential
          wasted, or hope in unlikely places. The Phantom Menace uses all three at once. Anakin is
          gifted, enslaved, and the only person who can help the Jedi right now.
        </p>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            These scenes do three things at once. They establish Tatooine as a place where Republic
            law does not reach. They introduce Anakin through action, generosity, and pride, not
            description.
          </p>
          <p>
            Watch what the film shows you before Anakin speaks. He flinches when Watto raises a
            hand. That single physical detail does more than any line of dialogue could.
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the film introduce Anakin in a junk shop rather than somewhere more heroic?
            Form your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The junk shop is a compression device. It establishes poverty, servitude, and
              mechanical genius in one location. Anakin builds things from broken pieces because
              that is all he has. His environment is not a background, it is his character. Heroism
              emerging from a junk shop is more powerful than heroism emerging from a palace because
              the audience has to do no work to understand the stakes.
            </p>
          </details>
        </div>
        <p>
          The module moves through four locations: the spacecraft cockpit, Watto's junk shop, the
          Mos Espa market, and Anakin's hovel. Each scene tightens the group's desperation while
          expanding who Anakin is.
        </p>
      </>,

      <>
        <h2>The Leaking Hyperdrive</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The ship escapes Naboo but cannot reach Coruscant. Panaka wants somewhere safe. Qui-Gon
            wants somewhere the Federation cannot follow. Can both conditions be met?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Not fully. Tatooine is outside Federation reach, but it is controlled by the Hutts,
              gangsters who care nothing for Republic law. Qui-Gon chooses it anyway. His reasoning:
              the Federation is not looking for them there, which makes a known danger better than a
              targeted one. This is a calculated trade, not a safe choice.
            </p>
          </details>
        </div>
        <p>
          Inside the droid hold, Jar Jar bumps a red R-2 unit's head open, springs fly out. He
          clamps it shut, embarrassed. Meanwhile, a single blue droid saves the ship as it clears
          the blockade. It bypasses the main power drive and brings the deflector shield up in time.
          Without it, the ship would not survive the escape.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "There's not enough power to get us to Coruscant...the hyperdrive is leaking." (Ric
            Olie)
          </p>
        </div>
        <p>
          Obi-Wan supplies the destination: Tatooine, small, out of the way, poor, and clear of the
          Trade Federation. Qui-Gon accepts the risk. Panaka objects. Qui-Gon overrules him.
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does Lucas show the hyperdrive failure immediately after the escape, rather than
            giving the group a moment of relief? What storytelling choice does this reflect?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              A moment of relief would release tension. Lucas cannot afford that. The film has
              eleven scenes of danger behind it and an entire act ahead. The hyperdrive failure
              converts the escape from triumph into crisis. The audience never settles. Relief is
              the enemy of momentum in an action story. Lucas keeps the threat continuous rather
              than episodic.
            </p>
          </details>
        </div>
        <p>
          Cut to the Federation battleship. Darth Sidious appears in hologram. Sidious gives the
          first explicit order: destroy all high-ranking officials, slowly, quietly. Nute reports
          the Queen has vanished. Sidious is precise.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"Destroy all high-ranking officials, Viceroy...slowly...quietly." (Darth Sidious)</p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"...not for a Sith..." (Darth Sidious)</p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            This is the first introduction of Darth Maul. Sidious steps aside. A second figure
            stands behind him. Nute and Rune react with visible alarm. The reveal is wordless and
            brief.
          </p>
          <p>
            Nute's aside names the dread directly: "now there are two of them." The Sith operate in
            a strict pair: a master and an apprentice. The film itself shows this pattern: Sidious
            is the master, Maul is the apprentice. Mace Windu later asks aloud which of the two was
            killed. What the scene gives us is Nute's fear as the measure of threat, dread by proxy.
          </p>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Nute Gunray, Alarmed</span>
            <p>
              He made a bargain with Sidious and now sees its true cost. Two Sith Lords are
              involved. He tells Rune they should not have made this bargain.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Rune Haako, Afraid</span>
            <p>
              He asks what will happen when the Jedi become aware of the Sith. The question
              foreshadows the rest of the film, and no one at this table can answer it.
            </p>
          </div>
        </div>
        <p>
          Back on the Naboo ship, Amidala stands before three handmaidens, Padme, Eirtae, and Rabe,
          and the little blue droid. Panaka scrapes grime from its side and reads the number. R2-D2.
          Amidala names it and assigns Padme to clean it. The droid earns a name and a companion in
          one exchange.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Thank you, Artoo Detoo. You have proven to be very loyal...Padme! Clean this droid up
            the best you can. It deserves our gratitude." (Queen Amidala)
          </p>
        </div>
        <p>
          After landing, Qui-Gon warns Obi-Wan before disembarking: send no transmissions. Then,
          quietly, he adds the reason.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "I sense a disturbance in the Force." (Qui-Gon Jinn) / "I feel it also, Master."
            (Obi-Wan Kenobi)
          </p>
        </div>
        <p>
          Both Jedi feel something waiting on this planet. The film does not explain what. It moves
          on. The sensation is the setup for everything that follows.
        </p>
        <p>
          The ship descends toward Tatooine. Qui-Gon instructs Ric Olie to land on the outskirts. He
          does not want attention. Panaka warns that the Hutts are gangsters. Padme joins the shore
          party by the Queen's command, delivered through Panaka, dressed in peasant clothes and
          trained in defense. Qui-Gon protests, then accepts. They have no time to argue.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Craft note</span>
          <p>
            Padme joins this shore party by the Queen's command. The audience is told she attends
            the Queen. This is one of the film's central misdirections: Padme is the Queen. Every
            scene in which she watches "the Queen" from a distance is Amidala watching herself in
            disguise. The Tatooine sequence plants this deception and rewards a second viewing
            entirely.
          </p>
        </div>
      </>,

      <>
        <h2>Watto's Junk Shop and Anakin</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Qui-Gon has Republic credits and needs a hyperdrive. The only dealer with the right part
            refuses to accept Republic money. How do you think Qui-Gon solves this?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              He tries a Jedi mind trick and it fails. Watto is a Toydarian, immune to Force
              suggestion. Qui-Gon has no backup plan. He leaves the shop with no parts and no money.
              The solution will not come from the Jedi's power or the Republic's currency. It will
              come from a nine-year-old slave with a half-built Podracer.
            </p>
          </details>
        </div>
        <p>
          The group reaches a junk dealer's plaza. Qui-Gon picks a small shop. Inside, a winged blue
          alien named Watto flies on short wings and haggles in broken Basic. He calls a boy from
          the junkyard. Anakin Skywalker runs in, about nine years old, very dirty, and dressed in
          rags. When Watto raises a hand, Anakin flinches.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Craft note</span>
          <p>
            Anakin flinches before a word is spoken. This single physical reflex tells the audience
            everything about his life under Watto. Lucas shows slavery through a reflex, not through
            exposition. It is the most economical character beat in the film.
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Anakin's first spoken line to Padme is "Are you an angel?" Why does this line work
            dramatically, given what you know about both characters?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Anakin has lived on Tatooine his entire life, surrounded by scrap and sand and fear.
              Padme is the most beautiful person he has ever seen. The line is not flattery. It is
              genuine wonder from someone whose world has given him very little that is beautiful.
              It also establishes the emotional core of the film in five words: Anakin idealizes
              what he loves, and the film treats that idealization as a fragility.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Are you an angel? ...They live on the Moons of Iego I think. They are the most
            beautiful creatures in the universe. They are good and kind, and so pretty they make
            even the most hardened spice pirate cry." (Anakin Skywalker)
          </p>
        </div>
        <p>
          Padme says she has never heard of angels. Anakin replies: "You must be one...maybe you
          just don't know it." Padme calls him a funny little boy. He studies her.
        </p>
        <p>
          "You are a strange girl to me," he says. Then he answers her question about how he came to
          be here. He and his mother were sold to Gardulla the Hutt, then lost, Gardulla was betting
          on the Podraces, to Watto. He is a slave. Padme is shocked. Anakin refuses the category,
          his first act of self-definition.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"I am a person! My name is Anakin." (Anakin Skywalker)</p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            This line is the emotional center of the film. Anakin opens by claiming personhood.
            Lucas places it in the first conversation, before any action. Plot does not build
            character. The smallest moments reveal it.
          </p>
        </div>
        <p>
          Meanwhile, Watto takes Qui-Gon to the junkyard. He has the T-14 hyperdrive generator. He
          is the only one in the system. He offers his price, then adds that the group might as well
          buy a new ship, it would be cheaper. Qui-Gon offers Republic credits. Watto refuses.
          Qui-Gon tries a mind trick. Watto is a Toydarian, a species the screenplay uses to remove
          Qui-Gon's most reliable tool. The trick fails completely.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "I'm a Toydarian. Mind tricks don'ta work on me, only money. No money, no parts! No
            deal!" (Watto)
          </p>
        </div>
        <p>
          Qui-Gon has no backup plan. He calls Obi-Wan from a quiet alley outside: is there anything
          of value on the ship? Nothing worth the amounts he needs. Qui-Gon's response: "Another
          solution will present itself." He does not know what it is yet. He leaves the shop with no
          parts and no money.
        </p>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Qui-Gon, Powerless</span>
            <p>
              His credits are worthless. His mind tricks fail. He is a Jedi Master with no leverage.
              No solution exists yet.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Watto, In control</span>
            <p>
              He holds the only hyperdrive on the planet. He operates outside Republic law. He is
              immune to the one power that has solved every problem so far.
            </p>
          </div>
        </div>
        <p>
          Back in the shop, Anakin and Padme exchange names. She says she is Padme Naberrie. After
          the group leaves, Watto mutters in Huttese about outlanders who think the Outer Rim knows
          nothing. Anakin replies, in Huttese: "They seemed nice to me."
        </p>
      </>,

      <>
        <h2>Sebulba and the Market</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Qui-Gon has no money and no leverage. He walks back into the Mos Espa market. What do
            you think happens next to create a connection between the group and Anakin outside the
            shop?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Jar Jar causes trouble, and Anakin saves him. This is the screenplay's pattern: Jar
              Jar's clumsiness creates a crisis, and someone else resolves it. Here, the someone is
              Anakin. He intervenes with a bluff against a dangerous racer named Sebulba, and in
              doing so, introduces himself to the group outside the transactional space of the shop.
            </p>
          </details>
        </div>
        <p>
          The group moves through the market. Jar Jar spots dead frogs hanging at a vendor's stall.
          He checks if anyone is watching, then extends his tongue and pulls one toward his mouth.
          The frog is tied to the wire. The vendor appears. Jar Jar opens his mouth in surprise. The
          frog ricochets across the market and lands in a bowl of soup.
        </p>
        <p>
          The bowl belongs to Sebulba, a spider-like alien. A Dug. He grabs Jar Jar by the throat
          and shoves him to the ground. A crowd gathers. Jar Jar cannot escape. Then a voice cuts
          through.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"Because you're afraid." (Anakin Skywalker)</p>
        </div>
        <p>
          Anakin pushes through to Jar Jar's side and faces Sebulba directly. He bluffs in the
          Huttese language, claiming Jar Jar is connected to the Hutts. Sebulba backs off. He tells
          Anakin, also in Huttese, that if Anakin were not a slave, he would squash him right now.
          Anakin replies: it would be a pity if Sebulba had to pay for him. Sebulba wants to beat
          Anakin in the next race. He cannot do that if Anakin is dead.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Fear attracts the fearful. He was trying to overcome his fear by squashing you...be
            less afraid." (Anakin Skywalker, to Jar Jar)
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Anakin says "be less afraid" to Jar Jar. Why does this line carry a charge inside the
            film itself?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The Jedi Council will warn that fear in Anakin is a problem. He gives Jar Jar the
              correct advice but the film leaves open whether he can follow it himself.
            </p>
          </details>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            This is the screenplay's repeating pattern: Jar Jar's clumsiness creates a crisis and
            someone else resolves it. Here, the someone is Anakin. He introduces himself to the
            group outside the transactional space of the shop. He uses intelligence rather than
            force, a bluff, not a brawl. He is nine years old and handles a lethal confrontation
            with more competence than anyone else in the scene.
          </p>
          <p>
            The market scene also plants Sebulba as Anakin's specific rival. Lucas introduces him as
            a person with motives, not just an obstacle. That choice makes the race stakes personal
            rather than abstract.
          </p>
        </div>
      </>,

      <>
        <h2>The Sandstorm and Anakin's Hovel</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A sandstorm is coming. Anakin invites the group to shelter at his home. Qui-Gon has no
            plan yet for getting the parts. What do you think the dinner scene reveals about how
            they will solve the problem?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Anakin has already built a Podracer. Shmi reveals that gambling drives Tatooine's
              economy. Qui-Gon connects these two facts. The solution is not to find money, it is to
              enter the race and bet on Anakin to win. The dinner scene is where the plan is born,
              but only because a nine-year-old volunteers it.
            </p>
          </details>
        </div>
        <p>
          The wind picks up at the fruit stall. The old woman running it is Jira. Anakin greets her
          and tells her he has found the cooling unit he promised to fix for her, he will have it
          done in no time. Then he buys four pallies for the group, comes up short, and gives up his
          own without comment. He says he is not hungry.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Craft note</span>
          <p>
            Qui-Gon picks up the dropped coin and briefly exposes his lightsaber. Anakin sees it.
            This is the setup for the dinner question about Jedi. Small visual plant, large payoff.
          </p>
        </div>
        <p>
          Back at the ship, Obi-Wan and Panaka watch the storm build. At the same time, inside the
          Queen's chambers, a Sio Bibble hologram reaches the ship, describing catastrophic death
          tolls, demanding the Queen respond.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"It's a trick. Send no reply...send no transmission of any kind." (Obi-Wan Kenobi)</p>
        </div>
        <p>
          Qui-Gon receives the report in the hovel: the Queen is upset, but no transmission was
          sent. He calls it bait to establish a connection trace. Either way, they are running out
          of time.
        </p>
        <p>
          The sandstorm hits. The group runs through the slave quarters into the hovel. Anakin
          introduces everyone to his mother, Shmi. She is startled. Qui-Gon hands her food capsules.
          She accepts them with genuine gratitude.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"He's a very special boy." (Qui-Gon Jinn) / "Yes, I know." (Shmi Skywalker)</p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Shmi speaks as if she has been holding a secret, not displaying pride. The screenplay
            stage direction reads: "as if he's discovered a secret." The film does not explain what
            she knows. It does not need to. This is the module's quietest piece of foreshadowing.
          </p>
          <p>
            Shmi is not a prop for Anakin's backstory. She feeds strangers without complaint,
            apologizes for her surprise, and holds her son's mystery close. She survives with
            dignity in a place without rights.
          </p>
        </div>
        <p>
          Anakin takes Padme to his bedroom and shows her C-3PO, half-built, lying on a workbench,
          one eye in the socket, no outer covering, arms and legs bare. He built the protocol droid
          to help his mother.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "How do you do, I am See-Threepio, Human Cyborg Relations. How might I serve you?"
            (C-3PO)
          </p>
        </div>

        <p>
          At dinner, Shmi explains the transmitters. Watto's regime implants one in every slave's
          body. Anakin adds the detail: he has been working on a scanner to locate them, with no
          luck so far. Any attempt to escape, "and they blow you up...poof!" Padme is horrified.
          Shmi states the condition of the planet in one line.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "The Republic doesn't exist out here...we must survive on our own." (Shmi Skywalker)
          </p>
        </div>
        <p>
          Tatooine sits in the Outer Rim, the edge of the galaxy, past the Republic's reach. No
          Senate representation, no anti-slavery laws, no enforcement. Shmi's line is the module's
          institutional thesis: the Republic's values do not travel to the people who need them
          most.
        </p>
        <p>
          Anakin breaks the silence. He asks Padme if she has ever seen a Podrace. She shakes her
          head no. Qui-Gon volunteers: they have Podracing on Malastare, very fast, very dangerous.
          Anakin says he is the only human who can do it. Shmi objects. Anakin clarifies: it is not
          a boast. Watto has never heard of a human managing it.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"You must have Jedi reflexes if you race Pods." (Qui-Gon Jinn)</p>
        </div>
        <p>
          Anakin asks if Qui-Gon is a Jedi. He saw the lightsaber at the fruit stall. Qui-Gon
          deflects. Anakin says no one can kill a Jedi Knight. Qui-Gon replies: "I wish that were
          so." Anakin is not fooled by the deflection. He names his dream directly.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "I had a dream I was a Jedi. I came back here and freed all the slaves...have you come
            to free us?" (Anakin Skywalker)
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Qui-Gon says "No, I'm afraid not." Anakin replies "I think you have...why else would you
            be here?" Why does Anakin's certainty carry dramatic weight?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Anakin is wrong in the immediate sense and right in the structural sense. Qui-Gon has
              not come to free the slaves. But he is about to free Anakin specifically. The scene
              places the audience in a position of knowing more than Anakin: this meeting is not
              random. Anakin's confidence reads as either childhood naivety or genuine perception.
              The film leaves it ambiguous on purpose.
            </p>
          </details>
        </div>
        <p>
          The plan emerges. Shmi says gambling drives everything on Tatooine. Qui-Gon notes: greed
          can be a powerful ally, if it is used properly. Anakin has built a Podracer in secret.
          There is a race tomorrow on Boonta Eve. He volunteers to enter it under Qui-Gon's name and
          race for the prize money. He frames it as mutual need: "you said that the biggest problem
          in the universe is no one helps each other." He turns Shmi's own words back on her.
        </p>
        <p>Shmi refuses. Then relents. Her weight is in the reason she gives.</p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "I die every time Watto makes you do it." (Shmi Skywalker) / "No, Annie's right, there
            is no other way...he was meant to help you." (Shmi Skywalker)
          </p>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Shmi, Reluctant consent</span>
            <p>
              She has watched Watto send Anakin to race before. She names the cost plainly. She
              consents anyway because she believes something larger is at work.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Anakin, Certain volunteer</span>
            <p>
              He offers before anyone asks. He turns Shmi's own philosophy back on her. His
              selflessness here is the last uncomplicated generosity of his childhood.
            </p>
          </div>
        </div>
        <p>
          On Coruscant, Maul and Sidious stand on a balcony overlooking the city. Sidious has
          already sent Maul to find the Jedi. Maul says: "At last we will have revenge." Sidious
          replies: "The Republic will soon be in my command." The audience holds both images: the
          group eating dinner in the hovel, and a Sith receiving his orders to kill them.
        </p>
      </>,

      <>
        <h2>Themes and Craft</h2>
        <p>
          Strip the science fiction setting and two arguments remain. Institutions that claim to
          protect people often do not reach those who need protection most. People treated as
          property still insist on their own personhood. Both arguments exist in any historical
          period.
        </p>
        <p>
          This section groups the analytical tools the module provides. Use it when writing about
          storytelling technique, theme, or character in The Phantom Menace.
        </p>
        <h3>Core Themes</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">SLAVERY AND PERSONHOOD</span>
          <div className="lrn-definition-desc">
            <p>
              Anakin insists "I am a person" in his first scene. Shmi explains the transmitters
              matter-of-factly. Padme is horrified. The film refuses to soften slavery. It is
              institutional, physical, and normalized on Tatooine.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">THE REPUBLIC'S ABSENT REACH</span>
          <div className="lrn-definition-desc">
            <p>
              Shmi's line "The Republic doesn't exist out here" is the module's political thesis.
              The institution that Amidala trusts and Padme defends has no power where it is needed
              most.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DESTINY AND CHANCE</span>
          <div className="lrn-definition-desc">
            <p>
              The hyperdrive fails, the ship lands, Qui-Gon walks into the one shop with the right
              part, and the owner's slave is the only person who can solve the problem. The film
              presents this chain as the Force at work.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">IDEALIZATION AS DANGER</span>
          <div className="lrn-definition-desc">
            <p>
              Anakin calls Padme an angel. He builds a droid for his mother. He dreams of freeing
              all the slaves. He idealizes what he loves. This capacity for extreme devotion is also
              the fault line that cracks when he cannot protect what he loves most.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">GENEROSITY WITHOUT CALCULATION</span>
          <div className="lrn-definition-desc">
            <p>
              Anakin gives up his pallie, invites strangers into his home, and volunteers to risk
              his life for people he met today. He asks nothing back. Shmi says he was meant to help
              them. This uncalculated generosity is his defining quality as a child.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">POWER NEUTRALIZED</span>
          <div className="lrn-definition-desc">
            <p>
              The Jedi mind trick fails against Watto. Republic credits are worthless on Tatooine.
              Qui-Gon's institutional tools produce nothing. The solution comes from a slave boy
              with no institutional power at all.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">FEAR AS THE ROOT</span>
          <div className="lrn-definition-desc">
            <p>
              Anakin tells Jar Jar to "be less afraid." Later, Qui-Gon senses Anakin's Force
              potential is wrapped in fear. The film plants fear as a crack inside its most gifted
              character and keeps returning to it.
            </p>
          </div>
        </div>

        <h3>Dramatic Techniques</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">TOYDARIAN</span>
          <div className="lrn-definition-desc">
            <p>
              A winged alien species immune to Force mind manipulation. Watto is a Toydarian. The
              screenplay uses this species to remove Qui-Gon's most reliable tool and force a
              different path to the solution.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">ENVIRONMENT AS CHARACTER</span>
          <div className="lrn-definition-desc">
            <p>
              The junk shop tells you everything about Anakin before he speaks. His flinch tells you
              the rest. Lucas uses physical environment to do the work that backstory exposition
              would ruin.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">LONG-RANGE DRAMATIC IRONY</span>
          <div className="lrn-definition-desc">
            <p>
              C-3PO's first words, Anakin's "be less afraid," Shmi's "he was meant to help you," the
              lightsaber glimpse, all carry different meanings on a second viewing. Lucas wrote the
              entire Tatooine sequence for two simultaneous audiences.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">COMIC RELIEF AS PLOT MECHANISM</span>
          <div className="lrn-definition-desc">
            <p>
              Jar Jar's frog incident causes the confrontation with Sebulba, which triggers Anakin's
              intervention, which is the connection that brings the group to his home. Jar Jar's
              clumsiness is not decoration, it is the chain that moves the plot forward.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">THE DOMESTIC SCENE AS REVELATION</span>
          <div className="lrn-definition-desc">
            <p>
              The dinner table is where more is revealed than in any action scene. Slavery, destiny,
              Jedi identity, fear, the plan, all emerge over food in a slave hovel while a sandstorm
              rages outside. Constraint generates revelation.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">MISDIRECTION THROUGH COSTUME</span>
          <div className="lrn-definition-desc">
            <p>
              Padme is in peasant clothing. She attends the Queen. The audience accepts the framing.
              The entire Tatooine sequence builds emotional investment in Padme as a handmaiden
              before the reveal that she is Amidala. This is a structural con.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">PARALLEL THREAT CUTTING</span>
          <div className="lrn-definition-desc">
            <p>
              The Darth Maul introduction on Coruscant cuts against the domestic safety of the
              hovel. The audience holds both images simultaneously: the group eating dinner, and a
              Sith apprentice receiving orders to find and kill them.
            </p>
          </div>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does Lucas use a domestic dinner scene as the module's climax rather than an action
            sequence? What does the choice reveal about the film's priorities?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The film's most important event in this module is not the marketplace fight or the
              sandstorm. It is Shmi saying "he was meant to help you." That line is the pivot point.
              Everything physical, the race, the escape, the journey to Coruscant, follows from the
              consent given at that table. Lucas understands that the decision is the drama. The
              execution is the result.
            </p>
          </details>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Every technique above solves the same compression problem. The film has one act to
            establish a character it wants you to invest in for the rest of the story. It uses
            physical reflex instead of backstory, environment instead of exposition, a dinner table
            instead of a council chamber, and a child's clumsiness instead of coincidence. None of
            these are decorative choices. Each is the minimum required to do the job without
            stopping the story.
          </p>
        </div>
      </>
    ],
    practice: [
      {
        id: 'sot-001',
        q: 'Why does the Naboo ship land on Tatooine rather than continuing to Coruscant?',
        a: 'The hyperdrive is leaking. Ric Olie reports there is not enough power to reach Coruscant. Qui-Gon checks the star chart and selects Tatooine because it is small, poor, and the Trade Federation has no presence there. Panaka objects because the Hutts control it. Qui-Gon overrules him: the Hutts are not looking for them, which gives the group an advantage.'
      },
      {
        id: 'sot-002',
        q: 'What does the small blue droid do to save the ship during the escape from Naboo?',
        a: 'It bypasses the main power drive and brings the deflector shield up to maximum. Without this repair, the ship would not survive the Federation blockade. Panaka calls it extremely well put together. Amidala commends it, Panaka scrapes dirt from its side and reads the number R2-D2. Amidala names it and assigns Padme to clean it. R2-D2 earns a name and a companion in one scene.'
      },
      {
        id: 'sot-003',
        q: 'Who is Darth Maul, and how is he introduced to the audience?',
        a: "He is Darth Sidious's apprentice. Sidious steps aside during the hologram conference and a second robed figure appears behind him. Sidious introduces him as Lord Maul and says he will find the lost ship. Nute's reaction, \"Now there are two of them,\" is the audience's only measure of how dangerous this is. The Sith pattern is implied: a master and an apprentice."
      },
      {
        id: 'sot-004',
        q: 'What is the first physical detail Lucas shows about Anakin before he speaks?',
        a: 'He flinches when Watto raises a hand. This single reflex establishes his entire life under Watto before any dialogue. Lucas uses a physical response to show slavery rather than explaining it. The flinch is the most economical character beat in the Tatooine sequence.'
      },
      {
        id: 'sot-005',
        q: "What is Anakin's first line to Padme, and why does it matter dramatically?",
        a: '"Are you an angel?" He explains that pilots speak of angels on the Moons of Iego, the most beautiful creatures in the universe. The line is not flattery, it is genuine wonder from a child whose world has given him very little beauty. It also plants the film\'s central tension inside Anakin: he idealizes what he loves, and the film treats that idealization as a fragility.'
      },
      {
        id: 'sot-006',
        q: 'What does Anakin say when Padme reacts with shock to learning he is a slave?',
        a: '"I am a person! My name is Anakin." He does not accept the category. He insists on his own personhood and names himself. This is the emotional center of the film in six words. Anakin opens by claiming personhood, and the film then puts that claim under pressure for two hours. Lucas places this line in the first conversation, before any action, because it is the only line that matters.'
      },
      {
        id: 'sot-007',
        q: "Why does Qui-Gon's Jedi mind trick fail against Watto?",
        a: "Watto is a Toydarian, immune to Force mind manipulation. He names this directly: mind tricks don't work on him, only money. Qui-Gon has Republic credits, which are worthless on Tatooine. The failure removes the Jedi's most reliable tool and forces a completely different solution. The group leaves the shop with no parts and no money."
      },
      {
        id: 'sot-008',
        q: 'How does Jar Jar cause the confrontation with Sebulba in the market?',
        a: "He spots dead frogs at a vendor stall, checks if anyone is watching, then extends his tongue to steal one. The frog is tied to the wire. The vendor appears, Jar Jar opens his mouth in surprise, and the frog ricochets across the market and lands in Sebulba's soup. Sebulba grabs Jar Jar by the throat. This chain of clumsiness triggers Anakin's intervention and creates the connection between Anakin and the group outside the shop."
      },
      {
        id: 'sot-009',
        q: 'How does Anakin stop Sebulba from attacking Jar Jar?',
        a: 'He bluffs in Huttese, claiming Jar Jar is connected to the Hutts, a "big time outlander." Sebulba backs off because he does not want to pay for Anakin if things go wrong before the next race. Anakin uses intelligence rather than force. He is nine years old and navigates a potentially lethal confrontation with more competence than anyone else in the scene.'
      },
      {
        id: 'sot-010',
        q: 'What does Anakin say to Jar Jar about why Sebulba attacked him?',
        a: '"Fear attracts the fearful. He was trying to overcome his fear by squashing you...be less afraid." Anakin diagnoses the social mechanic correctly. The line is also the module\'s deepest piece of irony: the Jedi Council will warn that fear is the very flaw they sense in Anakin. He gives Jar Jar the correct advice and is still learning to follow it himself.'
      },
      {
        id: 'sot-011',
        q: 'What gesture does Anakin make at the fruit stall that reveals his character?',
        a: 'He reaches into his pocket for coins to buy pallies for everyone, comes up short, and gives up his own without comment, saying he is not hungry. He has three coins and needs four. He does not announce the sacrifice.'
      },
      {
        id: 'sot-012',
        q: 'What small detail at the fruit stall plants a visual setup for the dinner scene?',
        a: "Qui-Gon picks up a coin Anakin drops and briefly exposes his lightsaber. Anakin sees it. This is the setup for Anakin's dinner question about whether Qui-Gon is a Jedi. Small visual plant, large payoff."
      },
      {
        id: 'sot-013',
        q: "What exchange between Qui-Gon and Shmi foreshadows Anakin's destiny?",
        a: '"He\'s a very special boy." Qui-Gon says this. Shmi replies, "Yes, I know." She says it the way someone speaks when holding a secret. It is not maternal pride. It is knowledge. The film does not explain how she knows. It does not need to. The scene is the module\'s quietest piece of foreshadowing.'
      },
      {
        id: 'sot-014',
        q: "What is C-3PO doing in Anakin's bedroom, and why did Anakin build him?",
        a: 'He is lying on a workbench, half-built: one eye in the socket, no outer covering, arms and legs bare. Anakin built him as a protocol droid to help his mother. He activates Threepio for Padme. Threepio introduces himself formally and immediately objects to R2-D2 about his exposed parts.'
      },
      {
        id: 'sot-015',
        q: 'How does Shmi explain the slave transmitters at dinner?',
        a: 'All slaves have transmitters placed inside their bodies somewhere. Any attempt to escape triggers detonation. Anakin adds the detail: "and they blow you up, poof." Padme is horrified. Jar Jar says "how wude." Shmi speaks about it matter-of-factly because it is the normalized reality of her life. The film refuses to soften it.'
      },
      {
        id: 'sot-016',
        q: 'What does Shmi say when Padme argues that Republic anti-slavery laws should protect them?',
        a: '"The Republic doesn\'t exist out here...we must survive on our own." This is the module\'s political thesis. The institution that Amidala trusts and Padme defends has no reach where it is needed most. It exposes a structural weakness: a Republic with no enforcement reach in the Outer Rim has no claim on Outer Rim loyalty.'
      },
      {
        id: 'sot-017',
        q: 'What does Anakin claim about his ability to Podrace?',
        a: "He says he is the only human who can do it. Shmi objects. He clarifies it is not a boast. Watto has confirmed it. Qui-Gon says he must have Jedi reflexes. The claim plants the midichlorian conversation the film stages later and establishes Anakin's superhuman ability before the race demonstrates it."
      },
      {
        id: 'sot-018',
        q: 'How does Anakin know Qui-Gon is a Jedi?',
        a: 'He saw the lightsaber when Qui-Gon picked up the dropped coin at the fruit stall. Only Jedi carry that kind of weapon. Qui-Gon deflects by suggesting he might have killed a Jedi and stolen it. Anakin dismisses this immediately: no one can kill a Jedi Knight. Qui-Gon says he wishes that were so. Anakin is not fooled by the deflection.'
      },
      {
        id: 'sot-019',
        q: 'What dream does Anakin describe to Qui-Gon at the dinner table?',
        a: 'He dreamed he was a Jedi who returned to Tatooine and freed all the slaves. He then asks directly if Qui-Gon has come to free them. Qui-Gon says no. Anakin says he thinks Qui-Gon has come for that purpose, because why else would he be here. He is wrong in the immediate sense and correct in the structural sense: Qui-Gon is about to free him specifically.'
      },
      {
        id: 'sot-020',
        q: 'What is the plan Anakin proposes to solve the hyperdrive problem?',
        a: 'He has built a Podracer in secret. Watto does not know. There is a race tomorrow on Boonta Eve. Anakin proposes that Qui-Gon present the pod as his own and persuade Watto to let Anakin pilot it. The prize money would cover the parts. He volunteers for this before anyone asks him. Shmi initially refuses, then consents.'
      },
      {
        id: 'sot-021',
        q: "What does Shmi say that closes the dinner scene and completes the module's arc?",
        a: '"No, Annie\'s right, there is no other way... I may not like it, but he can help you...he was meant to help you." She gives consent not because the plan is safe but because she believes Anakin is meant for something larger. Her faith in his destiny overrides her fear for his life. It is the pivot point of the entire module.'
      },
      {
        id: 'sot-022',
        q: 'What does Obi-Wan observe from the ship during the sandstorm, and what does he warn Qui-Gon?',
        a: 'Obi-Wan sees a Bibble hologram transmission reaching the ship, describing catastrophic death tolls and demanding the Queen respond. He calls it a trick and sends no reply. He tells Qui-Gon the Queen is upset but no transmission was sent. Qui-Gon agrees: it sounds like bait to establish a connection trace. Either way, they are running out of time.'
      },
      {
        id: 'sot-023',
        q: 'What does Darth Sidious tell Darth Maul on the Coruscant balcony?',
        a: '"Move against the Jedi first...you will then have no difficulty taking the Queen back to Naboo, where she will sign the treaty." Maul says: "At last we will reveal ourselves to the Jedi." This scene cuts against the domestic safety of the dinner table. The audience holds both images: the group eating in the hovel and a Sith receiving orders to kill them.'
      },
      {
        id: 'sot-024',
        q: 'How does Padme end up joining the shore party on Tatooine?',
        a: 'Panaka catches up to Qui-Gon as the group heads toward Mos Espa. He says the Queen commands that her handmaiden observe the local area. Qui-Gon resists: Tatooine is not pleasant. Panaka says the Queen wishes it. Padme says she has been trained in defense and can take care of herself. Qui-Gon accepts, saying he has no time to argue.'
      },
      {
        id: 'sot-025',
        q: "Transfer: Choose any story where the hero loses their usual tool or power and must find a new solution. How does that compare to Qui-Gon's failed mind trick against Watto?",
        a: "Look for a moment where the protagonist's primary skill fails and the story forces a different path. Compare the mechanism: Qui-Gon's failure is caused by a specific immunity in his opponent, not by the Jedi's weakness. This matters because the solution is not to improve Qui-Gon's power but to abandon it entirely and use a nine-year-old slave's hidden talent instead. The story pivots away from the hero's strength to an unexpected source. Ask of your chosen story: does the hero adapt, or does someone else supply what the hero cannot?"
      },
      {
        id: 'sot-026',
        q: 'Self-explain: Shmi says "The Republic doesn\'t exist out here." Why does this line matter beyond its immediate context?',
        a: "It reveals the Republic as a system with geographic limits. Its values, its laws, its protections, apply where it has enforcement power. Tatooine has none. This is the structural condition that makes Anakin's origin possible: he is born into slavery on a planet the Republic cannot reach. It also reveals why an institution that only protects some worlds is vulnerable: if the Republic never came for you, you have no loyalty to defend. A population beyond its reach has no reason to defend it."
      },
      {
        id: 'sot-027',
        q: "Predict: If Qui-Gon's mind trick had worked on Watto, how would the story change?",
        a: "Qui-Gon would buy the parts, repair the ship, and leave. Anakin would not be discovered. The Boonta Eve race would not happen. Qui-Gon would never sense Anakin's Force potential. The Jedi Order would never train him. Watto's immunity to the Force is the hinge that opens the rest of this film: the one moment where the usual Jedi path was blocked and a different one opened."
      },
      {
        id: 'sot-028',
        q: "Elaborate: Why does Lucas place C-3PO's introduction in this module rather than later?",
        a: "Threepio's origin is a compression of information about Anakin. He builds things from broken pieces to serve someone he loves. The protocol droid is not plot-important here. It is character-important: a boy with nothing builds something out of love for his mother. Placing this origin in one short scene gives weight to every later moment the droid appears."
      },
      {
        id: 'sot-029',
        q: 'What does Nute say to Rune after Darth Maul is revealed, and why does it matter?',
        a: '"This is getting out of hand...now there are two of them." Then Rune asks what will happen when the Jedi become aware of these Sith Lords. Nute made a bargain he did not fully understand. The presence of two Sith Lords means the stakes are now larger than the Trade Federation\'s commercial dispute. Nute and Rune are no longer in control of their own plan. They are tools in a scheme that has already moved beyond them.'
      },
      {
        id: 'sot-030',
        q: 'Predict: Anakin tells Jar Jar to "be less afraid." Based on what you know of his future, why is this ironic?',
        a: 'Anakin already carries deep fear beneath his enthusiasm: of loss, of failure, of helplessness. The Jedi Council senses it and warns against training him for this reason. A boy who understands fear well enough to diagnose it in others is not yet able to master it in himself. He gives Jar Jar the exact advice he is still learning to follow.'
      }
    ],
    referenceSections: [
      <>
        <h2>Scene Index</h2>
        <ol className="lrn-list">
          <li>
            <strong>Naboo Spacecraft, Hyperdrive Fails:</strong> R2-D2 saves the ship during the
            blockade escape. Hyperdrive is leaking. Qui-Gon selects Tatooine. Panaka objects.
            Qui-Gon overrules him.
          </li>
          <li>
            <strong>Federation Battleship, Darth Maul Revealed:</strong> Nute reports the Queen has
            escaped. Sidious introduces Darth Maul. Nute tells Rune they should not have made this
            bargain.
          </li>
          <li>
            <strong>Queen's Chambers, R2-D2 Commended:</strong> Amidala thanks R2-D2 by name.
            Assigns Padme to clean him. Qui-Gon briefs the Queen on Tatooine. Panaka warns about the
            Hutts.
          </li>
          <li>
            <strong>Desert Outskirts, Shore Party Departs:</strong> Qui-Gon, Jar Jar, R2-D2 head
            toward Mos Espa. Padme joins by the Queen's command dressed as a peasant. Qui-Gon
            accepts reluctantly.
          </li>
          <li>
            <strong>Watto's Junk Shop, Anakin Introduced:</strong> Watto calls Anakin from the
            junkyard. Anakin flinches at Watto's raised hand. Meets Padme. Republic credits refused.
            Mind trick fails. Qui-Gon leaves with nothing.
          </li>
          <li>
            <strong>Mos Espa Market, Sebulba Confrontation:</strong> Jar Jar steals a frog. It lands
            in Sebulba's soup. Anakin bluffs Sebulba in Huttese. Jar Jar is released. Anakin joins
            the group.
          </li>
          <li>
            <strong>Fruit Stall and Sandstorm Warning:</strong> Anakin buys pallies, gives up his
            own. Lightsaber briefly exposed. Jira warns of the storm. Anakin invites the group to
            shelter.
          </li>
          <li>
            <strong>Anakin's Hovel, Dinner:</strong> Shmi explains transmitters. Republic doesn't
            reach here. C-3PO activated. Darth Maul receives orders on Coruscant. Plan emerges:
            Boonta Eve race. Shmi consents.
          </li>
        </ol>
      </>,

      <>
        <h2>Key Dialogue</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "There's not enough power to get us to Coruscant...the hyperdrive is leaking."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Ric Olie, cockpit. Opens the module by converting escape into new crisis. Removes the
              possibility of relief.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"...not for a Sith..."</span>
          <div className="lrn-definition-desc">
            <p>
              Darth Sidious, Federation hologram. The line that introduces Darth Maul by revealing
              the existence of a second Sith Lord who can track ships across space.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Thank you, Artoo Detoo. You have proven to be very loyal."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Amidala, Queen's chambers. Amidala names R2-D2 and assigns him a companion in one
              exchange. The scene establishes his bond with Padme before their Tatooine scenes.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "No, they won'ta. I'm a Toydarian. Mind tricks don'ta work on me, only money."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Watto, junk shop. The line that removes Qui-Gon's most reliable tool. Forces the story
              to find a completely different solution.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"Are you an angel?"</span>
          <div className="lrn-definition-desc">
            <p>
              Anakin, junk shop. First line to Padme. Genuine wonder from a child whose world has
              given him very little beauty. Plants Anakin's capacity for idealization as a fragility
              the film treats with care.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"I am a person! My name is Anakin."</span>
          <div className="lrn-definition-desc">
            <p>
              Anakin, junk shop. First act of self-definition. He names himself against the category
              others impose on him. The film's thesis stated in six words.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"Fear attracts the fearful...be less afraid."</span>
          <div className="lrn-definition-desc">
            <p>
              Anakin, Mos Espa market. Diagnoses Sebulba's aggression correctly. Also the film's
              deepest piece of dramatic irony: the advice Anakin cannot follow himself.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"He's a very special boy." / "Yes, I know."</span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon and Shmi, hovel entrance. The module's quietest piece of foreshadowing. Shmi
              speaks from knowledge, not pride. The film does not explain what she knows.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "The Republic doesn't exist out here...we must survive on our own."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Shmi, dinner table. The module's political thesis. States the institutional limits of
              the Republic more clearly than any speech in the Senate arc.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "I had a dream I was a Jedi. I came back here and freed all the slaves...have you come
            to free us?"
          </span>
          <div className="lrn-definition-desc">
            <p>
              Anakin, dinner table. The dream that defines his arc. Wrong in the immediate moment,
              right in the structural sense. Qui-Gon is about to free him specifically.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "No, Annie's right...he can help you...he was meant to help you."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Shmi, dinner table. Closes the module. She grants consent not because the plan is safe
              but because she believes Anakin is meant for something beyond her understanding.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Dramatic Techniques, Quick Reference</h2>
        <ul className="lrn-list">
          <li>
            <strong>Environment as character</strong>, Anakin's flinch and the junk shop establish
            his entire backstory before he speaks. Setting does the work of exposition.
          </li>
          <li>
            <strong>Power neutralized</strong>, Mind trick fails. Republic credits refused.
            Qui-Gon's institutional tools produce nothing. The solution comes from a slave boy with
            no institutional power.
          </li>
          <li>
            <strong>Long-range dramatic irony</strong>, C-3PO's introduction, Anakin's "be less
            afraid," Shmi's "he was meant to help you," all carry different meaning on a second
            viewing.
          </li>
          <li>
            <strong>Comic relief as plot mechanism</strong>, Jar Jar's frog theft triggers Sebulba,
            which triggers Anakin's intervention, which brings the group to the hovel. Clumsiness is
            the hinge.
          </li>
          <li>
            <strong>Domestic scene as revelation</strong>, The dinner table delivers slavery,
            destiny, fear, the plan, and Shmi's consent. Constraint generates revelation.
          </li>
          <li>
            <strong>Misdirection through costume</strong>, Padme in peasant clothes attends the
            Queen. The audience accepts the framing. The Tatooine sequence builds attachment to
            Padme as handmaiden before the reveal she is Amidala.
          </li>
          <li>
            <strong>Parallel threat cutting</strong>, Darth Maul receives orders on Coruscant while
            the group eats in the hovel. Safety and danger exist simultaneously on screen.
          </li>
          <li>
            <strong>Idealization planted early</strong>, Anakin calls Padme an angel in their first
            exchange. The capacity for extreme devotion that makes him dangerous is introduced as
            wonder, not warning.
          </li>
        </ul>
      </>
    ]
  }
}

function thePodraceContent(C) {
  return {
    sections: [
      <ChapterDivider key="div-thePodraceContent">
        <h2>Act II: The Podrace</h2>
        <p>A boy wins his freedom on a track built to kill him.</p>
      </ChapterDivider>,
      <>
        <div className="lrn-header">
          <div className="lrn-header-text">
            <h2>What This Module Covers</h2>
            <p>
              The Podrace sequence spans 23 scenes: deal-making, a secret blood test, a chance cube
              fixed by the Force, three brutal laps, and a farewell that never ends.
            </p>
          </div>
        </div>
        <p>
          Qui-Gon Jinn needs parts to repair the Naboo ship. He has no money. His only asset is the
          ship itself. He finds a slave boy who built a Pod and never finished a race. Everything
          that follows is a story about concealed power meeting institutional greed.
        </p>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Qui-Gon bets on a boy no one believes in. What single thing must be true for the bet to
            make sense?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Qui-Gon must already know Anakin will win. The blood sample confirms it. The
              midi-chlorian count exceeds every Jedi record. The bet is not a gamble for Qui-Gon. It
              is a controlled transfer of an asset Watto does not know he is giving up.
            </p>
          </details>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The module has one structural spine: deception at every level. Qui-Gon deceives Watto
            about the bet's terms. Watto deceives himself about Sebulba's certainty. Sebulba
            deceives rivals with hidden sabotage. Even the midi-chlorian test is deception, Qui-Gon
            pretends to check for infections while taking a blood sample.
          </p>
          <p>
            Anakin is the only character who does not deceive. He races honestly. This is why he
            wins. Every other strategy in the module fails.
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Padme says "Are you sure about this? Trusting our fate to a boy we hardly know." Qui-Gon
            replies "The Queen does not need to know." What does this exchange reveal about Jedi
            authority?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Padme is the Queen in disguise. She speaks with royal authority. Qui-Gon dismisses it.
              He operates on Force instinct outside the normal chain of command. His certainty is
              not arrogance, he has already seen the midi-chlorian count. But the audience does not
              know this yet. The line reads as either wisdom or recklessness depending on what you
              believe about the Force.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Analytical lens</span>
          <p>
            Use this module to study how screenwriters build a set-piece race narrative, how
            deception structures a con-story within a larger epic, and how the Hero's Journey
            compresses into a single event without losing thematic weight.
          </p>
        </div>
      </>,

      <>
        <h2>The Deal</h2>
        <p>
          Use this section when you need a worked example of a negotiation trap in screenwriting.
          Qui-Gon needs parts. He has nothing Watto wants, except a ship Watto already owns once the
          heroes cannot leave. Qui-Gon converts this weakness into leverage.
        </p>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Qui-Gon offers Watto a deal: keep the winnings minus parts, or keep the ship if they
            lose. From Watto's view, what is wrong with this offer?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Nothing is wrong with it, from Watto's view. He cannot lose. Either Sebulba wins and
              he keeps the ship, or Anakin wins and he gets race winnings minus parts. The trap is
              that Watto has also agreed to a side-bet using Anakin's freedom as collateral. He has
              not noticed the second trap closing around him.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"Either way, you win." Qui-Gon Jinn, to Watto</p>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">THE CON STRUCTURE</span>
          <div className="lrn-definition-desc">
            <p>
              A con works when the mark believes they cannot lose. Watto's greed makes him blind to
              the second wager, the chance cube for Anakin's freedom, which Qui-Gon wins by using
              the Force to fix it. Deal A is framed so Watto feels safe. Deal B (the side-bet for
              Anakin) lands while Watto's guard is down.
            </p>
          </div>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Qui-Gon's bet: free a life</span>
            <p>
              He bets to transfer Anakin out of slavery. The mechanism is a legal wager. The motive
              is the Force's will.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Watto's bet: keep a life</span>
            <p>
              He bets to retain his property. The mechanism is the same legal wager. The motive is
              greed. Same structure, opposite moral direction.
            </p>
          </div>
        </div>
        <p>
          Obi-Wan receives the blood sample Qui-Gon scraped from Anakin's arm on the balcony. He
          runs the midi-chlorian count.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "The reading's off the chart...over twenty thousand." / "Even Master Yoda doesn't have a
            midi-chlorian count that high!" / "No Jedi has." Obi-Wan and Qui-Gon
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Qui-Gon says "That's it then" after hearing the count. What has he decided, and why does
            the count confirm it?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              He has decided Anakin is the Chosen One. The count is the highest ever recorded,
              higher than Yoda. For Qui-Gon, this is empirical proof of what the Force already told
              him through instinct. The bet is now not a risk but a certainty.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "There was no father, that I know of...I carried him, I gave him birth...I can't explain
            what happened." Shmi Skywalker
          </p>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">THE ABSENT FATHER / MIRACULOUS BIRTH</span>
          <div className="lrn-definition-desc">
            <p>
              Shmi cannot explain Anakin's conception. Qui-Gon links it immediately to the Force.
              This is a messianic origin story: the child born outside normal causation, destined
              for something extraordinary. The screenplay plants the seed here and never explains it
              further.
            </p>
          </div>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Anakin tells Padme at sunrise: "You were in my dream...you were leading a huge army into
            battle." Why does this line carry weight beyond the scene?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              It is a prophetic vision, the Force speaking through him before he understands what it
              is. His first act of prophecy is about her, not about himself.
            </p>
          </details>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">MIDI-CHLORIANS AS FATE MARKER</span>
          <div className="lrn-definition-desc">
            <p>
              A biological measure used to confirm what the Force already implied. Destiny
              quantified at over 20,000. Qui-Gon uses the count as proof, but his certainty precedes
              it, he already believed before Obi-Wan read the numbers.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>The Starting Grid</h2>
        <p>
          Use this section when analyzing pre-race dramatic compression: how a screenplay loads
          maximum emotional weight into the minutes before the central action begins.
        </p>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Before the race starts, Sebulba walks up to Anakin at the grid. What do you think he
            says, and why does Anakin's reply matter?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Sebulba threatens him directly: "You won't walk away from this one, slave scum!"
              Anakin replies: "Don't count on it, slime-ball." He refuses to be intimidated. The
              exchange establishes the personal rivalry and shows Anakin's refusal to accept his
              slave status as a psychological limit.
            </p>
          </details>
        </div>
        <p>
          The Arena Main Hanger buzzes with pre-race activity. Watto warns Qui-Gon confidently.
          Qui-Gon fixes the chance cube with the Force. Anakin's freedom is officially wagered.
        </p>
        <div className="lrn-definition">
          <span className="lrn-definition-term">THE CHANCE CUBE FIX</span>
          <div className="lrn-definition-desc">
            <p>
              The cube has two sides: blue (Anakin's freedom wagered) and red (Shmi's freedom
              wagered). Watto picks red. Qui-Gon uses the Force to make it land blue. This is the
              first time in the module Qui-Gon uses active Force manipulation in plain sight, no one
              notices because no one can imagine a Jedi would cheat at dice.
            </p>
          </div>
        </div>
        <p>
          The arena fills with 100,000 spectators. Jabba the Hutt enters the Royal Box. Fode/Beed
          introduce the field. The starting grid assembles.
        </p>

        <viz.PodracerLineup C={C} />

        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "You carry all our hopes." / "I won't let you down." Padme and Anakin, starting grid
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Padme is the Queen in disguise. She does not know it yet, but Anakin winning is not just
            about his freedom. It funds the ship repairs that get the Queen to Coruscant. The fate
            of a planet rests on a nine-year-old in a homemade Pod.
          </p>
          <p>
            Compare with Kitster's unconditional belief and Seek, Wald, and Amee's mockery. The
            contrast shows who Anakin carries forward and who he leaves behind. Belief is a moral
            sorting mechanism in this module.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Concentrate on the moment. Feel. Don't think. Trust your instincts. May the Force be
            with you." Qui-Gon Jinn to Anakin, pre-race
          </p>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">FEEL, DON'T THINK: JEDI PHILOSOPHY</span>
          <div className="lrn-definition-desc">
            <p>
              This is the first full articulation of the Jedi operating principle directed at
              Anakin. It is not advice about racing. Conscious thought creates lag. The
              Force-sensitive body responds faster than the analytical mind. Anakin has embodied
              this principle his entire life without knowing its name.
            </p>
          </div>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"Be safe." / "I will, Mom. I promise." Shmi and Anakin, starting grid</p>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">THE WATCHING MOTHER</span>
          <div className="lrn-definition-desc">
            <p>
              Shmi appears at lines 140–143, 393–397, 455–458, and 716–733. Each time she observes
              from a distance. She never participates. She can only watch. The module uses her
              placement, always outside the action, as a visual symbol of a parent's helplessness
              against a child's fate.
            </p>
          </div>
        </div>
        <p>
          Green light. Every engine fires. Except Anakin's. His Pod stalls. The entire field
          vanishes ahead of him.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Craft note</span>
          <p>
            The stall at the start compresses the underdog structure into a single image. Anakin
            does not begin the race behind. He begins it stopped. The comeback must cover not just
            distance but time.
          </p>
        </div>
      </>,

      <>
        <h2>The Race: Three Laps</h2>
        <p>
          Use this section when studying how screenwriters sustain tension across an extended action
          sequence while advancing character and theme simultaneously.
        </p>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Anakin starts last. Sebulba leads. The screenplay must get them to the same position by
            lap 3. How does Lucas do it without making Anakin's rise feel unearned?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Two mechanisms: Sebulba eliminates rivals faster than Anakin passes them (reducing the
              gap from the front), and Sebulba sabotages Anakin's own Pod (creating a mechanical
              crisis Anakin solves alone, proving his skill). Anakin rises through competence.
              Sebulba rises through destruction.
            </p>
          </details>
        </div>

        <viz.RaceTimeline C={C} />

        <h3>Lap 1: Establishing the Field</h3>
        <p>
          Sebulba takes turn 1 and destroys Mawhonic immediately. The message is clear: the race is
          deadly and the champion cheats. Anakin battles Gasgano, a multi-limbed alien who blocks
          him repeatedly, and leaps over him at a cliff drop-off. Tusken Raiders open fire from
          canyon ridges.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Craft note</span>
          <p>
            The viewing platform intercuts with the race: Jar Jar pesters Fanta for updates, Watto
            bets confidently on Sebulba, Shmi watches through her fingers. Every cut to a watching
            face adds emotional weight to the physical action below.
          </p>
        </div>
        <h3>Lap 2: The Mechanical Crisis</h3>
        <p>
          Anakin climbs from last to sixth. Sebulba destroys Xelbree with his side exhaust vent. Ody
          Mandrell's droid DUM-4 gets sucked into his engine and explodes. Ben Quadinaros'
          quadra-Pod has all four engines detonate at once. The field thins.
        </p>
        <p>
          Then Sebulba reaches back and breaks Anakin's engine strap. One engine swings loose,
          threatening to tear the entire Pod apart. Anakin spots a service ramp.
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Anakin uses a service ramp to save himself mid-race after his engine strap breaks. Why
            does this beat work dramatically, even though it is a mechanical coincidence?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The ramp works because Qui-Gon told Anakin to trust instinct. He does not think about
              the ramp, he uses it. The Force-philosophy lands in action form. A character who
              over-planned would have frozen. Anakin acts from reflex and survives. Lucas stages the
              ramp as a payoff for the pre-race coaching scene.
            </p>
          </details>
        </div>
        <h3>Lap 3: The Final Showdown</h3>
        <p>
          Anakin catches Sebulba. They run side-by-side through the final stretch. Sebulba tries to
          force Anakin into a wall. Instead, their steering rods hook together. Both Pods are
          locked. Neither can break away.
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>The steering rods hook together, Anakin and Sebulba are physically joined.</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              They have been locked in opposition the entire race: one cheating to destroy, one
              racing honestly to survive. The physical hook literalizes that dynamic. It forces the
              confrontation to resolve on pure mechanical terms, whose Pod can break free. Anakin's
              arm breaks loose first. Sebulba overcorrects and crashes. The honest Pod survives the
              saboteur's own trap.
            </p>
          </details>
        </div>

        <viz.RaceCourseMap C={C} />

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Anakin: Feel, don't think</span>
            <p>
              Force-enhanced reflexes. Trusts instinct. Solves each mechanical crisis in the moment.
              Does not plan the service ramp.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Sebulba: Cold tactical cheating</span>
            <p>
              Pre-race sabotage. Mid-race destruction. Careful, calculated, methodical. His system
              fails because Anakin cannot be predicted by it.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Victory and Farewell</h2>
        <p>
          Use this section when analyzing how a film handles the aftermath of a climactic victory
          and the emotional cost of winning.
        </p>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Anakin crosses the finish line and wins. He is free. Does the film choose celebration or
            loss? Which, and why?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Both simultaneously. The crowd celebrates. Watto rages. Qui-Gon claims Anakin. Then
              Anakin must say goodbye to his mother. The film earns its emotion by refusing to
              separate joy from grief. Anakin wins his freedom and immediately discovers what
              freedom costs.
            </p>
          </details>
        </div>
        <p>
          Fode/Beed call Anakin's win. The crowd lifts him. Probe droids move through the
          celebrating crowd, unseen surveillance foreshadowing the Sith closing in.
        </p>
        <div className="lrn-definition">
          <span className="lrn-definition-term">SURVEILLANCE / BEING WATCHED</span>
          <div className="lrn-definition-desc">
            <p>
              Darth Maul deploys six probe droids from a desert mesa. One patrols Mos Espa streets.
              One observes the Watto/Qui-Gon post-race exchange. The heroes celebrate unaware. This
              is dramatic irony built through geography: the Sith threat is present at every moment
              of triumph.
            </p>
          </div>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"Whenever you gamble, my friend, eventually you'll lose." Qui-Gon Jinn to Watto</p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            This line is the moral of the con structure. Watto bet on certainty, Sebulba's
            dominance, and lost because he confused past performance with guaranteed outcome.
            Qui-Gon did not gamble. He confirmed. The Force told him the result before the race
            started. From Qui-Gon's perspective, there was never a gamble at all.
          </p>
          <p>
            The line applies to everyone who bet against Anakin. Sebulba, Seek, Wald, Amee, all made
            the same error: they measured the slave, not the Force behind the slave.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"Just feeling this good was worth it." Anakin Skywalker</p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Anakin says "Just feeling this good was worth it." He is about to leave his mother
            forever. Why does Lucas choose this line as the emotional note before the farewell?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The line reveals Anakin is not motivated by reward. He did not race to win freedom. He
              raced for the joy of it. This is the Jedi philosophy in action, act from the present
              moment, not from outcome calculation. It also makes the farewell hit harder. A child
              who races for joy, not strategy, is about to face a loss no amount of Force
              preparation could anticipate.
            </p>
          </details>
        </div>
        <p>
          Anakin turns. Shmi stands in the hanger entrance. They hug. She tells him to be patient.
          He says he will come back and free her. The group rides away. Shmi and Anakin wave.
        </p>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Shmi: must stay</span>
            <p>
              Watto would not wager her freedom. She is the one Qui-Gon could not save. She knows
              Anakin must go and says so without bitterness.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Padme: leaves with him</span>
            <p>A near-stranger. She leaves Tatooine beside Anakin.</p>
          </div>
        </div>
      </>,

      <>
        <h2>Themes and Craft</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Name two themes from this module that would still apply if you removed all the
            science-fiction elements. What does the Podrace argue that transcends its setting?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Slavery and hidden worth: a person treated as property who holds the power to free
              everyone. And deception as survival: at every level, characters conceal and manipulate
              to gain advantage. Both work in any historical or contemporary setting. The Pod
              engines are irrelevant. The power dynamics are universal.
            </p>
          </details>
        </div>
        <p>
          This section groups the module's analytical tools. Use it when writing about theme, craft,
          or character in The Phantom Menace.
        </p>

        <viz.PodraceCharacterWeb C={C} />

        <h3>Core Themes</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DESTINY VS. CHANCE</span>
          <div className="lrn-definition-desc">
            <p>
              Every "chance" event, the cube toss, Anakin's stall, the service ramp, is guided by
              the Force. The module questions whether free will exists when the Force is in play.
              Watto thinks he is gambling. Qui-Gon knows he is not.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">SLAVERY AND HIDDEN WORTH</span>
          <div className="lrn-definition-desc">
            <p>
              Anakin is property to Watto. He holds the power to free the Naboo Queen, the Jedi
              mission, and himself. His slave status is repeatedly set against his extraordinary
              ability. The contrast is the module's central irony.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DECEPTION AS SURVIVAL</span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon deceives Watto about terms. Qui-Gon deceives Anakin about the blood test.
              Sebulba deceives rivals with sabotage. Watto deceives himself about certainty. Only
              Anakin does not deceive. He wins. The moral structure rewards honesty.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">HOPE AS CURRENCY</span>
          <div className="lrn-definition-desc">
            <p>
              Shmi, Padme, Kitster all frame Anakin's win as "hope." Multiple characters explicitly
              invest hope in the same act. The module's dominant emotional register is not triumph,
              it is the fragile arithmetic of hope distributed across everyone Anakin carries.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">THE WATCHING MOTHER</span>
          <div className="lrn-definition-desc">
            <p>
              Shmi watches at lines 140–143, 393–397, 455–458, and 716–733. She is always outside
              the action, always observing, never intervening. Her final wave is the image the
              module closes on.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">UNDERDOG / CROWD SPECTACLE</span>
          <div className="lrn-definition-desc">
            <p>
              The Podrace is an arena narrative: a lone underdog vs. a corrupt champion before
              100,000 spectators. The crowd functions as an emotional amplifier, anonymous cheers
              make individual moments feel historic.
            </p>
          </div>
        </div>

        <h3>Dramatic Techniques</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">THE CON STRUCTURE</span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon frames the bet so Watto cannot lose (from Watto's perspective), then
              introduces a side-wager using Anakin's freedom while Watto's guard is down. The Force
              fixes the cube. Watto cannot prove manipulation.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">ESCALATING MECHANICAL CRISES</span>
          <div className="lrn-definition-desc">
            <p>
              Each lap introduces a worse failure: engine strap sabotaged pre-race → engine swings
              loose lap 2 → steering rods lock lap 3. The race escalates through hardware, not just
              speed.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">INTERCUTTING: CROWD AND RACE</span>
          <div className="lrn-definition-desc">
            <p>
              The race is cut against four watching parties: Jar Jar and Fanta, Watto, Shmi, Kitster
              and Artoo. Each cut adds an emotional layer to the same physical event.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">PRE-RACE LOADING</span>
          <div className="lrn-definition-desc">
            <p>
              Padme's kiss, Sebulba's threat, Shmi's goodbye, Qui-Gon's philosophy, probe droid in
              the crowd. Every exchange multiplies the stakes before a single engine fires.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">STALL AS UNDERDOG COMPRESSION</span>
          <div className="lrn-definition-desc">
            <p>
              Anakin's engine stall at the start is the screenwriting equivalent of beginning a
              comeback story at its lowest point. He does not start behind. He starts stopped. Every
              meter he closes is earned twice over.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DUAL SURVEILLANCE</span>
          <div className="lrn-definition-desc">
            <p>
              The race crowd watches Anakin openly from grandstands. Maul's probe droids watch the
              heroes unseen. Two kinds of watching: public adulation and covert threat. The heroes
              cannot feel the second kind of gaze.
            </p>
          </div>
        </div>
      </>
    ],
    practice: [
      {
        id: 'tpr-001',
        q: "What is Qui-Gon's deal structure with Watto for race entry?",
        a: "He offers the Naboo ship as the entry fee, with a 50/50 split on winnings. Then he flips it: Watto keeps the winnings minus the parts, or keeps the ship if they lose. From Watto's view, he cannot lose either way."
      },
      {
        id: 'tpr-002',
        q: 'What is the chance cube, and how does Qui-Gon use it?',
        a: "The cube has two sides: blue (Anakin's freedom wagered) and red (Shmi's freedom wagered). Watto picks red. Qui-Gon uses the Force to make it land blue, secretly fixing the outcome."
      },
      {
        id: 'tpr-003',
        q: "How does Qui-Gon secretly collect Anakin's blood sample, and what does it reveal?",
        a: "He scrapes Anakin's arm while pretending to check for infections on the balcony at night. He transmits the sample to Obi-Wan. The midi-chlorian count is over 20,000, higher than Master Yoda, higher than any Jedi in history."
      },
      {
        id: 'tpr-004',
        q: "What does Qui-Gon mean when he says 'That's it then' after hearing the midi-chlorian count?",
        a: 'He has decided Anakin is the Chosen One. The count is empirical confirmation of what his Force instinct already told him. The bet is no longer a gamble, it is a certainty. The race outcome was settled before it started.'
      },
      {
        id: 'tpr-005',
        q: "What does Shmi say about Anakin's father, and why does it matter?",
        a: '"There was no father, that I know of...I carried him, I gave him birth...I can\'t explain what happened." Qui-Gon links this immediately to the Force. It establishes Anakin as a messianic figure: born outside normal causation, destined for something extraordinary.'
      },
      {
        id: 'tpr-006',
        q: 'What does Anakin tell Padme at sunrise, and why does it carry weight beyond the scene?',
        a: 'He says she was in his dream, leading a huge army into battle. It is a prophetic vision, the Force speaking through him before he understands what it is.'
      },
      {
        id: 'tpr-007',
        q: 'What does Darth Maul do in this module, and why is his presence significant?',
        a: 'He lands on a desert mesa at night and releases six probe droids to hunt Qui-Gon and the Queen. He has no dialogue. His presence shifts the Sith threat from passive to active. The heroes celebrate unaware of the closing danger.'
      },
      {
        id: 'tpr-008',
        q: "What does Sebulba do to Anakin's Pod before the race starts?",
        a: "He sabotages Anakin's engine strap while the pilots are in the starting grid hanger. The sabotage goes undetected. It is a delayed death trap designed to cause mechanical failure at speed."
      },
      {
        id: 'tpr-009',
        q: "What happens to Anakin's engine at the race start, and why does it matter dramatically?",
        a: 'His engine stalls. Every other racer fires and leaves him behind. He does not begin the race in last place, he begins it stopped. The stall compresses the entire underdog structure into a single image.'
      },
      {
        id: 'tpr-010',
        q: 'What happens to Mawhonic in lap 1, and what does it establish?',
        a: 'Sebulba crashes Mawhonic on turn 1 using his side-exhaust vent. It establishes immediately that the race is deadly and the champion cheats.'
      },
      {
        id: 'tpr-011',
        q: 'What happens to Ben Quadinaros during the race?',
        a: "His quadra-Pod finally activates just as the field passes by, then all four engines explode simultaneously. It is comic relief that also thins the field for Anakin's climb."
      },
      {
        id: 'tpr-012',
        q: 'What happens to Ody Mandrell and his droid DUM-4?',
        a: "Ody pits during the race. His pit droid DUM-4 gets sucked into the engine intake and is spit out 'very bent up.' The engine explodes, eliminating Ody from the race."
      },
      {
        id: 'tpr-013',
        q: 'How does Sebulba destroy Xelbree in lap 2?',
        a: "He uses his side-exhaust vent, a weapon built into his Pod's design, to blast Xelbree's Pod apart. It is the same mechanism he used on Mawhonic. Sebulba's sabotage is systemic, not improvisational."
      },
      {
        id: 'tpr-014',
        q: 'What mechanical crisis does Sebulba create for Anakin in lap 2, and how does Anakin survive?',
        a: "Sebulba breaks Anakin's engine strap. One engine swings loose, threatening to destroy the Pod. Anakin spots a service ramp, uses it to right the Pod, and saves himself. He acts on instinct, he does not plan the ramp."
      },
      {
        id: 'tpr-015',
        q: 'What does the service ramp moment pay off dramatically?',
        a: "It pays off Qui-Gon's pre-race coaching: 'Feel. Don't think. Trust your instincts.' A character trained to over-plan would have frozen. Anakin acts from reflex and survives. The Force places what is needed where it is needed."
      },
      {
        id: 'tpr-016',
        q: 'What happens when the steering rods hook together in lap 3?',
        a: "Anakin and Sebulba's Pods are physically locked side-by-side. Neither can break away. Anakin's arm breaks free first. Sebulba overcorrects and crashes into an ancient statue. The honest Pod survives the saboteur's own trap."
      },
      {
        id: 'tpr-017',
        q: 'What does Qui-Gon say to Watto after Anakin wins, and what does it mean thematically?',
        a: '"Whenever you gamble, my friend, eventually you\'ll lose." Watto bet on certainty and lost because he confused past performance with guaranteed outcome. Qui-Gon did not gamble, he confirmed what the Force already ordained.'
      },
      {
        id: 'tpr-018',
        q: 'What does Watto accuse Qui-Gon of after the race?',
        a: '"You swindled me! You knew the boy was going to win!" Watto recognizes manipulation but cannot prove it. The Force-fixed chance cube left no evidence.'
      },
      {
        id: 'tpr-019',
        q: "What is Anakin's emotional motivation for racing, as revealed in his post-race line?",
        a: '"Just feeling this good was worth it." Anakin did not race to win freedom. He raced for the joy of it. He acts from the present moment, the Jedi philosophy in action before he knows what Jedi are.'
      },
      {
        id: 'tpr-020',
        q: "Why does Qui-Gon advise Anakin before the race to 'feel, don't think'?",
        a: 'It is the core Jedi operating principle: conscious thought creates lag. The Force-sensitive body responds faster than the analytical mind. Qui-Gon knows Anakin has lived this principle his entire life without knowing its name.'
      },
      {
        id: 'tpr-021',
        q: 'Who are the four parties watching the race, and what does each add emotionally?',
        a: 'Jar Jar and Fanta (comic relief, nervous energy), Watto (confident hubris turning to rage), Shmi (maternal dread watching through her fingers), Kitster and Artoo in the pits (unconditional belief). Each cut to a watching face adds emotional weight to the same physical event.'
      },
      {
        id: 'tpr-022',
        q: 'What is the watching mother motif, and where does it appear in this module?',
        a: "Shmi appears at lines 140–143, 393–397, 455–458, and 716–733. Each time she observes from a distance and never participates. The motif makes her a visual symbol of a parent's helplessness against a child's fate. Her final wave is the emotional close of the module."
      },
      {
        id: 'tpr-023',
        q: "How do Darth Maul's probe droids function as surveillance irony in the victory scenes?",
        a: 'One droid moves through the celebrating crowd. Another observes the Qui-Gon/Watto exchange in the private box. The heroes celebrate in full public view. The Sith watches unseen. The gap between their open joy and the covert threat is the dramatic irony.'
      },
      {
        id: 'tpr-024',
        q: 'Compare Kitster with Seek, Wald, and Amee. What does this contrast set up?',
        a: "Kitster believes unconditionally. Seek, Wald, and Amee mock Anakin's chances. The contrast shows who Anakin carries forward and who he leaves behind. Belief in this module is a moral sorting mechanism."
      },
      {
        id: 'tpr-025',
        q: "Transfer: Name a story where a character uses an opponent's greed against them in a wager. Compare the mechanism to Qui-Gon's bet with Watto.",
        a: 'Look for the con structure: the mark believes they cannot lose, a hidden condition closes around them. In The Sting, every exit from the fake bet has been controlled in advance. Qui-Gon uses the same mechanism but adds a supernatural element (the Force-fixed cube) the mark cannot detect. Compare: what makes the trap undetectable in each story?'
      },
      {
        id: 'tpr-026',
        q: 'Transfer: Identify an arena narrative in any medium where the crowd functions as an emotional amplifier. How does it compare to the Podrace grandstands?',
        a: "Any gladiatorial, sporting, or combat narrative works: Ben-Hur's chariot race, Rocky's fights, The Hunger Games. The crowd in each case makes individual moments feel historic, anonymous investment scales personal stakes into communal ones. The Podrace adds surveillance irony: while the crowd cheers, Maul's droids observe. Two kinds of watching exist simultaneously."
      },
      {
        id: 'tpr-027',
        q: "Elaborate: Why is Anakin's stall at the start more effective dramatically than simply starting him in last place?",
        a: "Last place is a deficit. Stopped is a negation. A character in last place is still in the race. A character who has not moved yet has not started. The stall creates a visual gap the audience can measure in real time as other Pods vanish over the horizon. It also means Anakin's engine must fire under pressure, a second potential failure point."
      },
      {
        id: 'tpr-028',
        q: 'Predict: If Qui-Gon had not used the Force to fix the chance cube, what would have happened?',
        a: "The cube lands red. Shmi's freedom is wagered. Qui-Gon would race to free Shmi, not Anakin. Anakin's freedom is the mission-critical outcome, without it, he cannot join the Jedi."
      },
      {
        id: 'tpr-029',
        q: 'Self-explain: Why does the screenplay withhold the midi-chlorian count revelation until after the deal is struck?',
        a: "If the audience knew Anakin's count before the bet, the bet would feel like a certainty, removing all tension. By placing the count reveal after the deal and before the race, Lucas stages it as private knowledge Qui-Gon holds. The reveal confirms what Qui-Gon already believed; for the audience, it explains why he was so calm."
      },
      {
        id: 'tpr-030',
        q: "Self-explain: Why does Shmi say 'There was no father' only to Qui-Gon, and why does the film never explain it further?",
        a: 'Qui-Gon is the only character in a position to understand the implication. The film never explains further because the explanation is the Force itself, and the Force does not explain.'
      }
    ],
    referenceSections: [
      <>
        <h2>Scene Index</h2>
        <ol className="lrn-list">
          <li>
            <strong>Storm Aftermath / Padme's Objection:</strong> Padme questions trusting Anakin.
            Qui-Gon: "The Queen does not need to know."
          </li>
          <li>
            <strong>Watto's Deal:</strong> Ship as entry fee. Side-bet framed so Watto cannot lose.
            Side-bet for Anakin's freedom added. Watto agrees.
          </li>
          <li>
            <strong>Obi-Wan Check-In:</strong> Qui-Gon reassures Obi-Wan. "There is something about
            this boy."
          </li>
          <li>
            <strong>Shmi and Qui-Gon on Porch:</strong> Force sensitivity confirmed. Shmi: "There
            was no father."
          </li>
          <li>
            <strong>Pod Engine Test:</strong> Friends mock the Pod. Jar Jar zapped by energy binder.
            Engines ignite for first time.
          </li>
          <li>
            <strong>Shmi Watches:</strong> She smiles sadly as engines roar. First instance of the
            watching-mother motif.
          </li>
          <li>
            <strong>Balcony Night / Blood Sample:</strong> Qui-Gon scrapes Anakin's arm under
            pretense of infection check. Obi-Wan reads count: 20,000+. "That's it then."
          </li>
          <li>
            <strong>Darth Maul Deploys Probe Droids:</strong> Desert mesa at night. Six droids
            released to hunt Qui-Gon and the Queen.
          </li>
          <li>
            <strong>Sunrise / Anakin's Dream:</strong> Artoo paints the Pod. Anakin tells Padme she
            led an army in his dream.
          </li>
          <li>
            <strong>Main Hanger Pre-Race:</strong> Watto warns Qui-Gon. Qui-Gon Force-fixes the
            chance cube. Anakin's freedom wagered.
          </li>
          <li>
            <strong>Probe Droid on Street:</strong> Maul's droid searches Mos Espa for the heroes.
          </li>
          <li>
            <strong>Arena Establishing / Announcer Intro:</strong> Boonta Eve revealed at scale.
            Fode/Beed introduce the event.
          </li>
          <li>
            <strong>Starting Grid Parade:</strong> Pilots line up. Jabba enters the Royal Box.
            Sebulba sabotages Anakin's engine strap undetected.
          </li>
          <li>
            <strong>Final Pre-Race Moments:</strong> Padme's kiss. Sebulba's threat. Qui-Gon: "Feel.
            Don't think." Shmi: "Be safe."
          </li>
          <li>
            <strong>Race Start:</strong> Green light fires. Anakin's engine stalls. All others roar
            ahead.
          </li>
          <li>
            <strong>Lap 1, Desert Chase:</strong> Sebulba crashes Mawhonic. Anakin leaps over
            Gasgano at cliff drop. Tusken Raiders fire.
          </li>
          <li>
            <strong>Lap 1, Viewing Platform:</strong> Jar Jar pesters Fanta. Watto confident.
            Intercutting begins.
          </li>
          <li>
            <strong>Lap 2, Moving Up / Mechanical Crises:</strong> Anakin climbs to sixth. Sebulba
            destroys Xelbree. DUM-4 explodes. Sebulba breaks Anakin's strap.
          </li>
          <li>
            <strong>Lap 3, Final Showdown:</strong> Anakin catches Sebulba. Service ramp save.
            Steering rods hook. Sebulba crashes. Anakin wins.
          </li>
          <li>
            <strong>Victory Announcement:</strong> Fode/Beed call the finish.
          </li>
          <li>
            <strong>Post-Race Celebration:</strong> Crowd lifts Anakin. Probe droids move through
            the crowd.
          </li>
          <li>
            <strong>Watto Confrontation:</strong> Watto rages. Qui-Gon: "Whenever you gamble,
            eventually you'll lose." Anakin freed.
          </li>
          <li>
            <strong>Farewell in the Hanger:</strong> Hugs. Parts loaded on eopies. Group rides out.
            Anakin and Shmi wave.
          </li>
        </ol>
      </>,

      <>
        <h2>Race Event Timeline</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Phase</th>
              <th>Event</th>
              <th>Dramatic Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pre-race</td>
              <td>Sebulba sabotages engine strap</td>
              <td>Delayed trap, cheating established as systemic</td>
            </tr>
            <tr>
              <td>Start</td>
              <td>Anakin's engine stalls</td>
              <td>Maximum underdog position established visually</td>
            </tr>
            <tr>
              <td>Lap 1</td>
              <td>Sebulba destroys Mawhonic</td>
              <td>Stakes: race is lethal and champion cheats</td>
            </tr>
            <tr>
              <td>Lap 1</td>
              <td>Anakin leaps over Gasgano at cliff drop</td>
              <td>Force instinct first displayed in the race</td>
            </tr>
            <tr>
              <td>Lap 1</td>
              <td>Tusken Raiders fire on field</td>
              <td>Environmental threat compounds race danger</td>
            </tr>
            <tr>
              <td>Lap 2</td>
              <td>Sebulba destroys Xelbree</td>
              <td>Field thins; sabotage method confirmed systemic</td>
            </tr>
            <tr>
              <td>Lap 2</td>
              <td>Ody's droid DUM-4 sucked into engine</td>
              <td>Comic elimination; field continues thinning</td>
            </tr>
            <tr>
              <td>Lap 2</td>
              <td>Ben Quadinaros: all four engines explode</td>
              <td>Comic spectacle; visual punctuation mid-race</td>
            </tr>
            <tr>
              <td>Lap 2</td>
              <td>Sebulba breaks Anakin's engine strap</td>
              <td>Sabotage payoff, near-fatal mechanical crisis</td>
            </tr>
            <tr>
              <td>Lap 2</td>
              <td>Anakin saves via service ramp</td>
              <td>Force-instinct payoff of pre-race coaching</td>
            </tr>
            <tr>
              <td>Lap 3</td>
              <td>Anakin catches Sebulba</td>
              <td>Rivals finally side-by-side, climax begins</td>
            </tr>
            <tr>
              <td>Lap 3</td>
              <td>Steering rods hook together</td>
              <td>Rivalry literalized; physical constraint forces resolution</td>
            </tr>
            <tr>
              <td>Lap 3</td>
              <td>Sebulba's Pod crashes into ancient statue</td>
              <td>Saboteur defeated by his own trap</td>
            </tr>
            <tr>
              <td>Finish</td>
              <td>Anakin wins; Watto confronted</td>
              <td>Con closes; thematic summary line delivered</td>
            </tr>
            <tr>
              <td>Post-race</td>
              <td>Probe droid observes Qui-Gon/Watto exchange</td>
              <td>Sith surveillance confirmed during triumph</td>
            </tr>
            <tr>
              <td>Farewell</td>
              <td>Anakin and Shmi wave</td>
              <td>First permanent loss; emotional close of module</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Key Quotes</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"The Queen does not need to know."</span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon, to Padme. Jedi authority operating outside the political chain of command.
            </p>
            <p>
              <em>Function:</em> Establishes Qui-Gon's unilateral decision-making; Padme powerless
              in disguise.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"Either way, you win."</span>
          <div className="lrn-definition-desc">
            <p>Qui-Gon, to Watto. The trap framed as certainty.</p>
            <p>
              <em>Function:</em> Central line of the con structure. Watto's greed makes him blind to
              the second wager.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"There was no father, that I know of."</span>
          <div className="lrn-definition-desc">
            <p>Shmi, to Qui-Gon. The virgin-birth mystery.</p>
            <p>
              <em>Function:</em> Establishes the messianic origin; Qui-Gon links it to the Force
              immediately.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "The reading's off the chart...over twenty thousand."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Obi-Wan, transmitting midi-chlorian count. Higher than Yoda. Higher than any Jedi.
            </p>
            <p>
              <em>Function:</em> Empirical confirmation of the Chosen One. Closes Qui-Gon's
              certainty.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "You carry all our hopes." / "I won't let you down."
          </span>
          <div className="lrn-definition-desc">
            <p>Padme and Anakin, starting grid.</p>
            <p>
              <em>Function:</em> Loads the race with stakes beyond Anakin's freedom. A planet's fate
              on a child's shoulders.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Concentrate on the moment. Feel. Don't think. Trust your instincts."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon, pre-race coaching. First full articulation of Jedi operating principle
              directed at Anakin.
            </p>
            <p>
              <em>Function:</em> Sets up the service ramp payoff in lap 2. Names what Anakin already
              does instinctively.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"Be safe." / "I will, Mom. I promise."</span>
          <div className="lrn-definition-desc">
            <p>Shmi and Anakin, starting grid. Last private exchange before the race.</p>
            <p>
              <em>Function:</em> Maternal weight against imminent danger.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "You won't walk away from this one, slave scum!" / "Don't count on it, slime-ball."
          </span>
          <div className="lrn-definition-desc">
            <p>Sebulba and Anakin, starting grid.</p>
            <p>
              <em>Function:</em> Personal rivalry stated. Anakin refuses to accept his slave status
              as psychological limit.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"Just feeling this good was worth it."</span>
          <div className="lrn-definition-desc">
            <p>Anakin, post-race. He raced for joy, not reward.</p>
            <p>
              <em>Function:</em> Reveals motivation as present-moment experience, the Jedi
              philosophy in action.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Whenever you gamble, my friend, eventually you'll lose."
          </span>
          <div className="lrn-definition-desc">
            <p>Qui-Gon, to Watto after the race. Thematic summary of the entire module's con.</p>
            <p>
              <em>Function:</em> Closes the bet structure. Watto gambled on certainty; Qui-Gon
              confirmed what the Force already ordained.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Themes: Quick Reference</h2>
        <ul className="lrn-list">
          <li>
            <strong>Destiny vs. Chance</strong>: Every "chance" event is Force-guided. Watto thinks
            he gambles. Qui-Gon knows he does not.
          </li>
          <li>
            <strong>Slavery and Hidden Worth</strong>: Property holds the power to free everyone.
            Slave status vs. extraordinary ability is the module's central irony.
          </li>
          <li>
            <strong>Feel, Don't Think</strong>: Core Jedi operating principle. Anakin embodies it
            before he knows its name. Pays off in the service ramp.
          </li>
          <li>
            <strong>Deception as Survival</strong>: Every character except Anakin deceives. Only
            Anakin wins. The moral structure rewards honesty.
          </li>
          <li>
            <strong>The Absent Father / Miraculous Birth</strong>: Messianic origin. The Force as
            Anakin's father. Explained by never explaining.
          </li>
          <li>
            <strong>Midi-Chlorians as Fate Marker</strong>: Biological measure confirms Force
            instinct. Destiny quantified at 20,000+.
          </li>
          <li>
            <strong>The Watching Mother</strong>: Shmi observes from a distance four times. Symbol
            of a parent's helplessness against a child's fate.
          </li>
          <li>
            <strong>Hope as Currency</strong>: Shmi, Padme, Kitster all frame Anakin's win as
            "hope." Emotional stakes distributed across everyone he carries.
          </li>
          <li>
            <strong>Surveillance / Being Watched</strong>: Maul's droids observe unseen while heroes
            celebrate openly. Dramatic irony built through geography.
          </li>
          <li>
            <strong>Underdog / Crowd Spectacle</strong>: Lone honest racer vs. corrupt champion
            before 100,000 spectators. The arena narrative as archetype.
          </li>
        </ul>
      </>
    ]
  }
}

function departureAndMaulStrikesContent(C) {
  return {
    sections: [
      <ChapterDivider key="div-departureAndMaulStrikesContent">
        <h2>Act II: Departure and Maul Strikes</h2>
        <p>Anakin leaves Tatooine. Darth Maul reveals himself.</p>
      </ChapterDivider>,
      <>
        <p>
          You have watched a boy win his freedom in a race. Now the story must pay for it. This is
          the module about leaving: what it costs, who it breaks, and what happens when an assassin
          arrives before the ship can escape.
        </p>
        <p>
          Everyone has had to leave someone they love. This is about the moment that shapes how a
          child learns to do that. Anakin never gets taught properly.
        </p>
        <p>
          Three forces collide in this sequence. Anakin tries to leave. Shmi tries to let him go.
          Darth Maul tries to stop both. Each one succeeds at a cost.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The departure scene is the film's emotional core, not the podrace. Races test skill.
            Departures test character. What you lose, and how you lose it, reveals who you are more
            than any victory. Anakin loses everything except his forward motion. That motion is
            enough to destroy three galaxies later.
          </p>
        </div>

        <viz.DmsCharacterWebSvg C={C} />
        <div
          style={{
            textAlign: 'center',
            marginTop: '8px',
            color: 'var(--text-dim)',
            fontSize: '13px'
          }}
        >
          Every major relationship Anakin carries out of Tatooine. Each line is a seed planted here.
        </div>

        <h2>THE PROBE DROID AND OBI-WAN'S WARNING SHOT</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Obi-Wan says "Why do I sense we've picked up another pathetic life form?" before ever
            meeting Anakin. What does this tell you about the relationship they will have?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Obi-Wan has already decided who Anakin is before seeing him. His skepticism is not a
              reaction to anything Anakin does. It is a standing attitude toward Qui-Gon's habit of
              collecting strays. Anakin spends the rest of the film trying to earn respect from a
              master who started out dismissing him.
            </p>
          </details>
        </div>

        <p>
          Before Anakin steps toward the ship, the dark side is already watching. A Sith probe droid
          (a small remote surveillance unit sent by Darth Maul) sits on a hill above the spacecraft.
          It speeds away the moment the group arrives. This is intelligence work: gather data,
          report back, vanish.
        </p>
        <p>
          Obi-Wan's line (<em>"Why do I sense we've picked up another pathetic life form?"</em>) is
          the first thing the master who will eventually train him says about him. Anakin cannot
          hear it. Obi-Wan dismisses the boy before the boy exists for him. This one line plants the
          friction between them.
        </p>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">Off-screen judgment</strong>
          <div className="lrn-definition-desc">
            A character states their opinion before meeting the person it concerns. The audience
            learns the shape of a relationship before the characters do. We know Obi-Wan already has
            a verdict. Anakin has no idea.
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does it matter that Obi-Wan's skepticism is stated before he meets Anakin, not
            after? Form your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              If he had said it after meeting the boy, it would read as a reaction to something
              specific. Said before, it reads as a pattern. The audience sees the relationship is
              already tilted before Anakin has a chance to show himself. This is careful
              screenwriting: the gap between what we know and what Anakin knows creates tension that
              will last for films.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Think about hearing someone's reputation before meeting them. The moment you meet them,
            you are already filtering everything they do through what you were told. Obi-Wan does
            this to Anakin for years. The audience sees this happening in real time. That is what
            makes the "pathetic life form" line so powerful as an opening move.
          </p>
        </div>

        <h2>ANAKIN FREED, AND THE COST REVEALED</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Qui-Gon says "You are no longer a slave." Anakin jumps for joy. What do you think his
            next question will be?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              He asks about his mother. The screenplay knows this is the only question that matters.
              Joy becomes grief in one breath. The freedom he just won is real. But it costs him the
              person he loves most.
            </p>
          </details>
        </div>

        <p>
          Qui-Gon delivers the news in Anakin's home. <em>"You're no longer a slave."</em> Anakin
          jumps for joy. Shmi goes still. The gap between their reactions tells the whole story:
          Anakin hears freedom. Shmi hears goodbye.
        </p>
        <p>
          Then Anakin asks the question that collapses everything:{' '}
          <em>"What about Mom? Is she free too?"</em> Qui-Gon tried to buy her. Watto refused. The
          money from the pod was not enough. The announcement of freedom is immediately undercut.
          Anakin's freedom exists inside Shmi's continued captivity.
        </p>
        <p>
          This is the film's central structural trick. Anakin wins the race. He wins his freedom. He
          cannot win what he actually wants. Think of getting a scholarship to a school far from
          home, while your family stays behind with no way to follow. The win is real. The loss is
          also real. Both happen at once.
        </p>

        <viz.IncompleteLiberationSvg C={C} />
        <div
          style={{
            textAlign: 'center',
            marginTop: '8px',
            color: 'var(--text-dim)',
            fontSize: '13px'
          }}
        >
          Anakin's column fills. Shmi's column stays locked. Every gain he makes here costs her
          something.
        </div>

        <div className="lrn-insight">
          <strong>The Incomplete Liberation</strong>
          <div>
            Freedom that costs someone else their captivity is not really complete freedom. Every
            gain Anakin makes here is paid for by Shmi staying behind. The screenplay makes this
            structural: you cannot separate his joy from her loss.
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the screenplay make Anakin's freedom incomplete? Why not just free both of
            them? Form your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              If Shmi were freed too, Anakin would leave happy. By keeping Shmi enslaved, the
              screenplay plants the grief that Anakin never fully mourns. He leaves with a broken
              promise already forming inside him.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Stories use "joy undercut by cost" at turning points because it reflects how life
            actually works. Getting into your dream school while your family stays behind. Escaping
            a difficult situation while a friend stays stuck in it. Immigration. Promotion.
            Recovery. The best moments often come attached to something painful. Anakin's departure
            is the purest version of this: his freedom is literal, and its cost is also literal.
          </p>
        </div>

        <h2>QUI-GON AND SHMI: DESTINY VS. FEELING</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Qui-Gon believes the Force designed this meeting. Shmi believes Anakin should trust his
            feelings. They give the same advice from completely different starting points. Which one
            asks more of Anakin?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Qui-Gon asks Anakin to trust something external (the Force's plan). Shmi asks him to
              trust something internal (his own judgment). Shmi's version is harder, because he is
              nine, and his feelings are grief. Trusting your feelings when they hurt this much
              takes more courage than following a cosmic plan.
            </p>
          </details>
        </div>

        <p>
          Qui-Gon frames everything as the Force's design.{' '}
          <em>"This path has been placed for you, Annie; the choice to take it is yours alone."</em>{' '}
          He offers destiny and free will in the same breath and lets the contradiction stand. He
          does not resolve it. He believes both are true at once.
        </p>
        <p>
          A common misread is that Qui-Gon is being lazy or vague. He is not. He is being precise in
          the Jedi way: the Force has a will, AND individuals choose. Both are real. The
          contradiction is not a bug in his thinking. It is the Jedi position.
        </p>
        <p>
          Shmi gives Anakin something different.{' '}
          <em>
            {' '}
            "You can't stop change any more than you can stop the suns from setting. Listen to your
            feelings; Annie, you know what's right."
          </em>{' '}
          She does not mention the Force. She points to Anakin himself. She is the first person in
          the film to tell him his inner voice is trustworthy.
        </p>
        <p>
          Both reach the same conclusion (Anakin must go) from completely different ways of
          thinking. The audience does not need to choose between them. They work side by side.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <div className="lrn-compare-title">QUI-GON'S APPROACH</div>
            <p>
              The Force designed this. Destiny and choice both exist. Anakin must go because the
              universe placed this path here.
            </p>
          </div>
          <div className="lrn-compare-col">
            <div className="lrn-compare-title">SHMI'S APPROACH</div>
            <p>
              Trust yourself. Change cannot be stopped. Anakin must go because he already knows what
              is right inside him.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Shmi's wisdom sounds like Jedi wisdom without the Jedi label. Why does the screenplay
            give her that role? Form your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Giving the first philosophical lesson to Shmi, not the Jedi, roots Anakin's connection
              to the Force in love rather than training. It means his deepest instincts were shaped
              by a mother, not an institution. When Obi-Wan later says "trust your feelings," the
              audience can feel the echo. Shmi taught him this first. The Jedi just gave it a name.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Think about religious vs. secular parents giving the same life advice from different
            frameworks. One says "God has a plan for you." The other says "trust your gut." Both
            mean: go. Both work. The screenplay shows that wisdom about leaving and loss is not
            owned by any one tradition. A slave mother on a desert planet can know exactly what a
            Jedi master knows, just in different words.
          </p>
        </div>

        <h2>THE FAREWELL CASCADE</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Anakin has said goodbye to his mother. He starts walking toward Qui-Gon. What do you
            think will stop him before he reaches the ship?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              He runs back to his mother. He cannot do it in one motion. The screenplay builds the
              departure as a series of failed attempts. Each return shows us exactly what he is made
              of: loyalty that runs past the point of comfort.
            </p>
          </details>
        </div>

        <p>
          The screenplay builds departure as a series of failures to leave. Anakin packs. He wakes
          Threepio to say goodbye: his own creation, left without coverings, unfinished. He gives
          Kitster coins. He starts walking. He stops and runs back to his mother. He starts again.
        </p>
        <p>
          Each return is not weakness. It shows us exactly what Anakin is made of. He keeps every
          bond alive even when it costs him. He is loyal past the point of comfort.
        </p>

        <viz.FarewellCascadeSvg C={C} />
        <div
          style={{
            textAlign: 'center',
            marginTop: '8px',
            color: 'var(--text-dim)',
            fontSize: '13px'
          }}
        >
          Five attempts. The run-back to Shmi is the fourth. Only Shmi pointing him forward breaks
          the loop.
        </div>

        <p>
          Threepio's moment carries its own meaning.{' '}
          <em>
            {' '}
            "Master, Annie, you are my maker, and I wish you well. Although I'd like it better if I
            were a little less naked."{' '}
          </em>{' '}
          It is comic relief. But it is also an image: Anakin leaves his creation unfinished. The
          film returns to this pattern at every farewell. He starts things he cannot complete.
        </p>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">The Unfinished as Theme</strong>
          <div className="lrn-definition-desc">
            Threepio has no coverings. Shmi stays enslaved. Anakin's promise to return goes unkept.
            The theme of incompleteness runs through every goodbye in this sequence. It is not a
            subplot. It is woven into the structure.
          </div>
        </div>

        <p>
          Kitster's line lands quietly.{' '}
          <em>"There are so many of us who want you to stay, Annie... You're a hero."</em> Anakin is
          already a legend on Tatooine. His home knows him. The galaxy does not yet.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the screenplay structure the departure as a series of failed attempts instead
            of one clean goodbye? Form your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Each failed attempt raises the emotional cost of the eventual departure. The audience
              does not want him to leave either. Each return is a brief relief that makes the final
              exit hit harder. Anyone who has ever said goodbye multiple times at an airport or a
              train station knows this pattern. The screenplay uses it to make Anakin's character
              visible: he is not someone who leaves easily. That trait will define him for three
              films.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Think about leaving for college, or a military deployment, or moving abroad. The people
            who love you the most find it hardest to say goodbye cleanly. They come back. They hug
            again. They stand at the door longer than they should. Anakin's multiple goodbyes are
            one of the most honest things in the film. They show grief as it actually behaves, not
            as stories usually clean it up.
          </p>
        </div>

        <h2>SHMI'S FINAL LESSON</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Anakin runs back to Shmi and says "I can't do it, Mom. I just can't." He is nine years
            old and he is falling apart. How does Shmi reach him?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              She reminds him of a time he has already survived something impossible. She does not
              argue with his grief. She shows him evidence from his own past that he can do hard
              things. Then she gives him a direction: she turns him to face Qui-Gon and sends him
              walking.
            </p>
          </details>
        </div>

        <h3>Shmi's Strategy</h3>

        <p>
          Shmi does not argue with Anakin's grief. She reminds him of a moment he has already
          survived. She asks if he remembers climbing the great dune to chase the banthas away. He
          collapsed several times, exhausted, thinking he could not do it.{' '}
          <em>"This is one of those times."</em>
        </p>
        <p>
          Then she delivers the two lines that define this scene.{' '}
          <em>"I will become a Jedi and I will come back and free you, Mom... I promise."</em> And
          her answer:{' '}
          <em>
            {' '}
            "No matter where you are, my love will be with you. Now be brave, and don't look back...
            don't look back."{' '}
          </em>
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            "Don't look back" is Shmi's final instruction. Why is this the perfect last thing she
            says? Form your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              She names the danger she sees in him and tells him to release it. The instruction and
              the flaw are identical. His mother knows him completely. She sees the danger and names
              it. Knowing is not the same as curing.
            </p>
          </details>
        </div>

        <viz.TwoInstructionsSvg C={C} />
        <div
          style={{
            textAlign: 'center',
            marginTop: '8px',
            color: 'var(--text-dim)',
            fontSize: '13px'
          }}
        >
          Anakin's vow pulls him backward. Shmi's instruction pushes him forward. He cannot follow
          both.
        </div>

        <h3>What Shmi Does</h3>

        <p>
          Anakin swears to return. Shmi tells him never to look back. His attachment to the past is
          his defining flaw. His mother just named it and told him to release it. He cannot.
        </p>
        <p>
          Shmi turns Anakin to face Qui-Gon and sends him walking. The physical act matters. She
          does not push him away. She points him toward something. She gives him a direction when he
          has none.
        </p>

        <div className="lrn-insight">
          <strong>The Mother Who Lets Go</strong>
          <div>
            Shmi's release of Anakin is the film's deepest act of love. It costs her everything. She
            stays enslaved so he can be free. She is never repaid.
          </div>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Immigrant parents who stay behind so a child can build a life elsewhere. Parents of
            soldiers who send their children toward danger they cannot follow. Parents of children
            with serious illness who must travel for treatment. The parent who lets go is one of the
            most painful roles in any story, because they have no good option. Shmi's version is the
            harshest: she literally cannot follow him even if she wants to. She is enslaved. Her
            release of him is a choice made without any real alternatives. That is what makes it
            devastating.
          </p>
        </div>

        <h2>QUI-GON DESTROYS THE PROBE DROID</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Qui-Gon notices something at the edge of his vision while walking with Anakin away from
            Jira's fruit stand. What do you think he sees?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The probe droid that was watching from the hill earlier. The dark side has been
              tracking them. Qui-Gon spots the surveillance unit before it can report their route,
              and destroys it without breaking stride.
            </p>
          </details>
        </div>

        <p>
          At Jira's fruit stand, Anakin gives away coins a second time. He gives Jira enough to buy
          a cooling unit so she will not suffer in the heat.{' '}
          <em>"Otherwise I'll worry about you."</em> He is nine years old, he has just lost
          everything, and his first act is to give away what he has left.
        </p>
        <p>
          Then, without breaking stride, Qui-Gon ignites his lightsaber and cuts the lurking probe
          droid in half in one motion. He does not stop. He does not warn Anakin. He spots the
          threat, removes it, and keeps walking. This is what Jedi training looks like at full
          development: the threat is handled before the mind has time to narrate it. It is not a
          decision. It is a trained automatic habit.
        </p>
        <p>
          Think of a firefighter who pulls someone back from danger without consciously choosing to.
          Or a parent who catches a falling child before thinking. Years of training make certain
          responses faster than thought. Qui-Gon demonstrates exactly this. The contrast with
          Anakin, who is bewildered by the Maul fight, sets up everything about Jedi training the
          rest of the film will probe.
        </p>
        <p>
          <em>"Probe droid. Very unusual... not like anything I've seen before. Come on."</em>
          Qui-Gon identifies the threat without naming who sent it. He does not yet know about the
          Sith. But he knows the urgency. They run.
        </p>

        <viz.DarkSideTimelineSvg C={C} />
        <div
          style={{
            textAlign: 'center',
            marginTop: '8px',
            color: 'var(--text-dim)',
            fontSize: '13px'
          }}
        >
          The dark side shifts from silent watching to open assault across four scene transitions.
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Qui-Gon destroys the probe droid without slowing down or explaining what he sees. What
            does this show about his character that dialogue cannot? Form your answer before reading
            on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Dialogue would require a pause, a decision, a reaction. The action has none of those.
              Qui-Gon spots the threat and the threat is gone before Anakin registers it. This tells
              us: at this level of mastery, a Jedi does not switch between "walking" mode and
              "combat" mode. He is always both. The action communicates training, alertness, and
              calm under pressure in a single beat. No speech could do the same work.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Surgeons who keep working calmly while alarms sound. Pilots who follow emergency
            procedures without visible panic. Elite soldiers who react before they consciously
            decide. All of these people have trained until the right response became faster than
            thought. Qui-Gon's lightsaber swing is the same thing. The screenplay shows mastery
            through action, not description. This is one of the most efficient pieces of character
            writing in the film.
          </p>
        </div>

        <h2>DARTH MAUL ATTACKS</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Darth Maul is on a speeder bike heading toward Qui-Gon and Anakin. They are running
            toward the ship. The dark side sent the probe droid, got its report, and dispatched an
            assassin. Who reaches whom first, and what happens?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Maul arrives before Anakin reaches safety. The attack starts before the speeder even
              stops. Qui-Gon barely blocks the first blow. Anakin has to run to the ship while the
              duel happens behind him. Padme's word is what gets him on board.
            </p>
          </details>
        </div>

        <p>
          Maul's arrival has no buildup. He appears. He jumps off the speeder bike before it stops.
          Before his feet touch the ground, his lightsaber has already swung a killing blow that
          Qui-Gon barely blocks. The fight shows the Sith as a step ahead of the Jedi at every
          exchange. Every Jedi move is one beat behind.
        </p>
        <p>
          Qui-Gon orders Anakin to the ship immediately.{' '}
          <em>"Annie, get to the ship! Take off! Go! Go!"</em> Anakin does not hesitate. He runs.
          His quick obedience matters: he is not yet a Jedi but he responds like a soldier. He
          trusts Qui-Gon completely.
        </p>

        <viz.MaulAttackSvg C={C} />
        <div
          style={{
            textAlign: 'center',
            marginTop: '8px',
            color: 'var(--text-dim)',
            fontSize: '13px'
          }}
        >
          Maul's attack begins before his feet land. Qui-Gon is always one beat behind. Anakin runs
          toward the ship while the duel plays out.
        </div>

        <p>
          Inside the ship, Panaka does not recognize Anakin. Padme does. <em>"He's a friend."</em>{' '}
          Three words. Her vouching gives him access to the cockpit, to Obi-Wan, to the escape. Her
          word is what saves him. This is the first moment of many where Padme's trust in Anakin
          runs ahead of the available evidence.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            The probe droid was surveillance. Maul's attack is the next step. Why does the
            screenplay separate these into two scenes rather than having Maul arrive immediately?
            Form your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The separation builds dread. The probe droid tells us the dark side is watching. Then
              the farewell scenes happen, and we keep waiting. The silence between surveillance and
              assault creates a pressure that makes Maul's arrival feel like a sudden collapse of
              something that was always coming. If Maul had arrived immediately, it would be a
              fight. The delay makes it a reckoning.
            </p>
          </details>
        </div>

        <div className="lrn-insight">
          <strong>The Sith Reveals Itself</strong>
          <div>
            The probe droid was the dark side watching. Maul's attack is the dark side acting. The
            shift happens in one cut. The audience feels the acceleration because the silence before
            it was so complete. See the timeline above: covert observation becomes direct assault
            across a single scene transition.
          </div>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Think about sudden disruptions that change everything: a phone call with bad news, a
            sudden illness, an accident. They always feel impossible to absorb because the moment
            before was ordinary. Maul's arrival hits hard because the scene before it was a
            nine-year-old boy giving coins to an old woman at a fruit stand. That gap is the whole
            point.
          </p>
        </div>

        <h2>THE RAMP ESCAPE</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The ship flies low over the battlefield to retrieve Qui-Gon while he is still fighting.
            There is no plan. How does Qui-Gon get on board without the ship landing?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The ship skims the desert floor. The ramp extends. Qui-Gon boards while still
              fighting. Maul jumps on after him. Qui-Gon knocks Maul off the ramp onto the desert
              floor. The ship rockets away. None of this was planned in advance.
            </p>
          </details>
        </div>

        <p>
          Obi-Wan's command (<em>"Fly low!"</em>) is the pivot. The ship does not land. It skims the
          desert floor with the ramp extended. Qui-Gon boards mid-battle. Maul jumps on after him.
          Qui-Gon swings with full force and knocks Maul off the ramp onto the desert below.
        </p>
        <p>
          This escape is built on improvised action. There is no plan. Obi-Wan sees the dust cloud
          and acts. Qui-Gon boards. The ship rockets away. Maul stands alone on Tatooine. The dark
          side had every advantage: surprise, intelligence, a trained killer. The Jedi escaped on
          instinct and quick thinking.
        </p>
        <p>
          This matters because it shows the Jedi win through adaptation, not superiority. They are
          not stronger than Maul. They are faster at responding to what is actually happening.
          Emergency pilots, rescue crews, surgeons in unexpected situations: all operate this way.
          Training does not give you a script. It gives you the ability to improvise correctly under
          pressure.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Qui-Gon barely escapes. He is clearly matched or outmatched by Maul. Why does the
            screenplay let the villain come this close to winning? Form your answer before reading
            on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              If Qui-Gon defeats Maul easily, there is no threat. The audience needs to believe Maul
              is genuinely dangerous. Keeping Qui-Gon on the edge of losing, and having him escape
              through improvisation rather than power, does two things: it makes Maul credible as a
              villain, and it shows that the Jedi are not invincible. That second point matters
              enormously for everything that follows in the film.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The classic lesson about improvisation under pressure: the people who survive
            emergencies are rarely the ones who had a plan for this exact situation. They are the
            ones who could adapt their training to what was actually happening. Obi-Wan does not
            have a "retrieve Qui-Gon from a desert duel" plan. He has training, and he uses it to
            solve a problem he has never seen before. That is the whole point of preparation: not to
            predict the future, but to be ready to respond to it.
          </p>
        </div>

        <h2>AFTERMATH AND THE FIRST MEETING OF OBI-WAN AND ANAKIN</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Qui-Gon collapses in the hallway after escaping. He has to introduce Anakin to Obi-Wan
            for the first time. Given what you know about Obi-Wan's opening line in this module, how
            do you expect that first meeting to go?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Obi-Wan is skeptical and cool. Anakin is awestruck and innocent. The imbalance is
              immediate. Obi-Wan gives Anakin "the look." Anakin stares back and says "Wow! You're a
              Jedi too?" with pure admiration. Two people, completely different expectations, on the
              first day of a relationship the film will track to the end.
            </p>
          </details>
        </div>

        <p>
          Qui-Gon lies in the hallway, covered in desert dust. Artoo watches over him. Anakin asks
          if he is all right. Qui-Gon recovers enough to describe what just happened:{' '}
          <em>
            {' '}
            "I don't know... but he was well trained in the Jedi arts. My guess is he was after the
            Queen."
          </em>{' '}
          He is wrong about the target. Maul was tracking Anakin specifically. But Qui-Gon is right
          about the training.
        </p>
        <p>
          Then Obi-Wan arrives and gives Anakin the look. Skeptical. Cool. The same attitude he
          voiced before ever meeting the boy. Anakin stares back, innocent and awestruck.{' '}
          <em>"Wow! You're a Jedi too?"</em> This is the first beat of the most complicated
          relationship the film tracks.
        </p>

        <viz.FirstMeetingSvg C={C} />
        <div
          style={{
            textAlign: 'center',
            marginTop: '8px',
            color: 'var(--text-dim)',
            fontSize: '13px'
          }}
        >
          Skeptical vs. awestruck. This gap, established in the first moment, defines their
          relationship for the rest of the film.
        </div>

        <p>
          Qui-Gon adds one more line before they jump to hyperspace (the faster-than-light travel
          that connects star systems in this galaxy):{' '}
          <em>"Let's hope this hyperdrive works and Watto didn't get the last laugh."</em> Even in
          relief, the shadow of doubt stays.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Qui-Gon guesses Maul was "after the Queen" rather than Anakin or himself. Why is this
            wrong, and why does the screenplay have him make this mistake here? Form your answer
            before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              At this point Qui-Gon does not know the Sith exist as a faction. He makes the most
              logical guess: the Queen is the obvious high-value target on the ship. His blind spot
              is that he cannot yet conceive that a Sith Lord is specifically tracking Anakin. The
              film stages this gap as a threat Qui-Gon cannot see clearly enough to defend against.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            First impressions that set lasting patterns are everywhere: the first day of a new job,
            the first conversation with someone who matters to the story. First meetings do not
            create relationships. They create the template from which relationships grow. Obi-Wan's
            first look at Anakin is skeptical. The film does not reset that template. The person who
            vouched for him first was a queen, not a master. Everything about their relationship is
            built on that original imbalance.
          </p>
        </div>

        <h2>GOVERNOR BIBBLE DEFIES NUTE GUNRAY</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The film cuts from Anakin crying alone on the ship to Naboo, where the Trade Federation
            occupies the planet. Nute threatens to kill Bibble if the resistance does not end. What
            do you think Bibble does?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              He refuses to break. He defends democracy even with a death threat on the table. This
              is civil defiance: someone with no power except their own refusal choosing to say no
              anyway.
            </p>
          </details>
        </div>

        <p>
          Nute addresses Bibble in the throne room.{' '}
          <em>
            {' '}
            "When are you going to give up this pointless strike? Your Queen is lost, your people
            are starving, and you, Governor, are going to die, much sooner than your people."{' '}
          </em>
        </p>
        <p>
          Bibble does not break.{' '}
          <em>
            {' '}
            "This invasion will gain you nothing. We're a democracy. The people have decided... They
            will not live under your tyranny."{' '}
          </em>
        </p>
        <p>
          This scene is a reminder that the political stakes are not on pause while the heroes
          escape. Naboo is still under occupation. People are dying. The cut between Anakin's
          private grief and Naboo's political nightmare is deliberate. The film holds both at once:
          intimate child psychology and open political horror. The personal and the political are
          not separate in this story.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Civil defiance under impossible pressure has real-world versions: dissidents who refused
            to recant under torture, whistleblowers who spoke up knowing the cost, local officials
            who protected people during occupations at personal risk. Bibble is a one-scene version
            of a very old story: the person with no weapons who refuses to say yes. The screenplay
            puts him here, between Anakin's grief and Padme's comfort, to say: the galaxy does not
            stop suffering while one child cries. Both things are real at the same time.
          </p>
        </div>

        <h2>THE JAPOR SNIPPET: ANAKIN AND PADME ALONE</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Padme finds Anakin shivering and alone in a corridor at night. She covers him with her
            over-jacket. Then Anakin reaches into his pocket. What do you think he gives her?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Something he made himself. A small carved wooden pendant. He carved it out of a japor
              snippet (a type of wood) and he wants her to remember him. It is a boy's gift:
              handmade, honest, direct. He wants her to be safe. He wants her not to forget him.
              Both at once.
            </p>
          </details>
        </div>

        <p>
          The ship is dark. Padme watches Bibble's recorded plea. She finds Anakin in a corner,
          shivering, arms around himself. She gives him her over-jacket. This is a small maternal
          gesture, and the screenplay knows what it means: Padme is already stepping into the space
          Shmi just left empty.
        </p>
        <p>
          Then Anakin reaches into his pocket.{' '}
          <em>
            {' '}
            "I made this for you. So you'd remember me. I carved it out of a japor snippet... It
            will bring you good fortune."{' '}
          </em>{' '}
          He places a small wooden pendant in her hand. Padme puts it on.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Anakin carved this pendant before leaving Tatooine. He was nine. He had just lost his
            mother. Why does the screenplay give this particular gift to Padme? Form your answer
            before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              He cannot give what he most wants to give: his continued presence, or his mother's
              safety. So he gives what he has. A handmade object is the physical form of care when
              you have nothing else. Giving it to Padme connects two losses: the mother he just left
              and the woman he is meeting. The pendant carries both.
            </p>
          </details>
        </div>

        <p>
          He carved it the night he lost his mother. Objects carry meaning long after the people who
          gave them are gone. The japor snippet is the purest version of this: a small handmade
          thing that holds a promise.
        </p>
        <p>
          Padme answers his unspoken grief: <em>"...You miss your mother."</em> Anakin cannot speak.
          She holds him. The film offers a child who has lost everything, held by someone who has
          just learned to read him without being told.
        </p>

        <div className="lrn-insight">
          <strong>The Pendant as Prophecy</strong>
          <div>
            Anakin carved the japor snippet the night he lost Shmi. He gave it to Padme as a promise
            of good fortune.
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            The scene ends with Padme saying "You miss your mother," not Anakin. Why does the
            screenplay give those words to her instead of him? Form your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Giving the line to Padme does two things. First, it shows she already understands him:
              she reads his grief before he can name it. This establishes the intimacy between them
              immediately. Second, it protects Anakin's dignity. A nine-year-old who has just lost
              his mother cannot admit it directly without completely breaking down. Having Padme
              name it lets him receive the truth without having to offer it. She holds the pain for
              him. This is the film's most tender moment precisely because neither character has to
              be strong for it to work.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Shmi's last words were "my love will be with you." Padme's last words in this scene are
            "you miss your mother." Anakin receives the same kind of knowing from two women in the
            same day. Both see what he cannot say. This pattern reveals what he needs most: not to
            be corrected, not to be trained, but to be seen. That need will shape every relationship
            he has for the rest of his life, and every choice he makes when those relationships are
            threatened.
          </p>
        </div>
      </>
    ],
    practice: [
      {
        q: 'Padme says "He\'s a friend" when Panaka questions Anakin on the ship. Why do those three words matter beyond the immediate scene?',
        a: "Her word gives Anakin access to the cockpit and to the escape itself. Without her vouching for him, Panaka has no reason to trust an unknown child during a crisis. The screenplay packs enormous weight into three words: Padme's authority as a queen transfers to Anakin instantly. This also sets up the pattern of their relationship inside the film: she advocates for him before he has earned it. Every later moment where her trust runs ahead of the evidence begins with these three words on a ship."
      },
      {
        q: 'Obi-Wan says "Why do I sense we\'ve picked up another pathetic life form?" before meeting Anakin. Why does the screenplay place this line before the meeting?',
        a: "Placing the line before the meeting means the audience knows Obi-Wan's verdict before Anakin does. We know the relationship is already tilted against Anakin before they share a single scene together. If Obi-Wan had said this after meeting the boy, it would read as a reaction to something specific. Said before, it reads as a standing attitude, a pattern rather than a response. This signals that Obi-Wan's skepticism is not about Anakin personally, but about Qui-Gon's habit of collecting strays. The friction between them is announced in one line."
      },
      {
        q: 'The scene where Anakin runs back to Shmi after saying goodbye is a classic failed-departure structure. Name another film that uses the same pattern.',
        a: "In Casablanca, Rick tells Ilsa to board the plane with Laszlo while she keeps resisting leaving. The departure is structured as a series of incomplete attempts before the final one holds. In The Lord of the Rings, Frodo tries to leave the Fellowship at Amon Hen and keeps being pulled back by loyalty. The structure works because each failed attempt raises the emotional cost of the eventual departure. The audience does not want the character to go either, so each return is a brief relief that makes the final exit hit harder. Anakin's multiple goodbyes use this same tension."
      },
      {
        q: 'Qui-Gon says "This path has been placed for you, Annie; the choice to take it is yours alone." What is the contradiction inside that statement?',
        a: 'If the path is placed by the Force (determined, designed, inevitable) then in what sense is the choice free? Qui-Gon offers destiny and free will as compatible without explaining how. He does not resolve the tension. This is the Jedi position: the Force has a will AND individuals choose. Both are real. Anakin will live inside that contradiction for the rest of the film. He is told his destiny is fixed. He is also told the choice is his alone. The screenplay presents both as true and refuses to pick one.'
      },
      {
        q: 'Shmi says "listen to your feelings; Annie, you know what\'s right." How does this connect to Jedi philosophy, and why does it matter that a non-Jedi says it first?',
        a: "Jedi training centers on trusting the Force through inner feeling and calm. Shmi delivers the same idea first, before any Jedi has trained Anakin, grounding it in love rather than doctrine. The screenplay gives Anakin's first philosophical lesson to his mother, not his master. This roots Force-sensitivity in human experience rather than institutional training. When Obi-Wan later says similar things, the audience can feel the echo: Shmi taught him this first."
      },
      {
        q: 'Anakin wins the podrace but cannot free his mother. How does this incomplete liberation shape what the film plants in him?',
        a: 'Anakin loses his mother, his home, his friends, and his creation (Threepio, unfinished) in a single day. Every loss is partial: Shmi is left behind without resolution. This kind of incomplete grief tends to produce a desperate need to hold onto the next bond absolutely. The film plants the feeling in him directly: he cannot afford to lose again. A victory that came with a price has planted the obsession.'
      },
      {
        q: 'Anakin asks "What about Mom? Is she free too?" immediately after learning he is free. Why is this the only question that matters in the scene?',
        a: "Because it reveals the gap between what freedom means to Anakin and what it means to Qui-Gon. For Qui-Gon, freedom means Anakin can pursue his destiny. For Anakin, freedom is meaningless if his mother stays enslaved. The question collapses the announcement. Joy becomes grief in one sentence. The screenplay uses this to show that Anakin's definition of winning is relational, not individual. He does not want freedom for himself. He wants it for the person he loves."
      },
      {
        q: "Why does the screenplay cut from Anakin's grief on the ship to the Nute and Bibble scene on Naboo?",
        a: "The cut refuses to let the audience settle into Anakin's grief. Bibble defying Nute under threat of death reminds us the political stakes have not paused. The film holds two things at once: intimate child psychology and open political horror. The edit also creates a shift in tone that makes both scenes more intense. Bibble's defiance is public and heroic. Anakin's grief is private and wordless. Placing them side by side makes the film's argument visible: what happens to one child on a desert planet is connected to what happens to an entire occupied world."
      },
      {
        q: 'Elaborate: Why does the japor snippet carry so much weight in this scene?',
        a: "When Anakin carves it, it is a boy's gift: raw, handmade, honest. When he gives it to Padme, it is a promise: remember me, be safe. The object is humble and homemade. The meaning it carries is enormous. A handmade thing from a nine-year-old who has just lost his mother is the only language he has left for love. The object does not change. The meaning around it does."
      },
      {
        q: 'Qui-Gon destroys the probe droid without breaking stride. What does this show about his level of Jedi training?',
        a: 'The action shows training so deep it has become faster than conscious thought. Qui-Gon spots a threat at the edge of his vision, ignites, swings, destroys, and keeps walking. He does not pause to explain or warn Anakin. At this level of mastery, a Jedi does not switch between walking mode and combat mode. The threat is handled before the mind has time to narrate it. This is the direct opposite of Anakin, who is bewildered by the Maul fight. The contrast sets up the entire Jedi training arc: Anakin has raw power but not this level of integrated response.'
      },
      {
        q: 'Transfer: The "mother who lets go" scene uses a classic departure archetype. Where else in storytelling does a parent release a child to a dangerous path they cannot follow?',
        a: "In Harry Potter and the Deathly Hallows, Molly Weasley lets Harry leave for his final mission knowing she may never see him again. She does not stop him. In The Wizard of Oz, Auntie Em cannot follow Dorothy anywhere: her world is the farm. The departure archetype works because it splits loyalty: the child must go, the parent must stay. Shmi's version is harder than most because she cannot follow Anakin even if she wanted to. She is enslaved. Her release of him is a choice made without any real options. The lack of alternatives is what makes it so devastating."
      },
      {
        q: 'Why is this the most effective piece of irony in the scene?',
        a: "The irony works because it makes Shmi's love tragic even in the moment of its expression. She names the danger she sees in him (attachment that will not release) and asks him to release it. The instruction and the flaw are identical, which means his mother knows him completely. She sees the danger and names it. Knowing is not the same as curing."
      },
      {
        q: 'Self-explain: Padme says "You miss your mother" rather than letting Anakin say it or asking him. Why does this work dramatically?',
        a: "Giving Padme the line does two things. First, it shows she already understands him: she reads his grief before he can name it. This establishes immediate intimacy between them. Second, it protects Anakin's dignity. A nine-year-old who has just lost his mother cannot admit it directly without completely falling apart. Having Padme name it lets him receive the truth without having to offer it. She holds the pain for him so he does not have to. This is the film's most tender moment precisely because neither character has to be strong for it to work."
      },
      {
        q: "What does Darth Maul's attack choreography communicate about the Sith that dialogue has not told us?",
        a: 'Maul jumps off the speeder bike before it stops. Before his feet land, his lightsaber is already swinging. This tells us the Sith does not transition between states: attack is already in progress before arrival. Qui-Gon barely blocks the first blow. Every exchange goes to Maul on points. The film communicates through movement alone: the Sith is faster, more aggressive, and trained to kill rather than to defend. This creates a new threat level the audience has not seen before in this film. The Jedi we have watched for the entire story is almost not enough. That is the message.'
      },
      {
        q: 'Why does Qui-Gon guess that Maul was after the Queen rather than Anakin?',
        a: "At this point Qui-Gon does not know the Sith exist as a faction. He cannot conceive that a trained killer was sent specifically to track Anakin. The Queen is the only obvious high-value target on the ship: a head of state fleeing an illegal occupation. His guess is logical but wrong. Maul was sent by Palpatine to stop the Queen's mission to Coruscant, yes, but also to eliminate Anakin as a potential threat. The misidentification matters because it shows Qui-Gon's blind spot: he does not yet understand the magnitude of what he has found in this boy."
      },
      {
        q: 'Anakin gives coins to Kitster, then to Jira at the fruit stand. He has just lost his mother. Why does the screenplay make his first acts of freedom acts of giving?',
        a: "Generosity is Anakin's farewell language in this module. He cannot give what he most wants to give (his continued presence, his mother's safety), so he gives what he has: money, objects, promises. The coins to Kitster and Jira are care made physical when presence is impossible. They also show that Anakin's first instinct with any resource is not to keep it. This is the version of Anakin who will later believe he can save Padme if he just becomes powerful enough. The generosity and the desperate need to protect are the same impulse working at different scales."
      },
      {
        q: "Transfer: Anakin leaves Tatooine with his grief unresolved. Where else does unresolved loss drive a character's worst decisions?",
        a: "In Breaking Bad, Walter White's unresolved shame over selling his share in Grey Matter drives him to prove his worth through increasingly destructive choices. The original wound is never faced directly. In Hamlet, the unresolved grief over a father's murder paralyzes Hamlet for the entire play: he cannot act, because acting would mean accepting that his father is gone and the world has changed. Anakin's farewell carries the same risk: a grief that cannot be cleanly named can later turn into something else. The film plants the wound and lets the audience feel its weight."
      },
      {
        q: 'The ramp escape has no plan. Obi-Wan improvises, Qui-Gon boards mid-battle, Maul is knocked off. Why does the screenplay show the Jedi winning through improvisation rather than strategy?',
        a: 'If the Jedi had a plan that worked, it would suggest they were stronger than Maul. They are not. The escape through improvised action is more honest: they were outmatched and they adapted faster than the enemy expected. The film stages a quiet warning here: the Jedi react to what is in front of them, while the Sith plan ahead. This escape wins on improvisation. The film leaves open what happens when the Sith have time to plan.'
      },
      {
        q: 'Anakin builds Threepio but leaves him unfinished. This is the first instance of the Unfinished theme. What other things does Anakin leave unfinished across this module?',
        a: 'He leaves Shmi enslaved despite promising to free her. He makes a vow to return that he cannot keep. He leaves Tatooine, Kitster, and Jira behind without being able to truly say goodbye. He leaves the japor snippet as a promise of good fortune that will not hold. He leaves the Jedi Order incomplete, never fully mastering the lessons about attachment and loss that Shmi tried to give him. The Unfinished as Theme runs through everything Anakin does in this sequence. It is not accidental. It is his character in miniature: he begins things with full intention and cannot complete them.'
      },
      {
        q: "Predict: Given Obi-Wan's first look at Anakin (skeptical and cool) and Anakin's response (awestruck and trusting), what is the most dangerous thing about this starting point for their relationship?",
        a: 'The most dangerous thing is the permanent imbalance it creates. Anakin starts out idolizing a master who does not see him. That gap means Anakin will always be reaching for approval that comes slowly or not at all. A student who needs to be seen, paired with a teacher who is slow to see: the combination plants a desperate need that any patient manipulator could exploit. Obi-Wan is not cruel. He is simply unable to close the gap fast enough. The starting point of this relationship already shows its strain.'
      },
      {
        q: 'Transfer: The japor snippet is a small handmade object that outlasts the relationship it came from. Name a real-world version of this pattern and explain why it carries so much emotional weight.',
        a: 'Letters written by soldiers who did not return from war, kept by families for generations. Photographs of people now gone, worn or carried by those who loved them. Rings that travel from parent to child to grandchild, carrying the weight of people the current owner never met. Handmade objects carry emotional weight because they contain evidence of effort: someone chose to make this, not buy it. They contain time. When the maker is far away, the object becomes a way of staying close. The japor snippet carries that weight inside this film without ever changing.'
      },
      {
        q: 'Bibble defies Nute even with a death threat on the table. What makes civil defiance at this moment dramatically effective?',
        a: "Bibble has no weapons, no army, no way out, and no hope of rescue in the immediate scene. His only available action is refusal. The screenplay places this scene between Anakin's private grief and Padme's comfort specifically to show that courage takes different forms. Anakin's courage is the courage to walk away from everything he loves. Bibble's courage is the courage to say no when saying no could get him killed. Both are acts of will against impossible circumstances. The contrast makes both more visible. One child crying on a ship and one official refusing to break: the film holds them as equally important."
      },
      {
        q: 'Anakin swears to return and free Shmi. Shmi tells him never to look back. These are contradictory instructions. Which one does the film show him following?',
        a: 'Inside the film he tries to follow both. He looks back. He keeps the vow. The film does not resolve the contradiction. Shmi recognizes the danger of holding both and tells him plainly. He has not yet learned how to release.'
      },
      {
        q: "Elaborate: What does the contrast between Anakin giving coins to Jira and Maul's attack in the same sequence tell us about what the film is doing thematically?",
        a: "The sequence places maximum tenderness directly next to maximum threat. A nine-year-old who has lost everything gives his last coins to an old woman so she will not suffer in the heat. Then, in the next beat, an assassin arrives to kill everyone. The contrast is the film's argument in miniature: goodness and violence exist in the same world, in the same moment, with no buffer between them. The film does not let you settle. Anakin's generosity makes the attack more violent because it shows what is at stake. Maul's arrival makes Anakin's gift more heartbreaking because it shows how fragile that kindness is."
      },
      {
        q: 'Qui-Gon presents destiny and free will as both true at the same time.',
        a: 'The Jedi position is that the Force has a will (certain things are meant to happen) AND that individuals make real choices that matter. Both are true simultaneously. Qui-Gon is not being vague. He is stating the Jedi understanding precisely: the path exists, AND Anakin must choose to walk it. The film never resolves this because it is not a contradiction to be resolved. It is the tension the film is built on. Anakin is "the Chosen One" (destiny) who must still pick a direction (free will). The screenplay holds both without collapsing either. The ambiguity is the point.'
      },
      {
        q: 'Predict: Padme gives Anakin her over-jacket and says "You miss your mother." This is their first private conversation. What does this moment establish about how their relationship works inside the film?',
        a: 'It establishes that Padme sees Anakin before others do, and that he depends on being seen by her. She reads his grief without being told. She acts on it immediately (the jacket) and names it precisely ("you miss your mother"). Anakin\'s deepest need is to be understood without having to explain himself. Padme meets that need in their first private moment. The film makes this bond load-bearing: if she can see him that completely, losing her would mean losing the one person who knows who he actually is.'
      },
      {
        q: "The film intercuts Anakin's grief on the ship with Bibble's defiance on Naboo. What does this editing choice say about the film's view of personal and political events?",
        a: "The film treats personal grief and political crisis as equally important and connected. It does not allow the audience to think of Anakin's pain as separate from the occupation of Naboo. Both are happening at the same time. Both are real. The edit argues: what happens to one child is not separate from what happens to a planet. The personal and the political are not different categories in this story. The film knows this."
      },
      {
        q: 'Transfer: Maul attacks with no warning, no buildup, no negotiation. The dark side shifts from covert surveillance to open assault in one cut. Name another story where a threat makes this kind of sudden shift from watching to striking.',
        a: 'In No Country for Old Men, Anton Chigurh tracks his targets quietly, gathering information, before arriving without warning. The reader or viewer always knows he is coming, but the moment of arrival is always sudden. In Jaws, the shark is invisible and distant until it is not. In both cases, the transition from surveillance to assault creates a specific kind of dread: you know the threat is real, you have been living with it, and then suddenly the waiting is over. Maul uses this structure. The probe droid watching creates the dread. Maul arriving ends it and replaces it with something worse.'
      },
      {
        q: "Anakin's farewell to Threepio (his creation, left without coverings, unfinished) connects to the Unfinished theme. Why is it significant that Anakin leaves his creation incomplete?",
        a: 'Threepio without coverings is a physical image of everything Anakin cannot complete. He built the droid to help his mother. He cannot stay to finish it. He cannot free his mother. He cannot keep his promise to return. The incompleteness is not accidental. It is his character: he begins with full intention and good purpose, and the gap between intention and outcome defines everything.'
      },
      {
        q: 'Predict: Anakin receives two kinds of knowing in this module: Shmi names his wound at farewell, and Padme names his grief on the ship. What does this double experience of being seen prepare him to need, and to fear losing?',
        a: 'It prepares him to need a specific kind of love: being understood without explanation, being seen before speaking. Both Shmi and Padme give this to him in the same day, which means his baseline for love is already set very high. Anyone who cannot offer this level of understanding will feel distant to him. This also means losing it would be catastrophic beyond normal loss: it would mean losing the only condition under which he feels real. The film plants that vulnerability without yet activating it. The double experience of being seen is the template against which every later loss will be measured.'
      },
      {
        q: 'Elaborate: Shmi points Anakin physically toward Qui-Gon after turning him away from her. Why does this physical gesture matter as much as her words?',
        a: 'Words say "go." Bodies show what words cannot. Shmi does not push Anakin away. She reorients him. She takes his grief and points it toward a direction. The physical act tells us she is not rejecting him. She is redirecting him. There is a difference between a door being shut on you and someone turning you toward another door. Shmi does the second thing. She gives him motion when he has none. This is the deepest teaching in the scene: when you cannot move forward, someone who loves you can point you there. The physical gesture is love made visible in the only way left to her.'
      }
    ],
    referenceSections: [
      <>
        <h2>KEY QUOTES WITH DRAMATIC FUNCTION</h2>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">
            Obi-Wan: "Why do I sense we've picked up another pathetic life form?"
          </strong>
          <div className="lrn-definition-desc">
            Sets up Obi-Wan's persistent underestimation of Anakin. Stated before meeting the boy
            (an attitude, not a reaction). Three films of friction announced in one line.
          </div>
        </div>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">Qui-Gon: "You're no longer a slave."</strong>
          <div className="lrn-definition-desc">
            Pivotal declaration. Triggers Anakin's joy and immediately collapses into the revelation
            that Shmi cannot come. Freedom announced, then undercut in one breath.
          </div>
        </div>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">
            Qui-Gon: "Our meeting was not a coincidence. Nothing happens by accident."
          </strong>
          <div className="lrn-definition-desc">
            States the Force-determinism position explicitly. The Jedi view: the Force has a will,
            AND individuals choose. Both are true simultaneously.
          </div>
        </div>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">
            Qui-Gon: "This path has been placed for you, Annie; the choice to take it is yours
            alone."
          </strong>
          <div className="lrn-definition-desc">
            Destiny and free will offered simultaneously without resolution. The contradiction is
            not a bug. It is the Jedi position.
          </div>
        </div>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">
            Shmi: "You can't stop change any more than you can stop the suns from setting. Listen to
            your feelings; Annie, you know what's right."
          </strong>
          <div className="lrn-definition-desc">
            Mirrors Jedi philosophy from a non-Jedi source. Shmi is Anakin's first philosophical
            teacher. Her method is inner truth, not Force doctrine.
          </div>
        </div>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">
            Anakin: "I will become a Jedi and I will come back and free you, Mom... I promise."
          </strong>
          <div className="lrn-definition-desc">The broken promise.</div>
        </div>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">
            Shmi: "No matter where you are, my love will be with you. Now be brave, and don't look
            back... don't look back."
          </strong>
          <div className="lrn-definition-desc">
            The final maternal instruction. Anakin's defining flaw is exactly that he cannot stop
            looking back. She named his wound in the act of releasing him.
          </div>
        </div>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">
            Kitster: "There are so many of us who want you to stay, Annie... You're a hero."
          </strong>
          <div className="lrn-definition-desc">
            Only line from a peer character in this module. Anakin is already a legend on Tatooine
            before he has set foot on a starship. His home knows him. The galaxy does not yet.
          </div>
        </div>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">
            Qui-Gon: "I don't know... but he was well trained in the Jedi arts. My guess is he was
            after the Queen."
          </strong>
          <div className="lrn-definition-desc">
            Qui-Gon misidentifies Maul's target. He cannot conceive that a Sith is tracking Anakin
            specifically. Foreshadows his incomplete understanding of what he has found.
          </div>
        </div>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">
            Anakin: "I made this for you. So you'd remember me. I carved it out of a japor
            snippet... It will bring you good fortune."
          </strong>
          <div className="lrn-definition-desc">
            The object does not change. The meaning around it does.
          </div>
        </div>

        <div className="lrn-definition">
          <strong className="lrn-definition-term">Padme: "...You miss your mother."</strong>
          <div className="lrn-definition-desc">
            She names Anakin's grief before he can. Shows established intimacy in their first
            private scene. She holds the pain for him so he does not have to offer it.
          </div>
        </div>

        <h2>CHARACTER RELATIONSHIP NOTES</h2>

        <ul className="lrn-list">
          <li>
            <strong>Anakin and Shmi.</strong> Separation is the emotional core. Shmi releases him
            from strength, not indifference. Her refusal to hold him back plants his deepest wound.
          </li>
          <li>
            <strong>Anakin and Qui-Gon.</strong> Authoritative and wise but emotionally distant.
            Qui-Gon watches Anakin's grief from a distance rather than comforting him directly.
          </li>
          <li>
            <strong>Anakin and Obi-Wan.</strong> First meeting: skeptical on Obi-Wan's side,
            awestruck on Anakin's. The imbalance that shapes their dynamic begins here.
          </li>
          <li>
            <strong>Anakin and Padme.</strong> First private intimacy. Padme gives warmth; Anakin
            gives a handmade object as a stand-in for himself. She names his grief before he can.
          </li>
          <li>
            <strong>Anakin and Kitster.</strong> Childhood distilled: Kitster calls him a hero.
            Anakin honors the bond with coins and a vow to remember.
          </li>
          <li>
            <strong>Anakin and Threepio.</strong> Creator and unfinished creation. Anakin says
            goodbye but cannot finish what he started. First instance of the Unfinished theme.
          </li>
          <li>
            <strong>Anakin and Jira.</strong> The old fruit vendor. Anakin gives her his last coins
            for a cooling unit. Generosity as farewell language: he cannot stay, so he gives.
          </li>
          <li>
            <strong>Qui-Gon and Darth Maul.</strong> First Jedi-Sith clash in the film. Pure
            physical opposition with no words. Maul has the edge throughout.
          </li>
          <li>
            <strong>Nute and Bibble.</strong> Occupation vs. democracy. Nute uses starvation as a
            weapon. Bibble refuses to break even under threat of death.
          </li>
        </ul>

        <h2>THEMES WITH SCENE EVIDENCE</h2>

        <ul className="lrn-list">
          <li>
            <strong>Freedom and Captivity.</strong> Anakin freed; Shmi stays enslaved. Liberation is
            incomplete and conditional. Every gain Anakin makes here is paid for by Shmi's loss.
          </li>
          <li>
            <strong>Destiny vs. Choice.</strong> Qui-Gon presents both simultaneously without
            resolution. The Jedi position: the Force has a will AND individuals choose. Both real.
          </li>
          <li>
            <strong>Departure as Loss.</strong> Every goodbye costs something: Shmi, Kitster, Jira,
            Threepio, Tatooine. The failed-departure cascade shows loyalty past comfort.
          </li>
          <li>
            <strong>The Unfinished.</strong> Threepio without coverings. Shmi still enslaved.
            Anakin's promise unkept. Incompleteness is woven into every goodbye.
          </li>
          <li>
            <strong>The Sith Threat Arc.</strong> Probe droid surveillance becomes direct assault in
            one scene transition. Covert observation to open attack: the dark side reveals itself in
            stages.
          </li>
          <li>
            <strong>Maternal Love and Sacrifice.</strong> Shmi releases Anakin from strength. It
            costs her everything. She stays enslaved so he can be free. Never repaid.
          </li>
          <li>
            <strong>Grief and Forward Motion.</strong> Anakin cries repeatedly and keeps moving.
            This is the emotional pattern the film plants in him: he cannot process loss cleanly, so
            he keeps moving and carries it unfinished.
          </li>
        </ul>

        <h2>FORESHADOWING INVENTORY</h2>

        <ul className="lrn-list">
          <li>
            Obi-Wan's "pathetic life form" before meeting Anakin: a standing attitude before the
            student has spoken a word
          </li>
          <li>"You may not be accepted by the Council": Council's refusal in the next act</li>

          <li>"Don't look back": Anakin's defining flaw. He cannot stop looking back.</li>
          <li>
            "I have no doubt he knows our destination": Maul's arrival on Naboo, climactic duel
          </li>

          <li>
            "I'm not sure what's going to happen to me. I dunno if I'll ever see you again":
            technically correct, completely tragic
          </li>
          <li>
            Nute's death threat to Bibble: continued Federation atrocities, escalation of the siege
          </li>
        </ul>

        <h2>STRUCTURAL DIAGRAM</h2>

        <viz.DmsCharacterWebSvg C={C} />

        <h2>DARK SIDE ARC</h2>

        <viz.DarkSideTimelineSvg C={C} />
      </>
    ]
  }
}

function coruscantPoliticsContent(C) {
  return {
    sections: [
      <ChapterDivider key="div-coruscantPoliticsContent">
        <h2>Act II.5: Coruscant Politics</h2>
        <p>A vote of no confidence. The Council refuses the boy.</p>
      </ChapterDivider>,
      <>
        <h2>What This Module Covers</h2>
        <p>
          The Coruscant act is the political engine of The Phantom Menace. It explains how Palpatine
          climbs from senator to Supreme Chancellor without doing anything that looks obviously
          wrong.
        </p>
        <p>
          Every major institution in the Republic appears in this module. The Senate buries an
          invasion in procedure. The Jedi Council refuses the most powerful candidate in their
          history. A hero calls a vote that destroys the only legitimate power standing in
          Palpatine's way. And Palpatine smiles.
        </p>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Before reading, predict: when a powerful villain gives a hero good advice, what is the
            simplest dramatic irony the film can create?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The hero follows the advice and achieves the villain's goal for them. Amidala calls
              the vote that removes Valorum. She genuinely wants justice for her people. She gets
              it. Palpatine gets the Chancellorship. Both outcomes are real. This is the module's
              central irony.
            </p>
          </details>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The Coruscant scenes do three things at once. They expose how the Republic's
            institutions have rotted from within. They show Palpatine as a master of using other
            people's genuine motivations as weapons. They plant every theme that will drive the next
            five films.
          </p>
          <p>
            Watch what each character wants. Amidala wants justice. Qui-Gon wants to train Anakin.
            Valorum wants to do the right thing. All of them fail because the game is rigged by the
            one person who controls the board.
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why is Coruscant, a planet that is entirely city, a fitting setting for a module about
            institutional failure? Form your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Coruscant has no nature left. Every surface is built over. It is civilization without
              ground. Lucas uses this as a visual metaphor: a Republic that has consumed everything
              natural in favor of procedure, hierarchy, and politics. When institutions fail on
              Coruscant, there is nowhere organic to fall back to. The setting announces the theme.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Scene Structure</span>
          <p>
            This module covers fourteen scenes across one city-planet. Two Senate sessions. One
            Senate session. Three confrontations with the Jedi Council. One goodbye that reveals a
            disguise. And a landing platform speech about microscopic lifeforms.
          </p>
        </div>
        <viz.PoliticalPowerWeb C={C} />
      </>,

      <>
        <h2>Arrival on Coruscant</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Anakin sees Coruscant for the first time. Amidala is taken immediately to a private
            meeting with Palpatine. What does the separation of these two characters immediately
            signal?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Power works differently at different levels. Anakin and Jar Jar observe the city in
              wonder, they are outside the game. Amidala is immediately pulled into the game by
              Palpatine. The landing platform separates the innocent from the political in a single
              staging choice.
            </p>
          </details>
        </div>
        <p>
          The Naboo ship descends to a platform high above Coruscant's street level. Supreme
          Chancellor Valorum and Senator Palpatine wait below. Obi-Wan and Qui-Gon bow first.
          Amidala steps forward.
        </p>
        <p>
          Palpatine introduces Valorum with perfect formality. Valorum expresses distress and
          announces a special Senate session. Everything looks correct. Everything serves
          Palpatine's plan.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "It is a great gift to see you alive, Your Majesty." (Palpatine). The first words
            Palpatine speaks to Amidala on Coruscant. He frames himself as relieved. He is not.
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Anakin and Jar Jar watch the city in pure wonder. "Wow, it's so huge!" Jar Jar calls the
            Queen's treatment "grossly nice." These two characters are narrating the surface
            appearance of political power: impressive, warm, welcoming.
          </p>
          <p>
            The audience knows what lies beneath. This gap between Anakin's awe and the manipulation
            happening three feet away is a structural choice. Lucas stages the landing platform so
            the viewer holds two truths at once.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "I must speak with the Jedi Council immediately, Your Honor. The situation has become
            more complicated." (Qui-Gon). He already senses the Sith. He separates himself from
            Palpatine's party the moment the ship lands.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Why This Scene Matters Narratively</span>
          <p>
            The arrival scene establishes the power hierarchy of Coruscant and shows how smoothly
            Palpatine operates within it, his manipulation is invisible because it wears perfect
            manners.
          </p>
        </div>
      </>,

      <>
        <h2>Palpatine's Private Briefing</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Palpatine gets Amidala alone. He will diagnose the political situation for her. What do
            you predict he leaves out of his diagnosis?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              He leaves out himself. His diagnosis is accurate about everyone else. The Senate is
              corrupt. Valorum is weak. The courts are slow. Every statement is true. What he
              conceals is that he has engineered all of these conditions and plans to benefit from
              them.
            </p>
          </details>
        </div>
        <p>
          Anakin and Jar Jar wait in the anteroom while Amidala meets Palpatine privately. They
          watch through a window. They cannot hear anything. Palpatine paces.
        </p>
        <p>
          His speech is a political masterwork. Every sentence is accurate. Every sentence serves a
          hidden purpose.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "The Republic is not what it once was. The Senate is full of greedy, squabbling
            delegates who are only looking out for themselves and their home systems. There is no
            interest in the common good...no civility, only politics. It is disgusting." (Palpatine)
          </p>
        </div>
        <p>
          He diagnoses Valorum next. Accused of corruption. Powerless. Afraid. "The bureaucrats are
          in charge now."
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Our best choice would be to push for the election of a stronger Supreme Chancellor. One
            who will take control of the bureaucrats, enforce the laws, and give us justice. You
            could call for a vote of no confidence in Chancellor Valorum." (Palpatine)
          </p>
        </div>
        <p>
          Amidala pushes back. Valorum is their strongest supporter. Is there another way? Palpatine
          offers the courts, then immediately dismisses them as too slow. He ends with a declaration
          of defeat: "To be realistic, Your Highness, I'd say we're going to have to accept
          Federation control for the time being."
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does Palpatine end with apparent resignation instead of pushing harder for the no-
            confidence vote? What does this reveal about his manipulation technique?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              He has already made the no-confidence vote feel like the only real option. By
              appearing to give up, he guarantees Amidala rejects resignation and seizes the
              initiative herself. Her declaration, "There is something I cannot do", is Amidala
              taking ownership of the idea Palpatine planted. He never had to push. He made
              surrender feel unacceptable.
            </p>
          </details>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Palpatine, What He Says</span>
            <p>
              The Senate is broken. Valorum is weak. The courts are too slow. Your only realistic
              option is the vote. But even that may not work.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Palpatine, What He Means</span>
            <p>
              I have broken the Senate. I have manufactured Valorum's weakness. Now use your genuine
              outrage to pull the trigger I cannot pull myself.
            </p>
          </div>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Why This Scene Matters Narratively</span>
          <p>
            This briefing is the pivot of the entire film. Every political event that follows flows
            from Palpatine's ten minutes alone with Amidala.
          </p>
        </div>
      </>,

      <>
        <h2>The Jedi Council: First Session</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Qui-Gon tells the Council he was attacked by a Sith Lord. Ki-Adi-Mundi says the Sith
            have been extinct for a millennium. How do you predict the Council resolves this
            disagreement?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              They do not resolve it. They defer. Yoda says the dark side is hard to see. Mace says
              they will investigate. They acknowledge the possibility without committing to the
              conclusion. The Council cannot accept what Qui-Gon knows without evidence, and the
              evidence is a fight no one else witnessed.
            </p>
          </details>
        </div>
        <p>
          Qui-Gon stands before twelve Jedi in the Council Chambers. He reports his only conclusion:
          the attacker on Tatooine was a Sith Lord.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Impossible! The Sith have been extinct for a millennium." (Ki-Adi-Mundi). The Council's
            first response to evidence of the Sith's return is denial.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Hard to see, the dark side is." (Yoda). He does not say impossible. He names the
            problem precisely: the Sith have hidden themselves in the Force's blind spot.
          </p>
        </div>
        <p>
          After the Sith discussion, Obi-Wan starts to leave. Qui-Gon stays. He reports a vergence
          in the Force, a boy whose midi-chlorian count is higher than any life form he has seen.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "With your permission, my Master. I have encountered a vergence in the Force...A boy.
            His cells have the highest concentration of midi-chlorians I have seen in a life form.
            It is possible he was conceived by the midi-chlorians." (Qui-Gon)
          </p>
        </div>
        <p>
          Mace names the prophecy. "You're referring to the one who will bring balance to the Force.
          You believe it's this boy?" Yoda turns Qui-Gon's denial of assumption back on him: "But
          you do! Revealed your opinion is."
        </p>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Qui-Gon's caution is tactical, not genuine. He says "I don't presume" about the prophecy
            but he has already asked the boy to come to Coruscant and believes completely in what he
            found. Yoda sees through the diplomatic language instantly. The Council grants testing,
            but not training. The gap between those two things is the source of tension for the rest
            of the module.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Why This Scene Matters Narratively</span>
          <p>
            The Council's first session establishes institutional caution versus individual
            certainty, the tension that will define every Qui-Gon scene for the rest of the film.
          </p>
        </div>
      </>,

      <>
        <h2>Anakin Visits Padme</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Anakin goes to say goodbye to Padme before his Jedi testing. What do you think happens
            when the Queen herself appears instead?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Anakin becomes formal and awkward. He is used to Padme as a friend and equal. He has
              never spoken to Amidala as a Queen. The scene lets the audience observe his
              vulnerability and social uncertainty in contrast with the political power surrounding
              him.
            </p>
          </details>
        </div>
        <p>
          Anakin walks nervously down a long hallway to the Queen's quarters. He tells the guard he
          is looking for the handmaiden Padme.
        </p>
        <p>
          Rabe admits him. Anakin asks for Padme. The Queen's voice comes from the next room: "Who
          is it?" She moves into the doorway and studies him. Anakin bows. Takes a peek at her.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "I'm going to the Jedi temple to start my training, I hope. I may not see her
            again...and I just wanted to say goodbye." (Anakin)
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "We will tell her for you. We're sure her heart goes with you." (Amidala as Queen). The
            royal "we" creates distance. Amidala speaks about Padme as though they are separate
            people. Because in this scene, she is maintaining that fiction.
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            What does it mean narratively that Amidala responds as Queen rather than breaking the
            disguise to speak to Anakin as Padme?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              She is choosing the role that protects her people over the connection that would
              comfort Anakin. The separation hurts both of them. The Queen must remain a symbol even
              when a child comes to say goodbye to her friend. The film plants the tension between
              what they owe each other as people and what they owe the roles they have to play.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Why This Scene Matters Narratively</span>
          <p>
            The visit plants the seed of the Anakin-Padme connection while demonstrating the cost of
            Amidala's disguise, closeness she cannot afford to acknowledge.
          </p>
        </div>
      </>,

      <>
        <h2>The Senate Session</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Palpatine whispers to Amidala as her pod floats into the center of the Senate. He warns
            that Valorum will fold under procedural pressure. What do you think Amidala will do if
            Valorum folds?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              She will call the vote. Palpatine has already told her to do this. She comes to the
              Senate ready for the contingency. When Valorum asks her to defer to a commission, she
              has her answer prepared.
            </p>
          </details>
        </div>
        <p>
          The Senate chambers hold thousands. Chancellor Valorum sits elevated in the center. The
          Naboo pod floats in. Palpatine leans to the Queen and whispers his last instructions.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Enter the bureaucrats, the true rulers of the Republic, and on the payroll of the Trade
            Federation, I might add. This is where Chancellor Valorum's strength will disappear."
            (Palpatine, whispering to Amidala)
          </p>
        </div>
        <p>
          Amidala speaks. Lott Dod interrupts immediately. Valorum overrules him. Aks Moe of
          Malastare enters to support the Trade Federation's demand for a commission. Valorum
          confers with aides. He folds.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Queen Amidala of the Naboo, will you defer your motion to allow a commission to explore
            the validity of your accusations?" (Valorum)
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "I will not defer. I have come before you to resolve this attack on our sovereignty now.
            I was not elected to watch my people suffer and die while you discuss this invasion in a
            committee. If this body is not capable of action, I suggest new leadership is needed. I
            move for a vote of no confidence in Chancellor Valorum's leadership." (Amidala)
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Amidala's speech is genuine. Her outrage is real. Her people are dying. The Senate has
            failed the most basic test of governance: to act when confronted with clear harm. She is
            right about everything she says.
          </p>
          <p>
            She is also doing exactly what Palpatine needs. The film does not make her wrong. It
            makes her situation tragic: her correct action produces the villain's desired outcome.
            This is the module's sharpest dramatic irony.
          </p>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Amidala's Intent</span>
            <p>
              Remove a Chancellor who cannot protect her people. Replace him with someone stronger.
              Get justice for Naboo. Her people are dying.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Palpatine's Result</span>
            <p>
              Remove the one legitimate authority who might complicate his ascent. Trigger an
              election he has already arranged to win. No fingerprints.
            </p>
          </div>
        </div>
        <p>
          Bail Organa of Alderaan seconds the motion. The assembly chants: "Vote now! Vote now!"
          Valorum stands speechless. He turns to Palpatine.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Palpatine, I thought you were my ally...my friend. You have betrayed me! How could you
            do this?" (Valorum)
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Valorum accuses Palpatine of betrayal to his face. Palpatine does not deny it. What does
            this moment reveal about Palpatine's confidence in his position?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              He does not need to deny it anymore. Valorum is already finished. The vote is called.
              The session is in recess. There is no institutional remedy available to Valorum.
              Palpatine's silence is the silence of someone who has already won. The accusation
              cannot hurt him. He simply does not respond.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Why This Scene Matters Narratively</span>
          <p>
            The Senate session is the centerpiece of Palpatine's rise, it shows democracy being
            weaponized by a man whose genuine victims voluntarily destroy their own protector.
          </p>
        </div>
      </>,

      <>
        <h2>The Jedi Balcony and Anakin's Testing</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Obi-Wan and Qui-Gon argue on the balcony. Obi-Wan says Anakin will not pass the tests.
            What do you think Obi-Wan's real fear is about Anakin?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Displacement. Obi-Wan is close to finishing his own training and earning a Council
              seat. Anakin arriving changes everything: Qui-Gon's attention, the Council's
              priorities, the timeline of Obi-Wan's progress. He frames his objection as concern for
              the rules. His actual motivation is competitive fear.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Don't defy the Council, Master...not again." / "I will do what I must." / "Master, you
            could be sitting on the Council by now if you would just follow the code. They will not
            go along with you this time." (Obi-Wan and Qui-Gon, balcony)
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            "Not again" is load-bearing. It tells us this is a pattern, not an isolated
            disagreement. Qui-Gon has a history of defying the Council. He is not impulsive, he is
            consistently willing to act on what he knows is right over what the institution demands.
            Obi-Wan is telling us Qui-Gon has paid a price for this before.
          </p>
        </div>
        <p>
          In the Council Chambers, Anakin stands before the twelve Jedi. Mace holds a small viewing
          screen. Images flash. Anakin identifies them.
        </p>
        <p>
          Then the emotional probing begins. Yoda asks how Anakin feels. Cold, he says. Afraid? No,
          sir. Afraid to give up your life? "I don't think so."
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Your thoughts dwell on your mother." (Ki-Adi-Mundi). He reads this in Anakin's mind
            before Anakin admits it.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads
            to suffering." (Yoda)
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Yoda's fear chain, fear → anger → hate → suffering, is one of the most quoted lines in
            the film. Why does Lucas place it here, addressed to Anakin specifically, in this
            testing scene?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              It is a diagnosis. Yoda describes what he senses in Anakin right now: fear of losing
              his mother, fear of losing the only training that might give him a future. The formula
              is spoken once and hangs over every scene after it.
            </p>
          </details>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Anakin's Wonder</span>
            <p>
              He arrives open. He says "Wow" at Coruscant. He bows before the Queen. He asks about
              midi-chlorians with genuine curiosity. He wants to be a Jedi.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Council's Reading of Fear</span>
            <p>
              They see beneath the wonder. They read the attachment to his mother. They see the
              potential for the chain Yoda names. They are not wrong about the danger. They are
              wrong about the solution.
            </p>
          </div>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Why This Scene Matters Narratively</span>
        </div>
      </>,

      <>
        <h2>Jar Jar, Amidala, and Palpatine's Nomination</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Jar Jar asks Amidala why the gods invented pain. She says to motivate us. Jar Jar then
            mentions that Gungans have a grand army. Why is this offhand remark dramatically
            significant?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              It plants the solution to the final act. Amidala has no military power. She has no
              plan for retaking Naboo. Jar Jar just told her, without knowing it, that an army
              exists on her own planet. The conversation sounds like idle talk.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Gungans do die'n without a fight. Wesa warriors. Wesa gotta grand army. Dat why you no
            liken us, metinks." (Jar Jar Binks)
          </p>
        </div>
        <p>
          Captain Panaka and Palpatine rush in. Palpatine has been nominated as Chancellor
          candidate. He delivers a speech about democracy, corruption, and freedom.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "A surprise, to be sure, but a welcome one. I promise, Your Majesty, if I am elected, I
            will bring democracy back to the Republic. I will put an end to corruption. The Trade
            Federation will lose its influence over the bureaucrats, and our people will be freed."
            (Palpatine). Every word a lie. Every commitment the opposite of his intentions.
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Palpatine's nomination speech is the clearest moment of dramatic irony in the module. He
            promises democracy. The film has already shown him engineering the crisis. He promises
            to end corruption. He is the corruption. He promises to free Naboo from the Trade
            Federation. He controls the Trade Federation.
          </p>
          <p>
            Every promise is the precise inverse of what the audience has watched him do. Amidala
            hears it and decides to leave for Naboo.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "I fear by the time you have control of the bureaucrats, Senator, there will be nothing
            left of our cities, our people, our way of life." (Amidala). She breaks with Palpatine
            here. She is done waiting.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "I have decided to go back to Naboo. My place is with my people." (Amidala). This is the
            moment the political arc ends and the action arc begins. She rejects Palpatine's
            protection. She chooses solidarity over safety.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "It is clear to me now that the Republic no longer functions as a democracy." (Amidala).
            She names the same structural failure Palpatine diagnosed. She reaches the same
            conclusion for opposite reasons.
          </p>
        </div>
        <p>
          Amidala and her retinue exit. The screenplay gives Palpatine one final stage direction:
          "Palpatine has a self-satisfied smile on his face."
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Lucas describes Palpatine's smile as "self-satisfied" in the stage direction. Why choose
            this moment to let Palpatine's mask slip? What has he just secured?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Everything. Valorum is gone. He is nominated as Chancellor. Amidala is returning to
              Naboo, which will give him a continuing crisis to exploit. The Jedi are following her.
              The board is set. The smile is the moment the audience finally sees the architect, not
              the ally. Lucas holds it back until this exact moment when the plan is complete.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Why This Scene Matters Narratively</span>
          <p>
            Palpatine's self-satisfied smile is the module's decisive reveal, the mask drops once
            and then resets, but the audience now carries that knowledge through every scene that
            follows.
          </p>
        </div>
      </>,

      <>
        <h2>The Jedi Council: Second Session</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The Council confirms Anakin's midi-chlorian count is real and the Force is strong with
            him. Then they refuse to train him. What reason do they give?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Age and anger. He is too old. There is already too much anger in him. The Council can
              see the raw power. They judge the emotional risk as greater than the potential
              benefit. This judgment will shape the next fifty years of galactic history.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "His cells contain a high concentration of midi-chlorians." / "The Force is strong with
            him." / "He will not be trained." (Mace Windu, Ki-Adi-Mundi, Mace again)
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "He is too old. There is already too much anger in him." (Mace Windu). They know. They
            still refuse. The knowledge makes the refusal more costly.
          </p>
        </div>
        <p>
          Qui-Gon responds with a declaration. "He is the chosen one. You must see it." The Council
          refuses again. Qui-Gon announces he will train Anakin himself. He takes Anakin as his
          Padawan learner.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "I will train him, then. I take Anakin as my Padawan learner." (Qui-Gon). He does not
            ask. He declares.
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "An apprentice you have, Qui-Gon. Impossible, to take on a second." / "We forbid it."
            (Yoda and Mace)
          </p>
        </div>
        <p>
          Qui-Gon offers Obi-Wan: he is ready to face the trials. Yoda turns on Obi-Wan instead.
          "Ready so early, are you? What know you of ready?" Obi-Wan's ambition is deflated in the
          same breath Qui-Gon used to try to advance it.
        </p>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Jedi Council</span>
            <p>
              Institutional caution. They follow age rules. They read emotional risk. They assign
              missions by strategic need. They will not be moved by prophecy alone.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Qui-Gon Jinn</span>
            <p>
              Individual certainty. He found Anakin. He tested Anakin. He knows what he knows. No
              institutional rule supersedes direct knowledge of the Force's will.
            </p>
          </div>
        </div>
        <p>
          The Council resolves the standoff by compromise. Anakin is Qui-Gon's ward, not his
          Padawan. He travels to Naboo. He is not to be trained. "Train him not. Take him with you,
          but train him not!"
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            The Council knows Anakin is the most powerful Force-sensitive they have ever confirmed.
            They still refuse to train him. Is this good institutional judgment, bad judgment, or
            something more complicated?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              More complicated. Their caution is legitimate, Anakin does carry fear, and fear does
              lead where Yoda names. But the refusal does not remove the power. It leaves the most
              powerful Force-sensitive in history untrained, uncertain, and in the custody of the
              one man determined to train him anyway. The Council chooses to wait for more
              information. Anakin's training falls to Obi-Wan under grief and urgency rather than
              wisdom. The refusal creates exactly the conditions it was trying to prevent.
            </p>
          </details>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Why This Scene Matters Narratively</span>
          <p>
            The Council's refusal is the institutional decision that sets up Anakin's entire tragic
            arc, not by being wrong exactly, but by creating the conditions where a better outcome
            becomes impossible.
          </p>
        </div>
      </>,

      <>
        <h2>Midi-chlorians and Departure</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Anakin asks Qui-Gon what midi-chlorians are. Qui-Gon is not allowed to train him. How
            does Qui-Gon answer without violating the Council's prohibition?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              He explains. He does not call it training. He calls it explaining what midi-chlorians
              are. The line between training and explaining is exactly where Qui-Gon operates. His
              final instruction, "your focus determines your reality", is both practical advice and
              a Jedi teaching. He trains Anakin by other names.
            </p>
          </details>
        </div>
        <p>
          On the landing platform at night, R2-D2 nearly falls off the edge and rockets himself back
          up. Obi-Wan and Qui-Gon are still arguing. Anakin listens.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "The boy is dangerous. They all sense it. Why can't you?" (Obi-Wan) / "His fate is
            uncertain, not dangerous." (Qui-Gon)
          </p>
        </div>
        <p>
          Qui-Gon goes to Anakin. He tells him: "I'm not allowed to train you, so I want you to
          watch me and be mindful. Always remember: your focus determines your reality. Stay close
          to me and you will be safe."
        </p>
        <p>Anakin asks about midi-chlorians. Qui-Gon answers carefully and completely.</p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "Midi-chlorians are a microscopic lifeform that reside within all living cells and
            communicates with the Force." (Qui-Gon)
          </p>
        </div>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>
            "We are symbionts with the midi-chlorians. Life forms living together for mutual
            advantage. Without the midi-chlorians, life could not exist, and we would have no
            knowledge of the Force. They continually speak to you, telling you the will of the
            Force." (Qui-Gon)
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The midi-chlorian explanation is one of the most debated additions to Star Wars lore. It
            gives the Force a biological basis, which makes it measurable and, in principle,
            democratic, everyone has them, just in different concentrations.
          </p>
          <p>
            But this also makes Anakin's power a function of biology, not choice. The Force chose
            him. He did not earn it. The tension between destiny and decision is introduced here and
            the film never fully resolves it. Lucas plants the problem of determinism in an
            explanation about cells.
          </p>
        </div>
        <p>
          Amidala and her group arrive. She welcomes Jedi protection. Qui-Gon promises he will not
          let the Federation destroy her. Jar Jar hugs everyone.
        </p>
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Key Quote</span>
          <p>"Wesa goen home!" (Jar Jar Binks). The last line of the Coruscant arc.</p>
        </div>
        <viz.CoruscantModuleTimeline C={C} />
        <div className="lrn-callout lrn-insight">
          <span className="lrn-callout-label">Why This Scene Matters Narratively</span>
          <p>
            The landing platform closes every open thread from the Coruscant act: Anakin's status,
            the Jedi's mission, Amidala's decision, and the nature of the Force itself, all resolved
            in a night scene before departure.
          </p>
        </div>
      </>,

      <>
        <h2>Themes and Craft</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Before reading the formal themes, name one thing in this module that would still work as
            a story if you removed all the science fiction. What does the module argue that is
            purely about people and institutions?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Capable people serving a villain's purpose because the villain diagnoses their genuine
              grievances. This works in any political context. The disguise does not change the
              core: a manipulator gives a leader accurate bad news, frames the only exit, and waits
              for them to act on their own outrage.
            </p>
          </details>
        </div>
        <h3>Core Themes</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">MANIPULATION VS. LEGITIMATE GOVERNANCE</span>
          <div className="lrn-definition-desc">
            <p>
              Palpatine engineers every outcome while appearing to serve Amidala's genuine
              interests. His advice is accurate. His purpose is hidden. The difference between
              counsel and manipulation here is motive, identical surface, opposite intent.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">FEAR AS THE ROOT OF THE DARK SIDE</span>
          <div className="lrn-definition-desc">
            <p>
              Yoda's chain, fear → anger → hate → suffering, is stated once, to Anakin, in this
              module. The remaining five films enact it without restating it.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">INSTITUTIONAL FAILURE</span>
          <div className="lrn-definition-desc">
            <p>
              The Senate buries an invasion in procedure. The Jedi Council refuses to train the
              Chosen One. Valorum is stripped of power he wielded honestly. Every institution in
              this module fails the people it was built to protect.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DUTY OVER SAFETY</span>
          <div className="lrn-definition-desc">
            <p>
              Amidala rejects Palpatine's protection and returns to Naboo. Her people are dying. Her
              duty to them overrides every argument for personal safety. This choice drives the
              final act.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DEMOCRACY WEAPONIZED</span>
          <div className="lrn-definition-desc">
            <p>
              The vote of no confidence is the Republic's own tool. Palpatine uses legitimate
              procedure to destroy legitimate governance. The mechanism that should protect
              democracy becomes the mechanism of its corruption.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DESTINY AND THE CHOSEN ONE</span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon invokes prophecy. The Council debates whether to trust it. Midi-chlorians make
              destiny measurable. The film never resolves whether Anakin's path is chosen or fated.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            INDIVIDUAL CERTAINTY VS. INSTITUTIONAL CAUTION
          </span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon knows what he knows. The Council requires more. This pattern repeats: Council
              doubts the Sith, Qui-Gon is certain. Council refuses Anakin, Qui-Gon defies them.
              Individual intuition versus collective procedure is the Jedi thread of the entire
              module.
            </p>
          </div>
        </div>
        <h3>Dramatic Techniques</h3>
        <div className="lrn-definition">
          <span className="lrn-definition-term">DRAMATIC IRONY: STRUCTURAL</span>
          <div className="lrn-definition-desc">
            <p>
              Every scene where a character trusts him becomes ironic. Every scene where a character
              acts on his advice becomes tragic. The module is built on the gap between what
              characters know and what we know.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">THE MASK-SLIP</span>
          <div className="lrn-definition-desc">
            <p>
              Lucas gives Palpatine one moment where the mask drops, the self-satisfied smile after
              Amidala leaves. It is a stage direction in the screenplay and a single shot in the
              film. Everything around it is perfect composure. The slip is deliberate and brief.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">PARALLEL POLITICAL THREADS</span>
          <div className="lrn-definition-desc">
            <p>
              The Senate thread and the Jedi thread run simultaneously on Coruscant. Both concern
              power, legitimacy, and the failure of institutions. Both reach their climax in
              refusal: the Senate refuses to act without a commission, the Jedi Council refuses to
              train Anakin. Lucas cross-cuts between them to build cumulative pressure.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">THE PLANTED SOLUTION</span>
          <div className="lrn-definition-desc">
            <p>
              Jar Jar's mention of the Gungan army in a grief conversation is the film's quietest
              plant. It goes by in seconds. The final act of the film depends on it. Comic
              characters carrying critical information is a technique borrowed from classical drama.
            </p>
          </div>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does Lucas need both the Senate thread and the Jedi thread to fail in this module?
            What does their parallel failure achieve?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              It removes all institutional backup. If the Senate had acted, Naboo would have been
              protected. If the Jedi had trained Anakin, the Chosen One would have had proper
              grounding. Both failures together leave Amidala as the only functional decision-
              maker, a twenty-something queen against a galactic conspiracy. Her decision to return
              home is not heroic despite institutional failure. It is heroic because institutional
              failure leaves her with no alternative authority to defer to. The parallel failures
              are the engine of her agency.
            </p>
          </details>
        </div>
      </>
    ],
    practice: [
      {
        id: 'cpl-001',
        q: 'What does Palpatine tell Amidala about Chancellor Valorum in their private meeting?',
        a: "He says Valorum has little real power, that a manufactured scandal surrounds him, and that the bureaucrats are now in charge. He describes the Senate as full of greedy, squabbling delegates with no interest in the common good. Every claim is accurate. Every claim serves Palpatine's hidden goal of removing Valorum."
      },
      {
        id: 'cpl-002',
        q: 'What option does Palpatine propose to Amidala, and how does he make it feel inevitable?',
        a: 'He proposes a vote of no confidence in Chancellor Valorum. He makes it feel inevitable by dismissing every alternative: the courts are too slow, Valorum is too weak, and Federation control is the only realistic outcome if she does nothing. By appearing to resign himself to defeat, he guarantees Amidala seizes the initiative herself. She owns the idea because he made surrender feel unacceptable.'
      },
      {
        id: 'cpl-003',
        q: 'What does the Jedi Council say when Qui-Gon reports he was attacked by a Sith Lord?',
        a: "Ki-Adi-Mundi says it is impossible, the Sith have been extinct for a millennium. Mace Windu says he does not believe they could have returned without the Jedi knowing. Yoda says the dark side is hard to see and they must discover the attacker's identity. The Council is skeptical but not dismissive. They investigate rather than accept Qui-Gon's conclusion outright."
      },
      {
        id: 'cpl-004',
        q: 'Why does Qui-Gon present Anakin to the Council after the Sith discussion?',
        a: 'He believes Anakin is a vergence in the Force, a boy whose cells contain the highest midi-chlorian count he has ever seen in any life form. Qui-Gon believes Anakin may have been conceived by the midi-chlorians. He requests testing. He does not explicitly claim the prophecy of the Chosen One, but Yoda sees through his diplomatic caution and names his belief anyway.'
      },
      {
        id: 'cpl-005',
        q: "What happens when Anakin goes to Palpatine's quarters to see Padme?",
        a: 'Padme is not there. The Queen comes to the doorway instead. Anakin says he is going to the Jedi Temple and may not see Padme again, so he came to say goodbye. Amidala responds as Queen, formally, using the royal "we", and tells him Padme\'s heart goes with him. She maintains her disguise rather than breaking it to speak to Anakin as a friend. The separation costs both of them.'
      },
      {
        id: 'cpl-006',
        q: 'What is the vote of no confidence, and why does it succeed in the Senate?',
        a: 'It is a democratic mechanism to remove a leader from power. It succeeds because Valorum folds under procedural pressure from Lott Dod and Aks Moe, who demand a commission instead of immediate action. When Valorum asks Amidala to defer, she refuses and moves the vote. Bail Organa seconds it. The assembly chants "vote now." Valorum is stripped of authority in a single session. The mechanism of legitimate democracy is used as the weapon of its destruction.'
      },
      {
        id: 'cpl-007',
        q: 'What does Valorum say to Palpatine after the vote of no confidence is called?',
        a: '"Palpatine, I thought you were my ally...my friend. You have betrayed me! How could you do this?" Palpatine does not deny it. He does not need to. The vote is already called. Valorum is finished. Palpatine\'s silence is the silence of someone who has already won. The accusation cannot hurt him because the institutional mechanism he used is legitimate, even if his intent was not.'
      },
      {
        id: 'cpl-008',
        q: "What is Yoda's fear chain, and why does Lucas place it in Anakin's testing scene?",
        a: '"Fear leads to anger. Anger leads to hate. Hate leads to suffering." Yoda says it as a diagnosis of what he sees in Anakin right now. For viewers of the full saga, it is also a prophecy: Anakin fears losing his mother, grows angry at her death, hates those he blames, and causes suffering on a galactic scale.'
      },
      {
        id: 'cpl-009',
        q: 'Why does the Jedi Council refuse to train Anakin even after confirming his midi-chlorian count?',
        a: 'Mace Windu cites two reasons: he is too old, and there is already too much anger in him. The Council can see the raw power. They judge the emotional risk as greater than the potential benefit. Their caution is institutionally legitimate, Anakin does carry fear, and fear does lead where Yoda named. But the refusal does not remove the power. It leaves the most powerful Force-sensitive in history untrained and sets up the conditions it was trying to prevent.'
      },
      {
        id: 'cpl-010',
        q: 'What does Qui-Gon do when the Council refuses to train Anakin?',
        a: 'He declares he will train Anakin himself: "I take Anakin as my Padawan learner." He does not ask. He does not petition. He states it. The Council forbids it. Qui-Gon offers Obi-Wan as a counterargument, Obi-Wan is ready for the trials, but Yoda deflates this immediately. The compromise is that Anakin travels to Naboo as Qui-Gon\'s ward, not his Padawan. Training is forbidden. Qui-Gon begins teaching him by other names on the landing platform that same night.'
      },
      {
        id: 'cpl-011',
        q: 'What does Palpatine promise when he is nominated as Chancellor candidate?',
        a: "He promises to bring democracy back to the Republic, end corruption, remove Trade Federation influence over the bureaucrats, and free Naboo. Every promise is the precise inverse of what the audience has watched him do. He engineered the crisis whose solution he now offers. He uses the Trade Federation as his own tool. The speech is the module's clearest moment of dramatic irony, the audience watches him say it and knows every word inverts his actions."
      },
      {
        id: 'cpl-012',
        q: 'What does Amidala say when she decides to return to Naboo, and why does it matter?',
        a: '"I have decided to go back to Naboo. My place is with my people." She also declares: "It is clear to me now that the Republic no longer functions as a democracy." She rejects Palpatine\'s protection. She chooses her people over personal safety. The decision is the moral center of the module: genuine duty in contrast to Palpatine\'s self-interest. She arrives at the same conclusion about the Republic\'s failure that Palpatine diagnosed, for entirely opposite reasons.'
      },
      {
        id: 'cpl-013',
        q: 'What does Qui-Gon tell Anakin on the landing platform about midi-chlorians?',
        a: 'He says midi-chlorians are microscopic lifeforms that reside in all living cells and communicate with the Force. They are symbionts, lifeforms living together for mutual advantage. Without them, life could not exist and we would have no knowledge of the Force. They continually speak to you, telling you the will of the Force. When you learn to quiet your mind, you will hear them. He ends: "With time and training, Annie, you will."'
      },
      {
        id: 'cpl-014',
        q: 'What dramatic irony does the audience hold throughout the entire Coruscant module?',
        a: 'Every scene where a character trusts him becomes ironic. Every scene where a character acts on his advice becomes tragic. Amidala calls the vote that destroys her own protector because the man who advised her is the one who needed that protector removed. The gap between what characters know and what we know is the engine of every scene.'
      },
      {
        id: 'cpl-015',
        q: 'What offhand remark does Jar Jar make that plants the solution to the final act?',
        a: 'He tells Amidala that Gungans do not die without a fight, that they are warriors with a grand army. He says this as a throwaway remark in a grief conversation about pain. Amidala has no military force. Jar Jar just told her, without knowing it, that an army exists on her own planet.'
      },
      {
        id: 'cpl-016',
        q: "How does Obi-Wan's disagreement with Qui-Gon reveal his own limitations on the balcony?",
        a: 'He says Anakin will not pass the tests and is too old. He also reveals his own ambition: "You could be sitting on the Council by now if you would just follow the code." He frames his concern as respect for the rules, but his actual stake is competitive, Anakin arriving changes Qui-Gon\'s attention and Obi-Wan\'s timeline to a Council seat. His objection is not only principled. It is also self-interested.'
      },
      {
        id: 'cpl-017',
        q: 'Character analysis: Why does Qui-Gon defy the Council rather than accept their decision?',
        a: "Because he has direct knowledge from the Force that Anakin is the Chosen One, and no institutional rule supersedes direct knowledge of the Force's will, for Qui-Gon. This is not recklessness. It is his consistent philosophy across the entire film: individual intuition about the living Force over collective procedure. He did not ask permission to save Anakin on Tatooine. He does not ask permission to train him on Coruscant. His certainty is the measure of what he believes the Force is."
      },
      {
        id: 'cpl-018',
        q: 'Theme analysis: What does the vote of no confidence represent thematically in the film?',
        a: "Democracy weaponized against itself. The vote is the Republic's own mechanism. It is legitimate. It is used for entirely illegitimate purposes. Palpatine does not seize power by force in this film. He uses the tools of the very institutions he is destroying. This is Lucas's political argument: systems corrupt from within when someone controls the information flowing to the decision-makers. The hero pulls the trigger because the villain arranged the gun."
      },
      {
        id: 'cpl-019',
        q: "Dramatic irony: What does the audience know about Palpatine's nomination speech that Amidala does not?",
        a: 'Every promise is the precise inverse of his plans. Amidala hears a candidate she can trust. The audience watches a villain claim the prize he spent the entire film engineering.'
      },
      {
        id: 'cpl-020',
        q: "Transfer: How does Palpatine's manipulation of Amidala mirror a pattern in real political history?",
        a: "Look for moments where a figure advises a leader to take an action that serves the advisor's hidden interest. The technique is the same: diagnose a genuine grievance accurately, remove all alternatives, make inaction feel unconscionable, and wait for the target's own outrage to do the work. The manipulation works because the advice is true and the grievance is real. Amidala is not wrong to distrust Valorum or to want stronger leadership. She is simply not in possession of all the information. This pattern appears in historical propaganda, palace politics, and corporate maneuvering wherever advisors have information asymmetry over decision-makers."
      },
      {
        id: 'cpl-021',
        q: '',
        a: "Qui-Gon is the only one who believes in training Anakin and is willing to defy the Council to do it. If he dies, the training falls to Obi-Wan, who opposed it, is fresh from his own trials, and will be in grief. The Council will have to reverse its refusal or watch Anakin remain untrained. Either outcome removes the wisdom and certainty that Qui-Gon would have brought to Anakin's formation. The conditions Yoda named, fear, anger, attachment, will be harder to address under those circumstances."
      },
      {
        id: 'cpl-022',
        q: "Self-explain: Why does the Council's refusal to train Anakin make things worse, not better?",
        a: "Their refusal is meant to protect against the risks they see in Anakin: age, anger, attachment. But the refusal does not remove those risks. It removes the structured environment that could address them. The most powerful Force-sensitive in history remains in the galaxy, in Qui-Gon's care, heading toward battle. The Council's caution leaves the same risks in place without any institutional answer."
      },
      {
        id: 'cpl-023',
        q: 'What is the significance of Palpatine\'s "self-satisfied smile" at the end of the nomination scene?',
        a: "It is the only moment in the module where Palpatine's mask slips. Every other scene presents him as a worried ally, a helpful senator, a surprised nominee. The smile, visible only after Amidala leaves, shows the audience the architect beneath the performance. Lucas withholds it until the plan is complete: Valorum is gone, the nomination is secured, Amidala is departing for Naboo. There is nothing left to perform. The smile is brief, deliberate, and the most honest moment Palpatine has in the film."
      },
      {
        id: 'cpl-024',
        q: "What does Amidala's disguise as Padme cost her in the farewell scene with Anakin?",
        a: 'She cannot speak to him as a friend. He came to say goodbye to someone he cares about. She responds as a symbol, using the formal royal "we," and tells him Padme\'s heart goes with him, describing herself in the third person. The disguise forces her to accept separation without acknowledgment.'
      },
      {
        id: 'cpl-025',
        q: 'Elaborate: Why is Coruscant as a setting, a planet entirely covered by city, a meaningful choice for this module?',
        a: 'Lucas uses Coruscant as a visual argument about civilization. A planet with no nature left has consumed everything organic in favor of built systems. Every surface is procedure, hierarchy, and infrastructure. When institutions fail on Coruscant, there is no natural ground to fall back to. The setting announces the theme before a single character speaks: the Republic has grown so large and so procedural that it no longer serves the living things inside it. The planet is what the Senate is, impressive, total, and hollow.'
      }
    ],
    referenceSections: [
      <>
        <h2>Scene Index</h2>
        <ol className="lrn-list">
          <li>
            <strong>Senate Landing Platform, Arrival:</strong> Amidala greeted by Valorum and
            Palpatine. Anakin and Jar Jar watch the city. Qui-Gon separates to request Council
            meeting.
          </li>
          <li>
            <strong>Palpatine's Quarters, Private Briefing:</strong> Palpatine diagnoses Senate
            corruption and Valorum's weakness. Proposes vote of no confidence. Amidala resists;
            Palpatine appears to resign.
          </li>
          <li>
            <strong>Jedi Council Chambers, First Session:</strong> Qui-Gon reports Sith. Council
            skeptical. Qui-Gon presents Anakin as vergence in the Force. Council grants testing.
          </li>
          <li>
            <strong>Queen's Quarters, Farewell Visit:</strong> Anakin asks for Padme. Amidala
            appears as Queen. Formal goodbye. Padme's disguise maintained.
          </li>
          <li>
            <strong>Galactic Senate, Main Session:</strong> Palpatine whispers final instructions.
            Lott Dod and Aks Moe obstruct. Valorum folds. Amidala calls vote of no confidence.
            Valorum destroyed. Valorum confronts Palpatine.
          </li>
          <li>
            <strong>Jedi Temple Balcony, Sunset:</strong> Obi-Wan warns Qui-Gon about defying
            Council. Qui-Gon: "I will do what I must."
          </li>
          <li>
            <strong>Jedi Council Chambers, Testing:</strong> Image identification test. Emotional
            probing on fear and mother. Yoda's fear chain. Anakin denies fear twice.
          </li>
          <li>
            <strong>Palpatine's Quarters, Sunset:</strong> Jar Jar mentions Gungan army. Panaka
            reports Palpatine's nomination. Amidala decides to return to Naboo. Palpatine's mask
            slips: self-satisfied smile.
          </li>
          <li>
            <strong>Jedi Council Chambers, Second Session:</strong> Midi-chlorians confirmed.
            Council refuses training. Qui-Gon claims Anakin as Padawan. Council forbids it. Mission
            to Naboo assigned.
          </li>
          <li>
            <strong>Senate Landing Platform, Night:</strong> Obi-Wan and Qui-Gon argue. Qui-Gon
            explains midi-chlorians to Anakin. Group boards ship. Departure.
          </li>
        </ol>
      </>,

      <>
        <h2>Key Quotes</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "The Republic is not what it once was. The Senate is full of greedy, squabbling
            delegates...There is no interest in the common good...no civility, only politics."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Palpatine, private briefing. Accurate diagnosis. Hidden purpose: manufacture consent
              for the no-confidence vote.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Our best choice would be to push for the election of a stronger Supreme Chancellor. You
            could call for a vote of no confidence in Chancellor Valorum."
          </span>
          <div className="lrn-definition-desc">
            <p>Palpatine, private briefing. The pivot of the entire film's political arc.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "I will not defer. I was not elected to watch my people suffer and die while you discuss
            this invasion in a committee."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Amidala, Senate floor. The no-confidence speech. Genuine outrage. Palpatine's desired
              outcome.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Palpatine, I thought you were my ally...my friend. You have betrayed me! How could you
            do this?"
          </span>
          <div className="lrn-definition-desc">
            <p>
              Valorum, Senate chambers. Confirmation to the audience. Palpatine does not deny it.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads
            to suffering."
          </span>
          <div className="lrn-definition-desc">
            <p>Yoda, Council Chambers. Addressed directly to Anakin.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "I will train him, then. I take Anakin as my Padawan learner."
          </span>
          <div className="lrn-definition-desc">
            <p>Qui-Gon, Council Chambers. Declaration, not request. The Council forbids it.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "I have decided to go back to Naboo. My place is with my people."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Amidala. The moral center of the module. Genuine duty over personal safety. Sets up
              the final act.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "It is clear to me now that the Republic no longer functions as a democracy."
          </span>
          <div className="lrn-definition-desc">
            <p>Amidala. Same conclusion as Palpatine's diagnosis, reached for opposite reasons.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Midi-chlorians are a microscopic lifeform that reside within all living cells and
            communicates with the Force."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon, landing platform. The Force explained biologically. Destiny made measurable.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            "Your focus determines your reality. Stay close to me and you will be safe."
          </span>
          <div className="lrn-definition-desc">
            <p>
              Qui-Gon to Anakin, landing platform. Training delivered as advice. The Council's
              prohibition technically honored and effectively bypassed.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">"Wesa goen home!" (Jar Jar Binks)</span>
          <div className="lrn-definition-desc">
            <p>Last line of the Coruscant arc. Closing the political act with the comic voice.</p>
          </div>
        </div>
      </>,

      <>
        <h2>Key Themes, Quick Reference</h2>
        <ul className="lrn-list">
          <li>
            <strong>Manipulation vs. legitimate governance</strong>: Palpatine gives accurate advice
            for hidden purposes. Identical surface, opposite intent.
          </li>

          <li>
            <strong>Institutional failure</strong>: Senate, Jedi Council, and Chancellorship all
            fail in a single module.
          </li>
          <li>
            <strong>Duty over safety</strong>: Amidala returns to Naboo. Her people over her
            protection.
          </li>
          <li>
            <strong>Democracy weaponized</strong>: The vote of no confidence: legitimate mechanism,
            illegitimate purpose.
          </li>
          <li>
            <strong>Individual certainty vs. institutional caution</strong>: Qui-Gon's conviction
            against the Council's rules. Repeated on every Jedi question.
          </li>
          <li>
            Every trust scene is tragic. Every acted-upon advice is unwitting service to the
            villain.
          </li>
          <li>
            <strong>The planted solution</strong>: Jar Jar mentions the Gungan army in a grief
            conversation. The final act depends on it.
          </li>
        </ul>
      </>
    ]
  }
}

function returnAndBattleOfNabooContent(C) {
  return {
    sections: [
      <ChapterDivider key="div-rban">
        <h2>Act III: Return and Battle of Naboo</h2>
        <p>Three fronts converge. Obi-Wan promises.</p>
      </ChapterDivider>,
      <>
        <div className="lrn-section">
          <h2>Overview: The Final Act</h2>
          <p>
            Look for this when studying how a screenplay runs parallel storylines. Four separate
            battles unfold at the same time. Each depends on the others. One child in a stolen
            fighter decides the outcome for everyone.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Padme needs an army but has no allies. She travels to Naboo with a few Jedi, a handful
              of soldiers, and Jar Jar Binks. What do you think she will do?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                She asks the Gungans, the underwater civilization her people ignored for
                generations. To get their help, she drops her disguise and kneels before their
                leader. A queen begs. That act of humility unlocks the alliance.
              </p>
            </details>
          </div>
          <p>
            Darth Sidious opens the module by ordering the Queen destroyed. The villain locks in his
            plan before the heroes even land. The audience knows the stakes before the characters
            do.
          </p>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>"When she gets there, destroy her." Darth Sidious.</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the screenplay show Sidious giving this order before Padme even arrives? What
              does opening with the villain's plan do for the audience?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                It creates dramatic irony. We know Padme is heading into a death trap. She does not.
                Every scene of her planning and hoping becomes tense because we carry that
                knowledge. The audience is ahead of the hero.
              </p>
              <p>
                It also establishes the villain's coldness early. Sidious treats the Queen as a
                problem to delete, not a person to fight. That emotional distance makes him more
                frightening.
              </p>
            </details>
          </div>

          <viz.BattleMap C={C} />
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>Padme Reveals Herself to Boss Nass</h2>
          <p>
            Look for this when studying identity, power, and diplomacy. The decoy ruse has protected
            Padme all film. She drops it here for strategic reasons.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Padme needs the Gungans. Boss Nass hates the Naboo. He has already refused "Queen
              Amidala." What do you think she can possibly say to change his mind?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                She stops being the Queen. She admits the decoy ruse, introduces Sabe as the decoy,
                and then kneels on the ground. She removes rank entirely. You cannot hate someone
                who is prostrating themselves before you.
              </p>
            </details>
          </div>
          <p>
            Padme steps forward and says: "I am Queen Amidala. This is my decoy." She gives back the
            identity she hid. Then she kneels.
          </p>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>
              "I beg you to help us. We are your humble servants. Our fate is in your hands." Padme,
              lines 192-197.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does Padme kneel instead of negotiate? She is the Queen. She has authority. Why
              give it up?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because negotiation already failed. "Queen Amidala" tried words and got nowhere. The
                Gungans do not want a deal from someone who thinks themselves superior. Padme
                understands this. She removes the status that is blocking the alliance.
              </p>
              <p>
                This is the theme of humility as power. She gains more by giving up rank than she
                ever could by asserting it.
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">HUMILITY AS POWER</span>
            <div className="lrn-definition-desc">
              <p>
                Padme's kneeling is the hinge of the entire plan. Without the Gungan army, the
                diversion fails. Without the diversion, the droid army stays in the city. Without
                the droids leaving, Padme cannot reach the palace. One act of royal humility makes
                the rest of the plan possible.
              </p>
            </div>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>
              "Yousa no tinken yousa greater den da Gungans. Mesa like dis. Maybe wesa bein
              friends." Boss Nass.
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Boss Nass does not change his mind because of logic. He changes because of emotion. He
              felt looked down on by the Naboo. Padme's kneeling is proof she does not feel that
              way. His pride is satisfied. That is what opens the door.
            </p>
            <p>
              The line "Maybe wesa bein friends" is the simplest possible alliance seal. No treaty.
              No negotiation. Just a feeling of respect, finally present for the first time.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Identity as protection</span>
              <p>
                All film, the Queen disguise kept Padme safe from assassins. The decoy faced the
                danger. The real queen stayed hidden.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Identity as weapon</span>
              <p>
                Here she uses the reveal as a tool. Dropping the mask is a deliberate act. She
                chooses the moment. The ruse is relinquished, not exposed.
              </p>
            </div>
          </div>
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>The Three-Front Battle Plan</h2>
          <p>
            Look for this when studying how a screenplay uses structure to mirror theme. The plan
            has three moving parts. Each part is interdependent. If one fails, the others are
            harder. This is the film's structural spine made explicit.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Padme needs to reach the Viceroy in the throne room. The city is full of droids. She
              does not have enough soldiers to fight through them. How do you think she plans to
              clear a path?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                She uses the Gungans as bait. The Gungan army draws the droid army to the plains
                outside the city. That empties the streets. Padme's small team moves through the gap
                while the big fight distracts everyone.
              </p>
            </details>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>
              "The battle is a diversion. The Gungans must draw the Droid Army away from the
              cities." Padme.
            </p>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">THE THREE FRONTS</span>
            <div className="lrn-definition-desc">
              <p>
                Front 1: Gungans fight the droid army on the plains. This is a sacrifice play. It
                exists only to create space for the other two fronts.
              </p>
              <p>
                Front 2: Padme's team enters the hangar, captures a starfighter for the pilots, and
                reaches the throne room to capture the Viceroy.
              </p>
              <p>
                Front 3: Naboo pilots attack the droid control ship in orbit. If they destroy it,
                all droids shut down. This ends the entire war instantly.
              </p>
            </div>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>
              "There is a possibility with this diversion many Gungans will be killed." Qui-Gon,
              line 257.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Qui-Gon names the cost of the plan out loud. Boss Nass accepts anyway. Why does the
              screenplay include this moment? What would be lost if Qui-Gon said nothing?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Without it, the Gungans would be tools the heroes use without thought. Naming the
                cost gives the Gungans moral weight. Their sacrifice is acknowledged before it
                happens. The heroes are not reckless. They are honest about what the plan requires.
              </p>
              <p>
                Boss Nass accepting anyway is also important. He chooses sacrifice with full
                knowledge. That makes the Gungans active agents, not props.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>Qui-Gon and Obi-Wan Reconcile</h2>
          <p>
            Look for this when studying how screenwriters handle emotional repair before a major
            event. Two characters fix their relationship. Then one of them dies. The repair makes
            the death land harder.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Qui-Gon and Obi-Wan argued throughout the film about Anakin. They land on Naboo with a
              duel ahead. What do you think they say to each other in the quiet moment before the
              battle?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Obi-Wan apologizes. He says it is not his place to disagree. Qui-Gon gives back a
                complete blessing: "You have been a good apprentice. You are much wiser than I am."
                The argument is over. They are at peace.
              </p>
            </details>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>
              "I'm sorry for my behavior, Master. It is not my place to disagree with you about the
              boy." Obi-Wan.
            </p>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>"You have been a good apprentice. You are much wiser than I am, Obi-Wan.</p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Qui-Gon's blessing is the only direct praise he gives Obi-Wan in the entire film. The
              timing is not accidental.
            </p>
            <p>
              A screenwriter gives a dying character their most meaningful line just before the end.
              This is the technique of the final gift. Qui-Gon validates Obi-Wan at the exact moment
              when Obi-Wan will most need that validation to carry forward.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does it matter that this reconciliation happens before the duel, not after? What
              would change if Qui-Gon survived the duel instead?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                If Qui-Gon survived, Obi-Wan's grief and motivation would not exist. Obi-Wan trains
                Anakin because of a promise to a dying man. The deathbed promise creates the
                obligation. The reconciliation makes the promise feel sacred rather than imposed.
              </p>
              <p>
                Unresolved conflict between them would poison the moment of death. The audience
                needs to feel the loss, not the unfinished business. The repair clears the way for
                pure grief.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>Anakin Accidentally Enters the Space Battle</h2>
          <p>
            Look for this when studying accidental heroism. Anakin enters the fight by following
            Qui-Gon's instructions too literally. He hides under a fighter. The fighter activates.
            He is swept into orbit on autopilot.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Qui-Gon tells Anakin: "Find a safe place to hide and stay there." The hangar fills
              with blaster fire. Where do you think Anakin hides, and what goes wrong?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                He hides in a Naboo starfighter cockpit. Artoo is with him. He accidentally fires
                the weapons, then accidentally activates the engines. The ship launches into the
                battle above Naboo while Anakin is still trying to figure out the controls.
              </p>
            </details>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>
              "Once we get inside, Annie, you find a safe place to hide and stay there." Qui-Gon,
              line 324.
            </p>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>"We gotta do something, Artoo." Anakin.</p>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">ACCIDENTAL HEROISM</span>
            <div className="lrn-definition-desc">
              <p>
                Anakin does not decide to enter the battle. He stumbles into it. He has no plan. His
                entry is a cascade of small accidents. Yet once inside, his Force-enhanced instincts
                take over. He navigates by feeling, not training.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">
                Naboo squadron: deliberate, trained, failing
              </span>
              <p>
                Ric Olie's pilots attack the deflector shield on purpose. They cannot breach it.
                Training and tactics are useless against this obstacle.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Anakin: accidental, untrained, succeeding</span>
              <p>
                He crash-lands inside the station by accident. He fires torpedoes while trying to
                escape. They hit the reactor. He wins by not knowing the rules.
              </p>
            </div>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>
              "I know we're in trouble! Hang on! The way out of this mess is the way we got into
              it." Anakin.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Anakin navigates by instinct where trained pilots fail. What does this say about the
              role of the Force in his actions? Is he making choices or is something guiding him?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The screenplay suggests both. Anakin makes real decisions under pressure. But the
                outcomes are shaped by forces he does not control. He chooses to go back in. He does
                not choose to hit the reactor. The Force uses his willingness as a channel.
              </p>
              <p>
                This is the film's definition of the Chosen One: not someone who plans the victory
                but someone through whom destiny acts.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>The Lightsaber Duel: Power Generator</h2>
          <p>
            Look for this when studying physical storytelling and visual contrast. The fight between
            Qui-Gon, Obi-Wan, and Darth Maul is not just action. Every obstacle in the environment
            carries symbolic weight.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Jedi chase Darth Maul into the power generator room. They reach a hallway with
              energy gates that pulse open and shut. The gates separate the three fighters. What do
              you think happens when the last gate closes between Obi-Wan and Qui-Gon?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Obi-Wan is trapped behind the gate and can only watch. Qui-Gon faces Maul alone. The
                duel ends before the gate opens again. Qui-Gon is stabbed while Obi-Wan watches,
                unable to reach him.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Qui-Gon meditates</span>
              <p>
                While the gate is closed, he kneels and centers himself. Total stillness. He faces
                what is coming with acceptance.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Obi-Wan paces</span>
              <p>
                He walks back and forth behind the gate. He is urgent, frustrated, desperate to act.
                He cannot. His impatience foreshadows the lesson he must learn.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">VISUAL CONTRAST AS CHARACTERIZATION</span>
            <div className="lrn-definition-desc">
              <p>
                The energy gates do more than separate the fighters. They force the audience to
                watch two kinds of Jedi side by side. Qui-Gon's stillness is mastery. Obi-Wan's
                pacing is the gap he has not yet closed. The camera holds on both.
              </p>
            </div>
          </div>

          {/* [IMAGE: Qui-Gon Jinn death scene | qui-gon jinn death phantom menace] */}

          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>
              "Obi-Wan promise... promise me you'll train the boy. He is the chosen one. He will
              bring balance. Train him!" Qui-Gon.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Qui-Gon's dying command is about Anakin, not about Obi-Wan. He says nothing about
              Obi-Wan's grief. Why does the screenplay frame the death this way?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because the death is a plot mechanism as much as an emotional moment. Qui-Gon must
                transfer the Anakin obligation before he dies. If he dies without saying it, Obi-Wan
                has no reason to train a boy the Council rejected.
              </p>
              <p>
                The absence of personal goodbye makes the scene more brutal. Qui-Gon does not
                comfort his apprentice. He gives him a mission. That is a Jedi's death.
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">SACRIFICE ENABLING LEGACY</span>
            <div className="lrn-definition-desc">
              <p>
                It is the mechanism that creates the next generation. Without his death, Obi-Wan has
                no obligation to train Anakin. The master dies so the apprentice can become a
                master.
              </p>
            </div>
          </div>
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>Obi-Wan Defeats Darth Maul</h2>
          <p>
            Look for this when studying a reversal built on pure desperation. Obi-Wan falls into the
            melting pit. He should die. He does not. His recovery is one physical action powered by
            grief and anger.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Obi-Wan falls into the melting pit. He is hanging by a small ledge. Darth Maul stands
              above him. He has no weapon. How do you think he wins from this position?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                He uses the Force to leap straight out of the pit. He calls Qui-Gon's lightsaber to
                his hand in mid-air. He lands and bisects Maul in a single motion. The whole
                sequence takes three seconds.
              </p>
            </details>
          </div>

          {/* [IMAGE: Darth Maul character | darth maul star wars phantom menace] */}

          <div className="lrn-definition">
            <span className="lrn-definition-term">THE REVERSAL FROM HELPLESSNESS</span>
            <div className="lrn-definition-desc">
              <p>
                Obi-Wan is at maximum disadvantage: no weapon, below his enemy, holding a ledge over
                a pit. He does the last thing Maul expects. He launches upward. He takes Qui-Gon's
                saber mid-flight. The reversal works because the audience cannot see it coming from
                that position.
              </p>
            </div>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Symbolic Moment</span>
            <p>
              Darth Maul is cut in half and falls into the melting pit. The bisection mirrors the
              Sith pair Yoda will later name aloud. Even in death, duality is present. A single
              figure split into two pieces.
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Obi-Wan's victory is powered by grief, not training. He watched his master die thirty
              seconds ago. He acts from rage and loss. This is the first time in the film we see a
              Jedi act from raw emotion rather than calm discipline.
            </p>
            <p>
              The screenplay does not comment on this. But it plants a seed. Emotion as power is
              what the Sith believe in. Obi-Wan wins his greatest fight by doing what Jedi are not
              supposed to do.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Obi-Wan wins the fight by acting from rage and grief, not calm discipline. The Jedi
              code forbids this. Why does the screenplay let him win this way without commenting on
              it?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Silence is the point. The film does not warn the audience. It just shows the
                victory. That makes the seed planting deeper. We watch a Jedi win by Sith means and
                the screenplay treats it as triumph. The warning is there to find on a careful
                rewatch.
              </p>
              <p>
                The technique is dramatic withholding. The screenplay refuses to flag what it is
                doing. The audience must notice on a second viewing, after the film's other warnings
                about emotion have had time to settle.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>Padme Springs the Hidden Weapons Cache</h2>
          <p>
            Look for this when studying false surrender as a tactic. Padme gets trapped in a hallway
            by destroyer droids. She surrenders. She is brought to the throne room. That is exactly
            where she needed to go.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Padme's team is surrounded by destroyer droids in a corridor. They cannot fight
              through. Padme raises her hands and surrenders. Is this a defeat or part of the plan?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It is part of the plan. Or at least she makes it part of the plan fast. The droids
                take her to the throne room. Nute Gunray is there. That was the objective. Once
                inside, she uses a hidden weapons cache she already knew about to turn the tables.
              </p>
            </details>
          </div>
          <p>
            The decoy Sabe appears at the door at the right moment, creating confusion among the
            droids. While droids hesitate, Padme reaches the hidden panel and arms everyone.
          </p>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>"Now, Viceroy, this is the end of your occupation here." Padme.</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              How does Sabe's appearance at this moment help Padme? What does the decoy ruse
              contribute even after Padme already revealed herself to Boss Nass?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The droids still follow orders to capture the Queen. When two "queens" appear, they
                pause. That pause is the gap Padme uses to reach the weapons panel. Sabe is not just
                a body double. She is a tactical tool deployed at the right moment.
              </p>
              <p>
                The identity ruse pays off twice in this module: once to forge the alliance with
                Boss Nass, and once to create the distraction in the throne room.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>Anakin Destroys the Reactor by Accident</h2>
          <p>
            Anakin does not plan the decisive act of the film. He fires torpedoes while trying to
            escape. They go down a hallway and hit the reactor. Every droid in the galaxy shuts off.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Anakin's fighter crash-lands inside the droid control ship. The hangar bay is full of
              droids. He is alone except for Artoo. What do you think happens next, and how does the
              war end from here?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                He tries to escape. He accidentally fires torpedoes into a corridor. The torpedoes
                find the reactor by chance. The reactor explodes. The entire droid army shuts down
                in a single moment across every front. The war ends.
              </p>
            </details>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>"Now, this is Podracing! Whoopee!" Anakin.</p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              "This is Podracing" is a callback to Tatooine. Anakin is most alive when he is doing
              something insane at high speed. The line is comic. But it also confirms that his
              element is extreme piloting under pressure.
            </p>
            <p>
              The irony is that his greatest act of heroism feels, to him, like fun. He does not
              understand the weight of what just happened. That gap between his self-awareness and
              his impact is the film's central joke about destiny.
            </p>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Symbolic Moment</span>
            <p>
              Droids freeze simultaneously across the entire battlefield. An invisible victory. The
              entire droid army is undone by one small explosion inside one ship. A technological
              dependency exposed.
            </p>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Symbolic Moment</span>
            <p>
              Jar Jar pushes a frozen droid over. Comic deflation of military power. The figure of
              bumbling heroism gets the last physical gesture of the battle.
            </p>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">ACCIDENT AND DESTINY</span>
            <div className="lrn-definition-desc">
              <p>
                The torpedoes hit the reactor by chance. Anakin did not aim them. He did not know
                the reactor was there. The Force works through accident, not mastery. Destiny acts
                like an arrow that finds its mark without aim.
              </p>
            </div>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>"I'm not going to get into trouble, am I?" Anakin.</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Anakin destroyed a battleship and ended the war. He asks if he is in trouble. What
              does this gap between his action and his self-awareness reveal about his character?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                He is still a child. He followed Qui-Gon's instruction to find a safe place. From
                his own point of view, he made a mess. He does not register his actions as heroism
                because he did not set out to be a hero.
              </p>
              <p>
                This is also the film's final statement on the Chosen One: destiny does not require
                self-awareness. The prophecy does not need Anakin to understand it.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>Grief, Knighthood, and Anakin's Future</h2>
          <p>
            Look for this when studying how films handle transition between generations. The war is
            over. But the emotional center of the final scenes is a funeral, not a victory.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Obi-Wan wants to train Anakin. The Jedi Council already said no. Qui-Gon is dead.
              Obi-Wan has no authority. What do you think makes Yoda agree?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Obi-Wan threatens to train Anakin without approval if necessary. Yoda cannot ignore
                that. He accepts, but voices his concern. He does not agree because he changed his
                mind. He agrees because refusing would create a worse outcome.
              </p>
            </details>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>"Qui-Gon believed in him. I believe in Qui-Gon." Obi-Wan.</p>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">TRUST WITHOUT PROOF</span>
            <div className="lrn-definition-desc">
              <p>
                Obi-Wan does not trust Anakin. He trusts Qui-Gon. His faith in Anakin is inherited
                from a dead man. He does not earn it fresh. He passes it on like a torch.
              </p>
            </div>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Symbolic Moment</span>
            <p>
              Qui-Gon's funeral pyre. Fire as transition. The master's body is consumed as his final
              command takes hold in Obi-Wan and Anakin. Destruction and succession happen at the
              same moment.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Obi-Wan was promoted to Jedi Knight the same day he lost his master. What does the
              screenplay say about grief and growth by placing these two events together?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Growth does not wait for grief to pass. Obi-Wan becomes a master on the worst day of
                his life. The screenplay does not let him mourn before taking on responsibility.
              </p>
              <p>
                The Jedi path does not offer time to stop. You carry the loss forward into the next
                duty.
              </p>
            </details>
          </div>

          <viz.CharacterArcTimeline C={C} />
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>The Parade and the Sith Shadow</h2>
          <p>
            Look for this when studying dramatic irony as the final note of a film. But Yoda and
            Mace Windu stand apart. They know the Sith threat is not over.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Naboo and Gungans celebrate together. Boss Nass holds the Globe of Peace aloft.
              Palpatine smiles at Padme. Does the film let you feel happy at the end, or does
              something undercut it?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Both. The celebration is real. But Yoda and Mace Windu speak quietly at the edge of
                the scene. Mace says: "But which one was destroyed, the master or the apprentice?"
                The film refuses to let the joy be simple.
              </p>
            </details>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>"Always two there are. No more, no less. A master and an apprentice." Yoda.</p>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>"But which one was destroyed, the master or the apprentice?" Mace Windu.</p>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">THE SITH PAIR</span>
            <div className="lrn-definition-desc">
              <p>
                Yoda names that the Sith always operate in pairs. One master, one apprentice. Maul
                is dead. But if Maul was the apprentice, the master is still alive. If Maul was the
                master, there is still an apprentice somewhere.
              </p>
            </div>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Symbolic Moment</span>
            <p>
              Palpatine and Padme smile at each other during the parade. Dramatic irony at its
              sharpest. The man who engineered the invasion celebrates the rescue.
            </p>
          </div>
          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Symbolic Moment</span>
            <p>
              Boss Nass holds the Globe of Peace aloft. The Gungan sphere mirrors the energy balls
              used in battle. The weapon of war becomes a symbol of unity.
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The film closes on celebration. But it earned that celebration honestly. The Gungans
              nearly died. Qui-Gon did die. The cost was named and paid. The joy at the end does not
              erase that. It coexists with it.
            </p>
            <p>
              Yoda and Mace standing apart is the film saying: the real threat is unresolved.
              Palpatine is right there in the frame. He engineered everything. He is now Chancellor.
              The audience has watched him do it. The parade is beautiful and hollow at the same
              time.
            </p>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">CELEBRATION OVER UNRESOLVED DARKNESS</span>
            <div className="lrn-definition-desc">
              <p>
                The parade closes The Phantom Menace with surface peace. The Naboo occupation is
                over. The Trade Federation is defeated. But the Sith architect of the entire crisis
                is now the most powerful politician in the galaxy.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The film ends on a celebration that the audience knows is hollow. Why does the
              screenplay close on joy instead of warning the characters about Palpatine?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because the dramatic irony is the point. If the heroes knew, the film would not
                work. The audience must hold the secret while the characters cannot. The joy on
                screen is real for them. The dread is real for us. Both feelings live in the same
                frame.
              </p>
              <p>
                The screenplay also rewards rewatching. First time through, the parade looks like
                victory. Second time, it looks like a funeral. The same images carry different
                meaning depending on what the viewer knows.
              </p>
            </details>
          </div>
        </div>
      </>
    ],
    practice: [
      // ── COMPREHENSION ─────────────────────────────────────────────────────
      {
        q: 'Why does Padme kneel before Boss Nass instead of negotiating with him?',
        a: 'Negotiation already failed. Padme knows Nass rejected "Queen Amidala" because she felt superior. She drops her rank entirely. A queen prostrating herself removes the status blocking the alliance. She earns his help by abandoning the very thing that stopped her from getting it.'
      },
      {
        q: 'What is the three-front battle plan, and what does each front do?',
        a: "Front 1: Gungans fight the droid army on the plains as a diversion. They pull the droids away from the city. Front 2: Padme's team enters the hangar and fights to the throne room to capture the Viceroy. Front 3: Naboo pilots attack the droid control ship in orbit. If the control ship is destroyed, all droids shut down everywhere."
      },
      {
        q: 'How does Anakin enter the space battle?',
        a: "By accident. He hides inside a Naboo starfighter cockpit as Qui-Gon instructed. He accidentally fires the ship's weapons, then accidentally activates the engines. The ship launches on autopilot into orbit. He was following orders to hide in a safe place. The fighter was not safe."
      },
      {
        q: 'What happens when the energy gates separate Obi-Wan from Qui-Gon during the duel?',
        a: "Obi-Wan is trapped behind a pulsing energy gate. He can only watch. Qui-Gon faces Darth Maul alone on the other side. Maul stabs Qui-Gon through the chest before the gate opens again. Obi-Wan cannot reach his master in time. This is the film's central tragedy."
      },
      {
        q: 'How does Obi-Wan defeat Darth Maul after falling into the melting pit?',
        a: "He is hanging from a small ledge with no weapon. He uses the Force to launch himself straight out of the pit, calls Qui-Gon's lightsaber to his hand in mid-air, and bisects Maul in a single motion as he lands. The entire reversal takes seconds. Desperation and grief power the act."
      },
      {
        q: 'How does Anakin destroy the droid control ship?',
        a: 'He crash-lands inside the station by accident after taking damage in the dogfight. He fires torpedoes while trying to escape. They travel down a corridor and hit the reactor by chance. The reactor explodes from the inside. Every droid in the galaxy shuts down simultaneously. He did not plan any of it.'
      },
      {
        q: 'What does Qui-Gon say to Obi-Wan right before they enter the battle?',
        a: 'He gives Obi-Wan a full blessing: "You have been a good apprentice. You are much wiser than I am.'
      },
      {
        q: "What are Qui-Gon's dying words, and why do they matter to the story?",
        a: '"Promise me you\'ll train the boy. He is the chosen one. He will bring balance. Train him!" These words are a command, not a goodbye. They transfer the Anakin obligation to Obi-Wan. Without this moment, Obi-Wan has no reason to train a boy the Council already rejected. Everything that follows between teacher and student begins here.'
      },
      // ── CHARACTER MOTIVATION ───────────────────────────────────────────────
      {
        q: 'What motivates Obi-Wan to train Anakin even though Yoda is reluctant?',
        a: '"Qui-Gon believed in him. I believe in Qui-Gon." Obi-Wan does not trust Anakin directly. He trusts his dead master\'s judgment. His motivation is inherited faith, not personal conviction. The deathbed promise creates an obligation he cannot refuse without dishonoring Qui-Gon\'s last words.'
      },
      {
        q: 'Why does Padme reveal herself as the true Queen to Boss Nass at this moment?',
        a: 'Because the decoy failed. Nass already refused "Queen Amidala." Padme needs a different approach. Dropping the disguise is a strategic choice: it removes the status that blocked the alliance and replaces it with honesty. The reveal is a tool, not a confession. She chooses the moment deliberately.'
      },
      {
        q: "What is Darth Sidious's strategy during the battle? Why does he say 'Be patient. Let them make the first move'?",
        a: 'Sidious is cold and calculating. He does not panic like Nute Gunray. He knows that acting first reveals your position. Letting the enemy move first shows you their plan. His patience is a weapon. He is also confident: he believes the Jedi cannot win even if they try.'
      },
      {
        q: 'Why does Nute Gunray panic during the battle while Sidious stays calm?',
        a: 'Nute is a businessman who overextended himself. He is not a military commander. When the battle goes wrong, he has no fallback. Sidious is a centuries-long planner who sees the entire game. Their contrast shows two kinds of power: reactive incompetence versus patient architecture.'
      },
      // ── THEMATIC INTERPRETATION ────────────────────────────────────────────
      {
        q: 'How does the theme of humility as power appear in this module?',
        a: 'Padme kneels before Boss Nass. She gives up royal status to earn the alliance. Without the Gungan army, the diversion fails. Without the diversion, the droids stay in the city. Without clear streets, Padme cannot reach the palace. One act of humility makes every other plan step possible. Status would have killed them all.'
      },
      {
        q: "What does Anakin's accidental reactor shot say about how the Force works?",
        a: 'It says the Force works through chance, not mastery. Anakin does not aim. He does not know the reactor is there. Destiny acts like an arrow that finds its mark without aim. The Chosen One prophecy does not require the chosen person to be in control. The Force uses his willingness as a channel.'
      },
      {
        q: 'How does the film use dramatic irony in the final parade scene?',
        a: 'Palpatine smiles at Padme during the celebration. He is the man who ordered her destroyed, engineered the invasion, and is now Chancellor because of the crisis he created. The audience watching the film has already seen him do it. The parade is genuinely joyful and deeply hollow at the same time. Joy and dread occupy the same frame.'
      },
      {
        q: '',
        a: "His death creates the obligation. Without the deathbed command, Obi-Wan has no reason to train a boy the Council rejected. The master dies to set the next generation in motion. Destruction and succession happen at the same moment. Qui-Gon's body burns; his mission takes hold in Obi-Wan at the same instant."
      },
      // ── NARRATIVE CRAFT ────────────────────────────────────────────────────
      {
        q: 'Why does the screenplay open the module with Sidious ordering the Queen destroyed before she even arrives on Naboo?',
        a: "It creates dramatic irony. The audience knows the Queen is heading into a death trap. She does not. Every planning scene gains tension because we carry that knowledge. The villain is always one step ahead in the audience's mind, even when the heroes seem confident."
      },
      {
        q: 'What is the narrative function of the energy gates in the power generator sequence?',
        a: 'The gates do two things at once. They separate the fighters, forcing Qui-Gon to face Maul alone. And they force the camera to show Qui-Gon meditating beside Obi-Wan pacing. Two kinds of Jedi side by side, separated by glass. The environment becomes a character study without a single word of dialogue.'
      },
      {
        q: 'Why does the screenplay place the reconciliation between Qui-Gon and Obi-Wan before the duel rather than before they land?',
        a: 'Proximity to death sharpens the moment. If the reconciliation happened earlier, it would be resolved and forgotten. Placing it minutes before the duel means the audience carries the warmth of that exchange into the fight. The loss is maximized.'
      },
      {
        q: "How does the four-front parallel structure mirror the film's theme of interdependence?",
        a: "Each front depends on the others to succeed. The Gungans buy time for Padme. Padme's capture of the Viceroy is only possible because Anakin shuts down the droids. Anakin reaches the control ship because the hangar battle cleared pilots to fly. No single hero wins alone. The structure IS the theme."
      },
      // ── TRANSFER CARDS ─────────────────────────────────────────────────────
      {
        q: 'TRANSFER: Anakin wins the battle by accident while trained pilots fail. Name another film where the untrained outsider succeeds where experts cannot, and explain why that structure works.',
        a: 'Same structure: institutional training fails; Force instinct succeeds. The pattern works because it says the system cannot solve certain problems. Only the person outside the system can. Destiny bypasses expertise.'
      },
      {
        q: "TRANSFER: Padme's surrender in the corridor is a false defeat that leads directly to the objective. Name another film where a character's apparent loss is actually their path to victory.",
        a: "In The Dark Knight, Batman lets the Joker capture him and appear to win at the ferry scene. The apparent surrender of the moral high ground forces the Joker to confront that his theory about people is wrong. The 'loss' is the tactic. Both films use the same structure: give up what looks like power to access a deeper form of it."
      },
      {
        q: "Name another film where a mentor's death creates the apprentice's obligation, and explain what the death unlocks.",
        a: "In The Lion King, Mufasa's death creates Simba's obligation to return and take the throne. Without the death, Simba has no reason to leave his comfortable exile. The mentor's death is the mechanism that forces the apprentice to become the protagonist of their own story. The death is not just loss: it is the engine that starts the next act."
      },
      {
        q: "TRANSFER: The Sith pair Yoda names means one Sith always survives a defeat. Name another film franchise that uses a similar 'the threat is never fully defeated' structure, and explain how it creates ongoing tension.",
        a: 'In the Alien franchise, the creature is never fully eradicated. Each film ends with a survivor but the species persists. The structure works the same way as the Sith pair Yoda names: you can win the battle and still lose the war. The audience cannot fully relax after any victory. This is how serialized stories maintain tension across installments.'
      },
      {
        q: "TRANSFER: The parade scene pairs celebration with Yoda and Mace's dark warning. Name another film that ends on a joyful note while planting a threat the characters cannot see.",
        a: 'The real threat grows in the background of every victory. The film teaches you to read celebrations as warnings.'
      },
      // ── ELABORATE ──────────────────────────────────────────────────────────
      {
        q: '',
        a: 'The repair completed the relationship. No unfinished business remains. Compare: if they had died with the argument unresolved, the emotional register would be different: grief mixed with "they never made it right." The reconciliation purifies the grief into something clean. The timing is the craft.'
      },
      {
        q: 'ELABORATE: The Gungan army is the diversion front and it fails completely. They are captured. Why does the plan still work?',
        a: 'Because the diversion succeeded even in defeat. The Gungan army drew the droid army out of the city long enough for Padme to reach the palace. It did not need to win. It needed to buy time. The plan built in the possibility of the Gungans losing: they gave Padme the window she needed before being captured. The sacrifice was the point.'
      },
      {
        q: 'ELABORATE: Jar Jar Binks accidentally destroys droids throughout the battle. Why does the film include his comic chaos alongside serious military action?',
        a: "Jar Jar's accidental heroics parallel Anakin's accidental heroics. Both win battles they did not plan to enter. The film repeats the theme at two scales: the child in space and the clumsy Gungan on the ground. The parallel says: destiny does not require competence. It requires presence. Jar Jar is there. That is enough."
      },
      // ── PREDICT ────────────────────────────────────────────────────────────
      {
        q: 'PREDICT: Before watching the film, if you knew Anakin would destroy the droid control ship, would you guess it was intentional or accidental? What does your answer reveal about how you think heroes work?',
        a: "Most audiences expect the hero to plan the decisive act. That is the conventional hero structure. The Phantom Menace breaks it deliberately. Anakin's victory is all accident. If you guessed intentional, you imported conventional hero logic. The film rejects that logic. The Chosen One is not a planner. He is a vessel."
      },
      {
        q: 'PREDICT: Yoda says "Always two there are" at the end. Maul is dead. Sidious is alive. What does this tell you about the threat the film leaves unresolved?',
        a: 'Sidious needs a new apprentice. Maul was the apprentice. With Maul dead, the master still operates. The threat is not gone: it has just changed form. The film closes with the apprentice slot empty and the master still in power.'
      }
    ],
    referenceSections: [
      <>
        <div className="lrn-section">
          <h2>Key Scenes and Their Narrative Function</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">SIDIOUS ORDERS THE QUEEN DESTROYED</span>
            <div className="lrn-definition-desc">
              <p>
                Function: Establishes existential stakes through dramatic irony before the heroes
                arrive.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">PADME REVEALS HERSELF TO BOSS NASS</span>
            <div className="lrn-definition-desc">
              <p>
                Function: Drops the film-long decoy ruse; reclaims agency; forges the alliance
                through humility.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">THREE-FRONT PLAN ANNOUNCED</span>
            <div className="lrn-definition-desc">
              <p>
                Function: States the film's parallel action structure explicitly. Every subsequent
                cut is explained by this scene.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">QUI-GON AND OBI-WAN RECONCILE</span>
            <div className="lrn-definition-desc">
              <p>Clears the grief of unfinished business.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">ENERGY GATES SEPARATE THE JEDI</span>
            <div className="lrn-definition-desc">
              <p>
                Function: Creates maximum vulnerability for Qui-Gon; forces the visual contrast of
                his meditation vs. Obi-Wan's pacing.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">QUI-GON'S DEATH</span>
            <div className="lrn-definition-desc">
              <p>
                Function: The film's central tragedy. Transfers the Anakin obligation to Obi-Wan.
                Sets in motion everything that follows between teacher and student.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">OBI-WAN DEFEATS DARTH MAUL</span>
            <div className="lrn-definition-desc">
              <p>
                Function: Reversal from maximum disadvantage powered by grief. Shows Obi-Wan acting
                from raw emotion rather than calm discipline.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">ANAKIN DESTROYS THE REACTOR</span>
            <div className="lrn-definition-desc">
              <p>
                Function: The decisive act of the film executed entirely by accident. Closes all
                four battle fronts simultaneously.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">QUI-GON'S FUNERAL / OBI-WAN'S KNIGHTHOOD</span>
            <div className="lrn-definition-desc">
              <p>
                Function: Grief and promotion occur on the same day. The new master is created on
                the worst day of his life.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">VICTORY PARADE WITH YODA'S WARNING</span>
            <div className="lrn-definition-desc">
              <p>
                Function: Closes the film on celebration while planting the unresolved Sith threat.
                Dramatic irony: Palpatine stands in the victory frame.
              </p>
            </div>
          </div>
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>Character Decisions and Consequences</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">PADME KNEELS BEFORE BOSS NASS</span>
            <div className="lrn-definition-desc">
              <p>Decision: Abandon royal status to earn alliance.</p>
              <p>
                Consequence: Gungan army provides the diversion that makes the entire plan possible.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">PADME SURRENDERS IN THE CORRIDOR</span>
            <div className="lrn-definition-desc">
              <p>Decision: False surrender to avoid a fight she cannot win.</p>
              <p>
                Consequence: Brought directly to the throne room where the Viceroy is. Objective
                achieved by losing.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">ANAKIN HIDES IN THE FIGHTER COCKPIT</span>
            <div className="lrn-definition-desc">
              <p>Decision: Follow Qui-Gon's instruction to hide. Cockpit seems safe.</p>
              <p>
                Consequence: Accidentally launches into orbit. Accidentally destroys the reactor.
                Ends the war.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">OBI-WAN PROMISES TO TRAIN ANAKIN</span>
            <div className="lrn-definition-desc">
              <p>Decision: Honor the dying master's command even against Council wishes.</p>
              <p>
                Consequence: Anakin begins Jedi training under Obi-Wan. The Council relents because
                Obi-Wan was bound by Qui-Gon's last words.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              QUI-GON CHARGES MAUL ALONE THROUGH THE OPEN GATE
            </span>
            <div className="lrn-definition-desc">
              <p>Decision: Use the brief window when the gate opens to attack with ferocity.</p>
              <p>
                Consequence: Overextends; Maul reverses and stabs him before Obi-Wan can get
                through. The master's aggression creates the opening for his own death.
              </p>
            </div>
          </div>
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>Themes with Supporting Evidence</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">HUMILITY AS POWER</span>
            <div className="lrn-definition-desc">
              <p>
                Evidence: Padme kneels before Boss Nass. Her prostration earns what negotiation
                could not. The queen gains an army by abandoning her crown.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">ACCIDENT AND DESTINY</span>
            <div className="lrn-definition-desc">
              <p>
                Evidence: Anakin hides in a fighter, accidentally launches, accidentally fires
                torpedoes, accidentally hits the reactor. No deliberate act. The war ends through
                chain of accidents.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">SACRIFICE ENABLING LEGACY</span>
            <div className="lrn-definition-desc">
              <p>
                Evidence: Qui-Gon's dying command transfers the Anakin obligation to Obi-Wan. The
                Gungan army accepts possible death as the price of the diversion.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">IDENTITY AND DECEPTION</span>
            <div className="lrn-definition-desc">
              <p>
                Evidence: The decoy ruse pays off twice: once as a diplomatic tool before Boss Nass
                , once as a tactical distraction in the throne room.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">CELEBRATION OVER UNRESOLVED DARKNESS</span>
            <div className="lrn-definition-desc">
              <p>
                Evidence: Victory parade with Palpatine in frame; Yoda and Mace discussing the
                surviving Sith.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">TRUST WITHOUT PROOF</span>
            <div className="lrn-definition-desc">
              <p>
                Evidence: "Qui-Gon believed in him. I believe in Qui-Gon.". Obi-Wan's faith in
                Anakin is inherited, not earned. Belief is passed like a torch through grief.
              </p>
            </div>
          </div>
        </div>
      </>,

      <>
        <div className="lrn-section">
          <h2>Key Dialogue Reference</h2>
          <ul className="lrn-list">
            <li>
              "When she gets there, destroy her." Sidious. Existential stakes before heroes arrive.
            </li>
            <li>"I'm going to take back what's ours." Amidala. The mission driver in one line.</li>
            <li>
              "I beg you to help us. Our fate is in your hands." Padme. Humility as diplomacy.
            </li>
            <li>"The battle is a diversion." Padme. The structural logic of the entire climax.</li>
            <li>
              "Promise me you'll train the boy. He is the chosen one." Qui-Gon. The deathbed command
              that transfers obligation to Obi-Wan.
            </li>
            <li>
              "Qui-Gon believed in him. I believe in Qui-Gon." Obi-Wan. Faith transmitted through
              grief.
            </li>
            <li>
              "Always two there are. No more, no less." Yoda. The Sith pair: a master and an
              apprentice.
            </li>
            <li>
              "But which one was destroyed, the master or the apprentice?" Mace Windu. The film's
              final unanswered question.
            </li>
            <li>
              "Now, this is Podracing! Whoopee!" Anakin. Accidental heroism experienced as fun.
            </li>
          </ul>
        </div>
      </>
    ]
  }
}

export default function ThePhantomMenace() {
  const C = useVizColors()
  const acts = [
    tradeFederationAttackContent(C),
    nabooInvasionAndEscapeContent(),
    strandedOnTatooineContent(),
    thePodraceContent(C),
    departureAndMaulStrikesContent(C),
    coruscantPoliticsContent(C),
    returnAndBattleOfNabooContent(C)
  ]
  const config = {
    cssPrefix: 'tpm',
    documentTitle: 'Star Wars: Episode I, The Phantom Menace - AETHER',
    learning: {
      groupTitle: 'Star Wars Episode I, The Phantom Menace',
      category: 'films',
      title: 'Star Wars: Episode I - The Phantom Menace',
      subtitle:
        'The full film as one studied flow: invasion, escape, Tatooine, podrace, Coruscant politics, return, and the duel that splits a generation of Jedi.',
      sections: acts.flatMap(a => a.sections)
    },
    practice: acts.flatMap(a => a.practice),
    reference: {
      category: 'Quick Reference',
      title: 'Star Wars: Episode I, The Phantom Menace',
      sections: acts.flatMap(a => a.referenceSections)
    },
    customCss: null
  }
  return <LearningTemplate config={config} />
}
