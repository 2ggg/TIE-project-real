import styled from 'styled-components'



export const Input = ({ ...rest }) => {

  return (
    <StyledInput {...rest}></StyledInput>
  )
}
const StyledInput = styled.input`
  background-color: #F5F5F5;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  /* font-size: x-large; */
  :focus{
    outline: none;
  }
  border-left-width:0;
  border-right-width:0;
  border-top-width:0;
  border-bottom-width:1;

`