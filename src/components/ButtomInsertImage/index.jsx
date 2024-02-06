import './styles.css';

export default function ButtomInsertImage({width, height, name, id, icon='image', label='Inserir Imagem'}) {
  return (
    <div style={{width: `${width}`, height: `${height}`}} className='ButtomInsertImage-component'>
        <label htmlFor="imagefile">
          <span className="material-symbols-outlined">{icon}</span>
          {label}
        </label>
        <input type="file" accept='image/*'  name={name} id={id}/>
    </div> 
  )
}
