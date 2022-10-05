import Loading from "Components/Loading";
import { format, max, min, scaleLinear } from "d3";
import { IrisType } from "types/rawDataTypes";
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

export default function ScatterPlot() {
  const data = useData();

  const yLabel = "Sepal Width";
  function yValue(d: IrisType) {
    return d.sepal_width ?? 0;
  }

  const xLabel = "Sepal Length";
  function xValue(d: IrisType) {
    return d.sepal_length;
  }

  if (!data) {
    return <Loading />;
  }

  const xScale = scaleLinear()
    .domain([min(data.map(xValue))!, max(data, xValue)!])
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain([min(data, yValue)!, max(data, yValue)!])
    .range([0, innerHeight]);

  return (
    <svg width={width} height={height + 40}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={tickFormater}
        />
        <AxisLeft yScale={yScale} innerWidth={innerWidth} />
        <text
          x={-50}
          y={innerHeight / 2}
          className="text-xl text-center font-semibold fill-sky-800"
        >
          {yLabel}
        </text>
        <text
          x={innerWidth / 2}
          y={innerHeight + 48}
          className="text-xl text-center font-semibold fill-sky-800"
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
  );
}
