import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function ThankYouPage() {
  return (
    <>
      <Helmet>
        <title>Thank You | {site.name}</title>

        <meta
          name="description"
          content="Thank you for contacting Elevated Resin Creations about your outdoor surface project."
        />

        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section
        className="thank-you-page section"
        aria-labelledby="thank-you-title"
      >
        <Container className="thank-you-page__content">
          <div className="thank-you-page__icon" aria-hidden="true">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              focusable="false"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          </div>

          <p className="eyebrow">Project Enquiry</p>

          <h1 id="thank-you-title">
            Thank you for getting in touch.
          </h1>

          <p>
            Your project enquiry is the starting point for a conversation
            about your property, intended use, existing construction,
            drainage, and finish preferences.
          </p>

          <p>
            Keep any photographs, approximate measurements, and questions
            about access or drainage handy for the next discussion.
            Submitting an enquiry does not confirm an installation booking
            or a final project estimate.
          </p>

          <div className="thank-you-page__actions">
            <Link className="button button--primary" to="/">
              Return to Homepage
            </Link>

            <Link className="button button--secondary" to="/services">
              Explore Surface Options
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}