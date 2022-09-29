import SmileyFaces from "tasks/SmileyFaces";
import { useState } from "react";
import CovidChart from "tasks/CovidChart";
import Colours from "tasks/ Colours";

export default function App() {
  const tasks = ["face", "colours", "covid chart"];
  const [task, setTask] = useState(tasks[0]);

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
    <div className="flex flex-col gap-8 items-center pb-32 w-screen h-screen bg-slate-200">
      <h1 className="text-4xl font-semibold">Hello simple world</h1>
      <TopMenu />
      {task === tasks[0] && <SmileyFaces />}
      {task === tasks[1] && <Colours />}
      {task === tasks[2] && <CovidChart />}
    </div>
  );
}
