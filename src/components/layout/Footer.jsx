import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import { legalNavigation, primaryNavigation, serviceNavigation } from "../../data/navigation";
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
              Premium resin-bound outdoor surfacing for homes and commercial properties.
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

          <div className="site-footer__column">
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