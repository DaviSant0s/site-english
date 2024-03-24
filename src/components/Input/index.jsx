import '../styles/Input/styles.css';
import './styles.css';

export default function Input({width, height, type, name, id, placeholder, autoComplete, required, idContainer, ref }) {
  return (
        <div style={{width: `${width}`, height: `${height}`}} className='input-container' id={idContainer}>
            <input 
                ref={ref}
                className='input-component'
                type={type} 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                autoComplete={autoComplete} 
                required={required}
            />
        </div>

        )
    }

