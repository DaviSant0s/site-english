import Audio from '../Audio';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Card({image=false, title, id, text=false, sentence=false}) {
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
          </Link>
          
          <Link className='Link-card' to='/WordPreview'>
            {text && 
              <div className='card-container text-card' id={id}>
                <div className='text-title'>{text}</div>
              </div>
            }
          </Link>
          
          <Link className='Link-card' to='/WordPreview'>
            {sentence && 
              <div className='card-container sentence-card' id={id}>
                <div className='sentence-title'>{sentence}</div>
              </div>
            }
          </Link>

      </div>
      
  )
}
