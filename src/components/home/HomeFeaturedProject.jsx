import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import Button from "../common/Button";

export default function HomeFeaturedProject() {
  return (
    <section className="home-featured-project section">
      <Container className="home-featured-project__grid">
        <div className="home-featured-project__content">
          <Eyebrow>Explore by Project Type</Eyebrow>

          <h2>Plan the outdoor space you want to transform.</h2>

          <p>
            Explore project pages for driveways, patios, pool decks, walkways, and
            landscape areas. Each page helps you compare suitable system options around
            the existing surface, drainage needs, intended use, and finish goals.
          </p>

          <Button to="/services" showArrow>
            Explore Project Types
          </Button>
        </div>

        <div className="home-featured-project__visual">
          <img
            src="/images/home-featured-resin-pool-surround.jpg"
            alt="Light-coloured resin pool surround around a residential swimming pool."
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
}