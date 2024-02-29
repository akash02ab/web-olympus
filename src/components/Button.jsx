import ButtonStyle from "./style/button";
import buttonDecoration from "../assets/images/button-decoration.svg";

export default function Button ({ children, onClick }) {
  return (
    <ButtonStyle href="#" onClick={onClick}>
      <img src={buttonDecoration} alt="" className="button-decoration" />
      <span>{children}</span>
      <img src={buttonDecoration} alt="" className="button-decoration" />
    </ButtonStyle>
  );
}