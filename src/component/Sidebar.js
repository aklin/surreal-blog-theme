import React from "react";
import Col from "react-bootstrap/Col";
import { Form, FormControl } from "react-bootstrap";

export const Sidebar = () => (
  <Col className="sidebar mh-100" md={3} sm={1}>
    <div className="search">
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 w-100 navSearch"
        />
      </Form>
    </div>
    <div className="title">
      <h3>Hello, my name is</h3>
      <h1>Tony Klinakis</h1>
      <h3>and this is my</h3>
      <h2>blog.</h2>
    </div>
  </Col>
);
