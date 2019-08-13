import React from "react";
import Container from "react-bootstrap/Container";

export const PostPreview = ({
  title = "Example Title",
  subtitle = "Example Subtitle",
  body = "Lorem Ipsum...",
  author = "Example Author",
  date = "1970/1/1"
}) => (
  <Container>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>
      {author} <b>/</b> {date}
    </p>
    <hr />
    {body}
  </Container>
);
