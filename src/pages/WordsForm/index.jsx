import ButtomInsertImage from '../../components/ButtomInsertImage';
import ButtomSubmit from '../../components/ButtomSubmit';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Textarea from '../../components/Textarea';
import { Link } from 'react-router-dom';
import './styles.css';

export default function WordsForm() {
  return (
    <div className='WordsForm-container defaultContainerDimension'>
        <Container id={'containerWordForm'}>
          <form action="/Word" method="get">
            <Logo id={'logoWordsForm'}/>
            <Input 
              type={'text'} 
              name={'word'} 
              id={'word'} 
              placeholder={'Digitar palavra'} 
              autoComplete={'off'} 

              width={'100%'}
            /> 

            <Textarea
              name={'sentence'}
              id={'sentence'}
              placeholder={'Digitar frase'}

              width={'100%'}
            />

            <ButtomInsertImage
              name={'imagefile'}
              id={'imagefile'}

              width={'100%'}
            />

            <Link to='/Words'>
            <ButtomSubmit
              value={'Enviar'}
            />
            </Link>

          </form>
        </Container>
    </div>
  )
}
