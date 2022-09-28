import React from 'react';

import { useCartSelector } from '../../../selectors';
import { CartItem } from '../../../types';
import { useAppDispatch } from '../../../hooks';
import { incrementProductQuantityInCart as increaseCartItemQuantityAction } from '../../../store/actions/cart';
import { isInStock } from '../utils';
import { CartItemIncrementType } from '../../../store/reducers/cart';

function IncreaseCartItemQuantityUseCase(): Function {
  const dispatch = useAppDispatch();

  const increaseCartItem = (id: string) => {
    dispatch(increaseCartItemQuantityAction(id) as CartItemIncrementType);
  };

  return increaseCartItem;
}

export default IncreaseCartItemQuantityUseCase;
