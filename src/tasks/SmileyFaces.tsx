import { MousePosition } from "App";
import SmileyFace from "Components/smileyFace/SmileyFace";

export default function SmileyFaces({ mouse }: { mouse: MousePosition }) {
  return (
    <div className="w-full h-min justify-center flex flex-wrap items-stretch">
      <SmileyFace mouse={mouse} />
      <SmileyFace mouse={mouse} />
      <SmileyFace mouse={mouse} />
      <SmileyFace mouse={mouse} />
    </div>
  );
}
