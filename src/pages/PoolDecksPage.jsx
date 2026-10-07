import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { site } from "../data/site";

const wetAreaQuestions = [
  {
    title: "Wet-foot traffic",
    text: "Request traction information for the exact proposed finish and its intended wet-area use. No surface is presented here as slip-proof."
  },
  {
    title: "Pool chemicals and cleaning",
    text: "Share the products and cleaning practices used around your pool. Compatibility needs confirmation for the selected system."
  },
  {
    title: "Opening, closing, and winter exposure",
    text: "Discuss cover equipment, seasonal access, snow clearing, and the care requirements of the installed finish."
  }
];

const details = [
  {
    title: "Pool edges",
    text: "Identify coping, steps, drains, and existing boundaries so the resurfacing scope clearly states what is included."
  },
  {
    title: "Connected surfaces",
    text: "Consider doors, seating areas, equipment access, and adjoining paths without assuming every area needs the same product."
  }
];

const faqs = [
  {
    question: "Is a resin pool deck slip-proof?",
    answer: "No slip-proof claim is made. Ask for documented wet-traction characteristics for the specific product, finish, and installation being proposed."
  },
  {
    question: "Will water drain through my pool surround?",
    answer: "That depends on the selected surface system and the construction beneath it. Confirm how water will be managed across the complete pool area; a permeable finish alone does not guarantee permeable underlying construction."
  },
  {
    question: "Can the existing pool deck remain?",
    answer: "Its condition and suitability must be assessed. Movement, damaged sections, thresholds, pool edges, and drainage all need consideration before a resurfacing recommendation."
  },
  {
    question: "Can Glow Rock be added around the pool?",
    answer: "Selected decorative options can be discussed. The exact product, placement, wet-area suitability, and care requirements must be confirmed for the pool project."
  },
  {
    question: "How do I plan work around pool opening or closing?",
    answer: "Tell us your preferred dates and access requirements. Installation and reopening depend on preparation, weather, the selected system, and curing guidance."
  }
];

export default function PoolDecksPage() {
  return (
    <div className="application-page pool-decks-page">
      <Helmet>
        <title>Wisconsin Pool Deck Resurfacing | Elevated Resin Creations</title>
        <meta
          name="description"
          content="Plan pool deck resurfacing with wet-area use, pool edges, drainage, chemicals, and Wisconsin seasonal care in mind. Discuss your pool surround with Elevated Resin Creations."
        />
        <link rel="canonical" href={`${site.domain}/pool-decks`} />
      </Helmet>

      <section className="pool-decks-page__hero">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Wisconsin Pool Surrounds</Eyebrow>
            <h1>Plan the surface around the pool—not just its appearance.</h1>
            <p>
              Wet-foot traffic, pool edges, cleaning routines, and seasonal
              opening and closing all belong in the project assessment.
              Explore a coordinated pool surround with system suitability
              established before the finish is selected.
            </p>
            <div className="application-page__actions">
              <QuoteCTA label="Request a Pool-Surround Consultation" />
            </div>
            <p className="application-page__service-area">{site.serviceArea}</p>
          </div>
          <figure className="application-page__photo pool-decks-page__hero-photo">
            <img
              src="/images/home-featured-resin-pool-surround.jpg"
              alt="Residential swimming pool with a light-coloured surrounding surface."
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>Approved pool-surround installation example.</figcaption>
          </figure>
        </Container>
      </section>

      <section className="section pool-decks-page__wet">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Wet-Area Considerations</Eyebrow>
            <h2>Confirm suitability for the way your pool area is used.</h2>
          </div>
          <div className="application-page__cards">
            {wetAreaQuestions.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section pool-decks-page__details">
        <Container className="application-page__split">
          <figure className="application-page__photo">
            <img
              src="/images/resin-bound-project-pool.jpg"
              alt="Pool surround following the curved edges of a residential pool and spa."
              loading="lazy"
              decoding="async"
            />
            <figcaption>Curved pool and spa edge details.</figcaption>
          </figure>
          <div className="application-page__heading">
            <Eyebrow>Finish and Edge Details</Eyebrow>
            <h2>Resolve the boundaries before choosing the finish.</h2>
            {details.map((item) => (
              <div className="application-page__text-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section pool-decks-page__systems">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Drainage and Product Suitability</Eyebrow>
            <h2>Assess the finish, foundation, and water-management approach together.</h2>
            <p>
              Discuss Resin Bound as a surface option, Rock Crete where an
              appropriate foundation solution is required, and selected Glow
              Rock details as decorative additions. These serve different
              purposes and are not interchangeable.
            </p>
            <p>
              Resurfacing does not correct structural failure. Any proposed
              permeability, chemical compatibility, or traction advantage
              requires evidence for the actual system and pool application.
            </p>
          </div>
          <nav className="application-page__links" aria-label="Pool project systems">
            <Link to="/services/resin-bound">Resin Bound →</Link>
            <Link to="/services/rock-crete">Rock Crete →</Link>
            <Link to="/services/glow-rock">Glow Rock →</Link>
          </nav>
        </Container>
      </section>

      <section className="section pool-decks-page__gallery">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Pool-Area Examples</Eyebrow>
            <h2>Explore different pool-surround settings.</h2>
            <p>These approved installation examples are not identified as Wisconsin projects.</p>
          </div>
          <div className="application-page__gallery">
            <figure className="application-page__photo">
              <img
                src="/images/home-gallery-pool-surround-classic.jpg"
                alt="Light-coloured surface surrounding a curved outdoor swimming pool."
                loading="lazy"
                decoding="async"
              />
              <figcaption>A curved pool-surround setting.</figcaption>
            </figure>
            <figure className="application-page__photo">
              <img
                src="/images/home-gallery-pool-surround-landscape.JPG"
                alt="Pool surround beside landscaped beds and flowering plants."
                loading="lazy"
                decoding="async"
              />
              <figcaption>A pool surround integrated with garden beds.</figcaption>
            </figure>
          </div>
          <nav className="application-page__links" aria-label="Related pool projects">
            <Link to="/patios">Connected patio projects →</Link>
            <Link to="/landscape-areas">Landscape integration →</Link>
          </nav>
        </Container>
      </section>

      <section className="section pool-decks-page__questions">
        <Container>
          <div className="application-page__faqs">
            <h2>Pool-specific project questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="section application-page__cta">
        <Container className="application-page__cta-layout">
          <div className="application-page__heading">
            <Eyebrow>Plan Your Pool Surround</Eyebrow>
            <h2>Bring the whole pool area into the assessment.</h2>
            <p>Share your location, pool-area photos, approximate surface area, and seasonal schedule.</p>
          </div>
          <div className="application-page__actions">
            <QuoteCTA label="Discuss My Pool Deck" />
            <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
          </div>
        </Container>
      </section>
    </div>
  );
}