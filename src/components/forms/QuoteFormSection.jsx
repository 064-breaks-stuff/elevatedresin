import { Mail, Phone } from "lucide-react";

import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import GhlFormEmbed from "./GhlFormEmbed";
import { conversion } from "../../data/conversion";
import { site } from "../../data/site";

export default function QuoteFormSection({
  eyebrow = "Start Your Project",
  title = "Ready to Transform Your Outdoor Space?",
  description = "Tell us about your project and our team will get back to you as soon as possible.",
  id = conversion.quoteSectionId
}) {
  return (
    <section className="quote-form-section section" id={id}>
      <Container className="quote-form-section__grid">
        <div className="quote-form-section__content">
          <Eyebrow>{eyebrow}</Eyebrow>

          <h2>{title}</h2>

          <p>{description}</p>

          <p className="quote-form-section__area">{site.serviceArea}</p>

          <div className="quote-form-section__contact-options">
            <a href={site.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              <span>{site.phoneDisplay}</span>
            </a>

            <a href={site.emailHref}>
              <Mail aria-hidden="true" size={18} />
              <span>{site.email}</span>
            </a>
          </div>
        </div>

        <div className="quote-form-section__form">
          <GhlFormEmbed />
        </div>
      </Container>
    </section>
  );
}