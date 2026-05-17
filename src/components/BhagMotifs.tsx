import { cn } from "@/lib/utils";

/**
 * BHAG Labs brand motifs — 12 geometric primitives, all CSS-animated.
 * Markup mirrors preview/brand-motifs.html from the design system.
 * Drop them into editorial layouts as section ornaments or fills.
 */

type MotifProps = { className?: string };

export const StackArches = ({ className }: MotifProps) => (
  <span className={cn("m-stack", className)} aria-hidden="true">
    <span /><span /><span />
  </span>
);

export const Doorway = ({ className }: MotifProps) => (
  <span className={cn("m-arch", className)} aria-hidden="true">
    <span className="o" /><span className="i" /><span className="k" />
  </span>
);

export const StripedPetal = ({ className }: MotifProps) => (
  <span className={cn("m-stripe", className)} aria-hidden="true" />
);

export const DotGrid = ({ className }: MotifProps) => (
  <span className={cn("m-dots", className)} aria-hidden="true">
    {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
  </span>
);

export const BulletRhythm = ({ className }: MotifProps) => (
  <span className={cn("m-bullets", className)} aria-hidden="true">
    <span /><span /><span /><span /><span />
  </span>
);

export const ProgressDots = ({ className }: MotifProps) => (
  <span className={cn("m-progress", className)} aria-hidden="true">
    <span /><span /><span /><span /><span />
  </span>
);

export const QuarterPetal = ({ className }: MotifProps) => (
  <span className={cn("m-petal", className)} aria-hidden="true" />
);

export const StripedQuarter = ({ className }: MotifProps) => (
  <span className={cn("m-petal-stripe", className)} aria-hidden="true" />
);

export const NotchedDisc = ({ className }: MotifProps) => (
  <span className={cn("m-notch", className)} aria-hidden="true" />
);

export const CornerMarks = ({ className, children }: MotifProps & { children?: React.ReactNode }) => (
  <span className={cn("m-corners", className)} aria-hidden="true">
    <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
    {children}
  </span>
);

export const DoubleRule = ({ className }: MotifProps) => (
  <span className={cn("m-double", className)} aria-hidden="true">
    <span className="a" /><span className="b" />
  </span>
);

export const DiamondDivider = ({ className }: MotifProps) => (
  <span className={cn("m-diamond", className)} aria-hidden="true">
    <i /><s /><i />
  </span>
);

/**
 * Corner-mark frame — wraps any element with four 14px L-bracket corners.
 * Use for hero tiles, mark tiles, key imagery.
 */
export const CornerFrame = ({
  className,
  children,
  inset = false,
}: {
  className?: string;
  children: React.ReactNode;
  inset?: boolean;
}) => (
  <div className={cn("bhag-corners", inset && "bhag-tile", className)}>
    <span className="bhag-corner tl" />
    <span className="bhag-corner tr" />
    <span className="bhag-corner bl" />
    <span className="bhag-corner br" />
    {children}
  </div>
);
