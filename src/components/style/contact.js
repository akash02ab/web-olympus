import styled from "styled-components";

const ContactSection = styled.section`
  max-width: 681px;
  text-align: center;
  margin: 0 auto;
  margin-top: 200px;

  .link-wrapper {
    width: fit-content;
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 22px;
    position: relative;
    overflow: hidden;

    a {
      color: var(--brand-primary);
      text-decoration: none;
      font-family: "Gamora";
      font-size: 60px;
      font-weight: 400;
      line-height: 81px;
      letter-spacing: 0.1ch;
      transition: all 300ms ease-out;
    }
    
    &>svg {
      color: var(--brand-primary);
      transition: all 300ms ease-out;
    }
    
    .link-decoration {
      position: absolute;
      bottom: 0;
      transform: translateX(-100%);
      transition: transform 300ms ease-out;
    }
   
    &:hover svg {
      transform: rotate(-40deg);
      transition: all 300ms ease-out;
      cursor: pointer;
    }

    &:hover .link-decoration {
      transform: translateX(0);
      transition: transform 300ms ease-out;
    }
  }
`;

export default ContactSection;