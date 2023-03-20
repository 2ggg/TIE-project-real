import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header'
import { Input } from '../components/Input';
import useInput from '../hooks/useInput';
import { apis } from '../shared/axios';
import { cookies } from '../shared/cookie';

//*작성페이지 토큰이 없으면 입장 불가.
function Form() {
  const [title, titleHandler] = useInput(``)
  const [content, contenthandler] = useInput(``)
  const [img, setImg] = useState(``)
  const token = cookies.get("token");

  const postInfo = {
    title: title,
    content: content,
    imgData: [{}],
  }


  //!파일 보내는 페키지? 필요

  //*가드 토큰이 없으면 내보내기.
  const navigator = useNavigate();
  useEffect(() => {
    if (!token) {
      alert("로그인이 필요한 서비스 입니다.")
      navigator("/login");
    }
  }, [])

  //* 제출하기.
  const submitPost = async (e) => {
    e.preventDefault();
    try {
      const result = await apis.post('/api/posts', postInfo)
      console.log(result);
    } catch (e) {
      alert(e)
    }

  }

  return (
    <form onSubmit={submitPost}>
      <Header />
      <h1 style={{ backgroundColor: '#7996f5' }}>작성페이지</h1>
      <Input value={title} onChange={titleHandler} width='300px' placeholder={'제목'}></Input>
      <div style={{ backgroundColor: 'green', height: "100px" }}>이미지 띄우는 곳 필요</div>
      <Input value={content} onChange={contenthandler} width='300px' placeholder={'내용'}></Input>

      <Button>제출</Button>
    </form>
  )
}

export default Form;