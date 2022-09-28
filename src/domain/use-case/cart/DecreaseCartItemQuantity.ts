import React from 'react';

import { useAppDispatch } from '../../../hooks';
import { decrementProductQuantityInCart as decreaseCartItemQuantityAction } from '../../../store/actions/cart';
import { CartItemDecrementType } from '../../../store/reducers/cart';

function DecreaseCartItemQuantity(): Function {
  const dispatch = useAppDispatch();

  const decreaseCartItem = (id: string) => {
    dispatch(decreaseCartItemQuantityAction(id) as CartItemDecrementType);
  };

  return decreaseCartItem;
}

export default DecreaseCartItemQuantity;
