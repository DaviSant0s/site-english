import { useState } from 'react';
import './styles.css';

export default function Player({width, height, top, bottom, left, right, position, fontSize}) {
    const [ audio, setAudio ]  = useState(false);

    const handleClickAudio = () => {
        setAudio(s => !s);
    }

    return (
    <div className='audio-icon-container'  style={{top:`${top}`, bottom:`${bottom}`, left:`${left}`, right:`${right}`, position: `${position}`, width: `${width}`, height: `${height}`}}>
        <span 
            onClick={handleClickAudio} className='icon-audio-component'
            >
                <span className="material-symbols-outlined SelectNone" style={{fontSize: `${fontSize}`}}>
                    {audio ? 'volume_up' : 'volume_off'}
                </span>
        </span>
    </div>
    )
}
