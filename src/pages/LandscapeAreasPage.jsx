import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { site } from "../data/site";

const applications = [
  {
    title: "Garden connections",
    text: "Plan paths and usable surface areas around planting beds, gates, and the outdoor spaces you visit regularly.",
    to: "/walkways-pathways",
    label: "Explore pathway planning"
  },
  {
    title: "Coordinated vertical details",
    text: "Discuss selected Resin Wall applications for suitable walls or step details. A decorative finish is not a replacement for structural assessment.",
    to: "/services/resin-wall",
    label: "Explore Resin Wall"
  },
  {
    title: "Decorative glow accents",
    text: "Consider selected Glow Rock details in borders or coordinated features without treating decorative glow as a substitute for required lighting.",
    to: "/services/glow-rock",
    label: "Explore Glow Rock"
  }
];

const systems = [
  {
    title: "Resin Bound surfaces",
    text: "Consider the finish for suitable horizontal areas. Confirm the selected system, preparation requirements, and intended use.",
    to: "/services/resin-bound"
  },
  {
    title: "Rock Crete foundations",
    text: "Discuss foundation suitability where the project needs a base solution. It is not interchangeable with the finished surface.",
    to: "/services/rock-crete"
  }
];

const faqs = [
  {
    question: "Can you coordinate paths, borders, and wall details?",
    answer: "Yes, these can be discussed as part of a landscape-area project. Each horizontal or vertical application needs its own suitability assessment and appropriate product selection."
  },
  {
    question: "Will surfacing resolve garden runoff?",
    answer: "Do not assume so. Runoff, grading, planting-bed interfaces, and the underlying construction need assessment. Surface permeability alone does not establish the drainage performance of the complete site."
  },
  {
    question: "What should I consider for seasonal cleanup?",
    answer: "Discuss leaf collection, soil and mulch movement, cleaning access, and winter-maintenance practices. Request instructions for the exact products installed."
  },
  {
    question: "Can Resin Wall repair a failing retaining wall?",
    answer: "A decorative vertical finish should not be presented as a remedy for structural failure. The wall’s condition and the proposed application must be assessed separately."
  }
];

export default function LandscapeAreasPage() {
  return (
    <div className="application-page landscape-page">
      <Helmet>
        <title>Wisconsin Landscape Surfacing | Elevated Resin Creations</title>
        <meta
          name="description"
          content="Plan coordinated Wisconsin landscape surfaces, paths, borders, and selected vertical details. Discuss drainage, planting-bed interfaces, and seasonal care with Elevated Resin Creations."
        />
        <link rel="canonical" href={`${site.domain}/landscape-areas`} />
      </Helmet>

      <section className="landscape-page__hero">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Wisconsin Landscape Projects</Eyebrow>
            <h1>Bring paths, planting beds, and surface details into one plan.</h1>
            <p>
              Plan the connections between your garden and the spaces you use.
              Assess borders, runoff, existing surfaces, and seasonal cleanup
              before choosing a coordinated surface or decorative feature.
            </p>
            <div className="application-page__actions">
              <QuoteCTA label="Plan My Landscape Surface Project" />
            </div>
            <p className="application-page__service-area">{site.serviceArea}</p>
          </div>
          <figure className="application-page__photo landscape-page__hero-photo">
            <img
              src="/images/home-resin-bound-landscape-path.png"
              alt="Curved pathway integrated with clipped hedges and landscaped planting beds."
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>Approved landscape-path installation example.</figcaption>
          </figure>
        </Container>
      </section>

      <section className="section landscape-page__applications">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Application Possibilities</Eyebrow>
            <h2>Choose the role of each feature before choosing its product.</h2>
          </div>
          <div className="application-page__cards">
            {applications.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={item.to}>{item.label} →</Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section landscape-page__borders">
        <Container className="application-page__split">
          <figure className="application-page__photo">
            <img
              src="/images/resin-wall-hero.jpg"
              alt="Retaining wall beside lawn and landscaped planting areas."
              loading="lazy"
              decoding="async"
            />
            <figcaption>A wall and planting-area interface example.</figcaption>
          </figure>
          <div className="application-page__heading">
            <Eyebrow>Borders and Transitions</Eyebrow>
            <h2>Consider how the surface meets the living landscape.</h2>
            <p>
              Discuss planting-bed edges, soil and mulch movement, adjoining
              grass, gates, and changes in level. Define which features are
              included and where existing materials will remain.
            </p>
            <p>
              Vertical details require their own assessment. Do not assume that
              a product suitable for a path is also suitable for a wall,
              step face, or every landscape feature.
            </p>
          </div>
        </Container>
      </section>

      <section className="section landscape-page__care">
        <Container className="landscape-page__care-layout">
          <div className="application-page__heading">
            <Eyebrow>Drainage and Seasonal Maintenance</Eyebrow>
            <h2>Plan runoff and cleanup around the actual application.</h2>
            <p>
              Identify where rain and snowmelt travel, where leaves collect,
              and how beds are maintained. Confirm surface and foundation
              requirements together instead of assuming every resin application
              is permeable or maintenance-free.
            </p>
            <p>
              Request cleaning and winter-care instructions for each selected
              product. Drainage improvements and performance advantages require
              evidence for the proposed construction.
            </p>
          </div>
          <div className="landscape-page__system-list">
            {systems.map((system) => (
              <article key={system.title}>
                <h3>{system.title}</h3>
                <p>{system.text}</p>
                <Link to={system.to}>View system information →</Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section landscape-page__gallery">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Landscape Detail Examples</Eyebrow>
            <h2>Explore decorative boundaries and coordinated features.</h2>
            <p>These approved images are not identified as Wisconsin installations.</p>
          </div>
          <div className="landscape-page__gallery-grid">
            <figure className="application-page__photo">
              <img
                src="/images/home-gallery-glow-rock-edge.jpeg"
                alt="Pink glowing border detail beside a landscaped stone bed."
                loading="lazy"
                decoding="async"
              />
              <figcaption>A decorative glow-border example.</figcaption>
            </figure>
            <figure className="application-page__photo">
              <img
                src="/images/resin-wall-introduction-closeup.jpg"
                alt="Close view of a textured retaining-wall face."
                loading="lazy"
                decoding="async"
              />
              <figcaption>A vertical landscape-detail example.</figcaption>
            </figure>
          </div>
          <nav className="application-page__links" aria-label="Related landscape projects">
            <Link to="/patios">Outdoor-living patios →</Link>
            <Link to="/pool-decks">Pool surrounds →</Link>
            <Link to="/projects">Project gallery →</Link>
          </nav>
          <div className="application-page__faqs">
            <h2>Landscape project questions</h2>
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
            <Eyebrow>A Coordinated Landscape Scope</Eyebrow>
            <h2>Show us the areas you want to bring together.</h2>
            <p>Share photographs, your location, approximate areas, and the paths, borders, or features you have in mind.</p>
          </div>
          <div className="application-page__actions">
            <QuoteCTA label="Discuss My Landscape Project" />
            <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
          </div>
        </Container>
      </section>
    </div>
  );
}