import styled from 'styled-components';
import Nav from 'components/Nav';
import Home from 'pages/Home';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--background-primary);
`;

function App() {
  return (
    <AppWrapper>
      <Nav />
      <Home />
      <Footer />
    </AppWrapper>
  );
}

export default App;
