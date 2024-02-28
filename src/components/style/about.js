import styled from "styled-components";

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 6px;
  align-items: center;
  margin-top: 200px;
`;

const AboutLeft = styled.div`
  max-width: 658px;
  grid-area: 1 / 1 / -1 / 9;
`;

const AboutRight = styled.div`
  grid-area: 1 / 9 / -1 / -1;
`;

const AboutOverlap = styled.div`
  grid-area: 4 / 6 / -1 / -1; 
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: space-between;
  width: 470px;
  height: 200px;
  padding: 54px 54px 36px 54px;
  background-color: var(--background-secondary);
`;

const StatsWrapper = styled.div`
  p:first-child {
    font-family: "Gamora";
    font-size: 50px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.2ch;
    color: var(--text-primary);
  }

  p:last-child {
    font-size: 14px;
    font-weight: 500;
    line-height: 22.4px;
    letter-spacing: 0.04ch;
    margin-top: 8px;
    color: var(--text-secondary);
  }
`;

const Description = styled.div`
  max-width: 370px;
  padding: 4px;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    letter-spacing: 0.04ch;
    margin-bottom: 26px;
    color: var(--text-secondary);
  }
`;

export {
  AboutSection,
  AboutLeft,
  AboutRight,
  AboutOverlap,
  StatsWrapper,
  Description
};