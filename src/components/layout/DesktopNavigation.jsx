import { NavLink } from "react-router-dom";

import { primaryNavigation } from "../../data/navigation";

export default function DesktopNavigation() {
  return (
    <nav className="desktop-navigation" aria-label="Primary navigation">
      <ul>
        {primaryNavigation.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? "desktop-navigation__link is-active" : "desktop-navigation__link"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}