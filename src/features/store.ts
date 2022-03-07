import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import amiiboStoreReducer from './amiiboStore/amiiboSlice';
import amiiboCartReducer from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    amiiboStore: amiiboStoreReducer,
    amiiboCart: amiiboCartReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
