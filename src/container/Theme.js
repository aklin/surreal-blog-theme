import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Sidebar } from "../component/Sidebar";
import { ContentPane } from "../component/ContentPane";
import { PostPreview } from "../component/PostPreview";

function Theme() {
  return (
    <>
      <Container fluid className="root">
        <Container fluid className="theme">
          <Row className="rootRow">
            <Sidebar />
            <ContentPane>
              <PostPreview />
              <PostPreview />
              <PostPreview />
              <PostPreview />
            </ContentPane>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Theme;
