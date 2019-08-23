import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Sidebar } from '../component/Sidebar';
import { ContentPane } from '../component/ContentPane';

function Theme() {
  return (
    <>
      <Container fluid className='root'>
        <Container fluid className='theme'>
          <Row className='rootRow'>
            <Sidebar />
            <ContentPane />
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Theme;
