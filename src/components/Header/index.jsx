import './styles.css';

export default function Header() {
  return (
    <div className='header-container'>
        <div className='home'>
            <span class="material-symbols-outlined home-icon">cottage</span>
        </div>
        <div className='word'>
            <span>Word</span>
        </div>
        <div className='text'>
            <span>Text</span>
        </div>
        <div className='sentence'>
            <span>Sentence</span>
        </div>
    </div>
  )
}
