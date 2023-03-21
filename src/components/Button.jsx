
import React from 'react'
import styled from 'styled-components'
import topBtnImg from '../assets/image/top-btn.svg';


function Button({ children, ...rest }) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default Button;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #2975CC;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  position: relative;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  :active{
    background-color: #2260A7;
  }
`;


export const TopBtn = () => {
  return (
    <>
      <span id="top" />
      <a href="#top">
        <TopBtnSpan>
          <img
            title='위로 가기' alt='위로 가기 버튼' src={topBtnImg} width="100" height="100" />
        </TopBtnSpan>
      </a>
    </>
  );
};

const btnSize = {
  topBtn: {
    width: 50,
    height: 50,
  }
};

const TopBtnSpan = styled.div`
  width: ${btnSize.topBtn.width}px;
  height: ${btnSize.topBtn.height}px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #28436ed1;
  img {
    width: 20px;
  }
`;