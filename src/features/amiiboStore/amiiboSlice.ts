import { createSlice } from "@reduxjs/toolkit";
import { getAmiiboCollection } from "./amiiboActions";
import type { IAmiiboCollection, IAmiibo } from "../../types";

export interface AmiiboStoreState {
  collections: {[key: string]: IAmiiboCollection[]};
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AmiiboStoreState = {
  collections: {},
  status: 'idle',
}

export const amiiboStoreSlice = createSlice({
  name: 'amiiboStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAmiiboCollection.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAmiiboCollection.fulfilled, (state, action) => {
        state.status = 'idle';
        const series = Object.keys(action.payload)[0]
        state.collections[series] = action.payload[series]
      })
  }
})

export default amiiboStoreSlice.reducer;

