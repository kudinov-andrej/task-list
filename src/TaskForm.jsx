import React from 'react';
import { useState } from 'react';
import MyButton from "./MyButton.jsx"
import MyInput from "./MyInput.jsx"
import './TaskForm.css'


function TaskForm({ create }) {

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
        <form className='task__form'>
            <MyInput placeholder='Добавьте задачу'
                value={post.body}
                onChange={event => setPost({ ...post, body: event.target.value })}
            />
            <MyButton onClick={AddNewPost} type='submit'/>
        </form>
    );
}

export default TaskForm;