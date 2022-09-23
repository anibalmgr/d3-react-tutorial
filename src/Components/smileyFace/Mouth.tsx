import { arc, DefaultArcObject } from "d3";
import { useState } from "react";

export default function Mouth({
  offset,
}: {
  offset: { x: number; y: number };
}) {
  const [colour, setColour] = useState("black");
  const mouthArc: DefaultArcObject | any = arc()
    .innerRadius(135)
    .outerRadius(150)
    .startAngle(0.02 * offset.y + 4)
    .endAngle(0.04 * offset.x)
    .cornerRadius(9);

  return (
    <path
      className="transiton transition-colors"
      onMouseEnter={() => setColour("orange")}
      onMouseLeave={() => setColour("black")}
      fill={colour}
      d={mouthArc()}
    />
  );
}
