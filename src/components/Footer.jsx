import Icon from "components/Icon";
import Logo from "components/Logo";
import FooterWrapper from "./style/footer";

export default function Footer () {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <div className="footer-grid">
        <div className="logo">
          <Logo size={33} />
          <div className="socials">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <Icon name="X" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <Icon name="instagram" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <Icon name="linkedin" />
            </a>
            <a href="https://behance.net/" target="_blank" rel="noreferrer">
              <Icon name="behance" />
            </a>
            <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
              <Icon name="dribble" />
            </a>
          </div>
        </div>
        <div className="quick-links footer-item">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Pricing Table</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Meet Out Team</a></li>
            <li><a href="/">Latest News</a></li>
          </ul>
        </div>
        <div className="company footer-item">
          <h3>Company</h3>
          <ul>
            <li><a href="/">Case Studies</a></li>
            <li><a href="/">FAQ's</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Customer Support</a></li>
          </ul>
        </div>
        <div className="legal footer-item">
          <h3>Legal</h3>
          <ul>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Use</a></li>
          </ul>
        </div>
        <div className="copyright">
          <div className="horizontal-line"></div>
          <p>© {year} Web Olympus. All Rights Reserved</p>
        </div>
      </div>
    </FooterWrapper>
  );
}