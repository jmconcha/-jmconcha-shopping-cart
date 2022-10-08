import { useAppDispatch } from 'src/hooks';
import { removeCartItem as removeCartItemAction } from 'src/store/actions/cart';
import { CartItemRemoveType } from 'src/store/reducers/cart';

function RemoveCartItemUseCase(): Function {
  const dispatch = useAppDispatch();

  const removeCartItem = (id: string) => {
    dispatch(removeCartItemAction(id) as CartItemRemoveType);
  };

  return removeCartItem;
}

export default RemoveCartItemUseCase;
