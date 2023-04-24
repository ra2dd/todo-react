import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React, { useState } from 'react';
import { nanoid } from "nanoid";

const FILTER_MAP = 
{
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) 
{
    /*
        Handling filter buttons
    */
    const [filter, setFilter] = useState('All');

    const filterList = FILTER_NAMES.map((name) =>
    (
        <FilterButton 
        key={ name } 
        name= { name }
        isPressed= { name === filter }
        setFilter= { setFilter }
        />
    ));

    /*
        Handling tasks
    */
    //using state to retreive curent state of index.js prop
    //and function to change the state
    const [tasks, setTasks] = useState(props.tasks);

    //Generating data to form component
    //FILTER_MAP.filter doesnt work but FILTER_MAP[filter] does
    const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => 
        (
            <Todo 
                id={ task.id } 
                name={ task.name } 
                completed={ task.completed } 
                key= { task.id }
                toogleTaskCompleted= { toogleTaskCompleted }
                deleteTask = { deleteTask }
                editTask = { editTask }
            />
        )
    );

    //t
    function addTask(name)
    {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };
        setTasks([...tasks, newTask]);
    }

    
    /*
        Counting tasks
    */
    const tasksNoun = tasks.length > 1 ? 'tasks' : 'task';
    const headingText = `${tasks.length} ${tasksNoun} remaining`;

    /*
        Handling task completion, edition and deletion
    */
    function toogleTaskCompleted(id)
    {   
        /*
        tasks.forEach(
            (task) =>
            {
                if(task.id === id)
                {
                    if(task.completed === false)
                    {
                        task.completed = true;
                    }
                    else
                    {
                        task.completed = false;
                    }
                }
            }
        )
        */

        const updatedTasks = tasks.map
        (
            (task) =>
            {
                if(task.id === id)
                {
                    return {...task, completed: !task.completed}
                }
                return task;
            }
        )
        setTasks(updatedTasks);
    }

    function deleteTask(id)
    {
        const remainingTasks = tasks.filter
        (
            (task) => task.id !== id
        )
        setTasks(remainingTasks);
        console.log(remainingTasks);
    }

    function editTask(id, newName)
    {
       const editedTasks = tasks.map
       (
        (task) =>
        {
            if(task.id === id)
            {
                return {...task, name: newName}
            }
            return task;
        }
       );
       setTasks(editedTasks);
    }

    return (
        <div className="todoapp stack-large">
            <h1>Todo List</h1>

            { /*Inserting Form component with addtask function as prop*/ }
            <Form addTask={ addTask } />

            { /*Inserting FilterButton component*/}
            <div className="filters btn-group stack-exception">
                { filterList }
            </div>

            <h2 id="list-heading">{ headingText }</h2>
            
            <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
            >
            
            { /*Inserting taskList which generates Todo component 
            with tasks state values as prop*/}
            { taskList }

            </ul>
        </div>
    );
}

export default App;
