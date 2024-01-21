import './styles.css';
import { Link } from "react-router-dom";

export default function PageButtom({ icon, name, path}) {
  return (
    <Link to={path}>
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
    </Link>
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