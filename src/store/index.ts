import {
  Action,
  configureStore,
  createAsyncThunk,
  createSlice,
  ThunkAction,
  PayloadAction,
} from '@reduxjs/toolkit';


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;

 export interface IAmiibo {
  name: string;
  gameSeries: string;
  amiiboSeries: string;
  image: string;
  character: string;
  type: string;
 }

 export type AmiiboState = {
  amiibos: IAmiibo[];
  pending: boolean;
  error: boolean;
 }

 const initialState: AmiiboState = {
  amiibos: [],
  pending: false,
  error: false,
 }

export const getZelda = createAsyncThunk('amiibos/getzelda', async () => {
  const response = await fetch('https://amiiboapi.com/api/amiibo/?type=figure&gameseries=the+legend+of+zelda')
  return response.json()
})

 export const amiiboSlice = createSlice({
  name: 'amiibos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getZelda.pending, (state) => {
        state.pending = true;
      })
      .addCase(getZelda.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.amiibos = payload.amiibo; 
      })
  }
 })
export const selectZelda = (state: RootState) => state.amiibos
export default amiiboSlice.reducer;

export const store = configureStore({
  reducer: {
    amiibos: amiiboSlice.reducer 
  // This is where we add reducers.
  // Since we don't have any yet, leave this empty
  },
});

