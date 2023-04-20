import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React, { useState } from 'react';

function App(props) 
{
    const [tasks, setTasks] = useState(props.tasks);

    const taskList = tasks.map((task) => 
        (
            <Todo 
                id={ task.id } 
                name={ task.name } 
                completed={ task.completed } 
                key= { task.id }
            />
        )
    );

    function addTask(name)
    {
        alert(name);
    }

    return (
        <div className="todoapp stack-large">
            <h1>Todo List</h1>

            <Form addTask={ addTask } />

            <div className="filters btn-group stack-exception">
                <FilterButton />
                <FilterButton />
                <FilterButton />
            </div>

            <h2 id="list-heading">... tasks remaining</h2>
            
            <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
            >

            { taskList }

            </ul>
        </div>
    );
}

export default App;
