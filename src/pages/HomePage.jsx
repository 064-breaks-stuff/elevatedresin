import { Helmet } from "react-helmet-async";

import HomeBenefits from "../components/home/HomeBenefits";
import HomeComparison from "../components/home/HomeComparison";
import HomeFAQPreview from "../components/home/HomeFAQPreview";
import HomeFeaturedProject from "../components/home/HomeFeaturedProject";
import HomeHero from "../components/home/HomeHero";
import HomeProcess from "../components/home/HomeProcess";
import HomeServices from "../components/home/HomeServices";
import HomeTrustBar from "../components/home/HomeTrustBar";
import HomeValueSection from "../components/home/HomeValueSection";
import BeforeAfterSlider from "../components/gallery/BeforeAfterSlider";
import ProjectPreviewGrid from "../components/gallery/ProjectPreviewGrid";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import QuoteFormSection from "../components/forms/QuoteFormSection";
import { site } from "../data/site";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Elevated Resin Creations | Resin-Bound Driveways & Patios in Menasha, WI
        </title>
        <meta
          name="description"
          content="Elevated Resin Creations installs premium resin-bound driveways, patios, pathways, pool decks, and outdoor surfaces in Menasha, Wisconsin and surrounding areas."
        />
      </Helmet>

      <HomeHero />
      <HomeTrustBar />

      <section className="home-transformation section">
        <SectionHeading
          eyebrow="Planning a Complete Surface Project"
          title="Start with the space, the conditions, and the result you want."
          description="A professional project assessment helps determine whether resurfacing may be appropriate for the existing surface and which Resin Rock system may suit the drainage, intended use, and finish requirements."
        />

        <Container>
          <BeforeAfterSlider />
        </Container>
      </section>

      <HomeBenefits />
      <HomeValueSection />
      <HomeServices />
      <HomeFeaturedProject />
      <HomeComparison />

      <section className="home-gallery section">
        <SectionHeading
          eyebrow="Project Gallery"
          title="Verified project imagery will be added as it is approved."
          description="Project photography, descriptions, and alt text are published only after they have been verified and approved for Elevated Resin Creations."
        />

        <Container>
          <ProjectPreviewGrid />
        </Container>
      </section>

      <HomeProcess />
      <HomeFAQPreview />

      <QuoteFormSection
        eyebrow="Request a Project Estimate"
        title="Tell us about the complete outdoor project you are planning."
        description={`Share your driveway, patio, pool deck, walkway, or landscape project with ${site.name}. We will review the existing surface, intended use, drainage considerations, and project scope with you.`}
      />
    </>
  );
}