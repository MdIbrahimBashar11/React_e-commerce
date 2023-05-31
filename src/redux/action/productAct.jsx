import { ActionType } from "../contents/action-type"

export const SET_CART = 'SET_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const setProducts = (products) => {
     return {
        type: ActionType.SET_PRODUCTS,
        payload: products,
     }
}
export const setCartItem = (products) => {
   return {
      type: ActionType.SET_CART,
      payload: products,
   }
}

export const removeFromCart = itemId => ({
   type: ActionType.REMOVE_FROM_CART,
   payload: itemId,
 });
 
 export const updateQuantity = (itemId, quantity) => ({
   type: ActionType.UPDATE_QUANTITY,
   payload: { id: itemId, quantity },
 });

