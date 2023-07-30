import { useContext } from 'react';
import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';
import ThemeContext from './context/TeameContext';

function TaskList({ posts, remove, change, finishPosts, setFinishPosts, removeFinishPost, createFinishPost }) {

  const { theme } = useContext(ThemeContext)

  return (
    <div className='task__list'
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      {posts.map((post, index) =>
        <TaskItem
          number={index + 1}
          post={post}
          posts={posts}
          key={post.id}
          remove={remove}
          change={change}
          finishPosts={finishPosts}
          setFinishPosts={setFinishPosts}
          createFinishPost={createFinishPost}
          removeFinishPost={removeFinishPost}
        />)}
    </div>
  );
}

export default TaskList;