import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

import { primaryNavigation } from "../../data/navigation";

export default function DesktopNavigation() {
  return (
    <nav className="desktop-navigation" aria-label="Primary navigation">
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
                >
                  {item.label}
                </NavLink>
              </li>
            );
          }

          return (
            <li className="desktop-navigation__group" key={item.label}>
              <details className="desktop-navigation__details">
                <summary className="desktop-navigation__link desktop-navigation__summary">
                  <span>{item.label}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className="desktop-navigation__chevron"
                    size={15}
                    strokeWidth={2}
                  />
                </summary>

                <div className="desktop-navigation__menu">
                  <NavLink
                    className="desktop-navigation__menu-overview"
                    to={item.to}
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
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}