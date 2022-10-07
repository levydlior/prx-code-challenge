import React, { useState } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import styled from "styled-components";
import BlogCard from "./BlogCard";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  // text-align: center;
  padding: 5rem;
`;

function MainContent() {
  const [blogs, setBlogs] = useState([[]]);

  const mapsArray = blogs[0].map((blog) => <BlogCard blog={blog} />);

  function handleReceived(newBlogs) {
    setBlogs(newBlogs);
  }

  return (
    <MainDiv>
      <ActionCableConsumer
        channel={{ channel: "BlogsChannel" }}
        onReceived={handleReceived}
      />
      {mapsArray}
    </MainDiv>
  );
}

export default MainContent;
