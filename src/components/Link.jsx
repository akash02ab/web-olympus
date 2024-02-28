import Icon from "./Icon";
import LinkStyle from "./style/link";
import buttonDecoration from "../assets/images/button-decoration.svg";

export default function Link ({ children }) {
  return (
    <LinkStyle href="#">
      <img src={buttonDecoration} alt="" className="button-decoration" />
      <span>{children}</span>
      <Icon name="arrow" style={{ width: '16px' }} />
      <img src={buttonDecoration} alt="" className="button-decoration" />
    </LinkStyle>
  );
}