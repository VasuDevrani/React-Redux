import React, { useState } from "react";
import "./Posts.css";

// importing hooks
import { useSelector, useDispatch } from "react-redux";
// import id generator
import { nanoid } from "@reduxjs/toolkit";

// import reducer
import { postAdded } from "./postSlice";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  //   logic for input
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    if (title !== "" && content !== "") {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    } else {
      alert("enter title and content both");
    }
  };

  return (
    <>
      <div className="posts">
        <h2>Posts</h2>
        {posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
          </article>
        ))}
      </div>
      <div className="addPost">
        {/* id: "2", title: "Learning Redux Toolkit", content */}
        <input
          type="text"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={addPost}>Add Post</button>
      </div>
    </>
  );
}
