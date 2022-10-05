import { ScaleBand, ScaleLinear } from "d3";
import { PopulationType } from "types/rawDataTypes";

interface Props {
  data: PopulationType[];
  xScale: ScaleLinear<number, number, never>;
  yScale: ScaleBand<string>;
  xValue: Function;
  yValue: Function;
}

export function Marks({ data, xScale, yScale, yValue, xValue }: Props) {
  return (
    <>
      {data.map((d, i) => (
        <rect
          key={yValue(d)}
          x={0}
          y={yScale(yValue(d))}
          width={xScale(xValue(d))}
          height={yScale.bandwidth()}
          className="fill-sky-800 hover:fill-sky-700"
        >
          <title className="bg-slate-900 p-4 text-3xl">{xValue(d)}</title>
        </rect>
      ))}
    </>
  );
}
