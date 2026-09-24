import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import QuoteCTA from "../conversion/QuoteCTA";
import FAQAccordion from "../content/FAQAccordion";
import { faqs } from "../../data/faqs";
import { glowRockFaqIds } from "../../data/glowRock";

export default function GlowRockFaq() {
  const glowRockFaqs = glowRockFaqIds
    .map((faqId) => faqs.find((faq) => faq.id === faqId))
    .filter(Boolean);

  return (
    <section className="glow-rock-faq section">
      <SectionHeading
        eyebrow="Glow Rock FAQs"
        title="Questions about Glow Rock and resin-bound surfaces."
        description="Explore a selection of common questions about drainage, slip resistance, maintenance, and requesting a project quote."
      />

      <Container className="glow-rock-faq__content">
        <FAQAccordion
          items={glowRockFaqs}
          initialOpenId={glowRockFaqs[0]?.id ?? null}
        />

        <div className="glow-rock-faq__action">
          <QuoteCTA label="Request a Free Quote" />
        </div>
      </Container>
    </section>
  );
}