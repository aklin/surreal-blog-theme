import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const ContentPane = ({ ...props }) => (
  <Col className="content">
    <Container fluid>{props.children}</Container>
  </Col>
);
