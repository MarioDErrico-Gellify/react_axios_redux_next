import { useMemo } from "react";

export const useSortedNumbers = (input: string) => {
  return useMemo(() => {
    const numbersArray = input
      .split(",")
      .map((item) => item.trim())
      .filter((item) => !isNaN(Number(item)))
      .map((item) => Number(item));
    return numbersArray.sort((a, b) => a - b);
  }, [input]);
};
