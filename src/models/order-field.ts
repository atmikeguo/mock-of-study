import { OrderType } from "./order-type";

export default class OrderField {
  constructor(
    public state: OrderType,
    public setState: React.Dispatch<React.SetStateAction<OrderType>>,
    public orderFileName: string
  ) {}
}
