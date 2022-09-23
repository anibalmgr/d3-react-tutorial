import { arc, csv, DefaultArcObject, DSVRowString } from "d3";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, [setData]);

  if (!data) {
    return <pre>Loading...</pre>;
  }
  const width = 550;
  const height = 200;
  const center = { x: width / 2, y: height / 2 };

  const pieArc: DefaultArcObject | any = arc()
    .innerRadius(0)
    .outerRadius(width);

  console.log(pieArc);

  return (
    <div className="flex flex-wrap w-full">
      <svg width={width} height={height}>
        <g transform={`translate${center.x},${center.y}`}>
          {data.map((d, i) => (
            <path
              key={`${d.Keyword}${i}`}
              fill={d["RGB hex value"]}
              d={pieArc({
                startAngle: (i / data.length) * 2 * Math.PI,
                endAngle: ((i + 1) / data.length) * 2 * Math.PI,
              })}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
