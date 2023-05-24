import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: [],
        total: 0,
    },
    reducers: {
        addToBasket: (state, action) => {
            state.basket = [...state.basket, action.payload]
        },
        removeFromBasket: (state, action) => {
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.payload.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload.id}) as it's not in basket!`
                )
            }

            state.basket = newBasket;
        }

    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer