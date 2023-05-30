
import { configureStore } from '@reduxjs/toolkit';
const initialState = {
    value: 0,
    money: 0

}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Plus':
            return {
                ...state,
                value: state.value + 1,
                money: state.money + 6.50
            }
        case 'Minus':
            return {
                ...state,
                value: state.value - 1,
                money: state.money - 6.50
            }

        default:
            return state

    }

}
const store = configureStore({
    reducer: Reducer
})

export default store;
