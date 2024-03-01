import DriveLab from "assets/images/drivelab.svg";
import Quechua from "assets/images/quechua.svg";
import Unknown from "assets/images/unknown.svg";
import Nike from "assets/images/nike.svg";
import CocaCola from "assets/images/cocacola.svg";
import Puma from "assets/images/puma.svg";
import PartnersSection from "./style/partners";
import Icon from "components/Icon";

export default function Partners () {
  const partners = [
    {
      name: "DriveLab",
      logo: DriveLab,
      link: "https://www.drivelab.io/",
    },
    {
      name: "Quechua",
      logo: Quechua,
      link: "https://www.quechua.com/",
    },
    {
      name: "Unknown",
      logo: Unknown,
      link: "#",
    },
    {
      name: "Nike",
      logo: Nike,
      link: "https://www.nike.com/",
    },
    {
      name: "CocaCola",
      logo: CocaCola,
      link: "https://www.coca-colacompany.com/nike",
    },
    {
      name: "Puma",
      logo: Puma,
      link: "https://www.puma.com/",
    }
  ];
  return (
    <PartnersSection>
      {
        partners.map((partner) => (
          <a
            href={partner.link}
            target="_blank"
            rel="noreferrer"
            className="partner"
            key={partner.name}
          >
            <img src={partner.logo} alt={partner.name} />
          </a>
        ))
      }
      <Icon name="pebbles" />
    </PartnersSection>
  )
}