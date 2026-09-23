import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function ThankYouPage() {
  return (
    <>
      <Helmet>
        <title>Thank You | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P10 — Thank You</p>
          <h1>Your request has been received!</h1>
          <p>Our team will review your details and contact you shortly.</p>
        </Container>
      </section>
    </>
  );
}