import { OrderType } from "./order-type";

export type OrderIconButtonParam = {
  orderType: OrderType;
  ascClick: () => void;
  descClick: () => void;
};
