import React from 'react';
import { Container, Col } from 'react-bootstrap';
import aboutImage from '../assets/about-right.png';
import teamImage from '../assets/about-left.png';

const AboutSection = () => {
  return (
    <>
      <Container fluid className="d-flex flex-wrap m-0 p-0" id='about'>
        <Col md={6} className="text-white p-lg-5 p-4 about-bg">
          <h1 className="fw-bold mb-4">ABOUT US</h1>
          <p>
            Ritambara is a dynamic logistics and transportation company based in Chennai,
            dedicated to providing comprehensive, efficient, and reliable logistics services.
          </p>
          <p>
            Our team of experienced professionals ensures seamless operations across various
            aspects of cargo handling and transportation.
          </p>
        </Col>
        <Col md={6} className="p-0">
          <img src={aboutImage} alt="Cargo Ship" className="w-100 h-100 object-fit-cover" />
        </Col>
      </Container>

      <Container fluid className="d-flex flex-wrap m-0 p-0">
        <Col md={6} className="p-0">
          <img src={teamImage} alt="Team Discussion" className="w-100 h-100 object-fit-cover" />
        </Col>
        <Col md={6} className="p-lg-5 p-4 bg-light">
          <h1 className="fw-bold mb-4">WHY CHOOSE US</h1>
          <p>
            At Ritambara, we are committed to delivering high-quality logistics solutions that support
            the growth and success of our clients. Our focus on customer satisfaction and operational
            excellence sets us apart in the industry.
          </p>
          <ul>
            <li>Customer-centric services</li>
            <li>Young, dynamic team</li>
            <li>Cutting-edge logistics solutions</li>
            <li>Commitment to reliability and efficiency</li>
          </ul>
        </Col>
      </Container>
    </>
  );
};

export default AboutSection;
