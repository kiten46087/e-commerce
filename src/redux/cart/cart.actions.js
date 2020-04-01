import CartActionTypeas from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypeas.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypeas.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypeas.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypeas.CLEAR_ITEM_FROM_CART,
  payload: item
});