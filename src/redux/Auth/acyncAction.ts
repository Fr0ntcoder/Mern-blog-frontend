import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (params: any) => {
    const { data } = await api.post("/auth/login", params);
    return data;
  }
);

export const fetchToken = createAsyncThunk("auth/fetchToken", async () => {
  const { data } = await api.get("/auth/me");

  return data;
});

export const fetchRegister = createAsyncThunk(
  "auth/register",
  async (params: any) => {
    const { data } = await api.post("/auth/register", params);
    return data;
  }
);
