# Shopping Cart Mini App

Shopping Cart Mini-app.

[![repository](https://img.shields.io/badge/repo-github-orange)](https://github.com/jmconcha/shopping-cart-lib)

## Mini App

- Shopping Cart - [![status](https://img.shields.io/badge/DONE-green)](#)

## Installation

```sh
npm install @jmconcha/shopping-cart-lib
```

## Usage

```sh
import { ShoppingCart } from '@jmconcha/shopping-cart-lib';

//...
const cartItems = [{
  id: 'id-1',
  name: 'Product 1',
  price: 100,
  quantity: 2,
  imageUrl: 'https://www.gallery.com/product-1',
}];

<ShoppingCart
  cartItems={cartItems}
  disableIncrementButton={true}
/>
```

## Types

```sh
{
  // optional
  cartItems: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  },
  // optional
  disableIncrementButton: boolean;
}
```

## Empty Cart Example

```jsx
import React from 'react';
import { ShoppingCart } from '@jmconcha/shopping-cart-lib';

function Example() {
  return <ShoppingCart />;
}

export default Example;
```

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
      quantity: 2,
      imageUrl: 'https://www.gallery.com/product-1',
    },
  ];

  return <ShoppingCart cartItems={cartItems} />;
}

export default Example;
```

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
      quantity: 2,
      imageUrl: 'https://www.gallery.com/product-1',
    },
  ];

  return <ShoppingCart cartItems={cartItems} disableIncrementButton />;
}

export default Example;
```

## Peer Dependecies

```sh
"react": "^18.2.0",
"react-dom": "^18.2.0"
```
