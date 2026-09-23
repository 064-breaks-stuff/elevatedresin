import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../content/ServiceCard";
import { services } from "../../data/services";

export default function HomeServices() {
  return (
    <section className="home-services section">
      <SectionHeading
        eyebrow="Our Resin Surfacing & Product Solutions"
        title="Choose a system designed around your space."
        description="Explore Resin Rock solutions for finished outdoor surfaces, nighttime illumination, durable sub-base performance, and matching vertical features."
      />

      <Container>
        <div className="home-services__grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.slug} />
          ))}
        </div>
      </Container>
    </section>
  );
}