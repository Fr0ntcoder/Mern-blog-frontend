import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";

export const fetchTags = createAsyncThunk("/posts/fetchTags", async () => {
  const { data } = await api.get<string[]>("/tags");
  return data;
});
