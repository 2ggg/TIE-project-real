import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { __deletePost } from '../redux/modules/postsSlice';
import { deleteComment } from '../utils/commentUtils';
import { fetchPost } from '../utils/postUtils';
import { Authentication } from './Authentication';
import { InputImgComponent } from './InputComponent';

//메인페이지 post cardbox
export function MainPostCard({img, title, nickname, createdAt}) {
  let alt = title;
  let arr = createdAt.split(' ');
  createdAt = arr[0];

  return (
    <>
      <InputImgComponent img={img} alt={alt}/>
      <div>
        <h5>{title}</h5>
        <label>{nickname}</label>
        <label>{createdAt}</label>
      </div>
    </>
  );
};

//게시물
export const PostComponent = ({postId}) => {
  const [onePost, setOnePost] = useState(null);
  const [updateResult, setUpdateResult] = useState(false);
  //게시물에 img 존재할때만 보이기
  const imgResult = (onePost) => {
    return onePost?.img !== "false" && <InputImgComponent img={onePost?.img} alt={onePost?.title}/>;
  };

  const isUpdated = (updateResult) => {
    return updateResult === true && <label>수정됨</label>;
  };

  useEffect(() => {
    fetchPost(postId, setOnePost, setUpdateResult);
  }, [JSON.stringify(onePost)]);

  return (
    <>
      <h1>{onePost?.title}</h1>
      <div>
        <label>{onePost?.nickname}</label>
        {/* <Authentication> */}
          <span>
            <button>연필</button>
            <button onClick={__deletePost}>쓰</button>
          </span>
        {/* </Authentication> */}
      </div>
      <span>
        <label>{onePost?.createdAt}</label>
        {" "}
        {isUpdated(updateResult)}
      </span>
      {imgResult(onePost)}
      <pre>{onePost?.content}</pre>
    </>
  );
}

//댓글
export const PostCommentComponent = ({postId, userId, comment, comments, commentId, setComments}) => {
  return (
    <>
      <div className="post-comment">
        <div className="space-between">
          <span className="column">
            <label>{comment.nickname}</label>
            <label>{comment.createdAt}</label>
          </span>
          {/* <Authentication targetUserId={userId}> */}
            {/* 댓글 삭제 버튼 */}
            <button onClick={() => deleteComment({postId, commentId, comments, setComments})}>
              삭제
            </button>
          {/* </Authentication> */}
        </div>
        <pre>{comment.comment}</pre>
      </div>
    </>
  );
};