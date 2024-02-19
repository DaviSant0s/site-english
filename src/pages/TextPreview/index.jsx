import './styles.css';
import Container from '../../components/Container';
import LongAudio from '../../components/audio/LongAudio';
import Button from '../../components/Button';

export default function TextPreview() {
  return (
    <div className='textPreview-container defaultContainerDimension'>
        <Container id={'container-textPreview-component'}>
            <div className='buttons-textPreview-container'>
                <Button id={'translate-button-textPreview'}/>
                <LongAudio/>
            </div>
            <div className='textPreview-content'>
                <h1>The Little Prince</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ipsum doloremque vitae perferendis ipsam hic dolorem labore rerum sunt id voluptatum, repellendus nemo laudantium eligendi nobis facere saepe sit consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam accusamus, beatae officiis aperiam temporibus, quidem corporis illo ratione inventore quod quae assumenda blanditiis ab cumque dolores, quibusdam laborum porro.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus, natus rerum doloremque ratione architecto iste aperiam eum in odio quasi quis et. Ratione ipsum unde quod eum sit illum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga atque saepe accusantium quis suscipit beatae dignissimos obcaecati iusto excepturi expedita a repellendus magnam nobis, officiis perferendis ipsum molestiae deserunt.
                </p>
            </div>
        </Container>
    </div>
  )
}
