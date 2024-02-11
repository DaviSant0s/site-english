import Audio from '../Audio';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Card({image, title, id, text, sentences}) {
  return (
    <div style={{position: 'relative'}}>
          <Audio 
            position={'absolute'} 
            top={'3px'} 
            right={'3px'} 
            width={'45px'} 
            height={'45px'}
          />
        <Link className='Link-card' to='/WordPreview'>
            {image &&
              <div className='card-container image-card' id={id}>
                <span className='card-title'>{title}</span>
                <div className='card-image-container'>
                  <img src={image} alt={title} />
                </div>
              </div>
            }

            {text && 
              <div className='card-container text-card' id={id}>
                <span className='text-title'>{text}</span>
              </div>
            }

        </Link>
      </div>
      
  )
}
