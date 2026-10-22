import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { site } from "../data/site";

const wetAreaQuestions = [
  {
    "title": "Wet-foot traffic",
    "text": "Compare the exact texture and any anti-slip treatment using documented wet-traction information. Discuss barefoot use and contaminants; no slip-proof or cool-surface claim is made."
  },
  {
    "title": "Pool chemicals and cleaning",
    "text": "Share cleaning products and routines so compatibility can be confirmed for the actual installed finish."
  },
  {
    "title": "Opening, closing, and winter exposure",
    "text": "Include cover equipment, seasonal access, snow clearing, and system-specific care in the scope."
  }
];
const details = [
  {
    "title": "Pool edges",
    "text": "Identify coping, steps, drains, joints, and boundaries. Resolve levels, falls, and any metal or lighting details with qualified trades rather than assuming resurfacing replaces every edge detail."
  },
  {
    "title": "Connected surfaces",
    "text": "Coordinate aggregate colors and border proportions with doors, seating, paths, and planting. Different areas may need different product or construction details."
  }
];
const faqs = [
  {
    "question": "Is a resin pool deck slip-proof?",
    "answer": "No. Request wet-traction information for the exact proposed finish. Water, contamination, slope, footwear, and maintenance affect the experience."
  },
  {
    "question": "Will water drain through my pool surround?",
    "answer": "The open wearing surface can pass water, but an impermeable slab beneath it still needs drainage across or away from the slab. Complete permeable construction needs suitable layers and a defined water route."
  },
  {
    "question": "Can the existing pool deck remain?",
    "answer": "It needs assessment for movement, damage, thresholds, pool edges, and drainage before an overlay can be recommended."
  },
  {
    "question": "Can Glow Rock be added?",
    "answer": "Selected decorative products can be discussed after confirming placement, compatibility, wet-area use, and care. Glow does not replace required lighting."
  },
  {
    "question": "Can work fit around pool opening or closing?",
    "answer": "Share preferred dates and access requirements. Preparation, weather, the selected system, and cure requirements determine scheduling and reopening."
  }
];

export default function PoolDecksPage() {
  return (
    <div className="application-page pool-decks-page">
<Helmet><title>Wisconsin Pool Deck Resurfacing | Elevated Resin Creations</title><meta name="description" content="Explore coordinated pool-surround finishes with wet-area selection, coping, drainage, cleaning, and Wisconsin seasonal use considered together." /><link rel="canonical" href={`${site.domain}/pool-decks`} /></Helmet>
      <section className="pool-decks-page__hero"><Container>
        <div className="application-page__heading"><Eyebrow>Wisconsin Pool Surrounds</Eyebrow><h1>A coordinated stone finish around the pool, seating, and garden.</h1><p>Follow the pool’s shape with a textured aggregate finish, borders, and connections to outdoor living. Select the appearance alongside wet-area suitability, edges, drainage, cleaning, and seasonal use.</p><div className="application-page__actions"><QuoteCTA label="Request a Pool-Surround Consultation" /></div><p className="application-page__service-area">{site.serviceArea}</p></div>
<figure className="application-page__photo pool-decks-page__hero-photo"><img src="/images/home-featured-resin-pool-surround.jpg" alt="Residential swimming pool with a light-coloured surrounding surface." fetchPriority="high" decoding="async" /><figcaption>Approved pool-surround installation example.</figcaption></figure>
      </Container></section>
      <section className="section pool-decks-page__wet"><Container>
<div className="application-page__heading"><Eyebrow>Wet-Area Considerations</Eyebrow><h2>Confirm suitability for the way your pool area is used.</h2></div>
        <div className="application-page__cards">{wetAreaQuestions.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </Container></section>
      <section className="section pool-decks-page__details"><Container className="application-page__split">
<figure className="application-page__photo"><img src="/images/resin-bound-project-pool.jpg" alt="Pool surround following the curved edges of a pool and spa." loading="lazy" decoding="async" /><figcaption>Curved pool and spa edge details.</figcaption></figure>
        <div className="application-page__heading"><Eyebrow>Finish and Edge Details</Eyebrow><h2>Resolve the boundaries alongside the finish.</h2>{details.map((item) => <div className="application-page__text-item" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
      </Container></section>
      <section className="section pool-decks-page__systems"><Container>
<div className="application-page__heading"><Eyebrow>Drainage and Product Suitability</Eyebrow><h2>The finish, support, and water route work together.</h2><p>Resin Bound provides the decorative wearing surface. Rock Crete can form part of appropriate supporting construction. Selected Glow Rock details are decorative, not required lighting. Confirm compatibility rather than treating the products as interchangeable.</p><p>A suitable deck may offer an overlay opportunity, but a slab beneath the finish still needs drainage. Movement, wet traction, pool-chemical compatibility, and return-to-use requirements belong in the scope.</p></div><nav className="application-page__links" aria-label="Pool project systems"><Link to="/services/resin-bound">Resin Bound →</Link><Link to="/services/rock-crete">Rock Crete →</Link><Link to="/services/glow-rock">Glow Rock →</Link></nav>
      </Container></section>
      <section className="section pool-decks-page__gallery"><Container>
<div className="application-page__heading"><Eyebrow>Pool-Area Examples</Eyebrow><h2>Explore different pool-surround settings.</h2><p>Approved installation examples, not identified as Elevated Resin Creations or Wisconsin projects.</p></div><div className="application-page__gallery"><figure className="application-page__photo"><img src="/images/home-gallery-pool-surround-classic.jpg" alt="Light-coloured surface around a curved outdoor swimming pool." loading="lazy" decoding="async" /><figcaption>A curved pool-surround setting.</figcaption></figure><figure className="application-page__photo"><img src="/images/home-gallery-pool-surround-landscape.JPG" alt="Pool surround beside landscaped beds and flowering plants." loading="lazy" decoding="async" /><figcaption>A pool surround integrated with garden beds.</figcaption></figure></div><nav className="application-page__links" aria-label="Related pool projects"><Link to="/patios">Connected patio projects →</Link><Link to="/landscape-areas">Landscape integration →</Link></nav>
      </Container></section>
      <section className="section pool-decks-page__questions"><Container>
<div className="application-page__faqs"><h2>Pool-specific project questions</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </Container></section>
<section className="section application-page__cta"><Container className="application-page__cta-layout"><div className="application-page__heading"><Eyebrow>Plan Your Pool Surround</Eyebrow><h2>Bring the whole pool area into the assessment.</h2><p>Share your location, pool-area photographs, approximate area, and seasonal schedule.</p></div><div className="application-page__actions"><QuoteCTA label="Discuss My Pool Deck" /><a href={site.phoneHref}>Call {site.phoneDisplay}</a></div></Container></section>
    </div>
  );
}
