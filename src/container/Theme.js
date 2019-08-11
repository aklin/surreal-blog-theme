import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SurrealNavbar } from "../component/SurrealNavbar";

function Theme() {
  return (
    <>
      <Container fluid className="root">
        <Container fluid className="theme">
          <SurrealNavbar />
          <Row className="rootRow">



              {/*col={3}*/}
            <Col className="sidebar mh-100"  sm={3} >.col-6 .col-sm-3</Col>
            <Col className="content" col={6} sm>2 of 2</Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Theme;
