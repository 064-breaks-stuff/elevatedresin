import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import QuoteCTA from "../components/conversion/QuoteCTA";
import ServiceCard from "../components/content/ServiceCard";
import ApplicationsGrid from "../components/services/ApplicationsGrid";
import ServicesHero from "../components/services/ServicesHero";
import SolutionSelector from "../components/services/SolutionSelector";
import { services } from "../data/services";
import { site } from "../data/site";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Resin Surfacing Services | {site.name}</title>
        <meta
          name="description"
          content="Explore Resin Bound, Glow Rock, Rock Crete, and Resin Wall solutions from Elevated Resin Creations in Menasha, Wisconsin and surrounding areas."
        />
      </Helmet>

      <ServicesHero />

      <section className="services-overview section">
        <SectionHeading
          eyebrow="Our Product Systems"
          title="A complete range of Resin Rock surface solutions."
          description="Every system has a different role: finished resin-bound surfaces, glow-in-the-dark aggregate, a durable permeable foundation, and coordinated vertical stone surfacing."
        />

        <Container>
          <div className="services-overview__grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <ApplicationsGrid />

      <SolutionSelector />

      <section className="services-contact-cta section">
        <Container className="services-contact-cta__content">
          <div>
            <p className="services-contact-cta__eyebrow">Ready to Get Started?</p>

            <h2>Tell us about the space you want to transform.</h2>

            <p>
              Discuss your driveway, patio, pathway, pool area, landscaped
              space, commercial surface, or vertical feature with Elevated
              Resin Creations.
            </p>
          </div>

          <QuoteCTA label="Request a Free Quote" />
        </Container>
      </section>
    </>
  );
}