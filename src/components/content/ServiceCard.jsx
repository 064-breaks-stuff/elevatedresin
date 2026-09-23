import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import PlaceholderVisual from "../common/PlaceholderVisual";

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <Link className="service-card__media-link" to={service.route} aria-label={`Explore ${service.name}`}>
        {/* TODO[ASSET]: Replace with approved original Elevated Resin Creations service asset. */}
        <PlaceholderVisual
          label={`${service.name} visual`}
          assetName={service.placeholderAsset}
          aspectRatio="portrait"
          className="service-card__visual"
        />
      </Link>

      <div className="service-card__content">
        <h3>
          <Link to={service.route}>{service.name}</Link>
        </h3>

        <p>{service.description}</p>

        <Link className="service-card__link" to={service.route}>
          <span>Explore</span>
          <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}