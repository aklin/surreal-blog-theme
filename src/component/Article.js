import React from 'react';
import Container from 'react-bootstrap/Container';

/**
 * Extract abstract
 * @param text
 * @returns {*}
 */
const extractAbstract = text => text;

export const Article = ({
  title = 'Example Title',
  subtitle = 'Example Subtitle',
  body = 'Lorem Ipsum...',
  author = 'Example Author',
  abstract = false,
  abstractText = abstract && extractAbstract(body),
  date = '1970/1/1',
}) => (
  <Container as='article' fluid>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>
      {author} <b>/</b> {date}
    </p>
    <hr />
    {abstract && abstractText}
    {!abstract && body}
  </Container>
);
