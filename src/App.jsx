import './App.css';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container, Wrap } from './components/StyledComponents';
import { TopBtn } from './components/Button';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrap>
        <Container>
          <TopBtn/>
          <Router />
        </Container>
      </Wrap>
    </QueryClientProvider>
  );
};
export default App;



