import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import QuoteCTA from "../conversion/QuoteCTA";
import FAQAccordion from "../content/FAQAccordion";
import { faqs } from "../../data/faqs";
import { resinWallFaqIds, resinWallPage } from "../../data/resinWall";

export default function ResinWallFaq() {
  const resinWallFaqs = resinWallFaqIds
    .map((faqId) => faqs.find((faq) => faq.id === faqId))
    .filter(Boolean);

  return (
    <section className="resin-wall-faq section">
      <SectionHeading
        eyebrow={resinWallPage.faq.eyebrow}
        title={resinWallPage.faq.title}
        description={resinWallPage.faq.description}
      />

      <Container className="resin-wall-faq__content">
        <FAQAccordion
          items={resinWallFaqs}
          initialOpenId={resinWallFaqs[0]?.id ?? null}
        />

        <div className="resin-wall-faq__action">
          <QuoteCTA label="Request a Quote" />
        </div>
      </Container>
    </section>
  );
}