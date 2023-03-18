import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { Input } from '../components/Input'
import Logo from '../components/Logo'
import useInput from '../hooks/useInput'
import { apis } from '../shared/axios'

function Signup() {
  const [userID, userIDHandler] = useInput(``)
  const [nickName, nickNameHandler] = useInput(``)
  const [userPW, userPWHandler] = useInput(``)

  const [confirmPW, confirmPWHandler] = useInput(``)

  const singnUpHandler = (e) => {
    e.preventDefault()
    //*회원가입 정보 전송
    //*아이디 중복 체그 안하면 회원가입 못함
    // const userinpo = {
    //   userId: userID,
    //   nickname: nickName,
    //   password: userPW,
    // }
    // apis.post('/api/signup',userinpo)
  }

  const checkID = () => {
    //*아이디 체크를 위해 보내기
    // const checkinpo = { userId: userID }
    // apis.post('/api/signup/check', checkinpo)

    //!받는값
    // * 201 아이디 중복이 없을시
    // {
    // "duplicationResult": false,
    // ”msg” : ”사용 가능한 아이디 입니다.”
    // }

    // * 400 아이디 중복이 있을시
    // {
    // "duplicationResult": true,
    // ”msg”:”중복된 아이디가 있습니다.”
    // }
  }

  return (
    <SubmitForm onSubmit={singnUpHandler}>
      <Logo />
      <StyledDiv>
        <div>
          <Input value={userID} onChange={userIDHandler} width={'200px'} placeholder={'아이디입력'} required></Input>
          <Button type={'button'} onClick={checkID}>중복확인</Button>
        </div>
        <Input value={nickName} onChange={nickNameHandler} width={'250px'} placeholder={'닉네임입력'} required></Input>
        <Input value={userPW} onChange={userPWHandler} width={'250px'} placeholder={'비밀번호 입력'} required></Input>
        <Input value={confirmPW} onChange={confirmPWHandler} width={'250px'} placeholder={'비밀번호 확인'} required></Input>
      </StyledDiv>
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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px
`