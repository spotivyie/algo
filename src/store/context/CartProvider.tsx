import { ReactNode, createContext, useEffect, useState } from "react";
import { produce } from "immer";
import Menu from "../../types";

export interface CartItem extends Menu {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

const DRINK_ITEMS_STORAGE_KEY = "drinkDelivery:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<Menu[]>(() => {
    const storedCartItems = localStorage.getItem(DRINK_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  // const cartItemsTotal = cartItems.reduce((total, cartItem) => {
  //   return total + cartItem.price * cartItem.quantity;
  // }, 0);

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const drinkExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (drinkExistsInCart >= 0) {
        const item = draft[drinkExistsInCart];
        draft[drinkExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(DRINK_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
