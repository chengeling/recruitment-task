import { TApiaryItem } from "../types/TApiaryItem";

export const filterDescendingByNumber = (firstItem: TApiaryItem, secondItem: TApiaryItem) => {
  return +secondItem.number - +firstItem.number;
};
