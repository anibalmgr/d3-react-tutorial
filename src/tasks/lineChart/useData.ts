import { csv } from "d3";
import { useEffect, useState } from "react";
import { TempType } from "types/rawDataTypes";

const csvUrl =
  "https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv";

export function useData() {
  const [data, setData] = useState<Array<TempType>>();

  useEffect(() => {
    function row(d: any) {
      const formatData: TempType = {
        temperature: +d.temperature,
        timestamp: new Date(d.timestamp),
      };
      return formatData;
    }
    csv<TempType>(csvUrl, row).then((data) => setData(data));
  }, []);

  return data;
}
