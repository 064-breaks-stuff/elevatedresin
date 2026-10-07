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
          Elevated Resin Creations | Wisconsin Resin Surfacing Projects
        </title>
        <meta
          name="description"
          content="Plan resin-bound driveways, patios, pool surrounds, pathways, and landscape details with Elevated Resin Creations. Serving Menasha, surrounding areas, and statewide for qualifying projects."
        />
        <link rel="canonical" href={`${site.domain}/`} />
      </Helmet>

      <HomeHero />
      <HomeTrustBar />

      <section className="home-transformation section">
        <SectionHeading
          eyebrow="Representative Design Comparison"
          title="Explore a different finish—not a guaranteed project outcome."
          description="This illustrative before-and-after pair is not an Elevated Resin Creations installation. Your project begins with an assessment of the existing construction, intended use, drainage, and finish requirements."
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
          eyebrow="Installation Gallery"
          title="Explore approved outdoor-surface examples."
          description="Browse approved installation photographs across driveway, pool, and decorative applications. These images are not identified as Wisconsin projects; your system and scope will be selected for your own property."
        />

        <Container>
          <ProjectPreviewGrid />
        </Container>
      </section>

      <HomeProcess />
      <HomeFAQPreview />

      <QuoteFormSection
        eyebrow="Request a Project Estimate"
        title="Tell us what your outdoor space needs to handle."
        description={`Share your location, photographs, approximate area, and project goals with ${site.name}. We will discuss the existing construction, intended use, drainage considerations, and appropriate scope.`}
      />
    </>
  );
}