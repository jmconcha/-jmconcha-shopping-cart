import React from 'react';

import { useAppDispatch } from 'src/hooks';
import { decrementProductQuantityInCart as decreaseCartItemQuantityAction } from 'src/store/actions/cart';
import { CartItemDecrementType } from 'src/store/reducers/cart';

function DecreaseCartItemQuantity(): Function {
  const dispatch = useAppDispatch();

  const decreaseCartItem = (id: string) => {
    dispatch(decreaseCartItemQuantityAction(id) as CartItemDecrementType);
  };

  return decreaseCartItem;
}

export default DecreaseCartItemQuantity;
