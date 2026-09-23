import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";

export default function FAQAccordion({ items, initialOpenId = null }) {
  const [openId, setOpenId] = useState(initialOpenId);
  const baseId = useId();

  const handleToggle = (id) => {
    setOpenId((currentOpenId) => (currentOpenId === id ? null : id));
  };

  return (
    <div className="faq-accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const contentId = `${baseId}-${item.id}`;

        return (
          <article className={`faq-accordion__item ${isOpen ? "is-open" : ""}`} key={item.id}>
            <h3>
              <button
                type="button"
                className="faq-accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => handleToggle(item.id)}
              >
                <span>{item.question}</span>
                <span className="faq-accordion__icon" aria-hidden="true">
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
            </h3>

            <div
              id={contentId}
              className="faq-accordion__panel"
              hidden={!isOpen}
              role="region"
              aria-label={item.question}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}