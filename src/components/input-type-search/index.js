import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { InputSearch } from './styled.js'

const InputTypeSearch = () => {
    return (
        <InputSearch >
            <FontAwesomeIcon icon={faMagnifyingGlass} id='search' />
            <input type="search" id="type-pokemon"></input>
            <FontAwesomeIcon icon={faRotateRight} id='all' />
        </InputSearch>
    )
        
}

export { InputTypeSearch }