import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import QuoteCTA from "../components/conversion/QuoteCTA";
import { drivewaysPage } from "../data/driveways";
import { site } from "../data/site";

export default function DrivewaysPage() {
  const {
    hero,
    assessment,
    winter,
    comparison,
    examples,
    faqs,
    cta
  } = drivewaysPage;

  return (
    <div className="driveways-page">
      <Helmet>
        <title>{drivewaysPage.pageTitle}</title>
        <meta
          name="description"
          content={drivewaysPage.metaDescription}
        />
        <link
          rel="canonical"
          href={`${site.domain}${drivewaysPage.route}`}
        />
      </Helmet>

      <section className="driveways-hero" aria-labelledby="driveways-title">
        <Container className="driveways-hero__grid">
          <div className="driveways-hero__content">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 id="driveways-title">{hero.title}</h1>
            <p className="driveways-hero__description">
              {hero.description}
            </p>

            <div className="driveways-hero__actions">
              <QuoteCTA label={hero.ctaLabel} />
              <a href="#driveway-assessment">
                Check what we assess
              </a>
            </div>

            <p className="driveways-hero__service-area">
              {site.serviceArea}
            </p>
          </div>

          <figure className="driveways-hero__image">
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>
              Approved driveway installation image; location not verified.
            </figcaption>
          </figure>
        </Container>
      </section>

      <section
        id="driveway-assessment"
        className="driveways-assessment section"
        aria-labelledby="driveways-assessment-title"
      >
        <Container className="driveways-assessment__grid">
          <div className="driveways-page__heading">
            <Eyebrow>{assessment.eyebrow}</Eyebrow>
            <h2 id="driveways-assessment-title">{assessment.title}</h2>
            <p>{assessment.description}</p>
          </div>

          <ol className="driveways-assessment__list">
            {assessment.items.map((item, index) => (
              <li key={item.title}>
                <span
                  className="driveways-assessment__number"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className="driveways-winter section"
        aria-labelledby="driveways-winter-title"
      >
        <Container>
          <div className="driveways-page__heading">
            <Eyebrow>{winter.eyebrow}</Eyebrow>
            <h2 id="driveways-winter-title">{winter.title}</h2>
            <p>{winter.description}</p>
          </div>

          <div className="driveways-winter__grid">
            {winter.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <p className="driveways-winter__note">{winter.note}</p>
        </Container>
      </section>

      <section
        className="driveways-comparison section"
        aria-labelledby="driveways-comparison-title"
      >
        <Container>
          <div className="driveways-page__heading">
            <Eyebrow>{comparison.eyebrow}</Eyebrow>
            <h2 id="driveways-comparison-title">{comparison.title}</h2>
            <p>{comparison.description}</p>
          </div>

          <div
            className="driveways-comparison__scroll"
            role="region"
            aria-labelledby="driveways-comparison-title"
            tabIndex={0}
          >
            <table className="driveways-comparison__table">
              <caption className="sr-only">
                Planning questions for Resin Bound resurfacing and
                concrete replacement.
              </caption>
              <thead>
                <tr>
                  {comparison.columns.map((column) => (
                    <th scope="col" key={column}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.topic}>
                    <th scope="row">{row.topic}</th>
                    <td>{row.resin}</td>
                    <td>{row.concrete}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="driveways-comparison__systems">
            {comparison.systems.map((system) => (
              <article key={system.to}>
                <h3>{system.name}</h3>
                <p>{system.description}</p>
                <Link to={system.to}>{system.linkLabel} →</Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="driveways-examples section"
        aria-labelledby="driveways-examples-title"
      >
        <Container>
          <div className="driveways-page__heading">
            <Eyebrow>{examples.eyebrow}</Eyebrow>
            <h2 id="driveways-examples-title">{examples.title}</h2>
            <p>{examples.description}</p>
          </div>

          <div className="driveways-examples__grid">
            {examples.images.map((image) => (
              <figure key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="driveways-examples__links">
            <Link to="/projects">Browse the project gallery →</Link>
            <Link to="/patios">Planning a connected patio? →</Link>
            <Link to="/walkways-pathways">
              Explore entrance walkways → 
            </Link>
          </div>

          <div
            className="driveways-faqs"
            aria-labelledby="driveways-faqs-title"
          >
            <h2 id="driveways-faqs-title">
              Questions before resurfacing your driveway
            </h2>
            <div className="driveways-faqs__list">
              {faqs.map((faq) => (
                <details key={faq.id}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        className="driveways-cta section"
        aria-labelledby="driveways-cta-title"
      >
        <Container className="driveways-cta__grid">
          <div className="driveways-page__heading">
            <Eyebrow>{cta.eyebrow}</Eyebrow>
            <h2 id="driveways-cta-title">{cta.title}</h2>
            <p>{cta.description}</p>
          </div>

          <div className="driveways-cta__actions">
            <QuoteCTA label={cta.label} />
            <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
          </div>
        </Container>
      </section>
    </div>
  );
}c