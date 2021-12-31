import React, { useState } from 'react';
import './App.css';
import data from './data';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App(){

    const [TodoListVal, setTodoListVal] = useState([data]);
  
    const handleChange = (id) => {
        let changed = TodoListVal.map(task =>{
          return task.id === Number(id) ? {...task , done: !task.done} : {...task};
        });
        setTodoListVal(changed);
    }

    const handlefilter = () => {
        let filtered = TodoListVal.filter(task => {
          return !task.complete;
        });
        setTodoListVal(filtered);
    }

    const AddTask = ({newTask}) => {
        console.log("inside addtask");
        let val = [...TodoListVal];
        val = [...val, {id : TodoListVal.length +1, task:newTask, done:false}];
        setTodoListVal(val);
        console.log(val);
    }

    return(
      <div>
        {console.log(TodoListVal)}
        <TodoList todoList={TodoListVal} handleChange={handleChange} handlefilter={handlefilter}/>
        <TodoForm addTask={AddTask}/>
      </div>
    );
}

export default App;
