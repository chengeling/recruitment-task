import { ORDER_TYPE } from "../enums/OrderType";

export type TSearchSection = {
  filterContent: (params: any) => void;
  orderContent: (orderType: ORDER_TYPE) => void;
};
