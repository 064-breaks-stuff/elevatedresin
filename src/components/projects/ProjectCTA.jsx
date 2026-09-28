import Container from "../common/Container";
import QuoteCTA from "../conversion/QuoteCTA";
import { site } from "../../data/site";

export default function ProjectCTA({ page }) {
  return (
    <section className="project-landing-cta section">
      <Container className="project-landing-cta__content">
        <div>
          <p className="project-landing-cta__eyebrow">Request a Project Estimate</p>

          <h2>Tell us about the complete project you are planning.</h2>

          <p>{page.projectQualifier}</p>
        </div>

        <div className="project-landing-cta__actions">
          <QuoteCTA label={page.primaryCtaLabel} />

          <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
        </div>
      </Container>
    </section>
  );
}