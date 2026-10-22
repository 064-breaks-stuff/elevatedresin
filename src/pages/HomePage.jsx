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
        <title>Elevated Resin Creations | Wisconsin Resin Surfacing Projects</title>
        <meta name="description" content="Explore natural-stone resin-bound driveways, patios, pool surrounds, pathways, and landscape details. Serving Menasha, surrounding areas, and qualifying Wisconsin projects." />
        <link rel="canonical" href={`${site.domain}/`} />
      </Helmet>
      <HomeHero /><HomeTrustBar /><HomeServices />
      <section className="home-transformation section">
        <SectionHeading eyebrow="Representative Design Comparison" title="See how a different stone finish can change the feel of a space." description="Use this illustrative comparison to explore appearance, not to predict a result. These images are not an Elevated Resin Creations installation. Your finish and construction begin with a site-specific assessment." />
        <Container><BeforeAfterSlider /></Container>
      </section>
      <HomeBenefits /><HomeValueSection /><HomeFeaturedProject /><HomeComparison />
      <section className="home-gallery section">
        <SectionHeading eyebrow="Installation Gallery" title="Explore finishes across different outdoor settings." description="Compare approved driveway, pool, and decorative installation examples. These photographs are not identified as Wisconsin projects or Elevated Resin Creations installations." />
        <Container><ProjectPreviewGrid /></Container>
      </section>
      <HomeProcess /><HomeFAQPreview />
      <QuoteFormSection eyebrow="Request a Project Estimate" title="Show us the space you want to improve." description={`Share your location, approximate area, existing-surface photographs, and the result you want with ${site.name}. Include access, drainage, and vehicle-use concerns so the conversation starts with a realistic scope.`} />
    </>
  );
}
