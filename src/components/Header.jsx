import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import { cookies } from "../shared/cookie";
import { LOGO } from './Logo';

//*받은 쿠키값이 있으면 로그아웃, 없으면 로그인
//*받은 쿠키값이 있으면 토큰 내부의 nick name 확인
//*글 작성 이모티콘은 write:true false로 받아보자

function Header() {
  const navigator = useNavigate()

  // *쿠키 받아와서 토큰 값 저장. cookie get ()
  //*톸
  return (
    <HeaderContainer>
      <DivContainer onClick={() => navigator('/')} cursor={'pointer'}><LOGO>TIE</LOGO></DivContainer>
      {/* !닉네임 조건필요 */}
      <DivContainer><p>여기는 닉네임 넣을것</p></DivContainer>
      <DivContainer onClick={() => navigator('/posts')} cursor={'pointer'}><p>작성</p></DivContainer>
      {/* !로그인 로그아웃 조건 필요 */}
      <Button onClick={() => navigator('/login')} height={'38px'} width={'60px'}>로그인</Button>

      {/* 로그아웃
      <Button onClick={() => {
        cookies.remove("token")
        navigator('/')}} height={'38px'} width={'60px'}>로그아웃</Button> */}


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

const DivContainer = styled.div`
  cursor: ${({ cursor }) => cursor};
`