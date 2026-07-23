import React from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { VizFigure } from '../../../../components/viz-figure'

function useConfig() {
  return {
    cssPrefix: 'csa',
    documentTitle: 'Complex Societies of the Americas and Synthesis - AETHER',
    customCss: null,
    learning: {
      groupTitle: 'After the Ice Age',
      category: 'Module 6',
      title: 'Complex Societies of the Americas and Synthesis',
      subtitle:
        'The final part of The Human Past. Mesoamerica, the Andes, Amazonia, North America, and a global synthesis of human complexity.',
      sections: [
        <>
          <h2>What Makes a Society Complex</h2>
          <p>
            A complex society is one that supports specialists. Most people farm. Others rule,
            build, fight, pray, write, or count full time. To feed those specialists a community
            needs three things: food surpluses, shared rules, and ways to record what is owed. A
            surplus is extra food beyond what the growers themselves eat.
          </p>
          <p>
            By 1500 BCE, peoples on several continents had crossed that line. By 1500 CE, the
            Americas held two empires, dozens of city states, hundreds of chiefdoms, and complex
            fisher societies on the Pacific coast. A chiefdom has a hereditary leader but no full
            bureaucracy or written law. They built cities without writing, ran empires without iron,
            and worked metal as art.
          </p>
          <p>
            This module covers three regions and one synthesis. Mesoamerica runs from central Mexico
            into Honduras and Belize, with shared calendars, a rubber ball game, and hieroglyphic
            writing. The Andes run the Pacific coast and the highland sierra of South America and
            end with the Inca empire of Tawantinsuyu. North America runs from the Eastern Woodlands
            across the Southwest and Plains to the Pacific and the Arctic. The synthesis asks why
            complex society arose independently in so many places, and what cost it carried.
          </p>
          <div className="lrn-insight">
            One rule covers the whole module. Complex society is what you can do once a few people
            no longer have to grow their own food. Everything else (cities, kings, writing, wars,
            collapses) follows from how that surplus is produced, stored, and fought over.
          </div>
        </>,

        <>
          <h2>Mesoamerica</h2>
          <p>
            Mesoamerica is a cultural region, not a country. It runs from the Tropic of Cancer in
            northern Mexico down to western Honduras. People here shared a package: maize as the
            staple crop, a 365 day solar year meshed with a 260 day ritual count, a rubber ball game
            with cosmic meaning, monumental temples, and hieroglyphic writing. The region was never
            politically united, not even by the Aztec. Around 260 separate languages were still
            spoken when the Spanish arrived in 1519.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Olmec built their capitals in hot, swampy lowlands with no nearby stone. To carve
              portraits of their rulers, they hauled basalt boulders weighing up to 20 tonnes from
              volcanoes 60 km away. There were no wheels and no pack animals. Why would any society
              pay that cost?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Moving a 20 tonne stone over 60 km on rollers and rafts takes hundreds of workers
                across many weeks. Only a ruler who could command that much labor could pay the
                cost. The colossal heads are not just art. They are public proof that Olmec leaders
                held the power to coordinate hundreds of people on a single task. The cost is the
                message.
              </p>
            </details>
          </div>

          <h3>Before the Olmec: Paso de la Amada and San José Mogote</h3>
          <p>
            Complexity in Mesoamerica did not begin with the Olmec. It crystallized earlier in
            several places at once.
          </p>
          <ul className="lrn-list">
            <li>
              Paso de la Amada (Pacific coast of Chiapas, c. 1550 to 850 BCE). A village of more
              than fifty houses covering 50 to 75 hectares. Mound 6 was a large earthen platform
              rebuilt six times, possibly a chiefly residence or a public hall. Two parallel mounds
              flank a level area 80 m long. This is the earliest ball court found in Mesoamerica,
              dating to about 1400 BCE. Paso de la Amada predates the Olmec heartland and shows that
              the ball game and ranked leadership were already present before the colossal heads
              appeared.
            </li>
            <li>
              San José Mogote (Valley of Oaxaca, c. 1600 to 500 BCE). A large dispersed village of
              about 200 people. Monument 3 carries a slain captive with the calendrical glyph "One
              Earthquake" between his legs. It is the oldest Zapotec writing yet found, possibly c.
              600 to 500 BCE. The piece shows that the calendar and writing began outside the Maya
              region.
            </li>
          </ul>

          <h3>The Olmec, c. 1200 to 400 BCE</h3>
          <p>
            The Olmec are the first large scale civilization in Mesoamerica. They lived on the Gulf
            Coast lowlands of present day Veracruz and Tabasco. Their two major centers were San
            Lorenzo (peak c. 1150 to 900 BCE) and La Venta (peak c. 900 to 400 BCE).
          </p>
          <ul className="lrn-list">
            <li>
              San Lorenzo sat on a leveled plateau 50 m above surrounding swamps. Builders installed
              elaborate stone drainage systems. The site held ten of the trademark colossal basalt
              heads, portrait sculptures of Olmec rulers up to 3 m tall. Each ruler wore a
              distinctive helmet. The "Red Palace" near the summit was probably an elite residence.
              At nearby El Manatí, a spring fed pond preserved carved wooden effigies, rubber balls,
              and infant sacrifices.
            </li>
            <li>
              La Venta is dominated by an earthen pyramid more than 33 m high, surrounded by plazas,
              mosaic pavements of serpentine blocks, and burial offerings. Two infants were interred
              in a richly furnished tomb. Notables were laid in carved sarcophagi. Maize imagery
              became prominent on Olmec art at La Venta, signaling that maize was now the staple.
              Inherited rank is visible in the rich burials of children.
            </li>
            <li>
              Olmec influence spread across Mesoamerica through long distance exchange of luxury
              goods: blue green jade from the upper Motagua River in Guatemala, obsidian, iron ore
              for polished mirrors, magnetite. Olmec style sculptures appear as far as Chalchuapa in
              El Salvador and Teopantecuanitlán in western Mexico.
            </li>
          </ul>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="Olmec Colossal Head 1, San Lorenzo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/Olmec_Head_No._1_at_Xalapa%2C_Veracruz%2C_Mexico.jpg"
                alt="Colossal basalt head of an Olmec ruler wearing a helmet, from San Lorenzo"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'Colossal Head 1 from San Lorenzo, a basalt portrait of an Olmec ruler in a helmet. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Olmec_Head_No._1_at_Xalapa,_Veracruz,_Mexico.jpg"
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
            <span className="lrn-elaborate-label">
              KEY CONTROVERSY: Mother Culture or Sister Culture?
            </span>
            <p>
              Were the Olmec the single source from which Mesoamerican civilization spread, or one
              of several early peers? The "mother culture" view points to the colossal heads, La
              Venta's monumental pyramid, and the wide spread of Olmec style icons, all earlier than
              parallel features anywhere else. The "sister culture" view points to Paso de la
              Amada's older ball court, the Mirador Basin's early monumental buildings in Guatemala,
              and many "Olmec" stylistic traits that originate in other regions. The Olmec led a
              network of regional cultures that were already growing complex in parallel. They were
              the most precocious node, not the seed.
            </p>
          </div>

          <h3>The Mesoamerican Calendar</h3>
          <p>
            Mesoamerican peoples used two calendars that ran at the same time. The haab counted 365
            days as 18 months of 20 days plus 5 unlucky days at the end. The tzolkin counted 260
            days as one of 20 day names paired with a number from 1 to 13. The same pair of names
            does not recur until 18,980 days have passed.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the Calendar Round take exactly 52 years to repeat? Form your answer before
              reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The two cycles only align again when both have completed a whole number of turns.
                The smallest common multiple of 260 and 365 is 18,980 days. That equals 52 solar
                years and 73 ritual cycles. Until that day, no two days carry the same paired name.
                The number 52 is not symbolic. It is forced by the arithmetic.
              </p>
            </details>
          </div>

          <ul className="lrn-list">
            <li>
              For the Aztec, the 52 year cycle ended in cosmic risk. On the eve of the change, all
              fires were put out. Priests at Cerro de la Estrella kindled a new fire on the chest of
              a sacrificed captive. If the fire caught, the world would continue. This was the New
              Fire Ceremony.
            </li>
            <li>
              For longer dates, the Maya invented the Long Count. It is a positional number system
              with five places (kin, uinal, tun, k'atun, baktun) counting days from a mythological
              creation date, August 11, 3114 BCE in the standard correlation. The five places count
              1-day, 20-day, 360-day, 7,200-day, and 144,000-day units. A baktun is about 394 years.
              Each Long Count date is unique. On December 21, 2012, the count rolled from
              12.19.19.17.19 to 13.0.0.0.0, completing the thirteenth baktun. Despite popular
              predictions, nothing collapsed. The calendar simply began the fourteenth baktun.
            </li>
          </ul>

          <h3>Mesoamerican Writing</h3>
          <p>
            Writing emerged more than once in Mesoamerica. The Maya later perfected it, but they did
            not invent it.
          </p>
          <ul className="lrn-list">
            <li>
              The Cascajal block (near San Lorenzo) is a serpentine slab carved with 62 signs. If
              genuine and correctly dated to c. 900 BCE, it is the oldest writing in the Americas,
              but it came from a looted mound with no secure context, so its date is contested.
            </li>
            <li>
              San José Mogote Monument 3 (Oaxaca, c. 600 BCE) carries the calendrical name "One
              Earthquake" between the legs of a slain captive. It is the oldest secure Zapotec
              writing.
            </li>
            <li>
              The La Mojarra Stela (Veracruz) carries Epi-Olmec script (the writing that followed
              Olmec on the Gulf coast) and two Long Count dates equivalent to 143 and 156 CE. Its
              language is probably an early Mixe-Zoquean tongue (a language family of southern
              Mexico).
            </li>
            <li>
              San Bartolo (northern Guatemala, c. 200 BCE) preserves Maya creation murals with proto
              glyphs that prefigure later Classic Maya writing.
            </li>
            <li>
              El Portón Monument 1 (Guatemalan highlands, c. 400 BCE) carries early Maya like glyphs
              but no date.
            </li>
            <li>
              The Hauberg Stela (197 CE, looted; origin unknown) is the earliest legible Maya royal
              monument. A stela is an upright stone slab carved as a public billboard. The Hauberg
              shows a king dressed as a rain god, with themes of sacrifice, fertility, and renewal
              that all later Maya kingship will share.
            </li>
            <li>
              Mature Classic Maya writing is logosyllabic: signs stand for whole words or for
              syllables. Major decipherment came between the 1950s and the 1980s. Inscriptions on
              stelae record real history: births, accessions, wars, deaths, and ritual events of
              specific kings.
            </li>
          </ul>

          <p>
            Scholars split Mesoamerican history into three periods. The Preclassic runs to about 250
            CE. The Classic runs from about 250 to 900 CE. The Postclassic runs from about 900 to
            1521 CE. The Epiclassic is a short bridge from about 600 to 900 CE.
          </p>

          <h3>Late Preclassic Maya: Nakbé and El Mirador</h3>
          <p>
            Before Tikal rose, the Mirador Basin of northern Guatemala held the first great Maya
            cities. They are largely abandoned today and were hidden under jungle for centuries.
          </p>
          <ul className="lrn-list">
            <li>
              Nakbé was settled by simple farmers around 1000 BCE. Between 400 and 200 BCE,
              residents built temple platforms 30 to 45 m high. Nakbé's sculptors carved some of the
              first lowland Maya monumental figures, possibly portraits of kings.
            </li>
            <li>
              El Mirador eclipsed Nakbé between about 200 BCE and 150 CE. Its largest pyramid (La
              Danta) rises over a base of more than 300 by 600 m. Carved facades on the Tigre
              complex may depict scenes from the Popol Vuh, the Maya creation epic. The center held
              tens of thousands of people.
            </li>
            <li>
              Around 150 CE, El Mirador collapsed. Soil exhaustion, deforestation, and drought have
              all been proposed. Survivors moved south to Tikal and other lowland centers, which
              then grew quickly.
            </li>
            <li>
              At Cuello in northern Belize, mass burials of sacrificed individuals from Late
              Preclassic times show that ritual killing of war captives was already established long
              before the Classic peak.
            </li>
          </ul>

          <h3>Monte Albán, c. 500 BCE to 700 CE</h3>
          <p>
            In the Valley of Oaxaca, the Zapotec built a hilltop city that ruled the valley for more
            than a thousand years.
          </p>
          <ul className="lrn-list">
            <li>
              Around 500 BCE, communities from several parts of the valley joined forces and leveled
              the top of a high hill to build Monte Albán. The site was defensible and symbolic, not
              convenient for farming.
            </li>
            <li>
              The Danzante carvings on Building L were once read as dancers. They are now read as
              slain or sacrificed enemy captives, each accompanied by a glyph that may name the dead
              person or his hometown. They are among the earliest monumental writing in Mesoamerica.
            </li>
            <li>
              Building J carries more than forty "conquest slabs" showing inverted heads of named
              places, likely toponyms of subject towns.
            </li>
            <li>
              By 200 BCE the population reached about 17,000 on terraced hillsides covering 6 sq km.
              At its Classic peak (c. 300 to 700 CE), Monte Albán housed roughly 25,000 people.
              After 700 CE the population declined. Many smaller Zapotec and Mixtec kingdoms then
              coexisted across the valley until the Aztec arrived in the late fifteenth century.
            </li>
          </ul>

          <h3>Teotihuacán, c. 100 BCE to 650 CE</h3>
          <p>
            In the Basin of Mexico, the city of Teotihuacán became the largest and most planned
            settlement in the pre-Columbian Americas.
          </p>
          <ul className="lrn-list">
            <li>
              The city's growth was partly forced. Around 300 to 100 BCE, the volcano Xitle
              destroyed the rival center of Cuicuilco with a lava flow, and Popocatépetl's eruptions
              unsettled much of the southern basin. Refugees concentrated at Teotihuacán. By 100 CE,
              80 to 90 percent of the basin's population lived inside the city. Other centers were
              nearly empty.
            </li>
            <li>
              Classic Teotihuacán covered about 20 sq km and held at least 80,000 people, possibly
              more. Some estimates put the peak at over 100,000. Either way, it was the largest city
              in the Americas of its age.
            </li>
            <li>
              The Street of the Dead runs north to south through the city. It is flanked by
              platforms, temples, and palaces, all on the same 15.5 degree east of north grid.
            </li>
            <li>
              The Pyramid of the Sun (63 m high) was built over an artificial sacred cave. The
              Pyramid of the Moon stands at the northern end. The Ciudadela ("Citadel") encloses the
              Temple of the Feathered Serpent. Beneath that pyramid, archaeologists found about 200
              sacrificial victims, mostly military age men born far from the city, all killed at the
              dedication c. 250 CE. The tomb was looted soon after.
            </li>
            <li>
              Most residents lived in apartment compounds: inward facing stone complexes with
              kitchens, patios, shrines, and workshops. More than 2,000 have been mapped. Each
              housed about 60 people. Foreign enclaves include a Oaxaca barrio (Zapotec) and a
              Merchants' Barrio with Maya pottery. The city was cosmopolitan.
            </li>
            <li>
              Teotihuacán's reach spread far. Maya kings at Tikal and Copán adopted Teotihuacán
              architectural styles and ritual dress. Pachuca obsidian from near the city moved to
              sites across Mesoamerica.
            </li>
            <li>
              The city's end has been pushed earlier than once thought. Burning concentrated on
              temples and palaces along the Street of the Dead around 550 CE, while residential
              compounds were largely spared. That pattern points to internal political revolt rather
              than foreign attack. The population then dispersed, but parts of the city continued to
              be lived in for centuries.
            </li>
          </ul>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Street of the Dead, Teotihuacán">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Avenue_of_the_Dead_at_Teotihuacan_panorama_1.jpg"
                alt="The Street of the Dead at Teotihuacán leading toward the Pyramid of the Moon"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The Street of the Dead runs north through the city toward the Pyramid of the Moon. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Avenue_of_the_Dead_at_Teotihuacan_panorama_1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 3.0.'}
              </figcaption>
            </VizFigure>
          </figure>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">
              KEY CONTROVERSY: Did Teotihuacán Have Writing?
            </span>
            <p>
              For decades scholars believed Teotihuacán had no writing system, which was puzzling
              for so large a city. In the La Ventilla compound, archaeologists then found 42 painted
              glyphs arranged in a grid on the floor of the Plaza de los Glifos. Two "fonts" appear
              across the city: a small everyday style and a large emblematic style for murals. Many
              compositions now look like readable name tags or place signs. Teotihuacán probably did
              have writing, but it was used differently from the long royal inscriptions of the
              Maya. Whether the city's people spoke an early form of Nahuatl remains debated.
            </p>
          </div>

          <h3>Classic Maya, c. 250 to 900 CE</h3>
          <p>
            The Classic Maya were never one empire. They were 45 to 50 separate kingdoms across the
            lowlands of southern Mexico, Guatemala, Belize, and northern Honduras. Each kingdom had
            its own dynasty, its own emblem glyph, its own patron gods, and its own history recorded
            on stelae.
          </p>
          <ul className="lrn-list">
            <li>
              On January 15, 378 CE, a foreign lord named Siyaj K'ak' arrived at Tikal days after
              the local king died. His name appears on monuments at several Maya sites in quick
              succession. The following year, the son of one of his entourage was installed as
              Tikal's king. Half a century later, Yax Kuk Mo founded the new dynasty at Copán under
              similar circumstances. Both interventions carry Teotihuacán imagery and may represent
              direct Teotihuacán involvement in lowland Maya politics.
            </li>
            <li>
              Tikal (northern Guatemala) was among the largest Maya cities. At peak, perhaps 60,000
              people lived within 10 to 12 km of its core. Its towering temple pyramids rose above
              the jungle canopy.
            </li>
            <li>
              Palenque (Chiapas, Mexico) is famous for the tomb of K'inich Janaab' Pakal.
              Archaeologists discovered the tomb in 1952 inside the Temple of the Inscriptions.
              Pakal ruled for 68 years and died in 683 CE. Workers buried him with a jade death mask
              and an elaborate carved sarcophagus lid that depicts his descent into the underworld.
            </li>
            <li>
              The Late Classic was dominated by the rivalry of two superpowers: Tikal and Calakmul
              (just to its north, in southern Mexico). Calakmul defeated Tikal around 562 CE. Tikal
              raised no royal monuments for 130 years, a period called the Hiatus. Tikal revived
              under Jasaw Chan K'awiil I and crushed Calakmul in 695 CE.
            </li>
            <li>
              Most Maya cities were ruled by an ajaw (king). Some, like Palenque, were briefly ruled
              by queens. Royal authority rested on sacred genealogy, on ritual performance, on
              military victory, and on the kingdom's ability to keep building.
            </li>
          </ul>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="Tikal Temple I above the Great Plaza">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/03/Gran_Plaza_with_Temple_I_-_Tikal_Archaeological_Site_-_Peten_-_Guatemala_%2815684347430%29.jpg"
                alt="The steep limestone pyramid of Tikal Temple I rising above the Great Plaza"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'Temple I, the tomb-pyramid of Jasaw Chan Kawiil I, above the Great Plaza at Tikal. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Gran_Plaza_with_Temple_I_-_Tikal_Archaeological_Site_-_Peten_-_Guatemala_(15684347430).jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 2.0.'}
              </figcaption>
            </VizFigure>
          </figure>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="Sarcophagus lid of Pakal, Palenque">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Pakal_the_Great_tomb_lid.png"
                alt="Line drawing of the carved sarcophagus lid showing Pakal at the world tree"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'Drawing of the carved sarcophagus lid of Pakal, showing his descent into the underworld. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Pakal_the_Great_tomb_lid.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 3.0.'}
              </figcaption>
            </VizFigure>
          </figure>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">
              KEY CONTROVERSY: How Sudden Was the Maya Collapse?
            </span>
            <p>
              Popular accounts treat the Maya collapse as a sudden vanishing. The evidence does not
              support that. Royal monument erection began to taper after about 760 CE in the western
              lowlands. Kingdom after kingdom stopped building, lost its kings, and shrank over the
              next century. The process took roughly 150 years and was not uniform. Coba and Lamanai
              (Belize) never collapsed. The Itzá kingdom in the northern Yucatán thrived for
              centuries more. The northern Yucatán was largely untouched until the Spanish arrived.
              What collapsed was royal kingship as an institution. The Maya people did not vanish.
              About 6 million speakers of Maya languages live in Guatemala and southern Mexico
              today. The most defensible explanation weights three stacking pressures: a multi
              decade drought between c. 760 and 910 CE, soil exhaustion and deforestation from
              intensive farming, and continual warfare between rival kingdoms.
            </p>
          </div>

          <h3>Epiclassic Mesoamerica, c. 600 to 900 CE</h3>
          <p>
            After Teotihuacán fell, no city replaced it. Power scattered to regional centers, many
            of them fortified and short lived.
          </p>
          <ul className="lrn-list">
            <li>
              Cantona (east of Teotihuacán). A sprawling 14 sq km city with as many as 90,000
              people. It had 25 ball courts and controlled trade in obsidian from nearby quarries.
            </li>
            <li>
              Cacaxtla and Xochitécatl (Puebla-Tlaxcala). Polychrome murals at Cacaxtla show central
              Mexican warriors defeating Maya enemies, a rare painted record of warfare between
              regions.
            </li>
            <li>
              Xochicalco (Morelos). Carvings on the Pyramid of the Plumed Serpent show warriors and
              tribute glyphs. The site was suddenly and violently destroyed around 900 CE.
            </li>
            <li>
              El Tajín (Veracruz). A Gulf coast capital with the Pyramid of the Niches and dozens of
              ball courts.
            </li>
            <li>
              La Quemada (Zacatecas). A heavily defended hilltop center on the northern frontier of
              Mesoamerica.
            </li>
            <li>
              Cholula. A survivor from Classic into Postclassic. Its pyramid grew by accretion into
              the largest single structure ever built in the Americas. Cholula was still a major
              center when the Spanish arrived.
            </li>
          </ul>

          <h3>Postclassic Mesoamerica, c. 900 to 1521 CE</h3>
          <ul className="lrn-list">
            <li>
              Tula (Tollan), capital of the Toltecs in central Mexico, flourished c. 950 to 1150 CE.
              Atlantean warrior columns on the Pyramid B became the symbol of Toltec militarism
              across Mesoamerica.
            </li>
            <li>
              Toltec mythology centered on Topiltzin Quetzalcoatl, the legendary priest king who was
              driven out of Tula by Tezcatlipoca and sailed east, promising to return. Aztec elites
              later told Cortés a version of this story to explain the Spanish arrival. That "return
              of Quetzalcoatl" framing was at least partly written backward after the conquest, in
              the shadow of defeat.
            </li>
            <li>
              Chichén Itzá in the northern Yucatán flourished c. 900 to 1200 CE. It carries Toltec
              style warrior columns, tzompantli (public racks of human skulls), and feathered
              serpent imagery. Whether this reflects conquest, migration, or shared symbolic
              vocabulary between Tula and Chichén is still debated. The city was never completely
              abandoned.
            </li>
            <li>
              Uxmal and the Puuc region cities developed a distinctive architectural style with
              mosaic stone facades, hook nosed Chac rain god masks, and corbeled arches.
            </li>
            <li>
              Mayapan ruled the northern Yucatán from about 1263 CE. A walled city of about 12,000
              people with a small Castillo pyramid modeled on Chichén's. The Cocom dynasty ruled it
              until 1441 CE, when the rival Xiu family rebelled, sacked the Cocom palace, and ended
              Mayapan's power. The Yucatán then split into many small competing kingdoms.
            </li>
          </ul>

          <h3>The Aztec Empire, 1325 to 1521 CE</h3>
          <p>
            The Aztec (Mexica) people arrived in the Basin of Mexico as a migrant group around 1300
            CE. They founded Tenochtitlán in 1325 on an island in Lake Texcoco. In less than two
            centuries they built a tribute empire covering much of central Mexico.
          </p>
          <ul className="lrn-list">
            <li>
              Tenochtitlán was laid out on a grid pierced by canals. Causeways and an aqueduct
              connected it to the lakeshore. The city proper held perhaps 50,000 or more people. The
              wider basin held several hundred thousand more. Chinampas (raised garden beds
              reclaimed from the lakebed) grew maize, beans, vegetables, and flowers year round.
            </li>
            <li>
              The Templo Mayor (Great Temple) stood at the center of the sacred precinct. Builders
              raised it seven times. Its twin shrines honored the war god Huitzilopochtli and the
              rain god Tlaloc. Excavations begun in 1978 have revealed thousands of offerings:
              sacrificed humans, sea creatures, jade figurines, jaguar skulls, and imported corals.
            </li>
            <li>
              The empire was a Triple Alliance: Tenochtitlán, Texcoco, and Tlacopan shared tribute
              and military command. The Codex Mendoza, a colonial copy of an Aztec ledger, records
              38 tributary provinces, each owing fixed payments of cacao, cotton mantles, quetzal
              feathers, jade, gold dust, food, warriors, and sacrificial victims. The empire covered
              roughly 200,000 sq km and held perhaps 6 million subjects. The Basin of Mexico alone
              held about a million.
            </li>
            <li>
              Aztec society was a strict class system. The altépetl (city state with its own
              hereditary ruler) was the basic unit. The empire was a network of altépetl, not a
              single bureaucratic state. The pipiltin were nobles by birth, separated from commoners
              by strict sumptuary rules. The maceualli were free commoners who owed taxes and
              military service. The mayeque were tied to noble estates as something between serfs
              and tenant farmers. Slaves were war captives, debtors, or criminals; their children
              were born free.
            </li>
            <li>
              The calpulli were kin based neighborhood units that organized labor, held communal
              land, ran schools, and provided warriors. The telpochcalli was the school for commoner
              sons (warriors). The calmecac was the school for noble sons (priests, scribes, future
              rulers).
            </li>
            <li>
              The pochteca were long distance merchants. They had their own guild, their own courts
              that could try their own members, and their own patron deity. They also served as
              spies in towns the empire planned to conquer. The pochteca existed because the empire
              had no coinage; goods had to be moved by traders, by tribute, or by gift exchange.
            </li>
          </ul>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="Coyolxauhqui Stone, Templo Mayor">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Mexico-3980_-_Coyolxauhqui_Stone_%282508259597%29.jpg"
                alt="Carved circular stone showing the dismembered moon goddess Coyolxauhqui"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {'The Coyolxauhqui Stone, found at the foot of the Templo Mayor in 1978. '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Mexico-3980_-_Coyolxauhqui_Stone_(2508259597).jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 2.0.'}
              </figcaption>
            </VizFigure>
          </figure>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="Codex Mendoza, folio 2r">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Codex_Mendoza_folio_2r.jpg"
                alt="Codex Mendoza page showing the eagle on a cactus at the founding of Tenochtitlan"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'Codex Mendoza folio 2r: the founding of Tenochtitlan, blue canals dividing the island. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Codex_Mendoza_folio_2r.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · Public domain.'}
              </figcaption>
            </VizFigure>
          </figure>

          <h3>Spanish Entry, 1519 to 1521</h3>
          <p>
            Hernán Cortés landed near Veracruz in April 1519 with about 500 Spaniards. He scuttled
            his ships, marched inland, and made the choice that decided everything: he allied with
            Tlaxcala, the largest unconquered enemy of the Aztec. Tlaxcala supplied tens of
            thousands of warriors. Cortés entered Tenochtitlán in November 1519. Moctezuma II
            received him in the palace. Within months, the Spanish were prisoners of their own
            welcome.
          </p>
          <p>
            In summer 1520, the Aztec rose against the occupation. The Spanish fled across the
            causeways during La Noche Triste (Sad Night, June 30, 1520), losing most of their men
            and most of the looted gold. They survived because Tlaxcala took them in. While the
            Aztec rebuilt, smallpox arrived. Brought by an African slave in Cortés's relief force,
            it killed perhaps a third of the basin's population in months, including the new emperor
            Cuitlahuac. Cortés returned with brigantines built in pieces and carried overland to the
            lake. The siege lasted 75 days. Tenochtitlán fell on August 13, 1521. Cuauhtemoc, the
            last emperor, was captured fleeing by canoe.
          </p>
          <div className="lrn-callout">
            <strong>Tenochtitlán did not end Mesoamerica.</strong> The Itzá Maya at Nojpetén in the
            Petén lake district held out until 1697, 176 years after Tenochtitlán fell. The Yucatán
            uplands, Chiapas highlands, and Guatemalan highlands kept fighting through the colonial
            period. Roughly 1.5 million people in Mexico still speak Nahuatl, the Aztec tongue.
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why was the Tlaxcalan alliance more important to the conquest than Spanish guns or
              steel?
            </p>
            <details>
              <summary>Reveal</summary>
              <p>
                Cortés had about 500 Spaniards. He faced an empire of six million. Guns and steel
                helped in individual fights but could not occupy a city. Tlaxcala supplied tens of
                thousands of warriors who already hated the Aztec for decades of forced tribute
                wars. Without Tlaxcalan numbers, food, and local knowledge, the Spanish would have
                been overrun within weeks. The conquest was a civil war that the Spanish helped tip.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>South America</h2>
          <p>
            The heartland here is the Central Andes, the culture area of coastal Peru and the
            highlands. It is the Andean parallel to Mesoamerica. South America is two worlds
            touching. The Pacific coast of Peru is one of the driest deserts on earth, broken by
            about 30 river valleys that drop from the Andes. The highland sierra above runs at 3,000
            to 4,500 meters, with vertical farming on terraces. The Humboldt Current sweeps cold
            water north along the coast, feeding one of the richest fisheries in the world. El Niño
            is a periodic warming of the Pacific that disrupts weather for a year or two. Every few
            years it reverses the current, kills the fish, and floods the deserts. Complex society
            in the Andes had to plan around this cycle.
          </p>

          <h3>The Preceramic Monuments, c. 3000 to 1800 BCE</h3>
          <p>
            The earliest monumental architecture in the western hemisphere was built before pottery,
            before woven cloth, and before maize. Aspero on the coast and Caral inland in the Supe
            Valley have six platform mounds and sunken circular plazas. The largest mound at Caral
            rises 18 meters. Marine protein and irrigated valley crops together carried the
            laborers. Cotton went into fishing nets, gourds into floats, and irrigation linked the
            two.
          </p>
          <p>
            El Paraíso in the Casma Valley (c. 1800 BCE) introduced the U-shaped temple complex
            (three platforms enclosing a central plaza on three sides) with small fire pits for
            burnt offerings. Cerro Sechín in the same valley has a megalithic wall mosaic of
            warriors and dismembered captives. The combat imagery is established by the third
            millennium BCE, long before the Moche made it famous.
          </p>

          <div className="lrn-insight">
            The Andean monumental tradition begins at Caral, covered earlier in the sequence as the
            case that complexity has more than one route.
          </div>

          <h3>Chavín de Huántar and the Early Horizon, c. 900 to 200 BCE</h3>
          <p>
            After about 1500 BCE the center of ritual gravity moves off the coast and into the
            highlands. The most powerful of these inland centers is Chavín de Huántar, which sits in
            a narrow Andean valley at 3,180 meters. Its Castillo complex is a multi-story labyrinth
            of stone galleries. Narrow corridors amplify sound. Water channels under the floor roar
            when river flow rises. Inside the deepest gallery stands the Lanzón, a 4.5 meter granite
            shaft carved with a fanged anthropomorphic deity called the Staff God. The same figure
            (head, fangs, staff in each hand, snake hair) spread across gold, textiles, and pottery
            from northern Peru to the south coast.
          </p>
          <p>
            Pukara, near Lake Titicaca, was a partly rival ceremonial center. The Early Horizon also
            brought tapestry weaving, dyeing, and metalwork. One key skill was repoussé: hammering a
            raised design out from the back of a metal sheet. Smiths forged the technology here that
            later peoples used to make Inca tumi knives and Sicán gold masks.
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="The Lanzón, Chavín de Huántar">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/El-lanzon.JPG"
                alt="The Lanzon granite shaft carved with the fanged Staff God deity at Chavin"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The Lanzon, a granite shaft carved with the fanged Staff God, deep inside Chavin. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:El-lanzon.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY 2.5.'}
              </figcaption>
            </VizFigure>
          </figure>

          <h3>Andean Institutions: Ayllu and Kuraka</h3>
          <p>
            Two Andean institutions run from the Preceramic to the Inca. Without them, none of the
            later state structures make sense.
          </p>
          <div className="lrn-definition">
            <p>
              <strong>Ayllu:</strong> a kin based group claiming common descent from a founding
              ancestor. The ayllu owned and worked land collectively. Members owed labor to each
              other and to the ancestor's cult. The ayllu was the basic social unit.
            </p>
            <p>
              <strong>Kuraka:</strong> a hereditary noble who ruled an ayllu, or a cluster of
              ayllus. The kuraka claimed legitimacy through closer descent from the founding
              ancestor. The kuraka redistributed surplus, organized labor for state projects, and
              represented the ayllu to higher powers.
            </p>
          </div>
          <p>
            The Inca empire did not invent these. It absorbed them. Mit'a labor tax, quipu
            recordkeeping, the four suyus (a suyu is a quarter of the empire), even the road system
            are built on ayllu and kuraka backbones.
          </p>

          <h3>Moche, c. 100 to 800 CE</h3>
          <p>
            The Moche flourished on the north coast of Peru. They built two adobe pyramids at their
            capital: the Huaca del Sol (Pyramid of the Sun) and the smaller Huaca de la Luna
            (Pyramid of the Moon). The Huaca del Sol used over 140 million adobe bricks. Moche
            pottery is famous for fine line painting and portrait vessels showing individual faces,
            including faces of the dead.
          </p>
          <p>
            In 1987, archaeologists excavated the royal tombs at Sipán. Three warrior priest burials
            had gold ornaments, turquoise, and shells from 1,000 kilometers north. The figures in
            the tombs match figures in the Presentation Theme painted on Moche pottery: a recurring
            scene where a warrior priest offers a cup of blood to a higher figure. The iconography
            was not myth. It recorded real ceremonies. At San José de Moro in the Jequetepeque
            Valley, priestess burials match the female figure in the same scene.
          </p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="Regalia of the Lord of Sipán">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/77/Se%C3%B1or_de_Sipan_%28Detalle%29.jpg"
                alt="Gold and turquoise regalia from the warrior-priest tomb at Sipan"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'Gold and turquoise regalia from a Moche warrior-priest tomb at Sipan, excavated 1987. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Se%C3%B1or_de_Sipan_(Detalle).jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 4.0.'}
              </figcaption>
            </VizFigure>
          </figure>

          <p>
            Was Moche one state? Probably not. It looks more like a constellation of regional
            kingdoms sharing one art style and one ritual repertoire. The collapse came in three
            stages. Severe El Niño floods around 562 to 594 CE smashed the canal heads. Sand dunes
            then walked across the fields the floods had cut off from water. Drought finished what
            the floods began. Smaller Moche-derived centers (Galindo, San José de Moro, Pañamarca)
            carried on until about 800 CE.
          </p>

          <h3>Nazca and Paracas</h3>
          <p>
            South of Moche, the Paracas culture (c. 800 BCE to 100 CE) buried mummies in conical
            bundles wrapped in dyed cotton textiles, some over 7 meters long. The Nazca that
            followed (c. 100 BCE to 800 CE) made the Nazca Lines: geoglyphs (huge figures made by
            scraping away the dark surface stones to expose the lighter ground beneath) showing
            animals, plants, and geometric figures, some hundreds of meters long. The lines were
            probably ceremonial pathways tied to water cult, walked in procession. Cahuachi was the
            major ceremonial center, with about 40 mounds.
          </p>

          <h3>Wari and Tiwanaku, c. 600 to 1000 CE</h3>
          <p>
            Two highland states rose together. Wari near Ayacucho built planned administrative
            centers (Pikillaqta, Viracochapampa) across Peru. Each used the same rectangular grid:
            walled compounds with identical rooms around courtyards. Identical plans across distant
            sites mean one authority designed them. Communities left to themselves build
            differently. The repetition is the evidence of direct rule.
          </p>
          <p>
            Tiwanaku stood at 3,850 meters near Lake Titicaca. It built the Akapana platform, the
            Kalasasaya enclosure, and the Gateway of the Sun (a single carved monolith showing the
            Staff God). Tiwanaku spread south through colonies in Moquegua, Cochabamba, and San
            Pedro de Atacama. Both Wari and Tiwanaku used Staff God iconography inherited from
            Chavín, a continuity stretching almost 2,000 years. Both collapsed around 1000 CE during
            a long drought visible in ice cores from the Quelccaya glacier.
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="Gateway of the Sun, Tiwanaku">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Tiwanaku%2C_Bolivia_-_Gate_of_the_Sun%2C_2017.jpg"
                alt="The Gateway of the Sun at Tiwanaku, a single carved stone monolith with the Staff God"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The Gateway of the Sun at Tiwanaku, one carved monolith topped by the Staff God. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Tiwanaku,_Bolivia_-_Gate_of_the_Sun,_2017.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY 2.0.'}
              </figcaption>
            </VizFigure>
          </figure>

          <h3>Sicán and Chimú, c. 750 to 1470 CE</h3>
          <p>
            With the highland states gone, the next round of power rises again on the north coast,
            where the same irrigated valleys that fed Moche keep producing surpluses. The Lambayeque
            (Sicán) culture rose on the north coast after Moche. At Batán Grande, archaeologists
            found the Sicán Lord burial: face down, gold mask, about 1.2 tons of grave goods. Batán
            Grande may have been a religious center more than a political capital, a Vatican of the
            north coast.
          </p>
          <p>
            The Chimú built the city of Chan Chan on the Moche Valley. Chan Chan had eleven royal
            ciudadelas (walled compounds), each built by a successive king as a palace then sealed
            as a mortuary temple at his death. The inheritance pattern is striking. The incoming
            king inherited the title but not the property, so he built his own. This is called split
            inheritance. The Inca conquered Chimú in the 1470s under Tupac Inca Yupanqui and copied
            the model.
          </p>

          <h3>The Inca, c. 1438 to 1532 CE</h3>
          <p>
            The Inca empire is the largest pre-Columbian state in the Americas. It stretched over
            4,000 kilometers from southern Colombia to central Chile, covered roughly two million
            square kilometers, and ruled about 12 million people. It rose in less than a century.
          </p>
          <p>
            Manco Capac is the legendary founder, said to have come from Lake Titicaca. The real
            expansion began with Pachacuti, the ninth Inca, around 1438. His son Tupac Inca pushed
            north into Ecuador and south into Chile. His grandson Huayna Capac fixed the northern
            border at Quito. The empire's name was Tawantinsuyu, "land of the four suyus":
            Chinchaysuyu (northwest), Antisuyu (northeast), Collasuyu (south), Contisuyu
            (southwest). All radiated from Cuzco.
          </p>
          <p>
            Cuzco was the navel. It held kanchas (walled compounds), each made of uasi (single rooms
            around a patio), and was organized around ten royal panaca lineages. The Coricancha was
            the Temple of the Sun, walls clad in sheets of gold. Above the city rose Sacsayhuaman, a
            fort temple of zigzag walls made of stones up to 200 tons, fitted without mortar so
            tightly that a knife blade will not enter the joints.
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Sacsayhuamán walls, Cuzco">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Sacsayhuam%C3%A1n_walls.jpg"
                alt="Massive polygonal zigzag stone walls of Sacsayhuaman fitted without mortar"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The zigzag walls of Sacsayhuaman, huge stones fitted so tightly no blade enters the joints. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Sacsayhuam%C3%A1n_walls.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · Public domain.'}
              </figcaption>
            </VizFigure>
          </figure>

          <h3>Mit'a, Quipu, and Roads</h3>
          <p>
            The mit'a was the Inca labor tax. Each ayllu owed labor time, not goods. The state fed
            and housed the workers. Mit'a built about 40,000 kilometers of paved road, terraces on
            entire mountainsides, storehouses (qullqas) holding enough food for years, and royal
            estates like Machu Picchu.
          </p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Machu Picchu, Bingham expedition, 1912">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/86/Machupicchu_hb10.jpg"
                alt="1912 photograph of the Machu Picchu terraces below the peak of Huayna Picchu"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {'Machu Picchu, the royal estate, in a 1912 plate from the Bingham expedition. '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Machupicchu_hb10.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · Public domain.'}
              </figcaption>
            </VizFigure>
          </figure>

          <p>
            The quipu was the Inca recording device. It is a main cord with hanging cords; knots
            encode numbers. Knot type (overhand, long, figure eight) plus position (units, tens,
            hundreds) gives a decimal value. Color and cord position group records by region, year,
            and category. Trained quipucamayoq read them. The Inca state ran on quipus the way Egypt
            ran on papyrus. Whether quipus also encoded narrative is debated. Recent computer
            analysis of surviving quipus finds patterns that suggest some did, but no quipu has been
            read as connected prose.
          </p>
          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="Inca quipu (khipu)">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Inca_Quipu.jpg"
                alt="An Inca quipu, a main cord with many knotted hanging cords in different colors"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'A quipu: knots on hanging cords encode numbers, and cord color groups the records. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Inca_Quipu.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 3.0.'}
              </figcaption>
            </VizFigure>
          </figure>

          <p>
            Runa Simi, which the Spanish renamed Quechua, was imposed as the administrative language
            across the empire. About 8 million people still speak it today, from Ecuador to Bolivia.
          </p>

          <h3>The Conquest of the Inca, 1532</h3>
          <p>
            Around 1527 Huayna Capac died, probably of smallpox arriving overland from Panama ahead
            of any Spaniard. His designated heir died days later of the same disease. A five year
            civil war followed between two surviving sons: Huáscar in Cuzco and Atahualpa in Quito.
            Atahualpa won in early 1532. Months later, he met Francisco Pizarro with 168 men at
            Cajamarca.
          </p>
          <p>
            On November 16, 1532, Pizarro ambushed Atahualpa in the central plaza of Cajamarca. The
            Spanish killed thousands of unarmed retainers and seized the emperor alive. Atahualpa
            bought time by offering a room filled with gold and two more with silver as ransom. The
            Spanish accepted the payment, then strangled him with a garrote in July 1533. The logic:
            in an empire where authority flowed through the ruler's body, taking the body paralyzed
            the system.
          </p>
          <div className="lrn-callout">
            <strong>The conquest was not over in 1533.</strong> Manco Inca led a major rebellion in
            1536 to 1537 that besieged Cuzco. He then retreated to Vilcabamba in the eastern jungles
            and held an Inca state there for 36 years. The last Vilcabamba ruler, Tupac Amaru, was
            captured and beheaded by the Spanish in 1572. Tupac Amaru II (no direct relation) led
            another major Andean revolt in 1780 to 1783. Quechua and Aymara remain living languages
            with millions of speakers.
          </div>

          <h3>Amazonia</h3>
          <p>
            The Pacific spine is only half of South America. East of the Andes, the Amazon basin
            held complex societies of a different kind: no kings, no stone temples, no cities by
            Andean standards, but engineered landscapes and dense populations the early Europeans
            never saw. The "empty rainforest" image of Amazonia is wrong. Pre-Columbian Amazonia
            held millions of people and large villages connected by roads.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Marajóara culture</strong> (Marajó Island at the mouth of the Amazon, c. 400
              to 1400 CE). Earth mounds up to 8 meters, with cemeteries plus occupation, and large
              polychrome funerary urns.
            </li>
            <li>
              <strong>Santarém / Tapajós culture</strong> (lower Amazon). Elaborate ceramics. Early
              European travelers in the 16th century described a city.
            </li>
            <li>
              <strong>Acutuba</strong> (central Amazon, about 50 hectares). Fine ware ceramics and
              signs of craft specialization.
            </li>
            <li>
              <strong>Upper Xingu</strong> (central Brazil). Plaza villages connected by wide
              straight roads in a regional pattern that has been read as a form of Amazonian low
              density urbanism.
            </li>
            <li>
              <strong>Llanos de Moxos</strong> (Bolivian Amazon). Raised fields, causeways, and fish
              weirs covering tens of thousands of square kilometers of seasonally flooded savanna.
            </li>
            <li>
              <strong>Terra preta</strong> (Amazonian dark earth). Patches of fertile black soil
              made by long term human additions of charcoal, bone, ash, and food waste. Some patches
              cover over 100 hectares. It is evidence of dense, long term occupation that built soil
              rather than mining it.
            </li>
          </ul>

          <div className="lrn-callout">
            <strong>KEY CONTROVERSY: The circumscription theory.</strong> The circumscription theory
            holds that states form where geographic barriers stop people from escaping conflict.
            With nowhere to flee, losers must submit, and political units consolidate. Coastal
            Peruvian valleys (desert on three sides, ocean on the fourth) fit perfectly. Open
            Amazonia does not, and yet Amazonia produced large complex societies that were not
            coercive states. The theory explains some cases and exposes others. The takeaway:
            complexity does not require circumscription, but coercion may.
          </div>

          <p>
            Two language family dispersals shaped lowland South America. Arawak speakers spread from
            a probable origin in northwestern Amazonia into the Caribbean (the Taíno) and across
            much of the basin. Tupiguarani speakers spread from the central Amazon south to the
            Atlantic coast of Brazil and Paraguay. Many of the later complex societies in South
            America are descendants of these expansions.
          </p>
        </>,

        <>
          <h2>North America</h2>
          <p>
            North America held no empires before 1492, but it held cities, irrigation networks,
            sacred geographies linked by formal roads, and societies that were complex without being
            states. Three regions are key: the Eastern Woodlands, the Southwest, and the Pacific
            Coast. The Plains, the Arctic, and the Norse contact in Newfoundland fill in the
            picture.
          </p>

          <h3>Eastern Woodlands: Adena, Hopewell, Mississippian</h3>
          <p>
            The Eastern Woodlands run from the Atlantic coast to the Mississippi River. Three
            successive moundbuilding traditions shape its prehistory.
          </p>
          <p>
            <strong>Adena</strong> (Ohio Valley, c. 800 BCE to 100 CE) built conical burial mounds.
            The Grave Creek Mound in West Virginia rises 21 meters. Mounds held high status burials
            with copper from the Great Lakes and shell from the Gulf.
          </p>
          <p>
            <strong>Hopewell</strong> (c. 100 BCE to 500 CE) replaced Adena and went continental in
            scope. The Hopewell exchange network moved obsidian from Yellowstone, copper from Lake
            Superior, mica from the Appalachians, shark teeth and conch shells from the Gulf coast.
            Mound 25 at the Hopewell type site held over 100 burials with breastplates of hammered
            copper, mica cutouts of human hands, and effigy pipes. The moon's rising point on the
            horizon swings north and south over an 18.6-year cycle. The geometric earthworks at
            Newark, Ohio, appear to frame the extremes of that swing. Hopewell faded between 400 and
            500 CE, not by catastrophe but by the slow contraction of the long distance exchange
            network. Population kept growing; the trade itself stopped mattering.
          </p>
          <p>
            <strong>Mississippian</strong> (c. 800 to 1500 CE) brought intensive maize farming and
            the platform mound town. The largest center was Cahokia, on the east bank of the
            Mississippi opposite modern St. Louis. At its peak (c. 1050 to 1200 CE) Cahokia held
            roughly 10,000 to 20,000 people in the central precinct, with more across the wider
            American Bottom. Monks Mound, the largest earthwork north of Mexico, rises 30.5 meters
            across a base of about 6 hectares. Mound 72 held a high status double burial on a
            platform of 20,000 marine shell beads, surrounded by about 250 sacrificial victims,
            mostly young women. A circle of cedar posts west of Monks Mound, called Woodhenge,
            marked the solstices and equinoxes. Cahokia was abandoned by 1350 CE.
          </p>

          <h3>The Southwest: Hohokam, Chaco, Mesa Verde</h3>
          <p>
            <strong>Hohokam</strong> (southern Arizona, c. 300 to 1450 CE) built the largest pre
            Columbian irrigation network in North America. From the Salt and Gila Rivers, canal
            systems stretched over 800 kilometers, watering desert fields. Snaketown was the great
            Preclassic center, with platform mounds and over 200 ball courts across Hohokam
            territory. The ball courts are Mesoamerican influenced. The Classic period (1150 to 1450
            CE) shifted from ball courts to platform mound compounds. Casa Grande (great house) rose
            at the end. After 1450 CE the system collapsed. Why? Irrigation without drainage salts
            up the soil over generations. Salinized fields yield less. A severe 14th century drought
            made marginal yields worse. The political authority that depended on full storehouses
            lost its base.
          </p>
          <p>
            <strong>Chaco Canyon</strong> (northwestern New Mexico, peak c. 850 to 1150 CE) is the
            strangest pre Columbian site in North America. Twelve great houses inside the canyon
            (Pueblo Bonito with about 650 rooms, Chetro Ketl, Pueblo del Arroyo) were joined to
            about 150 outlier great houses across the San Juan Basin by formal roads up to 60 meters
            wide and ruler straight. Cacao residue in cylinder jars proves trade with Mesoamerica.
            The current consensus reads Chaco as a ritual aggregation center, a pilgrimage place,
            not a residential capital. Pueblo Bonito sometimes held just a few dozen people. Then it
            filled with thousands for ceremonies, and emptied again.
          </p>

          <p>
            <strong>Mesa Verde</strong> (southwestern Colorado, Pueblo III period, c. 1150 to 1300
            CE) is the cliff dwelling phase. Cliff Palace (about 150 rooms, 23 kivas), Spruce Tree
            House, and Balcony House are built into sandstone alcoves above the canyon floors. The
            cliff sites are defensive. They were occupied for about 100 years and abandoned by 1300
            CE. Three factors stack: the Great Drought of 1276 to 1299 CE (visible in tree rings),
            arrival of Numic speaking hunter gatherer groups moving in from the west, and intra
            Pueblo conflict shown by burned sites and unburied dead. The people did not vanish.
            Pueblo IV settlements along the Rio Grande absorbed survivors. Today's Pueblo
            communities (Hopi, Zuni, Acoma, Taos, and others) descend from them.
          </p>

          <h3>The Plains</h3>
          <p>
            Before about 1700, most Plains peoples were not mounted bison hunters. The Mandan,
            Hidatsa, and Arikara lived in earthlodge villages along the upper Missouri River,
            farming maize, beans, squash, and sunflower in river bottoms. They traded surplus corn
            for bison meat from neighbors who did hunt full time. The mounted bison hunter image
            (Lakota, Comanche on horseback) is post Spanish horse. The horse spread north from New
            Mexico after the Pueblo Revolt of 1680. By 1750 it had reshaped Plains economies, and by
            1800 the older village pattern had largely collapsed under the combined pressure of
            horse mounted raiders, smallpox, and US expansion.
          </p>

          <h3>The Pacific Coast</h3>
          <p>
            The Pacific Northwest coast supported complex society without agriculture. Salmon runs,
            sea mammals, cedar forests, and shellfish beds carried hereditary rank, slavery, large
            plank houses, totem pole carving, and the potlatch (a competitive feast where chiefs
            gave away wealth to prove their status).
          </p>
          <p>
            The Chumash of the California coast built tomols, plank canoes sewn together with plant
            fiber and sealed with asphaltum, capable of crossing to the Channel Islands. They used
            shell bead money (olivella) issued by specialist makers on Santa Cruz Island, with
            values tracked by length and provenance. The Chumash had hereditary chiefs, regional
            networks, and population densities matching small Polynesian states. They did all of
            this on wild acorns, shellfish, and seasonal harvests.
          </p>

          <h3>Arctic and Norse Contact</h3>
          <p>
            The Dorset culture occupied the Eastern Arctic for over two thousand years. Around 1000
            CE, during the Medieval Warm Period, the Thule (ancestors of modern Inuit) expanded east
            from Alaska with dog sleds, kayaks, and toggling harpoons for bowhead whale hunting. The
            Thule displaced the Dorset within centuries.
          </p>
          <p>
            L'Anse aux Meadows on the northern tip of Newfoundland is the only confirmed Norse site
            in North America. Archaeologists excavated it in the 1960s. It held eight sod buildings,
            an iron smithy, and dates to about 1000 CE. The Vinland sagas describe trade and
            fighting with Indigenous "Skraelings." The Norse abandoned it within decades. The
            reasons are familiar: too far from supplies, too few settlers, local resistance.
          </p>

          <div className="lrn-callout">
            <strong>European contact, 1492 to 1600.</strong> Old World epidemics ran ahead of the
            chroniclers. Many North American societies described by the first Europeans had already
            absorbed huge waves of disease, so what the chroniclers logged as "decline" was often
            the aftermath of pandemics they never saw. The synthesis section traces why the
            pathogens moved only one direction.
          </div>
        </>,

        <>
          <h2>Synthesis: Reading the Pattern</h2>
          <p>
            Why did complex society arise in so many places that had no contact with each other, and
            why does it carry such consistent costs? Four processes show up in every case.
          </p>

          <h3>Four Processes Behind Complexity</h3>
          <ol className="lrn-list">
            <li>
              <strong>Demographic increase.</strong> Settled farmers wean children sooner than
              mobile foragers. So they have babies closer together, and populations grow faster.
              Larger groups need more food per hectare, more coordination, and more conflict
              resolution. Population pressure does not by itself build a state, but no state appears
              without it.
            </li>
            <li>
              <strong>Intensification and degradation.</strong> To feed the growing population,
              farmers intensify: irrigation in the Hohokam canals, terracing in the Andes, chinampas
              in the Aztec basin, raised fields in Llanos de Moxos. Intensification raises yields
              and lowers resilience. Salinized Hohokam fields, deforested Maya uplands, eroded Mesa
              Verde slopes, silted Mesopotamian canals. The same investments that build complexity
              also drain the environmental margin that buffers it.
            </li>
            <li>
              <strong>Biological exchange.</strong> Disease, crops, and animals move with people.
              The disease asymmetry section below traces why the pathogens flowed only one way in
              1492.
            </li>
            <li>
              <strong>Climate change.</strong> The Medieval Climate Anomaly (c. 950 to 1250 CE)
              brought warm, mostly wet conditions that supported Cahokia, Chaco, the Norse in
              Greenland, and the Pueblo III florescence. The transition into the Little Ice Age (c.
              1300 to 1850 CE) brought droughts, cold snaps, and crop failures. Ice cores, tree
              rings, and lake sediments date these shifts independently of human records.
            </li>
          </ol>

          <h3>Primary vs Secondary States</h3>
          <p>
            The First Civilizations of the Old World split states into primary, which arose on their
            own, and secondary, which copied a neighbor. The new data point here is the two American
            rows.
          </p>
          <div className="lrn-compare">
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Examples</th>
                  <th>How recognized</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primary</td>
                  <td>Mesopotamia, Egypt, Indus, China, Mesoamerica, Andes</td>
                  <td>
                    No earlier neighboring state to copy from. Independent invention of writing or
                    state institutions.
                  </td>
                </tr>
                <tr>
                  <td>Secondary</td>
                  <td>Mycenae, Aksum, Japan, Hawaii, Tahiti, most African and European states</td>
                  <td>
                    Formed in contact with an earlier primary state. Borrowed forms, then adapted
                    them.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Six primary states is a small number. They cluster in places with rich alluvial soils,
            river floodplains or coastal valleys, and reliable seasonal water. The Americas produced
            two of the six on their own. That fact alone tells you the state form is not a Eurasian
            quirk. It is a recurring solution to the problem of feeding and governing large
            agricultural populations.
          </p>

          <h3>The Stacking Model of Collapse</h3>
          <p>
            Every well documented collapse in this module follows the same logic. The four processes
            above explain how complexity rises. These four pressures explain how it falls. No single
            cause explains a collapse. Four pressures stack, each weakening the buffers that absorb
            the next.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Climate stress</strong>: a multi decade drought or cooling cuts harvests. The
              Classic Maya, the highland Andes under Wari and Tiwanaku, Mesa Verde, and Hohokam all
              run into this wall in the regional sections above.
            </li>
            <li>
              <strong>Ecological degradation</strong>: salt buildup, deforestation, and erosion
              shrink the safe yield. Intensified farming that built the state also strips the margin
              that would have carried it through bad years.
            </li>
            <li>
              <strong>Political legitimacy crisis</strong>: kings whose office promises rain,
              fertility, and victory lose authority when the rain stops. The Classic Maya "collapse"
              is really the failure of divine kingship as an institution.
            </li>
            <li>
              <strong>Internal revolt or warfare</strong>: an already brittle elite is overthrown
              from inside. Teotihuacán fits this best, with fire concentrated on temples and palaces
              but not on residences.
            </li>
          </ul>
          <p>
            Collapse is not extinction. It is the failure of a particular political form. The Maya,
            the Pueblo peoples, the descendants of Cahokia, Moche, and Chimú are alive today. The
            forms they once built are not.
          </p>

          <h3>Old World vs New World: The Disease Asymmetry</h3>
          <p>
            Why did smallpox kill millions of Aztec, Inca, and Mississippians, while Indigenous
            American diseases barely touched Europeans? Trace the chain.
          </p>
          <ol className="lrn-list">
            <li>
              The Old World domesticated many large animals (cattle, pigs, sheep, goats, horses,
              chickens) starting around 10,000 BCE. The Americas domesticated only the llama,
              alpaca, guinea pig, turkey, and dog.
            </li>
            <li>
              Crowd diseases (smallpox, measles, influenza, mumps) evolved from animal pathogens
              over thousands of years of close human animal contact. The Old World accumulated a
              large endemic disease pool.
            </li>
            <li>
              Old World populations were not immune to these diseases individually, but enough
              survived each childhood epidemic to develop herd immunity. The diseases stayed present
              at low level.
            </li>
            <li>
              The Americas, with a thinner animal domestication record, had a thinner disease pool.
              No herd immunity to Old World pathogens existed.
            </li>
            <li>
              When 1492 connected the hemispheres, the pathogen gradient went one way. Smallpox
              reached Mexico in 1520, the Andes by 1527, and the interior of North America before
              most chroniclers arrived. Estimated mortality: 50 to 90 percent within a century.
            </li>
          </ol>

          <h3>Mesoamerica vs the Andes</h3>
          <div className="lrn-compare">
            <table>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Mesoamerica</th>
                  <th>Andes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Political form</td>
                  <td>City state archipelago. Many altépetl, never unified.</td>
                  <td>Territorial empire. Tawantinsuyu unified 4,000+ km.</td>
                </tr>
                <tr>
                  <td>Tribute medium</td>
                  <td>Goods (cacao, cotton, feathers, gold)</td>
                  <td>Labor (mit'a)</td>
                </tr>
                <tr>
                  <td>Writing</td>
                  <td>Logosyllabic glyphs (Maya, Aztec, Zapotec, Mixtec)</td>
                  <td>Quipu (numerical, possibly more)</td>
                </tr>
                <tr>
                  <td>Staple crops</td>
                  <td>Maize, beans, squash, chiles, cacao, vanilla</td>
                  <td>Potato, quinoa, maize, coca, peanut</td>
                </tr>
                <tr>
                  <td>Draft animals</td>
                  <td>None</td>
                  <td>Llama (light loads only)</td>
                </tr>
                <tr>
                  <td>Metal</td>
                  <td>Late, mostly Postclassic, ornamental gold and copper</td>
                  <td>Early (Early Horizon), gold/silver/copper alloys, status objects</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Both regions lacked iron and large draft animals. Both built dense populations,
            intensive agriculture, and powerful states. The contrasts (archipelago vs empire, goods
            vs labor, glyphs vs knots) show that complex society does not have one template. The
            same human problem (feed and govern millions) admits more than one solution.
          </p>

          <div className="lrn-insight">
            <p>
              The full module in one paragraph. Across two continents that lost contact with the
              rest of humanity around 12,000 BCE, people independently invented agriculture, cities,
              monumental architecture, mathematics, calendars, writing, metallurgy, empires, and the
              institutions of statecraft. They did this with maize, potatoes, and llamas instead of
              wheat, barley, and oxen. They did this without iron, without wheels for transport, and
              (in the Andes) without conventional writing. When the hemispheres reconnected in 1492,
              the meeting was catastrophic for the Americas, not because the Indigenous societies
              were less sophisticated, but because the Eurasian disease pool was older. Most of the
              destruction was epidemiological, not technological. The civilizations are not in the
              past tense.
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'What does it mean to call a society "complex"? Give the minimum threshold.',
        a: 'A complex society supports full time specialists. Most people farm, but others rule, fight, build, pray, write, or count without growing their own food. The minimum threshold is enough food surplus, shared rules, and recordkeeping to keep those specialists fed and coordinated.'
      },
      {
        q: 'Name two pieces of evidence on each side of the Olmec mother-culture debate.',
        a: 'For mother culture: the colossal heads carved earlier than any comparable portraits elsewhere; La Venta\'s pyramid as the earliest Mesoamerican monument of its scale; the wide spread of Olmec-style icons (were-jaguar, downturned mouth) across regions. For sister culture: Paso de la Amada\'s ball court at c. 1400 BCE predates the Olmec heartland; the Mirador Basin built monumental architecture in parallel; many "Olmec" stylistic traits originate in other regions. The point of naming both sides is that priority is real evidence, not the whole evidence.'
      },
      {
        q: "On January 15, 378 CE, Siyaj K'ak' arrived at Tikal. Why does this date matter?",
        a: "Tikal's king died days before. Siyaj K'ak's name appears across multiple Maya sites soon after. A year later, a man with Teotihuacán connections is installed as king of Tikal. This is direct evidence of foreign intervention in Maya politics, not just trade or style influence."
      },
      {
        q: 'How sudden was the Classic Maya collapse?',
        a: 'Not sudden. Decline began c. 760 CE in the western lowlands and took roughly 150 years. It was not uniform. Coba, Lamanai, and the Itzá kingdom never collapsed. The failure was of divine kingship as an institution, not of the Maya people. About 6 million Maya speakers live today.'
      },
      {
        q: "What does the Inca mit'a labor tax tell you about Andean political economy?",
        a: "Tribute came as labor time, not goods. Each ayllu owed worker days; the state fed and housed them. Mit'a built roads, terraces, storehouses, and royal estates. This is different from the Aztec model of tribute in goods. Andean wealth was reckoned in person hours of mobilizable labor."
      },
      {
        q: 'How did 168 Spaniards defeat the Inca Empire of 12 million people in 1532?',
        a: "Smallpox killed Huayna Capac c. 1527 and triggered a five year civil war between Huáscar and Atahualpa. Pizarro arrived at Cajamarca months after Atahualpa's victory. The capture of the emperor on November 16, 1532 paralyzed an authority system that flowed through his body. Indigenous allies, fear, and disease did the rest. Vilcabamba resistance continued until 1572."
      },
      {
        q: 'Apply the stacking model of collapse to one site of your choice.',
        a: 'Mesa Verde, 1300 CE: the Great Drought of 1276 to 1299 (climate stress), depleted soil and firewood on the mesa tops (ecological degradation), arrival of Numic speaking outsiders (external pressure), and burned sites with unburied dead (intra Pueblo conflict). No single cause. The Pueblo people moved to the Rio Grande, where their descendants live today.'
      },
      {
        q: 'Why was the disease transfer in 1492 mostly one way?',
        a: 'The Old World had longer animal domestication (cattle, pigs, sheep, horses) and a larger endemic crowd disease pool. The Americas domesticated few large animals (mostly llama, alpaca, turkey, guinea pig). Herd immunity existed in the Old World but not the New, so smallpox, measles, influenza, and mumps moved one direction and killed half or more of Indigenous Americans within a century.'
      },
      {
        q: 'What is the difference between a primary and a secondary state?',
        a: 'Primary states invented complex political organization without copying a nearby state. Six are recognized: Mesopotamia, Egypt, Indus, China, Mesoamerica, and the Andes. Secondary states formed by responding to a nearby primary state through trade, threat, or imitation. Most later states are secondary. The Americas produced two of the six primary states on their own.'
      },
      {
        q: 'Compare Mesoamerican and Andean civilization in one sentence each.',
        a: "Mesoamerica was a city state archipelago that recorded value in goods (tribute of cacao, cotton, feathers) and wrote in logosyllabic glyphs. The Andes built territorial empires that recorded value in labor (mit'a) and tracked numbers on knotted cord (quipu). Both lacked iron and large draft animals."
      }
    ],

    reference: {
      category: 'Module 6',
      title: 'Complex Societies of the Americas and Synthesis',
      sections: [
        <>
          <h2>Mesoamerica: Key Sites and Dates</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 1600 BCE to 1521 CE
            </p>
            <p>
              <strong>Region:</strong> central Mexico to western Honduras
            </p>
            <div className="ref-grid">
              <div className="ref-item">
                <strong>Paso de la Amada</strong> c. 1550 to 850 BCE. Pacific coastal plain.
                Earliest known ball court (c. 1400 BCE).
              </div>
              <div className="ref-item">
                <strong>San José Mogote</strong> c. 1600 to 500 BCE. Oaxaca Valley. Monument 3 slain
                captive with early Zapotec writing.
              </div>
              <div className="ref-item">
                <strong>San Lorenzo</strong> c. 1400 to 900 BCE. Olmec capital. Colossal heads.
              </div>
              <div className="ref-item">
                <strong>La Venta</strong> c. 900 to 400 BCE. Successor Olmec capital. Sarcophagi,
                infant burials, jaguar mosaics.
              </div>
              <div className="ref-item">
                <strong>Cascajal block</strong> possibly c. 900 BCE. 62 carved signs, oldest writing
                in Americas if authentic.
              </div>
              <div className="ref-item">
                <strong>Monte Albán</strong> c. 500 BCE to 700 CE. Zapotec capital, Valley of
                Oaxaca. Danzante slabs and conquest slabs.
              </div>
              <div className="ref-item">
                <strong>Nakbé and El Mirador</strong> c. 1000 BCE to 150 CE. Late Preclassic Maya,
                northern Guatemala. Massive stone and plaster architecture.
              </div>
              <div className="ref-item">
                <strong>Hauberg Stela</strong> 197 CE. Earliest legible Maya royal inscription.
              </div>
              <div className="ref-item">
                <strong>Teotihuacán</strong> c. 100 BCE to 550 CE. Pyramid of the Sun 63 m. Peak
                population at least 80,000. Burned c. 550 CE.
              </div>
              <div className="ref-item">
                <strong>Tikal</strong> c. 200 BCE to 900 CE. Major Maya lowland city. Siyaj K'ak'
                arrives January 15, 378 CE.
              </div>
              <div className="ref-item">
                <strong>Calakmul</strong> c. 250 to 900 CE. Tikal's great rival. Defeated Tikal 562
                CE.
              </div>
              <div className="ref-item">
                <strong>Palenque</strong> c. 600 to 800 CE. Pakal's tomb in Temple of the
                Inscriptions.
              </div>
              <div className="ref-item">
                <strong>Cantona, Cacaxtla, Xochicalco, El Tajín, La Quemada, Cholula</strong>{' '}
                Epiclassic centers c. 600 to 900 CE.
              </div>
              <div className="ref-item">
                <strong>Tula</strong> c. 900 to 1150 CE. Toltec capital. Atlantean warrior columns.
              </div>
              <div className="ref-item">
                <strong>Chichén Itzá</strong> c. 900 to 1200 CE. Postclassic Yucatán center. El
                Castillo pyramid.
              </div>
              <div className="ref-item">
                <strong>Mayapan</strong> c. 1200 to 1441 CE. Last northern Yucatán capital. Fell
                1441 CE.
              </div>
              <div className="ref-item">
                <strong>Tenochtitlán</strong> 1325 to 1521 CE. Aztec capital on Lake Texcoco. City
                proper 50,000+. Fell August 13, 1521.
              </div>
            </div>
          </div>
        </>,

        <>
          <h2>South America: Key Sites and Dates</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 3000 BCE to 1572 CE
            </p>
            <p>
              <strong>Region:</strong> Pacific coast and Andes; Amazon basin
            </p>
            <div className="ref-grid">
              <div className="ref-item">
                <strong>Caral and Aspero</strong> c. 3000 to 1800 BCE. Preceramic monumental
                architecture in the Supe Valley.
              </div>
              <div className="ref-item">
                <strong>El Paraíso</strong> c. 1800 BCE. U-shaped temple complex, Casma Valley.
              </div>
              <div className="ref-item">
                <strong>Cerro Sechín</strong> c. 1500 BCE. Megalithic wall mosaic of warriors and
                dismembered captives.
              </div>
              <div className="ref-item">
                <strong>Chavín de Huántar</strong> c. 900 to 200 BCE. Castillo, Lanzón stela, Staff
                God. Early Horizon center.
              </div>
              <div className="ref-item">
                <strong>Paracas</strong> c. 800 BCE to 100 CE. Mummy bundles in dyed cotton
                textiles.
              </div>
              <div className="ref-item">
                <strong>Nazca</strong> c. 100 BCE to 800 CE. Nazca Lines, Cahuachi ceremonial
                center.
              </div>
              <div className="ref-item">
                <strong>Moche</strong> c. 100 to 800 CE. Huaca del Sol, Sipán royal tombs,
                Presentation Theme.
              </div>
              <div className="ref-item">
                <strong>Tiwanaku</strong> c. 500 to 1000 CE. Akapana, Kalasasaya, Gateway of the
                Sun, 3,850 m.
              </div>
              <div className="ref-item">
                <strong>Wari</strong> c. 600 to 1000 CE. Pikillaqta, Viracochapampa, planned
                administrative centers.
              </div>
              <div className="ref-item">
                <strong>Sicán / Batán Grande</strong> c. 750 to 1375 CE. Sicán Lord burial,
                religious center on north coast.
              </div>
              <div className="ref-item">
                <strong>Chimú / Chan Chan</strong> c. 900 to 1470 CE. Eleven royal ciudadelas.
                Conquered by Inca 1470s.
              </div>
              <div className="ref-item">
                <strong>Cuzco</strong> c. 1200 to 1532 CE. Inca capital. Coricancha, Sacsayhuaman.
              </div>
              <div className="ref-item">
                <strong>Machu Picchu</strong> c. 1450 CE. Royal estate of Pachacuti.
              </div>
              <div className="ref-item">
                <strong>Cajamarca</strong> November 16, 1532. Atahualpa captured by Pizarro.
              </div>
              <div className="ref-item">
                <strong>Vilcabamba</strong> 1536 to 1572. Inca remnant state in the eastern jungles.
              </div>
              <div className="ref-item">
                <strong>Marajóara, Santarém, Acutuba, Upper Xingu, Llanos de Moxos</strong>{' '}
                Amazonian complex societies c. 400 to 1500 CE.
              </div>
            </div>
          </div>
        </>,

        <>
          <h2>North America: Key Sites and Dates</h2>
          <div className="ref-section">
            <p>
              <strong>Period:</strong> c. 800 BCE to 1600 CE
            </p>
            <p>
              <strong>Region:</strong> Eastern Woodlands, Southwest, Plains, Pacific Coast, Arctic
            </p>
            <div className="ref-grid">
              <div className="ref-item">
                <strong>Adena</strong> c. 800 BCE to 100 CE. Ohio Valley conical burial mounds.
              </div>
              <div className="ref-item">
                <strong>Hopewell</strong> c. 100 BCE to 500 CE. Mound 25, Newark earthworks,
                continental exchange network.
              </div>
              <div className="ref-item">
                <strong>Cahokia</strong> c. 1050 to 1350 CE. Monks Mound 30.5 m. Mound 72
                sacrificial burial. Woodhenge.
              </div>
              <div className="ref-item">
                <strong>Hohokam / Snaketown / Casa Grande</strong> c. 300 to 1450 CE. Largest pre
                Columbian irrigation in North America.
              </div>
              <div className="ref-item">
                <strong>Chaco Canyon</strong> c. 850 to 1150 CE. Pueblo Bonito, 12 great houses,
                road network.
              </div>
              <div className="ref-item">
                <strong>Mesa Verde</strong> Pueblo III c. 1150 to 1300 CE. Cliff Palace, Spruce Tree
                House. Abandoned 1300 CE.
              </div>
              <div className="ref-item">
                <strong>Mandan, Hidatsa, Arikara</strong> upper Missouri earthlodge villages,
                pre-1700 settled farmers.
              </div>
              <div className="ref-item">
                <strong>Chumash</strong> California coast. Tomol plank canoes, shell bead money.
              </div>
              <div className="ref-item">
                <strong>Thule</strong> expansion c. 1000 CE. Ancestors of modern Inuit.
              </div>
              <div className="ref-item">
                <strong>L'Anse aux Meadows</strong> c. 1000 CE. Only confirmed Norse site in North
                America.
              </div>
            </div>
          </div>
        </>,

        <>
          <h2>Key Concepts</h2>
          <ul className="lrn-list">
            <li>
              <strong>Complex society:</strong> a society that supports full time specialists not
              engaged in food production.
            </li>
            <li>
              <strong>Chiefdom:</strong> a society with hereditary rank and centralized leadership
              but without true bureaucracy or law.
            </li>
            <li>
              <strong>State:</strong> a society with centralized government, formal law, taxation,
              and specialized officials.
            </li>
            <li>
              <strong>City state:</strong> a small independent state centered on a single city and
              its hinterland.
            </li>
            <li>
              <strong>Primary state:</strong> a state that emerged independently, without a nearby
              earlier state to copy.
            </li>
            <li>
              <strong>Secondary state:</strong> a state that formed in response to contact with an
              existing primary state.
            </li>
            <li>
              <strong>Calendar Round:</strong> 52 year Mesoamerican cycle combining the 260 day
              ritual count with the 365 day solar year.
            </li>
            <li>
              <strong>Long Count:</strong> Maya cumulative day count from a zero date of August 11,
              3114 BCE. Rolled into the 14th baktun on December 21, 2012.
            </li>
            <li>
              <strong>Altépetl:</strong> Aztec city state, the basic political unit; the empire was
              a network of them.
            </li>
            <li>
              <strong>Calpulli:</strong> Aztec kin based neighborhood unit holding communal land and
              running local schools.
            </li>
            <li>
              <strong>Pochteca:</strong> Aztec long distance merchant guild, with its own courts,
              deity, and intelligence role.
            </li>
            <li>
              <strong>Pipiltin:</strong> Aztec hereditary nobility.
            </li>
            <li>
              <strong>Maceualli:</strong> Aztec free commoners.
            </li>
            <li>
              <strong>Mayeque:</strong> Aztec people tied to noble estates, closer to serfs than
              slaves.
            </li>
            <li>
              <strong>Calmecac:</strong> Aztec school for noble sons (priests, scribes, rulers).
            </li>
            <li>
              <strong>Telpochcalli:</strong> Aztec school for commoner sons (warriors).
            </li>
            <li>
              <strong>Ayllu:</strong> Andean kin group claiming common descent, holding land
              collectively.
            </li>
            <li>
              <strong>Kuraka:</strong> hereditary Andean noble ruling an ayllu or cluster of ayllus.
            </li>
            <li>
              <strong>Mit'a:</strong> Inca labor tax owed by each ayllu in worker time.
            </li>
            <li>
              <strong>Quipu:</strong> Andean knotted cord recording device. Numbers encoded by knot
              type and position.
            </li>
            <li>
              <strong>Quipucamayoq:</strong> trained Inca specialist who read and wrote quipus.
            </li>
            <li>
              <strong>Panaca:</strong> Inca royal lineage; ten major panacas organized Cuzco.
            </li>
            <li>
              <strong>Tawantinsuyu:</strong> "land of the four suyus," the Inca name for their
              empire.
            </li>
            <li>
              <strong>Ciudadela:</strong> walled royal compound at Chimú Chan Chan; built by a king
              as palace, sealed as mortuary temple at death.
            </li>
            <li>
              <strong>Terra preta:</strong> Amazonian dark earth. Anthropogenic fertile soil from
              charcoal, bone, and organics.
            </li>
            <li>
              <strong>Circumscription theory:</strong> the idea that states form where geography
              stops people from fleeing conflict.
            </li>
            <li>
              <strong>Stacking model of collapse:</strong> reading collapses as climate stress plus
              ecological degradation plus legitimacy crisis, not single cause events.
            </li>
          </ul>
        </>,

        <>
          <h2>Chronology</h2>
          <ul className="lrn-list">
            <li>
              c. 3000 to 1800 BCE: Caral and Aspero. Preceramic monumental architecture in Peru.
            </li>
            <li>c. 1600 to 500 BCE: San José Mogote in Oaxaca.</li>
            <li>c. 1550 to 850 BCE: Paso de la Amada on the Pacific coast.</li>
            <li>c. 1400 to 900 BCE: San Lorenzo, the first Olmec capital.</li>
            <li>c. 900 to 400 BCE: La Venta, the second Olmec capital.</li>
            <li>c. 900 to 200 BCE: Chavín de Huántar in Peru.</li>
            <li>c. 500 BCE to 700 CE: Monte Albán in Oaxaca.</li>
            <li>c. 1000 BCE to 150 CE: Nakbé and El Mirador in northern Guatemala.</li>
            <li>c. 100 BCE to 550 CE: Teotihuacán in central Mexico.</li>
            <li>c. 100 BCE to 500 CE: Hopewell exchange network in the Eastern Woodlands.</li>
            <li>197 CE: Hauberg Stela, earliest legible Maya royal inscription.</li>
            <li>378 CE: Siyaj K'ak' arrives at Tikal on January 15.</li>
            <li>c. 100 to 800 CE: Moche on the north coast of Peru.</li>
            <li>562 CE: Calakmul defeats Tikal, beginning the Maya "hiatus."</li>
            <li>c. 550 CE: Teotihuacán burned, internal political revolt.</li>
            <li>c. 600 to 1000 CE: Wari and Tiwanaku.</li>
            <li>695 CE: Tikal's Jasaw Chan K'awiil defeats Calakmul.</li>
            <li>c. 760 to 910 CE: Classic Maya collapse.</li>
            <li>c. 850 to 1150 CE: Chaco Phenomenon in the Southwest.</li>
            <li>c. 900 to 1150 CE: Tula and the Toltec.</li>
            <li>c. 1050 to 1350 CE: Cahokia at its peak.</li>
            <li>c. 1000 CE: Norse at L'Anse aux Meadows. Thule expansion in the Arctic.</li>
            <li>c. 1150 to 1300 CE: Mesa Verde cliff dwellings.</li>
            <li>1276 to 1299 CE: Great Drought in the Southwest.</li>
            <li>1325: Tenochtitlán founded.</li>
            <li>1438: Pachacuti begins Inca expansion.</li>
            <li>1441: Mayapan falls.</li>
            <li>1470s: Inca conquer Chimú.</li>
            <li>1492: Columbus reaches the Caribbean.</li>
            <li>1519: Cortés lands at Veracruz.</li>
            <li>1520: Smallpox reaches Tenochtitlán.</li>
            <li>August 13, 1521: Tenochtitlán falls.</li>
            <li>November 16, 1532: Atahualpa captured at Cajamarca.</li>
            <li>July 1533: Atahualpa executed.</li>
            <li>1572: Tupac Amaru beheaded; Vilcabamba state ends.</li>
            <li>
              1697: Itzá Maya kingdom at Nojpetén falls, the last Indigenous state in Mesoamerica.
            </li>
          </ul>
        </>
      ]
    }
  }
}

export default function ComplexSocietiesOfTheAmericasAndSynthesis() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
