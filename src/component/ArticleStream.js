import React from 'react';
import Container from 'react-bootstrap/Container';
import { Article } from './Article';

/**
 * Filter articles by given arguments.
 * @param filter
 * @returns {*}
 * @constructor
 */
export const ArticleStream = ({ filter = {} }) => (
  <Container as='article-stream' fluid>
    <Article abstract />
    <Article abstract />
    <Article abstract />
    <Article abstract />
    <Article abstract />
    <Article abstract />
    <Article abstract />
  </Container>
);
