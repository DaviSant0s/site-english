import './styles.css';

export default function PageButtom({ icon, name}) {
  return (
    <div className='PageButtom-container'>
        <div className='PageButtom-icon'>
            <span class="material-symbols-outlined icon">{icon}</span>
        </div>
        <div className='PageButtom-name'>
            <div>
                <span className='name-page'>Inserir {name}</span>
                <span class="material-symbols-outlined arrow-icon">arrow_right_alt</span>
            </div>
        </div>
    </div>
  )
}
