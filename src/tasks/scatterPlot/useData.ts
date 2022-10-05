import { csv } from "d3";
import { useEffect, useState } from "react";
import { IrisType } from "types/rawDataTypes";

const csvUrl =
  "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv";

export function useData() {
  const [data, setData] = useState<Array<IrisType>>();

  useEffect(() => {
    function row(d: any) {
      const formatData: IrisType = {
        sepal_length: +d.sepal_length,
        sepal_width: +d.sepal_width,
        petal_length: +d.petal_length,
        petal_width: +d.petal_width,
        species: d.species,
      };
      return formatData;
    }
    csv<IrisType>(csvUrl, row).then((data) => setData(data));
  }, []);

  return data;
}
