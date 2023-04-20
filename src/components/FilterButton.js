import React from 'react';

function FilterButton(props)
{
    return(
        <button type="button" className="btn toogle-btn" aria-pressed="false">
            <span className="visually-hidden">Show</span>
            <span>{  }</span>
            <span className="visually-hidden">tasks</span>
        </button>
    )
}

export default FilterButton;