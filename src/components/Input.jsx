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
    border: 1px solid black;
    border-radius:5px;
    padding: 5px;
    
  `
}



export const Input = ({ inputtype, ...rest }) => {
  const InputStyle = INPUTSTYLE[inputtype]
  return (
    <StyledInput InputStyle={InputStyle} {...rest}></StyledInput>
  )
}
const StyledInput = styled.input`
  background-color: #F5F5F5;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  ${(props) => (props.InputStyle)}

`