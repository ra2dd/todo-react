import React, { useState } from "react";

export default function Todo(props)
{
    const [isEditing, setEditing] = useState(false);

    const ediitingTemplate = 
    (
        <form className="stack-small">
            <div className="form-group">

                <label className="todo-label" htmlFor={ props.id }>
                    New name for { props.name }
                </label>

                <input 
                type="text" 
                id={ props.id } 
                className="todo-text"
                />
            </div>

            <div className="btn-group">
                <button 
                type="button" 
                className="btn todo-cancel"
                onClick={ () => setEditing(false) }
                >
                    Cancel <span className="visually-hidden">renaiming { props.name }</span>
                </button>

                <button 
                type="submit" 
                className="btn btn__primary todo-edit" 
                onClick={ () => props.editTask(props.id) }
                >
                    Save <span className="visually-hidden">new name for { props.name }</span>
                </button>
            </div>
        </form> 
    );


    const viewTemplate = 
    (
        <div className="stack-small">
            <div className="c-cb">
                <input 
                type="checkbox" 
                id={ props.id } 
                defaultChecked={ props.completed }
                onChange={ () => props.toogleTaskCompleted(props.id) }
                />

                <label className="todo-label" htmlFor={ props.id }>
                    { props.name }
                </label>
            </div>

            <div className="btn-group">
                <button 
                type="button" 
                className="btn"
                onClick={ () => setEditing(true) }>
                    Edit <span className="visually-hidden">{ props.name }</span>
                </button>

                <button 
                type="button" 
                className="btn btn__danger" 
                onClick={ () => props.deleteTask(props.id) }
                >
                    Delete <span className="visually-hidden">{ props.name }</span>
                </button>
            </div>
        </div> 
    );

    return(
        <li className="todo">
            { isEditing ? ediitingTemplate : viewTemplate }
        </li>
    );
}