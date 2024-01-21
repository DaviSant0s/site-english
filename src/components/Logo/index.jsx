import './styles.css';

export default function Logo({size, color, id}) {
  return (
    <span style={{color: `${color}`, fontSize: `${size}`}} className="material-symbols-outlined translate-icon" id={id}>translate</span>
  )
}