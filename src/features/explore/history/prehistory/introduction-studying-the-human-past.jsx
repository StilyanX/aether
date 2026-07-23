import { LearningTemplate } from '../../../../components/learning/learning-template'
import { VizFigure } from '../../../../components/viz-figure'

function useConfig() {
  const config = {
    cssPrefix: 'ish',
    documentTitle: 'Introduction: Studying the Human Past - AETHER',
    learning: {
      groupTitle: 'Introduction',
      category: 'Module 1',
      title: 'Introduction: Studying the Human Past',
      subtitle: 'How archaeologists read the human story from objects, layers, and bones.',
      sections: [
        <>
          <h2>What Is Archaeology?</h2>
          <p>
            Most of human life left no text. Objects, layers of soil, animal bones, and buried walls
            are what remain. Archaeology is the discipline that reads those remains.
          </p>

          <p>
            In March 2017, workers in eastern Cairo struck something hard beneath the mud of a
            construction site in Heliopolis. Excavators uncovered a colossal statue of an Egyptian
            pharaoh. Hieroglyphic inscriptions later identified it as Psamtik I, not the originally
            suspected Ramses II. A city had been building on top of this king for thousands of years
            without knowing he was there.
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Colossus of Psamtik I">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Statue_of_Egyptian_King_Psamtik_I_excavation_1.jpg"
                alt="A colossal quartzite statue of pharaoh Psamtik I being lifted from muddy groundwater"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The colossus of pharaoh Psamtik I, lifted from groundwater at Heliopolis, Cairo, in 2017. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Statue_of_Egyptian_King_Psamtik_I_excavation_1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · Public domain.'}
              </figcaption>
            </VizFigure>
          </figure>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You find a pit full of broken pottery and animal bones beneath a field. No writing
              exists for this culture. What can you learn, and what can you never learn, from
              physical remains alone?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You can learn what animals people ate, how they made their pots, and roughly when
                they lived. You cannot learn their beliefs, personal names, or the reasons behind
                their choices.
              </p>
              <p>
                This limit defines why archaeology must work alongside other disciplines. The
                physical record is rich but silent on meaning.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Archaeology</span>
            <div className="lrn-definition-desc">
              <p>
                The study of the human past from material remains. In North America, archaeology is
                one of four sub-fields of anthropology. The other three are cultural anthropology
                (study of living societies), biological anthropology (human evolution and
                skeletons), and linguistic anthropology (world languages and their relationships).
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Archaeology</span>
              <p>
                Studies all humans across all time. No writing required. Covers 2.5 million years.
                Reaches ordinary people, children, the enslaved, non-literate societies.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Paleontology</span>
              <p>
                Studies pre-human life, including dinosaurs. Archaeology studies humans only.
                Confusing the two is a common mistake: archaeologists do not dig up dinosaurs.
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">When to use archaeology</span>
            <p>
              Reach for archaeology whenever written records do not exist, are incomplete, or cover
              only a narrow slice of society: the powerful, the literate, the politically dominant.
            </p>
          </div>

          <p>
            The first stone tools appeared about 2.5 million years ago. The first writing appeared
            about 5,500 years ago in Southwest Asia. That leaves roughly 2.49 million years of human
            life that only archaeology can reach.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Material Culture</span>
            <div className="lrn-definition-desc">
              <p>
                All physical objects made, used, or changed by humans. Material culture is one of
                the hallmarks of being human. No other species builds tools in a systematic,
                repeating way across generations. A single object is called an artifact: any thing
                made, shaped, or used by people.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Context</span>
            <div className="lrn-definition-desc">
              <p>
                An object's exact position when found: which layer of soil it sat in, what other
                objects lay next to it, and how it related to the walls or features around it.
                Context carries the information. An object torn from its context loses most of what
                it can tell us. This idea drives nearly everything later on this page.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Site</span>
            <div className="lrn-definition-desc">
              <p>
                Any place where people left material remains: a buried village, a cave, a burial
                mound, even a single scatter of tools. Archaeologists study sites to read what
                happened on that spot.
              </p>
            </div>
          </div>

          <p>
            The terracotta army of Qin Shi Huangdi, discovered by accident near Xian, China in 1974,
            shows what material culture can reveal. Pit 1 alone contains 3,210 armored infantrymen.
            Pit 2 holds 1,400 cavalry and chariots. No written description captured the precise
            formation of each unit. The objects themselves do.
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Terracotta Army, Pit 1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/49/Terracotta_Army%2C_View_of_Pit_1.jpg"
                alt="Rows of life-size terracotta infantry standing in earthen trenches in Pit 1"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {'Ranked infantry of the Terracotta Army in Pit 1, near Xi’an, China. '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Terracotta_Army,_View_of_Pit_1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY 3.0, photo by Jmhullot.'}
              </figcaption>
            </VizFigure>
          </figure>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Material objects survive when organic material does not. Stone, fired clay, and metal
              resist decay far better than wood, cloth, or skin.
            </p>
            <p>
              This means the archaeological record is heavily biased toward hard, durable things. It
              does not reflect what people valued most. It reflects what time spares.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does archaeology belong under anthropology rather than history? Form your answer
              before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                History focuses on literate, politically powerful societies with written records.
                Anthropology covers all humans: literate and non-literate, rich and poor, every
                gender and region.
              </p>
              <p>
                Archaeology studies the full span of human life everywhere on Earth. Its scope
                matches anthropology, not history.
              </p>
            </details>
          </div>

          <h3>What Archaeology Can and Cannot Study</h3>

          <p>
            Archaeology is not limited to ancient ruins. The Arizona Garbage Project, run by William
            Rathje and Cullen Murphy, worked through household trash cans in Tucson. What people
            threw out differed sharply from what they reported in surveys. The same method can read
            any period, including the present.
          </p>

          <p>
            Several specialized branches extend the discipline further. Cognitive archaeology
            studies religious belief and the rise of symbolic thinking. Gender archaeology recovers
            the lives and roles of women that written records ignored. Indigenous archaeology works
            in partnership with descendant communities to study their own heritage.
          </p>
        </>,

        <>
          <h2>Prehistory and History</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Writing was invented around 5,500 years ago in Southwest Asia. Does that mean
              prehistory ends at the same moment everywhere on Earth? Think about Australia before
              European contact.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. The boundary between prehistory and history is different in each place. It
                depends on when writing, or written contact with literate outsiders, arrived.
              </p>
              <p>
                In western Europe, history begins much later than in Southwest Asia. In Australia,
                prehistory continued until European colonization. There is no single global date.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Prehistory</span>
              <p>
                The human story before written records. Everywhere before writing was invented,
                roughly 5,500 years ago in Southwest Asia. The date shifts by region and continent.
                Studied primarily through archaeology and physical remains.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">History</span>
              <p>
                The human story from written records. Applies first in Southwest Asia around 5,500
                years ago. Begins later in western Europe, later still in many parts of the Americas
                and Pacific.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Writing records the literate and the powerful: those who could write and those
              important enough to be written about. Archaeology reaches the farmer, the child, the
              enslaved person, and the 99% of human life that happened before the first inscription.
              The two approaches complement each other; neither replaces the other.
            </p>
          </div>

          <p>
            Archaeology covers the full 6 million years of the human lineage. Humans share a common
            ancestor with other apes. Our lineage branched off about 6 million years ago. We call
            all members of that branch hominins. The first hominins appear in Africa about 6 million
            years ago. Homo sapiens appears around 200,000 years ago. Writing appears only in the
            last 0.09% of that span.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Contemporary parallel</span>
            <p>
              Some communities today still live without writing systems. Uncontacted Amazonian
              groups and the Sentinelese of the Andaman Islands remain "prehistoric" in the strict
              sense. Their oral traditions carry knowledge that no document records. Archaeology is
              the only discipline that can give those traditions physical depth.
            </p>
          </div>

          <h3>Why World Archaeology Matters</h3>

          <p>
            World archaeology also challenges the old assumption that complexity radiated outward
            from a single cradle. The terracotta army of China, Angkor Wat in Cambodia, Stonehenge
            in England, and the cities of the Indus Valley each emerged on their own. Civilization
            had no single point of origin.
          </p>
        </>,

        <>
          <h2>A Brief History of Archaeology</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before systematic digging existed, how did people in Renaissance Europe try to
              understand the ancient world? What tools did they have?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They read classical texts (Aristotle, Roman writers), looked at surviving monuments,
                compared objects they found on the surface, and drew pictures of ruins.
              </p>
              <p>
                They had no reliable way to date anything without written records. Chronology was
                the central unsolved problem for centuries.
              </p>
            </details>
          </div>

          <h3>Renaissance Beginnings</h3>

          <p>
            Archaeology grew from the Renaissance (the European revival of classical Greek and Roman
            learning, roughly 1400 to 1600). European scholars began re-reading classical Greek and
            Roman texts and visiting ancient monuments. The Colosseum, ruined temples, and carved
            marble gave a visible past that the medieval church had largely ignored.
          </p>

          <p>
            The voyages of discovery brought a new problem: indigenous peoples living in ways that
            seemed to resemble the ancient past. Christopher Columbus crossed the central Atlantic
            in 1492. Vasco da Gama rounded the Cape of Good Hope in 1498. Johannes Gutenberg's
            printing press (mid-fifteenth century) spread knowledge of both classical texts and
            these new comparisons.
          </p>

          <p>
            Artist John White accompanied Sir Walter Raleigh to Roanoke, Virginia, in 1585 and
            recorded indigenous people. Later scholars used his watercolors to imagine how pre-Roman
            Britons must have looked.
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="A Pict">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/The_True_Picture_of_One_Pict.jpg"
                alt="Engraving of a tattooed Pictish warrior holding a spear and a severed head"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'A Pict, engraved by Theodor de Bry after John White, imagining an ancient Briton. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:The_True_Picture_of_One_Pict.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · Public domain.'}
              </figcaption>
            </VizFigure>
          </figure>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Antiquarianism vs. Archaeology</span>
            <p>
              Early collectors like John Aubrey gathered objects for their own sake. Modern
              archaeologists record everything in context. The shift from collecting to systematic
              recording is the key break that separates antiquarianism from archaeology.
            </p>
          </div>

          <h3>The First Excavations</h3>

          <p>
            The seventeenth century brought the first attempts at systematic recording. John Aubrey
            produced the first serious descriptions and plans of Stonehenge and Avebury in England.
            In 1685, the Cocherel tomb in northern France was excavated: one of the first planned
            digs of a prehistoric monument, uncovering skeletons in their original positions.
          </p>

          <p>
            Thomas Jefferson excavated a Native American burial mound in Virginia in 1784. He dug a
            trench through it and recorded the layers of bones at different depths. This is
            considered one of the earliest examples of layer-based (stratigraphic) thinking in North
            American archaeology.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Jefferson dug in layers and recorded what he found at each depth. Why was this
              approach more useful than simply collecting objects from the surface?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Recording depth gives you sequence. Objects found deeper are generally older than
                those found near the surface. By tracking which bones sat above or below others,
                Jefferson could read the mound as a series of separate burials over time. Context,
                not just the object, carries the information.
              </p>
            </details>
          </div>

          <h3>The Nineteenth Century: Chronology and Evolution</h3>

          <p>
            The nineteenth century cracked two of archaeology's biggest problems: time and human
            origins. In the 1830s, researchers in Europe found chipped stone tools in river gravels
            alongside the bones of extinct mammoth and woolly rhinoceros. Humans had lived at the
            same time as animals that no longer exist. The human story was far older than the Bible
            allowed.
          </p>

          <p>
            In 1856, a worker found a premodern skeleton by chance in Feldhoffer Cave, Neander
            Valley, Germany. Scholars later named the find Neanderthal. It was the first recognized
            fossil hominin (ancient bone preserved in the ground long enough to harden).
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="Neanderthal 1 skullcap">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Neanderthaler_Fund.png"
                alt="Drawing of the Neanderthal 1 skullcap found in the Neander Valley in 1856"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {'The Neanderthal 1 skullcap, found in the Neander Valley, Germany, in 1856. '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Neanderthaler_Fund.png"
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
            Charles Darwin (1809-1882) had voyaged on the Beagle starting in 1831. He published On
            the Origin of Species in 1859 and Descent of Man in 1871. Evolution by natural selection
            gave archaeologists a framework: humans had changed over time, and the fossil record
            should show that change.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Before Darwin, the dominant view held that species (including humans) did not change.
              A Neanderthal skull was a curiosity with no clear meaning.
            </p>
            <p>
              After Darwin, researchers expected to find intermediate forms and gradual change in
              the fossil record. The Neanderthal find became a data point. Evolution made the
              Neanderthal interpretable: an earlier stage of an evolving lineage, not a freak.
            </p>
            <p>
              Darwin also implied that behavior, not just anatomy, could change. This gave purpose
              to studying stone tools as traces of developing cognitive capacity.
            </p>
          </div>

          <p>
            Gregor Mendel ran plant-breeding experiments in the 1860s that became the foundation of
            genetics. His work connected to archaeology in the twentieth century, when ancient DNA
            extraction became possible.
          </p>

          <div className="lrn-timeline">
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">c. 6 million years ago</span>
              <p className="lrn-timeline-content">
                Earliest hominins appear in Africa. The human lineage splits from other apes.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">c. 2.5 million years ago</span>
              <p className="lrn-timeline-content">
                First stone tools made. This is where archaeology begins: material culture.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">c. 200,000 years ago</span>
              <p className="lrn-timeline-content">Homo sapiens living on Earth.</p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">c. 11,600 years ago</span>
              <p className="lrn-timeline-content">
                End of the last Ice Age. Beginning of the Holocene (our current geological epoch).
                Agriculture and settled villages follow.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">c. 5,500 years ago</span>
              <p className="lrn-timeline-content">
                Writing invented in Southwest Asia. Prehistory ends there. History begins.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1784</span>
              <p className="lrn-timeline-content">
                Thomas Jefferson excavates Native American burial mounds in Virginia. Pioneering
                stratigraphic recording in North America.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1830s</span>
              <p className="lrn-timeline-content">
                Stone tools found with extinct mammoth bones in European river gravels. The human
                story is pushed far back beyond Biblical timelines.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1856</span>
              <p className="lrn-timeline-content">
                Neanderthal skeleton found at Feldhoffer Cave. First recognized fossil hominin.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1859</span>
              <p className="lrn-timeline-content">
                Darwin publishes On the Origin of Species. Evolution by natural selection becomes
                the framework for human prehistory.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">Late 1940s</span>
              <p className="lrn-timeline-content">
                Willard Libby (1908-1980) develops radiocarbon dating. For the first time,
                archaeologists can assign real calendar years to organic materials.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1960s</span>
              <p className="lrn-timeline-content">
                Lewis Binford (1931-2011) and David Clarke (1937-1976) launch processual
                archaeology: the New Archaeology.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1980s</span>
              <p className="lrn-timeline-content">
                Postprocessual archaeology develops as a reaction. Emphasizes symbolism, agency,
                feminist perspectives, and the idea that knowledge is never fully objective.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1990</span>
              <p className="lrn-timeline-content">
                NAGPRA passes in the USA. Requires return of human remains and cultural items to
                descendant communities.
              </p>
            </div>
          </div>

          <p>
            The Three Age System (Stone Age, Bronze Age, Iron Age) was built in the early nineteenth
            century by Danish curator Christian Thomsen and adopted across Europe by mid-century. By
            sorting collections according to whether their cutting edges were stone, bronze, or
            iron, Thomsen produced a workable sequence centuries before any absolute date existed.
            It is the textbook example of relative chronology: ordering things in time without
            knowing their calendar age.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Relative chronology</span>
              <p>
                Establishes sequence: this layer is older than that one; this artifact type comes
                before that one. No calendar year. Used before absolute dating was possible.
                Stratigraphy and artifact typology are the main tools.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Absolute dating</span>
              <p>
                Assigns a specific year or range of years to a deposit or object. Requires a
                measurable physical or chemical process. Radiocarbon dating is the most widely used
                method for the last 40,000 years.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Dating Methods</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A tree falls in 2000 BCE and its wood is buried. You find it today. What physical
              property of that wood lets you estimate when the tree died, without any written
              records?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Two properties work. First, the wood contains carbon-14, a radioactive isotope that
                decays at a known rate after the tree dies. Measuring how much remains gives you an
                age estimate.
              </p>
              <p>
                Second, if the wood has visible annual growth rings, counting them backward from a
                known sequence tells you the exact calendar year the tree was cut. Both methods work
                independently. Used together, they cross-check each other.
              </p>
            </details>
          </div>

          <h3>Stratigraphy: The Foundation</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Stratigraphy</span>
            <div className="lrn-definition-desc">
              <p>
                The study of sedimentary layers (strata) and their sequence. The Principle of
                Superposition states: if a sequence of sediments is undisturbed, the oldest layers
                sit at the bottom and the youngest at the top. The Principle of Association holds
                that objects found in the same layer date to roughly the same period.
              </p>
            </div>
          </div>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="Olduvai Gorge strata">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Olduvai_Gorge.jpg"
                alt="Exposed horizontal beds of sediment cut through by Olduvai Gorge in Tanzania"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The layered beds of Olduvai Gorge, Tanzania, where older deposits sit beneath younger ones. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Olduvai_Gorge.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 3.0.'}
              </figcaption>
            </VizFigure>
          </figure>

          <div className="lrn-callout">
            <span className="lrn-callout-label">When to use stratigraphy</span>
            <p>
              Use stratigraphic reasoning every time you excavate. It gives the relative sequence of
              all deposits before any laboratory dating is done.
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE: Stratigraphic Sequencing</span>
              <p>
                You cut a trench through a tell (occupation mound). From bottom to top you find: ash
                layer, pottery-rich layer, burnt timber layer, plaster floor.
              </p>
              <ol className="lrn-list">
                <li>Ash layer is oldest (deepest). It predates everything above it.</li>
                <li>Pottery layer sits on ash, so pottery postdates the fire that left the ash.</li>
                <li>
                  Burnt timber layer sits on pottery. Another fire event occurred after pottery use.
                </li>
                <li>Plaster floor is youngest (shallowest). It seals all earlier deposits.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                A new trench shows: cobble floor, then animal bone scatter, then mudbrick collapse,
                then coin layer.
              </p>
              <ol className="lrn-list">
                <li>Cobble floor is oldest. It forms the base.</li>
                <li>Animal bones postdate the floor. What activities does this suggest?</li>
                <li>
                  Mudbrick collapse sits above bones. Order the remaining two layers yourself.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                You find five layers: painted plaster, charcoal lens, stone foundation, shell
                midden, sand layer. Order them from oldest to youngest using only the Principle of
                Superposition. State which layer seals which.
              </p>
            </div>
          </div>

          <h3>Radiocarbon Dating</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Radiocarbon Dating (Carbon-14 / C14)</span>
            <div className="lrn-definition-desc">
              <p>
                Dates organic materials (wood, bone, charcoal, seeds) using the decay of the
                unstable isotope carbon-14. Isotopes are forms of the same element that have the
                same number of protons but different numbers of neutrons, so they differ in mass.
                Some isotopes are unstable and break down, or decay, over time. Living organisms
                absorb C14 from the atmosphere. When they die, absorption stops and C14 decays at a
                fixed rate. The half-life of C14 is 5,730 years.
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">When to use radiocarbon</span>
            <p>
              Use radiocarbon on organic samples (wood, bone, charcoal, seeds) up to roughly 40,000
              years old. Beyond that range, so little C14 remains that measurement error swamps the
              result.
            </p>
          </div>

          <p>
            Willard Libby (1908-1980) developed the method in the late 1940s. Modern Accelerator
            Mass Spectrometry (AMS) now measures the surviving C14 in samples as small as a single
            seed. Raw radiocarbon ages still have to be calibrated against tree rings to convert
            them into true calendar years (the next section explains why).
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Radioactive decay is statistical. Any single carbon-14 atom decays at random. But a
              population of millions decays at a predictable rate.
            </p>
            <p>
              Half-life is the time for half the population to decay, regardless of the starting
              amount. This independence from sample size is what makes C14 a usable clock. You do
              not need to know how much carbon the organism started with. You only need to measure
              how much remains.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Real-world applications</span>
            <p>
              Radiocarbon dating is not only for archaeology. Wine merchants use it to detect fake
              vintages. Art historians used it to expose forged Vermeer canvases. Forensic
              scientists use it to estimate a body's age at death. The same decay clock works in
              every context.
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE: Radiocarbon Reasoning</span>
              <p>
                A piece of charcoal from a hearth contains half the C14 of a modern sample. The
                half-life of C14 is 5,730 years.
              </p>
              <ol className="lrn-list">
                <li>One half-life has passed since the wood burned.</li>
                <li>One half-life equals 5,730 years.</li>
                <li>Raw radiocarbon date: approximately 5,730 years before present.</li>
                <li>Calibrate against dendrochronology to get a true calendar date.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                A bone contains one quarter of the C14 of a modern sample. The half-life of C14 is
                5,730 years.
              </p>
              <ol className="lrn-list">
                <li>One quarter equals two half-lives that have passed.</li>
                <li>Two half-lives equal how many years? Work it out.</li>
                <li>State the raw radiocarbon date.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                A seed contains one eighth of the C14 of a modern sample. How many half-lives have
                passed? What is the raw radiocarbon age? What must happen before you report a
                calendar date?
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does radiocarbon dating require calibration before you can report a calendar year?
              What would happen if you skipped calibration?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The amount of C14 in the atmosphere has not been perfectly constant over time.
                Cosmic ray activity and ocean circulation have caused fluctuations.
              </p>
              <p>
                A raw radiocarbon date assumes constant atmospheric C14, which is wrong. Calibration
                compares raw dates against dendrochronology (where we know the exact calendar year
                of each ring) and corrects for these fluctuations. A calibration curve is a graph
                that converts raw dates into calendar years. Skipping calibration produces dates
                that are off by decades to centuries.
              </p>
            </details>
          </div>

          <h3>Potassium-Argon and Argon-Argon Dating</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Potassium-Argon Dating (K-Ar)</span>
            <div className="lrn-definition-desc">
              <p>
                Measures the decay of radioactive potassium-40 into argon-40. The half-life is 1.25
                billion years. Dates volcanic rocks, lavas, and tuffs (volcanic ash deposits).
                Covers the Lower and Middle Paleolithic: the deep human past beyond radiocarbon's
                range.
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">When to use K-Ar</span>
            <p>
              Use potassium-argon on volcanic materials associated with early hominin fossils,
              especially in East Africa. At Olduvai Gorge in Tanzania, K-Ar dated the volcanic ash
              just below the oldest stone tools to about 1.8 million years ago. It covers the entire
              Lower and Middle Paleolithic, far beyond radiocarbon's reach.
            </p>
          </div>

          <p>
            Argon-argon dating (39Ar/40Ar) is a more accurate variant of K-Ar that requires smaller
            samples. It has largely replaced traditional K-Ar dating.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Radiocarbon (C14)</span>
              <p>
                Dates organic materials. Effective range: roughly 40,000 years. Half-life 5,730
                years. Requires calibration.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Potassium-Argon (K-Ar)</span>
              <p>
                Dates volcanic rocks. Effective range: beyond 40,000 years, into millions of years.
                Half-life 1.25 billion years. Covers early hominin sites.
              </p>
            </div>
          </div>

          <h3>Uranium-Series, ESR, and Luminescence Dating</h3>

          <p>
            <strong>Uranium-series (U-series)</strong> dating uses the radioactive decay of uranium
            to thorium and protactinium (two elements that uranium slowly turns into as it decays).
            It dates cave flowstones (calcite deposits formed from groundwater) and stalactites
            (mineral spikes that hang from cave ceilings). At Sima de los Huesos in Spain, U-series
            dated the flowstone over the human fossils to about 430,000 years ago.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              U-series dating at Sima de los Huesos measured the flowstone, not the fossils. Why
              does dating the flowstone give you a date for the fossils inside the cave?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Flowstone forms when calcium-rich water drips over a surface and deposits calcite. A
                flowstone layer that formed over the fossils seals them. It could not have formed
                before the fossils were there.
              </p>
              <p>
                So the flowstone date gives a minimum age: the fossils are at least as old as the
                flowstone. This is a common logic in cave archaeology: date what seals or covers the
                material you care about.
              </p>
            </details>
          </div>

          <p>
            <strong>Electron Spin Resonance (ESR)</strong> dating measures trapped electrons in
            dental enamel. Electrons build up at a rate proportional to the radiation dose over
            time. Use ESR when the sample is older than 40,000 years and K-Ar is not applicable. At
            the Qafzeh and Skhul caves in Israel, ESR dating of animal teeth placed early modern
            humans there about 100,000 years ago.
          </p>

          <p>
            <strong>Luminescence dating</strong> covers two related methods, both built on the same
            idea: minerals like quartz and feldspar absorb a steady trickle of natural radiation and
            store it. Heat or sunlight resets the clock to zero. Once the sample is buried again,
            the count starts over. Measure the stored energy and you measure the time since the
            reset.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Thermoluminescence (TL)</span>
              <p>
                Dates heated materials: pottery, hearths, burned flint. Measures energy stored since
                last heating.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Optically Stimulated Luminescence (OSL)</span>
              <p>
                Dates buried sediments. Measures energy stored since sediment was last exposed to
                sunlight.
              </p>
            </div>
          </div>

          <p>
            At the Jinmium rock shelter in northern Australia, early TL dates on the sediment around
            stone tools suggested people lived there more than 100,000 years ago. A later OSL study
            of single sand grains corrected this to less than 10,000 years. The case shows both the
            power and the care these methods demand.
          </p>

          <h3>Dendrochronology (Tree-Ring Dating)</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Dendrochronology</span>
            <div className="lrn-definition-desc">
              <p>
                Counts annual growth rings in trees. Each year, a tree adds one ring: wide in good
                years, narrow in poor ones. Living trees and preserved dead wood share overlapping
                ring sequences. Researchers build composite chronologies extending back thousands of
                years. Dendrochronology is one of the key calibration tools for radiocarbon dating.
              </p>
            </div>
          </div>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="Tree rings">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Annual-rings-2119287.jpg"
                alt="Polished cross-section of a tree trunk showing wide and narrow annual growth rings"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'A polished trunk cross-section: each ring is one year, wide in good years, narrow in poor ones. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Annual-rings-2119287.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 4.0, photo by LesMusix.'}
              </figcaption>
            </VizFigure>
          </figure>

          <div className="lrn-callout">
            <span className="lrn-callout-label">When to use dendrochronology</span>
            <p>
              Use dendrochronology on preserved timber from buildings, ships, or waterlogged sites
              where a long ring sequence survives. It gives exact calendar years, not estimates.
            </p>
          </div>

          <h3>Paleomagnetism</h3>

          <p>
            Earth's magnetic field flips north and south at irregular intervals, leaving a fixed
            record of each polarity locked into newly formed sediment and lava. Paleomagnetism reads
            that record. Matching the polarity of a deposit to the dated master sequence of
            reversals places it within that sequence. The method gives no calendar year on its own,
            but it covers hundreds of millions of years and cross-checks other dating methods on
            very old deposits. One short flip, the Olduvai subchron (about 1.9 to 1.8 million years
            ago), is named after Olduvai Gorge and helps date East African hominin deposits.
          </p>
        </>,

        <>
          <h2>Field and Laboratory Methods</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Angkor Wat in Cambodia is a twelfth-century temple surrounded by a huge walled
              enclosure. Scholars long thought the enclosure was mostly empty. A new technology flew
              over it in an airplane and revealed something completely different. What do you think
              it found?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                LiDAR (Light Detection and Ranging) revealed that the enclosure was filled with
                houses and ponds. They had become invisible under centuries of vegetation. The area
                looked empty from the ground, but the laser saw the buried surface.
              </p>
              <p>
                This changed our understanding of how large the Angkor urban complex actually was.
              </p>
            </details>
          </div>

          <h3>Remote Sensing and Survey</h3>

          <p>
            Aerial photography has located buried sites for over a century. Crop marks, soil color
            differences, and surface shadows reveal pits, walls, and ditches invisible at ground
            level. LiDAR (Light Detection and Ranging) takes this further. An airborne laser scanner
            fires pulses through forest canopy, reflects off the ground surface, and maps buried
            topography. The Angkor Wat LiDAR survey is the most famous recent example.
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="LiDAR hillshade">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e2/LiDAR_Hillshade_of_the_Carson_site.jpg"
                alt="LiDAR hillshade map showing buried mounds and earthworks otherwise hidden by vegetation"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'A LiDAR hillshade reveals earthworks hidden beneath vegetation, here the Carson Mounds, Mississippi. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:LiDAR_Hillshade_of_the_Carson_site.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 4.0, by Jmmehta.'}
              </figcaption>
            </VizFigure>
          </figure>

          <p>
            Survey (or "off-site" archaeology) systematically collects and records material on the
            ground surface across a landscape, without excavation. It maps patterns of human
            occupation. Geomagnetic prospection and resistivity survey find buried pits, hearths,
            and walls by measuring tiny changes in the soil's magnetism and how well it carries
            electricity. GIS (Geographic Information Systems) analyzes spatial relationships between
            sites, finds, and landscape features. GPS maps sites accurately in the field.
          </p>

          <h3>Excavation</h3>

          <p>
            Excavation gives direct access to buried layers. Modern technique documents every find
            in its exact position (x, y, depth) using laser scanning and 3D photo-modeling. The Must
            Farm excavation in eastern England recovered preserved timbers from collapsed
            prehistoric house roofs, giving a rare snapshot of Bronze Age domestic life.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is excavation considered "destructive"? What does this mean for how archaeologists
              must work?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Digging destroys the context. You cannot put the layers back in their original order
                after you remove them. Every excavation is a one-time event.
              </p>
              <p>
                This is why archaeologists document everything meticulously before, during, and
                after removal. The record they create is the only permanent version of what was
                found. It also explains why survey is often preferred before committing to a dig.
              </p>
            </details>
          </div>

          <h3>Reconstructing Ancient Environments</h3>

          <p>
            Palynology (pollen analysis) extracts pollen preserved in lake beds, bogs, and dryland
            sediments. Pollen from different plants has distinctive shapes. Cores from wetland
            deposits reveal changing vegetation through time, calibrated by radiocarbon.
          </p>

          <p>
            Deep-sea core analysis uses tiny single-celled sea creatures with shells called
            foraminifera (forams). Their shells record the ratio of oxygen-16 to oxygen-18 from
            seawater at the time they formed. Cold glacial water has more oxygen-18. Comparing these
            ratios in cores going back tens of millions of years maps every glacial and interglacial
            stage.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Beyond the site</span>
            <p>
              A site by itself tells you what happened on that spot. Surrounding sediment cores,
              tooth chemistry, and pollen tell you the world the site sat inside. The deeper you
              push beyond the site, the more you limit what the people there could have done.
            </p>
          </div>

          <p>
            Carbon isotope analysis (measuring the ratio of carbon-12 to carbon-13 in ancient soils)
            tells researchers whether C3 plants (trees, shrubs, mountain grasses) or C4 plants
            (heat-loving tropical grasses) dominated. This reflects both diet and climate.
          </p>

          <p>
            Strontium and oxygen isotope ratios in tooth enamel are fixed during childhood and never
            change again. The ratios reflect the local rock and water where the person grew up.
            Compare them with the burial soil and any mismatch is direct evidence that the person
            moved. The "Amesbury Archer," buried near Stonehenge, carried the isotope signature of
            the European continent, not Britain. He had walked or sailed in as an adult.
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="The Amesbury Archer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Salisbury_Museum%2C_%27The_Amesbury_Archer%27_skeleton_from_the_Late_Neolithic_period_-_geograph.org.uk_-_7047710.jpg"
                alt="Crouched skeleton of the Amesbury Archer displayed with grave goods around the body"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The Amesbury Archer’s grave, whose tooth chemistry shows he grew up in continental Europe. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Salisbury_Museum,_%27The_Amesbury_Archer%27_skeleton_from_the_Late_Neolithic_period_-_geograph.org.uk_-_7047710.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY-SA 2.0, photo by Michael Garlick.'}
              </figcaption>
            </VizFigure>
          </figure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              If a person's tooth chemistry differs from their burial soil chemistry, what does that
              prove? What does it NOT prove?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                It proves the person grew up in a different geological area than where they were
                buried. Tooth enamel forms in childhood and does not change after that. The local
                geology stamps its chemical signature into developing teeth.
              </p>
              <p>
                It does NOT prove why they moved, how far they traveled, how many times they moved,
                or whether the move was voluntary. Isotope analysis tells you that mobility
                happened. It cannot tell you the story behind it.
              </p>
            </details>
          </div>

          <h3>Genetics in Archaeology</h3>

          <p>
            Ancient DNA (aDNA) extracts preserved genetic material from bones or seeds. It documents
            genetic relationships between ancient populations. Crucially, it has revealed that Homo
            sapiens interbred with Neanderthals and Denisovans. Decay damages aDNA. The older the
            sample and the warmer the burial environment, the less DNA survives.
          </p>

          <h3>Experimental Archaeology and Ethnoarchaeology</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Experimental archaeology</span>
              <p>
                Replicates past objects or tasks to compare with archaeological remains. Examples:
                flintknapping to match ancient tool edges, testing how Stonehenge stones could be
                transported, building replica boats to test ancient navigation routes.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ethnoarchaeology</span>
              <p>
                Living among traditional societies to observe how their activities would appear in
                the archaeological record. Lewis Binford studied the Nunamiut in Alaska to
                understand how hunter-gatherers use and discard animal bones.
              </p>
            </div>
          </div>

          <p>
            The Hokule'a experiment in 1976 used a replica Polynesian double-hulled outrigger canoe
            to sail from Hawai'i to Tahiti. Traditional navigation methods (stars, waves, birds)
            proved sufficient. This demonstrated that long Pacific voyages were planned journeys,
            not accidental drifts.
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="body" title="Hōkūleʻa">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Hokule%27aSailing2009.jpg"
                alt="The double-hulled voyaging canoe Hokulea sailing under full sail on open ocean"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The Hōkūleʻa, a replica Polynesian double-hulled canoe, sailing under traditional navigation. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Hokule%27aSailing2009.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY 2.0, photo by HongKongHuey.'}
              </figcaption>
            </VizFigure>
          </figure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Michael Schiffer distinguished C-transforms from N-transforms. Why does this
              distinction matter for interpreting an archaeological site?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                C-transforms are cultural: human choices about how objects were used, kept, and
                thrown away. N-transforms are natural: decay, waterlogging, geological disturbance.
                Both change what the archaeologist finds.
              </p>
              <p>
                If you see a pit full of smashed pots, you need to know whether humans smashed them
                in a ritual (C-transform) or a tree root crushed them over centuries (N-transform).
                Misreading the process produces a false picture of the past. Formation process
                analysis is the formal study of these inputs.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Archaeological Theory</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two archaeologists find the same set of stone tools. One says environment changed and
              people adapted their tools. The other says one person invented this tool type and it
              spread through social imitation. Which claim is easier to test with physical evidence,
              and why?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The environmental claim is easier to test. You can measure past climate through
                pollen, oxygen isotopes, and deep-sea cores, then compare the timing of tool changes
                to environmental shifts.
              </p>
              <p>
                Individual invention is harder. The archaeological record rarely preserves the
                single event of one person creating something new. This is partly why processual
                archaeology (focused on environment and process) dominated before theories of
                individual agency emerged.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Processual Archaeology (New Archaeology)</span>
              <p>
                Developed in the 1960s by Lewis Binford (1931-2011) and David Clarke (1937-1976).
                Focus: why and how cultures change, not just what they looked like. Method:
                scientific hypothesis-testing, quantitative analysis, environment as the main
                driver. Goal: objective, generalizable laws of cultural process.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Postprocessual Archaeology</span>
              <p>
                Developed in the 1980s as a reaction. Questions whether truly objective knowledge is
                possible. Emphasizes symbolism, individual agency, feminist perspectives, and the
                idea that multiple interpretations of the same evidence are valid (multivocality:
                many valid readings).
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Processual archaeology borrowed the rule of the physical sciences: state a hypothesis,
              test it against the data. The catch is that you cannot replay the past. Postprocessual
              critics added a second problem. Every researcher brings assumptions shaped by their
              own culture, gender, and era. So the "objective" archaeologist is a fiction. Both
              objections land. The tension between them drives most current theoretical debate.
            </p>
            <p>
              Stonehenge is the standing case. The same physical evidence has been read as an
              astronomical observatory, a healing site, and an ancestral memorial. None of those
              readings is provably wrong. That is postprocessual multivocality in practice: many
              valid interpretations of the same record.
            </p>
          </div>

          <h3>Cultural Ecology and Agency Theory</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Cultural Ecology</span>
            <div className="lrn-definition-desc">
              <p>
                The idea that a main cause of change in human society is the way societies respond
                to the challenges and opportunities of their environments. Developed by Julian
                Steward (1902-1972) and Leslie White (1900-1975) in North American archaeology
                during the 1940s-1950s. Gordon Willey (1913-2002) applied it to settlement patterns
                in the Virú Valley, Peru, and Barton Ramie, Belize.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Agency Theory</span>
            <div className="lrn-definition-desc">
              <p>
                Considers individuals in the past as knowledgeable actors capable of making choices
                and changing their society, within social constraints. Reacts against cultural
                ecology's tendency to treat people as passive products of their environment.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cultural ecology</span>
              <p>
                Environment and adaptation drive change. Societies respond to climate, resources,
                and geographical constraints. Tested through settlement pattern studies and
                paleoecological reconstruction.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Agency theory</span>
              <p>
                Individuals drive change within social structures. A chieftain's personal decisions
                matter. Innovation can come from one person's invention, not just environmental
                pressure.
              </p>
            </div>
          </div>

          <h3>Models for Change: Innovation, Diffusion, Emulation, Migration</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Diffusion</span>
              <p>
                An innovation spreads outward from one region through contact, trade, or imitation.
                Explains why similar artifact types appear across a wide area at roughly the same
                time. Overused in early twentieth-century archaeology.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Independent invention</span>
              <p>
                The same development emerges separately in different places, with no contact.
                Explains why writing, agriculture, and urban planning appeared in multiple regions
                with no proven link.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Innovation</span>
            <div className="lrn-definition-desc">
              <p>
                When a new artifact or technique is developed: pottery, bronze-casting, writing.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Emulation</span>
            <div className="lrn-definition-desc">
              <p>
                Societies adopt features from neighbors in a context of rivalry or competition. Not
                passive copying, but active borrowing to match or surpass a rival. A polity is any
                organized community with its own government, such as a city-state, kingdom, or
                chiefdom. Peer-polity interaction describes how new states form around the margins
                of existing ones.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Migration</span>
            <div className="lrn-definition-desc">
              <p>
                Movement of people from one area to another. An important mechanism of change, but
                one historically mixed up with diffusion. Ancient DNA now provides direct evidence
                for migration: if a population's genetics change sharply, people moved, not just
                ideas.
              </p>
            </div>
          </div>

          <h3>Linear and Cyclical Models of Change</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Linear model</span>
              <p>
                Human societies move in one direction: from simple to complex, from hunter-gatherer
                to farmer to state. Progress is directional and cumulative.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cyclical model</span>
              <p>
                Change repeats in patterns: seasons, lunar cycles, generational rhythms. Many early
                societies understood time this way. States can also rise and fall in recurring
                cycles rather than progressing indefinitely.
              </p>
            </div>
          </div>

          <h3>Classification of Human Societies</h3>

          <p>
            Elman Service proposed a fourfold classification of human societies by size, complexity,
            and degree of centralization.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Bands</span>
            <div className="lrn-definition-desc">
              <p>
                Small groups of 25-60 individuals related by family and marriage ties. Mobile
                hunter-gatherers. Leadership is informal and personal.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Tribes</span>
            <div className="lrn-definition-desc">
              <p>
                Generally settled farmers or pastoralist herders. Hundreds to a few thousand people.
                Identity based on descent from a common ancestor. Loosely organized with no formal
                government.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Chiefdoms</span>
            <div className="lrn-definition-desc">
              <p>
                More than 10,000 individuals. Institutionalized rank hierarchy: some lineages
                outrank others by birth, not just personal achievement. Redistribution (chiefs
                collect goods from the community and hand them back out) is the key economic
                feature.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">State Societies (Civilizations)</span>
            <div className="lrn-definition-desc">
              <p>
                Large populations with centralized, institutionalized control that overrides kinship
                ties. Rank and wealth differences are deep and permanent. States foster writing,
                specialized labor, and monumental architecture.
              </p>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE: Classifying a Society</span>
              <p>
                The Calusa of Florida (c. 500 BCE to 1700 CE) were fisher-hunter-gatherers with no
                agriculture. Population reached tens of thousands. They had a paramount chief who
                collected tribute from subject villages and redistributed goods.
              </p>
              <ol className="lrn-list">
                <li>Population: over 10,000. Rules out band and tribe.</li>
                <li>
                  Leadership: institutionalized paramount chief, inherited rank. Rules out tribe.
                </li>
                <li>Economy: tribute and redistribution, not market exchange. Matches chiefdom.</li>
                <li>Classification: chiefdom, despite being non-agricultural.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                A society has 400 people. They herd cattle. Leaders are chosen by community
                consensus, not birth. No central storage or redistribution.
              </p>
              <ol className="lrn-list">
                <li>
                  Population of 400 rules out bands (too large). Narrows to tribe or chiefdom.
                </li>
                <li>
                  Leadership by consensus, not birth rank. Which of the two does this suggest?
                </li>
                <li>State your classification and explain the deciding factor.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                A society has 50,000 people, a palace with a king who claims divine authority,
                full-time scribes, a standing army, and hereditary nobles controlling land. Classify
                it using Service's scheme. List two features that decide your answer.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Service's fourfold scheme (bands, tribes, chiefdoms, states) is widely used but
              criticized. What is one reason the scheme might oversimplify actual human societies?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Real societies do not fit neatly into four boxes. A group might have the population
                size of a chiefdom but the informal leadership of a tribe.
              </p>
              <p>
                The scheme treats each type as a stable stage on a ladder toward statehood. It
                implies that more complex is always "more developed." Many societies fluctuated
                between levels. Others stayed in one form for thousands of years without
                "progressing." The model is useful for rough comparison. It is misleading as a
                description of how change actually works.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Five Key Themes</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Five themes run through all of human prehistory: Climate Change, Migration,
              Domestication, Urbanism, and Social Inequality. Which one do you think most directly
              caused the others? Commit to an answer before reading.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Climate change is the strongest candidate for driving the others. The end of the
                last Ice Age (11,700 years ago) shifted environments enough that plant and animal
                domestication became possible in new regions. Domestication allowed surplus food.
                Surplus supported larger settlements. Larger settlements became cities. Cities
                created conditions for wealth differences and social inequality. Migration spread
                all of these developments.
              </p>
              <p>
                But climate is not the only cause. Agency, emulation, and local factors all matter
                too.
              </p>
            </details>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Climate Change</span>
              <p className="lrn-step-content">
                World climate has fluctuated between warm and cold periods in roughly 100,000-year
                cycles for the last 700,000 years. The last Ice Age ended about 11,700 years ago.
                Every major shift changed what plants grew, where animals lived, and where humans
                could settle. The Younger Dryas cold snap (about 12,900-11,700 years ago) briefly
                reversed warming and forced foragers to adapt rapidly.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Migration</span>
              <p className="lrn-step-content">
                People moved: out of Africa, across land bridges, across open ocean. Migration
                brought ideas, genes, and technologies to new places. Ancient DNA now gives direct
                evidence for when populations moved and mixed. The peopling of the Pacific, from
                Taiwan to Polynesia, is one of the best-documented migrations using this evidence.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Domestication</span>
              <p className="lrn-step-content">
                Humans changed wild plants and animals through selective breeding. In the Fertile
                Crescent, wild wheat and barley became domestic crops around 10,000 BCE.
                Domestication created reliable food surpluses. Surpluses allowed specialization,
                storage, trade, and eventually cities.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Urbanism</span>
              <p className="lrn-step-content">
                Large settled communities created new social problems: how to organize thousands of
                strangers, distribute resources, and maintain order without relying on personal
                kinship alone. Uruk in southern Mesopotamia, around 3500 BCE, is the earliest known
                city. It faced these problems first.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Social Inequality</span>
              <p className="lrn-step-content">
                Differences in wealth, status, and power appear in burial goods, house size, and
                diet. Archaeology tracks how inequality grew from nearly flat bands to deeply
                stratified states. At Cahokia (Mississippi Valley, c. 1050-1350 CE), elite burials
                show extreme inequality: one man buried on a platform of 20,000 shell beads,
                surrounded by sacrificed individuals.
              </p>
            </div>
          </div>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="Monks Mound, Cahokia">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/Great_River_Road_-_An_Aerial_View_of_Monks_Mound_-_NARA_-_7718947.jpg"
                alt="Aerial photograph of the flat-topped earthen platform of Monks Mound at Cahokia"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'Aerial view of Monks Mound at Cahokia, the largest earthwork in pre-Columbian North America. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Great_River_Road_-_An_Aerial_View_of_Monks_Mound_-_NARA_-_7718947.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · Public domain.'}
              </figcaption>
            </VizFigure>
          </figure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              If climate change drove the rise of cities, why did some regions stay forager
              societies for thousands of years after the Ice Age ended?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Climate change created new possibilities, not guaranteed outcomes. The Fertile
                Crescent had wild wheat, barley, sheep, and goats that were easy to domesticate.
                Regions without those plants and animals had no easy path to agriculture.
              </p>
              <p>
                Australia, for example, lacked domesticable cereals and large herd animals. The
                climate warmed, but the biological toolkit for agriculture was not there. Local
                plant and animal species matter as much as global climate.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Responsibilities of Archaeology</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Satellite images from 2014 showed that the site of Dura-Europos in Syria was covered
              in thousands of looting pits that did not exist in 2012. What does a looted site lose
              that cannot be recovered even if the objects are later seized?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Context. Objects removed from a site without recording lose their position: which
                layer they came from, what they sat next to, how they related to the structure
                around them.
              </p>
              <p>
                A pot on the antiquities market tells you what it looks like. A pot in its original
                layer tells you when it was deposited, what activities surrounded it, and how it
                relates to everything else in the deposit. Context is the information. Without it,
                the object becomes decorative rather than historical.
              </p>
            </details>
          </div>

          <p>
            Looting is the visible end of an illegal antiquities trade that funds organized crime
            and, in conflict zones, armed groups. The 2003 Iraq War opened that floodgate. By 2014,
            satellite photographs showed the same pattern of pitting at Dura-Europos and Mari in
            Syria.
          </p>

          <p>
            Repatriation is the return of human remains and cultural objects to descendant
            communities. NAGPRA passed in the USA in 1990. It requires institutions to return human
            remains and cultural items to Native American tribes. Similar debates surround the Elgin
            Marbles (held in London, claimed by Greece) and the Nefertiti bust (held in Berlin,
            claimed by Egypt).
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="wide" title="The Parthenon Marbles">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Duveen_Gallery_-_Parthenon_marbles_from_the_Acropolis_of_Athens_-_British_Museum.jpg"
                alt="Marble frieze sculptures from the Parthenon displayed along the Duveen Gallery walls"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {
                  'The Parthenon (Elgin) Marbles in the British Museum, claimed by Greece for return to Athens. '
                }
                <a
                  href="https://commons.wikimedia.org/wiki/File:Duveen_Gallery_-_Parthenon_marbles_from_the_Acropolis_of_Athens_-_British_Museum.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
                {' · CC BY 2.0, photo by Andres Rueda.'}
              </figcaption>
            </VizFigure>
          </figure>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Indigenous Archaeology</span>
            <div className="lrn-definition-desc">
              <p>
                An approach that involves and centers local and descendant communities in
                archaeological practice. Rather than studying indigenous heritage from the outside,
                indigenous archaeology works in partnership, shares findings, and lets communities
                shape research questions.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Early archaeology emerged from European colonialism. Researchers from wealthy
              countries excavated sites in other people's homelands, took objects to distant
              museums, and published findings without consulting descendants.
            </p>
            <p>
              Archaeologists studied these communities' ancestors. The communities themselves had no
              voice. Indigenous archaeology is the discipline's response to that history. It
              recognizes that the people connected to a past have a legitimate stake in how it is
              studied and represented.
            </p>
          </div>

          <p>
            The work archaeologists do today is shaped by who gets to study whose past. Looting
            laws, repatriation agreements, and indigenous partnerships are not peripheral concerns.
            They define the terms on which knowledge about the human past is produced and shared.
            Every decision about where to dig, who to consult, and where findings go is an ethical
            choice, not just a technical one.
          </p>
        </>
      ]
    },

    practice: [
      {
        q: 'What is archaeology, and how does it differ from history?',
        a: 'Archaeology is the study of the human past from material remains. History relies on written records. Archaeology covers all societies including those with no writing. History focuses on literate, politically dominant groups. Archaeology reaches back 2.5 million years; written history covers only the last 5,500 years.'
      },
      {
        q: 'ELABORATE: Why does the archaeological record contain more stone and fired clay than wood, cloth, or skin?',
        a: 'Stone, fired clay, and metal resist decay far better than organic materials. Decay depends on water, oxygen, and bacteria. Hard materials like stone and fired clay give water and bacteria nothing to break down. This means the record is biased toward what time spares, not what people valued most. A culture that prized decorated textiles leaves almost nothing; one that fired pottery leaves everything.'
      },
      {
        q: 'What are hominins, and when does the hominin lineage begin?',
        a: 'Hominins are all members of the human lineage after the split from other apes. The word "hominin" has replaced the older word "hominid" for this group. The hominin lineage begins approximately 6 million years ago in Africa. Homo sapiens appears much later, around 200,000 years ago.'
      },
      {
        q: 'PREDICT: A new settlement appears in the archaeological record at exactly the same time as a sharp change in the pollen record showing forest clearance. What two mechanisms could explain this coincidence?',
        a: 'First, migration: a new population moved in and cleared forest to farm. Second, in-place adoption: the existing population adopted agriculture and cleared forest themselves. Ancient DNA can now distinguish these cases. If the genetic profile of the population changes sharply, migration is likely. If the genetics are continuous, in-place adoption is more likely. The pollen record alone cannot tell the difference.'
      },
      {
        q: 'Why does the boundary between prehistory and history fall at different dates in different parts of the world?',
        a: 'Because prehistory is defined by the absence of written records, not by a fixed calendar date. Writing spread unevenly: it appeared in Southwest Asia around 5,500 years ago, later in western Europe, and not at all in Australia before European contact. Each region enters "history" when its own writing tradition begins or when literate outsiders begin recording it.'
      },
      {
        q: 'Define material culture and explain why it is described as "one of the hallmarks of humanness."',
        a: 'Material culture is all physical objects made, used, or changed by humans. It is distinctively human because no other species manufactures tools in a systematic, repeating, passed-on way across generations. The ability to make and pass on tool-making traditions separates the human lineage from other animals in the archaeological record.'
      },
      {
        q: 'TRANSFER: The Arizona garbage project studied domestic trash cans in Tucson. How does this illustrate the scope of archaeology beyond ancient ruins?',
        a: 'It shows that archaeology studies material remains of any period, including the present. The project found that what people actually discarded differed from what they claimed in surveys. This gap between stated behavior and physical evidence is exactly what archaeology is designed to measure. Ancient sites pose the same challenge: the material record and the intended record often tell different stories.'
      },
      {
        q: 'Thomas Jefferson excavated a Native American burial mound in 1784. What was methodologically significant about his approach?',
        a: 'Jefferson dug a trench through the mound and recorded the layers of bones at different depths, noting which materials appeared above or below others. This is an early application of stratigraphic thinking. By recording depth and sequence rather than just collecting objects, he could see that the mound was used in multiple episodes over time. Context made the dig informative rather than just a collection exercise.'
      },
      {
        q: 'What discovery in the 1830s pushed the human story far beyond biblical timeframes?',
        a: 'Researchers found chipped stone tools in European river gravels alongside bones of extinct mammoth and woolly rhinoceros. This proved that humans had lived at the same time as animals that no longer exist. The tools and bones were in undisturbed geological layers, making the association hard to dismiss. It pushed the human story far older than religious texts allowed.'
      },
      {
        q: 'What was found at Feldhoffer Cave in the Neander Valley in 1856, and why did it matter?',
        a: "A worker found a skeleton in a limestone cave. Scientists recognized it as a premodern human: what we now call Homo neanderthalensis (Neanderthals). Scientists accepted it as the first fossil hominin. Combined with Darwin's work published three years later, it made the case that human forms had changed over time."
      },
      {
        q: "ELABORATE: Why did Darwin's theory of evolution by natural selection matter specifically for archaeology?",
        a: 'Before Darwin, the dominant view held that species (including humans) did not change. After Darwin, researchers expected intermediate forms and gradual change in the fossil record. This made the Neanderthal find interpretable: not a freak, but an earlier stage of an evolving lineage. Evolution also implied that behavior could change, giving purpose to studying stone tools as evidence of developing cognitive capacity.'
      },
      {
        q: 'What is the Principle of Superposition in stratigraphy?',
        a: 'If a sequence of sediments is undisturbed, the oldest layers sit at the bottom and the youngest at the top. This allows archaeologists to establish relative chronology: even without any dating method, objects from deeper layers are older than objects from shallower ones. It is the foundation of all stratigraphic reasoning in archaeology.'
      },
      {
        q: 'ELABORATE: Why does radiocarbon dating work as a clock even though individual atoms decay randomly?',
        a: 'Any single carbon-14 atom decays at random. But a population of millions decays at a predictable rate. Half-life is the time for half the population to decay, regardless of the starting amount. This independence from sample size makes C14 a usable clock. You measure the proportion remaining, not the absolute count, so you do not need to know how much carbon the organism started with.'
      },
      {
        q: "What does radiocarbon dating measure, and what is carbon-14's half-life?",
        a: 'Radiocarbon dating measures the decay of carbon-14 (C14), an unstable isotope absorbed by living organisms from the atmosphere. When an organism dies, it stops absorbing C14 and the existing C14 decays at a fixed rate. The half-life of C14 is 5,730 years, meaning half the C14 in a sample decays every 5,730 years. This decay rate allows researchers to calculate how long ago the organism died.'
      },
      {
        q: 'A charred seed contains one sixteenth of the C14 found in a modern sample. How old is it approximately, and what must be done before reporting a calendar date?',
        a: 'One sixteenth equals four half-lives (1/2 x 1/2 x 1/2 x 1/2 = 1/16). Four half-lives at 5,730 years each equals approximately 22,920 years before present. Before reporting a calendar date, you must calibrate the raw radiocarbon date against dendrochronology and other records. Atmospheric C14 has not been constant over time. Skipping calibration produces dates that are off by decades to centuries.'
      },
      {
        q: "Why must radiocarbon dates be calibrated, and what is dendrochronology's role in that calibration?",
        a: 'Raw radiocarbon dates assume constant atmospheric C14, which is not true. Cosmic ray activity and ocean circulation have caused fluctuations. Dendrochronology provides exact calendar years for each tree ring. By measuring the C14 in rings of known calendar age, researchers build a calibration curve (a graph converting raw dates into calendar years) that corrects raw radiocarbon dates.'
      },
      {
        q: 'What does potassium-argon dating measure, and when is it used instead of radiocarbon?',
        a: 'Potassium-argon dating measures the decay of radioactive potassium-40 into argon-40. The half-life is 1.25 billion years. It dates volcanic rocks, lavas, and tuffs. Use it instead of radiocarbon when the sample is older than roughly 40,000 years, when it contains no organic material, or when it is associated with volcanic deposits from early hominin sites in East Africa.'
      },
      {
        q: 'TRANSFER: Uranium-series dating is used at Sima de los Huesos, Spain. What does it date and what did it find?',
        a: "Uranium-series dating measures uranium decay in cave flowstones (calcite deposits from groundwater). At Sima de los Huesos in Spain, it dated flowstones surrounding human fossils. The result: the fossils accumulated about 430,000 years ago. This is far beyond radiocarbon's range, showing why multiple dating methods are needed for deep Middle Paleolithic sites."
      },
      {
        q: 'ELABORATE: How does dendrochronology produce a chronology extending thousands of years into the past, when individual trees live only hundreds of years?',
        a: "Each tree's ring sequence reflects regional climate shared by all trees growing at the same time. Researchers match the ring patterns of a recently dead tree (whose death date is known) to a living tree, extending the chronology backward. They then find older dead wood whose ring patterns overlap with the sequence already built, extending it further. By chaining overlapping sequences, chronologies now extend back thousands of years in some regions."
      },
      {
        q: 'What is the difference between thermoluminescence (TL) and optically stimulated luminescence (OSL)?',
        a: 'TL dates heated materials: pottery, burnt flint, hearths. It measures energy stored in minerals since last heating. OSL dates buried sediments. It measures energy stored since the sediment was last exposed to sunlight. Both use the same underlying principle: minerals absorb radiation at a measurable rate. The trigger event differs: heat for TL, sunlight for OSL.'
      },
      {
        q: 'What is LiDAR and what did it reveal at Angkor Wat?',
        a: 'LiDAR (Light Detection and Ranging) is an airborne system that fires laser pulses through forest canopy and detects the reflected signal from the ground surface. It maps buried topography invisible from the ground. At Angkor Wat in Cambodia, LiDAR revealed that the large walled enclosure, long thought to be mostly empty, was filled with houses and ponds. The urban complex was far larger than previously understood.'
      },
      {
        q: 'PREDICT: You are about to excavate a site. List two things survey and remote sensing can tell you before you dig a single trench.',
        a: 'First, the extent and boundaries of the site: where concentrations of surface material begin and end, and how large the buried deposit might be. Second, the location of buried features: pits, walls, or ditches detected by geomagnetic prospection or resistivity survey without digging. Both pieces of information help you plan where to place trenches and which areas are richest.'
      },
      {
        q: 'What is palynology and what does it reveal about the past?',
        a: 'Palynology is pollen analysis. Pollen grains have distinctive shapes for each plant species and survive in waterlogged or anaerobic conditions. Researchers core these deposits and count pollen at each depth. The result is a sequence of vegetation change through time. Combined with radiocarbon dates, palynology shows when forests were cleared, when grasslands expanded, and when crops appeared.'
      },
      {
        q: 'TRANSFER: How does strontium and oxygen isotope analysis of a human tooth reveal migration?',
        a: 'Tooth enamel forms in childhood and does not remodel afterward. The strontium and oxygen isotope ratios in enamel reflect the local geology and water chemistry of the area where the child grew up. If these ratios differ from the ratios in the burial soil, the person grew up somewhere else. The "Amesbury Archer" near Stonehenge showed isotopic ratios characteristic of the European continent, not Britain, proving he had migrated to England as an adult.'
      },
      {
        q: 'What are C-transforms and N-transforms, and why does the distinction matter?',
        a: 'C-transforms are cultural processes: how humans used, stored, moved, and discarded artifacts. N-transforms are natural processes: decay, waterlogging, root disturbance, geological movement. Both change what the archaeologist finds compared to what was originally deposited. Misidentifying a cultural pattern as natural, or vice versa, produces a false interpretation. Formation process analysis is the systematic study of these inputs to the archaeological record.'
      },
      {
        q: 'ELABORATE: Why is experimental archaeology useful for interpreting the past, and what are its limits?',
        a: "Experimental archaeology tests whether a proposed past activity is physically possible and what traces it would leave. The Hokule'a canoe experiment showed traditional Pacific navigation was feasible, not accidental. If you replicate a Neolithic flint tool and it produces the same edge-damage patterns as ancient tools, that supports the interpretation. The limit is that experiments show what could have happened, not what did happen. A successful replica proves the method was possible, not that it was actually used."
      },
      {
        q: 'What is processual archaeology (New Archaeology) and who developed it?',
        a: 'Processual archaeology developed in the 1960s, led by Lewis Binford (1931-2011) in North America and David Clarke (1937-1976) in Britain. It shifted focus from describing what past cultures looked like to explaining why and how they changed. Key features: scientific hypothesis testing, quantitative analysis, environment as a primary driver of change, and the goal of finding generalizable laws of cultural process.'
      },
      {
        q: 'PREDICT: A postprocessual archaeologist and a processual archaeologist both study the same burial. What different questions would each ask?',
        a: 'The processual archaeologist asks: what does the burial tell us about economic or environmental conditions? How does grave goods distribution correlate with settlement hierarchy? The postprocessual archaeologist asks: what symbolic meanings did burial goods hold for the mourners? Whose perspective shaped the burial ritual? What does the burial reveal about gender roles or identity? Both are legitimate. The processual approach tests measurable hypotheses. The postprocessual approach probes meaning and identity.'
      },
      {
        q: 'What is cultural ecology and how did Gordon Willey apply it?',
        a: 'Cultural ecology holds that a main cause of change in human society is the way societies respond to environmental challenges and opportunities. Developed by Julian Steward (1902-1972) and Leslie White (1900-1975). Gordon Willey (1913-2002) applied it to settlement patterns: in the Virú Valley, Peru, he traced 1,500 years of changing settlement against a changing environment. In Barton Ramie, Belize, he used the same approach for Maya settlements.'
      },
      {
        q: 'TRANSFER: Two neighboring Bronze Age cultures develop bronze-casting at almost the same time with no evidence of direct trade. Is diffusion or independent invention more likely? What evidence would help decide?',
        a: 'Without direct evidence of contact, independent invention is possible. Three kinds of evidence would help decide. First, a shared ore source for the metal suggests the two cultures traded, which points to diffusion. Second, casting techniques too specific to arise twice by chance also point to diffusion. Third, a clear time gap, with one region casting bronze well before the other, supports diffusion from a single origin. If the timing is truly simultaneous and the techniques differ, independent invention becomes more likely.'
      },
      {
        q: "Describe Service's fourfold classification of human societies.",
        a: 'Elman Service proposed four types: Bands (25-60 people, mobile hunter-gatherers, informal leadership), Tribes (hundreds to thousands, settled farmers or herders, identity based on common descent, no formal government), Chiefdoms (over 10,000 people, institutionalized rank hierarchy, redistribution as the key economic feature), and States (large populations, centralized control overriding kinship, permanent rank and wealth differences). The scheme is widely used for comparison but criticized for oversimplifying the diversity of actual societies.'
      },
      {
        q: 'What is paleomagnetism and when is it used as a dating tool?',
        a: "Paleomagnetism measures the magnetic orientation of sediments and lavas when they formed. Earth's magnetic field reverses direction at irregular but known intervals. By comparing a deposit's magnetic orientation to this master sequence, researchers place it within the sequence of reversals. It is a relative tool, not absolute: it places a deposit in a sequence but does not give a calendar year without additional information. Use it for very old sediments and lavas as an independent cross-check."
      },
      {
        q: 'SELF-EXPLAIN: Why does looting destroy information that cannot be recovered even if the objects are later seized by a museum?',
        a: "An object's historical value lies in its context: the exact layer it came from, what it sat next to, its depth, its orientation. Remove it without recording and that information is gone permanently. The object itself cannot tell you where in the stratigraphy it came from. A looted pot can be dated by style, but you lose knowing which deposit it sealed, what it was found with, and how it related to the structures around it. Museums can analyze the object but cannot reconstruct its original context."
      },
      {
        q: 'What is NAGPRA and what did it require?',
        a: "NAGPRA is the Native American Graves Protection and Repatriation Act, passed in the USA in 1990. It requires institutions holding collections of Native American human remains and cultural items to return them to affiliated descendant tribes. It was the first major legal framework in the USA requiring archaeological institutions to consult with indigenous communities rather than treating those communities' heritage as property of museums or universities."
      },
      {
        q: 'ELABORATE: Why did NAGPRA represent a fundamental shift in how archaeology operates, not just a legal change?',
        a: 'Before NAGPRA, the default assumption was that human remains and objects from the past belonged to the institution that held them. The communities whose ancestors were being studied had no legal standing. NAGPRA forced a shift: descendant communities became partners with rights over how their heritage is studied and where it is held. This changed research questions, field practices, and the power relationships between institutions and indigenous communities. It is the legal foundation of indigenous archaeology in the USA.'
      },
      {
        q: 'PREDICT: If climate change drove the rise of cities, why did some regions stay forager societies for thousands of years after the Ice Age ended?',
        a: 'Climate change created new possibilities, not guaranteed outcomes. The Fertile Crescent had wild wheat, barley, sheep, and goats that were easy to domesticate. Regions without those species had no easy path to agriculture. Australia, for example, lacked domesticable cereals and large herd animals. Local biology matters as much as global climate. The themes name forces; they do not determine outcomes.'
      },
      {
        q: 'What is peer-polity interaction?',
        a: 'Peer-polity interaction describes how new states tend to form around the margins of existing ones, through competition, emulation, and exchange. A polity is any organized community with its own government, such as a city-state, kingdom, or chiefdom. Rather than one center spreading outward, neighboring communities of about the same size push each other to grow by competing. This explains why early states in Mesopotamia, Egypt, the Indus Valley, and China appear to emerge at similar levels of complexity without direct hierarchical connection.'
      },
      {
        q: 'TRANSFER: An archaeologist argues that Stonehenge was an astronomical observatory because its alignments match solstice sunrises. A second argues it was a healing site because of skeletal evidence of trauma and disease in burials. How does postprocessual archaeology evaluate both claims?',
        a: "Postprocessual archaeology holds that multiple interpretations of the same evidence can all be valid (multivocality). Neither the astronomical nor the healing interpretation is provably wrong. Both are grounded in physical evidence. The astronomical claim uses structural alignment data. The healing claim uses biological analysis of skeletal remains. Postprocessual archaeology asks whose interpretation is privileged and why, not which one is the single correct answer. Both readings illuminate different aspects of the site's past use."
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Introduction: Studying the Human Past',
      sections: [
        <>
          <h2>Core Definitions</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Archaeology</span>
            <div className="lrn-definition-desc">
              <p>
                Study of the human past from material remains. Sub-field of anthropology (North
                American usage). Covers all societies with no writing requirement.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Material culture</span>
            <div className="lrn-definition-desc">
              <p>
                All physical objects made, used, or changed by humans. The primary evidence of
                archaeology. Distinctively human (systematic manufacture across generations).
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Hominins</span>
            <div className="lrn-definition-desc">
              <p>
                All members of the human lineage after the split from other apes. Replaces older
                "hominid" in this usage. Earliest: c. 6 million years ago in Africa.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Prehistory</span>
            <div className="lrn-definition-desc">
              <p>
                The human story before written records. Writing begins c. 5,500 years ago in
                Southwest Asia. The boundary is local, not global.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Stratigraphy</span>
            <div className="lrn-definition-desc">
              <p>
                Study of sedimentary layers. Principle of Superposition: oldest layers at the bottom
                if undisturbed. Foundational to all archaeological chronology.
              </p>
            </div>
          </div>

          <h2>Dating Methods</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>What it dates</th>
                <th>Range</th>
                <th>Key limit</th>
                <th>When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Radiocarbon (C14)</strong>
                </td>
                <td>Organic materials (bone, wood, charcoal, seeds)</td>
                <td>Up to ~40,000 years</td>
                <td>Must be calibrated; requires organic material</td>
                <td>Organic samples up to ~40,000 years old</td>
              </tr>
              <tr>
                <td>
                  <strong>Potassium-Argon (K-Ar)</strong>
                </td>
                <td>Volcanic rocks, lavas, tuffs</td>
                <td>Beyond 40,000 years, into millions</td>
                <td>Requires volcanic context; argon loss if sample reheated</td>
                <td>Early hominin sites with volcanic deposits</td>
              </tr>
              <tr>
                <td>
                  <strong>Argon-Argon (39Ar/40Ar)</strong>
                </td>
                <td>Volcanic minerals</td>
                <td>Same as K-Ar</td>
                <td>Requires particle accelerator</td>
                <td>More accurate than K-Ar; preferred when sample is small</td>
              </tr>
              <tr>
                <td>
                  <strong>Uranium-Series (U-series)</strong>
                </td>
                <td>Cave flowstones, stalactites, coral</td>
                <td>Hundreds of thousands of years</td>
                <td>Requires closed system (no uranium gain/loss after formation)</td>
                <td>Cave sites with flowstones sealing hominin fossils</td>
              </tr>
              <tr>
                <td>
                  <strong>ESR</strong>
                </td>
                <td>Dental enamel</td>
                <td>Beyond radiocarbon range</td>
                <td>Requires knowledge of radiation dose rate</td>
                <td>Fossil teeth from Middle and Lower Paleolithic sites</td>
              </tr>
              <tr>
                <td>
                  <strong>TL</strong>
                </td>
                <td>Heated materials (pottery, hearths, burnt flint)</td>
                <td>Hundreds of thousands of years</td>
                <td>Requires that material was heated to reset the clock</td>
                <td>Pottery and burnt features beyond radiocarbon range</td>
              </tr>
              <tr>
                <td>
                  <strong>OSL</strong>
                </td>
                <td>Buried sediments</td>
                <td>Hundreds of thousands of years</td>
                <td>Sediment must have been exposed to sunlight before burial</td>
                <td>Wind-blown or water-laid sediments with no organic material</td>
              </tr>
              <tr>
                <td>
                  <strong>Dendrochronology</strong>
                </td>
                <td>Preserved timber</td>
                <td>Exact calendar years where chronology exists</td>
                <td>Only where composite chronologies have been built</td>
                <td>Timber from buildings or waterlogged sites; also radiocarbon calibration</td>
              </tr>
              <tr>
                <td>
                  <strong>Paleomagnetism</strong>
                </td>
                <td>Sediments and lavas (magnetic orientation)</td>
                <td>Millions of years</td>
                <td>Relative only; needs other methods for numerical age</td>
                <td>Cross-checking very old volcanic or sedimentary sequences</td>
              </tr>
            </tbody>
          </table>

          <h2>Key Dates</h2>

          <div className="lrn-timeline">
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">c. 6 million years ago</span>
              <p className="lrn-timeline-content">Earliest hominins in Africa.</p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">c. 2.5 million years ago</span>
              <p className="lrn-timeline-content">
                First stone tools (Oldowan industry: simple chipped pebbles, named after Olduvai
                Gorge in Tanzania). Archaeology begins.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">c. 700,000 years ago</span>
              <p className="lrn-timeline-content">
                World climate begins regular warm/cold cycles on ~100,000-year timescale.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">c. 200,000 years ago</span>
              <p className="lrn-timeline-content">Homo sapiens living on Earth.</p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">c. 11,700 years ago</span>
              <p className="lrn-timeline-content">End of last Ice Age. Holocene begins.</p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">c. 5,500 years ago</span>
              <p className="lrn-timeline-content">
                Writing invented in Southwest Asia. Prehistory ends there.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1492</span>
              <p className="lrn-timeline-content">
                Columbus crosses central Atlantic. European voyages of discovery begin reshaping
                comparative ethnography.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1784</span>
              <p className="lrn-timeline-content">
                Thomas Jefferson excavates burial mounds in Virginia. Early stratigraphic recording.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1856</span>
              <p className="lrn-timeline-content">
                Neanderthal skeleton at Feldhoffer Cave. First recognized fossil hominin.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1859 / 1871</span>
              <p className="lrn-timeline-content">
                Darwin: On the Origin of Species / Descent of Man.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1974</span>
              <p className="lrn-timeline-content">Terracotta army discovered near Xian, China.</p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1976</span>
              <p className="lrn-timeline-content">
                Hokule'a sails Hawaii to Tahiti. Experimental Pacific navigation proved feasible.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1990</span>
              <p className="lrn-timeline-content">
                NAGPRA passed in the USA. Repatriation framework for Native American remains.
              </p>
            </div>
          </div>

          <h2>Key Figures</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Figure</th>
                <th>Dates</th>
                <th>Contribution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>John Aubrey</strong>
                </td>
                <td>17th century</td>
                <td>First serious descriptions and plans of Stonehenge and Avebury</td>
              </tr>
              <tr>
                <td>
                  <strong>Thomas Jefferson</strong>
                </td>
                <td>1784</td>
                <td>Excavated Native American burial mounds with stratigraphic recording</td>
              </tr>
              <tr>
                <td>
                  <strong>Charles Darwin</strong>
                </td>
                <td>1809-1882</td>
                <td>
                  Evolution by natural selection; On the Origin of Species (1859); Descent of Man
                  (1871)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Gregor Mendel</strong>
                </td>
                <td>1860s</td>
                <td>Plant-breeding experiments; foundation of genetics</td>
              </tr>
              <tr>
                <td>
                  <strong>Willard Libby</strong>
                </td>
                <td>1908-1980</td>
                <td>Developed radiocarbon dating in the late 1940s</td>
              </tr>
              <tr>
                <td>
                  <strong>Lewis Binford</strong>
                </td>
                <td>1931-2011</td>
                <td>Processual (New) Archaeology in 1960s; ethnoarchaeology with Nunamiut</td>
              </tr>
              <tr>
                <td>
                  <strong>David Clarke</strong>
                </td>
                <td>1937-1976</td>
                <td>Co-developed processual archaeology in Britain</td>
              </tr>
              <tr>
                <td>
                  <strong>Michael Schiffer</strong>
                </td>
                <td>1987</td>
                <td>C-transforms vs. N-transforms; formation process analysis</td>
              </tr>
              <tr>
                <td>
                  <strong>Julian Steward</strong>
                </td>
                <td>1902-1972</td>
                <td>Cultural ecology: environment as driver of cultural change</td>
              </tr>
              <tr>
                <td>
                  <strong>Leslie White</strong>
                </td>
                <td>1900-1975</td>
                <td>Cultural ecology; energy capture as measure of cultural evolution</td>
              </tr>
              <tr>
                <td>
                  <strong>Gordon Willey</strong>
                </td>
                <td>1913-2002</td>
                <td>
                  Applied cultural ecology to settlement patterns: Virú Valley, Peru; Barton Ramie,
                  Belize
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Elman Service</strong>
                </td>
                <td>1962</td>
                <td>Fourfold classification of societies: bands, tribes, chiefdoms, states</td>
              </tr>
              <tr>
                <td>
                  <strong>Renfrew and Cherry</strong>
                </td>
                <td>1982</td>
                <td>
                  Peer-polity interaction: new states form around margins of existing ones through
                  competition and emulation
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Key Concepts and Contrasting Pairs</h2>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Processual (New) Archaeology</span>
              <p>
                1960s. Scientific hypothesis-testing. Environment as driver. Quantitative. Objective
                knowledge goal.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Postprocessual Archaeology</span>
              <p>
                1980s. Subjective knowledge. Symbolism, agency, feminist perspectives.
                Multivocality: many valid interpretations.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">C-transforms</span>
              <p>
                Cultural processes: how humans used, stored, moved, discarded artifacts. Shapes what
                gets deposited.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">N-transforms</span>
              <p>
                Natural processes: decay, waterlogging, root disturbance, geological movement.
                Shapes what survives.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Diffusion</span>
              <p>
                Innovation spreads from one center through contact. Overused in early 20th century
                archaeology.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Independent invention</span>
              <p>
                Same development emerges separately in different places without contact. Now
                testable with aDNA and isotopes.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Linear model of change</span>
              <p>Hunter-gatherer to farmer to state: directional, progressive, cumulative.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cyclical model of change</span>
              <p>
                Time as repeating patterns: seasons, generations, political cycles. Many early
                societies held this view.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Archaeology</span>
              <p>
                Studies humans from material remains. Covers all periods, literate and non-literate.
                Reaches 2.5 million years back.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Paleontology</span>
              <p>
                Studies pre-human life including dinosaurs. Does not study humans. A common
                misconception mixes up the two fields.
              </p>
            </div>
          </div>

          <h2>Service's Classification of Societies</h2>

          <ul className="lrn-list">
            <li>
              <strong>Bands:</strong> 25-60 people, mobile hunter-gatherers, informal leadership
            </li>
            <li>
              <strong>Tribes:</strong> hundreds to thousands, settled farmers or herders,
              descent-based identity
            </li>
            <li>
              <strong>Chiefdoms:</strong> 10,000+, institutionalized rank, redistribution economy
            </li>
            <li>
              <strong>States:</strong> large populations, centralized control overriding kinship,
              permanent hierarchy
            </li>
          </ul>

          <h2>Five Key Themes</h2>

          <ul className="lrn-list">
            <li>
              <strong>Climate Change:</strong> c. 700,000 years ago, climate cycles begin; last Ice
              Age ends 11,700 years ago; Younger Dryas cold snap 12,900-11,700 years ago
            </li>
            <li>
              <strong>Migration:</strong> tracked by aDNA, isotopes, artifact distributions; Pacific
              peopling is a key case study
            </li>
            <li>
              <strong>Domestication:</strong> plants and animals; Fertile Crescent wheat/barley c.
              10,000 BCE; enables surplus, cities, inequality
            </li>
            <li>
              <strong>Urbanism:</strong> large settled communities; Uruk (Mesopotamia, c. 3500 BCE)
              first known city; new organizational challenges
            </li>
            <li>
              <strong>Social Inequality:</strong> from flat bands to stratified states; visible in
              burials, house size, diet; Cahokia (c. 1050-1350 CE) as case study
            </li>
          </ul>

          <h2>Environmental Reconstruction Methods</h2>

          <ul className="lrn-list">
            <li>
              <strong>Palynology:</strong> pollen from lake beds and bogs; reveals vegetation
              change; calibrated by radiocarbon. When to use: any waterlogged or bog deposit.
            </li>
            <li>
              <strong>Deep-sea cores / oxygen isotopes:</strong> foraminifera shell chemistry; maps
              glacial/interglacial stages. When to use: tracking Ice Age cycles over millions of
              years.
            </li>
            <li>
              <strong>Carbon isotopes (12C/13C):</strong> C3 vs. C4 plants in ancient soils;
              reflects diet and environment. When to use: reconstructing past vegetation and human
              diet.
            </li>
            <li>
              <strong>Strontium / oxygen isotopes in teeth:</strong> reveals childhood residence vs.
              burial location. When to use: detecting migration and mobility in skeletal
              populations.
            </li>
            <li>
              <strong>Ancient DNA (aDNA):</strong> genetic relationships; interbreeding
              (Neanderthals, Denisovans); migration vs. diffusion. When to use: well-preserved
              skeletal remains, cold/dry burial environments.
            </li>
          </ul>

          <h2>Responsibilities</h2>

          <ul className="lrn-list">
            <li>
              <strong>NAGPRA (1990):</strong> USA law requiring return of Native American remains
              and cultural items to tribes
            </li>
            <li>
              <strong>Repatriation:</strong> return of objects to descendant communities; ongoing
              global debates (Nefertiti bust, Elgin Marbles)
            </li>
            <li>
              <strong>Looting:</strong> destroys context permanently; funded by illegal antiquities
              trade; documented by satellite imagery at Dura-Europos and Mari (Syria, 2014)
            </li>
            <li>
              <strong>Indigenous archaeology:</strong> partnership model; communities shape research
              questions
            </li>
          </ul>
        </>
      ]
    },

    customCss: `.ish .lrn-table th { text-align: left; padding: 8px; border-bottom: 1px solid var(--ink-hairline); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em; } .ish .lrn-table td { padding: 8px; border-bottom: 1px solid var(--ink-hairline); vertical-align: top; } .ish .lrn-table { width: 100%; border-collapse: collapse; margin-bottom: 2rem; }`
  }
  return config
}

export default function IntroductionStudyingTheHumanPast() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
