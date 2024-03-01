import Icon from "components/Icon";
import SectionName from "./style/sectionName";
import SectionTitle from "./style/sectionTitle";
import { ServiceSection, ServiceWrapper } from "./style/services";

export default function Services () {
  return (
    <ServiceSection id="services">
      <SectionName>WHAT WE DO</SectionName>
      <SectionTitle>Our Core Services</SectionTitle>
      <ServiceWrapper>
        <div className="col">
          <a href="/" className="row">
            <span>Web Design</span>
            <Icon name="arrow" />
          </a>
          <hr className="horizontal-line" />
          <a href="/" className="row">
            <span>Website Redesign</span>
            <Icon name="arrow" />
          </a>
          <hr className="horizontal-line" />
          <a href="/" className="row">
            <span>Development</span>
            <Icon name="arrow" />
          </a>
          <hr className="horizontal-line" />
          <a href="/" className="row">
            <span>SEO</span>
            <Icon name="arrow" />
          </a>
          <Icon name="semi-circle-revert" className="service-decoration" />
          <hr className="horizontal-line" />
        </div>
      </ServiceWrapper>
    </ServiceSection>
  );
}