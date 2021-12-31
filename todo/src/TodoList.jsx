import React from 'react';
import Todo from './Todo';

const TodoList = ({todoList,handleChange,handlefilter}) =>{

    return(
        <div>
            {todoList.map(_todo =>{
                console.log(_todo);
                return(
                    <Todo todo={_todo} handleChange={handleChange} />
                );
            })
            }
            <button onClick={handlefilter}>Remove Done</button>
        </div>
    );
}

export default TodoList;