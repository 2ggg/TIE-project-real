import { useState } from 'react'
import styled, { css } from 'styled-components'


const INPUTSTYLE = {
  line: css`
    :focus{
      outline: none;
    }
    border-left-width:0;
    border-right-width:0;
    border-top-width:0;
    border-bottom-width:1;
  `,
  box: css`
    background-color: white;
    :focus{
      outline: none;
    }
    border: 1px solid white;
    border-radius:5px;
    padding: 5px;
  `
}



export const Input = ({ texttype, inputtype, ...rest }) => {
  const InputStyle = INPUTSTYLE[inputtype]
  return (
    <>
      {texttype == 'textarea' ? <StyledTextarea {...rest}></StyledTextarea> :
        <StyledInput InputStyle={InputStyle} {...rest}></StyledInput>}
    </>
  )
}



const StyledInput = styled.input`
  background-color: #F5F5F5;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  ${(props) => (props.InputStyle)}
`

const StyledTextarea = styled.textarea`
  border-radius: 10px;
  width: 300px;
  height: 150px;
  border: none;
  :focus{
    outline: none;
  }
  overflow: hidden;
  resize: none;
  padding: 10px;
  margin: 5px;
`