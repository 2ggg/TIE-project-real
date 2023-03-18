import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { PostComment } from "../components/PostComponents";
import { MarginWrap } from "../components/StyledComponents";
import { apis } from "../shared/axios";

//상세페이지
function PostDetail() {
  const params = useParams();

  const fetchPost = async() => {
    const {postResponse} = await apis.get(`/posts/${params.postId}`);
    console.log(postResponse.data);
  };

  const fetchComment = async() => {
    const {commentResponse} = await apis.get(`/posts/${params.postId}/comments`);
    console.log(commentResponse.data);
  };

  useEffect(() => {
    // fetchPost();
    // fetchComment();
  }, []);

  return (
    <>
      <Header />
      <MarginWrap>
        <PostContainer>
          <div>postId:{params.postId}</div>
          <h2>제목</h2>
          <div>
            <span>
              <label>닉네임</label>|<label>날짜</label>
            </span>
            <span>
              <button>연필</button>
              <button>쓰레기통</button>
            </span>
          </div>
          {/* imgResult(img, title) */}
          <pre>내용내용내용</pre>
        </PostContainer>
        {/* 댓글 */}
        <ul>
          <li>
            <PostCommentContainer>
              <PostComment postId={params.postId}/>
            </PostCommentContainer>
          </li>
          <li>
            <PostCommentContainer>
              {/* <PostComment postId={params.postId}/> */}
              <div className="post-comment">
                <span>
                  <label>닉네임 | 날짜</label>
                </span>
                <pre>댓글</pre>
              </div>
              <button>쓰레기통</button>
            </PostCommentContainer>
          </li>
        </ul>
      </MarginWrap>
    </>
  );
}
export default PostDetail;

//img 있는지 없는지 확인 후 있으면 이미지 추가, 없으면 아무것도 없음
const imgResult = (img, title) => {
  return img !== "false" && <img src={img} alt={title} />;
};

const PostContainer = styled.div`
  background-color: #eefbff;
`;

const PostCommentContainer = styled.div`
  background-color: #dbdfe484;
  border-top: 2px solid black;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .post-comment {
    min-height: 50px;
  }

  label {
    font-size: 11px;
  }

  pre {
    font-size: 13px;
    font-weight: 600;
    margin-top: 5px;
  }

  button {
    margin-right: 10px;
  }
`;
