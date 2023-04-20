import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React, { useState } from 'react';
import { nanoid } from "nanoid";

function App(props) 
{
    /*
        Handing tasks
    */
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
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };
        setTasks([...tasks, newTask]);
    }


    const tasksNoun = tasks.length > 1 ? 'tasks' : 'task';
    const headingText = `${tasks.length} ${tasksNoun} remaining`;

    return (
        <div className="todoapp stack-large">
            <h1>Todo List</h1>

            <Form addTask={ addTask } />

            <div className="filters btn-group stack-exception">
                <FilterButton />
                <FilterButton />
                <FilterButton />
            </div>

            <h2 id="list-heading">{ headingText }</h2>
            
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
