export default function PlaceholderVisual({
  label,
  assetName,
  aspectRatio = "landscape",
  className = "",
  priority = "standard"
}) {
  return (
    <div
      className={`placeholder-visual placeholder-visual--${aspectRatio} placeholder-visual--${priority} ${className}`.trim()}
      role="img"
      aria-label={`Placeholder visual: ${label}. Replace with approved Elevated Resin Creations asset.`}
    >
      <div className="placeholder-visual__surface">
        <span className="placeholder-visual__eyebrow">Approved asset required</span>
        <strong>{label}</strong>
        <span className="placeholder-visual__filename">{assetName}</span>
      </div>
    </div>
  );
}