import React from 'react';
import { useState, useContext } from 'react';
import MyButton from "./MyButton.jsx"
import MyInput from "./MyInput.jsx"
import './TaskForm.css'
import ThemeContext from './context/TeameContext.js';


function TaskForm({ create }) {

    const { theme } = useContext(ThemeContext);

    const [post, setPost] = useState({ body: "" })

    function AddNewPost(event) {
        event.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ body: "" })

    }

    return (
        <form className='task__form'
            style={{
                backgroundColor: theme.backgroundColor,
                color: theme.textColor,
            }}
        >
            <MyInput placeholder='Добавьте задачу'
                value={post.body}
                onChange={event => setPost({ ...post, body: event.target.value })}
            />
            <MyButton onClick={AddNewPost} type='submit' />
        </form>
    );
}

export default TaskForm;