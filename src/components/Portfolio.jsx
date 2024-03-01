import Link from "components/Link";
import PortfolioSection from "./style/portfolio";
import SectionName from "./style/sectionName";
import SectionTitle from "./style/sectionTitle";

export default function Portfolio () {
  return (
    <PortfolioSection id="portfolio">
      <div>
        <SectionName>PORTFOLIO</SectionName>
        <SectionTitle>Our Work</SectionTitle>
      </div>
      <Link href="#">VIEW PORTFOLIO</Link>
    </PortfolioSection>
  );
}