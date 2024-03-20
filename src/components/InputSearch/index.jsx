import './styles.css';
import '../styles/Input/styles.css';

export default function InputSearch({width, height, type, name, id, placeholder, idContainer, iconSide='left', radius, icon='search', onChange, ref, style_icon={} }) {
  return (
    <>

        {
        
        iconSide === 'left' && 
        
        <div className='inputSearch-component-container' style={{width: `${width}`, height: `${height}`, borderRadius: `${radius}`}} id={idContainer}>

            <input ref={ref} onChange={onChange} className="inputSearch-component-content inputSearch-component-content-left" type={type} name={name} id={id} placeholder={placeholder} style={{borderRadius: `${radius}`}} />

            <span style={style_icon} className="material-symbols-outlined search-icon-left">{icon}</span>

        </div>
        
        }

        {
        
        iconSide === 'right' && 
        
        <div className='inputSearch-component-container' style={{width: `${width}`, height: `${height}`, borderRadius: `${radius}`}} id={idContainer}>
            <input onChange={onChange} className="inputSearch-component-content inputSearch-component-content-right" type={type} name={name} id={id} placeholder={placeholder} style={{borderRadius: `${radius}`}} />
            <span style={style_icon} className="material-symbols-outlined search-icon-right">{icon}</span>
        </div>
        
        }
      
    </>
  )
}
