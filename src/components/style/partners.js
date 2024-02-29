import styled from "styled-components";

const PartnersSection = styled.section`
  max-width: 960px;
  height: 60px;
  margin: 0 auto;
  margin-top: 200px; 
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  position: relative;

  svg {
    position: absolute;
    right: -116px;
    bottom: -88px;
  }
`;

export default PartnersSection;