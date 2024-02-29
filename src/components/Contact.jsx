import Icon from "./Icon";
import ContactSection from "./style/contact";
import SectionName from "./style/sectionName";
import SectionTitle from "./style/sectionTitle";
import linkDecoration from "../assets/images/link-decoration.svg";

export default function Contact () {
  return (
    <ContactSection id="contact">
      <SectionName>TELL US ABOUT YOUR PROJECT</SectionName>
      <SectionTitle>Let’s Make Something Great Together!</SectionTitle>
      <div className="link-wrapper">
        <a href="/">Contact Us</a>
        <Icon name="arrow" />
        <img src={linkDecoration} alt="" className="link-decoration" />
      </div>
    </ContactSection>
  );
}