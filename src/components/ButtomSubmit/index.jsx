import './styles.css';

export default function ButtomSubmit({width, height, value, backgroundColor, color, id}) {
  return (
    <div style={{width: `${width}`, height: `${height}`}} className='ButtomSubmit-container' id={id}>
        <input type='submit' value={value} style={{backgroundColor: `${backgroundColor}`, color: `${color}`}} />
    </div>
  )
}
