import { useRef, useState } from "react";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);

  function updatePosition(clientX) {
    const bounds = sliderRef.current.getBoundingClientRect();
    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.max(0, Math.min(100, nextPosition)));
  }

  function handlePointerDown(event) {
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  }

  function handlePointerMove(event) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      updatePosition(event.clientX);
    }
  }

  return (
    <div className="before-after">
      <div
        className="before-after__slider"
        ref={sliderRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        <div className="before-after__base">
          <img
            src="/images/before-after-representative-before.png"
            alt="Representative driveway surface before resurfacing."
          />
        </div>

        <div
          className="before-after__comparison"
          style={{ width: `${position}%` }}
        >
          <img
            src="/images/before-after-representative-after.png"
            alt="Representative driveway surface after resurfacing with a warm-coloured aggregate finish."
          />
        </div>

        <div
          className="before-after__handle"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span />
        </div>
      </div>

      <p className="before-after__disclaimer">
        Representative visual example. Results, colours, and finishes vary by project.
      </p>
    </div>
  );
}