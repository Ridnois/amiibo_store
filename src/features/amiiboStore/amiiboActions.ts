import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAmiiboseries } from "./amiiboApi";

export const getAmiiboCollection = createAsyncThunk('amiiboapi/getcollection', async (series: string) => {
  const { amiibo } = await getAmiiboseries(series)
  const data = {[series]: amiibo}
  return data;
})

