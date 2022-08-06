import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostItem } from "./types";
import api from "../../../services/api";

export const fetchPost = createAsyncThunk(
  "/posts/fetchPost",
  async (id: string) => {
    const { data } = await api.get<PostItem>(`/posts/${id}`);
    return data;
  }
);
