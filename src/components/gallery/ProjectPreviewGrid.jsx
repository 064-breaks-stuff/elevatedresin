import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import PlaceholderVisual from "../common/PlaceholderVisual";

const previewItems = [
  {
    id: "project-01",
    label: "Project gallery image 01",
    assetName: "PLACEHOLDER-project-01.jpg",
    className: "project-preview__item--wide"
  },
  {
    id: "project-02",
    label: "Project gallery image 02",
    assetName: "PLACEHOLDER-project-02.jpg",
    className: "project-preview__item--tall"
  },
  {
    id: "project-03",
    label: "Project gallery image 03",
    assetName: "PLACEHOLDER-project-03.jpg",
    className: "project-preview__item--standard"
  },
  {
    id: "project-04",
    label: "Project gallery image 04",
    assetName: "PLACEHOLDER-project-04.jpg",
    className: "project-preview__item--standard"
  },
  {
    id: "project-05",
    label: "Project gallery image 05",
    assetName: "PLACEHOLDER-project-05.jpg",
    className: "project-preview__item--wide"
  },
  {
    id: "project-06",
    label: "Project gallery image 06",
    assetName: "PLACEHOLDER-project-06.jpg",
    className: "project-preview__item--standard"
  }
];

export default function ProjectPreviewGrid() {
  return (
    <div className="project-preview">
      <div className="project-preview__grid">
        {previewItems.map((item) => (
          <Link
            className={`project-preview__item ${item.className}`}
            to="/projects"
            key={item.id}
            aria-label={`View projects: ${item.label}`}
          >
            {/* TODO[ASSET]: Replace with approved Elevated Resin Creations gallery image. */}
            <PlaceholderVisual
              label={item.label}
              assetName={item.assetName}
              aspectRatio="gallery"
            />
            <span className="project-preview__overlay" aria-hidden="true">
              <ArrowUpRight size={24} strokeWidth={2} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}