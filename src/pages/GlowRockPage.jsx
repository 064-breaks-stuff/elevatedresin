import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function GlowRockPage() {
  return (
    <>
      <Helmet>
        <title>Glow Rock | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P6 — Glow Rock</p>
          <h1>Glow Rock</h1>
          <p>This page will be implemented after the Projects Gallery.</p>
        </Container>
      </section>
    </>
  );
}