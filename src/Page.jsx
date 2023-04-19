import React, { useState} from "react";
import { useContext } from 'react';
import Logo from "./Logo.jsx";
import AppTitle from "./AppTitle.jsx";
import "./Page.css";
import TaskList from "./TaskList.jsx";
import Footer from "./Footer.jsx";
import TaskForm from "./TaskForm.jsx";
import NonTask from "./NonTask.jsx";
import ThemeContext  from './context/TeameContext.js';


function Page() {
  const [posts, setPosts] = useState([
    { id: 1, body: "Написать задачу!" },
    { id: 2, body: "Провести день с пользой!" },
    { id: 3, body: "Помочь людям!" },
    { id: 5, body: "Нарисовать картину!" },

  ])

 

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

 
const {theme} = useContext(ThemeContext)

  return (
      <div className="Page"
       style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
      >
        <Logo />
        <AppTitle title={"Планер"} />
        <TaskForm create={createPost} />
        {posts.length !== 0
          ?
          <TaskList posts={posts} remove={removePost} change={editPost} />
          : <NonTask />
        }
        <Footer />
      </div>
   
  );
}

export default Page;