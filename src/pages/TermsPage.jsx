import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P12 — Legal</p>
          <h1>Terms & Conditions</h1>
          <p>This page will be implemented during the legal and launch-readiness phase.</p>
        </Container>
      </section>
    </>
  );
}