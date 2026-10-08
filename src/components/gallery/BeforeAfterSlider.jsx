import { useRef, useState } from "react";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);
  const activePointerRef = useRef(null);

  function setSliderPosition(clientX) {
    const bounds = sliderRef.current?.getBoundingClientRect();

    if (!bounds || bounds.width <= 0) return;

    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.max(0, Math.min(100, nextPosition)));
  }

  function handlePointerDown(event) {
    if (!event.isPrimary || event.button !== 0) return;

    activePointerRef.current = event.pointerId;
    event.currentTarget.focus({ preventScroll: true });
    event.currentTarget.setPointerCapture(event.pointerId);
    setSliderPosition(event.clientX);
  }

  function handlePointerMove(event) {
    if (activePointerRef.current !== event.pointerId) return;
    setSliderPosition(event.clientX);
  }

  function handlePointerEnd(event) {
    if (activePointerRef.current !== event.pointerId) return;

    activePointerRef.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event) {
    const step = event.shiftKey ? 10 : 2;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowUp":
        event.preventDefault();
        setPosition((value) => Math.min(100, value + step));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        event.preventDefault();
        setPosition((value) => Math.max(0, value - step));
        break;
      case "Home":
        event.preventDefault();
        setPosition(0);
        break;
      case "End":
        event.preventDefault();
        setPosition(100);
        break;
      default:
        break;
    }
  }

  return (
    <div className="before-after before-after--fixed">
      <div
        ref={sliderRef}
        className="before-after__slider"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onLostPointerCapture={() => {
          activePointerRef.current = null;
        }}
        onKeyDown={handleKeyDown}
        onDragStart={(event) => event.preventDefault()}
        role="slider"
        tabIndex={0}
        aria-label="Representative driveway comparison"
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)} percent after image revealed`}
      >
        <img
          className="before-after__image before-after__image--before"
          src="/images/before.jpg"
          alt="Representative driveway before resurfacing."
          draggable={false}
          loading="lazy"
          decoding="async"
        />

        <div
          className="before-after__after-clip"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`
          }}
        >
          <img
            className="before-after__image before-after__image--after"
            src="/images/after.jpg"
            alt="Representative driveway with a warm-coloured aggregate finish."
            draggable={false}
            loading="lazy"
            decoding="async"
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
        Representative visual example, not an Elevated Resin Creations
        installation. Results, colours, and finishes vary by project.
      </p>
    </div>
  );
}