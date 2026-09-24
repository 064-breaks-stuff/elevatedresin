import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import QuoteCTA from "../components/conversion/QuoteCTA";
import GlowRockApplications from "../components/glow-rock/GlowRockApplications";
import GlowRockBenefits from "../components/glow-rock/GlowRockBenefits";
import GlowRockDesignOptions from "../components/glow-rock/GlowRockDesignOptions";
import GlowRockFaq from "../components/glow-rock/GlowRockFaq";
import GlowRockGallery from "../components/glow-rock/GlowRockGallery";
import GlowRockHero from "../components/glow-rock/GlowRockHero";
import GlowRockHowItWorks from "../components/glow-rock/GlowRockHowItWorks";
import { site } from "../data/site";

export default function GlowRockPage() {
  return (
    <>
      <Helmet>
        <title>Glow Rock | Glow-In-The-Dark Resin Surfacing | {site.name}</title>
        <meta
          name="description"
          content="Explore Glow Rock, a daylight-charged glow-in-the-dark upgrade for resin-bound driveways, patios, pathways, pool areas, and outdoor spaces."
        />
      </Helmet>

      <GlowRockHero />
      <GlowRockHowItWorks />
      <GlowRockBenefits />
      <GlowRockApplications />
      <GlowRockDesignOptions />
      <GlowRockGallery />

      <section className="glow-rock-resin-bound-link section">
        <Container className="glow-rock-resin-bound-link__content">
          <div>
            <p className="glow-rock-resin-bound-link__eyebrow">
              Pair Glow Rock with Resin Bound
            </p>

            <h2>Combine a distinctive nighttime feature with a seamless resin-bound surface.</h2>

            <p>
              Explore Resin Bound for more information about resin-bound driveways,
              patios, pathways, pool areas, landscaped spaces, and commercial
              outdoor surfaces.
            </p>
          </div>

          <Link className="button button--secondary" to="/services/resin-bound">
            <span>Explore Resin Bound</span>
          </Link>
        </Container>
      </section>

      <GlowRockFaq />

      <section className="glow-rock-contact-cta section">
        <Container className="glow-rock-contact-cta__content">
          <div>
            <p className="glow-rock-contact-cta__eyebrow">Interested in Glow Rock?</p>

            <h2>Tell us about the outdoor space you want to transform after dark.</h2>

            <p>
              Discuss whether Glow Rock may be suitable for your driveway, patio,
              path, pool area, garden feature, commercial space, or wider Resin
              Rock surface project.
            </p>
          </div>

          <QuoteCTA label="Request a Free Quote" />
        </Container>
      </section>
    </>
  );
}