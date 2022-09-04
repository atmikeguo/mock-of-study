import { OrderType } from "./order-type";

export default class THeader {
  constructor(
    public id: number,
    public name: string,
    public orderState?: OrderType,
    public orderIndexInHeaders?: number
  ) {}
}
