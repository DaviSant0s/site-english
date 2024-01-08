import ButtomInsertImage from '../../components/ButtomInsertImage';
import ButtomSubmit from '../../components/ButtomSubmit';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Textarea from '../../components/Textarea';
import './styles.css';

export default function WordsForm() {
  return (
    <div className='WordsForm-container'>
        <Container>
          <Logo/>
          <form action="#" method="post">
            <Input 
              type={'text'} 
              name={'word'} 
              id={'word'} 
              placeholder={'Digitar palavra'} 
              autoComplete={'off'} 
            /> 

            <Textarea
              name={'sentence'}
              id={'sentence'}
              placeholder={'Digitar frase'}
            />

            <ButtomInsertImage
              name={'imagefile'}
              id={'imagefile'}
            />

            <ButtomSubmit
              value={'Enviar'}
            />

          </form>
        </Container>
    </div>
  )
}
