import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

import PlaceholderVisual from "../common/PlaceholderVisual";

const clamp = (value, minimum, maximum) => Math.min(Math.max(value, minimum), maximum);

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);

  const updatePositionFromClientX = (clientX) => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const rect = slider.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;

    setPosition(clamp(nextPosition, 0, 100));
  };

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePositionFromClientX(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    updatePositionFromClientX(event.clientX);
  };

  const handleKeyDown = (event) => {
    const increments = {
      ArrowLeft: -5,
      ArrowDown: -5,
      ArrowRight: 5,
      ArrowUp: 5,
      Home: -100,
      End: 100
    };

    if (!(event.key in increments)) {
      return;
    }

    event.preventDefault();

    if (event.key === "Home") {
      setPosition(0);
      return;
    }

    if (event.key === "End") {
      setPosition(100);
      return;
    }

    setPosition((currentPosition) => clamp(currentPosition + increments[event.key], 0, 100));
  };

  return (
    <div className="before-after">
      <div
        ref={sliderRef}
        className="before-after__canvas"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        {/* TODO[ASSET]: Replace with approved matched before/after project photos. */}
        <PlaceholderVisual
          label="Before surface"
          assetName="PLACEHOLDER-before-surface.jpg"
          aspectRatio="wide"
          className="before-after__image before-after__image--before"
        />

        <div
          className="before-after__after-clip"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          aria-hidden="true"
        >
          <PlaceholderVisual
            label="After resin-bound surface"
            assetName="PLACEHOLDER-after-resin-surface.jpg"
            aspectRatio="wide"
            className="before-after__image before-after__image--after"
          />
        </div>

        <div
          className="before-after__divider"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="before-after__handle">
            <MoveHorizontal size={20} strokeWidth={2} />
          </span>
        </div>

        <input
          className="before-after__range"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          onKeyDown={handleKeyDown}
          aria-label="Reveal before and after comparison"
          aria-valuetext={`${Math.round(position)} percent after surface visible`}
        />

        <span className="before-after__label before-after__label--before">Before</span>
        <span className="before-after__label before-after__label--after">After</span>
      </div>

      <p className="before-after__instruction">
        Drag the handle or use the arrow keys to compare the surface transformation.
      </p>
    </div>
  );
}