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

export function AxisLeft({ yScale }: { yScale: ScaleBand<string> }) {
  return (
    <>
      {yScale.domain().map((tickValue) => (
        <text
          key={tickValue}
          transform={`translate(0,${
            yScale(tickValue)! + yScale.bandwidth() / 2
          })`}
          dx="-0.5em"
          style={{ textAnchor: "end" }}
          className="text-sm font-medium fill-sky-800"
        >
          {tickValue}
        </text>
      ))}
    </>
  );
}
