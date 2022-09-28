# Shopping Cart Mini App

Shopping Cart Mini-app.

[![repository](https://img.shields.io/badge/repo-github-orange)](https://github.com/jmconcha/shopping-cart-lib)

## Mini App

- Shopping Cart - [![status](https://img.shields.io/badge/DONE-green)](#)

## Installation

```sh
npm install @jmconcha/shopping-cart-lib
```

&nbsp;

## ShoppingCart Props

| Prop                   | default value | Type     | Description                                               |
| ---------------------- | ------------- | -------- | --------------------------------------------------------- |
| cartItems              | []            | CartItem | List of cart items                                        |
| disableIncrementButton | false         | boolean  | disables the button that increment the cart item quantity |

&nbsp;

## CartItem Data Model

| Prop     | default value | Type   | Description              |
| -------- | ------------- | ------ | ------------------------ |
| id       |               | string | Product unique id        |
| name     |               | string | Product name             |
| price    |               | number | Product price            |
| quantity |               | number | Product quantity in cart |
| imageUrl |               | string | Product image link       |

&nbsp;

## Empty Cart Example

```jsx
import React from 'react';
import { ShoppingCart } from '@jmconcha/shopping-cart-lib';

function Example() {
  return <ShoppingCart />;
}

export default Example;
```

![Empty Cart Example](./static/images/cart-empty.png 'Empty Cart Example')

&nbsp;

## With Cart Items Example

```jsx
import React from 'react';
import { ShoppingCart } from '@jmconcha/shopping-cart-lib';

function Example() {
  const cartItems = [
    {
      id: 'id-1',
      name: 'Product 1',
      price: 100,
      quantity: 1,
      imageUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      id: 'id-2',
      name: 'Product 2',
      price: 200,
      quantity: 2,
      imageUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      id: 'id-3',
      name: 'Product 3',
      price: 300,
      quantity: 3,
      imageUrl: 'https://via.placeholder.com/150/24f355',
    },
  ];

  return <ShoppingCart cartItems={cartItems} />;
}

export default Example;
```

![With Cart Items Example](./static/images/with-cart-items.png 'With Cart Items Example')

&nbsp;

## Disabled Increment Button Example

```jsx
import React from 'react';
import { ShoppingCart } from '@jmconcha/shopping-cart-lib';

function Example() {
  const cartItems = [
    {
      id: 'id-1',
      name: 'Product 1',
      price: 100,
      quantity: 1,
      imageUrl: 'https://via.placeholder.com/150/24f355',
    },
  ];

  return <ShoppingCart cartItems={cartItems} disableIncrementButton />;
}

export default Example;
```

![Disabled Increment Button Example](./static/images/disabled-increment-button.png 'Disabled Increment Button Example')

&nbsp;

## Peer Dependecies

```sh
"react": "^18.2.0",
"react-dom": "^18.2.0"
```
