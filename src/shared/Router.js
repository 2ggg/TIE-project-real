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
<<<<<<< HEAD
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Form />} />
        <Route path="/update/:postId" element={<Update />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
=======
        <Route path="/" element={<Main />} />                   {/*메인 페이지*/}
        <Route path="lgoin" element={<Login />} />              {/*로그인 페이지*/}
        <Route path="/signup" element={<Signup />} />           {/*회원가입 페이지*/}
        <Route path="/posts" element={<Form />} />              {/*게시글 작성 페이지*/}
        <Route path="/update/:postId" element={<Update />} />   {/*게시글 수정 페이지*/}
        <Route path="/posts/:postId" element={<PostDetail />} />{/*게시글 상세 페이지*/}
>>>>>>> 3309e3be4eb64f544c45af0db6c512775028cc7c
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
