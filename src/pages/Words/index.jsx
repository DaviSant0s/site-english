import FilterInput from '../../components/FilterInput';
import Card from '../../components/Card';
import './styles.css';

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

export default function Words() {
  return (
    <div className='words-container defaultContainerDimension'>
      <h1 className='wordTitle mainTitle'>Words</h1>
      <div className='words-content'>
        
        <FilterInput
          placeholder={'Search'}
          idContainer={'words-input-container'}
          idSelect={'words-input-select'}
        />

        <div className='words-grid-container'>

          {imagesObject.map( item => {
            return(
              <Card
              title={item.name}
              image={item.link}
              id={'Words-card-image'}
          />
            )
          })}


          
        </div>
      </div>
    </div>
  )
}



/* <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          />
          <WordCard
            title={'Microwave'}
            image={'https://i.zst.com.br/thumbs/12/12/2e/-542064200.jpg'}
            id={'Words-card-image'}
          /> */
