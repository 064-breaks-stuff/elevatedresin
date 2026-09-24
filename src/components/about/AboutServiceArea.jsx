import { MapPinned } from "lucide-react";

import Container from "../common/Container";
import QuoteCTA from "../conversion/QuoteCTA";
import { aboutPage } from "../../data/aboutPage";

export default function AboutServiceArea() {
  const { serviceArea } = aboutPage;

  return (
    <section className="about-service-area section">
      <Container className="about-service-area__content">
        <div className="about-service-area__icon" aria-hidden="true">
          <MapPinned size={30} strokeWidth={1.8} />
        </div>

        <div>
          <p className="about-service-area__eyebrow">{serviceArea.eyebrow}</p>

          <h2>{serviceArea.title}</h2>

          <p>{serviceArea.description}</p>
        </div>

        <QuoteCTA label="Request a Free Quote" />
      </Container>
    </section>
  );
}