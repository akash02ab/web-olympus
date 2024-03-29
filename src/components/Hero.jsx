import Button from "components/Button";
import Icon from "components/Icon";
import {
  ButtonWrapper,
  HeroSection,
  ScrollWrapper,
  SectionWrapper,
  Subtitle,
  Title
} from "./style/hero";

export default function Hero () {
  const buttonHandler = () => { };

  const handleScroll = () => {
    // scroll to #about section
    window.scrollTo({
      top: document.getElementById("about").offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <HeroSection>
      <SectionWrapper>
        <Title>Digital Agency Solution</Title>
        <Subtitle>Elevate your online presence with cutting-edge design, seamless development, and strategic SEO. Unleash the full potential of your digital journey</Subtitle>
        <ButtonWrapper>
          <Button onClick={buttonHandler}>GET A QUOTE</Button>
        </ButtonWrapper>
        <ScrollWrapper>
          <p>SCROLL</p>
          <Icon name="down-arrow" onClick={handleScroll} />
        </ScrollWrapper>
      </SectionWrapper>
    </HeroSection>
  );
}