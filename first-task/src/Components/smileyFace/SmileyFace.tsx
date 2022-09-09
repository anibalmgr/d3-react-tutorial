import { useState } from "react";
import Eye from "./Eye";
import Mouth from "./Mouth";
import BackgroundCircle from "./BackgroundCircle";
import { FaceContainer } from "./FaceContainer";

export default function SmileyFace() {
  const [eyeOffset, setEyeOffset] = useState({ x: 100, y: -80 });

  const width = 450;
  const height = 450;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeW = 5;

  function mouseHandler(e: any) {
    setEyeOffset({
      x: 100 - e.clientY / 70 + e.clientX / 100,
      y: -100 + e.clientY / 20,
    });
  }

  return (
    <div className="w-max h-full" onMouseMove={(e) => mouseHandler(e)}>
      <FaceContainer
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
      >
        <BackgroundCircle centerY={centerY} strokeW={strokeW} />
        <Eye cx={eyeOffset.x} cy={eyeOffset.y} />
        <Eye cx={-eyeOffset.x} cy={eyeOffset.y} />
        <Mouth offset={eyeOffset} />
      </FaceContainer>
    </div>
  );
}
