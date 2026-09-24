import { Link } from "react-router-dom";

import Container from "../common/Container";

export default function RockCreteGlowLink() {
  return (
    <section className="rock-crete-glow-link section">
      <Container className="rock-crete-glow-link__content">
        <div>
          <p className="rock-crete-glow-link__eyebrow">
            Rock Crete & Glow Rock
          </p>

          <h2>Pair a permeable foundation with a distinctive nighttime surface feature.</h2>

          <p>
            Explore Glow Rock to learn more about daylight-charged glow stones
            that can be considered as part of a broader Resin Rock surface system.
          </p>
        </div>

        <Link className="button button--secondary" to="/services/glow-rock">
          <span>Explore Glow Rock</span>
        </Link>
      </Container>
    </section>
  );
}