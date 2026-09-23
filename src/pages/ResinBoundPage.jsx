import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function ResinBoundPage() {
  return (
    <>
      <Helmet>
        <title>Resin Bound | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P4 — Resin Bound</p>
          <h1>Resin Bound</h1>
          <p>This page will be implemented after the Services Hub.</p>
        </Container>
      </section>
    </>
  );
}