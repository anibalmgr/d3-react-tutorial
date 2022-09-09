import { useState } from "react";
import { arc, DefaultArcObject } from "d3";

export default function SmileyFace() {
  const [eyeOffset, setEyeOffset] = useState({ x: 100, y: -80 });
  const [eyeColour, setEyeColour] = useState("black");
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeW = 5;

  const mouthArc: any | DefaultArcObject = arc()
    .innerRadius(90)
    .outerRadius(100)
    .startAngle(0.02 * eyeOffset.y + 4)
    .endAngle(0.03 * eyeOffset.x + 1)
    .cornerRadius(9);

  function mouseHandler(e: any) {
    setEyeOffset({
      x: 100 - e.clientY / 70 + e.clientX / 100,
      y: -100 + e.clientY / 20,
    });
    setEyeColour(e.target?.id === "eye" ? "orange" : "black");
  }

  return (
    <div className="w-full h-full" onMouseMove={(e) => mouseHandler(e)}>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          <circle
            r={centerY - strokeW / 2}
            fill="yellow"
            stroke="black"
            strokeWidth={strokeW}
          ></circle>
          <circle
            id="eye"
            cx={eyeOffset.x}
            cy={eyeOffset.y}
            fill={eyeColour}
            r={40 + -eyeOffset.y / 20}
          ></circle>
          <circle
            id="eye"
            cx={-eyeOffset.x}
            cy={eyeOffset.y}
            fill={eyeColour}
            r={40 + -eyeOffset.y / 20}
          ></circle>
          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
}
