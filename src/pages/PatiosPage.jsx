import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { site } from "../data/site";

const designIdeas = [
  {
    "title": "Make room for gathering",
    "text": "Plan seating, the table, grill, and routes between them around the way you use the patio."
  },
  {
    "title": "Connect the house and garden",
    "text": "Include thresholds, steps, paths, and planting beds in the scope instead of resolving the interfaces after installation."
  },
  {
    "title": "Choose a stone palette and border",
    "text": "Compare colors and border proportions with the home and furniture. Review suitable samples; visualizations are illustrative, and materials and construction need confirmation."
  }
];
const seasonalQuestions = ["Where does rain or snowmelt collect?", "What furniture, grill, heater, or equipment will use the surface?", "What spring cleanup and winter storage are needed?", "What access must remain available during work?"];
const planningSteps = [
  {
    "title": "Share the existing space",
    "text": "Send your location, approximate area, photographs, and outdoor-living goals."
  },
  {
    "title": "Assess the construction",
    "text": "Review movement, thresholds, drainage, and whether preparation or supporting work is required."
  },
  {
    "title": "Agree on finish, scope, and access",
    "text": "Confirm sample/blend choice, borders, work area, scheduling conditions, appearance expectations, and opening guidance."
  }
];
const faqs = [
  {
    "question": "Can you resurface an existing patio?",
    "answer": "Possibly, after assessment. Suitability depends on existing construction and the selected system. An overlay cannot repair a structurally failing base."
  },
  {
    "question": "How should I choose a finish for furniture?",
    "answer": "Discuss leg types, moving chairs, cleaning, spills, and nearby heat sources. Compare the proposed texture and samples with the intended use and product protection guidance."
  },
  {
    "question": "Can Glow Rock be included?",
    "answer": "Selected decorative details can be discussed as part of the wider project. Confirm the actual product, compatibility, and placement first."
  },
  {
    "question": "When can the patio be used again?",
    "answer": "Confirm the project-specific schedule and written opening instructions. Preparation, weather, and cure requirements vary."
  }
];

export default function PatiosPage() {
  return (
    <div className="application-page patios-page">
<Helmet><title>Wisconsin Patio Resurfacing | Elevated Resin Creations</title><meta name="description" content="Explore natural-stone patio finishes, borders, furniture layouts, thresholds, drainage, and seasonal care for qualifying Wisconsin projects." /><link rel="canonical" href={`${site.domain}/patios`} /></Helmet>
      <section className="patios-page__hero"><Container className="application-page__split">
        <div className="application-page__heading"><Eyebrow>Wisconsin Outdoor Living</Eyebrow><h1>Natural-stone detail for the patio you want to spend time on.</h1><p>Bring seating, the house, and the garden together with a textured aggregate finish, curves, and coordinated borders. Plan layout and thresholds alongside the existing base, drainage, and seasonal care.</p><div className="application-page__actions"><QuoteCTA label="Plan My Patio Consultation" /><a href="#patio-design">Explore patio possibilities</a></div><p className="application-page__service-area">{site.serviceArea}</p></div>
<figure className="application-page__photo"><img src="/images/resin-bound-project-patio.jpg" alt="Light-coloured patio with seating beside a screened residential area." fetchPriority="high" decoding="async" /><figcaption>Approved patio installation example.</figcaption></figure>
      </Container></section>
      <section id="patio-design" className="section patios-page__design"><Container>
<div className="application-page__heading"><Eyebrow>Design Around Everyday Use</Eyebrow><h2>Start with the gathering space, not just the surface.</h2></div>
        <div className="application-page__cards">{designIdeas.map((idea) => <article key={idea.title}><h3>{idea.title}</h3><p>{idea.text}</p></article>)}</div>
      </Container></section>
      <section className="section patios-page__seasonal"><Container className="application-page__split">
<div className="application-page__heading"><Eyebrow>Seasonal Surface Planning</Eyebrow><h2>Include rain, snowmelt, and spring cleanup.</h2><p>A suitable existing patio may be resurfaced after inspection and preparation. Over a solid slab, the finish still needs a drainage route. A full permeable build-up uses different supporting construction. Confirm written care requirements.</p></div>
        <ul className="application-page__checklist">{seasonalQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
      </Container></section>
      <section className="section patios-page__gallery"><Container>
<div className="application-page__heading"><Eyebrow>Finish Examples</Eyebrow><h2>Compare different outdoor-living settings.</h2><p>Approved installation photographs, not identified as Elevated Resin Creations or Wisconsin projects. Your finish and construction are selected for your site.</p></div><div className="application-page__gallery"><figure className="application-page__photo"><img src="/images/resin-bound-project-screened-patio.jpg" alt="Speckled surface inside a screened residential patio." loading="lazy" decoding="async" /><figcaption>A screened patio setting.</figcaption></figure><figure className="application-page__photo"><img src="/images/home-hero-resin-bound.webp" alt="Aggregate patio surface in a furnished outdoor area." loading="lazy" decoding="async" /><figcaption>A furnished outdoor-living setting.</figcaption></figure></div>
      </Container></section>
      <section className="section patios-page__planning"><Container>
<div className="application-page__heading"><Eyebrow>Installation Planning</Eyebrow><h2>Know what the project includes before work begins.</h2></div>
        <ol className="application-page__steps">{planningSteps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
<nav className="application-page__links" aria-label="Patio system information"><Link to="/services/resin-bound">Resin Bound surfaces →</Link><Link to="/services/rock-crete">Rock Crete supporting construction →</Link><Link to="/services/glow-rock">Selected Glow Rock options →</Link></nav><div className="application-page__faqs"><h2>Patio planning questions</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </Container></section>
<section className="section application-page__cta"><Container className="application-page__cta-layout"><div className="application-page__heading"><Eyebrow>Your Outdoor-Living Project</Eyebrow><h2>Tell us how you want your patio to feel and function.</h2><p>Share your location, photographs, approximate area, and design goals.</p></div><div className="application-page__actions"><QuoteCTA label="Discuss My Patio Project" /><a href={site.phoneHref}>Call {site.phoneDisplay}</a></div></Container></section>
    </div>
  );
}
