import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import QuoteCTA from "../conversion/QuoteCTA";

function PlaceholderSlide({ slide }) {
  return (
    <div className="projects-lightbox__placeholder">
      <div className="projects-lightbox__placeholder-inner">
        <p>Approved project asset required</p>
        <h2>{slide.title}</h2>
        <span>{slide.assetName}</span>
      </div>
    </div>
  );
}

function ProjectDetails({ project }) {
  return (
    <div className="projects-lightbox__details">
      <p className="projects-lightbox__category">{project.category}</p>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      {project.location ? (
        <p className="projects-lightbox__location">{project.location}</p>
      ) : null}

      <QuoteCTA label="Request a Similar Finish" />
    </div>
  );
}

export default function ProjectsLightbox({ projects, activeIndex, onClose }) {
  const isOpen = activeIndex !== null;
  const activeProject = isOpen ? projects[activeIndex] : null;

  const slides = projects.map((project) => ({
    title: project.title,
    assetName: project.image.assetName
  }));

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      index={activeIndex ?? 0}
      slides={slides}
      render={{
        slide: ({ slide }) => <PlaceholderSlide slide={slide} />
      }}
      toolbar={{
        buttons: ["close"]
      }}
      controller={{
        closeOnBackdropClick: true
      }}
      carousel={{
        finite: false
      }}
      styles={{
        container: {
          backgroundColor: "rgb(16 45 34 / 96%)"
        }
      }}
      renderFooter={() =>
        activeProject ? <ProjectDetails project={activeProject} /> : null
      }
    />
  );
}