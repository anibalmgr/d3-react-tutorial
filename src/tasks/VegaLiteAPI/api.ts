import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/anibalmgr/11ae839ceadc301edf073bfe048b09cd/raw/21f5c61761cc4c4bd71c9ab6a91ac9e3835f290e/css-colours.csv";

export async function getData() {
  const data = await csv(csvUrl);
  console.log(data);
  return data;
}
