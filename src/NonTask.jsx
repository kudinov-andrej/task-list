import './NoneTask.css'
import ThemeContext from './context/TeameContext';
import { useContext } from 'react';


function NonTask({ ...props }) {

    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <p className='post__non'
                style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                }}
            >Задачи отсутствуют! Ура! Пора писать новые!</p>
        </div>
    );
}

export default NonTask;