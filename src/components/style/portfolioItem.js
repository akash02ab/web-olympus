import styled from "styled-components";

const PortfolioItemWrapper = styled.article`
  width: 100%;
  max-width: 1440px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  gap: 50px;
  overflow: scroll hidden;

  a {
    width: 430px;
    height: 564px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (min-width: 1600px) {
    max-width: 100%;
    justify-content: center;
  }
`;

export default PortfolioItemWrapper