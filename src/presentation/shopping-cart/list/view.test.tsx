import React from 'react';
import { render } from '@testing-library/react';
import ListView from './view';

describe('Shopping Cart <ListView />', () => {
  test('jest should work', () => {
    render(<ListView message="Hello world!" />);

    expect(true).toBe(true);
  });
});
