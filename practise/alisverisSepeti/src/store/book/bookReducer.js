import { types } from "../types";
import { bookInitialState } from "./bookInitialState";

export const bookReducer = (state = bookInitialState, action) => {
  if (action.type === types.EKLE) {
    return {
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === action.payload.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...action.payload, count: 1 }],
    };
  }
  if (action.type === types.ARTTİR) {
    return {
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === action.payload
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    };
  }
  if (action.type === types.AZALT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === action.payload
          ? {
              ...cartItem,
              count: cartItem.count > 1 ? cartItem.count - 1 : 1,
            }
          : cartItem
      ),
    };
  }
  if (action.type === types.CİKART) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
};
