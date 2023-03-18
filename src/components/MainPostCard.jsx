import React from 'react';
import defaltImg from "./defalt-img.jpg";

function MainPostCard({postId, img, title, nickname, createdAt}) {
  let alt = title;
  if(img === null) {
    img = defaltImg;
    alt = "defalt img";
  };

  let arr = createdAt.split(' ');
  createdAt = arr[0];

  return (
    <>
      <img src={img} alt={alt} />
      <h5>{title}</h5>
      <label>{nickname}</label>
      <label>{createdAt}</label>
    </>
  );
};

export default MainPostCard;