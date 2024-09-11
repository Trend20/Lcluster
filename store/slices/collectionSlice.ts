import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state: any, action) => {
      state.collections.push(action.payload);
    },
  },
});

const { addCollection } = collectionSlice.actions;
export default collectionSlice.reducer;
