import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const TitleOne = styled.h2`
padding 1rem;
`;
const TitleTwo = styled.h3`
padding 1rem;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  flex-flow: flow;
  list-style-type: none;
  padding: 1rem;
`;

const Li = styled.li`
  padding: 0.2rem;
  margin: 0.2rem;
`;

const P = styled.p`
  padding: 1rem;
  margin: 0.2rem;
`;

function BlogCard({ blog }) {
  function wordCountList() {
    return Object.entries(blog.word_count).map(([key, value], i) => {
      return (
        <Li key={key}>
          {key}: {value}
        </Li>
      );
    });
  }

  return (
    <Card sx={{ minWidth: 275, margin: "1rem" }}>
      <CardContent>
        <TitleOne>{blog.title}</TitleOne>
        <P>{blog.content}</P>
        <TitleTwo>Word Count:</TitleTwo>
        <Ul>{wordCountList()}</Ul>
      </CardContent>
    </Card>
  );
}

export default BlogCard;
