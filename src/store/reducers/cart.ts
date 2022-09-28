import { CartTypes } from '../actions/action-types';
import { CartItem } from '../../types';

export interface CartItemsSetType {
  type: CartTypes.CART_SET;
  payload: CartItem[];
}

export interface CartItemDecrementType {
  type: CartTypes.CART_QUANTITY_DECREMENT;
  payload: {
    id: string;
  };
}

export interface CartItemIncrementType {
  type: CartTypes.CART_QUANTITY_INCREMENT;
  payload: {
    id: string;
  };
}

export interface CartItemRemoveType {
  type: CartTypes.CART_REMOVE;
  payload: {
    id: string;
  };
}

export interface CartAddType {
  type: CartTypes.CART_ADD;
  payload: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    imageUrl: string;
  };
}

type CartReducerActionType =
  | CartAddType
  | CartItemRemoveType
  | CartItemIncrementType
  | CartItemDecrementType
  | CartItemsSetType;

function cartReducer(
  state: CartItem[] = [],
  action: CartReducerActionType
): CartItem[] {
  switch (action.type) {
    case CartTypes.CART_ADD:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case CartTypes.CART_REMOVE:
      return state.filter(
        (cartItem: CartItem) => cartItem.id !== action.payload.id
      );
    case CartTypes.CART_QUANTITY_DECREMENT:
      const newState: CartItem[] = [];

      state.forEach((cartItem: CartItem) => {
        if (cartItem.id === action.payload.id) {
          if (cartItem.quantity <= 1) return;

          newState.push({
            ...cartItem,
            quantity: cartItem.quantity - 1,
          });
        } else {
          newState.push(cartItem);
        }
      });

      return newState;
    case CartTypes.CART_QUANTITY_INCREMENT:
      return state.map((cartItem: CartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }

        return cartItem;
      });
    case CartTypes.CART_SET:
      return [...action.payload];
    default:
      return state;
  }
}

export default cartReducer;
