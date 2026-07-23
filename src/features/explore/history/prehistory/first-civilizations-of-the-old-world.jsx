import { LearningTemplate } from '../../../../components/learning/learning-template'
import { VizFigure } from '../../../../components/viz-figure'

function useConfig() {
  const config = {
    cssPrefix: 'fco',
    documentTitle: 'First Civilizations of the Old World - AETHER',
    learning: {
      groupTitle: 'After the Ice Age',
      category: 'Module 5',
      title: 'First Civilizations of the Old World',
      subtitle:
        "From the first cities of Mesopotamia to Angkor's water temples, this module traces how surplus, writing, and coercion produced civilization independently across the Old World.",
      sections: [
        <>
          <h2>1. What Makes a Civilization? First Principles</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A city appears in the archaeological record, but its rulers leave no tombs and no palaces. Does a civilization exist? What evidence would you use to decide?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The Indus Civilization is the proof. It had cities, a script, standardized weights, and a four-tier settlement hierarchy across 500,000 square kilometers, without a single royal tomb. A civilization can exist without visible kings.`}</p>
            </details>
          </div>
          <p>{`Archaeologists look for a cluster of features together: cities, writing, formal states, social stratification, and monumental architecture. Social stratification means ranked classes with unequal, often inherited, access to wealth and power. A village treats most people as equals. A stratified society does not. Monumental architecture means huge buildings like temples, tombs, and walls. The size of a monument indexes the labor a ruler could command. A bigger monument means more workers forced or persuaded to build it. No single feature is enough. Cities can exist without writing. Writing can exist without cities. The cluster signals a new level of social complexity, meaning more kinds of jobs, ranks, and rules than a village has.`}</p>
          <p>{`Why did this cluster appear in the Old World between 3500 and 1500 BCE? The short answer is surplus. When farms grow more food than the farmers eat, some people stop farming. They become potters, metalworkers, priests, and scribes (people trained to read and write records). Specialists trade goods that someone must store and redistribute. Whoever controls that redistribution gains power. That power becomes hierarchy. Hierarchy needs to track who owes what to whom. Writing is the memory system that does the tracking.`}</p>
          <p>{`Mesopotamia, Egypt, the Indus Valley, and China each developed cities and states with little or no borrowing from one another. Archaeologists call these "primary states." States that formed in the shadow of an existing state are "secondary states." The Korean Three Kingdoms emerged in response to Han Chinese military pressure. The Mauryan Empire arose in South Asia just after Alexander's invasions reshaped the northwest frontier.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Primary State Formation</span>
              <p>{`Arose from internal social dynamics without significant stimulus from an already-existing state. Examples: Mesopotamia (Uruk), Indus Valley (Harappan), China (Erlitou, an early walled center, and Shang). Social complexity emerged from local surplus, specialization, and administrative need.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Secondary State Formation</span>
              <p>{`Arose in proximity to and interaction with an existing state. Examples: Korean Three Kingdoms (response to Han Chinese military pressure), Mauryan Empire (after Alexander's invasions reshaped the frontier), Japan's Nara state (modeled on Tang China). These states adopted foreign scripts, religions, and administrative models strategically.`}</p>
            </div>
          </div>
          <p>{`The 4th millennium BCE is the turning point. The city of Uruk in southern Mesopotamia grew larger than anything on Earth had ever been. Why cities appeared when and where they did is one of archaeology's central questions.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does resource scarcity, not abundance, sometimes drive social complexity faster? Form your own answer before reading on.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`In scarce environments, groups must compete, accumulate, and dominate to survive. That pressure produces hierarchy faster than abundance does. Mediterranean evidence supports this. Social inequality emerged earliest on islands and in poor environments (Cyprus, Dhimini, Lerna), not in the richest farmland. Scarcity forces people to dominate neighbors and organize forced labor to extract every advantage.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>2. Mesopotamia and the First Cities</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If a region has rich farmland but no stone, no metal, and no timber, how would you expect its early inhabitants to organize their economy?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Long-distance trade becomes a survival requirement, not a luxury. The Tigris-Euphrates lowlands had exactly this profile. The answer was a temple economy: temples collected farm surplus, employed craftspeople, and ran the trade networks that brought in the raw materials the region lacked.`}</p>
            </details>
          </div>

          <h3>The Chalcolithic Background: Halaf and Ubaid, c. 6000-4200 BCE</h3>
          <p>{`The Chalcolithic is the Copper Age, after pure stone tools and before bronze. Southwest Asia in this period had four environmental zones: the foothills, the Tigris-Euphrates lowlands, the Syrian steppe, and the Levantine coast (the Levant is the eastern Mediterranean shore, from modern Syria down to Israel). The lowlands had some of the richest farmland on Earth, but no stone, no metal, and no timber. That scarcity forced long-distance trade from the earliest farming villages.`}</p>
          <p>{`The Halaf period (c. 6000-5400 BCE) brought multi-colored pottery, female clay figurines, and stamp seals across northern Mesopotamia. Arpachiyah preserves the finest Halaf assemblage in a "Burnt House" dated to c. 5400 BCE. Stamp seals marked property. Figurines may have served as fertility symbols.`}</p>
          <p>{`The Ubaid period (c. 5900-4200 BCE) began in southern Mesopotamia. Eridu preserves the earliest temple sequence in the world: 19 temples built one on top of the other on the same spot. A cemetery of 193 graves at Eridu shows the start of social ranking. Ubaid pottery and architecture spread to Tell Madhhur, Tepe Gawra (c. 5200 BCE), Susa on the Iranian plateau, and sites along the Persian Gulf coast.`}</p>
          <p>{`What does the stack of 19 temples mean? The same community rebuilt the same building on the same sacred ground for centuries. That continuity needs a central institution directing collective labor across generations. The temple was not only a place of ritual. It was the organizing center of community life and surplus.`}</p>
          <p>{`Zagheh on the Iranian plateau (5200-4600 BCE) shows the same kind of complexity developing independently. Its "Painted Building" may have served communal or ritual functions. Clay tokens found there are among the earliest devices for recording quantities anywhere. Accounting was not a Mesopotamian invention spread outward. It appeared in several places at once.`}</p>

          <h3>The World's First True City: The Uruk Period, c. 4200-3000 BCE</h3>
          <p>{`Uruk grew explosively in the 4th millennium BCE. Archaeological surveys traced its growth from scattered villages to a metropolis of 40,000 to 50,000 people. It was the world's first true city.`}</p>
          <p>{`The Eanna precinct held the city's largest temples and administrative buildings. The White Temple, c. 3200 BCE, rose on a high platform of whitewashed mudbrick. A building this size required labor that only a central authority could mobilize.`}</p>
          <p>{`Uruk's growth came with violence. Mass graves at Tell Brak dated to c. 3800 BCE show fighting between cities. Hamoukar was destroyed around 3500 BCE. Cities did not grow peacefully. They grew by drawing surplus from their countryside and fighting rivals for land, water, and trade routes.`}</p>

          <h3>The Invention of Writing</h3>
          <p>{`Writing appeared at Uruk between 3500 and 3000 BCE. The earliest form is called proto-cuneiform. About 5,000 proto-cuneiform tablets survive, using roughly 850 signs and a base-60 counting system. Base-60 means counting in groups of sixty instead of groups of ten. Their purpose was not literature. It was accounting: tracking rations, livestock, and goods.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="Proto-Cuneiform Tablet">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cuneiform_tablet-_administrative_account_of_barley_distribution_with_cylinder_seal_impression_of_a_male_figure%2C_hunting_dogs%2C_and_boars_MET_DT847.jpg"
                alt="Clay tablet with rows of impressed proto-cuneiform signs and a cylinder seal impression"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'A proto-cuneiform tablet recording a barley account. Writing began as bookkeeping. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Cuneiform_tablet-_administrative_account_of_barley_distribution_with_cylinder_seal_impression_of_a_male_figure,_hunting_dogs,_and_boars_MET_DT847.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · Public domain (CC0, The Met).'}
              </figcaption>
            </VizFigure>
          </figure>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Modern legacy</span>
            <p>{`The Mesopotamian base-60 counting system is still running. You use it every day. There are 60 seconds in a minute and 60 minutes in an hour because Sumerian scribes counted in base-60 over 5,000 years ago. There are 360 degrees in a circle for the same reason.`}</p>
          </div>
          <p>{`Proto-cuneiform was the early pictographic stage, where each sign was still a small picture of a thing. Cuneiform was the later wedge stage. It evolved from those pictographs into abstract wedge-shaped marks pressed into wet clay with a reed. A cylinder seal was a small carved stone cylinder. Rolled across wet clay, it left a signature that marked authority and ownership. The Warka Vase, an alabaster vessel about 1 meter high dated to c. 3200 BCE, is the earliest known piece of narrative relief art. It shows a procession of figures bringing goods to a temple. Writing began as bookkeeping. Literature and religious texts only came once the technology existed and scribes mastered it.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="Warka Vase">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/Warka_vase_%28background_retouched%29.jpg"
                alt="Tall carved alabaster vase showing registers of figures in procession toward a temple"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The Warka Vase from Uruk, about 3200 BCE. Its carved procession is the earliest known narrative relief. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Warka_vase_(background_retouched).jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 4.0.'}
              </figcaption>
            </VizFigure>
          </figure>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Stage 1, Pictograph: A drawing of a cow head means "cow." A drawing of a jar means "jar." Signs are direct pictures of the things they represent.`}</p>
              <p>{`Stage 2, Simplified sign: The pictograph is rotated and drawn in fewer strokes. "Cow head" becomes a simplified angular symbol. Meaning is still tied to the picture.`}</p>
              <p>{`Stage 3, Abstract wedge marks: Signs are now pressed into clay with a reed stylus at an angle. The cow head becomes a cluster of wedges. The connection to the original picture is nearly invisible.`}</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Stage 1, A pictograph of a foot means "walk." Stage 2, The pictograph is simplified and rotated. Stage 3, The sign is now made of wedge marks. What cognitive shift does this sequence require from the scribe? (The key is in what the scribe must now memorize rather than draw from nature.)`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Why could cuneiform with hundreds of abstract signs only be learned by professional scribes, while the Phoenician alphabet with 22 signs could spread to merchants and farmers? Apply the same logic of learning cost you used above.`}</p>
            </div>
          </div>

          <h3>Uruk's Reach: Colonies and Trade, c. 3500-3100 BCE</h3>
          <p>{`Uruk's influence reached far beyond its walls. Colonies were established at Habuba Kabira and Jebel Aruda in Syria. Trade contact reached Susa and Godin Tepe on the Iranian plateau, Tepe Sialk farther east, and Hacinebi and Arslantepe in Anatolia. The first city was also the center of the first documented world system. A world system is a web of regions that each depend on the others' goods. No region in it can supply everything it needs alone. The system collapsed around 3100 BCE, the colonies were abandoned, and Uruk's reach shrank.`}</p>

          <h3>Sumerian City-States, c. 3000-2000 BCE</h3>
          <p>{`After the Uruk collapse, Sumer broke into competing city-states: Ur, Uruk, Lagash, Nippur, Kish, Umma, and Eridu. Each was a walled city plus the farmland around it. Each was run by a temple economy that owned the land and employed the workers. Smaller cities covered 12 hectares; Uruk itself reached 400. Cities lived on irrigation, with maintained canals and dikes. The temple collected surplus grain and handed it out to specialists. Religious authority and economic authority sat in the same building. Each city was led by a lugal (Sumerian for "big man," the secular king who often acted as war leader).`}</p>

          <h3>The Royal Cemetery of Ur, c. 2500 BCE</h3>
          <p>{`The Royal Cemetery of Ur holds 16 royal graves dug around 2500 BCE. Some held as many as 74 human sacrifices: attendants killed to follow their ruler into death. The grave goods include the "Ram in a Thicket" (golden goat figures in gold, lapis lazuli, and shell), the Standard of Ur (a wooden box showing war and peace scenes), and elaborate gold and lapis jewelry. Sumerian kings could command human life itself. Political and religious power were fused in one person.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Standard of Ur">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/56/Standard_of_Ur_front_view.jpg"
                alt="Inlaid panel in three registers showing soldiers, chariots, and prisoners in shell and lapis lazuli"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The Standard of Ur, about 2500 BCE. One face shows war, the other peace. The blue is lapis lazuli. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Standard_of_Ur_front_view.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 3.0.'}
              </figcaption>
            </VizFigure>
          </figure>
          <p>{`Mari, on the middle Euphrates, was the largest urban center in Upper Mesopotamia. Jiroft in southeast Iran ran its own chlorite vessel industry in the same century.`}</p>

          <h3>Ebla: A Syrian Archive, c. 2400-2350 BCE</h3>
          <p>{`Ebla, near modern Aleppo, reached 56 hectares and 20,000 people by 2400 BCE. Its palace G held an archive of 2,100 clay tablets in the Eblaite language. The archive counts 67,000 sheep and tracks textile output across flocks, workers, and seasons. Bronze Age palace economies were not informal. They needed a trained scribal class and a system for organizing information across a territory. Literate administration was a Mesopotamian core technology, but it did not stay in the core.`}</p>

          <h3>The Akkadian Empire, 2334-2004 BCE</h3>
          <p>{`Sargon of Akkad (2334-2279 BCE) was the first empire-builder in world history. Before him, power lived in competing city-states. Sargon showed that a single military and administrative machine could hold a multi-city territory. He conquered Ebla, Mari, and Elam and ruled all of Mesopotamia. His grandson Naram-Sin (2254-2218 BCE) took the title "King of the Four Quarters" and was celebrated on a victory stela around 2250 BCE. The empire collapsed around 2200 BCE, possibly from a long drought. Every later Mesopotamian empire learned from Sargon's model and its failures.`}</p>
          <p>{`The Ur III dynasty (2112-2004 BCE) restored order from the city of Ur. Its founder Ur-Nammu built the Ziggurat of Ur around 2100 BCE: a stepped platform temple dedicated to the moon god Nanna. It became the model for every later Mesopotamian ziggurat.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Great Ziggurat of Ur">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Great_Ziggurat_of_Ur.JPG"
                alt="Massive reconstructed mudbrick stepped platform with a broad central staircase"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The reconstructed Great Ziggurat of Ur, built about 2100 BCE for the moon god Nanna. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Great_Ziggurat_of_Ur.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · Public domain.'}
              </figcaption>
            </VizFigure>
          </figure>
          <p>{`Ur III fell around 2004 BCE to Amorite invasions.`}</p>

          <h3>Hammurabi of Babylon, 1792-1750 BCE</h3>
          <p>{`Amorite and Hurrian dynasties then competed for power. Hammurabi of Babylon (1792-1750 BCE) reunified Mesopotamia under Babylonian rule.`}</p>
          <p>
            {`Hammurabi's Law Code, inscribed on a black basalt stela around 1754 BCE, contains 282 laws on commerce, family life, property, and wages. The code divides society into three classes: the `}
            <strong>awilum</strong>
            {` (free citizens), the `}
            <strong>mushkenum</strong>
            {` (semi-free dependents), and the `}
            <strong>wardum</strong>
            {` (slaves).`}
          </p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="Code of Hammurabi">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/P1050763_Louvre_code_Hammurabi_face_rwk.JPG"
                alt="Tall black basalt stele, its lower body covered in dense cuneiform under a relief of two figures"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The basalt stele of Hammurabi, about 1754 BCE. It carries 282 laws under a scene of divine authority. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:P1050763_Louvre_code_Hammurabi_face_rwk.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY 3.0.'}
              </figcaption>
            </VizFigure>
          </figure>
          <p>{`The palace of Zimri-Lim at Mari (1775-1761 BCE) had 260 rooms over 2.5 hectares. Its archive of 17,000-plus tablets gives the most detailed picture we have of Bronze Age palace administration.`}</p>

          <h3>Old Assyrian Trade Networks, c. 2000-1750 BCE</h3>
          <p>{`Assyrian merchants built a trading network reaching deep into Anatolia by 2000 BCE. Their main outpost was Kanesh (modern Kultepe) in Cappadocia, where they ran a trade colony called a karum. About 23,000 tablets survive. Donkey caravans carried tin and textiles west from Mesopotamia and returned with silver.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`How do the Kanesh tablets show that private enterprise existed alongside palace economies? Form your own answer before reading on.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The Kanesh tablets are private merchant family records, not palace records. Merchants borrowed capital, formed partnerships, and carried personal risk. Mesopotamian temple and palace economies owned their goods and paid workers fixed rations. Private enterprise and palace redistribution coexisted from at least 2000 BCE.`}</p>
            </details>
          </div>
          <p>{`Kanesh was destroyed around 1760 BCE.`}</p>
        </>,

        <>
          <h2>3. The Hittites, the Levant, and the Late Bronze Age World System</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Multiple great powers exchange elaborate diplomatic letters using a common language. What does this suggest about how Bronze Age states understood sovereignty and international relations?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The Amarna Letters (14th century BCE) show that Bronze Age great powers (Egypt, Babylonia, Assyria, the Hittites, Mittani) treated each other as a network of "brothers." Kings addressed each other as equals or junior partners through a shared diplomatic language, Akkadian. Sovereignty was not absolute. It was held together by gift exchange, royal marriages, and military alliances. Each great power needed the others' raw materials and recognition.`}</p>
            </details>
          </div>

          <h3>The Hittite Empire, c. 1650-1185 BCE</h3>
          <p>{`The Hittites built their empire in central Anatolia. Their capital Hattusa (modern Bogazkoy) reached about 600 hectares at its peak. Massive walls protected it, with gates guarded by carved stone lions. An archive of 30,000-plus cuneiform tablets survives, in Hittite, Akkadian, Luwian, and several other languages.`}</p>
          <p>{`Early Hittite kings included Labarna (the founder), Hattusili I, and Mursili I, who sacked Babylon in 1595 BCE. The empire reached its peak under Shuppiluliuma I from 1345 BCE on. The Yazilkaya rock sanctuary, cut into a cliff near Hattusa in the 13th century BCE, shows 12 upper-world gods and 12 underworld gods in procession.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why arrange a state pantheon as 12 upper gods plus 12 lower gods? Form your own answer before reading on.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The pairing mirrors a balanced, ordered cosmos: living world and underworld in matched symmetry. By staging all the gods in one rock-cut procession, the Hittite state claims to represent the entire cosmic order. The king is the earthly counterpart of that order. Royal power extends over both realms, living and dead.`}</p>
            </details>
          </div>
          <p>{`The Hittite Empire fell between 1200 and 1185 BCE under Sea Peoples raids and a wider climate event.`}</p>

          <h3>The Amarna Letters and the Bronze Age World System</h3>
          <p>{`In the 14th century BCE, the great powers of the Near East wrote to each other in Akkadian, the language of the earlier Akkadian Empire, now the shared diplomatic tongue of the day. Their letters survive in the Egyptian city of Akhetaten (Amarna) and are called the Amarna Letters. They reveal a single world system connecting Egypt, Babylonia, Assyria, the Hittites, the Hurrian kingdom of Mittani, and Cyprus. Gold, silver, lapis lazuli, horses, and royal marriages held this system together.`}</p>

          <h3>Canaanite City-States and Ugarit</h3>
          <p>{`Fifteen to 17 Canaanite city-states ran the Levantine coast during the Late Bronze Age, including Megiddo, Gezer, Lachish, and Hazor.`}</p>
          <p>{`Ugarit, on the Syrian coast at modern Ras Shamra, was a cosmopolitan trading hub. Its palace covered one hectare. Its archives hold texts in six languages. Ugarit produced the earliest known alphabetic script before 1200 BCE: a consonant-only alphabet of 30 signs. All Western alphabets descend from Ugaritic and its Phoenician successors.`}</p>

          <h3>The Hurrian Mittani Kingdom</h3>
          <p>{`The Hurrian kingdom of Mittani ruled northern Mesopotamia from its capital Washukanni. Under King Saushtatar around 1430 BCE, Mittani reached its greatest extent. Sites at Nuzi (northeast Iraq, 1500-1350 BCE), Alalakh, and Tell Brak document Mittani culture. The Idrimi statue of the king of Alalakh, c. 1500 BCE, carries an autobiographical inscription on the king's own body.`}</p>

          <h3>The Uluburun Shipwreck</h3>
          <p>{`A ship that sank in the 14th century BCE off Kas in southwest Turkey carries the entire Late Bronze Age world system in one cargo. The 15-meter vessel held 350 copper ingots (9 tonnes), 1 tonne of tin, 100 glass ingots, terebinthine resin, ebony, ivory, and a gold scarab bearing the name of the Egyptian queen Nefertiti. A single ship combined copper from Cyprus, tin from distant sources, glass from Egypt, ivory and ebony from Africa. No region was self-sufficient.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="Uluburun Cargo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Uluburun_copper_ingot_oxhide_shaped.jpg"
                alt="Corroded copper ingot shaped like a stretched oxhide with four handle-like corners"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'An oxhide copper ingot from the Uluburun shipwreck, 14th century BCE. Its cargo crossed the whole Bronze Age world. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Uluburun_copper_ingot_oxhide_shaped.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 4.0.'}
              </figcaption>
            </VizFigure>
          </figure>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Bronze needs two ingredients: copper and tin. No single region in the Near East had both. Cyprus supplied copper. Tin came from far away, possibly Afghanistan or Central Europe. Every bronze-using civilization depended on a supply chain that crossed hundreds or thousands of kilometers. If one link broke, workshops stopped, armies lost their weapons, and palace economies lost their tools. When the Bronze Age world system collapsed around 1200 BCE, the tin chain collapsed with it. The Bronze Age collapse was partly a supply chain failure.`}</p>
          </div>

          <h3>Kassite Babylonia and Elam</h3>
          <p>{`The Kassites ruled Babylon from 1530 to 1155 BCE and stayed inside the Amarna diplomatic network. In Elam (southwest Iran), Chogha Zanbil holds one of the best-preserved ziggurats in the world: 50 meters tall, ringed by a perimeter wall 4 kilometers long, with 6,000 bricks stamped with the name of its builder Untash-Napirisha (1275-1240 BCE). A bronze statue of Queen Napir-Asu found there weighs 1,750 kilograms.`}</p>
          <p>{`The Elamite king Shutruk-Nahhunte invaded Babylonia in 1158 BCE and looted the Hammurabi stela. Nebuchadnezzar I of Babylon (1125-1104 BCE) defeated Elam and recovered the stolen monuments.`}</p>

          <h3>The Bronze Age Collapse, c. 1200-1185 BCE</h3>
          <p>{`Between 1200 and 1185 BCE, most palace societies of the eastern Mediterranean collapsed. The Hittite Empire fell. Mycenaean palaces burned. Ugarit was destroyed and never rebuilt. Egyptian power shrank sharply. Proposed causes include Sea Peoples raids, a long drought, internal rebellion, and the fragility of the world system itself when several stresses hit at once.`}</p>
          <p>{`The Philistines settled five cities on the southern Levantine coast around 1200 BCE: Ashdod, Ashkelon, Ekron, Gath, and Gaza. They brought a distinctive two-color (bichrome) pottery tradition with them.`}</p>
        </>,

        <>
          <h2>4. After the Collapse: Iron Age Peoples of Southwest Asia</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`After the Bronze Age collapse, how might the destruction of palace-based literacy networks affect the political form of successor societies?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Palace-based literacy concentrated writing in scribes trained inside palace institutions. When palaces burned, those scribal classes vanished with them. Successor societies had to rebuild literacy, but they could use the simpler alphabetic scripts that survived. The Phoenicians carried a 22-consonant alphabet that anyone could learn outside a palace school. Iron Age literacy became more accessible and more durable than the palace literacy it replaced.`}</p>
            </details>
          </div>

          <h3>Phoenicians and the Alphabet</h3>
          <p>{`The Phoenicians of Tyre and Sidon came through the Bronze Age collapse intact and became the Mediterranean's leading maritime traders in the Iron Age. Before 1000 BCE, they refined their Ugaritic-style alphabet down to 22 consonants. Cuneiform had hundreds of signs and required years of palace scribal training. A 22-sign alphabet can be learned in weeks. Literacy escaped from palace walls into the hands of merchants, soldiers, and farmers. Greek traders picked up the Phoenician alphabet, added vowel signs, and passed it on to Rome. Every Western alphabet, including this one, descends from it.`}</p>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Modern legacy</span>
            <p>{`The Kadesh treaty of 1259 BCE between the Hittites and Egypt is the oldest surviving peace treaty. A copy hangs at the United Nations headquarters in New York. The alphabet you are reading right now descends from Phoenician.`}</p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Neo-Assyrian Palace Propaganda</span>
              <p>{`Lachish siege relief (701 BCE) and Ashurbanipal's lion hunt: visual royal power carved into palace reliefs. Every visitor sees the same message: the king destroys his enemies with the gods' blessing. Architecture and art function as state propaganda.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Hammurabi's Law Code</span>
              <p>{`282 written rules presented as divine command on a public basalt stela, c. 1754 BCE. Same goal as Assyrian reliefs: legitimize royal authority. Different medium: publicly readable text instead of palace imagery.`}</p>
            </div>
          </div>

          <h3>Successor Peoples and the Spread of Aramaic</h3>
          <p>{`Many smaller peoples filled the gap after the Bronze Age collapse. The most lasting change came from the Aramaeans, whose language became the common administrative tongue of the later Assyrian and Persian empires.`}</p>

          <h3>Israel and Judah</h3>
          <p>{`The Iron Age kingdoms of Israel and Judah occupied Canaan after the Bronze Age collapse. They inherited the Canaanite city network: Megiddo, Gezer, Lachish, and Hazor all passed under Israelite and then Judahite control. The Assyrian king Sennacherib besieged Lachish in 701 BCE. The Lachish siege relief, carved into his palace at Nineveh, is the most detailed siege record from the ancient Near East. Foreign ambassadors and defeated rulers walked past it and saw the same image: the Assyrian army crushing a Judean city. Israel fell to Assyria in 722 BCE. Judah held on until Nebuchadnezzar II of Babylon destroyed the Jerusalem temple in 586 BCE and took its population into exile.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Lachish Relief">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Lachish_Relief%2C_British_Museum_1.jpg"
                alt="Carved gypsum relief showing Assyrian soldiers, a siege ramp, and captives leaving a walled city"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  "The Lachish relief from Sennacherib's palace at Nineveh, about 700 BCE. It records the siege of a Judean city. "
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Lachish_Relief,_British_Museum_1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 4.0.'}
              </figcaption>
            </VizFigure>
          </figure>

          <h3>The Neo-Assyrian Empire</h3>
          <p>{`The Assyrian Empire reached its peak in the 7th century BCE through a sequence of capital cities. Each new king built bigger:`}</p>
          <ul className="lrn-list">
            <li>{`Ashurnasirpal II built Nimrud in 883 BCE.`}</li>
            <li>{`Sargon II built Khorsabad between 721 and 705 BCE.`}</li>
            <li>{`Sennacherib built at Nineveh (704-681 BCE) and called his palace the "Palace Without Rival."`}</li>
            <li>{`Ashurbanipal at Nineveh assembled a library of 30,000-plus tablets, including the Epic of Gilgamesh.`}</li>
          </ul>

          <h3>The Neo-Babylonian Empire and Achaemenid Persia</h3>
          <p>{`The Chaldean dynasty rose in Babylon after Assyria fell. Nebuchadnezzar II (605-562 BCE) built the Ishtar Gate: a ceremonial entrance faced with glazed bricks showing bulls and dragons. He destroyed the Jerusalem temple in 586 BCE. Babylon itself fell to Cyrus of Persia in 539 BCE.`}</p>
          <p>{`The Achaemenid Persian Empire under Cyrus (559-530 BCE) and Darius I made Pasargadae, Persepolis, and Susa its capitals. Alexander the Great conquered the Persian Empire between 334 and 323 BCE and died in Babylon.`}</p>
        </>,

        <>
          <h2>5. The Aegean Bronze Age: Minoan Crete and Mycenaean Greece</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Imagine a civilization that controls a large maritime region without defensive walls or a standing army. What would its power be based on?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`This describes Minoan Crete: a thalassocracy, a "rule of the sea." Power came from maritime trade routes, religious prestige, and cultural pull rather than armies. Minoan palaces had no defensive walls. They worked as redistribution centers for prestige goods and as ritual centers tied to mountain sanctuaries. Religious authority did the work that military force did elsewhere.`}</p>
            </details>
          </div>

          <h3>The Bronze Age Mediterranean</h3>
          <p>{`The Mediterranean Sea covers 2.5 million square kilometers. Its farming triad of olives, grains, and grapevines feeds a settled population. Its real advantage is the geography: islands and peninsulas make long-distance travel possible with small boats. The Bronze Age Mediterranean was a world of constant movement, exchange, and encounter.`}</p>
          <p>{`Metals drove the trade. Cyprus held the earliest copper-smelting sites in the Mediterranean from the mid-2nd millennium BCE. The Cycladic islanders extracted silver from lead ore as early as the 3rd millennium BCE. They used cupellation: heating the ore in air so the lead burns off and leaves the silver behind.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Minoan Thalassocracy</span>
              <p>{`Maritime influence without military domination. No defensive walls at palaces. Power through trade networks, religious prestige, and craft production. Palaces at Knossos, Phaistos, Mallia, and Kato Zakros work as redistribution and ritual centers. Linear A script still undeciphered.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Mycenaean Territorial Kingdom</span>
              <p>{`Fortified palaces controlling farmland through Linear B administration. Cyclopean walls, megaron throne-rooms (a megaron is a large rectangular hall with a central hearth), shaft graves, tholos tombs. Linear B records forced labor, textile quotas, and land grants. Military force and bureaucratic control sit at the center.`}</p>
            </div>
          </div>

          <h3>The Cyclades: Early Bronze Age, c. 3500-2000 BCE</h3>
          <p>{`The Cycladic islands produced a distinctive culture. Their most famous works are white marble figurines: flat, abstract female nudes plus a smaller set of male "hunter-warriors," flute players, and seated harpists. Most come from cemeteries on Syros (Chalandriani and Kastri) and from the ritual deposition site of Keros. Looting and modern forgery have done heavy damage to the surviving record.`}</p>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Key Theme</span>
            <p>{`Mediterranean inequality did not appear first in the richest farming zones. It appeared on islands and in harsh environments. Khirokitia on Neolithic Cyprus shows early unequal wealth. Dhimini and Lerna on the Greek mainland show inequality in small farming communities. The Tavoliere plain in Italy shows the same pattern. In southeast Spain, the Chalcolithic site of Los Millares grew up around copper. Scarcity, not abundance, drove people to compete, accumulate, and dominate.`}</p>
          </div>

          <h3>Western Mediterranean Bronze Age Monuments</h3>
          <p>{`The Bronze Age built monuments far west of Crete and Greece too. Sardinia has more than 7,000 nuraghi: stone tower fortresses built of large uncut blocks. Nuraghe Is Paras, 15th to 14th century BCE, is one of the best-preserved. Corsica's Torri and the Balearic Talayots served similar defensive and prestige functions. Bronze Age monumental architecture was a western Mediterranean phenomenon too.`}</p>

          <h3>Minoan Crete: The Palace Period, c. 2000-1490 BCE</h3>
          <p>{`The First Palace Period (c. 2000-1700 BCE) brought large palaces at Knossos, Phaistos, and Mallia. They were not military forts. They combined redistribution centers, ritual spaces, and craft workshops in one complex. Each palace lined up with a sacred mountain nearby.`}</p>
          <p>{`The Second Palace Period (c. 1700-1490 BCE) saw the palaces rebuilt after earthquakes. Kato Zakros was added as a fourth palace. Elite villas appeared at Tylissos and Vathypetro. Harriet Boyd Hawes excavated the town of Gournia, a Minoan settlement below the palace level.`}</p>
          <p>{`Peak sanctuaries on mountaintops received clay offerings from across Crete. The Minoan script sequence runs from Hieroglyphic (c. 2000 BCE) to Linear A (the main palace script, 1800-1500 BCE). Linear A is still undeciphered. Akrotiri on the island of Thera (Santorini) was a Minoan-influenced town buried in ash by a volcanic eruption in the late 17th century BCE. The ash preserved wall paintings and standing buildings, earning Akrotiri the nickname "Bronze Age Pompeii."`}</p>
          <p>{`A Minoan shipwreck found in 2003 near Pseira, dated 1800-1675 BCE, is the earliest actual Minoan ship recovered. Its find location lies on the eastern Aegean trade lanes between Crete and the wider Mediterranean. It is the most direct physical evidence that Minoans shipped their own goods across open water.`}</p>
          <p>{`Around 1490 BCE, most Minoan palaces burned. Knossos survived but passed under Mycenaean rulers, who introduced Linear B. The Minoan model of trade and prestige without walls had no defense against territorial conquest.`}</p>

          <h3>Mycenaean Greece, c. 1600-1200 BCE</h3>
          <p>{`Mycenaean civilization grew on the Greek mainland from the 16th century BCE. Its defining features are cyclopean masonry (defensive walls of massive uncut stones), megaron throne-rooms, shaft graves, and tholos (beehive-domed) tombs.`}</p>
          <p>{`At Mycenae, Heinrich Schliemann excavated Grave Circle A in 1876. He found golden death masks, weapons, and vessels. The "Mask of Agamemnon" is the most famous, though Schliemann's link to the Homeric hero was wrong. The Lion Gate at Mycenae is the earliest surviving monumental sculpture in Europe.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="Lion Gate of Mycenae">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Lion_Gate%2C_Mycenae%2C_201510.jpg"
                alt="Stone gateway of huge uncut blocks topped by a relief of two lions flanking a column"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The Lion Gate at Mycenae, about 1250 BCE. Cyclopean masonry carries the earliest monumental sculpture in Europe. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Lion_Gate,_Mycenae,_201510.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 4.0.'}
              </figcaption>
            </VizFigure>
          </figure>
          <p>{`The Treasury of Atreus (c. 1250 BCE) is a corbeled tholos tomb. Tiryns had massive cyclopean fortifications. The Palace of Nestor at Pylos is the best-preserved Mycenaean megaron.`}</p>
          <p>{`Other Mycenaean palaces included Thebes, Iolkos, Orchomenos, and Agios Vasileios near Sparta.`}</p>

          <h3>Linear B: Deciphering Mycenaean Administration</h3>
          <p>{`Linear B evolved from Minoan Linear A. Arthur Evans found Linear B tablets at Knossos in 1900. The fire that destroyed the Palace of Nestor at Pylos in the late 13th century BCE baked its raw clay tablets hard, accidentally preserving a complete administrative archive. Without that fire, the tablets would have been recycled like every other year's records.`}</p>
          <p>{`In 1952, the architect Michael Ventris deciphered Linear B, building on the groundwork laid by the philologist Alice Kober (a scholar who studies the structure and history of languages). The script turned out to encode an early form of Greek. The tablets record mundane palace business: textiles, flax, perfumed oil, land allocations, and rations. They also name familiar Greek deities, including Athena, Poseidon, and Zeus.`}</p>
          <p>{`Linear B fell because it had a linguistic anchor. A linguistic anchor is a known starting point that lets scholars attach an unknown script to real sounds and meanings. There are three kinds. The first is a bilingual text, where the same words appear in a known script. The second is a living descendant language that the old script grew into. The third is enough connected text with names you can recognize, like the place names Ventris used. Linear B had the third kind. Its sister script Linear A, still unread, has none. Keep this idea in mind. It explains later why some scripts can be read and others stay silent.`}</p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Step 1, Evans finds tablets at Knossos in 1900 but cannot read them. He identifies two distinct scripts: Linear A (Minoan, earlier) and Linear B (later, also found at mainland palaces).`}</p>
              <p>{`Step 2, Alice Kober (1940s) establishes that Linear B has an inflecting grammar: sign groups change their endings in patterned ways. This means the underlying language has case endings, like Greek or Latin.`}</p>
              <p>{`Step 3, Michael Ventris (1952) applies phonetic values to the signs and discovers that the language is an early form of Greek. Decipherment confirmed when the tablets prove to record Greek words for textiles, food, and deities.`}</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Kober noticed that Linear B sign groups change their endings in patterned ways. Ventris used this to hypothesize that the underlying language had _______ (what grammatical feature?). Once Ventris applied the phonetic grid, which ancient language did the signs spell out?`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Why were the Pylos Linear B tablets preserved when most Bronze Age clay tablets were recycled? What does their content reveal about how palace economies worked?`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Linear B records only economic transactions because the Mycenaean palace invented writing for one purpose: tracking what it owned. The palace controlled land, labor, textiles, and food. Scribes wrote down ration distributions, textile quotas, land grants, and livestock counts. These were working documents. Once a year ended, the clay was recycled. Writing existed to manage the palace economy, not to preserve history or speak to gods. Compare Shang China, where writing served royal divination. The function shapes what is recorded. What counts as worth writing down depends entirely on why writing was invented in the first place.`}</p>
          </div>

          <h3>Troy</h3>
          <p>{`Troy (Hissarlik, northwest Turkey) was occupied continuously from c. 3000 BCE to 500 CE in nine layered settlements. Troy II (c. 2500 BCE) was a wealthy regional center with gold and silver treasures. Troy VI, destroyed c. 1250 BCE, is the most reasonable candidate for Homer's Troy. It had a fortified citadel and Mycenaean pottery in its destruction layers, matching the era when Mycenaean Greece was active.`}</p>

          <h3>The End of the Aegean Bronze Age and Lefkandi</h3>
          <p>{`Around 1200 BCE, every Mycenaean palace was destroyed. Linear B administration stopped. Writing disappeared from Greece for roughly 400 years. The site of Lefkandi on Euboea shows that the lights did not go out everywhere. At its Toumba mound, a 10th-century BCE heroon held a warrior and woman buried with a horse. The grave goods include gold jewelry, an ivory statuette, and faience from Phoenicia and Egypt. Even in the Greek Dark Age, some communities kept contact with the Near East. Greek recovery was not a slow climb from total isolation.`}</p>
        </>,

        <>
          <h2>6. The Mediterranean in the First Millennium BCE</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A shared religious site draws athletes and spectators from dozens of competing city-states every four years. What political function might such a site serve?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Panhellenic sanctuaries like Olympia provided neutral ground where rival cities met without war. The Olympic Games (traditional date 776 BCE) and three other panhellenic festivals built a shared Hellenic identity across dozens of city-states with no permanent political union. Shared religion enabled cooperation and competition without a single political authority.`}</p>
            </details>
          </div>

          <h3>The Greek Dark Age and Recovery, c. 1100-700 BCE</h3>
          <p>{`The Greek world fell into a Dark Age after 1200 BCE. Population dropped, writing vanished, and long-distance trade shrank. Recovery came slowly. The Lefkandi heroon (10th century BCE) shows imports from the Near East already present. By the 8th century BCE, the Iliad and the Odyssey were written down. The polis (the Greek city-state) took shape between roughly 700 and 480 BCE.`}</p>

          <h3>The Greek Polis and Panhellenic Sanctuaries</h3>
          <p>{`A polis combined an urban center (astu) with its farmland (chora). Each had an acropolis, a high fortified sanctuary, and an agora, a public marketplace and meeting space. The poleis fought each other constantly but shared one Hellenic identity, held together by common gods, games, and sanctuaries.`}</p>
          <p>{`Four panhellenic festivals brought Greeks from across the Mediterranean together:`}</p>
          <ul className="lrn-list">
            <li>{`The Olympic Games at Olympia (dedicated to Zeus, first Olympiad 776 BCE)`}</li>
            <li>{`The Pythian Games at Delphi (dedicated to Apollo, 586 BCE)`}</li>
            <li>{`The Isthmian Games (580 BCE)`}</li>
            <li>{`The Nemean Games (573 BCE)`}</li>
          </ul>
          <p>{`The Temple of Zeus at Olympia was completed in 456 BCE. Athens built the Parthenon on its acropolis between 447 and 432 BCE. The Peloponnesian War (431-404 BCE) between Athens and Sparta ended Athenian imperial dominance.`}</p>
          <p>{`A Greek from Syracuse and a Greek from Sparta could compete at Olympia under a sacred truce. That shared identity made coordination possible even without political unification.`}</p>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Modern legacy</span>
            <p>{`The modern Olympic Games are a direct revival of the ancient Greek panhellenic games, recreated in Athens in 1896. The five-ring logo represents five continents, but the institution traces back to Olympia, where the Games ran from 776 BCE to 393 CE. Greek marble statues, by the way, were originally painted in vivid skin tones and colored clothing. The pure-white look we associate with classical Greece is faded paint, not the artists' intent.`}</p>
          </div>

          <h3>Greek and Phoenician Colonization</h3>
          <p>{`Between c. 750 and 550 BCE, Greek city-states planted colonies across the Mediterranean and Black Sea coasts. Motivations included land shortage, civic tensions, and access to metal ores. Colonies in southern Italy and Sicily formed Magna Graecia. Massalia (modern Marseille) was founded near the Rhone mouth. Pithekoussai went west specifically for metal ores.`}</p>
          <p>{`The Phoenicians of Tyre and Sidon expanded westward at the same time, motivated more narrowly by trade. Their colonies clustered at coastal harbors near metal-rich regions. Carthage on the Tunisian coast, founded by the 9th century BCE, grew into the most powerful city in the western Mediterranean, with two artificial harbors and a distinct Punic culture. Rome sacked Carthage at the end of the Third Punic War in 146 BCE.`}</p>
          <p>{`The Metapontum necropolis in southern Italy is the best-studied Greek colonial cemetery. The Pantanello plot, excavated 1982-1986, holds 324 burials from c. 580 BCE to after 280 BCE. Female burials outnumber male burials two to one, and family plots run across five generations. Greek colonization was not a male-only settler project. From the first generation, women and mixed populations were part of the community.`}</p>
          <p>{`A large bronze krater found at Vix in eastern France, in a Hallstatt-period grave, shows how far Greek luxury objects traveled. The vessel was too large to be personal property. It was a diplomatic gift from the Greek world to an indigenous European ruler. Greek material culture reached far north of the Mediterranean coast through prestige exchange, not only colonial settlement.`}</p>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Key Theme: Migration and Coercion</span>
            <p>{`Chattel slavery means owning people as property. It was built into both the Greek polis and the Roman Empire. Slaves came from conquest, piracy, banditry, and an organized slave trade. At least 100 million people were caught up in forced movement over the Roman Empire's history. The archaeology of slavery was under-researched for most of the field's history. Ancient slavery was not marginal. It was the labor foundation of the Mediterranean's most admired cities.`}</p>
          </div>

          <h3>The Etruscans and the Rise of Rome</h3>
          <p>{`The Etruscans developed as independent city-states (Veii, Cerveteri, Tarquinia) in central Italy from the 8th century BCE. They were never politically unified. Their Tomb of the Leopards at Tarquinia (5th century BCE) shows a banqueting scene in vivid multi-colored paint. Etruscan influence on early Rome ran deep: the fasces (a bundle of rods around an axe, carried as a symbol of a ruler's authority), the architecture of the Capitoline Temple, and the kings of Rome's Regal Period all carry Etruscan character.`}</p>
          <h3>Alexander the Great and the Hellenistic World</h3>
          <p>{`Philip II of Macedon (383-336 BCE) defeated a Greek coalition at the Battle of Chaeronea in 338 BCE. His son Alexander (356-323 BCE) then conquered the Persian Empire and Egypt and reached India by 326 BCE, where his troops mutinied. He died in Babylon in 323 BCE.`}</p>
          <p>{`Alexander founded Alexandria-by-Egypt in 331 BCE. Its Pharos lighthouse (135 meters tall) was one of the Seven Wonders. Its Library became the greatest repository of texts in the ancient world. After Alexander's death, his empire broke into three Hellenistic kingdoms: Antigonid, Seleucid, and Ptolemaic. At Aï Khanoum in modern Afghanistan, a Greek-style city with temples, a gymnasium, and philosophical maxims copied from Delphi shows how far Hellenistic culture reached.`}</p>

          <h3>Rome: From Republic to Empire</h3>
          <p>{`Rome grew outward from the Italian peninsula. Three Punic Wars (264-146 BCE) ended with the sack of Carthage in 146 BCE. Rome absorbed the Etruscan city-states from the 4th century BCE on. By the late 1st century BCE, under Augustus, Rome controlled the entire Mediterranean.`}</p>
          <p>{`The Colosseum was built c. 72-80 CE. Pompeii, buried by the eruption of Vesuvius in 79 CE, is the canonical excavated Roman city. The Mahdia shipwreck off Tunisia (c. 80-70 BCE) carried roughly 60 marble columns (about 230 tonnes of stone) from Mount Pentele in Attica. Probably traveling from Piraeus to Italy after Rome's sack of Athens in 86 BCE, it records both Roman love of Greek culture and the scale of Mediterranean trade.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Western Provinces</span>
              <p>{`Gaul, Britain, and Spain were pre-urban societies before Rome arrived. Rome brought Latin, urban planning, new religion, and Roman law. Hadrian's Wall (c. 117 km) marked the northern frontier in Britain. Local populations became Romanized in language, religion, and material culture over generations.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Eastern Provinces</span>
              <p>{`Greece, Egypt, and Syria were already densely urbanized in Greek-speaking cities. Rome adapted rather than imposed. Greek stayed the language of educated life. Eastern cities kept their own civic frameworks. As Horace wrote: "captive Greece took its savage victor captive."`}</p>
            </div>
          </div>
          <p>{`Constantine founded Constantinople in 330 CE. Theodosius I divided the empire into western and eastern halves in 395 CE, fixing the split between the Latin west and the Greek-speaking east.`}</p>
        </>,

        <>
          <h2>7. The Indus Civilization</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A civilization spans 500,000 square kilometers and lasts 700 years, yet leaves no royal tombs, no palace complex, and no warrior burials. How would you explain this pattern?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`This is the central Indus paradox. Civilization-scale uniformity normally implies a state enforcing standards through coercion. The Indus had the uniformity (shared script, standardized weights, consistent pottery, grid towns) but no visible coercive apparatus. The state may have been expressed through merchant guilds or priestly networks rather than warrior kings. Shared norms may have been maintained by social pressure within trading communities. Or the political form may be one we do not yet recognize from the archaeological record.`}</p>
            </details>
          </div>

          <h3>South Asia's Earliest Inhabitants</h3>
          <p>
            {`The South Asian subcontinent spans 4 million square kilometers. The earliest `}
            <em>Homo sapiens</em>
            {` arrived from Sri Lanka around 34,000 years ago. Key early sites include Bagor, Langnaj, Sarai Nahar Rai, and Adamgarh. The Bhimbetka rock shelters preserve 133 shelters with painted hunting scenes and are a UNESCO World Heritage Site.`}
          </p>

          <h3>Mehrgarh: The First South Asian Farmers, c. 6500-2800 BCE</h3>
          <p>{`Mehrgarh sits near the Bolan Pass in western Pakistan. Its occupation runs from c. 6500 to 2800 BCE. Period IA (c. 6500-6000 BCE) is aceramic (no pottery yet) and has rectangular mud-brick storage structures. Burials contain turquoise, marine shell, steatite beads, and a copper bead. The inhabitants grew barley and wheat and kept the earliest known domesticated zebu cattle. Period II (c. 5500-4800 BCE) shows possible cotton domestication.`}</p>
          <p>{`Mehrgarh is the earliest undisputed farming site in South Asia. Its discovery in the 1970s overturned an older claim that South Asian civilization was imported from Mesopotamia. Mehrgarh shows a continuous local farming tradition reaching back 3,000 years before the Indus mature phase. The Indus grew from its own agricultural base, not from borrowed Mesopotamian complexity.`}</p>

          <h3>The Kot Diji Phase, c. 3200-2600 BCE</h3>
          <p>{`The Kot Diji phase brought wheel-thrown jars, bull motifs, pipal leaf decorations, and planned mud-brick settlements across the region. Rehman Dheri (20 hectares) and Kalibangan confirm a locally developing urban tradition. The line from Mehrgarh to Kot Diji to the mature Indus is continuous and local.`}</p>

          <h3>The Indus Civilization: An Era of Integration, c. 2600-1900 BCE</h3>
          <p>{`The Indus Civilization covered 500,000 square kilometers. Archaeologists call the period from 2600 to 1900 BCE the "era of integration." Five urban sites were larger than 100 hectares: Mohenjo-daro, Harappa, Dholavira, Rakhigarhi, and Ganweriwala. Around 32 medium-sized towns clustered around them. The total site count exceeds 15,000. The defining traits include cities, standardized artifacts, a four-tier settlement hierarchy, an undeciphered writing system, and long-distance trade reaching Mesopotamia. A settlement hierarchy ranks sites by size. The Indus had four tiers: great cities, large towns, smaller towns, and many villages. Ranked site sizes imply ranked levels of administration controlling them.`}</p>

          <h3>Mohenjo-daro and Harappa</h3>
          <p>{`Mohenjo-daro covered 200 hectares. Its citadel mound held three remarkable structures:`}</p>
          <ul className="lrn-list">
            <li>{`The Great Bath (12 by 7 meters, 2.4 meters deep, fired brick sealed with bitumen): a ritual purification pool.`}</li>
            <li>{`The Granary (50 by 27 meters): storage for agricultural surplus.`}</li>
            <li>{`A Pillared Hall: probably an administrative assembly space.`}</li>
          </ul>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Great Bath, Mohenjo-daro">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Great_bath_view_Mohenjodaro.JPG"
                alt="Sunken rectangular brick pool surrounded by fired-brick walls and steps on the citadel mound"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The Great Bath at Mohenjo-daro, a sealed fired-brick pool, likely for ritual purification. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Great_bath_view_Mohenjodaro.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 3.0.'}
              </figcaption>
            </VizFigure>
          </figure>
          <p>{`Below the citadel, the lower town ran on a grid plan with covered brick drains. Ritual, food storage, and administration sat at the top of the mound. Daily life ran in the streets below.`}</p>
          <p>{`Harappa covered 150-plus hectares with a completely different plan: four separately walled mounds. Its pottery kilns and Cemetery H mark the transition into the post-Indus period. Indus urbanism was not a single formula. Cities could vary in physical layout while sharing the same weights, scripts, and pottery standards.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Mohenjo-daro</span>
              <p>{`Citadel mound with Great Bath, Granary, and Pillared Hall. Grid-plan lower town with covered brick drains. 200 hectares. Classic Indus city plan: raised citadel over residential grid.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Harappa</span>
              <p>{`Four separately walled mounds. Pottery kilns and Cemetery H (late phase). 150+ hectares. Shows Indus urbanism accommodated variation: same civilization, different urban organization.`}</p>
            </div>
          </div>
          <p>{`Dholavira had a unique three-zone plan: an acropolis, a middle town, and a lower town. Lothal functioned as a "factory fort" with a bead workshop and a possible reservoir.`}</p>

          <h3>The Indus Script: An Unsolved Problem</h3>
          <p>{`The Indus script survives in 2,700-plus inscriptions. It uses 170 to 220 simple signs and 170 to 200 composite signs. The script reads right to left. Scholars agree it is logo-syllabic (signs stand for both whole words and syllables), but they cannot yet read it. The underlying language might be Dravidian, Indo-European, or something else; nobody knows. The script stays unread because there is no bilingual key and no certain descendant language. Most inscriptions are also too short to crack the system structurally.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="Indus Seal (Pashupati)">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Shiva_Pashupati.jpg"
                alt="Carved steatite stamp seal showing a horned seated figure surrounded by animals, with script above"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The Pashupati seal from Mohenjo-daro, a steatite stamp seal. Its short Indus script line stays unread. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Shiva_Pashupati.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · Public domain.'}
              </figcaption>
            </VizFigure>
          </figure>

          <h3>The Paradox of Indus Uniformity</h3>
          <p>{`The Indus Civilization showed remarkable uniformity across 500,000 square kilometers: shared town plans, a common script, standardized weights and measures, and consistent pottery forms. It shows none of the usual markers of a centralized state: no royal tombs, no elite palaces, no warrior burials.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Uniformity at this scale normally needs a state to enforce it. The Indus had the uniformity without the visible enforcement. Scholars debate whether to read the Indus as a state, a chiefdom, an egalitarian federation, or an early caste society maintaining conformity through social pressure. Several mechanisms could explain the uniformity:`}</p>
            <ul className="lrn-list">
              <li>{`A small set of specialist centers made the finished weights and measures, then sent them outward.`}</li>
              <li>{`Apprenticeship trained every artisan in one shared tradition.`}</li>
              <li>{`Trading communities rejected non-standard weights as fraud.`}</li>
              <li>{`Shared beliefs treated correct measures as morally required.`}</li>
            </ul>
            <p>{`The lesson is that uniformity needs trusted shared standards, not a palace dictating every transaction. How those standards were maintained at Indus scale is still an open question.`}</p>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Stage 1, Early interpretation: Scholars called the Indus inscriptions "writing" because the marks appeared on seals across a large territory. The seals looked like they carried official messages or ownership marks.`}</p>
              <p>{`Stage 2, Skeptical turn: Later scholars noticed that most inscriptions had fewer than five signs. Some proposed the seals were "magic charms" or ritual objects, not text.`}</p>
              <p>{`Stage 3, Current consensus: The seals are trade tags. A merchant stamped a bundle of goods with a seal identifying ownership or destination. The signs probably encode names, titles, or commodity labels.`}</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Scholars called early Indus marks "writing" because they appeared on _______. Later skeptics said they were "magic charms" because the inscriptions were too _______ to carry complex messages. Current scholars treat them as trade tags that probably encode _______.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Even if every Indus seal is a trade tag, the core paradox is unsolved. What evidence would you need to identify what kind of political system maintained 500,000 square kilometers of uniformity without royal tombs?`}</p>
            </div>
          </div>

          <h3>The Eclipse of the Indus, c. 1900 BCE</h3>
          <p>{`Around 1900 BCE, the Indus Civilization slowly dissolved. Cities were abandoned. The Cemetery H phase (Late Harappan) shows new pottery traditions and smaller settlements. Trade with Mesopotamia collapsed. The causes are debated: trade collapse, loss of administrative authority, shifting rivers, or the rise of new regional elites.`}</p>
          <p>{`An older theory read skeletal remains at Mohenjo-daro as evidence of an Indo-Aryan invasion "massacre." Reanalysis showed the bodies were a peaceful mass burial with grave goods. The massacre theory has been abandoned. The Gandharan Grave Culture (c. 1700-1600 BCE) in the Chitral, Dir, and Swat valleys shows bell-shaped pits and horse burials, suggesting that new populations were moving into the region.`}</p>
        </>,

        <>
          <h2>8. South Asia after the Indus: Vedic Period to the Mauryan Empire</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`After one great urban civilization collapses, what conditions would allow a second urbanization to emerge in the same region centuries later?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Three things must come back:`}</p>
              <ul className="lrn-list">
                <li>{`Farm surplus, which new iron tools created by opening new farmland.`}</li>
                <li>{`Political units large enough to coordinate trade and defense.`}</li>
                <li>{`Population dense enough to support full-time craft workers.`}</li>
              </ul>
              <p>{`In South Asia, iron technology in the 1st millennium BCE, the janapada territorial units, and expanded Ganga valley farming supplied all three. The second urbanization grew from inside over centuries. Foreign contact did not trigger it.`}</p>
            </details>
          </div>

          <h3>Peripheral Areas and Continuity</h3>
          <p>{`Not all of South Asia collapsed with the Indus. Pirak (1700-700 BCE) kept its trade networks going. The Ganga-Yamuna Doab produced Ocher Colored pottery. In the western Deccan, Inamgaon (1600 BCE) and the Diamabad chiefdom held onto regional complexity.`}</p>

          <h3>The Re-Emergence of Complexity, c. 1200-500 BCE</h3>
          <p>{`Iron tools spread in the 1st millennium BCE. Painted Gray Ware moved through northern India, followed by Northern Black Polished Ware in the 6th century BCE. In the northwest, Achaemenid Persian satraps (provincial governors appointed by the Persian king) ruled through administrative centers at Taxila, Dahan-e Golaman, and Kandahar.`}</p>
          <p>{`By 500 BCE, 16 mahajanapadas (great territories) had formed across northern India. Hastinapura reached 6.5 hectares by 1100 to 800 BCE. Kausambi grew to 50 hectares and anchored the Vatsa kingdom. In southern India, megalithic cemeteries at Brahmagiri, Maski, and Hallur mark new burial traditions. In Sri Lanka, Anuradhapura was settled by c. 900 BCE, reached 66 hectares by 450 BCE, and developed an early Brahmi script by 400 BCE.`}</p>

          <h3>Did Persian Contact Trigger Second Urbanization?</h3>
          <p>{`The Achaemenid Empire annexed northwest India in 520 BCE. Alexander invaded in 326-325 BCE. An older theory held that Persian contact triggered South Asia's second urbanization. Excavations at Charsadda in 1996 found occupation reaching back to the mid-2nd millennium BCE, centuries before Persian contact arrived. Indigenous development, not foreign stimulus, drove the second urbanization.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Foreign-Contact Model</span>
              <p>{`One older model proposed that Achaemenid Persian contact (520 BCE) triggered South Asia's second urbanization. It saw no evidence of urban activity between the Indus collapse and Persian arrival. This external-stimulus model treats South Asian development as dependent on foreign impulse.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Internal Dynamics Model</span>
              <p>{`Charsadda excavations (1996) showed occupation extending back to the middle 2nd millennium BCE, centuries before Persian contact. The second urbanization grew from the mahajanapada system, iron technology, and expanded agriculture. Indigenous development, not foreign stimulus, was the driver.`}</p>
            </div>
          </div>

          <h3>The Mauryan Empire, c. 325-185 BCE</h3>
          <p>{`The Mauryan Empire was the first pan-South Asian state. Asoka (reigned 272-235 BCE) was its most famous ruler. He issued edicts in Greek, Aramaic, Kharoshthi, Brahmi, and Prakrits (the everyday spoken languages of India, as opposed to formal Sanskrit), inscribed on rock faces and polished stone pillars across the subcontinent. His edicts promoted non-violence, religious pluralism, dharma (righteous conduct), and Buddhist missions.`}</p>
          <p>{`The Mauryan capital Pataliputra covered 1,350 hectares and held a stone-pillared hall for royal audiences. The empire organized its territory in a six-tier settlement hierarchy. Mahasthangarh in modern Bangladesh covered 130 hectares and contained 40-plus brick monuments. In Sri Lanka, Buddhist monasteries in the Anuradhapura hinterland replaced secular towns in the settlement hierarchy. Monks and abbots managed rural labor and surplus, a form of distributed religious administration unlike anything in Mesopotamia or China.`}</p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Edict in Greek, script choice: Greek script. Audience: Hellenistic communities in the northwest, former subjects of Alexander's empire. Ideological function: Asoka claims to represent even foreign populations under his dharma framework.`}</p>
              <p>{`Edict in Kharoshthi, script choice: Kharoshthi script (a northwest Indian adaptation of Aramaic). Audience: Gandharan communities near the former Achaemenid frontier. Ideological function: Connects the empire to an Achaemenid administrative tradition local populations already understood.`}</p>
              <p>{`Edict in Brahmi, script choice: Brahmi script (the ancestor of most modern South Asian scripts). Audience: The Indian heartland from the Deccan to the Ganges valley. Ideological function: Reaches the majority population in their own literacy tradition.`}</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Asoka used Greek script to reach _______ communities in the northwest. He used Kharoshthi because it was familiar to _______ populations near the former Achaemenid frontier. Brahmi reached the _______ of the empire. What does this pattern reveal about how ideology travels across diverse populations?`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Why was inscribing edicts in stone more ideologically effective than distributing them as papyrus scrolls? Apply the same logic of durability and audience access.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Monastery-based administration differs fundamentally from palace-based administration. A palace runs on force: the king's soldiers enforce taxation, and surplus flows to the palace by command. A monastery runs on moral obligation: communities give labor and surplus voluntarily to support the monks' spiritual work. In exchange, the monks administer the poor, the sick, and the farmland, and legitimize the social order through ritual. This is heterarchy (distributed authority across religious networks) rather than hierarchy (command authority from a single throne).`}</p>
          </div>

          <h3>Post-Mauryan Dynasties</h3>
          <p>{`After the Mauryan Empire ended in 185 BCE, the Sunga dynasty extended the Buddhist sites at Sanchi and Barhut. The Kushan Empire (1st-3rd century CE) under King Kanishka controlled Central Asia down to the Indian Ocean coast and became the main conduit for Buddhism along the Silk Road.`}</p>
          <p>{`An older theory identified Arikamedu on the southeast coast as a "Roman market" town. It assumed Roman demand triggered South Asian maritime trade. Later analysis showed its Rouletted Ware pottery was locally made, not Roman. Evidence from Anuradhapura shows that South Asian maritime trade networks predated Roman contact. Indian Ocean trade was indigenous in origin. This is the third old "brought-from-outside" theory to fall. Mehrgarh overturned the Mesopotamian-import theory. Charsadda overturned the Persian-trigger theory. Arikamedu overturned the Roman-demand theory.`}</p>
        </>,

        <>
          <h2>9. Early China: From Longshan to the Han Dynasty</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A dynasty that builds hundreds of kilometers of walls, conscripts 300,000 workers, standardizes every measurement in the empire, then collapses after 14 years. What does this suggest about the relationship between state power and state sustainability?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`State power and state sustainability are not the same thing. The Qin (221-207 BCE) maximized control through Legalism: fixed laws, uniform standards, and mass conscription. Legalism had no mechanism for managing grievances or building loyalty. When Qin Shi Huangdi died in 210 BCE, only fear was holding the empire together. Han Confucianism, which replaced it, lasted four centuries because it gave rulers a moral framework that built voluntary compliance alongside coercion.`}</p>
            </details>
          </div>

          <h3>The Longshan Culture, c. 3000-1900 BCE</h3>
          <p>{`The Longshan culture grew from the earlier Yangshao and Dawenkou cultures across the Yellow River valley. By 3000 BCE, walled settlements were competing hard. Taosi was the dominant Longshan center: 56 hectares enclosed by walls, divided into four quadrants for ritual, palace, craft, and commoner zones. Its royal cemetery held boat-shaped coffins with turquoise ornaments and cowrie shells. Taosi was eventually razed in its late phase. Competition between Longshan centers often ended in destruction.`}</p>

          <h3>Erlitou and the Xia Question, c. 2070-1500 BCE</h3>
          <p>{`Erlitou in the Yiluo River basin may be the capital of the Xia Dynasty, the legendary first Chinese dynasty. The identification is debated because no inscription at Erlitou names itself as Xia. By 1850 BCE, Erlitou covered 400 hectares. Its walled palace precinct covered 10.8 hectares. Elite burials held bronze, jade, ceramic, cowrie shells, and lacquerware. The most iconic artifact is a dragon made from turquoise mosaic and jade tablets: the earliest known Chinese dragon image.`}</p>

          <h3>The Shang Dynasty at Zhengzhou</h3>
          <p>{`Zhengzhou became an early Shang capital at the meeting point of two rivers. Its stamped-earth wall was 36 meters wide and nearly 10 meters high, enclosing 300 hectares. Inside the wall, a palace precinct sat on stamped-earth foundations packed with dog and human skull sacrifices. Burying humans and animals in the foundations turned the palace into a sanctified space. The sacrificed bodies became permanent spiritual guardians, and the king's political authority and his ritual authority literally shared a floor.`}</p>

          <h3>Anyang: The Late Shang Capital, c. 1250-1050 BCE</h3>
          <p>{`Anyang (ancient Yinxu) became the late Shang capital around 1250 BCE. Its royal cemetery at Xibeigang held 12 massive tombs containing mass human sacrifice. The tomb of Fu Hao is the only intact Shang royal tomb yet found. It contained 468 bronze vessels, 755 jade objects, 7,000 cowrie shells, and 1,600 kilograms of bronze in total. Fu Hao was a military general as well as a royal consort of king Wuding. Shang elite women could hold positions of military and ritual power, and the Shang elite consumed extraordinary concentrations of bronze, jade, and rare goods as markers of status.`}</p>
          <p>{`The palace at Xiaotun held the oracle bone archive: over 100,000 inscribed animal bones and turtle carapaces. The king's questions covered weather, harvests, military campaigns, and royal pregnancies. Oracle bones were the king's direct channel to the royal ancestors and to the supreme deity Di. Shang kingship was inseparable from ritual authority. The king's legitimacy depended on his ability to consult the spirit world on behalf of his people.`}</p>

          <h3>The Origins of Chinese Writing</h3>
          <p>{`The earliest symbolic marks in China may be on turtle carapaces from the Neolithic site of Jiahu (c. 6500 BCE). By the Longshan period, inscribed bones dated 2500-1900 BCE appear. The Shang oracle bone script from Anyang is the earliest fully readable Chinese writing. From there, Chinese writing evolved through Western Zhou bronze vessel inscriptions to small seal script, standard script, and cursive forms. The chain is unbroken.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="Shang Oracle Bone">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Shang_dynasty_inscribed_scapula.jpg"
                alt="Flat animal shoulder bone covered in columns of incised early Chinese characters"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'A Shang oracle bone from Anyang, about 1250 BCE. Its script is the earliest readable Chinese writing. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Shang_dynasty_inscribed_scapula.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 3.0.'}
              </figcaption>
            </VizFigure>
          </figure>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Stage 1, Oracle bone script (c. 1250 BCE): Pictographic and logographic signs inscribed on bone and shell for royal divination.`}</p>
              <p>{`Stage 2, Bronze vessel inscriptions (Western Zhou, 1045-771 BCE): Signs cast into bronze vessels to record royal gifts and historical events. More formal and standardized.`}</p>
              <p>{`Stage 3, Small seal script (Qin, 221 BCE): Qin Shi Huangdi standardized script across the empire. One official form of each character.`}</p>
              <p>{`Stage 4, Standard script (Han and after): The script form used in most Chinese printing to this day. Modern Chinese characters are direct descendants of this chain.`}</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Stage 1, Oracle bone script was used for _______. Stage 2, Bronze inscriptions recorded _______. Stage 3, The Qin standardized script because _______. What is the key reason this unbroken chain makes Shang oracle bones decipherable today?`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Apply this chain to explain why Shang oracle bones can be read today while the Indus script cannot. Use the concept of "linguistic anchor" in your answer.`}</p>
            </div>
          </div>
          <h3>Sanxingdui: A Parallel Bronze Age Civilization in Sichuan</h3>
          <p>{`The walled city of Sanxingdui in Sichuan covered 450 hectares. In 1986, two ritual pits discovered by chance held 735 bronze objects, 61 gold objects, 486 jade items, and 60 elephant tusks. The most striking: bronze masks with eyes on stalks reaching 1.4 meters wide, and a 2.61-meter bronze standing figure weighing 180 kilograms. Sanxingdui was contemporary with the late Shang but completely different in artistic tradition, with no oracle bones, no writing, and no Shang-style ritual vessels. Bronze Age China was not a single cultural zone. It was a mosaic of complex societies in contact with each other.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="Sanxingdui Bronze Mask">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/61/Ancient_Bronze_Mask_from_Sanxingdui_with_Protruding_Eyes_%26_Ears_a.jpg"
                alt="Broad bronze mask with cylindrical eyes projecting outward and large flared ears"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'A bronze mask from Sanxingdui in Sichuan, with eyes on stalks. Its art tradition owes nothing to the Shang. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Ancient_Bronze_Mask_from_Sanxingdui_with_Protruding_Eyes_%26_Ears_a.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · Public domain (CC0).'}
              </figcaption>
            </VizFigure>
          </figure>

          <h3>Western Zhou, 1045-771 BCE</h3>
          <p>{`The Zhou defeated the Shang at the Battle of Muye in 1045 BCE. Western Zhou bronze production went through a "ritual bronze revolution." Elaborate vessels were now mass-produced as identical sets, then distributed to lords across the territory. The king controlled who received which sets and in what quantities. Standardized ritual practice became a tool of political hierarchy.`}</p>
          <p>{`The Mandate of Heaven (Tianming) became the central Zhou political concept: the king ruled because Heaven endorsed him. Misrule meant Heaven withdrew the mandate and granted it to a new dynasty.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The Mandate of Heaven was retrospective, not predictive. No one announced before a dynasty fell that Heaven had withdrawn its mandate. The fall came first. Then the new ruler declared that the collapse itself proved Heaven had withdrawn approval from the old dynasty and granted it to the new one. The Zhou used this logic to justify overthrowing the Shang. Every dynasty that followed used the same framework to legitimize its own seizure of power. Success became proof of moral right. The mandate gave rulers a moral story to tell, not just a military record. Every Chinese dynasty from the Han through the Qing used it.`}</p>
          </div>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Modern legacy</span>
            <p>{`The Shang oracle bone script is the direct ancestor of modern Chinese characters. The line from oracle bones (c. 1250 BCE) through bronze inscriptions, seal script, and standard script runs unbroken to the characters used by over a billion people today. Chinese is the world's oldest continuously written language.`}</p>
          </div>

          <h3>Eastern Zhou, 770-221 BCE</h3>
          <p>{`The Zhou capital fell to nomad pressure in 771 BCE. The Eastern Zhou divided into the Spring and Autumn period (770-481 BCE) and the Warring States period (481-221 BCE). Iron technology spread. Coin currency appeared. Confucius (551-479 BCE), born in the state of Lu, collected his sayings in the Analects. He taught the concepts of ru (civility and virtue) and the junzi (the morally powerful person). His core claim: a ruler who embodied virtue and performed correct ritual relationships would naturally attract followers. For rulers exhausted by constant warfare, this offered an alternative to rule by force alone. Confucianism became the dominant ideology of later Chinese imperial governance.`}</p>

          <h3>The Qin Dynasty, 221-207 BCE</h3>
          <p>{`Qin Shi Huangdi ("First Emperor") unified China in 221 BCE through a Legalist system. Legalism is a philosophy that treats people as responsive to reward and punishment, not to moral virtue. He replaced feudal states with 36 commanderies, standardized the script, weights and measures, and currency, and built the Great Wall with 300,000 workers. His tomb at Lintong is guarded by a terracotta army of life-sized infantry, cavalry, and chariots.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Terracotta Army, Pit 1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/49/Terracotta_Army%2C_View_of_Pit_1.jpg"
                alt="Long earthen trenches filled with rows of life-sized terracotta soldiers standing in formation"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  "Pit 1 of the terracotta army guarding Qin Shi Huangdi's tomb at Lintong. Thousands of life-sized figures stand in rank. "
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Terracotta_Army,_View_of_Pit_1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY 3.0.'}
              </figcaption>
            </VizFigure>
          </figure>
          <p>{`Qin Shi Huangdi died in 210 BCE. His dynasty collapsed in 207 BCE, 14 years after unification. Legalism was efficient but had no way to manage grievances or build loyalty. When the emperor died, only fear was holding the empire together, and fear alone could not hold it.`}</p>

          <h3>The Han Dynasty, 206 BCE-220 CE</h3>
          <p>{`The Han capital Chang'an was four times the size of imperial Rome, with 12 gateways and the vast Shanglin Park. By the end of the Western Han, 120,285 officials ran the empire through a Confucian civilian bureaucracy. The Han introduced a seed drill (85 BCE) and a pit-field system that raised crop yields. Canal irrigation extended food production. Without that surplus, the Confucian bureaucracy had nothing to distribute and the empire's size became a liability. Emperor Wudi (140-87 BCE) expanded to the Jade Gate (Dunhuang), Vietnam, and Korea, opening the Silk Road as a sustained trade route.`}</p>

          <h3>Mawangdui: Han Aristocratic Life Preserved</h3>
          <p>{`The Mawangdui site at Changsha in Hunan Province holds three tombs from the family of Li Cang, Marquis of Dai (died 168 BCE). His wife Xin Zhui (Lady Dai) was preserved almost perfectly after 2,000 years. Her coffin sat inside four nested lacquered wooden cases sealed in charcoal and white clay. The tomb held 312 bamboo slips listing foods for her afterlife banquets, 162 wooden servant figures, a silk tomb banner showing cosmological scenes, and a complete silk wardrobe.`}</p>
          <p>{`At Mancheng, Prince Liu Sheng was buried in a jade suit made of 2,690 jade wafers stitched together with gold wire.`}</p>
        </>,

        <>
          <h2>10. Korea, Japan, and the Silk Roads</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A state builds its capital on a grid modeled exactly on a foreign capital and adopts a foreign writing system. Does this represent cultural domination or a strategic choice?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`This describes Japan's Nara capital (694 CE), built on the grid of Tang China's Chang'an. It was a strategic choice. Japan's rulers adopted Chinese-style administration (Taika Reforms 646 CE, Taiho Code 702 CE, Nara grid capital) because it gave them better tools for governing a growing state. They rejected the Chinese examination system, which would have opened government positions to commoners and threatened the existing aristocracy. They kept kami worship and divine imperial legitimacy instead of the Mandate of Heaven. Selective adoption is a strategic tool: borrow what strengthens your power, reject what threatens it.`}</p>
            </details>
          </div>

          <h3>Korea: Three Kingdoms</h3>
          <p>{`Han Chinese armies occupied northern Korea in 108 BCE and created the Lelang province. A foreign occupation puts political pressure on neighboring indigenous groups: they must either submit or build their own state structures to resist. When the occupier withdraws, those new structures fill the vacuum. The Korean Three Kingdoms (Koguryo, Paekche, Silla) grew out of exactly this pressure, the textbook case of secondary state formation.`}</p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Step 1, Han China occupies northern Korea (108 BCE) and creates Lelang province. Three kingdoms arise in response to Han pressure.`}</p>
              <p>{`Step 2, Silla (37 BCE-668 CE) allied with the Tang Dynasty of China to defeat Koguryo and Paekche.`}</p>
              <p>{`Step 3, Great Silla (668 CE) unified Korea. This ends the Three Kingdoms period.`}</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Korean unification sequence: Han occupation (108 BCE) created Lelang province. Three Kingdoms (Koguryo, Paekche, Silla) arose from that pressure. Silla allied with _______ to defeat the others. _______ (Great Silla) unified Korea in 668 CE.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Why is Korean unification a clear example of secondary state formation? Apply the definition and show how each step in the sequence above matches it.`}</p>
            </div>
          </div>
          <p>{`Koguryo (37 BCE-668 CE) buried its rulers in tombs decorated with painted hunting scenes and gold inlay. Its capital moved from Jian to Pyongyang in 427 CE. Koguryo founded a university in 372 CE and was the first Korean kingdom to adopt Buddhism. Paekche (18 BCE-680 CE) was literate in Chinese by the 4th century CE, adopted Buddhism in 384 CE, and carried both Chinese writing and Buddhism to Japan. The intact tomb of King Muryong (523 CE) yielded gold crowns and elaborate grave goods. Silla (37 BCE-668 CE) drew on iron ore deposits and raised 155 burial mounds at Kyongju. Royal tombs held Silla gold crowns with tree and antler projections, jade ornaments, and worked gold.`}</p>

          <h3>Great Silla, Yamato Japan, and the Nara State</h3>
          <p>{`Silla allied with the Tang Dynasty of China to defeat Koguryo and Paekche. The result was Great Silla (668-918 CE), which unified Korea and built its capital Kumsong on the Chinese Chang'an grid.`}</p>
          <p>{`Japan's Yamato kingdom emerged from the Late Yayoi period in the 3rd century CE. Yamato rulers built keyhole-shaped kofun (burial mounds). The largest, the Nintoku tomb, runs 486 meters long. Terracotta haniwa figures ringed the tombs.`}</p>
          <p>{`The Asuka Enlightenment followed China's reunification under the Sui Dynasty in 589 CE. Buddhism spread. The Asuka-dera temple was built in 596 CE. The Taika Reforms of 646 CE introduced a census, a land tax, and a 12-rank merit system. Japan's defeats in Korea in 663 CE forced a defensive reorientation. Heijo-kyo (Nara), founded in 694 CE on a Chang'an grid plan, became the new capital. The Taiho Code of 702 CE systematized Japanese law on Chinese models.`}</p>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Modern legacy</span>
            <p>{`The grid layout of Nara (founded 694 CE on a Chang'an plan) directly influenced Japanese urban design. The grid pattern of Kyoto (founded 794 CE) still shapes that city today. When you look at a map of Kyoto, you are looking at a Tang Chinese city plan adapted in Japan 1,300 years ago.`}</p>
          </div>

          <h3>The Silk Roads: Land and Maritime</h3>
          <p>{`Two trade corridors connected East Asia to the Mediterranean. The land Silk Road ran from China through the Tarim Basin, across the Syr Darya and Amu Darya rivers, and westward to the Mediterranean. Khotan in the Tarim Basin supplied jade, hosted Buddhist texts in Brahmi script, and used Indian kingship titles alongside Chinese administration. The maritime Silk Road ran from the south China coast through Vietnam and Burma to India and onward to Africa and the Mediterranean.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Land Silk Road</span>
              <p>{`Overland through Central Asia and the Tarim Basin. Pre-eminent during the Han Dynasty (206 BCE-220 CE), when Han armies cleared and protected the route. Central Asian middlemen. After the Han collapse, instability made this route less reliable.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Maritime Silk Road</span>
              <p>{`Sea route from south China through Vietnam and Burma to India and beyond. Gained importance after the Han collapse. More direct contact between trading partners. Became the dominant route for Buddhist transmission and long-distance trade from the 3rd century CE onward.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>11. Southeast Asia: From Bronze Age Villages to Angkor</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`An archaeologist finds Hindu temples, Sanskrit inscriptions, and Indian luxury goods at a site in Southeast Asia. What should the archaeologist ask before concluding that India colonized this region?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Three questions: Were the Indian goods imported, or manufactured locally? Were the indigenous communities already complex before Indian contact? Is there any evidence that Indian populations replaced or controlled local ones? At Khao Sam Kaeo (c. 3rd-2nd century BCE), hard stone beads were made on site by craftspeople of Indian origin, not imported. At Non Ban Jak (NE Thailand), lavish Iron Age burials with gold and silver predate significant Indian contact. The consistent finding: local rulers adopted Indian cultural prestige for their own political purposes. India did not colonize Southeast Asia.`}</p>
            </details>
          </div>

          <h3>Southeast Asian Bronze Age Foundations</h3>
          <p>{`Southeast Asia developed complex Iron Age societies before any significant Indian contact. Non Ban Jak in northeast Thailand shows an Iron Age moated settlement with lavish burials holding gold, silver, carnelian, and agate. Moated settlements with water control systems were in place before Indian influence arrived.`}</p>
          <p>{`Khao Sam Kaeo in peninsular Thailand (c. 3rd-2nd century BCE, 54 hectares) was an international exchange hub. It connected Dong Son bronzes from Vietnam, Han pottery from China, and craftspeople of Indian origin. Indian names appear on seals there, but the hard stone beads were manufactured locally by Indian-origin craftspeople, not imported. The trade was in skilled people and prestige knowledge, not finished goods. Indianization was a veneer of Indian cultural forms adopted by already-complex indigenous societies. Agency was local, not Indian.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Indian Cultural Veneer</span>
              <p>{`Hindu temples, Sanskrit inscriptions, and Indian luxury goods represent indigenous rulers adopting Indian prestige for local political ends. Khao Sam Kaeo: local manufacture by Indian-origin craftspeople, not imported goods.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Pre-existing Indigenous Complexity</span>
              <p>{`Non Ban Jak (NE Thailand): lavish Iron Age burials with gold, silver, carnelian, and agate predating significant Indian contact. Indianization built on existing hierarchies. It did not create them.`}</p>
            </div>
          </div>

          <h3>Funan and the Mekong Delta</h3>
          <p>{`Funan (flourishing through the mid-6th century CE) developed in the Mekong Delta. Its cities were walled and linked by canals. The principal sites are Oc Eo in Vietnam and Angkor Borei in Cambodia. Funan used Sanskrit names, Indian Brahmi script, and Hindu and Buddhist worship. Political power shifted inland to the Chenla polity by the mid-6th century CE.`}</p>

          <h3>The Pyu of Burma</h3>
          <p>{`The Pyu (c. 200 BCE-900 CE) built three walled cities: Beikthano, Sri Ksetra, and Halin. They adopted Buddhism in the 4th to 5th century CE and cremated their dead in mortuary jars. Their coins bear throne and srivatsa (auspicious symbol) designs. The Pagan state succeeded the Pyu in the 9th century CE.`}</p>

          <h3>Dvaravati and the Cham</h3>
          <p>{`Dvaravati (c. 400-900 CE) occupied the Chao Phraya valley with Mon-speaking communities. U-Thong covered 142 hectares; Nakhon Pathom covered 740 hectares. Dvaravati built Buddhist stupas and caitya shrines (prayer halls that house a stupa). The Cham of Vietnam occupied the coastal strip and traded along the maritime Silk Road. They built the Mi Son and Po Nagar Hindu temple complexes.`}</p>

          <h3>Angkor: The Greatest Southeast Asian Civilization, 800-1435 CE</h3>
          <p>{`Angkor takes its modern name from the Sanskrit Nagara, "Holy City." Jayavarman II founded the state at the end of the 8th century CE. Yashovarman I moved the capital to Bakheng hill and built the Eastern Baray reservoir (7.5 by 1.8 kilometers). Water management was the spine of Angkor's power: baray reservoirs stored monsoon water for year-round rice irrigation. Rice surplus fed the labor force that built the temples. Controlling water meant controlling everything else.`}</p>
          <p>{`Suryavarman II (1113-1150 CE) built Angkor Wat, the largest religious monument in the world. Its five towers represent Mount Meru, the cosmic mountain of Hindu cosmology. Its bas-reliefs are the finest in Southeast Asia.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Angkor Wat">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Angkor_Wat.jpg"
                alt="Five lotus-bud stone towers of a temple reflected in the surrounding moat at sunrise"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'Angkor Wat, built by Suryavarman II. Its five towers stand for Mount Meru, the cosmic mountain. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Angkor_Wat.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 4.0.'}
              </figcaption>
            </VizFigure>
          </figure>
          <p>{`Jayavarman VII (1181-1219 CE), the most powerful Angkor king, converted to Buddhism and built Angkor Thom, a walled city with the Bayon temple at its center. The Bayon's giant stone faces show the king as a bodhisattva (a Buddhist figure who delays his own enlightenment to help others). LiDAR surveys of the Angkor region have revealed a vast grid of roads, canals, and rice fields stretching far beyond the city walls.`}</p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="Bayon Faces, Angkor Thom">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/20171127_Bayon_Temple_Angkor_Thom_4754_DxO.jpg"
                alt="Stone towers each carved with several giant calm human faces looking in different directions"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The giant stone faces of the Bayon at Angkor Thom, built by Jayavarman VII. They show the king as a bodhisattva. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:20171127_Bayon_Temple_Angkor_Thom_4754_DxO.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 4.0.'}
              </figcaption>
            </VizFigure>
          </figure>
          <p>{`Angkor was abandoned around 1431-1432 CE under combined pressures.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Three factors combined: Thai military pressure from the west, monsoon failure, and deforestation. They connect through the water system. Deforestation removes the vegetation that holds water in the watershed during the dry season. Without forest cover, monsoon rains run off instead of soaking in. The baray reservoirs receive less reliable inflow and cannot sustain rice paddy output. Less rice means less labor for maintenance and defense. Thai armies exploit the weakness. The system that sustained Angkor (water management feeding rice surplus feeding labor feeding temples) collapsed when its ecological foundation was degraded.`}</p>
          </div>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Modern legacy</span>
            <p>{`Angkor Wat appears on the national flag of Cambodia. It is the only building in the world depicted on a national flag. The temple is now the country's most important tourist site and a UNESCO World Heritage site.`}</p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Angkor Wat (Suryavarman II)</span>
              <p>{`Hindu monument dedicated to Vishnu. Built 1113-1150 CE. Five towers representing Mount Meru, the cosmic mountain. Finest bas-reliefs in Southeast Asia. The king's identity merges with a Hindu god. Largest religious monument in the world.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Angkor Thom and Bayon (Jayavarman VII)</span>
              <p>{`Buddhist monument, late 12th to 13th century CE. The Bayon's giant stone faces show the king as bodhisattva. Different religious program on the same site. A single royal conversion can change the official religion of an entire civilization.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>12. Comparative Synthesis: What These Civilizations Shared and How They Differed</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Two civilizations develop in complete isolation from each other: one in the Indus Valley, one in the Yellow River Valley. Both develop writing, cities, and social hierarchy. What does this tell you about the relationship between social complexity and human nature?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Mesopotamia, the Indus Valley, and China developed writing, cities, and hierarchy independently. These are not inventions borrowed from one source. They are convergent responses to the same social pressures: surplus, specialization, and the need to administer them. Social complexity is a general human response to certain conditions, not a unique cultural invention. The Indus and Shang are independent experiments that reached similar structural outcomes.`}</p>
            </details>
          </div>

          <h3>Shared Features Across Old World Civilizations</h3>
          <p>{`Every civilization in this module developed cities, writing, social hierarchy, and monumental architecture. The specific forms differed enormously. Mesopotamian cities centered on temple economies. Chinese cities centered on royal palaces and ritual bronze casting. The Indus cities had no visible palaces at all.`}</p>
          <p>{`Writing evolved independently in at least three Old World civilizations:`}</p>
          <ul className="lrn-list">
            <li>{`Mesopotamian cuneiform (for accounting, c. 3500-3000 BCE)`}</li>
            <li>{`Chinese oracle bone script (for royal divination, c. 1250 BCE at Anyang)`}</li>
            <li>{`The Indus script (purpose and decipherment still unknown)`}</li>
          </ul>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Writing emerged for different purposes in different civilizations, and those purposes reveal the political systems that produced them. In Mesopotamia, cuneiform appeared for accounting. A temple economy needed to track rations, livestock, and goods across many workers. The political system was a redistributive temple economy. In Shang China, oracle bone script appeared for royal divination. The king consulted ancestors and the deity Di to justify military and agricultural decisions. The political system was a royal ritual state. In the Indus, the script's purpose is debated but its appearance on seals and trade goods points to commercial or administrative use, and the political system itself is the deeper mystery. Writing's form follows its function, and its function follows its political context.`}</p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Mesopotamian Cuneiform</span>
              <p>{`Invented for accounting, c. 3500-3000 BCE. Evolved into literature, law, and diplomacy. The Epic of Gilgamesh, the Amarna Letters, and Hammurabi's Law Code all use descendants of this accounting tool. Accounting literacy expanded into cultural and legal literacy.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Chinese Oracle Bone Script</span>
              <p>{`Invented for royal divination, c. 1250 BCE. Evolved into bronze inscriptions, small seal script, standard script, and modern Chinese. The world's longest continuous writing tradition. Ritual literacy expanded into the world's most widely used writing system.`}</p>
            </div>
          </div>

          <h3>Primary and Secondary State Formation</h3>
          <p>{`Mesopotamia, the Indus Valley, and China are primary states. They arose from internal dynamics without significant stimulus from an already-existing state. The Phoenicians, the Mauryan Empire, the Korean Three Kingdoms, and Japan's Nara state are secondary states. They arose in reaction to and interaction with existing states.`}</p>

          <h3>Why Some Scripts Were Deciphered and Others Were Not</h3>
          <p>{`Reading a dead script requires at least one of three anchors:`}</p>
          <ul className="lrn-list">
            <li>{`A bilingual inscription linking the unknown script to a known language. The Rosetta Stone linked Egyptian hieroglyphs to Greek.`}</li>
            <li>{`A known living descendant language. Shang oracle bone script evolved continuously into modern Chinese, so scholars can read backward through the chain.`}</li>
            <li>{`Enough connected texts with identifiable proper nouns to crack the system structurally. Michael Ventris used place names to break into Linear B in 1952.`}</li>
          </ul>
          <p>{`The Indus script has none of the three. No bilingual inscription exists. No modern language is a certain descendant. Most inscriptions are fewer than five signs long, too short to work with structurally. Linear A has the same problem: no bilingual key, no known descendant.`}</p>

          <h3>The Scale of Coerced Labor</h3>
          <p>{`Recall the rule from the start: monument size indexes the labor a ruler could command. Set the Old World cases side by side. The Great Wall, the Qin tomb's terracotta army, Angkor's temples, and the mass graves of Ur all measure the same thing in different forms. Each shows how completely one state could command human life. The Indus is the puzzle that breaks the pattern.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Indus Great Bath</span>
              <p>{`Public works at Mohenjo-daro. Large-scale construction (fired brick pool sealed with bitumen) with no visible royal coercion. No king's name attached. No human sacrifice. The exception that defines the Indus paradox.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Qin Great Tomb</span>
              <p>{`Royal personal monument. Terracotta army of thousands, specialized workshops over decades, immense construction force. Built for a single emperor's afterlife. Extreme coercion materialized in one person's tomb.`}</p>
            </div>
          </div>

          <h3>Confucian, Hindu, and Buddhist Strategies for Legitimizing Rulers</h3>
          <p>{`Three different systems of thought gave Asian rulers the right to rule. Confucianism taught that authority was earned through virtue and ritual, and revocable through the Mandate of Heaven if a ruler governed badly. Zhou and Han China ran on this framework. Hinduism in Southeast Asia worked differently: Suryavarman II at Angkor merged with the Hindu god Vishnu to become a living deity (devaraja). Buddhism offered yet another model: Jayavarman VII presented himself as a bodhisattva, the king who delays his own enlightenment to serve his people. In South Asia, Asoka used Buddhist missions and multilingual edicts to project moral authority across his empire. All three systems shared one goal: making a ruler's power look natural and divinely endorsed. Each used a different mechanism.`}</p>

          <h3>Migration as a Constant</h3>
          <p>{`Every region in this module shows migration as a recurring driver of change. Amorites ended Ur III. The Sea Peoples disrupted Bronze Age palaces. The Gandharan Grave Culture brought new populations into South Asia after the Indus collapse. Han expansion carried Chinese populations into Korea and Vietnam. Indian traders and craftspeople moved into Southeast Asia. Greek and Phoenician colonization restructured the Mediterranean coastline. No civilization in this module developed in demographic isolation. Population movement is how ideas, technologies, and political forms spread.`}</p>

          <div className="lrn-insight">
            <p>{`Every civilization in this module faced the same three problems and solved them differently. How do you feed a large population? Surplus agriculture, canal irrigation, rice paddies, and seed drills were the answers. How do you hold power over thousands of people? Royal sacrifice, the Mandate of Heaven, dharma edicts, Hindu devaraja, Buddhist bodhisattva, and written law were the answers. How do you pass knowledge across generations? Cuneiform accounting, oracle bone divination, alphabetic scripts, and Buddhist monasteries were the answers. The civilizations differ in their answers. The questions were the same everywhere.`}</p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'What geographic constraint made long-distance trade a necessity in early Mesopotamia?',
        a: "The Tigris-Euphrates lowlands were among the world's richest farmland, but they lacked stone, metal, and timber. Trade was a survival requirement from the earliest villages. Temple economies grew up around managing the trade networks that brought in the raw materials the region could not produce."
      },
      {
        q: 'Predict: A new site has a large building on raised ground, a grid-plan lower town with brick drains, and a standardized weight set, but no royal tomb and no warrior burial. What civilization does this represent, and what debate does it provoke?',
        a: 'This is the Indus Civilization (c. 2600-1900 BCE). The citadel, grid lower town, brick drains, and standardized weights are diagnostic. The absent royal tombs and warrior burials raise the central Indus debate: what political system produced civilization-scale uniformity without visible coercive power? State, chiefdom, egalitarian federation, or a caste-like system enforcing conformity through social pressure are all candidates.'
      },
      {
        q: "What made Uruk the world's first true city?",
        a: 'Uruk reached a population of 40,000 to 50,000 people by the 4th millennium BCE, a scale without precedent anywhere on Earth. It had specialized districts (the Eanna precinct), monumental temples like the White Temple (c. 3200 BCE), and an administrative apparatus large enough to invent writing. These features together define it as a true urban center, not merely a large village.'
      },
      {
        q: 'What does the Taosi site reveal about Longshan social organization?',
        a: 'Taosi (c. 3000-1900 BCE, 56 hectares) divided its walled space into four quadrants: ritual, palace, craft, and commoner zones. Its royal cemetery held boat-shaped coffins with turquoise and cowrie shell grave goods. The site was eventually razed in its late phase. Together these features show that Longshan society had hereditary leadership, social stratification, and inter-polity competition intense enough to end in the destruction of the largest center.'
      },
      {
        q: 'What distinguished Minoan palace centers from Mycenaean palace centers?',
        a: 'Minoan palaces (Knossos, Phaistos, Mallia, Kato Zakros) had no defensive walls and appear to have exercised power through religious prestige, trade networks, and cultural influence: a thalassocracy (rule of the sea). Mycenaean palaces (Mycenae, Tiryns, Pylos) were fortified with cyclopean masonry, had megaron throne-rooms, and administered coerced agricultural labor through Linear B records. The Minoan model relied on soft power; the Mycenaean model relied on military force and bureaucratic control.'
      },
      {
        q: "What did Asoka's edicts accomplish, and in what languages were they written?",
        a: "Asoka (reigned 272-235 BCE) issued edicts in five scripts and languages: Greek, Aramaic, Kharoshthi, Brahmi, and Prakrits. The edicts promoted non-violence, religious pluralism, dharma (righteous conduct), and Buddhist missions. By distributing edicts in multiple languages, Asoka acknowledged his empire's linguistic diversity while projecting a single moral framework. His lion pillar capital at Sarnath became the national emblem of modern India."
      },
      {
        q: 'What does the sequence of 19 superimposed temples at Eridu tell us about Ubaid society?',
        a: 'The 19 superimposed temples at Eridu (c. 5900-4200 BCE) show that the same community rebuilt its temple on the same spot over many generations. This demonstrates continuity of religious authority and community organization. A centrally controlled institution was directing collective labor to maintain and rebuild the sacred site across centuries.'
      },
      {
        q: 'What topics did the Shang oracle bones address, and what does this reveal about Shang kingship?',
        a: "The 100,000+ oracle bones from Anyang addressed weather forecasts, harvest predictions, military campaigns, and royal pregnancies. The king used them to communicate with the royal ancestors and the supreme deity Di. This shows that Shang kingship was inseparable from ritual authority: the king's legitimacy depended on his ability to consult the spiritual realm on behalf of his people. Political and religious power were fused in one person."
      },
      {
        q: 'What is the significance of Mehrgarh for understanding the origins of the Indus Civilization?',
        a: 'Mehrgarh near the Bolan Pass in western Pakistan (c. 6500-2800 BCE) is the earliest undisputed farming site in South Asia, with aceramic mud-brick storage structures, cultivated barley and wheat, and domesticated zebu cattle. Its discovery in the 1970s overturned an older claim that Indus civilization was imported from Mesopotamia. Mehrgarh shows that South Asian civilization had deep local roots stretching back to 6500 BCE.'
      },
      {
        q: 'What was Angkor, and what was the key to its sustained power?',
        a: "Angkor ('Holy City,' from Sanskrit Nagara) was founded by Jayavarman II at the end of the 8th century CE and grew into the greatest Southeast Asian civilization (800-1435 CE). The key to its power was water management: massive reservoirs (baray) stored monsoon water for year-round rice cultivation. This agricultural surplus fed the labor force that built temples like Angkor Wat and Angkor Thom, and sustained the political hierarchy that controlled temple construction."
      },
      {
        q: 'Why can Shang oracle bones be read today, while the Indus script cannot?',
        a: 'Shang oracle bone script (c. 1250 BCE) evolved continuously into the small seal script, standard script, and eventually modern Chinese characters. This unbroken chain gives scholars direct access to meaning. The Indus script has no such modern descendant and no bilingual inscription, so there is no linguistic anchor to attach its signs to known sounds or meanings.'
      },
      {
        q: 'What was the Ugaritic script, and why does it matter for all Western languages?',
        a: 'Ugarit on the Syrian coast produced the earliest known alphabetic script before 1200 BCE. It used 30 consonantal signs. Phonetic alphabets are far easier to learn than syllabic or logographic systems, allowing literacy to spread beyond palace scribes. The Phoenician adaptation of this Ugaritic model passed to the Greeks and then to Rome, making Ugarit the ancestor of every Western alphabet.'
      },
      {
        q: "What are the three main structures on Mohenjo-daro's citadel mound, and what do they suggest about Indus society?",
        a: 'The citadel mound at Mohenjo-daro held the Great Bath (12 by 7 m, fired-brick pool sealed with bitumen), a Granary (50 by 27 m), and a Pillared Hall. The Great Bath suggests ritual purification was centrally important. The Granary suggests centralized surplus storage. The Pillared Hall suggests administrative assembly. Together they point to a leadership that managed religion, food surplus, and administration without leaving any evidence of royal tombs or military power.'
      },
      {
        q: 'How did the three Korean kingdoms develop, and what Chinese influence did each show?',
        a: 'Koguryo (37 BCE-668 CE), Paekche (18 BCE-680 CE), and Silla (37 BCE-668 CE) all emerged partly in reaction to Han Chinese occupation of northern Korea (108 BCE). Koguryo adopted Buddhism first and built wall fresco tombs. Paekche became literate in Chinese earliest and brought Chinese culture to Japan. Silla built gold crown burial mounds and eventually allied with Tang China to defeat the others, creating Great Silla (668 CE). All three show Chinese institutional influence combined with distinct Korean material cultures.'
      },
      {
        q: 'What was the Hittite capital Hattusa, and what makes its archive significant?',
        a: 'The Hittite capital Hattusa (modern Bogazkoy) covered about 600 hectares and held an archive of 30,000 or more cuneiform tablets in Hittite, Akkadian, Luwian, and other languages. This multi-language archive shows that the Hittites were a central diplomatic and military player in the Late Bronze Age world system. The tablets include treaties, royal correspondence, and the Amarna-era diplomatic network.'
      },
      {
        q: "What was Qin Shi Huangdi's Legalist system, and why did it collapse so quickly?",
        a: 'Qin Shi Huangdi (221-210 BCE) applied Legalism: a philosophy that people respond to reward and punishment, not moral virtue. He created 36 commanderies, standardized script, weights, measures, and currency, and built the Great Wall with 300,000 workers. The system was efficient but brutal and inflexible. After his death in 210 BCE, the dynasty collapsed in 207 BCE because Legalism had no mechanism for managing grievances or building loyalty. Han Confucianism, which replaced it, lasted four centuries.'
      },
      {
        q: 'How was Linear B deciphered, and what did it reveal?',
        a: "Linear B was deciphered in 1952 by Michael Ventris (an architect). Alice Kober's prior contribution prepared the groundwork. Ventris identified it as an early form of Greek. The tablets record mundane palace administration: textiles, rations, land grants, and livestock. They also name Athena, Poseidon, and Zeus as Mycenaean deities. The decipherment revealed that the Bronze Age Aegean was already Greek-speaking centuries before Homer."
      },
      {
        q: "What did the Khao Sam Kaeo site in Thailand show about the origins of Southeast Asian 'Indianized' states?",
        a: "Khao Sam Kaeo (54 hectares, c. 3rd-2nd century BCE) in peninsular Thailand was an international exchange hub connecting Dong Son bronzes from Vietnam, Han pottery from China, and craftspeople of Indian origin. Indian names appeared on seals, but hard stone beads were manufactured locally by Indian craftspeople, not imported. This shows that 'Indianization' was not Indian colonization but a veneer of Indian cultural prestige adopted by already-complex indigenous societies for their own political purposes."
      },
      {
        q: 'What did the Royal Cemetery of Ur (c. 2500 BCE) reveal about Sumerian kingship?',
        a: "The Royal Cemetery of Ur contained 16 royal graves, some with up to 74 human sacrifices. Attendants, musicians, and soldiers followed rulers into death. Artifacts like the 'Ram in a Thicket' and the Standard of Ur were made of gold, lapis lazuli, and shell from distant sources. This shows Sumerian kings claimed divine or semi-divine status and could command mass human sacrifice."
      },
      {
        q: 'What was the Mandate of Heaven, and how did it justify dynastic change?',
        a: 'The Mandate of Heaven (Tianming) was the Western Zhou concept that the king ruled because Heaven endorsed him. If a ruler governed badly, Heaven would withdraw the mandate and transfer it to a new dynasty. This concept made dynastic change legitimate in retrospect: the Shang had held the mandate until they lost virtue, then the Zhou received it. Later dynasties used the same logic to justify their own seizures of power.'
      },
      {
        q: 'What does the cargo of the Uluburun shipwreck reveal about the Bronze Age world?',
        a: 'The Uluburun shipwreck (14th century BCE, off Turkey) carried 350 copper ingots (9 tonnes), 1 tonne of tin, glass, ebony, ivory, and a gold scarab naming the Egyptian queen Nefertiti. This single ship combined resources from Cyprus, Mesopotamia, Egypt, the Levant, and Anatolia. It is direct physical evidence that all major eastern Mediterranean civilizations functioned as parts of one interconnected economic system.'
      },
      {
        q: "What was the debate about the origins of South Asia's second urbanization, and how was it resolved?",
        a: "An older theory proposed that Achaemenid Persian contact (520 BCE) triggered South Asia's second urbanization. New excavations at Charsadda (1996) found occupation extending back to the middle 2nd millennium BCE, centuries before Persian contact. This resolved the debate in favor of internal dynamics: the second urbanization grew from local development of the mahajanapada system, iron technology, and expanded agriculture, not from foreign stimulus."
      },
      {
        q: 'How did Sanxingdui reveal that Bronze Age China was not a single cultural zone?',
        a: 'Sanxingdui (450 hectares, Sichuan) was contemporary with the late Shang period but produced bronze masks with eyes on stalks, a 2.61-meter standing figure, and a completely different religious iconography. There were no oracle bones, no writing, and no Shang-style vessels. This shows that at the same time Shang culture dominated the Yellow River valley, an entirely different and equally complex bronze-using civilization existed in Sichuan with no shared cultural vocabulary.'
      },
      {
        q: 'Predict: A farming community produces far more grain than its members need. Describe the chain of social changes that follows, ending with the invention of writing.',
        a: 'This is the surplus-to-civilization chain. Surplus grain lets some people stop farming. Potters, metalworkers, and priests emerge as specialists. Their goods must be managed and traded. Hierarchy forms around those who control redistribution. Administration becomes necessary to track who owes what to whom. Writing appears as the external memory system for that administration. Writing was not invented for literature. It was invented to manage the complexity that surplus produces.'
      },
      {
        q: 'What were the Amarna Letters, and what system do they document?',
        a: 'The Amarna Letters are 14th-century BCE diplomatic correspondence found at the Egyptian city of Akhetaten (Amarna). They were written in Akkadian, the international language of the day, by rulers of Egypt, Babylonia, Assyria, the Hittites, and Mittani. They document a world system of gift exchange, diplomatic marriages, and military alliances connecting all the major Near Eastern powers. Akkadian served as the diplomatic lingua franca across this entire zone.'
      },
      {
        q: "How did Japan's Nara state demonstrate both adoption of and resistance to Chinese models?",
        a: "Japan built its Nara capital (694 CE) on a grid plan modeled on Tang China's Chang'an. The Taiho Code (702 CE) systematized Japanese law on Chinese models. The Taika Reforms (646 CE) introduced a census and land tax following Tang institutions. Yet Japan maintained its kami worship alongside Buddhism, kept its imperial family's divine legitimacy (rather than the Chinese Mandate of Heaven), and did not adopt the Chinese examination system for officials. Adoption was always selective."
      },
      {
        q: "What does the Gandharan Grave Culture suggest about South Asia after the Indus Civilization's collapse?",
        a: "The Gandharan Grave Culture (c. 1700-1600 BCE) in the Chitral, Dir, and Swat valleys shows bell-shaped burial pits and horse burials, different from Indus burial practices. This suggests that new populations, possibly early Indo-Aryan speakers, were moving into the region during and after the Indus collapse. An older 'invasion massacre' interpretation was abandoned: the skeletal evidence at Mohenjo-daro was reinterpreted as a peaceful mass burial with grave goods."
      },
      {
        q: 'Why did the Linear B tablets at Pylos survive when other palace records did not?',
        a: 'Linear B tablets at Pylos (Palace of Nestor) survived because the fire that destroyed the palace in the late 13th century BCE baked the raw clay tablets hard, accidentally preserving them. Under normal conditions, clay tablets were recycled once their information was no longer needed. This means palace archives typically preserve only the bureaucratic snapshot of a single year, not long-term records.'
      },
      {
        q: 'How did Suryavarman II and Jayavarman VII express different religious identities at Angkor?',
        a: "Suryavarman II (1113-50 CE) built Angkor Wat as a Hindu monument to Vishnu, with five towers representing Mount Meru and the finest bas-reliefs in Southeast Asia. Jayavarman VII (1181-1219 CE) built Angkor Thom and the Bayon temple as Buddhist monuments; the Bayon's giant stone faces represent the king as a bodhisattva. Their buildings share the same site but express completely different religious programs, showing how individual royal conversions could transform the official religion of an entire civilization."
      },
      {
        q: "What is the 'Xia question,' and why does it remain unresolved?",
        a: "The Xia Dynasty is recorded in Chinese historical tradition as China's first dynasty before the Shang. Erlitou (c. 2070-1500 BCE), which shows state-level organization with a 400-hectare site and a walled palace precinct, is the strongest archaeological candidate for a Xia capital. The question remains unresolved because no inscription at Erlitou identifies itself as Xia, and scholars debate whether Erlitou is late Xia or early Shang."
      },
      {
        q: "Why was the identification of Arikamedu as a 'Roman market' overturned?",
        a: "An older theory identified Arikamedu on India's southeast coast as a 'Roman market' because of pottery thought to be Roman Arretine ware. Later analysis showed the Rouletted Ware pottery was locally made, not Roman. Evidence from Anuradhapura also showed that Indian Ocean trade networks pre-dated Roman contact. The conclusion is that South Asian maritime trade was local in origin, not created by Roman demand."
      },
      {
        q: "What was the 'ritual bronze revolution' of the Western Zhou period?",
        a: 'The Western Zhou (1045-771 BCE) transformed bronze production after defeating the Shang. Instead of unique individually crafted vessels for elite burials, the Zhou produced identical mass-produced vessel sets. These standardized sets were distributed to lords across the Zhou territory, making ritual practice uniform. By controlling who received these sets and in what quantities, the Zhou king expressed and enforced political hierarchy through ritual objects rather than just through military force.'
      },
      {
        q: 'Predict: Two city-states in early Mesopotamia both want control of the same river irrigation canal. What forms of political power are available to each city, and what outcomes are possible?',
        a: "This describes the competitive dynamics of Sumerian city-states (c. 3000-2000 BCE). Each city had a temple economy that owned land and a lugal (the secular king, who often led the city in war). Possible forms of power include military attack, diplomatic marriage, religious claim (declaring the canal sacred to their city's deity), or economic pressure through controlling trade access. Possible outcomes include conquest, treaty, shared administration, or destruction. The Royal Cemetery of Ur shows that kings who controlled these resources could command mass human sacrifice, suggesting that the stakes of losing were very high."
      },
      {
        q: 'How did Phoenician and Greek colonization patterns differ?',
        a: 'Phoenician colonization (from Tyre and Sidon) was primarily economically motivated: colonies were placed at coastal harbors near metal-rich regions, and Carthage became the most powerful Phoenician colony. Greek colonization had mixed motives including land shortage, civic tensions, and access to metal ores, and colonies built monumental temples as territorial markers. Both operated simultaneously in the western Mediterranean and both interacted with indigenous populations.'
      },
      {
        q: 'How did the land Silk Road and maritime Silk Road differ in their periods of greatest importance?',
        a: 'The land Silk Road through the Tarim Basin and Central Asia was the dominant route during the Han Dynasty (206 BCE-220 CE), when Han armies cleared and protected the route. After the Han collapse, Central Asian instability made the land route less reliable. The maritime Silk Road, running from south China through Vietnam and Burma to India and beyond, gained importance after the Han, becoming the dominant route for Buddhist transmission and long-distance trade from the 3rd century CE onward.'
      },
      {
        q: 'Why was Angkor abandoned in the mid-15th century CE?',
        a: "Angkor was abandoned around 1431-1432 CE under a combination of pressures: Thai (Ayutthaya) military pressure from the west, and internal problems including monsoon failure and deforestation that degraded the water management system central to rice production. LiDAR surveys have revealed the full extent of Angkor's landscape management. When that system broke down, the entire agricultural and political foundation of the civilization collapsed."
      },
      {
        q: "Which layer of Troy is the best candidate for Homer's Troy, and why?",
        a: "Troy VI, destroyed around 1250 BCE, is the best candidate for Homer's Troy. It had a fortified citadel and Mycenaean pottery in its destruction layers, matching the period when Mycenaean Greece was active in the Aegean. Schliemann originally identified Troy II (c. 2500 BCE), but that layer predates Mycenaean Greece by over a thousand years, making a Trojan War at that level impossible."
      },
      {
        q: 'What is the difference between primary and secondary state formation? Give one example of each.',
        a: 'Primary state formation occurs when a society develops a state from internal dynamics, without significant stimulus from an existing state. Mesopotamia, the Indus Valley, and China are the clearest primary examples. Secondary state formation occurs when a society develops statehood largely in response to, or in contact with, an already-existing state. The Korean Three Kingdoms are a clear secondary example: they emerged directly in response to Han Chinese military pressure and occupation.'
      },
      {
        q: 'How did the transmission of the Phoenician alphabet to the Greeks transform Mediterranean literacy?',
        a: 'The Phoenician alphabet had 22 consonants and no vowels. Greeks adapted it by repurposing consonant signs for vowel sounds, creating the first fully phonemic alphabet. A system with roughly 24 signs is far easier to learn than cuneiform with hundreds of signs. This dropped the cost of literacy so low that it spread outside palace and temple scribal classes. Greek literacy by the 5th century BCE was widespread enough to support public inscriptions, theater, democratic debate, and philosophical texts. The Phoenician-to-Greek transmission is the mechanism that made mass literacy possible in the ancient world.'
      },
      {
        q: 'What were the Silla gold crowns, and how do they compare to Koguryo tomb frescoes as expressions of elite status?',
        a: 'Silla gold crowns from Kyongju royal tombs (37 BCE-668 CE) feature elaborate tree and antler projections with jade and gold ornaments, expressing status through precious metalwork on a personal object worn by the living and buried with the dead. Koguryo tomb wall frescoes at Jian and Pyongyang express status through painted narrative art showing hunting scenes and military imagery on the walls of burial chambers. Both are elite status markers, but Silla used portable prestige metalwork while Koguryo used permanent monumental narrative painting.'
      },
      {
        q: "Why was Sargon of Akkad's empire a new kind of political structure, and what problems did it create?",
        a: "Sargon of Akkad (2334-2279 BCE) was the first empire-builder in world history. Before Sargon, power was organized in competing city-states, each with its own temple and lugal. Sargon showed that a single military-administrative machine could hold a vast multi-city territory. The problems this created were new: how do you administer cities with different gods, different languages, and different local elites? The Akkadian Empire solved this partly by appointing royal relatives as governors and imposing Akkadian as an administrative language. But it collapsed around 2200 BCE, possibly because these solutions were not durable enough. Every later empire (Assyrian, Babylonian, Persian) learned from Sargon's model and its failures."
      },
      {
        q: 'How did the Neo-Assyrian empire use architecture and relief carving as political tools?',
        a: "Neo-Assyrian kings built successive capitals with monumental palace programs: Ashurnasirpal II at Nimrud (883 BCE), Sargon II at Khorsabad (721-705 BCE), Sennacherib at Nineveh (704-681 BCE) with the 'Palace Without Rival,' and Ashurbanipal at Nineveh with a library of 30,000+ tablets. Carved relief programs like the Lachish siege relief (701 BCE) documented military victories and projected royal power to every audience in the palace. Architecture and carved relief functioned as state propaganda in physical form."
      },
      {
        q: 'What was Anuradhapura, and what made it significant in South Asian urban history?',
        a: 'Anuradhapura in Sri Lanka was settled by c. 900 BCE and had grown to 66 hectares by 450 BCE. It developed an early Brahmi script by 400 BCE. Under Asokan Buddhist influence, Buddhist monasteries in its hinterland replaced secular towns in the regional settlement hierarchy. Monks and abbots administered rural labor and agricultural surplus. This makes Anuradhapura the canonical example of heterarchical (non-centralized, monastery-based) urban administration in South Asia.'
      },
      {
        q: 'How did Minoan Linear A and Mycenaean Linear B relate to each other, and what does this tell us about the Mycenaean takeover of Knossos?',
        a: 'Linear B evolved from Minoan Linear A (the Minoan palatial script). When Knossos passed under Mycenaean control around 1490 BCE, the new Mycenaean rulers adapted the Minoan script for their own Greek language. This script change at Knossos is direct evidence that Mycenaeans took over Minoan administrative structures and adapted (rather than destroyed) the Minoan writing system for their own use. It was a cultural adaptation, not a complete break.'
      },
      {
        q: 'Transfer: The Indus Civilization maintained uniform weights and measures across 500,000 square kilometers. What mechanisms might have produced this uniformity without constant central inspection?',
        a: 'The Indus case shows that uniformity can persist without visible royal coercion. Several mechanisms could explain it. A small set of specialist centers may have made the finished weights and sent them outward. Apprenticeship may have trained every artisan in one shared tradition. Trading communities may have rejected non-standard weights as fraud. Shared beliefs may have treated correct weights as morally required. The key insight is that uniformity does not require a palace dictating every transaction. It requires trusted shared standards, however those are maintained.'
      },
      {
        q: 'How does migration appear as a recurring driver of change across the regions of this module?',
        a: "Southwest Asia shows Amorites ending Ur III and Sea Peoples destroying Bronze Age palaces. South Asia shows the Gandharan Grave Culture introducing new populations after the Indus collapse, and an older 'invasion' theory showing how migration was (wrongly) invoked to explain collapse. East Asia shows Han Chinese expansion colonizing Korea and Vietnam. The Mediterranean shows Greek and Phoenician colonization restructuring the coastline. In every region, the arrival of new populations reshaped political, cultural, and economic systems."
      },
      {
        q: 'How does the Metapontum Pantanello necropolis challenge assumptions about Greek colonial demographics?',
        a: "The Pantanello cemetery at Metapontum (southern Italy), excavated 1982-1986, contains 324 burials from c. 580 BCE to after 280 BCE. Female burials outnumbered male burials two to one. Family plots can be traced across five generations. This challenges the 'Greek colonization as male-dominated settler project' assumption and shows a more complex demographic reality where women and mixed populations were integral to colonial communities."
      },
      {
        q: 'What is the significance of clay tokens at Zagheh and proto-cuneiform at Uruk for understanding the relationship between accounting and civilization?',
        a: 'Clay tokens at Zagheh (5200-4600 BCE) and proto-cuneiform tablets at Uruk (c. 3500-3000 BCE) represent two stages in the same process: the need to record economic transactions externally when human memory becomes insufficient. Tokens count discrete objects; proto-cuneiform abstracts the counting system further. Both show that writing was not invented for literature, religion, or history but for the practical management of surplus goods. Economic complexity drove writing into existence.'
      },
      {
        q: "Transfer: A secondary state in East Asia adopts its powerful neighbor's writing system, legal code, and capital city layout, but retains its own religion and does not use the neighbor's method of selecting officials. What does this selective adoption pattern tell us?",
        a: "This describes Japan's adoption of Chinese models (Taika Reforms 646 CE, Taiho Code 702 CE, Nara grid capital 694 CE) while retaining kami worship and rejecting the Chinese examination system. Secondary states do not copy foreign models wholesale. They adopt elements that increase their rulers' legitimacy and administrative capacity, while rejecting elements that would undermine the existing power of their own elite. Japan's rulers needed Chinese-style administration to organize a growing state. They did not need the examination system, which would have opened government positions to commoners and threatened the existing aristocracy. Selective adoption is a strategic tool, not a cultural surrender."
      },
      {
        q: 'Transfer: An archaeologist finds a Bronze Age grave in eastern France containing a large Greek bronze vessel. No Greek colony is within 500 kilometers. What does this find suggest about the mechanisms of cultural exchange?',
        a: 'This describes the Vix krater in a Hallstatt grave in eastern France (mid-first millennium BCE). A vessel this large was not personal property carried by a traveler. It was a diplomatic gift, exchanged between Greek merchants or officials and an indigenous Hallstatt ruler. This shows that cultural exchange operated through at least two distinct mechanisms: colonial settlement (as at Massalia/Marseille) and long-distance elite gift exchange between non-colonial parties. The Vix krater proves that Greek material culture reached far beyond Greek settlement zones through prestige exchange networks. Indigenous rulers selected Greek luxury goods as status markers without adopting Greek culture broadly.'
      },
      {
        q: "How does the Han Dynasty Chang'an compare to Imperial Rome, and what does the comparison reveal?",
        a: "The Han capital Chang'an was four times the size of imperial Rome, with 12 gateways and the vast Shanglin Park. By the end of the Western Han, 120,285 officials administered the empire. Rome's strength lay in its legions and provincial road system; Han China's strength lay in its Confucian bureaucracy and agricultural productivity. Both were roughly contemporary world empires, but Han China administered a larger and more densely populated territory through civilian meritocracy rather than primarily through military force."
      },
      {
        q: "Transfer: Angkor's power rested on water management. When that system failed, the civilization collapsed. Compare this to one other civilization whose power rested on a single infrastructure system.",
        a: 'Angkor (800-1435 CE) used massive barays (reservoirs) to store monsoon water for year-round rice cultivation. When Thai military pressure, monsoon failure, and deforestation combined to break this system, the agricultural surplus that funded temple construction and fed the population disappeared. The Bronze Age world system (Late Bronze Age, c. 1650-1185 BCE) similarly rested on a single infrastructure: the long-distance trade network connecting Egypt, the Hittites, Cyprus, and the Aegean. When the collapse disrupted this network around 1200 BCE, civilizations that depended on imported tin for bronze lost their manufacturing base. In both cases, the single point of failure was a critical resource distribution system.'
      },
      {
        q: 'Han China introduced a seed drill in 85 BCE and a pit-field agricultural system. Why was agricultural technology the foundation of Han political power, not military technology?',
        a: "The Han introduced a seed drill (85 BCE) and a pit-field system that raised crop yields. Canal irrigation extended food production. By the end of the Western Han, 120,285 officials administered the empire. Agricultural innovation was the foundation of Han political stability. Without reliable surplus, the Confucian bureaucracy had nothing to distribute, and the empire's size became a liability. Han China's 120,285 officials were paid for by the surplus the seed drill helped produce. Military technology wins territory; agricultural technology keeps it populated, taxed, and fed."
      },
      {
        q: "What was Confucius's concept of ru and junzi?",
        a: "Confucius (551-479 BCE), born in the state of Lu (modern Shandong), taught the concept of ru (civility and virtue) and the junzi (morally powerful person or 'noble man'). His collected sayings, the Analects, argued that rulers who embody virtue and proper ritual relationships will naturally attract followers. This made Confucianism a theory of governance through moral example, not just through law and punishment."
      },
      {
        q: "How did Rome's relationship with Greek culture differ between its western and eastern provinces?",
        a: "In the western provinces (Gaul, Britain, Spain), pre-Roman societies were loosely organized and underwent significant Romanization: Latin, Roman law, urban forms, and Roman religion spread widely. In the eastern provinces (Greece, Egypt, Syria), populations were already densely urbanized in Greek-speaking cities. Rome chose to operate within that Greek cultural framework rather than impose Latin. As Horace wrote: 'captive Greece took its savage victor captive.'"
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'First Civilizations of the Old World',
      sections: [
        <>
          <h2>Mesopotamia</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 6000 BCE (Halaf) to 539 BCE (Persian conquest)
            </p>
            <p>
              <strong>Location:</strong> Tigris-Euphrates lowlands, Syria, Anatolia
            </p>
          </div>
          <h3>Key Sites and Dates</h3>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>Halaf period</strong> c. 6000-5400 BCE (Arpachiyah "Burnt House")
            </div>
            <div className="ref-item">
              <strong>Ubaid period</strong> c. 5900-4200 BCE (Eridu, 19 superimposed temples)
            </div>
            <div className="ref-item">
              <strong>Uruk period</strong> c. 4200-3000 BCE (40,000-50,000 population; White Temple
              c. 3200 BCE; proto-cuneiform c. 3500-3000 BCE)
            </div>
            <div className="ref-item">
              <strong>Sumerian city-states</strong> c. 3000-2000 BCE (Ur, Lagash, Nippur, Kish,
              Umma)
            </div>
            <div className="ref-item">
              <strong>Royal Cemetery of Ur</strong> c. 2500 BCE (16 royal graves, up to 74 human
              sacrifices)
            </div>
            <div className="ref-item">
              <strong>Ebla</strong> reached 56 ha by 2400 BCE; 2,100-tablet palace archive
            </div>
            <div className="ref-item">
              <strong>Akkadian Empire</strong> 2334-2004 BCE (Sargon 2334-2279 BCE; Naram-Sin
              2254-2218 BCE)
            </div>
            <div className="ref-item">
              <strong>Ur III dynasty</strong> 2112-2004 BCE (Ziggurat of Ur, Ur-Nammu, c. 2100 BCE)
            </div>
            <div className="ref-item">
              <strong>Hammurabi of Babylon</strong> 1792-1750 BCE (282-law code, basalt stela c.
              1754 BCE)
            </div>
            <div className="ref-item">
              <strong>Palace of Zimri-Lim at Mari</strong> 1775-1761 BCE (260 rooms, 17,000+
              tablets)
            </div>
            <div className="ref-item">
              <strong>Old Assyrian Kanesh trade network</strong> c. 2000-1760 BCE (23,000 tablets)
            </div>
            <div className="ref-item">
              <strong>Chogha Zanbil ziggurat</strong> built by Untash-Napirisha, 1275-1240 BCE (50 m
              high, 4 km perimeter wall)
            </div>
            <div className="ref-item">
              <strong>Neo-Assyrian Empire</strong> Ashurnasirpal II (Nimrud, 883 BCE), Sargon II
              (Khorsabad 721-705 BCE), Sennacherib (Nineveh 704-681 BCE), Ashurbanipal (library
              30,000+ tablets)
            </div>
            <div className="ref-item">
              <strong>Neo-Babylonian</strong> Nebuchadnezzar II (605-562 BCE), Ishtar Gate
            </div>
            <div className="ref-item">
              <strong>Achaemenid Persian conquest</strong> 539 BCE
            </div>
          </div>
          <h3>Key Concepts</h3>
          <ul className="lrn-list">
            <li>
              <strong>Structural scarcity:</strong> Tigris-Euphrates lowlands lacked stone, metal,
              timber. Long-distance trade was a necessity from the start.
            </li>
            <li>
              <strong>Writing:</strong> Proto-cuneiform c. 3500-3000 BCE. Primary purpose:
              accounting. ~5,000 tablets survive, ~850 signs, base-60 counting.
            </li>
            <li>
              <strong>Temple economy:</strong> Owned land, employed labor, collected and
              redistributed surplus grain.
            </li>
            <li>
              <strong>Hammurabi's three classes:</strong> Awilum (free), mushkenum (semi-free),
              wardum (slaves).
            </li>
            <li>
              <strong>Zagheh clay tokens:</strong> 5200-4600 BCE, central Iran. Shows accounting
              developed independently of Mesopotamia.
            </li>
          </ul>

          <h2>Hittites and the Levant</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 1650-1185 BCE (Hittite Empire); Late Bronze Age world
              system c. 1550-1185 BCE
            </p>
            <p>
              <strong>Location:</strong> Central Anatolia, Syria, Levantine coast
            </p>
          </div>
          <h3>Key Sites and Dates</h3>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>Hattusa</strong> ~600 ha; 30,000+ cuneiform tablets (Hittite, Akkadian,
              Luwian)
            </div>
            <div className="ref-item">
              <strong>Amarna Letters</strong> 14th century BCE, Akkadian diplomatic correspondence
              (Egypt, Babylonia, Assyria, Hittites, Mittani)
            </div>
            <div className="ref-item">
              <strong>Ugarit</strong> cosmopolitan hub; texts in 6 languages; earliest alphabetic
              script before 1200 BCE (30 consonantal signs)
            </div>
            <div className="ref-item">
              <strong>Uluburun shipwreck</strong> 14th century BCE (350 copper ingots/9 tonnes, 1
              tonne tin, glass, ebony, ivory, gold scarab of Nefertiti)
            </div>
            <div className="ref-item">
              <strong>Bronze Age collapse</strong> c. 1200-1185 BCE: Hittite Empire fell, Mycenaean
              palaces burned, Ugarit destroyed
            </div>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Amarna system:</strong> Diplomatic gift exchange, diplomatic marriages,
              military alliances. Akkadian as international language.
            </li>
            <li>
              <strong>Bronze Age collapse proposed causes:</strong> Sea Peoples invasions, drought,
              internal rebellion, interconnected fragility of the world system.
            </li>
          </ul>

          <h2>Iron Age Southwest Asia</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 1200-330 BCE
            </p>
            <p>
              <strong>Location:</strong> Syria, Anatolia, Levant, Mesopotamia
            </p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>Neo-Hittite states</strong> c. 1200-700 BCE: Carchemish, Zincirli, Melid;
              Karatepe bilingual (Luwian/Phoenician)
            </div>
            <div className="ref-item">
              <strong>Phrygia</strong> capital Gordion; Midas Mound c. 900 BCE (oldest standing
              wooden structure in world)
            </div>
            <div className="ref-item">
              <strong>Lachish siege relief</strong> 701 BCE, Sennacherib's palace, most detailed
              ancient Near Eastern siege record
            </div>
            <div className="ref-item">
              <strong>Achaemenid Persia</strong> Cyrus (559-530 BCE), Darius I; Persepolis, Susa
            </div>
            <div className="ref-item">
              <strong>Alexander the Great</strong> conquered Persian Empire 334-323 BCE; died
              Babylon 323 BCE
            </div>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Phoenician alphabet:</strong> 22 consonants, before 1000 BCE. Derived from
              Ugaritic. Passed to Greeks, then Rome. Ancestor of all modern Western alphabets.
            </li>
          </ul>

          <h2>Aegean Bronze Age</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 3500-1100 BCE
            </p>
            <p>
              <strong>Location:</strong> Cycladic islands, Crete, Greek mainland, northwest Turkey
            </p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>Cycladic figurines</strong> 3500-2000 BCE, cemeteries at Syros (Chalandriani,
              Kastri) and Keros ritual deposition site
            </div>
            <div className="ref-item">
              <strong>Minoan First Palace Period</strong> c. 2000-1700 BCE (Knossos, Phaistos,
              Mallia)
            </div>
            <div className="ref-item">
              <strong>Minoan Second Palace Period</strong> c. 1700-1490 BCE (Kato Zakros added;
              Gournia excavated by Harriet Boyd Hawes)
            </div>
            <div className="ref-item">
              <strong>Akrotiri (Thera)</strong> buried by volcanic eruption late 17th century BCE;
              "Bronze Age Pompeii"
            </div>
            <div className="ref-item">
              <strong>Pseira shipwreck</strong> discovered 2003, dated 1800-1675 BCE; earliest
              actual Minoan ship found
            </div>
            <div className="ref-item">
              <strong>Knossos under Mycenaean control</strong> c. 1490 BCE; Linear B introduced
            </div>
            <div className="ref-item">
              <strong>Mycenae</strong> Grave Circle A (Schliemann 1876); "Mask of Agamemnon"; Lion
              Gate (earliest monumental sculpture in Europe)
            </div>
            <div className="ref-item">
              <strong>Troy VI</strong> destroyed c. 1250 BCE; best candidate for Homer's Troy;
              Mycenaean pottery in destruction layers
            </div>
            <div className="ref-item">
              <strong>Lefkandi (Euboea)</strong> Toumba heroon, 10th century BCE; warrior/woman
              burial with horse; exotic goods from Phoenicia and Egypt
            </div>
            <div className="ref-item">
              <strong>Linear B decipherment</strong> 1952, Michael Ventris (Alice Kober prepared
              groundwork)
            </div>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Thalassocracy:</strong> Minoan power based on maritime cultural influence, not
              military force. No defensive walls at palaces.
            </li>
            <li>
              <strong>Linear B:</strong> Early Greek. Records textiles, rations, land allocations.
              Names Athena, Poseidon, Zeus. Survived at Knossos, Pylos, Mycenae, Tiryns, Thebes,
              Agios Vasileios, Chania, Armenoi.
            </li>
          </ul>

          <h2>Mediterranean in the First Millennium BCE</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 1100 BCE-476 CE
            </p>
            <p>
              <strong>Location:</strong> Greek mainland, colonies, Italy, North Africa
            </p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>Olympic Games</strong> traditional date 776 BCE; Pythian Games Delphi 586 BCE;
              Isthmian 580 BCE; Nemean 573 BCE
            </div>
            <div className="ref-item">
              <strong>Parthenon</strong> Athens, 447-432 BCE
            </div>
            <div className="ref-item">
              <strong>Metapontum necropolis</strong> c. 580 BCE to after 280 BCE; 324 burials;
              female burials outnumbered male 2:1
            </div>
            <div className="ref-item">
              <strong>Vix krater</strong> large bronze vessel in Hallstatt grave, eastern France;
              diplomatic gift from Greek world to indigenous European ruler
            </div>
            <div className="ref-item">
              <strong>Carthage</strong> founded 9th century BCE; two artificial harbors; sacked by
              Rome 146 BCE
            </div>
            <div className="ref-item">
              <strong>Alexander the Great</strong> 356-323 BCE; died Babylon; founded
              Alexandria-by-Egypt 331 BCE
            </div>
            <div className="ref-item">
              <strong>Mahdia shipwreck</strong> c. 80-70 BCE, off Tunisia (60 marble columns/~230
              tonnes from Mount Pentele)
            </div>
            <div className="ref-item">
              <strong>Pompeii</strong> buried by Vesuvius eruption 79 CE
            </div>
            <div className="ref-item">
              <strong>Constantinople founded</strong> 330 CE; fell to Mehmet II 1453 CE
            </div>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Greek polis:</strong> Urban center (astu) + agricultural territory (chora).
              Each had acropolis + agora.
            </li>
            <li>
              <strong>Human trafficking:</strong> at least 100 million people in involuntary
              movement over Roman Empire's course.
            </li>
          </ul>

          <h2>Western Mediterranean Bronze Age Cultures</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 1500-500 BCE
            </p>
            <p>
              <strong>Location:</strong> Sardinia, Corsica, Balearic Islands, southeast Spain
            </p>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Nuraghi (Sardinia):</strong> More than 7,000 stone tower fortresses. Nuraghe
              Is Paras dated to 15th-14th century BCE.
            </li>
            <li>
              <strong>Torri (Corsica):</strong> Similar tower structures, defensive and prestige
              function.
            </li>
            <li>
              <strong>Talayots (Balearic Islands):</strong> Parallel tower structures.
            </li>
            <li>
              <strong>Social inequality in sub-optimal environments:</strong> Los Millares (SE
              Spain) shows inequality emerged where resources were scarce, not where they were most
              abundant.
            </li>
          </ul>

          <h2>The Indus Civilization</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 6500-1300 BCE (Mehrgarh to Late Harappan)
            </p>
            <p>
              <strong>Location:</strong> Pakistan, northwest India, Gujarat
            </p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>Mehrgarh</strong> c. 6500-2800 BCE; aceramic Period IA; mud-brick storage;
              barley, wheat, zebu cattle; earliest South Asian farming site
            </div>
            <div className="ref-item">
              <strong>Kot Diji phase</strong> c. 3200-2600 BCE; wheel-thrown jars, bull motifs,
              planned mud-brick settlements
            </div>
            <div className="ref-item">
              <strong>Mohenjo-daro</strong> 200 ha; citadel mound (Great Bath 12x7 m, Granary 50x27
              m, Pillared Hall); grid lower town with brick drains
            </div>
            <div className="ref-item">
              <strong>Harappa</strong> 150+ ha; four separately walled mounds; Cemetery H
            </div>
            <div className="ref-item">
              <strong>Dholavira</strong> three-zone plan (acropolis, middle town, lower town)
            </div>
            <div className="ref-item">
              <strong>Gandharan Grave Culture</strong> c. 1700-1600 BCE (Chitral, Dir, Swat);
              bell-shaped burial pits, horse burials
            </div>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Era of integration:</strong> c. 2600-1900 BCE. 500,000 sq km. Five urban sites
              over 100 ha. 15,000+ total sites.
            </li>
            <li>
              <strong>Indus paradox:</strong> Civilization-scale uniformity without royal tombs,
              elite palaces, or warrior burials.
            </li>
            <li>
              <strong>Indus script:</strong> 2,700+ inscriptions. 170-220 simple signs. Reads right
              to left. No bilingual inscription. Undeciphered.
            </li>
            <li>
              <strong>Massacre theory:</strong> Abandoned after reanalysis showed peaceful mass
              burial with grave goods.
            </li>
          </ul>

          <h2>South Asia after the Indus</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 1700 BCE-400 CE
            </p>
            <p>
              <strong>Location:</strong> South Asia, Sri Lanka
            </p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>Hastinapura</strong> 6.5 ha by 1100-800 BCE
            </div>
            <div className="ref-item">
              <strong>Anuradhapura (Sri Lanka)</strong> settled c. 900 BCE; 66 ha by 450 BCE; early
              Brahmi script 400 BCE; monastery-based administration under Asokan influence
            </div>
            <div className="ref-item">
              <strong>Charsadda</strong> excavated 1996; occupation to middle 2nd millennium BCE
              (overturned the Persian-contact trigger theory)
            </div>
            <div className="ref-item">
              <strong>Pataliputra (Mauryan capital)</strong> 1,350 ha; stone-pillared hall; six-tier
              settlement hierarchy
            </div>
            <div className="ref-item">
              <strong>Arikamedu</strong> once identified as a "Roman market"; Rouletted Ware shown
              to be local, not Roman
            </div>
            <div className="ref-item">
              <strong>Kushan Empire</strong> 1st-3rd century CE; under Kanishka; major Buddhist
              transmission corridor
            </div>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>16 mahajanapadas:</strong> By 500 BCE. Great iron-age agricultural territories
              across northern India.
            </li>
            <li>
              <strong>Mauryan Empire (c. 325-185 BCE):</strong> First pan-South Asian state. Asoka
              (272-235 BCE): edicts in Greek, Aramaic, Kharoshthi, Brahmi, Prakrits. Non-violence,
              dharma, Buddhist missions.
            </li>
            <li>
              <strong>Heterarchical administration:</strong> Buddhist monasteries at Anuradhapura
              replaced secular towns. Monks administered rural labor and surplus.
            </li>
          </ul>

          <h2>Early China</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 3000 BCE-220 CE
            </p>
            <p>
              <strong>Location:</strong> Yellow River valley, Yangtze basin, Sichuan
            </p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>Taosi (Longshan)</strong> c. 3000-1900 BCE; 56 ha; four quadrants; royal
              cemetery; razed in late phase
            </div>
            <div className="ref-item">
              <strong>Erlitou</strong> c. 2070-1500 BCE; 400 ha by 1850 BCE; 10.8 ha walled palace
              precinct; turquoise-mosaic dragon; possible Xia Dynasty capital
            </div>
            <div className="ref-item">
              <strong>Anyang/Yinxu (late Shang)</strong> c. 1250-1050 BCE; royal cemetery at
              Xibeigang (12 massive tombs, wholesale human sacrifice); Fu Hao's tomb (468 bronze
              vessels, 755 jade objects, 1,600 kg bronze total); oracle bone archives 100,000+
            </div>
            <div className="ref-item">
              <strong>Sanxingdui (Sichuan)</strong> 450 ha; contemporary with late Shang; bronze
              masks with stalked eyes 1.4 m wide; 2.61 m bronze standing figure
            </div>
            <div className="ref-item">
              <strong>Qin capital Lintong</strong> terracotta army of life-sized infantry, cavalry,
              chariots
            </div>
            <div className="ref-item">
              <strong>Han capital Chang'an</strong> four times size of imperial Rome; 12 gateways;
              120,285 officials
            </div>
            <div className="ref-item">
              <strong>Mawangdui (Changsha)</strong> Lady Dai preserved almost perfectly 2,000 years;
              silk tomb banner; bamboo slips
            </div>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Oracle bones:</strong> 100,000+ from Anyang. Addressed weather, harvests,
              military campaigns, royal pregnancies. King communicated with royal ancestors and
              deity Di.
            </li>
            <li>
              <strong>Mandate of Heaven (Tianming):</strong> Western Zhou concept. King rules
              because Heaven endorses him. Misrule = Heaven withdraws mandate. Justifies dynastic
              change.
            </li>
            <li>
              <strong>Ritual bronze revolution (Western Zhou):</strong> Mass-produced identical
              vessel sets distributed to lords. Political hierarchy expressed through controlled
              ritual objects.
            </li>
            <li>
              <strong>Qin Legalism:</strong> 36 commanderies, standardized
              script/weights/measures/currency, Great Wall (300,000 workers). Collapsed in 14 years
              (221-207 BCE).
            </li>
            <li>
              <strong>Han Confucianism:</strong> 206 BCE-220 CE. Seed drill (85 BCE). 120,285
              officials. Four centuries of stability.
            </li>
          </ul>

          <h2>Korea, Japan, and the Silk Roads</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 108 BCE-900 CE
            </p>
            <p>
              <strong>Location:</strong> Korean peninsula, Japanese archipelago, Central Asia
            </p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>Koguryo</strong> 37 BCE-668 CE; wall fresco tombs; university founded 372 CE;
              first Korean kingdom to adopt Buddhism
            </div>
            <div className="ref-item">
              <strong>Paekche</strong> 18 BCE-680 CE; literate in Chinese by 4th century CE;
              Buddhism 384 CE; brought Chinese culture to Japan
            </div>
            <div className="ref-item">
              <strong>Silla</strong> 37 BCE-668 CE; 155 burial mounds at Kyongju; gold crowns;
              allied with Tang Dynasty; Great Silla 668 CE
            </div>
            <div className="ref-item">
              <strong>Yamato Japan</strong> keyhole-shaped kofun from 3rd century CE; Nintoku tomb
              486 m long
            </div>
            <div className="ref-item">
              <strong>Heijo-kyo (Nara)</strong> founded 694 CE on Chang'an grid plan
            </div>
            <div className="ref-item">
              <strong>Taiho Code</strong> 702 CE; Taika Reforms 646 CE (census, land tax, 12-rank
              merit system)
            </div>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Three Kingdoms as secondary state formation:</strong> Emerged directly in
              response to Han Chinese military pressure and occupation.
            </li>
            <li>
              <strong>Japanese selective adoption:</strong> Adopted Chinese-style administration.
              Rejected Chinese examination system. Retained kami worship and divine imperial
              legitimacy.
            </li>
            <li>
              <strong>Land Silk Road:</strong> Pre-eminent during Han Dynasty (206 BCE-220 CE).
              Through Tarim Basin.
            </li>
            <li>
              <strong>Maritime Silk Road:</strong> Gained importance after Han collapse. South China
              coast through Vietnam and Burma to India. Major route for Buddhist transmission.
            </li>
          </ul>

          <h2>Southeast Asia and Angkor</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 3rd century BCE-1435 CE
            </p>
            <p>
              <strong>Location:</strong> Mainland and island Southeast Asia
            </p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>Non Ban Jak (NE Thailand)</strong> Iron Age moated settlement; lavish burials
              with gold, silver, carnelian, agate; pre-dates significant Indian contact
            </div>
            <div className="ref-item">
              <strong>Khao Sam Kaeo (peninsular Thailand)</strong> c. 3rd-2nd century BCE; 54 ha;
              international hub; Indian names on seals but beads manufactured locally
            </div>
            <div className="ref-item">
              <strong>Pyu cities</strong> c. 200 BCE-900 CE; Beikthano, Sri Ksetra, Halin; Buddhism
              4th-5th century CE
            </div>
            <div className="ref-item">
              <strong>Angkor Wat</strong> Suryavarman II 1113-50 CE; Hindu/Vishnu; 5 towers = Mount
              Meru; finest bas-reliefs in SE Asia
            </div>
            <div className="ref-item">
              <strong>Angkor Thom and Bayon</strong> Jayavarman VII 1181-1219 CE; Buddhist; giant
              stone faces as bodhisattva; LiDAR revealed full landscape management
            </div>
            <div className="ref-item">
              <strong>Angkor abandoned</strong> mid-15th century CE; Thai pressure + monsoon failure
              + deforestation
            </div>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Indianization as veneer, not colonization:</strong> Local manufacture by
              foreign-origin craftspeople. Indian cultural prestige was a tool for local rulers.
            </li>
            <li>
              <strong>Water management as political power:</strong> Angkor's barays stored monsoon
              water. Agricultural surplus funded temple construction. Controlling water =
              controlling political power.
            </li>
          </ul>

          <h2>Cross-Civilization Comparison</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`Feature`}</th>
                <th>{`Mesopotamia`}</th>
                <th>{`Indus`}</th>
                <th>{`China`}</th>
                <th>{`Aegean`}</th>
                <th>{`Mediterranean`}</th>
                <th>{`South Asia`}</th>
                <th>{`SE Asia`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Writing`}</td>
                <td>{`Cuneiform (c. 3500 BCE, accounting)`}</td>
                <td>{`Undeciphered script`}</td>
                <td>{`Oracle bones (c. 1250 BCE, divination)`}</td>
                <td>{`Linear B (c. 1450 BCE, administration)`}</td>
                <td>{`Phoenician/Greek alphabet (c. 1000-800 BCE)`}</td>
                <td>{`Brahmi (c. 400 BCE)`}</td>
                <td>{`Sanskrit borrowing`}</td>
              </tr>
              <tr>
                <td>{`State type`}</td>
                <td>{`City-states → empire`}</td>
                <td>{`No visible royal coercion`}</td>
                <td>{`Palatial + ritual state`}</td>
                <td>{`Thalassocracy (Minoan) / palatial (Mycenaean)`}</td>
                <td>{`Polis network → empire`}</td>
                <td>{`Heterarchical (monastery)`}</td>
                <td>{`Devaraja (temple-state)`}</td>
              </tr>
              <tr>
                <td>{`Monumental architecture`}</td>
                <td>{`Ziggurats, royal tombs`}</td>
                <td>{`Great Bath (no royal monuments)`}</td>
                <td>{`Palaces, tomb armies`}</td>
                <td>{`Cyclopean walls, tholos tombs`}</td>
                <td>{`Temples, amphitheaters`}</td>
                <td>{`Stupas, pillars`}</td>
                <td>{`Temple-mountains (Angkor Wat)`}</td>
              </tr>
              <tr>
                <td>{`Coerced labor`}</td>
                <td>{`Human sacrifice at Ur`}</td>
                <td>{`None visible`}</td>
                <td>{`Mass sacrifice at royal tombs`}</td>
                <td>{`Linear B records coerced labor`}</td>
                <td>{`Slavery structural`}</td>
                <td>{`Monastery-managed labor`}</td>
                <td>{`Temple construction workforce`}</td>
              </tr>
              <tr>
                <td>{`Trade system`}</td>
                <td>{`Uruk expansion, Silk Roads`}</td>
                <td>{`Trade to Mesopotamia`}</td>
                <td>{`Silk Road (land and maritime)`}</td>
                <td>{`Thalassocratic networks`}</td>
                <td>{`Phoenician/Greek colonization`}</td>
                <td>{`Indian Ocean networks`}</td>
                <td>{`Maritime Silk Road`}</td>
              </tr>
              <tr>
                <td>{`Collapse mechanism`}</td>
                <td>{`Drought, conquest`}</td>
                <td>{`River shift, trade collapse`}</td>
                <td>{`Dynastic cycles (Mandate of Heaven)`}</td>
                <td>{`Bronze Age collapse c. 1200 BCE`}</td>
                <td>{`Roman fragmentation`}</td>
                <td>{`Dynastic succession`}</td>
                <td>{`Monsoon failure + military`}</td>
              </tr>
            </tbody>
          </table>

          <h2>Debates and How They Were Settled</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`Claim`}</th>
                <th>{`Status`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Indus civilization imported from Mesopotamia`}</td>
                <td>{`Overturned by Mehrgarh (1970s)`}</td>
              </tr>
              <tr>
                <td>{`Mohenjo-daro skeletons = Indo-Aryan invasion massacre`}</td>
                <td>{`Abandoned: reanalysis showed peaceful mass burial`}</td>
              </tr>
              <tr>
                <td>{`Arikamedu = "Roman market"`}</td>
                <td>{`Overturned: Rouletted Ware was local`}</td>
              </tr>
              <tr>
                <td>{`Persian contact triggered second urbanization`}</td>
                <td>{`Overturned by Charsadda (1996)`}</td>
              </tr>
              <tr>
                <td>{`Linear B is an early form of Greek`}</td>
                <td>{`Confirmed by decipherment in 1952`}</td>
              </tr>
            </tbody>
          </table>

          <h2>Script Decipherment Status</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`Script`}</th>
                <th>{`Status`}</th>
                <th>{`Reason`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Mesopotamian cuneiform`}</td>
                <td>{`Deciphered`}</td>
                <td>{`Bilingual inscriptions; known descendant languages`}</td>
              </tr>
              <tr>
                <td>{`Linear B`}</td>
                <td>{`Deciphered (1952, Ventris)`}</td>
                <td>{`Underlying language is Greek (a known language)`}</td>
              </tr>
              <tr>
                <td>{`Chinese oracle bones`}</td>
                <td>{`Deciphered`}</td>
                <td>{`Oracle bone script evolved continuously into modern Chinese`}</td>
              </tr>
              <tr>
                <td>{`Egyptian hieroglyphs`}</td>
                <td>{`Deciphered`}</td>
                <td>{`Rosetta Stone provided bilingual key (Greek + hieroglyphs)`}</td>
              </tr>
              <tr>
                <td>{`Indus script`}</td>
                <td>{`Undeciphered`}</td>
                <td>{`No bilingual inscription; no certain modern descendant language`}</td>
              </tr>
              <tr>
                <td>{`Linear A (Minoan)`}</td>
                <td>{`Undeciphered`}</td>
                <td>{`No bilingual inscription; no known descendant language`}</td>
              </tr>
            </tbody>
          </table>

          <h2>Bronze Age Collapse (c. 1200-1185 BCE): Affected Civilizations</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`Civilization`}</th>
                <th>{`Outcome`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Hittite Empire`}</td>
                <td>{`Collapsed completely`}</td>
              </tr>
              <tr>
                <td>{`Mycenaean palaces`}</td>
                <td>{`Destroyed; Linear B administration ceased; writing lost ~400 years`}</td>
              </tr>
              <tr>
                <td>{`Ugarit`}</td>
                <td>{`Destroyed and never rebuilt`}</td>
              </tr>
              <tr>
                <td>{`Egypt`}</td>
                <td>{`Survived but power shrank dramatically`}</td>
              </tr>
              <tr>
                <td>{`Cyprus`}</td>
                <td>{`Disrupted but survived`}</td>
              </tr>
              <tr>
                <td>{`Phoenicia (Tyre/Sidon)`}</td>
                <td>{`Survived; became dominant Iron Age traders`}</td>
              </tr>
            </tbody>
          </table>

          <h2>Primary vs. Secondary State Formation</h2>
          <h3>Primary States (arose from internal dynamics)</h3>
          <ul className="lrn-list">
            <li>Mesopotamia (Uruk/Sumerian city-states)</li>
            <li>Indus Valley</li>
            <li>China (Erlitou/Shang)</li>
          </ul>
          <h3>Secondary States (arose in response to existing states)</h3>
          <ul className="lrn-list">
            <li>Phoenicia (shaped by Bronze Age world system)</li>
            <li>Korean Three Kingdoms (response to Han Chinese occupation)</li>
            <li>Japan's Nara state (response to Chinese models)</li>
            <li>Southeast Asian "Indianized" states (selective adoption of Indian prestige)</li>
            <li>
              Mauryan Empire (arose after Alexander's invasions reshaped the western frontier)
            </li>
          </ul>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function FirstCivilizationsOfTheOldWorld() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
