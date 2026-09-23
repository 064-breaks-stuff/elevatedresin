import Container from "./Container";
import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = ""
}) {
  return (
    <Container className={`section-heading section-heading--${align} ${className}`.trim()}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </Container>
  );
}