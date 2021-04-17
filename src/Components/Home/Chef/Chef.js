import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Accordionsection from '../Accordionsection/Accordion';
import ChefCarousel from '../ChefCarousel/ChefCarousel'

const Chef = () => {
    return (
        <div>
            <section className="service">
                <Container>
                    <Row className="justify-content-center">
                        <h1 className="text-center">
                            Our{" "}
                            <span className="carouselDetails__header">Chef</span>{" "}
                            and{" "}
                            <span className="carouselDetails__header">Packages</span>{" "}
                        </h1>
                    </Row>
                    <Row className="mt-3">
                        <div className="col-md-6">
                            <ChefCarousel/>
                        </div>
                        <div className="col-md-6">
                            <Accordionsection/>
                        </div>

                    </Row>
                </Container>
          </section>
        </div>
    );
};

export default Chef;