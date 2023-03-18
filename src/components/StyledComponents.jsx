import styled from "styled-components";

const containerSize = { width: 375, height: 767 };
const mainImg = { width: 130, heith: 100 };

//App
export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c2deff;
  display: flex;
`;

export const Container = styled.div`
  width: ${containerSize.width}px;
  min-width: ${containerSize.width}px;
  height: ${containerSize.height}px;
  background-color: #f8f8f8;
  margin: auto;
  overflow: scroll;

  &::-webkit-scrollbar {
    position: absolute;
    right: 0;
    width: 5px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c1c8cf;
  }
`;

export const MarginWrap = styled.div`
  margin: 20px;
`;

//Main
export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const PostCard = styled.div`
  max-width: ${mainImg.width}px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0;
  background-color: #ffffff;
  border-radius: 5px;

  :hover {
    transition: box-shadow 0.3s;
    box-shadow: 0px 0px 5px #00000063;
  }

  img {
    width: ${mainImg.width}px;
    height: ${mainImg.heith}px;
    object-fit: cover;
    border-radius: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 150px;
    color: #28436e;

    label {
      font-size: 12px;
      margin-top: 5px;
      cursor: pointer;
      color: #00000097;

      :nth-child(3n) {
        font-size: 6px;
        margin-top: 10px;
      }
    }
  }

  h5 {
    font-size: 15px;
    font-weight: 700;
    margin-top: 5px;
  }
`;
