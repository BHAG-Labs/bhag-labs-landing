import { useId } from "react";
import { cn } from "@/lib/utils";

interface BhagMarkProps {
  size?: number;
  mode?: "light" | "dark" | "auto";
  animated?: boolean;
  className?: string;
  ariaLabel?: string;
}

/**
 * BHAG Labs v14 unified-teardrop mark.
 *
 * Geometry (viewBox 0 0 220 260):
 *   teardrop  M 49 217 L 106 67 A 48 48 0 1 1 179 123 Z   — charcoal / cream
 *   big disc  cx=144 cy=164 r=60                          — terracotta
 *   lens      big disc clipped by teardrop                — forest / ochre
 *
 * mode="auto" follows the document `.dark` class via CSS attribute selector.
 * Set animated={false} for static favicons / inline footer marks.
 */
const TEARDROP_D = "M 49 217 L 106 67 A 48 48 0 1 1 179 123 Z";

const BhagMark = ({
  size = 40,
  mode = "auto",
  animated = false,
  className,
  ariaLabel = "BHAG Labs",
}: BhagMarkProps) => {
  const uid = useId().replace(/:/g, "");
  const clipId = `bm-lens-${uid}`;
  const height = Math.round(size * (260 / 220));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 260"
      width={size}
      height={height}
      role="img"
      aria-label={ariaLabel}
      data-mode={mode === "auto" ? undefined : mode}
      className={cn("bhag-mark", !animated && "bhag-mark-static", className)}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={TEARDROP_D} />
        </clipPath>
      </defs>
      <path className="bm-teardrop" d={TEARDROP_D} />
      <circle className="bm-big" cx={144} cy={164} r={60} />
      <circle className="bm-lens" cx={144} cy={164} r={60} clipPath={`url(#${clipId})`} />
    </svg>
  );
};

export default BhagMark;
