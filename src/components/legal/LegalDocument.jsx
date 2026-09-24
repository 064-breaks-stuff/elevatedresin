import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";

export default function LegalDocument({ document }) {
  return (
    <main className="legal-document">
      <section className="legal-document__hero">
        <Container>
          <Eyebrow>Draft for Client Review</Eyebrow>

          <h1>{document.title}</h1>

          <p className="legal-document__intro">{document.intro}</p>

          <p className="legal-document__effective-date">
            <strong>Effective date:</strong> {document.effectiveDate}
          </p>
        </Container>
      </section>

      <section className="legal-document__content section">
        <Container className="legal-document__container">
          <div
            className="legal-document__notice"
            role="note"
            aria-label="Draft legal notice"
          >
            <p>
              This document is draft content for client review. It must not be
              treated as final legal advice or published as approved legal text
              until the client has confirmed the wording and effective date.
            </p>
          </div>

          <div className="legal-document__sections">
            {document.sections.map((section) => (
              <section
                className="legal-document__section"
                key={section.title}
              >
                <h2>{section.title}</h2>

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}