import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/Header'
import MainPostCard from '../components/MainPostCard';
import { __getPosts } from '../redux/modules/postsSlice';
//메인페이지
function Main() {
  const dispatch = useDispatch();

  const {isLoading, error, main} = useSelector((state) => {
    return state.postsSlice;
  });

  useEffect(() => {
    dispatch(__getPosts());
  }, []); //[] 안 넣어주면 영원히 무한로딩

  if(isLoading) {
    return (
      <div div style={{backgroundColor:"blue"}}>로딩중</div>
    );
  };

  return (
    <>
      <Header />
      <MainContainer>
        {
          main.map((item) =>{
            return (
              <PostCard>
                <MainPostCard
                  key={item.postId}
                  img={item.img}
                  title={item.title}
                  nickname={item.nickname}
                  createdAt={item.createdAt}
                />
              </PostCard>
            )
          })
        }
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px #00000063;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  };

  h5 {
    font-size: 15px;
    font-weight: 700;
    margin-top: 5px;
  };

  label{
    font-size: 12px;
    margin-top: 5px;
    &:nth-child(2n) {
      font-size: 6px;
      margin-top: 10px;
    }
  };
`;

export default Main;