export const prefixZeroForNumber = (num: number) => {
  return num < 10 ? '0' + num : num;
};
