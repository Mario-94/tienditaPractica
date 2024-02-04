export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
    REMOVE_ONE_ITEM_FROM_CART: 'REMOVE_ONE_ITEM_FROM_CART'
}

export const updateLocalStorage = (state) => { window.localStorage.setItem('cart', JSON.parse(state)) }
const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload
        const productInCartIndex = state.findIndex(item => item.id === id)

        if (productInCartIndex >= 0) {
            // 👀 una forma sería usando structuredClone
            // const newState = structuredClone(state)
            // newState[productInCartIndex].quantity += 1

            // 👶 usando el map
            // const newState = state.map(item => {
            //   if (item.id === id) {
            //     return {
            //       ...item,
            //       quantity: item.quantity + 1
            //     }
            //   }

            //   return item
            // })

            // ⚡ usando el spread operator y slice
            const newState = [
                ...state.slice(0, productInCartIndex),
                { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
                ...state.slice(productInCartIndex + 1)
            ]

            updateLocalStorage(newState)
            return newState
        }

        const newState = [
            ...state,
            {
                ...action.payload, // product
                quantity: 1
            }
        ]

        updateLocalStorage(newState)

        return newState
    },
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
        const { id } = action.payload
        const newState = state.filter(item => item.id !== id)

        updateLocalStorage(newState)
        return newState
    },
    [CART_ACTION_TYPES.CLEAR_CART]: () => {
        updateLocalStorage([])
        return []
    },
    // [CART_ACTION_TYPES.REMOVE_ONE_ITEM_FROM_CART]: (state, action) => {
    //     const { id } = action.payload

    //     const productInCartIndex = state.findIndex(item => item.id === id)
    //     if (productInCartIndex >= 0) {
    //         const newState = [
    //             ...state.slice(0, productInCartIndex),
    //             { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity - 1 },
    //             ...state.slice(productInCartIndex + 1)
    //         ]
    //         console.log(newState[0].quantity)
    //         if (newState[0].quantity <= 0) {
    //             const newState = state.filter(item => item.id !== id)

    //             updateLocalStorage(newState)
    //             return newState
    //         }
    //         updateLocalStorage(newState)
    //         return newState
    //     }
    // }
    [CART_ACTION_TYPES.REMOVE_ONE_ITEM_FROM_CART]: (state, action) => {
        const { id } = action.payload;

        const productInCartIndex = state.findIndex(item => item.id === id);

        if (productInCartIndex >= 0) {
            const updatedItem = { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity - 1 };

            const newState = [
                ...state.slice(0, productInCartIndex),
                updatedItem,
                ...state.slice(productInCartIndex + 1)
            ];

            if (updatedItem.quantity <= 0) {
                const updatedState = state.filter(item => item.id !== id);
                updateLocalStorage(updatedState);
                return updatedState;
            }

            updateLocalStorage(newState);
            return newState;
        }

        // En caso de que no haya encontrado el producto en el carrito, devolver el estado actual
        return state;
    }

}
export const cartReducer = (state, action) => {
    const { type: actionType } = action
    const updatedState = UPDATE_STATE_BY_ACTION[actionType]
    return updatedState ? updatedState(state, action) : state
}