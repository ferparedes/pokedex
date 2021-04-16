import './SearchBarPokemons.scss';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../redux/actions';
import imgSearch from '../../assets/icons/Search.svg';

function SearchBarPokemons() {    
    const dispatch = useDispatch();

    const handleFilterTextChange = (e) => {
        window.history.pushState({}, "", `/`)
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

        dispatch({ type: ACTIONS.FILTER_POKEMONS, filter: e.target.value })
    }

    return (
        <div className="search-bar">
            <input id="search-txt" placeholder="Search" onChange={handleFilterTextChange} />
            <label htmlFor="search-txt" className="icon"><img src={imgSearch} /></label>
        </div>
    )
}

export default SearchBarPokemons;