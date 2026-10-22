import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { site } from "../data/site";

const applications = [
  {
    "title": "Defined paths and gravel-look areas",
    "text": "Explore bound natural aggregate without loose gravel migrating across a sound finished area. Plan usable surfaces around gates, beds, and garden routes.",
    "to": "/walkways-pathways",
    "label": "Explore pathway planning"
  },
  {
    "title": "Coordinated vertical details",
    "text": "Consider selected wall or step-face finishes separately from their structural condition and horizontal walking surfaces.",
    "to": "/services/resin-wall",
    "label": "Explore Resin Wall"
  },
  {
    "title": "Decorative glow accents",
    "text": "Discuss selected border or feature details without treating decorative glow as required lighting.",
    "to": "/services/glow-rock",
    "label": "Explore Glow Rock"
  }
];
const systems = [
  {
    "title": "Resin Bound surfaces",
    "text": "The decorative wearing course for suitable horizontal areas, selected with intended use, preparation, and support in mind.",
    "to": "/services/resin-bound"
  },
  {
    "title": "Rock Crete supporting construction",
    "text": "A supporting-course option within an appropriate build-up—not the finished surface or a replacement for every reservoir requirement.",
    "to": "/services/rock-crete"
  }
];
const faqs = [
  {
    "question": "Can you coordinate paths, borders, and wall details?",
    "answer": "These can be discussed within a landscape project. Horizontal and vertical applications each require suitable products, preparation, and construction."
  },
  {
    "question": "Will surfacing resolve garden runoff?",
    "answer": "Do not assume so. Runoff, grading, bed interfaces, and supporting layers need assessment. Permeability of a wearing surface alone does not establish site drainage performance."
  },
  {
    "question": "What should I consider for seasonal cleanup?",
    "answer": "Discuss leaves, soil and mulch movement, cleaning access, and winter care. Request guidance for the actual installed products."
  },
  {
    "question": "Can surfacing be installed around established trees?",
    "answer": "Assess species, roots, levels, and water and air needs. Seek arborist or municipal input where required; no fixed clearance or universal permission to cover roots is promised. Decorative wall finishes likewise do not repair structural failure."
  }
];

export default function LandscapeAreasPage() {
  return (
    <div className="application-page landscape-page">
<Helmet><title>Wisconsin Landscape Surfacing | Elevated Resin Creations</title><meta name="description" content="Explore coordinated garden routes, bound aggregate, borders, and vertical details with root-sensitive planning, drainage, and seasonal care." /><link rel="canonical" href={`${site.domain}/landscape-areas`} /></Helmet>
      <section className="landscape-page__hero"><Container>
        <div className="application-page__heading"><Eyebrow>Wisconsin Landscape Projects</Eyebrow><h1>Bring garden routes and stone details into one coordinated plan.</h1><p>Use natural-aggregate finishes, curves, and defined borders to connect the spaces you use. Consider planting, existing surfaces, runoff, and cleanup alongside selected vertical or decorative glow details.</p><div className="application-page__actions"><QuoteCTA label="Plan My Landscape Surface Project" /></div><p className="application-page__service-area">{site.serviceArea}</p></div>
<figure className="application-page__photo landscape-page__hero-photo"><img src="/images/home-resin-bound-landscape-path.png" alt="Curved pathway beside hedges and landscaped beds." fetchPriority="high" decoding="async" /><figcaption>Approved landscape-path installation example.</figcaption></figure>
      </Container></section>
      <section className="section landscape-page__applications"><Container>
<div className="application-page__heading"><Eyebrow>Application Possibilities</Eyebrow><h2>Choose the role of each feature before choosing its product.</h2></div>
        <div className="application-page__cards">{applications.map((item) => <article key={item.to}><h3>{item.title}</h3><p>{item.text}</p><Link to={item.to}>{item.label} →</Link></article>)}</div>
      </Container></section>
      <section className="section landscape-page__borders"><Container className="application-page__split">
<figure className="application-page__photo"><img src="/images/resin-wall-hero.jpg" alt="Retaining wall beside a lawn and planting areas." loading="lazy" decoding="async" /><figcaption>A wall and planting-area interface example.</figcaption></figure><div className="application-page__heading"><Eyebrow>Borders and Transitions</Eyebrow><h2>Consider how the surface meets the living landscape.</h2><p>Plan borders around beds, lawns, gates, and level changes. Keep soil and mulch movement in the discussion so debris does not undermine the finish or water path. Identify retained materials and included details.</p><p>Established trees require species- and root-zone-aware assessment, with arborist or authority input where appropriate. Vertical faces also need separate product and substrate specifications.</p></div>
      </Container></section>
      <section className="section landscape-page__care"><Container className="landscape-page__care-layout">
<div className="application-page__heading"><Eyebrow>Drainage and Seasonal Maintenance</Eyebrow><h2>Plan runoff and cleanup around the actual application.</h2><p>Identify rain and snowmelt routes, leaf collection areas, and bed maintenance. Assess finish and supporting construction together rather than assuming every resin application is fully permeable.</p><p>A bound finish still requires debris control, clear edges, drainage inspection, and approved cleaning and winter care. It is not a maintenance-free seal over the landscape.</p></div>
        <div className="landscape-page__system-list">{systems.map((system) => <article key={system.to}><h3>{system.title}</h3><p>{system.text}</p><Link to={system.to}>View system information →</Link></article>)}</div>
      </Container></section>
      <section className="section landscape-page__gallery"><Container>
<div className="application-page__heading"><Eyebrow>Landscape Detail Examples</Eyebrow><h2>Explore decorative boundaries and coordinated features.</h2><p>Approved images, not identified as Elevated Resin Creations or Wisconsin installations.</p></div><div className="landscape-page__gallery-grid"><figure className="application-page__photo"><img src="/images/home-gallery-glow-rock-edge.jpeg" alt="Pink glowing border beside a landscaped stone bed." loading="lazy" decoding="async" /><figcaption>A decorative glow-border example.</figcaption></figure><figure className="application-page__photo"><img src="/images/resin-wall-introduction-closeup.jpg" alt="Close view of a textured retaining-wall face." loading="lazy" decoding="async" /><figcaption>A vertical landscape-detail example.</figcaption></figure></div><nav className="application-page__links" aria-label="Related landscape projects"><Link to="/patios">Outdoor-living patios →</Link><Link to="/pool-decks">Pool surrounds →</Link><Link to="/projects">Project gallery →</Link></nav><div className="application-page__faqs"><h2>Landscape project questions</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </Container></section>
<section className="section application-page__cta"><Container className="application-page__cta-layout"><div className="application-page__heading"><Eyebrow>A Coordinated Landscape Scope</Eyebrow><h2>Show us the areas you want to bring together.</h2><p>Share photographs, your location, approximate areas, and the paths, borders, or details you have in mind.</p></div><div className="application-page__actions"><QuoteCTA label="Discuss My Landscape Project" /><a href={site.phoneHref}>Call {site.phoneDisplay}</a></div></Container></section>
    </div>
  );
}
