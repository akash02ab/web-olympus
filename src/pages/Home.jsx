import { Fragment } from "react";
import styled from "styled-components";
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Partners from '../components/Partners';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Updates from '../components/Updates';

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
      </SectionWrapper>
      <Services />
      <SectionWrapper>
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