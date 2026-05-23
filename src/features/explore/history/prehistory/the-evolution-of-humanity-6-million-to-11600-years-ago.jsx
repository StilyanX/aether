import { LearningTemplate } from '../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'eoh',
  documentTitle: 'The Evolution of Humanity: 6 Million to 11,600 Years Ago / AETHER',
  learning: {
    groupTitle: 'The Evolution of Humanity',
    title: 'The Evolution of Humanity: 6 Million to 11,600 Years Ago',
    subtitle:
      'From the first upright walkers in Africa to the peopling of the Americas. Six million years of human evolution.',
    sections: [
      // ── SECTION 0 ──────────────────────────────────────────────────────────
      <section key="s0" id="lrn-section-0">
        <h2>The First Hominins (7 to 4 Ma)</h2>
        <p>
          Every person alive today descends from a line of African apes that learned to walk upright
          on two legs. That change happened roughly 6 to 7 million years ago. The whole human line
          then stayed in Africa for the next several million years.
        </p>
        <p>
          The oldest hominin candidate is <em>Sahelanthropus tchadensis</em>, found in Chad and
          dated to ~6.7 Ma. Its skull has a small braincase and a face flatter than a chimpanzee's.
          Its foramen magnum sits forward under the skull, hinting at upright walking. Scientists
          still debate whether it really walked on two legs.
        </p>
        <figure className="lrn-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Sahelanthropus_tchadensis_-_TM_266-01-060-1.jpg"
            alt="Cast of the Sahelanthropus tchadensis skull TM 266-01-060-1, lateral view"
          />
          <figcaption>
            Cast of the <em>Sahelanthropus tchadensis</em> holotype skull (Toumai), Chad, ~6.7 Ma.
            Photo: Didier Descouens, CC BY-SA 4.0.{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Sahelanthropus_tchadensis_-_TM_266-01-060-1.jpg">
              Source
            </a>
          </figcaption>
        </figure>
        <p>Two other early hominins fill in the 6 to 4 Ma gap:</p>
        <ul className="lrn-list">
          <li>
            <em>Orrorin tugenensis</em> (~6 Ma, Kenya): femur bone shape shows bipedal walking.
          </li>
          <li>
            <em>Ardipithecus</em> (5.8 to 4.4 Ma, Ethiopia): walked upright but still climbed trees.
            Ardi (ARA-VP-6/500) shows a grasping big toe for tree climbing.
          </li>
        </ul>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Hominin</div>
          <div className="lrn-definition-desc">
            <p>
              Humans and all extinct relatives after the split from chimpanzees. The word replaced
              the older term "hominid," which now refers to all great apes including humans.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Foramen magnum</div>
          <div className="lrn-definition-desc">
            <p>
              The hole at the base of the skull where the spinal cord exits. In upright walkers it
              sits under the skull. In knuckle-walkers it sits toward the back.
            </p>
          </div>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>Why must the foramen magnum sit under the skull in upright walkers?</p>
          <p>
            A vertical spine balances the head directly above it. The hole must point straight down
            so the spinal cord connects without bending sharply. In knuckle-walkers the spine comes
            in from behind. The hole points backward to meet it.
          </p>
        </div>
      </section>,

      // ── SECTION 1 ──────────────────────────────────────────────────────────
      <section key="s1" id="lrn-section-1">
        <h2>Walking Upright: Australopithecus (4 to 2 Ma)</h2>
        <p>
          The genus <em>Australopithecus</em> lived in Africa from ~4.2 to 1.2 Ma. These hominins
          walked upright on two legs but had brains only slightly larger than a chimpanzee's (380 to
          550 cc).
        </p>
        <p>
          <em>Australopithecus anamensis</em> (~4.2 to 3.9 Ma, Kenya and Ethiopia) is the oldest
          well-known australopith. It gave rise to <em>A. afarensis</em> (~3.9 to 2.9 Ma), which is
          one of the best-documented early hominins.
        </p>
        <figure className="lrn-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/da/Squelette_de_Lucy.JPG"
            alt="Cast of the Lucy skeleton, Australopithecus afarensis, AL 288-1"
          />
          <figcaption>
            Cast of Lucy (AL 288-1), <em>Australopithecus afarensis</em>, discovered in Ethiopia in
            1974. About 40% of her skeleton survived. American Museum of Natural History.{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Squelette_de_Lucy.JPG">Source</a>
          </figcaption>
        </figure>
        <p>
          Lucy (AL 288-1) was found in the Hadar region of Ethiopia in 1974 and dated to ~3.2 Ma.
          Her knee joint confirms she walked fully upright on two legs. Her brain was small and her
          arms were still long for climbing trees.
        </p>
        <p>
          The Laetoli site in Tanzania preserves footprints of three <em>A. afarensis</em>{' '}
          individuals walking across fresh volcanic ash ~3.5 Ma. These are the oldest direct
          evidence of bipedalism.
        </p>
        <figure className="lrn-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/Laetoli_footprints_replica.jpg"
            alt="Replica of the Laetoli hominin footprints, 3.5 Ma, Tanzania"
          />
          <figcaption>
            Replica of the Laetoli footprint trackway, Tanzania, ~3.5 Ma. Hominins walked upright
            across volcanic ash. National Museum of Nature and Science, Tokyo.{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Laetoli_footprints_replica.jpg">
              Source
            </a>
          </figcaption>
        </figure>
        <p>
          <em>Australopithecus africanus</em> (~3 to 2.4 Ma, South Africa) includes the Taung Child,
          discovered by Raymond Dart in 1924. It was the first australopith identified.
        </p>
        <p>
          The <em>Paranthropus</em> line (2.7 to 1.2 Ma) branched off from australopiths. These
          hominins had massive jaws, thick tooth enamel, and a bony ridge along the top of the skull
          (the sagittal crest, which modern humans do not have) for anchoring huge chewing muscles.
          That kit let them grind tough roots, tubers, and hard seeds. The diet stayed stable for
          1.5 million years, so the line survived a long time without ever growing a bigger brain.
          Three species are known: <em>P. aethiopicus</em>, <em>P. boisei</em> (East Africa), and{' '}
          <em>P. robustus</em> (South Africa). All went extinct by 1.2 Ma.
        </p>
        <div className="lrn-insight">
          <p>
            Bipedalism came first. Big brains came millions of years later. Walking upright did not
            require a large brain.
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY DOES THIS MATTER?</span>
          <p>Why does it matter that bipedalism came first and big brains came later?</p>
          <p>
            Big brains are expensive to grow and feed. If walking upright could evolve in a
            small-brained ape, then bipedalism was not driven by intelligence. Simpler forces
            selected for it: carrying food, reaching fruit, or moving long distances across open
            ground. The whole "smart ape stood up" story has the order wrong.
          </p>
        </div>
      </section>,

      // ── SECTION 2 ──────────────────────────────────────────────────────────
      <section key="s2" id="lrn-section-2">
        <h2>The First Stone Tools and Early Homo (2.6 to 1.6 Ma)</h2>
        <p>
          The earliest stone tools appear at ~2.6 Ma at Gona, Ethiopia. They belong to the{' '}
          <strong>Oldowan industry</strong> (Mode 1). Toolmakers knocked flakes off river cobbles to
          produce sharp edges for cutting. The tools are simple but took real skill to make.
        </p>
        <figure className="lrn-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Olduvai_stone_chopping_tool_british_museum.JPG"
            alt="Oldowan stone chopping tool from Olduvai Gorge, British Museum"
          />
          <figcaption>
            Oldowan stone chopping tool from Olduvai Gorge, Tanzania. These are the world's oldest
            known tools. British Museum.{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Olduvai_stone_chopping_tool_british_museum.JPG">
              Source
            </a>
          </figcaption>
        </figure>
        <p>
          Early members of the genus <em>Homo</em> appear at ~2.4 Ma. Two species are debated:
        </p>
        <ul className="lrn-list">
          <li>
            <em>Homo habilis</em> ("handy man"): ~2.4 to 1.6 Ma. Brain ~550 to 687 cc. Found in East
            and South Africa.
          </li>
          <li>
            <em>Homo rudolfensis</em>: ~2.4 to 1.8 Ma. Larger brain and face. Some researchers
            consider it a variant of <em>H. habilis</em>.
          </li>
        </ul>
        <p>
          <em>Homo ergaster</em> (~1.9 to 1.4 Ma, Africa) marks a major step forward. The
          Nariokotome Boy (KNM-WT 15000) is an almost complete skeleton of a ~12-year-old male from
          Kenya. His body plan was nearly modern: tall, slender limbs built for walking long
          distances across open ground, a smaller gut (the sign of a meatier diet), and a brain of
          ~900 cc. Ergaster looked like a person, not an ape.
        </p>
        <figure className="lrn-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Fossil_KNM-ER_3733.JPG"
            alt="Replica of the KNM-ER 3733 skull, Homo ergaster/erectus, Senckenberg Museum"
          />
          <figcaption>
            KNM-ER 3733, replica of an early <em>Homo ergaster</em> skull, Kenya, ~1.7 Ma.
            Senckenberg Museum, Frankfurt. Photo: CC BY-SA 3.0.{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Fossil_KNM-ER_3733.JPG">Source</a>
          </figcaption>
        </figure>
        <p>
          <em>Homo ergaster</em> made the <strong>Acheulean handaxe</strong>. This was a
          teardrop-shaped bifacial tool flaked on both sides to a sharp edge all around. The
          Acheulean industry (Mode 2) appears ~1.76 Ma at Kokiselei, Kenya.
        </p>
        <figure className="lrn-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Acheulean_handaxe.png"
            alt="Drawing of an Acheulean handaxe from Spain"
          />
          <figcaption>
            Acheulean handaxe, Spain. Bifacially worked to a symmetrical teardrop shape. These tools
            appeared ~1.76 Ma and were made for over a million years.{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Acheulean_handaxe.png">Source</a>
          </figcaption>
        </figure>
        <div className="lrn-compare">
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Oldowan (Mode 1)</div>
            <p>Simple choppers and flakes. Minimal shaping. Any sharp edge will do.</p>
            <p>
              Age: ~2.6 to 1.7 Ma. Associated with early <em>Homo</em> and possibly late
              australopiths.
            </p>
          </div>
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Acheulean (Mode 2)</div>
            <p>Bifacially flaked handaxes and cleavers. Symmetrical, standardized shapes.</p>
            <p>
              Age: ~1.76 Ma to 200 ka. Associated with <em>H. ergaster</em> and{' '}
              <em>H. heidelbergensis</em>.
            </p>
          </div>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>Why does the Acheulean handaxe represent a leap over the Oldowan chopper?</p>
          <p>
            An Oldowan tool just needs a sharp edge. An Acheulean handaxe needs a mental image of
            the finished shape before you start striking. You must plan the order of blows and
            rotate the stone in your mind. This signals a real jump in cognitive ability.
          </p>
        </div>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You find Oldowan tools at a 3 Ma site in East Africa but no hominin fossils nearby. What
            hominins could be the toolmakers?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The candidates are late <em>Australopithecus garhi</em>, robust australopiths, or
              early <em>Homo</em>. <em>A. garhi</em> is the most likely: cut marks on bones appear
              alongside garhi fossils. Any of these could have produced sharp flakes.
            </p>
          </details>
        </div>
      </section>,

      // ── SECTION 3 ──────────────────────────────────────────────────────────
      <section key="s3" id="lrn-section-3">
        <h2>Out of Africa: The First Dispersals (1.8 to 500 ka)</h2>
        <p>
          <em>Homo ergaster</em> or an early relative left Africa by ~1.8 Ma. The site of Dmanisi in
          Georgia provides the best evidence. Fossils there date to ~1.77 Ma and show a
          small-brained hominin with a mix of primitive and advanced features.
        </p>
        <p>
          The Dmanisi hominins had brains of ~600 to 775 cc. This was smaller than African hominins
          of the same age. One individual was elderly and toothless yet survived for years,
          suggesting the group cared for its members.
        </p>
        <p>
          A toothless old individual at Dmanisi survived for years even though they could not chew
          hard food. Someone else must have shared or prepared food for them. That is the oldest
          good evidence of early <em>Homo</em> caring for its weaker members.
        </p>
        <p>
          East Asia was reached by ~1.6 Ma. <em>Homo erectus</em> fossils appear in Java (Trinil)
          and later at Zhoukoudian near Beijing ("Peking Man", ~780 to 400 ka). Zhoukoudian
          preserves hearth evidence, suggesting controlled fire use by ~500 ka.
        </p>
        <p>
          East of a boundary called the <strong>Movius Line</strong>, hominins used simpler chopper
          tools instead of handaxes. Africa, Europe, and West Asia have Acheulean handaxes; South
          and East Asia do not. The reason is still debated (see below).
        </p>
        <div className="lrn-callout">
          <p>
            Gesher Benot Ya'aqov in Israel preserves wood, seeds, and hearth residues dated to ~790
            ka. This is strong evidence for fire use by <em>H. erectus</em> dispersing out of
            Africa.
          </p>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Movius Line</div>
          <div className="lrn-definition-desc">
            <p>
              A boundary drawn by Hallam Movius in 1948. West of the line (Africa, Europe, West
              Asia): Acheulean handaxes. East of the line (South and East Asia): simpler chopper
              tools. The reason for the difference is still debated.
            </p>
          </div>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>Why might East Asian hominins have used simpler chopper tools than African ones?</p>
          <p>
            One reason is isolation: the dispersing groups may have left Africa before the Acheulean
            was invented. Another is raw material: East Asian rocks may not flake as well. A third
            is bamboo: tools made from bamboo replace stone in many tasks but leave no
            archaeological trace.
          </p>
        </div>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A 1.6 Ma site in Java produces a perfect Acheulean handaxe. What would that overturn?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              It would overturn the Movius Line as a real cultural boundary. It would force
              researchers to ask why Acheulean tools are missing from later East Asian sites. The
              "lost technology" and "no good raw material" theories would grow stronger.
            </p>
          </details>
        </div>
      </section>,

      // ── SECTION 4 ──────────────────────────────────────────────────────────
      <section key="s4" id="lrn-section-4">
        <h2>Homo heidelbergensis and the Neanderthals (700 to 40 ka)</h2>
        <p>
          <em>Homo heidelbergensis</em> (~700 to 200 ka) is a broadly defined species found in
          Africa and Europe. It had a brain of ~1,100 to 1,400 cc, close to the modern range. Key
          sites include Boxgrove, England, and Mauer, Germany (jaw).
        </p>
        <p>
          The site of Atapuerca in northern Spain contains the Sima de los Huesos ("Pit of Bones"),
          where at least 28 individuals were deposited ~430 ka. Their skulls looked like early
          Neanderthals, but their mitochondrial DNA matched Denisovans, not Neanderthals. Anatomy
          and genetics told different stories. The family tree of these groups is more tangled than
          a simple set of branches.
        </p>
        <p>
          The Neanderthals (<em>Homo neanderthalensis</em>) lived in Europe and western Asia ~250 to
          40 ka. Their anatomy was built for cold climates:
        </p>
        <ul className="lrn-list">
          <li>
            Short limbs and a stocky body: less skin exposed to cold air, less heat lost from the
            body.
          </li>
          <li>Large nose: warms and moistens cold dry air before it reaches the lungs.</li>
          <li>Prominent brow ridges and a chin that slopes back instead of jutting forward.</li>
          <li>Brain ~1,200 to 1,750 cc, overlapping the modern human range.</li>
        </ul>
        <figure className="lrn-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Boule1912.png"
            alt="Historical reconstruction of the Neanderthal skeleton from La Chapelle-aux-Saints by Marcellin Boule, 1912"
          />
          <figcaption>
            Marcellin Boule's 1912 reconstruction of the La Chapelle-aux-Saints Neanderthal. Boule
            incorrectly portrayed a stooped posture; Neanderthals actually walked fully upright.{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Boule1912.png">Source</a>
          </figcaption>
        </figure>
        <p>
          Neanderthals made the <strong>Mousterian industry</strong> (Mode 3), using the Levallois
          technique to produce standardized flakes from a carefully prepared core. They buried their
          dead (Shanidar Cave, Iraq; La Chapelle-aux-Saints, France) and used ochre, suggesting
          symbolic behavior.
        </p>
        <div className="lrn-compare">
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Mousterian (Mode 3)</div>
            <p>
              Levallois-prepared core technique. Produces sharp standardized flakes and scrapers.
            </p>
            <p>Associated with Neanderthals, ~300 to 40 ka, Europe and western Asia.</p>
          </div>
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Aurignacian (Mode 4)</div>
            <p>Blade-based technology. Long, thin blades struck from prismatic cores.</p>
            <p>
              Associated with anatomically modern humans, ~43 to 26 ka, Europe. Includes bone/antler
              tools and personal ornaments.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Levallois technique</div>
          <div className="lrn-definition-desc">
            <p>
              A way of preparing a stone core so you can strike off a flake of predictable shape and
              size. You shape the core first, then deliver one blow to detach the finished flake. It
              requires planning ahead.
            </p>
          </div>
        </div>
      </section>,

      // ── SECTION 5 ──────────────────────────────────────────────────────────
      <section key="s5" id="lrn-section-5">
        <h2>Origins of Anatomically Modern Humans (200 to 50 ka)</h2>
        <p>
          Anatomically modern humans (<em>Homo sapiens</em>) first appear in the fossil record in
          Africa ~195 to 160 ka. The oldest confirmed fossils come from Omo Kibish, Ethiopia (~195
          ka) and Herto, Ethiopia (~160 ka). Both already show the four traits that define modern
          anatomy: a rounded skull, a vertical forehead, small brow ridges, and a true chin (jutting
          out below the front teeth instead of sloping back).
        </p>
        <p>Four hypotheses compete to explain where and how modern humans came to be:</p>
        <div className="lrn-steps">
          <ol className="lrn-list">
            <li>
              <strong>Recent African Origin:</strong> All modern humans descend from one African
              population that expanded ~60 to 70 ka and replaced archaic hominins elsewhere with
              little or no interbreeding.
            </li>
            <li>
              <strong>Assimilation:</strong> A mainly African population spread outward and absorbed
              genes from local archaic populations as it went.
            </li>
            <li>
              <strong>Multiregional Evolution:</strong> Modern humans evolved at the same time in
              Africa, Europe, and Asia from local populations connected by gene flow. Most
              geneticists reject the strong version of this.
            </li>
            <li>
              <strong>Hybridization and Replacement:</strong> Modern humans replaced archaic
              hominins but interbred with them at contact zones.
            </li>
          </ol>
        </div>
        <p>
          Ancient DNA from Neanderthal and Denisovan genomes now supports a version of the
          Assimilation model. Non-African modern humans carry 1 to 4% Neanderthal DNA. Some
          Melanesian populations carry up to 5% Denisovan DNA.
        </p>
        <div className="lrn-insight">
          <p>
            The mitochondrial DNA of every living person traces back to one woman in Africa ~200 ka,
            often called "mitochondrial Eve." This does not mean only one woman lived then. It means
            every other female line from her time has since died out.
          </p>
        </div>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Ancient DNA from a 300 ka African fossil shows the same Neanderthal-style genes as
            European fossils. What model does this favour?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              It favours the Assimilation model. Gene flow ran between African and European
              populations earlier than thought. The simple Recent African Origin model weakens. The
              picture of evolution shifts from a clean tree to a web.
            </p>
          </details>
        </div>
      </section>,

      // ── SECTION 6 ──────────────────────────────────────────────────────────
      <section key="s6" id="lrn-section-6">
        <h2>Behavioural Modernity (100 to 30 ka)</h2>
        <p>
          Modern anatomy preceded modern behaviour by tens of thousands of years. The earliest
          evidence for symbolic thinking comes from South Africa:
        </p>
        <ul className="lrn-list">
          <li>
            <strong>Blombos Cave (~100 ka):</strong> Ochre pieces engraved with geometric patterns.
            Ochre processing kits (shells used as containers). Shell beads pierced for stringing.
          </li>
          <li>
            <strong>Pinnacle Point (~164 ka):</strong> Earliest known use of heat treatment to
            improve stone knapping quality.
          </li>
          <li>
            <strong>Howiesons Poort (~65 to 60 ka):</strong> Backed blades and geometric microliths.
            They disappeared before reappearing later. Shows behavioural innovation was not linear.
          </li>
        </ul>
        <p>
          By ~45 ka in Europe, modern humans were making the <strong>Aurignacian industry</strong>:
          long blade tools, bone and antler points, perforated beads, and carved ivory figurines.
          This is the clearest break with Neanderthal technology.
        </p>
        <p>
          The <strong>Initial Upper Palaeolithic</strong> (~50 to 40 ka, West Asia and eastern
          Europe) is an in-between blade-based industry that predates the Aurignacian. It may mark
          the first wave of modern humans leaving Africa.
        </p>
        <div className="lrn-callout">
          <p>
            Behavioural modernity was not a single event. Symbolic and technological innovations
            appear, disappear, and reappear across Africa and Eurasia over 100,000 years. The "human
            revolution" was a gradual process.
          </p>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Hunting</div>
            <p>
              Active pursuit and killing of prey. Requires planning, cooperative action, and
              purpose-made weapons.
            </p>
            <p>
              Evidence: cut marks over carnivore marks, embedded points in bone, Schoningen wooden
              spears (~320 ka).
            </p>
          </div>
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Scavenging</div>
            <p>
              Taking meat from carcasses killed by other predators. Requires less planning but
              competes with hyenas and lions.
            </p>
            <p>
              Evidence: cut marks under carnivore marks, low-utility bone parts processed. Probably
              both strategies were used.
            </p>
          </div>
        </div>
      </section>,

      // ── SECTION 7 ──────────────────────────────────────────────────────────
      <section key="s7" id="lrn-section-7">
        <h2>The Neanderthal Genome and Interbreeding</h2>
        <p>
          In 2010, Svante Paabo's team sequenced the full Neanderthal genome from three individuals
          at Vindija Cave, Croatia. The result settled the long-running argument about
          interbreeding. Modern humans and Neanderthals had children together after modern humans
          left Africa, before the dispersal across Eurasia. Paabo received the 2022 Nobel Prize in
          Physiology or Medicine for this work.
        </p>
        <p>
          The <strong>Denisovans</strong> were identified from a single finger bone at Denisova Cave
          in the Altai Mountains, Russia (~48,000 to 30,000 BP). Ancient DNA identified them as a
          separate group that shared a common ancestor with Neanderthals. Melanesian and Aboriginal
          Australian populations carry up to 4 to 5% Denisovan DNA.
        </p>
        <ul className="lrn-list">
          <li>
            Neanderthals and Denisovans shared Denisova Cave at different times. One individual
            ("Denny") had a Neanderthal mother and Denisovan father.
          </li>
          <li>
            Neanderthals carried the <em>FOXP2</em> gene variant found in modern humans. FOXP2 is
            linked to speech and language production.
          </li>
          <li>
            Neanderthal gene variants now in modern humans include immune-related genes (HLA), skin
            genes, and variants that affect COVID-19 severity.
          </li>
        </ul>
        <div className="lrn-insight">
          <p>
            Non-African modern humans carry 1 to 4% Neanderthal DNA. The Neanderthal line ended, but
            Neanderthal genes live on in every person whose ancestry traces outside Africa. That
            number forced the replacement model to give ground to the assimilation model.
          </p>
        </div>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Ancient DNA from a 50 ka individual in the Middle East shows 8% Neanderthal DNA. What
            does this tell you about the timing of interbreeding?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The interbreeding happened close to the first contact between modern humans and
              Neanderthals. The signal has not yet been diluted by later mixing with other modern
              humans. The Middle East is the most likely location of that first contact.
            </p>
          </details>
        </div>
      </section>,

      // ── SECTION 8 ──────────────────────────────────────────────────────────
      <section key="s8" id="lrn-section-8">
        <h2>The Upper Palaeolithic Revolution (50 to 10 ka)</h2>
        <p>
          After ~50 ka the record changes rapidly. New tool industries, art, music, and long-
          distance exchange networks appear across Africa and Eurasia.
        </p>
        <p>
          <strong>Cave art</strong> is the most visible marker. European sites are the most studied,
          but the oldest known figurative painting comes from Sulawesi, not Europe:
        </p>
        <ul className="lrn-list">
          <li>
            Leang Tedongnge, Sulawesi, Indonesia: ~45,500 BP. Warty pig and hand stencils. One of
            the oldest figurative paintings known.
          </li>
          <li>Chauvet Cave, France: ~32,000 BP. Rhinoceroses, lions, cave bears in charcoal.</li>
          <li>Lascaux, France: ~17,000 BP. "Hall of the Bulls" with aurochs, horses, deer.</li>
          <li>Altamira, Spain: ~14,000 BP. Polychrome bison painted on ceiling.</li>
        </ul>
        <figure className="lrn-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Lascaux_painting.jpg"
            alt="Upper Palaeolithic cave painting from Lascaux, France, c. 17,300 years old, showing aurochs, horses, and deer"
          />
          <figcaption>
            Cave paintings from Lascaux, Dordogne, France, ~17,300 BP. Aurochs, horses, and deer.
            Public domain.{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Lascaux_painting.jpg">Source</a>
          </figcaption>
        </figure>
        <p>
          <strong>Venus figurines</strong> (~30,000 to 20,000 BP) are small carvings of female
          figures found across Europe from France to Siberia. The Venus of Willendorf (Austria) and
          Venus of Dolni Vestonice (Czech Republic) are the best known.
        </p>
        <p>
          The <strong>Magdalenian</strong> (~17,000 to 12,000 BP) is the richest Upper Palaeolithic
          culture. It takes its name from La Madeleine rock shelter in the Dordogne, France. Key
          features:
        </p>
        <ul className="lrn-list">
          <li>Bone and antler harpoons with barbs (uniserial and biserial)</li>
          <li>Mammoth bone dwelling structures (Mezhirich, Ukraine)</li>
          <li>Secondary burial evidence at Brillenhohle cave</li>
          <li>Portable art: carved animals, engraved bones</li>
        </ul>
        <p>
          By 15,000 BP, modern humans had reached every major landmass except the Americas and some
          Pacific islands.
        </p>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>Why did art, music, and long-distance trade explode in the Upper Palaeolithic?</p>
          <p>
            One driver was population: larger groups need clearer ways to mark identity and pass on
            knowledge. Another was language: abstract thought enables shared myths and rituals.
            Together these let humans build social networks across hundreds of kilometres. The same
            brain in larger groups produced bigger culture.
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Explain why Venus figurines appear from France to Siberia at roughly the same time. Form
            your answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              A successful image spread along the same routes as exotic stones and shells. Trade and
              movement carried ideas, not just people, across continents. The figurines mark the
              reach of those social networks.
            </p>
          </details>
        </div>
      </section>,

      // ── SECTION 9 ──────────────────────────────────────────────────────────
      <section key="s9" id="lrn-section-9">
        <h2>Peopling the Americas (32,000 to 11,600 BP)</h2>
        <p>
          The Americas were the last major landmass reached by modern humans. The colonizers came
          from Northeast Asia. Their genetic ancestors split from Asian populations ~23,000 years
          ago, based on mitochondrial DNA estimates.
        </p>
        <p>
          <strong>Beringia</strong> was a dry land bridge connecting Siberia to Alaska. At its
          largest it was ~1,000 km wide. Sea levels dropped ~134 m during the Last Glacial Maximum
          (~21,000 BP), exposing the land. Beringia remained dry from ~30,000 to 12,500 BP.
        </p>
        <p>Key pre-Clovis and early American sites:</p>
        <ul className="lrn-list">
          <li>
            <strong>Yana, Russia (32,000 BP):</strong> Rhinoceros horn rods and woolly mammoth tusk
            artifacts. Oldest known occupation above the Arctic Circle.
          </li>
          <li>
            <strong>Diuktai Cave, Siberia (16,800 BP):</strong> Wedge-shaped cores and microblades,
            precursors to early American technology.
          </li>
          <li>
            <strong>Swan Point, Alaska (14,400 BP):</strong> Microblades and faunal remains, marking
            the first known Americans in Alaska.
          </li>
          <li>
            <strong>Monte Verde, Chile (14,600 BP):</strong> Oldest well-dated site in the Americas.
            Mastodon hide, ~75 plant species including seaweed, wooden structures, bolas, grinding
            slabs.
          </li>
        </ul>
        <p>
          <strong>Clovis</strong> (13,400 to 12,600 BP) is defined by large fluted biface projectile
          points. Clovis spread rapidly across North America and reached Panama. Over 12 Clovis
          caches are known, some with dozens of points and exotic raw materials.
        </p>
        <figure className="lrn-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Punta_Clovis_Nicaragua.JPG"
            alt="Clovis fluted projectile point from Nicaragua"
          />
          <figcaption>
            Clovis fluted projectile point, Nicaragua. The channel flute runs up the base of the
            point. These appeared in North America ~13,400 BP.{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Punta_Clovis_Nicaragua.JPG">Source</a>
          </figcaption>
        </figure>
        <p>
          The <strong>Beringian Standstill hypothesis</strong> says that the ancestors of every
          Native American sat on Beringia for 10,000 to 15,000 years before moving south. Ice sheets
          blocked the way. During the wait the population grew genetically distinct from East Asians
          and lost diversity (a founder effect). When the ice melted, that small group spread fast
          across two continents.
        </p>
        <div className="lrn-compare">
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Pre-Clovis hypothesis</div>
            <p>
              People reached the Americas before Clovis, via a coastal route while interior routes
              were blocked by ice sheets.
            </p>
            <p>
              Supported by: Monte Verde (14,600 BP), coastal tool sites in California and Chile
              older than 13,400 BP.
            </p>
          </div>
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Clovis-first hypothesis</div>
            <p>
              Clovis people were the first Americans, entering via an ice-free corridor between the
              Cordilleran and Laurentide ice sheets after ~13,000 BP.
            </p>
            <p>
              Problem: Monte Verde predates the viable ice-free corridor. Pre-Clovis evidence is now
              accepted by most researchers.
            </p>
          </div>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY DOES THIS MATTER?</span>
          <p>Why does Monte Verde at 14,600 BP overturn the Clovis-first model?</p>
          <p>
            Monte Verde sits at the far southern end of South America. People had to walk from
            Alaska to southern Chile to get there, which takes time. So the first Americans must
            have entered the continent well before 14,600 BP. Clovis points at 13,400 BP cannot be
            the first culture.
          </p>
        </div>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You find a 17,000 BP site on the British Columbia coast with simple stone flake tools.
            How does this change the entry route debate?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              It strongly supports the coastal route over the ice-free corridor. The corridor was
              not open at 17,000 BP. A coastal site that old means people moved south along the
              Pacific edge by foot or boat. The Clovis-first model would be fully overturned.
            </p>
          </details>
        </div>
      </section>,

      // ── SECTION 10 ──────────────────────────────────────────────────────────
      <section key="s10" id="lrn-section-10">
        <h2>The End of the Pleistocene (12,800 to 11,600 BP)</h2>
        <p>
          The Younger Dryas (12,800 to 11,600 BP) was a sudden cold reversal after a warming period.
          Temperatures in the North Atlantic region dropped ~15°C within decades. It ended abruptly
          ~11,600 BP, marking the start of the Holocene.
        </p>
        <p>At the end of the Pleistocene, most large land animals vanished:</p>
        <ul className="lrn-list">
          <li>
            North America: 37 genera of large mammals went extinct, including mammoths, mastodons,
            ground sloths, horses, and camels.
          </li>
          <li>
            South America: 52 genera disappeared, including giant ground sloths weighing up to 4,500
            kg.
          </li>
          <li>
            Australia: mass extinctions had already occurred ~46,000 BP, likely linked to human
            arrival.
          </li>
        </ul>
        <p>Two explanations dominate the debate over the American extinctions:</p>
        <div className="lrn-compare">
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Overkill hypothesis</div>
            <p>
              Clovis hunters drove naive megafauna extinct. Kill sites show mass bison drives.
              Extinctions timed closely to human arrival.
            </p>
            <p>
              Problem: only 5 of 37 extinct genera appear at verified kill sites. The other 32
              vanished without archaeological evidence of hunting.
            </p>
          </div>
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Climate change hypothesis</div>
            <p>
              Rapid warming after the Last Glacial Maximum destroyed the plant communities megafauna
              depended on.
            </p>
            <p>
              Support: ancient DNA shows population decline in some species before humans arrived.
              About 20 genera of birds also went extinct at the same time, suggesting a cause beyond
              hunting.
            </p>
          </div>
        </div>
        <p>
          Most researchers now favour both causes working together. Hunting accelerated declines
          that climate had already started.
        </p>
        <p>
          Post-Clovis cultures adapted to the changed landscape. <strong>Folsom</strong> (12,500 BP)
          targeted the now-extinct <em>Bison antiquus</em> with smaller fluted points. Later
          Paleoindian traditions (Plainview, Goshen, Cody) spread regionally. By the Younger Dryas
          end, Late Paleoindians had spread across both continents and diversified their diets far
          beyond megafauna.
        </p>
        <div className="lrn-insight">
          <p>
            By 11,600 BP modern humans occupied every habitable continent. Six million years of
            evolution produced a single highly adaptable species that transformed every ecosystem it
            entered.
          </p>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Younger Dryas</div>
          <div className="lrn-definition-desc">
            <p>
              A period of sudden cooling 12,800 to 11,600 BP. Named after the arctic flower{' '}
              <em>Dryas octopetala</em>, whose pollen spikes in sediment cores from this time. Its
              end marks the start of the Holocene and the modern world.
            </p>
          </div>
        </div>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Future ancient DNA shows mammoth populations crashed in Siberia before Clovis appeared
            in North America. What does this tell you about the cause of extinction?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              It points to climate as the main driver. A pre-human crash means populations were
              already vulnerable. Humans may have finished off some struggling species, but the
              deeper cause sits in changing climate and habitat loss.
            </p>
          </details>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Explain why the Younger Dryas matters as the end marker of the Pleistocene. Form your
            answer before reading on.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The Younger Dryas was a sharp climate flip back to cold. When it ended at 11,600 BP,
              the world warmed quickly and stayed warm. This stable warm period (the Holocene)
              allowed farming, settlement, and civilization. Without it, human history would look
              very different.
            </p>
          </details>
        </div>
      </section>
    ]
  },

  practice: [
    // ── BASIC ──────────────────────────────────────────────────────────────
    {
      type: 'basic',
      q: 'What is the name of the oldest known hominin candidate, and where was it found?',
      a: 'Sahelanthropus tchadensis, found in Chad and dated to ~6.7 million years ago. Its skull shape and foramen magnum position suggest it may have walked upright, though debate continues.'
    },
    {
      type: 'basic',
      q: 'What features define a hominin as distinct from other apes?',
      a: 'Hominins walk on two legs (bipedalism), have smaller canine teeth than apes, and after ~2 Ma began developing larger brains. The term refers to humans and all extinct relatives after the split from chimpanzees.'
    },
    {
      type: 'basic',
      q: 'What percentage of her skeleton did Lucy preserve, and what did her knee joint show?',
      a: 'Lucy (AL 288-1) preserved about 40% of her skeleton. Her knee joint showed the locking angle of a fully bipedal walker, confirming that Australopithecus afarensis walked upright on two legs ~3.2 Ma.'
    },
    {
      type: 'basic',
      q: 'What are the Laetoli footprints, and why are they significant?',
      a: 'Footprints preserved in volcanic ash at Laetoli, Tanzania, dated to ~3.5 Ma. They show three Australopithecus afarensis individuals walking upright. These are the oldest direct physical evidence of bipedalism.'
    },
    {
      type: 'basic',
      q: 'What is the Oldowan industry, and when did it first appear?',
      a: 'The Oldowan industry (Mode 1) is the oldest known stone tool tradition, first appearing ~2.6 Ma at Gona, Ethiopia. Toolmakers struck sharp flakes off river cobbles. The tools are simple but show intentional, skilled production.'
    },
    {
      type: 'basic',
      q: 'Who made Acheulean handaxes, and when did the industry appear?',
      a: 'Acheulean handaxes were first made by Homo ergaster, appearing ~1.76 Ma at Kokiselei, Kenya. The handaxe is a bifacially flaked teardrop shape. It was used for over a million years by multiple Homo species.'
    },
    {
      type: 'basic',
      q: 'Why is the Nariokotome Boy skeleton important?',
      a: 'KNM-WT 15000 is an almost complete skeleton of a Homo ergaster boy from Kenya, ~1.5 Ma. His body plan was nearly modern: tall, slender limbs suited to open savanna. He shows that a modern body form evolved long before a modern brain.'
    },
    {
      type: 'basic',
      q: 'What is the Movius Line?',
      a: 'A geographic boundary separating regions with Acheulean handaxes (Africa, Europe, western Asia) from regions without them (South and East Asia). East of the line, hominins used simpler chopper tools. The reason is debated: it may reflect isolation, raw materials, or use of bamboo tools.'
    },
    {
      type: 'basic',
      q: 'What is special about the Dmanisi hominins found in Georgia?',
      a: 'Dated to ~1.77 Ma, the Dmanisi hominins are the oldest known hominins outside Africa. They had smaller brains (~600 to 775 cc) than African contemporaries. One toothless individual survived for years, suggesting group care. They show wide variation within a single population.'
    },
    {
      type: 'basic',
      q: 'What is the Levallois technique?',
      a: 'A stone tool method of preparing a core by shaping it carefully, then striking off a flake of predictable shape with a single blow. It requires planning ahead. The Levallois technique is associated with Neanderthals and the Mousterian industry.'
    },
    {
      type: 'basic',
      q: 'Name two anatomical features that adapt Neanderthals to cold climates.',
      a: 'Neanderthals had short, robust limbs that reduce body surface area and heat loss, and very large noses that warmed and humidified cold dry air. Both are classic adaptations to glacial environments in Europe and western Asia.'
    },
    {
      type: 'basic',
      q: 'What percentage of non-African modern human DNA is Neanderthal?',
      a: "Non-African modern humans carry 1 to 4% Neanderthal DNA. This was discovered by Svante Paabo's team in 2010 after sequencing the Neanderthal nuclear genome from bones at Vindija Cave, Croatia."
    },
    {
      type: 'basic',
      q: 'Where did the Denisovans live, and how were they identified?',
      a: 'Denisovans are known from Denisova Cave in the Altai Mountains, Russia. They were identified entirely from ancient DNA in a single finger bone fragment. No skull or complete skeleton was needed. Melanesian populations carry up to 5% Denisovan DNA.'
    },
    {
      type: 'basic',
      q: 'What are the three most famous Upper Palaeolithic cave art sites in Europe?',
      a: 'Chauvet Cave, France (~32,000 BP), Lascaux, France (~17,000 BP), and Altamira, Spain (~14,000 BP). Together they document a sustained tradition of figurative painting on cave walls over more than 18,000 years.'
    },
    {
      type: 'basic',
      q: 'What is Beringia, and when was it accessible?',
      a: 'Beringia was a dry land bridge up to ~1,000 km wide connecting Siberia and Alaska during glacial periods. Sea levels fell ~134 m during the LGM. The land was exposed from ~30,000 to 12,500 BP. The first Americans crossed here.'
    },
    {
      type: 'basic',
      q: 'What makes Monte Verde in Chile significant for the peopling of the Americas?',
      a: 'Monte Verde (MV II layer, ~14,600 BP average) is the oldest well-dated archaeological site in the Americas. It predates Clovis by over 1,000 years. It preserved mastodon hide, ~75 plant species including seaweed, wooden structures, and grinding slabs, showing diverse subsistence from the start.'
    },
    {
      type: 'basic',
      q: 'What is the Clovis culture, and when did it flourish?',
      a: 'Clovis (13,400 to 12,600 BP) is a North American stone tool tradition defined by large fluted biface projectile points. Clovis people spread rapidly across North America and left caches of points across the continent. They are named after Clovis, New Mexico, where the points were first identified.'
    },
    {
      type: 'basic',
      q: 'How many genera of large mammals went extinct at the end of the Pleistocene in North and South America?',
      a: '37 genera went extinct in North America and 52 genera in South America. Extinct animals included mammoths, mastodons, ground sloths, horses, and camels. The cause is still debated: human overkill, climate change, or both.'
    },
    {
      type: 'basic',
      q: 'What is the Younger Dryas, and when did it end?',
      a: 'The Younger Dryas was a sudden cold reversal lasting 12,800 to 11,600 BP, when temperatures in the North Atlantic region dropped sharply. It ended abruptly ~11,600 BP, marking the beginning of the Holocene and the modern warm period.'
    },
    {
      type: 'basic',
      q: 'What is the Aurignacian industry, and who made it?',
      a: 'The Aurignacian (~43 to 26 ka) is the earliest Upper Palaeolithic blade tool industry in Europe, made by anatomically modern humans. It includes long thin blades, bone and antler tools, and personal ornaments such as perforated shells and carved ivory figurines.'
    },

    // ── TRANSFER ───────────────────────────────────────────────────────────
    {
      type: 'transfer',
      q: 'A fossil jaw is found in Africa, dated to 2.5 Ma. The individual has a brain of ~650 cc, rounded skull, reduced face, and was found near Oldowan tools. Which genus does it likely belong to, and why?',
      a: 'It likely belongs to early Homo (possibly H. habilis or H. rudolfensis). The brain size and rounded skull are above australopith range. The Oldowan tools are associated with early Homo, who appear ~2.4 Ma in the same region.'
    },
    {
      type: 'transfer',
      q: 'An archaeologist finds stone tools in China dated to 1.5 Ma. They are simple choppers with no bifacial shaping. What does this tell you about the Movius Line?',
      a: 'East Asia is east of the Movius Line. Acheulean handaxes are absent there despite hominins being present. The simple choppers fit the chopper-tool tradition found across South and East Asia. This supports the Movius Line pattern and shows Acheulean technology did not spread uniformly with hominin dispersal.'
    },
    {
      type: 'transfer',
      q: 'If the Beringian Standstill hypothesis is correct, what genetic pattern should you see when comparing Native American genomes to East Asian genomes?',
      a: 'You should see a deep genetic divergence between Native Americans and East Asians, consistent with 10,000 to 15,000 years of isolation in Beringia. You should also see a strong founder effect (reduced genetic diversity) in Native Americans compared to their Asian relatives, because the founding population was small and isolated.'
    },
    {
      type: 'transfer',
      q: 'A site in South America dates to 14,500 BP. The ice-free corridor between the ice sheets did not open until ~13,000 BP. What does this tell you about how the first Americans arrived?',
      a: 'The site predates the ice-free corridor, so the corridor cannot have been the entry route for the earliest South Americans. The most likely alternative is a Pacific coastal route, moving south along the coast by boat or on foot during periods of lower sea level.'
    },
    {
      type: 'transfer',
      q: 'An ancient DNA study finds that a European population 42,000 years ago carries 3% Neanderthal DNA. What does this tell you about the timing and location of interbreeding between modern humans and Neanderthals?',
      a: 'Interbreeding happened before this population settled in Europe. It likely happened in the Middle East or West Asia when modern humans first left Africa and encountered Neanderthals. The 3% level fits a single event or a handful of interbreeding events before modern humans dispersed. The DNA persisted because it was not strongly selected against.'
    },
    {
      type: 'transfer',
      q: 'Paranthropus had massive teeth, thick enamel, and a sagittal crest, but its brain barely grew over 500 ka. Why might natural selection favour these features over larger brains?',
      a: 'Paranthropus occupied a niche requiring processing of hard or tough foods like roots, tubers, or seeds. Strong chewing muscles anchored by the sagittal crest and thick enamel were highly adaptive for that diet. Larger brains are metabolically expensive. If the dietary niche is stable, investing in brain tissue offers less survival benefit than investing in chewing apparatus.'
    },

    // ── ELABORATE ──────────────────────────────────────────────────────────
    {
      type: 'elaborate',
      q: 'Why does bipedalism come before enlarged brains in human evolution? What might have driven upright walking?',
      a: 'Bipedalism appears ~4 to 6 Ma while large brains appear ~2 Ma. The two adaptations were independent. Several ideas explain why bipedalism was selected: it frees the hands for carrying food or infants; it is more energy-efficient than knuckle-walking over long distances on open ground; and upright posture reduces sun exposure in hot savanna. None of these benefits requires a large brain, so bipedalism could evolve first.'
    },
    {
      type: 'elaborate',
      q: 'How does the Sima de los Huesos mtDNA evidence complicate our picture of Neanderthal evolution?',
      a: 'The individuals from Sima de los Huesos (~430 ka) look anatomically like early Neanderthals. But their mitochondrial genome clusters with Denisovans, not Neanderthals. This means either: the Sima population was ancestral to both Neanderthals and Denisovans and later lineages replaced the mtDNA through back-migration, or the tree of Neanderthal, Denisovan, and Sima populations involved more mixing than assumed. It shows that mtDNA and anatomy can tell different evolutionary stories.'
    },
    {
      type: 'elaborate',
      q: 'Why is the "Blombos ochre" evidence important for understanding behavioural modernity?',
      a: 'Blombos Cave in South Africa produced ochre pieces engraved with geometric patterns ~100 ka and ochre processing kits in abalone shells ~73 ka. This is at least 30,000 years before the European Upper Palaeolithic "human revolution." It shows symbolic thinking emerged in Africa long before modern humans reached Europe. Behavioural modernity is not a single European event. It developed gradually in Africa first.'
    },
    {
      type: 'elaborate',
      q: 'How does the overkill hypothesis explain Pleistocene extinctions, and what is the main weakness of the argument?',
      a: 'The overkill hypothesis (Paul Martin) argues that Clovis hunters drove North American megafauna extinct by hunting naive animals that had no experience of human predators. The main weakness: only 5 of the 37 extinct genera appear at verified kill sites. The other 32 disappeared with no archaeological connection to humans. Ancient DNA also shows population decline in some taxa before Clovis arrived, suggesting climate played a role independent of hunting.'
    },
    {
      type: 'elaborate',
      q: 'What does the Denisovan finger bone discovery reveal about the complexity of Late Pleistocene hominin populations?',
      a: 'A single tiny bone fragment identified an entirely unknown hominin species through ancient DNA. Denisovans were genetically distinct from both Neanderthals and modern humans but shared a common ancestor with Neanderthals ~400 to 600 ka. The "Denny" individual had a Neanderthal mother and Denisovan father. This means at least three genetically distinct hominin groups coexisted in Asia and occasionally interbred. The Late Pleistocene human world was far more complex than the simple two-species replacement story.'
    },
    {
      type: 'elaborate',
      q: 'Why does the late colonization of the Americas (vs. Australia ~60 ka) suggest the barrier was not simply distance?',
      a: 'Modern humans crossed to Australia by sea ~60 ka, at a time when sea levels were lower but still required boat crossings. Yet they did not enter the Americas until ~15 to 14 ka despite a land route existing. The barrier was not just distance. It was the extreme Arctic environment of the northeast Asian corridor and the time needed to develop cold-adapted technology, diet, and physiology. Reaching Beringia required first settling the high-latitude Arctic, which is a very different challenge from island-hopping to Australia.'
    },

    // ── PREDICT ────────────────────────────────────────────────────────────
    {
      type: 'predict',
      q: 'Predict: if future ancient DNA confirms interbreeding between Homo heidelbergensis and an early modern human population in Africa before 200 ka, how would that change the origins hypotheses?',
      a: 'It would strengthen the Assimilation Model over the strict Recent African Origin model. It would show that modern humans absorbed genetic material from archaic African populations, not just from Neanderthals and Denisovans after leaving Africa. The origin of modern humans would look more like a web of gene flow than a clean branching tree.'
    },
    {
      type: 'predict',
      q: 'Predict: as sea-level mapping of the now-submerged Pacific coastal shelf improves, what might archaeologists find about Pre-Clovis migration?',
      a: 'The coastal route used by the first Americans would have followed shorelines that are now 50 to 100 m underwater. Improved mapping and underwater survey might reveal submerged campsites, shell middens, or stone tools along the drowned coastline of western North America and South America. These would directly confirm the coastal migration route and likely push back the dates for human presence in the Americas beyond 14,600 BP.'
    },
    {
      type: 'predict',
      q: 'Predict: if Homo naledi turns out to have controlled fire use, how would that challenge current views on the relationship between brain size and complex behavior?',
      a: 'Homo naledi had a very small brain (~465 to 610 cc) yet may have deliberately placed its dead in a deep cave. This already challenges the brain-size-equals-behavior assumption. Fire use would strengthen that challenge further. It would suggest that complex, planned behavior does not require a large brain and that the relationship between neurology and behavior is more flexible than assumed. It would also force a rethink of which species could produce fire evidence in the African archaeological record.'
    },
    {
      type: 'predict',
      q: 'If climate, not overkill, drove most Pleistocene extinctions, predict what the record in Africa should look like compared to the Americas.',
      a: 'Africa should show fewer extinctions despite humans evolving there millions of years earlier, because African megafauna co-evolved with human hunters and adapted behaviourally. The Americas should show extinctions timed to human arrival but also correlated with rapid climate shifts. If climate drove extinctions, you would expect non-hunting taxa (birds, reptiles, small mammals) to also go extinct in large numbers. Indeed about 20 genera of birds did go extinct in North America at the same time.'
    },

    // ── SELF-EXPLAIN ────────────────────────────────────────────────────────
    {
      type: 'self-explain',
      q: 'Explain in your own words why the discovery of Neanderthal DNA in modern non-Africans matters for the debate about human origins.',
      a: 'It proves that modern humans and Neanderthals interbred at least once, probably in the Middle East after modern humans left Africa. This means the "replacement" story, that modern humans simply replaced Neanderthals, is too simple. Neanderthal genes survive in us today, influencing our immune system and other traits. It also means Neanderthals were close enough to us genetically to produce fertile offspring, blurring the species boundary.'
    },
    {
      type: 'self-explain',
      q: 'Explain why finding a 14,600 BP site in Chile challenges the Clovis-first model of the peopling of the Americas.',
      a: 'Clovis points first appear ~13,400 BP. Monte Verde in Chile dates to ~14,600 BP, more than 1,000 years earlier. For people to be in southern Chile at 14,600 BP, they must have already crossed Beringia and traveled the entire length of the Americas before Clovis technology existed in North America. This means either Clovis was not the first culture in the Americas, or the first Americans used a different technology before inventing Clovis points.'
    },
    {
      type: 'self-explain',
      q: 'Explain the difference between anatomical modernity and behavioural modernity.',
      a: 'Anatomical modernity means having the physical features of modern Homo sapiens: rounded skull, vertical forehead, reduced brow ridges, and a chin. This appeared in Africa ~195 to 160 ka. Behavioural modernity means using symbolic language, making art, using personal ornaments, planning long-distance exchange, and producing standardized blade tools. The gap between the two is over 100,000 years. This shows that modern anatomy did not automatically produce modern behavior. The two evolved independently.'
    },
    {
      type: 'self-explain',
      q: 'Explain why the Movius Line exists and why it matters for understanding hominin dispersal.',
      a: 'The Movius Line separates Acheulean handaxe regions (Africa, Europe, western Asia) from simpler chopper-tool regions (South and East Asia). The most likely explanation is that the populations that reached East Asia were isolated early and never received the Acheulean innovation. It matters because it shows that a single dispersal of Homo did not spread a uniform technology everywhere. Culture and tool traditions spread unevenly, affected by population isolation, raw material availability, and possibly the use of organic materials like bamboo that do not preserve.'
    },
    {
      type: 'self-explain',
      q: 'Explain the Beringian Standstill hypothesis and the genetic evidence that supports it.',
      a: 'The hypothesis proposes that the ancestors of all Native Americans spent 10,000 to 15,000 years isolated in Beringia before moving south. The genetic evidence is the time to the most recent common ancestor (TMRCA) of Native American mitochondrial DNA lineages. That date (~18,400 to 24,900 BP) is much earlier than the oldest American sites (~14,600 BP). The gap of several thousand years is explained by a period of isolation in Beringia, where the population diversified genetically before dispersing. This also explains the sharp genetic bottleneck: a small isolated population has less genetic diversity than a large connected one.'
    },
    {
      type: 'self-explain',
      q: 'Explain why the Taung Child discovery by Raymond Dart in 1924 was important, even though it is not one of the oldest hominins.',
      a: 'Before Dart, scientists expected the "missing link" to have a large brain with an ape face. The Taung Child (Australopithecus africanus, ~2.5 Ma) showed the opposite: a small ape-sized brain but a face and teeth pointing toward humans. This was the first evidence that bipedalism and the human face evolved before large brains did. It also confirmed that Africa, not Asia or Europe, was the cradle of human evolution, supporting Darwin\'s original prediction.'
    },

    // ── ADDITIONAL BASIC ───────────────────────────────────────────────────
    {
      type: 'basic',
      q: 'What is the Sima de los Huesos, and why is it important?',
      a: 'The "Pit of Bones" at Atapuerca, Spain, contains remains of 28 or more individuals dated ~430 ka. They show early Neanderthal features. Their mitochondrial genome unexpectedly clusters with Denisovans, suggesting a complex relationship between early Neanderthals and Denisovans before the groups diverged fully.'
    },
    {
      type: 'basic',
      q: 'Name the two routes the first Americans could have taken south from Beringia.',
      a: 'The Pacific coastal route (open ~16,000 BP, possibly earlier) and the ice-free corridor between the Cordilleran and Laurentide ice sheets (not biologically viable until ~12,600 BP). The coastal route opened first. Pre-Clovis sites like Monte Verde support coastal entry rather than the corridor.'
    },
    {
      type: 'basic',
      q: 'What is the Initial Upper Palaeolithic (IUP)?',
      a: 'A blade-based stone tool industry found in West Asia and eastern Europe ~50 to 40 ka. It predates the Aurignacian and may represent the first wave of anatomically modern humans leaving Africa. IUP assemblages include blade tools and sometimes personal ornaments, bridging Middle and Upper Palaeolithic technologies.'
    },
    {
      type: 'basic',
      q: 'What was Homo naledi, and what makes it puzzling?',
      a: 'Homo naledi is an extinct hominin found in the Dinaledi Chamber of Rising Star Cave, South Africa. It had a tiny brain (~465 to 610 cc) like early Homo but modern-looking feet and hands. It dated to only ~236 to 335 ka. This means it coexisted with large-brained Homo sapiens. Deliberate deposition of bodies in the cave has been proposed, which would be remarkable for a small-brained species.'
    },
    {
      type: 'basic',
      q: 'What mitochondrial haplogroups do Native Americans carry, and what do they tell us?',
      a: 'Native Americans carry mitochondrial haplogroups A, B, C, D, and X. All five originate in East or Northeast Asia. The TMRCA is estimated at 18,400 to 24,900 BP. This is consistent with a founding population that split from Asians ~23,000 BP, fitting the Beringian Standstill hypothesis.'
    },
    {
      type: 'basic',
      q: 'What is the Magdalenian culture, and where does it take its name from?',
      a: 'The Magdalenian (~17,000 to 12,000 BP) is the richest European Upper Palaeolithic culture. It takes its name from the La Madeleine rock shelter in the Dordogne, France. It produced antler and bone harpoons, carved portable art, and is associated with the cave paintings of Lascaux and Altamira.'
    },
    {
      type: 'basic',
      q: 'What is FOXP2, and why does it matter for Neanderthal studies?',
      a: 'FOXP2 is a gene involved in the fine motor control needed for speech and language production. Modern humans have a specific variant that differs from other primates. Neanderthal ancient DNA shows they carried the same modern human variant. This suggests Neanderthals had at least the genetic precondition for speech, though it does not prove they spoke like modern humans.'
    },
    {
      type: 'basic',
      q: 'What is the Four Origins debate about modern human origins?',
      a: 'Four hypotheses compete: (1) Recent African Origin, where a single African population replaced all others with minimal interbreeding; (2) Assimilation, mainly African expansion with absorption of local archaic genes; (3) Multiregional Evolution, parallel evolution in several regions connected by gene flow; (4) Hybridization and Replacement, replacement with some interbreeding at contact zones. Genetic data most strongly supports versions 2 and 4.'
    },
    {
      type: 'elaborate',
      q: 'How does the evidence from Denisova Cave illustrate the limits of relying only on skeletal anatomy to classify hominins?',
      a: 'The entire Denisovan species was identified from a single finger bone fragment, not from a skull, jaw, or teeth that could be classified anatomically. The bones of Denisovans cannot be distinguished from other archaic hominins by eye. Without ancient DNA, Denisovans would not exist as a named group. This shows that skeletal morphology alone cannot capture the full diversity of Late Pleistocene hominins. Some species probably disappeared without leaving distinctive enough bones to be recognized, and ancient DNA is now essential for understanding hominin diversity.'
    },
    {
      type: 'transfer',
      q: 'A researcher claims that the Clovis people were responsible for all 37 genera of North American Pleistocene extinctions. What evidence would you use to evaluate this claim?',
      a: 'You would check: (1) how many of the 37 genera are proven contemporaries of Clovis people, which is only 17; (2) how many genera appear at actual kill sites, only 5; (3) whether other taxa like birds also went extinct at the same time, suggesting climate involvement; (4) whether ancient DNA shows population decline before human arrival. This evidence shows the claim is too strong. Overkill can explain some extinctions but not all 37 genera.'
    }
  ],

  reference: {
    title: 'The Evolution of Humanity: 6 Million to 11,600 Years Ago',
    sections: [
      <section key="ref0">
        <h2>Hominin Species Timeline</h2>
        <div className="lrn-steps">
          <ol className="lrn-list">
            <li>~7 to 6 Ma: Sahelanthropus tchadensis (Chad)</li>
            <li>~6 Ma: Orrorin tugenensis (Kenya)</li>
            <li>~5.8 to 4.4 Ma: Ardipithecus ramidus / kadabba (Ethiopia)</li>
            <li>~4.2 to 3.9 Ma: Australopithecus anamensis (Kenya, Ethiopia)</li>
            <li>~3.9 to 2.9 Ma: Australopithecus afarensis (Ethiopia, Tanzania)</li>
            <li>~3 to 2.4 Ma: Australopithecus africanus (South Africa)</li>
            <li>~2.7 to 1.2 Ma: Paranthropus (P. aethiopicus, P. boisei, P. robustus)</li>
            <li>~2.4 to 1.6 Ma: Homo habilis / H. rudolfensis (East and South Africa)</li>
            <li>~1.9 to 1.4 Ma: Homo ergaster (Africa); first dispersal to Georgia ~1.77 Ma</li>
            <li>~1.6 Ma to 0: Homo erectus s.s. (Java, Zhoukoudian)</li>
            <li>~700 to 200 ka: Homo heidelbergensis (Africa, Europe)</li>
            <li>~430 ka: Sima de los Huesos individuals (Atapuerca, Spain)</li>
            <li>~250 to 40 ka: Homo neanderthalensis (Europe, West Asia)</li>
            <li>~48 to 30 ka: Denisovans (Altai Mountains; range into Southeast Asia)</li>
            <li>~335 to 236 ka: Homo naledi (Rising Star Cave, South Africa)</li>
            <li>~195 ka to present: Homo sapiens (origin in Africa)</li>
          </ol>
        </div>
      </section>,

      <section key="ref1">
        <h2>Major Sites by Region</h2>
        <div className="lrn-definition">
          <div className="lrn-definition-term">East Africa</div>
          <div className="lrn-definition-desc">
            <p>
              Gona, Ethiopia (2.6 Ma Oldowan tools); Hadar, Ethiopia (Lucy, 3.2 Ma); Laetoli,
              Tanzania (3.5 Ma footprints); Olduvai Gorge, Tanzania (Paranthropus boisei, Homo
              habilis); Nariokotome, Kenya (Homo ergaster skeleton KNM-WT 15000); Omo Kibish,
              Ethiopia (earliest modern humans, ~195 ka); Herto, Ethiopia (~160 ka modern humans).
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">South Africa</div>
          <div className="lrn-definition-desc">
            <p>
              Taung (A. africanus child, 1924); Sterkfontein (A. africanus adults); Blombos Cave
              (~100 ka ochre engravings, beads); Pinnacle Point (~164 ka heat treatment); Rising
              Star Cave (Homo naledi, ~335 to 236 ka).
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Europe</div>
          <div className="lrn-definition-desc">
            <p>
              Atapuerca, Spain (Sima de los Huesos, ~430 ka); Boxgrove, England (H. heidelbergensis
              tibia); La Chapelle-aux-Saints, France (Neanderthal burial); Shanidar Cave, Iraq
              (Neanderthal burials); Chauvet Cave (~32 ka art); Lascaux (~17 ka art); Altamira (~14
              ka art); La Madeleine, France (Magdalenian type site).
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Asia</div>
          <div className="lrn-definition-desc">
            <p>
              Dmanisi, Georgia (~1.77 Ma Homo); Trinil, Java (~1.6 Ma H. erectus); Zhoukoudian,
              China (~780 to 400 ka Peking Man, fire evidence); Denisova Cave, Russia (Denisovans,
              ~48 ka); Vindija Cave, Croatia (Neanderthal genome source); Gesher Benot Ya'aqov,
              Israel (~790 ka fire use).
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Americas</div>
          <div className="lrn-definition-desc">
            <p>
              Yana, Russia (32,000 BP rhinoceros artifacts); Diuktai Cave, Siberia (16,800 BP
              microblades); Swan Point, Alaska (14,400 BP); Monte Verde, Chile (14,600 BP mastodon,
              plants); Blackwater Draw, New Mexico (Clovis type site, 13,400 to 12,600 BP);
              Olsen-Chubbuck, Colorado (Folsom bison drive site, ~10,000 BP).
            </p>
          </div>
        </div>
      </section>,

      <section key="ref2">
        <h2>Tool Industries</h2>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Oldowan (Mode 1, ~2.6 to 1.7 Ma)</div>
          <div className="lrn-definition-desc">
            <p>
              Simple choppers and sharp flakes. Minimal shaping. First at Gona, Ethiopia. Associated
              with Homo habilis and possibly late australopiths.
            </p>
            <p>When to recognize: cobble with a few flakes removed; no standardized shape.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Acheulean (Mode 2, ~1.76 Ma to 200 ka)</div>
          <div className="lrn-definition-desc">
            <p>
              Bifacially flaked handaxes and cleavers. Symmetrical teardrop or oval form. First at
              Kokiselei, Kenya. Absent east of the Movius Line. Associated with H. ergaster and H.
              heidelbergensis.
            </p>
            <p>When to recognize: large bifacial tool, thinned all around, symmetrical outline.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Mousterian (Mode 3, ~300 to 40 ka)</div>
          <div className="lrn-definition-desc">
            <p>
              Levallois prepared-core technique. Standardized flakes and scrapers. Associated with
              Neanderthals in Europe and western Asia. Some modern humans also made Mousterian tools
              in North Africa and the Levant.
            </p>
            <p>
              When to recognize: prepared core with faceted striking platform; standardized flake
              shape.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Initial Upper Palaeolithic (IUP, ~50 to 40 ka)</div>
          <div className="lrn-definition-desc">
            <p>
              Blade-based technology transitional between Middle and Upper Palaeolithic. Found in
              West Asia and eastern Europe. Possibly associated with the first modern humans out of
              Africa.
            </p>
            <p>
              When to recognize: blades struck from prismatic cores; no standardized blade tools
              yet.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Aurignacian (Mode 4, ~43 to 26 ka)</div>
          <div className="lrn-definition-desc">
            <p>
              Long thin blades, bone and antler tools, personal ornaments. First fully Upper
              Palaeolithic industry in Europe. Associated with modern humans only.
            </p>
            <p>
              When to recognize: blades and burins; bone points; shell beads or ivory figurines
              present.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Magdalenian (~17,000 to 12,000 BP)</div>
          <div className="lrn-definition-desc">
            <p>
              Richest Upper Palaeolithic culture. Antler and bone harpoons (biserial and uniserial).
              Portable art, mammoth bone dwellings, cave painting (Lascaux, Altamira). Type site: La
              Madeleine, Dordogne, France.
            </p>
            <p>
              When to recognize: fine barbed harpoons; cave art at its most elaborate; portable
              carved animals.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <div className="lrn-definition-term">Clovis (13,400 to 12,600 BP)</div>
          <div className="lrn-definition-desc">
            <p>
              North American culture defined by large fluted biface projectile points hafted onto
              spears. Rapid spread across North America. Named after Clovis, New Mexico.
            </p>
            <p>
              When to recognize: large point with channel flute running up both faces from the base.
            </p>
          </div>
        </div>
      </section>,

      <section key="ref3">
        <h2>Origins Hypotheses Summary</h2>
        <div className="lrn-compare">
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Recent African Origin</div>
            <p>
              Single African origin ~200 ka. Global replacement of archaic hominins ~60 to 70 ka.
              Minimal gene flow from archaics.
            </p>
          </div>
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Assimilation Model</div>
            <p>
              Mainly African origin, but significant absorption of genes from local archaic
              populations during dispersal. Supported by Neanderthal and Denisovan DNA in modern
              humans.
            </p>
          </div>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Multiregional Evolution</div>
            <p>
              Parallel evolution in Africa, Europe, and Asia from H. erectus, connected by gene
              flow. Strong version falsified by genetics. All living humans share very recent
              African ancestry.
            </p>
          </div>
          <div className="lrn-compare-item">
            <div className="lrn-compare-label">Hybridization and Replacement</div>
            <p>
              Mainly African expansion with interbreeding at contact zones. Effectively a version of
              Assimilation. Supported by ancient DNA evidence.
            </p>
          </div>
        </div>
      </section>,

      <section key="ref4">
        <h2>Dispersal Routes and Climate Milestones</h2>
        <ul className="lrn-list">
          <li>~1.77 Ma: First hominins leave Africa (Dmanisi, Georgia)</li>
          <li>~1.6 Ma: Homo erectus in Java, Southeast Asia</li>
          <li>~780 ka: Homo erectus at Zhoukoudian (Peking Man)</li>
          <li>~130 to 115 ka: Last Interglacial. Modern humans first reach the Levant</li>
          <li>
            ~70 ka: Major out-of-Africa dispersal of modern humans; some researchers link this to
            the Toba supervolcano bottleneck
          </li>
          <li>~60 ka: Modern humans reach Australia (sea crossing required)</li>
          <li>~45 ka: Modern humans arrive in Europe (Aurignacian)</li>
          <li>~30,000 to 12,500 BP: Beringia exposed as dry land</li>
          <li>~21,000 BP: Last Glacial Maximum (LGM); sea level ~134 m below present</li>
          <li>~16,000 BP: Pacific coastal route opens; deglaciation begins</li>
          <li>~14,600 BP: Monte Verde occupied (oldest dated Americas site)</li>
          <li>~13,400 to 12,600 BP: Clovis flourishes in North America</li>
          <li>~12,800 to 11,600 BP: Younger Dryas cold reversal</li>
          <li>~11,600 BP: Holocene begins; end of Pleistocene megafauna extinctions</li>
        </ul>
      </section>
    ]
  }
}

export default function TheEvolutionOfHumanity() {
  return <LearningTemplate config={config} />
}
