import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
  const [img, setImg] = useState("../")


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
    console.log("파일을까보자", e);
    // const formdata = new FormData();
    // formdata.append('img', e.target.img.files[0])
    try {
      // const result = await apis.post('/api/posts', postInfo)
      console.log("그냥");
    } catch (e) {
      alert(e)
    }
  }

  const onImageHandler = (e) => {
    if (e.target.files.length) {
      let imgTarget = (e.target.files)[0];
      let fileReader = new FileReader();
      fileReader.readAsDataURL(imgTarget);
      fileReader.onload = function (e) {
        setImg(e.target.result);
      }
    } else {
      setImg("");
    }
  }

  return (
    <div >
      <Header />
      <StyledForm onSubmit={submitPost}>
        <Input inputtype={'box'} value={title} onChange={titleHandler} width='300px' placeholder={'제목'}></Input>
        <input type="file" accept="image/*" onChange={onImageHandler} />
        <img src={img} style={{ height: "100px" }} />
        <Input inputtype={'box'} value={content} onChange={contenthandler} width='300px' placeholder={'내용'}></Input>
        <Button type={'submit'}>제출</Button>
      </StyledForm>
    </div>
  )
}

export default Form;

const StyledForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`