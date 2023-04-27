import { useRef, useEffect } from 'react';

//function for getting the previous value of the element 
export default function usePrevious(value)
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