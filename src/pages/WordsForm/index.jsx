import Container from '../../components/Container';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Textarea from '../../components/Textarea';
import './styles.css';

export default function WordsForm() {
  return (
    <div className='WordsForm-container'>
        <Container width={'450px'} height={'550px'}>
        <Logo/>
        <form action="#" method="post">
          <Input 
            type={'text'} 
            name={'word'} 
            id={'word'} 
            placeholder={'Inserir Palavra'} 
            autoComplete={'off'} 
            required={'on'}
          /> 

          <Textarea/>

        </form>
        </Container>
    </div>
  )
}
