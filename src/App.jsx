import './App.css';
import styled from 'styled-components';
import Router from './shared/Router';

function App() {
  return (
    <Wrap>
      <Container>
        <Router />
      </Container>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #C2DEFF;
  display: flex;
`;

const Container = styled.div`
  width: 375px;
  height: 767px;
  background-color: #FFFF;
  margin : auto;
  overflow: scroll;
  &::-webkit-scrollbar
  {
    position: absolute;
    right: 0;
    width: 5px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #c1c8cf;
  }

`;