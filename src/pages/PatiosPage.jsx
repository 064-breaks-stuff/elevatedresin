import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { site } from "../data/site";

const designIdeas = [
  {
    title: "Make room for gathering",
    text: "Plan the table, seating, grill, and routes between them before choosing a finish. Tell us how you want to use your patio during Wisconsin’s outdoor-living season."
  },
  {
    title: "Connect the house and garden",
    text: "Consider door thresholds, adjoining paths, planting beds, and any steps as part of the project—not details to resolve after the surface is installed."
  },
  {
    title: "Choose a coordinated finish",
    text: "Explore Resin Bound finishes, discuss foundation requirements, and consider selected Glow Rock accents where they suit your outdoor-living plans."
  }
];

const seasonalQuestions = [
  "Where does rain or snowmelt collect around the patio?",
  "What furniture, grill, or other equipment will use the surface?",
  "How do you currently handle spring cleanup and winter storage?",
  "What access needs to remain available during the project?"
];

const planningSteps = [
  {
    title: "Share the existing space",
    text: "Send your location, approximate patio area, photographs, and the outdoor-living changes you want."
  },
  {
    title: "Assess the construction",
    text: "Discuss the existing surface, movement, thresholds, drainage, and whether preparation or foundation work is required."
  },
  {
    title: "Agree on scope and access",
    text: "Confirm the finish, boundaries, work area, scheduling conditions, and system-specific return-to-use requirements."
  }
];

const faqs = [
  {
    question: "Can you resurface an existing patio?",
    answer: "Possibly, following assessment. The condition of the existing construction and the selected system’s requirements determine whether resurfacing is appropriate. Covering a surface is not a remedy for structural failure."
  },
  {
    question: "How should I choose a finish for patio furniture?",
    answer: "Discuss furniture, movement, cleaning, and the appearance you want during the consultation. Request care guidance for the exact finish rather than assuming every resin application has the same requirements."
  },
  {
    question: "Can Glow Rock be included?",
    answer: "Selected Glow Rock options can be discussed as decorative accents within a larger patio project. Suitability and the specific product should be confirmed before inclusion in the scope."
  },
  {
    question: "When can the patio be used again?",
    answer: "Request a project-specific schedule and the installed system’s return-to-use guidance. Preparation, weather, and curing requirements must be confirmed; no fixed installation or reopening time is promised here."
  }
];

export default function PatiosPage() {
  return (
    <div className="application-page patios-page">
      <Helmet>
        <title>Wisconsin Patio Resurfacing | Elevated Resin Creations</title>
        <meta
          name="description"
          content="Plan a Wisconsin patio around outdoor living, finish choices, drainage, and seasonal upkeep. Elevated Resin Creations serves Menasha and qualifying Wisconsin projects."
        />
        <link rel="canonical" href={`${site.domain}/patios`} />
      </Helmet>

      <section className="patios-page__hero">
        <Container className="application-page__split">
          <div className="application-page__heading">
            <Eyebrow>Wisconsin Outdoor Living</Eyebrow>
            <h1>A patio planned around the way you spend time outside.</h1>
            <p>
              From quiet mornings to summer gatherings, your patio should connect
              the spaces you use. Start with the layout, existing construction,
              and seasonal care requirements—then explore the finish.
            </p>
            <div className="application-page__actions">
              <QuoteCTA label="Plan My Patio Consultation" />
              <a href="#patio-design">Explore patio possibilities</a>
            </div>
            <p className="application-page__service-area">{site.serviceArea}</p>
          </div>
          <figure className="application-page__photo">
            <img
              src="/images/resin-bound-project-patio.jpg"
              alt="Light-coloured patio with outdoor seating beside a screened residential area."
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>Approved patio installation example.</figcaption>
          </figure>
        </Container>
      </section>

      <section id="patio-design" className="section patios-page__design">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Design Around Everyday Use</Eyebrow>
            <h2>Start with the gathering space, not just the surface.</h2>
          </div>
          <div className="application-page__cards">
            {designIdeas.map((idea) => (
              <article key={idea.title}>
                <h3>{idea.title}</h3>
                <p>{idea.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section patios-page__seasonal">
        <Container className="application-page__split">
          <div className="application-page__heading">
            <Eyebrow>Seasonal Surface Planning</Eyebrow>
            <h2>Include rain, snowmelt, and spring cleanup in the conversation.</h2>
            <p>
              The proposed finish and underlying construction need to work with
              your patio’s water-management approach. Ask for maintenance
              instructions specific to the selected system.
            </p>
          </div>
          <ul className="application-page__checklist">
            {seasonalQuestions.map((question) => <li key={question}>{question}</li>)}
          </ul>
        </Container>
      </section>

      <section className="section patios-page__gallery">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Finish Examples</Eyebrow>
            <h2>Two different outdoor-living settings.</h2>
            <p>
              Approved installation photographs, not identified as Wisconsin
              projects. Your finish and construction will be selected for your site.
            </p>
          </div>
          <div className="application-page__gallery">
            <figure className="application-page__photo">
              <img
                src="/images/resin-bound-project-screened-patio.jpg"
                alt="Speckled surface inside a screened residential patio."
                loading="lazy"
                decoding="async"
              />
              <figcaption>A screened patio setting.</figcaption>
            </figure>
            <figure className="application-page__photo">
              <img
                src="/images/home-hero-resin-bound.webp"
                alt="Aggregate patio surface in a furnished residential outdoor living area."
                loading="lazy"
                decoding="async"
              />
              <figcaption>A furnished outdoor-living setting.</figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="section patios-page__planning">
        <Container>
          <div className="application-page__heading">
            <Eyebrow>Installation Planning</Eyebrow>
            <h2>Know what the project includes before work begins.</h2>
          </div>
          <ol className="application-page__steps">
            {planningSteps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <nav className="application-page__links" aria-label="Patio system information">
            <Link to="/services/resin-bound">Resin Bound surfaces →</Link>
            <Link to="/services/rock-crete">Rock Crete foundations →</Link>
            <Link to="/services/glow-rock">Selected Glow Rock options →</Link>
          </nav>
          <div className="application-page__faqs">
            <h2>Patio planning questions</h2>
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
            <Eyebrow>Your Outdoor-Living Project</Eyebrow>
            <h2>Tell us how you want your patio to feel and function.</h2>
            <p>Share your location, photographs, approximate area, and design goals.</p>
          </div>
          <div className="application-page__actions">
            <QuoteCTA label="Discuss My Patio Project" />
            <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
          </div>
        </Container>
      </section>
    </div>
  );
}