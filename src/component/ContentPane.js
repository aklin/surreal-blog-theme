import React from 'react';
import Col from 'react-bootstrap/Col';
import { ArticleStream } from './ArticleStream';

export const ContentPane = () => (
  <Col as='section' className='content'>
    <ArticleStream />
  </Col>
);
