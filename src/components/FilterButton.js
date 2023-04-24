import React, { useState } from 'react';

function FilterButton(props)
{
    /*
        Handling user input
    */
    function handleFilterClick()
    {
        props.setFilter(props.name);
    }

    return(
        <button 
        type="button" 
        className="btn toogle-btn" 
        aria-pressed={ props.isPressed }
        onClick={ handleFilterClick }
        >
            <span className="visually-hidden">Show</span>
            <span>{ props.name }</span>
            <span className="visually-hidden">tasks</span>
        </button>
    )
}

export default FilterButton;