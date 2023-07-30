import React, { useState, useContext, useEffect } from "react";
import "./TaskItem.css";
import EditTaskForm from "./EditTaskForm";
import ThemeContext from "./context/TeameContext";
import { ReactComponent as ButtonTrash } from './image/trash-delete-svgrepo-com.svg';
import { ReactComponent as ButtonEdit } from './image/pencil-svgrepo-com.svg';
import { ReactComponent as ButtonFinish } from './image/check-circle-svgrepo-com.svg';

function TaskItem(props) {
  const { theme } = useContext(ThemeContext)

  const [isThrough, setIsThrough] = useState(false);
  const [textColor, setTextColor] = useState('white');
  const [isEditing, setIsEditing] = useState(false);

  const handleButtonClick = () => {
    if (!isThrough) {
      setIsThrough(true);
      const newPost = {
        ...props.post, id: props.post.id
      }
      props.createFinishPost(newPost);
    } else {
      setIsThrough(false);
      props.removeFinishPost(props.post);
    }
    setTextColor(textColor === 'white' ? (props.theme === 'dark' ? 'black' : 'green') : 'white');
  };

  const handleEdit = (post) => {
    props.change(post);
    setIsEditing(false);
  };

  // проверка, есть ли задачи в списке среди выполненных

  useEffect(() => {
    checkIsThrough(props.posts, props.finishPosts);
  }, [props.posts, props.finishPosts]);

  const checkIsThrough = (posts, finishPosts) => {
    if (posts && finishPosts) {
      const throughPost = posts.filter(post => {
        return finishPosts.some(myPost => myPost.id === post.id);
      });
      setIsThrough(throughPost.some(post => post.id === props.post.id));
    }
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
                textDecoration: isThrough ? "line-through" : "none",
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
              onClick={() => handleButtonClick(props.post)}
              className="task__button task__button_finish"
              style={{
                fill: theme.fill,
                stroke: theme.stroke,
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