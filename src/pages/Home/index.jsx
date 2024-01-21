import Logo from '../../components/Logo';
import PageButtom from '../../components/PageButtom';
import './styles.css';

export default function Home() {
  return (
    <div className='home-container'>
      <Logo/>
      <h1 className='title-home'>Deixe seu aprendizado em inglês mais organizado! </h1>
      <p className='description-home'>Insira as palavras, textos e imagens que você quer aprender no sistema, e tenha um ambiente simplificado para quando você quiser revisar e fixar ainda mais o que você estuda em inglês.  </p>

      <div className='pages-buttom-container'>
        <PageButtom icon={'text_format'} name={'Palavra'} path={'/WordsForm'}/>
        <PageButtom icon={'format_paragraph'} name={'Texto'} path={'/TextForm'}/>
        <PageButtom icon={'sms'} name={'Frase'} path={'/SentenceForm'}/>
      </div>
    </div>
  )
}
