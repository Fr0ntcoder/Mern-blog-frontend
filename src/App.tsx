import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import SinglePost from "./pages/SinglePost";
import Login from "./pages/Login";
import Register from "./pages/Register";

import MainLayout from "./layouts/Main-layout";
import EmptyLayout from "./layouts/Empty-layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
      </Route>
      <Route path="/" element={<EmptyLayout />}>
        <Route path="single-post" element={<SinglePost />}></Route>
        <Route path="add-post" element={<AddPost />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
