import styled from "styled-components";

const NavStyle = styled.nav`
  width: 100%;
  height: 120px;
  padding: 41px 135px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
`;

const NavLinks = styled.ul`
  list-style: none;
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.li`
  font-size: 14px;
  font-weight: 600;
  line-height: 19.4px;
  letter-spacing: 0.1ch;
  text-transform: uppercase;
  color: var(--text-primary);
  display: inline-block;
  position: relative;
  transition: all 200ms ease-in;

  &:hover {
    cursor: pointer;
  }

  &:after {
    display: inline-block;
    position: absolute;
    content: '';
    width: 0;
    height: 1px;
    left: -4px;
    bottom: -2px;
    background-color: var(--text-primary);
    opacity: 0;
    transition: all 300ms ease-in;
  }

  &:hover:after {
    width: 50%;
    opacity: 1;
    transition: all 300ms ease-in;
  }

  &:before {
    display: inline-block;
    position: absolute;
    content: '';
    width: 108%;
    height: 0.5px;
    left: -100%;
    bottom: -2px;
    background-color: var(--text-primary);
    opacity: 0;
    transition: all 200ms ease-in;
  }

  &:hover:before {
    height: 1px;
    left: -4px;
    opacity: 1;
    transition: all 200ms ease-in;
  }
`;

export {
  NavStyle,
  NavLinks,
  NavItem
};