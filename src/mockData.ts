import FieldIndexable from "./models/field-indexable";
import { TableData1, TableData2 } from "./models/table-data";
export const mockData = {
  topTokens: [
    new TableData1(
      1,
      "icon",
      "Flow",
      "$1.13M",
      1130000.0,
      "$106.37K",
      106370.0,
      "$802.97K",
      802970.0,
      "flow.svg"
    ),
    new TableData1(
      2,
      "icon",
      "USDC",
      "$1.34M",
      1340000.0,
      "$102.20K",
      102200.0,
      "$760.20K",
      760200.0,
      "usdc.svg"
    ),
    new TableData1(
      3,
      "icon",
      "ceWBTC",
      "$182.90K",
      182900.0,
      "$1.18K",
      1180.0,
      "$29.48K",
      29480.0,
      "cewbtc.png"
    ),
    new TableData1(
      4,
      "icon",
      "ceWETH",
      "$115.79K",
      115790.0,
      "$2.68K",
      2680.0,
      "$12.23K",
      12230.0,
      "ceweth.png"
    ),
    new TableData1(
      5,
      "icon",
      "My",
      "$2.82K",
      2820.0,
      "$400.20",
      400.2,
      "$2.17K",
      2170.0,
      "my.svg"
    ),
    new TableData1(
      6,
      "icon",
      "FUSD",
      "$512.08K",
      512080.00000000006,
      "$100.55",
      100.55,
      "$1.44K",
      1440.0,
      "fusd.svg"
    ),
    new TableData1(
      7,
      "icon",
      "SDM",
      "$556.37",
      556.37,
      "$6.63",
      6.63,
      "$150.35",
      150.35,
      "sdm.png"
    ),
    new TableData1(
      8,
      "icon",
      "tUSDT",
      "$90.64",
      90.64,
      "$2.58",
      2.58,
      "$36.40",
      36.4,
      "tusdt.png"
    ),
    new TableData1(
      9,
      "icon",
      "BLT",
      "$55.71",
      55.71,
      "$2.10",
      2.1,
      "$24.21",
      24.21,
      "blt.svg"
    ),
    new TableData1(
      10,
      "icon",
      "ceBUSD",
      "$0.50",
      0.5,
      "$0.00",
      0.0,
      "$0.00",
      0.0,
      "cebusd.png"
    ),
    new TableData1(
      11,
      "icon",
      "Starly",
      "$16.15",
      16.15,
      "$0.00",
      0.0,
      "$0.00",
      0.0,
      "starly.png"
    )
  ],
  topPairs: [
    new TableData2(
      1,
      "icon",
      "icon",
      "Flow/USDC",
      "$1.66M",
      1660000.0,
      "7.31%",
      0.0731,
      "$103.62K",
      103620.0,
      "$763.39K",
      763390.0,
      ["flow.svg", "usdc.svg"]
    ),
    new TableData2(
      2,
      "icon",
      "icon",
      "USDC/FUSD",
      "$1.02M",
      1020000.0,
      "0.02%",
      0.0002,
      "$66.47",
      66.47,
      "$1.07K",
      1070.0,
      ["usdc.svg", "fusd.svg"]
    ),
    new TableData2(
      3,
      "icon",
      "icon",
      "Flow/ceWBTC",
      "$366.24K",
      366240.0,
      "1.28%",
      0.0128,
      "$1.18K",
      1180.0,
      "$29.48K",
      29480.0,
      ["flow.svg", "cewbtc.png"]
    ),
    new TableData2(
      4,
      "icon",
      "icon",
      "Flow/ceWETH",
      "$231.63K",
      231630.0,
      "0.84%",
      0.0084,
      "$2.68K",
      2680.0,
      "$12.23K",
      12230.0,
      ["flow.svg", "cewbtc.png"]
    ),
    new TableData2(
      5,
      "icon",
      "icon",
      "My/Flow",
      "$5.42K",
      5420.0,
      "5.89%",
      0.0589,
      "$386.42",
      386.42,
      "$2.01K",
      2009.9999999999998,
      ["my.svg", "flow.svg"]
    ),
    new TableData2(
      6,
      "icon",
      "icon",
      "Flow/FUSD",
      "$1.40K",
      1400.0,
      "4.19%",
      0.04190000000000001,
      "$46.44",
      46.44,
      "$369.14",
      369.14,
      ["flow.svg", "fusd.svg"]
    ),
    new TableData2(
      7,
      "icon",
      "icon",
      "SDM/USDC",
      "$1.12K",
      1120.0,
      "2.06%",
      0.0206,
      "$11.60",
      11.6,
      "$145.40",
      145.4,
      ["sdm.png", "usdc.svg"]
    ),
    new TableData2(
      8,
      "icon",
      "icon",
      "My/USDC",
      "$216.00",
      216.0,
      "11.55%",
      0.1155,
      "$31.30",
      31.3,
      "$156.87",
      156.87,
      ["my.svg", "usdc.svg"]
    ),
    new TableData2(
      9,
      "icon",
      "icon",
      "tUSDT/Flow",
      "$165.12",
      165.12,
      "3.56%",
      0.0356,
      "$3.62",
      3.62,
      "$36.93",
      36.93,
      ["tusdt.png", "flow.svg"]
    ),
    new TableData2(
      10,
      "icon",
      "icon",
      "Flow/BLT",
      "$111.24",
      111.24,
      "3.47%",
      0.0347,
      "$3.15",
      3.15,
      "$24.24",
      24.24,
      ["flow.svg", "blt.svg"]
    ),
    new TableData2(
      11,
      "icon",
      "icon",
      "My/Starly",
      "$26.47",
      26.47,
      "0.00%",
      0.0,
      "$0.00",
      0.0,
      "$0.00",
      0.0,
      ["my.svg", "starly.png"]
    ),
    new TableData2(
      12,
      "icon",
      "icon",
      "FUSD/My",
      "$20.29",
      20.29,
      "8.68%",
      0.0868,
      "$1.19",
      1.19,
      "$11.07",
      11.07,
      ["fusd.svg", "my.svg"]
    ),
    new TableData2(
      13,
      "icon",
      "icon",
      "tUSDT/ceWETH",
      "$9.10",
      9.1,
      "0.00%",
      0.0,
      "$0.00",
      0.0,
      "$0.00",
      0.0,
      ["tusdt.png", "ceweth.png"]
    ),
    new TableData2(
      14,
      "icon",
      "icon",
      "USDC/tUSDT",
      "$6.69",
      6.69,
      "0.00%",
      0.0,
      "$0.00",
      0.0,
      "$0.00",
      0.0,
      ["usdc.svg", "tusdt.png"]
    ),
    new TableData2(
      15,
      "icon",
      "icon",
      "Flow/Starly",
      "$5.85",
      5.85,
      "0.00%",
      0.0,
      "$0.00",
      0.0,
      "$0.00",
      0.0,
      ["flow.svg", "starly.png"]
    ),
    new TableData2(
      16,
      "icon",
      "icon",
      "tUSDT/FUSD",
      "$1.42",
      1.42,
      "0.00%",
      0.0,
      "$0.00",
      0.0,
      "$0.00",
      0.0,
      ["tusdt.png", "fusd.svg"]
    ),
    new TableData2(
      17,
      "icon",
      "icon",
      "ceBUSD/Flow",
      "$1.00",
      1.0,
      "0.00%",
      0.0,
      "$0.00",
      0.0,
      "$0.00",
      0.0,
      ["cebusd.png", "flow.svg"]
    )
  ]
};

