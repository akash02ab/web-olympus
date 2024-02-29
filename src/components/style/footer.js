import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  margin-top: 200px;
  background-color: var(--footer-background);
  
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 1fr);
    max-width: 1440px;
    margin: 0 auto;
    padding: 62px 135px 26px 135px;
    position: relative;
    z-index: 1;
    overflow: hidden;
  
    &:after {
      content: '';
      border-radius: 40%;
      width: 728px;
      height: 684px;
      position: absolute;
      top: 50%;
      right: calc(50% - 375px);
      background: radial-gradient(var(--brand-primary), var(--brand-gradient));
      filter: blur(50px);
      opacity: 0.3;
      z-index: -1;
    }
  }

  .logo {
    grid-area: 1 / 1 / -1 / 4;
  }

  .socials {
    margin-top: 26px;
    display: flex;
    align-items: center;
    gap: 26px;
  }

  .quick-links {
    grid-area: 1 / 4 / 4 / 6;
  }

  .company {
    grid-area: 1 / 7 / 4 / 8;
  }

  .legal {
    grid-area: 1 / 9 / 4 / 10;
  }

  .copyright {
    grid-area: 4 / 1 / -1 / -1;
  }

  .footer-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-self: center;

    h3 {
      font-size: 18px;
      font-weight: 700;
      line-height: 25.2px;
      color: var(--text-primary);
    }

    li {
      margin-top: 4px;
      font-size: 15px;
      font-weight: 500;
      line-height: 33.75px;
      
      list-style: none;
      a {
        color: var(--text-secondary);
        text-decoration: none;
      }
    }
  }

  .copyright {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    gap: 25px;

    p {
      font-size: 15px;
      font-weight: 400;
      color: var(--text-secondary);
    }
  }

  .horizontal-line {
    width: 100%;
    height: 1px;
    background-color: var(--text-primary);
    opacity: 0.15;
  }
`;

export default FooterWrapper;