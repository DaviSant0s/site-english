import { useEffect, useRef, useState } from 'react';
import './styles.css'
import audio from '../../../assets/audios/audio2.mp3';

const catchMinutes = (totalDurationSeconds) => {
  const minutes = Math.floor(totalDurationSeconds / 60);
  return minutes;
}

const catchSeconds = (totalDurationSeconds) => {
  const seconds = Math.floor(totalDurationSeconds % 60);
  return seconds;
}

function LongAudio() {
  const audioRef = useRef();
  const rangeRef = useRef();

  const [ play, setPlay ] = useState(true);
  const [ totalDuration, setTotalDuration ] = useState(0.00001);
  const [ current, setCurrent ] = useState(0);
  const [ currentRangeValue, setCurrentRangeValue ] = useState(0);

  const [ minutes, setMinutes ] = useState(0);
  const [ seconds, SetSeconds ] = useState(0);
  const [ minutesTotal, setMinutesTotal ] = useState(0);
  const [ secondsTotal, setSecondsTotal ] = useState(0);

  const handleLoadedData = () => {
    setTotalDuration(audioRef.current.duration)
  }

  useEffect(() => {
    const minute = catchMinutes(totalDuration);
    setMinutesTotal(minute)

    const second = catchSeconds(totalDuration);
    setSecondsTotal(second);

  }, [totalDuration])

  useEffect(() => {
    if (audioRef.current.currentTime === totalDuration){
      setPlay(s => true)
    }
  })

  const handleChangeRange = () => {
    setCurrentRangeValue(rangeRef.current.value);
    audioRef.current.currentTime = (rangeRef.current.value / 100) * totalDuration;
  }

  useEffect(() => {
    setCurrentRangeValue(current)
  }, [current]);

  const handleClickPlay = () => {
    setPlay(s => !s);
    audioRef.current.play();
  }

  const handleClickPause = () => {
    setPlay(s => !s);
    audioRef.current.pause();
  }

  const handleTimeUpdateAudio = () => {
    const currentDuration = audioRef.current.currentTime;
    setCurrent(Math.floor((currentDuration / totalDuration) * 100))

    setMinutes(catchMinutes(currentDuration))
    SetSeconds(catchSeconds(currentDuration))
  }

  return (
    <>
      <audio onLoadedData={handleLoadedData} ref={audioRef} onTimeUpdate={handleTimeUpdateAudio} className='audio' src={audio} controls/>

      <div className='audio-container'>
        {play && 
          <span onClick={handleClickPlay} className="material-icons play-audio">play_arrow </span>
        }

        {!play && 
          <span onClick={handleClickPause} className="material-icons play-audio">pause</span>
        }

        <div className='audio-duration'>{minutes}:{seconds >= 10 ? seconds : '0' + seconds} / {minutesTotal}:{secondsTotal >= 10 ? secondsTotal : '0' + secondsTotal}</div>
        <div className='audio-progress-container'>
          <input onChange={handleChangeRange} ref={rangeRef} type='range' className='audio-progress' value={currentRangeValue} min={0} max={100} />
          <div style={{width: `${currentRangeValue}%`}} className='trackAudio'></div>
        </div>
        </div>
      </>
  )
}

export default LongAudio
