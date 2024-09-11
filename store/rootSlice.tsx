import { combineReducers } from "@reduxjs/toolkit";
import collectionSlice from "@/store/slices/collectionSlice";

const rootSlice = combineReducers({
  collection: collectionSlice,
});

export default rootSlice;
