import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'htb',
  documentTitle: 'Health and the Body: AETHER',
  learning: {
    category: 'Unit 11',
    title: 'Gesundheit und der Körper',
    subtitle: 'Body parts, illness, symptoms, doctor visits, and health vocabulary',
    sections: [
      <>
        <h2>Why This Unit Matters</h2>
        <p>
          After this unit, you can describe symptoms to a doctor and follow medical advice in
          German. You learn body parts, two pain patterns, four modal verbs, reflexive health verbs,
          and seit with the dative.
        </p>
      </>,

      <>
        <div id="lrn-section-0">
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You trip and hurt your leg at a German sports club. Which three body part words do you
              think you will need most?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                das Bein (leg), das Knie (knee), and der Fuß (foot) cover the most common leg
                injuries. You will also need the reflexive verb sich verletzen (to injure oneself),
                taught in Section 3.
              </p>
            </details>
          </div>

          <h2>Kapitel 7: Gesundheit (Health)</h2>

          <h3>Body Parts (Körperteile)</h3>
          <p>
            German body parts have fixed genders. You must learn the article with each word. The
            gender is not predictable from the word itself. Memorize the article with the noun from
            day one, because gender controls case endings later.
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
                <td>der Kopf</td>
                <td>masc.</td>
                <td>head</td>
              </tr>
              <tr>
                <td>das Gesicht</td>
                <td>neut.</td>
                <td>face</td>
              </tr>
              <tr>
                <td>das Auge / die Augen</td>
                <td>neut.</td>
                <td>eye / eyes</td>
              </tr>
              <tr>
                <td>das Ohr / die Ohren</td>
                <td>neut.</td>
                <td>ear / ears</td>
              </tr>
              <tr>
                <td>die Nase</td>
                <td>fem.</td>
                <td>nose</td>
              </tr>
              <tr>
                <td>der Mund</td>
                <td>masc.</td>
                <td>mouth</td>
              </tr>
              <tr>
                <td>der Zahn / die Zähne</td>
                <td>masc.</td>
                <td>tooth / teeth</td>
              </tr>
              <tr>
                <td>der Hals</td>
                <td>masc.</td>
                <td>neck / throat</td>
              </tr>
              <tr>
                <td>die Schulter / die Schultern</td>
                <td>fem.</td>
                <td>shoulder / shoulders</td>
              </tr>
              <tr>
                <td>der Arm / die Arme</td>
                <td>masc.</td>
                <td>arm / arms</td>
              </tr>
              <tr>
                <td>die Hand / die Hände</td>
                <td>fem.</td>
                <td>hand / hands</td>
              </tr>
              <tr>
                <td>der Finger</td>
                <td>masc.</td>
                <td>finger</td>
              </tr>
              <tr>
                <td>der Bauch</td>
                <td>masc.</td>
                <td>stomach / belly</td>
              </tr>
              <tr>
                <td>der Magen</td>
                <td>masc.</td>
                <td>stomach (organ)</td>
              </tr>
              <tr>
                <td>der Rücken</td>
                <td>masc.</td>
                <td>back</td>
              </tr>
              <tr>
                <td>das Bein / die Beine</td>
                <td>neut.</td>
                <td>leg / legs</td>
              </tr>
              <tr>
                <td>das Knie</td>
                <td>neut.</td>
                <td>knee</td>
              </tr>
              <tr>
                <td>der Fuß / die Füße</td>
                <td>masc.</td>
                <td>foot / feet</td>
              </tr>
            </tbody>
          </table>

          <h3>Expressing Pain (Schmerzen ausdrücken)</h3>
          <p>German has two main patterns for saying something hurts.</p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Pattern 1</span>
            <p>
              <strong>body part + tut/tun + dative pronoun + weh</strong>
            </p>
            <p>
              Use <strong>tut</strong> for one body part. Use <strong>tun</strong> for more than
              one. The dative is the grammar case German uses for the person something happens to.
              Here the dative pronoun just names the person affected: mir (me), dir (you), ihm
              (him), ihr (her). You already met these forms in earlier units.
            </p>
            <p>Der Kopf tut mir weh. (My head hurts.)</p>
            <p>Die Beine tun mir weh. (My legs hurt.)</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Using Pattern 1: how would you say "My knee hurts"? What about "My ears hurt"? Form
              your sentences before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                "Das Knie tut mir weh" uses <strong>tut</strong> because Knie is singular. "Die
                Ohren tun mir weh" uses <strong>tun</strong> because Ohren is plural. The verb
                changes to match the number of the body part, not the person affected.
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Pattern 2</span>
            <p>
              <strong>Ich habe + body part + -schmerzen</strong>
            </p>
            <p>
              Ich habe Kopfschmerzen. (I have a headache.) Ich habe Bauchschmerzen. (I have a
              stomachache.)
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              German keeps both pain patterns because they serve different grammar roles. Pattern 1
              (wehtun) is a verb construction: the body part acts as the subject and does something
              to you. Pattern 2 (-schmerzen) is a noun construction: you have an object (the pain).
              Both patterns are common and fine to use anywhere. You need both because doctors,
              friends, and official forms use both.
            </p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>German compound</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kopfschmerzen</td>
                <td>headache</td>
              </tr>
              <tr>
                <td>Halsschmerzen</td>
                <td>sore throat</td>
              </tr>
              <tr>
                <td>Bauchschmerzen</td>
                <td>stomachache</td>
              </tr>
              <tr>
                <td>Rückenschmerzen</td>
                <td>back pain</td>
              </tr>
              <tr>
                <td>Zahnschmerzen</td>
                <td>toothache</td>
              </tr>
              <tr>
                <td>Ohrenschmerzen</td>
                <td>earache</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-compare">
            <span className="lrn-compare-label">COMPARE</span>
            <p>
              <strong>Bauch vs. Magen:</strong> Both words translate as "stomach" in English. Use{' '}
              <strong>Bauch</strong> for the belly or stomach area in everyday speech. Use{' '}
              <strong>Magen</strong> when referring to the organ itself. Bauchschmerzen is the
              common word for stomachache. Magenschmerzen is also used but sounds more clinical.
            </p>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-1">
          <h2>Illness and the Doctor (Krankheit und Arzt)</h2>
          <h3>Common Symptoms (Symptome)</h3>
          <p>These words describe how you feel when you are ill.</p>
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
                <td>das Fieber</td>
                <td>fever</td>
                <td>Ich habe Fieber.</td>
              </tr>
              <tr>
                <td>der Husten</td>
                <td>cough</td>
                <td>Ich habe Husten.</td>
              </tr>
              <tr>
                <td>der Schnupfen</td>
                <td>runny nose / cold</td>
                <td>Ich habe Schnupfen.</td>
              </tr>
              <tr>
                <td>die Erkältung</td>
                <td>cold (illness)</td>
                <td>Ich habe eine Erkältung.</td>
              </tr>
              <tr>
                <td>die Grippe</td>
                <td>flu</td>
                <td>Ich habe die Grippe.</td>
              </tr>
              <tr>
                <td>die Übelkeit</td>
                <td>nausea</td>
                <td>Ich habe Übelkeit.</td>
              </tr>
              <tr>
                <td>die Allergie</td>
                <td>allergy</td>
                <td>Ich habe eine Allergie gegen Pollen. (gegen = to, + accusative)</td>
              </tr>
              <tr>
                <td>krank</td>
                <td>ill / sick</td>
                <td>Ich bin krank.</td>
              </tr>
              <tr>
                <td>gesund</td>
                <td>healthy / well</td>
                <td>Ich bin wieder gesund. (wieder = again)</td>
              </tr>
              <tr>
                <td>müde</td>
                <td>tired</td>
                <td>Ich bin sehr müde.</td>
              </tr>
              <tr>
                <td>schwach</td>
                <td>weak</td>
                <td>Ich fühle mich schwach.</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-compare">
            <span className="lrn-compare-label">COMPARE</span>
            <p>
              <strong>Schnupfen vs. Erkältung:</strong> Both relate to a cold, but they are
              different things. <strong>Schnupfen</strong> is the runny nose symptom itself.
              <strong>Erkältung</strong> is the illness. You can have Erkältung without much
              Schnupfen, but Schnupfen is usually part of an Erkältung.
            </p>
            <p>
              <strong>Erkältung vs. Grippe:</strong> Both mean you are sick, but Grippe (flu) is
              much more serious. Grippe brings high fever and body weakness. Erkältung (common cold)
              is milder. Never confuse them with a doctor.
            </p>
          </div>

          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY INSIGHT</span>
            <p>
              "Mir ist schlecht" means "I feel nauseous." Literally it means "Bad is to me." This is
              the same dative-experiencer pattern you saw with gefallen: the state happens to the
              person (mir), so that person is dative, not the subject. So you cannot say "Ich bin
              schlecht" for nauseous.
            </p>
            <p>
              This is a third health pattern: ist + adjective + dative pronoun. It works alongside
              the two pain patterns from Section 0.
            </p>
          </div>

          <h3>At the Doctor (Beim Arzt)</h3>
          <p>These phrases cover a typical doctor visit from start to finish.</p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>der Arzt / die Ärztin</td>
                <td>doctor (masc. / fem.)</td>
              </tr>
              <tr>
                <td>die Praxis</td>
                <td>doctor's office / practice</td>
              </tr>
              <tr>
                <td>der Termin</td>
                <td>appointment</td>
              </tr>
              <tr>
                <td>das Rezept</td>
                <td>prescription</td>
              </tr>
              <tr>
                <td>die Tablette / die Tabletten</td>
                <td>tablet / tablets</td>
              </tr>
              <tr>
                <td>das Medikament</td>
                <td>medicine / medication</td>
              </tr>
              <tr>
                <td>die Apotheke</td>
                <td>pharmacy</td>
              </tr>
              <tr>
                <td>das Krankenhaus</td>
                <td>hospital</td>
              </tr>
              <tr>
                <td>die Krankenkasse</td>
                <td>health fund (the institution you are a member of)</td>
              </tr>
              <tr>
                <td>die Krankenversicherung</td>
                <td>health insurance (the concept of coverage)</td>
              </tr>
              <tr>
                <td>krank schreiben</td>
                <td>to sign off sick (official note from doctor)</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Krankenkasse and Krankenversicherung look similar but mean different things.
              <strong>Krankenkasse</strong> is the specific fund or institution you belong to as a
              member, for example AOK or TK. <strong>Krankenversicherung</strong> is the broader
              concept of having health insurance coverage. A doctor's receptionist asks "Welche
              Krankenkasse haben Sie?" (Which fund are you with?), not Krankenversicherung.
            </p>
            <p>
              <strong>krank schreiben</strong> is a separable verb: it splits in two, with one part
              staying near the subject and the other moving to the end. The doctor "schreibt Sie
              krank" when they give you an official note (Krankschreibung) saying you cannot work.
              This is a legal document in Germany, not just advice.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Booking the visit</span>
            <p>
              To book a doctor visit, say: <strong>Ich möchte einen Termin machen.</strong> (I would
              like to make an appointment.) You can also use vereinbaren in place of machen.
            </p>
            <p>einen Termin is the accusative of der Termin, the appointment you want.</p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The doctor tells you: "Sie müssen viel trinken." What does this mean and what modal
              verb is used?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                "You must drink a lot." The modal verb is müssen (must / have to). Modal verbs send
                the infinitive to the end: müssen + ... + trinken.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-2">
          <h2>Grammar: Modal Verbs for Health Advice</h2>
          <p>
            Modal verbs are helper verbs like must, can, and may. They pair with a main verb. After
            your checkup, the doctor gives you several instructions. You need müssen, sollen, and
            dürfen to understand them. You need können to ask what is possible. These four verbs
            appear in almost every health conversation.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You already know modal verbs drop the -t in the ich and er forms. So does the doctor
              say "Sie muss" or "Sie müsst" for "you must"? Recall before reading on.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Neither. Formal Sie uses "Sie müssen". The no-t rule covers ich and er/sie/es: "ich
                muss", "er muss", both without -t.
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Grammar rule</span>
            <p>
              <strong>Word order:</strong> modal verb in position 2, infinitive at the end.
            </p>
            <p>
              "Position 2" means the modal verb is the second grammatical unit in the sentence. The
              infinitive (the base verb) goes to the very end.
            </p>
            <p>
              Sie <strong>müssen</strong> viel Wasser trinken. (You must drink a lot of water.)
            </p>
            <p>
              Sie <strong>dürfen</strong> keinen Alkohol trinken. (You must not drink alcohol.)
            </p>
          </div>

          <p>
            The four health modals (müssen, sollen, dürfen, können) all follow the same pattern: ich
            and er/sie/es share one form with no -t, and the du and ihr forms add their usual
            endings. The full conjugation table (how the verb changes for each person) is in the
            Reference tab.
          </p>

          <h3>Meaning in Context</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sie müssen im Bett bleiben.</td>
                <td>You must stay in bed.</td>
                <td>obligation</td>
              </tr>
              <tr>
                <td>Sie sollen viel schlafen.</td>
                <td>You should sleep a lot.</td>
                <td>advice from authority</td>
              </tr>
              <tr>
                <td>Sie dürfen nicht rauchen.</td>
                <td>You may not smoke.</td>
                <td>prohibition</td>
              </tr>
              <tr>
                <td>Darf ich Sport machen?</td>
                <td>May I do sport?</td>
                <td>asking permission</td>
              </tr>
              <tr>
                <td>Ich kann nicht schlafen.</td>
                <td>I cannot sleep.</td>
                <td>ability / impossibility</td>
              </tr>
              <tr>
                <td>Sie können morgen kommen.</td>
                <td>You can come tomorrow.</td>
                <td>possibility</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-compare">
            <span className="lrn-compare-label">COMPARE</span>
            <p>
              <strong>müssen vs. sollen:</strong> Both can translate as "should/must" in English.
              The difference is the source of the obligation.
            </p>
            <p>
              <strong>müssen</strong> = internal necessity or objective obligation. You must do it
              because of the situation itself. Example: Sie müssen viel trinken. (The illness
              demands it.)
            </p>
            <p>
              <strong>sollen</strong> = instruction or advice from another person. Someone told you
              to do it. Example: Sie sollen viel schlafen. (The doctor told you to.)
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Direct doctor orders</span>
            <p>
              A doctor can also use the formal imperative you already know: verb first, then Sie.
              "Bleiben Sie im Bett!" (Stay in bed!) and "Trinken Sie viel!" (Drink a lot!) say the
              same thing as Sie müssen, just more directly.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              A doctor says "Sie sollen Tabletten nehmen." You say "Ich muss Tabletten nehmen." Who
              decided the obligation in each sentence?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                With sollen, the doctor decided: another person gave the instruction. With müssen,
                the situation decided: your illness itself requires it.
              </p>
            </details>
          </div>
        </div>
      </>,

      <>
        <div id="lrn-section-3">
          <h2>Reflexive Verbs for Health</h2>
          <p>
            Several health verbs are reflexive in German. They use a reflexive pronoun that matches
            the subject.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              How would you say "She injured herself"? What reflexive pronoun does she need? Form
              your answer before reading the table.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                "Sie hat sich verletzt." The pronoun is <strong>sich</strong>, which covers er, sie
                (she), es, and formal Sie. Sich is the reflexive pronoun for all third-person forms.
              </p>
            </details>
          </div>

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
                <td>sich fühlen</td>
                <td>to feel</td>
                <td>Ich fühle mich nicht gut. (I do not feel well.)</td>
              </tr>
              <tr>
                <td>sich erholen</td>
                <td>to recover / rest</td>
                <td>Er erholt sich schnell. (He recovers quickly.)</td>
              </tr>
              <tr>
                <td>sich verletzen</td>
                <td>to injure oneself</td>
                <td>Sie hat sich am Knie verletzt. (She injured her knee.)</td>
              </tr>
              <tr>
                <td>sich erkälten</td>
                <td>to catch a cold</td>
                <td>Ich habe mich erkältet. (I caught a cold.)</td>
              </tr>
              <tr>
                <td>sich hinlegen</td>
                <td>to lie down</td>
                <td>Du sollst dich hinlegen. (You should lie down.)</td>
              </tr>
              <tr>
                <td>sich ausruhen</td>
                <td>to rest / take a break</td>
                <td>Sie müssen sich ausruhen. (You must rest.)</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Grammar rule</span>
            <p>
              These verbs use the reflexive pronouns you already know (mich, dich, sich, uns, euch,
              sich). The pronoun matches the subject and pairs with each health verb here.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Naming the hurt body part</span>
            <p>
              To say which body part you hurt, use <strong>an</strong> + the dative: "Sie hat sich{' '}
              <strong>am Knie</strong> verletzt." (She hurt her knee.)
            </p>
            <p>
              <strong>am</strong> is short for <strong>an dem</strong>, used with der and das body
              parts: am Kopf, am Arm, am Bein. For die body parts, use <strong>an der</strong>: an
              der Hand, an der Nase.
            </p>
          </div>

          <h3>Dialogue: At the Doctor (Beim Arzt)</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-label">ARZT</span>
              <p>Guten Morgen. Was fehlt Ihnen?</p>
              <p className="lrn-step-note">
                Good morning. What is wrong with you? (Ihnen = the dative of formal Sie, "to you")
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-label">PATIENT</span>
              <p>Ich fühle mich nicht gut. Der Hals tut mir weh und ich habe Fieber.</p>
              <p className="lrn-step-note">
                I do not feel well. My throat hurts and I have a fever.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-label">ARZT</span>
              <p>Seit wann haben Sie diese Beschwerden?</p>
              <p className="lrn-step-note">
                How long have you had these symptoms? (Beschwerden = symptoms / complaints)
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-label">PATIENT</span>
              <p>Seit gestern Abend.</p>
              <p className="lrn-step-note">Since yesterday evening.</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-label">ARZT</span>
              <p>
                Sie haben eine Erkältung. Sie müssen viel trinken und sich ausruhen. Ich schreibe
                Ihnen ein Rezept.
              </p>
              <p className="lrn-step-note">
                You have a cold. You must drink a lot and rest. I will write you a prescription.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-label">PATIENT</span>
              <p>Darf ich arbeiten gehen?</p>
              <p className="lrn-step-note">May I go to work?</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-label">ARZT</span>
              <p>Nein, Sie sollen drei Tage zu Hause bleiben.</p>
              <p className="lrn-step-note">No, you should stay home for three days.</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Look at the dialogue again. Find every modal verb the doctor uses. Then find every
              reflexive verb. What is the patient asking with Darf ich?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The doctor uses three modal verbs: <strong>müssen</strong> twice (Sie müssen viel
                trinken; Sie müssen sich ausruhen) and <strong>sollen</strong> once (Sie sollen drei
                Tage zu Hause bleiben). The reflexive verb is <strong>sich ausruhen</strong> (to
                rest). The patient uses <strong>darf ich</strong> to ask permission, which is the
                correct way to ask if something is allowed. Using dürfen to ask permission is more
                polite and precise than können.
              </p>
            </details>
          </div>

          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY INSIGHT</span>
            <p>
              "Was fehlt Ihnen?" literally means "What is lacking for you?" It is the standard
              doctor's opening question. You answer with "Ich habe..." or "... tut mir weh."
            </p>
          </div>

          <h3>Time Expressions for Symptoms (seit + Dativ)</h3>
          <p>
            German uses <strong>seit</strong> (since / for) with the dative case. It tells how long
            a symptom has lasted. The verb stays in the present tense, not the past.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Grammar rule</span>
            <p>
              <strong>seit + Dativ</strong> with present tense verb = ongoing state from the past.
            </p>
            <p>
              You already know seit takes the dative: ein becomes einem, eine becomes einer, and
              plural nouns add -n (Tage becomes Tagen).
            </p>
            <p>Ich habe seit drei Tagen Fieber. (I have had a fever for three days.)</p>
            <p>Er hustet seit einer Woche. (He has been coughing for a week.)</p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              German uses present tense with seit because the state is still happening now. English
              says "I have had" (past tense starting point), but German says "Ich habe" (present
              tense, still ongoing). German treats the current reality as what matters. The seit
              tells you when it started. The present tense tells you it has not stopped.
            </p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Expression</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>seit gestern</td>
                <td>since yesterday</td>
              </tr>
              <tr>
                <td>seit heute Morgen</td>
                <td>since this morning</td>
              </tr>
              <tr>
                <td>seit zwei Tagen</td>
                <td>for two days</td>
              </tr>
              <tr>
                <td>seit einer Woche</td>
                <td>for a week</td>
              </tr>
              <tr>
                <td>seit einem Monat</td>
                <td>for a month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ]
  },

  practice: [
    {
      q: 'What is the German word for "knee" and what article does it take?',
      a: 'Das Knie (neuter). The article is das. German body part genders are not predictable from the word shape, so you must memorize the article with each noun from the start.'
    },
    {
      q: 'Complete the sentence: "Der Kopf ___ mir weh." Why do you use that verb form?',
      a: '"Tut." Der Kopf is singular, so the verb is tut. If both ears hurt, you would say "Die Ohren tun mir weh" because Ohren is plural and requires tun instead of tut.'
    },
    {
      q: 'A friend says her back hurts. Write the sentence using both Pattern 1 and Pattern 2.',
      a: 'Pattern 1: "Der Rücken tut ihr weh." Pattern 2: "Sie hat Rückenschmerzen." Both are correct and fine to use anywhere. Pattern 1 uses the wehtun verb; Pattern 2 adds -schmerzen to the body part noun.'
    },
    {
      q: 'What is the difference between Erkältung and Grippe?',
      a: 'Erkältung is the common cold, a mild illness. Grippe is the flu, much more serious with high fever and body weakness. Never use the two words as synonyms when speaking to a doctor.'
    },
    {
      q: 'Conjugate müssen for "er". How is this different from a regular verb like "machen"?',
      a: '"Er muss." A regular verb adds -t in third person singular: "er macht." Modal verbs never add -t in ich or er/sie/es forms. Both "ich muss" and "er muss" use the same form.'
    },
    {
      q: 'Your ears hurt. Write the pain using Pattern 1. Why do you use "tun" instead of "tut"?',
      a: '"Die Ohren tun mir weh." You use tun because die Ohren is plural. The verb in Pattern 1 agrees with the number of the body part, not with the person affected. Singular body part needs tut; plural needs tun.'
    },
    {
      q: 'What does "Mir ist schlecht" mean? Why can you not translate it word for word?',
      a: 'It means "I feel nauseous." You cannot translate it directly because German uses a dative construction where the state acts on you (mir = to me). You are not the grammatical subject doing something. The state itself is the subject. English reverses this by making the person the subject: "I feel..."'
    },
    {
      q: 'The doctor says you cannot smoke. Write the German sentence using the correct modal verb.',
      a: '"Sie dürfen nicht rauchen." Dürfen expresses permission and prohibition. The negative "nicht dürfen" means you are not allowed. The infinitive rauchen goes to the end of the sentence.'
    },
    {
      q: 'What is the difference between müssen and sollen? Give a health example of each.',
      a: 'Müssen expresses obligation from the situation itself: "Sie müssen viel trinken" (the illness demands it). Sollen expresses a direct instruction from another person: "Sie sollen schlafen" (the doctor told you to). The source of the obligation is different even when both translate as "should/must" in English.'
    },
    {
      q: 'What is the reflexive pronoun for er, sie (she), and formal Sie?',
      a: 'Sich. This single pronoun covers all third-person forms including formal Sie. For example: "Er fühlt sich krank," "Sie fühlt sich krank," and "Sie fühlen sich krank" all use sich.'
    },
    {
      q: 'Say "She catches a cold easily" in German using the correct reflexive structure.',
      a: '"Sie erkältet sich leicht." Sich erkälten is a reflexive verb: the action refers back to the subject. The reflexive pronoun sich comes directly after the conjugated verb erkältet.'
    },
    {
      q: 'Translate: "Ich habe seit drei Tagen Fieber." What tense does German use and why?',
      a: 'I have had a fever for three days. German uses present tense (habe) because the fever is still happening now. Seit marks the start point. The present tense reflects that the state is ongoing and has not stopped.'
    },
    {
      q: 'How do you say "He has been coughing for two weeks" in German?',
      a: '"Er hustet seit zwei Wochen." German uses present tense because the coughing is still going on. Seit triggers the dative case: zwei Wochen stays unchanged here because Wochen is plural and already ends in -n.'
    },
    {
      q: 'A patient asks the doctor "May I go to work?" Write the German sentence.',
      a: '"Darf ich arbeiten gehen?" Darf ich is the correct way to ask for permission. Dürfen puts the modal verb in position 2 and the infinitive (gehen) at the end. Using können instead would ask about ability, not permission.'
    },
    {
      q: 'What does "Was fehlt Ihnen?" literally mean and when do you hear it?',
      a: '"What is lacking for you?" It is the standard opening question a German doctor asks. You answer with "Ich habe..." (for symptoms you have) or "...tut mir weh" (for pain using Pattern 1).'
    },
    {
      q: 'Why does German require sich in "Ich fühle mich nicht gut" when English just says "I feel"?',
      a: 'Sich fühlen is a reflexive verb in German: the grammar requires the action to be marked as referring back to the subject. The reflexive pronoun mich is obligatory, not optional. Dropping it would be ungrammatical. English does not have this requirement for fühlen equivalents.'
    },
    {
      q: 'What dative form does "eine Woche" take after "seit"?',
      a: '"Einer Woche." Seit triggers the dative case. Eine (feminine indefinite article) becomes einer in the dative. So "seit einer Woche" means "for a week".'
    },
    {
      q: 'You pick up medicine after your appointment. Name the place and the word for what you collect.',
      a: 'Die Apotheke (pharmacy) is where you go. You collect das Medikament (medication) or die Tabletten (tablets). The doctor writes you das Rezept (prescription) first.'
    },
    {
      q: 'What is the difference between Bauch and Magen?',
      a: 'Both translate as "stomach" in English, but they are not the same. Bauch is the everyday word for belly or stomach area. Magen refers specifically to the stomach organ. Bauchschmerzen is the common word for stomachache. Magenschmerzen is more clinical.'
    },
    {
      q: 'Write "May I do sport?" in German. Which modal verb expresses asking permission?',
      a: '"Darf ich Sport machen?" Dürfen is the correct modal verb for asking permission. In the question, darf goes to position 1 (because it is a yes/no question) and the infinitive machen goes to the end.'
    },
    {
      q: 'How do you say "I have a stomachache" using the -schmerzen compound pattern?',
      a: '"Ich habe Bauchschmerzen." The compound adds -schmerzen to the body part noun. Der Bauch becomes Bauchschmerzen. The article drops and the word becomes a plural noun used without an article in this construction.'
    },
    {
      q: 'What does sich ausruhen mean and how do you use it in a sentence with a modal verb?',
      a: 'Sich ausruhen means "to rest." With a modal verb: "Sie müssen sich ausruhen" (You must rest). The modal verb müssen goes in position 2, sich stays close to the subject, and the infinitive ausruhen goes to the end.'
    },
    {
      q: 'English says "I have had a cold for a week" using the past. What is the German equivalent using seit?',
      a: '"Ich habe seit einer Woche eine Erkältung." German uses present tense because the cold is still happening. Seit signals when it started. The present tense signals it has not ended. This is a required pattern in German, not optional.'
    },
    {
      q: 'What is the difference between Krankenkasse and Krankenversicherung?',
      a: 'Krankenkasse is the specific health fund institution you belong to as a member, for example AOK or TK. Krankenversicherung is the broader concept of having health insurance coverage. A receptionist asks "Welche Krankenkasse haben Sie?" not Krankenversicherung.'
    }
  ],

  reference: {
    category: 'Quick Reference',
    title: 'Gesundheit und der Körper',
    sections: [
      <>
        <h2>Body Parts (Körperteile)</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>Gender</th>
              <th>English</th>
              <th>Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der Kopf</td>
              <td>masc.</td>
              <td>head</td>
              <td>die Köpfe</td>
            </tr>
            <tr>
              <td>das Gesicht</td>
              <td>neut.</td>
              <td>face</td>
              <td>die Gesichter</td>
            </tr>
            <tr>
              <td>das Auge</td>
              <td>neut.</td>
              <td>eye</td>
              <td>die Augen</td>
            </tr>
            <tr>
              <td>das Ohr</td>
              <td>neut.</td>
              <td>ear</td>
              <td>die Ohren</td>
            </tr>
            <tr>
              <td>die Nase</td>
              <td>fem.</td>
              <td>nose</td>
              <td>die Nasen</td>
            </tr>
            <tr>
              <td>der Mund</td>
              <td>masc.</td>
              <td>mouth</td>
              <td>die Münder</td>
            </tr>
            <tr>
              <td>der Zahn</td>
              <td>masc.</td>
              <td>tooth</td>
              <td>die Zähne</td>
            </tr>
            <tr>
              <td>der Hals</td>
              <td>masc.</td>
              <td>neck / throat</td>
              <td>die Hälse</td>
            </tr>
            <tr>
              <td>die Schulter</td>
              <td>fem.</td>
              <td>shoulder</td>
              <td>die Schultern</td>
            </tr>
            <tr>
              <td>der Arm</td>
              <td>masc.</td>
              <td>arm</td>
              <td>die Arme</td>
            </tr>
            <tr>
              <td>die Hand</td>
              <td>fem.</td>
              <td>hand</td>
              <td>die Hände</td>
            </tr>
            <tr>
              <td>der Finger</td>
              <td>masc.</td>
              <td>finger</td>
              <td>die Finger</td>
            </tr>
            <tr>
              <td>der Bauch</td>
              <td>masc.</td>
              <td>stomach / belly</td>
              <td>die Bäuche</td>
            </tr>
            <tr>
              <td>der Magen</td>
              <td>masc.</td>
              <td>stomach (organ)</td>
              <td>die Mägen</td>
            </tr>
            <tr>
              <td>der Rücken</td>
              <td>masc.</td>
              <td>back</td>
              <td>die Rücken</td>
            </tr>
            <tr>
              <td>das Bein</td>
              <td>neut.</td>
              <td>leg</td>
              <td>die Beine</td>
            </tr>
            <tr>
              <td>das Knie</td>
              <td>neut.</td>
              <td>knee</td>
              <td>die Knie</td>
            </tr>
            <tr>
              <td>der Fuß</td>
              <td>masc.</td>
              <td>foot</td>
              <td>die Füße</td>
            </tr>
          </tbody>
        </table>

        <h2>Pain Patterns</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Formula</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pattern 1 (wehtun)</td>
              <td>body part + tut/tun + dative pronoun + weh</td>
              <td>Der Kopf tut mir weh. / Die Beine tun mir weh.</td>
            </tr>
            <tr>
              <td>Pattern 2 (-schmerzen)</td>
              <td>Ich habe + body part + -schmerzen</td>
              <td>Ich habe Kopfschmerzen.</td>
            </tr>
            <tr>
              <td>Pattern 3 (impersonal)</td>
              <td>Mir ist + adjective</td>
              <td>Mir ist schlecht. (I feel nauseous.)</td>
            </tr>
          </tbody>
        </table>

        <h2>-schmerzen Compounds</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kopfschmerzen</td>
              <td>headache</td>
            </tr>
            <tr>
              <td>Halsschmerzen</td>
              <td>sore throat</td>
            </tr>
            <tr>
              <td>Bauchschmerzen</td>
              <td>stomachache</td>
            </tr>
            <tr>
              <td>Rückenschmerzen</td>
              <td>back pain</td>
            </tr>
            <tr>
              <td>Zahnschmerzen</td>
              <td>toothache</td>
            </tr>
            <tr>
              <td>Ohrenschmerzen</td>
              <td>earache</td>
            </tr>
          </tbody>
        </table>

        <h2>Symptoms (Symptome)</h2>
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
              <td>das Fieber</td>
              <td>fever</td>
              <td>Ich habe Fieber.</td>
            </tr>
            <tr>
              <td>der Husten</td>
              <td>cough</td>
              <td>Ich habe Husten.</td>
            </tr>
            <tr>
              <td>der Schnupfen</td>
              <td>runny nose</td>
              <td>Ich habe Schnupfen.</td>
            </tr>
            <tr>
              <td>die Erkältung</td>
              <td>cold (illness)</td>
              <td>Ich habe eine Erkältung.</td>
            </tr>
            <tr>
              <td>die Grippe</td>
              <td>flu</td>
              <td>Ich habe die Grippe.</td>
            </tr>
            <tr>
              <td>die Übelkeit</td>
              <td>nausea</td>
              <td>Ich habe Übelkeit.</td>
            </tr>
            <tr>
              <td>die Allergie</td>
              <td>allergy</td>
              <td>Ich habe eine Allergie gegen...</td>
            </tr>
            <tr>
              <td>krank</td>
              <td>ill / sick</td>
              <td>Ich bin krank.</td>
            </tr>
            <tr>
              <td>gesund</td>
              <td>healthy / well</td>
              <td>Ich bin wieder gesund.</td>
            </tr>
            <tr>
              <td>müde</td>
              <td>tired</td>
              <td>Ich bin sehr müde.</td>
            </tr>
            <tr>
              <td>schwach</td>
              <td>weak</td>
              <td>Ich fühle mich schwach.</td>
            </tr>
          </tbody>
        </table>

        <h2>Doctor and Healthcare (Beim Arzt)</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>der Arzt / die Ärztin</td>
              <td>doctor (masc. / fem.)</td>
            </tr>
            <tr>
              <td>die Praxis</td>
              <td>doctor's office / practice</td>
            </tr>
            <tr>
              <td>der Termin</td>
              <td>appointment</td>
            </tr>
            <tr>
              <td>das Rezept</td>
              <td>prescription</td>
            </tr>
            <tr>
              <td>die Tablette / die Tabletten</td>
              <td>tablet / tablets</td>
            </tr>
            <tr>
              <td>das Medikament</td>
              <td>medicine / medication</td>
            </tr>
            <tr>
              <td>die Apotheke</td>
              <td>pharmacy</td>
            </tr>
            <tr>
              <td>das Krankenhaus</td>
              <td>hospital</td>
            </tr>
            <tr>
              <td>die Krankenkasse</td>
              <td>health fund (institution)</td>
            </tr>
            <tr>
              <td>die Krankenversicherung</td>
              <td>health insurance (concept)</td>
            </tr>
            <tr>
              <td>krank schreiben</td>
              <td>to sign off sick</td>
            </tr>
            <tr>
              <td>die Beschwerden</td>
              <td>symptoms / complaints</td>
            </tr>
          </tbody>
        </table>

        <h2>Modal Verbs: Present Tense (Präsens)</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>müssen</th>
              <th>sollen</th>
              <th>dürfen</th>
              <th>können</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>muss</td>
              <td>soll</td>
              <td>darf</td>
              <td>kann</td>
            </tr>
            <tr>
              <td>du</td>
              <td>musst</td>
              <td>sollst</td>
              <td>darfst</td>
              <td>kannst</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>muss</td>
              <td>soll</td>
              <td>darf</td>
              <td>kann</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>müssen</td>
              <td>sollen</td>
              <td>dürfen</td>
              <td>können</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>müsst</td>
              <td>sollt</td>
              <td>dürft</td>
              <td>könnt</td>
            </tr>
            <tr>
              <td>Sie / sie</td>
              <td>müssen</td>
              <td>sollen</td>
              <td>dürfen</td>
              <td>können</td>
            </tr>
          </tbody>
        </table>

        <h2>Modal Verb Usage Guide</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Modal</th>
              <th>Use</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>müssen</td>
              <td>obligation (situation demands it)</td>
              <td>Sie müssen im Bett bleiben.</td>
            </tr>
            <tr>
              <td>sollen</td>
              <td>instruction (another person said so)</td>
              <td>Sie sollen viel schlafen.</td>
            </tr>
            <tr>
              <td>dürfen (neg.)</td>
              <td>prohibition</td>
              <td>Sie dürfen nicht rauchen.</td>
            </tr>
            <tr>
              <td>dürfen</td>
              <td>asking / granting permission</td>
              <td>Darf ich Sport machen?</td>
            </tr>
            <tr>
              <td>können</td>
              <td>ability / possibility</td>
              <td>Ich kann nicht schlafen.</td>
            </tr>
          </tbody>
        </table>

        <h2>Reflexive Verbs for Health</h2>
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
              <td>sich fühlen</td>
              <td>to feel</td>
              <td>Ich fühle mich nicht gut.</td>
            </tr>
            <tr>
              <td>sich erholen</td>
              <td>to recover / rest</td>
              <td>Er erholt sich schnell.</td>
            </tr>
            <tr>
              <td>sich verletzen</td>
              <td>to injure oneself</td>
              <td>Sie hat sich verletzt.</td>
            </tr>
            <tr>
              <td>sich erkälten</td>
              <td>to catch a cold</td>
              <td>Ich habe mich erkältet.</td>
            </tr>
            <tr>
              <td>sich hinlegen</td>
              <td>to lie down</td>
              <td>Du sollst dich hinlegen.</td>
            </tr>
            <tr>
              <td>sich ausruhen</td>
              <td>to rest / take a break</td>
              <td>Sie müssen sich ausruhen.</td>
            </tr>
          </tbody>
        </table>

        <h2>Reflexive Pronouns</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>Reflexive pronoun</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>mich</td>
            </tr>
            <tr>
              <td>du</td>
              <td>dich</td>
            </tr>
            <tr>
              <td>er / sie / es</td>
              <td>sich</td>
            </tr>
            <tr>
              <td>wir</td>
              <td>uns</td>
            </tr>
            <tr>
              <td>ihr</td>
              <td>euch</td>
            </tr>
            <tr>
              <td>Sie / sie</td>
              <td>sich</td>
            </tr>
          </tbody>
        </table>

        <h2>seit + Dative Time Expressions</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Expression</th>
              <th>English</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>seit gestern</td>
              <td>since yesterday</td>
              <td>no article change</td>
            </tr>
            <tr>
              <td>seit heute Morgen</td>
              <td>since this morning</td>
              <td>no article change</td>
            </tr>
            <tr>
              <td>seit zwei Tagen</td>
              <td>for two days</td>
              <td>plural, -n already present</td>
            </tr>
            <tr>
              <td>seit einer Woche</td>
              <td>for a week</td>
              <td>eine → einer (fem. dative)</td>
            </tr>
            <tr>
              <td>seit einem Monat</td>
              <td>for a month</td>
              <td>ein → einem (masc. dative)</td>
            </tr>
          </tbody>
        </table>

        <h2>Key Dialogue Phrases</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>German</th>
              <th>English</th>
              <th>Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Was fehlt Ihnen?</td>
              <td>What is wrong with you?</td>
              <td>Doctor's opening question</td>
            </tr>
            <tr>
              <td>Seit wann haben Sie...?</td>
              <td>How long have you had...?</td>
              <td>Doctor asking duration</td>
            </tr>
            <tr>
              <td>Ich fühle mich nicht gut.</td>
              <td>I do not feel well.</td>
              <td>Patient's opening reply</td>
            </tr>
            <tr>
              <td>... tut mir weh.</td>
              <td>My ... hurts.</td>
              <td>Pain Pattern 1</td>
            </tr>
            <tr>
              <td>Ich habe...schmerzen.</td>
              <td>I have a ... ache.</td>
              <td>Pain Pattern 2</td>
            </tr>
            <tr>
              <td>Mir ist schlecht.</td>
              <td>I feel nauseous.</td>
              <td>Impersonal dative</td>
            </tr>
            <tr>
              <td>Darf ich...?</td>
              <td>May I...?</td>
              <td>Asking permission</td>
            </tr>
            <tr>
              <td>Ich schreibe Ihnen ein Rezept.</td>
              <td>I will write you a prescription.</td>
              <td>Doctor's instruction</td>
            </tr>
          </tbody>
        </table>
      </>
    ]
  },

  customCss: null
}

export default function HealthAndTheBody() {
  return <LearningTemplate config={config} />
}
