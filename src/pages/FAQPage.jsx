import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P9 — FAQ</p>
          <h1>Frequently Asked Questions</h1>
          <p>This page will be implemented after the four service pages.</p>
        </Container>
      </section>
    </>
  );
}