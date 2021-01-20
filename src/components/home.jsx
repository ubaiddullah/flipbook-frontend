import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-banner" style={{ background: "#000" }}>
      <Container>
        <Row className="mt-5 banner-row-1">
          <Col lg={5}>
            <h1 className="banner-heading">Elegance In FlipBook Design</h1>
            <div className="mr-auto">
              <hr className="d-inline-block mr-auto" />
            </div>
            <p className="banner-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              architecto suscipit temporibus? Quae, unde accusamus numquam
              repellendus quasi
            </p>
            <Link to="/flipbooks">
              <button className="btn" style={{ backgroundColor: "#684ede" }}>
                View Books
              </button>
            </Link>
          </Col>
          <Col lg={7}>
            <img
              src="/img/macbook-preview-e1597596378306.png"
              className="img-fluid mt-5"
              alt="book"
            />
          </Col>
        </Row>
      </Container>
      <Row className="mt-3 banner-row-2">
        <Col lg={6}></Col>
      </Row>
    </div>
  );
};

export default Home;
