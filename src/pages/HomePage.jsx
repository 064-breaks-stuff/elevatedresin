import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{site.name}</title>
        <meta
          name="description"
          content="Premium resin-bound outdoor surfacing for homes and commercial properties in Menasha, Wisconsin and surrounding areas."
        />
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">P1 — Homepage</p>
          <h1>Homepage implementation begins after P0 review.</h1>
          <p>
            This route scaffold is intentional. The full homepage will be built only in the
            approved P1 implementation phase.
          </p>
        </Container>
      </section>
    </>
  );
}