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

function AddToCartUseCase(): Function {
  const dispatch = useAppDispatch();
  const cartItems = useCartSelector();

  const addToCart = (id: string) => {
    // * checks if item is already in cart
    if (isInCart(cartItems, id)) {
      dispatch(increaseCartItemQuantityAction(id) as CartItemIncrementType);
    } else {
      dispatch(addToCartAction(id) as CartAddType);
    }
  };

  return addToCart;
}

export default AddToCartUseCase;
