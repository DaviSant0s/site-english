import { useRef, useState } from 'react';
import audio from '../../../assets/audios/audio2.mp3';
import './styles.css';

export default function Player({width, height, top, bottom, left, right, position, fontSize}) {
    const [ audioPlay, setAudioPlay ]  = useState(false);
    const PlayerAudioRef = useRef();

    const handleClickAudio = () => {
        setAudioPlay(s => !s);

        if(!audioPlay) {
            PlayerAudioRef.current.play()
        } else{
            PlayerAudioRef.current.pause();
            PlayerAudioRef.current.currentTime = 0;
        } 
    }

    return (
    <div 
        className='audio-icon-container'  
            style={{
                top:`${top}`, 
                bottom:`${bottom}`, 
                left:`${left}`, 
                right:`${right}`, 
                position: `${position}`, 
                width: `${width}`, 
                height: `${height}`
                }}
        >

        <audio style={{display:'none'}} src={audio} ref={PlayerAudioRef}/>

        <span onClick={handleClickAudio} className='icon-audio-component'>

            <span className="material-symbols-outlined SelectNone" style={{fontSize: `${fontSize}`}}>
                {audioPlay ? 'volume_up' : 'volume_off'}
            </span>

        </span>

    </div>
    )
}
