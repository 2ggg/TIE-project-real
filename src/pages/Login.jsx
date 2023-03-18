import React from 'react'
import Button from '../components/Button';
import { LOGO } from '../components/Logo';
import useInput from '../hooks/useInput';
import { apis } from '../shared/axios';
//로그인페이지
function Login() {

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
      <form onSubmit={loginHandler}>
        <LOGO>TIE</LOGO>
        <input value={idValue} onChange={idHandler} required />
        <input value={pwValue} onChange={pwHandler} required />
        <Button> 로그인 하기</Button>
      </form>
    </>
  )
}

export default Login;