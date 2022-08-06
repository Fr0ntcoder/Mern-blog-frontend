import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { postsReducer } from "./posts/fetchPosts/slice";
import { postReducer } from "./posts/fetchPost/slice";
import { tagsReducer } from "./posts/fetchTags/slice";
import { authReduser } from "./Auth/slice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    tags: tagsReducer,
    auth: authReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
