import { ScaleBand, ScaleLinear } from "d3";

interface Props {
  xScale: ScaleLinear<number, number, never>;
  innerHeight: number;
  tickFormat?: Function;
}

export function AxisBottom({ xScale, innerHeight, tickFormat }: Props) {
  return (
    <>
      {xScale.ticks().map((tickValue) => (
        <g key={tickValue} transform={`translate(${xScale(tickValue)},${0})`}>
          <line y2={innerHeight} stroke="black" className="stroke-slate-400" />
          <text
            dy="20"
            y={innerHeight}
            style={{ textAnchor: "middle" }}
            className="text-sm font-medium fill-sky-800"
          >
            {tickFormat ? tickFormat(tickValue) : tickValue}
          </text>
        </g>
      ))}
    </>
  );
}

export function AxisLeft({
  yScale,
  innerWidth,
}: {
  yScale: ScaleLinear<number, number, never>;
  innerWidth: number;
}) {
  return (
    <>
      {yScale.ticks().map((tickValue, i) => (
        <g key={`${tickValue}${i}`} className="fill-sky-800 stroke-neutral-400">
          <line
            x2={innerWidth}
            transform={`translate(0,${yScale(tickValue)})`}
          />
          <text
            transform={`translate(0,${yScale(tickValue)!})`}
            dx="-0.5em"
            style={{ textAnchor: "end" }}
            className="text-sm font-medium"
          >
            {tickValue}
          </text>
        </g>
      ))}
    </>
  );
}
