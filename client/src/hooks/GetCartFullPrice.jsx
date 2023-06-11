export const getCartFullPrice = (cart) => {
  const fullPrice = [...cart].reduce((acc, cur) => cur.price + acc, 0);

  return fullPrice;
};
