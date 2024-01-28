import { useState } from 'react';
import Container from '../../components/Container';
import Input from '../../components/Input';
import './styles.css';
import { useEffect } from 'react';


export default function WordPreview() {
    const  [ audio, setAudio ]  = useState(false);

    const handleClickAudio = () => {
        setAudio(s => !s)
    }


  return (
    <div className='wordPreview-container'>
        <Input
            type={'text'}
            name={'wordPreviewInput'}
            id={'wordPreviewInput'}
            placeholder={'Search'}
            autoComplete={'off'}
            idContainer={'wordPreviewInput-container'}
        />
        <Container id={'wordPreview-containerComponent'}>
            <div className='word-image-wordPreview'>
                
                <span onClick={handleClickAudio} className="material-symbols-outlined icon-audio-wordPreview">
                    {audio ? 'volume_up' : 'stop'}
                </span>

                <h1 className='title-wordPreview'>Microwave</h1>

                <div className='image-wordPreview-container'>
                    <span className="material-symbols-outlined arrow-image-wordPreview-left">chevron_left</span>
                    <div className='image-wordPreview'>
                        {/* <img src="https://www.sofacasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/u/sui_a_bordado_138.jpg" alt="microwave" /> */}
                        <img src="https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg" alt="microwave" />
                    </div>
                    <span className="material-symbols-outlined arrow-image-wordPreview-right">chevron_right</span>
                </div>
               

                <div className='progressInput-wordPreview'><input type="range" min='0' max='10'/></div>
                
            </div>
            <div className='word-sentence-wordPreview'>
                frase
            </div>
        </Container>
    </div>
  )
}
