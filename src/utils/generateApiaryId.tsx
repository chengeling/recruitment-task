import { getCurrentDate } from "./getCurrentDate";

const calculateProductOfNumber = (num: string): number => {
  let prodcut = 1;
  const digitList = num.split("").map(Number);
  for (let digit of digitList) prodcut *= digit;
  return prodcut;
};

export const generateApiaryId = (apiaryNumber: string): string => {
  const currentDate = getCurrentDate().replaceAll("-", "");
  const baseNumber = `${currentDate}${apiaryNumber}`;
  const numberWithoutZeros = baseNumber.replaceAll("0", "");
  const baseNumberMultiplier = calculateProductOfNumber(numberWithoutZeros);
  const controlSum = (Number(baseNumber) * baseNumberMultiplier).toString();
  return `${baseNumber}${controlSum[1]}${controlSum[6]}${controlSum.slice(-1)}`;
};
