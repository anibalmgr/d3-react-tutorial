import { csv } from "d3";
import { useEffect, useState } from "react";
import { PopulationType } from "types/rawDataTypes";

const csvUrl =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

export function useData() {
  const [data, setData] = useState<Array<PopulationType>>();

  useEffect(() => {
    function row(d: any) {
      d.Population = +d["2020"] * 1000;
      return d;
    }
    csv<PopulationType>(csvUrl, row).then((data) => {
      const shortData = data.slice(0, 10);
      return setData(shortData);
    });
  }, []);

  return data;
}
