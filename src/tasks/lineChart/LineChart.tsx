import Loading from "Components/Loading";
import { timeFormat, max, min, scaleLinear, scaleTime } from "d3";
import { TempType } from "types/rawDataTypes";
import { AxisBottom, AxisLeft } from "./Axis";
import { Marks } from "./Marks";
import { useData } from "./useData";

const width = 900;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 80 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const tickFormater = (t: Date) => {
  const tickValue = timeFormat("%a")(t);
  return tickValue;
};

export default function LineChart() {
  const data = useData();

  const yLabel = "Temperature";
  function yValue(d: TempType) {
    return d.temperature;
  }

  const xLabel = "Time";
  function xValue(d: TempType) {
    return d.timestamp;
  }

  if (!data) {
    return <Loading />;
  }

  const xScale = scaleTime()
    .domain([min(data.map(xValue))!, max(data, xValue)!])
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain([min(data, yValue)!, max(data, yValue)!])
    .range([innerHeight, 0])
    .nice();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl text-neutral-700 font-medium pb-6">
        Line Chart with data from{" "}
        <a
          className="text-neutral-900 hover:text-neutral-500"
          href="https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029"
          target="_blank"
          rel="noopener noreferrer"
        >
          Temperature in San Francisco DataSet
        </a>
      </h2>
      <svg width={width} height={height + 40}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={tickFormater}
          />
          <AxisLeft yScale={yScale} innerWidth={innerWidth} />
          <text
            className="text-xl text-center font-semibold fill-sky-800"
            transform={`translate(-${margin.left / 2},${
              innerHeight / 2
            }) rotate(-90)`}
            textAnchor="middle"
          >
            {yLabel}
          </text>
          <text
            x={innerWidth / 2}
            y={innerHeight + 48}
            className="text-xl text-center font-semibold fill-sky-800"
            textAnchor="middle"
          >
            {xLabel}
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
    </div>
  );
}
