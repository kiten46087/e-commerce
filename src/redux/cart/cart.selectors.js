import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

// output selector
export const selectCartItems = createSelector(
  [selectCart],

  // The values we want out of the selectors
  cart => cart.cartItems
);

export const selectorCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);