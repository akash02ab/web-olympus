import styled from "styled-components";
import backgroundImage from "../../assets/images/hero-background.jpg";

const HeroSection = styled.section`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(24, 24, 24, 1), rgba(24, 24, 24, 0.59), rgba(24, 24, 24, 0.38), rgba(24, 24, 24, 0));
    z-index: -1;
  }
`;

const SectionWrapper = styled.div`
  max-width: 800px;
  z-index: 2;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Gamora";
  font-size: 100px;
  font-weight: 400;
  line-height: 120px;
  padding-top: 200px;
  color: var(--text-primary);
`;

const Subtitle = styled.p`
  font-family: 'Plus Jajarta Sans', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  margin-top: 20px;
  padding: 0 40px;
  color: var(--text-secondary);
`;

const ButtonWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollWrapper = styled.div`
  margin-top: 200px;
  
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 19.4px;
    letter-spacing: 0.2ch;
    color: var(--text-primary);
  }

  svg {
    cursor: pointer;
  }
`;

export {
  HeroSection,
  SectionWrapper,
  Title,
  Subtitle,
  ButtonWrapper,
  ScrollWrapper,
};