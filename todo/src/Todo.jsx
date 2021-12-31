import React from 'react';
import './index.css';

const Todo = ({todo,handleChange}) =>{

    const ChangeDone = (e) => {
        handleChange(e.currentTarget.id);
    }

    return(
        <div>
            <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} className={todo.done ? "todo done" : "todo"}>
                {todo.task}
            </div>
            <button onClick={ChangeDone}></button>
        </div>
    );
}

export default Todo;