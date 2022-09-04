import FieldIndexable from "./field-indexable";
export class TableData1 implements FieldIndexable {
  constructor(
    public id: number,
    public icon: string,
    public name: string,
    public tvl: string,
    public tvlNum: number,
    public volume24h: string,
    public volume24hNum: number,
    public volume7d: string,
    public volume7dNum: number,
    public iconUrl: string
  ) {}
}
export class TableData2 implements FieldIndexable {
  constructor(
    public id: number,
    public icon1: string,
    public icon2: string,
    public name: string,
    public tvl: string,
    public tvlNum: number,
    public freeAPR: string,
    public freeAPRNum: number,
    public volume24h: string,
    public volume24hNum: number,
    public volume7d: string,
    public volume7dNum: number,
    public iconsUrl: string[]
  ) {}
}
