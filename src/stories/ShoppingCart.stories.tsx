import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShoppingCart } from '../index';

export default {
  title: 'ShoppingCart/ListView',
  component: ShoppingCart,
} as ComponentMeta<typeof ShoppingCart>;

const Template: ComponentStory<typeof ShoppingCart> = (args) => (
  <ShoppingCart {...args} />
);

export const ShoppingCartWithItems = Template.bind({});
ShoppingCartWithItems.args = {
  cartItems: [
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
    {
      id: 'id-3',
      name: 'Product Name 3',
      price: 300,
      quantity: 3,
      imageUrl: 'https://via.placeholder.com/600/92c952',
    },
  ],
};
