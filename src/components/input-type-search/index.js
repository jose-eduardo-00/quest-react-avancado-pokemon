import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { InputSearch } from './styled.js'

const InputTypeSearch = () => {
    return (
        <InputSearch >
            <FontAwesomeIcon icon={faMagnifyingGlass} id='search' data-testid="search-icon" />
            <input type="search" id="type-pokemon" data-testid="input"></input>
            <FontAwesomeIcon icon={faRotateRight} id='reload' data-testid="reload-icon" />
        </InputSearch>
    )
        
}

export { InputTypeSearch }