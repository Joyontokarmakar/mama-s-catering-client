import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ride1 from "../../../images/assets-Image/ride-1.png";
import ride2 from "../../../images/assets-Image/ride-2.png";
import ride3 from "../../../images/assets-Image/ride-3.png";
import ride4 from "../../../images/assets-Image/ride-4.png";
import ride5 from "../../../images/assets-Image/ride-5.png";
import "./Client.css";

const Client = () => {
  return (
    <section className="client">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={2} className="text-center client_img mb-3">
            <img src={ride1} alt="Pathao" />
          </Col>
          <Col md={2} className="text-center client_img mb-3">
            <img src={ride4} alt="Hungrynaki" />
          </Col>
          <Col md={2} className="text-center client_img mb-3">
            <img src={ride2} alt="Uber" />
          </Col>
          <Col md={2} className="text-center client_img mb-3">
            <img src={ride5} alt="Foodpanda" />
          </Col>
          <Col md={2} className="text-center client_img mb-3">
            <img src={ride3} alt="Shohoz" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Client;
