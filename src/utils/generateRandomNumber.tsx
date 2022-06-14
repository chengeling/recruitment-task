import { TApiaryItem } from "../types/TApiaryItem";
import { getCurrentDate } from "./getCurrentDate";

export const generateApiaryNumber = (): string => {
  const currentDate = getCurrentDate();
  const data = JSON.parse(localStorage.getItem("apiaries") || "[]");
  const num = data.filter((apiaryItem: TApiaryItem) => apiaryItem.dateAdded === currentDate).length.toString();
  console.log(num);
  return num.padStart(5, "0");
};
