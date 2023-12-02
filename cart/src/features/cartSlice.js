import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        // Add item to cart
        addProduct: (state, action) => {
            const productId = action.payload.id;
                const existingItem = state.cartItems.find(item => item.id === productId);

                if (!existingItem) {
                    // Item is not in the cart, add it with quantity 1
                    state.cartItems.push({ ...action.payload, quantity: 1 });
                } else {
                    // Item is already in the cart, increase its quantity
                    existingItem.quantity += 1;
                }
        },

        // remove item from cart
        removeFromCart: (state, action) => {
            const productId = action.payload.id;
            const existingItem = state.cartItems.find(item => item.id === productId);
        
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    // If quantity is 1, remove the item from the cart
                    state.cartItems = state.cartItems.filter(item => item.id !== productId);
                } else {
                    // Decrease the quantity of the item by 1
                    existingItem.quantity -= 1;
                }
            }
        },

        
            // Completely delete the product
        deleteProduct: (state, action) => {
        const productId = action.payload.id;
        state.cartItems = state.cartItems.filter(item => item.id !== productId);
        }

    }
})

export const  { addProduct, removeFromCart, totalPrice, deleteProduct } = cartSlice.actions

export default cartSlice.reducer