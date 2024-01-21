import Container from '../../components/Container';
import Input from '../../components/Input';
import './styles.css';

export default function WordPreview() {
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

                <span className="material-symbols-outlined icon-audio-wordPreview">volume_up</span>

                <h1 className='word-wordPreview'>Microwave</h1>

                <div className='image-wordPreview'><img src="https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg" alt="microwave" /></div>

                <div className='progressInput-wordPreview'>barra</div>
                
            </div>
            <div className='word-sentence-wordPreview'>
                frase
            </div>
        </Container>
    </div>
  )
}
