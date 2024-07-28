import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        {/* <MailchimpForm /> */}
          <Col size={18} sm={12} className="text-end text-sm-end pt-1">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/muhammad-muneeb-waqas-911087205/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/muneeb.waqas/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100009373671410"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
