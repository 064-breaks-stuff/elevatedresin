import Eyebrow from "../common/Eyebrow";
import Container from "../common/Container";
import QuoteCTA from "../conversion/QuoteCTA";
import { site } from "../../data/site";

export default function ProjectHero({ page }) {
  return (
    <section className={`project-landing-hero project-landing-hero--${page.slug}`}>
      <Container className="project-landing-hero__content">
        <Eyebrow>{page.eyebrow}</Eyebrow>

        <h1>{page.heroTitle}</h1>

        <p>{page.heroDescription}</p>

        <div className="project-landing-hero__actions">
          <QuoteCTA label={page.primaryCtaLabel} />

          <a className="button button--secondary" href={site.phoneHref}>
            Call {site.phoneDisplay}
          </a>
        </div>

        <p className="project-landing-hero__service-area">
          {site.serviceArea}
        </p>
      </Container>
    </section>
  );
}