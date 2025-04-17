import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import headerImg from "../assets/img/header-img.svg";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Freelancer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              {
                  return <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Mohammad Hamza`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Freelancer"]'><span className="wrap">{text}</span></span></h1>
                    <p>I'm a passionate front-end developer focused on creating responsive, fast, and accessible websites. I care deeply about clean design, smooth user experience, and modern web practices. My goal is to build scalable solutions that perform well and look great across all devices.</p>
                     <span className="navbar-text">
                                  <div className="social-icon">
                                    <a href="https://www.linkedin.com/in/mohammad-hamza-859a662a9/" target="_blank"><img src={navIcon1} alt="" /></a>
                                    <a href="https://github.com/chatoor72" target="_blank"><img src={navIcon2} alt="" /></a>
                                    <a href="https://www.fiverr.com/users/mhamza019_dev" target="_blank"><img src={navIcon3} alt="" /></a>
                                    <a href="https://www.upwork.com/freelancers/~015a548acfde8f2ed8" target="_blank"><img src={navIcon4} alt="" /></a>
                                    <a href="https://www.freelancer.com/u/mhamza019" target="_blank"><img src={navIcon5} alt="" /></a>
                                  </div>
                                </span>
                    <a href="/Mohammad_Hamza-CV.pdf" download="Mohammad_Hamza-CV" style={{ textDecoration: 'none' }}>
                      <button>Download CV <ArrowDownCircle size={25} /></button>
                    </a>
                  </div>;
                }}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="banner-main-img"src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
