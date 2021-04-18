import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import { userInformationData } from "../../../App";
import './Services.css';

const Services = ({ newService, handleService, handleOrderPage }) => {
  const [userData, setUserData] = useContext(userInformationData);

  return (
    <>
      {userData.isSignIn && (
        <Col onClick={() => {
          handleService(newService); 
          handleOrderPage();
          }} md={4} className="mb-4"
        >
          {/* <Card className="d-flex align-items-center service__card">
            <div className="service__img">
              <Card.Img variant="top" src={`data:image/png;base64,${newService.image.img}`}/>
            </div>
            <Card.Body>
              <Card.Title className="card_name">{newService.service}</Card.Title>
              <Card.Text className="text-secondary card_details">
                {newService.description}
              </Card.Text>
            </Card.Body>
          </Card> */}
          <div class="wrapper">
            <div class="crd">
              <img src={`data:image/png;base64,${newService.image.img}`}/>
              <div class="info">
                <h1>{newService.service}</h1>
                <p>{newService.description}</p>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </Col>
      )}
    </>
  );
};

export default Services;
