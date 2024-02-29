import PortfolioItemWrapper from "./style/portfolioItem";

export default function PortfolioItem () {
  const portfolioItems = [
    {
      name: "Portfolio Item 1",
      image: require("../assets/images/portfolio1.jpg"),
      link: "#"
    },
    {
      name: "Portfolio Item 2",
      image: require("../assets/images/portfolio2.jpg"),
      link: "#"
    },
    {
      name: "Portfolio Item 3",
      image: require("../assets/images/portfolio3.jpg"),
      link: "#"
    }
  ];

  return (
    <PortfolioItemWrapper>
      {
        portfolioItems.map((portfolioItem, index) => (
          <a
            key={index}
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