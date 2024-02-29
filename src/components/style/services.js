import styled from "styled-components";
import backgroundImage from "../../assets/images/service-background.svg";

const ServiceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-top: 200px;
`;

const ServiceWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin-top: 60px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  .col {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 135px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    counter-increment: item 1;
    text-decoration: none;

    span {
      font-family: "Gamora";
      font-size: 40px;
      font-weight: 400;
      line-height: 54px;
      margin-left: 35px;
      color: var(--text-primary);
      position: relative;

      &:before {
        content: "0" counter(item) ".";
        font-family: "Plus Jajarta Sans", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 21.6px;
        letter-spacing: 0.08ch;
        color: var(--text-secondary);
        position: absolute;
        top: -8px;
        left: -35px;
      }
    }

    svg {
      color: var(--text-primary);
      cursor: pointer;
      transition: transform 200ms ease-in;

      &:hover {
        transform: rotate(-40deg);
        transition: transform 200ms ease-in;
        color: var(--brand-primary);
      }
    }

    &:hover svg {
      transform: rotate(-40deg);
      transition: transform 200ms ease-in;
      color: var(--brand-primary);
    }
  }

  .horizontal-line {
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: var(--text-primary);
    opacity: 0.2;
  }
`;

export {
  ServiceSection,
  ServiceWrapper
};