const imgMap: FieldIndexable = {
  "flow.svg":
    "https://gcore.jsdelivr.net/gh/FlowFans/flow-token-list@main/token-registry/A.1654653399040a61.FlowToken/logo.svg",
  "usdc.svg":
    "https://gcore.jsdelivr.net/gh/FlowFans/flow-token-list@main/token-registry/A.b19436aae4d94622.FiatToken/logo.svg",
  "cewbtc.png":
    "https://gcore.jsdelivr.net/gh/FlowFans/flow-token-list@main/token-registry/A.231cc0dbbcffc4b7.ceWBTC/logo.png",
  "ceweth.png":
    "https://gcore.jsdelivr.net/gh/FlowFans/flow-token-list@main/token-registry/A.231cc0dbbcffc4b7.ceWETH/logo.png",
  "my.svg":
    "https://gcore.jsdelivr.net/gh/FlowFans/flow-token-list@main/token-registry/A.348fe2042c8a70d8.MyToken/logo.svg",
  "fusd.svg":
    "https://gcore.jsdelivr.net/gh/FlowFans/flow-token-list@main/token-registry/A.3c5959b568896393.FUSD/logo.svg",
  "sdm.png":
    "https://gcore.jsdelivr.net/gh/FlowFans/flow-token-list@main/token-registry/A.c8c340cebd11f690.SdmToken/logo.png",
  "tusdt.png":
    "https://gcore.jsdelivr.net/gh/FlowFans/flow-token-list@main/token-registry/A.cfdd90d4a00f7b5b.TeleportedTetherToken/logo.png",
  "blt.svg":
    "https://gcore.jsdelivr.net/gh/FlowFans/flow-token-list@main/token-registry/A.0f9df91c9121c460.BloctoToken/logo.png",
  "cebusd.png":
    "https://gcore.jsdelivr.net/gh/FlowFans/flow-token-list@main/token-registry/A.231cc0dbbcffc4b7.ceBUSD/logo.png",
  "starly.png":
    "https://gcore.jsdelivr.net/gh/FlowFans/flow-token-list@main/token-registry/A.142fa6570b62fd97.StarlyToken/logo.png"
};

export function getImg(imgName: string): string {
  // return require("../static/" + "sdm.png");
  return imgMap[imgName] as string;
}
