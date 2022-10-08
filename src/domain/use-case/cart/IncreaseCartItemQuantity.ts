import React from 'react';

import { useCartSelector } from 'src/selectors';
import { CartItem } from 'src/types';
import { useAppDispatch } from 'src/hooks';
import { incrementProductQuantityInCart as increaseCartItemQuantityAction } from 'src/store/actions/cart';
import { CartItemIncrementType } from 'src/store/reducers/cart';

function IncreaseCartItemQuantityUseCase(): Function {
  const dispatch = useAppDispatch();

  const increaseCartItem = (id: string) => {
    dispatch(increaseCartItemQuantityAction(id) as CartItemIncrementType);
  };

  return increaseCartItem;
}

export default IncreaseCartItemQuantityUseCase;
