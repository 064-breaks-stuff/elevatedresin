import Button from "../common/Button";
import useQuoteTarget from "../../hooks/useQuoteTarget";
import { conversion } from "../../data/conversion";

export default function QuoteCTA({
  label = conversion.primaryQuoteLabel,
  variant = "primary",
  className = "",
  showArrow = true,
  ariaLabel
}) {
  const quoteTarget = useQuoteTarget(label);

  if (quoteTarget.targetType === "anchor") {
    return (
      <Button
        href={quoteTarget.href}
        variant={variant}
        className={className}
        showArrow={showArrow}
        ariaLabel={ariaLabel ?? label}
      >
        {quoteTarget.label}
      </Button>
    );
  }

  return (
    <Button
      to={quoteTarget.to}
      variant={variant}
      className={className}
      showArrow={showArrow}
      ariaLabel={ariaLabel ?? label}
    >
      {quoteTarget.label}
    </Button>
  );
}