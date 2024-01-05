import './styles.css';
import '../styles/Input/styles.css';

export default function Input({width, height, type, name, id, placeholder, autoComplete, required }) {
  return (
        <div style={{width: `${width}`, height: `${height}`}} className='input-container'>
            <input 
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

