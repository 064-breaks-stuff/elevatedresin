import { Helmet } from "react-helmet-async";

import Container from "../components/common/Container";
import QuoteCTA from "../components/conversion/QuoteCTA";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectsHero from "../components/projects/ProjectsHero";
import { site } from "../data/site";

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Resin Surfacing Projects | {site.name}</title>
        <meta
          name="description"
          content="Explore resin-bound surfacing inspiration for driveways, patios, pathways, pool areas, landscaped spaces, commercial areas, and related Resin Rock solutions."
        />
      </Helmet>

      <ProjectsHero />
      <ProjectsGrid />

      <section className="projects-contact-cta section">
        <Container className="projects-contact-cta__content">
          <div>
            <p className="projects-contact-cta__eyebrow">Inspired by What You See?</p>

            <h2>Tell us about the space you want to transform.</h2>

            <p>
              Discuss a driveway, patio, pathway, pool area, landscape feature,
              commercial space, or related Resin Rock system with Elevated Resin
              Creations.
            </p>
          </div>

          <QuoteCTA label="Request a Similar Finish" />
        </Container>
      </section>
    </>
  );
}