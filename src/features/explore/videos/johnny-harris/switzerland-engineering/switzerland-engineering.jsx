import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'swi',
  source: 'Johnny Harris: How Switzerland Engineered the Perfect Country',
  documentTitle: 'How Switzerland Engineered the Perfect Country - AETHER',
  learning: {
    category: 'Johnny Harris',
    title: 'How Switzerland Engineered the Perfect Country',
    subtitle:
      'How public-transit engineering turned a fragmented country of 26 cantons into a unified nation. Alpine tunnels, the Taktfahrplan pulse, and a 24-hour challenge across all of them.',
    hero: { youtubeId: 'OMbV1rIPhCg' },
    sections: [
      <>
        <section className="lrn-section">
          <h2>Why Switzerland Is Hard to Unify</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A country has four languages, three major religions, and mountain ranges that cut
              communities apart. Napoleon tries to unify it by force. He fails. What does this tell
              you about what actually creates national unity?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Military force alone cannot overcome deep geographic and cultural separation. When
                mountains physically block contact between communities, no law or army makes them
                feel connected. Real unity requires shared infrastructure: something that brings
                people together daily, not just politically.
              </p>
            </details>
          </div>

          <p>
            Switzerland sits at the center of Europe, surrounded by powerful neighbors. Its Alps
            carve the land into isolated valleys. German, French, Italian, and Romansh speakers live
            in separate regions, separated not just by language but by mountains.
          </p>

          <p>
            This geography made Switzerland nearly impossible to govern as one country. Each valley
            had its own culture, its own trade networks, and its own loyalties. Religion added
            another fault line. Catholic and Protestant communities clashed for centuries.
          </p>

          <figure className="lrn-figure">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div
                style={{
                  textAlign: 'center',
                  fontFamily: 'var(--reader-font-family)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(240, 240, 250, 0.7)',
                  marginBottom: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  flexWrap: 'wrap'
                }}
              >
                <span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      background: '#e0c84a',
                      marginRight: '6px',
                      verticalAlign: 'middle'
                    }}
                  />
                  German 64%
                </span>
                <span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      background: '#7a4f9e',
                      marginRight: '6px',
                      verticalAlign: 'middle'
                    }}
                  />
                  French 19%
                </span>
                <span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      background: '#4f9e6e',
                      marginRight: '6px',
                      verticalAlign: 'middle'
                    }}
                  />
                  Italian 8%
                </span>
                <span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      background: '#c44b4b',
                      marginRight: '6px',
                      verticalAlign: 'middle'
                    }}
                  />
                  Romansh &lt;1%
                </span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Swiss_languages_1.png"
                alt="Map of Switzerland's four linguistic regions: German (yellow, 64%), French (purple, 19%), Italian (green, 8%), Romansh (red, less than 1%)"
                width="352"
                height="233"
                style={{
                  display: 'block',
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  margin: '0 auto'
                }}
              />
            </div>
            <figcaption>
              Switzerland's four linguistic regions. German speakers dominate the center and east.
              French speakers occupy the west. Italian speakers live in the south (Ticino). Romansh
              speakers remain in a small alpine pocket in Graubünden.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Swiss_languages_1.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>

          <p>
            Napoleon invaded in 1798 and tried to force these communities into a single nation. His
            top-down approach failed. The diversity was too deep. Switzerland survived as a neutral
            buffer state. European empires accepted this arrangement. A stable, non-aligned
            Switzerland prevented direct border conflicts between major powers.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Geographic fragmentation blocks national identity at the root. Identity forms through
              shared experience. When mountain ranges stop daily contact between communities, people
              never build shared habits, shared stories, or shared symbols. You can write a
              constitution. You cannot write away the Alps.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why did European empires benefit from Swiss neutrality? Form your answer before
              reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Switzerland sits at a crossroads between France, Germany, Austria, and Italy. If any
                one empire controlled it, the others would face a direct border threat. A neutral
                Switzerland acted as a buffer zone. No empire gained an advantage, so all empires
                tolerated its independence. This is why Swiss neutrality became an accepted European
                norm after Napoleon.
              </p>
            </details>
          </div>
        </section>
      </>,

      <>
        <section className="lrn-section">
          <h2>From Napoleon to Federal Constitution</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Switzerland just survived a civil war between Catholic and Protestant cantons in 1847.
              The winning side wants to write a constitution. What problem will they face that
              Napoleon also faced?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The four language groups and religious factions still exist. Writing a constitution
                that gives real power to a central government means asking communities to give up
                local control. Communities that just fought a war will resist this. The constitution
                must balance central authority with local autonomy or it will fail.
              </p>
            </details>
          </div>

          <p>
            Switzerland's path to nationhood is slow and painful. Napoleon's 1798 invasion imposes a
            unified state, but it collapses after he falls. Switzerland reverts to a loose
            confederation. Catholic and Protestant cantons fight a brief civil war called the
            Sonderbund conflict in 1847.
          </p>

          <p>
            The Protestant cantons win. In 1848, they write a federal constitution. This document
            creates a shared government for the first time. It also gives the central government
            authority over public transportation. That last detail turns out to be the most
            important clause in the document.
          </p>

          <div className="lrn-timeline">
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1798</span>
              <p className="lrn-timeline-content">
                Napoleon invades Switzerland. He forces a unified republic on a fragmented country.
                The experiment fails after his fall.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1847</span>
              <p className="lrn-timeline-content">
                Sonderbund civil war. Catholic cantons form a defensive league against Protestant
                cantons. The conflict lasts less than a month. Protestant cantons win.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1848</span>
              <p className="lrn-timeline-content">
                Federal constitution adopted. Switzerland becomes one nation. The central government
                gains jurisdiction over public transport. Private companies begin building rail
                lines with British planners.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1880s</span>
              <p className="lrn-timeline-content">
                Switzerland builds the densest rail network in Europe in roughly 40 years. Private
                companies cover the flat lowlands. They stall at the Alps.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1882</span>
              <p className="lrn-timeline-content">
                First Gotthard Tunnel completed. 15 km through granite. Frankfurt to Milan drops
                from days of travel to hours.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1906</span>
              <p className="lrn-timeline-content">
                Simplon Tunnel completed. Connects Italian-speaking Ticino with the rest of
                Switzerland through the Alps.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1913</span>
              <p className="lrn-timeline-content">
                Lötschberg Tunnel completed. Connects French and German-speaking cantons through the
                Alps. Across both tunnels: 93 months of construction and 106 deaths.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1982</span>
              <p className="lrn-timeline-content">
                Taktfahrplan introduced. Switzerland synchronizes all rail lines to a 30-minute
                pulse. The country becomes a single clock.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">2004</span>
              <p className="lrn-timeline-content">
                Zurich-Bern route upgraded. The goal is not top speed but fitting the Taktfahrplan
                pulse exactly.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">2016</span>
              <p className="lrn-timeline-content">
                Gotthard Base Tunnel opens. At 57 km, it becomes the longest railway tunnel on
                Earth. Trains pass through at 200 km/h, 2.5 km below the mountain.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The constitutional clause giving the government transport authority matters more than
              any other clause in the 1848 document. Here is why: private companies build where
              profit exists. The Alps had no profitable route. No company would dig through granite
              at enormous cost to serve poor farming villages. Without government authority to
              override market logic, the rail network would stop at the mountain edge. The
              constitution made the tunnels possible by allowing public spending to go where private
              money refused.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The Sonderbund civil war lasted less than a month, yet it shaped Switzerland for the
              next 170 years. Why did such a short conflict produce such a durable outcome? Form
              your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The brevity of the war meant the country was not destroyed by it. Both sides
                survived intact. The winners had clear authority but did not eliminate the losing
                side. They had to design a constitution that the defeated cantons could still live
                under. This forced compromises into the 1848 document. The result was federalism
                with strong local autonomy, paired with central authority over key shared concerns
                like transport. A longer or more brutal war would have produced either a centralized
                victor's state or a permanent split. The short war forced the middle path.
              </p>
            </details>
          </div>
        </section>
      </>,

      <>
        <section className="lrn-section">
          <h2>The Rail Boom and Its Limits</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Switzerland has 40 km of rail track before the 1848 constitution. Over the next 40
              years, private companies with British planners build the densest rail network in
              Europe. Then they stop. Where do they stop, and why?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They stop at the Alps. Every private company calculates costs against revenue. The
                flat lowlands between cities are profitable routes. The Alps require enormous
                tunneling costs with uncertain returns. No investor wants to spend hundreds of
                millions of francs digging through granite mountains that connect poor farming
                villages to each other.
              </p>
            </details>
          </div>

          <p>
            After the 1848 constitution, Switzerland races to build rail. Private companies start
            with just 40 km of track and lay down thousands of kilometers across the lowlands,
            bringing in British planners and private capital. In 40 years, Switzerland builds the
            densest rail network in Europe.
          </p>

          <p>
            But the momentum hits a wall at the mountain base. The Alps separate the
            Italian-speaking south from the German and French-speaking north. Crossing them means
            boring through solid granite for kilometers. The cost is enormous. The revenue from the
            other side is unclear. Private companies stop.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Market Forces</span>
              <p>
                Private rail companies build profitable routes. They connect cities across flat
                lowlands where passenger and freight volume is high. They stop at the Alps because
                ticket revenue cannot cover tunneling costs.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Government Intervention</span>
              <p>
                The 1848 constitution gives the federal government transport authority. When private
                companies stall at the Alps, the government steps in. It subsidizes tunnel
                construction. Italy and Germany co-finance the Gotthard Tunnel because they need the
                trade route too.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why did Italy and Germany co-finance the first Gotthard Tunnel? Form your answer
              before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A rail route through the Alps cuts travel time from Frankfurt to Milan from days to
                hours. That trade route benefits Germany (exports flowing south) and Italy (exports
                flowing north) just as much as it benefits Switzerland. Switzerland could not
                finance the tunnel alone. The three countries shared the cost because they all
                shared the economic benefit.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Private capital follows expected return. A flat-route rail company recovers tunneling
              and track costs from passenger and freight ticket sales. The math works. An Alpine
              tunnel costs hundreds of millions of francs and takes a decade to build. The
              communities it connects are too poor to fill the trains with paying riders. No private
              investor will accept that risk.
            </p>
            <p>
              Government can pay for things markets ignore: national unity, connecting language
              regions, and using neutrality as bargaining power in European diplomacy. These
              benefits go to the whole country, not just ticket buyers. Only an actor that captures
              national-level value can invest at this scale. The 1848 constitution gave Switzerland
              that actor.
            </p>
          </div>
        </section>
      </>,

      <>
        <section className="lrn-section">
          <h2>Tunnel-Engineering as National Mythology</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Switzerland digs a 15 km tunnel through granite in the 1880s. The country is poor. It
              is barely 40 years old as a nation. Workers die. It costs 227 million francs. What
              effect does this kind of shared effort have on national identity?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Shared sacrifice and shared achievement build identity. When people work together on
                something enormous, they create a common story. The tunnel becomes something Swiss
                people can point to and say: "We did that." It becomes part of how they explain
                themselves to each other and to the world.
              </p>
            </details>
          </div>

          <p>
            The first Gotthard Tunnel opens in the 1880s, roughly 40 years after Switzerland becomes
            a nation. It is 15 km long. The labor costs 441 million man-hours. Dozens of workers
            die. The total cost reaches 227 million francs. For a poor, cow-farming country, this is
            an act of extraordinary ambition.
          </p>

          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Insight</span>
            <p>
              "This poor cow-farming country is learning to dig into the dark solid wall of granite,
              hoping that they won't hit an underground lake and trusting in math, praying that this
              digging experiment will work to get them in on Europe's rail economy and turn their
              geography into diplomacy." (1800s observer, cited by Harris)
            </p>
          </div>

          <p>
            The result reshapes Swiss identity. Posters celebrate the tunnels. Civic logos feature
            them. Engineers and workers replace soldiers as national heroes. In most European
            nations, the founding myth centers on military victory. In Switzerland, it centers on
            labor and technical achievement.
          </p>

          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Gotthard_Base_Tunnel.jpg"
              alt="Interior of the Gotthard Base Tunnel, showing the twin-tube tunnel at the Sedrun multifunction station"
            />
            <figcaption>
              The Gotthard Base Tunnel interior at the Sedrun station. The modern tunnel runs 57 km
              through the Alps, completing the legacy begun by the 1882 Gotthard Tunnel.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Gotthard_Base_Tunnel.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>

          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Insight</span>
            <p>
              "Digging becomes the seeds of a national myth, something that can potentially unify
              these diverse regions, religions, and geographies. And instead of soldiers, the
              national heroes are engineers and workers." (Johnny Harris)
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Nations need founding stories. These stories explain who the nation is, what it
              values, and what makes it different from neighbors. For Switzerland, military victory
              was not available as a founding story. The country survived by staying neutral, not by
              winning wars. The tunnels filled that gap. Digging through granite at enormous cost,
              connecting isolated communities, achieving what others said was impossible: this
              became Switzerland's story of who it is.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Typical European Nations</span>
              <p>
                Soldiers and generals as national heroes. Military victory as the founding myth.
                National identity built around conquest, defense, or liberation.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Switzerland</span>
              <p>
                Engineers and workers as national heroes. Tunnel-building as the founding myth.
                National identity built around labor, technical achievement, and connecting isolated
                communities.
              </p>
            </div>
          </div>

          <p>
            The second wave of Alpine tunnels follows in the early 1900s. The Lötschberg and Simplon
            tunnels take 93 months to build and cost 106 lives. They connect the Italian-speaking
            south with the French and German-speaking cantons. Each one deepens the national story.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Most countries celebrate generals on their currency and statues. Switzerland
              celebrates engineers. Why does the choice of national hero shape what a country
              builds? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                National heroes signal what behavior the country rewards. A country that honors
                generals trains its young people to seek glory through military service. A country
                that honors engineers trains its young people to seek glory through technical
                achievement. Public investment follows the same logic. Generals require armies and
                weapons. Engineers require schools, labs, and infrastructure projects. The choice of
                hero is not symbolic decoration. It is the slow, generational direction of where
                talent and money flow.
              </p>
            </details>
          </div>
        </section>
      </>,

      <>
        <section className="lrn-section">
          <h2>Tourism Builds the Mountain Network</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              British tourists discover the Swiss Alps in the late 1800s. They want to reach the
              summits. No trains go that high yet. What happens next, and why does it benefit
              ordinary Swiss people too?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Tourist demand creates revenue for mountain railways that would otherwise have no
                business case. Once those railways exist, local residents use them too. The same cog
                railway that takes a British tourist up to a glacier peak also carries the farmer's
                family to the valley market. Infrastructure built for tourism becomes infrastructure
                for daily life.
              </p>
            </details>
          </div>

          <p>
            British tourists come to Switzerland for the Alps. They are willing to pay to see
            glaciers, peaks, and mountain valleys. This creates a market for mountain railways that
            no local economic logic could justify. Investment follows demand. Cog railways and
            gondolas spread into terrain that would never have rail access otherwise.
          </p>

          <p>
            More tourists arrive because the infrastructure improves. Better infrastructure attracts
            more investment. Switzerland ends up with mountain railways in terrain that would have
            remained unreachable under any purely domestic economic logic.
          </p>

          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Pilatus_railway_train.jpg"
              alt="Pilatusbahn cog railway train climbing Mount Pilatus, Switzerland"
            />
            <figcaption>
              The Pilatusbahn on Mount Pilatus near Lucerne, the steepest rack railway in the world
              with a maximum gradient of 48%. British tourist demand drove investment in exactly
              this kind of extreme mountain infrastructure.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Pilatus_railway_train.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The tourism-to-infrastructure cycle works because tourist revenue is reliable and
              scalable. A hotel in Grindelwald fills every summer. That revenue can finance a
              railway. A profitable railway attracts more hotels. More hotels bring more tourists.
              Each step makes the next step more economically viable. The key is that the first
              step, building the railway, only needed tourist demand to justify it. After that, the
              system fed itself.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Mountain Trains for Tourists</span>
              <p>
                Gondolas, cog railways, and high-altitude stations built to serve wealthy visitors.
                The Jungfraujoch station at 3,454 m, reached through a tunnel inside the Eiger. The
                Pilatusbahn with its 48% gradient. Revenue from tourism justifies the extreme
                engineering cost.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Functional Transit for Locals</span>
              <p>
                The same network carries farmers, schoolchildren, and workers. Yellow postbuses
                reach valleys where no tourist ever goes. The infrastructure serves both purposes.
                Tourists fund the network. Locals use it every day.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The tourism cycle worked because the first British visitors arrived before the
              mountain railways existed. What does this tell you about the order in which demand and
              infrastructure must develop? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Demand has to come first. If Switzerland had built mountain railways without tourist
                demand, the trains would have run empty and bankrupted the operators. The British
                visitors who hiked and explored the Alps proved a market existed before anyone
                invested in extreme infrastructure. Once that demand was visible, investors had a
                reason to build. This pattern repeats. Hidden demand shows up through scrappy early
                users. Capital only arrives after that demand is proven.
              </p>
            </details>
          </div>
        </section>
      </>,

      <>
        <section className="lrn-section">
          <h2>The Right to Mobility</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Switzerland passes a law guaranteeing public transport to every year-round village.
              Some of these villages are deep in Alpine valleys with almost no residents. Running a
              bus or train there costs far more than it earns. Why would a country do this?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The law treats mobility as a civic right, not a commodity. The same logic applies to
                electricity or water: you extend it to every household because citizenship includes
                access to essential services. A country that lets remote villages become unreachable
                is silently abandoning some of its citizens. The law rejects that logic entirely.
              </p>
            </details>
          </div>

          <p>
            Switzerland guarantees public transport to every village where people live year-round.
            The transport can be a train, a gondola, or a postbus. The form does not matter. The
            right to be connected does.
          </p>

          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>
              "By law, every village in Switzerland which has people living all year around, they
              have the right of public transportation. It can be a train, it can be a gondola, it
              can be a bus, whatever." (Nick, local guide in Grindelwald)
            </p>
          </div>

          <p>
            Harris reaches the Jungfraujoch cog railway station with a local named Nick. The train
            has eight engines to climb through the mountain. The terminal station sits at 3,454 m,
            reached by a tunnel carved through the Eiger. At the top, Harris looks out at the
            largest glacier in the Alps.
          </p>

          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Jungfraujoch_railway_station_3454_meters_altitude_inside_the_Eiger_and_Monch_mountain_-_panoramio.jpg"
              alt="Jungfraujoch railway station inside the Eiger and Mönch mountains at 3,454 meters altitude"
            />
            <figcaption>
              Jungfraujoch railway station, 3,454 m inside the Eiger and Mönch mountains. The
              station is accessible entirely by cog railway, with eight engines pulling the train
              through the mountain.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Jungfraujoch_railway_station_3454_meters_altitude_inside_the_Eiger_and_Monch_mountain_-_panoramio.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>

          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Insight</span>
            <p>
              "Mobility and connection are a right for citizens. No one should be left unreachable,
              no matter how remote. That takes vision." (Johnny Harris)
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              When a country treats mobility as a commodity, unprofitable routes disappear. This is
              standard market logic. The people most harmed are those in remote areas: elderly
              residents, children without driving licenses, workers without cars. These are also
              often the people with the least political power to demand change.
            </p>
            <p>
              Switzerland's legal guarantee short-circuits this process. It defines mobility as a
              precondition for citizenship. A citizen who cannot travel cannot participate in
              economic or civic life. The law is not charity. It is a statement about what
              citizenship means.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The Swiss law guarantees transport to year-round villages, not seasonal ones. Why does
              that distinction matter? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Year-round residents are citizens whose lives depend on access. Children attend
                school. Elderly residents reach hospitals. Workers commute to jobs. Seasonal
                villages, by contrast, are vacation properties whose users could choose another
                location. The law draws the line at necessity. It guarantees mobility for those who
                cannot leave, not for those who could. This keeps the cost finite while covering
                every citizen who actually needs the service.
              </p>
            </details>
          </div>
        </section>
      </>,

      <>
        <section className="lrn-section">
          <h2>The Taktfahrplan: A Country Synchronized to a 30-minute Pulse</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Switzerland has 8,000 trains running every day across a small, mountainous country.
              How do you make sure that a passenger arriving at any hub can immediately board a
              connecting train in almost any direction?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You synchronize all trains to arrive and depart at the same moment. Every major hub
                becomes a "pulse point." All trains arrive just before the pulse moment. All trains
                depart just after. A passenger stepping off one train finds every connecting train
                still waiting. The key is not speed but coordination: everyone must follow the same
                clock.
              </p>
            </details>
          </div>

          <p>
            Switzerland runs 8,000 trains per day. It achieves 93.2% on-time arrival, the best in
            Europe. Its passengers ride more rail per person than anyone else in Europe. None of
            this happens by accident. It happens because of a single design principle called the
            Taktfahrplan.
          </p>

          <p>
            Switzerland developed the Taktfahrplan through the 1970s and introduced it in 1982. The
            idea is simple: every major hub pulses at the top and bottom of every hour. Trains flood
            into the hub just before the pulse moment. They depart just after. The pulse repeats
            every 30 minutes, at every hub, forever.
          </p>

          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">How the Pulse Works</span>
            <p>
              At Zurich, trains arrive between 9:53 and 10:00. The pulse moment is 10:00. Trains
              depart between 10:02 and 10:08. Every passenger who arrives on any train has a
              6-minute window to transfer to any other train. Then the whole cycle repeats at 10:30.
            </p>
          </div>

          <p>
            Regional trains and postbuses synchronize outward from major hubs in a hierarchy.
            Zurich, Bern, and Basel anchor the national clock. Smaller hubs mirror the pulse at a
            local level. Buses in mountain valleys time their arrivals to match the pulse at the
            nearest rail station. 77% of all Swiss train trips have a transfer wait of under 10
            minutes.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A 30-minute pulse works better than higher-frequency random scheduling for one
              specific reason: coordination. Random schedules mean passengers must study timetables
              for every connection. A 30-minute pulse means every passenger can internalize one
              rule: "Trains leave at the top and bottom of the hour." This reduces the mental cost
              of travel to near zero.
            </p>
            <p>
              Higher frequency is not always better. If trains run every 10 minutes but they do not
              synchronize, a passenger arriving at a hub might still wait 9 minutes for the
              connection they need. Synchronization beats frequency when the goal is reliable
              transfers across a whole network.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the Taktfahrplan treat network coordination as the primary design goal
              instead of maximum speed? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Maximum speed on one route helps only the passengers on that specific route.
                Coordination across all routes helps every passenger, on every route, at every hub.
                Switzerland chose the approach that benefits the most people. The 2004 Zurich-Bern
                upgrade illustrates this: engineers made the route faster not to achieve a speed
                record, but just fast enough to fit the 30-minute pulse. "Just fast enough" is the
                right target when the clock, not the speed, is what matters.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Taktfahrplan (Switzerland)</span>
              <p>
                Trains across the whole country pulse together every 30 minutes. Arrivals cluster
                just before the pulse. Departures fan out just after. The clock is the design.
                Frequency is moderate, but every transfer works.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Frequency Model (Tokyo Metro)</span>
              <p>
                Tokyo runs trains every 2 to 4 minutes on busy lines. Riders never check a
                timetable. Transfers are not synchronized, but the next train always arrives soon.
                This works in dense cities, not across a whole country.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Closer Cousin (Airline Hubs)</span>
              <p>
                Atlanta and Frankfurt schedule banks of arrivals followed by banks of departures.
                Passengers from many flights connect within a short window. This is the same idea as
                the Taktfahrplan, applied to one airport instead of a whole country.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Counter-Example (NYC Subway)</span>
              <p>
                NYC trains run often but lines do not coordinate transfers. A passenger arriving at
                a transfer station might wait 30 seconds or 12 minutes. Connections are luck, not
                design. The opposite of the Taktfahrplan philosophy.
              </p>
            </div>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>Context</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trains per day</td>
                <td>8,000</td>
                <td>Entire national network</td>
              </tr>
              <tr>
                <td>On-time arrival</td>
                <td>93.2%</td>
                <td>Best in Europe</td>
              </tr>
              <tr>
                <td>Transfers under 10 min</td>
                <td>77%</td>
                <td>Of all Swiss train trips</td>
              </tr>
              <tr>
                <td>Pulse interval</td>
                <td>30 minutes</td>
                <td>At every major hub, forever</td>
              </tr>
              <tr>
                <td>Gotthard Base Tunnel length</td>
                <td>57 km</td>
                <td>Longest railway tunnel on Earth</td>
              </tr>
              <tr>
                <td>Travel speed (Gotthard)</td>
                <td>200 km/h</td>
                <td>Through 2.5 km of rock overhead</td>
              </tr>
              <tr>
                <td>Energy source</td>
                <td>Hydropower</td>
                <td>Nearly zero atmospheric emissions</td>
              </tr>
            </tbody>
          </table>
        </section>
      </>,

      <>
        <section className="lrn-section">
          <h2>The 26-Canton Challenge</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Harris wants to visit all 26 Swiss cantons using only public transit in under 24
              hours. He starts at 5:00 a.m. What will be the hardest part, and when will it happen?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The hardest part will come late at night. Early in the day, frequency is high and
                connections are easy. As midnight approaches, service thins. A single missed
                connection could mean an hour's wait for the next train. Rural northern cantons have
                less service than city cantons. The last few cantons, attempted after midnight,
                carry the highest failure risk.
              </p>
            </details>
          </div>

          <p>
            Harris starts the 26-canton challenge in the Canton of Vaud, a French-speaking region,
            at 5:00 a.m. He has a community journalism platform that connects him with local
            participants. At each leg of the journey, someone who lives in that canton joins him on
            the train.
          </p>

          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Schweizer_Postauto_Wifi.jpg"
              alt="Yellow Swiss PostBus with WiFi, the iconic yellow postbus that reaches villages across Switzerland"
            />
            <figcaption>
              The yellow Swiss PostBus (Postauto) is the surface-level backbone of the Swiss
              mobility guarantee. It reaches valleys and villages where rail infrastructure would be
              too expensive to build.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Schweizer_Postauto_Wifi.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>

          <p>
            The first cantons fall quickly. A missed connection near Geneva costs 30 minutes. By
            early afternoon, more than half the cantons are checked. Rural northern cantons begin to
            loom as service frequencies thin.
          </p>

          <p>
            As evening arrives, service thins. A group of locals helps Harris solve routing puzzles.
            Late at night, locals Josh and Tom guide him north to Schaffhausen and back. Cantons 21,
            22, 23, 24 fall in quick succession.
          </p>

          <p>
            The route passes through Mount Pilatus, home to the world's steepest cog railway. A
            local woman on the train tells Harris she traveled alone by bus to visit her
            grandparents at age 6. This is the system working as intended.
          </p>

          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Insight</span>
            <p>
              A child traveling alone by public transit at age 6 is not an anomaly in Switzerland.
              It is evidence that the system is trusted, reliable, and safe. The Taktfahrplan is not
              just about on-time percentages. It is about a country that built trust into its
              infrastructure.
            </p>
          </div>

          <p>
            Canton 25, Glarus, requires Harris to cross a bridge on foot. He boards the 1:00 a.m.
            train to canton 26. At 1:40 a.m., he crosses the final bridge. All 26 cantons in under
            24 hours, using only public transit.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The challenge succeeds partly because of local participants who know the routing. What
              does this tell you about the Taktfahrplan's actual complexity for an outsider? Form
              your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The Taktfahrplan works seamlessly for people who grew up with it and internalized
                its rhythms. For an outsider without local knowledge, even a perfectly synchronized
                system has a learning curve. The locals on the train are not just company. They are
                human navigational tools, revealing which connections exist that a foreigner would
                never find in a timetable app. The system's elegance becomes accessible only through
                lived familiarity.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The 26-canton challenge succeeds because the system is dense, not because Harris is
              clever. With 8,000 trains a day and a 30-minute pulse, missing one connection costs
              you 30 minutes, not 3 hours. A network this dense produces forgiveness: every error
              has a recovery path within minutes. A sparser network would have made the challenge
              impossible regardless of skill.
            </p>
            <p>
              The locals matter because density alone is not enough. The Taktfahrplan generates
              hundreds of valid routes between any two points. A timetable app shows the fastest
              one. A local knows which routes have buffer time. They know which transfers work in
              practice. They know which detours rescue a missed connection. Dense infrastructure
              plus lived knowledge is what made 26 cantons in 24 hours possible.
            </p>
          </div>
        </section>
      </>,

      <>
        <section className="lrn-section">
          <h2>What Switzerland Got Right</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Harris grows up in America, where freedom means cars and parking lots. He spends time
              in Switzerland, where freedom means seamless transit from any glacier to any city.
              What does the difference between these two models reveal about political values?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Both models claim to maximize freedom. The American model defines freedom as
                individual capacity: you can go anywhere if you own the right vehicle. The Swiss
                model defines freedom as collective infrastructure: you can go anywhere because the
                country builds the system for everyone. One model concentrates mobility among those
                who can afford cars. The other distributes it to everyone, regardless of income.
              </p>
            </details>
          </div>

          <p>
            Harris closes the video with a direct comparison. In America, freedom means individual
            autonomy: cars, parking lots, the capacity to drive wherever you want. In Switzerland,
            freedom means seamless travel between glaciers and cities, between big hubs and remote
            villages, using a system that costs less per trip than a parking space.
          </p>

          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Key Quote</span>
            <p>
              "Freedom in my country is cars and parking lots and individual autonomy to go where
              you want. But when you are under the Alps and you can seamlessly go in between big
              cities and small villages so easily and so pleasantly, that kind of feels like
              freedom, too." (Johnny Harris)
            </p>
          </div>

          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/Clock_and_meeting_point_in_Zurich_main_station.jpg"
              alt="The famous clock and meeting point in Zurich Hauptbahnhof main hall, the nerve center of the Swiss rail network"
            />
            <figcaption>
              The clock at Zurich Hauptbahnhof, the largest hub in the Swiss Taktfahrplan network.
              Trains arrive from across the country before each pulse moment, then depart together
              within minutes.{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Clock_and_meeting_point_in_Zurich_main_station.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </figcaption>
          </figure>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">USA Mobility Model</span>
              <p>
                Car ownership is the primary mobility unit. Highways and parking lots dominate
                infrastructure spending. Freedom means individual capacity to drive. People without
                cars lose access to jobs, healthcare, and social life. Remote communities become
                inaccessible.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Switzerland Mobility Model</span>
              <p>
                Public transit is the primary mobility unit. Tunnels, rail, and buses dominate
                infrastructure investment. Freedom means collective access to a synchronized
                network. Every citizen, regardless of income or location, can travel. Remote
                communities remain connected.
              </p>
            </div>
          </div>

          <p>
            Switzerland achieved this through a chain of decisions that spans 170 years. The 1848
            constitution established government authority over transport. That authority funded the
            Alpine tunnels when markets refused. The tunnels created national mythology around labor
            and engineering. Tourism funded the mountain network. The legal mobility guarantee
            extended access to every community. The Taktfahrplan synchronized the entire system to a
            single pulse. Each step built on the last.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Common Assumption</span>
              <p>
                Swiss transit works because the country is small and rich. Other places cannot copy
                it. The lesson is a special case, not a general principle.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">What Actually Happened</span>
              <p>
                Switzerland succeeded despite being mountainous, multilingual, religiously split,
                and historically poor. The 1848 constitution, the tunnel investments, and the
                Taktfahrplan pulse are the real causes. Wealth came after the infrastructure, not
                before.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The lesson from Switzerland is not "build trains." It is "make infrastructure a
              constitutional commitment and treat mobility as a civic right." The trains are the
              output. The commitment is the cause. Countries that treat transit as a market product
              build it where it is profitable. Countries that treat it as a right build it where it
              is needed.
            </p>
            <p>
              The Swiss system is expensive to run. Subsidizing unprofitable routes costs money. But
              the alternative cost is invisible: communities left behind, workers unable to reach
              jobs, elderly people unable to reach hospitals. Switzerland chose to make the cost
              visible and pay it, rather than hide it in other forms of social spending.
            </p>
          </div>

          <div className="lrn-callout lrn-insight">
            <span className="lrn-callout-label">Insight</span>
            <p>
              "The locals who joined me made this whole thing possible. All those moments on the
              train where they were helping me figure out the alternative routes, all while showing
              me what it means to be a participant in this public transportation system." (Johnny
              Harris)
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The Swiss model required 170 years of compounding decisions, each one building on the
              last. Why is this approach almost impossible to copy quickly in another country? Form
              your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each step in the Swiss chain depends on the step before it. The Taktfahrplan needs a
                dense rail network to synchronize. The dense network needs Alpine tunnels to connect
                language regions. The tunnels need a constitutional clause that authorizes public
                funding. The constitution needs a national consensus that mobility is a shared
                concern. A country cannot skip ahead to the Taktfahrplan. Without the earlier
                layers, the synchronization has nothing to coordinate. Infrastructure systems
                compound: you cannot install the top layer without the supporting structure beneath
                it. Time, not money, is the scarce resource.
              </p>
            </details>
          </div>
        </section>
      </>
    ]
  },

  practice: [
    {
      q: 'Switzerland had 40 km of rail track before the 1848 constitution. What happened to the network in the 40 years after?',
      a: 'Switzerland built the densest rail network in Europe in 40 years. Private companies with British planners laid thousands of kilometers of track across the lowlands. The country went from near zero to the most rail-dense nation in Europe.'
    },
    {
      q: 'Why did Italy and Germany co-finance the first Gotthard Tunnel?',
      a: 'A rail route through the Alps cut travel time from Frankfurt to Milan from days to hours. Germany needed goods moving south and Italy needed goods moving north. Switzerland could not afford the tunnel alone, so the three countries shared costs because they all shared the economic benefit.'
    },
    {
      q: 'What is the Taktfahrplan?',
      a: "Switzerland's synchronized rail timetable. Every major hub pulses at the top and bottom of each hour. Trains arrive just before the pulse moment and depart just after. The 30-minute rhythm repeats at every hub, all day, every day."
    },
    {
      q: "Private rail companies built Switzerland's lowland network quickly after 1848. Why did they stop at the Alps?",
      a: 'Private companies calculate profit. The flat lowlands between cities had high passenger and freight volume, so routes were profitable. The Alps required boring through granite at enormous cost to reach poor farming villages. No investor could recover that cost from ticket revenue, so private companies stopped at the mountain base.'
    },
    {
      q: 'How would the Taktfahrplan principle apply to airline scheduling at a busy hub airport?',
      a: 'You would schedule all incoming flights to land in a 15-minute window before each pulse moment. All departing flights would leave in the 15-minute window after it. Passengers arriving on any flight could transfer to almost any destination without a long wait. The key trade-off is that gates and runways would face intense demand at pulse moments, requiring more infrastructure capacity.'
    },
    {
      q: 'What does the 1848 Swiss constitution clause about transport authority actually mean in practice?',
      a: 'It means the federal government can override market logic when building transport infrastructure. When private companies refused to dig the Alpine tunnels, the government had constitutional authority to fund them anyway. Without this clause, the rail network would have stopped at the foot of the Alps.'
    },
    {
      q: 'How long is the Gotthard Base Tunnel, and how fast does Harris travel through it?',
      a: 'The Gotthard Base Tunnel is 57 km long, making it the longest railway tunnel on Earth. Harris travels through it at 200 km/h with 2.5 km of rock overhead.'
    },
    {
      q: 'Why does a 30-minute pulse work better than higher-frequency random scheduling for transfers?',
      a: 'Coordination beats frequency when transfers are the goal. Random schedules force passengers to study timetables for every connection. A 30-minute pulse lets every passenger internalize one rule: trains leave at the top and bottom of the hour. Even if trains run every 10 minutes without synchronization, a passenger might still wait 9 minutes for a specific connection. The pulse eliminates that uncertainty.'
    },
    {
      q: 'What happened during the Sonderbund civil war, and what did it lead to?',
      a: 'Catholic cantons formed a defensive league (the Sonderbund) against Protestant cantons in 1847. The conflict lasted less than a month. Protestant cantons won. The victory led directly to the 1848 federal constitution, which created Switzerland as a unified nation for the first time.'
    },
    {
      q: 'Explain the virtuous cycle that British tourism created for Swiss mountain infrastructure.',
      a: 'British tourists wanted to reach Alpine summits and were willing to pay. Their demand created revenue that justified cog railways and gondolas no local economy could support. Better infrastructure attracted more tourists, which funded more expansion. The cycle repeated, building a mountain rail network far beyond what any domestic market logic could have produced.'
    },
    {
      q: 'What is the mechanical principle that lets a cog-wheel railway climb a 48% grade?',
      a: 'A toothed rack rail runs down the middle of the track. A gear on the train meshes with the teeth of the rack. The mesh provides physical grip, so the wheels do not slip on steep slopes. Normal rails rely on friction alone, which fails above about a 7% grade. The Pilatusbahn uses this rack-and-gear system to climb Mount Pilatus at a 48% maximum gradient.'
    },
    {
      q: 'Switzerland upgraded the Zurich-Bern route in 2004. What was the goal of the upgrade?',
      a: 'The goal was not maximum speed. The upgrade made the route just fast enough to fit inside the 30-minute Taktfahrplan pulse. Switzerland chose clock compatibility over raw speed. This is the core philosophy: tune for the pulse, not for the record.'
    },
    {
      q: 'What is the legal guarantee Switzerland gives every year-round village?',
      a: 'Every village in Switzerland where people live all year round has a legal right to public transport. The form can be a train, a gondola, or a bus. Switzerland treats mobility as a civic right, not a market commodity. Unprofitable routes receive government subsidy so no community is left unreachable.'
    },
    {
      q: 'How does the Taktfahrplan hierarchy work from national hubs down to mountain villages?',
      a: 'Major city hubs like Zurich, Bern, and Basel anchor the national clock. Their pulses happen at the top and bottom of each hour. Smaller regional hubs mirror these pulses at a local level. Postbuses in mountain valleys time their arrivals to match the nearest rail station pulse. Each layer of the system synchronizes to the layer above it.'
    },
    {
      q: 'What would happen if a major Taktfahrplan hub fell behind schedule by 3 minutes during the pulse window?',
      a: 'All departing trains would face a choice: wait for late arrivals or leave on schedule. If they wait, they become late themselves, pushing delay into every connecting route they serve. This is called a cascade failure. The Taktfahrplan is sensitive to hub delays because the whole system depends on every pulse being on time. Switzerland achieves 93.2% on-time arrival specifically to prevent this cascade.'
    },
    {
      q: "How does Switzerland's founding myth differ from most European nations?",
      a: 'Most European nations build identity around military victory: soldiers and generals as heroes, conquest as the founding story. Switzerland built identity around tunnel construction and engineering labor. Workers who dug through the Alps became national heroes. The founding story centers on technical achievement and connecting isolated communities, not on war.'
    },
    {
      q: 'Napoleon tried to unify Switzerland by military force in 1798 and failed. What does this reveal about national unity?',
      a: 'Military force can impose laws but cannot impose belonging. Swiss communities had four languages, multiple religions, and mountain ranges that blocked daily contact. No army could create shared habits or shared stories across these barriers. Real unity required shared infrastructure, something people used every day that created common experience rather than common fear.'
    },
    {
      q: 'How many cantons does Switzerland have, and how long did the 26-canton challenge take?',
      a: 'Switzerland has 26 cantons. Harris completed the challenge in under 24 hours, starting at 5:00 a.m. and crossing the final bridge at 1:40 a.m. the next day. He used only public transit throughout.'
    },
    {
      q: 'The first Gotthard Tunnel cost 227 million francs and 441 million man-hours. Why did Switzerland take this risk?',
      a: "Switzerland needed access to Europe's rail economy. Its geography, surrounded by mountains, cut it off from trade routes. The tunnel promised to shrink travel time from Frankfurt to Milan from days to hours, turning a barrier into a trade advantage. The risk was enormous for a poor country, but the alternative was economic isolation from a rapidly industrializing continent."
    },
    {
      q: 'What does a 6-year-old Swiss child traveling alone by bus to visit grandparents tell you about the transit system?',
      a: 'It tells you the system is reliable and trustworthy enough for a child to navigate alone. When parents trust a transit system enough to let young children use it unsupervised, the system has achieved something beyond on-time statistics. It has become infrastructure that the whole population trusts as part of daily life.'
    },
    {
      q: 'How does the Swiss model of mobility-as-citizenship compare to the American model of mobility-as-individual-freedom?',
      a: 'The American model makes car ownership the mobility unit. Freedom means the individual capacity to drive. People without cars, whether by age, income, or disability, lose access to most of daily life. The Swiss model makes the public transit network the mobility unit. Freedom means collective access to a synchronized system. Switzerland distributes mobility to all citizens regardless of income or location. Both claim to maximize freedom. Switzerland distributes it; America concentrates it among car owners.'
    },
    {
      q: 'How would you apply the Swiss mobility-as-right principle to rural healthcare access in a car-dependent country?',
      a: 'You would start by identifying which communities currently have no reliable transit to the nearest hospital. Then you would create a legal minimum standard: every resident within X km of a healthcare facility must have scheduled public transit access. Unprofitable routes to hospitals would receive subsidy, just as unprofitable transit routes receive subsidy in Switzerland. The principle is the same: some services are preconditions for citizenship, not market goods.'
    },
    {
      q: 'What were the Lötschberg and Simplon tunnels, and how long did they take to build?',
      a: 'They were the second wave of Swiss Alpine tunnels, built in the early 1900s after the first Gotthard Tunnel. Together they took 93 months to complete and cost 106 lives. They connect the Italian-speaking southern cantons with the French and German-speaking northern cantons. They are the tunnels Harris rides in the video.'
    },
    {
      q: "If the Taktfahrplan is so effective, why don't more countries adopt it?",
      a: "The Taktfahrplan requires the entire network to coordinate. You cannot apply it to one route. Every hub, every regional line, every bus connection must follow the same clock. This demands centralized coordination authority, which is politically difficult in countries where transit is fragmented across private operators or regional governments. Switzerland's 1848 constitutional clause giving the government transport authority is what makes coordination possible. Countries without that authority cannot impose the synchronization the system requires."
    },
    {
      q: 'Swiss rail runs on hydropower. Why does this matter beyond environmental benefit?',
      a: 'Switzerland generates power from gravity-fed mountain water, a renewable resource the country has in abundance. Running rail on hydropower means the transit system is nearly energy-independent from fossil fuel supply chains. When global fuel prices rise, Swiss rail costs do not follow. The energy source matches the geography: the same mountains that required tunneling also supply the power to run the trains through those tunnels.'
    }
  ],

  reference: {
    category: 'Quick Reference',
    title: 'How Switzerland Engineered the Perfect Country',
    sections: [
      <>
        <section className="lrn-section">
          <h2>Glossary</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Taktfahrplan</span>
            <div className="lrn-definition-desc">
              <p>
                Switzerland's synchronized national rail timetable. Every major hub pulses at the
                top and bottom of each hour. Trains arrive just before the pulse and depart just
                after. The 30-minute rhythm repeats at every hub, every day, forever. Developed in
                the 1970s and introduced in 1982.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Canton</span>
            <div className="lrn-definition-desc">
              <p>
                One of Switzerland's 26 administrative regions, each with significant autonomy.
                Switzerland has German, French, Italian, and Romansh-speaking cantons. The federal
                constitution gives the central government authority over transport while cantons
                retain other powers.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Cog-wheel railway (rack railway)</span>
            <div className="lrn-definition-desc">
              <p>
                A mountain railway. A toothed rack rail meshes with a gear on the train. This grip
                lets it climb slopes too steep for normal rail. The Pilatusbahn on Mount Pilatus has
                a maximum gradient of 48% and is the steepest rack railway in the world. The
                Jungfraujoch railway uses eight engines and runs inside the Eiger.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Gotthard Base Tunnel</span>
            <div className="lrn-definition-desc">
              <p>
                The world's longest railway tunnel at 57 km, running under the Swiss Alps. Opened in
                2016. Trains travel through it at 200 km/h with 2.5 km of rock overhead. It
                completes the route begun by the first Gotthard Tunnel of 1882.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Lötschberg Tunnel</span>
            <div className="lrn-definition-desc">
              <p>
                One of the second-wave Swiss Alpine tunnels, completed in the early 1900s alongside
                the Simplon Tunnel. Together they took 93 months to build and cost 106 lives. They
                connect Italian, French, and German-speaking cantons through the Alps.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Sonderbund</span>
            <div className="lrn-definition-desc">
              <p>
                The defensive league of seven Catholic cantons that triggered the 1847 Swiss civil
                war. Protestant cantons defeated the Sonderbund in less than a month. The victory
                led directly to the 1848 federal constitution and Swiss national unity.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Postbus (Postauto)</span>
            <div className="lrn-definition-desc">
              <p>
                The yellow Swiss postal bus network that extends transit access to valleys and
                villages where rail infrastructure would be too expensive to build. Postbuses
                synchronize to the Taktfahrplan pulse at the nearest rail hub. They are part of
                Switzerland's legal mobility guarantee to all year-round settlements.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Jungfraujoch</span>
            <div className="lrn-definition-desc">
              <p>
                A high-altitude saddle in the Bernese Alps reached by the Jungfraubahn cog railway.
                The terminal station sits at 3,454 m, the highest railway station in Europe. Eight
                engines pull trains through a tunnel carved inside the Eiger. Harris visits with
                local guide Nick during the video.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Hub-and-spoke pulse network</span>
            <div className="lrn-definition-desc">
              <p>
                The Taktfahrplan's structural design. Major city hubs (Zurich, Bern, Basel) anchor
                the national clock. Regional hubs mirror the pulse locally. Postbuses in mountain
                valleys synchronize to regional hubs. Each layer aligns to the layer above it,
                creating a recursive hierarchy of synchronized connections.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Mobility as citizenship</span>
            <div className="lrn-definition-desc">
              <p>
                Switzerland's constitutional principle that every year-round village has a legal
                right to public transport access. Treats mobility as a precondition for
                participation in civic and economic life, not as a market service that disappears
                when routes become unprofitable.
              </p>
            </div>
          </div>
        </section>
      </>,

      <>
        <section className="lrn-section">
          <h2>Key Statistics</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>When This Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trains per day</td>
                <td>8,000</td>
                <td>When comparing Swiss transit density with other European countries</td>
              </tr>
              <tr>
                <td>On-time arrival rate</td>
                <td>93.2%</td>
                <td>
                  When explaining why Taktfahrplan synchronization requires near-perfect punctuality
                </td>
              </tr>
              <tr>
                <td>Transfers under 10 minutes</td>
                <td>77%</td>
                <td>
                  When measuring whether the 30-minute pulse actually delivers seamless connections
                </td>
              </tr>
              <tr>
                <td>Taktfahrplan pulse interval</td>
                <td>30 minutes</td>
                <td>When explaining why passengers can memorize the schedule with one rule</td>
              </tr>
              <tr>
                <td>Gotthard Base Tunnel length</td>
                <td>57 km</td>
                <td>When discussing the scale of Swiss tunnel engineering</td>
              </tr>
              <tr>
                <td>Travel speed in Gotthard tunnel</td>
                <td>200 km/h</td>
                <td>When contrasting modern speed with the 1882 original tunnel</td>
              </tr>
              <tr>
                <td>Rock depth overhead in Gotthard</td>
                <td>2.5 km</td>
                <td>When describing the engineering scale of the world's longest tunnel</td>
              </tr>
              <tr>
                <td>First Gotthard Tunnel cost</td>
                <td>227 million francs</td>
                <td>When explaining the financial scale of 1880s tunnel construction</td>
              </tr>
              <tr>
                <td>First Gotthard Tunnel labor</td>
                <td>441 million man-hours</td>
                <td>When explaining why tunnel-building became Swiss national mythology</td>
              </tr>
              <tr>
                <td>Deaths in second tunnel wave</td>
                <td>106</td>
                <td>When discussing the human cost of the Lötschberg and Simplon tunnels</td>
              </tr>
              <tr>
                <td>Construction time, second wave</td>
                <td>93 months</td>
                <td>When comparing construction timelines across Alpine tunnel projects</td>
              </tr>
              <tr>
                <td>First Gotthard Tunnel length</td>
                <td>15 km</td>
                <td>When contrasting 1882 engineering scale with the 2016 Gotthard Base Tunnel</td>
              </tr>
              <tr>
                <td>Swiss administrative cantons</td>
                <td>26</td>
                <td>When discussing federal structure and Harris's 24-hour challenge</td>
              </tr>
              <tr>
                <td>Challenge duration</td>
                <td>Under 24 hours</td>
                <td>
                  When demonstrating what the Taktfahrplan makes possible for a single traveler
                </td>
              </tr>
              <tr>
                <td>Jungfraujoch station altitude</td>
                <td>3,454 m</td>
                <td>When discussing extreme mountain rail infrastructure</td>
              </tr>
              <tr>
                <td>Engines on Jungfraujoch train</td>
                <td>8</td>
                <td>When explaining the power required to climb through the Eiger</td>
              </tr>
              <tr>
                <td>Swiss rail before 1848</td>
                <td>40 km</td>
                <td>When showing how fast the post-constitution rail boom actually was</td>
              </tr>
              <tr>
                <td>Swiss language groups</td>
                <td>4</td>
                <td>
                  When explaining why geographic unification required engineering, not politics
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </>,

      <>
        <section className="lrn-section">
          <h2>Timeline</h2>

          <div className="lrn-timeline">
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1798</span>
              <p className="lrn-timeline-content">
                Napoleon invades and imposes a unified republic. It fails within years.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1847</span>
              <p className="lrn-timeline-content">
                Sonderbund civil war. Catholic cantons defeated by Protestant cantons in under a
                month.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1848</span>
              <p className="lrn-timeline-content">
                Federal constitution. Switzerland unifies. Government gains transport authority.
                Rail boom begins with British planners.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1880s</span>
              <p className="lrn-timeline-content">
                Densest rail network in Europe built in 40 years. Private companies stall at the
                Alps.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1882</span>
              <p className="lrn-timeline-content">
                First Gotthard Tunnel completed. 15 km through granite. Frankfurt-to-Milan travel
                drops from days to hours. 227 million francs, 441 million man-hours, dozens of
                deaths.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">Early 1900s</span>
              <p className="lrn-timeline-content">
                Lötschberg and Simplon tunnels completed in 93 months. 106 deaths. German, French,
                and Italian cantons connected through the Alps.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">1970s to 1982</span>
              <p className="lrn-timeline-content">
                Taktfahrplan developed and introduced. The 30-minute pulse synchronizes every hub in
                Switzerland.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">2004</span>
              <p className="lrn-timeline-content">
                Zurich-Bern route upgraded to fit the Taktfahrplan pulse exactly. Speed is not the
                goal. Pulse compatibility is.
              </p>
            </div>
            <div className="lrn-timeline-item">
              <div className="lrn-timeline-marker" />
              <span className="lrn-timeline-title">2016</span>
              <p className="lrn-timeline-content">
                Gotthard Base Tunnel opens. 57 km, trains at 200 km/h, longest railway tunnel on
                Earth. Switzerland's engineering mythology reaches its peak.
              </p>
            </div>
          </div>
        </section>
      </>,

      <>
        <section className="lrn-section">
          <h2>Contrasting Pairs</h2>

          <h3>Switzerland vs USA: What Mobility Means</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Switzerland</span>
              <p>
                Public transit is the primary mobility unit. Freedom means seamless access to a
                synchronized network. Every citizen can travel regardless of income. Remote
                communities remain connected. Infrastructure investment goes into tunnels, rail, and
                buses.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">USA</span>
              <p>
                Car ownership is the primary mobility unit. Freedom means individual capacity to
                drive. People without cars lose access to daily life. Remote communities become
                unreachable. Infrastructure investment goes into highways and parking.
              </p>
            </div>
          </div>

          <h3>Market Logic vs Government Mandate: Building Alpine Tunnels</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Market Logic</span>
              <p>
                Private companies build profitable routes. They connect cities where volume is high.
                They stop at the Alps because tunneling costs outweigh ticket revenue from poor
                mountain villages. The Alps remain a barrier.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Government Mandate</span>
              <p>
                The 1848 constitution authorizes federal transport spending. The government
                subsidizes tunnels that markets refuse to build. Italy and Germany co-finance the
                Gotthard because trade benefits are shared. The Alps become a route.
              </p>
            </div>
          </div>

          <h3>Speed Optimization vs Pulse Optimization</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Speed Optimization</span>
              <p>
                High-speed rail maximizes velocity on individual routes. A bullet train may cut
                travel time dramatically. Passengers on that specific route benefit. Connections
                across the network remain unsynchronized.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Pulse Optimization</span>
              <p>
                Switzerland makes routes just fast enough to fit the 30-minute clock. The 2004
                Zurich-Bern upgrade targeted pulse compatibility, not speed. Every passenger on
                every route benefits from synchronized connections. The network as a whole wins.
              </p>
            </div>
          </div>

          <h3>Pre-Rail Switzerland vs Post-Rail Switzerland</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Before Rail</span>
              <p>
                Four language groups separated by mountains and religion. Napoleon could not unify
                them by force. Each valley had its own trade networks and loyalties. No shared
                infrastructure, no shared identity.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">After Rail and Tunnels</span>
              <p>
                Germans, French speakers, and Italians share a single rail network and a single
                clock. Tunnel construction became the founding mythology. Engineers replaced
                soldiers as national heroes. Infrastructure created the unity that politics and
                armies could not.
              </p>
            </div>
          </div>
        </section>
      </>
    ]
  },

  customCss: null
}

export default function SwitzerlandEngineeringContent() {
  return <LearningTemplate config={config} />
}
