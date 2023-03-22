import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header'
import { Input } from '../components/Input';
import useInput from '../hooks/useInput';
import { apis, Hapis } from '../shared/axios';
import { cookies } from '../shared/cookie';
import defaltImg from "../assets/image/defalt-img.jpg";

//*작성페이지 토큰이 없으면 입장 불가.
function Form() {
  const [title, titleHandler] = useInput(``)
  const [content, contenthandler] = useInput(``)
  const [img, setImg] = useState("")
  const [imgPreview, setImgPreview] = useState(defaltImg);


  const token = cookies.get("token");

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
    const formdata = new FormData();
    formdata.append('title', title)
    formdata.append('content', content)
    formdata.append('img', img)
    try {
      const result = await apis.post('api/posts', formdata, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "multipart/form-data"
        }
      })
      console.log(result.data.message);
      alert('게시글 작성완료')
      navigator("/")
    } catch (e) {
      console.log(e);
      alert(e.response.data.errorMessage)
    }
  }

  const onImageHandler = (e) => {
    if (e.target.files.length) {
      let fileReader = new FileReader();
      let imgTarget = (e.target.files)[0];
      setImg(imgTarget)
      fileReader.readAsDataURL(imgTarget);
      fileReader.onload = function (e) {
        setImgPreview(e.target.result);
      }
    } else {
      setImgPreview("");
    }
  }



  return (
    <div >
      <Header />
      <StyledForm onSubmit={submitPost}>
        <Input inputtype={'box'} value={title} onChange={titleHandler} width='300px' placeholder={'제목'} required></Input>
        <StyledImg src={imgPreview} name="profile_files" />
        <input type="file" accept="image/*" onChange={onImageHandler} />
        <Input texttype={'textarea'} inputtype={'box'} height={'100px'} value={content} onChange={contenthandler} width='300px' placeholder={'내용'} required></Input>
        <Button type={'submit'} width={'300px'} height={'40px'}>제출</Button>
      </StyledForm>
    </div>
  )
}

export default Form;

const StyledForm = styled.form`
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
`
const StyledImg = styled.img`
  margin: 10px 0px;
  height: 200px;
  width: 300px;
  border-radius: 10px;
`