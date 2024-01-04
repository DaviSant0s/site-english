import Logo from '../../components/Logo';
import PageButtom from '../../components/PageButtom';
import './styles.css';

export default function Home() {
  return (
    <div className='home-container'>
      <Logo/>
      <h1>Deixe seu aprendizado em inglês mais organizado! </h1>
      <p>Insira as palavras, textos e imagens que você quer aprender no sistema, e tenha um <br /> ambiente simplificado para quando você quiser revisar e fixar ainda mais o que você <br /> estuda em inglês.  </p>

      <div className='pages-buttom-container'>
        <PageButtom icon={'text_format'} name={'Palavra'}/>
        <PageButtom icon={'format_paragraph'} name={'Texto'}/>
        <PageButtom icon={'sms'} name={'Frase'}/>
      </div>
    </div>
  )
}
