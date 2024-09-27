function addDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

// NOTE: the code below has been changed from the course code to fix an issue
// with type coercion of strings to numbers.
// Our addDecimals function expects a number and returns a string, so it is not
// correct to call it passing a string as the argument.
export function calcPrices(orderItems) {
  // calculate the items price in whole number (pennies) to avoid issues with
  // floating point number calulations
  const itemsPrice = orderItems.reduce(
    (acc, item) => acc + (item.price * 100 * item.qty) / 100,
    0
  );

  // calculate the shipping price
  const shippingPrice = itemsPrice > 100? 0 : 10;

  // calculate the tax price
  const taxPrice = itemsPrice * 0.15;

  // calculate the total price
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  // return prices as strings fixed to 2 decimal places
  return {
    itemsPrice: addDecimals(itemsPrice),
    shippingPrice: addDecimals(shippingPrice),
    taxPrice: addDecimals(taxPrice),
    totalPrice: addDecimals(totalPrice),
  }
}
