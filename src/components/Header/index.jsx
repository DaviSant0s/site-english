import './styles.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
      <div className='header-container'>
          <div className='header-content'>
              <div>
              </div>
              <div className='home link-page'>
                <Link className='davi' to='/'><span  className="material-symbols-outlined home-icon">cottage</span></Link>
              </div>
              
              <div className='word link-page'>
                  <span>Words</span>
              </div>
              <div className='text link-page'>
                  <span>Texts</span>
              </div>
              <div className='sentence link-page'>
                  <span>Sentences</span>
              </div>
              <div>
      
              </div>
          </div>
          <div>
          </div>
      </div>
      )
    }
    
    {/* <nav className='header-container'>
        <ul>
            <li></li>
            <Link to='/'><li className='home link-page'><span className="material-symbols-outlined home-icon">cottage</span></li></Link>
            <Link><li className='Words link-page'>Words</li></Link>
            <Link><li className='Texts link-page'>Texts</li></Link>
            <Link><li className='Sentences link-page'>Sentences</li></Link>
            <li></li>
        </ul>
        <div></div>
    </nav> */}
    
