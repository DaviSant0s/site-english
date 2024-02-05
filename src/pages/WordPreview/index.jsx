import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Input from '../../components/Input';
import './styles.css';
import Button from '../../components/Button';
import InputSearch from '../../components/InputSearch';
const imagesObject = [
    { 
        id: 1,
        name: 'Microwave',
        link: 'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg',
        sentence: 'He became responsible for the design of microwave mixers, needed in most microwave radar systems.',
    },

    
    
    {
        id: 2,
        name: 'Bed',
        link: 'https://mysleepyhead.com/media/catalog/product/q/u/queen_size_wooden_bed_1.jpg',
        sentence: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur qui saepe hic alias explicabo mollitia culpa exercitationem, unde cumque quod officia voluptate, molestiae eius necessitatibus',
    },
    {
        id: 3,
        name: 'Bicycle',
        link: 'https://www.prioritybicycles.com/cdn/shop/products/600_August_2022_angledfront.jpg?v=1663084384&width=1500',
        sentence: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur qui saepe hic alias explicabo mollitia culpa exercitationem, unde cumque quod officia voluptate, molestiae eius necessitatibus',
    },
    {
        id: 4,
        name: 'Car',
        link: 'https://img.freepik.com/fotos-gratis/um-muscle-car-azul-e-preto-com-a-placa-que-diz-trans-na-frente_1340-23399.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699142400&semt=ais',
        sentence: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur qui saepe hic alias explicabo mollitia culpa exercitationem, unde cumque quod officia voluptate, molestiae eius necessitatibus',
    },
    
    {
        id: 5,
        name: 'House',
        link: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
        sentence: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur qui saepe hic alias explicabo mollitia culpa exercitationem, unde cumque quod officia voluptate, molestiae eius necessitatibus',
    }
];


export default function WordPreview() {
    const [ audio, setAudio ]  = useState(false);
    const [ indexImage, setIndexImage ] = useState(0);
    const [ image, setImage ] = useState(imagesObject[indexImage].link);

    const handleClickAudio = () => {
        setAudio(s => !s);
    }

    const handleClickNextImage = () => {
        if (indexImage >= imagesObject.length - 1){
            /* setIndexImage( s => 0); */
            return;
        }

        setIndexImage( s => s + 1)
    }

    const handleClickPreviousImage = () => {

        if (indexImage <= 0){
            /* setIndexImage( s => 4); */
            return;
        }

        setIndexImage( s => s - 1)
    }

    useEffect(() => {
        setImage(s => imagesObject[indexImage].link);
    }, [indexImage])


  return (
    <div className='wordPreview-container defaultContainerDimension'>
        <InputSearch
            type={'text'}
            placeholder={'Search'}
            iconSide='left'
        />
        
        <Container id={'wordPreview-containerComponent'}>
            <span onClick={handleClickAudio} className='icon-audio-wordPreview'>
                <span className="material-symbols-outlined ">
                    {audio ? 'volume_up' : 'volume_off'}
                </span>
            </span>
            <div className='wordPreview-content'>

                

                <div className='word-image-wordPreview'>
                    <h1 className='title-wordPreview'>{imagesObject[indexImage].name}</h1>
                    <div className='image-wordPreview-container'>
                        <span onClick={handleClickPreviousImage} className="material-symbols-outlined arrow-image-wordPreview-left">chevron_left</span>
                        <div className='image-wordPreview'>
                            <img src={image} alt="microwave" />
                            {/* <Loading /> */}
                        </div>
                        <span onClick={handleClickNextImage} className="material-symbols-outlined arrow-image-wordPreview-right">chevron_right</span>
                    </div>
                    <div className='progressInput-wordPreview'><input type="range" min='1' max={imagesObject.length } value={indexImage + 1}/></div>
                </div>
                
                <div className='word-sentence-wordPreview-container'>
                    <div className='word-sentence-wordPreview-content'>
                        <div>{imagesObject[indexImage].sentence}</div>
                        <audio className='audio-sentence-wordPreview' src='' controls autoPlay></audio>
                        <Button id={'ButtonTranslate-wordPreview'} />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}