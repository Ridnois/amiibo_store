import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAmiibo } from "../../types";

export const getLocalStorage = (key: string) => {
  try {
    if (window && window.localStorage) {
      localStorage.get(key);
    }
  } catch (e) {
    throw e;
  }
}

