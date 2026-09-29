import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import QuoteCTA from "../components/conversion/QuoteCTA";
import ServiceCard from "../components/content/ServiceCard";
import ApplicationsGrid from "../components/services/ApplicationsGrid";
import ProjectDiscoveryGrid from "../components/services/ProjectDiscoveryGrid";
import ResurfacingApproach from "../components/services/ResurfacingApproach";
import ServicesHero from "../components/services/ServicesHero";
import SolutionSelector from "../components/services/SolutionSelector";
import { services } from "../data/services";
import { site } from "../data/site";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Outdoor Resurfacing Projects & Systems | {site.name}</title>

        <meta
          name="description"
          content="Explore driveway, patio, pool deck, walkway, landscape, and commercial resin surfacing projects from Elevated Resin Creations. Compare Resin Bound, Glow Rock, Rock Crete, and Resin Wall systems."
        />
      </Helmet>

      <ServicesHero />

      <ProjectDiscoveryGrid />

      <ResurfacingApproach />

      <ApplicationsGrid />

      <section className="services-overview section">
        <SectionHeading
          eyebrow="Surface & System Options"
          title="Compare Resin Rock systems for the complete project."
          description="Each system has a different role within a project: finished resin-bound surfaces, glow-in-the-dark aggregate, a durable permeable foundation, and coordinated vertical stone surfacing."
        />

        <Container>
          <div className="services-overview__grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <SolutionSelector />

      <section className="services-contact-cta section">
        <Container className="services-contact-cta__content">
          <div>
            <p className="services-contact-cta__eyebrow">
              Request a Project Estimate
            </p>

            <h2>Tell us about the complete outdoor project you are planning.</h2>

            <p>
              Use the project type and project-size fields in the quote form to
              help us understand the space, intended use, existing surface, and
              scope before discussing the most suitable system and finish.
            </p>
          </div>

          <QuoteCTA label="Request a Project Estimate" />
        </Container>
      </section>
    </>
  );
}