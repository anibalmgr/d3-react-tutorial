import { MoonLoader } from "react-spinners";
export default function Loading({ size }: { size?: number }) {
  return <MoonLoader size={size} speedMultiplier={0.4} />;
}
