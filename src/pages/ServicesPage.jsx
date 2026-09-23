import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P3 — Services Hub</p>
          <h1>Services</h1>
          <p>This page will be implemented after the homepage and shared conversion system.</p>
        </Container>
      </section>
    </>
  );
}