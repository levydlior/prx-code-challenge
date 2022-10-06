import React, { useEffect, useState } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";

function MainContent() {
  const [blogs, setBlogs] = useState([[]]);

  useEffect(() => {
    fetch("/blogs")
      .then((r) => r.json())
      .then((parsedBlogsArray) => setBlogs(parsedBlogsArray));
  }, []);

  console.log(blogs);

  const mapsArray = blogs[0].map((blog) => {
    function wordCountList() {
      return Object.entries(blog.word_count).map(([key, value], i) => {
        return (
          <li key={key}>
            {key}: {value}
          </li>
        );
      });
    }

    return (
      <div key={blog.title}>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <h3>Word Count:</h3>
        <ul>{wordCountList()}</ul>
      </div>
    );
  });

  function handleReceived(newBlogs) {
    console.log(newBlogs);
    setBlogs(newBlogs);
  }

  return (
    <div >
      <ActionCableConsumer
        channel={{ channel: "BlogsChannel" }}
        onReceived={handleReceived}
      />
      {mapsArray}
    </div>
  );
}

export default MainContent;
