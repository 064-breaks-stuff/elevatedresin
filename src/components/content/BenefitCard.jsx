import { Check } from "lucide-react";

export default function BenefitCard({ title }) {
  return (
    <article className="benefit-card">
      <span className="benefit-card__icon" aria-hidden="true">
        <Check size={18} strokeWidth={2.5} />
      </span>
      <h3>{title}</h3>
    </article>
  );
}