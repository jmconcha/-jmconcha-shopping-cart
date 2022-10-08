import { useAppDispatch } from 'src/hooks';
import { useCartSelector } from 'src/selectors';
import {
  addToCart as addToCartAction,
  incrementProductQuantityInCart as increaseCartItemQuantityAction,
} from 'src/store/actions/cart';
import { isInCart } from '../utils';
import { CartAddType, CartItemIncrementType } from 'src/store/reducers/cart';
import { CartItem } from 'src/types';

function AddToCartUseCase(): Function {
  const dispatch = useAppDispatch();
  const cartItems = useCartSelector();

  const addToCart = (cartItem: CartItem) => {
    // * checks if item is already in cart
    if (isInCart(cartItems, cartItem.id)) {
      dispatch(
        increaseCartItemQuantityAction(cartItem.id) as CartItemIncrementType
      );
    } else {
      dispatch(addToCartAction(cartItem) as CartAddType);
    }
  };

  return addToCart;
}

export default AddToCartUseCase;
