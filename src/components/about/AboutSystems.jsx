import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../content/ServiceCard";
import { aboutPage } from "../../data/aboutPage";
import { services } from "../../data/services";

export default function AboutSystems() {
  const { systems } = aboutPage;

  return (
    <section className="about-systems section">
      <SectionHeading
        eyebrow={systems.eyebrow}
        title={systems.title}
        description={systems.description}
      />

      <Container>
        <div className="about-systems__grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}