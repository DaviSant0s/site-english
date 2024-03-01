import { useMediaQuery } from 'react-responsive';
import SideBar from '../SideBar';
import './styles.css';
import { Link } from "react-router-dom";
import davi_photo from '../../assets/davi.jpg'
import { useState } from 'react';

export default function Header() {
  const [ sideBarActivation, setSideBarActivation ] = useState(true);
  const isSmallScreen = useMediaQuery({query: '(max-width: 690px)'});

  
  return (
    <header className='header-container'>
      
      {!isSmallScreen &&
      
        <div className='header-content-sideBarOff'>

          <nav className='header-content-pages'>
            <div></div>
          
            <Link to='/' className='Link'>
              <span className="material-symbols-outlined link-page home">cottage</span>
            </Link>
          
            <Link to={'/words'} className='Link'>
              <span className='word link-page'>Words</span>
            </Link>
          
            <Link to={'/texts'} className='Link'>
              <span className='text link-page'>Texts</span>
            </Link>
          
            <Link to={'/sentences'} className='Link'>
              <span className='sentence link-page'>Sentences</span>
            </Link>
            {isSmallScreen && console.log('oieeee')}
          
            <div></div>
          </nav>
          
          <div>
            <div className='profile-header-container'>
              <img className='profile-photo-header' src={davi_photo} alt="Foto de perfil" />
              <span className='profile-name'>Davi Santos</span>
            </div>
          </div>

        </div>
      
      }

      {isSmallScreen &&
        <div className='header-content-sideBarOn'>

          <div></div>
          <SideBar/>
          
          <div>
            <div className='profile-header-container'>
              <img className='profile-photo-header' src={davi_photo} alt="Foto de perfil" />
              <span className='profile-name'>Davi Santos</span>
            </div>
          </div>

        </div>
      }

    </header>
      );
    }
    
    
    {/* <span onClick={() => setSideBarActivation(s => !s)} className="material-icons button-menu-header button-menu-SideBar ">menu</span> */}
    
    