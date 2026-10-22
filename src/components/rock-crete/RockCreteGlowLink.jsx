import { Link } from "react-router-dom";
import Container from "../common/Container";

export default function RockCreteGlowLink() {
  return (
    <section className="rock-crete-glow-link section">
      <Container className="rock-crete-glow-link__content">
        <div>
          <p className="rock-crete-glow-link__eyebrow">Rock Crete &amp; Glow Rock</p>
          <h2>Resolve the supporting construction, then choose the decorative detail.</h2>
          <p>Explore selected glow aggregate and paving options after confirming their intended application and compatibility. The decorative effect does not establish structural capacity or replace lighting.</p>
        </div>
        <Link className="button button--secondary" to="/services/glow-rock"><span>Explore Glow Rock</span></Link>
      </Container>
    </section>
  );
}
