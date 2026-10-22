import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { site } from "../data/site";
import "../styles/resources.css";

const careStages = [
  {
    "title": "At handover",
    "items": [
      "Follow the installer’s written opening instructions for people, vehicles, and equipment.",
      "Keep soil, mulch, cement dust, and other construction debris away from the finish.",
      "Keep the product, blend, installation, care, and applicable warranty records together.",
      "Ask how to report unusual soft areas, whitening, loose aggregate, movement, or persistent water."
    ]
  },
  {
    "title": "Routine checks",
    "items": [
      "Remove leaves and debris before they accumulate; use the approved tools and methods.",
      "Keep adjacent soil and mulch from spilling across the edge.",
      "Check edges, transitions, and water outlets for damage or obstruction.",
      "Discuss spills promptly and use the cleaner approved for the actual finish."
    ]
  },
  {
    "title": "Periodic deeper care",
    "items": [
      "Arrange cleaning appropriate to the installed system and sediment exposure.",
      "Inspect during or after rainfall for persistent ponding or blocked water routes.",
      "Pay attention to high-turning areas, repaired sections, and boundaries.",
      "Confirm whether specialist sediment removal or a renewal treatment is appropriate; do not coat a permeable surface indiscriminately."
    ]
  },
  {
    "title": "Winter and spring",
    "items": [
      "Confirm suitable shovels, snowblower contact surfaces, and plowing arrangements in the written guide.",
      "Do not assume sharp blades or a particular deicer are approved for every finish.",
      "Avoid introducing sand, cinders, or other clogging fines to permeable areas unless the applicable guidance explicitly permits them.",
      "Clear winter residue and inspect drainage when conditions allow, using the approved method."
    ]
  }
];

export default function MaintenancePage() {
  return (
    <div className="resource-page">
      <Helmet>
        <title>Resin-Bound Surface Care and Maintenance | {site.name}</title>
        <meta name="description" content="Plan resin-bound surface care, debris control, drainage checks, cleaning, snow clearing, and system-specific maintenance for Wisconsin outdoor spaces." />
        <link rel="canonical" href={`${site.domain}/maintenance`} />
      </Helmet>
      <section className="resource-page__hero"><Container>
        <nav className="resource-page__breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span>Care and Maintenance</span></nav>
        <Eyebrow>Looking After the Finish</Eyebrow><h1>Low routine upkeep still includes care.</h1>
        <p>Keep the surface, edges, and water route in view. These planning principles do not replace the current written maintenance instructions for your actual installed product.</p>
        <div className="resource-page__actions"><a href="#care-checklist">See the care checklist</a><QuoteCTA label="Ask About My Project" /></div>
        <p className="resource-page__service-area">{site.serviceArea}</p>
      </Container></section>
      <section id="care-checklist" className="section"><Container>
        <div className="resource-page__reading"><Eyebrow>A Practical Routine</Eyebrow><h2>Match care to the system and its surroundings.</h2><p>Area, use, sediment, planting, weather, and the supporting construction affect what is needed. Confirm cleaning frequency and product limits at handover.</p></div>
        <div className="resource-page__cards">{careStages.map((stage) => <article key={stage.title}><h3>{stage.title}</h3><ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </Container></section>
      <section className="section resource-page__muted"><Container className="resource-page__reading">
        <Eyebrow>Cleaning and Renewal</Eyebrow><h2>Do not improvise chemicals, pressure settings, or sealers.</h2>
        <p>Ask for the approved cleaner, pressure limit, nozzle, working distance, and any sediment-removal method for the installed finish. Strong solvents, unapproved cleaners, close concentrated jets, or a generic sealer can affect appearance, bond, or drainage.</p>
        <p>No universal resealing interval is specified here. Confirm whether renewal is needed, which product is approved, and how it affects the warranty and water movement.</p>
      </Container></section>
      <section className="section"><Container className="resource-page__reading">
        <Eyebrow>Follow the Water</Eyebrow><h2>A clear surface is only one part of drainage.</h2>
        <p>Leaves, soil, mulch, and fines can affect connected pores. Supporting layers, ground conditions, grading, and outlets also matter. An overlay over concrete still depends on drainage across or away from the slab.</p>
        <p>If water behaves differently, inspect accessible outlets and note where and when it collects. Do not assume more pressure washing will resolve an underlying level, construction, or outlet problem.</p>
      </Container></section>
      <section className="section resource-page__muted"><Container>
        <div className="resource-page__reading"><Eyebrow>When to Ask for Advice</Eyebrow><h2>Document a change before trying a repair.</h2></div>
        <div className="resource-page__cards">
          <article><h3>Changes worth reporting</h3><p>Unusual loose aggregate, softness, whitening, cracks, edge movement, new ponding, or damage after an impact should be assessed. Photographs, location, weather, and the circumstances help explain the issue.</p></article>
          <article><h3>Repairs and written terms</h3><p>Local repair may be possible, but aggregate and weathering can make a patch visible. Request assessment of the cause before repair. Follow the actual warranty’s notice and maintenance requirements; this page does not create or extend coverage.</p></article>
        </div>
      </Container></section>
      <section className="section resource-page__cta"><Container><h2>Know the care requirements before choosing the finish.</h2><p>Discuss your equipment, planting, vehicles, pool use, and winter practices during project planning.</p><div className="resource-page__actions"><QuoteCTA label="Discuss My Surface Project" /><Link to="/faq">Read project FAQs</Link><Link to="/resin-bound-vs-concrete">Compare surface options</Link></div></Container></section>
    </div>
  );
}
