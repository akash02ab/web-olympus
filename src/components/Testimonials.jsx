import { useState } from "react";
import Icon from "./Icon";
import SectionName from "./style/sectionName";
import SectionTitle from "./style/sectionTitle";
import {
  NavigationWrapper,
  TestimonialItems,
  TestimonialsSection,
  UsersWrapper
} from "./style/testimonials";
import user1 from "../assets/images/user1.svg";
import user2 from "../assets/images/user2.svg";

export default function Testimonials () {
  const [currentItem, setCurrentItem] = useState(0);
  const testimonials = [
    {
      name: "Chester Fell",
      role: "CUSTOMER",
      image: user1,
      testimonial: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete."
    },
    {
      name: "Malina Williams",
      role: "CUSTOMER",
      image: user2,
      testimonial: "I cannot recommend Web Olympus enough! From start to finish, they exceeded our expectations with their professionalism, creativity, and technical expertise. "
    },
    {
      name: "Arthur Ferreira",
      role: "CUSTOMER",
      image: require("../assets/images/user3.jpg"),
      testimonial: "Working with Web Olympus was an absolute pleasure! Their team of designers and developers took our vague ideas and turned them into a stunning website that perfectly represents our brand."
    }
  ];

  const ITEMS_TO_SHOW = 2;
  const TOTAL_ITEMS = testimonials.length;
  const LAST_TEIM = TOTAL_ITEMS - ITEMS_TO_SHOW;
  const testimonalsToShow = testimonials.slice(currentItem, currentItem + ITEMS_TO_SHOW);

  const prevClickHandler = () => {
    if (currentItem > 0) {
      setCurrentItem(currentItem - 1);
    }
  }

  const nextClickHandler = () => {
    if (currentItem < LAST_TEIM) {
      setCurrentItem(currentItem + 1);
    }
  }

  return (
    <TestimonialsSection id="testimonials">
      <div className="row">
        <div>
          <SectionName>TESTIMONIALS</SectionName>
          <SectionTitle>Feedback From Our Clients</SectionTitle>
        </div>
        <NavigationWrapper>
          <button onClick={prevClickHandler} disabled={currentItem === 0}>
            <Icon name="left-arrow" />
          </button>
          <button onClick={nextClickHandler} disabled={currentItem === LAST_TEIM}>
            <Icon name="right-arrow" />
          </button>
        </NavigationWrapper>
      </div>
      <TestimonialItems>
        {
          testimonalsToShow.map((user, index) => (
            <div key={index} className="testimonial">
              <p>
                "{user.testimonial}"
                {(index === 0) && <Icon
                  name="semi-circle-revert"
                  className="semi-circle-revert"
                />}
              </p>
              <Icon
                name="testimonial-decoration"
                className="testimonial-decoration"
              />
              <UsersWrapper>
                <div className="user">
                  <img src={user.image} alt="avatar" className="avatar" />
                  <div className="user-info">
                    <h3>{user.name}</h3>
                    <span>{user.role}</span>
                  </div>
                </div>
                <Icon name="quote" />
              </UsersWrapper>
            </div>
          ))
        }
      </TestimonialItems>
    </TestimonialsSection>
  );
}