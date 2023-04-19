import { useContext } from 'react';
import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';
import ThemeContext from './context/TeameContext';

function TaskList({posts, remove, change}) {

  const {theme} = useContext(ThemeContext)
  
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
                key={post.id} 
                remove = {remove}
                change={change}/>)}
      </div>
  );
}

export default TaskList;