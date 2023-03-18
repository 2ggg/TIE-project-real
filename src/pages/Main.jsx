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

  // if(isLoading) return <div style={{backgroundColor:"blue"}}>로딩중</div>;

  return (
    <>
      <Header />
      <MainContainer>
        {
          main.map((item) =>{
            return (
              <MainPostCard 
                postId={item.postId}
                img={item.img}
                title={item.title}
                nickname={item.nickname}
                createdAt={item.createdAt}
              >

              </MainPostCard>)
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

export default Main;