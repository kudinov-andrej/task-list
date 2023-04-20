import React, { useState, useContext } from "react";
import "./TaskItem.css";
import EditTaskForm from "./EditTaskForm";
import ThemeContext from "./context/TeameContext";
import { ReactComponent as ButtonTrash } from './image/trash-delete-svgrepo-com.svg';
import { ReactComponent as ButtonEdit } from './image/pencil-svgrepo-com.svg';
import { ReactComponent as ButtonFinish } from './image/check-circle-svgrepo-com.svg';
// line-through

function TaskItem(props) {
  const { theme } = useContext(ThemeContext)

  const [isthrough, setIsthrough] = useState(false);
  const [textColor, setTextColor] = useState('white');
  const [isEditing, setIsEditing] = useState(false);

  const handleButtonClick = () => {
    setIsthrough(!isthrough);
    setTextColor(textColor === 'white' ? (props.theme === 'dark' ? 'black' : 'green') : 'white');
  };

  const handleEdit = (post) => {
    props.change(post);
    setIsEditing(false);
  };
  
  return (
    <div className="task__item">
      {isEditing ? (
        <EditTaskForm post={props.post} onEdit={handleEdit} />
      ) : (
        <>
          <div className="task__text"
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
          }}
          >
            <span style={{
              marginRight: '10px',
            }}>{props.number}.{" "}</span>
            <p className="text"
             style={{
              textDecoration: isthrough ? "line-through" : "none",
              color: theme.textColor 
            }}
            >
              {props.post.body}
            </p>
          </div>
          <div className="task__button-conteiner">
            <ButtonEdit
              onClick={() => setIsEditing(true)}
              className="task__button task__button_edit"
              style={{
              fill: theme.fill,
              stroke: theme.stroke
              }}
            ></ButtonEdit>
            <ButtonFinish
              onClick={handleButtonClick}
              className="task__button task__button_finish"
              style={{
                fill: theme.fill,
                stroke: theme.stroke
                }}
            ></ButtonFinish>
            <ButtonTrash
              onClick={() => props.remove(props.post)}
              className="task__button task__button_trash"
              style={{
                stroke: theme.stroke
                }}
            ></ButtonTrash>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;