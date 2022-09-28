import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ShoppingCart from '../presentation';

export default {
  title: 'ShoppingCart/ListView',
  component: ShoppingCart,
} as ComponentMeta<typeof ShoppingCart>;

const Template: ComponentStory<typeof ShoppingCart> = (args) => (
  <ShoppingCart {...args} />
);

export const Example1 = Template.bind({});
Example1.args = {
  message: 'Hello World!',
};
