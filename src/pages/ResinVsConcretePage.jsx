import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { site } from "../data/site";
import "../styles/resources.css";

const comparisonRows = [
  {
    "topic": "Role in the construction",
    "resin": "A decorative aggregate wearing course that relies on suitable supporting layers.",
    "concrete": "A conventional slab provides substantial structural section; design still depends on the support and exposure."
  },
  {
    "topic": "Appearance",
    "resin": "Natural aggregate, curves, contrasting bands, and a continuous visual field. Movement details may still be required.",
    "concrete": "Plain, colored, stamped, or exposed-aggregate finishes with appropriate construction and movement joints."
  },
  {
    "topic": "Water movement",
    "resin": "The open wearing course can pass water. Existing slabs, support layers, storage, soil, and outlets determine its onward route.",
    "concrete": "Conventional dense concrete sheds water through grading and drainage. Designed pervious concrete is a separate permeable option."
  },
  {
    "topic": "Existing paving",
    "resin": "A stable, suitable base may be retained after assessment and preparation. An overlay is not structural repair.",
    "concrete": "Repair, resurfacing, or replacement may be appropriate depending on condition and the required construction."
  },
  {
    "topic": "Traffic and loads",
    "resin": "Specify the full section for actual vehicles, turning, and point loads. An isolated product number is not universal approval.",
    "concrete": "Slab thickness, support, reinforcement where needed, joints, and exposure must match the actual use."
  },
  {
    "topic": "Winter use",
    "resin": "Drainage, support, and product-specific snow-clearing and deicer guidance matter. Not frost-proof or ice-proof.",
    "concrete": "Mixture, air entrainment where specified, curing, drainage, joints, and winter care affect performance."
  },
  {
    "topic": "Maintenance",
    "resin": "Remove sediment and debris, inspect drainage and edges, and follow approved cleaning and care instructions.",
    "concrete": "Clean and maintain joints, inspect deterioration, and follow the finish-specific care and sealing requirements."
  },
  {
    "topic": "Cost and disruption",
    "resin": "An assessed overlay may avoid some demolition; compare the complete preparation, drainage, edges, and finishing scope.",
    "concrete": "Compare removal, groundwork, placement, finishing, curing, and reinstatement—not only the advertised surface rate."
  }
];

export default function ResinVsConcretePage() {
  return (
    <div className="resource-page">
      <Helmet>
        <title>Resin Bound vs Concrete in Wisconsin | {site.name}</title>
        <meta name="description" content="Compare resin-bound stone and concrete for appearance, existing-base options, drainage, vehicle use, winter care, and complete project scope in Wisconsin." />
        <link rel="canonical" href={`${site.domain}/resin-bound-vs-concrete`} />
      </Helmet>
      <section className="resource-page__hero"><Container>
        <nav className="resource-page__breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span>Resin Bound vs Concrete</span></nav>
        <Eyebrow>Choose for the Property</Eyebrow>
        <h1>Resin Bound or Concrete? Compare the complete project.</h1>
        <p>Resin-bound stone and concrete serve different roles. Compare the appearance you want, the condition of your existing paving, how water leaves the area, and the traffic it must support—not a blanket claim that one material is always better.</p>
        <div className="resource-page__actions"><QuoteCTA label="Discuss My Surface Options" /><a href="#surface-comparison">See the comparison</a></div>
        <p className="resource-page__service-area">{site.serviceArea}</p>
      </Container></section>
      <section id="surface-comparison" className="section"><Container>
        <div className="resource-page__reading"><Eyebrow>At a Glance</Eyebrow><h2>Appearance is one part of the decision.</h2><p>This is a planning comparison, not an engineering specification, cost quotation, or guarantee of performance.</p></div>
        <div className="resource-page__table-scroll" role="region" aria-label="Resin-bound and concrete comparison" tabIndex={0}>
          <table className="resource-page__table"><caption>High-level planning considerations for resin-bound systems and concrete options</caption>
            <thead><tr><th scope="col">Consideration</th><th scope="col">Resin-bound system</th><th scope="col">Concrete options</th></tr></thead>
            <tbody>{comparisonRows.map((row) => <tr key={row.topic}><th scope="row">{row.topic}</th><td>{row.resin}</td><td>{row.concrete}</td></tr>)}</tbody>
          </table>
        </div>
      </Container></section>
      <section className="section resource-page__muted"><Container>
        <div className="resource-page__reading"><Eyebrow>Two Different Starting Points</Eyebrow><h2>Resurfacing a sound base is not the same as building a permeable pavement.</h2></div>
        <div className="resource-page__cards">
          <article><h3>Existing-base overlay</h3><p>A suitable concrete or asphalt base may remain after assessment and preparation. The resin-bound finish can renew the appearance, but water still needs a route across or away from an impermeable slab. Movement and structural failure need resolution first.</p></article>
          <article><h3>New permeable build-up</h3><p>The wearing course works with appropriate supporting layers, storage aggregate, ground conditions, and infiltration or drainage outlets. Rock Crete may be part of a suitable section; it is not a replacement for every reservoir or ground requirement.</p></article>
        </div>
      </Container></section>
      <section className="section"><Container>
        <div className="resource-page__reading"><Eyebrow>Where Each Option Fits</Eyebrow><h2>Choose the advantage that matters to your site.</h2></div>
        <div className="resource-page__cards">
          <article><h3>Reasons to explore resin-bound stone</h3><ul><li>Natural aggregate colors, curves, and coordinated borders.</li><li>A bound finish rather than migrating loose gravel.</li><li>A potential overlay on a verified suitable base.</li><li>A permeable wearing surface within the appropriate complete construction.</li></ul></article>
          <article><h3>Reasons concrete may suit the project</h3><ul><li>A structural slab appropriate to the expected use.</li><li>A familiar construction and specification approach.</li><li>Appearance or budget priorities that favor the proposed concrete finish.</li><li>Loads or exposures requiring a different engineered pavement section.</li></ul></article>
        </div>
        <div className="resource-page__note"><h3>Do not compare unrelated strength figures</h3><p>Compressive strength, flexural strength, stiffness, and complete pavement capacity are different measures. Even two numbers in psi cannot be compared fairly without the same property, method, specimen, conditioning, and intended construction.</p></div>
      </Container></section>
      <section className="section resource-page__muted"><Container className="resource-page__reading"><Eyebrow>Compare Quotes Fairly</Eyebrow><h2>Ask what is included beneath and around the finish.</h2><ul className="resource-page__checklist"><li>Retained material, removal, repairs, and preparation.</li><li>Supporting layers, edges, levels, and movement details.</li><li>Traffic assumptions and concentrated loads.</li><li>Storage, infiltration, outlets, and overflow where relevant.</li><li>Finish selection, access, weather, opening, and maintenance.</li><li>The applicable written warranty and its exclusions.</li></ul></Container></section>
      <section className="section resource-page__cta"><Container><h2>Start with your property, not a material slogan.</h2><p>Share photographs, approximate area, intended use, and concerns about the existing surface or drainage.</p><div className="resource-page__actions"><QuoteCTA label="Request a Project Estimate" /><Link to="/maintenance">Read the maintenance guide</Link><Link to="/faq">Read project FAQs</Link></div></Container></section>
    </div>
  );
}
