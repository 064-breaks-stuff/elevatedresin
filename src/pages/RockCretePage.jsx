import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import QuoteCTA from "../components/conversion/QuoteCTA";
import RockCreteApplications from "../components/rock-crete/RockCreteApplications";
import RockCreteBenefits from "../components/rock-crete/RockCreteBenefits";
import RockCreteBinderCourse from "../components/rock-crete/RockCreteBinderCourse";
import RockCreteFaq from "../components/rock-crete/RockCreteFaq";
import RockCreteFoundation from "../components/rock-crete/RockCreteFoundation";
import RockCreteGlowLink from "../components/rock-crete/RockCreteGlowLink";
import RockCreteHero from "../components/rock-crete/RockCreteHero";
import RockCretePerformance from "../components/rock-crete/RockCretePerformance";
import { site } from "../data/site";

export default function RockCretePage() {
  return (
    <>
      <Helmet>
        <title>Rock Crete | Permeable Resin-Bound Foundation | {site.name}</title>
        <meta
          name="description"
          content="Explore Rock Crete, a permeable Resin Rock foundation and binder system for appropriate residential and commercial resin-bound surface projects."
        />
      </Helmet>

      <RockCreteHero />
      <RockCreteFoundation />
      <RockCretePerformance />
      <RockCreteBenefits />
      <RockCreteBinderCourse />
      <RockCreteApplications />
      <RockCreteGlowLink />
      <RockCreteFaq />

      <section className="rock-crete-contact-cta section">
        <Container className="rock-crete-contact-cta__content">
          <div>
            <p className="rock-crete-contact-cta__eyebrow">
              Interested in Rock Crete?
            </p>

            <h2>Tell us about the resin-bound surface you want to build from the ground up.</h2>

            <p>
              Discuss your driveway, patio, pathway, residential surface, or
              commercial project with Elevated Resin Creations.
            </p>
          </div>

          <QuoteCTA label="Request a Quote" />
        </Container>
      </section>
    </>
  );
}