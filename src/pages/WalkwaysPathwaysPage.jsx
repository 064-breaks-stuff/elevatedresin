import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { site } from "../data/site";

const connections = [
  {
    "title": "Front-door approaches",
    "text": "Connect parking and the entrance, including thresholds, steps, and areas where people turn or pause."
  },
  {
    "title": "Garden and side-yard routes",
    "text": "Consider gates, patios, planting beds, and frequently used outdoor spaces as one route."
  },
  {
    "title": "Everyday access without loose gravel",
    "text": "A sound bound finish holds aggregate together. Plan width, levels, and transitions for walking aids, strollers, equipment, and intended users."
  }
];
const transitionQuestions = ["Where does the route meet a driveway, patio, gate, or doorway?", "Are there uneven edges, steps, or changes in level?", "What width, slopes, and turning space does the intended use require?", "How will borders and curves meet planting, grass, and other finishes?"];
const faqs = [
  {
    "question": "Can the design account for mobility needs?",
    "answer": "Yes. Discuss intended users and equipment so width, slopes, cross-slopes, turning areas, thresholds, and transitions can be considered. Compliance depends on the complete route and proposed finish, not material choice alone."
  },
  {
    "question": "Can Glow Rock be used along a pathway?",
    "answer": "Selected products can be considered as decorative borders or details. They do not replace required lighting or guarantee nighttime safety."
  },
  {
    "question": "Will a new pathway stop puddles?",
    "answer": "Not automatically. Surface condition, grading, supporting layers, and surrounding runoff need assessment together."
  },
  {
    "question": "What winter-maintenance guidance should I request?",
    "answer": "Ask for the installed system’s instructions for equipment, deicers, debris removal, and cleaning. No ice-proof or slip-proof claim is made."
  }
];

export default function WalkwaysPathwaysPage() {
  return (
    <div className="application-page walkways-page">
<Helmet><title>Wisconsin Walkways & Pathways | Elevated Resin Creations</title><meta name="description" content="Explore natural-stone pathways and entrance connections with route geometry, thresholds, drainage, and winter care considered together." /><link rel="canonical" href={`${site.domain}/walkways-pathways`} /></Helmet>
      <section className="walkways-page__hero"><Container className="application-page__split">
<figure className="application-page__photo"><img src="/images/home-resin-bound-landscape-path.png" alt="Curved light-coloured pathway through landscaped beds." fetchPriority="high" decoding="async" /><figcaption>Approved pathway example; no local-project claim.</figcaption></figure>
        <div className="application-page__heading"><Eyebrow>Wisconsin Walking Routes</Eyebrow><h1>Natural-stone pathways that connect the places you use.</h1><p>Create an entrance, garden connection, or side-yard route using a textured bound finish rather than loose stone. Plan curves and borders alongside access, levels, water movement, and winter care.</p><div className="application-page__actions"><QuoteCTA label="Plan My Walkway Route" /></div><p className="application-page__service-area">{site.serviceArea}</p></div>
      </Container></section>
      <section className="section walkways-page__connections"><Container>
<div className="application-page__heading"><Eyebrow>Entrances and Connections</Eyebrow><h2>Map the route before selecting the material.</h2></div>
        <div className="walkways-page__route-list">{connections.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </Container></section>
      <section className="section walkways-page__transitions"><Container className="application-page__split">
<div className="application-page__heading"><Eyebrow>Surface and Transition Details</Eyebrow><h2>Consider edges and level changes as part of the design.</h2><p>Assess width, turning space, slopes, cross-slopes, thresholds, and edges alongside the finish. A firm, textured surface can support accessible-route planning, but material selection alone does not establish compliance.</p></div>
        <ul className="application-page__checklist">{transitionQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
      </Container></section>
      <section className="section walkways-page__weather"><Container>
<div className="application-page__heading"><Eyebrow>Rain, Snowmelt, and Winter Care</Eyebrow><h2>Follow the water as well as the walking route.</h2><p>Show where water crosses or collects. An overlay over solid paving needs drainage across or away from it; a full permeable path needs suitable supporting layers and an infiltration or drainage strategy.</p><p>Discuss snow-clearing access and product-specific care. A new finish does not eliminate ice, sediment, or the need for maintenance.</p></div><nav className="application-page__links" aria-label="Pathway product information"><Link to="/services/rock-crete">Supporting options: Rock Crete →</Link><Link to="/services/resin-bound">Surface options: Resin Bound →</Link><Link to="/services/glow-rock">Decorative options: Glow Rock →</Link></nav>
      </Container></section>
      <section className="section walkways-page__examples"><Container className="walkways-page__examples-layout">
<div className="application-page__heading"><Eyebrow>Pathway Design Examples</Eyebrow><h2>Explore connected routes and decorative border details.</h2><p>Approved photographs are shown without local-project claims. Glow images are decorative examples, not measured safety or illumination evidence.</p><nav className="application-page__links" aria-label="Related pathway projects"><Link to="/driveways">Driveway connections →</Link><Link to="/landscape-areas">Landscape areas →</Link></nav></div><figure className="application-page__photo"><img src="/images/glow-rock-path-border-night.webp" alt="Blue-glowing curved border at a residential entrance at night." loading="lazy" decoding="async" /><figcaption>A decorative glowing entrance-border example.</figcaption></figure>
        <div className="application-page__faqs walkways-page__faq-panel"><h2>Questions about your route</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </Container></section>
<section className="section application-page__cta"><Container className="application-page__cta-layout"><div className="application-page__heading"><Eyebrow>Start With the Route</Eyebrow><h2>Show us what your pathway needs to connect.</h2><p>Send route photographs, approximate dimensions, your location, and access requirements.</p></div><div className="application-page__actions"><QuoteCTA label="Discuss My Pathway Project" /><a href={site.phoneHref}>Call {site.phoneDisplay}</a></div></Container></section>
    </div>
  );
}
