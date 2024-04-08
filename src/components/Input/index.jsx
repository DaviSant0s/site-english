import { useEffect, useRef } from 'react';
import '../styles/Input/styles.css';
import './styles.css';

export default function Input({width, height, type, name, id, placeholder, autoComplete, required, idContainer, function_aux }) {

    const input_Ref = useRef(null);

    useEffect(() => {
        if(input_Ref){
            function_aux(input_Ref);
        }
    }, [input_Ref])

    return (
        <div style={{width: `${width}`, height: `${height}`}} className='input-container' id={idContainer}>
            <input 
                ref={input_Ref}
                className='input-component'
                type={type} 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                autoComplete={autoComplete} 
                required={required}
            />
        </div>

    );
}

