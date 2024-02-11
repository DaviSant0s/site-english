import './styles.css';
import FilterInput from '../../components/FilterInput';
import Card from '../../components/Card';

export default function Texts() {
  return (
    <div className='texts-container defaultContainerDimension'>
        <h1 className='TextTitle mainTitle'>Texts</h1>
        <div className='texts-content'>
          <FilterInput
            placeholder={'Search'}
            idContainer={'texts-input-container'}
          />

          <div className='texts-grid-container'>
            <Card
                
              text={'O pequeno príncipe do davi araujo hsavdjhbsachdsvhjdsvbhm'}
            />
          </div>
        </div>
    </div>
  )
}


