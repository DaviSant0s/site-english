import { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import useEventListener from '../../hooks/useEventListener';

export default function SideBar({ id }) {
  
  const [ sideBar_state, setSideBar_state ] = useState(false);

  useEffect(() => {
    console.log(sideBar_state ? 'verdadeiro' : 'falso');
  }, [sideBar_state]);
  

  const handleClickCondition = () => {
    setSideBar_state(!sideBar_state);
  };
  
  useEventListener('click', handleClickCondition, sideBar_state);

  return (
    <div className='sideBar-container' id={id}>
      <div className='title-SideBar-container'>
        {
          <span 
            className="material-icons button-menu-SideBar"
          >
            menu
          </span>
        }

        <Link to='/' className='Link'>
          <nav className='sidebar-content-page-title'>
              <span className="material-symbols-outlined icon-sideBar">cottage</span>
              <span className='home-name'>Home</span>
          </nav>
        </Link>
      </div>
      <nav className='sidebar-content-pages'>
          
            <Link to={'/words'} className='Link'>
              <span className='word-sideBar link-page-sideBar'>
                <span className="material-symbols-outlined icon-sideBar">edit_square</span>
                Words
              </span>
            </Link>
          
            <Link to={'/texts'} className='Link'>
              <span className='text-sideBar link-page-sideBar'>
                <span className="material-symbols-outlined icon-sideBar">menu_book</span>
                Texts
              </span>
            </Link>
          
            <Link to={'/sentences'} className='Link'>
              <span className='sentence-sideBar link-page-sideBar'>
                <span className="material-symbols-outlined icon-sideBar">Sms</span>
                Phrases
              </span>
            </Link>

      </nav>

    </div>
  )
}
