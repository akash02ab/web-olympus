import Icon from "./Icon";
import SectionName from "./style/sectionName";
import SectionTitle from "./style/sectionTitle";
import { ServiceSection, ServiceWrapper } from "./style/services";

export default function Services () {
  return (
    <ServiceSection id="services">
      <SectionName>WHAT WE DO</SectionName>
      <SectionTitle>Our Core Services</SectionTitle>
      <ServiceWrapper>
        <div className="row">
          <span>Web Design</span>
          <Icon name="arrow" />
        </div>
        <hr className="horizontal-line" />
        <div className="row">
          <span>Website Redesign</span>
          <Icon name="arrow" />
        </div>
        <hr className="horizontal-line" />
        <div className="row">
          <span>Development</span>
          <Icon name="arrow" />
        </div>
        <hr className="horizontal-line" />
        <div className="row">
          <span>SEO</span>
          <Icon name="arrow" />
        </div>
        <hr className="horizontal-line" />
      </ServiceWrapper>
    </ServiceSection>
  );
}