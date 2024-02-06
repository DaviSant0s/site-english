import './styles.css';

export default function InputSelect({width='140px', height='32px', radius='12px'}) {
  return (

    <div className='inputSelect-container' style={{width: `${width}`, height: `${height}`, borderRadius: `${radius}`}}>

        <div className='inputSelect-name-selected'>All</div>
        <div className='inputSelect-icon-arrow-container'>

            <span class="material-symbols-outlined inputSelect-arrow inputSelect-arrow-up">
                expand_less
            </span>
            <span class="material-symbols-outlined inputSelect-arrow inputSelect-arrow-down">
                keyboard_arrow_down
            </span>

        </div>
        
    </div>

  )
}
