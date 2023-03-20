import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import { Input } from '../components/Input'
import Logo from '../components/Logo'
import useInput from '../hooks/useInput'
import { apis } from '../shared/axios'
import { cookies } from '../shared/cookie'


function Signup() {
  const navigator = useNavigate()
  const [userID, userIDHandler] = useInput(``)
  const [nickName, nickNameHandler] = useInput(``)
  const [userPW, userPWHandler] = useInput(``)
  const [confirmPW, confirmPWHandler] = useInput(``)
  const [checkId, setCheckId] = useState(true)

  //*정규식
  const idCheck = /^[a-z0-9]+$/;
  const pwCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/;
  const nickNameCheck = /^[a-zA-Z가-힣0-9]{3,10}$/;



  //*회원가입
  const singnUpHandler = async (e) => {
    e.preventDefault()
    if (userPW !== confirmPW) {
      alert("비밀번호 같지 안너")
      return
    }
    if (!pwCheck.test(userPW)) {
      alert("정규식 x")
      return
    }
    if (checkId) {
      alert("중복확인이 필요합니다.")
      return
    }
    const userInpo = {
      userId: userID,
      nickname: nickName,
      password: userPW,
      confirm: confirmPW,
    }
    try {
      const result = await apis.post('/api/signup', userInpo)
      console.log(result);
    }
    catch (e) {
      alert(e)
    }
  }
  // console.log(typeof (userID));
  // console.log("userID", userID);
  //*아이디 중복확인
  const checkID = async () => {
    const checkinpo = {
      userId: userID,
    }
    try {
      const result = await apis.post('/api/signup/check', checkinpo)
      console.log("받은데이터", result.data);
      setCheckId(result.duplicationResult)
    }
    catch (e) {
      console.error(e)
      alert(e)
    }
  }

  //*프론트 가드. 토큰값 가지고 있으면 홈으로
  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      navigator("/");
    }
  }, []);


  // TODO닉네임 체크 디바운싱 필요함.


  return (
    <SubmitForm onSubmit={singnUpHandler}>
      <Logo />
      <BoxDiv>
        <div>
          <div style={{ display: 'inline-block' }}>
            <Input value={userID} onChange={userIDHandler} width={'200px'} placeholder={'아이디입력'} required></Input>
          </div>
          <div style={{ display: 'inline-block' }} >
            <Button type={'button'} onClick={checkID}>중복확인</Button>
          </div>
          {!userID ?
            <StyledComentDiv color={'red'}>영소문자,숫자 3~12글자 사이.</StyledComentDiv > : !checkId ?
              <StyledComentDiv color={'green'}>사용가능한 아이디입니다.</StyledComentDiv> :
              <StyledComentDiv color={'red'}>아이디를 확인해 주세요</StyledComentDiv>
          }
        </div>

        <div>
          <Input value={nickName} onChange={nickNameHandler} width={'250px'} placeholder={'닉네임입력'} required></Input>
          {!nickName ? <StyledComentDiv color={'red'}>3~10글자 사이</StyledComentDiv> : true === nickNameCheck.test(nickName) ?
            <StyledComentDiv color={'green'} >사용가능합니다</StyledComentDiv> :
            <StyledComentDiv color={'red'}> 형식을 확인해 주세요</StyledComentDiv>
          }
        </div>
        <Input type='password' value={userPW} onChange={userPWHandler} width={'250px'} placeholder={'비밀번호 입력'} required></Input>
        <Input type='password' value={confirmPW} onChange={confirmPWHandler} width={'250px'} placeholder={'비밀번호 확인'} required></Input>
      </BoxDiv>
      <Button width={'300px'} height={'40px'}>회원가입</Button>
    </SubmitForm >
  )
}

export default Signup

const SubmitForm = styled.form`
margin-top: 40%;
  display: flex;
  justify-content: center;
  gap:30px;
  flex-direction: column;
  align-items: center;
`

const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px
`

const StyledComentDiv = styled.div`
  color:${({ color }) => color};
  font-size: 1px;
  margin-top: 5px;

`