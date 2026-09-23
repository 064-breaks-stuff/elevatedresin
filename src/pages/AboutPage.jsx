import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P11 — About</p>
          <h1>About Elevated Resin Creations</h1>
          <p>This page will be implemented after Contact and Thank-you.</p>
        </Container>
      </section>
    </>
  );
}