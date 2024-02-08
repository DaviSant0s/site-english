import { useState } from 'react';
import './styles.css';

export default function InputSelect({width, height, radius='12px', options=[], id}) {
  const [ displaySelect, setDisplaySelect ] = useState('none');
  const [ selectOption, setSelectOption ] = useState(options[0]);

  const handleChangeOption = (e) => {
    setSelectOption(e.target.textContent);
    setDisplaySelect('none')

  }

  const handleClickDisplayBody = () => {
    if(displaySelect === '') {
      setDisplaySelect('none')
    } else {
      setDisplaySelect('')
    }
    
  }

  return (


    <div 
      className='inputSelect-container' 
      id={id}
      style={{width: `${width}`, height: `${height}`, borderRadius: `${radius}px`}}>

        <div 
          onClick={handleClickDisplayBody} 
          style={{borderRadius: `${radius}px`}} 
          className='inputSelect-content'
          >


          <div 
            className='inputSelect-name-selected' 
            style={{borderRadius: `${radius}px 0px 0px ${radius}px`}}
          >
            {selectOption}
          </div>

          <div 
            className='inputSelect-icon-arrow-container' 
            style={{ borderRadius: `0px ${radius}px ${radius}px 0px`}}
          >
              <span 
              className="material-symbols-outlined inputSelect-arrow inputSelect-arrow-up">
                  expand_less
              </span>
              
              <span className="material-symbols-outlined inputSelect-arrow    inputSelect-arrow-down">
                  keyboard_arrow_down
              </span>

          </div>
        </div>

        <div 
        className='inputSelect-body-container' 
        style={{display: `${displaySelect}`, borderRadius: `${radius * 0.7}px`}}>

          <ul>
            {options.map((option) => <li onClick={handleChangeOption} >{option}</li>)}
          </ul>

        </div>
        
    </div>

)
}
