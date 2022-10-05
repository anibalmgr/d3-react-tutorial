import Loading from "Components/Loading";
import { format, max, min, scaleLinear } from "d3";
import { IrisType } from "types/rawDataTypes";
import { AxisBottom, AxisLeft } from "./Axis";
import { Marks } from "./Marks";
import { useData } from "./useData";

const width = 900;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 80 };
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
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain([min(data, yValue)!, max(data, yValue)!])
    .range([0, innerHeight]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl text-neutral-700 font-medium pb-6">
        Scatter Plot with data from{" "}
        <a
          className="text-neutral-900 hover:text-neutral-500"
          href="https://gist.github.com/curran/a08a1080b88344b0c8a7"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Iris Dataset
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
