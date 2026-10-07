import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { site } from "../data/site";

const connections = [
  {
    title: "Front-door approaches",
    text: "Plan the route from parking to the entrance, including door thresholds, steps, and places where people turn or pause."
  },
  {
    title: "Garden and side-yard routes",
    text: "Consider the connections between gates, patios, planting beds, and frequently used outdoor spaces."
  },
  {
    title: "Shared everyday access",
    text: "Discuss walking aids, strollers, equipment, and other access needs so width and transitions are considered during planning."
  }
];

const transitionQuestions = [
  "Where does the route meet an existing driveway, patio, or doorway?",
  "Are there steps, uneven edges, or changes in level to assess?",
  "What width and turning space does the intended use require?",
  "How will borders meet planting beds, grass, and adjoining surfaces?"
];

const faqs = [
  {
    question: "Can the design account for mobility needs?",
    answer: "Yes, discuss your access needs during planning so route width, levels, thresholds, and transitions can be assessed. This page does not claim that a proposed surface or layout is automatically compliant with accessibility requirements."
  },
  {
    question: "Can Glow Rock be used along a pathway?",
    answer: "Selected Glow Rock options can be considered as decorative route or border details. They are not presented as a substitute for required lighting or a guarantee of nighttime safety."
  },
  {
    question: "Will a new pathway stop puddles?",
    answer: "Not automatically. The surface, grading, underlying construction, and surrounding runoff need to be assessed together."
  },
  {
    question: "What winter-maintenance guidance should I request?",
    answer: "Ask for the selected system’s instructions for snow-clearing equipment, deicers, and cleaning. No surface is described here as ice-proof or slip-proof."
  }
];

export default function WalkwaysPathwaysPage() {
  return (
    <div className="application-page walkways-page">
      <Helmet>
        <title>Wisconsin Walkways & Pathways | Elevated Resin Creations</title>
        <meta
          name="description"
          content="Plan Wisconsin walkways and pathways around entrances, transitions, drainage, and winter maintenance. Explore suitable Resin Bound, Rock Crete, and Glow Rock options."
        />
        <link rel="canonical" href={`${site.domain}/walkways-pathways`} />
      </Helmet>

      <section className="walkways-page__hero">
        <Container className="application-page__split">
          <figure className="application-page__photo">
            <img
              src="/images/home-resin-bound-landscape-path.png"
              alt="Curved light-coloured pathway through landscaped garden beds."
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>Approved pathway example; no Wisconsin location claimed.</figcaption>
          </figure>
          <div className="application-page__heading">
            <Eyebrow>Wisconsin Walking Routes</Eyebrow>
            <h1>Connect the places you use, with the transitions considered.</h1>
            <p>
              A pathway project starts with where people need to go. Plan
              entrances, garden connections, and side-yard routes around
              everyday use, changing levels, rain and snowmelt, and winter care.
            </p>
            <div className="application-page__actions">
              <QuoteCTA label="Plan My Walkway Route" />
            </div>
            <p className="application-page__service-area">{site.serviceArea}</p>
          </div>
        </Container>
      </section>

      <section className="section walkways-page__connections">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Entrances and Connections</Eyebrow>
            <h2>Map the route before selecting the material.</h2>
          </div>
          <div className="walkways-page__route-list">
            {connections.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section walkways-page__transitions">
        <Container className="application-page__split">
          <div className="application-page__heading">
            <Eyebrow>Surface and Transition Details</Eyebrow>
            <h2>The edges and level changes deserve their own assessment.</h2>
            <p>
              An accessibility-conscious design considers the complete route,
              not just the finish. Tell us who uses it and what needs to move
              along it; specific compliance requirements need their own verification.
            </p>
          </div>
          <ul className="application-page__checklist">
            {transitionQuestions.map((question) => <li key={question}>{question}</li>)}
          </ul>
        </Container>
      </section>

      <section className="section walkways-page__weather">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Rain, Snowmelt, and Winter Care</Eyebrow>
            <h2>Follow the water as well as the walking route.</h2>
            <p>
              Show us where water crosses or collects along the route.
              Surface selection, grading, and the construction beneath it
              must be considered together. A permeable finish alone does not
              guarantee a permeable pathway assembly.
            </p>
            <p>
              Discuss snow-clearing access and request product-specific
              maintenance guidance. Do not assume that a new surface eliminates
              ice or the need for winter care.
            </p>
          </div>
          <nav className="application-page__links" aria-label="Pathway product information">
            <Link to="/services/rock-crete">Foundation options: Rock Crete →</Link>
            <Link to="/services/resin-bound">Surface options: Resin Bound →</Link>
            <Link to="/services/glow-rock">Decorative options: Glow Rock →</Link>
          </nav>
        </Container>
      </section>

      <section className="section walkways-page__examples">
        <Container className="walkways-page__examples-layout">
          <div className="application-page__heading">
            <Eyebrow>Pathway Design Examples</Eyebrow>
            <h2>Explore a connected path and a decorative border detail.</h2>
            <p>
              Approved installation photographs are shown without local-project
              claims. Glow details are decorative examples, not verified
              safety or illumination-performance evidence.
            </p>
            <nav className="application-page__links" aria-label="Related pathway projects">
              <Link to="/driveways">Driveway connections →</Link>
              <Link to="/landscape-areas">Landscape areas →</Link>
            </nav>
          </div>
          <figure className="application-page__photo">
            <img
              src="/images/glow-rock-path-border-night.webp"
              alt="Blue-glowing curved border around a paved residential entrance route at night."
              loading="lazy"
              decoding="async"
            />
            <figcaption>A decorative glowing entrance-border example.</figcaption>
          </figure>
          <div className="application-page__faqs walkways-page__faq-panel">
            <h2>Questions about your route</h2>
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
            <Eyebrow>Start With the Route</Eyebrow>
            <h2>Show us what your pathway needs to connect.</h2>
            <p>Send route photographs, approximate dimensions, your location, and access requirements.</p>
          </div>
          <div className="application-page__actions">
            <QuoteCTA label="Discuss My Pathway Project" />
            <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
          </div>
        </Container>
      </section>
    </div>
  );
}