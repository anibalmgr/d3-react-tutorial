import vl from "vega-lite-api";

export function viz() {
  return vs
    .markPoint()
    .encode(
      vl.x().fieldQ("acceleration").scale({ zero: false }),
      vl.y().fieldQ("horsepower").scale({ zero: false }),
      vl.tooltop(fieldN("name"))
    );
}
