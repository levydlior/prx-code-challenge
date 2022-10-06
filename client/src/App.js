import "./App.css";
import React, { useEffect, useState } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs")
      .then((r) => r.json())
      .then((parsedBlogsArray) => setBlogs(parsedBlogsArray));
  }, []);

  function fetchBlogs() {
    fetch("/blogs")
      .then((r) => r.json())
      .then((parsedBlogsArray) => setBlogs(parsedBlogsArray));
  }


  console.log(blogs)
  function handleReceived(newBlogs) {
    console.log(newBlogs);
    setBlogs(newBlogs)
  }

  return (
    <div className="App">
      <ActionCableConsumer
        channel={{ channel: "BlogsChannel" }}
        onReceived={handleReceived}
      />
    </div>
  );
}

export default App;
