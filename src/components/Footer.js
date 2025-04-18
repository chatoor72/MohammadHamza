import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer" id="connect">
      <Container>
        <Row className="align-items-center text-center footer-contact">
          <Col size={12}>
            <h2>Let's Chat</h2>
            <p className="footer-text">
              I'm always open to discussing product design work or partnerships. <br />
              Whether you're a startup looking for a partner or an established company <br />
              looking for a new product, I can help you get your project off the ground. <br />
              Have something you need built? Want to talk through an idea? Get in touch. I'm friendly!
            </p>
            <div className="my-8 text-center email">
              <a className="contact-mail" href="mailto:chatoor72@gmail.com">chatoor72@gmail.com</a>
            </div>
          </Col>
          <Col size={12} className="text-center">
            <div className="social-icon footer-social-icon">
              <a href="https://www.linkedin.com/in/mohammad-hamza-859a662a9/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/chatoor72" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.fiverr.com/users/mhamza019_dev" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Fiverr" />
              </a>
              <a href="https://www.upwork.com/freelancers/~015a548acfde8f2ed8" target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="Upwork" />
              </a>
              <a href="https://www.freelancer.com/u/mhamza019" target="_blank" rel="noopener noreferrer">
                <img src={navIcon5} alt="Freelancer" />
              </a>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4 copyright-container">
              <p className="footer-copyright">
                &copy; {currentYear}. <a href="#">Mohammad Hamza</a>
              </p>
              <p className="footer-copyright">
                Design & Dev ✦ <a href="#">Mohammad Hamza</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
