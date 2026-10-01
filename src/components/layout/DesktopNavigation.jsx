import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { primaryNavigation } from "../../data/navigation";

export default function DesktopNavigation() {
  const [openLabel, setOpenLabel] = useState(null);
  const navigationRef = useRef(null);
  const triggerRefs = useRef({});

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!navigationRef.current?.contains(event.target)) {
        setOpenLabel(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key !== "Escape" || !openLabel) {
        return;
      }

      const activeLabel = openLabel;

      setOpenLabel(null);

      window.requestAnimationFrame(() => {
        triggerRefs.current[activeLabel]?.focus();
      });
    };

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openLabel]);

  const toggleGroup = (label) => {
    setOpenLabel((currentLabel) =>
      currentLabel === label ? null : label
    );
  };

  const closeMenu = () => {
    setOpenLabel(null);
  };

  return (
    <nav
      className="desktop-navigation"
      aria-label="Primary navigation"
      ref={navigationRef}
    >
      <ul>
        {primaryNavigation.map((item) => {
          if (!item.items) {
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "desktop-navigation__link is-active"
                      : "desktop-navigation__link"
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          }

          const isOpen = openLabel === item.label;
          const menuId = `desktop-navigation-${item.label
            .toLowerCase()
            .replace(/\s+/g, "-")}`;

          return (
            <li className="desktop-navigation__group" key={item.label}>
              <button
                ref={(element) => {
                  triggerRefs.current[item.label] = element;
                }}
                className={`desktop-navigation__link desktop-navigation__summary${
                  isOpen ? " is-open" : ""
                }`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={menuId}
                onClick={() => toggleGroup(item.label)}
              >
                <span>{item.label}</span>

                <ChevronDown
                  aria-hidden="true"
                  className="desktop-navigation__chevron"
                  size={15}
                  strokeWidth={2}
                />
              </button>

              {isOpen ? (
                <div className="desktop-navigation__menu" id={menuId}>
                  <NavLink
                    className="desktop-navigation__menu-overview"
                    to={item.to}
                    onClick={closeMenu}
                  >
                    View all {item.label}
                  </NavLink>

                  <ul>
                    {item.items.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "desktop-navigation__menu-link is-active"
                              : "desktop-navigation__menu-link"
                          }
                          to={child.to}
                          onClick={closeMenu}
                        >
                          <span>{child.label}</span>

                          <ChevronDown
                            aria-hidden="true"
                            className="desktop-navigation__menu-link-icon"
                            size={15}
                            strokeWidth={2}
                          />
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}