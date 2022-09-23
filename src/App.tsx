import SmileyFace from "Components/smileyFace/SmileyFace";
import { useState } from "react";

export default function App() {
  const tasks = ["face", "covid chart"];
  const [task, setTask] = useState(tasks[0]);

  function TopMenu() {
    return (
      <nav className="flex">
        {tasks.map((e, i) => (
          <button
            key={i}
            className="py-2 px-3 first:rounded-l last:rounded-r bg-slate-400 hover:bg-slate-500 capitalize"
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
      {task === "face" && (
        <div className="w-full h-full justify-center flex flex-wrap items-stretch">
          <SmileyFace />
          <SmileyFace />
        </div>
      )}
    </div>
  );
}
