import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import { Input } from '../components/Input';
import Logo from '../components/Logo';
import useInput from '../hooks/useInput';
import { apis } from '../shared/axios';
import { cookies } from '../shared/cookie';
//로그인페이지
function Login() {
  const navigator = useNavigate()
  const [idValue, idHandler] = useInput('')
  const [pwValue, pwHandler] = useInput('')
  //?영성님게 보내야 하는 api.----
  // const logindata = {
  //   userId: idValue,
  //   password: pwValue
  // }
  //?----------------------------

  //!목서버▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼수정필요▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
  const logindata = {
    id: idValue,
    password: pwValue
  }
  //수정필요
  const loginHandler = async (e) => {
    e.preventDefault();
    // *비동기 함수를 사용하여 데이터를 보내준다. 위에 aync 필수
    try {
      const result = await apis.post('/login', logindata)
      cookies.set("token", result.data.token, { path: "/" })
      navigator("/")
    } catch (e) {
      alert("error!!", e)
    }
  }
  //!▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲수정필요▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲



  //*프론트 가드. 토큰값 가지고 있으면 홈으로
  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      navigator("/");
    }
  }, []);

  return (
    <>
      <SubmitForm onSubmit={loginHandler}>
        <Logo />
        <Input value={idValue} onChange={idHandler} required width={'300px'} placeholder={'ID'} />
        <Input value={pwValue} onChange={pwHandler} required width={'300px'} placeholder={'PassWord'} />
        <StyledDiv onClick={() => navigator('/signup')}>회원가입🏋️‍♂️</StyledDiv>
        <Button width={'300px'} height={'40px'}> 로그인</Button>
      </SubmitForm>
    </>
  )
}

export default Login;


const SubmitForm = styled.form`
margin-top: 40%;
  display: flex;
  justify-content: center;
  gap:40px;
  flex-direction: column;
  align-items: center;
`

const StyledDiv = styled.div`
  cursor: pointer;  
  font-weight:bolder;
`