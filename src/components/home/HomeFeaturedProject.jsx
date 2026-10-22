import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import Button from "../common/Button";

export default function HomeFeaturedProject() {
  return (
    <section className="home-featured-project section">
      <Container className="home-featured-project__grid">
        <div className="home-featured-project__content">
          <Eyebrow>Design Beyond the Surface</Eyebrow>
          <h2>A pool surround can connect the whole outdoor space.</h2>
          <p>Consider the pool edge, curved routes, seating, and adjoining planting together. Compare stone finishes and borders while assessing wet-area use, transitions, and water management. This approved image is an installation example, not an identified Elevated Resin Creations or Wisconsin project.</p>
          <Button to="/pool-decks" showArrow>Explore Pool Deck Projects</Button>
        </div>
        <div className="home-featured-project__visual">
          <img src="/images/home-featured-resin-pool-surround.jpg" alt="Light-coloured resin pool surround around a residential swimming pool." loading="lazy" />
        </div>
      </Container>
    </section>
  );
}
