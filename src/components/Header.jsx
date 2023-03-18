import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import { cookies } from "../shared/cookie";
import Logo from './Logo';

//*받은 쿠키에 토큰이 있으면 로그아웃, 없으면 로그인
//*받은 쿠키값이 있으면 토큰 내부의 nick name 확인
//*글 작성 이모티콘은 write:true false로 받아보자

function Header() {
  const navigator = useNavigate()
  // *쿠키 받아와서 토큰 값 저장. cookie get ()
  const token = cookies.get("token");

  const logInHandler = () => {
    navigator('/login')
  }
  const logOutHandler = () => {
    cookies.remove("token")
    navigator('/')
  }


  return (
    <HeaderContainer>
      <Logo>TIE</Logo>
      {token ? <div><p>여기는 닉네임 넣을것</p></div> : null}
      <Button onClick={() => navigator('/posts')} >작성</Button>
      {!token ? <Button onClick={logInHandler} height={'38px'} width={'60px'}>login</Button> :
        <Button onClick={logOutHandler} height={'38px'} width={'60px'}>logout</Button>}
    </HeaderContainer >
  );
};

export default Header;


const HeaderContainer = styled.div`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-evenly;
`

