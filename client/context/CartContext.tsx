import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { getCart } from '@/modules/cart/services/CartService';
import { CartItemResponseDto } from '@/modules/cart/models/CartItemResponseDto';

export const CartContext = createContext({
  numberCartItems: 0,
  fetchNumberCartItems: () => {},
});

export function CartProvider({ children }: React.PropsWithChildren) {
  const [numberCartItems, setNumberCartItems] = useState(0);

  useEffect(() => {
    fetchNumberCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNumberCartItems = useCallback(() => {
    getCart()
      .then((res) => {
        const count = res?.items?.reduce((currentTotal: number, item: CartItemResponseDto) => currentTotal + item.quantity, 0)
        setNumberCartItems(count);
      })
      .catch((err) => console.log(err));
  }, []);

  const state = useMemo(
    () => ({
      numberCartItems,
      fetchNumberCartItems,
    }),
    [numberCartItems, fetchNumberCartItems]
  );

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
}

export const useCartContext = () => {
  const { numberCartItems, fetchNumberCartItems } = useContext(CartContext);
  return { numberCartItems, fetchNumberCartItems };
};
