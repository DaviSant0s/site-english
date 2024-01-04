import './styles.css';

export default function Container({children, width, height, background}) {

  return (
    <div 
    style={{width: `${width}`, 
    height: `${height}`, 
    background: `${background}`}} 
    className='container'
    >

    {children}
      
    </div>
  )
}