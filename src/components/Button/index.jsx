import './styles.css';

export default function Button({width, height, fontSize, color, radius, id, gap}) {
  return (
    <button style={{width: `${width}`, height: `${height}`, borderRadius: `${radius}`, backgroundColor: `${color}`, fontSize: `${fontSize}`, gap: `${gap}`}} id={id} className='button-component' > 

        <span style={{fontSize: `${fontSize}`}} className="material-symbols-outlined button-component-icon" >translate</span> Translate

    </button>
  )
}
