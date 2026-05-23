import { LearningTemplate } from '../../../../components/learning/learning-template'

function useConfig() {
  const config = {
    cssPrefix: 'fof',
    documentTitle: 'From Foragers to Farmers: Origins of Agriculture - AETHER',
    learning: {
      groupTitle: 'After the Ice Age',
      category: 'Module 3',
      title: 'From Foragers to Farmers: Origins of Agriculture',
      subtitle:
        'How and why our ancestors switched from hunting and gathering to farming, and how that change reshaped the world.',
      sections: [
        <>
          <h2>The World After the Ice Age</h2>
          <p>
            The last ice age peaked around 18,000 years ago, then the glaciers began to retreat. For
            the next several thousand years, temperatures rose and fell in a series of unsteady
            swings called the Late Glacial period (15,000 to 11,600 years ago).
          </p>
          <p>
            The final swing was the sharpest. The Younger Dryas (12,900 to 11,600 years ago) slammed
            the Northern Hemisphere back into near-glacial cold for over a thousand years. When it
            ended, the climate warmed quickly and steadied. That moment marks the start of the
            Holocene, the warm and stable geological epoch we still live in today.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Evolution_of_temperature_in_the_Post-Glacial_period_according_to_Greenland_ice_cores_%28Younger_Dryas%29.jpg"
              alt="Post-glacial temperature changes including the Younger Dryas cold event, reconstructed from Greenland ice cores"
              loading="lazy"
            />
            <figcaption>
              Post-glacial temperature changes reconstructed from Greenland ice cores. The Younger
              Dryas cold reversal is visible before the Holocene warming (Wikimedia Commons, CC
              BY-SA).
            </figcaption>
          </figure>
          <div className="lrn-callout">
            <strong>KEY TERM: HOLOCENE</strong>
            <p>
              The geological epoch that began around 11,600 years ago when the last ice age ended.
              All agriculture, civilization, and recorded history took place in the Holocene.
            </p>
          </div>
          <div className="lrn-predict">
            <strong>Predict:</strong> The Holocene brought stable, warm conditions worldwide.
            Predict why no human group invented agriculture during the previous 200,000 years of our
            species, even though humans were biologically modern long before the Holocene.
          </div>
        </>,

        <>
          <h2>Rising Seas and New Landscapes</h2>
          <p>
            As the ice melted, sea levels rose by more than 100 meters. Coastal plains that people
            had lived on for thousands of years went underwater, new coastlines formed, and river
            valleys carved out fresh routes inland. Forests pushed north across Europe, the Middle
            East, and Asia. Most of the large Ice Age animals died out, and deer, gazelle, fish, and
            small game became the main prey.
          </p>
          <p>
            The new climate was warmer and wetter, and wild cereal grasses spread in dense stands
            across Southwest Asia and China. These same grasses would later become the first
            domesticated crops. The Younger Dryas then briefly cut those wild food supplies back,
            putting pressure on the groups that had grown most dependent on them. Whether that
            pressure pushed people into farming is a question we will return to in the theories
            section.
          </p>
          <div className="lrn-predict">
            <strong>Predict:</strong> If sea levels rose by over 100 meters and drowned vast coastal
            plains, where would former coastal foragers most likely move and what new food
            strategies would they need to invent?
          </div>
        </>,

        <>
          <h2>Defining Cultivation, Domestication, and Agriculture</h2>
          <p>
            Archaeologists use cultivation, domestication, and agriculture to mean three different
            things. Mixing them up makes any debate about the origins of farming meaningless, so
            they are worth pinning down before going further.
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Cultivation</div>
            <div className="lrn-definition-desc">
              Intentionally tending and growing plants. Cultivation does not require that the plants
              have changed genetically. A group can cultivate wild wheat without domesticating it.
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Domestication</div>
            <div className="lrn-definition-desc">
              A biological process. A plant or animal species changes genetically because humans
              select which individuals reproduce. Domesticated species depend on humans to survive
              and spread.
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Agriculture</div>
            <div className="lrn-definition-desc">
              A food-production system that relies mainly on domesticated plants and animals.
              Agriculture implies full commitment, not just occasional cultivation alongside hunting
              and gathering.
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Herding (Pastoralism)</div>
            <div className="lrn-definition-desc">
              Managing herds of domesticated animals. Herding can exist independently of crop
              farming. Many early Southwest Asian communities herded animals before or alongside
              cultivating crops.
            </div>
          </div>
          <p>
            The shift from cultivation to full agriculture took thousands of years. It was not a
            single decision but a gradual change across many generations.
          </p>
          <div className="lrn-predict">
            <strong>Predict:</strong> A group cultivates wild wheat for 500 years without any
            genetic change in the plants. Predict what is most likely to break first: the
            non-shattering trait, larger seeds, or loss of dormancy. Justify your answer using how
            humans actually harvest and replant.
          </div>
        </>,

        <>
          <h2>How Plants Become Domesticates: The Biological Markers</h2>
          <p>
            Domesticated plants leave visible fingerprints in the seeds and stems found at a dig.
            Archaeologists use those fingerprints to pin down when wild plants first crossed the
            line into domesticated crops.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Non-shattering rachis:</strong> Wild grasses have a brittle stem (rachis) that
              drops seeds when ripe. Domesticated grains keep their seeds attached. Harvesting by
              sickle selects for non-shattering types because those plants get their seeds
              collected.
            </li>
            <li>
              <strong>Larger seed size:</strong> Humans preferentially planted bigger seeds.
              Generation after generation, seed size grew.
            </li>
            <li>
              <strong>Loss of seed dormancy:</strong> Wild seeds lie dormant until conditions are
              right. Domesticated seeds germinate quickly and reliably when planted.
            </li>
            <li>
              <strong>Thinner seed coat:</strong> Wild seeds have thick coats that resist digestion
              and rotting. Domesticated seeds have thinner coats, which makes them easier to cook
              and grind but also less able to survive in the wild without human care.
            </li>
            <li>
              <strong>Loss of dispersal mechanisms:</strong> Wild plants evolved to spread seeds by
              wind or animals. Domesticated plants lose this ability and rely on humans for
              planting.
            </li>
          </ul>
          <div className="lrn-callout">
            <strong>THE UNCONSCIOUS SELECTION TRAP</strong>
            <p>
              Early farmers did not plan to change their crops. Selection was unconscious. By
              repeatedly harvesting, storing, and replanting, they automatically favored plants with
              useful traits. The biology changed before anyone noticed.
            </p>
          </div>
          <div className="lrn-elaborate">
            <strong>Elaborate:</strong> In your own words, explain why a non-shattering rachis is
            useless to a wild plant but valuable to a human harvester. Connect this to why
            domesticated grains cannot survive without people.
          </div>
        </>,

        <>
          <h2>How Animals Become Domesticates</h2>
          <p>
            Animals leave their own fingerprints in the bone piles at a site. When archaeologists
            see young males killed off and females kept alive, they know they are looking at a herd,
            not a hunt.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Smaller body size:</strong> Domesticated animals are smaller than their wild
              ancestors. Humans killed the largest, most dangerous animals and kept smaller, calmer
              ones.
            </li>
            <li>
              <strong>Reduced horn size:</strong> Especially in cattle, goats, and sheep.
            </li>
            <li>
              <strong>Changes in bone proportions:</strong> Leg bones become shorter relative to
              body size in penned animals.
            </li>
            <li>
              <strong>Herd age and sex profiles:</strong> Wild hunted herds show all ages and both
              sexes. Managed herds show selective killing: young males (for meat) kept longer,
              females (for milk and breeding) kept alive longer.
            </li>
            <li>
              <strong>DNA evidence:</strong> Genetic studies show domesticated animals descended
              from small founder populations captured and bred in specific regions.
            </li>
          </ul>
          <p>
            The main domesticated animals in Southwest Asia were sheep, goat, cattle, and pig. In
            East Asia, pig and dog came first. Horse domestication happened later on the Eurasian
            steppe.
          </p>
          <div className="lrn-predict">
            <strong>Predict:</strong> If you found a 9,000-year-old animal bone pile with mostly
            adult male skeletons and almost no young animals, would this look more like a hunting
            kill site or a herding settlement? Explain your reasoning before reading on.
          </div>
        </>,

        <>
          <h2>Hunter-Gatherers on the Eve of Agriculture</h2>
          <p>
            By the end of the Ice Age, many foragers were already living in rich environments with
            diverse and reliable food supplies. Starting around 20,000 years ago, they began
            harvesting a much wider range of foods: more plants, fish, shellfish, and small animals
            alongside the big game they had always pursued. Archaeologists call this widening of the
            menu the <strong>Broad Spectrum Revolution</strong>. It made diets more stable but also
            more labor-intensive per calorie.
          </p>
          <p>
            Some groups became semi-sedentary long before farming began. They stored food, built
            sturdy shelters, and returned to the same sites year after year. Once you stop moving,
            it becomes worthwhile to invest in the local plants and animals: weeding a patch you
            will return to, penning an animal you will need next month. Sedentism made plant and
            herd management practical in a way mobile life never did.
          </p>
          <div className="lrn-insight">
            Farming did not save people from starvation. Foragers in rich environments often ate
            better and worked less than early farmers. The shift to agriculture brought more people,
            but often with worse individual health.
          </div>
          <div className="lrn-elaborate">
            <strong>Elaborate:</strong> Anthropologist Richard Lee studied the !Kung foragers and
            found they had plenty of leisure time. Explain in your own words why this matters for
            the question of why agriculture began. If foragers worked less, what does that suggest
            about the cause of agriculture?
          </div>
        </>,

        <>
          <h2>Theories of Agricultural Origins</h2>
          <p>
            Four major theories try to explain why agriculture began. Each blames a different cause:
            climate, geography, population, or social ambition. No single one explains every region,
            so knowing all four lets you weigh any new evidence against the best fit.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Oasis Theory (Childe, 1930s)</strong>
              <p>
                Climate change dried out the Middle East at the end of the Ice Age. Humans, animals,
                and plants crowded around the surviving oases, and that close contact led to
                domestication.
              </p>
              <p>
                <em>Problem:</em> Later climate evidence shows no widespread drying in Southwest
                Asia at the right time. The drought the theory needs did not happen.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Hilly Flanks Theory (Braidwood, 1950s)</strong>
              <p>
                Agriculture began in the natural home range of wild cereals and herd animals: the
                Hilly Flanks of the Fertile Crescent. People started farming once they were
                culturally ready to use what was already around them.
              </p>
              <p>
                <em>Problem:</em> It does not explain why that readiness arrived around 11,000 years
                ago and not 30,000 years earlier.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Demographic Theory (Binford, 1968)</strong>
              <p>
                Population growth pushed people out of the best resource zones. Groups stuck in
                marginal land had to intensify food production, and cultivation was the way to feed
                more mouths.
              </p>
              <p>
                <em>Problem:</em> Agriculture also appeared in regions that show no sign of crowding
                before it began.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Feasting Theory (Hayden, 1990s)</strong>
              <p>
                Competitive feasting drove domestication. Ambitious people grew and herded surplus
                food to host feasts, and feasts built social power. Prestige foods like beer and
                meat were targeted first.
              </p>
              <p>
                <em>Evidence:</em> Göbekli Tepe shows large-scale feasting before farming, and Abu
                Hureyra fits the same pattern.
              </p>
            </div>
          </div>
          <p>
            Most archaeologists now accept that no single cause is enough. Climate change,
            population pressure, social ambition, and cultural change worked together, and the
            balance was different in each region.
          </p>
          <div className="lrn-self-explain">
            <strong>Self-explain:</strong> Walk through why the Oasis Theory failed. State the
            climate evidence step by step. Then state the single fact that broke the theory and
            forced archaeologists to look for new explanations.
          </div>
        </>,

        <>
          <h2>Southwest Asia: The Fertile Crescent</h2>
          <p>
            Agriculture arose independently in at least seven regions worldwide. Southwest Asia was
            the earliest and most influential center.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Map_of_fertile_crescent.svg"
              alt="Map showing the Fertile Crescent region of Southwest Asia, the arc of productive land stretching from the Levant through Mesopotamia"
              loading="lazy"
            />
            <figcaption>
              The Fertile Crescent. This arc of productive land stretches from the Levant coast
              through the Zagros foothills. Wild ancestors of wheat, barley, sheep, goat, cattle,
              and pig all lived here (Wikimedia Commons, CC BY-SA).
            </figcaption>
          </figure>
          <p>
            No other region on Earth packed as many domesticable species into one landscape. The
            wild ancestors of sheep, goat, pig, and cattle all lived alongside dense stands of wild
            wheat, barley, and pulses. The eight crops that farmers eventually pulled from this
            region are known as the <strong>Neolithic founder crops</strong>: emmer wheat, einkorn
            wheat, barley, lentil, pea, bitter vetch, chickpea, and flax. They spread together as a
            package across Eurasia and North Africa.
          </p>
          <div className="lrn-callout">
            <strong>WHY SOUTHWEST ASIA FIRST?</strong>
            <p>
              The region had the highest concentration of domesticable plants and animals on Earth.
              Wild cereals grew in dense stands. A single family could harvest a year of grain in
              just three weeks.
            </p>
          </div>
          <div className="lrn-predict">
            <strong>Predict:</strong> The Fertile Crescent held the wild ancestors of wheat, barley,
            sheep, goat, cattle, and pig all in one region. Predict what would have happened to the
            timing of agriculture if those species had each grown on a different continent, isolated
            from each other.
          </div>
        </>,

        <>
          <h2>The Natufians: The First Sedentary Foragers</h2>
          <p>
            The Natufian culture lived in the Levant from 15,000 to 11,600 years ago. They were
            still foragers, but they were the first people anywhere to settle in one place
            year-round.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Dagon_Museum%2C_Mortars_from_Natufian_Culture%2C_Grinding_stones_from_Neolithic_pre-pottery_phase.JPG"
              alt="Natufian stone mortars and grinding stones used to process wild plant foods, displayed at the Dagon Museum"
              loading="lazy"
            />
            <figcaption>
              Natufian stone mortars and grinding tools from the Levant. They processed large
              amounts of wild grain without domesticating it. Dagon Museum (CC BY-SA 3.0).
            </figcaption>
          </figure>
          <ul className="lrn-list">
            <li>
              <strong>Key sites:</strong> Eynan (Ain Mallaha), el Wad, Hilazon Tachtit, Kharaneh IV
            </li>
            <li>
              <strong>Evidence of sedentism:</strong> Substantial stone-founded houses, large
              communal storage pits, burials with grave goods, faunal remains showing year-round
              occupation
            </li>
            <li>
              <strong>Intensive harvesting:</strong> Sickles with cereal-plant silica gloss show
              large-scale harvesting of wild cereals
            </li>
            <li>
              <strong>Social complexity:</strong> Hilazon Tachtit yielded a shaman burial with
              tortoise shells, eagle parts, and a severed human foot, suggesting ritual specialists
            </li>
            <li>
              <strong>Response to the Younger Dryas:</strong> When cold returned, many Natufian
              groups became mobile again; others intensified cultivation to maintain their sedentary
              lifestyle
            </li>
          </ul>
          <p>
            The Natufians show that sedentism came before farming. You do not need agriculture to
            settle down. You need rich enough local resources.
          </p>
          <div className="lrn-self-explain">
            <strong>Self-explain:</strong> The Natufian site of Hilazon Tachtit contained a burial
            with 50 tortoise shells, eagle parts, a boar foreleg, and a human foot. Walk through
            what each item suggests about this person's social role. Why does this matter for our
            understanding of pre-agricultural societies?
          </div>
        </>,

        <>
          <h2>Abu Hureyra: The Transition Observed</h2>
          <p>
            Abu Hureyra in Syria is one of the most important sites in the world for understanding
            the start of farming. Excavations caught a community in the act of switching from
            foraging to agriculture.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <strong>Abu Hureyra I (c. 13,000 to 10,000 years ago)</strong>
              <p>
                A small forager village. People harvested at least 192 species of wild plants,
                including einkorn, rye, and lentils. They hunted gazelle intensively. No
                domesticated crops.
              </p>
            </div>
            <div className="lrn-step">
              <strong>The Younger Dryas Gap (c. 10,800 years ago)</strong>
              <p>
                Wild plant diversity in the botanical record collapses. Dryland species replace
                forest species. The site may have been abandoned temporarily or the diet narrowed
                severely.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Abu Hureyra II (c. 10,000 to 8,000 years ago)</strong>
              <p>
                A much larger farming community reoccupies the site, eventually 5,000 to 6,000
                people. Domesticated rye, emmer wheat, einkorn, lentil, and chickpea appear. Gazelle
                hunting continues, but domesticated sheep and goat replace it over time.
              </p>
            </div>
          </div>
          <p>
            The bones of Abu Hureyra II women show extreme arthritis in their toes, knees, and lower
            backs. The cause was kneeling for hours daily to grind grain. Early farming was
            physically brutal.
          </p>
          <div className="lrn-self-explain">
            <strong>Self-explain:</strong> Abu Hureyra I gathered 192 wild plant species. After the
            Younger Dryas, Abu Hureyra II concentrated on a handful of domesticated species. Walk
            through how losing biodiversity can paradoxically be a step toward agricultural
            efficiency. What did the community gain and lose?
          </div>
        </>,

        <>
          <h2>The Early Aceramic Neolithic: New Permanent Villages</h2>
          <p>
            The Pre-Pottery Neolithic A (PPNA, 11,600 to 10,500 years ago) is the first phase of
            settled farming life in the Levant. People built permanent villages and grew crops, but
            had not yet invented pottery, so they stored food in baskets, pits, and stone vessels
            instead.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Jericho</strong> (Jordan Valley): One of the earliest walled settlements. A
              massive stone tower 8 meters tall was built around 10,000 years ago. Its purpose is
              debated: defense, flood protection, or a monument.
            </li>
            <li>
              <strong>Jerf el Ahmar</strong> (Syria): Large communal buildings used for storage and
              possibly feasting. Shows community-level cooperation and resource pooling.
            </li>
            <li>
              <strong>Wadi Feynan 16</strong> (Jordan): Evidence of communal feasting on a massive
              scale. Thousands of gazelle bones from a single event suggest large community
              gatherings before full agriculture.
            </li>
          </ul>
          <p>
            PPNA communities cultivated cereals but relied heavily on hunted gazelle. Full
            dependence on domesticated animals came in the following period.
          </p>
          <div className="lrn-predict">
            <strong>Predict:</strong> Jericho's PPNA stone tower stood 8 meters tall and was built
            on the inside of the village wall, not the outside. If a tower were truly defensive,
            where would you expect it to stand? What does this placement suggest about Jericho's
            purpose?
          </div>
        </>,

        <>
          <h2>Göbekli Tepe: Ritual Before Farming</h2>
          <p>
            Göbekli Tepe in southeast Turkey (c. 11,600 to 10,200 years ago) overturned a key
            assumption about prehistory. Archaeologists had assumed that agriculture came first,
            then monumental architecture. Göbekli Tepe shows the opposite.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/G%C3%B6bekli_Tepe%2C_Urfa.jpg"
              alt="Aerial view of the Göbekli Tepe mound in southeast Turkey, showing the archaeological excavation site"
              loading="lazy"
            />
            <figcaption>
              Göbekli Tepe mound, southeast Turkey. The site was built by foragers before
              agriculture began in the region (CC BY-SA 3.0).
            </figcaption>
          </figure>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Vulture_Stone%2C_Gobekli_Tepe%2C_Sanliurfa%2C_South-east_Anatolia%2C_Turkey.jpg"
              alt="The Vulture Stone at Göbekli Tepe showing carved reliefs of vultures and headless human figures"
              loading="lazy"
            />
            <figcaption>
              The Vulture Stone at Göbekli Tepe. T-shaped limestone pillars up to 5.5 meters tall
              are carved with animals including foxes, snakes, boars, and birds. No crops or
              domesticated animals are depicted (CC BY-SA 2.0).
            </figcaption>
          </figure>
          <ul className="lrn-list">
            <li>Huge T-shaped limestone pillars up to 5.5 meters tall and 10 tons each</li>
            <li>At least 20 circular enclosures, only 4 fully excavated</li>
            <li>Carvings of foxes, snakes, boars, cranes, vultures, and human-like figures</li>
            <li>
              Massive quantities of gazelle, aurochs, and wild ass bones from feasting gatherings
            </li>
            <li>No evidence of houses or permanent habitation at the site itself</li>
          </ul>
          <p>
            Building Göbekli Tepe required organizing hundreds of people. Feeding those workers may
            have driven more intensive plant cultivation nearby. The site supports the feasting
            theory of agricultural origins.
          </p>
          <div className="lrn-callout">
            <strong>THE REVERSAL</strong>
            <p>
              The old story ran from farming to settlements to monuments. Göbekli Tepe flips it:
              ritual gatherings came first, and the need to feed the people who built and attended
              them may have been what pushed local communities toward intensive cultivation.
            </p>
          </div>
          <div className="lrn-self-explain">
            <strong>Self-explain:</strong> Each pillar at Göbekli Tepe weighed up to 10 tons.
            Quarrying, moving, carving, and erecting them took hundreds of workers. Step through
            what those workers would have needed to eat and how feeding them might have changed
            local plant management.
          </div>
          <div className="lrn-elaborate">
            <strong>Elaborate:</strong> In your own words, explain why Göbekli Tepe is considered
            evidence for the Feasting Theory of agricultural origins. Connect the animal bone
            evidence (gazelle, aurochs, wild ass) to Brian Hayden's argument.
          </div>
        </>,

        <>
          <h2>The Later Aceramic Neolithic: Full Farming Economies</h2>
          <p>
            The Pre-Pottery Neolithic B (PPNB, c. 10,500 to 8,500 years ago) saw full farming
            economies with domesticated crops and animals spread across Southwest Asia.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Çatalhöyük</strong> (Turkey): A mega-village of up to 8,000 people. Mud-brick
              houses packed together with no streets; people entered through roof holes. Walls were
              plastered and painted with hunting scenes. Wild bull skulls were mounted inside
              houses. People buried their dead under house floors.
            </li>
            <li>
              <strong>Ain Ghazal</strong> (Jordan): One of the largest PPNB sites (up to 3,000
              people). Famous for 32 plaster statues of humans, the largest cache of Neolithic
              statuary ever found.
            </li>
            <li>
              <strong>Çayönü and Nevalı Çori</strong> (Turkey): Show a gradual transition from
              communal buildings to family-level houses, reflecting rising household independence.
            </li>
            <li>
              <strong>Kfar HaHoresh</strong> (Israel): A mortuary and ritual site with no evidence
              of permanent habitation, where communities from multiple villages buried their dead
              together.
            </li>
          </ul>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/%C3%87atalh%C3%B6y%C3%BCk_overview.jpg"
              alt="Overview of the Çatalhöyük excavation site in central Turkey showing the densely packed Neolithic mud-brick houses"
              loading="lazy"
            />
            <figcaption>
              Çatalhöyük, central Turkey. Houses had no doors at ground level; people walked across
              rooftops to enter through holes overhead (CC BY 2.0).
            </figcaption>
          </figure>
          <div className="lrn-insight">
            PPNB communities spread rapidly. By 9,500 years ago, the PPNB interaction sphere covered
            an area larger than Western Europe, sharing tool types, burial practices, and building
            techniques across hundreds of kilometers.
          </div>
          <div className="lrn-self-explain">
            <strong>Self-explain:</strong> Çatalhöyük houses had no streets and no ground-level
            doors. Residents climbed across rooftops and entered through holes. Explain step by step
            what this packed layout tells you about social relationships, defense, and the
            relationship between the household and the larger community.
          </div>
        </>,

        <>
          <h2>The Domestication of the Dog</h2>
          <p>
            Dogs were the first domesticated animal. They split from wolves at least 15,000 years
            ago, and possibly much earlier, which puts dog domestication thousands of years before
            any crop or livestock. That timing matters: domestication did not need farming, and
            foragers did the work.
          </p>
          <p>
            The exact location is still debated. DNA points to one domestication event, or possibly
            two, somewhere across a broad zone that includes East Asia and western Eurasia.
          </p>
          <ul className="lrn-list">
            <li>Dogs assisted hunters by tracking, chasing, and retrieving prey.</li>
            <li>Dogs guarded camps from predators and rival groups.</li>
            <li>In some cultures, dogs were eaten as food.</li>
            <li>
              Dogs were companions. Natufian burials include a person buried with a hand resting on
              a puppy, one of the earliest known human-animal bonds.
            </li>
            <li>
              At Bonn-Oberkassel in Germany, a 14,000-year-old grave held a dog buried with two
              humans, one of the earliest known cases of a dog included in a human funeral.
            </li>
          </ul>
          <div className="lrn-predict">
            <strong>Predict:</strong> If dogs were first domesticated by hunter-gatherers and not by
            farmers, what does that tell you about the order of changes in early human societies?
            Predict what role dogs played before agriculture made them useful for herding.
          </div>
        </>,

        <>
          <h2>East Asia: Millet in the Yellow River Valley</h2>
          <p>
            Farming in East Asia began on its own, with no help from the Fertile Crescent. Two
            separate centers grew up inside China: millet farming in the north along the Yellow
            River, and rice farming in the south along the Yangzi. They invented agriculture twice
            over, from different wild plants, in different climates.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/A_closeup_of_Thinai_millet_with_husk..JPG"
              alt="Foxtail millet plant showing the characteristic seed head with husk, one of the first domesticated crops in northern China"
              loading="lazy"
            />
            <figcaption>
              Foxtail millet. This was one of the first domesticated crops in northern China. Wild
              millet grew abundantly in the Yellow River Valley loess soils (Wikimedia Commons).
            </figcaption>
          </figure>
          <p>
            Northern China millet farming developed in the Yellow River (Huang He) and Wei River
            valleys beginning around 10,000 to 9,000 years ago.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <strong>Early forager sites (c. 23,000 to 10,000 years ago)</strong>
              <p>
                Shizitan, Nanzhuangtou, Donghulin, and Lijiagou show intensive use of wild millet
                with grinding stones. These communities were harvesting wild millet long before
                domestication.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Early farming villages (c. 9,000 to 7,000 years ago)</strong>
              <p>
                Peiligang and Cishan cultures show full agricultural villages with domesticated
                foxtail millet and broomcorn millet, along with pigs and dogs. Storage pits at
                Cishan held up to 50,000 kilograms of millet.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Yangshao culture (c. 7,000 to 5,000 years ago)</strong>
              <p>
                Large planned villages like Jiangzhai held up to 500 people. Houses were arranged
                around a central plaza. Xipo was even larger. Painted pottery with geometric designs
                marks this period.
              </p>
            </div>
          </div>
          <p>
            Later cultures include Dawenkou (with elaborate burials showing social inequality) and
            Dadiwan (with very early clay vessels predating full agriculture).
          </p>
          <div className="lrn-elaborate">
            <strong>Elaborate:</strong> Explain in your own words why Cishan's 50,000 kilogram grain
            pits matter for understanding early Chinese society. Connect storage capacity to
            population size, social cooperation, and the option to specialize in non-farming work.
          </div>
        </>,

        <>
          <h2>Jiahu: Music, Ritual, and Early Rice in the Huai Valley</h2>
          <p>
            Jiahu sits on a 5.5-hectare patch of central China, near a lake and two rivers in the
            upper Huai valley. It was occupied from roughly 9,000 to 7,500 years ago, between the
            mobile hunter-gatherer past and the later Yangshao villages. What makes Jiahu
            extraordinary is that this early farming community already had specialist musicians,
            ritual objects, and long-distance contacts, all attached to a still-mixed economy of
            rice, hunting, and fishing.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Mixed economy:</strong> The community supplemented wild deer, muntjac, pig,
              and fish with cultivated rice. Cooking vessels, grinding stones, spades, and axes show
              cultivation was practiced.
            </li>
            <li>
              <strong>Bird-bone flutes:</strong> Music was significant. Bird-bone flutes were
              occasionally buried in human graves, the earliest known playable musical instruments.
            </li>
            <li>
              <strong>Turtle-shell rattles:</strong> Some graves contained turtle skeletons holding
              pebbles, probably used as rattles. Turtle bones bore incised symbols that resemble
              later Shang dynasty divination marks.
            </li>
            <li>
              <strong>Egalitarian early phase:</strong> 396 human burials revealed an absence of
              major social ranking in early phases. Differentiation emerged only in later
              occupations.
            </li>
            <li>
              <strong>Long-distance contact:</strong> Some women came from a different environment,
              and stone was brought from 100 km away.
            </li>
          </ul>
          <div className="lrn-self-explain">
            <strong>Self-explain:</strong> Explain why finding flutes and ritual objects at an early
            farming village changes how we think about Neolithic life. Walk through what music,
            ritual specialists, and divination tools tell you about the community's social
            complexity.
          </div>
        </>,

        <>
          <h2>East Asia: Rice in the Yangzi River Valley</h2>
          <p>
            Rice agriculture developed independently in the Yangzi River Valley of central and
            southern China. The evidence pushes rice cultivation back to at least 10,000 years ago.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <strong>Earliest evidence (c. 20,000 to 10,000 years ago)</strong>
              <p>
                Yuchanyan cave yielded pottery dated to around 20,000 years ago alongside wild rice.
                Diaotonghuan and Xianrendong caves (c. 12,000 to 9,000 years ago) show a gradual
                shift from wild to domesticated rice.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Early farming villages (c. 9,000 to 7,000 years ago)</strong>
              <p>
                Shangshan and Baligang show domesticated rice cultivation. Communities lived in
                permanent villages but still fished, hunted, and gathered heavily.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Kuahuqiao and Tianluoshan (c. 7,000 to 6,000 years ago)</strong>
              <p>
                Full wetland rice agriculture in the Yangzi delta. Dug-out canoes, paddles, and fish
                weirs show that these communities intensively managed both land and water resources.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Hemudu culture (c. 7,000 to 5,000 years ago)</strong>
              <p>
                Houses built on stilts over waterlogged ground. Lacquerware already produced. Rice
                was so abundant that thick deposits of rice husks formed at the site.
              </p>
            </div>
          </div>
          <p>
            Later cultures (Daxi, Chengtoushan, Qujialing, Majiabang, and Songze) built on this
            base, growing more populous and more socially layered as rice and fish carried them
            forward.
          </p>
          <div className="lrn-insight">
            Northern China millet farmers became sedentary quickly because millet could be stored
            easily. Rice farmers in the south remained more mobile for longer because wetland rice
            required seasonal movement to manage fields and fishing grounds.
          </div>
          <div className="lrn-predict">
            <strong>Predict:</strong> Yangzi rice farmers built stilt houses, dugout canoes, and
            fish weirs alongside their paddies. Predict how this mixed economy of fish plus rice
            would shape population growth compared with a pure dryland grain farming village.
          </div>
        </>,

        <>
          <h2>The Jomon: Sedentism Without Agriculture</h2>
          <p>
            Japan's Jomon culture (c. 16,000 to 3,000 years ago) shows that sedentism and social
            complexity are possible without farming. Jomon people lived in semi-permanent villages,
            made elaborate pottery, and built large ritual structures.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9f/JomonPottery.JPG"
              alt="Jomon cord-marked pottery vessel with flame-shaped decorations, an example of early Japanese ceramics"
              loading="lazy"
            />
            <figcaption>
              Jomon cord-marked pottery. Jomon people produced some of the world's oldest pottery
              (dated to c. 16,000 years ago) while remaining foragers (public domain).
            </figcaption>
          </figure>
          <ul className="lrn-list">
            <li>
              Jomon pottery (c. 16,000 years ago) is among the world's oldest. It was used to boil
              shellfish and process nuts, not to store grain.
            </li>
            <li>
              Sannai-Maruyama (c. 5,900 to 4,200 years ago) was a large Jomon village with buildings
              on massive wooden posts, showing long-term planning and investment.
            </li>
            <li>
              Jomon people managed their environment: transplanting useful plants, burning to
              encourage nut trees, maintaining productive shellfish beds.
            </li>
            <li>
              Agriculture arrived in Japan via the Yayoi culture (c. 2,400 years ago), bringing wet
              rice farming from the Korean peninsula. Yoshinogari is a large Yayoi moated settlement
              showing a rapid and contentious transition.
            </li>
          </ul>
          <div className="lrn-self-explain">
            <strong>Self-explain:</strong> The Jomon had pottery 13,000 years before they had
            farming. Walk through what this delay tells you about the relationship between
            technology and agriculture. Why did Jomon people stay foragers for so long?
          </div>
        </>,

        <>
          <h2>The Spread of Agriculture</h2>
          <p>
            Agriculture spread from its centers of origin in two ways: by farmers migrating into new
            areas (demic diffusion) and by local foragers adopting farming practices from their
            neighbors (cultural diffusion). Both happened, often in combination.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Centres_of_origin_and_spread_of_agriculture.svg"
              alt="World map showing independent centers of agricultural origin and the directions of spread, including Southwest Asia, East Asia, Sub-Saharan Africa, and the Americas"
              loading="lazy"
            />
            <figcaption>
              Centers of agricultural origin and spread. Agriculture arose independently in at least
              seven locations. Arrows show main directions of spread (CC BY-SA 3.0, Joe Roe,
              Wikimedia Commons).
            </figcaption>
          </figure>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Demic Diffusion</strong>
              <p>
                Farming populations grew faster than forager populations. Farmers gradually expanded
                into neighboring territories, replacing or absorbing forager groups. DNA evidence
                confirms this happened in Europe: Anatolian farmers largely replaced European
                hunter-gatherers.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Cultural Diffusion</strong>
              <p>
                Some forager groups adopted farming techniques without being replaced. They traded
                for crops, learned techniques from neighbors, and gradually shifted their economy.
                This was more common where the forager population was dense or the environment
                favored existing lifestyles.
              </p>
            </div>
          </div>
          <p>
            From Southwest Asia, farming spread west into Europe and east toward Central Asia. From
            China, rice and millet pushed south into Southeast Asia. Crops traveled with the people
            who grew them, so the language families that expanded with farming, such as Austronesian
            and Indo-European, often trace the same paths as the crops themselves.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Southeast Asia</strong> (c. 4,000 to 3,000 years ago): Phung Nguyen (Vietnam),
              Ban Chiang (Thailand), Man Bac (Vietnam), Ban Non Wat (Thailand), An Son (Cambodia),
              and Khok Phanom Di all show the arrival of rice farming from China.
            </li>
            <li>
              <strong>Korea</strong>: The Chulmun forager culture persisted for thousands of years
              before rice farming from China arrived.
            </li>
            <li>
              <strong>Japan</strong>: The Yayoi culture (c. 2,400 years ago) brought wet rice
              farming. Genetics show a significant influx of farmers from the Korean peninsula
              mixing with existing Jomon populations.
            </li>
          </ul>
          <div className="lrn-predict">
            <strong>Predict:</strong> If farming populations always grow faster than foragers, then
            over enough time, what will demic diffusion do to forager genetic ancestry in any region
            farmers invade? Predict what ancient DNA studies should find, then check the European
            evidence.
          </div>
        </>,

        <>
          <h2>Consequences of Agriculture: Settlement and Population</h2>
          <p>
            Agriculture changed human life more than any other development since the control of
            fire. The consequences were enormous, many of them negative in the short term.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Population growth:</strong> Farming produced more calories per hectare than
              foraging. More food supported more people. Global population grew from around 6
              million at 10,000 years ago to 250 million by 1 CE.
            </li>
            <li>
              <strong>Permanent settlements:</strong> Farming tied people to fields. You cannot
              leave your crops unattended for months. Permanent villages and eventually towns became
              the norm.
            </li>
            <li>
              <strong>Food storage:</strong> Grain stores were a revolutionary technology. Stored
              food enabled populations to survive lean seasons and freed some people from food
              production entirely.
            </li>
          </ul>
          <div className="lrn-callout">
            <strong>THE TRADE-OFF</strong>
            <p>
              Farmers ate fewer species than foragers. This made diets less nutritious and more
              vulnerable to crop failure. Average height decreased when groups shifted to
              agriculture. Skeletal evidence shows more anemia, dental cavities, and nutritional
              stress in early farming communities than in forager communities.
            </p>
          </div>
          <div className="lrn-elaborate">
            <strong>Elaborate:</strong> Global population grew from about 6 million to 250 million
            in roughly 10,000 years after agriculture began. Explain in your own words why this
            growth happened despite each individual farmer being less healthy. Connect calories per
            hectare to group competition.
          </div>
        </>,

        <>
          <h2>Consequences of Agriculture: Social Complexity</h2>
          <p>
            Persistent inequality is not a permanent feature of human life. It shows up in the
            archaeological record alongside stored surplus, owned land, and extractable wealth, and
            once it appears it tends to harden across generations. That is why ancient burials after
            agriculture begin to look so different from forager burials.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Specialization:</strong> Stored food freed some people from growing food.
              Potters, weavers, smiths, priests, and warriors emerged as specialists.
            </li>
            <li>
              <strong>Hereditary inequality:</strong> Dawenkou burials in China show some
              individuals buried with dozens of grave goods and others with none. Burial inequality
              reflects social inequality in life.
            </li>
            <li>
              <strong>Trade networks:</strong> Obsidian from Anatolia moved hundreds of kilometers
              across the PPNB interaction sphere. Specialized production and long-distance exchange
              emerged together.
            </li>
            <li>
              <strong>Religious specialists:</strong> The Natufian shaman burial, the Göbekli Tepe
              enclosures, and the Ain Ghazal plaster statues (already met in earlier sections) show
              that ritual leaders with elevated status existed before, during, and after the shift
              to farming.
            </li>
          </ul>
          <div className="lrn-predict">
            <strong>Predict:</strong> Imagine an archaeologist excavates a 6,000-year-old cemetery
            and finds that 5 percent of burials have rich grave goods while 95 percent have none.
            Predict what this tells you about the society. Compare with a forager cemetery where
            burials are mostly similar.
          </div>
        </>,

        <>
          <h2>Consequences of Agriculture: Health and Disease</h2>
          <p>
            Early farmers were, on average, less healthy than the foragers they replaced. The
            archaeological evidence is clear.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Shorter stature:</strong> Farming populations shrank in average height
              compared to preceding foragers. Reduced dietary diversity reduced protein intake.
            </li>
            <li>
              <strong>More dental disease:</strong> Starchy cereal diets caused more cavities and
              gum disease than diverse forager diets.
            </li>
            <li>
              <strong>Infectious disease:</strong> Dense, permanent settlements with animals nearby
              created ideal conditions for new infectious diseases. Measles, smallpox, flu, and
              plague all emerged from or were amplified by proximity to domesticated animals.
            </li>
            <li>
              <strong>Repetitive strain injuries:</strong> Grinding grain by hand, a task usually
              done by women, wore down knees, toes, and lower backs. The skeletons from Abu Hureyra
              II are the textbook case.
            </li>
          </ul>
          <div className="lrn-insight">
            Why did farming spread if it made people less healthy? More people survived per hectare.
            Even if each person was less healthy, the group outcompeted forager neighbors through
            sheer numbers. Population growth, not individual health, drove the spread.
          </div>
          <div className="lrn-elaborate">
            <strong>Elaborate:</strong> Smallpox, measles, flu, and tuberculosis all jumped to
            humans from domesticated animals. Explain in your own words why dense farming villages
            with livestock are evolutionary hotspots for new diseases that never affected forager
            bands.
          </div>
        </>,

        <>
          <h2>Consequences of Agriculture: Warfare and Inequality</h2>
          <p>
            Farming created things worth fighting over: land, stored food, and livestock. Evidence
            for organized violence increases sharply after agriculture begins.
          </p>
          <ul className="lrn-list">
            <li>
              Jericho's wall and tower (described earlier in the PPNA section) may be the earliest
              defensive architecture in the world, though its purpose is still disputed.
            </li>
            <li>PPNB sites show violent deaths: skulls with weapon trauma, decapitated burials.</li>
            <li>
              Tell Sabi Abyad I in Syria (c. 7,200 years ago) was burned down, abandoned, then
              reoccupied, a pattern that points to raiding or conquest rather than accident.
            </li>
            <li>
              Inequality rose with farming. Owning land, owning animals, and controlling stored
              grain created differences in wealth that lasted between households and between
              villages.
            </li>
          </ul>
          <p>
            This does not mean pre-agricultural societies were peaceful. But farming gave violence
            new targets and new tools, including fortified settlements and organized raiding
            parties.
          </p>
          <p>
            The Talheim death pit in Germany, dating to about 7,000 years ago, contains the
            skeletons of 34 farmers. Attackers killed them with blows to the skull and arrows in the
            back. Men, women, and children died together and ended up in the same pit. It is one of
            the earliest direct records of an organized massacre between European farming
            communities.
          </p>
          <div className="lrn-self-explain">
            <strong>Self-explain:</strong> Explain step by step why violence escalated after
            agriculture. Walk through what farmers owned that foragers did not. Then connect
            ownership of land and stored grain to motives for raiding.
          </div>
        </>,

        <>
          <h2>Agricultural Intensification: Irrigation, Plowing, Terracing</h2>
          <p>
            Over millennia, farming became more intensive. Communities found ways to grow more food
            from the same land or extend agriculture into new environments.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <strong>Irrigation</strong>
              <p>
                Channeling water from rivers to fields allowed farming in dry lowlands. Irrigation
                began in Mesopotamia and Egypt around 6,000 to 5,000 years ago. It dramatically
                increased yields but required large cooperative labor to build and maintain canals.
                This need for coordination pushed the development of more complex governance.
              </p>
            </div>
            <div className="lrn-step">
              <strong>The Plow</strong>
              <p>
                Animal-drawn plows replaced digging sticks around 5,000 to 6,000 years ago in
                Southwest Asia. Plows broke up hard soils more quickly and allowed farming on
                heavier soils that were impossible with earlier tools. Plow agriculture is strongly
                associated with male agricultural labor in ethnographic records.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Terracing</strong>
              <p>
                Cutting horizontal platforms into hillsides held soil and water on steep slopes.
                Terracing extended agriculture into mountain environments and reduced erosion.
                Large-scale terracing required community organization to build and maintain.
              </p>
            </div>
          </div>
          <div className="lrn-callout">
            <strong>THE THREE SISTERS (NEW WORLD)</strong>
            <p>
              Mesoamerican farmers developed one of the world's most productive intercropping
              systems: maize, beans, and squash planted together. Maize provides structure, beans
              fix nitrogen from the air to feed all three plants, and squash shades the ground to
              retain moisture. The three crops together produce a nearly complete diet.
            </p>
          </div>
          <div className="lrn-predict">
            <strong>Predict:</strong> Irrigation canals need many people working together to dig and
            clean them every year. Predict how this yearly cooperation pushes a village toward a
            single boss or council, rather than each family acting alone.
          </div>
        </>,

        <>
          <h2>The Rise of Cities and States</h2>
          <p>
            Cities and states did not come bundled with farming. Thousands of years separate the
            first PPNB villages from the first cities in Mesopotamia. What agriculture supplied was
            the precondition: stored grain, specialists who did not have to till the soil, and
            people packed densely enough that someone had to keep order between them.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>City</strong>
              <p>
                A large, dense, permanent settlement with a non-farming majority. Cities require
                agricultural surpluses large enough to feed many people who grow no food themselves.
                The first cities appeared in Mesopotamia around 5,500 years ago.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>State</strong>
              <p>
                A political unit with a centralized government, a monopoly on legitimate force, and
                the ability to tax and conscript. States require record-keeping, which contributed
                to the invention of writing. The first states also appeared in Mesopotamia.
              </p>
            </div>
          </div>
          <ul className="lrn-list">
            <li>
              Irrigation-based agriculture in Mesopotamian lowlands required large-scale
              coordination, which favored centralized authority.
            </li>
            <li>
              Storage and redistribution of grain required record-keeping. The earliest writing
              (Sumerian cuneiform) was accounting, not literature.
            </li>
            <li>
              Specialists (smiths, priests, soldiers, administrators) required payment. Taxes and
              tribute systems emerged to support them.
            </li>
            <li>
              Cities concentrated wealth and power. They attracted more people, more trade, and more
              innovation.
            </li>
          </ul>
          <div className="lrn-insight">
            Many farming societies never produced cities at all. China's earliest cities trail
            Mesopotamia's by more than a thousand years, the Andes followed a different track, and
            North America's farming peoples mostly never urbanized. The lesson: farming sets the
            stage, but geography, river systems, and politics decide who actually puts cities on the
            map.
          </div>
          <div className="lrn-predict">
            <strong>Predict:</strong> Sumerian cuneiform began as accounting marks on clay tablets,
            not as poetry or religion. Predict why a state's first writing would be commercial
            records. What kind of information does a tax collector or grain-storage manager need to
            track that memory alone cannot handle?
          </div>
          <div className="lrn-elaborate">
            <strong>Elaborate:</strong> The hydraulic hypothesis claimed irrigation control built
            the first states. Field surveys in Mesopotamia later showed early irrigation systems
            were locally organized, not centrally controlled. Explain in your own words why this
            broke the hydraulic hypothesis as a single-cause explanation.
          </div>
        </>
      ]
    },

    practice: [
      // --- BASIC ---
      {
        q: 'What geological epoch began around 11,600 years ago when the Ice Age ended?',
        a: 'The Holocene. Temperatures stabilized after the Younger Dryas cold reversal ended. This warm, steady climate made agriculture possible. All farming, civilization, and recorded history happened in the Holocene.'
      },
      {
        q: 'What was the Younger Dryas?',
        a: 'A cold reversal between 12,900 and 11,600 years ago that briefly returned near-glacial conditions before the Holocene began.'
      },
      {
        q: 'What is the difference between cultivation and domestication?',
        a: 'Cultivation means tending plants without changing them genetically. Domestication is a biological change: the plant or animal evolves because humans select which individuals reproduce.'
      },
      {
        q: 'What does a non-shattering rachis mean, and why does it mark domestication?',
        a: 'A non-shattering rachis keeps seeds attached to the plant when ripe. Wild grasses drop seeds when ripe. Harvesting by sickle unintentionally selects for plants that keep their seeds, so this trait marks the start of domestication.'
      },
      {
        q: 'Name the eight Neolithic founder crops of Southwest Asia.',
        a: 'Emmer wheat, einkorn wheat, barley, lentil, pea, bitter vetch, chickpea, and flax. The three cereals provided carbohydrates. The four pulses (lentil, pea, bitter vetch, chickpea) supplied protein. Flax gave fiber for textiles and oil for cooking. These eight crops spread together as a package across Eurasia and Africa.'
      },
      {
        q: 'What is the Broad Spectrum Revolution?',
        a: 'The shift, starting around 20,000 years ago, toward harvesting a wider variety of foods: more plants, fish, shellfish, and small animals alongside large game.'
      },
      {
        q: 'What is the Oasis Theory of agricultural origins?',
        a: 'Gordon Childe proposed that post-glacial drying concentrated humans, animals, and plants around oases, leading to domestication through close contact.'
      },
      {
        q: 'What is the Hilly Flanks Theory?',
        a: 'Robert Braidwood proposed that agriculture began in the natural habitat zone of wild cereals and animals in the Fertile Crescent when people became culturally ready to exploit this potential.'
      },
      {
        q: 'What is the Demographic Theory of agricultural origins?',
        a: 'Lewis Binford argued that population growth pushed people into marginal zones where they had to intensify food production by cultivating plants to feed growing numbers.'
      },
      {
        q: 'What is the Feasting Theory?',
        a: 'Brian Hayden proposed that competitive feasting drove domestication. Ambitious individuals grew prestige foods like beer and meat to host feasts that built social power.'
      },
      {
        q: 'Who were the Natufians?',
        a: 'A forager culture in the Levant (c. 15,000 to 11,600 years ago) who were the first people to live in permanent settlements without being farmers. They intensively harvested wild cereals.'
      },
      {
        q: 'What does the Natufian burial at Hilazon Tachtit suggest?',
        a: 'A person was buried with tortoise shells, eagle parts, and a severed human foot, suggesting this was a ritual specialist (shaman) with elevated social status.'
      },
      {
        q: 'What happened at Abu Hureyra I?',
        a: 'Abu Hureyra I (c. 13,000 to 10,000 years ago) was a small forager village where people harvested at least 192 wild plant species and hunted gazelle. No domesticated crops.'
      },
      {
        q: 'What happened at Abu Hureyra II?',
        a: 'Abu Hureyra II (c. 10,000 to 8,000 years ago) was a large farming village of 5,000 to 6,000 people with domesticated rye, emmer, einkorn, lentil, and chickpea. Gazelle hunting was gradually replaced by domesticated sheep and goat.'
      },
      {
        q: 'What do the skeletal remains of Abu Hureyra II women show?',
        a: 'Extreme arthritis in the toes, knees, and lower backs from kneeling for hours daily to grind grain on quern stones. This is direct evidence that early farming was physically harder on individuals than foraging. The bones document how the daily labor of food processing wore down the people who fed the community.'
      },
      {
        q: 'What is the PPNA and when did it occur?',
        a: 'The Pre-Pottery Neolithic A (c. 11,600 to 10,500 years ago). The first period of permanent farming villages in Southwest Asia, before pottery was invented.'
      },
      {
        q: 'What is notable about Göbekli Tepe?',
        a: 'It is a monumental site built by foragers before agriculture in the region. T-shaped limestone pillars up to 5.5 meters tall were carved with animals. It overturns the idea that agriculture came before monumental architecture.'
      },
      {
        q: 'What is the PPNB and when did it occur?',
        a: 'The Pre-Pottery Neolithic B (c. 10,500 to 8,500 years ago). The period of full farming economies with domesticated crops and animals across Southwest Asia.'
      },
      {
        q: 'Describe Çatalhöyük.',
        a: 'A mega-village in Turkey with up to 8,000 people. Mud-brick houses packed together with no streets. Entry was through roof holes. Walls were painted with hunting scenes. Wild bull skulls were mounted inside. The dead were buried under house floors.'
      },
      {
        q: 'When were dogs domesticated, and what were the earliest dogs used for?',
        a: 'At least 15,000 years ago, making dogs the first domesticated animal. They assisted hunters by tracking and retrieving prey, guarded camps from predators and rivals, and acted as companions. The Bonn-Oberkassel grave in Germany dates a dog burial alongside two humans to 14,000 years ago, before any agriculture existed.'
      },
      {
        q: 'What were the two main crops of East Asian agriculture, and where did each originate?',
        a: 'Foxtail millet and broomcorn millet in the Yellow River Valley of northern China. Rice in the Yangzi River Valley of central and southern China.'
      },
      {
        q: 'What did the Cishan site contain that shows the scale of early millet farming?',
        a: 'Storage pits at Cishan held up to 50,000 kilograms of millet, showing large-scale production and storage. Such surpluses imply hundreds of people working coordinated fields. The settlement also yielded domestic pigs, dogs, and the stone spades and notched sickles that made millet farming possible.'
      },
      {
        q: 'What is the Yangshao culture and when did it occur?',
        a: 'A Chinese farming culture (c. 7,000 to 5,000 years ago) known for large planned villages like Jiangzhai and Xipo, and painted pottery with geometric designs.'
      },
      {
        q: 'What did Hemudu culture people build their houses on, and why?',
        a: 'Stilts above waterlogged ground. The Yangzi delta was very wet, and stilt houses kept living spaces dry. Hemudu people farmed wet rice in the surrounding marshes, hunted water buffalo, and fashioned wooden tools, lacquerware, and dug-out canoes. Thick deposits of rice husks at the site show how central rice had become.'
      },
      {
        q: 'What are the two ways agriculture spread from its centers of origin?',
        a: 'Demic diffusion (farmers migrated into new areas) and cultural diffusion (local foragers adopted farming from neighbors). Both happened, often together.'
      },
      {
        q: 'What does DNA evidence show about farming spread into Europe?',
        a: 'Anatolian farmers largely replaced European hunter-gatherers. This supports demic diffusion as the main mechanism of farming spread into Europe. Pre-farming European populations contributed only a small share to later genomes, especially in southern and central Europe. This is one of the clearest replacement signals in ancient DNA.'
      },
      {
        q: 'How did global population change after agriculture began?',
        a: "It grew from around 6 million at 10,000 years ago to 250 million by 1 CE, driven by agriculture's ability to produce more calories per hectare than foraging."
      },
      {
        q: 'How did early farming affect average human health?',
        a: 'Farming made most people less healthy. Average height decreased, dental cavities increased, infectious diseases rose, and repetitive strain injuries from grinding grain were common.'
      },
      {
        q: 'What is the difference between a city and a state?',
        a: 'A city is a large, dense, permanent settlement with a non-farming majority. A state is a political unit with centralized government, a monopoly on force, and the ability to tax and conscript.'
      },
      {
        q: 'What were the first examples of writing, and what was writing used for?',
        a: 'Sumerian cuneiform in Mesopotamia, around 5,500 years ago. The earliest writing was accounting records, used to track stored goods and taxes, not for literature.'
      },

      // --- TRANSFER ---
      {
        q: 'A community of foragers notices that a wild cereal they depend on is producing fewer seeds each year due to climate change. Using what you know about agricultural origins, describe two different responses they might have, and predict which would lead toward domestication.',
        a: 'They could move to follow food sources (nomadic response) or intensify management of the declining crop by replanting, weeding, and watering it. The second response would lead toward domestication, because repeatedly selecting and replanting would unconsciously favor non-shattering, larger-seeded types over generations.'
      },
      {
        q: "An archaeologist finds an animal bone assemblage at a 9,000-year-old site. The bones are all from young male sheep and old female sheep. No bones of young females or old males are present. What does this profile suggest about the community's relationship with these sheep?",
        a: 'This is a managed herd profile. Young males were killed for meat; females were kept alive longer for milk and breeding. Old males (no longer useful) are absent. This pattern indicates herding, not hunting of wild sheep.'
      },
      {
        q: 'Farming spread across Europe faster than local foragers could have adopted it through cultural diffusion alone. Ancient DNA from European skeletons shows a sharp break between pre-farming and farming populations. What does this evidence support?',
        a: 'It supports demic diffusion: Anatolian farming populations migrated into Europe and largely replaced existing hunter-gatherer populations. The genetic break shows replacement, not adoption.'
      },
      {
        q: 'A society grows rice in the Yangzi delta. They live in stilt houses, fish intensively, and only farm part-time. They are not fully agricultural. Explain why this mixed economy might persist for thousands of years before full agriculture takes over.',
        a: 'The delta provides abundant fish and wild plants that reduce the pressure to intensify farming. Full agriculture only becomes necessary when population grows large enough to exhaust these alternatives, or when social competition rewards food surpluses. Until then, a mixed economy is more stable and less labor-intensive.'
      },

      // --- ELABORATE ---
      {
        q: 'Early farming made individual people less healthy but made farming groups more successful than forager groups. Explain how both things can be true at the same time.',
        a: 'Farming produces more calories per hectare than foraging. Even though each farmer is shorter, more disease-prone, and works harder than a forager, the farming group can support far more people on the same land. More people means more warriors, more workers, and more ability to displace neighbors. Population size, not individual health, determined which groups expanded.'
      },
      {
        q: 'Explain why Göbekli Tepe challenges the standard model of how civilization develops.',
        a: 'The standard model says agriculture enables surpluses, surpluses enable specialization, and specialization enables monumental architecture. But Göbekli Tepe was built by foragers before agriculture in the region. This means large-scale social cooperation and monument building do not require farming. Social motivation (ritual, feasting, religion) may itself drive intensification and eventually agriculture, reversing the assumed sequence.'
      },
      {
        q: 'Why did seven independent centers of agricultural origin develop around the same time (roughly 10,000 to 5,000 years ago) rather than at random points in human history?',
        a: 'The Holocene provided the right conditions simultaneously worldwide: stable warm climate, expanded wild food resources, post-glacial population growth, and in some regions (like the Younger Dryas aftermath) environmental stress that pushed groups toward intensification. The global timing reflects global climate change, not independent coincidence.'
      },
      {
        q: 'A farming village has a good harvest. The community leader organizes a large feast and invites neighboring communities. Explain how this feast could, over generations, contribute to domestication of new crops.',
        a: 'To host repeated feasts, the leader needs reliable surpluses. This means investing more effort in growing specific high-yield or prestige crops (like brewing grain for beer). Consistent replanting of the best-performing plants unconsciously selects for domestication traits. The feasting motive drives intensification, which drives selection, which produces domesticated varieties. This is the Feasting Theory mechanism.'
      },
      {
        q: 'Smallpox, measles, flu, and tuberculosis all crossed into humans from domesticated animals. Explain why dense farming villages with livestock became hotspots for new diseases that never affected forager bands.',
        a: 'Dense villages put many humans close together for years on end. Livestock penned in or near the village shared parasites, manure, and breath with people daily. Pathogens that needed both a large host population and constant exposure could finally complete the jump from animal to human. Foragers moved often, lived in small groups, and rarely held animals long enough for this exchange. Three conditions had to combine: dense humans, kept animals, and permanent settlement. Farming villages provided all three at once.'
      },
      {
        q: 'Çayönü and Nevalı Çori show communal buildings being replaced by individual household storage rooms over a thousand years. Explain why this architectural shift signals the rise of private property and inequality.',
        a: 'Communal storage means shared risk and shared surplus. Everyone draws from the same pool, so no household can pull far ahead. Household storage means each family keeps its own grain, tools, and animals. Some households save more, inherit more, and grow richer than their neighbors. The walls between storage rooms are also walls between economic destinies. Over generations, small differences compound into entrenched class divides. The change in architecture quietly encodes a change in what a person is allowed to own and pass on.'
      },

      // --- PREDICT ---
      {
        q: 'A rice farming community in the Yangzi Valley settles permanently around 7,000 years ago. Predict what their community will look like after 2,000 years of continuous farming in the same location.',
        a: 'Over 2,000 years: population will grow significantly, requiring larger fields and more intensive cultivation. Social inequality will increase as some families control more land. Specialist roles (potters, tool makers, ritual leaders) will emerge. Trade with neighboring communities will expand. Some form of community-level governance will develop to manage shared irrigation and resolve conflicts. Burial goods will reflect widening status differences.'
      },
      {
        q: 'A forager group lives adjacent to a PPNB farming village. Predict what happens to the forager group over the next 500 years.',
        a: 'Most likely scenarios: the foragers adopt some farming practices while maintaining foraging (cultural diffusion); farming village population grows and expands into forager territory, reducing available wild resources; over time the forager group either adopts agriculture or retreats to marginal environments where farmers cannot follow. Complete continuation of the forager lifestyle is unlikely given competitive pressure from the faster-growing farming population.'
      },
      {
        q: 'A community starts irrigating its fields from a single river. Predict how the need to share that water will change village politics over the next ten generations.',
        a: 'Sharing one river forces coordinated work on canals and a fair split of water during dry years. At first, elders or family heads negotiate this directly. As fields multiply and disputes get harder to settle, the village will likely appoint a water steward or council. That role gains power because it controls who gets water and when. Over ten generations, this role can harden into a permanent office, with the right to demand labor for canal cleaning and to fine cheaters. Politics shift from informal kinship talk to a small ruling group backed by control of the water itself.'
      },
      {
        q: 'A Natufian camp in the Levant has been settled for 300 years before the Younger Dryas. Predict two different responses the residents might choose when the cold snap shrinks wild cereal stands, and which path leads toward agriculture.',
        a: 'Path one: pack up and follow scattered wild food, returning to mobile foraging. Path two: stay put and intensively manage the few remaining cereal stands by weeding, watering, and replanting saved seed. Path one preserves the old lifestyle but ends the sedentary investment. Path two protects houses, storage pits, and burial sites but pushes the community deeper into cultivation. Path two is the road to agriculture. Repeated replanting of saved seed unconsciously selects for non-shattering, larger-seeded plants, and within centuries those plants will be domesticated.'
      },

      // --- SELF-EXPLAIN ---
      {
        q: 'The Younger Dryas cold event caused the botanical record at Abu Hureyra to collapse. What does this collapse tell us about why farming may have started there?',
        a: 'Before the Younger Dryas, Abu Hureyra I residents could harvest 192 wild species. The cold event destroyed most of that diversity. With their primary food sources gone, the community either abandoned the site or began managing the few remaining species more intensively. This demonstrates that environmental stress reduced options and pushed people toward cultivation of specific plants they could control, rather than relying on wild abundance.'
      },
      {
        q: 'Sickle harvesting of wild cereals selects for non-shattering grain types. Explain the mechanism step by step.',
        a: 'Step 1: Wild cereal stems (rachis) are brittle. Most seeds fall before harvest. Step 2: A harvester with a sickle cuts plants that still have their seeds attached (non-shattering types), because shattering plants have already dropped their seeds. Step 3: The harvested seeds are stored and replanted next season. Step 4: The next generation has more plants with non-shattering rachis. Step 5: Repeated over hundreds of generations, this unconscious selection produces a domesticated cereal that never drops its seeds and requires human planting to reproduce.'
      },
      {
        q: 'The Jomon of Japan made pottery 16,000 years ago but did not become farmers until the Yayoi period, about 2,400 years ago. What does this 13,000-year gap tell us about the relationship between technology and agriculture?',
        a: "Technology alone does not drive agriculture. The Jomon had pottery (a food-processing technology) far earlier than farming but never needed to farm because their environment provided abundant seafood, nuts, and other wild foods. Agriculture is adopted when existing food systems become insufficient relative to population or social demand. The Jomon's rich coastal and forest environment kept foraging viable for tens of thousands of years."
      },
      {
        q: 'Çatalhöyük residents still hunted wild bulls and mounted their skulls inside houses long after they were full-time farmers. What does this tell us about the social role of hunting in an agricultural society?',
        a: 'Hunting wild bulls continued not because it was necessary for food (the community had domesticated cattle) but because it held cultural or ritual significance. Dangerous hunting demonstrated courage and status. The mounted skulls in houses functioned as trophies or ritual objects. This shows that when food production is secured, hunting can shift from a survival necessity to a prestige or ritual activity, maintaining social functions even as its economic role declines.'
      },

      // --- MORE TRANSFER CARDS ---
      {
        q: 'You find a 10,000-year-old monumental site with carved pillars, no houses, and huge piles of gazelle and wild aurochs bones. There is no evidence of domesticated plants or animals. Which theory of agricultural origins does this site best support, and why?',
        a: 'The Feasting Theory. Hayden argued that competitive feasting created the demand for surpluses, which led ambitious individuals to intensify food production. A monumental site with no houses and massive animal bone deposits looks exactly like a feasting ground, not a settlement. The fact that this construction predates agriculture in the region matches the Feasting Theory prediction that social motives precede food production change.'
      },
      {
        q: 'A skeleton from 8,000 years ago shows shorter stature and more dental cavities than a skeleton from 12,000 years ago at the same location. Both come from the same valley. What does this contrast tell you about the lifestyle shift between the two individuals?',
        a: 'The older skeleton belongs to a forager with a varied diet. The younger one belongs to an early farmer relying on a narrow set of starchy cereals. Shorter stature points to reduced protein. More cavities point to high-carbohydrate, processed grain diets. The contrast confirms the well-documented health trade-off: agricultural populations expanded numerically while becoming individually less robust.'
      },
      {
        q: 'A 7,000-year-old Chinese village contains a clay pit with hundreds of clay sealings stamped with personal symbols, but no writing yet. What kind of social activity does this evidence imply, and what comes next in the development sequence?',
        a: 'Stamped sealings imply ownership tracking: identifying who owns or controls a stored container or shipment. This is administrative behavior using non-textual signs, exactly as seen at Tell Sabi Abyad in Syria. The next step in such societies is full writing for accounts, which Mesopotamia took with cuneiform around 5,500 years ago. Stamped sealings are the bureaucratic precursor to true script.'
      },
      {
        q: 'A village transitions from communal storage buildings to individual household storage rooms over 1,000 years. What does this architectural shift predict about changes in social organization?',
        a: 'It predicts that the household, not the wider community, is becoming the main economic unit. Communal storage implies shared risk and shared surplus. Household storage implies private property and individual accumulation. Inequality usually rises with this shift, since some households store more than others. The shift was observed at Çayönü and Nevalı Çori in late aceramic Neolithic Turkey.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'From Foragers to Farmers: Origins of Agriculture',
      sections: [
        <>
          <h2>Key Terms Glossary</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Holocene</div>
            <div className="lrn-definition-desc">
              The geological epoch beginning around 11,600 years ago. All agriculture, cities, and
              written history occurred in the Holocene.
              <br />
              <em>When to use:</em> Use this to anchor any absolute date in prehistory.
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Domestication</div>
            <div className="lrn-definition-desc">
              A biological process where a plant or animal species changes genetically through human
              selection. The organism becomes dependent on humans to survive and reproduce.
              <br />
              <em>When to use:</em> Distinguish from cultivation (which does not require genetic
              change) and agriculture (the full economic system).
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Non-shattering rachis</div>
            <div className="lrn-definition-desc">
              The key morphological marker of domesticated cereals. Wild grains shatter and drop
              seeds when ripe. Domesticated grains hold seeds in place, allowing sickle harvesting
              but requiring human planting.
              <br />
              <em>When to use:</em> Use this trait to identify the moment of domestication in any
              cereal-bearing archaeological site.
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Broad Spectrum Revolution</div>
            <div className="lrn-definition-desc">
              The shift beginning around 20,000 years ago toward exploiting a wider range of food
              sources: smaller game, fish, shellfish, and more plant species. Precursor to and
              enabling condition for agriculture.
              <br />
              <em>When to use:</em> Use Flannery's term to describe foraging diversification
              anywhere in the late Pleistocene.
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">PPNA / PPNB</div>
            <div className="lrn-definition-desc">
              Pre-Pottery Neolithic A (c. 11,600 to 10,500 years ago) and B (c. 10,500 to 8,500
              years ago). Two phases of early farming in Southwest Asia before pottery was invented.
              <br />
              <em>When to use:</em> Use these labels to date any aceramic Neolithic site in the
              Levant or Anatolia.
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Demic diffusion</div>
            <div className="lrn-definition-desc">
              The spread of agriculture by farmers migrating into new territories and replacing or
              absorbing existing forager populations. Confirmed for Europe by ancient DNA evidence.
              <br />
              <em>When to use:</em> Apply this when ancient DNA shows population replacement
              alongside the arrival of farming.
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Fertile Crescent</div>
            <div className="lrn-definition-desc">
              The arc of productive land stretching from the Levant coast through the Zagros
              foothills in Southwest Asia. The wild ancestors of all eight Neolithic founder crops
              and the main livestock animals lived here.
              <br />
              <em>Where you see this:</em> The label is used in any discussion of the earliest
              Southwest Asian agriculture or the hilly flanks zone.
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Neolithic founder crops</div>
            <div className="lrn-definition-desc">
              The eight crops first domesticated in Southwest Asia: emmer wheat, einkorn wheat,
              barley, lentil, pea, bitter vetch, chickpea, and flax. These crops spread across
              Eurasia and Africa.
              <br />
              <em>When to use:</em> Use this list to identify any Old World farming village whose
              crop assemblage traces back to Southwest Asia.
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Three Sisters</div>
            <div className="lrn-definition-desc">
              The Mesoamerican intercropping system of maize, beans, and squash. Maize provides
              structure, beans fix atmospheric nitrogen, squash shades the ground. Together they
              produce a nearly complete diet.
              <br />
              <em>Where you see this:</em> The Three Sisters appear in any reference to indigenous
              farming in Central or North America.
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">State</div>
            <div className="lrn-definition-desc">
              A political unit with centralized government, monopoly on legitimate force, and
              ability to tax and conscript. States require agricultural surpluses, record-keeping,
              and specialization. The first states emerged in Mesopotamia around 5,500 years ago.
              <br />
              <em>When to use:</em> Use this when describing an early polity with bureaucracy, tax,
              and standing officials.
            </div>
          </div>
        </>,

        <>
          <h2>Seven Independent Centers of Agricultural Origin</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Region</th>
                <th>Date (approx.)</th>
                <th>Key Crops</th>
                <th>Key Animals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Southwest Asia</td>
                <td>11,000 years ago</td>
                <td>Emmer, einkorn, barley, lentil, pea</td>
                <td>Sheep, goat, cattle, pig</td>
              </tr>
              <tr>
                <td>Northern China</td>
                <td>10,000 years ago</td>
                <td>Foxtail millet, broomcorn millet</td>
                <td>Pig, dog</td>
              </tr>
              <tr>
                <td>Southern China / Yangzi</td>
                <td>10,000 years ago</td>
                <td>Rice</td>
                <td>Pig, chicken</td>
              </tr>
              <tr>
                <td>Sub-Saharan Africa</td>
                <td>5,000 years ago</td>
                <td>Sorghum, pearl millet, yam</td>
                <td>Guinea fowl</td>
              </tr>
              <tr>
                <td>Mesoamerica</td>
                <td>9,000 years ago</td>
                <td>Maize, beans, squash, chili</td>
                <td>Turkey, dog</td>
              </tr>
              <tr>
                <td>South America (Andes)</td>
                <td>8,000 years ago</td>
                <td>Potato, quinoa, manioc</td>
                <td>Llama, alpaca, guinea pig</td>
              </tr>
              <tr>
                <td>Eastern North America</td>
                <td>4,500 years ago</td>
                <td>Sunflower, goosefoot, sumpweed</td>
                <td>None</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Southwest Asia Chronological Summary</h2>
          <div className="lrn-timeline">
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-date">c. 23,000 years ago</div>
              <div className="lrn-timeline-content">
                Ohalo II (Israel): a semi-sedentary camp with evidence of large-scale wild cereal
                processing. The earliest known use of ground grain.
              </div>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-date">15,000 to 11,600 years ago</div>
              <div className="lrn-timeline-content">
                Natufian culture. First permanent settlements in the Levant. Intensive wild cereal
                harvesting with sickles. Key sites: Eynan, el Wad, Hilazon Tachtit.
              </div>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-date">12,900 to 11,600 years ago</div>
              <div className="lrn-timeline-content">
                Younger Dryas cold event. Environmental stress may push intensification of
                cultivation. Abu Hureyra gap in botanical record.
              </div>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-date">11,600 to 10,500 years ago</div>
              <div className="lrn-timeline-content">
                PPNA. First permanent farming villages. Jericho tower built. Jerf el Ahmar communal
                buildings. Göbekli Tepe active. Wadi Feynan 16 feasting.
              </div>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-date">10,500 to 8,500 years ago</div>
              <div className="lrn-timeline-content">
                PPNB. Full farming economies. Çatalhöyük, Ain Ghazal, Çayönü, Nevalı Çori. PPNB
                interaction sphere covers Southwest Asia. Obsidian trade networks.
              </div>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-date">c. 7,200 years ago</div>
              <div className="lrn-timeline-content">
                Tell Sabi Abyad I destroyed by fire. Evidence of early raiding or conflict. Farming
                spreads into lowland Mesopotamia with irrigation.
              </div>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-date">c. 5,500 years ago</div>
              <div className="lrn-timeline-content">
                First cities and states emerge in Mesopotamia. Sumerian cuneiform writing invented
                for accounting. Urban civilization begins.
              </div>
            </div>
          </div>
        </>,

        <>
          <h2>Key Archaeological Sites</h2>
          <div className="lrn-steps">
            <div className="lrn-step">
              <strong>Abu Hureyra (Syria)</strong>
              <p>
                Best single site for observing the forager-to-farmer transition. Abu Hureyra I
                (forager camp, 192 wild plant species) then Abu Hureyra II (farming village of 5,000
                to 6,000 people). Women's bones show grain-grinding arthritis.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Göbekli Tepe (Turkey)</strong>
              <p>
                Monumental ritual site built by foragers before local agriculture. T-shaped pillars
                up to 5.5 meters, 10 tons each. At least 20 enclosures. Overturns assumption that
                agriculture precedes monumental architecture.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Jericho (Jordan Valley)</strong>
              <p>
                One of the world's oldest continuously occupied towns. PPNA stone tower 8 meters
                tall, c. 10,000 years ago. Purpose debated (defense, flood control, or monument).
              </p>
            </div>
            <div className="lrn-step">
              <strong>Çatalhöyük (Turkey)</strong>
              <p>
                Mega-village of up to 8,000 people, c. 9,000 to 7,500 years ago. No streets. Entry
                through roof holes. Painted hunting scenes. Wild bull skulls displayed. Dead buried
                under house floors.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Ain Ghazal (Jordan)</strong>
              <p>
                Up to 3,000 people. Famous for 32 plaster human statues (largest known Neolithic
                statuary cache). Site grew while Jericho declined in PPNB period.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Cishan (China)</strong>
              <p>
                Early farming village in northern China, c. 10,000 to 7,000 years ago. Storage pits
                held up to 50,000 kg of millet. Clear evidence of large-scale millet production.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Jiangzhai (China)</strong>
              <p>
                Yangshao culture village, c. 7,000 to 5,000 years ago. Planned layout with houses
                arranged around a central plaza. Held up to 500 people. Painted pottery.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Tianluoshan (China)</strong>
              <p>
                Yangzi delta site with exceptional organic preservation. Dug-out canoes, paddles,
                fish weirs, and abundant rice remains show intensive wetland management c. 7,000
                years ago.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Sannai-Maruyama (Japan)</strong>
              <p>
                Large Jomon village (c. 5,900 to 4,200 years ago) with buildings on massive wooden
                posts. Jomon people were complex foragers who never became farmers despite millennia
                of opportunity.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Tell Sabi Abyad I (Syria)</strong>
              <p>
                Site destroyed by fire c. 7,200 years ago, then reoccupied. Shows that farming
                communities faced raiding and conflict over stored resources and land.
              </p>
            </div>
            <div className="lrn-step">
              <strong>Hilazon Tachtit (Israel)</strong>
              <p>
                Natufian site with a shaman burial: a woman interred with 50 tortoise shells, eagle
                parts, a wild boar foreleg, and a human foot. Evidence of ritual specialists before
                farming.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Domestication Markers: Plants vs Animals</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Wild</th>
                <th>Domesticated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Plants: Rachis</strong>
                </td>
                <td>Brittle, seeds drop when ripe</td>
                <td>Tough, seeds stay attached</td>
              </tr>
              <tr>
                <td>
                  <strong>Plants: Seed size</strong>
                </td>
                <td>Smaller</td>
                <td>Larger (human selection)</td>
              </tr>
              <tr>
                <td>
                  <strong>Plants: Germination</strong>
                </td>
                <td>Dormant, variable</td>
                <td>Rapid, uniform</td>
              </tr>
              <tr>
                <td>
                  <strong>Animals: Body size</strong>
                </td>
                <td>Larger, more robust</td>
                <td>Smaller (humans killed largest)</td>
              </tr>
              <tr>
                <td>
                  <strong>Animals: Horn size</strong>
                </td>
                <td>Larger</td>
                <td>Reduced</td>
              </tr>
              <tr>
                <td>
                  <strong>Animals: Bone age profile</strong>
                </td>
                <td>All ages and sexes</td>
                <td>Young males killed; females kept</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>The Four Theories of Agricultural Origins</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Theory</th>
                <th>Proponent</th>
                <th>Core Argument</th>
                <th>Main Problem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Oasis</td>
                <td>Childe (1930s)</td>
                <td>Post-glacial drying concentrated humans and animals near oases</td>
                <td>Climate evidence does not show widespread drying at the right time</td>
              </tr>
              <tr>
                <td>Hilly Flanks</td>
                <td>Braidwood (1950s)</td>
                <td>
                  Agriculture started in the natural habitat of wild crops when people were
                  culturally ready
                </td>
                <td>Does not explain the timing of cultural readiness</td>
              </tr>
              <tr>
                <td>Demographic</td>
                <td>Binford (1968)</td>
                <td>
                  Population pressure pushed people into marginal zones where they had to intensify
                </td>
                <td>Agriculture also appeared in non-crowded areas</td>
              </tr>
              <tr>
                <td>Feasting</td>
                <td>Hayden (1990s)</td>
                <td>Competitive feasting drove cultivation of prestige foods for social power</td>
                <td>Difficult to distinguish feasting from general surplus storage</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },

    customCss: null
  }

  return config
}

export default function FromForagersToFarmersOriginsOfAgriculture() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
