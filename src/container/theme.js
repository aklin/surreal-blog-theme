import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SurrealNavbar } from "../component/SurrealNavbar";

function Theme() {
  return (
    <>
      <Container fluid className="root">
        <Container className="theme">
          <SurrealNavbar />
          <Row className="rootRow">
            <Col className="sidebar">1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Theme;
