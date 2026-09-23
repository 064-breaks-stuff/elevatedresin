import { Helmet } from "react-helmet-async";

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
import Container from "../components/common/Container";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { site } from "../data/site";

export default function ResinBoundPage() {
  return (
    <>
      <Helmet>
        <title>Resin-Bound Driveways & Patios | {site.name}</title>
        <meta
          name="description"
          content="Explore seamless, permeable resin-bound driveways, patios, walkways, pool areas, and outdoor surfaces from Elevated Resin Creations in Menasha, Wisconsin and surrounding areas."
        />
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

      <section className="resin-bound-contact-cta section">
        <Container className="resin-bound-contact-cta__content">
          <div>
            <p className="resin-bound-contact-cta__eyebrow">Ready to Discuss Your Surface?</p>

            <h2>Tell us about the driveway, patio, pathway, or outdoor space you want to transform.</h2>

            <p>
              Elevated Resin Creations can help you explore the right Resin Bound
              solution for your project.
            </p>
          </div>

          <QuoteCTA label="Request a Free Quote" />
        </Container>
      </section>
    </>
  );
}