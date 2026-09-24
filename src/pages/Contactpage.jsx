import { Helmet } from "react-helmet-async";
import { CircleHelp, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import Eyebrow from "../components/common/Eyebrow";
import GhlFormEmbed from "../components/forms/GhlFormEmbed";
import { contactPage } from "../data/contactPage";
import { site } from "../data/site";

export default function ContactPage() {
  const { contact } = contactPage;

  return (
    <>
      <Helmet>
        <title>Request a Resin Surfacing Quote | {site.name}</title>

        <meta
          name="description"
          content="Contact Elevated Resin Creations to request a quote or discuss a resin-bound driveway, patio, pathway, pool area, commercial surface, or vertical feature."
        />
      </Helmet>

      <section className="contact-page-hero">
        <Container className="contact-page-hero__content">
          <Eyebrow>{contact.hero.eyebrow}</Eyebrow>

          <h1>{contact.hero.title}</h1>

          <p>{contact.hero.description}</p>

          <p className="contact-page-hero__service-area">{site.serviceArea}</p>
        </Container>
      </section>

      <section className="contact-page-form section">
        <Container className="contact-page-form__grid">
          <div className="contact-page-form__content">
            <Eyebrow>{contact.form.eyebrow}</Eyebrow>

            <h2>{contact.form.title}</h2>

            <p>{contact.form.description}</p>

            <div className="contact-page-form__details">
              <a href={site.phoneHref}>
                <Phone aria-hidden="true" size={19} strokeWidth={2} />
                <span>
                  <small>Call us</small>
                  {site.phoneDisplay}
                </span>
              </a>

              <a href={site.emailHref}>
                <Mail aria-hidden="true" size={19} strokeWidth={2} />
                <span>
                  <small>Email us</small>
                  {site.email}
                </span>
              </a>
            </div>
          </div>

          <div className="contact-page-form__embed">
            <GhlFormEmbed />
          </div>
        </Container>
      </section>

      <section className="contact-page-support section">
        <Container className="contact-page-support__content">
          <div className="contact-page-support__icon" aria-hidden="true">
            <CircleHelp size={28} strokeWidth={1.8} />
          </div>

          <div>
            <p className="contact-page-support__eyebrow">
              {contact.support.eyebrow}
            </p>

            <h2>{contact.support.title}</h2>

            <p>{contact.support.description}</p>
          </div>

          <Link className="button button--secondary" to="/faq">
            <span>View FAQs</span>
          </Link>
        </Container>
      </section>
    </>
  );
}