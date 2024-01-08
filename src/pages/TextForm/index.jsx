import ButtomSubmit from '../../components/ButtomSubmit';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Textarea from '../../components/Textarea';
import './styles.css';

export default function TextForm() {
  return (
    <div className='TextForm-container'>
        <Container width={'80%'}>
            <Logo size={'90px'}/>
            <form action="" method="post">
                <Input
                    placeholder={'Título'}
                    name={'text-title'}
                    id={'text-title'}

                    width={'100%'}
                />
                <Textarea
                    name={'text'}
                    id={'text'}
                    placeholder={'Inserir Texto'}

                    width={'100%'}
                    height={'300px'}
                />

                <ButtomSubmit width={'200px'}/>
            </form>
        </Container>
    </div>
  )
}


/* height={'550px'} */