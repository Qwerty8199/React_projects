import React, { useState } from 'react';


const TodoForm = ({addTask}) =>{

    const [taskName, settaskName] = useState('')

    const handleinput = (e) => {
        settaskName(e.target.value);
        console.log(taskName);
    }

    const submit = () =>{
        console.log("adding : "+taskName);
        addTask(taskName);
        settaskName('');
    }

    return(
        <div>
            <form onSubmit={submit}>
                <input value={taskName} type="text" onChange={handleinput} placeholder='Enter TaskName ..' />
                <button>Submit</button>
            </form>
        </div>
    );
    

}

export default TodoForm;