import { ScaleLinear } from "d3";
import { IrisType } from "types/rawDataTypes";

interface Props {
  data: IrisType[];
  xScale: ScaleLinear<number, number, never>;
  yScale: ScaleLinear<number, number, never>;
  xValue: Function;
  yValue: Function;
}

export function Marks({ data, xScale, yScale, yValue, xValue }: Props) {
  return (
    <>
      {data.map((d, i) => (
        <circle
          key={i}
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r="10"
          className="fill-sky-800 hover:fill-sky-700"
        >
          <title className="bg-slate-900 p-4 text-3xl">
            x: {xValue(d)}, y: {yValue(d)}
          </title>
        </circle>
      ))}
    </>
  );
}
