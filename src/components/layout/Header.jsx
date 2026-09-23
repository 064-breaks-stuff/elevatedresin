import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../common/Button";
import Container from "../common/Container";
import { site } from "../../data/site";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("is-menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("is-menu-open");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="site-header">
      <Container className="site-header__content">
        <Link className="site-header__brand" to="/" aria-label={`${site.name} home`}>
          {/* TODO[ASSET]: Replace this text mark with the approved Elevated Resin Creations logo. */}
          <span className="site-header__brand-mark">ER</span>
          <span className="site-header__brand-text">
            <strong>Elevated Resin</strong>
            <small>Creations</small>
          </span>
        </Link>

        <DesktopNavigation />

        <div className="site-header__actions">
          <Button className="site-header__cta" to="/contact" showArrow>
            Request a Free Quote
          </Button>

          <button
            className="site-header__menu-button"
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu aria-hidden="true" size={24} />
          </button>
        </div>
      </Container>

      <div id="mobile-navigation">
        <MobileNavigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
}