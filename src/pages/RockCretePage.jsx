import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import QuoteCTA from "../components/conversion/QuoteCTA";
import ExploreByProject from "../components/projects/ExploreByProject";
import RockCreteApplications from "../components/rock-crete/RockCreteApplications";
import RockCreteBenefits from "../components/rock-crete/RockCreteBenefits";
import RockCreteBinderCourse from "../components/rock-crete/RockCreteBinderCourse";
import RockCreteFaq from "../components/rock-crete/RockCreteFaq";
import RockCreteFoundation from "../components/rock-crete/RockCreteFoundation";
import RockCreteGlowLink from "../components/rock-crete/RockCreteGlowLink";
import RockCreteHero from "../components/rock-crete/RockCreteHero";
import RockCretePerformance from "../components/rock-crete/RockCretePerformance";
import { productProjectMappings } from "../data/productProjectMappings";
import { site } from "../data/site";

export default function RockCretePage() {
  return (
    <>
      <Helmet>
        <title>Rock Crete Foundation Options | {site.name}</title>
        <meta name="description" content="Understand Rock Crete supporting-course options and the layers beneath resin-bound stone. Discuss project-specific preparation, traffic, reservoir, and drainage." />
        <link rel="canonical" href={`${site.domain}/services/rock-crete`} />
      </Helmet>
      <RockCreteHero />
      <RockCreteFoundation />
      <RockCretePerformance />
      <RockCreteBenefits />
      <RockCreteBinderCourse />
      <RockCreteApplications />
      <RockCreteGlowLink />
      <RockCreteFaq />
      <ExploreByProject content={productProjectMappings["rock-crete"]} />
      <section className="rock-crete-contact-cta section">
        <Container className="rock-crete-contact-cta__content">
          <div>
            <p className="rock-crete-contact-cta__eyebrow">Interested in Rock Crete?</p>
            <h2>Tell us what needs to support your chosen outdoor finish.</h2>
            <p>Share the existing construction, expected traffic, and drainage concerns. We can discuss whether an assessed overlay or a different build-up is appropriate for the project.</p>
          </div>
          <QuoteCTA label="Discuss Your Foundation Options" />
        </Container>
      </section>
    </>
  );
}
