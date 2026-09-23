import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function ResinWallPage() {
  return (
    <>
      <Helmet>
        <title>Resin Wall | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P8 — Resin Wall</p>
          <h1>Resin Wall</h1>
          <p>This page will be implemented after Rock Crete.</p>
        </Container>
      </section>
    </>
  );
}