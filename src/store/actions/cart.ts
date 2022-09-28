import { CartItem } from '../../types';
import { CartTypes } from './action-types';

export function addToCart(id: string) {
  return {
    type: CartTypes.CART_ADD,
    payload: {
      id,
    },
  };
}

export function removeProductInCart(id: string) {
  return {
    type: CartTypes.CART_REMOVE,
    payload: {
      id,
    },
  };
}

export function incrementProductQuantityInCart(id: string) {
  return {
    type: CartTypes.CART_QUANTITY_INCREMENT,
    payload: {
      id,
    },
  };
}

export function decrementProductQuantityInCart(id: string) {
  return {
    type: CartTypes.CART_QUANTITY_DECREMENT,
    payload: {
      id,
    },
  };
}

export function removeCartItem(id: string) {
  return {
    type: CartTypes.CART_REMOVE,
    payload: {
      id,
    },
  };
}

export function setData(cartItems: CartItem[]) {
  return {
    type: CartTypes.CART_SET,
    payload: cartItems,
  };
}
