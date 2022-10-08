import React, { ComponentType, useEffect } from 'react';
import { Provider } from 'react-redux';

import { setData } from 'src/store/actions/cart';
import store from 'src/store';
import { CartItemsSetType } from 'src/store/reducers/cart';
import { DataSourceComponentProps } from 'src/presentation/shopping-cart/module.types';

export const DataSource = (WrappedComponent: ComponentType<any>) => {
  const dispatch = store?.dispatch;
  const DataSourceComponent = (props: DataSourceComponentProps) => {
    const { cartItems = [], ...otherProps } = props;

    useEffect(() => {
      if (cartItems.length > 0) {
        dispatch(setData(cartItems) as CartItemsSetType);
      }
    }, []);

    return (
      <Provider store={store}>
        <WrappedComponent {...otherProps} />
      </Provider>
    );
  };

  return DataSourceComponent;
};
