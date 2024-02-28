import styled from 'styled-components';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Partners from './components/Partners';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import PortfolioItem from './components/PortfolioItem';
import Testimonials from './components/Testimonials';

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--background-primary);
`;

const SectionWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 135px;
`;

function App() {
  return (
    <AppWrapper>
      <Nav />
      <Hero />
      <SectionWrapper>
        <Partners />
        <About />
        <Services />
        <Portfolio />
      </SectionWrapper>
      <PortfolioItem />
      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>
    </AppWrapper>
  );
}

export default App;
