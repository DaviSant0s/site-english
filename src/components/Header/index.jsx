import './styles.css';

export default function Header() {
  return (
    <div className='header-container'>
        <div className='header-content'>
            <div>

            </div>
            <div className='home link-page'>
                <span className="material-symbols-outlined home-icon">cottage</span>
            </div>
            <div className='word link-page'>
                <span>Words</span>
            </div>
            <div className='text link-page'>
                <span>Texts</span>
            </div>
            <div className='sentence link-page'>
                <span>Sentences</span>
            </div>
        </div>
        <div>
        </div>
    </div>
  )
}
