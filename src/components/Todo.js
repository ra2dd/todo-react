import React, { useEffect, useState, useRef } from "react";

export default function Todo(props)
{
    /*
        Defing Refs
    */
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);


    /*
        Managing states with editing 
        and setting new name in editing template
    */
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');


    /*
        Handling user input
    */
    function handleInputChange(event)
    {
        setNewName(event.target.value);
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        if(newName === '')
        {
            alert('You need to provide a new name.');
        }
        else
        {
            props.editTask(props.id, newName);
            setNewName('');
            setEditing(false);
        }
    }

    /*
        Templates for rendering defult view
        and editing view
    */
    const editingTemplate = 
    (
        <form className="stack-small" onSubmit={ handleSubmit }>
            <div className="form-group">

                <label className="todo-label" htmlFor={ props.id }>
                    New name for { props.name }
                </label>

                <input 
                type="text" 
                id={ props.id } 
                className="todo-text"
                value={ newName }
                onChange={ handleInputChange }
                ref= { editFieldRef }
                />
            </div>

            <div className="btn-group">
                <button 
                type="button" 
                className="btn todo-cancel"
                onClick={ () => setEditing(false) }
                >
                    Cancel 
                    <span className="visually-hidden">renaiming { props.name }</span>
                </button>

                <button 
                type="submit" 
                className="btn btn__primary todo-edit" 
                >
                    Save 
                    <span className="visually-hidden">new name for { props.name }</span>
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
                onClick={ () => setEditing(true) }
                ref={ editButtonRef }
                >
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


 

    /*
        useEffect section
    */
    //function for getting the previous value of the element 
    function usePrevious(value)
    {
        const ref = useRef();
        
        /*
            use effect works at the end of generating DOM
            so at the initlialization the value is undefined
            and when the document loads usePrevious effect 
            sets the value to one used as a parameter
        */
        useEffect
        (
            () =>
            {
                ref.current = value;
            }
        );
        
        return ref.current;
    }

    // constant for checking previous value of isEditing
    const wasEditing = usePrevious(isEditing);


    useEffect
    (
        () => 
        {
            if(!wasEditing && isEditing)
            {
                editFieldRef.current.focus();
            }
            
            if(wasEditing && !isEditing)
            {
                editButtonRef.current.focus();
            }
        },
        [wasEditing, isEditing]
    );

    return(
        <li className="todo">
            { isEditing ? editingTemplate : viewTemplate }
        </li>
    );
}