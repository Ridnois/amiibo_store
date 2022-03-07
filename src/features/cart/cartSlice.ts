import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IAmiibo } from '../../types';

export interface IAmiiboCartState {
  checked: boolean;
  items: IAmiibo[];
}

const initialState: IAmiiboCartState = {
  checked: false,
  items: [],
}

export const AmiiboCartSlice = createSlice({
  name: 'amiiboCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAmiibo>) => {
      state.items.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<IAmiibo>) => {
      state.items.filter((item: IAmiibo) => item.name !== action.payload.name);
    }
  }
})

export default AmiiboCartSlice.reducer
