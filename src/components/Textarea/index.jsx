import './styles.css';
import '../styles/Input/styles.css';

export default function Textarea({width, height, name, id, placeholder, required}) {
  return (
    <div style={{width: `${width}`, height: `${height}`}} className='textarea-container'>
      <textarea 
        className='textarea-component'
        name={name} 
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}
