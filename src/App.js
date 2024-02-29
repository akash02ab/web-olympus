import styled from 'styled-components';
import Nav from './components/Nav';
import Home from './components/Home';

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--background-primary);
`;

function App() {
  return (
    <AppWrapper>
      <Nav />
      <Home />
    </AppWrapper>
  );
}

export default App;
