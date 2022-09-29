import { arc, color, csv, DefaultArcObject, DSVRowString, pie } from "d3";
import { MouseEvent, useEffect, useState } from "react";

const width = 550;
const height = 500;

const csvUrl =
  "https://gist.githubusercontent.com/anibalmgr/11ae839ceadc301edf073bfe048b09cd/raw/890dd982e3c44e6c5843bf330abd0aa286fdebed/css-colours.csv";

interface Colour {
  Keyword: string;
  "RGB hex value": string;
  Specification: string;
}

export default function Colours() {
  const [data, setData] = useState<
    Array<Colour> | Array<DSVRowString<string>> | null
  >(null);
  const [center, setCenter] = useState({ x: width / 2, y: height / 2 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const positionX = e.clientX;
    const positionY = e.clientY;
    setCenter({ x: positionX, y: positionY - 145 });
  };

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, [setData]);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const pieArc: DefaultArcObject | any = arc()
    .innerRadius(10 + center.y / 2)
    .outerRadius(10 + center.x / 4);

  const colourPie = pie<any>().value(1);

  return (
    <div
      className="flex flex-wrap w-full h-full cursor-none"
      onMouseMove={handleMouse}
    >
      <svg className="w-full h-full">
        <g transform={`translate(${center.x},${center.y})`}>
          {data.map((d, i) => (
            <path
              key={`${d.Keyword}${i}`}
              fill={d["RGB hex value"]}
              d={pieArc({
                startAngle:
                  (i / data.length) * (1.8 + center.x / 4000) * Math.PI,
                endAngle:
                  ((i + 1) / data.length) * (1.8 + center.y / 4000) * Math.PI,
              })}
            />
          ))}
          {colourPie(data).map((d) => (
            <path
              className="opacity-50"
              fill={d.data["RGB hex value"]}
              d={pieArc(d)}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
