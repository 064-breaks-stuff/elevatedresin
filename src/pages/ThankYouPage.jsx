import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import { contactPage } from "../data/contactPage";
import { site } from "../data/site";

export default function ThankYouPage() {
  const { thankYou } = contactPage;

  return (
    <>
      <Helmet>
        <title>Thank You | {site.name}</title>

        <meta
          name="description"
          content="Your Elevated Resin Creations quote request has been received."
        />
      </Helmet>

      <section className="thank-you-page">
        <Container className="thank-you-page__content">
          <div className="thank-you-page__icon" aria-hidden="true">
            <CheckCircle2 size={42} strokeWidth={1.6} />
          </div>

          <Eyebrow>{thankYou.eyebrow}</Eyebrow>

          <h1>{thankYou.title}</h1>

          <p>{thankYou.description}</p>

          <div className="thank-you-page__actions">
            <Link className="button button--primary" to="/">
              <span>Return Home</span>
            </Link>

            <Link className="button button--secondary" to="/projects">
              <span>View Recent Projects</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}