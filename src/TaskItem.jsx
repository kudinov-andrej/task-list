import React, { useState } from "react";
import "./TaskItem.css";
import EditTaskForm from "./EditTaskForm";

// line-through

function TaskItem(props) {

    const [isthrough, setIsthrough] = useState(false);
    const [textColor, setTextColor] = useState('white');
    const [isEditing, setIsEditing] = useState(false);


    const handleButtonClick = () => {
      setIsthrough(!isthrough);
      setTextColor(textColor === 'white' ? 'green' : 'white');
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
            <p
              style={{
                textDecoration: isthrough ? "line-through" : "none",
                color: textColor,
              }}
              className="task__text"
            >
              {props.number}.{props.post.body}
            </p>
            <div className="task__button-conteiner">
              <button
                onClick={() => setIsEditing(true)}
                className="task__button task__button_edit"
              ></button>
              <button
                onClick={handleButtonClick}
                className="task__button task__button_finish"
              ></button>
              <button
                onClick={() => props.remove(props.post)}
                className="task__button task__button_trash"
              ></button>
            </div>
          </>
        )}
      </div>
    );
  }
  
  export default TaskItem;