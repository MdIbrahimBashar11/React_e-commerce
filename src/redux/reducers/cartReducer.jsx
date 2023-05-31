 import { ActionType } from "../contents/action-type";



const initialState = {
    products: []
}
export const cartReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case ActionType.SET_CART:
           return {...state , products: payload};
        default:
            return state;
    }
}

// reducers.js
// import { SET_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../contents/ActionType';
// import { SET_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "../action/productAct";


// const initialState = {
//   products: [],
// };

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_CART:
//       return {
       
//         ...state,
//         cart: Array.isArray(state.cart) ? [...state.cart, action.payload] : [action.payload],
//       };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter(item => item.id !== action.payload),
//       };
//     case UPDATE_QUANTITY:
//       return {
//         ...state,
//         cart: state.cart.map(item =>
//           item.id === action.payload.id
//             ? { ...item, quantity: action.payload.quantity }
//             : item
//         ),
//       };
//     default:
//       return state;
//   }
// };

 
