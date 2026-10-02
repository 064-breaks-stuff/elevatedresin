import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const projects = [
  {
    id: "dark-driveway",
    src: "/images/projects-grid-driveway-dark.jpg",
    alt: "Dark resin driveway outside a brick residential garage.",
    className: "projects-grid__item--wide"
  },
  {
    id: "light-driveway",
    src: "/images/projects-grid-driveway-light.jpg",
    alt: "Light resin driveway leading to a residential front entrance and garage.",
    className: "projects-grid__item--tall"
  },
  {
    id: "commercial-surface",
    src: "/images/projects-grid-commercial-surface.jpg",
    alt: "Resin surface outside a commercial building entrance with a circular floor marking.",
    className: "projects-grid__item--standard"
  },
  {
    id: "pool-surround",
    src: "/images/projects-grid-pool-surround.jpg",
    alt: "Light resin pool surround around a curved residential swimming pool.",
    className: "projects-grid__item--standard"
  },
  {
    id: "landscape-pool",
    src: "/images/projects-grid-landscape-pool.jpg",
    alt: "Light resin pool surround beside landscaped garden beds and flowering plants.",
    className: "projects-grid__item--wide"
  },
  {
    id: "glow-edge",
    src: "/images/projects-grid-glow-edge.jpg",
    alt: "Pink glowing edge detail beside a landscaped stone bed at night.",
    className: "projects-grid__item--standard"
  },
  {
    id: "glow-driveway",
    src: "/images/projects-grid-glow-driveway.jpg",
    alt: "Blue-glowing geometric driveway pattern outside a residential property at dusk.",
    className: "projects-grid__item--wide"
  },
  {
    id: "resin-wall",
    src: "/images/projects-grid-resin-wall.jpg",
    alt: "Close view of a finished textured retaining-wall surface.",
    className: "projects-grid__item--standard"
  }
];

export default function ProjectsGrid() {
  return (
    <section className="projects-grid section">
      <Container>
        <SectionHeading
          eyebrow="Project gallery"
          title="Explore finished outdoor surfaces."
          description="A selection of completed surface, driveway, patio, pool, landscape, and glow-feature projects."
        />

        <div className="projects-grid__layout">
          {projects.map((project) => (
            <figure
              className={`projects-grid__item ${project.className}`}
              key={project.id}
            >
              <img src={project.src} alt={project.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}