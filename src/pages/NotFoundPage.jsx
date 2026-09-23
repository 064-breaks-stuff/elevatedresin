import { Helmet } from "react-helmet-async";

import Button from "../components/common/Button";
import Container from "../components/common/Container";
import { site } from "../data/site";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | {site.name}</title>
      </Helmet>

      <section className="route-placeholder section">
        <Container>
          <p className="route-placeholder__label">404</p>
          <h1>We couldn’t find that page.</h1>
          <p>The page may have moved, been removed, or the address may be incorrect.</p>

          <div className="route-placeholder__actions">
            <Button to="/" showArrow>
              Return Home
            </Button>
            <Button to="/services" variant="secondary">
              View Services
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}