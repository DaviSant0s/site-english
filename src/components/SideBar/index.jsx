import { useEffect, useState } from 'react';
import './styles.css';

export default function SideBar({id}) {
  const [ animar, setAnimar ] = useState(false);
  const [ animacao, setAnimacao ] = useState({});

  useEffect(() => {
    if(animar) {
      setAnimacao({
        transform: 'translate(100%)', 
        boxShadow: '0px 0px 20px #6b7a89',
      })
      
    } else{

      setAnimacao({})
    }
  }, [animar]);


  return (
    <div style={animacao} className='sideBar-container' id={id}>
      <div className='title-SideBar-container'>
        {!animar &&
          <span 
            onClick={() => setAnimar(s => !s)} 
            className="material-icons button-menu-SideBar button-menu-SideBar-position"
          >
            menu
          </span>
        }

        {animar &&
          <span 
            onClick={() => setAnimar(s => !s)} 
            className="material-icons button-menu-SideBar button-menu-SideBar-position"
          >
            close
          </span>
        }
      </div>
    </div>
  )
}
