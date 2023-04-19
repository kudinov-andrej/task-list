import React, { useState } from "react";
import MyButtonChenge from "./MyButtonChenge";
import MyInput from "./MyInput";
import './EditTaskForm.css';
import ThemeContext from './context/TeameContext';
import { useContext } from 'react';

function EditTaskForm({ post, onEdit }) {
    const [body, setBody] = useState(post.body);
    const { theme } = useContext(ThemeContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit({ ...post, body });
    };

    return (
        <form className="form__chenge" onSubmit={handleSubmit}
        style={{
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
          }}
        >
            
                <MyInput
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Введите новое название задачи"
                />
                <MyButtonChenge type="submit"/>
            
        </form>

    );
}

export default EditTaskForm;