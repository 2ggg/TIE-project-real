import React, { useEffect, useState } from 'react';
import { apis } from '../shared/axios';
import { InputImgComponent } from './InputComponent';

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

export const PostCommentComponent = ({postId, comment}) => {

  return (
    <>
      <div className="post-comment">
        <div className="space-between">
          <span className="column">
            <label>{comment.nickname}</label>
            <label>{comment.createdAt}</label>
          </span>
          <button>쓰</button>
        </div>
        <pre>{comment.comment}</pre>
      </div>
    </>
  );
};

export const PostComponent = ({postId}) => {
  const [onePost, setOnePost] = useState(null);
  const [updateResult, setUpdateResult] = useState(false);
  const imgResult = (onePost) => {//img 있는지 없는지 확인 후 있으면 이미지 추가, 없으면 아무것도 없음
    return onePost?.img !== "false" && <InputImgComponent img={onePost?.img} alt={onePost?.title}/>;
  };

  const isUpdated = (updateResult) => {
    return updateResult === true && <label>수정됨</label>;
  };

  const fetchPost = async(postId) => {
    const postResponse = await apis.get(`api/posts/${postId}`);
    setOnePost(postResponse.data.post);
    setUpdateResult(postResponse.data.isUpdate);
  };

  useEffect(() => {
    fetchPost(postId);
  }, [JSON.stringify(onePost)]);

  return (
    <>
      <h1>{onePost?.title}</h1>
          <div>
            <label>{onePost?.nickname}</label>
            <span>
              <button>연필</button>
              <button>쓰</button>
            </span>
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



