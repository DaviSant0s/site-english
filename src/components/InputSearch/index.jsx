import './styles.css';
import '../styles/Input/styles.css';

export default function InputSearch({width, height, type, name, id, placeholder, idContainer, iconSide='left', radius }) {
  return (
    <>

        {
        
        iconSide === 'left' && 
        
        <div className='inputSearch-component-container' style={{width: `${width}`, height: `${height}`, borderRadius: `${radius}`}} id={idContainer}>

            <input className="inputSearch-component-content inputSearch-component-content-left" type={type} name={name} id={id} placeholder={placeholder} style={{borderRadius: `${radius}`}} />

            <span className="material-symbols-outlined search-icon-left">search</span>

        </div>
        
        }

        {
        
        iconSide === 'right' && 
        
        <div className='inputSearch-component-container' style={{width: `${width}`, height: `${height}`, borderRadius: `${radius}`}} id={idContainer}>
            <input className="inputSearch-component-content inputSearch-component-content-right" type={type} name={name} id={id} placeholder={placeholder} style={{borderRadius: `${radius}`}} />
            <span className="material-symbols-outlined search-icon-right">search</span>
        </div>
        
        }
      
    </>
  )
}
