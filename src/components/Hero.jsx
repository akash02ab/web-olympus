import Button from "./Button";
import Icon from "./Icon";
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
          <Icon name="down-arrow" />
        </ScrollWrapper>
      </SectionWrapper>
    </HeroSection>
  );
}