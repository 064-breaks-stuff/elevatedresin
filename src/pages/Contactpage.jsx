import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P10 — Contact</p>
          <h1>Contact</h1>
          <p>This page will be implemented after the FAQ page.</p>
        </Container>
      </section>
    </>
  );
}