import { csv, csvFormat } from "d3";
import { useEffect, useState } from "react";

const csvUrl =
  "https://gist.githubusercontent.com/anibalmgr/11ae839ceadc301edf073bfe048b09cd/raw/21f5c61761cc4c4bd71c9ab6a91ac9e3835f290e/css-colours.csv";

// const fetchURL = async (url: string) => {
//   const response = await fetch(url);
//   return await response.text();
// };

function message(data: any) {
  let message = "";
  message = message + Math.round(csvFormat(data).length / 1024) + " kb \n ";
  message = message + data.length + " rows\n ";
  message = message + data.columns.length + " colums";
  return message;
}
export default function CovidChart() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, [setData]);

  return <div>Data is {data ? message(data) : "loading..."}</div>;
}
