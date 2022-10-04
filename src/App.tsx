import SmileyFaces from "tasks/SmileyFaces";
import { useState } from "react";
import CovidChart from "tasks/CovidChart";
import Colours from "tasks/ Colours";
import BarChart from "tasks/barChart/BarChart";
import ScatterPlot from "tasks/scatterPlot/ScatterPlot";

export interface MousePosition {
  x: number;
  y: number;
}

export default function App() {
  const tasks = ["face", "colours", "covid chart", "bar chart", "scatter plot"];
  const [task, setTask] = useState(tasks[0]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  function TopMenu() {
    return (
      <nav className="flex">
        {tasks.map((e, i) => (
          <button
            key={i}
            className={`py-2 px-3 first:rounded-l last:rounded-r  capitalize hover:shadow-2xl transition-all ${
              task === e
                ? " text-slate-50 bg-slate-800 hover:text-slate-200"
                : "bg-slate-400 hover:bg-slate-500"
            }`}
            onClick={() => setTask(tasks[i])}
          >
            {e}
          </button>
        ))}
      </nav>
    );
  }

  return (
    <div
      className="flex flex-col gap-8 items-center pb-32 w-screen h-screen bg-slate-200"
      onMouseMove={handleChange}
    >
      <h1 className="text-4xl font-semibold">Hello simple world</h1>
      <TopMenu />
      {task === tasks[0] && <SmileyFaces mouse={mouse} />}
      {task === tasks[1] && <Colours />}
      {task === tasks[2] && <CovidChart />}
      {task === tasks[3] && <BarChart />}
      {task === tasks[4] && <ScatterPlot />}
    </div>
  );
}
