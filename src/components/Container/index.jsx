import './styles.css';

export default function Container({children, width, height, background, display, flexDirection, justifyContent, alignItems, gap}) {

  return (
    <div 
    style={{width: `${width}`, 
    height: `${height}`, 
    background: `${background}`,
    display: `${display}`,
    flexDirection: `${flexDirection}`,
    justifyContent: `${justifyContent}`,
    alignItems: `${alignItems}`,
    gap: `${gap}`
  }} 
    className='container'
    >

    {children}
      
    </div>
  )
}