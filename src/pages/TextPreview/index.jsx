import Container from '../../components/Container';
import './styles.css';
import LongAudio from '../../components/audio/LongAudio';

export default function TextPreview() {
  return (
    <div className='textPreview-container defaultContainerDimension'>
        <Container id={'container-textPreview-component'} >
            <div className='buttons-textPreview-container'>
                <LongAudio id={'audio-TextPreview'}/>
            </div>

            <div className='textPreview-content'>
                <h1>The Little Prince</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quasi vel, ullam distinctio repellendus asperiores, nemo id incidunt, omnis architecto debitis. Molestias eum quam delectus alias soluta, magnam quae distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nihil expedita porro quaerat nesciunt vero, ad rem reiciendis voluptas amet. Unde ea suscipit expedita fugit reiciendis at nisi officiis natus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam repellat natus nisi, dolore accusantium optio repudiandae? Nostrum animi fugiat beatae rerum ratione consequatur, voluptates provident ipsam eaque quis, magnam alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quibusdam officiis quasi ad dolores corrupti perferendis iste expedita culpa, eos nostrum voluptatibus ipsam magni! Officia assumenda dolorum unde totam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum similique, commodi in, mollitia a dolore eum sint rerum excepturi corrupti distinctio at inventore quos fugiat. Deleniti rem deserunt doloremque facere! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quasi vel, ullam distinctio repellendus asperiores, nemo id incidunt, omnis architecto debitis. Molestias eum quam delectus alias soluta, magnam quae distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nihil expedita porro quaerat nesciunt vero, ad rem reiciendis voluptas amet. Unde ea suscipit expedita fugit reiciendis at nisi officiis natus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam repellat natus nisi, dolore accusantium optio repudiandae? Nostrum animi fugiat beatae rerum ratione consequatur, voluptates provident ipsam eaque quis, magnam alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quibusdam officiis quasi ad dolores corrupti perferendis iste expedita culpa, eos nostrum voluptatibus ipsam magni! Officia assumenda dolorum unde totam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum similique, commodi in, mollitia a dolore eum sint rerum excepturi corrupti distinctio at inventore quos fugiat. Deleniti rem deserunt doloremque facere!</p>
            </div>
        </Container>
    </div>
  )
}

{/* <Button id={'translate-button-textPreview'}/> */}