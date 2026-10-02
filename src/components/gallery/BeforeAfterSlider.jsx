import { useRef, useState } from "react";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);
  const draggingRef = useRef(false);

  function setSliderPosition(clientX) {
    const bounds = sliderRef.current.getBoundingClientRect();
    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;

    setPosition(Math.max(0, Math.min(100, nextPosition)));
  }

  function handlePointerDown(event) {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setSliderPosition(event.clientX);
  }

  function handlePointerMove(event) {
    if (!draggingRef.current) return;
    setSliderPosition(event.clientX);
  }

  function handlePointerEnd(event) {
    draggingRef.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <div className="before-after">
      <div
        ref={sliderRef}
        className="before-after__slider"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onDragStart={(event) => event.preventDefault()}
        role="slider"
        tabIndex="0"
        aria-label="Compare representative before and after driveway images"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={Math.round(position)}
      >
        <img
          className="before-after__image before-after__image--before"
          src="/images/before-after-representative-before.png"
          alt="Representative driveway surface before resurfacing."
          draggable="false"
        />

        <div
          className="before-after__after-clip"
          style={{ width: `${position}%` }}
          aria-hidden="true"
        >
          <img
            className="before-after__image before-after__image--after"
            src="/images/before-after-representative-after.png"
            alt=""
            draggable="false"
          />
        </div>

        <div
          className="before-after__divider"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="before-after__handle">
            <span className="before-after__arrow before-after__arrow--left" />
            <span className="before-after__arrow before-after__arrow--right" />
          </span>
        </div>
      </div>

      <p className="before-after__disclaimer">
        Representative visual example. Results, colours, and finishes vary by project.
      </p>
    </div>
  );
}