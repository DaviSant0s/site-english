import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

export default function InputSelect({width='140px', height='32px', radius='12px'}) {
  const [bodySelect, setBodySelect] = useState(false);
  const [ displaySelect, setDisplaySelect ] = useState('')

  const handleClickDisplayBody = () => {
    setBodySelect(s => !s);
  }

  useEffect(() => {

    if(displaySelect === '') {
      setDisplaySelect('none')
    } else {
      setDisplaySelect('')
    }

  }, [bodySelect]);

  return (


    <div className='inputSelect-container' style={{width: `${width}`, height: `${height}`, borderRadius: `${radius}`}}>

        <div onClick={handleClickDisplayBody} style={{borderRadius: `${radius}`}} className='inputSelect-content'>
          <div className='inputSelect-name-selected' style={{borderRadius: `${radius} 0px 0px ${radius}`}}>All</div>
          <div className='inputSelect-icon-arrow-container' style={{borderRadius: `0px ${radius} ${radius} 0px`}}>
              <span class="material-symbols-outlined inputSelect-arrow inputSelect-arrow-up">
                  expand_less
              </span>
              <span class="material-symbols-outlined inputSelect-arrow inputSelect-arrow-down">
                  keyboard_arrow_down
              </span>
          </div>
        </div>

        <div className='inputSelect-body-container' style={{display: `${displaySelect}`, borderRadius: `${radius}`}}>
          <ul>
            <li>Objetos</li>
            <li>Relacionamentos</li>
            <li>Parentesco</li>
            <li>profissões</li>
            <li>animais</li>
            <li>Relacionamentos</li>
            <li>Parentesco</li>
            <li>profissões</li>
            <li>animais</li>
            <li>Relacionamentos</li>
          </ul>
        </div>
        
    </div>

  )
}
