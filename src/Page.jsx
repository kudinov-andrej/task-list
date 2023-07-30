import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import Logo from "./Logo.jsx";
import AppTitle from "./AppTitle.jsx";
import "./Page.css";
import TaskList from "./TaskList.jsx";
import Footer from "./Footer.jsx";
import TaskForm from "./TaskForm.jsx";
import NonTask from "./NonTask.jsx";
import ThemeContext from './context/TeameContext.js';


function Page() {
  const storedPosts = JSON.parse(localStorage.getItem("posts"));
  const [posts, setPosts] = useState(storedPosts);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const editPost = (editedPost) => {
    setPosts(
      posts.map((p) => (p.id === editedPost.id ? { ...editedPost } : p))
    );
  };

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) {
      setPosts(storedPosts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
  }, [posts]);

  const { theme } = useContext(ThemeContext)

  // сохранение в локальное хранилище выполненных задач
  const storedFinishPosts = JSON.parse(localStorage.getItem("finishPosts"));
  const [finishPosts, setFinishPosts] = useState(storedFinishPosts);

  useEffect(() => {
    localStorage.setItem("finishPosts", JSON.stringify(finishPosts));
  }, [finishPosts]);

  useEffect(() => {
    const storedFinishPosts = JSON.parse(localStorage.getItem("finishPosts"));
    if (storedFinishPosts.length > 0) {
      setFinishPosts(storedFinishPosts)
    }
  }, []);

  const createFinishPost = (newPost) => {
    setFinishPosts([newPost, ...finishPosts])
  };

  const removeFinishPost = (post) => {
    setFinishPosts(prevFinishPosts => prevFinishPosts.filter(p => p.id !== post.id));
  };


  return (
    <div className="Page"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      <Logo />
      <AppTitle title={"Планер"} />
      <TaskForm
        create={createPost}
      />
      {posts.length !== 0
        ?
        <TaskList posts={posts}
          remove={removePost}
          change={editPost}
          finishPosts={finishPosts}
          setFinishPosts={setFinishPosts}
          createFinishPost={createFinishPost}
          removeFinishPost={removeFinishPost}
        />
        : <NonTask />
      }
      <Footer />
    </div>

  );
}

export default Page;