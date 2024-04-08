import ButtomSubmit from '../../components/ButtomSubmit';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Textarea from '../../components/Textarea';
import { Link } from 'react-router-dom';
import './styles.css';
import InputSearch from '../../components/InputSearch';
import { useEffect, useState } from 'react';
import dado from '../../assets/dado.png'

export default function WordsForm() {
  /* const imageName_Ref = useRef(); */

  const [ imgDisplay, setImgDisplay ] = useState({});
  const [ noImageDisplay, setNoImageDisplay ] = useState({});
  const [ fixedImage, setFixedImage ] = useState('');
  const [ imageLink, setImageLink ] = useState('');
  const [ styleIconLink, setStyleIconLink ] = useState({});
  const [ inputRef, setInputRef ] = useState(null);
  const [ randomImageValue, setRandomImageValue ] = useState('');

  const handleClickSuggestImage = () => {
    console.log(inputRef.current.value);
    setImageLink(`https://source.unsplash.com/800x600/?${inputRef.current.value}?`);
  }

  const getRefInputContainer = (ref) => {
    setInputRef(ref);
  }

  const handleOnload = (e) => {

    setFixedImage(e.target.src)

    setNoImageDisplay({
      display: 'none',
    })

    setImgDisplay({
      display: ''
    });

    setStyleIconLink({
      color: '#13a49d'
    })
    
  }

  const handleOnChangeLink = (e) => {
    setImageLink(e.target.value);
  }

  useEffect(() => {
    if(!imageLink){
      setNoImageDisplay({
        display: '',
      })

      setImgDisplay({
        display: 'none'
      });

      setStyleIconLink({
        color: ''
      })
    }
  }, [imageLink])

  return (
    <div className='WordsForm-container defaultContainerDimension'>
        <Container id={'containerWordForm'}>
          <form action="/Word" method="POST">
            <Logo id={'logoWordsForm'} size={'80px'}/>
            <Input 
              type={'text'} 
              name={'word'} 
              id={'word'} 
              placeholder={'Palavra'} 
              autoComplete={'off'} 
              width={'100%'}
              function_aux={getRefInputContainer}
            /> 

            <Textarea
              name={'sentence'}
              id={'sentence'}
              placeholder={'Frase'}

              width={'100%'}
            />

            <div className='search-image-container-wordforms'>
              <InputSearch
                idContainer={'input-image-link'}
                id={'input-image-link'}
                icon='Link'
                placeholder={'Link da imagem'}
                name={'link'}
                onChange={handleOnChangeLink}
                style_icon={styleIconLink}
              />

              <div onClick={handleClickSuggestImage} className='suggest-image-wordforms'>
                <img src={dado} alt="dado" className='SelectNone' />
              </div>
            </div>

            <div className='image-container-input-wordForm'>
              
              {/* tag auxiliar - não aparece na tela */}
              <img style={{display: 'none'}} onLoad={handleOnload} src={imageLink} alt="" />

              <img style={imgDisplay} src={fixedImage} alt="imagem da palavra" />

              <span style={noImageDisplay}>Nenhuma imagem ainda</span>

            </div>

            <Link to='/words'>
            <ButtomSubmit
              value={'Enviar'}
            />
            </Link>

          </form>
        </Container>
    </div>
  )
}
