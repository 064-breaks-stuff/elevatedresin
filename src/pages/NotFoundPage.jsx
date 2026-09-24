import { Helmet } from "react-helmet-async";
import { ArrowLeft, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import { site } from "../data/site";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | {site.name}</title>

        <meta
          name="description"
          content="The page you are looking for could not be found."
        />
      </Helmet>

      <main className="not-found-page">
        <Container className="not-found-page__container">
          <p className="not-found-page__code" aria-hidden="true">
            404
          </p>

          <h1>Page not found</h1>

          <p>
            The page you are looking for is unavailable or may have moved.
          </p>

          <div className="not-found-page__actions">
            <Link className="button button--primary" to="/">
              <ArrowLeft aria-hidden="true" size={18} strokeWidth={2} />
              <span>Return Home</span>
            </Link>

            <Link className="button button--secondary" to="/services">
              <LayoutGrid aria-hidden="true" size={18} strokeWidth={2} />
              <span>View Services</span>
            </Link>
          </div>
        </Container>
      </main>
    </>
  );
}