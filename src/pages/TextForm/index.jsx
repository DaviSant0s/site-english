import ButtomSubmit from '../../components/ButtomSubmit';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Textarea from '../../components/Textarea';
import './styles.css';

export default function TextForm() {
  return (
    <div className='TextForm-container defaultContainerDimension'>
        <Container width={'80%'}>
            <form action="" method="post">
                <Logo size={'90px'} id={'logoInputText'}/>
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
                />

                <ButtomSubmit width={'200px'} id={'buttomInputText'}/>
            </form>
        </Container>
    </div>
  )
}


/* height={'550px'} */