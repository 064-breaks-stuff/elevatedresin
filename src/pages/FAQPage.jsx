import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import FAQAccordion from "../components/content/FAQAccordion";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { faqs } from "../data/faqs";
import { faqPage } from "../data/faqPage";
import { site } from "../data/site";

function createFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export default function FAQPage() {
  const faqSchema = createFaqSchema();

  return (
    <>
      <Helmet>
        <title>Resin-Bound Surfacing FAQs | {site.name}</title>

        <meta
          name="description"
          content="Find answers about resin-bound surface preparation, permeability, drainage, installation timing, maintenance, slip resistance, and project quotes."
        />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="faq-page-hero">
        <Container className="faq-page-hero__content">
          <Eyebrow>{faqPage.hero.eyebrow}</Eyebrow>

          <h1>{faqPage.hero.title}</h1>

          <p>{faqPage.hero.description}</p>

          <QuoteCTA label="Request a Free Quote" />
        </Container>
      </section>

      <section className="faq-page-content section">
        <Container className="faq-page-content__grid">
          <aside className="faq-page-content__aside">
            <Eyebrow>{faqPage.introduction.eyebrow}</Eyebrow>

            <h2>{faqPage.introduction.title}</h2>

            <p>{faqPage.introduction.description}</p>

            <nav
              className="faq-page-content__links"
              aria-label="Related service information"
            >
              <p>Explore related information</p>

              <ul>
                <li>
                  <Link to="/services/resin-bound">Resin Bound surfaces</Link>
                </li>
                <li>
                  <Link to="/services">All Resin Rock solutions</Link>
                </li>
                <li>
                  <Link to="/projects">Project inspiration</Link>
                </li>
              </ul>
            </nav>
          </aside>

          <div className="faq-page-content__accordion">
            <FAQAccordion items={faqs} initialOpenId={faqs[0]?.id ?? null} />
          </div>
        </Container>
      </section>

      <section className="faq-page-support section">
        <Container className="faq-page-support__content">
          <div>
            <p className="faq-page-support__eyebrow">
              {faqPage.support.eyebrow}
            </p>

            <h2>{faqPage.support.title}</h2>

            <p>{faqPage.support.description}</p>
          </div>

          <QuoteCTA label="Request a Free Quote" />
        </Container>
      </section>
    </>
  );
}