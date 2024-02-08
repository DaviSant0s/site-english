import InputSearch from '../InputSearch';
import InputSelect from '../InputSelect';
import './styles.css';

export default function FilterInput({placeholder, width, height, radius, id, name, idContainer, idSelect}) {
  return (
    <div 
      className='filterInput-container' 
      style={{
        width: `${width}`, 
        height: `${height}`, 
        borderRadius: `${radius}`,
      }} 
      
      id={idContainer}
    >

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
          radius={12}
          id={idSelect}
          options={[
            'All',
            'Relacionamentos',
            'Parentesco',
            'profissões',
            'animais',
            'Relacionamentos',
            'Parentesco',
            'profissões',
            'animais',
            'Relacionamentos',
          ]}
        />
    </div>
  )
}