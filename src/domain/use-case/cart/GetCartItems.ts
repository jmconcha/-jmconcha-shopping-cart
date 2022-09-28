import { useCartSelector } from '../../../selectors';
import { CartItem } from '../../../types';

function GetCartItemsUseCase(): CartItem[] {
  const cartItems = useCartSelector();

  return cartItems;
}

export default GetCartItemsUseCase;
