"use client"
import React, {useReducer , createContext} from 'react';



const initialState = JSON.parse(localStorage.getItem('cartState')) || {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkOut: false,
}
const sumItems = item => {
    const itemCounter = item.reduce((total, product) => total + product.quantity, 0)
    console.log(itemCounter)
    const total = item.reduce((total, product) => total + product.price * product.quantity, 0)
    return {itemCounter, total}
}
const cartF = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "add_item" :
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            localStorage.setItem('cartState', JSON.stringify({
                ...state, selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems)
            }));
            return {
                ...state, selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems)
            }
        case "remove_item" :
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id)
            localStorage.setItem('cartState', JSON.stringify({
                ...state,
                selectedItems: [...newSelectedItem],
                ...sumItems(newSelectedItem)
            }));
            return {
                ...state,
                selectedItems: [...newSelectedItem],
                ...sumItems(newSelectedItem)
            }
        case "increase":
            localStorage.setItem('cartState', JSON.stringify({
                ...state,
                selectedItems: state.selectedItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                ...sumItems(state.selectedItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ))
            }));
            return {
                ...state,
                selectedItems: state.selectedItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                ...sumItems(state.selectedItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ))
            }
        case "decrease":
            localStorage.setItem('cartState', JSON.stringify({
                ...state,
                selectedItems: state.selectedItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
                ...sumItems(state.selectedItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ))
            }));
            return {
                ...state,
                selectedItems: state.selectedItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
                ...sumItems(state.selectedItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ))
            }
        case "checkout":
            localStorage.removeItem('cartState');
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkOut: true,
            }
        case "clear":
            localStorage.removeItem('cartState');
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkOut: false,
            }
        default :
            return state;
    }
}

export const CounterContext = createContext();
const DataCart = (props) => {
    const [state, dispatch] = useReducer(cartF, initialState)
    return (

        <CounterContext.Provider value={{state, dispatch}}>
            {props.children}
        </CounterContext.Provider>

    );
};

export default DataCart;