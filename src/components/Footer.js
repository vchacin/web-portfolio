import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vchacin/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://dribbble.com/uxvictoria"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/vchacin"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
