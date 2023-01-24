import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteItems: [],
  totalQuantity: 0,
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.favouriteItems.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.favouriteItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
        });
        state.totalQuantity++;
      }
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.favouriteItems.find((item) => item.id === id);
  
      if (existingItem) {
        state.favouriteItems = state.favouriteItems.filter((item) => item.id !== id);
        state.totalQuantity--;
      }
    },
  },
});

export const favouriteActions = favouriteSlice.actions;

export default favouriteSlice.reducer;
