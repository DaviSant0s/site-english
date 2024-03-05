import Logo from '../../components/Logo';
import PageButtom from '../../components/PageButtom';
import './styles.css';

export default function Home() {
  return (
    <div className='home-container defaultContainerDimension'>
      <Logo/>
      <h1 className='title-home'>Deixe seu aprendizado em inglês mais organizado! </h1>
      <p className='description-home'>Insira as palavras, textos e imagens que você quer aprender no sistema, e tenha um ambiente simplificado para quando você quiser revisar e fixar ainda mais o que você estuda em inglês.  </p>

      <div className='pages-buttom-container'>
        <PageButtom icon={'edit_square'} name={'Word'} path={'/wordsForm'}/>
        <PageButtom icon={'menu_book'} name={'Text'} path={'/textForm'}/>
        <PageButtom icon={'Sms'} name={'Phrases'} path={'/sentenceForm'}/>
      </div>
    </div>
  )
}
