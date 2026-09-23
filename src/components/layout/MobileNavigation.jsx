import { Phone, X } from "lucide-react";
import { NavLink } from "react-router-dom";

import QuoteCTA from "../conversion/QuoteCTA";
import { primaryNavigation } from "../../data/navigation";
import { site } from "../../data/site";

export default function MobileNavigation({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="mobile-navigation" role="dialog" aria-modal="true" aria-label="Mobile menu">
      <div className="mobile-navigation__backdrop" onClick={onClose} aria-hidden="true" />

      <div className="mobile-navigation__panel">
        <div className="mobile-navigation__top">
          <p className="mobile-navigation__brand">{site.name}</p>

          <button
            className="mobile-navigation__close"
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X aria-hidden="true" size={24} />
          </button>
        </div>

        <nav aria-label="Mobile primary navigation">
          <ul className="mobile-navigation__links">
            {primaryNavigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} onClick={onClose}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-navigation__actions">
          <a className="mobile-navigation__phone" href={site.phoneHref}>
            <Phone aria-hidden="true" size={18} />
            <span>Call {site.phoneDisplay}</span>
          </a>

          <QuoteCTA
            label="Request a Free Quote"
            showArrow
            ariaLabel="Request a free quote"
          />
        </div>
      </div>
    </div>
  );
}