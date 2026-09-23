import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function RockCretePage() {
  return (
    <>
      <Helmet>
        <title>Rock Crete | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P7 — Rock Crete</p>
          <h1>Rock Crete</h1>
          <p>This page will be implemented after Glow Rock.</p>
        </Container>
      </section>
    </>
  );
}