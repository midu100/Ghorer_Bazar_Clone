import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('Name')) || null,
  },
  reducers: {
    // nav er moddhe add to cart er moddhe product show korabe
    addToCart: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = counterSlice.actions

export default counterSlice.reducer