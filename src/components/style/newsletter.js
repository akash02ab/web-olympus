import styled from "styled-components";
import backgroundImage from "../../assets/images/newsletter-background.png";

const NewsletterSection = styled.section`
  margin: 0 auto;
  margin-top: 200px;
  width: 100%;
  height: 316px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9));
    z-index: -1;
  }
  
  .newsletter-wrapper {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 35px 135px;
    display: flex;
    align-items: center;
    gap: 68px;
  }

  .newsletter-object {
    flex: 1;
    width: 367px;
    height: 244px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .newsletter-content {
    flex: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-family: "Gamora";
      font-size: 40px;
      font-weight: 400;
      line-height: 54px;
      color: var(--text-primary);
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 20.16px;
      color: var(--text-primary);
    }
  }

  .newsletter-form {
    width: 100%;
    margin-top: 35px;
    display: flex;
    align-items: center;
    gap: 18px;
  }
`;

export default NewsletterSection;