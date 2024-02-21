import { useEffect, useRef, useState } from 'react';
import Container from '../../components/Container';
import './styles.css';
import Button from '../../components/Button';
import InputSearch from '../../components/InputSearch';
import AudioTag from '../../components/audioTag';
import LongAudio from '../../components/audio/LongAudio'
import Player from '../../components/Audio/Player';
const imagesObject = [
    { 
        id: 1,
        name: 'Microwave',
        link: 'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg',
        sentence: 'He became responsible for the design of microwave mixers, needed in most microwave radar. Eos consequatur qui saepe hic alias explicabo mollitia culpa exercitationem, unde cumque quod officia voluptate, molestiae eius necessitatibus, He became responsible for the design  of microwave mixers, needed in most microwave radar systems.',
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
    const [ indexImage, setIndexImage ] = useState(0);
    const [ image, setImage ] = useState(imagesObject[indexImage].link);
    const progressRef = useRef();

    useEffect(() => {
        progressRef.current.value = indexImage + 1
        
    }, [indexImage])

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

        <div className='wordPreview-grid'>
           <InputSearch
                type={'text'}
                placeholder={'Search'}
                iconSide='right'
                width={'100%'}
            />

        
            <Container id={'wordPreview-containerComponent'}>
                <Player 
                    position={'absolute'} 
                    top={'3px'} 
                    left={'3px'} 
                    fontSize={'1.8em'}
                />

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
                        <div className='progressInput-wordPreview'><input type="range" ref={progressRef} min='1' max={imagesObject.length } /></div>
                    </div>
                    
                    <div className='word-sentence-wordPreview-container'>
                        <div className='word-sentence-wordPreview-content'>
                            <div className='word-sentence'>{imagesObject[indexImage].sentence}</div>
                            <div className='ButtonTranslate-wordPreview-container'>
                                <Button id={'ButtonTranslate-wordPreview'} />
                            </div>
                            <LongAudio id={'audio-sentence-wordPreview'}/>
                        </div>
                        
                    </div>
                </div>
            </Container> 
        </div>

        
    </div>
  )
}