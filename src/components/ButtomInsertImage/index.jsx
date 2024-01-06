import './styles.css';

export default function ButtomInsertImage({width, height, name, id, icon, label, required}) {
  return (
    <div style={{width: `${width}`, height: `${height}`}} className='ButtomInsertImage-component'>
        <label htmlFor="imagefile"><span className="material-symbols-outlined">{icon}</span>{label}</label>
        <input type="file" accept='image/*'  name={name} id={id} required={required}/>
    </div> 
  )
}
