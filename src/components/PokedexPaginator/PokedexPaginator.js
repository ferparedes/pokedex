import './PokedexPaginator.scss';
import { ACTIONS } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

function PokedexPaginator() {
    const search = useSelector(state => state.search);
    const dispatch = useDispatch();
    const handleItemPerPageChange = (e) => {
        dispatch({ type: ACTIONS.SET_PER_PAGE, perPage: e.target.value })
    }
    const getLimit = () => {
        let limit = search.currentPage * search.perPage;
        return limit > search.totalFilteredRows ? search.totalFilteredRows : limit;
    }
    const getOffset = () => {
        const limit = search.currentPage * search.perPage;
        return limit - search.perPage + 1
    }
    const prevPage = () => {
        dispatch({ type: ACTIONS.SEARCH_PREV_PAGE })
    }
    const nextPage = () => {
        dispatch({ type: ACTIONS.SEARCH_NEXT_PAGE })
    }
    return (
        <div className="paginator">            
            <div>
                Pokemons per page
                <select size="1" onChange={handleItemPerPageChange}>
                    <option>9</option>
                    <option>18</option>
                    <option>36</option>
                </select>
            </div>
            <div>
                {search.totalFilteredRows === 0 ? (
                    <div>
                        0 of 0
                    </div>
                ) : (
                    <div className="nav">
                        {getOffset()} - {getLimit()} of { search.totalFilteredRows}
                        {search.currentPage > 1 ? (<span className="arrow" onClick={prevPage}>&lt;</span>) : ''}
                        {(Math.ceil(search.totalFilteredRows / search.perPage) > search.currentPage) ? <span className="arrow" onClick={nextPage}>&gt;</span> : ''}
                    </div>
                )}

            </div>
        </div >
    );
}

export default PokedexPaginator;