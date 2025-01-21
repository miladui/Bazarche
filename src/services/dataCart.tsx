"use client"
import React, {useReducer , createContext} from 'react';



const initialState = {
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
            return {
                ...state, selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems)
            }
        case "remove_item" :
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItem],
                ...sumItems(...newSelectedItem)
            }
        case "increase":
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
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkOut: true,
            }
        case "clear":
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