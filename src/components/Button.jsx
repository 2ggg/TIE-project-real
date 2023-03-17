
import React from 'react'
import styled from 'styled-components'

function Button({ children, ...rest }) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default Button;


const StyledButton = styled.button`
  /* cursor: pointer;
  border: none;
  border-radius: 5px;
  position: relative;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  :hover{
    background-color: ${({ color }) => color};
  } */
`;


//외부컴포넌트.
// {/* <Button onClick={() => DeleteButtonHandler(buy.id)} color={'#e41717'} >삭제</Button> */ }