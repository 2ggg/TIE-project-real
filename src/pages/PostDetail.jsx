import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { apis } from "../shared/axios";
import Header from "../components/Header";
import { PostCommentComponent, PostComponent } from "../components/PostComponents";

//상세페이지
function PostDetail() {
  const postId = useParams().postId;
  const [comments, setComments] = useState(null);
  const fetchComment = async(postId) => {
    const commentResponse = await apis.get(`/posts/${postId}/comments`);
    setComments(commentResponse.data.comments);
  };

  useEffect(() => {
    fetchComment(postId);
  }, [JSON.stringify(comments)]);

  //한페이지에서만, 한 컴포넌트에서만 보는 건 굳이 리덕스x
  //리덕스쿼리 = 임시 저장 데이터
  //전역 : 유저정보

  return (
    <>
      <Header/>
      <PostWrap>
        {/* 게시글 */}
        <PostContainer>
          <PostComponent postId={postId}/>
        </PostContainer>

        {/* 댓글 */}
        <PostCommentWrap>
          <ul>
            {comments?.map((item) => {
              console.log(item);
              return (
                <li key={item.commentId}>
                  <PostCommentContainer>
                    <PostCommentComponent postId={postId} comment={item}/>
                  </PostCommentContainer>
                </li>
              );
            })}
          </ul>
        </PostCommentWrap>
      </PostWrap>
    </>
  );
}

export default PostDetail;

const PostWrap = styled.div`
  margin: 20px;
  pre {
    font-size: 15px;
  }
`;

const PostContainer = styled.div`
  margin-bottom: 10px;
  font-size: 15px;

  h1 {
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 10px;
  }

  label {
    font-size: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    label {
      font-size: 12px;
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin: 10px 0;
  }
`;

const PostCommentWrap = styled.div`
  
`;

const PostCommentContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-top: 2px solid black;
  

  .post-comment {
    width: 100%;
    margin: 10px;
    .space-between {
      display: flex;
      justify-content: space-between;
      .column {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .nickname {
    font-size: 14px;
  }

  label {
    font-size: 11px;
  }

  pre {
    font-weight: 700;
    margin-top: 5px;
    font-size: 15px;
    white-space: pre-wrap;
    word-break: break-all;
  }
`;
