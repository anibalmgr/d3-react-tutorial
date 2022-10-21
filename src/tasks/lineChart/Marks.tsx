import { curveNatural, line, ScaleLinear, ScaleTime } from "d3";
import { TempType } from "types/rawDataTypes";

interface Props {
  data: TempType[];
  xScale: ScaleTime<number, number, never>;
  yScale: ScaleLinear<number, number, never>;
  xValue: Function;
  yValue: Function;
}

export function Marks({ data, xScale, yScale, yValue, xValue }: Props) {
  const linePath = line<TempType>()
    .curve(curveNatural)
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)))(data);

  return (
    <>
      <path
        d={linePath || ""}
        className="fill-transparent stroke-sky-800 stroke-2"
      />
      {data.map((d, i) => (
        <circle
          key={`${d.timestamp}`}
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r="3"
          className="fill-sky-800 hover:fill-sky-700"
        >
          <title className="bg-slate-900 p-4 text-3xl">
            x: {`${xValue(d).toLocaleDateString()}`}, y: {yValue(d)}
          </title>
        </circle>
      ))}
    </>
  );
}
