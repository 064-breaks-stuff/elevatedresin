import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function ProductOptions({ products }) {
  return (
    <section className="project-product-options section">
      <SectionHeading
        eyebrow="Choose Your Surface Option"
        title="Compare systems around the outcome you want."
        description="The right option depends on the existing surface, drainage, intended use, finish goals, and the requirements of the complete project."
      />

      <Container>
        <div className="project-product-options__grid">
          {products.map((product) => (
            <article className="project-product-option" key={product.to}>
              <h3>{product.name}</h3>

              <p>{product.useCase}</p>

              <p className="project-product-option__benefit">
                {product.keyBenefit}
              </p>

              <Link className="project-product-option__link" to={product.to}>
                <span>Explore {product.name}</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}