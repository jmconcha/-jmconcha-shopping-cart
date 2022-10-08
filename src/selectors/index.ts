import { useSelector } from 'react-redux';

import { RootState } from 'src/store';

export function useCartSelector() {
  const cartItems = useSelector((state: RootState) => state.cart);
  return cartItems;
}
