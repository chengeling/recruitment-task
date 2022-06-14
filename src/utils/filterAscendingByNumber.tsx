import { TApiaryItem } from "../types/TApiaryItem";

export const filterAscendingByNumber = (firstItem: TApiaryItem, secondItem: TApiaryItem) => {
  return +firstItem.number - +secondItem.number;
};
