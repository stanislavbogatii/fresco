import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  getCart,
  updateCartItem,
  removeFromCart,
  addToCart,
} from '@/modules/cart/services/CartService';

import { CartItemResponseDto } from '@/modules/cart/models/CartItemResponseDto';
import { CartResponseDto } from '@/modules/cart/models/CartResponseDto';

interface CartContextType {
  numberCartItems: number;
  fetchCart: () => void;
  cart: CartResponseDto | null;
  increaseQuantity: (itemId: number) => Promise<void>;
  decreaseQuantity: (itemId: number) => Promise<void>;
  updateQuantity: (itemId: number, quantity: number) => void;
  removeItem: (itemId: number) => Promise<void>;
}

export const CartContext = createContext<CartContextType>({
  numberCartItems: 0,
  fetchCart: () => {},
  cart: null,
  increaseQuantity: async () => {},
  decreaseQuantity: async () => {},
  updateQuantity: () => {},
  removeItem: async () => {},
});

export function CartProvider({ children }: React.PropsWithChildren) {
  const [numberCartItems, setNumberCartItems] = useState(0);
  const [cart, setCart] = useState<CartResponseDto | null>(null);

  const fetchCart = useCallback(() => {
    getCart()
      .then((res) => {
        setCart(res);
        const count = res?.items?.reduce(
          (total: number, item: CartItemResponseDto) => total + item.quantity,
          0
        );
        setNumberCartItems(count);
      })
      .catch(() => {
        setCart(null);
        setNumberCartItems(0);
      });
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const increaseQuantity = useCallback(async (id: number) => {
    const item = cart?.items.find((i) => i.id === id);
    if (item) {
      updateCartItem({
        productId: item.productId,
        quantity: item.quantity + 1,
      }).then(() => {
        setNumberCartItems((prevCount) => prevCount + 1);
        setCart((prevCart) => {
          if (prevCart) {
            return {
              ...prevCart,
              items: prevCart.items.map((i) => {
                if (i.id === id) {
                  return {
                    ...i,
                    quantity: i.quantity + 1,
                  };
                }
                return i;
              }),
            };
          }
          return prevCart;
        })
      });
    }
  }, [cart, fetchCart]);

  const decreaseQuantity = useCallback(async (id: number) => {
    const item = cart?.items.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      updateCartItem({
        productId: item.productId,
        quantity: item.quantity - 1,
      }).then(() => {
        setNumberCartItems((prevCount) => prevCount - 1);
        setCart((prevCart) => {
          if (prevCart) {
            return {
              ...prevCart,
              items: prevCart.items.map((i) => {
                if (i.id === id) {
                  return {
                    ...i,
                    quantity: i.quantity - 1,
                  };
                }
                return i;
              }),
            };
          }
          return prevCart;
        })
      });
    }
  }, [cart, fetchCart]);

  const updateQuantity = useCallback(async (id: number, quantity: number) => {
    const item = cart?.items.find((i) => i.id === id);
    console.log(cart, item, id)
    if (quantity > 0 && item) {
      updateCartItem({
        productId: item?.productId,
        quantity,
      }).then(() => {
        setNumberCartItems((prevCount) => prevCount + quantity - item.quantity);
        setCart((prevCart) => {
          if (prevCart) {
            return {
              ...prevCart,
              items: prevCart.items.map((i) => {
                if (i.id === id) {
                  return {
                    ...i,
                    quantity,
                  };
                }
                return i;
              }),
            };
          }
          return prevCart;
        });
      });
    }
  }, [fetchCart, cart]);

  const removeItem = useCallback(async (id: number) => {
    try {
      await removeFromCart(id).then(() => {
        const item = cart?.items.find((i) => i.id === id);
        const itemQuantity = item?.quantity;

        setCart((prevCart) => {
          if (prevCart) {
            return {
              ...prevCart,
              items: prevCart.items.filter((item) => item.id !== id),
            };
          }
          return prevCart;
        })
        setNumberCartItems((prevCount) => prevCount - (itemQuantity || 0));
      });
    } catch (error) {
      console.log(error);
      throw new Error('Failed to remove item');
    }
  }, [fetchCart]);

  const state = useMemo(
    () => ({
      numberCartItems,
      fetchCart,
      cart,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      removeItem,
    }),
    [
      numberCartItems,
      fetchCart,
      cart,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      removeItem,
    ]
  );

  return (
    <CartContext.Provider value={state}>{children}</CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};
