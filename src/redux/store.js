import { createStore } from 'redux';
import { ACTIONS } from './actions';

const initialState = {
  search: {
    filter: '',
    totalRows: 0,
    totalFilteredRows: 0,
    currentPage: 1,
    perPage: 9,
    pokemons: [],
    filteredPokemons: []
  },
  selectedPokemon: {

  }
};

const dataSetPokemons = (pokemons, filter, search) => {
  filter = filter.toLowerCase();
  const limit = search.currentPage * search.perPage - 1;
  const offset = limit - search.perPage + 1;

  let dataSet = filter === '' ? pokemons : pokemons.filter((pokemon, index) => {
    return pokemon.name.toLowerCase().indexOf(filter) > -1 || pokemon.id == parseInt(filter)
  });

  dataSet = dataSet.filter((pokemon, index) => index >= offset && index <= limit);

  return Object.assign(dataSet);
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_POKEMONS: {
      return {
        ...state,
        search: { ...state.search, pokemons: action.pokemons, totalRows: action.pokemons.length, totalFilteredRows: action.pokemons.length, filteredPokemons: dataSetPokemons(action.pokemons, state.search.filter, state.search) }
      };
    }
    case ACTIONS.FILTER_POKEMONS: {
      const filter = action.filter.toLowerCase();
      const pokemons = dataSetPokemons(state.search.pokemons, filter, state.search);
      const pokemonsMath = filter === '' ? state.search.pokemons : state.search.pokemons.filter((pokemon, index) => {
        return pokemon.name.toLowerCase().indexOf(filter) > -1 || pokemon.id == parseInt(filter)
      });

      return {
        ...state,
        search: { ...state.search, filteredPokemons: pokemons, filter: filter, totalFilteredRows: pokemonsMath.length, currentPage: 1 }
      }
    }
    case ACTIONS.UPDATE_POKEMON: {
      return {
        ...state,
        search: {
          ...state.search,
          filteredPokemons: (dataSetPokemons(state.search.pokemons, state.search.filter, state.search)),
          pokemons: state.search.pokemons.map(pokemon => {
            if (pokemon.id === action.pokemon.id) {
              pokemon = action.pokemon;
            }
            return pokemon;
          })
        }
      }
    }
    case ACTIONS.SET_PER_PAGE: {
      const pokemons = dataSetPokemons(state.search.pokemons, state.search.filter, { ...state.search, perPage: action.perPage });
      const pokemonsMath = state.search.filter === '' ? state.search.pokemons : state.search.pokemons.filter((pokemon, index) => {
        return pokemon.name.toLowerCase().indexOf(state.search.filter) > -1 || pokemon.id == parseInt(state.search.filter)
      });

      return {
        ...state,
        search: { ...state.search, perPage: action.perPage, filteredPokemons: pokemons, totalFilteredRows: pokemonsMath.length, currentPage: 1 }
      }
    }
    case ACTIONS.SEARCH_NEXT_PAGE: {
      const pokemons = dataSetPokemons(state.search.pokemons, state.search.filter, { ...state.search, currentPage: state.search.currentPage + 1 });
      return {
        ...state,
        search: { ...state.search, currentPage: state.search.currentPage + 1, filteredPokemons: pokemons }
      }
    }
    case ACTIONS.SEARCH_PREV_PAGE: {
      const pokemons = dataSetPokemons(state.search.pokemons, state.search.filter, { ...state.search, currentPage: state.search.currentPage - 1 });
      return {
        ...state,
        search: { ...state.search, currentPage: state.search.currentPage - 1, filteredPokemons: pokemons }
      }
    }
    default:
      return state;
  }
};

const store = createStore(reducers);

export default store;