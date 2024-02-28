import styled from "styled-components";

const LinkStyle = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.2ch;
  width: fit-content;
  padding: 8px 30px;
  color: var(--text-primary);
  border: 1px solid var(--text-primary);
  transition: all 150ms ease-in;
  position: relative;
  overflow: hidden;

  svg {
    transition: transform 200ms ease-in;
  }

  .button-decoration {
    position: absolute;
    left: 0;
    opacity: 0;
  }
  
  .button-decoration:first-child {
    top: 0;
  }
  
  .button-decoration:last-child {
    bottom: 0;
  }

  &:hover {
    background-color: var(--brand-primary);
    border: 1px solid var(--brand-primary);

    svg {
      transform: rotate(-40deg);
      transition: transform 200ms ease-in;
    }

    .button-decoration { 
      opacity: 1;
    }
  }
`;

export default LinkStyle;