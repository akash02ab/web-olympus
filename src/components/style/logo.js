import styled from "styled-components";

const LogoStyle = styled.p`
    color: var(--text-primary);
    font-size: ${props => props.size}px;
    font-weight: 600;
    letter-spacing: 0.1ch;
    line-height: 41px;

    span:first-child {
      margin-right: 10px;
    }
`;

export default LogoStyle;