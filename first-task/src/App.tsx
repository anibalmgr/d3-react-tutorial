import SmileyFace from "Components/smileyFace/SmileyFace";

export default function App() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center pb-32 w-screen h-screen bg-slate-200">
      <h1 className="text-4xl font-semibold">Hello simple world</h1>
      <div className="w-full h-full justify-center flex flex-wrap items-stretch">
        <SmileyFace />
        <SmileyFace />
      </div>
    </div>
  );
}
