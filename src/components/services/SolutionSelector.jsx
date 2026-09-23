import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import QuoteCTA from "../conversion/QuoteCTA";

const selectorItems = [
  {
    title: "Need a durable finished surface?",
    description:
      "Explore Resin Bound for seamless, permeable, decorative outdoor surfacing.",
    label: "Explore Resin Bound",
    to: "/services/resin-bound"
  },
  {
    title: "Want a nighttime design feature?",
    description:
      "Explore Glow Rock for daylight-charged stones that provide a soft glow after dark.",
    label: "Explore Glow Rock",
    to: "/services/glow-rock"
  },
  {
    title: "Need a performance-focused base?",
    description:
      "Explore Rock Crete for a permeable, durable foundation designed for resin-bound systems.",
    label: "Explore Rock Crete",
    to: "/services/rock-crete"
  },
  {
    title: "Want matching walls or vertical features?",
    description:
      "Explore Resin Wall for vertical stone surfacing on walls, steps, and decorative features.",
    label: "Explore Resin Wall",
    to: "/services/resin-wall"
  }
];

export default function SolutionSelector() {
  return (
    <section className="solution-selector section">
      <Container className="solution-selector__grid">
        <div className="solution-selector__intro">
          <Eyebrow>Find the Right System</Eyebrow>

          <h2>Which solution is right for your project?</h2>

          <p>
            The right Resin Rock system depends on how the space will be used,
            the finish you want to achieve, and the condition of the existing
            surface.
          </p>

          <QuoteCTA label="Discuss Your Project" />
        </div>

        <div className="solution-selector__list">
          {selectorItems.map((item) => (
            <Link className="solution-selector__item" to={item.to} key={item.to}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.label}</span>
              </div>

              <ArrowRight aria-hidden="true" size={22} strokeWidth={2} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}