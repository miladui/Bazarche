const isCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result
}

const removeCart = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id)
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity
    }
}


export {isCart, removeCart}
