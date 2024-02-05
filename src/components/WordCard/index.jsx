import './styles.css';

export default function WordCard({image, title}) {
  return (
    <div className='wordCard-container'>
      <span className='WordCard-title'>{title}</span>
      <div className='WordCard-image-container'>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}
