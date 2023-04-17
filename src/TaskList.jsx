import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({posts, remove, change}) {
  return (
      <div className='task__list'>
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