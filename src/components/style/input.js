import styled from "styled-components";

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-width: 360px;
  max-width: 550px;

  label {
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.04ch;
    color: var(--text-primary);
  }

  input {
    width: 100%;
    height: 54px;
    padding: 0 16px;
    border: 1px solid var(--text-primary);
    background-color: transparent;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.04ch;
    color: var(--text-primary);
    transition: all 200ms ease-in;

    &:focus {
      border: 1px solid var(--brand-primary);
      outline: none;
    }

    &:hover {
      border: 1px solid var(--brand-primary);
    }
  }
`;

export default InputFieldWrapper;