import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import QuoteCTA from "../conversion/QuoteCTA";
import FAQAccordion from "../content/FAQAccordion";
import { faqs } from "../../data/faqs";
import { rockCreteFaqIds, rockCretePage } from "../../data/rockCrete";

export default function RockCreteFaq() {
  const rockCreteFaqs = rockCreteFaqIds
    .map((faqId) => faqs.find((faq) => faq.id === faqId))
    .filter(Boolean);

  return (
    <section className="rock-crete-faq section">
      <SectionHeading
        eyebrow={rockCretePage.faq.eyebrow}
        title={rockCretePage.faq.title}
        description={rockCretePage.faq.description}
      />

      <Container className="rock-crete-faq__content">
        <FAQAccordion
          items={rockCreteFaqs}
          initialOpenId={rockCreteFaqs[0]?.id ?? null}
        />

        <div className="rock-crete-faq__action">
          <QuoteCTA label="Request a Quote" />
        </div>
      </Container>
    </section>
  );
}