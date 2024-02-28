import PortfolioItem1 from "../assets/images/portfolio1.svg";
import PortfolioItem2 from "../assets/images/portfolio2.svg";
import PortfolioItem3 from "../assets/images/portfolio3.svg";
import PortfolioItemWrapper from "./style/portfolioItem";

export default function PortfolioItem () {
  const portfolioItems = [
    {
      name: "Portfolio Item 1",
      image: PortfolioItem1,
      link: "#"
    },
    {
      name: "Portfolio Item 2",
      image: PortfolioItem2,
      link: "#"
    },
    {
      name: "Portfolio Item 3",
      image: PortfolioItem3,
      link: "#"
    }
  ];

  return (
    <PortfolioItemWrapper>
      {
        portfolioItems.map((portfolioItem) => (
          <a
            href={portfolioItem.link}
            target="_blank"
            rel="noreferrer"
            className="portfolio-item"
          >
            <img src={portfolioItem.image} alt={portfolioItem.name} />
          </a>
        ))
      }
    </PortfolioItemWrapper>
  );
}