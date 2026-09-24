import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPinned,
  Navigation,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import {
  legalNavigation,
  primaryNavigation,
  serviceNavigation
} from "../../data/navigation";
import { site } from "../../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div className="site-footer__brand-column">
            <Link className="site-footer__brand" to="/">
              <span className="site-footer__brand-mark">ER</span>
              <span>
                <strong>Elevated Resin</strong>
                <small>Creations</small>
              </span>
            </Link>

            <p>
              Premium resin-bound outdoor surfacing for homes and commercial
              properties.
            </p>

            <p className="site-footer__service-area">{site.serviceArea}</p>
          </div>

          <div className="site-footer__column">
            <p className="site-footer__heading">Explore</p>

            <ul>
              {primaryNavigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <p className="site-footer__heading">Solutions</p>

            <ul>
              {serviceNavigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column site-footer__contact-column">
            <p className="site-footer__heading">Get in touch</p>

            <ul className="site-footer__contact-list">
              <li>
                <a href={site.phoneHref}>
                  <Phone aria-hidden="true" size={17} />
                  <span>{site.phoneDisplay}</span>
                </a>
              </li>

              <li>
                <a href={site.emailHref}>
                  <Mail aria-hidden="true" size={17} />
                  <span>{site.email}</span>
                </a>
              </li>
            </ul>

            <Link className="site-footer__quote-link" to="/contact">
              Request a Free Quote
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>

        <div className="site-footer__location">
          <div className="site-footer__location-details">
            <p className="site-footer__heading">Visit & Connect</p>

            <address className="site-footer__address">
              <MapPinned aria-hidden="true" size={18} />

              <span>
                <strong>{site.name}</strong>
                <span>{site.address.streetAddress}</span>
                <span>
                  {site.address.addressLocality}, {site.address.addressRegion}{" "}
                  {site.address.postalCode}
                </span>
              </span>
            </address>

            <div className="site-footer__hours">
              <Clock3 aria-hidden="true" size={18} />

              <div>
                <strong>Hours</strong>

                {site.businessHours.map((hours) => (
                  <span key={hours.label}>
                    {hours.label}: {hours.value}
                  </span>
                ))}
              </div>
            </div>

            <div className="site-footer__location-actions">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Navigation aria-hidden="true" size={17} />
                <span>Get Directions</span>
              </a>

              <a
                href={site.googleBusinessProfileUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MapPinned aria-hidden="true" size={17} />
                <span>View on Google</span>
              </a>
            </div>
          </div>

          <div className="site-footer__map">
            <iframe
              title="Map showing Elevated Resin Creations in Menasha, Wisconsin"
              src={site.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>

          <ul>
            {legalNavigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}