import styled from "styled-components";

const PortfolioItemWrapper = styled.article`
  width: 100%;
  max-width: 1440px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  gap: 50px;

  @media screen and (min-width: 1600px) {
    max-width: 100%;
    justify-content: center;
  }
`;

export default PortfolioItemWrapper