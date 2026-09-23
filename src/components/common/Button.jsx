import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  showArrow = false,
  ariaLabel,
  target,
  rel
}) {
  const classNames = `button button--${variant} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" size={18} strokeWidth={2} /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={classNames} to={to} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={classNames}
        href={href}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classNames} type={type} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}