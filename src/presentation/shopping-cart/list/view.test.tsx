import React from 'react';
import { render } from '@testing-library/react';
import ListView from './view';

describe('Shopping Cart <ListView />', () => {
  test('jest should work', () => {
    render(<ListView />);

    expect(true).toBe(true);
  });
});
