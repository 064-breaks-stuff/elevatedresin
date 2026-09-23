import Container from "../common/Container";
import { trustItems } from "../../data/home";

export default function HomeTrustBar() {
  return (
    <section className="trust-bar" aria-label="Resin-bound surface benefits">
      <Container>
        <ul className="trust-bar__list">
          {trustItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}