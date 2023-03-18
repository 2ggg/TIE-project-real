import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import { cookies } from '../shared/cookie';
//작성
function Form() {
  const navigator = useNavigate();
  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      alert("로그인이 필요한 서비스 입니다.")
      navigator("/login");
    }
  }, [])
  return (
    <>
      <Header />
      <h1 style={{ backgroundColor: '#7996f5' }}>작성페이지</h1>
    </>
  )
}

export default Form;