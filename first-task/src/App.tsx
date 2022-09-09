import SmileyFace from "views/SmileyFace";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center pb-32 w-screen h-screen bg-slate-200">
      <h1 className="text-4xl font-semibold">Hello simple world</h1>
      <SmileyFace />
    </div>
  );
}
