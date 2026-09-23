import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import Button from "../common/Button";

export default function HomeFeaturedProject() {
  return (
    <section className="home-featured-project section">
      <Container className="home-featured-project__grid">
        <div className="home-featured-project__content">
          <Eyebrow>Our Work Speaks for Itself</Eyebrow>

          <h2>Crafted surfaces that elevate the way outdoor spaces look and feel.</h2>

          <p>
            Every Elevated Resin Creations project is designed to bring together a refined
            finish, practical surface performance, and thoughtful attention to the character
            of the space.
          </p>

          <Button to="/projects" showArrow>
            View All Projects
          </Button>
        </div>

        <div className="home-featured-project__visual">
          {/* TODO[ASSET]: Replace with approved standout project image. */}
          <PlaceholderVisual
            label="Featured Elevated Resin Creations project"
            assetName="PLACEHOLDER-featured-project.jpg"
            aspectRatio="feature"
          />
        </div>
      </Container>
    </section>
  );
}