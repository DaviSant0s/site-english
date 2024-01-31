import './styles.css';

export default function Loading({size, border}) {
  return (
    <div style={{width: `${size}px`, height: `${size}px`, borderWidth: `${border}px`}} className='circle'></div>
  )
}
