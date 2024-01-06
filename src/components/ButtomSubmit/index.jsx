import './styles.css';

export default function ButtomSubmit({width, height, value, backgroundColor, color}) {
  return (
    <div style={{width: `${width}`, height: `${height}`}} className='ButtomSubmit-container'>
        <input type='submit' value={value} style={{backgroundColor: `${backgroundColor}`, color: `${color}`}} />
    </div>
  )
}
