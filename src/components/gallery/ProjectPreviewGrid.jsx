const previewItems = [
  {
    src: "/images/home-gallery-driveway-dark.jpg",
    alt: "Dark resin driveway outside a brick residential garage.",
    className: "project-preview__item--wide"
  },
  {
    src: "/images/home-gallery-driveway-light.jpg",
    alt: "Light resin driveway leading to a residential front entrance and garage.",
    className: "project-preview__item--tall"
  },
  {
    src: "/images/home-gallery-commercial-surface.jpeg",
    alt: "Resin surface outside a commercial building entrance with a circular floor marking.",
    className: "project-preview__item--standard"
  },
  {
    src: "/images/home-gallery-pool-surround-classic.jpg",
    alt: "Light resin pool surround around a curved residential swimming pool.",
    className: "project-preview__item--standard"
  },
  {
    src: "/images/home-gallery-pool-surround-landscape.JPG",
    alt: "Light resin pool surround beside landscaped garden beds and flowering plants.",
    className: "project-preview__item--standard"
  },
  {
    src: "/images/home-gallery-glow-rock-edge.jpeg",
    alt: "Pink glowing edge detail around a landscaped stone bed beside a curved concrete border.",
    className: "project-preview__item--standard"
  }
];

export default function ProjectPreviewGrid() {
  return (
    <div className="project-preview__grid">
      {previewItems.map((item) => (
        <figure className={`project-preview__item ${item.className}`} key={item.src}>
          <img src={item.src} alt={item.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  );
}