import InputSearch from '../InputSearch';
import InputSelect from '../InputSelect';
import './styles.css';

export default function FilterInput({placeholder, width, height, radius, id, name, idContainer}) {
  return (
    <div className='filterInput-container' style={{width: `${width}`, height: `${height}`, borderRadius: `${radius}`}} id={idContainer}>
        <InputSearch
            placeholder={placeholder}
            idContainer={'filterInput-inputSearch'}
            id={id}
            name={name}
            height={'100%'}
            width={'100%'}
        />
        <InputSelect
          height={'100%'}
          radius={'12px'}
        />
    </div>
  )
}




{/* <div className='filterInput-inputSelect'>
    <label >
      <span class="material-symbols-outlined filterInput-arrow filterInput-arrow-up">
        expand_less
      </span>
      <span class="material-symbols-outlined filterInput-arrow filterInput-arrow-down">
        keyboard_arrow_down
      </span>
    <select name="teste" id="iteste">
        <option value="Teste1">All</option>
        <option value="Teste2">Teste2</option>
        <option value="Teste3">Teste3</option>
        <option value="Teste4">Teste4</option>
    </select>
    oi
    </label>
   
</div> */}