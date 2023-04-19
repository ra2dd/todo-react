import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) 
{
    const taskList = props.tasks?.map((task) => 
        (
            <Todo 
                id={ task.id } 
                name={ task.name } 
                completed={ task.completed } 
                key= {task.id }
            />
        )
    );

    return (
        <div className="todoapp stack-large">
            <h1>Todo List</h1>

            <Form />
            <FilterButton />
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
