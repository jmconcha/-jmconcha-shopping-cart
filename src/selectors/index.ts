import { useSelector } from 'react-redux';

import { RootState } from '../store';

export function useCartSelector() {
  const cartItems = useSelector((state: RootState) => state.cart);
  return cartItems;
}
