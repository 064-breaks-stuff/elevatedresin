import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import QuoteCTA from "../components/conversion/QuoteCTA";
import ExploreByProject from "../components/projects/ExploreByProject";
import ResinBoundAftercare from "../components/resin-bound/ResinBoundAftercare";
import ResinBoundApplications from "../components/resin-bound/ResinBoundApplications";
import ResinBoundBenefits from "../components/resin-bound/ResinBoundBenefits";
import ResinBoundColours from "../components/resin-bound/ResinBoundColours";
import ResinBoundDrainage from "../components/resin-bound/ResinBoundDrainage";
import ResinBoundFaq from "../components/resin-bound/ResinBoundFaq";
import ResinBoundHero from "../components/resin-bound/ResinBoundHero";
import ResinBoundIntro from "../components/resin-bound/ResinBoundIntro";
import ResinBoundPreparation from "../components/resin-bound/ResinBoundPreparation";
import ResinBoundProjects from "../components/resin-bound/ResinBoundProjects";
import { productProjectMappings } from "../data/productProjectMappings";
import { site } from "../data/site";

export default function ResinBoundPage() {
  return (
    <>
      <Helmet>
        <title>Resin-Bound Driveways &amp; Patios | {site.name}</title>
        <meta name="description" content="Explore natural-stone resin-bound finishes, colors, borders, and resurfacing options for Wisconsin outdoor spaces. Plan the base, drainage, intended use, and care." />
        <link rel="canonical" href={`${site.domain}/services/resin-bound`} />
      </Helmet>
      <ResinBoundHero />
      <ResinBoundIntro />
      <ResinBoundApplications />
      <ResinBoundBenefits />
      <ResinBoundDrainage />
      <ResinBoundColours />
      <ResinBoundPreparation />
      <ResinBoundAftercare />
      <ResinBoundProjects />
      <ResinBoundFaq />
      <ExploreByProject content={productProjectMappings["resin-bound"]} />
      <section className="resin-bound-contact-cta section">
        <Container className="resin-bound-contact-cta__content">
          <div>
            <p className="resin-bound-contact-cta__eyebrow">Ready to Discuss Your Surface?</p>
            <h2>Tell us about the driveway, patio, pathway, or outdoor space you want to transform.</h2>
            <p>Share the existing surface, approximate area, finish ideas, and access or drainage concerns so the conversation starts with the complete project—not only a product choice.</p>
          </div>
          <QuoteCTA label="Request a Project Estimate" />
        </Container>
      </section>
    </>
  );
}
