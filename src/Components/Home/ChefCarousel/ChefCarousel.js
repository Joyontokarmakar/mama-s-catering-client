import React from "react";
import "./ChefCarousel.css";
import {Col, Container } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import img1 from "../../../images/assets-Image/cheif-1.png";
import img2 from "../../../images/assets-Image/cheif-2.png";
import img3 from "../../../images/assets-Image/cheif-3.png";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};
const items = [
  <div className="item">
    <div className="row">
      <Col md={4}>
        <img className="chefcarouselDetails__img img-fluid" alt="" src={img1} />
      </Col>
      <Col md={8}>
        <div className="chef_detail">
          <h4>Rustie Lee</h4>
          <h6>The Chef</h6>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quas nam dolore alias natus unde?</p>
        </div>
      </Col>
    </div>
  </div>,
  <div className="item">
    <div className="row">
      <Col md={4}>
        <img className="chefcarouselDetails__img img-fluid" alt="" src={img2} />
      </Col>
      <Col md={8}>
      <div className="chef_detail">
          <h4>Karen MackNeil</h4>
          <h6>The Chef</h6>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quas nam dolore alias natus unde?</p>
        </div>
      </Col>
    </div>
  </div>,
  <div className="item">
    <div className="row">
      <Col md={4}>
        <img className="chefcarouselDetails__img img-fluid" alt="" src={img3} />
      </Col>
      <Col md={8}>
        <div className="chef_detail">
          <h4>Mike Roger</h4>
          <h6>The Chef</h6>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quas nam dolore alias natus unde?</p>
        </div>
      </Col>
    </div>
  </div>
];

const ChefCarousel = () => {
  return (
    <section className="cheifcarouselDetails">
      <Container>
        <AliceCarousel
          autoPlay
          disableButtonsControls
          infinite
          items={items}
          responsive={responsive}
        />
      </Container>
    </section>
  );
};

export default ChefCarousel;
