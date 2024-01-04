import './styles.css';

export default function Logo({size, color}) {
  return (
    <span style={{color: `${color}`, fontSize: `${size}`}} className="material-symbols-outlined translate-icon">translate</span>
  )
}
