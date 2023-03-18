import React from 'react';
import styled from 'styled-components';
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
    <PostCard key={postId}>
      <img src={img} alt={alt} />
      <h5>{title}</h5>
      <label>{nickname}</label>
      <label>{createdAt}</label>
    </PostCard>
  );
};

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px #00000063;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  };

  h5 {
    font-size: 15px;
    font-weight: 700;
    margin-top: 5px;
  };

  label{
    font-size: 12px;
    margin-top: 5px;
    &:nth-child(2n) {
      font-size: 6px;
      margin-top: 10px;
    }
  };
`;

export default MainPostCard;