import { Fragment } from "react";
import Icon from "./Icon";
import Link from "./Link";
import SectionName from "./style/sectionName";
import SectionTitle from "./style/sectionTitle";
import UpdateSection from "./style/updates";

export default function Updates () {
  const blogs = [
    {
      title: "How To Design A Logo? A Complete Guide",
      description: "A logo roadmap to gather ideas, pick colors, fonts, symbols. This article guides you from start to finish in creating your perfect logo.",
      domain: "UI/UX",
      image: require("../assets/images/blog1.jpg")
    },
    {
      title: "How to Create a Design System in Figma?",
      description: "A step-by-step guide to create a design system in Figma. This article aims to provide you with valuable tips and advice on how to effectively begin establishing your own Design System using figma components strategy.",
      domain: "UI/UX",
      image: require("../assets/images/blog2.jpg")
    },
    {
      title: "Pixel Perfection: Navigating the World of UI/UX Design",
      description: "India Art Fair is the biggest art exhibition where artists showcase in modern and contemporary art from all over the world.",
      domain: "UI/UX",
      image: require("../assets/images/blog3.jpg")
    }
  ];

  return (
    <UpdateSection>
      <div className="row-space-between">
        <div className="col">
          <SectionName>LATEST UPDATES</SectionName>
          <SectionTitle>Check Some of Our Latest Update Blog</SectionTitle>
        </div>
        <div className="col">
          <p>Explore our insightful blogs for expert perspectives, industry trends, and valuable tips to stay ahead in the ever-evolving world of web design, development, and SEO.</p>
          <Link href="#">VIEW ALL BLOGS</Link>
        </div>
      </div>
      <div className="blogs">
        {
          blogs.map((blog, index) => (
            <Fragment key={index}>
              <div className="blog">
                <div className="blog-img">
                  <img src={blog.image} alt="blog-post" />
                </div>
                <div className="blog-info">
                  <b>{blog.domain}</b>
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </div>
                <Icon name="arrow" />
              </div>
              {(index !== blogs.length - 1) && <hr className="horizontal-line" />}
            </Fragment>
          ))
        }
      </div>
    </UpdateSection>
  );
}