import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import QuoteCTA from "../components/conversion/QuoteCTA";
import ResinWallApplications from "../components/resin-wall/ResinWallApplications";
import ResinWallContinuity from "../components/resin-wall/ResinWallContinuity";
import ResinWallFaq from "../components/resin-wall/ResinWallFaq";
import ResinWallFeatures from "../components/resin-wall/ResinWallFeatures";
import ResinWallGallery from "../components/resin-wall/ResinWallGallery";
import ResinWallHero from "../components/resin-wall/ResinWallHero";
import ResinWallIntroduction from "../components/resin-wall/ResinWallIntroduction";
import { site } from "../data/site";

export default function ResinWallPage() {
  return (
    <>
      <Helmet>
        <title>Resin Wall | Vertical Stone Surfacing | {site.name}</title>
        <meta
          name="description"
          content="Explore Resin Rock Vertical Binder for suitable walls, steps, vertical edges, and decorative outdoor stone surfacing features."
        />
      </Helmet>

      <ResinWallHero />
      <ResinWallIntroduction />
      <ResinWallFeatures />
      <ResinWallApplications />
      <ResinWallContinuity />
      <ResinWallGallery />
      <ResinWallFaq />

      <section className="resin-wall-contact-cta section">
        <Container className="resin-wall-contact-cta__content">
          <div>
            <p className="resin-wall-contact-cta__eyebrow">
              Interested in Vertical Binder?
            </p>

            <h2>Tell us about the wall, step, edge, or vertical feature you want to finish.</h2>

            <p>
              Discuss whether Resin Rock Vertical Binder may be suitable for your
              wider outdoor surface project with Elevated Resin Creations.
            </p>
          </div>

          <QuoteCTA label="Request a Quote" />
        </Container>
      </section>
    </>
  );
}