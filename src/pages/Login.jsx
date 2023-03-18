import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import { Input } from '../components/Input';
import Logo from '../components/Logo';
import useInput from '../hooks/useInput';
import { apis } from '../shared/axios';
//로그인페이지
function Login() {
  const navigator = useNavigate()
  const [idValue, idHandler] = useInput('')
  const [pwValue, pwHandler] = useInput('')


  const loginHandler = (e) => {
    e.preventDefault();
    // *비동기 함수를 사용하여 데이터를 보내준다. 위에 aync 필수
    const logindata = {
      userId: idValue,
      password: pwValue
    }
    // apis.post({/ api / login, logindata})

  }


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