import styled from "styled-components";

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.2ch;
  color: var(--text-primary);
  background-color: transparent;
  width: fit-content;
  padding: 16px 24px;
  border: 1px solid var(--text-primary);
  transition: all 150ms ease-in;
  position: relative;
  overflow: hidden;

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
    cursor: pointer;

    .button-decoration { 
      opacity: 1;
    }
  }
`;

export default ButtonStyle;