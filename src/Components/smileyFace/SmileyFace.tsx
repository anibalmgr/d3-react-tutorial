import { useCallback, useEffect, useState } from "react";
import Eye from "./Eye";
import Mouth from "./Mouth";
import BackgroundCircle from "./BackgroundCircle";
import { FaceContainer } from "./FaceContainer";
import { MousePosition } from "App";

export default function SmileyFace({ mouse }: { mouse: MousePosition }) {
  const [eyeOffset, setEyeOffset] = useState({ x: 100, y: -80 });

  const width = 450;
  const height = 450;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeW = 5;

  const mouseHandler = useCallback(
    ({ x, y }: MousePosition) =>
      setEyeOffset({
        x: 100 - y / 70 + x / 100,
        y: -100 + y / 20,
      }),
    [setEyeOffset]
  );

  useEffect(
    () => mouseHandler({ x: mouse.x, y: mouse.y }),
    [mouse, mouseHandler]
  );

  return (
    <div className="w-max h-min">
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
