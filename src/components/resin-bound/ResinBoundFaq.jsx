import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import QuoteCTA from "../conversion/QuoteCTA";
import FAQAccordion from "../content/FAQAccordion";
import { faqs } from "../../data/faqs";
import { resinBoundFaqIds } from "../../data/resinBound";

export default function ResinBoundFaq() {
  const resinBoundFaqs = resinBoundFaqIds
    .map((faqId) => faqs.find((faq) => faq.id === faqId))
    .filter(Boolean);

  return (
    <section className="resin-bound-faq section">
      <SectionHeading
        eyebrow="Resin Bound FAQs"
        title="Questions about your surface, preparation, and quote."
        description="Review common questions about resin-bound surfacing. If you need guidance specific to your space, get in touch with Elevated Resin Creations."
      />

      <Container className="resin-bound-faq__content">
        <FAQAccordion
          items={resinBoundFaqs}
          initialOpenId={resinBoundFaqs[0]?.id ?? null}
        />

        <div className="resin-bound-faq__action">
          <QuoteCTA label="Request a Free Quote" />
        </div>
      </Container>
    </section>
  );
}