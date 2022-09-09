import { useState } from "react";

export default function BackgroundCircle({
  centerY,
  strokeW,
}: {
  centerY: number;
  strokeW: number;
}) {
  const [colour, setColour] = useState("black");
  return (
    <circle
      className="transiton transition-colors"
      r={centerY - strokeW / 2}
      fill="yellow"
      onMouseEnter={() => setColour("orange")}
      onMouseLeave={() => setColour("black")}
      stroke={colour}
      strokeWidth={strokeW}
    />
  );
}
