import React from 'react';
import styled from 'styled-components';

import { CartItem } from 'src/types';
import CartItemCard from './CartItemCard';
import useGetCartItems from 'src/domain/use-case/cart/GetCartItems';
import useIncreaseCartItem from 'src/domain/use-case/cart/IncreaseCartItemQuantity';
import useDecreaseCartItem from 'src/domain/use-case/cart/DecreaseCartItemQuantity';
import useRemoveCartItem from 'src/domain/use-case/cart/RemoveCartItem';
import { DataSource } from 'src/data-source';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

export interface ListViewProps {
  disableIncrementButton?: boolean;
}

function ListView(props: ListViewProps) {
  const { disableIncrementButton } = props;

  const cartItems = useGetCartItems();
  const increaseCartItem = useIncreaseCartItem();
  const decreaseCartItem = useDecreaseCartItem();
  const removeCartItem = useRemoveCartItem();

  const grandTotal = cartItems.reduce(
    (total, cartItem: CartItem) => cartItem.price * cartItem.quantity + total,
    0
  );

  if (cartItems.length === 0) {
    return (
      <Wrapper>
        <h1>Cart is Empty</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>My Cart</h1>
      <Container>
        {cartItems.map((cartItem: CartItem) => {
          const handleDecrement = () => {
            decreaseCartItem(cartItem.id);
          };
          const handleIncrement = () => {
            increaseCartItem(cartItem.id);
          };
          const handleRemove = () => {
            removeCartItem(cartItem.id);
          };

          return (
            <CartItemCard
              key={cartItem.id}
              cartItem={cartItem}
              handleRemove={handleRemove}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              isIncrementButtonDisabled={disableIncrementButton}
            />
          );
        })}
      </Container>
      <p>
        <strong>Total:</strong>
        {` ₱${grandTotal}`}
      </p>
    </Wrapper>
  );
}

export default DataSource(ListView);
