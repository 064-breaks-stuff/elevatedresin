import { Helmet } from "react-helmet-async";

import HomeBenefits from "../components/home/HomeBenefits";
import HomeComparison from "../components/home/HomeComparison";
import HomeFAQPreview from "../components/home/HomeFAQPreview";
import HomeFeaturedProject from "../components/home/HomeFeaturedProject";
import HomeHero from "../components/home/HomeHero";
import HomeProcess from "../components/home/HomeProcess";
import HomeProof from "../components/home/HomeProof";
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
          eyebrow="Resin Rock Installs Over Most Surfaces"
          title="See the difference a refined resin-bound finish can make."
          description="Use the comparison control to explore a clearly marked before-and-after placeholder. Replace this matched pair with an approved project transformation before launch."
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
          title="Outdoor surfaces designed to make a lasting impression."
          description="This preview is reserved for approved Elevated Resin Creations project photography. Final project titles, descriptions, and alt text must be confirmed with the original assets."
        />

        <Container>
          <ProjectPreviewGrid />
        </Container>
      </section>

      <HomeProcess />
      <HomeProof />
      <HomeFAQPreview />

      <QuoteFormSection
        eyebrow="Your Transformation Starts Here"
        title="Ready to Transform Your Outdoor Space?"
        description={`Tell us about your project and the ${site.name} team will get back to you as soon as possible.`}
      />
    </>
  );
}