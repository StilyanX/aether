import { LearningTemplate } from '../../../../components/learning/learning-template'

function useConfig() {
  const config = {
    cssPrefix: 'hsa',
    documentTitle: 'Holocene Societies Across the World - AETHER',
    learning: {
      groupTitle: 'After the Ice Age',
      category: 'Module 4',
      title: 'Holocene Societies Across the World',
      subtitle:
        'When the last Ice Age ended 11,700 years ago, human groups across four continents responded in different ways. Some intensified foraging. Some invented agriculture. Some built cities on maritime economies. This module follows those diverging paths through Australia, the Americas, Africa, and Europe.',
      sections: [
        <>
          <h2>Why the Holocene Matters</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Ice Age ended around 11,700 years ago. What changed for human groups when ice
              sheets retreated and the climate became stable?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Stable weather meant predictable seasons. Permanent villages, stored food, and
                territory all became worth the effort. Some groups also began to plant crops on
                purpose.
              </p>
            </details>
          </div>
          <p>
            The Holocene is the geological period from 11,700 years ago to today. It began when
            global temperatures stabilized after the last Ice Age. Ice sheets melted. Sea levels
            rose. Coastlines redrew themselves. Forests spread across Europe and Asia. Deserts
            shifted. Rainfall patterns changed across Africa.
          </p>
          <p>
            A stable climate keeps seasons predictable. People can plan harvests, store food, and
            build heavy houses. None of those investments pay off when storms and droughts shift
            every decade. The Holocene cut that gamble. Settling down became rational.
          </p>
          <p>
            Human groups responded in very different ways. Some intensified hunting and gathering.
            Some built permanent villages. Some domesticated plants and animals. Some did all three
            in different sequences. This module covers four regions: Australia and the Indo-Pacific,
            the Americas, Africa, and Europe. Each took its own path.
          </p>
          <p>
            These patterns still shape today's world. The languages most people speak descend from
            Holocene farming expansions. The crops on your plate come from Holocene farmers. The
            borders of modern states often follow paths cleared by Holocene farming.
          </p>
        </>,

        <>
          <h2>Australia and the Indo-Pacific During the Holocene</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Aboriginal Australians had lived on the continent for roughly 50,000 years when the
              Holocene began. When the climate warmed, did they take up farming like people in other
              regions?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They did not. Australia lacked plants and animals suited to domestication. Instead
                they invested in better tools, eel traps, and grinding stones. That stepped-up
                effort is called intensification.
              </p>
            </details>
          </div>

          <h3>Aboriginal Australia: Intensification Without Agriculture</h3>
          <p>
            From about 9000 to 8000 BCE, groups recolonized the Australian interior as warming made
            inland areas habitable again. From around 5000 BCE onward, the archaeological record
            shows intensification: getting more food from the same land by working it harder. Backed
            microliths appeared. These are small, sharp stone flakes hafted onto handles or shafts.
            Grinding stones became common, letting people process a wider range of seeds and plant
            foods. Tool kits got more specialized, not simpler. Backed microliths take more steps to
            make than older flake tools, so more time and skill went into each one. That signals
            population growth and harder land use, not fashion.
          </p>
          <p>
            Wilgie Mia in Western Australia shows long-term ochre mining. Lake Moondarra in
            Queensland has stone arrangements suggesting social and ritual gatherings. Toolondo in
            Victoria preserves channels dug to trap eels: deliberate aquaculture without farming.
            Ngarrabulgan in Queensland was a sacred mountain that shaped movement patterns across
            hundreds of kilometers.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Aboriginal Australian intensification</strong>
              <p>
                Backed microliths, grinding stones, eel aquaculture. No domesticated species.
                Optimized for native Australian environments, which offered few candidates for
                farming.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>New Guinea early agriculture</strong>
              <p>
                Kuk Swamp drainage canals. Taro cultivation from 7000 BCE. Wet highland conditions
                suited to domestication. Independent invention of farming.
              </p>
            </div>
          </div>

          <h3>New Guinea: Early Agriculture at Kuk Swamp</h3>
          <p>
            New Guinea took a different path. At Kuk Swamp in the highlands, archaeologists found
            drainage ditches and taro cultivation by about 7000 BCE. That makes Kuk Swamp one of the
            earliest sites of independent plant cultivation anywhere in the world. The taro served
            at a Hawaiian luau today traces back to this same New Guinea source. Ground-edge axes
            appear across the island during the Holocene, fitting expanding agriculture and forest
            clearance. New Guinea's wet highlands had good candidates for domestication. Australia
            did not. The two islands sit next door but diverged because of what their wild plants
            and animals allowed. Farming is a response to opportunity, not a single cultural
            invention that spread.
          </p>

          <h3>The Austronesian Dispersal: Out of Taiwan</h3>
          <p>
            Around 3000 BCE, a major population dispersal began from Taiwan. Speakers of
            Austronesian languages moved south through the Philippines and Indonesia, then across
            the Pacific and as far west as Madagascar. Tagalog, Malay, Indonesian, Hawaiian, and
            Malagasy all descend from this single Taiwan origin.
          </p>
          <p>
            The evidence comes from several sources. Sites like Nanguanli and Dabenkeng on Taiwan
            show the cultural signatures of early Austronesian communities. Beinan on Taiwan was a
            nephrite jade trade center, sending green stone ornaments south to the Philippines and
            Vietnam before the main dispersal began. Language family tree analysis also points to
            Taiwan as the homeland. The island chain south through the Philippines and Indonesia
            forms natural stepping stones across open water, which made the route possible.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Out of Taiwan model (dominant)</strong>
              <p>
                All Austronesian languages trace to a Taiwan homeland. Dispersal began about 3000
                BCE. Supported by linguistics, archaeology, and jade trade evidence.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Multiple homeland models</strong>
              <p>
                Austronesian dispersal had several origin points in Island Southeast Asia. Fewer
                researchers support this position today.
              </p>
            </div>
          </div>

          <h3>Lapita and the Colonization of Oceania</h3>
          <p>
            The Lapita cultural complex marks the expansion of Austronesian-connected peoples into
            the Pacific. Lapita pottery is recognizable by its dentate-stamped geometric patterns.
            Dentate-stamped means the surface was pressed with a small toothed tool. The pottery
            appears from around 3500 BCE. It spreads east across Island Melanesia and into
            Polynesia.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Decorated_Lapita_potsherd_from_Bourewa%2C_Fiji.jpg"
              alt="Decorated Lapita potsherd from Bourewa, Fiji, showing dentate-stamped geometric patterns"
              loading="lazy"
            />
            <figcaption>
              Decorated Lapita potsherd from Bourewa, Fiji. The toothed-tool pattern is the
              signature mark of Lapita pottery across thousands of kilometers of Pacific Ocean.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Decorated_Lapita_potsherd_from_Bourewa,_Fiji.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>
          <p>
            Key Lapita sites include Talepakemalai on the Mussau Islands and Teouma on Vanuatu.
            Teouma is a Lapita cemetery whose skeletal DNA clusters with Taiwan-origin populations,
            confirming Lapita as a real migrating people, not just a pottery style adopted by
            locals. The same dentate-stamped style appearing across thousands of kilometers within a
            few centuries is not slow drift. It is active, canoe-based colonization. The voyagers
            carried pigs, chickens, dogs, and domesticated plants. By around 1000 BCE, they had
            reached Tonga and Samoa, the ancestral homeland of Polynesian culture.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Colonist model (supported by ancient DNA)</strong>
              <p>
                Lapita expansion was rapid and intentional. Canoe-bearing migrants carried pottery,
                plants, and animals. Teouma cemetery DNA clusters with Taiwan-origin populations.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Adoption model</strong>
              <p>
                Lapita pottery spread through exchange among local people. Ancient DNA evidence
                increasingly undermines this position.
              </p>
            </div>
          </div>

          <h3>Polynesian Voyaging and Island Chiefdoms</h3>
          <p>
            After the Lapita period, Polynesian cultures developed in Tonga and Samoa. This happened
            between about 500 BCE and 1000 CE. They built double-hulled canoes capable of sailing
            against the wind. Polynesian navigators read stars, ocean swells, wave patterns, and the
            behavior of birds. They oriented themselves across open water without instruments.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Hokule%27a.jpg"
              alt="Hokule'a, the Hawaiian double-hulled voyaging canoe, sailing on open water"
              loading="lazy"
            />
            <figcaption>
              Hokule'a, a reconstructed Hawaiian double-hulled voyaging canoe. Polynesian navigators
              used star paths, wave patterns, and bird behavior to cross thousands of kilometers of
              open Pacific without instruments.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Hokule%27a.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>
          <p>
            From Tonga and Samoa, Polynesians colonized the far corners of the Pacific. Easter
            Island (Rapa Nui) was reached around 200 to 300 CE. Hawaii was colonized around the same
            period. New Zealand was among the last major Pacific islands settled. The modern Pacific
            Island nations of Tonga, Samoa, Hawaii, Aotearoa New Zealand, and many others descend
            from these voyagers.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/72/Ahu_Tongariki.jpg"
              alt="Ahu Tongariki, a row of fifteen moai statues on Easter Island"
              loading="lazy"
            />
            <figcaption>
              Ahu Tongariki on Easter Island: fifteen moai statues restored to their platform.
              Building these required enormous coordinated labor. The island later suffered severe
              deforestation and societal stress. The moai still draw visitors from around the world
              today.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Ahu_Tongariki.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>
          <p>
            Easter Island carried this pattern to its breaking point. Forests vanished as the
            population grew and moai-building stripped wood for transport. Rats ate the palm seeds
            and stopped the forests from regrowing. Without wood, canoes and houses got hard to
            build. Soil eroded. Crops failed. The island became a warning about pushing a closed
            ecosystem past its limits. Hawaii, Tonga, and Samoa avoided the same fate by managing
            island resources more carefully. Centuries later, the same Austronesian world built
            Borobudur (a Buddhist monument) and Prambanan (a Hindu monument) on Java, both tied into
            South Asian trade and religious networks.
          </p>

          <h3>The Tasmanian Fish Cessation Debate</h3>
          <p>
            Rising sea levels cut Tasmania off from mainland Australia during the Holocene, and the
            population developed in isolation. Early Tasmanian middens (refuse heaps) contain fish
            bones. At some point in the Holocene, fish bones disappear from the record entirely.
            Archaeologists call this the fish cessation. Three explanations compete, and none has
            won out. It is the textbook test case for reading the absence of evidence, because no
            fish bones could mean a taboo, a fish shortage, a change in trash habits, or a shift in
            where people camped.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Cultural taboo</strong>
              <p>A rule against eating fish developed, removing fish from the diet entirely.</p>
            </div>
            <div className="lrn-compare-item">
              <strong>Environmental change</strong>
              <p>Shifts in fish numbers or in camp locations changed what ended up in middens.</p>
            </div>
            <div className="lrn-compare-item">
              <strong>Resource depletion</strong>
              <p>Overfishing emptied local stocks. No consensus has been reached.</p>
            </div>
          </div>
        </>,

        <>
          <h2>Origins of Food-Producing Economies in the Americas</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Americas were colonized by humans from Asia, between 20,000 and 15,000 years ago.
              The Old World had farming by 9000 BCE. Did American groups invent farming on their
              own, or did the idea cross the Pacific?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They invented it on their own. American crops (maize, beans, squash, potatoes,
                quinoa) come from wild species the Old World did not have. Independent invention is
                the clear answer.
              </p>
            </details>
          </div>

          <h3>Mesoamerica: The Domestication of Maize</h3>
          <p>
            Mesoamerica produced some of the most important crops in world history: maize (corn),
            beans, and squash. Together they form a nutritionally complete diet. The combination
            spread across North and South America, and maize is now the world's most-produced grain.
          </p>
          <p>
            Guilá Naquitz in Oaxaca, Mexico provides the earliest evidence. Squash cultivation
            appears around 9000 BCE. The shift from teosinte (the wild ancestor of maize) to fully
            domesticated maize took thousands of years, roughly 7000 to 5000 BCE. Teosinte has a
            small, hard cob with only a few kernels. Maize has a large soft cob with many kernels.
            Without any understanding of genetics, farmers could only select the best plants by eye
            each generation. Building enough change to turn teosinte into modern maize required
            thousands of planting seasons. Mesoamerican farmers had no contact with their Near
            Eastern counterparts, who were doing the same with wheat and barley at roughly the same
            time from different wild species. That parallel invention is the strongest single piece
            of evidence that agriculture is a predictable response to the right conditions, not a
            single cultural accident that spread.
          </p>

          <h3>Eastern North America: The Eastern Agricultural Complex</h3>
          <p>
            Long before maize arrived, people in Eastern North America were already growing their
            own set of crops. The Eastern Agricultural Complex (from about 5000 BCE) included
            goosefoot (chenopod), sunflower, sumpweed (marsh elder), and maygrass. Koster in
            Illinois is a stratified site showing long-term Archaic occupation. Watson Brake in
            Louisiana is a mound complex dated to about 3500 BCE, one of the earliest
            monument-building sites in North America. Archaic foragers built it without farming,
            which directly cuts against the idea that monuments require an agricultural surplus.
          </p>
          <p>
            Poverty Point in Louisiana flourished between 1700 and 1100 BCE. It was a large
            earthwork complex whose builders moved red jasper and magnetite from sources hundreds of
            kilometers away. Foragers usually carry only what they can use locally. Long-distance
            movement of prestige stone signals strong social networks and surplus time. Even
            non-farmers can run wide exchange systems when the food base is rich and stable.
            Windover in Florida is an Archaic wet site where waterlogged conditions preserved
            textiles and even brain tissue, giving a rare window into Archaic material life.
          </p>

          <h3>Southwestern North America: Early Farming Villages</h3>
          <p>
            Maize farming reached the American Southwest by a different route. Las Capas in Arizona
            shows irrigation-based maize farming by about 1200 BCE. Cerro Juanaqueña in Chihuahua
            shows terraced hillside farming. Both sites show Southwestern groups adapting
            Mesoamerican maize to dry country through engineered water management. Irrigation moves
            water to crops instead of farming only where rain falls. It requires labor coordination,
            land tenure, and seasonal planning. It signals a deeper commitment to a fixed place than
            rainfall farming does.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Great Basin foragers</strong>
              <p>
                No agriculture during this period. Mobile, seed-grinding economy. Sites: Danger
                Cave, Hogup Cave, Fort Rock Cave. Few domestication candidates in arid environment.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Southwestern farmers</strong>
              <p>
                Las Capas irrigation, maize cultivation from about 1200 BCE. Engineered water
                management for dry conditions.
              </p>
            </div>
          </div>

          <h3>South America: Coastal Economies and the Chinchorro</h3>
          <p>
            Along the Peruvian coast, pre-ceramic (without pottery) societies built rich economies
            on the sea. La Paloma, Chilca, and the Ring Site show coastal communities living from
            fish, shellfish, and sea mammals long before farming mattered. The Chinchorro people of
            northern Chile mummified their dead on purpose from about 5000 to 3000 BCE, using clay,
            paint, sticks, and reeds to rebuild and preserve bodies. These are among the world's
            oldest intentional mummies. Pedra Pintada in the Amazon shows early forager occupation
            there too, with evidence that Amazonian groups actively shaped their forests rather than
            just living in them.
          </p>

          <h3>Norte Chico / Caral: Civilization Without Ceramics</h3>
          <p>
            Caral and the Norte Chico sites in coastal Peru built the earliest known civilization in
            the New World. Urban centers appear by about 3200 BCE, roughly the same age as early
            Mesopotamian and Egyptian cities. Norte Chico had monumental architecture, organized
            labor, and quipus (knotted cords used to record numbers and accounts). It had no pottery
            and no writing. The economic base was cotton and fish, not grain. That overturns the
            standard assumption that civilization rests on grain agriculture plus ceramics plus
            writing. Coastal maritime productivity supplied the surplus; cotton tied the coast to
            highland exchange; quipus handled the accounting. Same rough date as Mesopotamia,
            completely different ingredients.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Caral_Peru.JPG"
              alt="Pyramid mound at the ancient city of Caral in Peru, the oldest city in the Americas"
              loading="lazy"
            />
            <figcaption>
              A pyramid mound at Caral, Peru. Caral and the Norte Chico sites built monumental
              architecture by about 3200 BCE without using pottery or writing. Their economy was
              built on maritime resources and cotton.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Caral_Peru.JPG"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>

          <h3>Andean Highlands: Camelids and Tuber Agriculture</h3>
          <p>
            In the Andean highlands, a separate domestication process was underway. Pachamachay and
            Telarmachay are high herding sites where people managed llamas and alpacas, bred from
            the wild guanaco and vicuña. Quinoa and potatoes were also domesticated up here, in
            country too high and cold for maize. Both crops are global staples today. Llamas and
            alpacas are the only large domesticated animals native to the Americas. They gave meat,
            fiber, and pack transport. Without pack animals, goods move only as far as a person can
            carry them. With llamas, goods crossed thousands of kilometers of mountain terrain. That
            made Andean economic integration possible.
          </p>
        </>,

        <>
          <h2>Holocene Africa</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              At the start of the Holocene, the Sahara was not a desert. Rainfall was much higher.
              What were people doing in what is now the Sahara Desert 10,000 years ago?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They were herding cattle on grassland. Lakes, rivers, hippos, and fish were all part
                of a green Sahara. When the rain stopped after 5000 BCE, they moved south or toward
                the Nile.
              </p>
            </details>
          </div>

          <h3>The Green Sahara: Pastoralism Comes First</h3>
          <p>
            From about 11,000 BCE, Africa entered the African Humid Period. The Sahara received much
            more rainfall than today. Lakes formed. Grasslands spread. Cattle, hippos, and fish
            lived across the region. Nabta Playa in Sudan/Egypt shows cattle pastoralism by about
            9000 BCE, with Bir Kiseiba nearby giving similar evidence. These are among the earliest
            cattle-herding sites anywhere in the world. Whether the cattle were domesticated locally
            from African wild stock (Bos primigenius africanus) or arrived already domesticated from
            Southwest Asia is unresolved. Genetics shows both contributions in African cattle.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fd/La_vache_qui_pleure.jpg"
              alt="Saharan rock art from Tassili n'Ajjer showing cattle and human figures from the African Humid Period"
              loading="lazy"
            />
            <figcaption>
              "The Crying Cow," Saharan rock art from Tassili n'Ajjer, Algeria. People made this art
              during the African Humid Period, when cattle pastoralism flourished across the Sahara.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:La_vache_qui_pleure.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>
          <p>
            Early Khartoum on the Nile shows hunter-fishers using wavy-line pottery. Jebel Sahaba is
            a Mesolithic cemetery whose dead carry embedded projectile points: evidence of organized
            violence. Around 5000 BCE the African Humid Period ended. The Sahara dried. Communities
            moved south, east, and toward the Nile. That mass migration spread cattle herding into
            sub-Saharan Africa and concentrated population along the Nile, setting up the rise of
            Egypt.
          </p>

          <h3>North and Northeast Africa: The Nile Valley and Egypt</h3>
          <p>
            As the Sahara dried, the Nile Valley became the focus of population growth. Merimde and
            Fayum show the earliest Nile farming, around 5000 to 3000 BCE, using Near Eastern wheat
            and barley. Egypt's agricultural base was a hybrid: Mesopotamian-origin grain grown on
            Nile flood plain silt. Egypt's connections ran north and east to the Near East as much
            as south to sub-Saharan Africa. The Badarian and Naqada cultures (4500 to 3100 BCE) show
            rising social complexity, craft specialization, and elite burials. By about 3100 BCE the
            Narmer Palette documents the unification of Upper and Lower Egypt, showing a king
            defeating enemies and wearing the crowns of both halves. It marks the start of the
            pharaonic state tradition.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/be/Narmer_Palette.jpg"
              alt="The Narmer Palette, a ceremonial slate palette from around 3100 BCE showing the king of unified Egypt"
              loading="lazy"
            />
            <figcaption>
              The Narmer Palette (c. 3100 BCE). It shows King Narmer wearing the crowns of Upper and
              Lower Egypt. It marks the start of the pharaonic state tradition and is one of the
              earliest pieces of Egyptian narrative art.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Narmer_Palette.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>
          <p>
            Djoser built the Step Pyramid at Saqqara around 2950 BCE. The pyramids of the Old
            Kingdom (2575 to 2150 BCE) are the peak of this building tradition and remain among the
            most-visited monuments on Earth.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Egyptian writing: independent invention</strong>
              <p>
                Hieroglyphic writing was invented on its own. If true, writing was invented at least
                twice, making it (like agriculture) a predictable response to social conditions.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Mesopotamian-stimulus model</strong>
              <p>
                Contact with Mesopotamian cuneiform pushed Egyptian writing forward. The two systems
                are structurally different, suggesting strong local development even if outside
                contact sparked it.
              </p>
            </div>
          </div>
          <p>
            South of Egypt, Nubian civilizations grew along the upper Nile. Kerma was an urban
            center by about 2000 BCE. Aksum in Ethiopia became a Christian state around 700 CE. Its
            Red Sea position gave it control over trade between the Mediterranean, Arabia, and
            India. That trade funded enormous stone stelae (the largest fallen stele measured 33
            meters and weighed 517 tonnes) and its own coinage in gold, silver, and copper. Coinage
            requires a standardized exchange medium, a state to back it, and an economy big enough
            to need it: Aksum had all three. Quseir al-Qadim on Egypt's Red Sea coast was a port
            linking African goods into the Indian Ocean network, showing that Egypt's connections
            ran east as well as north. The Ethiopian Orthodox Church traces directly back to Aksum's
            Christianization and remains one of the oldest Christian traditions in the world today.
          </p>

          <h3>Sub-Saharan Africa: Independent Crops and the Bantu Expansion</h3>
          <p>
            Sub-Saharan Africa did not simply adopt Near Eastern crops. African farmers domesticated
            their own: sorghum, pearl millet, and yams. Sub-Saharan rainfall is highly seasonal.
            Sorghum and millet tolerate dry seasons better than wheat. Yams suit humid forest zones.
            Near Eastern crops bred for Mediterranean winter rainfall would have needed irrigation
            or rebreeding to survive here. The African crops were already fit. Sorghum and pearl
            millet still feed hundreds of millions of people across Africa and South Asia today.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/A_closeup_of_Pearl_Millet_%28Cumbu%29.JPG"
              alt="Close-up of pearl millet (Pennisetum glaucum), one of the key crops domesticated in sub-Saharan Africa"
              loading="lazy"
            />
            <figcaption>
              Pearl millet (Pennisetum glaucum), domesticated in sub-Saharan Africa. It tolerates
              dry seasons better than wheat or barley. It is still a staple grain for many African
              farming families.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:A_closeup_of_Pearl_Millet_(Cumbu).JPG"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>
          <p>
            Using cattle for milk, hides, and pulling plows is called the secondary products
            revolution. African herders joined this shift. Sanga-type cattle (a cross of humpless
            taurine stock from Europe and the Near East with humped zebu stock from South Asia) were
            better adapted to African disease environments, making cattle herding viable in country
            hostile to either pure breed.
          </p>
          <p>
            The Bantu expansion is one of the great demographic events of African history. From a
            proto-homeland near Shum Laka in Cameroon, Bantu-speaking communities carried
            pottery-making, farming, and (later) ironworking south and east across sub-Saharan
            Africa, starting before 1000 BCE and reaching southern Africa by 300 to 700 CE. Silver
            Leaves, Broederstroom, and Lydenburg in South Africa document the southern arrival. The
            Bantu language family today includes more than 500 living languages spoken by over 350
            million people. The expansion is the clearest African example of a technology package
            moving with a population rather than through abstract copying.
          </p>

          <h3>Ironworking in Africa: The Independence Debate</h3>
          <p>
            Ironworking appeared in Africa during the 1st millennium BCE. Sites like Do Dimmi,
            Walaldé, Taruga, Opi, and Otumbi provide evidence across West Africa. Urewe near the
            Great Lakes is the key East African site. In Nigeria, the Nok culture (500 BCE to 500
            CE) produced both terracotta sculptures and iron tools.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Did Africa develop iron on its own, or did the knowledge come from Southwest Asia?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Most researchers favor independent invention. African iron methods look different
                from Southwest Asian ones, and many African regions skipped the bronze age entirely,
                which is hard to explain through borrowing.
              </p>
            </details>
          </div>
          <p>
            If Africa invented ironworking on its own, it was a third center of iron technology
            after Anatolia and South Asia. Many regions also went straight from stone tools to iron
            with no bronze age in between. That breaks the textbook "stone, bronze, iron" sequence
            and shows the path of technology depends on what materials and needs are locally to
            hand, not a universal ladder.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Independent invention (favored by most researchers)</strong>
              <p>
                African iron techniques differ from Southwest Asian ones. Early African dates make
                easy diffusion unlikely. Africa skipped bronze in many regions.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Diffusion from Southwest Asia</strong>
              <p>
                Iron technology spread from Southwest Asia via Egypt or trans-Saharan routes. The
                debate is not yet settled.
              </p>
            </div>
          </div>

          <h3>Nok Culture</h3>
          <p>
            The Nok culture on the Jos Plateau of Nigeria flourished from about 500 BCE to 500 CE.
            It produced distinctive terracotta sculptures: life-sized and near-life-sized human and
            animal figures with hollow interiors and detailed faces. They are among the oldest known
            figurative sculpture traditions in sub-Saharan Africa. Nok also practiced early iron
            smelting. Together, the sculptures and the iron evidence show a society with both
            technological and artistic depth centuries before any European or Islamic contact.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Nok_sculpture_Louvre_70-1998-11-1.jpg"
              alt="Nok terracotta sculpture from Nigeria, depicting a seated figure, in the Louvre Museum"
              loading="lazy"
            />
            <figcaption>
              Nok terracotta sculpture (Nigeria, c. 500 BCE to 500 CE), Louvre Museum. The Nok
              people made some of the oldest known figurative sculpture in sub-Saharan Africa and
              also smelted iron.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Nok_sculpture_Louvre_70-1998-11-1.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>

          <h3>West African Urbanism, Trade, and Art</h3>
          <p>
            Jenné-jeno in Mali was founded around 250 BCE and grew into one of the earliest urban
            sites in West Africa. It developed with no clear king, palace, or central temple at its
            core. Instead, neighborhood-sized communities clustered together, each keeping its own
            work and identity. The city was the sum of groups choosing to live close, not a single
            ruling center pulling them in. Archaeologists call this synoecism (social aggregation
            from multiple communities), and it directly challenges the assumption that cities
            require states.
          </p>
          <p>
            Trans-Saharan trade moved gold, salt, slaves, and copper across the desert. Cowrie
            shells from the Maldives reached Saharan trade routes, showing the long-distance reach
            of these networks. Igbo-Ukwu in southeastern Nigeria (9th to 10th centuries CE) held a
            hoard of 685 copper and bronze objects (cast in lost-wax technique) plus 165,000 beads.
            The raw materials had to come from distant sources, so a non-state community controlled
            wealth and exchange on a wide scale.
          </p>

          <h3>Eastern and Southern Africa: Swahili Coast and Great Zimbabwe</h3>
          <p>
            From around 700 CE onward, Indian Ocean trade transformed East Africa's coast. Gedi,
            Shanga, Kilwa, and Kaole grew into wealthy Swahili trading towns connected to Arabia,
            India, and China. Goods moved both ways: gold, ivory, iron, and enslaved people went
            out; cloth, porcelain, and other goods came in. Inland, Great Zimbabwe flourished
            between 1300 and 1450 CE on the Zimbabwe Plateau, controlling gold-producing country in
            its hinterland. Gold reached Swahili ports and entered the Indian Ocean trade; cloth and
            porcelain came back. Chinese porcelain found at Great Zimbabwe confirms the link. Its
            stone enclosures are the largest pre-colonial stone structures in sub-Saharan Africa.
            They worked as walls and as symbols of power. The modern country takes its name from the
            site. The Zimbabwe plateau states (Khami, Mapungubwe, and others) rose and fell in
            sequence.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Wall_of_the_great_enclosure%2C_Great_Zimbabwe.JPG"
              alt="Stone wall of the Great Enclosure at Great Zimbabwe, southern Africa"
              loading="lazy"
            />
            <figcaption>
              Stone wall of the Great Enclosure at Great Zimbabwe (Zimbabwe, c. 1300 to 1450 CE). It
              is the largest pre-colonial stone structure in sub-Saharan Africa. The country
              Zimbabwe takes its name from this site.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Wall_of_the_great_enclosure,_Great_Zimbabwe.JPG"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>
        </>,

        <>
          <h2>Holocene Europe</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Europe in 9000 BCE was covered by spreading forests. Small bands of hunter-gatherers
              occupied the continent. Farming already existed in the Near East. Did European
              hunter-gatherers invent farming on their own, or did farmers from elsewhere bring it?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Farmers brought it. Ancient DNA shows that the first European farmers descended from
                Anatolian (Turkish) populations. They migrated in carrying crops and animals,
                instead of locals copying the new ways.
              </p>
            </details>
          </div>

          <h3>Mesolithic Europe: Complex Foragers Before Farming</h3>
          <p>
            The Mesolithic began in Europe after postglacial warming was complete around 9600 BCE.
            Sea levels rose. Britain separated from mainland Europe around 7000 BCE. Forests spread
            north. The large herd animals of the Ice Age were mostly gone. Mesolithic Europeans were
            not simple nomads. They built composite tools, canoes, and fishing gear, and several
            communities settled down year-round (this is called sedentism).
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/Star_Carr_headdress_cropped.JPG"
              alt="Star Carr antler frontlet, a deer skull cap with antlers attached, used by Mesolithic people around 8700 BCE"
              loading="lazy"
            />
            <figcaption>
              Star Carr antler frontlet (deer skull cap with antlers attached), c. 8700 BCE,
              northeast England. These ritual objects show that Mesolithic Europeans invested in
              symbolic life long before farming arrived.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Star_Carr_headdress_cropped.JPG"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>
          <p>
            Lepenski Vir on the Iron Gates of the Danube in Serbia ran from about 9500 to 5500 BCE.
            It had trapezoidal stone-paved house floors in a planned layout and unique fish-faced
            stone sculptures. Farming communities lived nearby for centuries before Lepenski Vir was
            abandoned, so hunter-gatherers clearly did not flip to farming the moment farmers showed
            up next door.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Lepenski_Vir_Head.JPG"
              alt="Stone sculpture from Lepenski Vir showing a fish-human face, from a Mesolithic site on the Danube"
              loading="lazy"
            />
            <figcaption>
              Fish-faced stone sculpture from Lepenski Vir, Serbia. These unique sculptures are
              found in planned stone-paved houses at one of the most unusual Mesolithic sites in
              Europe.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Lepenski_Vir_Head.JPG"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>
          <p>
            Ertebølle in Denmark, plus Skateholm and Vedbaek in Scandinavia, were complex coastal
            Mesolithic communities. Shell middens, cemeteries, and heavy use of marine resources
            mark these sites. Ertebølle people resisted farming for centuries even as Neolithic
            farmers expanded nearby, because rich coastal foraging worked better in their
            environment. Olenii Ostrov in Karelia, Russia, holds the earliest large Mesolithic
            cemetery, with 400 burials. Téviec in Brittany is another Mesolithic cemetery, with
            evidence of violent deaths. Cemeteries require people to return to the same place again
            and again. They imply territorial attachment, social memory, and group identity tied to
            specific land. These traits were long assumed to begin with farming. Mesolithic
            cemeteries show they came first, among mobile foragers.
          </p>

          <h3>The Spread of Farming into Europe</h3>
          <p>
            Farming spread into Europe from Anatolia (modern Turkey). Researchers can now read
            skeletal DNA from ancient teeth and bones. The DNA of early European farmers clusters
            with Anatolian populations, not with local European Mesolithic people. The farmers were
            migrants, not converts. Farming arrived in Greece first, by about 6600 BCE, at sites
            like Nea Nikomedeia, Argissa, and Karanovo.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Migrating farmers (now confirmed by ancient DNA)</strong>
              <p>
                Anatolian farmers migrated into Europe carrying their genes and farming package.
                Ancient DNA strongly supports this for the initial wave.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Indigenous adoption model</strong>
              <p>
                Local European hunter-gatherers adopted farming from neighbors. Ancient DNA now
                largely rules this out for the first wave, though later mixing did occur.
              </p>
            </div>
          </div>
          <p>
            From Greece, farming took two main routes. One ran along the Mediterranean coast and
            used Cardial Ware (pottery decorated with pressed shells). The other went through
            Central Europe: the Bandkeramik or LBK culture (LBK is short for the German
            Linearbandkeramik, the linear-pottery culture). LBK farmers moved along river terraces,
            built long timber houses, and set up cemeteries from around 5600 BCE. The
            Trypillia/Tripolye mega-sites in Ukraine (Maydanetske, Taljanky) reached up to 360
            hectares and housed 5000 to 8000 people, but they were occupied briefly and abandoned.
            They are among the largest pre-urban settlements in human history. They are not true
            cities.
          </p>

          <h3>Violence Among LBK Farmers</h3>
          <p>
            The Bandkeramik expansion was not peaceful. At Talheim in Germany, a pit held 34 people
            killed by axe blows in the late 6th millennium BCE. Herxheim in the Rhineland shows
            cannibalism and ritual dismemberment. Schletz in Austria is another LBK massacre site.
            The pattern points to competition for land among expanding farming communities.
            Agriculture created something worth fighting over: fixed fields, stored grain, and
            territory.
          </p>

          <h3>Varna Cemetery and Early Social Inequality</h3>
          <p>
            The Varna cemetery on the Bulgarian Black Sea coast (4560 to 4450 BCE) holds the richest
            Early Copper Age burials yet found. Some graves contain over 980 gold objects each:
            penis sheaths, pectorals, animal-shaped appliqués, and beads. Other graves contain none.
            Copper mines at Ai Bunar in Bulgaria and Rudna Glava in Serbia were already running by
            about 5100 BCE. The gap between rich and poor graves shows that social hierarchy was
            already institutionalized in Europe over 6000 years ago, well before writing or any
            state.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Burial_with_gold_treasure%2C_4600-4200_BC%2C_AM_Varna%2C_Varm25.jpg"
              alt="Burial with skeleton and gold treasure at the Varna Necropolis, Bulgaria, 4600 to 4200 BCE"
              loading="lazy"
            />
            <figcaption>
              Gold-rich burial from the Varna cemetery, Bulgaria (4600 to 4200 BCE). Some graves
              contain over 980 gold objects. Others contain none. The contrast shows social
              hierarchy was already in place in Europe over 6000 years ago.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Burial_with_gold_treasure,_4600-4200_BC,_AM_Varna,_Varm25.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>

          <h3>The Iceman: A Snapshot of Copper Age Life</h3>
          <p>
            Otzi the Iceman died around 3300 to 3200 BCE in the Alps. Organic materials almost never
            survive 5000 years. His freeze-dried body preserved a copper axe, an unfinished yew bow,
            a quiver with arrows, clothing, and even the contents of his last meals. He had been
            shot in the shoulder with an arrow and died from the wound. Otzi shows what an
            individual Copper Age person actually used day to day. The arrow in his shoulder shows
            individual-level violence, matching the group massacre sites from earlier LBK farmers.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Otzi-Quinson.jpg"
              alt="Reconstruction of Otzi the Iceman, the freeze-dried Copper Age body found in the Alps"
              loading="lazy"
            />
            <figcaption>
              Reconstruction of Otzi the Iceman (Prehistory Museum of Quinson, France). Otzi died
              around 3300 to 3200 BCE. His freeze-dried body preserved tools, clothing, and even his
              last meals, giving rare detail about Copper Age daily life.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Otzi-Quinson.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>

          <h3>Megalithic Monuments</h3>
          <p>
            Atlantic Europe from Portugal to Scandinavia produced megalithic monuments: structures
            built from large stones. They include passage graves, long mounds, stone circles,
            menhirs (single standing stones), and stone rows. Newgrange and Knowth in Ireland went
            up around 3200 BCE. Newgrange is a passage grave aligned so that sunlight enters the
            chamber at the winter solstice sunrise. That alignment required careful astronomical
            work over many years, and the construction itself required large-scale coordinated
            labor. Neolithic communities here were organizing collective work, tracking celestial
            events, and keeping ties to their ancestral dead, all before any metal or writing.
          </p>
          <p>
            Builders raised Stonehenge in Wiltshire in phases, starting around 2950 BCE. Workers
            raised the great sarsen stone circle between 2500 and 2400 BCE. The bluestones came from
            the Preseli hills of Wales, over 200 kilometers away. Durrington Walls and Woodhenge
            form a wider ceremonial landscape, and feasting evidence there suggests big seasonal
            gatherings. Millions still visit Stonehenge each year.
          </p>
          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Stonehenge%2C_Salisbury.JPG"
              alt="Stonehenge on Salisbury Plain, Wiltshire, England, showing the sarsen stone circle"
              loading="lazy"
            />
            <figcaption>
              Stonehenge, Wiltshire, England. Workers raised the sarsen stone circle between 2500
              and 2400 BCE. Bluestones came from Wales, over 200 km away. This shows the organized
              labor and wide connections of Neolithic British society.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Stonehenge,_Salisbury.JPG"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Ancestor veneration</strong>
              <p>
                Stonehenge as a burial monument and place for honoring the dead. Human bones in the
                monument support this.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Astronomical calendar</strong>
              <p>Midwinter sunset and midsummer sunrise alignment shows astronomical function.</p>
            </div>
            <div className="lrn-compare-item">
              <strong>Healing center</strong>
              <p>
                Isotope analysis suggests people traveled from far away, possibly seeking healing.
                Most researchers accept multiple overlapping functions.
              </p>
            </div>
          </div>

          <h3>The Steppe Migration and Bell Beakers</h3>
          <p>
            Around 2800 BCE, a second major population movement reached Europe, this time from the
            Eurasian steppes. The Yamnaya culture brought horses, wheeled vehicles, and a new
            genetic signature. Within only a few centuries, steppe ancestry replaced up to 75% of
            Central European genetic heritage. Three out of every four Central European ancestors
            were replaced by people from the steppe. This was mass migration, not slow cultural
            copying. The Yamnaya expansion is linked to the spread of Indo-European languages, the
            family that includes English, Spanish, French, German, Russian, Hindi, Persian, and
            Greek. Billions of people today speak a language descended from it. Soon after, from
            about 2400 BCE, the Bell Beaker phenomenon spread across Europe with a recognizable kit:
            pottery beakers, copper daggers, archery equipment, and gold ornaments.
          </p>

          <h3>Bronze Age Europe</h3>
          <p>
            The Bronze Age began in Central Europe around 2300 BCE. Smiths combined copper and tin
            to make bronze, a stronger and more workable metal than copper alone. Copper sources
            were widespread, but tin was rare. Communities that wanted bronze had to reach across
            continents to get tin. Cornwall in Britain and parts of Central Asia became key tin
            sources. Tin moved one way along the trade routes and finished bronze moved the other.
            Bronze made elite weapons and tools, so demand stayed high for centuries.
          </p>
          <p>
            The Trundholm sun chariot (bronze, Denmark, about 1650 BCE) and the Nebra sky-disk
            (bronze and gold, Germany, about 1600 BCE) show both technical skill and symbolic depth.
            The Nebra disk depicts the moon, the Pleiades, and a solar arc: the oldest known
            concrete picture of astronomical phenomena. Urnfield cultures (named for their cremation
            burials in fields of urns) dominated Europe between about 1300 and 700 BCE. Biskupin in
            Poland is a well-preserved Urnfield timber township from about 700 BCE.
          </p>

          <h3>Hallstatt Iron Age and Social Complexity</h3>
          <p>
            The Hallstatt Iron Age (700 to 480 BCE) saw hilltop "princely centers" rise in central
            and western Europe. Heuneburg in Bavaria had a Mediterranean-style mud-brick wall.
            Hochdorf in Germany held a "princely" grave from about 530 BCE, with a bronze couch, a
            dismantled wagon, and gold ornaments. Vix in Burgundy held the Vix krater, a massive
            Greek bronze mixing vessel deposited around 530 BCE. The graves concentrate enormous
            wealth: imported Mediterranean luxury goods, feasting equipment, and warrior symbols.
            The pattern points to a small elite controlling trade routes between the Mediterranean
            and northern Europe. Their access to Greek and Etruscan goods gave them prestige. The
            graves are performances of social power, not just burials.
          </p>

          <h3>Who Were the Celts?</h3>
          <p>
            The Celts are one of the most debated categories in European archaeology. Greek and
            Roman writers applied "Celtic" to many peoples they saw as culturally similar, but those
            peoples had diverse local identities. The label is used three ways today: ethnic,
            art-style, and linguistic. They do not all refer to the same thing. The La Tène art
            style (an Iron Age style named after a Swiss lake site) spread across a wide area from
            about 500 BCE, but not everyone who used it spoke Celtic languages. Ancient DNA shows
            that Iron Age Europe was genetically diverse even within what Romans called Celtic
            territory. Rome felt the Celtic world directly: Celts sacked Rome in 390 BCE, and Julius
            Caesar conquered Gaul between 58 and 51 BCE.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <strong>Celtic as ethnic identity</strong>
              <p>
                A specific group with shared descent. Ancient DNA shows genetic diversity within
                this label, undermining simple ethnic definitions.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Celtic as art-style label</strong>
              <p>
                La Tène art tradition used by diverse peoples. Not everyone who used it spoke Celtic
                languages.
              </p>
            </div>
            <div className="lrn-compare-item">
              <strong>Celtic as linguistic family</strong>
              <p>
                A language family with no necessary ethnic or art-style correlation. Most scholars
                now reject simple ethnic definitions.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Common Threads Across the World</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You have now read about four world regions in the Holocene. What patterns do you think
              appear in all four regions?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Four big patterns appear everywhere: settling down without farming, intensification,
                ritual investment, and climate as background driver. The next sections explore each
                one.
              </p>
            </details>
          </div>

          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY INSIGHT</span>
            <p>
              The biggest misconception about world prehistory is that the West set the default and
              everyone else was either behind or copying. The evidence in this module shows the
              opposite. African urbanism at Jenné-jeno grew without a state. Caral in Peru built
              monuments without pottery or writing. Aboriginal Australians intensified foraging
              instead of farming because farming would have failed in their environment. Each region
              took its own path. None were failed attempts to become Europe.
            </p>
          </div>

          <h3>Sedentism Without Agriculture</h3>
          <p>
            Lepenski Vir on the Danube, Ertebølle in Scandinavia, Poverty Point in Louisiana, and
            the Chinchorro communities of coastal Peru all built permanent settlements without
            farming. The common ingredient is a rich, predictable food base: rivers, coasts, and
            wetlands that supply year after year. Once people can rely on local food without moving,
            they invest in houses, storage, and burials. Farming is one route to settled life. Rich
            foraging is another. The pattern recurring on four continents tells you it is a response
            to ecology, not a single cultural invention.
          </p>

          <h3>Intensification</h3>
          <p>
            Intensification appears in every region. Aboriginal Australian backed microliths and eel
            aquaculture, Eastern Woodlands seed cultivation, Andean irrigation, European megalithic
            monuments built around shared territories: all are stepped-up effort extracting more
            from the same land. The driver is not cultural creativity but population pressure. As
            people per square kilometer rises, the easy returns drop, so communities invest more
            labor to keep food per person constant. The strategies look different in each region
            because they had to work with different plants, animals, and landscapes.
          </p>

          <h3>Ritual and Symbolic Life</h3>
          <p>
            Polynesian moai, Andean mummies, Nok terracotta, European megaliths: every region put
            heavy labor into ritual objects and monuments. This is not decoration. Coordinated
            effort on shared shrines builds shared identity. Shared identity makes joint labor
            possible. It justifies the unequal distribution of food, status, and power that comes
            with bigger groups. Societies that coordinate well outcompete those that cannot, so
            ritual investment tracks social scale. The bigger the society, the bigger the ritual
            footprint tends to be.
          </p>

          <h3>Climate as Background Driver</h3>
          <p>
            In every region, Holocene climate change set the field. The African Humid Period enabled
            Saharan cattle pastoralism, then its end drove that whole world south and toward the
            Nile. European postglacial warming spread forests and redrew coastlines. Australian
            recolonization of the interior followed climate improvement. But the same climate event
            can produce opposite social outcomes. The end of the African Humid Period pushed some
            communities south into Sahelian pastoralism and others east toward the Nile, where state
            formation followed. Climate sets the field. People choose how to play. That is climate
            as constraint, not climate as cause.
          </p>

          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY INSIGHT</span>
            <p>
              The four-region pattern still shapes today's world. The crops on your plate, the
              languages most humans speak, the borders of modern states, and the most-visited
              monuments all trace back to choices made between 11,700 and 2,000 years ago. Maize,
              potatoes, sorghum, and wheat feed billions. Indo-European, Bantu, and Austronesian
              languages organize most living speakers. Stonehenge, Easter Island, Great Zimbabwe,
              and the Pyramids are still places people travel to see. The Holocene is not ancient.
              It is the world we live in.
            </p>
          </div>
        </>
      ]
    },
    practice: shuffleInterleaved([
      // Australia & Indo-Pacific
      [
        {
          q: 'At Kuk Swamp in New Guinea, what did archaeologists find, and why does it matter?',
          a: 'Archaeologists found drainage ditches and evidence of taro cultivation going back to about 7000 BCE. This makes Kuk Swamp one of the earliest independently invented agricultural sites in the world. It proves that farming was not a single invention that spread from one place.'
        },
        {
          q: 'What is the Lapita cultural complex?',
          a: 'Lapita is a cultural complex linked to the expansion of Austronesian-connected peoples across Island Melanesia and into the Pacific from about 3500 BCE. It is identified by dentate-stamped geometric pottery, exchange networks, and canoe-based colonization. Lapita reached Tonga and Samoa by about 1000 BCE.'
        },
        {
          q: 'What is the Out of Taiwan model for Austronesian dispersal?',
          a: 'The Out of Taiwan model holds that Austronesian-language speakers spread south from Taiwan around 3000 BCE. They moved through the Philippines and Indonesia, eventually colonizing the Pacific. Evidence includes language family trees pointing to Taiwan and sites like Nanguanli, Dabenkeng, and the jade trade center at Beinan.'
        },
        {
          q: 'If a society today spoke Tagalog, Malay, or Hawaiian, what past expansion would you point to as the deep source of its language?',
          a: 'The Austronesian dispersal out of Taiwan, beginning around 3000 BCE. Tagalog, Malay, Indonesian, Hawaiian, and Malagasy are all Austronesian languages. They descend from the same Taiwan-origin family that spread south through the Philippines and then across the Pacific and Indian Oceans.'
        },
        {
          q: 'What are backed microliths and what does their appearance in Australia signal?',
          a: 'Backed microliths are small, sharp stone flakes with one blunted edge, designed to be attached to handles or shafts. Their appearance in Australia from about 5000 BCE signals intensification. People invested more complex effort per tool, which is consistent with rising population pressure and more specialized land use.'
        },
        {
          q: 'What is the Tasmanian fish cessation debate, and what does it tell us about archaeological interpretation?',
          a: 'Fish bones are common in early Tasmanian middens. Then they vanish from the record. Three explanations compete: cultural taboo, environmental change reducing fish, or resource depletion. The debate shows that absence of evidence is not simple evidence of absence. No fish bones could mean a diet change, a camp-location change, or a discard-behavior change.'
        },
        {
          q: 'Imagine a Polynesian group colonized an isolated island with limited resources 1,500 years ago. Based on the Easter Island evidence, what would you predict about their long-term fate?',
          a: 'The Easter Island evidence predicts environmental stress and possible collapse. Easter Island shows rapid deforestation linked to monument-building (moai) and population growth. When forest resources ran out, farming and fishing got harder. The population suffered severe decline. An isolated island with limited resources and growing demands is vulnerable to the same cycle.'
        },
        {
          q: 'Why is it significant that Polynesian voyaging reached Easter Island and Hawaii?',
          a: 'These are among the most remote inhabited places on Earth. Reaching them required deliberate navigation using stars, wave patterns, and bird behavior. The colonization of Remote Oceania proves that Polynesian canoe technology and navigational knowledge were sufficient for sustained long-distance exploration across open ocean. It is one of the greatest feats of maritime exploration in human history.'
        },
        {
          q: 'What is the Lapita cemetery at Teouma and what does it tell us about Lapita identity?',
          a: 'Teouma on Vanuatu is a Lapita cemetery with skeletal remains linking Lapita people genetically to modern Pacific populations. It provides biological evidence that the Lapita expansion was a real population movement, not just the spread of a pottery style adopted by local people. Teouma anchors the Lapita cultural complex to a specific ancestral population.'
        },
        {
          q: 'Aboriginal Australians intensified foraging with backed microliths and eel aquaculture. New Guinea people invented farming at Kuk Swamp. Both responses happened in the same time period. Apply this contrast to the claim that agriculture is always the most efficient response to population pressure.',
          a: 'Aboriginal Australia and New Guinea show that agriculture is not always the most efficient response to population pressure. New Guinea had wild plants suitable for domestication and wet highland conditions. Australia had few domesticable species and variable soils. Each group chose the strategy that fit their available resources. Aboriginal intensification was not a failure to reach agriculture. It was the optimal local strategy.'
        },
        {
          q: "What does Lapita pottery's dentate-stamped geometric pattern tell us about Lapita society?",
          a: 'The pattern stays consistent across thousands of kilometers of Pacific islands over several centuries. This requires sustained communication across scattered island communities. Lapita people maintained active exchange networks, not just initial colonization. The shared pottery tradition is evidence of a connected social world.'
        },
        {
          q: 'What does the Beinan jade trade network reveal about Taiwan before the Austronesian dispersal?',
          a: 'Beinan on Taiwan was a nephrite jade trade center that sent ornaments south to the Philippines and Vietnam before the main Austronesian dispersal. This shows that Taiwanese communities had long-distance maritime exchange networks before 3000 BCE. The dispersal did not emerge from isolation. It grew from a culture already used to seaborne trade.'
        },
        {
          q: 'What is Toolondo in Victoria, Australia, and what does it demonstrate?',
          a: 'Toolondo is an Aboriginal Australian site in Victoria with evidence of eel aquaculture: channels dug to trap eels. This is deliberate, labor-intensive food production that is not farming. It shows that Aboriginal Australians managed their environment actively. They used engineered water management to increase food yields, without domesticating any plant or animal in the usual sense.'
        },
        {
          q: 'The Lapita expansion carried dentate-stamped pottery across Island Melanesia. An archaeologist finds the same pottery style on an island 2,000 kilometers east of the nearest confirmed Lapita site. Apply the Lapita colonist vs. adoption debate to interpret this finding.',
          a: 'The colonist model predicts that finding the pottery at that distance means Lapita people physically settled the island, bringing pigs, chickens, dogs, and plants. The adoption model predicts the pottery style spread through exchange. To distinguish them, look at ancient DNA. If the islanders cluster genetically with Taiwan-origin populations, the colonist model is supported. If they cluster with earlier local populations, the adoption model gains ground. The Teouma cemetery shows that DNA evidence increasingly supports colonist movement.'
        },
        {
          q: 'What is Borobudur and how does it relate to Austronesian connections?',
          a: 'Borobudur on Java is a Buddhist monument. Prambanan nearby is a Hindu monument. Both reflect deep connections between Island Southeast Asia (where Austronesian languages are spoken) and South Asian trade and religious networks. They show that the Austronesian world was not isolated from mainland Asian civilizations. It was embedded in long-distance maritime trade and cultural exchange.'
        }
      ],

      // Americas
      [
        {
          q: 'What is the Eastern Agricultural Complex and when did it begin?',
          a: 'The Eastern Agricultural Complex is a set of native North American crops: goosefoot (chenopod), sunflower, sumpweed (marsh elder), and maygrass. It began around 5000 BCE in Eastern North America, centuries before maize arrived from Mesoamerica.'
        },
        {
          q: 'If a future archaeologist found seed-storage pits in a region with no maize, what would they conclude based on the Eastern Agricultural Complex evidence?',
          a: 'They would conclude that an indigenous crop tradition probably existed there before maize arrived. The Eastern Agricultural Complex shows that people in Eastern North America cultivated their own native species (goosefoot, sunflower, sumpweed, maygrass) for thousands of years before maize spread north. Storage pits without maize point to a similar independent local crop set rather than a copy of Mesoamerican farming.'
        },
        {
          q: 'At Guilá Naquitz in Oaxaca, what evidence of early cultivation was found?',
          a: 'Archaeologists found squash cultivation evidence going back to about 9000 BCE, and transitional maize-teosinte cobs showing the early stages of maize domestication. Guilá Naquitz is the key site for the earliest Mesoamerican domestication evidence.'
        },
        {
          q: 'Why is the absence of ceramics at Norte Chico / Caral surprising?',
          a: 'Norte Chico / Caral (about 3200 BCE) had monumental architecture, organized labor, and quipus (recording devices), but no pottery. Ceramics are usually a marker of settled farming societies. Norte Chico shows that administrative complexity and monument-building can develop without pottery. The economy was based on maritime resources and cotton rather than grain.'
        },
        {
          q: 'What was Poverty Point and why does it challenge assumptions about social complexity?',
          a: 'Poverty Point in Louisiana (1700 to 1100 BCE) was a large earthwork complex with evidence of long-distance exchange in red jasper and magnetite. It was built by Archaic foragers, not farmers. It challenges the assumption that complex societies with monuments and trade networks require agriculture as a prerequisite.'
        },
        {
          q: 'What crops did Andean highland societies domesticate, and how do they differ from Mesoamerican domesticates?',
          a: 'Andean domesticates include quinoa, potatoes, llamas, and alpacas. Mesoamerican domesticates include maize, beans, and squash. These are completely different species, domesticated independently from different wild ancestors. Both sets of crops were adapted to their local environments. Andean crops suit high-altitude cold. Mesoamerican crops suit tropical lowlands.'
        },
        {
          q: 'Why is the teosinte-to-maize transition significant as evidence of independent domestication?',
          a: "Teosinte and maize look completely different. Teosinte has a tiny hard cob with a few kernels. Maize has a large soft cob with many kernels. Mesoamerican people had no contact with Near Eastern farmers. They turned a wild grass into one of the world's most important crops without outside guidance. This is independent invention of agriculture from a different wild species."
        },
        {
          q: 'What evidence does Watson Brake provide about early North American societies?',
          a: 'Watson Brake in Louisiana (about 3500 BCE) is a mound complex built by Archaic foragers. It is one of the earliest monument-building sites in North America. Its existence shows that labor coordination and territorial marking occurred in North America centuries before maize agriculture arrived. This challenges the idea that monument-building requires farming.'
        },
        {
          q: 'Why did farming spread into the American Southwest through irrigation and terracing rather than simple field systems?',
          a: 'The American Southwest is semi-arid. Rainfall is insufficient and unreliable for unirrigated farming in many areas. Maize requires consistent moisture. Irrigation at sites like Las Capas (about 1200 BCE) and terracing at Cerro Juanaqueña were necessary changes. Southwestern farmers took a Mesoamerican crop and engineered water management systems to make it work in a drier environment.'
        },
        {
          q: 'What crops formed the "Three Sisters" of Mesoamerican agriculture and why are they nutritionally significant together?',
          a: 'The Three Sisters are maize, beans, and squash. Together they form a nutritionally complete diet. Maize provides carbohydrates. Beans provide protein and lysine missing from maize. Squash provides vitamins and minerals. The combination is more complete than any single crop. This synergy likely drove the dominance of this set of crops across Mesoamerica and its eventual spread across the Americas.'
        },
        {
          q: 'A highland Andean community had llamas but no maize. A lowland coastal community had abundant fish but no llamas. Based on Norte Chico evidence, predict what economic relationship would develop between them.',
          a: 'Norte Chico / Caral shows that coastal maritime communities produced cotton for textiles while highland communities produced wool from camelids. Both were embedded in the same exchange network. You would predict complementary exchange. Coastal fish and cotton would move inland. Highland camelid fiber and dried meat would move toward the coast. Llamas as pack animals made the exchange physically possible across mountain terrain.'
        },
        {
          q: 'Why is camelid domestication especially significant for Andean civilizations?',
          a: 'Llamas and alpacas are the only large domesticated animals native to the Americas. They provided meat, fiber, and pack transport. Transport was transformative. It extended the reach of Andean trade networks across thousands of kilometers of mountain terrain. Without pack animals, long-distance exchange of heavy goods is nearly impossible. Camelid domestication was the foundation of Andean economic integration.'
        },
        {
          q: 'What is the Chinchorro tradition?',
          a: "The Chinchorro tradition (about 5000 to 3000 BCE) is one of the world's oldest practices of intentional mummification. Chinchorro people in northern Chile (at sites like Camarones and El Morro) used clay, paint, sticks, and reeds to rebuild and preserve bodies. This is evidence of elaborate ritual investment in the dead in a pre-agricultural coastal society."
        },
        {
          q: 'Why does the Windover site in Florida matter for understanding Archaic North America?',
          a: 'Windover is an Archaic wet site where waterlogged conditions preserved organic materials including textiles and brain tissue. These are almost never preserved. Windover provides a rare window into the biological and material lives of Archaic people. It shows that Archaic societies had sophisticated material culture that rarely survives in the archaeological record.'
        },
        {
          q: 'Why did the Great Basin foragers of western North America not adopt agriculture during the Holocene?',
          a: 'The Great Basin is a semi-arid environment with few plants suitable for domestication. The high mobility required to use dispersed desert resources was more efficient than trying to farm. Sites like Danger Cave, Hogup Cave, and Fort Rock Cave show long-term, successful seed-grinding economies. When farming offered no clear advantage over existing strategies, people did not adopt it.'
        },
        {
          q: 'What is the significance of Pedra Pintada in the Amazon for understanding early American diversity?',
          a: 'Pedra Pintada in Brazil documents early forager occupation of the Amazon, showing that Amazonian groups were not passive or absent during the Holocene. Evidence of forest management and early cultigens in Amazonian rock shelters shows that Amazon people actively shaped their environments. The Amazon was not a pristine wilderness encountered by later civilizations. It was shaped by thousands of years of human management.'
        }
      ],

      // Africa
      [
        {
          q: 'What was the African Humid Period and how did its end shape African prehistory?',
          a: 'The African Humid Period (about 11,000 to 5,000 BCE) was a wet phase when the Sahara supported grasslands, lakes, and cattle pastoralism. When it ended and the Sahara dried out, communities moved south and toward the Nile. That spread pastoralism and agriculture into sub-Saharan Africa.'
        },
        {
          q: 'Why did the Bantu expansion matter for sub-Saharan African history?',
          a: 'The Bantu expansion spread pottery-making, farming, and ironworking from a homeland near Shum Laka in Cameroon southward and eastward across sub-Saharan Africa. It started before 1000 BCE and reached southern Africa by 300 to 700 CE. It transformed the linguistic, agricultural, and technological landscape of most of Africa south of the Sahara.'
        },
        {
          q: 'Why is the independence debate about African ironworking important for understanding technological change?',
          a: 'If Africa invented ironworking independently, it shows that complex metallurgy can be invented multiple times in different places, just like agriculture. Africa also skipped the bronze age in many regions, going from stone tools directly to iron. That pattern shows technological change is not a universal fixed sequence. It depends on local available materials and needs.'
        },
        {
          q: 'What is Jenné-jeno and why does it challenge older ideas about African urbanism?',
          a: 'Jenné-jeno in Mali was founded around 250 BCE. It became one of the earliest urban centers in West Africa. It developed without strong evidence of centralized political control or a state apparatus. Earlier theories held that cities require states. Jenné-jeno suggests that social aggregation from multiple communities (synoecism) can produce urban-scale settlements without central authority.'
        },
        {
          q: "What is the significance of Igbo-Ukwu's bronze hoard?",
          a: 'Igbo-Ukwu in Nigeria (9th to 10th centuries CE) contained 685 copper and bronze objects plus 165,000 beads. This wealth in a non-state community shows that sophisticated metalworking and long-distance trade networks existed outside major African state societies. The raw materials had to come from distant sources. That proves Igbo-Ukwu was embedded in wide exchange networks.'
        },
        {
          q: 'What is synoecism in the context of African archaeology?',
          a: 'Synoecism is the process of social aggregation, where multiple smaller communities come together to form a larger settlement. African archaeologists have used it to explain the growth of urban centers like Jenné-jeno without centralized state authority. It challenges the assumption that cities must be organized top-down by rulers. African urbanism appears to have grown bottom-up in some cases.'
        },
        {
          q: 'What is the key debate about Saharan cattle domestication and why does it matter?',
          a: 'The debate is whether the cattle pastoralists at Nabta Playa and Bir Kiseiba (around 9000 BCE) domesticated their own local African wild cattle (Bos primigenius africanus), or whether they received already-domesticated cattle from Southwest Asia. If locally domesticated, Africa was an independent center of cattle domestication. The question matters for whether Africa was an innovator or a recipient of Near Eastern innovations.'
        },
        {
          q: 'What does the secondary products revolution mean for African cattle-herding societies?',
          a: 'The secondary products revolution refers to using animals for products beyond meat: milk, hides, and traction for plowing. For African cattle-herding societies, this multiplied the value of each animal. A cow that was eaten once could instead provide milk for years. Sanga-type cattle (a taurine-zebu cross) were suited to African disease environments and gave African herders more productive animals than pure European or Asian breeds.'
        },
        {
          q: 'What is the Swahili coast and how did Indian Ocean trade shape it?',
          a: 'The Swahili coast is the East African coastline from Kenya to Tanzania where trading towns like Gedi, Shanga, Kilwa, and Kaole developed from about 700 CE onward. Indian Ocean trade brought goods from Arabia, India, and China in exchange for African gold, ivory, and iron. Indian Ocean trade transformed these coastal communities from local fishing villages into wealthy trading cities connected to a global network.'
        },
        {
          q: 'What is the relationship between the Indian Ocean trade network and Great Zimbabwe?',
          a: "Great Zimbabwe (1300 to 1450 CE) on the Zimbabwe Plateau accumulated wealth through control of gold and ivory trade linking the African interior to Swahili coast ports. Chinese porcelain found at Great Zimbabwe reflects connections to the Indian Ocean trade network. The state's rise was directly tied to its position as a regional power in the Indian Ocean exchange system."
        },
        {
          q: 'What did Aksum contribute to African state development?',
          a: 'Aksum in Ethiopia was a Christian state with its own coinage (gold, silver, copper), enormous stone stelae, and extensive Red Sea trade connections. Aksumite coinage shows a monetized economy. The stelae show monumental ambition. Aksum demonstrates that state-level complexity with written religion, metallic currency, and monumental architecture developed independently in the African Horn.'
        },
        {
          q: 'Why did sub-Saharan Africa domesticate different crops from the Near East?',
          a: 'Sub-Saharan Africa has seasonal tropical rainfall patterns. Sorghum and millet tolerate dry seasons better than wheat and barley. Yams suit humid forest zones. Near Eastern crops were bred for Mediterranean-type winter rainfall. Using them in tropical Africa would require irrigation or rebreeding. African domesticates were already adapted to local conditions. Crop choice follows environmental fit, not cultural borrowing.'
        },
        {
          q: 'What is the Sanga-type cattle and why does it matter for African pastoralism?',
          a: 'Sanga-type cattle result from crossing taurine cattle (the original Near Eastern domestic stock) with zebu cattle introduced from South Asia. The resulting animals are better adapted to African disease environments. They have greater resistance to trypanosomiasis than either parent stock. Sanga-type diversity expanded the range of cattle herding in Africa and made pastoralism viable in environments where neither pure breed thrived.'
        },
        {
          q: 'What is the Nok culture of Nigeria?',
          a: 'The Nok culture on the Jos Plateau of Nigeria flourished from about 500 BCE to 500 CE. It produced distinctive terracotta sculptures and evidence of early ironworking. Nok is significant as both an early center of African iron technology and as a source of sophisticated representational art predating later West African bronze traditions.'
        },
        {
          q: "What is the significance of Nabta Playa's stone calendar circle?",
          a: 'Nabta Playa (Sudan/Egypt, about 9000 BCE) has a stone arrangement functioning as a calendar circle, the earliest such structure known in Africa. It shows that Saharan pastoral communities tracked celestial cycles, probably for seasonal planning of herding movements. Astronomical awareness in early pastoral communities is evidence of systematic environmental observation, not just day-to-day survival.'
        },
        {
          q: 'If the Saharan Humid Period had not ended around 5000 BCE, how might the development of sub-Saharan Africa and Egypt have differed?',
          a: 'If the Sahara had remained wet, populations would have stayed spread across the Saharan grasslands rather than concentrating in the Nile Valley. Egyptian state formation depended partly on the concentration of population along the Nile caused by Saharan drying. Sub-Saharan pastoralism may have stayed localized rather than expanding southward. The climate ending was a driver of population movements that shaped the entire path of African prehistory.'
        },
        {
          q: 'What does the Quseir al-Qadim site reveal about East-West connections in Africa?',
          a: "Quseir al-Qadim on Egypt's Red Sea coast was a trading port linking African goods to the Indian Ocean network. It shows that Egypt was not just connected to the Mediterranean and Mesopotamia. It was also a node in the Indian Ocean trade system, connecting Africa to Arabia, India, and eventually China. Africa's trade connections ran in multiple directions at once."
        },
        {
          q: 'If a modern society wanted to intensify food production in a savanna region without adopting new crops from outside, what Holocene African examples would support that strategy?',
          a: 'Sub-Saharan African societies domesticated sorghum, pearl millet, and yams from local wild plants, entirely independent of Near Eastern crops. These crops were already adapted to savanna rainfall patterns. A modern society in a savanna region could follow the same principle: identify locally adapted species and breed from them, rather than importing crops that need irrigation or rebreeding to function.'
        },
        {
          q: 'What is the Nile flood agriculture model and how does it differ from rain-fed farming?',
          a: 'Nile flood agriculture uses the annual Nile flood to deposit rich silt on fields. Farmers plant crops as the flood retreats and harvest them before the next flood. This requires no irrigation technology or soil amendment. It is extremely productive with minimal labor. Rain-fed farming depends on seasonal rainfall distribution and requires more active management. Nile flood agriculture was the economic foundation of pharaonic Egypt.'
        },
        {
          q: 'What does the Narmer Palette document and why does it matter?',
          a: 'The Narmer Palette (c. 3000 BCE) documents the unification of Upper and Lower Egypt. It shows a king defeating enemies and wearing the crowns of both halves of Egypt. It matters because it marks the beginning of the pharaonic state tradition: a centralized monarchy, narrative monumental art, and state ideology all appear together. It is one of the earliest known pieces of Egyptian narrative art.'
        },
        {
          q: 'Why is the Egyptian question of writing origins (independent invention vs. Mesopotamian stimulus) significant?',
          a: 'If Egyptian writing was invented independently of Mesopotamian cuneiform, it is a second independent invention of writing. That would mean writing, like agriculture, was invented multiple times when the social conditions were right. If contact with Mesopotamia stimulated it, that shows how powerful ideas spread without full cultural transfer. Either answer has broad implications for how we think about cognitive and cultural development.'
        }
      ],

      // Europe
      [
        {
          q: 'What did ancient DNA reveal about the spread of farming into Europe?',
          a: 'Ancient DNA showed that early European farmers were migrants from Anatolia, not local hunter-gatherers who adopted agriculture. The DNA of early farmers clusters with Anatolian populations, not with European Mesolithic people. That settled the long debate in favor of farmer migration.'
        },
        {
          q: 'The LBK farmers spread rapidly across Europe. If a modern population were to expand rapidly into a new continent today, what pattern from the LBK expansion would you predict?',
          a: 'You would predict violence at the frontier. LBK expansion produced massacre sites at Talheim (34 killed), Herxheim (cannibalism), and Schletz. When expanding farming communities compete with established groups for limited good land, violent conflict is predictable. The historical pattern suggests land competition is a near-universal trigger for inter-group violence during colonization.'
        },
        {
          q: 'What is Lepenski Vir and what makes it unusual?',
          a: 'Lepenski Vir on the Iron Gates of the Danube (Serbia) was a Mesolithic site occupied from about 9500 to 5500 BCE. It has permanent stone-paved house floors in a planned layout and unique fish-faced stone sculptures. It lasted for thousands of years while farming communities expanded nearby. That shows hunter-gatherers did not automatically adopt agriculture when farmers appeared.'
        },
        {
          q: 'What is the Varna cemetery and why is it significant?',
          a: 'Varna is a cemetery on the Bulgarian Black Sea coast dated to about 4560 to 4450 BCE. Some graves contain over 980 gold objects each. Other graves are empty. The extreme inequality shows that social stratification was already institutionalized in Europe over 6000 years ago. This was well before writing or state formation.'
        },
        {
          q: 'What did the Yamnaya expansion bring to Europe and when?',
          a: 'Around 2800 BCE, the Yamnaya culture from the Eurasian steppes expanded into Europe. It brought horses, wheeled vehicles, and its own genetic signature. Ancient DNA shows that steppe ancestry replaced up to 75% of Central European genetic heritage within a few centuries. The Yamnaya expansion is linked to the spread of Corded Ware pottery and to Indo-European languages.'
        },
        {
          q: 'What does the Amesbury Archer burial tell us about Bell Beaker connections across Europe?',
          a: 'The Amesbury Archer burial is the richest Bell Beaker grave in Britain. The man was 35 to 45 years old. Isotope analysis of his teeth shows he grew up in mainland Europe, not Britain. This confirms that the Bell Beaker phenomenon involved real movement of people across long distances, not just the adoption of pottery styles by local populations.'
        },
        {
          q: 'What makes Star Carr significant among Mesolithic European sites?',
          a: 'Star Carr in northeast England (8770 to 8460 BCE) produced antler frontlets (deer skull caps with antlers attached). They may have been used in ritual or hunting. The site shows careful selection beside a lake, repeated occupation, and rich artifact assemblages. It shows that Mesolithic Europeans invested in ritual objects and returned to meaningful places repeatedly.'
        },
        {
          q: 'If a population of foragers in a resource-rich coastal zone began experiencing population growth, what would you predict about their social organization based on Holocene patterns?',
          a: 'Based on sites like Poverty Point, Ertebølle, and the Peruvian coast, you would predict increased social complexity without farming. Rich predictable resources allow sedentism. Sedentism enables storage. Storage creates wealth differences. Wealth differences produce social hierarchy. Monument-building, long-distance trade, and elaborate burial practices are all predictable outcomes of resource-rich sedentary foraging.'
        },
        {
          q: 'What is the Bell Beaker phenomenon and what did it spread?',
          a: 'The Bell Beaker phenomenon spread from about 2400 BCE across Europe. It involved a package of material culture: distinctive pottery beakers, copper daggers, archery equipment, and gold ornaments. Ancient DNA suggests both migration and local adoption occurred in different regions. Bell Beakers mark the spread of both ideology and metallurgy across Atlantic and Central Europe.'
        },
        {
          q: 'What do Mesolithic European cemeteries at Olenii Ostrov, Téviec, Vedbaek, and Skateholm reveal?',
          a: 'These cemeteries show that hunter-gatherers established territorial identity and burial ritual long before farming arrived in Europe. Cemeteries require returning to the same place repeatedly. That implies social memory, group identity, and attachment to specific locations. These traits were once associated only with settled farmers. Mesolithic cemeteries prove they existed among mobile foragers too.'
        },
        {
          q: 'What did the Iceman (Otzi) reveal about Copper Age life in the Alps?',
          a: 'Otzi died around 3300 to 3200 BCE. His freeze-dried body preserved a copper axe, an unfinished yew bow, arrows, clothing, and food remains. He was killed by an arrow wound to the shoulder. He shows the material reality of Copper Age daily life: tool kits, clothing, and diet. His arrow wound shows individual-level violence, paralleling the massacre sites of earlier LBK farmers.'
        },
        {
          q: 'How does Stonehenge relate to the broader ceremonial landscape around it?',
          a: 'Stonehenge was not built alone. Durrington Walls and Woodhenge form a ceremonial complex nearby. Evidence of feasting at Durrington Walls suggests large seasonal gatherings. Stonehenge itself shows midwinter alignment, human burials, and evidence of use over centuries. It is best understood as a focal point for a wide regional community. Functions included ancestor veneration, astronomical marking, and social gathering.'
        },
        {
          q: 'What makes Newgrange in Ireland significant for understanding megalithic monument building?',
          a: 'Newgrange (about 3200 BCE) is a passage grave aligned so that sunlight enters the burial chamber at winter solstice sunrise. This required precise astronomical observation and planning. The engineering of the passage alignment proves intentional celestial orientation. Combined with its function as a burial monument, Newgrange shows that ritual, astronomy, and ancestor veneration were integrated in Atlantic European megalithic traditions.'
        },
        {
          q: 'How does the Trypillia mega-site phenomenon differ from true urban centers?',
          a: 'Trypillia mega-sites like Maydanetske and Taljanky (Ukraine, 4000 to 3000 BCE) reached up to 360 hectares and housed 5000 to 8000 people. But they were occupied for short periods and then abandoned. True cities have permanent occupation, specialized production districts, and surrounding hinterlands. Trypillia mega-sites lack these features. They are better understood as periodic aggregation sites, not cities.'
        },
        {
          q: 'A society builds a monument requiring thousands of person-hours of labor. They have no writing, no formal state, and no surplus grain agriculture. What does this tell you? Use two examples from this module.',
          a: 'It tells you that complex social organization does not require writing, states, or grain farming. Watson Brake (3500 BCE, North America) was built by Archaic foragers. Norte Chico / Caral (3200 BCE, Peru) built monuments on a maritime economy without ceramics or writing. Both cases show that monument-building requires only labor coordination and a surplus of some kind, not the specific technologies we usually associate with civilization.'
        },
        {
          q: 'What is the Hallstatt Iron Age and why are "princely" graves significant?',
          a: 'The Hallstatt Iron Age (700 to 480 BCE) saw hilltop fortified centers emerge in Central and Western Europe. "Princely" graves like Hochdorf (Germany, about 530 BCE) and Vix (Burgundy, about 530 BCE) concentrated huge wealth: Mediterranean imports, feasting equipment, and warrior symbols. They reveal a small elite controlling trade routes between the Mediterranean and northern Europe.'
        },
        {
          q: 'What is the La Tène art style and why is the question "who were the Celts?" difficult to answer?',
          a: 'La Tène is an Iron Age art style appearing from about 500 BCE. Romans associated it with peoples they called Celts. The difficulty is that "Celtic" as a label is used three ways: as an ethnic identity, an art-style tradition, and a linguistic family. These three categories do not overlap cleanly. Not everyone who used La Tène art spoke Celtic languages. Ancient DNA shows genetic diversity within what Romans called Celtic territory.'
        },
        {
          q: 'Imagine you are an archaeologist who finds a site with elaborate burials containing huge amounts of gold but no writing or known political structure. Based on Varna, what would you infer?',
          a: 'Based on Varna, you would infer early social stratification without a formal state. Varna shows that extreme wealth differences can exist in societies without writing or formal government. The inequality is shown in burial wealth. Gold requires metalworking skill and exchange networks. Rich graves signal institutionalized hierarchy. You would predict a chiefdom-level or rank society, not a simple egalitarian band.'
        },
        {
          q: 'Why does the spread of the Bandkeramik / LBK culture into Europe from about 5600 BCE constitute evidence for farmer migration rather than indigenous adoption?',
          a: 'LBK farmers moved along river terraces with a consistent package: long timber houses, specific pottery, cemeteries, and domesticated animals. This package appears suddenly in regions that had Mesolithic forager populations. The LBK package is so internally consistent and geographically coherent that it cannot be explained by independent invention at each location. Ancient DNA confirms the biological difference between LBK farmers and contemporary Mesolithic people.'
        },
        {
          q: 'What does the Vix krater tell us about Iron Age European trade networks?',
          a: "The Vix krater (deposited about 530 BCE in Burgundy) is the largest surviving Classical metal vessel. It was made in Greece and found in a woman's grave in Iron Age France. This shows that elite Iron Age Europeans at Hallstatt princely centers had direct access to high-quality Greek imports. The trade routes connecting Mediterranean craftspeople to Celtic elites were functioning at a continental scale."
        },
        {
          q: 'What does the Nebra sky-disk reveal about Bronze Age European cosmology?',
          a: 'The Nebra sky-disk (bronze and gold, Germany, about 1600 BCE) shows a moon, stars including the Pleiades, and a solar ship or horizon arc. It is the oldest known concrete depiction of astronomical phenomena. Combined with the Trundholm sun chariot (Denmark, about 1650 BCE), it shows that Bronze Age Europeans had sophisticated celestial symbolism. Astronomical observation was integrated into elite religious practice.'
        },
        {
          q: 'What is the Ertebølle culture and what does it show about Mesolithic complexity?',
          a: 'Ertebølle in Denmark was a complex coastal Mesolithic culture living from maritime resources. Shell middens, cemeteries, and evidence of intensive fish and sea mammal use mark the sites. Ertebølle people did not adopt farming when early Neolithic farmers appeared nearby. They resisted agriculture for centuries. That shows rich coastal foraging was a viable and preferred alternative to farming in productive coastal environments.'
        },
        {
          q: 'What do the bog bodies of northern Europe (Oldcroghan Man, Lindow Man, Grauballe Man) suggest about Iron Age religion?',
          a: 'Bog bodies show signs of ritual killing: multiple causes of death, a last ritual meal, and deposition in watery places sacred in northern European Iron Age religion. They cluster geographically and in time, suggesting a shared ritual tradition of sacrifice at the boundary between water and land, places that felt sacred to people then. Bog deposition was not random disposal. It was intentional placement.'
        },
        {
          q: 'When and where did the Bronze Age begin, and what was its key technological innovation?',
          a: 'The Bronze Age began in Central Europe around 2300 BCE. Its key innovation was combining copper and tin to make bronze, a stronger and more workable alloy than copper alone. Tin sources were scarce. That drove long-distance trade networks across Europe. Elite warrior graves, hoards like Bresinchen, and astronomical bronzes like the Nebra sky-disk all date from the Bronze Age.'
        },
        {
          q: 'What were megalithic monuments and where were they built?',
          a: 'Megalithic monuments are structures built from large stones. They include passage graves (Newgrange), long mounds, stone circles (Stonehenge), menhirs, and stone rows (Carnac). They were built across Atlantic Europe from Portugal to Scandinavia between about 4000 and 2000 BCE. They required large coordinated labor and often align with astronomical events. Many remain famous tourist sites today.'
        }
      ],

      // Cross-region / Common Threads
      [
        {
          q: 'What is the Holocene and when did it begin?',
          a: 'The Holocene is the current geological period, starting about 11,700 years ago when global temperatures stabilized after the last Ice Age. Warming caused ice sheets to melt. Sea levels rose. Coastlines changed. New ecosystems spread. These changes opened new habitats and made stable settlement possible. The Holocene is the backdrop for all major developments in human prehistory: farming, cities, metallurgy, and writing.'
        },
        {
          q: 'If a society today faced a sudden global climate stabilization after centuries of unstable weather, what changes would the Holocene record predict?',
          a: 'You would predict permanent settlement, food storage, monument-building, and the rise of social hierarchies tied to surplus and territory. Predictable seasons let people plan harvests, dig wells, and build heavy houses. None of those investments pay off in shifting weather. The Holocene record shows that climate stability is what made permanent settlement, farming, and complex society pay off across four continents.'
        },
        {
          q: 'What is intensification in archaeology?',
          a: 'Intensification means stepping up resource use: extracting more food from the same area by investing more labor, technology, or organization. It occurs when population growth reduces available resources per person. Aboriginal Australian backed microliths, Eastern Woodlands seed cultivation, and Andean irrigation are all examples.'
        },
        {
          q: 'Why do Holocene populations across all four world regions invest in ritual monuments even when subsistence is difficult?',
          a: 'Ritual requires coordination. Coordination creates shared identity. Shared identity binds groups together. It makes collective labor possible. It justifies social hierarchies that distribute food and protection. Ritual monuments are not luxuries added after survival is secured. They are tools for maintaining the social structures that make group survival possible. Societies that coordinate effectively outcompete those that cannot, so ritual investment has a direct functional payoff.'
        },
        {
          q: 'How does climate determinism differ from the "climate as constraint" view, and which is better supported by Holocene evidence?',
          a: 'Climate determinism holds that climate change directly causes social change. The constraint view holds that climate sets conditions within which people make variable choices. The Holocene evidence supports the constraint view. The same African Humid Period end caused different responses: Egyptian state formation, Saharan abandonment, and southward pastoral expansion. Same climate change, different outcomes. Human agency, existing social structures, and available species all shaped responses.'
        },
        {
          q: 'Name the four cross-regional patterns identified in this module and give an example of each.',
          a: 'The four cross-regional patterns are: (1) Sedentism without agriculture (Lepenski Vir, Ertebølle, Poverty Point, Chinchorro). (2) Intensification (Aboriginal backed microliths, Andean irrigation, Eastern Agricultural Complex). (3) Ritual and symbolic life (moai, mummies, Nok terracotta, megaliths). (4) Climate as background driver (African Humid Period, postglacial European warming, Australian Holocene recolonization). Each pattern appears in all four world regions.'
        }
      ]
    ]),
    reference: {
      category: 'Quick Reference',
      title: 'Holocene Societies Across the World',
      sections: [
        <>
          <div className="ref-section">
            <div className="ref-label">KEY DATES AND PERIODS</div>
            <div className="ref-grid">
              <div className="ref-item">
                <strong>11,700 BP</strong>
                <p>
                  BP means "years before present." Holocene begins. Global temperatures stabilize
                  after the last Ice Age.
                </p>
              </div>
              <div className="ref-item">
                <strong>~11,000 BCE</strong>
                <p>African Humid Period begins. Sahara becomes productive grassland with lakes.</p>
              </div>
              <div className="ref-item">
                <strong>~9600 BCE</strong>
                <p>
                  Postglacial warming complete in Europe. Mesolithic begins (Star Carr, Lepenski
                  Vir).
                </p>
              </div>
              <div className="ref-item">
                <strong>~9000 BCE</strong>
                <p>
                  Nabta Playa cattle pastoralism (Sudan/Egypt). Guilá Naquitz squash cultivation
                  begins (Oaxaca).
                </p>
              </div>
              <div className="ref-item">
                <strong>~7000 BCE</strong>
                <p>
                  Kuk Swamp agriculture begins (New Guinea). Britain separated from mainland Europe.
                </p>
              </div>
              <div className="ref-item">
                <strong>~6600 BCE</strong>
                <p>First Neolithic farming in Greece (Nea Nikomedeia, Argissa, Karanovo).</p>
              </div>
              <div className="ref-item">
                <strong>~5600 BCE</strong>
                <p>
                  Bandkeramik/LBK expansion begins in Central Europe. Massacre sites at Talheim,
                  Herxheim, Schletz.
                </p>
              </div>
              <div className="ref-item">
                <strong>~5000 BCE</strong>
                <p>
                  African Humid Period ends. Saharan desertification. Southward migration. Eastern
                  Agricultural Complex begins in North America.
                </p>
              </div>
              <div className="ref-item">
                <strong>~4560 to 4450 BCE</strong>
                <p>Varna cemetery in use (Bulgaria). Earliest gold-rich burials in Europe.</p>
              </div>
              <div className="ref-item">
                <strong>~3500 BCE</strong>
                <p>
                  Lapita expansion begins. Watson Brake mound complex (Louisiana). Los Millares
                  established.
                </p>
              </div>
              <div className="ref-item">
                <strong>~3300 to 3200 BCE</strong>
                <p>
                  Iceman (Otzi) dies in the Alps. Newgrange and Knowth passage graves built. Norte
                  Chico urban centers begin.
                </p>
              </div>
              <div className="ref-item">
                <strong>~3100 BCE</strong>
                <p>Egyptian state formation. Narmer Palette documents unification.</p>
              </div>
              <div className="ref-item">
                <strong>~3000 BCE</strong>
                <p>Austronesian dispersal from Taiwan begins. Beinan jade trade.</p>
              </div>
              <div className="ref-item">
                <strong>~2800 BCE</strong>
                <p>
                  Yamnaya steppe expansion into Europe. Corded Ware appears. Steppe ancestry
                  replaces up to 75% of Central European genetics.
                </p>
              </div>
              <div className="ref-item">
                <strong>~2400 BCE</strong>
                <p>Bell Beakers spread across Europe. Ross Island copper mine begins (Ireland).</p>
              </div>
              <div className="ref-item">
                <strong>~2300 BCE</strong>
                <p>Bronze Age begins in Central Europe.</p>
              </div>
              <div className="ref-item">
                <strong>~1000 BCE</strong>
                <p>Lapita reaches Polynesia (Tonga/Samoa). Bantu expansion before this date.</p>
              </div>
              <div className="ref-item">
                <strong>~700 to 480 BCE</strong>
                <p>Hallstatt Iron Age. Princely centers (Heuneburg, Hochdorf, Vix).</p>
              </div>
              <div className="ref-item">
                <strong>~500 BCE onward</strong>
                <p>Nok culture florescence (Nigeria). La Tène art style appears.</p>
              </div>
              <div className="ref-item">
                <strong>~250 BCE</strong>
                <p>Jenné-jeno founded (Mali). Early West African urbanism without a state.</p>
              </div>
              <div className="ref-item">
                <strong>~200 to 300 CE</strong>
                <p>Easter Island and Hawaii colonized by Polynesians.</p>
              </div>
              <div className="ref-item">
                <strong>~700 CE</strong>
                <p>Aksum Christianized. Swahili coast trade begins.</p>
              </div>
              <div className="ref-item">
                <strong>~1300 to 1450 CE</strong>
                <p>Great Zimbabwe florescence. Indian Ocean trade connections.</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref-section">
            <div className="ref-label">KEY SITES BY REGION</div>
            <div className="ref-label" style={{ marginTop: '1rem' }}>
              Australia and the Indo-Pacific
            </div>
            <div className="ref-grid">
              <div className="ref-item">
                <strong>Kuk Swamp</strong>
                <p>
                  New Guinea highlands, ~7000 BCE. Drainage ditches, taro cultivation. One of the
                  world's earliest independent agricultural sites.
                </p>
              </div>
              <div className="ref-item">
                <strong>Toolondo</strong>
                <p>
                  Victoria, Australia, Holocene. Eel aquaculture channels. Aboriginal environmental
                  management without farming.
                </p>
              </div>
              <div className="ref-item">
                <strong>Teouma</strong>
                <p>
                  Vanuatu, Lapita period. Lapita cemetery. Skeletal remains link Lapita people
                  genetically to modern Pacific populations.
                </p>
              </div>
              <div className="ref-item">
                <strong>Beinan</strong>
                <p>
                  Taiwan, ~3000 BCE. Nephrite jade trade center. Evidence of pre-dispersal maritime
                  exchange.
                </p>
              </div>
              <div className="ref-item">
                <strong>Easter Island / Rapa Nui</strong>
                <p>
                  Remote Oceania, ~200 to 300 CE. Moai statues, deforestation, societal collapse
                  debate.
                </p>
              </div>
              <div className="ref-item">
                <strong>Borobudur / Prambanan</strong>
                <p>
                  Java, 1st millennium CE. Buddhist and Hindu monuments. Austronesian connections to
                  South Asian trade networks.
                </p>
              </div>
            </div>

            <div className="ref-label" style={{ marginTop: '1.5rem' }}>
              Americas
            </div>
            <div className="ref-grid">
              <div className="ref-item">
                <strong>Guilá Naquitz</strong>
                <p>
                  Oaxaca, Mexico, ~9000 BCE. Earliest squash cultivation. Transitional
                  maize/teosinte cobs.
                </p>
              </div>
              <div className="ref-item">
                <strong>Watson Brake</strong>
                <p>
                  Louisiana, ~3500 BCE. Early mound complex by Archaic foragers. Monument-building
                  before agriculture.
                </p>
              </div>
              <div className="ref-item">
                <strong>Poverty Point</strong>
                <p>
                  Louisiana, ~1700 to 1100 BCE. Large earthwork complex, long-distance exchange.
                  Complex Archaic forager society without farming.
                </p>
              </div>
              <div className="ref-item">
                <strong>Norte Chico / Caral</strong>
                <p>
                  Coastal Peru, ~3200 to 2000 BCE. Earliest New World civilization. Monumental
                  architecture, quipus. No pottery or writing.
                </p>
              </div>
              <div className="ref-item">
                <strong>Chinchorro sites</strong>
                <p>
                  Northern Chile, ~5000 to 3000 BCE. World's oldest intentional mummies. Clay,
                  paint, sticks, reeds used in preparation.
                </p>
              </div>
              <div className="ref-item">
                <strong>Las Capas</strong>
                <p>
                  Arizona, ~1200 BCE. Earliest irrigation-based maize farming in the American
                  Southwest.
                </p>
              </div>
              <div className="ref-item">
                <strong>Pedra Pintada</strong>
                <p>
                  Brazil, Amazon. Early forager rock shelter with evidence of forest management and
                  early cultigens. Evidence that Amazonian groups actively shaped their forests.
                </p>
              </div>
            </div>

            <div className="ref-label" style={{ marginTop: '1.5rem' }}>
              Africa
            </div>
            <div className="ref-grid">
              <div className="ref-item">
                <strong>Nabta Playa</strong>
                <p>
                  Sudan/Egypt border, ~9000 BCE. Early cattle pastoralism, stone calendar circle.
                  Center of Saharan cattle debate.
                </p>
              </div>
              <div className="ref-item">
                <strong>Nok</strong>
                <p>
                  Jos Plateau, Nigeria, ~500 BCE to 500 CE. Terracotta sculptures, early
                  ironworking. Key site for West African art and iron technology.
                </p>
              </div>
              <div className="ref-item">
                <strong>Jenné-jeno</strong>
                <p>
                  Mali, ~250 BCE. Early West African urban center without a centralized state.
                  Evidence for synoecism.
                </p>
              </div>
              <div className="ref-item">
                <strong>Great Zimbabwe</strong>
                <p>
                  Zimbabwe, ~1300 to 1450 CE. Largest pre-colonial stone structures in sub-Saharan
                  Africa. Indian Ocean trade node.
                </p>
              </div>
              <div className="ref-item">
                <strong>Igbo-Ukwu</strong>
                <p>
                  Nigeria, ~9th to 10th century CE. 685 bronze objects and 165,000 beads. Non-state
                  community with sophisticated metalwork and long-distance trade.
                </p>
              </div>
              <div className="ref-item">
                <strong>Aksum</strong>
                <p>
                  Ethiopia, ~700 CE. Christian state, largest fallen stele 33m/517 tonnes, own
                  coinage in gold, silver, and copper.
                </p>
              </div>
              <div className="ref-item">
                <strong>Quseir al-Qadim</strong>
                <p>
                  Egypt Red Sea coast. Trading port linking African goods to the Indian Ocean
                  network. Africa's eastward trade beyond the Mediterranean.
                </p>
              </div>
            </div>

            <div className="ref-label" style={{ marginTop: '1.5rem' }}>
              Europe
            </div>
            <div className="ref-grid">
              <div className="ref-item">
                <strong>Star Carr</strong>
                <p>
                  NE England, ~8770 to 8460 BCE. Antler frontlets, lake-edge location. Mesolithic
                  ritual objects and repeated occupation.
                </p>
              </div>
              <div className="ref-item">
                <strong>Lepenski Vir</strong>
                <p>
                  Serbia, Iron Gates, ~9500 to 5500 BCE. Stone-paved houses, fish-faced sculptures.
                  Mesolithic sedentism alongside Neolithic farmers.
                </p>
              </div>
              <div className="ref-item">
                <strong>Varna cemetery</strong>
                <p>
                  Bulgaria, ~4560 to 4450 BCE. Over 980 gold objects per grave. Earliest social
                  stratification evidence in Europe.
                </p>
              </div>
              <div className="ref-item">
                <strong>Newgrange</strong>
                <p>
                  Ireland, ~3200 BCE. Passage grave aligned with winter solstice sunrise. Megalithic
                  astronomical alignment.
                </p>
              </div>
              <div className="ref-item">
                <strong>Stonehenge</strong>
                <p>
                  Wiltshire, ~2950 to 2400 BCE. Multi-phase monument, midwinter alignment, Preseli
                  bluestones from Wales.
                </p>
              </div>
              <div className="ref-item">
                <strong>Vix</strong>
                <p>
                  Burgundy, ~530 BCE. Hallstatt grave with the largest surviving Classical metal
                  vessel (Greek krater). Elite Mediterranean-Celtic trade.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref-section">
            <div className="ref-label">KEY CONCEPTS</div>
            <div className="ref-grid">
              <div className="ref-item">
                <strong>Holocene</strong>
                <p>
                  The current geological period, beginning about 11,700 years ago. The backdrop for
                  all major developments in human prehistory.
                </p>
              </div>
              <div className="ref-item">
                <strong>Intensification</strong>
                <p>
                  Stepping up resource use: extracting more food from the same area through more
                  labor, technology, or organization. A predictable response to population pressure.
                </p>
              </div>
              <div className="ref-item">
                <strong>Sedentism</strong>
                <p>
                  Living in one place year-round, instead of moving with the seasons. Can develop
                  with or without agriculture, given rich predictable resources.
                </p>
              </div>
              <div className="ref-item">
                <strong>Out of Taiwan model</strong>
                <p>
                  Austronesian-language speakers spread south from Taiwan around 3000 BCE through
                  the Philippines and Indonesia, then across the Pacific. Supported by linguistics,
                  archaeology, and genetics.
                </p>
              </div>
              <div className="ref-item">
                <strong>Lapita cultural complex</strong>
                <p>
                  Dentate-stamped geometric pottery, canoe-based expansion, exchange networks. Marks
                  the spread of Austronesian-connected peoples into Island Melanesia and Polynesia
                  from about 3500 BCE.
                </p>
              </div>
              <div className="ref-item">
                <strong>Tasmanian fish cessation</strong>
                <p>
                  Disappearance of fish bones from Tasmanian sites during the Holocene. Three
                  explanations: taboo, environmental change, resource depletion. Unresolved. Case
                  study for interpreting archaeological absence.
                </p>
              </div>
              <div className="ref-item">
                <strong>African Humid Period</strong>
                <p>
                  Wet phase in Africa from about 11,000 to 5,000 BCE. Sahara supported grasslands
                  and cattle pastoralism. Its end caused population movements that shaped
                  sub-Saharan Africa and the Nile Valley.
                </p>
              </div>
              <div className="ref-item">
                <strong>Bantu expansion</strong>
                <p>
                  Spread of Bantu-language farming communities from Shum Laka (Cameroon) southward
                  and eastward across sub-Saharan Africa. Carried pottery-making, farming, and
                  ironworking. Before 1000 BCE to 300 to 700 CE. Modern Bantu languages are spoken
                  by 350 million people today.
                </p>
              </div>
              <div className="ref-item">
                <strong>Eastern Agricultural Complex</strong>
                <p>
                  Native North American crops domesticated in the Eastern Woodlands from about 5000
                  BCE: goosefoot, sunflower, sumpweed, maygrass. Independent agricultural tradition
                  predating maize.
                </p>
              </div>
              <div className="ref-item">
                <strong>Three Sisters</strong>
                <p>
                  Maize, beans, and squash: the nutritionally complete Mesoamerican crop
                  combination. Together they provide carbohydrates, protein, and vitamins. The
                  combination drove the dominance of maize-based agriculture across the Americas.
                </p>
              </div>
              <div className="ref-item">
                <strong>Norte Chico / Caral</strong>
                <p>
                  Earliest New World civilization (about 3200 BCE, coastal Peru). Monumental
                  architecture, quipus. No pottery, no writing. Economy based on maritime resources
                  and cotton.
                </p>
              </div>
              <div className="ref-item">
                <strong>Synoecism</strong>
                <p>
                  Social aggregation: multiple smaller communities coming together to form a larger
                  settlement without top-down state authority. Used to explain African urbanism at
                  Jenné-jeno.
                </p>
              </div>
              <div className="ref-item">
                <strong>Neolithic transition in Europe</strong>
                <p>
                  Confirmed by ancient DNA as primarily driven by migrating Anatolian farmers.
                  Farming entered Greece around 6600 BCE and spread via Mediterranean Cardial Ware
                  and Central European LBK routes.
                </p>
              </div>
              <div className="ref-item">
                <strong>Bandkeramik / LBK</strong>
                <p>
                  Neolithic farming culture spreading rapidly across Central European river terraces
                  from about 5600 BCE. Long timber houses, specific pottery, cemeteries. Associated
                  with massacre sites at Talheim, Herxheim, Schletz.
                </p>
              </div>
              <div className="ref-item">
                <strong>Yamnaya steppe expansion</strong>
                <p>
                  Yamnaya culture from the Eurasian steppes expanded into Europe around 2800 BCE,
                  bringing horses, wheeled vehicles, and steppe genetics. Replaced up to 75% of
                  Central European genetic heritage. Linked to Indo-European languages (English,
                  Spanish, Hindi, Russian, etc.).
                </p>
              </div>
              <div className="ref-item">
                <strong>Bell Beaker phenomenon</strong>
                <p>
                  Material culture package (pottery beakers, copper daggers, archery equipment, gold
                  ornaments) spreading across Europe from about 2400 BCE. Both migration and local
                  adoption contributed.
                </p>
              </div>
              <div className="ref-item">
                <strong>Secondary products revolution</strong>
                <p>
                  Use of domesticated animals for products beyond meat: milk, hides, wool, traction.
                  Occurred in the 5th to 4th millennia BCE. In Africa, expressed through cattle milk
                  use and Sanga-type crossbreeding.
                </p>
              </div>
              <div className="ref-item">
                <strong>Sanga-type cattle</strong>
                <p>
                  African cattle from crossing taurine (Near Eastern) and zebu (South Asian) stocks.
                  Better adapted to African disease environments. Made pastoralism viable in regions
                  hostile to pure breeds.
                </p>
              </div>
              <div className="ref-item">
                <strong>Polynesian wayfinding</strong>
                <p>
                  Navigational knowledge system using stars, wave patterns, swell directions, and
                  bird behavior to cross the Pacific without instruments. Enabled colonization of
                  the most remote islands on Earth.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref-section">
            <div className="ref-label">KEY DEBATES</div>
            <div className="ref-grid">
              <div className="ref-item">
                <strong>Tasmanian fish cessation</strong>
                <p>
                  Position 1: Cultural taboo. Position 2: Environmental change reduced fish.
                  Position 3: Resource depletion. No consensus. Test case for interpreting absence
                  of evidence.
                </p>
              </div>
              <div className="ref-item">
                <strong>Lapita: colonist vs. adoption model</strong>
                <p>
                  Position 1 (colonist, supported by ancient DNA): Rapid intentional migration
                  carrying pottery, plants, and animals. Position 2 (adoption): Pottery style spread
                  without major population movement. Teouma DNA supports colonist model.
                </p>
              </div>
              <div className="ref-item">
                <strong>Easter Island collapse</strong>
                <p>
                  Position 1: Moai-building drove deforestation. Position 2: Rats ate palm seeds
                  preventing forest regeneration. Position 3: Both combined. Most researchers favor
                  multi-causal model.
                </p>
              </div>
              <div className="ref-item">
                <strong>African ironworking: independent vs. diffusion</strong>
                <p>
                  Position 1 (favored): African techniques differ from Southwest Asian ones; early
                  dates preclude easy diffusion; Africa skipped the bronze age. Position 2:
                  Technology spread from Southwest Asia. Not yet settled.
                </p>
              </div>
              <div className="ref-item">
                <strong>Saharan cattle: local domestication vs. imported</strong>
                <p>
                  Position 1: African wild cattle (Bos primigenius africanus) domesticated locally
                  at Nabta Playa. Position 2: Domesticated cattle arrived from Southwest Asia.
                  Genetic picture shows both contributions in African cattle.
                </p>
              </div>
              <div className="ref-item">
                <strong>Egyptian writing: independent vs. Mesopotamian stimulus</strong>
                <p>
                  Position 1: Independently invented. Position 2: Contact with Mesopotamian
                  cuneiform stimulated development. Systems are structurally distinct, suggesting
                  strong local development even if outside stimulus played a role. Unresolved.
                </p>
              </div>
              <div className="ref-item">
                <strong>Farming in Europe: migrating farmers vs. indigenous adoption</strong>
                <p>
                  Position 1 (now confirmed): Anatolian farmers migrated into Europe. Position 2:
                  Local hunter-gatherers adopted farming. Ancient DNA strongly confirms migrating
                  farmers for the initial wave.
                </p>
              </div>
              <div className="ref-item">
                <strong>Stonehenge: purpose and meaning</strong>
                <p>
                  Position 1: Ancestor veneration (burial monument). Position 2: Astronomical
                  calendar (midwinter sunset alignment). Position 3: Healing center (isotope
                  evidence of travelers). Most researchers accept multiple overlapping functions.
                </p>
              </div>
              <div className="ref-item">
                <strong>Who were the Celts?</strong>
                <p>
                  Position 1: Ethnic identity. Position 2: Art-style label (La Tène). Position 3:
                  Linguistic family. The three categories do not overlap cleanly. Ancient DNA shows
                  genetic diversity within "Celtic" territory. Most scholars reject simple ethnic
                  definitions.
                </p>
              </div>
              <div className="ref-item">
                <strong>Indo-European language origins</strong>
                <p>
                  Position 1 (now strongly supported): Indo-European languages spread with Yamnaya
                  people from the steppes around 2800 BCE. Position 2 (older model): Spread with
                  Neolithic farmers from Anatolia around 6000 BCE. Ancient DNA strongly supports
                  Yamnaya model.
                </p>
              </div>
              <div className="ref-item">
                <strong>Climate determinism vs. human agency</strong>
                <p>
                  Position 1: Climate change directly causes social change. Position 2 (correct):
                  Climate sets constraints within which people make variable choices. Same climate
                  event produces different outcomes in different regions.
                </p>
              </div>
              <div className="ref-item">
                <strong>Rock art interpretation (Valcamonica, Tanum)</strong>
                <p>
                  Position 1: Mythological/cosmological narratives. Position 2: Everyday life
                  (hunting, farming). Position 3: Ritual context. Evidence supports all three at
                  different sites. The debate shows limits of interpretation for symbolic materials.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref-section">
            <div className="ref-label">KEY ARTIFACTS AND TECHNOLOGIES</div>
            <div className="ref-grid">
              <div className="ref-item">
                <strong>Lapita pottery (dentate-stamped)</strong>
                <p>
                  Geometric-patterned pottery appearing from about 3500 BCE across Island Melanesia
                  into Polynesia. Highly consistent style across thousands of kilometers. Defines
                  the Lapita cultural complex.
                </p>
              </div>
              <div className="ref-item">
                <strong>Backed microliths (Australia)</strong>
                <p>
                  Small sharp stone flakes with one blunted edge for hafting. Appear in Australia
                  from about 5000 BCE. Signal intensification of resource use.
                </p>
              </div>
              <div className="ref-item">
                <strong>Caral quipus</strong>
                <p>
                  Knotted cord recording devices from Norte Chico / Caral (~3200 BCE).
                  Administrative record-keeping without alphabetic or logographic writing.
                </p>
              </div>
              <div className="ref-item">
                <strong>Narmer Palette</strong>
                <p>
                  Egyptian slate palette (~3000 BCE) showing unification of Upper and Lower Egypt.
                  One of the earliest pieces of Egyptian narrative art.
                </p>
              </div>
              <div className="ref-item">
                <strong>Aksumite coinage</strong>
                <p>
                  Gold, silver, and copper coins minted by the Aksumite state. Evidence of a
                  monetized economy in the African Horn.
                </p>
              </div>
              <div className="ref-item">
                <strong>Igbo-Ukwu bronze castings</strong>
                <p>
                  685 copper/bronze objects plus 165,000 beads from a 9th to 10th century CE
                  non-state site in Nigeria. Made using lost-wax casting.
                </p>
              </div>
              <div className="ref-item">
                <strong>Nok terracotta sculptures</strong>
                <p>
                  Terracotta figurines produced by the Nok culture (~500 BCE to 500 CE). Among the
                  oldest known sub-Saharan African figurative sculpture.
                </p>
              </div>
              <div className="ref-item">
                <strong>Varna gold objects</strong>
                <p>
                  Over 980 gold objects per grave in some Varna cemetery burials (~4560 to 4450
                  BCE): penis sheaths, pectorals, animal-shaped appliqués, beads. Early social
                  stratification in Europe.
                </p>
              </div>
              <div className="ref-item">
                <strong>Otzi the Iceman</strong>
                <p>
                  Freeze-dried body (~3300 to 3200 BCE, Alps). Copper axe, unfinished yew bow,
                  arrows, clothing. Killed by arrow wound. Direct window into Copper Age daily life.
                </p>
              </div>
              <div className="ref-item">
                <strong>Nebra sky-disk</strong>
                <p>
                  Bronze disk with gold (~1600 BCE, Germany) showing moon, Pleiades, and solar arc.
                  Oldest known concrete depiction of astronomical phenomena.
                </p>
              </div>
              <div className="ref-item">
                <strong>Trundholm sun chariot</strong>
                <p>
                  Bronze horse pulling a gold-covered sun disk on wheels (~1650 BCE, Denmark).
                  Oldest physical representation of the solar myth in Europe.
                </p>
              </div>
              <div className="ref-item">
                <strong>Vix krater</strong>
                <p>
                  Massive Greek bronze mixing vessel (~530 BCE) found in a Hallstatt grave at Vix,
                  Burgundy. Largest surviving Classical metal vessel. Evidence of Iron Age elite
                  Mediterranean trade.
                </p>
              </div>
              <div className="ref-item">
                <strong>Star Carr antler frontlets</strong>
                <p>
                  Deer skull caps with antlers (~8770 to 8460 BCE, Star Carr). Possibly used in
                  ritual or hunting. Evidence of Mesolithic symbolic life.
                </p>
              </div>
              <div className="ref-item">
                <strong>Bell Beakers</strong>
                <p>
                  Distinctive pottery beakers with copper daggers, archery equipment, and gold
                  ornaments. Spread across Europe from about 2400 BCE. Marker of Bell Beaker
                  phenomenon.
                </p>
              </div>
              <div className="ref-item">
                <strong>Maize cobs (Guilá Naquitz)</strong>
                <p>
                  Transitional teosinte/maize cobs from Guilá Naquitz (~9000 to 7000 BCE). Physical
                  evidence for Mesoamerican maize domestication origins.
                </p>
              </div>
              <div className="ref-item">
                <strong>Chinchorro mummy materials</strong>
                <p>
                  Clay, paint, sticks, and reeds used to preserve bodies (~5000 to 3000 BCE,
                  northern Chile). World's oldest intentional mummification materials.
                </p>
              </div>
              <div className="ref-item">
                <strong>Bog bodies</strong>
                <p>
                  Oldcroghan Man, Lindow Man, Grauballe Man. Iron Age northern European bodies
                  preserved in peat. Show signs of ritual killing and deposition in watery places
                  sacred in northern European religion.
                </p>
              </div>
            </div>
          </div>
        </>
      ]
    },
    customCss: null
  }
  return config
}

// Interleave practice cards from multiple regions so spaced retrieval
// pulls a different region with each card rather than grouping by region.
function shuffleInterleaved(groups) {
  const maxLen = Math.max(...groups.map(g => g.length))
  const out = []
  for (let i = 0; i < maxLen; i++) {
    for (const group of groups) {
      if (i < group.length) out.push(group[i])
    }
  }
  return out
}

export default function HoloceneSocietiesAcrossTheWorld() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
