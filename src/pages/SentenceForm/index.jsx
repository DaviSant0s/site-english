import ButtomInsertImage from '../../components/ButtomInsertImage';
import ButtomSubmit from '../../components/ButtomSubmit';
import Container from '../../components/Container';
import Logo from '../../components/Logo';
import Textarea from '../../components/Textarea';
import './styles.css';

export default function SentenceForm() {
  return (
    <div className='SentenceForm-container'>
        <Container>
            <Logo/>
            <form action="#" method="post">
                <Textarea
                    placeholder={'Digitar frase'}
                    name={'sentence'}
                    id={'sentence'}
                    width={'100%'}
                />

                <ButtomInsertImage
                    name={'image'}
                    id={'image'}
                    width={'100%'}
                />

                <ButtomSubmit/>
            </form>
        </Container>
    </div>
  )
}
