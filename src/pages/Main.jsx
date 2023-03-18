import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header'
import MainPostCard from '../components/MainPostCard';
import { __getPosts } from '../redux/modules/postsSlice';
//메인페이지
function Main() {
  const dispatch = useDispatch();

  const {isLoading, isError, error, main} = useSelector((state) => {
    return state.postsSlice;
  });

  useEffect(() => {
    dispatch(__getPosts());
  }, []);

  if(isLoading) {
    return (
      <div style={{backgroundColor:"blue"}}>로딩중</div>
    );
  };
  if(isError) {
    return (
      <div style={{backgroundColor:"red"}}>{error}</div>
    );
  };

  return (
    <>
      <Header />
      <MainContainer>
        {
          main.map((item) =>{
            return (
              <Link to={`/posts/${item.postId}`}>
              <PostCard>
                <MainPostCard
                  key={item.postId}
                  img={item.img}
                  title={item.title}
                  nickname={item.nickname}
                  createdAt={item.createdAt}
                />
              </PostCard>
              </Link>
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
  background-color: #F8F8F8;
`;

const PostCard = styled.div`
  max-width: 150px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0;

  background-color: #ffffff;
  /* box-shadow: 0px 0px 5px #00000063; */
  border-radius: 5px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
  };

  div {
    display: flex;
    flex-direction: column;

    label{
      font-size: 12px;
      margin-top: 5px;
      cursor: pointer;
      &:nth-child(3n) {
        font-size: 6px;
        margin-top: 10px;
      }
    }
  }

  h5 {
    font-size: 15px;
    font-weight: 700;
    margin-top: 5px;
  };
`;

export default Main;