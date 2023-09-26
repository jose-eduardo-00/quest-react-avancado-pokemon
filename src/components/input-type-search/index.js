import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { InputSearch } from './styled.js'
import { getField } from './functions.js'

const InputTypeSearch = () => {
    return (
        <InputSearch >
            <FontAwesomeIcon icon={faMagnifyingGlass} id='input' onClick={() => getField()} />
            <input type="search" id="type-pokemon"></input>
        </InputSearch>
    )
        
}

export { InputTypeSearch }