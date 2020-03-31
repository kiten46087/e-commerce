import CartActionTypeas from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypeas.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypeas.ADD_ITEM,
  payload: item
});