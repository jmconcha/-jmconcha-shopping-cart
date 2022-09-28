import cartReducer, {
  CartAddType,
  CartItemRemoveType,
  CartItemDecrementType,
  CartItemIncrementType,
  CartItemsSetType,
} from './cart';
import { CartTypes } from '../actions/action-types';
import { CartItem } from '../../types';

describe('cart reducer', () => {
  test('should add product to cart', () => {
    const initialState = [
      {
        id: 'id1',
        name: 'Product 1',
        price: 100,
        quantity: 1,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    const action = {
      type: CartTypes.CART_ADD,
      payload: {
        id: 'id2',
        name: 'Product 2',
        price: 200,
        quantity: 1,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    } as CartAddType;

    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id1',
        name: 'Product 1',
        price: 100,
        quantity: 1,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
      {
        id: 'id2',
        name: 'Product 2',
        price: 200,
        quantity: 1,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ]);
  });

  test('should remove product from cart', () => {
    const initialState = [
      {
        id: 'id1',
        name: 'Product 1',
        price: 100,
        quantity: 3,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
      {
        id: 'id2',
        name: 'Product 2',
        price: 200,
        quantity: 2,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    const action = {
      type: 'CART/REMOVE',
      payload: {
        id: 'id2',
      },
    } as CartItemRemoveType;

    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id1',
        name: 'Product 1',
        price: 100,
        quantity: 3,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ]);
  });

  test('should decrease quantity of the product in cart by one', () => {
    const initialState = [
      {
        id: 'id1',
        name: 'Product 1',
        price: 100,
        quantity: 4,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
      {
        id: 'id2',
        name: 'Product 2',
        price: 200,
        quantity: 2,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    const action = {
      type: CartTypes.CART_QUANTITY_DECREMENT,
      payload: {
        id: 'id1',
      },
    } as CartItemDecrementType;

    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id1',
        name: 'Product 1',
        price: 100,
        quantity: 3,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
      {
        id: 'id2',
        name: 'Product 2',
        price: 200,
        quantity: 2,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ]);
  });

  test('should increase quantity of the product in cart by one', () => {
    const initialState = [
      {
        id: 'id1',
        name: 'Product 1',
        price: 100,
        quantity: 4,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
      {
        id: 'id2',
        name: 'Product 2',
        price: 200,
        quantity: 2,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    const action = {
      type: CartTypes.CART_QUANTITY_INCREMENT,
      payload: {
        id: 'id2',
      },
    } as CartItemIncrementType;

    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id1',
        name: 'Product 1',
        price: 100,
        quantity: 4,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
      {
        id: 'id2',
        name: 'Product 2',
        price: 200,
        quantity: 3,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ]);
  });

  test('should not allow cart item quantity to be negative', () => {
    const initialState = [
      {
        id: 'id1',
        name: 'Product 1',
        price: 100,
        quantity: 0,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    const action = {
      type: CartTypes.CART_QUANTITY_DECREMENT,
      payload: {
        id: 'id1',
      },
    } as CartItemDecrementType;

    const newState = cartReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test('should set cart data', () => {
    const initialState: CartItem[] = [];
    const action = {
      type: CartTypes.CART_SET,
      payload: [
        {
          id: 'id1',
          name: 'Product 1',
          price: 100,
          quantity: 1,
          imageUrl: 'https://via.placeholder.com/600/92c952',
        },
        {
          id: 'id2',
          name: 'Product 2',
          price: 200,
          quantity: 2,
          imageUrl: 'https://via.placeholder.com/600/92c952',
        },
      ],
    } as CartItemsSetType;

    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id1',
        name: 'Product 1',
        price: 100,
        quantity: 1,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
      {
        id: 'id2',
        name: 'Product 2',
        price: 200,
        quantity: 2,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ]);
  });
});
