import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P5 — Projects Gallery</p>
          <h1>Our Projects</h1>
          <p>This page will be implemented after the Resin Bound page.</p>
        </Container>
      </section>
    </>
  );
}