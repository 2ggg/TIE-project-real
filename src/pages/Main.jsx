import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { MainPostCard } from "../components/PostComponents";
import { MainContainer, PostCard } from "../components/StyledComponents";
import { __getPosts } from "../redux/modules/postsSlice";

//메인페이지
function Main() {
  const dispatch = useDispatch();

  const { isLoading, isError, error, main } = useSelector((state) => {
    return state.postsSlice;
  });

  useEffect(() => {
    dispatch(__getPosts());
  }, []);

  if (isLoading) {
    return <div style={{ backgroundColor: "blue" }}>로딩중</div>;
  } else if (isError) {
    return <div style={{ backgroundColor: "red" }}>{error}</div>;
  }

  return (
    <>
      <Header/>
      <MainContainer>
        { main.map((item) => {
          return (
            <Link to={`/posts/${item.postId}`} key={item.postId}>
              <PostCard>
                <MainPostCard
                  img={item.img}
                  title={item.title}
                  nickname={item.nickname}
                  createdAt={item.createdAt}
                />
              </PostCard>
            </Link>
          );
        })}
      </MainContainer>
    </>
  );
}
export default Main;