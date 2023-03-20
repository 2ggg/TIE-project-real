import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from '../pages/Form';
import Login from '../pages/Login';
import Main from '../pages/Main';
import PostDetail from '../pages/PostDetail';
import Signup from '../pages/Signup';
import Update from '../pages/Update';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Form />} />
        <Route path="/update/:postId" element={<Update />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
