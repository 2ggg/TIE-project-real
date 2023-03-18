import React from 'react';
import defaltImg from "../assets/image/defalt-img.jpg";

export function MainPostCard({img, title, nickname, createdAt}) {
  let alt = title;
  if(img === "false") {
    img = defaltImg;
    alt = "defalt img";
  };

  let arr = createdAt.split(' ');
  createdAt = arr[0];

  return (
    <>
      <img src={img} alt={alt} />
      <div>
        <h5>{title}</h5>
        <label>{nickname}</label>
        <label>{createdAt}</label>
      </div>
    </>
  );
};

export function PostComment ({postId}) {
  return (
    <>
      <div className="post-comment">
        <span>
          <label>닉네임 | 날짜</label>
        </span>
        <pre>댓글</pre>
      </div>
      <button>쓰레기통</button>
    </>
  );
};