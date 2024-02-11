import './styles.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className='header-container'>
      <div className='header-content'>
        <div></div>
        <Link to='/' className='home link-page'><span className="material-symbols-outlined home-icon">cottage</span></Link>
        <Link to={'/Words'} className='word link-page'>Words</Link>
        <Link to={'/Texts'} className='text link-page'>Texts</Link>
        <Link className='sentence link-page'>Sentences</Link>
        <div></div>
      </div>
      <div></div>
    </nav>
      );
}
    
    
    
