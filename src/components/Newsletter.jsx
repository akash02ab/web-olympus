import { useState } from "react";
import Button from "./Button";
import NewsletterSection from "./style/newsletter";
import SVGObjet from "../assets/images/newsletter-object.svg";
import InputField from "./InputField";

export default function Newsletter () {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <NewsletterSection>
      <div className="newsletter-wrapper">
        <picture className="newsletter-object">
          <img src={SVGObjet} alt="half faced greek god" />
        </picture>
        <article className="newsletter-content">
          <h2>Subscribe to our Newsletter</h2>
          <p>Subscribe to our monthly product updates and valuable tips from our devs.</p>
          <form action="" className="newsletter-form">
            <InputField
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleSubmit}>SUBMIT</Button>
          </form>
        </article>
      </div>
    </NewsletterSection>
  );
}