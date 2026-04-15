const DiamondDivider = ({ color = "currentColor" }: { color?: string }) => (
  <div className="diamond-divider" style={{ color }}>
    <span className="text-sm select-none" style={{ color }}>&#9670;</span>
  </div>
);

export default DiamondDivider;
