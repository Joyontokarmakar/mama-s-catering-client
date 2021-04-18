import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import "./ServiceList.css";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";
import { userInformationData } from "../../../App";
import CircularProgress from "@material-ui/core/CircularProgress";

const ServiceList = () => {
  const [courseList, setCourseList] = useState([]);
  const [userData, setUserData] = useContext(userInformationData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const courseDataList = async () => {
      try {
        const res = await AxiosConfig.get("/course?email=" + userData.email);
        setCourseList(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    courseDataList();
  }, [userData.email]);

  return (
    <section className="serviceList">
      <Container>
        <Row className="justify-content-center ">
          {courseList.length === 0 && <CircularProgress color="secondary" />}
        </Row>
        <Row>
          {courseList.map((client, id) => (
            
            <Col key={id} md={6}>
              <Card className="mt-4 mb-4 serviceList__card">
                <Row className="no-gutters">
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Img
                      className="serviceList__img"
                      variant="top"
                      src={`data:image/png;base64,${client.image.img}`}
                    />
                    <Button variant="outline-danger">Pending</Button>
                  </div>
                  <Card.Body>
                    <Card.Title> {client.service} </Card.Title>
                    <Card.Text style={{textAlign: "justify"}} className="text-secondary">
                      {" "}
                      {client.description}
                    </Card.Text>
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

export default ServiceList;
