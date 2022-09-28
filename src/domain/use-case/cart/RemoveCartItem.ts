import { useAppDispatch } from '../../../hooks';
import { removeCartItem as removeCartItemAction } from '../../../store/actions/cart';
import { CartItemRemoveType } from '../../../store/reducers/cart';

function RemoveCartItemUseCase(): Function {
  const dispatch = useAppDispatch();

  const removeCartItem = (id: string) => {
    dispatch(removeCartItemAction(id) as CartItemRemoveType);
  };

  return removeCartItem;
}

export default RemoveCartItemUseCase;
