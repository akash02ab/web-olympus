import Link from "./Link";
import { AboutLeft, AboutOverlap, AboutRight, AboutSection, Description, StatsWrapper } from "./style/about";
import SectionName from "./style/sectionName";
import SectionTitle from "./style/sectionTitle";
import aboutBackground from "../assets/images/about-background.svg";

export default function About () {
  return (
    <AboutSection>
      <AboutLeft>
        <SectionName>ABOUT US</SectionName>
        <SectionTitle>We Create Digital World Class Business Agency Marketplace</SectionTitle>
        <img src={aboutBackground} alt="about-background" />
      </AboutLeft>
      <AboutRight>
        <Description>
          <p>Welcome to Web Olympus, where innovation meets functionality, and your digital presence transforms into a powerful business asset. With a passion for creating stunning, user-centric websites and a commitment to elevating your online visibility, we are your dedicated partner in web redesign, web design and development, and SEO solutions.</p>
          <Link href="#">LEARN MORE</Link>
        </Description>
      </AboutRight>
      <AboutOverlap>
        <StatsWrapper>
          <p>300+</p>
          <p>Working People</p>
        </StatsWrapper>
        <StatsWrapper>
          <p>20+</p>
          <p>Worldwide Offices</p>
        </StatsWrapper>
      </AboutOverlap>
    </AboutSection>
  )
}