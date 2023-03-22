import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header'
import { Input } from '../components/Input';
import useInput from '../hooks/useInput';
import { apis } from '../shared/axios';
import { cookies } from '../shared/cookie';
//수정
function Update() {
  const param = useParams();
  const id = param.postId
  const { isLoading, isError, error, main } = useSelector((state) => {
    return state.postsSlice;
  });
  const foudData = main.find((data) => data.postId == param.postId)
  console.log("데이터!", foudData);
  const foundimg = `${process.env.REACT_APP_IMAGE_URL}` + foudData.img

  const [title, titleHandler] = useInput(foudData.title)
  const [content, contenthandler] = useInput(foudData.content)
  const [imgdata, setImgData] = useState(foundimg)
  const [imgPreview, setImgPreview] = useState(foundimg);


  const token = cookies.get("token");


  //!파일 보내는 페키지? 필요

  //*가드 토큰이 없으면 내보내기.
  const navigator = useNavigate();
  useEffect(() => {
    if (!token) {
      alert("로그인이 필요한 서비스 입니다.")
      navigator("/login");
    }
    // const results = await apis.get(`/api/posts/${id}/img`, {
    //   responseType: "blob"
    // })
  }, [])

  //* 제출하기.
  const submitPost = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('title', title)
    formdata.append('content', content)
    formdata.append('img', imgdata)
    try {
      const result = await apis.patch(`api/posts/${id}`, formdata, {
        headers: { authorization: `Bearer ${token}` }
      })
      console.log("결과값", result);
      alert('게시글 수정완료')
      navigator("/")

      //!수정하기
    } catch (e) {
      console.log(e);
      alert(e.response.data.errorMessage)
    }
  }


  const onImageHandler = (e) => {
    if (e.target.files.length) {
      let fileReader = new FileReader();
      let imgTarget = (e.target.files)[0];
      console.log("이미지타겟", imgTarget);
      setImgData(imgTarget)
      fileReader.readAsDataURL(imgTarget);
      fileReader.onload = function (e) {
        setImgPreview(e.target.result);
      }
    } else {
      setImgPreview("");
    }
  }

  // useEffect(async () => {
  //   try {
  //     console.log("id", id);
  //     const result = await apis.get(`/api/posts/${id}/img`, {
  //       responseType: "blob"
  //     })
  //     console.log(result);
  //   } catch (e) {
  //   }
  // }, [])

  return (
    <div >
      <Header />
      <StyledForm onSubmit={submitPost}>
        <Input inputtype={'box'} value={title} onChange={titleHandler} width='300px' placeholder={'제목'} required></Input>
        <StyledImg src={imgPreview} name="profile_files" />
        <input type="file" accept="image/*" onChange={onImageHandler} />
        <Input texttype={'textarea'} inputtype={'box'} value={content} onChange={contenthandler} width='300px' placeholder={'내용'} required></Input>
        <Button type={'submit'} width={'300px'} height={'40px'}>수정하기</Button>
      </StyledForm>
    </div>
  )
}

export default Update;


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