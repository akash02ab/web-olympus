import Link from "components/Link";
import Logo from "components/Logo";
import { NavItem, NavLinks, NavStyle } from "./style/nav";

export default function Nav () {
  return (
    <NavStyle>
      <Logo />
      <NavLinks>
        <NavItem>SERVICES</NavItem>
        <NavItem>PORTFOLIO</NavItem>
        <NavItem>ABOUT US</NavItem>
      </NavLinks>
      <Link>CONTACT US</Link>
    </NavStyle>
  );
}