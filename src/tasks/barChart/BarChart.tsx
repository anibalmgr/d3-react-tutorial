import Loading from "Components/Loading";
import { format, max, scaleBand, scaleLinear } from "d3";
import { AxisBottom, AxisLeft } from "./Axis";
import { Marks } from "./Marks";
import { useData } from "./useData";

const width = 900;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 180 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const tickFormater = (t: number) => {
  const tickValue = format(".2s")(t);
  if (t >= 100000000) {
    return tickValue.replace("G", "B");
  }
  return tickValue;
};

export default function BarChart() {
  const data = useData();

  function yValue(d: { Country: string }) {
    return d.Country;
  }

  function xValue(d: { Population: number }) {
    return d.Population;
  }

  if (!data) {
    return <Loading />;
  }

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue) || 0])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height + 40}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={tickFormater}
        />
        <AxisLeft yScale={yScale} />
        <text
          x={innerWidth / 2}
          y={innerHeight + 48}
          className="text-xl text-center font-semibold fill-sky-800"
        >
          Population
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
        />
      </g>
    </svg>
  );
}
