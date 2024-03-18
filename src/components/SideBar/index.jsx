import { useEffect, useRef, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import useClickOutSide from '../../hooks/useClickOutSide';

export default function SideBar({ id }) {
  
  const [ bool_Out, ref_Out, setCondition_Out ] = useClickOutSide();
  const [ sideBar_state, setSideBar_state ] = useState(false);
  const [ animacao, setAnimacao ] = useState({});

  // Impede o ouvinte quando o sidebar estiver fechado
  useEffect(() => {
    if(sideBar_state){
      /* console.log('sidebar aberta') */
      setCondition_Out(() => true);
    } else {
      /* console.log('sidebar fechada') */
      setCondition_Out(() => false);
    }

  }, [sideBar_state]);

  // Abrir sideBar
  const handleClickOpenSideBar = () => {
    
    setAnimacao({
      transform: 'translate(100%)', 
      boxShadow: '0px 0px 20px #6b7a89',
    })

    setSideBar_state(true);
  }
  
  // Fechar sideBar
  const handleClickCloseSideBar = () => {
    setAnimacao({})
    setSideBar_state(false)
  }

  useEffect(() => {
    if (sideBar_state && bool_Out ){
      /* console.log('passei aqui', bool_Out, sideBar_state) */
      setAnimacao({});
      setSideBar_state(false);
    }

  }, [bool_Out]);

  return (
    <div ref={ref_Out} style={animacao} className='sideBar-container' id={id}>
      <div className='title-SideBar-container'>
        {!sideBar_state &&
          <span 
            onClick={handleClickOpenSideBar}
            className="material-icons button-menu-SideBar"
          >
            menu
          </span>
        }

        {sideBar_state &&
          <span 
            onClick={handleClickCloseSideBar} 
            className="material-icons button-menu-SideBar"
          >
            close
          </span>
        }

        <Link to='/' className='Link'>
          <nav onClick={handleClickCloseSideBar} className='sidebar-content-page-title'>
              <span className="material-symbols-outlined icon-sideBar">cottage</span>
              <span className='home-name'>Home</span>
          </nav>
        </Link>
      </div>
      <nav className='sidebar-content-pages'>
          
            <Link to={'/words'} className='Link'>
              <span onClick={handleClickCloseSideBar} className='word-sideBar link-page-sideBar'>
                <span className="material-symbols-outlined icon-sideBar">edit_square</span>
                Words
              </span>
            </Link>
          
            <Link to={'/texts'} className='Link'>
              <span onClick={handleClickCloseSideBar} className='text-sideBar link-page-sideBar'>
                <span className="material-symbols-outlined icon-sideBar">menu_book</span>
                Texts
              </span>
            </Link>
          
            <Link to={'/sentences'} className='Link'>
              <span onClick={handleClickCloseSideBar} className='sentence-sideBar link-page-sideBar'>
                <span className="material-symbols-outlined icon-sideBar">Sms</span>
                Phrases
              </span>
            </Link>

      </nav>

    </div>
  )
}
