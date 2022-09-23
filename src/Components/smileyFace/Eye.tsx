import { useState } from "react";

export default function Eye({ cx, cy }: { cx: number; cy: number }) {
  const [colour, setColour] = useState("black");

  return (
    <circle
      className="transiton transition-colors delay-75"
      onMouseEnter={() => setColour("orange")}
      onMouseLeave={() => setColour("black")}
      cx={cx}
      cy={cy}
      fill={colour}
      r={40 + -cy / 20}
    ></circle>
  );
}
