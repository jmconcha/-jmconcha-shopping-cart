import { useAppDispatch } from '../../../hooks';
import { useCartSelector } from '../../../selectors';
import {
  addToCart as addToCartAction,
  incrementProductQuantityInCart as increaseCartItemQuantityAction,
} from '../../../store/actions/cart';
import { isInCart } from '../utils';
import {
  CartAddType,
  CartItemIncrementType,
} from '../../../store/reducers/cart';
import { CartItem } from '../../../types';

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
