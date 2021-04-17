import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./ClientFeedBack.css";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

const ClientFeedBack = () => {
  const [clientFeedBack, setClientFeedBack] = useState([]);

  useEffect(() => {
    const handleFeedBack = async () => {
      try {
        const res = await AxiosConfig.get("/allReview");
        setClientFeedBack(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleFeedBack();
  }, []);

  return (
    <section className="clientFeedBack">
      <Container>
        <Row className="justify-content-center">
          <h1 style={{ textAlign: 'center'}}>
            Clients <span style={{ color: "#7ab259" }}>Feedback</span>{" "}
          </h1>
        </Row>
        <Row className="justify-content-center mt-4">
          {clientFeedBack.map(({ _id, name, img, company, message }) => (
            <Col key={_id} md={4}>
              <Card className="mt-4 mb-4 clientFeedBack__card">
                <Row className="no-gutters">
                  <img src={img} className="client_avatar"/>
                  <Col sm={7}>
                    <Card.Body>
                      <Card.Title className="common_style client_name">
                        {" "}{name}{" "}
                      </Card.Title>
                      <Card.Title className="common_style client_org">
                        {" "}{company}{" "}
                      </Card.Title>
                    </Card.Body>
                  </Col>
                  <Card.Body>
                    <Card.Text className="text-secondary">{message}</Card.Text>
                  </Card.Body>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ClientFeedBack;
