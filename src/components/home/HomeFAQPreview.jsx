import Button from "../common/Button";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import FAQAccordion from "../content/FAQAccordion";
import { faqs } from "../../data/faqs";
import { homepageFaqIds } from "../../data/home";

export default function HomeFAQPreview() {
  const featuredFaqs = homepageFaqIds
    .map((faqId) => faqs.find((faq) => faq.id === faqId))
    .filter(Boolean);

  return (
    <section className="home-faq section">
      <SectionHeading
        eyebrow="Common Questions"
        title="Answers to help you plan with confidence."
        description="Explore common questions about preparation, permeability, installation timing, and quote requirements."
      />

      <Container className="home-faq__content">
        <FAQAccordion items={featuredFaqs} initialOpenId={featuredFaqs[0]?.id ?? null} />

        <div className="home-faq__action">
          <Button to="/faq" variant="secondary" showArrow>
            View All FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
}