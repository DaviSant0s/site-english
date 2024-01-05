import ButtomInsertImage from '../../components/ButtomInsertImage';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Textarea from '../../components/Textarea';
import './styles.css';

export default function WordsForm() {
  return (
    <div className='WordsForm-container'>
        <Container width={'450px'} height={'550px'} gap={'20px'}>
          <Logo/>
          <form action="#" method="post">
            <Input 
              type={'text'} 
              name={'word'} 
              id={'word'} 
              placeholder={'Digitar palavra'} 
              autoComplete={'off'} 
              required={'on'}
            /> 

            <Textarea
              name={'sentence'}
              id={'sentence'}
              placeholder={'Digitar frase'}
              required={'on'}
            />

            <ButtomInsertImage
              name={'imagefile'}
              id={'imagefile'}
              icon={'image'}
              label={'Inserir Imagem'}
              required={''}
            />

          </form>
        </Container>
    </div>
  )
}
