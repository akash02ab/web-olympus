import { Fragment } from "react";
import styled from "styled-components";
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Newsletter from './Newsletter';
import Partners from './Partners';
import Portfolio from './Portfolio';
import PortfolioItem from './PortfolioItem';
import Services from './Services';
import Testimonials from './Testimonials';
import Updates from './Updates';

const SectionWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 135px;
`;

export default function Home () {
  return (
    <Fragment>
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
        <Updates />
      </SectionWrapper>
      <Newsletter />
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
    </Fragment>
  );
}