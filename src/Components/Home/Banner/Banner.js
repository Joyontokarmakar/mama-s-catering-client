import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import chef from "../../../images/banner/mama.png";
import "./Banner.css";

const Banner = () => {
  return (
    <main className=" d-flex align-items-center main_banner">
      <Container>
        <Row>
          <Col md={6}>
            <img src={chef} alt="" className="img-fluid" />
          </Col>
          <Col md={6} className="banner_right mt-5 mb-5">
            <div className="right_content">
              <h1>Book our service now!</h1>
              <p className="text-black">
                Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque et magnis dis parturient montes asceturridiculus mus. Nulla dui. Fusce feugiat
              </p>
              <Button className="btn btn-dark pl-5 pr-5 pt-2 pb-2 banner__btn">
                View Our Menu-Book
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Banner;
