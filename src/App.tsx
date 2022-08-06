import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Pages
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import SinglePost from "./pages/SinglePost";
import Login from "./pages/Login";
import Register from "./pages/Register";

import MainLayout from "./layouts/Main-layout";
import EmptyLayout from "./layouts/Empty-layout";
import { useAppDispatch } from "./redux/store";
import { selectIsAuth } from "./redux/Auth/selectors";
import { fetchToken } from "./redux/Auth/acyncAction";

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchToken());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
      </Route>
      <Route path="/" element={<EmptyLayout />}>
        <Route path="posts/:id" element={<SinglePost />}></Route>
        <Route path="posts/:id/edit" element={<AddPost />}></Route>
        <Route path="add-post" element={<AddPost />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
