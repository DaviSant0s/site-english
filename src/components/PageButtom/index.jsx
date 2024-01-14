import './styles.css';

export default function PageButtom({ icon, name}) {
  return (
    <button className='button-pageButtom'>
      <div className='PageButtom-container'>
          <div className='PageButtom-icon'>
              <span className="material-symbols-outlined icon">{icon}</span>
          </div>
          <div className='PageButtom-name'>
              <div>
                  <span className='name-page'>Inserir {name}</span>
                  <span className="material-symbols-outlined arrow-icon">arrow_right_alt</span>
              </div>
          </div>
      </div>
    </button>
  )
}

{/* <div className='PageButtom-container'>
    <div className='PageButtom-icon'>
        <span className="material-symbols-outlined icon">{icon}</span>
    </div>
    <div className='PageButtom-name'>
        <div>
            <span className='name-page'>Inserir {name}</span>
            <span className="material-symbols-outlined arrow-icon">arrow_right_alt</span>
        </div>
    </div>
</div> */}