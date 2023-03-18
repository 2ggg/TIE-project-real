import React from 'react';
import defaltImg from "../assets/image/defalt-img.jpg";

function MainPostCard({img, title, nickname, createdAt}) {
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
      <div>
        <h5>{title}</h5>
        <label>{nickname}</label>
        <label>{createdAt}</label>
      </div>
    </>
  );
};

export default MainPostCard;