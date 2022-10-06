import React from "react";
import styled from "styled-components";

const BlogCardDiv = styled.div`
border: solid 1px;
margin: 0.5rem;
padding: 0.5rem;
`

const Ul = styled.ul`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
list-style-type: none;
padding: 1rem;
`

const Li = styled.li`
padding: 0.2rem;
margin: 0.2rem;
`

const P = styled.p`
padding: 1rem;
margin: 0.2rem;
`

function BlogCard({blog}) {

    function wordCountList() {
        return Object.entries(blog.word_count).map(([key, value], i) => {
          return (
            <Li key={key}>
              {key}:{value}
            </Li>
          );
        });
      }

  return (
    <BlogCardDiv key={blog.title}>
      <h2>{blog.title}</h2>
      <P>{blog.content}</P>
      <h3>Word Count:</h3>
      <Ul>{wordCountList()}</Ul>
    </BlogCardDiv>
  );
}

export default BlogCard;
