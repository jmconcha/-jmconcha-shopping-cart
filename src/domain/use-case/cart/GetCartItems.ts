import { useCartSelector } from 'src/selectors';
import { CartItem } from 'src/types';

function GetCartItemsUseCase(): CartItem[] {
  const cartItems = useCartSelector();

  return cartItems;
}

export default GetCartItemsUseCase;
