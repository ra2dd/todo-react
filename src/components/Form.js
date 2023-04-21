import React, { useState } from 'react';

function Form(props)
{
    //adding name state as empty string
    const [name, setName] = useState('');

    /*
        Handling user input
    */
    //using prop addTask function upon submitting the form
    function handleSubmit(event)
    {
        event.preventDefault();
        if(name === '')
        {
            alert('You need to type something.');
        }
        else
        {
            props.addTask(name);
            setName("");
        }
    }

    //changing name state as from input value changes
    function handleChange(event)
    {
        setName(event.target.value);
    }


    return(
        <form onSubmit={ handleSubmit }>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
    
            <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={ name }
            onChange={ handleChange }
            />
        
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}

export default Form;
