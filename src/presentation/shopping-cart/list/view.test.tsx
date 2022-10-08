import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import store from 'src/store';
import { CartTypes } from 'src/store/actions/action-types';
import ShoppingCart from './view';

afterEach(() => {
  store.dispatch({
    type: CartTypes.CART_SET,
    payload: [],
  });
});

describe('<CartProductList />', () => {
  test('should display "Cart is Empty" if there is no product added in cart', () => {
    render(<ShoppingCart />);

    const heading = screen.queryByRole('heading', {
      name: /cart is empty/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test('should display cart items', () => {
    const cartItems = [
      {
        id: 'id-1',
        name: 'Product Name 1',
        price: 100,
        quantity: 1,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
      {
        id: 'id-2',
        name: 'Product Name 2',
        price: 200,
        quantity: 2,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    render(<ShoppingCart cartItems={cartItems} />);

    const cartItem1 = screen.queryByText('Product Name 1');
    const cartItem2 = screen.queryByText('Product Name 2');
    const cartItemsQuantity = screen.queryAllByLabelText('Quantity');

    expect(cartItem1).toBeInTheDocument();
    expect(cartItem2).toBeInTheDocument();
    expect(cartItemsQuantity).toHaveLength(2);
    expect(cartItemsQuantity[0]).toHaveValue('1');
    expect(cartItemsQuantity[1]).toHaveValue('2');
  });

  test('should display grand total', () => {
    const cartItems = [
      {
        id: 'id-1',
        name: 'Product Name 1',
        price: 100,
        quantity: 1,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
      {
        id: 'id-2',
        name: 'Product Name 2',
        price: 200,
        quantity: 2,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    render(<ShoppingCart cartItems={cartItems} />);

    const grandTotal = screen.queryByText('₱500');
    expect(grandTotal).toBeInTheDocument();
  });

  test('should increase cart item quantity', async () => {
    const cartItems = [
      {
        id: 'id-1',
        name: 'Product Name 1',
        price: 100,
        quantity: 1,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    render(<ShoppingCart cartItems={cartItems} />);

    const cartItemQuantity = screen.getByRole('textbox', {
      name: 'Quantity',
    });
    const cartItemIncrementButton = screen.getByRole('button', {
      name: '+',
    });

    // * assert initial value
    expect(cartItemQuantity).toHaveValue('1');

    // * assert value after increment cart item quantity
    await user.click(cartItemIncrementButton);
    expect(cartItemQuantity).toHaveValue('2');
  });

  test('should decrease cart item quantity', async () => {
    const cartItems = [
      {
        id: 'id-1',
        name: 'Product Name 1',
        price: 100,
        quantity: 2,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    render(<ShoppingCart cartItems={cartItems} />);

    const cartItemQuantity = screen.getByRole('textbox', {
      name: 'Quantity',
    });
    const cartItemDecrementButton = screen.getByRole('button', {
      name: '-',
    });

    // * assert cart item initial value
    expect(cartItemQuantity).toHaveValue('2');

    // * assert cart item value after decreasing cart item quantity
    await user.click(cartItemDecrementButton);
    expect(cartItemQuantity).toHaveValue('1');
  });

  test('should disable increment button', () => {
    const cartItems = [
      {
        id: 'id-1',
        name: 'Product Name 1',
        price: 100,
        quantity: 1,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    render(<ShoppingCart cartItems={cartItems} disableIncrementButton />);

    const cartItemIncrementButton = screen.getByRole('button', {
      name: '+',
    });
    expect(cartItemIncrementButton).toBeDisabled();
  });

  test('should remove cart item', async () => {
    const cartItems = [
      {
        id: 'id-1',
        name: 'Product Name 1',
        price: 100,
        quantity: 1,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    render(<ShoppingCart cartItems={cartItems} />);

    const cartItemRemoveButton = screen.getByRole('button', {
      name: /remove/i,
    });
    await user.click(cartItemRemoveButton);

    // * assert cart should be empty
    const state = store.getState();
    expect(state.cart).toHaveLength(0);
  });
});
